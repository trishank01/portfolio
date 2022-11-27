import {
  addDoc,
  collection,
  Timestamp,
} from "firebase/firestore";
import {
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import { toast } from "react-toastify";
import "../../../node_modules/react-quill/dist/quill.snow.css";
import { db, storage } from "../../firebase/config";
import { useParams } from "react-router-dom";
import { selectBlogData } from "../../redux/slice/blogSlice";
import { useSelector } from "react-redux";


const initialState = {
    title: "",
    subtitle : "",
    category: "",
    image: "",
    imageURL: "",
    blogbody : ""
  }


const AddBlog = () => {

  const {id} = useParams()
  const blogData = useSelector(selectBlogData)
  const [quill, setQuill] = useState("");
  const blogEdit = blogData.find((item) => item.id === id)
  // const [postValue, setPostValue] = useState(initialState);

  const [postValue, setPostValue] = useState(() => {
    const newState = detectForm(id ,
      {...initialState}, 
      blogEdit
      )
      console.log(newState)
      return newState
  });


  function detectForm(id , f1 ,f2) {
    if(id === "add"){
      return f1
    }
    else{
      return f2
    }
}



 



  const handleRichTextChange = (e) => {
    setQuill(e);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setPostValue({ ...postValue, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const today = new Date();
    const date = today.toDateString();
    try {
      addDoc(collection(db, "blog"), {
        title: postValue.title,
        subtitle : postValue.subtitle,
        category: postValue.category,
        blogbody: quill,
        imageURL: postValue.imageURL,
        postDate: date,
        createdAt: Timestamp.now().toDate(),
      });
      toast.success("blog added Successfully..");
    } catch (error) {
      toast.error(error.message);
    }
    setPostValue({
      title: "",
      category: "",
      image: "",
      imageURL: "",
    });
    setQuill("");
  };

  const handleFromEdit = () => {

  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const imageRef = ref(storage, `images/${file.name}${Date.now()}`);
    uploadBytes(imageRef, file).then(
      (snapshot) => {
        toast.success("image uploaded")
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          setPostValue({ ...postValue, imageURL: downloadURL });
        });
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error.message);
      }
    );
  };

  return (
    <section className="flex w-[65vw]">
      <div>
        <div className=" w-[1000px]">
          <h1 className="p-4 pb-0 mx-8 flex justify-start">{id === "add" ? "ADD BLOG POST" : "EDIT BLOG POST"}</h1>
          <form onSubmit={detectForm(id , handleFormSubmit , handleFromEdit)}>
            <div className="m-8">
              <input
                className="p-4 mx-4 w-[88%] text-black font-semibold placeholder:text-gray-500"
                name="title"
                type="text"
                value={postValue.title}
                onChange={(e) => onChangeHandler(e)}
                placeholder="Blog Title"
              />
            </div>
            <div className="m-8">
              <input
                className="p-4 mx-4 w-[88%] text-black font-semibold placeholder:text-gray-500"
                name="subtitle"
                type="text"
                value={postValue.subtitle}
                onChange={(e) => onChangeHandler(e)}
                placeholder="Sub-Title"
              />
            </div>
            <div className="m-8 text-gray-500 font-semibold">
              <select
                className="p-4 mx-4 w-[88%]"
                name="category"
                value={postValue.category}
                onChange={(e) => onChangeHandler(e)}
              >
                <option value="" disabled>
                  Select Any Category
                </option>
                <option value="reactjs">Reactjs</option>
                <option value="javascript">JavaScript</option>
                <option value="ui">UI Desgin</option>
              </select>
            </div>
            <div className="m-8">
              <input
                type="file"
                className="p-4 mx-4 w-[88%] bg-white text-gray-500 font-semibold"
                name="image"
                accept="image/*"
                onChange={(e) => handleImageChange(e)}
              />
            </div>
            <div className="m-8">
              <input
                type="text"
                name="imageURL"
                disabled
                hidden
                value={postValue.imageURL}
              />
            </div>

            <div className="ml-11 p-6 bg-white text-black w-[84%]">
              <ReactQuill
                placeholder="write your thought here"
                modules={AddBlog.modules}
                theme="snow"
                formats={AddBlog.formats}
                onChange={(e) => handleRichTextChange(e)}
                value={id === "add" ? quill : postValue.blogbody }
              />
            </div>
            <div className="m-8">
              <button
                type="submit"
                className="p-4 mx-4 w-[88%] bg-color-brand2 text-color-base2 font-bold disabled:cursor-not-allowed disabled:bg-[#D3D3D3]"
                disabled={postValue.imageURL === ""}
              >
                {id === "add" ? "ADD BLOG" : "EDIT BLOG"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

(AddBlog.modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image" ],
    ["clean" ],
    ['code-block']
  ],
}),
  (AddBlog.formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'code-block',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'color',
  ]);

export default AddBlog;
