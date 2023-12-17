import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ children }) {
  const isAuthenticatedRedux = useSelector(
    (state) => state.auth.isAuthenticated
  );
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticatedRedux) {
        navigate("/");
      }
    },
    [isAuthenticatedRedux, navigate]
  );

  return isAuthenticatedRedux ? children : null;
}

export default ProtectedRoute;
