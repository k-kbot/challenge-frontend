import { FC } from "react";
import { TextLink } from "../atoms/TextLink";
import { Button } from "../atoms/Button";

export const Navigation: FC = () => {
  return (
    <nav>
      <div>
        <div>
          <TextLink text="Brand" url="#" />
        </div>
        <div>
          <Button />
        </div>
      </div>
      <div>
        <TextLink text="Home" url="#" />
        <TextLink text="Blog" url="#" />
        <TextLink text="About us" url="#" />
      </div>
    </nav>
  );
};
