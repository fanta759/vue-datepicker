## @waf2.0/vue-datepicker


### The most complete datepicker solution for Vue 3

[![License](https://img.shields.io/npm/l/@waf2.0/vue-datepicker)](https://github.com/fanta759/vue-datepicker/blob/main/LICENSE) [![npm](https://img.shields.io/npm/v/@waf2.0/vue-datepicker)](https://www.npmjs.com/package/@waf2.0/vue-datepicker) ![Downloads](https://img.shields.io/npm/dm/@waf2.0/vue-datepicker) [![Open issues](https://img.shields.io/github/issues-raw/fanta759/vue-datepicker)](https://github.com/fanta759/vue-datepicker/issues) ![CI](https://img.shields.io/github/actions/workflow/status/fanta759/vue-datepicker/node.js.yml?branch=main&label=CI) ![Release date](https://img.shields.io/github/release-date/fanta759/vue-datepicker)




[DOCUMENTATION](https://vue3datepicker.com/)


[StackBlitz Playground](https://stackblitz.com/edit/vuepic-vue-datepicker?file=src%2Fcomponents%2FPlayground.vue)

## Features

- Single date picker
- Range date picker
- Time picker
- Month picker
- Year picker
- Week picker
- Multiple dates select
- Multiple calendars
- Text input
- UTC support
- Timezones
- Locale support
- Week numbers
- Custom `v-model`
- Dark and light theme
- SSR support
- Highly configurable
- Accessible
- Included type definitions

## Install

```shell
yarn add @waf2.0/vue-datepicker

# or

npm install @waf2.0/vue-datepicker
```

Import and register component

**Global**

```js
import { createApp } from 'vue';
import App from './App.vue';

import VueDatePicker from '@waf2.0/vue-datepicker';
import '@waf2.0/vue-datepicker/dist/main.css';

const app = createApp(App);
app.component('VueDatePicker', VueDatePicker);
```

**Local**

```vue
<script>
    import VueDatePicker from '@waf2.0/vue-datepicker';
    import '@waf2.0/vue-datepicker/dist/main.css';
    
    export default {
        components: { VueDatePicker }
    }
</script>
```

## Supporting the project

As you may know, maintaining an open-source project is a very time-consuming job. Your support is very appreciated ❤️

Please ⭐️ this repository if you like the component!

You can also make a financial contribution via sponsoring this project or one time donation. [Become a sponsor](https://github.com/sponsors/Vuepic)

Special thanks to our sponsors 🙏

<a href="https://hapio.io/" target="_blank">
    <img src="https://avatars.githubusercontent.com/u/99868704?s=200&v=4" width="80" alt="Hapio">
</a>

## License

Copyright © 2021-present [Fanta759](https://github.com/Fanta759)

[MIT](https://github.com/fanta759/vue-datepicker/blob/master/LICENSE)
