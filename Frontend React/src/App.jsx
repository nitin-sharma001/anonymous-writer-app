import { Route, Routes, useLocation } from "react-router-dom";
import Form from './components/FormComponents/Form';
import Home from './components/Home';
import ReadContent from "./components/ReadContent";
import { useContext, useEffect, } from "react";
import { AppContext } from "./context/AppContext";


function App() {

  const {fetchData} = useContext(AppContext);
  const location = useLocation();
  useEffect( () => {
    async function fetching(){
      await fetchData()
    
    }
    fetching()
  }, [location.pathname]);

  return (


    <>

       <Routes>
          <Route path="/create" element={<Form />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/read/:id" element={<ReadContent/>} /> 
        </Routes>


    </>
  )
}

export default App
