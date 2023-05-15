import axios from "axios";
import { getCookie } from "cookies-next";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userID } from "../store/user.store";
import FormModal from "./FormModal";
import { v4 } from "uuid";

interface appData {
  name: string;
  appID: number;
  playTime: number;
  playTime2: number;
  iconURL: string;
  achievements: any;
}

const NewGameModal = ({ showModal, setShowModal }) => {
  const [platform, setPlatform] = useState<number>(0);
  const [platforms, setPlatforms] = useState(["직접 입력", "STEAM"]);
  const userid = getCookie("User");
  const [games, setGames] = useState<appData[]>([]);
  const [game, setGame] = useState<appData>({});

  // const getPlatformData = async () => {
  //   const user = await axios.post(`${process.env.API_URL}/user/id/${userid}`);
  //   setPlatforms(
  //     [...platforms, user.data.steamKey].filter((key) => key != null)
  //   );
  // };
  // useEffect(() => {
  //   getPlatformData;
  // }, []);
  // const [showModal, setShowModal] = useState(false);

  const getAppData = async (e: any) => {
    setPlatform(e.target.value);
    if (e.target.value != 0) {
      const token = getCookie("Auth");
      axios.defaults.headers.common["Authorization"] = token;

      const fetchedData = await axios.post(`/API/steam/profile/${userid}`);
      const resData: appData[] = fetchedData.data.appList;
      setGames(
        resData.sort((a, b) =>
          a.name > b.name ? 1 : a.name === b.name ? 0 : -1
        )
      );
    }
  };

  useEffect(() => {
    if (!showModal) {
      setPlatform(0);
      setGame({});
      setGames([]);
    }
  }, [showModal]);

  const setAppID = async () => {
    const gameList = await axios.get(`/API/game/gamelist`);
    let num = Math.floor(Math.random() * 1000);
    while (gameList.data.includes(num)) {
      num = Math.floor(Math.random() * 1000);
    }
    setGame((prev) => ({
      ...prev,
      appID: num,
      iconURL: "https://picsum.photos/200/300",
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const token = getCookie("Auth");
    axios.defaults.headers.common["Authorization"] = token;
    if (platform == 0) {
      await setAppID();
    }

    console.log("form:", game);
    const fetch = await axios.post(`/API/game/new`, {
      gameID: game.appID,
      title: game.name,
      platform: platform,
      playtime: Number(game.playTime),
      image: game.iconURL,
    });
    if (fetch.status == 201) {
      setShowModal(false);
    }
  };
  return (
    <FormModal
      showModal={showModal}
      setShowModal={setShowModal}
      ok="추가"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-2 py-4">
        <label className="w-full font-medium">
          연동 플랫폼
          <select
            className="w-2/3 rounded float-right truncate font-normal text-sm py-1"
            onChange={(e) => getAppData(e)}
          >
            {platforms.map((p, i) => (
              <option value={i} key={i}>
                {p}
              </option>
            ))}
          </select>
        </label>
        <label className="w-full font-medium">
          게임
          {games.length > 0 && platform != 0 ? (
            <select
              className="rounded w-2/3 float-right truncate font-normal text-sm py-1"
              onChange={(e) => {
                setGame(games.filter((g) => g.appID == e.target.value)[0]);
              }}
            >
              {games.map((g) => (
                <option value={g.appID} key={g.appID}>
                  {g.name}
                </option>
              ))}
            </select>
          ) : (
            <input
              className="rounded w-2/3 float-right truncate px-2"
              onChange={(e) =>
                setGame((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
              required
            />
          )}
        </label>
        <label className="w-full font-medium">
          플레이타임
          <span className="w-2/3 float-right flex font-normal text-base">
            <input
              required
              value={game.playTime ? game.playTime : ""}
              type="number"
              onChange={(e) =>
                setGame((prev) => ({
                  ...prev,
                  playTime: Number(e.target.value),
                }))
              }
              className="rounded text-black text-end px-2 mr-2 grow"
            />
            <span className="shrink-0 text-sm pt-1">
              {`분 ( ${
                game.playTime ? Math.trunc(game.playTime / 60) : 0
              } 시간 )`}
            </span>
          </span>
        </label>
      </div>
    </FormModal>
  );
};

export default NewGameModal;
