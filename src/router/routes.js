import CheckList from '../container/checkList'
import AddToCart from '../container/addToCart'

const routes = [
    {
        path:'/',
        component:AddToCart,
        exact: true
    },
    {
        path:'/cart',
        component:CheckList,
    }
]

export default routes