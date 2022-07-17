import { FC } from "react";

type Props = {
  title?: string;
};

export const Button: FC<Props> = ({ title }) => {
  return <button type="button">{title}</button>;
};
