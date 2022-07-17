import { FC } from "react";
import { Post } from "../organisms/Post";

export const JaneDoe: FC = () => {
  return (
    <Post
      postedDate="mar 4, 2019"
      tagName="Design"
      title="Accessibility tools for designers and developers"
      summary="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!"
      path="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80"
      name="Jane Doe"
    />
  );
};
