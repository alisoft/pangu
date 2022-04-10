## Axios Typescript 使用说明

目前推荐封装请求方法直接使用 `src/utils/request.ts`  
使用案例如下：

#### GET

```ts
async function getUser(id: number) {
  return request.get<id, UserInfo>(`/user/${id}`);
}
// 返回结果为
// Promise<UserInfo>
```

#### POST / PUT

```ts
async function saveUser(user: UserInfo) {
  // 定义用于得知是 新增 还是 修改
  // 可根据自己业务自定义逻辑判断
  const isNewRecord = user.id > 0;
  return request<UserInfo, boolean>({
    url: isNewRecord ? `/user/${id}` : `/user/`,
    method: isNewRecord ? 'POST' : 'PUT',
    data: user,
  });
}
// 返回结果为
// Promise<boolean>
```

#### DELETE

```ts
async function deleteUser(id: number) {
  return request.delete<number, boolean>(`/user/${id}`);
}
// 返回结果为
// Promise<boolean>
```
