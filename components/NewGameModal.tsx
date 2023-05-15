import axios from "axios";
import { getCookie } from "cookies-next";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userID } from "../store/user.store";
import FormModal from "./FormModal";

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
  const platforms = ["직접 입력", "Steam", "Nintendo", "Playstation", "Mobile"];
  const userid = useRecoilValue(userID);
  const [games, setGames] = useState<appData[]>([]);
  const [game, setGame] = useState<appData>({});
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const token = getCookie("Auth");
    axios.defaults.headers.common["Authorization"] = token;

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
                  title: e.target.value,
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
