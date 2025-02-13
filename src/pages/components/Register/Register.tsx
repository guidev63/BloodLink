import { Droplet } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  RegisterContainer,
  RegisterBox,
  Logo,
  InputField,
  SelectField,
  SubmitButton,
  FooterText,
  Title,
  Description,
  Label, // Adicionando o Label
} from './styled';
import { useState } from 'react';

export function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    userType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <RegisterContainer>
      <RegisterBox>
        <Logo>
          <Droplet width="24px" height="24px" />
          BloodLink
        </Logo>
        <Title>Create an account</Title>
        <Description>Join our community and start saving lives</Description>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <InputField
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <InputField
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <InputField
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <InputField
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label htmlFor="userType">Select user type</Label>
            <SelectField
              name="userType"
              id="userType"
              value={formData.userType}
              onChange={handleChange}
            >
              <option value="">Select user type</option>
              <option value="donor">Donor</option>
              <option value="hospital">Hospital</option>
            </SelectField>
          </div>

          <SubmitButton type="submit">Create account</SubmitButton>
        </form>
        <FooterText>
          Already have an account? <Link to="/login">Sign in</Link>
        </FooterText>
      </RegisterBox>
    </RegisterContainer>
  );
}
