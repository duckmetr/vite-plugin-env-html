const htmlPlugin = (env) => {
  return {
    name: 'html-transform',
    transformIndexHtml(html) {
      return html.replace(/%(.*?)%/g, function (_, p1) {
        return env[p1]
      })
    }
  }
}

export default htmlPlugin
