import { Header } from "../components/ui/Header";
import { MainSignupPage } from "../components/ui/MainSignupPage";
import { PageFooter } from "../components/ui/PageFooter";

const SignUpPage = () => {
  return (
    <div className="hidden">
      <Header />
      <MainSignupPage />
      <PageFooter />
    </div>
  );
};

export default SignUpPage;
