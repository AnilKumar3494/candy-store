// Learn more https://docs.expo.io/guides/customizing-metro
//for firebase to work properly


const { getDefaultConfig } = require("@expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.assetExts.push("cjs");

module.exports = defaultConfig;
