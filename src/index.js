import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import NotFoundPage from './components/NotFoundPage';
import HomePage from './components/HomePage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import shop from './components/shop';


class Root extends Component {
    render() {
        return (
            <Router basename="/">
                <div>
                    <Switch>

                        <Route exact path="/" component={shop} />

                        {/* <Route path="/shop" component={shop} /> */}
                        <Route component={NotFoundPage} />

                    </Switch>
                    <ToastContainer position="top-center" />
                </div>
            </Router>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('quarter'));
