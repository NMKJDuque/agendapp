import { StyleButton } from "./styles";

export const Button = ({text, bgColor, color, type='button', onPress, disabled}) =>(

    <StyleButton disabled={disabled} bgColor={bgColor} type={type} color={color} onClick={onPress}>{text}</StyleButton>
)
