# ESLINT & Prettier SETUP

yarn eslint --init

copy .prettierrc and .eslintrc.cjs from other repository

create lint script on package.json: eslint .

# Tailwind Setup

yarn add tailwindcss postcss autoprefixer

yarn tailwind init -p

Setup tailwind.config.cjs: add content to watch

Setup /src/styles/global.css

import './styles/global.css' on App.tsx
