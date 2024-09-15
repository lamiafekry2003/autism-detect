
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home/Home"
import Layout from "./component/Layout/Layout"
import About from "./pages/About/About"
import Services from "./pages/Services/Services"
import Application  from "./pages/Application/Application"
import Resource from "./pages/Resource/Resource"


function App() {
  const routs=createBrowserRouter([
    {path:"",element:<Layout></Layout>,children:[
      {path:'/',element:<Home></Home>},
      {path:'about',element:<About></About>},
      {path:'service',element:<Services></Services>},
      {path:'application',element:<Application></Application>},
      {path:'resource',element:<Resource></Resource>}
    ]}
  ])

  return (
    <RouterProvider router={routs}/>
  )
}

export default App
