import React , {useState} from 'react';
import styled , { ThemeProvider } from 'styled-components';

export const ShopItemsStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 50px;

`

export const ItemStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    padding: 20px;
    margin: 20px;
    box-sizing: border-box;
    .img {
        width: 100%;
        height: 300px;
        overflow: hidden;
        img {
            width: 100%;
            
        }
    }
    

    .desc {
        display: flex;
        justify-content: space-between;
        font-size:20px;
        align-items: center;
        .title {
            p:first-child, P:last-child{
                font-weight:600;
                margin: 0;
            }
            P:last-child{
                color: #D72312;
            }
        }
        .cart {
            img {
                width: 30px;
            }
        }
        
    }


`

const ShopItems = (props) => {
    const [items, setItems] = useState([{id:101,title:'格子襯衫',img:require('../assets/img/101.jpeg'),price:399},{id:102,title:'碎花襯衫',img:require('../assets/img/102.jpg'),price:599},{id:103,title:'白色襯衫',img:require('../assets/img/103.jpg'),price:250},{id:201,title:'格子裙',img:require('../assets/img/201.jpg'),price:399},{id:202,title:'碎花裙',img:require('../assets/img/202.jpeg'),price:450}])
    return (
        <ShopItemsStyle>
            {
                items.map((item,i)=>
                <ItemStyle key="i">
                    <div className="img">
                        <img src={item.img} alt=''/>
                    </div>
                    <div className="desc">
                        <div className="title">
                            <p>{item.title}</p>
                            <p>{item.price}</p>
                        </div>
                        <div className="cart" onClick  = {e=>{
                        e.preventDefault()
                        props.addList(item,i)
                        alert(`已將${item.title}加到購物車`)}}><img src={require('../assets/img/cart.png')}/></div>
                    </div>
                </ItemStyle>)
            }
        </ShopItemsStyle>
    )
}

export default ShopItems