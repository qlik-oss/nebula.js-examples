import enigma from "enigma.js";
import schema from "enigma.js/schemas/12.936.0.json";
import { Auth, AuthType } from "@qlik/sdk";

/** Auth Object for nebula */
export class OAuth {
  #url = null;
  #host = null;
  #appId = null;
  #webIntegrationId = null;
  authInstance = null;

  /**
   *
   * @param {String} appId             - application id from sense client
   * @param {Strign} url               - tenant url
   * @param {Strign} webIntegrationId  - your web Integration Id from managment console
   */
  constructor({ appId, url, webIntegrationId }) {
    this.#url = url;
    this.#appId = appId;
    this.#host = url.replace(/^https?:\/\//, "").replace(/\/?/, "");
    this.#webIntegrationId = webIntegrationId;
  }

  /**
   * gets you the promise of enigma instance for your app
   * based on webIntegrationId
   * @returns {Promise<IEnigmaClass>} enigma app promise
   */
  async getAppWithWebIntegration() {
    const isLoggedIn = await this.#handleOpenConnection(this.#webIntegrationId);

    if (!isLoggedIn) this.authInstance.authenticate();
    else return this.#getEnigmaApp();
  }

  /**
   * gets you the promise of enigma instance for your app
   * based on CSRF token
   * @returns {Promise<IEnigmaClass>} enigma app promise
   */
  async getAppWithCSRFToken() {
    const headers = await this.#getQCSHeaders();
    return this.#getEnigmaApp(headers);
  }

  /**
   *
   * @param {String} webIntegrationId - web Integration Id
   * @returns boolean if user is logged in or not
   */
  async #handleOpenConnection(webIntegrationId) {
    this.authInstance = new Auth({
      host: this.#host,
      webIntegrationId,
      autoRedirect: true,
      authType: AuthType.WebIntegration,
    });
    this.wsUrl = await this.authInstance.generateWebsocketUrl(this.#appId);
    return this.authInstance.isAuthenticated();
  }

  /**
   *
   * @param {Object} headers                          - Object of headers if passed any
   * @param {Object} headers.qlik-web-integration-id  - web Integration Id in header
   * @param {Object} headers.qlik-csrf-token          - csrf token resulted from api call to `/api/v1/csrf-token`
   * @returns {Promise<IEnigmaClass>} enigma app instance promise
   */
  async #getEnigmaApp(headers = {}) {
    let url = "";

    if (Object.keys(headers).length) {
      const params = Object.keys(headers)
        .map((key) => `${key}=${headers[key]}`)
        .join("&");
      url = `wss://${this.#host}/app/${this.#appId}?${params}`;
    } else url = this.wsUrl;

    const enigmaGLobal = await enigma.create({ schema, url }).open();
    return enigmaGLobal.openDoc(this.#appId);
  }

  /**
   * gets required headers for embedding in enigma url
   * @returns {Object} Object of headers for embedding in enigma instance
   */
  async #getQCSHeaders() {
    const response = await fetch(`${this.#url}/api/v1/csrf-token`, {
      credentials: "include",
      mode: "cors",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
        "qlik-web-integration-id": this.#webIntegrationId,
      },
    });
    if (response.status === 401) {
      const loginUrl = new URL(`${this.#url}/login`);
      loginUrl.searchParams.append("returnto", window.location.href);
      loginUrl.searchParams.append(
        "qlik-web-integration-id",
        this.#webIntegrationId
      );
      window.location.href = loginUrl;
      return undefined;
    }
    const csrfToken = new Map(response.headers).get("qlik-csrf-token");
    return {
      "qlik-web-integration-id": this.#webIntegrationId,
      "qlik-csrf-token": csrfToken,
    };
  }
}
