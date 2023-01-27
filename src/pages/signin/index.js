import { Link, useNavigate } from "react-router-dom";
import { FaPaw } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import {Page, Button, Container, ContainerButton, FocusInput, Form, Input, Limiter, LogoDiv, Titulo, WrapInput, WrapLog} from "../../styles/Signstyle.js"
import { useState } from "react";
import { signin } from "../../Services/auth";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";



export default function Signin() {
  return (
    <Page>
    <Limiter>
      <Container >
        <WrapLog>
        <Form autoComplete="off">
          <LogoDiv>
            <FaPaw size="55" color="#FFEAD9"></FaPaw>
            <p>Pet Heaven</p>
          </LogoDiv>

           <Titulo>
            <p>Sign in</p>
          </Titulo>

          <WrapInput>
            <MdEmail size="25" color="#FFEAD9"></MdEmail>
            <Input
              name="email"
              type="email"
              placeholder="Digite seu e-mail" />
            <FocusInput></FocusInput>
          </WrapInput>
          
          <WrapInput>
            <RiLockPasswordFill size="25" color="#FFEAD9"></RiLockPasswordFill>
            <Input
              placeholder="Digite sua senha"
              name="password"
              type="password" />
            <FocusInput></FocusInput>
          </WrapInput>

          <ContainerButton>
             <Button>ENTER</Button>
          </ContainerButton>

           <span>
          Don't have an account?{" "}
          <Link className="link" to="/signup">
            Sign up
          </Link>
        </span>

        </Form>
        </WrapLog>
      </Container>
    </Limiter>
    </Page>
  );
}


