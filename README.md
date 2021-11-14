# Vue3 Node Boilerplate

[![.github/workflows/deploy-to-ecs.yml](https://github.com/realkimmy/vue3-node-boilerplate/actions/workflows/deploy-to-ecs.yml/badge.svg?branch=ssr-mpa)](https://github.com/realkimmy/vue3-node-boilerplate/actions/workflows/deploy-to-ecs.yml)

## API Documentation

To view the list of available APIs and their specifications, run the server and go to `http://localhost:3000/v1/docs` in your browser. This documentation page is automatically generated using the [swagger](https://swagger.io/) definitions written as comments in the route files.

### API Endpoints

List of available routes:

**Auth routes**:\
`POST /v1/auth/register` - register\
`POST /v1/auth/login` - login\
`POST /v1/auth/refresh-tokens` - refresh auth tokens\
`POST /v1/auth/forgot-password` - send reset password email\
`POST /v1/auth/reset-password` - reset password\
`POST /v1/auth/send-verification-email` - send verification email\
`POST /v1/auth/verify-email` - verify email

**User routes**:\
`POST /v1/users` - create a user\
`GET /v1/users` - get all users\
`GET /v1/users/:userId` - get user\
`PATCH /v1/users/:userId` - update user\
`DELETE /v1/users/:userId` - delete user

**Role routes**:\
`POST /v1/roles` - create a role\
`GET /v1/roles` - get all roles\
`GET /v1/roles/:roleId` - get role\
`PATCH /v1/roles/:roleId` - update role\
`DELETE /v1/roles/:roleId` - delete role

**Permission routes**:\
`POST /v1/permissions` - create a permission\
`GET /v1/permissions` - get all permissions\
`GET /v1/permissions/:permissionId` - get permission\
`PATCH /v1/permissions/:permissionId` - update permission\
`DELETE /v1/permissions/:permissionId` - delete permission

**RolePermission routes**:\
`POST /v1/role/permissions` - create a role permission\
`GET /v1/role/permissions` - get all role permissions\
`GET /v1/role/permissions/roles/:roleId` - get role permissions\
`GET /v1/role/permissions/:rolePermissionId` - get role permission\
`PATCH /v1/role/permissions/:rolePermissionId` - update role permission\
`DELETE /v1/role/permissions/:rolePermissionId` - delete role permission

**UserRolePermission routes**:\
`POST /v1/user/roles` - create a user role permission\
`GET /v1/user/roles` - get all user role permissions\
`GET /v1/user/roles/users/:userId` - get user role permissions\
`GET /v1/user/roles/:userRolePermissionId` - get user role permission\
`PATCH /v1/user/roles/:userRolePermissionId` - update user role permission\
`DELETE /v1/user/roles/:userRolePermissionId` - delete user role permission

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn start
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Deployment

This project is deployed on [Vercel](https://vercel.com/).
