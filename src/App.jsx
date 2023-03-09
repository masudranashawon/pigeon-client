import { Routes, Route, Navigate } from "react-router-dom";

import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className='app container mx-auto'>
      <div className='upperlavel-contents min-h-screen'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Chat />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='*' element={<Navigate to='/' />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
