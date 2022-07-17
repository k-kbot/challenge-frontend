import { FC } from "react";
import { TextLink } from "../atoms/TextLink";

type Props = {
  title: string;
  summary: string;
};

export const TitleAndSummary: FC<Props> = ({ title, summary }) => {
  return (
    <div>
      <TextLink text={title} url="#" />
      <p>{summary}</p>
    </div>
  );
};
