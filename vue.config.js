module.exports = {
  devServer: {
    port: 1337,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        ws: true,
        changeOrigin: true
      }
    }
  },
  baseUrl: "/devoxx-jigsaw-webapp/",
  outputDir: "docs"
};
