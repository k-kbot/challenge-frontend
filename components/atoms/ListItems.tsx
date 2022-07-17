import { FC } from "react";

type Props = {
  texts: string[];
};

export const ListItems: FC<Props> = ({ texts }) => {
  return (
    <>
      {texts.map((text) => {
        return <li>{text}</li>;
      })}
    </>
  );
};
