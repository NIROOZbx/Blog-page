import { useState } from "react"
import {useNavigate } from "react-router-dom"

function CreateBlog({data,dataStoring}){

const navigate=useNavigate()
const [blog,blogData]=useState('')
const [heading,headingData]=useState('')



function storeData(){
    let obj={
        id:Date.now(),
        heading:heading,
        blog:blog
    }
   dataStoring([...data,obj])
   navigate('/blog')
}
console.log(data)

    return(
        <>
        <h1>Enter Details of the Blog</h1>
        <br></br>
        <label htmlFor="">Heading</label>
        <br></br>
        <input width='600px' type="text" onChange={(e)=>headingData(e.target.value)}/>
        <br></br>

        <label htmlFor="">Blog Details</label>
        <br></br>
        <textarea rows={'20'} cols={'100'} placeholder="Enter your blog details here" onChange={(e)=> blogData(e.target.value)}></textarea>
        <br></br>
        <button onClick={storeData}>Submit</button>
        </>
    )

}

export default CreateBlog