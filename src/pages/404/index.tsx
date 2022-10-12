import { ErrorContent, ErrorImage, Info } from './styles'

export default function Custom404() {
    return (
        <ErrorContent>
            <ErrorImage src="/erro.png"/>
            <Info>Não encontramos vídeos com termo buscado.</Info>
            <Info>Utilize outras palavras-chave.</Info>
        </ErrorContent>
    )
}