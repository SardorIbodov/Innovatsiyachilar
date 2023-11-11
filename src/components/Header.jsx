import { useLocation } from "react-router-dom";
import Profile from "../components/Profile";
const Header = () => {
  const location = useLocation();
  const selectComponent = location.pathname === "/details";
  return (
    <div className="flex items-center justify-end">
      {selectComponent && <Profile />}
    </div>
  );
};

export default Header;
