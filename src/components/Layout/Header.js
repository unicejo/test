import { Fragment } from 'react'
import mealsImg from '../../assets/meals.jpg'
import classes from './Header.module.css'

const Header = props => {
    return (
        <Fragment>
            <Header className={classes.header}>
                <h1>ReactMeals</h1>
                <button>Cart</button>
            </Header>
            <div className={classes['main-image']}>
                <img src={mealsImg} alt="a table full of food" />
            </div>
        </Fragment>
    );
};

export default Header;