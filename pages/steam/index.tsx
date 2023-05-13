import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { getCookie } from "cookies-next";
import Library from "../../components/Library";
import Trait from "../../components/Trait";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { userID } from "../../store/user.store";

axios.defaults.withCredentials = true;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = getCookie("Auth", context);
  axios.defaults.headers.common["Authorization"] = token;

  try {
    const id = getCookie("User", context);

    return {
      redirect: {
        destination: `/steam/${id}`,
      },
      props: {},
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/steam/login",
        permanent: false,
      },
    };
  }
};
const SteamPage = () => {
  return <></>;
};

export default SteamPage;
