import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { login } from "../../redux/slices/authSlice";


const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (role: "admin" | "student" | "teacher" | "parent") => {
    dispatch(login(role)); // Dispatch the role to the Redux state
    navigate("/dashboard"); // Navigate to the dashboard route, `ProtectedRoute` will handle redirection
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => handleLogin("admin")}>Login as Admin</button>
      <button onClick={() => handleLogin("student")}>Login as Student</button>
      <button onClick={() => handleLogin("teacher")}>Login as Teacher</button>
      <button onClick={() => handleLogin("parent")}>Login as Parent</button>
    </div>
  );
};

export default Login