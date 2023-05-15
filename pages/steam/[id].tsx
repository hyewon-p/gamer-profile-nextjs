import { GetServerSideProps, GetStaticPaths, NextPage } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { getCookie } from "cookies-next";
import Library from "../../components/Library";
import Trait from "../../components/Trait";
import { useRouter } from "next/router";
import Favorite from "../../components/Favorite";
import Modal from "../../components/Modal";
import { RecoilState, useRecoilState, useSetRecoilState } from "recoil";
import { isOwnerValue, tokenValue, userID } from "../../store/user.store";

axios.defaults.withCredentials = true;

interface appData {
  name: string;
  appID: number;
  playTime: number;
  playTime2: number;
  iconURL: string;
  achievements: any;
}

interface gameInfo {
  id: number;
  userID: number;
  gameID: string;
  title: string;
  playtime: number;
  image: string;
  favorite: any;
}

interface steamData {
  description: string;
  appList: gameInfo[];
  profile: {
    username: string;
    url: string;
    description: string;
  };
  token: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = getCookie("Auth", context);

  axios.defaults.withCredentials = true;
  axios.defaults.headers.common["Authorization"] = token;

  const { id } = context.query;
  // process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  try {
    const fetchedData = await axios.post(
      `${process.env.API_URL}/steam/profile/${id}`
    );

    const userData = await axios.post(`${process.env.API_URL}/user/id/${id}`);
    const libraryData = await axios.get(
      `${process.env.API_URL}/game/user/${id}`
    );
    const resData = fetchedData.data;
    return {
      props: {
        profile: {
          ...userData.data,
          url: resData.profile.url,
          image: resData.profile.avatar.large,
        },
        appList: libraryData.data,

        token: token,
      },
    };
  } catch (error) {
    return {
      props: {
        redirect: {
          destination: "/steam/login",
          permanent: false,
        },
      },
    };
  }
};
const ProfilePage: NextPage<steamData> = ({ appList, profile, token }) => {
  // process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  const router = useRouter();

  const { id } = router.query;
  const userID = getCookie("User");

  const [desc, setDesc] = useState(profile.description);
  const [descMod, setDescMod] = useState();
  const [isOwner, setIsOwner] = useRecoilState(isOwnerValue);

  const fetch = async () => {
    const fetchedData = await axios.post(
      `${process.env.API_URL}/steam/profile/${id}`
    );
    return fetchedData;
  };
  useEffect(() => {
    setIsOwner(id == userID);
  }, []);

  const saveDesc = async () => {
    if (desc != profile.description) {
      const token = getCookie("Auth");
      axios.defaults.headers.common["Authorization"] = token;
      const update = await axios.post("/API/user/desc", {
        desc: desc,
      });
      update.status !== 201 && console.error(update.status);
    }
    setDescMod(!descMod);
  };
  return (
    <Layout>
      <div>
        {profile ? (
          <>
            <div className="grid grid-cols-[7.5rem_3fr_1fr] items-center gap-4 mt-3 mb-8 h-[7.5rem]">
              <img
                className="h-[7.5rem] w-[7.5rem] rounded border border-blue-400"
                src={profile?.image}
              />
              <div className="flex flex-col grow h-full">
                <div className="flex items-center">
                  <div className="py-2 text-lg font-medium">
                    {profile.username}
                  </div>
                  <div className="grow"></div>
                  <div className="flexpr-1 items-center mt-1">
                    <div className="flex gap-2 items-center">
                      <div className="rounded-full h-6 w-6 bg-blue-600">
                        <Link href={profile?.url}>
                          <img
                            className="w-full hover:cursor-pointer"
                            src="https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg"
                          />
                        </Link>
                      </div>
                      <div className="rounded-full overflow-hidden h-6 w-6 bg-red-600">
                        <Link href={profile?.url}>
                          <img
                            className="w-full hover:cursor-pointer"
                            src="https://upload.wikimedia.org/wikipedia/commons/3/38/Nintendo_switch_logo.png"
                          />
                        </Link>
                      </div>
                      <div className="rounded-full h-6 w-6 bg-white">
                        <Link href={profile?.url}>
                          <img
                            className="w-full hover:cursor-pointer"
                            src="https://cdn-icons-png.flaticon.com/512/37/37812.png?w=360"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative grow ">
                  {isOwner && (
                    <button
                      onClick={descMod ? saveDesc : () => setDescMod(true)}
                      className="absolute top-2 right-2 w-4 h-4"
                    >
                      {descMod ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          viewBox="0 0 24 24"
                          stroke="white"
                          fill="white"
                        >
                          <path d="M15.003 3h2.997v5h-2.997v-5zm8.997 1v20h-24v-24h20l4 4zm-19 5h14v-7h-14v7zm16 4h-18v9h18v-9z" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          viewBox="0 0 24 24"
                          stroke="white"
                          fill="white"
                        >
                          <path d="M7.127 22.564l-7.126 1.436 1.438-7.125 5.688 5.689zm-4.274-7.104l5.688 5.689 15.46-15.46-5.689-5.689-15.459 15.46z" />
                        </svg>
                      )}
                    </button>
                  )}

                  <textarea
                    disabled={!(descMod && isOwner)}
                    value={desc}
                    onChange={(v) => setDesc(v.target.value)}
                    className="bg-slate-500/50 rounded w-full h-full px-2 py-1"
                  ></textarea>
                </div>
              </div>

              <div className="rounded border border-blue-400 w-full h-full"></div>
            </div>
            <div className="flex gap-4">
              <div className="grow">
                <Trait />
                <Favorite library={appList} />
              </div>
              <Library appList={appList} />
            </div>
          </>
        ) : (
          <>
            <div>loading...</div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default ProfilePage;
