import { NavLink } from "react-router-dom"

function Blog({data}){ 
   
    return( 
     <ul>
  {data.map((ele) => (
    <li key={ele.id}>
      <NavLink to={`/details/${ele.id}`}>
        {ele.heading}
      </NavLink>
    </li>
  ))}
</ul>
     )

}

export default Blog