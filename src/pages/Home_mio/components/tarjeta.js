import { TarjetaTitle, TarjetaWrapper, IconWrapper, LabelIcon } from "./styles";
import { FaClock} from "react-icons/fa";

export const Tarjeta = ({title, icon: Icon, duracion, usuario}) =>(
    <TarjetaWrapper>

        
        <TarjetaTitle>{title}</TarjetaTitle>
        <IconWrapper >
        <LabelIcon>Responsable: {usuario}</LabelIcon>
            <Icon />
            <LabelIcon>
                {duracion}
            </LabelIcon>
        </IconWrapper>
        
    </TarjetaWrapper>
)
