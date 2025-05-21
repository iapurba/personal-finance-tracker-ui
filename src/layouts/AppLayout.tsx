import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <header className="header">My App Header</header>
      <main className="hero-section">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
