import { Outlet } from "react-router-dom";
import Header from './../components/custom/Header';

function RootLayout() {
  return (
    <div>
      <Header />   {/* ✅ Header always visible */}
      <main className="p-4">
        <Outlet /> {/* ✅ where child routes render */}
      </main>
    </div>
  );
}

export default RootLayout;
