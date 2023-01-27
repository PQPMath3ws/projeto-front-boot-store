import { Link, useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import {Page, Button, Container, ContainerButton, FocusInput, Form, Input, Limiter, Titulo, WrapInput, WrapLog} from "../styles/Signstyle"
import { BsFillPersonFill } from "react-icons/bs";

export default function Signup() {
  return (
    <Page>
      <Limiter>
        <Container >
          <WrapLog>
            <Form autoComplete="off">
              <Titulo>
                <p>Create Account</p>
              </Titulo>

              <WrapInput>
                <BsFillPersonFill size="25" color="#FFEAD9"></BsFillPersonFill>
                <Input
                  name="Name"
                  type="text"
                  placeholder="Name" />
                <FocusInput></FocusInput>
              </WrapInput>
              <WrapInput>
                <MdEmail size="25" color="#FFEAD9"></MdEmail>
                <Input
                  name="email"
                  type="email"
                  placeholder="E-mail adress" />
                <FocusInput></FocusInput>
              </WrapInput>
              <WrapInput>
                <RiLockPasswordFill size="25" color="#FFEAD9"></RiLockPasswordFill>
                <Input
                  placeholder="password"
                  name="password"
                  type="password" />
                <FocusInput></FocusInput>
              </WrapInput>

              <ContainerButton>
                <Button>ENTER</Button>
              </ContainerButton>

              <span>
                Do you have an account?{" "}
                <Link className="link" to="/">
                  Sign in
                </Link>
              </span>

            </Form>
          </WrapLog>
        </Container>
      </Limiter>
    </Page>
  );
}