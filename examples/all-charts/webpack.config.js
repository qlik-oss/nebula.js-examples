const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CompressionWebpackPlugin = require("compression-webpack-plugin");

module.exports = ({ env }) => ({
  target: "web",
  mode: env === "dev" ? "development" : "production",
  devtool: "inline-source-map",

  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]__[hash:6].bundle.js",
    sourceMapFilename: "[name]__[hash:6].map",
    chunkFilename: "[name]__[hash:6].bundle.js",
    publicPath: "/",
  },

  resolve: {
    extensions: [".js"],
  },

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },

  module: {
    rules: [
      {
        // js files
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        // css files
        test: /\.css$/,
        use: [MiniCSSExtractPlugin.loader, "css-loader"],
      },
    ],
  },

  optimization: {
    minimize: false,
    splitChunks: {
      chunks: "all",
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        reactVendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: "react-vendor",
          chunks: "all",
        },
        materialUIVendor: {
          test: /[\\/]node_modules[\\/](@material-ui)[\\/]/,
          name: "@material-ui-vendor",
          chunks: "all",
        },
        shared: {
          test: /[\\/]node_modules[\\/]/,
          name(module, _, cacheGroupKey) {
            const moduleFileName = module
              .identifier()
              .split("/")
              .reduceRight((item) => item);
            return `${cacheGroupKey}~${moduleFileName}`;
          },
          chunks: "all",
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },

  plugins: [
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "src/index.html"),
    }),

    new MiniCSSExtractPlugin({
      filename: "styles.css",
    }),

    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerPort: 1235,
      defaultSizes: "stat",
    }),

    new CompressionWebpackPlugin({
      algorithm: "gzip",
      test: /\.(js|css)$/,
    }),
  ],

  devServer: {
    compress: true,
    open: false,
    port: 1234,
  },
});
