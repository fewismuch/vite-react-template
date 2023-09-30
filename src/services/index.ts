export const fetchMenus = (): Promise<string> => {
  const menus: any = [
    {
      path: '/',
      name: 'home'
    },
    {
      path: '/dashboard',
      name: 'dashboard'
    },
    {
      path: '/about',
      name: 'about'
    },
    {
      path: '/user',
      name: 'user',
      access: 'canAdmin',
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
