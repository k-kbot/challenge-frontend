import { FC } from "react";

type Props = {
  text: string;
  url: string;
};

export const TextLink: FC<Props> = ({ text, url }) => {
  return <a href={url}>{text}</a>;
};
