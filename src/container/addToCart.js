import React from 'react';
import { connect } from 'react-redux'
import { addList} from '../action/action'
import ShopItems from '../components/shopItems'

const mapStateToProps = (state) => {
    return {
        shoppingList: state.addList
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        addList:(list)=>{
            dispatch(addList(list))
        }
    }
}

const AddToCart = connect(mapStateToProps,mapDispatchToProps)(ShopItems)

export default AddToCart