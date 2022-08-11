// SVGs taken from pixabay.com

import { getRandomNumberUpTo } from "../../utils/get-random-number";

export interface AvatarType {
  label: string;
  name: AvatarName;
  svgPath: string;
}

export enum AvatarName {
  NONE = "NONE",
  RABBIT = "RABBIT",
}

export const avatarTypes: Record<AvatarName, AvatarType> = {
  [AvatarName.NONE]: {
    label: "None",
    name: AvatarName.NONE,
    svgPath: "",
  },
  [AvatarName.RABBIT]: {
    label: "Rabbit",
    name: AvatarName.RABBIT,
    svgPath: "./assets/svg/rabbit-shadow.svg",
  },
}

const avatarTypesAsArray = Object.values(avatarTypes);
avatarTypesAsArray.shift(); // remove NONE

export const getRandomAvatar = (): AvatarName => {
  const randomNumber = getRandomNumberUpTo(avatarTypesAsArray.length);
  
  return avatarTypesAsArray[randomNumber].name;
}