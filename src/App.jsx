import { useUser } from "@clerk/clerk-react";
import "./App.css";
import { Outlet, Navigate } from "react-router-dom";
import Header from "./components/custom/Header";

function App() {
  const { user, isLoaded, isSignedIn } = useUser();
  if (!isSignedIn && isLoaded) {
    return <Navigate to="/auth/sign-in" />;
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
