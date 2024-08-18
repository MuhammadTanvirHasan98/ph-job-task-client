import { Outlet } from "react-router-dom";


const MainLayout = () => {
  return (
    <div>
      {/* Navbar */}
       <h1>This is navbar</h1>
       <Outlet/>
       <h1>This is footer</h1>
      {/* Footer */}
    </div>
  );
};

export default MainLayout;