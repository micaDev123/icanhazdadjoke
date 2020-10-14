import React, { useEffect, useState } from 'react';
import GenerateJokes from './generator';
import './styles.scss';
import { makeStyles } from '@material-ui/core/styles';


const HomePage = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            position: 'fixed',
            bottom: theme.spacing(2),
            right: theme.spacing(2),
        },
        fontLogo: {
            fontSize: 69,
            fontWeight: 600,
            fontFamily: 'Helvetica Neue',
            marginLeft: 251,
            marginTop: -525,
            color: '#111',
            letterSpacing: 3,
        },
        boxed: {
            width: 320,
            padding: 10,
            border: 5,
            color: 'black',
            margin: 0
        },
        circle: {
            height: 30,
            marginLeft: 257
          },
          rectangle: {
            height: 100,
            marginLeft: 257,
            width: 2000
          }
    }));
    const classes = useStyles();
    return (
        <>
         <div className="generator"> 
            <GenerateJokes />
            </div>
            <div>
            <div className={classes.boxed}>
            <h1 className={classes.fontLogo}>
                The Best Dad Jokes!
            </h1>
            <img
            className={classes.circle}
            src="/assets/circle.svg"
            alt="PriceLOCQ"
            />
            </div>
        </div>
        </>
    )
}

export default HomePage;
