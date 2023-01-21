// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  modules: [],
  css: [
    "pretendard/dist/web/variable/pretendardvariable.css",
    "pretendard/dist/web/static/pretendard.css",
  ],
});
