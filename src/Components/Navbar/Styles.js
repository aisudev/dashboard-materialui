import { makeStyles } from '@material-ui/core'

const drawerWidth = 240

export const useStyles = makeStyles(theme => ({
    appbar: {
        background:'#B23A48',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appbarShift: {
        [theme.breakpoints.up('md')]:{
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            })
        }
    },
    menuIcon:{
        position: 'relative',
        maxWidth:50,
        marginLeft:15,
        [theme.breakpoints.down('md')]:{
            position: 'absolute',
            right: 10
        }
    },
    hidden:{
        display: 'none'
    },
    title:{
        marginLeft:15
    },
    optionBar:{
        position: 'absolute',
        right: '24px',
        width:150,
        [theme.breakpoints.down('md')]:{
            display:'none'   
        }
    },
    optionBarMobile:{
        display:'none',
        justifyContent:'center',
        padding:10,
        [theme.breakpoints.down('md')]:{
            display:'flex',
        }
    },
    drawer:{
        flexGrow: 1,
        width: drawerWidth,
    },
    drawerPaper:{
        width: drawerWidth,
        [theme.breakpoints.down('md')]:{
            width: 'auto'
        }
    },
    closeBar:{
        display: 'flex',
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: 0,
    },
    contentShift: {
        [theme.breakpoints.up('lg')]:{
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: +drawerWidth,
        }
    }
}))