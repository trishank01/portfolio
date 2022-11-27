import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";
import { REGISTER_USER_Email, USER_DISPLAY_NAME } from "../../redux/slice/authSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()

  const handleFormSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/admin/add");
        toast.success("login successfully")
        // ...
      })
      .catch((error) => {
        toast.error(error.message)

      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // const uid = user.uid;
        dispatch(REGISTER_USER_Email(user.email))
        dispatch(USER_DISPLAY_NAME(user.displayName))
      } else {
        //dispatch(REMOVE_ACTIVE_USER());
        // User is signed out
        // ...
      }
    });
  }, [dispatch]);

  return (
    <section className="flex w-[84vw]  h-screen justify-center items-center">
      <div>
        <h2 className="text-[20px] text-color-brand  flex justify-center">
          only admin Login
        </h2>
        <div className=" w-[800px] h-[500px]">
          <form onSubmit={handleFormSubmit}>
            <div className="m-8">
              <input
                className="p-4 mx-4 w-[88%] bg-color-base"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="m-8">
              <input
                className="p-4 mx-4 w-[88%] bg-color-base"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="m-8">
              <button className="p-4 mx-4 w-[88%] bg-color-brand2 text-color-base2 font-bold">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
