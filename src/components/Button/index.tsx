import { FormButton } from "./styles";

type DefaultButtonType = {
    buttonType: "button" | "submit" | "reset" | undefined
    text: string
    onClick: () => void
}

export default function DefaultButton({buttonType, text, onClick}: DefaultButtonType) {
    return (
        <>
            <FormButton type={buttonType} onClick={onClick}>{text}</FormButton>
        </>
    )
}