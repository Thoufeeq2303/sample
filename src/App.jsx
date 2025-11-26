
import Foot from "./header/Foot"
import Nav from "./header/Nav"
import Usestate from "./hooks/Usestate"
import List from "./list/List"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Menu from "./pages/Menu"
import About from "./pages/About"
function Thoufeeq(){
  return(
    <>
    {/* <h2>HELLO Thoufeeq</h2> */}
    {/* <Home/> */}
    {/* <section> */}
      {/* <Component/>
      <Function name="kuhrjhgh"/>
      <ClassPage/> */}
      <Usestate/>
      {/* <Useeffect/>
      <Usememo/>
      <Usecallback/>
      <List/> */}
      {/* <Form/> */}

      
    {/* <section/> */}

    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Menu/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/list" element={<List/>}/>
      </Routes>
      <Foot/>
    </BrowserRouter>
    </>
  )
}
export default Thoufeeq