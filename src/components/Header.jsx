import { Select } from "antd";
import { Link, useLocation } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import Profile from "../components/Profile";
const Header = () => {
  const location = useLocation();
  const selectComponent = location.pathname === "/admission";
  // console.log(selectComponent);
  return (
    <div className="flex items-center justify-between">
      {selectComponent && <Profile />}
    </div>
  );
};

export default Header;
