import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function PrivateLayout() {
  const navigate = useNavigate();
  const isAuthenticated = false;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(-1);
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      {/* sidebar */}
      <Outlet />
    </div>
  );
}
