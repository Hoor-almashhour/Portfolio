
import './App.css'
import { Route, Routes } from "react-router-dom"
import React, { useState} from 'react';

import ProjectDetails from './pages/ProjectDetails/ProjectDetails'
import Outlet from './pages/Outlet';



function App() {
    
  return(
    <>
    <Routes>
      <Route path="/" element={<Outlet />} />
      <Route path="details/:id" element={<ProjectDetails />} />
    </Routes>
    </>
  )
}

export default App
