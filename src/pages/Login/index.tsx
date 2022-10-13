import { LoginWrapper, Logo, LoginForm, Input } from './styles'
import { useRouter } from 'next/router'
import DefaultButton from '../../components/Button'
import { useRef, useState } from 'react'

export default function Login() {
    const router = useRouter()

    const emailRef = useRef(null)
    const [warningVisibility, setWarningVisibility] = useState<'hidden' | 'visible' | 'collapse'>('hidden')

    const validateEmail = (email: any) => {
        return email.match(
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        )
    }

    function validateUser() {
        const emailValue = emailRef.current.value

        if (validateEmail(emailValue)) {
            setWarningVisibility('hidden')
            return router.push('/SearchVideos')
        }

        setWarningVisibility('visible')
    }

    return (
        <LoginWrapper>
            <Logo src="/YouTube-Logo.png" alt="YouTube Logo" />

            <LoginForm>
                <Input type="text" placeholder="Nome do usuário" />
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <Input style={{ marginBottom: '5px' }} ref={emailRef} type="email" placeholder="E-mail" />
                    <span style={{ color: 'red', visibility: `${warningVisibility}` }}>Email inválido.</span>
                </div>
                
                <DefaultButton 
                    buttonType='button'
                    text='Entrar' 
                    onClick={validateUser} 
                />
            </LoginForm>
        </LoginWrapper>
    )
}