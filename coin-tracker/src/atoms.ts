import { atom } from "recoil";

// recoil atom 생성
export const isDarkAtom = atom({
  key: "isDark",
  default: false,
});
