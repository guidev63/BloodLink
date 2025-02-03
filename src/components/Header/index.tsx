import React from "react";
import { IconLucideDroplet } from "../icons/IconLucideDroplet";
import {
  HeaderContainer,
  HeaderContent,
  ButtonContainer,
  LoginButton,
  RegisterButton,
  ImageContainer,
  InfoContainer,
  InfoCard,
  ImageTextContainer,
  TextContainer,
  ActionButtons,
  DonorButton,
  LearnButton
} from "../Header/styled";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "1.25rem"
            }}
          >
            <IconLucideDroplet width="24px" height="24px" style={{ color: "#ff4d4d" }} />
            BloodLink
          </span>
        </div>

        <ButtonContainer>
          <LoginButton>Login</LoginButton>
          <RegisterButton>Register</RegisterButton>
        </ButtonContainer>
      </HeaderContent>

      <ImageTextContainer>
        <TextContainer>
          <h2>Save Lives Through <span style={{ color: "#d62839" }}>Blood Donation</span></h2>
          <p>
            Connect with hospitals and donors in your area. Make a difference in someone's life today.
          </p>
          <ActionButtons>
            <DonorButton>Become a Donor</DonorButton>
            <LearnButton>Learn More</LearnButton>
          </ActionButtons>
        </TextContainer>

        <ImageContainer>
          <img
            src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1000&q=80"
            alt="Blood Donation"
          />
        </ImageContainer>
      </ImageTextContainer>

      <InfoContainer>
        <InfoCard>
          <h3>For Donors</h3>
          <p>Register as a donor, schedule appointments, and track your donation history.</p>
        </InfoCard>
        <InfoCard>
          <h3>For Hospitals</h3>
          <p>Manage blood inventory, request donations, and connect with donors.</p>
        </InfoCard>
        <InfoCard>
          <h3>Emergency Support</h3>
          <p>Quick access to blood supply during emergencies with our priority system.</p>
        </InfoCard>
      </InfoContainer>
    </HeaderContainer>
  );
}