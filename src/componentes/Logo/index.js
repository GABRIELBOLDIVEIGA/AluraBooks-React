import React from "react";
import logo from "../../img/logo.svg";
import styled from "styled-components";

const LogoContainer = styled.div`
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    
`;

const LogoImagem = styled.img`
    margin-right: 30px;
`

export default function Logo() {
    return (
        <LogoContainer>
            <LogoImagem src={logo} />
            <p>
                <strong> Alura </strong> Books
            </p>
        </LogoContainer>
    );
}
