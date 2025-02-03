import React from "react";
import {
  Container,
  Content,
  Title,
  Description,
  ButtonContainer,
  PrimaryButton,
  OutlineButton,
  ImageContainer,
  Image
} from "./styled";

export function MainSection() {
  return (
    <Container>
      <Content>
        <Title>
          Save Lives Through <span>Blood Donation</span>
        </Title>
        <Description>
          Connect with hospitals and donors in your area. Make a difference in someone's life today.
        </Description>
        <ButtonContainer>
          <PrimaryButton>Become a Donor</PrimaryButton>
          <OutlineButton>Learn More</OutlineButton>
        </ButtonContainer>
      </Content>

      <ImageContainer>
        <Image
          src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1000&q=80"
          alt="Blood Donation"
        />
      </ImageContainer>
    </Container>
  );
}
