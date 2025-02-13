import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #c31432);
  width:100% ;
`;

export const LoginBox = styled.div`
  background-color: #000;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  width: 450px;
  text-align: center;
  color: #fff;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  svg {
    color: #ff4d4d;
  }
`;

export const Title = styled.h2`
  margin-top: 20px;
  font-size: 1.8rem;
`;

export const Subtitle = styled.p`
  margin: 10px 0 30px 0;
  color: #aaa;
  font-size: 0.9rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Input = styled.input`
  padding: 12px 15px;
  border: none;
  border-radius: 5px;
  background-color: #1f2937;
  color: #fff;
  font-size: 0.9rem;
  width: 100%;

  &:focus {
    outline: 2px solid #ff4d4d;
  }
`;

export const Button = styled.button`
  padding: 12px;
  background-color: #ff4d4d;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #d62839;
  }
`;

export const FooterText = styled.p`
  margin-top: 15px;
  color: #aaa;
  font-size: 0.85rem;
  a {
    color: #ff4d4d;
    text-decoration: none;
    margin-left: 5px;

    &:hover {
      text-decoration: underline;
    }
  }
`;
