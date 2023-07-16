`vite-env.d.ts` 这个文件是写自定义环境变量的ts提示用的

```ts
// 代码中在  import.meta.env.xx
interface ImportMetaEnv {
  // 应用基础路径-环境变量的提示
  readonly APP_BASE_API: string
  // 更多环境变量...
}
```
