# Module Federation

## How to use

Run the following command in the each directory.

```bash
npm i
```

Run the following commands in the root directory.

```bash
yarn
yarn start
```

Both `app1`, `api` & `components` are independently deployed apps:

- `app1`: http://localhost:3000 - main app
- `api`: http://localhost:3001 - redux store & api services
- `components`: http://localhost:3002 - reusable components

Check out this link below for more examples:

[https://github.com/module-federation/module-federation-examples](https://github.com/module-federation/module-federation-examples)
