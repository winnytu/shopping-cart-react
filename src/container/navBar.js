import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import styled , { ThemeProvider } from 'styled-components';

export const NavBarStyle = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    background-color: #000;
    height: 60px;
    color: #fff;
    line-height:60px;
    a {
        text-decoration: none;
        color: #fff;
        &:hover {
            background-color:pink;
        }
    }
    ul {
        display:flex;
        list-style:none;
        padding: 0;
        margin: 0;
        li {
            padding: 0 20px;
            span {
                display:inline-block;
                width:20px;
                height: 20px;
                background-color:red;
                line-height:20px;
                text-align:center;
                border-radius: 10px;
            }
        }
    }

`
const mapStateToProps = (state) => ({
    
    totalNum: state.shoppingCart,
  });

let NavBar = (props) => {
    let totalNum = 0
    props.totalNum.forEach(item=>{
        totalNum= totalNum+item.num
    })
    const [NavItems,setNameItems] = useState(['7月新品'])
    return (
        <NavBarStyle>
            <div>Logo</div>
            <ul>
                {
                    NavItems.map((ele,i)=><Link to="/"><li key={i}>{ele}</li></Link>)
                }
                <Link to="/cart">
                    <li>購物車 <span>{totalNum}</span></li>
                </Link>
            </ul>
        </NavBarStyle>
    )
}
NavBar  = connect(mapStateToProps)(NavBar)
export default NavBar