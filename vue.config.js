const registerRouter = require("./backend/router");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import '@/assets/scss/variable.scss';
          @import '@/assets/scss/mixin.scss';
        `
      }
    }
  },
  devServer: {
    before(app) {
      registerRouter(app);
    }
  },
  chainWebpack: config => {
    config
      .plugin("bundle")
      .use(
        new BundleAnalyzerPlugin({
          analyzerMode: "disabled",
          generateStatsFile: true,
          statsOptions: {
            source: false
          }
        })
      );
  }
};
