import {useEffect, useState} from "react";
import {useNavigate, useLocation} from "react-router-dom";

const routes = [
    {
        path: '/',
        name: 'home',
    },
    {
        path: '/dashboard',
        name: 'dashboard',
    },
    {
        path: '/user',
        name: 'user',
        routes: [
            {
                path: '/user/setting',
                name: 'setting',
            },
            {
                path: '/user/setting2',
                name: 'setting2',
            },
        ]
    },
]

export const useMenus = () => {
    const [menus, setMenus] = useState<any>([])
    const [tabsItems, setTabsItems] = useState<any>([])
    const [activeTabsItem, setActiveTabsItem] = useState('')
    const navigate = useNavigate()
    const location = useLocation()

    const routeToTab = (route: any) => {
        return {
            key: route.path,
            label: route.name,
        }
    }

    const addTab = (path: string, toPath = true) => {
        if (!tabsItems.find((item: any) => item.key === path)) {
            const currentRoute = routes.find(citem => citem.path === path)
            setTabsItems([...tabsItems, routeToTab(currentRoute)])
        }
        if (toPath) {
            setActiveTabsItem(path)
            navigate(path)
        }
    }

    useEffect(() => {
        if (location.pathname !== '/') {
            const currentRoute = routes.find(citem => citem.path === location.pathname)
            setTabsItems([routeToTab({
                path: '/',
                name: 'home',
            }), routeToTab(currentRoute)])
        } else {
            setTabsItems([routeToTab({
                path: '/',
                name: 'home',
            })])
        }
        setActiveTabsItem(location.pathname)
        navigate(location.pathname)

    }, [])

    return {
        tabsItems,
        activeTabsItem,
        addTab,
    };
};
