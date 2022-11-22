import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOGOUT_USER, REGISTER_USER_Email, SelectIsLoginedIn } from "../../redux/slice/authSlice";
import AddBlog from "../../components/admin/AddBlog";


const Admin = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
         dispatch(LOGOUT_USER())
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // const uid = user.uid;
        dispatch(REGISTER_USER_Email(user.email))
      } else {
        //dispatch(REMOVE_ACTIVE_USER());
        // User is signed out
        // ...
      }
    });
  }, [dispatch]);




  return (
    <div className="flex flex-col items-center w-[80vw]">
       <AddBlog/>
    </div>
  );
};

export default Admin;
