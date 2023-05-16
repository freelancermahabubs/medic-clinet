/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import googleIcon from "../../assets/google.png";
import facebookIcon from "../../assets/fb.png";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIN = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
        toast.success("login success");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="mb-5">
      <div className="space-y-3 w-10/12 mx-auto">
        <button className="flex rounded-full border-2 p-3 items-center w-full">
          <img className="w-8 h-8" src={facebookIcon} alt="" />
          <div className="text-center text-lg text-black mx-auto">
            <span>Continue with Facebook</span>
          </div>
        </button>
        <button
          onClick={handleGoogleSignIN}
          className="flex rounded-full border-2 p-3 items-center w-full"
        >
          <img className="w-8 h-8" src={googleIcon} alt="" />
          <div className="text-center text-lg text-black mx-auto">
            <span>Continue with Google</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
