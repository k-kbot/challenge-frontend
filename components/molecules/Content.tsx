import { FC } from "react";
import { TextLink } from "../atoms/TextLink";
import { Image } from "../atoms/Image";
import { Heading } from "../atoms/Heading";

type Props = {
  path: string;
  name: string;
};

export const Content: FC<Props> = ({ path, name }) => {
  return (
    <div>
      <TextLink text="Read more" url="#" />
      <div>
        <a href="#">
          <Image path={path} description="avatar" />
          <Heading tag="h1">{name}</Heading>
        </a>
      </div>
    </div>
  );
};
