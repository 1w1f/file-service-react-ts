import { Navigate, useLocation } from "react-router-dom";
import GetAuth from "../common/AuthHelper";

const AuthRoute = (props: any) => {
  let location = useLocation();

  let authValue = GetAuth();
  if (authValue === "") {
    if (location.pathname === "/login") {
      return props.children;
    }
    return <Navigate to="/login"></Navigate>;
  } else {
    if (location.pathname === "/login") {
      return <Navigate to="/home" />;
    }
    return props.children;
  }
};

export default AuthRoute;
