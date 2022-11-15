import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const user = true; //TODO: useSelector

  return user.email ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
