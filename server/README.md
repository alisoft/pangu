# @pangu/server

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

