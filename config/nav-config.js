const innerList = [
  "TestNet",
  "Blockchain Browser",
  "Join Profit Ark",
  "WhitePaper",
  "EcoWhitePaper",
  "home"
]
// const innerDit = {
//   "WhitePaper",
//   "EcoWhitePaper",
//   "home",
// }
const outerDit = {
  "join profit ark": "https://ark.crust.network/",
  "csmtoken": "https://csm.crust.network/#/cru/auto",
  github: "https://github.com/crustio",
  twitter: "https://twitter.com/CrustNetwork",
  medium: "https://medium.com/@CrustNetwork",
  telegram: "https://t.me/CrustNetwork",
  explorer: "http://explorer.crust.network/",
  "crust apps": "https://apps.crust.network/",
  "blockchain browser": "https://crust.subscan.io/",
  pdfBucket:
    "https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/whitepapers/",
  clouden: "https://github.com/crustio/crust/wiki/Crust-Cloud-Testing-Guide",
  cloud: "https://github.com/crustio/crust/wiki/Crust-Cloud-%E6%B5%8B%E8%AF%95%E6%89%8B%E5%86%8C",
  learnMore: "https://github.com/crustio/crust"
}
const outerList = Object.keys(outerDit)
module.exports = {
  innerList,
  outerDit,
  outerList,
}
