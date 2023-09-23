export const fetchMenus = (): Promise<string> => {
  const menus: any = [
    {
      path: '/',
      name: 'home'
    },
    {
      path: '/about',
      name: 'about'
    },
    {
      path: '/dashboard',
      name: 'dashboard'
    },
    {
      path: '/user',
      name: 'user',
      routes: [
        {
          path: '/user/setting',
          name: 'setting'
        },
        {
          path: '/user/setting2',
          name: 'setting2'
        }
      ]
    }
  ]
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(menus)
    }, 1000)
  })
}
