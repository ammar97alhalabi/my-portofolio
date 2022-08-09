import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Homy from './components/Projects/Homy';
import Skills from './components/Skills';
function App() {
  return (
    
    <>
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route index element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/homy' element={<Homy/>}/>
        <Route path='/skills' element={<Skills/>}/>
        
      </Route>
    </Routes>
    </>
  );
}

export default App;
