import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const MainLayout = () => {
  return (
    <div>
      {/* Navbar */}
       <Navbar/>
       <div className="min-h-[calc(100vh-600px)] max-w-[2400px] mx-auto">
        <Outlet />
      </div>
       <h1>This is footer</h1>
      {/* Footer */}
    </div>
  );
};

export default MainLayout;