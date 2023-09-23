const development = {
  apiUrl: 'http://localhost:3000/api',
  apiKey: 'development-key',
  // 是否开启国际化配置
  ENABLE_I18N: false
}

const production = {
  apiUrl: 'https://api.example.com',
  apiKey: 'production-key'
}

const env = process.env.NODE_ENV || 'development'
export default [env]
