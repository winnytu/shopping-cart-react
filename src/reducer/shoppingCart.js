const exitItem = (state={},action) => {
    switch(action.type){
        case 'ADD_LIST':
            if (state.id !== action.item.id){
                return state
            } else {
                return Object.assign({},state,{
                    num : state.num+1
                })
            }
            
            
        default:
            return state
    }
}


const shoppingCart = (state=[],action) => {
    switch(action.type){
        case 'ADD_LIST':
            const listItem = {
                id:action.item.id,
                title:action.item.title,
                price:action.item.price,
                num:1
            }
            let isExit = state.find(item=>{
                if (action.item.id !== item.id){
                    return false
                } else {
                    return true
                }
            })
            if (!isExit){
                return [
                    ...state,
                    listItem
                ]
            } else {
                return state.map(t =>
                    exitItem(t,action))
            }
        case 'DELETE_LIST':
            return state.filter(item=>{
                return item.id !==action.item.id
            })
        default:
            return state
    }
}

export default shoppingCart