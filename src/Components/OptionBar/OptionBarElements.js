import styled from 'styled-components'
import { FormControl, Typography } from '@material-ui/core'

export const Container = styled.div`
    position: relative;
    max-width: 100%;
    display: flex;
    flex-direction: row;
    padding: 0;
    border-radius:7px;
    box-shadow: 3px 2px 10px #a1a1a1;

    @media screen and (max-width:960px){
        flex-direction: column;
    }

`

export const Brand = styled.div`
    height:auto;
    width: 7%;
    display: flex;
    justify-content: center;
    align-items: center;
    background:#FCB9B2;
    border-radius: 7px 0 0 7px ;
    @media screen and (max-width:960px){
        width: 100%;
        height: 100px;
        border-radius: 7px 7px 0 0 ;

    }
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    padding: 7px;
    @media screen and (max-width:960px){
        justify-content: center;
        align-items: center;
    }
`

export const SupTitle = styled(Typography)`
    font-size:28px;
    @media screen and (max-width:960px){
        font-size: 48px;
    }

`
export const SubTitle = styled(Typography)`
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #818181
`

export const InputContainer = styled.div`
    /* border: 1px solid black; */
    position: absolute;
    right: 24px;
    display: flex;
    flex-direction: row;
    height: 100%;
    align-items: center;
    @media screen and (max-width:960px){
        flex-direction: column;
        position: relative;
        right: auto;
    }
`

export const FormWrap = styled(FormControl)`
    width: 200px;
    padding: 10px;
    @media screen and (max-width:960px){
        width: 90%
    }
`