export const ADD_LIST = 'ADD_LIST'
export const DELETE_LIST = 'DELETE_LIST'
export const MINUS_LIST = 'MINUS_LIST'


export const addList = item => {
    return {
        type: 'ADD_LIST',
        item,
    }
}
export const minusList = item => {
    return {
        type: 'MINUS_LIST',
        item,
    }
}
export const deleteList = item => {
    return {
        type: 'DELETE_LIST',
        item,
    }
}