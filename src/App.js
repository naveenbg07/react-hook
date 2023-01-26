import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ex1 from './component/Ex1'
import Ex2 from './component/Ex2'
import Ex3 from './component/Ex3'
import Ex4 from "./component/Ex4";
import Ex5 from "./component/Ex5";
import Ex6 from "./component/Ex6";
import Ex7 from "./component/Ex7";
import Ex8 from "./component/Ex8";
import Ex9 from "./component/Ex9";
import Menu from './component/Menu';
import Pnf from "./component/Pnf";


function App(){
  return(
    <BrowserRouter>
            <Menu/>
            <Routes>
              <Route path={`/`} element={<Ex1/>}/>
              <Route path={`/ex2`} element={<Ex2/>}/>
              <Route path={`/ex3`} element={<Ex3/>}/>
              <Route path={`/ex4`} element={<Ex4/>}/>
              <Route path={`/ex5`} element={<Ex5/>}/>
              <Route path={`/ex6`} element={<Ex6/>}/>
              <Route path={`/ex7`} element={<Ex7/>}/>
              <Route path={`/ex8`} element={<Ex8/>}/>
              <Route path={`/ex9`} element={<Ex9/>}/>
          
              <Route path={`/*`} element={<Pnf/>}/>
            </Routes>
    </BrowserRouter>
  )
}
export default App