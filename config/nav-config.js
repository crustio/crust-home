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
  "join alphanet": "https://github.com/crustio/crust/wiki/Maxwell-1.0-User-Guide",
  "join alphaneten": "https://github.com/crustio/crust/wiki/Maxwell-1.0-User-Guide",
  "join alphanetzh": "https://github.com/crustio/crust/wiki/Maxwell-1.0-%E7%94%A8%E6%88%B7%E6%8C%87%E5%8D%97",
  github: "https://github.com/crustio",
  twitter: "https://twitter.com/CrustNetwork",
  medium: "https://medium.com/@CrustNetwork",
  telegram: "https://t.me/CrustNetwork",
  explorer: "http://explorer.crust.network/",
  "crust apps": "http://apps.crust.network/",
  "blockchain browser": "http://explorer.crust.network/",
}
const outerList = Object.keys(outerDit)
module.exports = {
  innerList,
  outerDit,
  outerList,
}
