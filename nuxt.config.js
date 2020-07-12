export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: "Crust-Chain to Decentralized Cloud - Crust.network",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "Crust Network, Storage, Crust, Blockchain, Decentralized Storage, Cru, Privacy Protection, Provacy Data, IPFS",
      },
      { name: "robots", content: "all" },
      { name: "author", content: "Crust, crust, Crust Network" },
      {
        hid: "description",
        name: "description",
        content:
          "CRUST implements the incentive layer protocol for decentralized storage. It is adaptable to multiple storage layer protocols such as IPFS, and provides support for the application layer. ",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_1432256_b1321qx6myb.css",
      },
    ],
    script: [
      { src: `//at.alicdn.com/t/font_1432256_b1321qx6myb.js`, async: true },
      {
        src: `https://www.googletagmanager.com/gtag/js?id=UA-160270407-1`,
        async: true,
      },
      {
        // Global site tag (gtag.js) - Google Analytics
        type: "text/javascript",
        // GA_MEASUREMENT_ID 替换为你刚刚注册得到的媒体资源ID
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-160270407-1');
        `,
      },
    ],
    __dangerouslyDisableSanitizers: ["script"],
  },
  /*
   ** Global CSS
   */
  css: ["~assets/scss/global.scss", "~assets/fonts/nasalization/font.css"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    "~/plugins/i18n.js",
    "~/plugins/clipboard2.js",
    { src: "~/plugins/vue-pdf.js", ssr: false },
  ],
  router: {
    middleware: "i18n",
  },
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // "@nuxtjs/eslint-module",
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/style-resources",
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extend(config, ctx) {
      config.output.globalObject = "this"
      config.module.rules.push({
        test: /\.pdf$/,
        loader: "url-loader",
      })
    },
  },
  styleResources: {
    scss: [
      "./assets/scss/*.scss",
      "node_modules/bootstrap/scss/bootstrap.scss",
      "node_modules/bootstrap-vue/src/index.scss",
    ],
  },
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false, // Or `bvCSS: false`
    icon: true,
  },
  loading: {
    color: '#eb761c',
    height: '4px',
    css: {
      zIndex: 1000
    }
  }
}
