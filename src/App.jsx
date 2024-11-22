import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <NavBar />
      <div className="min-h-min">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

// max-w-screen-2xl border-2 border-black mx-auto bg-slate-600

export default App;
