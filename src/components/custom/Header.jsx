import React, { useState } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";

const Header = () => {
  const { user, isSignedIn } = useUser();

  return (
    <div className="px-5 p-3 flex justify-between shadow-md">
      <img src="/logo.svg" alt="logo" width={100} height={100} />

      {isSignedIn ? (
        <div className="gap-2 flex items-center">
          <Link to={"/dashboard"}>
            <Button variant="outline">Dashboard</Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to={"/auth/sign-in"}>
          <Button>Get Started</Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
