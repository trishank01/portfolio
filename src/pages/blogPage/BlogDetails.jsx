import React, { useState } from 'react'
import { doc, getDoc } from "firebase/firestore";
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/config';
import { selectBlogData } from '../../redux/slice/blogSlice';
import { useSelector } from 'react-redux';


const BlogDetails = () => {
const {id} = useParams()
const blogDetails = useSelector(selectBlogData)
const [blogData, setBlogData] = useState(blogDetails)


// const docRef = doc(db, "blog", id);
// const docSnap =  getDoc(docRef);

//  console.log(docSnap.then((res) => res))
const filterBlog = blogData.filter((blog) => {
    return blog.id === id
})

console.log(filterBlog)
  return (
    <div>
        <div>details</div>
        {filterBlog.map((item) => {
            // <div dangerouslySetInnerHTML={item.blogbody}/>
           return (
            <div>
                <h1>{item.title}</h1>
                <h3>{item.subtitle}</h3>
                <div dangerouslySetInnerHTML={{__html : item.blogbody}}/>
            </div>

           )
        })}
    </div>
  )
}

export default BlogDetails