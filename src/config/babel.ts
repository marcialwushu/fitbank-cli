export const babel = `
module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
        [
          
        "@babel/preset-react",
          {
            "modules": false,
            "target": {
              "browsers": [
                "last 2 Chrome versions",
                "last 2 Firefox versions",
                "last 2 Safari versions",
                "last 2 Ios versions",
                "last 1 Android versions",
                "last 1 ChromeAndroid versions",
                "ie 11"
              ]
            }
          }
        ],
      "@babel/preset-typescript",
        "@babel/preset-env"
    ],
    plugins: [
      "@babel/plugin-proposal-object-rest-spread"
    ]
  }
}
`