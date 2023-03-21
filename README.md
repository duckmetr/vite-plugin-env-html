# vite-plugin-env-html

A vite plugin for env variables in html file

### install

```sh
npm i vite-plugin-env-html -D
```

### usage

`vite.config.js`

```js
import { defineConfig, loadEnv } from 'vite'
import htmlPlugin from 'vite-plugin-env-html'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [htmlPlugin(env)]
  }
})
```

`.env`

```
VITE_APP_NAME=awesome
```

`index.html`

```html
<title>%VITE_APP_NAME%</title>
```
