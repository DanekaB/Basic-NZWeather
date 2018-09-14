import {AppBar, Toolbar, Typography} from '@material-ui/core/';


import * as React from 'react';
// import { Nav,  NavItem } from 'react-bootstrap';
// import { IndexLinkContainer } from "react-router-bootstrap";
import { Link } from 'react-router-dom';


export const Header: React.StatelessComponent<{}> = () => {

    return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="display2">
                        <Link style={{color: "white"}} to="/">New Zealand Weather Forecaster</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
    );
}


