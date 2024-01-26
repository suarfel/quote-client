import { calculateSize } from '@iconify/react';
import classes from './NavBar.module.css';
import { useState } from 'react';
import { navActions } from '../../store/home';
import { useSelector,useDispatch } from 'react-redux';

const NavBar = () => {
    const isDrawing = useSelector(state => state.nav.isHamTouched)
    const dispatch = useDispatch();
    const drawHandler = () => {
        dispatch(navActions.changeNav());
    }
    return (
        <div className={isDrawing ?  classes.change : classes.hamburger} onClick={drawHandler}>
            <div className={classes.hamburgerTop}></div>
            <div className={classes.hamburgerMiddle}></div>
            <div className={classes.hamburgerDown}></div> 
        </div>  
    );
}   
  
export default NavBar;