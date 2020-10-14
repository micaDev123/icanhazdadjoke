import React from 'react';
import './styles.scss';
import AppBar from '@material-ui/core/AppBar';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';


    const useStyles = makeStyles((theme) => ({
            root: {
                position: 'fixed',
                bottom: theme.spacing(2),
                right: theme.spacing(2),
                flexGrow: 1,
            },
            menuButton: {
                marginRight: theme.spacing(2),
            },
            appBar: {
                zIndex: theme.zIndex.drawer + 1,
                background: '#fbc736',
                boxShadow: 'none'
            },
            fontLogo: {
                marginTop: 1,
            },
            logo: {
                height: 40,
                marginTop: 8
            },
            search: {
                position: 'relative',
                borderRadius: theme.shape.borderRadius,
                backgroundColor: fade(theme.palette.common.black, 0.15),
                '&:hover': {
                backgroundColor: fade(theme.palette.common.black, 0.25),
                },
                color: 'white',
                marginLeft: 0,
                width: '100%',
                [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
                },
            },
            searchIcon: {
                padding: theme.spacing(0, 2),
                height: '100%',
                position: 'absolute',
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
            inputRoot: {
                color: 'inherit',
            },
            inputInput: {
                padding: theme.spacing(1, 1, 1, 0),
                paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
                transition: theme.transitions.create('width'),
                width: '100%',
                [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
                },
            },
        }));

    const TopHeader = (Props: any) => {
        const classes = useStyles();
        return (
            <div className="header">
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6">
                    <div >
                <img
                    className={classes.logo}
                        src="/assets/smile.svg"
                    alt="PriceLOCQ"
                />
                </div>
                </Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                <InputBase
                placeholder="Search"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                />
            </div>
        </Toolbar>
    <Container>
    </Container>
    </AppBar>
    </div>
    ) 
}

export default TopHeader;