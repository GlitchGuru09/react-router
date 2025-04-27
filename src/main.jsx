import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/ContactUs/Contact.jsx'
import User from './components/User/User.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Github from './components/Github/Github.jsx'
import { githubInfoLoader } from './components/Github/githubInfoLoader.jsx';


// const router = createBrowserRouter([{
//   path: '/',
//   element: <Layout />,
//   children: [
//     {
//       path: "",
//       element: <Home />
//     },
//     {
//       path: "/about",
//       element: <About />
//     },
//     {
//       path: "/contact",
//       element: <Contact />
//     }
//   ]
// }])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'  element={<Layout/>}>
      <Route path=''  element={<Home/>} />
      <Route path='about'  element={<About/>} />
      <Route path='contact'  element={<Contact/>} />
      <Route path='user/:id'  element={<User/>} />
      <Route loader={githubInfoLoader}
             path='github'
             element={<Github/>} />
    </Route>
  )
)
//it can be further nested like contact/test but contact route should be like <route></route> and for single <route/>

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
