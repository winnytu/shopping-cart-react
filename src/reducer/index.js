import { combineReducers } from 'redux'
import shoppingCart from './shoppingCart'

const todoApp   = combineReducers({
    shoppingCart
})

export default todoApp