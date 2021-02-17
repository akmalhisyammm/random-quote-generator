import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    header: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'lightskyblue',
        padding: '12px 24px',
        borderRadius: 12,
        marginBottom: 24,
        boxShadow: '0 2px 4px 0 rgba(0,0,0,0.2)'
    },
    title: {
        flexGrow: 1,
        fontWeight: 'bold'
    }
}));

const Header = ({ darkMode, toggleDarkMode }) => {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <Typography variant="h6" className={classes.title}>
                Random Quote Generator
            </Typography>
            <IconButton edge="end" color="inherit">
                <DarkModeSwitch 
                    checked={darkMode}
                    onChange={toggleDarkMode}
                    size={22.5}
                />
            </IconButton>
        </div>
    );
};

export default Header;