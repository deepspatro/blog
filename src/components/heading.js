import React from "react";
import { Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => (
    {
        title:
        {
            flexGrow: 1
        }
    }
)

)


function Header() {
    const classes = useStyles();
    return (
        <AppBar>
            <Toolbar>
                <Typography className={classes.title} variant="h4">Blog</Typography>
                <Button variant="outlined" color="inherit">Add</Button>
            </Toolbar>

        </AppBar>
    )
}

export default Header;