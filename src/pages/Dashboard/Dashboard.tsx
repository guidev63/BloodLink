import { Droplet } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Container,
  Sidebar,
  Content,
  CardContainer,
  Card,
  Button,
  ProfileContainer,
  ProfileImage,
  ProfileName,
  DashboardHeader, // Importação do novo estilo
} from "./styled"; 

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 700 },
  { name: "May", value: 600 },
];

const Dashboard = () => {
  return (
    <Container>
      <Sidebar>
        {/* 🔹 Ícone ao lado do título Dashboard */}
        <DashboardHeader>
          <Droplet size={24} color="#ff4d4d"  />
          <h2>BloodLink</h2>
        </DashboardHeader>

        <Button>Home</Button>
      </Sidebar>

      <Content>
        {/* 🔹 Perfil no canto superior direito */}
        <ProfileContainer>
          <ProfileImage src="https://i.pravatar.cc/300" alt="User" />
          <ProfileName>Larissa Kich</ProfileName>
        </ProfileContainer>

        <CardContainer>
          <Card>
            <h3>Followers</h3>
            <p>118</p>
          </Card>
          <Card>
            <h3>Favorites</h3>
            <p>541</p>
          </Card>
          <Card>
            <h3>Earnings</h3>
            <p style={{ color: "#ff4d4d" }}>$1,820</p>
          </Card>
          <Card>
            <h3>Wallet</h3>
            <p style={{ color: "#ff4d4d" }}>$75</p>
          </Card>
        </CardContainer>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#ff4d4d" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </Content>
    </Container>
  );
};

export default Dashboard;
