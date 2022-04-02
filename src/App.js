import React from "react"
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "styled-components"
import { LightTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles"
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Work from "./pages/Work";
import Skill from "./pages/Skill";


function App() {
  return <>

    <GlobalStyle />

      <ThemeProvider theme={LightTheme}>
        
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/work" element={<Work />} />
            <Route path="/skill" element={<Skill />} />
          </Routes>
        
      </ThemeProvider>
    
    </>
    
}

export default App

