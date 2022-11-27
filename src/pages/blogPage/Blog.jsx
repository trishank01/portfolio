import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CardSkeleton from "../../components/CardSkeleton";
import { db } from "../../firebase/config";
import { BLOG_DATA } from "../../redux/slice/blogSlice";
import "./Blog.css";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import { LoginNavigation } from "../admin/LoginNavigation";
import { doc, deleteDoc } from "firebase/firestore";
import { async } from "@firebase/util";

const Blog = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const navigate = useNavigate();

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
        dispatch(BLOG_DATA(allData));
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getCollection();
  }, []);

const handleblogPostRemove = async (id) => {
  await deleteDoc(doc(db, "blog", id));
}

//

  const handleblogPostDetails = (id) => {
    navigate(`/blogdetails/${id}`);
  };

  const handleblogPostedit = (id) => {
    navigate(`/admin/${id}`);
  }

  if (data.length === 0) {
    return (
      <div className="w-[80vw] flex justify-center  h-screen">
        {/* <h1 className="flex justify-center">Trishank's Blog</h1> */}
        <div className="grid gap-3 px-6 md:grid-cols-2  md:p-[100px]">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      </div>
    );
  }

  return (
    <section className="flex justify-center h-screen relative w-[84vw]">
      <h1>Trishank's Blog</h1>
      <div
        className={`grid gap-5 md:grid-cols-2 py-[60px]  md:p-[100px] absolute h-screen w-[84%]`}
      >
        {data.map((item) => {
          return (
            <div key={item.id} className="w-[270px] md:w-[400px] bg-color-base">
              <img
                className="w-[270px] md:w-[400px]  md:h-[280px] object-cover"
                src={item.imageURL}
              />
              <div className="px-5 py-2">
                <h2 className="font-semibold text-[18px] md:text-[22px] text-white pb-1">
                  {item.title}
                </h2>
                {item.subtitle !== undefined && item.subtitle !== null && (
                  <p className="mb-[-10px] text-[14px] md:text-[18px]">
                    {item.subtitle.slice(0, 54)}...
                  </p>
                )}
                <div className="flex justify-between mt-4 items-center">
                  <p className="text-[14px] md:text-[18px]">
                    Posted : {item.postDate}
                  </p>
                  <button
                    className="bg-color-brand px-3 py-1 rounded-xl text-color-base font-semibold hover:scale-95 duration-300"
                    onClick={() => handleblogPostDetails(item.id)}
                  >
                    Read more
                  </button>
                </div>
                <LoginNavigation>
                <div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="mt-2">#{item.category}</div>
                    <div className="flex gap-2 ">
                      <RiDeleteBin5Line className="cursor-pointer" size={25}   onClick={() => handleblogPostRemove(item.id)}/>
                      <TbEdit className="cursor-pointer" size={25} onClick={() => handleblogPostedit(item.id)}/>
                    </div>
                  </div>
                </div>
                </LoginNavigation>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
