import React, { useEffect } from "react";
import {
  REGISTER_USER_Email,
  selectLoginStatus,
  SelectRegisterUser,
} from "../../redux/slice/authSlice";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";


const AdminOnlyRoute = ({ children }) => {
  const dispatch = useDispatch();

  const userEmail = useSelector(SelectRegisterUser);
  const loginStatus = useSelector(selectLoginStatus);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // const uid = user.uid;
        dispatch(REGISTER_USER_Email(user.email));
      } else {
        //dispatch(REMOVE_ACTIVE_USER());
        // User is signed out
        // ...
      }
    });
  }, [dispatch, userEmail]);


    if (userEmail === "trishank01@gmail.com") {
      return children;
    }
  

  return (
    <div>
      <section className="w-[80vw] h-screen flex justify-center items-center">
        <div>
          <h2>Permission Denied</h2>
          <p>This page can only be view by an admin user</p>
          <br />
          <div className="bg-color-brand inline-block px-3 py-4 rounded-md  font-base font-semibold cursor-pointer">
            <Link to="/" className="hover:text-color-base2 text-color-base">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminOnlyRoute;
