import React, { useState } from "react";
import { InputWraper, Label, InputType, InputContainer, IconWrapper } from "./styles";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const iconStyle = {
    fontSize: '20px',
    color: '#ccc',
};

const Icono = ({showEye, onPress}) => (
    <IconWrapper onClick={onPress}>
        {showEye ? <FaEyeSlash style={iconStyle}/> : <FaEye style={iconStyle}/>}
    </IconWrapper>
);

export const Input = ({label, type, placeholder, icon:Icon, register = () =>{}, name, rules }) => {
    const [typeInput, setTypeInput] = useState(type);

    const toogleTypeInput = (e) => {
        setTypeInput(typeInput === 'password' ? 'text' : 'password');
    }
    return (
        <InputContainer>
            <Label>{label}</Label>
            <InputWraper>
                <InputType {...register(name, rules)} placeholder={placeholder} type={typeInput}/>
                <IconWrapper>
                {
                    type === 'password' &&  (
                        <Icono onPress={toogleTypeInput} showEye={typeInput === 'text'} />
                    )
                }
                {
                    type !== 'password' && Icon &&( <Icon style={iconStyle}/>)
                }
                </IconWrapper>
            </InputWraper>

        </InputContainer>
    );

};
