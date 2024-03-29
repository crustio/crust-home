export default {
  server: {
    port: 8888,
  },
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  // target: "http://192.168.50.7:18081",
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
          "Crust Network, Storage, Crust Blockchain, Decentralized Storage, CRU, Privacy Protection, Privacy Data," +
          " IPFS",
      },
      { name: "robots", content: "all" },
      { name: "author", content: "Crust Network" },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'crust.network'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'crust.network'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://miro.medium.com/max/1200/2*mnCYZfHmLg2bFrjM3vKtPw.png'
      },
      {
        hid: "description",
        name: "description",
        content:
          "CRUST implements the incentive layer protocol for decentralized storage. It is adaptable to multiple storage layer protocols such as IPFS, and provides support for the application layer. ",
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          "CRUST implements the incentive layer protocol for decentralized storage. It is adaptable to multiple storage layer protocols such as IPFS, and provides support for the application layer. ",
      },
      {
        name: 'twitter:card',
        content: 'summary'
      },
      {
        name: 'twitter:title',
        content: 'Home | crust.network'
      },
      {
        name: 'twitter:site',
        content: '@CrustNetwork'
      },
      {
        name: 'twitter:creator',
        content: '@CrustNetwork'
      },
      {
        name: 'twitter:image',
        content: 'https://miro.medium.com/max/1200/2*mnCYZfHmLg2bFrjM3vKtPw.png'
      },
      {
        name: 'twitter:description',
        content:
          "CRUST implements the incentive layer protocol for decentralized storage. It is adaptable to multiple storage layer protocols such as IPFS, and provides support for the application layer. ",
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_1432256_b1321qx6myb.css",
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Orbitron&display=swap",
      },
    ],
    script: [
      { src: `//at.alicdn.com/t/font_1432256_b1321qx6myb.js`, async: true },
      { src: `https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js` },
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
      {
        // Global site tag (gtag.js) - Google Analytics
        type: "text/javascript",
        // GA_MEASUREMENT_ID 替换为你刚刚注册得到的媒体资源ID
        innerHTML: `(function(){
          function w () {
            var r = document.documentElement;
            var a = r.getBoundingClientRect().width;
            if(a>1139){
              return
            }
            if (a > 750) {
              a = 750;
            };
            rem = a / 26.666;
            console.log(r.style)
            r.setAttribute('style', 'font-size: '+rem + 'px!important');
            console.log(rem)
          };
          var t;
          w();
        })();`,
      },
    ],
    __dangerouslyDisableSanitizers: ["script"],
  },
  /*
   ** Global CSS
   */
  css: [
    "~assets/scss/global.scss",
    "~assets/fonts/nasalization/font.css",
    "~assets/fonts/inter/inter.css",
    "~assets/fonts/orbitron/orbitron.css",
    "~assets/fonts/SourceHanSans/hansans.css",
    "~assets/fonts/FONT-Montserrat/Montserrat.css",
    "~assets/scss/mailchimp.css"
    // store.state.locale=='en'? "~assets/fonts/FONT-Montserrat/Montserrat.css":"~assets/fonts/SourceHanSans/hansans.css"
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    // { src: "~/utils/rem.js", ssr: false },
    "~/plugins/i18n.js",
    "~/plugins/clipboard2.js",
    "~/plugins/vue-awesome-swiper.js",
    { src: "~/plugins/vue-pdf.js", ssr: false }
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
    "@nuxtjs/svg",
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
    "vue-scrollto/nuxt",

    // Or if you have custom options...
    [
      "vue-scrollto/nuxt",
      {
        duration: 500,
        container: "body",
        easing: "ease",
        offset: 100,
        force: true,
        cancelable: true,
        onStart: false,
        onDone: false,
        onCancel: false,
        x: false,
        y: true,
      },
    ],
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true,
  },
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
    color: "#FF6400",
    height: "4px",
    css: {
      zIndex: 1000,
    },
  },
}
