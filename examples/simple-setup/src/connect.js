import { OAuth } from "./OAuth";

export const CONNECTION_TYPES = {
  OAUTH: "oAuth",
  CSRF_TOKEN: "csrf-token",
};

export default async function connect({
  url,
  webIntegrationId,
  appId,
  connectionType,
}) {
  const OAuthInstance = new OAuth({ url, appId, webIntegrationId });

  switch (connectionType) {
    case CONNECTION_TYPES.OAUTH: {
      return await OAuthInstance.getAppWithWebIntegration();
    }

    case CONNECTION_TYPES.CSRF_TOKEN:
    default: {
      return await OAuthInstance.getAppWithCSRFToken();
    }
  }
}
