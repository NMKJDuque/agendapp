import React from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { PageWrapper,LogoWrapper } from "../../globalStyles";

export const Signup = () => (
    <PageWrapper>
        <LogoWrapper>
            <img src="./assets/logo-color.png" alt="logo" />
        </LogoWrapper>
        <Input 
            type="text" 
            placeholder="Enter your name" 
            label="Name" />
        <Input 
            type="email" 
            placeholder="Enter your email" 
            label="Email Address" />
        <Input 
            type="password" 
            placeholder="Enter your password" 
            label="Password" />
        <Input 
            type="password" 
            placeholder="Confirm your password" 
            label="Confirm password" />
        <Button 
            text="Sign up"
            color="#222"
        />
    </PageWrapper>
)
