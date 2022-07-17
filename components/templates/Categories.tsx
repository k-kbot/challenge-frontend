import { FC } from "react";
import { Heading } from "../atoms/Heading";
import { ListItems } from "../atoms/ListItems";

export const Categories: FC = () => {
  return (
    <div>
      <Heading tag="h1">Categories</Heading>
      <div>
        <ul>
          <ListItems
            texts={[
              "- AWS",
              "- Laravel",
              "- Vue",
              "- Design",
              "- Django",
              "- PHP",
            ]}
          />
        </ul>
      </div>
    </div>
  );
};
