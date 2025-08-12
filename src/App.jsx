import { Route, Routes } from "react-router-dom";
import CreateBlog from "./Pages/CreateBlog";
import Blog from "./Pages/Blog";
import { useState } from "react";
import BlogList from "./Pages/BlogDetails";

function App(){
const [data,dataStoring]=useState([])
  return( 
  <Routes>
    <Route path="/" element={<CreateBlog data={data} dataStoring={dataStoring}/>}/>
    <Route path="/blog" element={<Blog data={data}/>}/>
    <Route path="/details/:id" element={<BlogList data={data}/>}/>
  </Routes>
  )

}

export default App