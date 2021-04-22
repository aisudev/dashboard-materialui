import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: black;
    width: 100%;
    border-radius: 5px;
    box-shadow: 3px 2px 10px #a1a1a1;
`

export const TitleWrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 10px;
    width:max-content;
`

export const Title = styled.h4`
    font-size: 18px;
    margin-left: 7px;
`

export const ValueWrap = styled.div`
    position: absolute;
    right: 32px;
`

export const Value = styled.p`
`