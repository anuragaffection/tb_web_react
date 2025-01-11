import TaskBuddy from "../components/ui/TaskBuddy";
import google from "../assets/google.png";
import circles_bg from "../assets/circles_bg.png";
import task_view from "../assets/task_view.png";
import { googleLogin } from "../services/googleLogin";
import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import { User } from "firebase/auth";

function Login({
  setUser,
}: {
  setUser: Dispatch<SetStateAction<User | null>>;
}) {
  const navigate = useNavigate();
  const handleSignInWithGoogle = async () => {
    const user = await googleLogin();
    if (user !== null) {
      setUser(user);
      navigate("/");
    }
  };
  return (
    <div className="flex items-center max-h-screen min-h-screen relative overflow-hidden">
      <div className=" flex-1 p-4 md:p-8 lg:p-10 flex flex-col gap-5 lg:pl-20">
        <TaskBuddy />
        <div className="max-w-96">
          Streamline your workflow and track progress effortlessly with our
          all-in-one task management app.
        </div>

        <button
          onClick={(event) => {
            event.preventDefault();
            handleSignInWithGoogle();
          }}
          className="flex hover:bg-gray-800 duration-500 cursor-pointer items-center gap-2 bg-black w-max px-6 text-white py-3 rounded-xl"
        >
          <img src={google} alt="google logo" />
          <p className=" font-semibold">Continue with Google</p>
        </button>
      </div>
      <div className="flex bg-blue-950 flex-1">
        <img
          className="absolute top-5 bottom-5 right-10 h-full"
          src={circles_bg}
          alt=""
        />
        <img
          className=" max-w-4xl top-10 h-full -right-80 max-h-max absolute"
          src={task_view}
          alt=""
        />
      </div>
    </div>
  );
}

export default Login;
