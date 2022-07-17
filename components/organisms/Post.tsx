import { FC } from "react";
import { PostedDateAndTag } from "../molecules/PostedDateAndTag";
import { TitleAndSummary } from "../molecules/TitleAndSummary";
import { Content } from "../molecules/Content";

type Props = {
  postedDate: string;
  tagName: string;
  title: string;
  summary: string;
  path: string;
  name: string;
};

export const Post: FC<Props> = ({
  postedDate,
  tagName,
  title,
  summary,
  path,
  name,
}) => {
  return (
    <div>
      <PostedDateAndTag postedDate={postedDate} tagName={tagName} />
      <TitleAndSummary title={title} summary={summary} />
      <Content path={path} name={name} />
    </div>
  );
};
