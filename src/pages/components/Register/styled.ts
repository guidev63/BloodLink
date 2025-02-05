import styled from 'styled-components';

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const RegisterBox = styled.div`
  background-color: #000;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 450px;
  text-align: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  svg {
    color: #ff4d4d;
  }
`;

export const Title = styled.h1`
  color: #fff;
  margin-bottom: 0.5rem;
  font-size: 23px; /* Ajuste esse valor conforme necessário */

`;

export const Description = styled.p`
  color: #bbb;
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  color: #fff;
  margin-bottom: 0.5rem;
  text-align: left;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #333;
  border-radius: 5px;
  background: #1e1e1e;
  color: #fff;
  font-size: 0.9rem;
`;

export const SelectField = styled.select`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #333;
  border-radius: 5px;
  background: #1e1e1e;
  color: #fff;
  font-size: 0.9rem;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  background: #ff4d4d;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #e04343;
  }
`;

export const FooterText = styled.p`
  color: #fff;
  margin-top: 1rem;

  a {
    color: #ff4d4d;
    text-decoration: none;
    margin-left: 0.3rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;
