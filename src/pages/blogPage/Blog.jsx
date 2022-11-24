import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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

  console.log(data);
  return (
    <section className="flex justify-center relative w-[84vw]">
      <h1>Trishank's Blog</h1>
      <div
        className={`grid gap-3 px-6 grid-cols-2  p-[100px] absolute h-screen w-[84%]`}
      >
        {data.map((item) => {
          return (
            <div key={item.id} className="w-[400px]   bg-color-base">
              <img
                className="w-[400px] h-[200px] object-cover"
                src={item.imageURL}
              />
              <div className="p-5">
                <h2 className="font-semibold text-white pb-3">{item.title}</h2>
                {item.subtitle !== undefined && item.subtitle !== null && (
                  <p>{item.subtitle.slice(0, 54)}...</p>
                )}
                <div className="flex justify-between">
                  <p className="pt-4">{item.postDate}</p>
                  <button className="bg-color-brand p-3 mt-2 rounded-xl text-color-base font-semibold hover:scale-95 duration-300" onClick={() => handleblogPostDetails(item.id)}>
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
