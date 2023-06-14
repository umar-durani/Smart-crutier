// import logo from './logo.svg';
import './App.css';
import Homescreen from './component/Homescreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { BrowserRouter,Route,Routes, } from 'react-router-dom'
import Employes from './component/Employes';
import Candidate from './component/Candidate';
import Jobs from './component/Jobs'
import Setting from './component/Setting';

function App() {
  return (
    <>
      {/* <Homescreen/>
      <Homescreen2/>
      {/* <Employes/> */}
      {/* <Setting */}


<BrowserRouter>
<Routes>
  <Route path='/employes' element={<Employes/>}/>
  <Route path='/Home' element={<Homescreen/>}/>
  <Route path='/setting' element={<Setting/>}/>
  <Route path='/candidate' element={<Candidate/>}/>
  <Route path='/jobs' element={<Jobs/>}/>
</Routes>
</BrowserRouter>


      
    </>


    
  );
} 

export default App;
