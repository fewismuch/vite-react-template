# 约定式路由
**页面路径即路由地址**，示例：

`src/views/about/index.tsx` => `/about`

`src/views/user/setting/index.tsx` => `/user/setting`

`src/views/user/setting2/index.tsx` => `/user/setting2`

# 同步页面的写法

```jsx
const Page = () => {
  return (
    <div>
      home page
    </div>
  );
};
export default Page;

```

导出的时候是 export default Page;

# 异步页面的写法

```jsx
const Page = () => {
  return (
    <div>
      async about page
    </div>
  );
};
Page.displayName = 'AboutPage';

export const Component = Page;

```

导出的时候是 export const Component = Page;
