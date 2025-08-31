import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './home/Home.jsx'
import Info from './personalInfo/Info.jsx'
import Skills from './skills/Skills.jsx'
import Project from './projects/Project.jsx'
import Contact from './contact/Contact.jsx'

function App() {

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-dark fixed-top" id="navbar-example2">
        <div class="container-fluid">
          <p class="name h4"><span class="heading mb-0 h2">PKS</span>Portfolio</p>
          <button class="navbar-toggler" data-bs-theme="dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end " id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item mx-3">
                  <a class="nav-link text-light fs-4" href="#scrollspyHeading1">Home</a>
                </li>
                <li class="nav-item mx-3">
                  <a class="nav-link text-light fs-4" href="#scrollspyHeading2">About</a>
                </li>
                <li class="nav-item mx-3" >
                  <a class="nav-link text-light fs-4" href="#scrollspyHeading3">Skills</a>
                </li>
                <li class="nav-item mx-3">
                  <a class="nav-link text-light fs-4" href="#scrollspyHeading4">Project</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light fs-4" href="#scrollspyHeading5">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div data-bs-spy="scroll" data-bs-target="#navbar-example2"  data-bs-smooth-scroll="true" class="scrollspy-example " >
        <div id='scrollspyHeading1'>
          <Home />
        </div>
        <div id='scrollspyHeading2'>
          <Info />
        </div>
        <div id='scrollspyHeading3'>
          <Skills />
        </div>
        <div id='scrollspyHeading4'>
          <Project />
        </div>
        <div id='scrollspyHeading5'>
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App
