import React from "react";
import LoginForm from "../_components/loginForm";
import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextAuth]/options";
import Home from "./home/page";

async function Login() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default Login;
