import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic'
import Header from './layout/header.js';
import Dashboard from './tasks/Dashboard.js';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Register from './accounts/register'
import Login from './accounts/login'
import PrivateRoute from './common/PrivateRoute';

// import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Tasks from './tasks/Tasks.js'
// import Login from './tasks/Login.js'
import { Provider } from 'react-redux';
import store from '../store';
import DataHub from './tasks/DataHub.js';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaFileExcel, FaGem, FaHeart } from "react-icons/fa";
import { Alerts } from './layout/alerts.js';
import { loadUser } from '../actions/auth'


// Alert Options
const alertOptions = {
    timeout: 3000,
    position: 'top center'
}

const componentStyle = {
    display: 'flex',
 }

 const sidebarcomponentStyle = {
    backgroundImage: 'url("https://raw.githubusercontent.com/azouaoui-med/react-pro-sidebar/master/demo/src/assets/bg1.jpg")',
    height: '95vh',
    objectFit: 'cover',
    objectPosition: 'center',
    backgroundSize: 'cover',
    backgroundColor: 'transparent',
    opacity: '0.3',
    left: '0',
    top: '0',
    zIndex: '100',
    
 }
 
class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>
            <AlertProvider template={AlertTemplate}{...alertOptions}>
            
            <Router>
            
            <Fragment>
                <Header />
                
            </Fragment>
            <Fragment>
                <div style={componentStyle}>
                    <div className="sideBar" >
                    <ProSidebar >
                    <Alerts />
                        <Menu iconShape="square" style={sidebarcomponentStyle}>
                        <a className="navbar-brand" href="#">
                            Create New Request
                        </a>
                        </Menu>
                    </ProSidebar>
                    </div>
                    <div>
                    <Switch>
                        <Fragment>
                        <PrivateRoute exact path="/" component={Dashboard} />
                        <Route path="/home" component={Dashboard}></Route>
                        <Route path="/tasks" component={Tasks}></Route>
                        <Route path="/DataHub" component={DataHub}></Route>
                        <Route exact path="/login" component={Login}></Route>
                        <Route exact path="/register" component={Register}></Route>
                        </Fragment>
                    </Switch>
                    </div>
                </div>
            </Fragment>
                </Router>
            </AlertProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));