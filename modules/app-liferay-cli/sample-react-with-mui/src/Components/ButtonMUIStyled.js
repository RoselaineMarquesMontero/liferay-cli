
import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import styled from 'styled-components';

const ButtonCustom = styled(ButtonBase)`
    line-height: 3rem;
    min-width: 20rem;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 50%), 0px 2px 2px 0px rgb(0 0 0 / 20%), 0px 1px 5px 0px rgb(0 0 0 / 24%);
`

export default (props) => {
    return (
        <ButtonCustom variant="contained" color="primary">
            {props.children}
        </ButtonCustom>
    );
}