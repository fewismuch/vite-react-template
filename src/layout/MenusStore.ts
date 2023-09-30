import { proxy, subscribe } from 'valtio'
import { subscribeKey, watch, proxyWithHistory } from 'valtio/utils'
import { fetchMenus } from '@/services'
import { useNavigate } from 'react-router-dom'

const Store = proxy({
  // state
  menus: [],
  activedMenu: '',
  activedMenus: [{
    label:'home',
    key:'/',
    closable:false
  }],
  // action
  addMenu: (path: string) => {
    console.log(Store.activedMenus)
    const currentMenu = Store.activedMenus.find(item => item.key === path)
    // 递归找到menus
    const menu = Store.menus.find(item=>item.path===path)
    if (!currentMenu) {
      const tempMenu = {
        key:path,
        name: menu.name
      }
      Store.activedMenus.push(tempMenu)
    } 
    Store.activedMenu = path
  },
  setMenus: menus => {
    Store.menus = menus
  },
  clearMenus: ()=>{
    Store.activedMenus = []    
  },
  fetchMenus: () => {
    fetchMenus().then(res => {
      Store.setMenus(res)
    })
  }
})

export const MenusStore = Store
