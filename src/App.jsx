
import { useState } from 'react';
import './App.css'
import FuncCom from './ComposantCours/FunctionalComponentLifeCycle/FuncCom';
import ListManager from './ComposantCours/FunctionalComponentLifeCycle/ListManager';
import ColorBox from './ComposantCours/FunctionalComponentLifeCycle/ColorBox';
import GradeManager from './ComposantCours/FunctionalComponentLifeCycle/GardeMnager';
import TodoList from './ComposantCours/FunctionalComponentLifeCycle/ToDoList';

import ListManager from './ComposantCours/FunctionalComponentLifeCycle/ListManager';
import ColorBox from './ComposantCours/FunctionalComponentLifeCycle/ColorBox';
import GradeManager from './ComposantCours/FunctionalComponentLifeCycle/GardeMnager';
import TodoList from './ComposantCours/FunctionalComponentLifeCycle/ToDoList';




function App() {
  const [{color, background}  , setColor] = useState({color :"red", background :"black"})



  return (
    <>
     <p>la couleur {color} et le background {background}</p>
     <input onChange={e=> setColor(c=> ({...c,color:e.target.value}))}  type="text" />
     <FuncCom />
     <ListManager/>
     <ColorBox/>
     <GradeManager/>
     <TodoList/>




       
    </>
  )
}

export default App