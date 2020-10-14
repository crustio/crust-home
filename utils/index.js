const navConfig = require("../config/nav-config")
module.exports = function jumpTo(navName) {
  navName = navName.toLocaleLowerCase()
  console.log(navConfig.outerDit[navName])
  window.open(navConfig.outerDit[navName], "_blank")
}
