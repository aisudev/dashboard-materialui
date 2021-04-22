import React, { useContext, useState } from 'react'
import clsx from 'clsx'
import {
    AppBar, Drawer, IconButton, TextField,
    Toolbar, Typography, MenuItem, FormControl,
    List, ListItem, ListItemText, Divider, ListSubheader
} from '@material-ui/core'
import { Menu, Close } from '@material-ui/icons'
import { useStyles } from './Styles'
import { context } from '../../utils/Provider'
import { useHistory } from 'react-router-dom'

const Navbar = ({ children }) => {

    const { open, handleOpen } = useContext(context)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const classes = useStyles()
    const history = useHistory()



    React.useEffect(() => {
        window.addEventListener("resize", function () {
            setWindowWidth(window.innerWidth)
        });
    }, [windowWidth])

    return (
        <div>
            <AppBar
                position='static'
                className={clsx(classes.appbar, { [classes.appbarShift]: open })}
            >
                <Toolbar>
                    <IconButton
                        edge='start'
                        className={clsx(classes.menuIcon, { [classes.hidden]: open })}
                        onClick={handleOpen}
                    >
                        <Menu />
                    </IconButton>
                    <Typography
                        variant='h5'
                        className={classes.title}
                    >
                        Dashboard
                    </Typography>
                    <OptionBar classes={classes.optionBar} />
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                anchor={windowWidth < 1200 ? 'top' : 'left'}
                variant={windowWidth < 1200 ? 'temporary' : 'persistent'}
                classes={{
                    paper: classes.drawerPaper
                }}
                open={open}
            >
                <div className={classes.closeBar}>
                    <IconButton onClick={handleOpen}>
                        <Close />
                    </IconButton>
                </div>
                <Divider />
                <OptionBar classes={classes.optionBarMobile} />
                <Divider />
                <List
                    subheader={
                        <ListSubheader component="div" >
                            Progress
                        </ListSubheader>
                    }
                >
                    <ListItem 
                        button
                    >
                        <ListItemText 
                            primary='Overall' 
                            onClick={()=>{history.push('/')}}
                        />
                    </ListItem>
                </List>
                <Divider />
                <List
                    subheader={
                        <ListSubheader component="div" >
                            Management
                        </ListSubheader>
                    }
                >
                    <ListItem button>
                        <ListItemText 
                            primary='More' 
                            onClick={()=>{history.push('/more')}}
                        />
                    </ListItem>
                </List>
            </Drawer>
            <div className={clsx(classes.content, { [classes.contentShift]: open })}>
                {children}
            </div>
        </div>
    )
}

function OptionBar({ classes }) {
    return (
        <FormControl
            className={classes}
        >
            <TextField
                select
                value='User'
            >
                <MenuItem key='user' value='User'>
                    User
                </MenuItem>
            </TextField>
        </FormControl>
    )
}

export default Navbar
