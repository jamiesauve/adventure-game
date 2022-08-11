// SVGs taken from pixabay.com

export interface AvatarType {
  label: string;
  svgPath: string;
}

export enum AvatarName {
  NONE = "NONE",
  RABBIT = "RABBIT",
}

export const avatarTypes: Record<AvatarName, AvatarType> = {
  [AvatarName.NONE]: {
    label: "None",
    svgPath: "",
  },
  [AvatarName.RABBIT]: {
    label: "Rabbit",
    svgPath: "./assets/svg/rabbit-shadow.svg",
  },
}