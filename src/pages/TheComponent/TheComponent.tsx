import styled from "styled-components";
import React from "react";
import SideBarBtns from "../TheComponent/SideBarNavLinks"; 
// Certifique-se de importar o componente corretamente

const SideBarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  display: block;
  z-index: 2;
  transition: transform 0.3s ease-in-out;
`;

const SideBarBody = styled.div`
  background: linear-gradient(0deg, #3358f4, #1d8cf8);
  height: 100vh;
  overflow: hidden;
`;

const UnorderList = styled.ul`
  position: relative;
  list-style: none;
  display: block;
  transition: all 0.5s ease;
`;

const makeButtons = [
  {
    to: "dashboard/home",
    icon: <i className="fa-solid fa-house"></i>,
    title: "Dashboard"
  },
  {
    to: "dashboard/profile",
    icon: <i className="fa-solid fa-id-card"></i>,
    title: "Profile",
  },
  {
    to: "dashboard/features",
    icon: <i className="fa-solid fa-bag-shopping"></i>,
    title: "Features"
  },
  {
    to: "dashboard/revenue",
    icon: <i className="fa-solid fa-square-poll-vertical"></i>,
    title: "Revenue"
  },
  {
    to: "dashboard/analytics",
    icon: <i className="fa-solid fa-chart-pie"></i>,
    title: "Analytics"
  },
  {
    to: "dashboard/calendar",
    icon: <i className="fa-solid fa-calendar-days"></i>,
    title: "Calendar"
  },
  {
    to: "dashboard/messages",
    icon: <i className="fa-solid fa-comment"></i>,
    title: "Messages"
  },
  {
    to: "dashboard/wallets",
    icon: <i className="fa-solid fa-wallet"></i>,
    title: "Wallets",
    span: "New"
  },
  {
    to: "dashboard/settings",
    icon: <i className="fa-solid fa-gear"></i>,
    title: "Settings"
  }
];

const TheComponent: React.FC = () => {
  return (
    <div>
      <SideBarWrapper>
        <SideBarBody>
          <UnorderList>
            {makeButtons.map((btn, i) => (
              <SideBarBtns key={i} to={btn.to} icon={btn.icon} title={btn.title} />
            ))}
          </UnorderList>
        </SideBarBody>
      </SideBarWrapper>
    </div>
  );
};

export default TheComponent;
