import { GetServerSideProps } from "next";
import { getCookieParser } from "next/dist/server/api-utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";

interface LayoutProps {
  children: React.ReactNode;
  isUser?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ isUser = false, children }) => {
  axios.defaults.withCredentials = true;
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  const [isVerified, setIsVerified] = useState(false);
  useEffect(() => {
    const cookie = getCookie("User");
    setIsVerified(!!cookie || isUser);
  }, []);

  return (
    <div className="w-full flex flex-col items-center bg-black min-h-screen text-white">
      <header className="flex justify-between w-4/6 py-3 max-w-[60vw] 2xl:max-w-[50vw]">
        <div></div>
        {!isVerified && (
          <Link href={"/steam/login"}>
            <div className="cursor-pointer">로그인</div>
          </Link>
        )}
      </header>
      <div className="w-4/6 max-w-[60vw] 2xl:max-w-[50vw] pb-8">{children}</div>
    </div>
  );
};

export default Layout;
