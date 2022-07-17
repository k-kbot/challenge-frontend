import { FC } from "react";
import { TextLink } from "../atoms/TextLink";

type Props = {
  postedDate: string;
  tagName: string;
};

export const PostedDateAndTag: FC<Props> = ({ postedDate, tagName }) => {
  return (
    <div>
      <span>{postedDate}</span>
      <TextLink text={tagName} url="#" />
    </div>
  );
};
