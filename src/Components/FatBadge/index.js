import React from 'react'
import clsx from 'clsx'
import {makeStyles, Avatar} from '@material-ui/core'
import { 
    Container, IconWrap, Title, TitleWrap, 
    Value, ValueWrap
} from './FatBadgeElements'

const useStyles = makeStyles(theme=>({
    avatar:{
        width:theme.spacing(4),
        height:theme.spacing(4),
        background:'#fff',
        color:'#FED0BB'
    },
    avatarPrimary:{
        color:'#FCB9B2'
    }
}))

const FatBadge = ({title, icon, value, primary}) => {

    const classes = useStyles()

    return (
        <Container primary={primary} >
            <TitleWrap>
                <Title>
                    {title}
                </Title>
                <IconWrap>
                    <Avatar
                        className={clsx(classes.avatar, {[classes.avatarPrimary]:primary})}
                    >
                        {icon}
                    </Avatar>
                </IconWrap>
            </TitleWrap>
            <ValueWrap>
                <Value>
                    $ {value}
                </Value>
            </ValueWrap>
        </Container>
    )
}

export default FatBadge
