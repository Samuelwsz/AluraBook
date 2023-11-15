```
pnpm install -D tailwindcss postcss autoprefixer
```
```
npx tailwindcss init -p
```
```
pnpm install @headlessui/react@latest
```
```
pnpm install @heroicons/react
```
```
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
crie um arquivo global.css
```
@tailwind base;
@tailwind utilities;
@tailwind components;
```
e importe o global.css no arquivo princial
```
import "./global.css"
```




[Link projeto](https://alura-book-swart.vercel.app/)
