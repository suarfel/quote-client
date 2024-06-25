import Button from "../components/UI/Button";
import RegisterMain from "../components/register/RegisterMain";
import useHttp from "../hooks/userHttp";
import { register } from "../api/authApi";


const SignUpPage = () => {

  return (
    <div>
      <RegisterMain />
    </div>
  );
};
export default SignUpPage;
