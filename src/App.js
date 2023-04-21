
import React, { Component } from 'react';
import { createBrowserRouter, RouterProvider, BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './HomePage';
import  ProjectPage from './ProjectPage';


const home = createBrowserRouter([{

  path: "/",
  element : <HomePage/>

},


])






const projetos = createBrowserRouter([{

  path: "/projetos",
  element : <ProjectPage/>

},


])



function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/projetos" element={<ProjectPage />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;


