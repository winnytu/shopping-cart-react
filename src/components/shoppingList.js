import React , {useState} from 'react';
import styled , { ThemeProvider } from 'styled-components';
const ShoppingListStyle = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    .title {
        font-size: 40px;
        font-weight: 600;
    }
    table {
        width: 800px;
        border-collapse:collapse;
        th {
            height: 50px;
            background-color: #000;
            color:#fff;
        } 
        td {
            height: 100px;
            text-align:center;
        }
    }
    .total {
        font-size: 26px;
        font-weight: 600;
        span {
            color:red;
        }
    }
`


const ShoppingList = (props) => {
    let totalNum = 0
    let totalCost = 0
    props.shoppingList.forEach(item=>{
        totalNum= totalNum+item.num
        totalCost=totalCost+item.price*item.num
    })
    return (
        <ShoppingListStyle>
            <p className="title">購物明細</p>
            <table>
                <thead>
                    <tr><th>品項</th><th>單價</th><th>件數</th><th>價錢</th><th>刪除</th></tr>
                </thead>
               <tbody>
                    {       props.shoppingList.length>0?
                            props.shoppingList.map((item,i)=>
                            <tr key={i}>
                                <td>{item.title}</td><td>{item.price}</td><td>{item.num}</td><td>{item.price*item.num}</td><td onClick={e=>props.deleteList(item)}>刪除</td>
                            </tr>):<tr><td colSpan="4">尚無紀錄</td></tr>

                        
                    }
               </tbody>
            </table>
            <p className="total">總共 <span>{totalNum}</span> 件，共 <span>{totalCost}</span> 元</p>
        </ShoppingListStyle>
    )
}

export default ShoppingList