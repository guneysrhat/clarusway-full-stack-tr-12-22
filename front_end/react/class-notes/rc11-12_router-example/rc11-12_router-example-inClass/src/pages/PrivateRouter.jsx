import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const user = false;

  return <div>{user ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default PrivateRouter;
