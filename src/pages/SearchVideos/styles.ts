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

    height: 100vh;
`;

export const SearchInput = styled(OutlinedInput)`
    && {
        height: 2.5rem;
        margin-right: 5px;
    }
`;

export const SearchButton = styled(Button)`
    && {
        height: 2.5rem;
    }
`;

export const SearcherWrapper = styled.div`
    height: 100%;

    display: flex;

    align-items: ${(props: {alignment: string}) => props.alignment};
    justify-content: center;

    transition-timing-function: ease;
`;