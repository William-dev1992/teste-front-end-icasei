import { LoginWrapper, Logo, LoginForm, Input } from './styles'
import { useRouter } from 'next/router'
import DefaultButton from '../../components/Button'

export default function Login() {
    const router = useRouter()

    function validateUser() {
        router.push('/SearchVideos')
    }

    return (
        <LoginWrapper>
            <Logo src="/YouTube-Logo.png" alt="YouTube Logo" />

            <LoginForm>
                <Input type="text" placeholder="Nome do usuário" />
                <Input type="email" placeholder="E-mail" />
                
                <DefaultButton 
                    buttonType='button'
                    text='Entrar' 
                    onClick={validateUser} 
                />
            </LoginForm>
        </LoginWrapper>
    )
}