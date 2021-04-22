import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    color: #fff;
    width: 100%;
    height: 196px;
    background: ${({primary})=>(primary?'#FCB9B2':'#FED0BB')};
    border-radius: 5px;
    box-shadow: 3px 2px 10px #a1a1a1;
`
export const TitleWrap = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    margin: 0 10px 0 10px;
`

export const Title = styled.h3`
    margin-right: 15px;
    margin-left: 7px;
`
export const IconWrap = styled.div`
    position: absolute;
    top:10px;
    right: 0;
` 

export const ValueWrap = styled.div`
    position: absolute;
    margin-left: 15px;
    bottom: 0px;

`

export const Value = styled.p`
`