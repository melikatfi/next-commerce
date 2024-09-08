import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="bg-black min-h-screen grid place-content-center">
      login
      <button
        className="bg-white px-8 py-4 flex gap-2 items-center"
        onClick={() =>
          signIn("google").catch((error) =>
            console.error("Sign-in error", error)
          )
        }
      >
        <FcGoogle size={30} /> Sign in with google
      </button>
    </div>
  );
};

export default Login;
