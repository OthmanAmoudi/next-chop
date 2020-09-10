require("dotenv").config();
const { BRANCH, GRAPHCMSURL, GRAPHCMSPROJECT } = process.env;
const widthCSS = require("@zeit/next-css");

module.exports = widthCSS({
  publicRuntimeConfig: {
    graphcms: {
      BRANCH,
      GRAPHCMSURL,
      GRAPHCMSPROJECT,
    },
  },
});
