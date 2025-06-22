import { Header } from "../components/ui/Header";
import { LoginPageFooter } from "../components/ui/LoginPageFooter";
import { MainLoginPage } from "../components/ui/MainLoginPage";

const LoginPage = () => {
  return (
    <div className="hidden">
      <Header />
      <MainLoginPage />
      <LoginPageFooter />
    </div>
  );
};

export default LoginPage;
