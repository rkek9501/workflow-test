This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development Nextjs server:
```bash
npm run dev
# or
yarn dev
```
- Nextjs server run on `3001` Port with `NODE_ENV=development`


and, Run Http server:

```bash
npm run ts-node
# or
yarn ts-node
```
- Http server run on `3000` Port with `NODE_ENV=development`

You can use Only Http server on `3000` Port (without Nextjs server)

Open [http://localhost:3000](http://localhost:3000) or [http://localhost:3001](http://localhost:3001) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

------
## Run Lint
```bash
# Lint Client
npm run lint-client
# or
yarn lint-client

# Lint Server
npm run lint-server
# or
yarn lint-server

# Lint All
npm run lint
# or
yarn lint
```
------
## Run Storybook
```bash
npm run storybook
# or
yarn storybook
```
------
## Run Test
```bash
npm run test
# or
yarn test

# and Update Test Snapshots 
npm run test-update
# or
yarn test-update
```