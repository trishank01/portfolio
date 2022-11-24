import React, { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import { selectBlogData } from "../../redux/slice/blogSlice";
import { useSelector } from "react-redux";

const BlogDetails = () => {
  const { id } = useParams();
  const blogDetails = useSelector(selectBlogData);
  const [blogData, setBlogData] = useState(blogDetails);

  const filterBlog = blogData.filter((blog) => {
    return blog.id === id;
  });

  console.log(blogDetails)
  return (
    <div>
      {filterBlog.map((item) => {
        // <div dangerouslySetInnerHTML={item.blogbody}/>
        return (
          <div className="w-[80vw]  text-white mx-10 my-10 px-10">
            <div className="flex pl-4">
              <div className="w-[70%] my-3">
                <h1 className="font-bold text-[42px]">{item.title}</h1>
                <div className="w-full h-[500px]">
                  <img
                    className="w-[100%] h-[100%] object-cover rounded-[20px]"
                    src={item.imageURL}
                    alt={item.id}
                  />
                </div>
             
                <h3 className="text-[18px] py-6">{item.subtitle}</h3>
                <p className="flex mb-4">Posted On &nbsp; <b>{item.postDate}</b> 
                  <span> &nbsp; by  &nbsp; <b>Trishank</b></span>
                </p>
                <div  dangerouslySetInnerHTML={{__html : item.blogbody}}/>
              </div>
              <div className="w-[30%]">
                
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogDetails;
