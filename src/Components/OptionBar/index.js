import React from 'react'
import { TextField, MenuItem } from '@material-ui/core'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import { Adb, DateRange } from '@material-ui/icons'
import { Container, Brand, SubTitle, SupTitle, Title, InputContainer, FormWrap } from './OptionBarElements'

const OptionBar = () => {
    return (
        <Container>
            <Brand>
                <Adb />
            </Brand>
            <Title>
                <SupTitle>
                    Overall
                </SupTitle>
                <SubTitle>
                    <DateRange />  dd/mm/yy
                </SubTitle>
            </Title>
            <InputContainer>
                <FormWrap>
                    <TextField
                        select
                        variant='outlined'
                        value='Today'
                    >
                        <MenuItem key='Today' value='Today'>
                            Today
                        </MenuItem>
                    </TextField>
                </FormWrap>
                <FormWrap>
                    <TextField
                        id="date"
                        label="Start"
                        type="date"
                        defaultValue="2017-05-24"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </FormWrap>
                <FormWrap>
                    <TextField
                        id="date"
                        label="End"
                        type="date"
                        defaultValue="2017-05-24"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </FormWrap>
            </InputContainer>
        </Container>
    )
}

export default OptionBar
