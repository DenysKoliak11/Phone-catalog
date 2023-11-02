export enum ModelColorEnum {
  Black = "black",
  Gold = "gold",
  RoseGold = "rosegold",
  Silver = "silver",
  SpaceGrey = "spacegray",
  Green = "green",
  Red = "red",
  White = "white",
  Yellow = "yellow",
  Purple = "purple",
  MidnightGreen = "midnightgreen",
  Coral = "coral",
}

export const ColorsInfo: {
  [key in ModelColorEnum]?: { color: string };
} = {
  [ModelColorEnum.Black]: {
    color: "#4c4c4c",
  },
  [ModelColorEnum.Gold]: {
    color: "#FCDBC1",
  },
  [ModelColorEnum.Silver]: {
    color: "#F0F0F0",
  },
  [ModelColorEnum.RoseGold]: {
    color: "#E0BFB8",
  },
  [ModelColorEnum.SpaceGrey]: {
    color: "#4c4c4c",
  },
  [ModelColorEnum.Green]: {
    color: "#00a797",
  },
  [ModelColorEnum.Red]: {
    color: "#Eb5757",
  },
  [ModelColorEnum.Purple]: {
    color: "#d2cedc;",
  },
  [ModelColorEnum.White]: {
    color: "#fff;",
  },
  [ModelColorEnum.Yellow]: {
    color: "#FFFF00;",
  },
  [ModelColorEnum.MidnightGreen]: {
    color: "#104A44",
  },
  [ModelColorEnum.Coral]: {
    color: "#FF7F50",
  },
};
