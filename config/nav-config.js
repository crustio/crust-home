const innerList = [
  "AlphaNet",
  "Blockchain Browser",
  "Join AlphaNet",
  "WhitePaper",
  "EcoWhitePaper",
  "home",
]
// const innerDit = {
//   "WhitePaper",
//   "EcoWhitePaper",
//   "home",
// }
const outerDit = {
  joinalphanet: "https://github.com/crustio/crust/wiki/Join-Crust-Alphanet",
  github: "https://github.com/crustio",
  twitter: "https://twitter.com/CrustNetwork",
  medium: "https://medium.com/@CrustNetwork",
  telegram: "https://t.me/CrustNetwork",
  explorer: "http://explorer.crust.network/",
  "blockchain browser": "http://explorer.crust.network/",
  "join alphanet": "https://github.com/crustio/crust/wiki/Join-Crust-Alphanet",
}
const outerList = Object.keys(outerDit)
module.exports = {
  innerList,
  outerDit,
  outerList,
}
