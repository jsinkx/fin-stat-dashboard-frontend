# Financial Statistics Dashboard Frontend
---

## [Available production](https://fin-stat-dashboard.vercel.app)

## Installation

1. [`Node.js`](https://nodejs.org/) `LTS`
2. [`npm`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or [`yarn`](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
3. [`git`](https://git-scm.com/)
4. Install all dependencies (see below)

```sh
cd fin-stat-dashboard-frontend
npm i
# or
yarn install
```

## Using
- To test dashboard, you can download [example data](https://althgamer.ru/storage/example-data.xlsx) or [extended example data](https://althgamer.ru/storage/example-data-updated.xlsx)
- And upload on `home page`
- For a detailed review, you can open area chart or bar chart
- Also if too much data in bubble chart, you can expand by group bubble (named "...") 

## Mode development
`npm start` 

## Mode production
`npm install -g serve`
`npm run build`
`serve -s build`

## Stack
- Typescript
- React
- react-router-dom
- react-spinners
- react-toastify
- Axios
- Redux Toolkit
- SASS
- Chart.js / react-chartjs-2

## Application routes
| Route                 | Access                       | Description                       |
|-----------------------|------------------------------|-----------------------------------|
| `/`                   | `All`                        | Home page                         |    
| `/dashboard`          | `All`                        | Dashboard page with example data  |
| `/dashboard/v2`       | `All`                        | Mockup (prank) page               |
| `/dashboard/uploaded` | `Only if data uploaded`      | Dashboard page with uploaded data |

## Configuration
Backend address is located in `./src/shared/config.ts` as `address`
htaccess config file is located in `./public/.htaccess`

*Frontend and backend must be on the same protocols*
*Both are either on `https` or `http`, otherwise requests will be blocked*