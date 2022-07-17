import { FC } from "react";

type Props = {
  path: string;
  description?: string;
  width?: number;
  height?: number;
};

export const Image: FC<Props> = ({ path, description, width, height }) => {
  return <img src={path} alt={description} width={width} height={height}></img>;
};
