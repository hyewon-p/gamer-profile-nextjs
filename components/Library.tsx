import React, { useState } from "react";
import Modal from "./Modal";
import NewGameModal from "./NewGameModal";
import FormModal from "./FormModal";
import { useRecoilValue } from "recoil";
import { isOwnerValue } from "../store/user.store";

interface gameInfo {
  id: number;
  userID: number;
  gameID: string;
  title: string;
  playtime: number;
  image: string;
}

const Library: React.FC<{ appList: gameInfo[] }> = ({ appList }) => {
  const [showModal, setShowModal] = useState(false);
  const isOwner = useRecoilValue(isOwnerValue);

  return (
    <div className="w-[30%]">
      <div className="flex items-center mb-2 mt-1">
        <div className="font-medium text-lg">보유 게임</div>
        <div className="grow"></div>
        {isOwner && (
          <button
            onClick={() => setShowModal(!showModal)}
            className="px-2 py-1 border rounded border-blue-400 text-blue-400 text-sm hover:bg-blue-400/50 hover:text-blue-200"
          >
            추가
          </button>
        )}
      </div>
      <div className="flex flex-col border border-blue-400 rounded px-1 py-2">
        {appList
          .filter((_, i) => i < 100)
          .map((p: gameInfo) => (
            <button
              key={p.gameID}
              className="group relative p-1 grid gap-2 rounded w-full grid-cols-[1rem_1fr] items-center text-start hover:bg-slate-400/50"
            >
              <img src={p.image} />

              <div className="text-sm truncate">{p.title}</div>
              {/* <div className="absolute right-1 top-0 h-full flex items-center opacity-0 group-hover:opacity-100 gap-1">
                  <button className="w-3 h-3">
                    <svg
                      width="100%"
                      height="100%"
                      stroke-linejoin="round"
                      stroke-miterlimit="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="hover:fill-red-600 fill-white"
                    >
                      <path
                        d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z"
                        fill-rule="nonzero"
                      />
                    </svg>
                  </button>
                  <button className="w-3 h-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                      className="hover:fill-red-100 fill-red-500 stroke-0"
                    >
                      <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
                    </svg>
                  </button>
                </div> */}
            </button>
          ))}
      </div>

      <NewGameModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Library;
