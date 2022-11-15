import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const user = true; //TODO: useSelector

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
