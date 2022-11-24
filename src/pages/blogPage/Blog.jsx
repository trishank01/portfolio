import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CardSkeleton from "../../components/CardSkeleton";
import { db } from "../../firebase/config";
import { BLOG_DATA } from "../../redux/slice/blogSlice";
import "./Blog.css";


const Blog = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const getCollection = () => {
    try {
      const docRef = collection(db, "blog");

      const q = query(docRef, orderBy("createdAt", "desc"));

      onSnapshot(q, (Snapshot) => {
        const allData = Snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(allData);
        dispatch(BLOG_DATA(allData))
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getCollection();
  }, []);

  const handleblogPostDetails = (id) => {
    navigate(`/blogdetails/${id}`)
  }

  if(data.length === 0){
    return  (
      <div className="w-[80vw] flex justify-center  h-screen">
      <div className="grid gap-3 px-6 grid-cols-2  p-[100px] absolute ">
         <CardSkeleton />
         <CardSkeleton />
         <CardSkeleton />
         <CardSkeleton />
      </div>
      </div>
    )
  }

  console.log(data);
  return (
    <section className="flex justify-center h-screen relative w-[84vw]">
      <h1>Trishank's Blog</h1>
      <div
        className={`grid gap-5 md:grid-cols-2 py-[60px]  md:p-[100px] absolute h-screen w-[84%]`}
      >
        {data.map((item) => {
          return (
            <div key={item.id} className="w-[250px] md:w-[400px] bg-color-base">
              <img
                className="w-[250px] md:w-[400px]  md:h-[280px] object-cover"
                src={item.imageURL}
              />
              <div className="px-5 py-2">
                <h2 className="font-semibold text-white pb-1">{item.title}</h2>
                {item.subtitle !== undefined && item.subtitle !== null && (
                  <p className="mb-[-10px]">{item.subtitle.slice(0, 54)}...</p>
                )}
                <div className="flex justify-between">
                  <p className="pt-4">{item.postDate}</p>
                  <button className="bg-color-brand px-3 py-1 rounded-xl text-color-base font-semibold hover:scale-95 duration-300" onClick={() => handleblogPostDetails(item.id)}>
                    Read more
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
