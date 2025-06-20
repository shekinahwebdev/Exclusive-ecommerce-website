import { Header } from "../components/ui/Header";
import { LoginPageFooter } from "../components/ui/LoginPageFooter";
import { MainLoginPage } from "../components/ui/MainLoginPage";

const LoginPage = () => {
  return (
    <div>
      <Header />
      <MainLoginPage />
      <LoginPageFooter />
    </div>
  );
};

export default LoginPage;
