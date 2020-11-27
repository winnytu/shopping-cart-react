import React  from 'react'
// import {Route} from 'react-router-dom'
import {renderRoutes} from 'react-router-config';
import NavBar from '../container/navBar';
import routes from '../router/routes';

// import CheckList from '../container/CheckList'
// import AddToCart from '../container/AddList'

const Home = () =>  (
        <div>
            <NavBar/>
            {/* <Route path="/cart" component={CheckList}/>
            <Route  path="/" exact component={AddToCart}/> */}
            {/* {
                routes.map((route,i)=>{
                    const {path,exact,routes} = route
                    return (
                        <Route
                            key={i}
                            path={path}
                            exact={exact}
                            render={(routeProps)=>(
                                <route.component route={routes}{...routeProps}/>
                            )}
                        />
                    )
                })
            } */}
            {renderRoutes(routes)}
        </div>
    )

export default Home