import styled from "styled-components";
import config from "../../../common/config/config.json"

export const AuthLayout = styled.div`
  width: 600px;
  margin: 0 auto;
  padding-top: 5vh;
  box-sizing: border-box;
  height: 100%;
`
export const AuthCard = styled.div<{error: boolean}>`
  width: 460px;
  margin: 0 auto;
  box-sizing: border-box;
  border: ${props => props.error? `1px solid ${config.color}`: 'none'};
  position: relative;
  background-color: white;
  box-shadow: ${config.shadow};
  border-radius: 6px;
  color: ${config.commonColor};
  display: grid;
  grid-template-rows: 40px auto 210px auto;
  grid-column-gap: 5px;
  padding: 20px 40px;
`

export const LoginFormLayout = styled.div`
  display: grid;
  width: 60%;
  margin: 20px auto 0;
  grid-template-rows: 60px 60px 35px;
  grid-row-gap: 10px;
`
export const RegistrationFormLayout = styled.div`
  display: grid;
  margin-top: 20px;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  grid-template-rows: 60px 60px 35px;
`
export const ValidErrors = styled.div`
  height: 20px;
  color: ${config.color};
  font-size: 12px;
  margin-left: auto;
`
export const FieldContainer = styled.div`
  display: grid;
  width: 100%;
  grid-row-gap: 5px;
  grid-template-rows: 10px 35px 10px;
`
export const LabelForm = styled.label`
  color: ${config.linkColor};
  font-size: 10px;
`
export const AuthError = styled.div`
  text-align: center;
  color: ${config.color}
`

export const AuthInput = styled.input<{error: boolean}>`
  width: 100%;
  height: 100%;
  border-radius: 2px;
  box-shadow: ${config.shadow};
  text-transform: none;
  font-size: 1.5rem;
  padding: .5rem;
  border: ${props => props.error? `1px solid ${config.color}`: 'none'};
  ::placeholder{
    text-transform: uppercase;
    font-size: .7rem;
    
  }
  :focus {
    border: 2px solid ${props => props.error? config.color: config.linkColor};
    outline: none;
  }
`
export const ButtonContainer = styled.div`
  align-self: end;
  grid-column: span 2;
  width: 60%;
  margin: 0 auto;
`

export const AuthBnt = styled.button`
  width: 60%;
  height: 2rem;
  
`
