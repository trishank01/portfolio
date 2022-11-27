import React, { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import { selectBlogData } from "../../redux/slice/blogSlice";
import { useSelector } from "react-redux";
import "./Blog.css";
import { useEffect } from "react";

const BlogDetails = () => {
  const { id } = useParams();
  const blogDetails = useSelector(selectBlogData);
  const [blogData, setBlogData] = useState(blogDetails);
  const [blogCategory, setBlogCategory] = useState("")
  const navigate = useNavigate()


  const filterBlog = blogData.filter((blog) => {
    return blog.id === id;
  });

  
  useEffect(() => {
    const blogArray = filterBlog.map((item) => item.category)
    setBlogCategory(...blogArray)
  },[])


  const filterBlogCategory = blogData.filter((blog ) => {
    return blog.category.includes(blogCategory);
  });

  const excludeCurrentBlog = filterBlogCategory.filter((blog) => {
    return blog.id !== id
  })

  console.log(excludeCurrentBlog)

  const handleBlogPostChange  = (id) => {
    navigate(`/blogdetails/${id}`)
  }

  return (
    <div>
      {filterBlog.map((item) => {
        return (
          <div className="w-[80vw]  text-white mx-10 my-10 px-10" key={item.id}>
            <div className="flex flex-col md:flex-row md:pl-4 ">
              <div className="w-[320px] md:w-[70%] my-3 ">
                <h1 className="font-bold text-[32px] md:text-[42px] pb-6 text-color-brand">{item.title}</h1>
                <div className="w-full md:h-[500px]">
                  <img
                    className="w-[100%] h-[100%] object-cover rounded-[20px]"
                    src={item.imageURL}
                    alt={item.id}
                  />
                </div>

                <h3 className="text-[18px] py-6">{item.subtitle}</h3>
                <p className="flex mb-4 underline underline-offset-4">
                  Posted On &nbsp; <b>{item.postDate}</b>
                  <span>
                    {" "}
                    &nbsp; by &nbsp; <b>Trishank</b>
                  </span>
                </p>
                <div className="ql-snow">
                  <div dangerouslySetInnerHTML={{ __html: item.blogbody }} />
                </div>
              </div>
              <div className="w-[400px] displayBlock  overflow-scroll pl-4 pb-[80px] fixed h-[800px] right-[15px] flex-col items-center">
                 <h1 className="">Related Post</h1>
                  <div className="">
                    {excludeCurrentBlog.map((item)=> {
                      return (
                        <div className="w-[300px] cursor-pointer  my-8 h-[250px] bg-color-base rounded-3xl overflow-hidden" key={item.id} onClick={() => handleBlogPostChange(item.id)}>
                             <div className="h-[170px]">
                              <img className="w-full h-full" src={item.imageURL}/>
                             </div>
                             <div className="px-3 py-1">
                              <h3 className="text-[17px]  font-semibold">{item.title}</h3>
                              <p className="text-[14px] ">{item.subtitle}</p>
                             </div>
                        </div>
                      )
                    })}
                
                  </div>
              </div>

              <div className="w-[280px] displayBlockMobile pl-4 pb-[80px] flex-col items-center">
                 <h1 className="">Related Post</h1>
                  <div className="">
                    {excludeCurrentBlog.map((item)=> {
                      return (
                        <div className="w-[300px] cursor-pointer  my-8 h-[250px] bg-color-base rounded-3xl overflow-hidden" key={item.id} onClick={() => handleBlogPostChange(item.id)}>
                             <div className="h-[170px]">
                              <img className="w-full h-full" src={item.imageURL}/>
                             </div>
                             <div className="px-3 py-1">
                              <h3 className="text-[17px]  font-semibold">{item.title}</h3>
                              <p className="text-[14px] ">{item.subtitle}</p>
                             </div>
                        </div>
                      )
                    })}
                
                  </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogDetails;
