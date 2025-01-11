// "use client";

// import { Dispatch, SetStateAction, useState, useRef, useEffect } from "react";
// import { User } from "firebase/auth";
// import { auth } from "../firebase";
// import { signOut } from "firebase/auth";
// import TaskBuddy from "./ui/TaskBuddy";
// import userImg from "../assets/userImg.jpg";
// import { useNavigate } from "react-router-dom";

// function Navbar({
//   user,
//   setUser,
// }: {
//   user: User | null;
//   setUser: Dispatch<SetStateAction<User | null>>;
// }) {
//   console.log(user);
//   const navigate = useNavigate();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const modalRef = useRef<HTMLDivElement>(null);
//   const imgRef = useRef<HTMLImageElement>(null);

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       setUser(null);
//       navigate("/");
//     } catch (error) {
//       console.error("Error logging out:", error);
//     }
//   };

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         modalRef.current &&
//         !modalRef.current.contains(event.target as Node) &&
//         imgRef.current &&
//         !imgRef.current.contains(event.target as Node)
//       ) {
//         setIsModalOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="relative">
//       <div className="flex justify-between p-4 md:px-8 lg:px-10">
//         <TaskBuddy />
//         <img
//           ref={imgRef}
//           className="rounded-full w-12 max-h-max cursor-pointer"
//           src={user?.photoURL ? user?.photoURL : userImg}
//           alt="User profile"
//           onClick={toggleModal}
//         />
//       </div>

//       {isModalOpen && (
//         <div
//           ref={modalRef}
//           className="absolute right-4 md:right-8 lg:right-10 top-20 bg-white rounded-lg shadow-lg p-4 w-64 z-10"
//         >
//           <p className="mb-2 font-semibold">{user?.displayName || "N/A"}</p>
//           <p className="mb-4 text-sm text-gray-600">{user?.email || "N/A"}</p>
//           <div className="flex flex-col space-y-2">
//             <button
//               className=" hover:bg-gray-800 text-center duration-500 cursor-pointer gap-2 bg-black px-6 text-white py-3 rounded-xl"
//               onClick={toggleModal}
//             >
//               Cancel
//             </button>
//             <button
//               className=" hover:bg-red-500 text-center duration-500 cursor-pointer gap-2 bg-red-600 px-6 text-white py-3 rounded-xl"
//               onClick={handleLogout}
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Navbar;
