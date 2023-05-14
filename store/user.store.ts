import { getCookie } from "cookies-next";
import { atom } from "recoil";
import { v4 } from "uuid";

const sessionStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const id = getCookie(key);
    if (id !== null) {
      setSelf(id);
    }
  };

export const userID = atom<string>({
  key: v4(),
  effects: [sessionStorageEffect("User")],
});

export const tokenValue = atom<string>({
  key: v4(),
});

export const isOwnerValue = atom<boolean>({
  key: v4(),
  default: false,
});
