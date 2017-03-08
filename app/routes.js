/**
 * Created by miracle on 2017/2/9.
 */
import React from 'react'
import {Route,IndexRoute} from 'react-router'
import App from './component/app';
import Home from './component/home'
import One from './component/miracle/navcontent/miracle';
import Two from './component/inteteam';
import About from './component/miracle/maincontent/about'
import Blog from './component/miracle/maincontent/blog'
import Portrait from './component/miracle/maincontent/portrait'
import Contact from './component/miracle/maincontent/contact'

const routes=(
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/one" component={One}>
            <IndexRoute component={About} />
            <Route path="/one/blog" component={Blog} />
            <Route path="/one/portrait" component={Portrait} />
            <Route path="/one/contact" component={Contact} />
        </Route>
        <Route path="/two" component={Two}>
        </Route>
    </Route>
)

export default routes;