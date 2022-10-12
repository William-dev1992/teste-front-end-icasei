import styled from 'styled-components'
import { keyframes } from 'styled-components'
import { OutlinedInput, Button } from '@material-ui/core'

const breatheAnimation = keyframes`
    0% { align-items: center }
    100% { align-items: flex-start }
`

export const MainWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;

    justify-items: center;
    align-items: center;

    height: 100vh;
`;

export const SearchInput = styled.input`
    :focus {
        outline: none;
    }

    height: 2rem;
    margin-right: 5px;
    border-radius: 5px;
    border: 1px solid grey;
    padding-left: 3px;
`;

export const SearchButton = styled(Button)`
    && {
        height: 2rem;
    }
`;

export const SearcherWrapper = styled.div`
    height: 100%;
    width: 15rem;

    display: flex;
    align-items: ${(props: {alignment: string}) => props.alignment};
    justify-content: center;
    flex-direction: column;

    transition-timing-function: ease;
`;