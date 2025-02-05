// src/pages/Login.tsx
import React from 'react';
import { 
  LoginContainer, 
  LoginBox, 
  Logo, 
  Title, 
  Subtitle, 
  Form, 
  Input, 
  Button, 
  FooterText 
} from './styled';
import { IconLucideDroplet } from '../../components/icons/IconLucideDroplet';  // Ícone do logo, se você já tiver ele

export function Login() {
  return (
    <LoginContainer>
      <LoginBox>
        <Logo>
          <IconLucideDroplet width="24px" height="24px" />
          BloodLink
        </Logo>

        <Title>Welcome back</Title>
        <Subtitle>Enter your credentials to access your account</Subtitle>

        <Form>
          <div>
            <label htmlFor="email" style={{ display: 'block', textAlign: 'left', color: '#fff', fontSize: '0.85rem', marginBottom: '5px' }}>Email</label>
            <Input type="email" id="email" placeholder="john@example.com" />
          </div>

          <div>
            <label htmlFor="password" style={{ display: 'block', textAlign: 'left', color: '#fff', fontSize: '0.85rem', marginBottom: '5px' }}>Password</label>
            <Input type="password" id="password" placeholder="•••••" />
          </div>

          <Button type="submit">Sign in</Button>
        </Form>

        <FooterText>
          Don’t have an account?
          <a href="/Register">Sign up</a>
        </FooterText>
      </LoginBox>
    </LoginContainer>
  );
}
