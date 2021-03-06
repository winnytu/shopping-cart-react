import React from 'react';
import { connect } from 'react-redux'
import { addList,minusList,deleteList} from '../action/action'
import shoppingList from '../components/shoppingList'

const mapStateToProps = (state) => {
    return {
        shoppingList: state.shoppingCart
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        addList:(list)=>{
            dispatch(addList(list))
        },
        minusList:(list)=>{
            dispatch(minusList(list))
        },
        deleteList:(list) => {
            dispatch(deleteList(list))
        }
    }
}

const CheckList = connect(mapStateToProps,mapDispatchToProps)(shoppingList)

export default CheckList