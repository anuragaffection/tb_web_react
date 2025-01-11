// import { useEffect, useState } from "react";
// import Home from "./page/Home";
// import Login from "./page/Login";
// import { onAuthStateChanged, User } from "firebase/auth";
// import { auth } from "./firebase";

function App() {
  // const [user, setUser] = useState<User | null>(null);
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     return setUser(currentUser);
  //   });
  //   return () => unsubscribe();
  // }, []);

  return (
    <>
      {/* {user ? (
        <Home user={user} setUser={setUser} />
      ) : (
        <Login setUser={setUser} />
      )} */}

      <div>Hello world</div>
    </>
  );
}

export default App;
