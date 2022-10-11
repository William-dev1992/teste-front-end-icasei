import styled from 'styled-components'
import { Button } from '@material-ui/core'

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 4.5rem;
    padding: 5px;
    
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    background-color: gray;
`;

export const UserInformationWrapper = styled.div`
    display: flex;
    flex-direction: column;

    margin-left: 7px;
`;

export const UserInfo = styled.p`
    margin-bottom: 2px;
`;