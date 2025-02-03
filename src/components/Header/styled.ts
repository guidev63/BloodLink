import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: #450a0a;
  padding: 5.5rem 0;
  width: 100%;
  box-sizing: border-box;
`;

export const HeaderContent = styled.div`
  display: flex;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const LoginButton = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s ease;
  border-radius: 5px;

  &:hover {
    background-color: black;
    color: #fff;
  }
`;

export const RegisterButton = styled.button`
  background: #e63946;
  color: black;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #d62839;
  }
`;

export const ImageContainer = styled.div`
  img {
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    width: 400px;
    height: auto;
  }
`;

export const ImageTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  max-width: 1120px;
  margin: 2rem auto;
  padding: 0 1.5rem;
`;

export const TextContainer = styled.div`

  h2 {
    font-size: 2rem;
    color: #fff;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #fff;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const DonorButton = styled.button`
  background: #e63946;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #d62839;
  }
`;

export const LearnButton = styled.button`
  background: black;
  color: white;
  border: 1px solid white;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    color: black;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  max-width: 1120px;
  margin: 4rem auto; 
  padding: 0 1.5rem;
  flex-wrap: wrap;
`;

export const InfoCard = styled.div`
  background-color: black;
  padding: 1.6rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 30%;
  min-width: 250px;

  h3 {
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: 600;
    color: white;
  }

  p {
    font-size: 0.875rem;
    color: white;
  }
`;
