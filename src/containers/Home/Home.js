import React, { Component } from 'react';
import CategoryList from '../CategoryList/CategoryList';
import classes from './Home.module.scss';

class Home extends Component {
    render() {
        return (
            <div className={classes.Home}>
                <header>
                    <h1>The Best Online Book Store</h1>
                </header>
                <CategoryList />
            </div>
        );
    }
}

export default Home;