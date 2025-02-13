import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
`;

export const Sidebar = styled.div`
  width: 250px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
  background: #f5f5f5;
  position: relative;
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  flex: 1;
  text-align: center;
  color: #ff4d4d;
`;

/* 🔹 Estilização do botão */
export const Button = styled.button`
  background-color: #ff4d4d;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e04343;
  }

  &:focus {
    outline: none;
  }

  &:active {
    background-color: #d23737;
  }
`;

/* 🔹 Estilização do cabeçalho do dashboard */
export const DashboardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

/* 🔹 Novo estilo para o perfil */
export const ProfileContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  background: white;
  padding: 10px 15px;
  border-radius: 50px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 200px; /* Evita que o perfil fique muito largo */
  overflow: hidden;
  white-space: nowrap;
`;

/* 🔹 Estilização da imagem de perfil */
export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

/* 🔹 Nome do usuário no perfil */
export const ProfileName = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
`;
