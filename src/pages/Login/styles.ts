import styled from 'styled-components'
import { Button } from '@material-ui/core'

export const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 8rem;

    height: 100vh;
    width: 100%;
`;

export const Logo = styled.img`
    height: 7rem;
    width: 10rem;

    margin-bottom: 3rem;
`;

export const LoginForm = styled.form`
    position: relative;
    width: 20rem;

    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const Input = styled.input`
    height: 2rem;
    width: 100%;
    outline: none;

    margin-bottom: 2rem;
    padding-left: 5px;

    border-radius: 5px;
    border: 1px solid black;
`;

export const FormButton = styled(Button)`
    && {
        height: 2.5rem;
        width: 6rem;
        border-radius: 5px;
        border: 1px solid black;
    }
`;
