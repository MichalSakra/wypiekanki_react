import NavItem from "./NavItem/NavItem"

export const showNavigationItems = (navList, click = null) => {
    return navList.map((navItem, index) => {

        return <NavItem key = {
            navItem.href
        }
        data = {
            navItem
        }
        click = {
            click ? click : null
        }
        />
    })
}