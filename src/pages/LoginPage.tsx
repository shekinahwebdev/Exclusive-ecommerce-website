import { Header } from "../components/ui/Header";
import { MainLoginPage } from "../components/ui/MainLoginPage";
import { PageFooter } from "../components/ui/PageFooter";

const LoginPage = () => {
  return (
    <div className="hidden">
      <Header />
      <MainLoginPage />
      <PageFooter />
    </div>
  );
};

export default LoginPage;
