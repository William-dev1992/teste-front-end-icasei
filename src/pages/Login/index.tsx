import { LoginWrapper, Logo, LoginForm, Input, FormButton } from "./styles";
import { useRouter } from 'next/router'

export default function Login() {
    const router = useRouter()

    function validateUser() {
        router.push('/SearchVideos')
    }

    return (
        <LoginWrapper>
            <Logo src="/YouTube-Logo.png" alt="YouTube Logo"></Logo>

            <LoginForm>
                <Input type="text" placeholder="Nome do usuário" />
                <Input type="email" placeholder="E-mail" />
                
                <FormButton type="button" onClick={validateUser}>Entrar</FormButton>
            </LoginForm>
        </LoginWrapper>
    )
}