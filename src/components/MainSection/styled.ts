import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem;
  background-color: #1a1a1a; /* Cor de fundo */
`;

export const Content = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 500px;
  text-align: left;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #fff;
  font-weight: bold;
  margin-bottom: 1rem;

  span {
    color: #ff4d4d;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #ccc;
  margin-bottom: 1.5rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const PrimaryButton = styled.button`
  background-color: #ff4d4d;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #cc0000;
  }
`;

export const OutlineButton = styled.button`
  background-color: transparent;
  border: 2px solid #ff4d4d;
  color: #ff4d4d;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ff4d4d;
    color: #fff;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
`;
