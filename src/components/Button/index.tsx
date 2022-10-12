import { FormButton } from "./styles";

type DefaultButtonType = {
    buttonType: "button" | "submit" | "reset" | undefined
    text?: string
    children?: any
    onClick: () => void
}

export default function DefaultButton({buttonType, text, children, onClick}: DefaultButtonType) {
    return (
        <>
            <FormButton type={buttonType} onClick={onClick}>{text ?? children}</FormButton>
        </>
    )
}