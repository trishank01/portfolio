import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { db } from '../../firebase/config';
import './Blog.css'


const Blog = () => {
  const [data, setData] = useState([]);

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
         
        });
      } catch (error) {
        toast.error(error.message);
      }
    }

     useEffect(() => {
      getCollection()
     } , [])

     console.log(data)
  return (
    <div>
      <h1>Blog</h1>
      {data.map((item) => {
        return (
          <div className='imgWidth' dangerouslySetInnerHTML={{ __html: item.blogbody}}/>
        )
      })}
    </div>
  )
}

export default Blog