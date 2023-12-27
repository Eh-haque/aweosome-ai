import {
  ArrowLeftEndOnRectangleIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link, Outlet, useNavigate } from "react-router-dom";
export default function PrivateLayout() {
  const [menuCollapse, setMenuCollapse] = useState(false);
  const [loading, setLoading] = useState(true);
  const menuIconeClick = () => {
    setMenuCollapse(!menuCollapse);
  };
  const navigate = useNavigate();
  const isAuthenticated = true;
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
    setLoading(false)
  }, [isAuthenticated, navigate]);

  if(loading){
    return "loading"
  }
  return (
    <div className="flex">
      <Sidebar
        className="h-screen shadow-lg"
        collapsed={menuCollapse}
        collapsedWidth="80px"
      >
        <div className="border-y py-6 text-center">
          <Link to="/" className="cursor-pointer text-blue-500">
            {menuCollapse ? "AI" : "Awesome AI Platform"}
          </Link>
        </div>
        <div className="flex justify-end mx-2" onClick={menuIconeClick}>
          {/* changing menu collapse icon on click */}
          {menuCollapse ? (
            <ArrowRightIcon className="h-6 w-6 text-blue-500  rounded-full hover:bg-gray-200" />
          ) : (
            <ArrowLeftIcon className="h-6 w-6 text-blue-500  rounded-full hover:bg-gray-200" />
          )}
        </div>
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              if (level === 0)
                return {
                  color: disabled ? "#f5d9ff" : "#00000",
                  backgroundColor: active ? "#eecef9" : undefined,
                  transition: "background-color 0.3s, color 0.3s",
                };
            },
          }}
        >
          <MenuItem component={<Link to="/dashboard/profile"></Link>} icon={<HomeIcon />}>profile </MenuItem>
          <MenuItem icon={<HomeIcon />}>my-ai-tool </MenuItem>
          <SubMenu label="Home" icon={<HomeIcon />}>
            <MenuItem icon={<HomeIcon />}> submit tool </MenuItem>
            <MenuItem icon={<HomeIcon />}> submit tool </MenuItem>
            <MenuItem icon={<HomeIcon />}> submit tool </MenuItem>
            <MenuItem icon={<HomeIcon />}> submit tool </MenuItem>
          </SubMenu>

          <SubMenu icon={<HomeIcon />} label="manager">
            <MenuItem icon={<HomeIcon />}> manage tool </MenuItem>
            <MenuItem icon={<HomeIcon />}>my-ai-tool </MenuItem>
            <MenuItem icon={<HomeIcon />}>my-ai-tool </MenuItem>
            <MenuItem>my-ai-tool </MenuItem>
            <MenuItem>my-ai-tool </MenuItem>
            <MenuItem>my-ai-tool </MenuItem>
            <MenuItem>my-ai-tool </MenuItem>
          </SubMenu>
          <SubMenu icon={<HomeIcon />} label="admin">
            <MenuItem component={<Link to="/dashboard/manage-user"></Link>}> mange user </MenuItem>
            <MenuItem> manage employee </MenuItem>
            <MenuItem> manage employee </MenuItem>
            <MenuItem> manage employee </MenuItem>
            <MenuItem> manage employee </MenuItem>
            <MenuItem> manage employee </MenuItem>
            <MenuItem> manage employee </MenuItem>
            <MenuItem> manage employee </MenuItem>
          </SubMenu>
        </Menu>
        <div className="border-t p-4 text-center">
          <Link to="/" className="cursor-pointer text-blue-500">
            {menuCollapse ? (
              <ArrowLeftEndOnRectangleIcon className="h-8 w-8 inline text-blue-500  rounded-full hover:bg-gray-200" />
            ) : (
              <div>
                <ArrowLeftEndOnRectangleIcon className="h-8 w-8 inline text-blue-500  rounded-full hover:bg-gray-200" />
                Logout
              </div>
            )}
          </Link>
        </div>
      </Sidebar>

      <Outlet />
    </div>
  );
}
