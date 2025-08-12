import { useParams } from "react-router-dom"


function BlogList({data}){
      const {id}=useParams()
      console.log(id)
      const blog=data.find((ele)=>ele.id.toString()===id)

      return(
        <>
        <h1>{blog.heading}</h1>
        <p>{blog.blog}</p>
        </>
      )

}
export default BlogList