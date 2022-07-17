import { FC } from "react";
import { Heading } from "../atoms/Heading";
import { TextLink } from "../atoms/TextLink";
import { Image } from "../atoms/Image";

export const RecentPost: FC = () => {
  return (
    <div>
      <Heading tag="h1">RecentPost</Heading>
      <div>
        <div>
          <TextLink text="Laravel" url="#" />
        </div>
        <div>
          <TextLink
            text="Build Your New Idea with Laravel Freamwork."
            url="#"
          />
        </div>
        <div>
          <div>
            <Image path="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80" />
            <TextLink text="Alex John" url="#" />
          </div>
          <span>Jun 1, 2020</span>
        </div>
      </div>
    </div>
  );
};
