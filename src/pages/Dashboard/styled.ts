import styled from "styled-components";

/* 🔹 Container principal */
export const Container = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
`;

/* 🔹 Barra lateral */
export const Sidebar = styled.div`
  width: 250px;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

/* 🔹 Conteúdo principal */
export const Content = styled.div`
  flex: 1;
  padding: 20px;
  background: #f5f5f5;
  position: relative;
  overflow-y: auto; 
`;

/* 🔹 Cards responsivos */
export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
`;

/* 🔹 Estilo dos cards */
export const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  flex: 1;
  text-align: center;
  color: #ff4d4d;
  min-width: 150px;
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
  width: 100%;

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

/* 🔹 Cabeçalho do Dashboard */
export const DashboardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

/* 🔹 Perfil do usuário */
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
  max-width: 200px; 
  overflow: hidden;
  white-space: nowrap;

  @media (max-width: 768px) {
    top: 10px;
    right: 10px;
    padding: 8px;
    max-width: 150px;
  }
`;

/* 🔹 Imagem do perfil */
export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

/* 🔹 Nome do usuário */
export const ProfileName = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
`;
