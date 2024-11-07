
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Reception from "./pages/Reception/Reception";
import Floor from "./pages/Floor/Floor";
import PrivateRoute from "./utils/PrivateRoute";
import Layout from "./components/Layout/Layout";
import Forbidden from "./pages/Forbidden/Forbidden";
import { Route, Routes } from "react-router-dom";


function App() {


  return (
    <>
      <Layout children={
       <Routes>
           <Route path='/' element={<Reception/>} /> 
          { <Route path='/floor/:index'  element={<PrivateRoute children={<Floor/>} />} /> }
       </Routes>
      } />
      
      
    </>
  )
}

export default App













