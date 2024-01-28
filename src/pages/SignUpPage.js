import Button from "../components/UI/Button";
import RegisterMain from "../components/register/RegisterMain";
import useHttp from "../hooks/userHttp";
import { register } from "../api/authApi";


const SignUpPage = () => {
//   const { sendReuest, status } = useHttp(register);

//   const navigate = useNavigate();
//   useEffect(() => {
//     if (status === "compeleted") {
//       navigate("/login");
//     }
//   });

//   const registerUserHandler = (user) => {
//     sendReuest(user);
//   };

  return (
    <div>
      <RegisterMain />
    </div>
  );
};
export default SignUpPage;
