import React from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { LinkTo } from "../../components/LinkTo";
import { PageWrapper,LogoWrapper, TopLink } from "../../globalStyles";
import { useForm } from "react-hook-form";
import { LabelError } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from "../../store";


export const Signin = () => {

    const dispatch = useDispatch();
    const userData = useSelector(state => state.user);

    const {register,control, handleSubmit, formState: {errors, isValid}} = useForm({mode: 'onChange'});
    const onSubmitLogin = (data) =>{
        console.log('date form', data);
        dispatch(fetchLogin(data));
    };
    return(
    <PageWrapper>
        <form onSubmit={handleSubmit(onSubmitLogin)}>
        <TopLink>
            <LinkTo text="Sign up" url="/signup"/>
        </TopLink>
        <LogoWrapper>
            <img src="./assets/logo-color.png" alt="logo" />
        </LogoWrapper>
        {
            userData.error && <LabelError>Email or password incorrect</LabelError>
        }
        
            <Input register={register} rules={{required: true, minLength: 6}} name="email"
                type="email" 
                placeholder="Enter your email" 
                rules={{required: true}}
                label="Email Address" />
    
            {
                errors.user && <LabelError>Field required</LabelError>
            }
            {
                errors.user?.type==='minLength' && <LabelError>Min Length 6 characters</LabelError>   
            }
            <Input register={register} rules={{required: true}} name="password"
                type="password" 
                placeholder="Enter your password" 
                rules={{required: true}}
                label="Password" />
            {
                errors.password && <LabelError>Field required</LabelError>
            }
        <Button 
            disabled={!isValid} 
            type="submit"
            text={userData.loading ? 'Checking...' : 'Sign in'}
            color="#222"
        />
        </form>
    </PageWrapper>
    )
}
