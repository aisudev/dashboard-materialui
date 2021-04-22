import { Avatar, makeStyles } from '@material-ui/core'
import { ThumbUp } from '@material-ui/icons'
import React from 'react'
import { 
    Container, TitleWrap, Title ,
    ValueWrap, Value
} from './ThinBarElements'

const useStyles = makeStyles(theme=>({
    avatar:{
        background: '#FCB9B2'
    }
}))

const ThinBar = ({title, icon, value}) => {

    const classes = useStyles()

    return (
        <Container>
            <TitleWrap>
                <Avatar className={classes.avatar}>
                    {icon}
                </Avatar>
                <Title>{title}</Title>
            </TitleWrap>
            <ValueWrap>
                <Value>
                    {value}
                </Value>
            </ValueWrap>
        </Container>
    )
}

export default ThinBar
