import DefaultButton from "../Button";
import { HeaderWrapper, UserInformationWrapper, UserInfo } from "./styles";

import { useRouter } from 'next/router'

export default function Header() {
    const router = useRouter()
    function logout() {
        router.push('/Login')
    }

    return (
        <HeaderWrapper>
            <UserInformationWrapper>
                <UserInfo style={{ fontWeight: 'bold' }}>Nome do user</UserInfo>
                <UserInfo>email do user</UserInfo>
            </UserInformationWrapper>
            <DefaultButton buttonType='button' text='Logout' onClick={logout}  />
        </HeaderWrapper>
    )
}