# Pangu

[![.github/workflows/deploy-to-azure.yml](https://github.com/see/pangu/actions/workflows/deploy-to-azure.yml/badge.svg?branch=main)](https://github.com/see/pangu/actions/workflows/deploy-to-azure.yml)
[![.github/workflows/deploy-to-pages.yaml](https://github.com/see/pangu/actions/workflows/deploy-to-pages.yaml/badge.svg?branch=main)](https://github.com/see/pangu/actions/workflows/deploy-to-pages.yaml)
[![.github/workflows/deploy-to-pages-app.yaml](https://github.com/see/pangu/actions/workflows/deploy-to-pages-app.yaml/badge.svg?branch=main)](https://github.com/see/pangu/actions/workflows/deploy-to-pages-app.yaml)
[![.github/workflows/deploy-to-pages-desktop.yaml](https://github.com/see/pangu/actions/workflows/deploy-to-pages-desktop.yaml/badge.svg?branch=main)](https://github.com/see/pangu/actions/workflows/deploy-to-pages-desktop.yaml)
[![.github/workflows/release-android.yml](https://github.com/see/pangu/actions/workflows/release-android.yml/badge.svg?branch=main)](https://github.com/see/pangu/actions/workflows/release-android.yml)
[![.github/workflows/release-desktop.yml](https://github.com/see/pangu/actions/workflows/release-desktop.yml/badge.svg?branch=main)](https://github.com/see/pangu/actions/workflows/release-desktop.yml)
[![.github/workflows/release-ios.yml](https://github.com/see/pangu/actions/workflows/release-ios.yml/badge.svg?branch=main)](https://github.com/see/pangu/actions/workflows/release-ios.yml)
[![Website](https://img.shields.io/website?url=https://pangu.kimmy.me)](https://pangu.kimmy.me)

## API Documentation

To view the list of available APIs and their specifications, run the server and go to `http://localhost:3000/api/docs` in your browser. This documentation page is automatically generated using the [swagger](https://swagger.io/) definitions written as comments in the route files.

### API Endpoints

List of available routes:

**Auth routes**:\
`POST /api/auth/register` - register\
`POST /api/auth/login` - login\
`POST /api/auth/refresh-tokens` - refresh auth tokens\
`POST /api/auth/forgot-password` - send reset password email\
`POST /api/auth/reset-password` - reset password\
`POST /api/auth/send-verification-email` - send verification email\
`POST /api/auth/verify-email` - verify email

**User routes**:\
`POST /api/users` - create a user\
`GET /api/users` - get all users\
`GET /api/users/:userId` - get user\
`PATCH /api/users/:userId` - update user\
`DELETE /api/users/:userId` - delete user

**Role routes**:\
`POST /api/roles` - create a role\
`GET /api/roles` - get all roles\
`GET /api/roles/:roleId` - get role\
`PATCH /api/roles/:roleId` - update role\
`DELETE /api/roles/:roleId` - delete role

**Permission routes**:\
`POST /api/permissions` - create a permission\
`GET /api/permissions` - get all permissions\
`GET /api/permissions/:permissionId` - get permission\
`PATCH /api/permissions/:permissionId` - update permission\
`DELETE /api/permissions/:permissionId` - delete permission

**RolePermission routes**:\
`POST /api/role/permissions` - create a role permission\
`GET /api/role/permissions` - get all role permissions\
`GET /api/role/permissions/roles/:roleId` - get role permissions\
`GET /api/role/permissions/:rolePermissionId` - get role permission\
`PATCH /api/role/permissions/:rolePermissionId` - update role permission\
`DELETE /api/role/permissions/:rolePermissionId` - delete role permission

**UserRolePermission routes**:\
`POST /api/user/roles` - create a user role permission\
`GET /api/user/roles` - get all user role permissions\
`GET /api/user/roles/users/:userId` - get user role permissions\
`GET /api/user/roles/:userRolePermissionId` - get user role permission\
`PATCH /api/user/roles/:userRolePermissionId` - update user role permission\
`DELETE /api/user/roles/:userRolePermissionId` - delete user role permission

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

This project is deployed on [Azure](https://azure.microsoft.com/).
