import { HomePage } from "./pages/HomePage"
import { ToastContainer } from "react-toastify"

import "./Styles/index.scss";
import'react-toastify/dist/ReactToastify.css' ;

const App = () =>{
  return (
    <>
      <HomePage />
      <ToastContainer autoClose={1500}/>
    </>
  )
}

export default App
