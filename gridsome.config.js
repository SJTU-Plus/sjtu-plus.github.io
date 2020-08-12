module.exports = {
  siteName: 'SJTU-Plus 学科交流群',
  icon: 'src/assets/favicon.png',
  plugins: [
    { use: 'gridsome-plugin-typescript' },
  ],
  templates: {
    Category: '/category/:id',
  },
  afterBuild ({ redirects }) {
    redirects.push({
      from: "/",
      to: "/category/-1",
      status: 200
    })
  }
}
