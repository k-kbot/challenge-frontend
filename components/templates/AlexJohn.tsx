import { FC } from "react";
import { Post } from "../organisms/Post";

export const AlexJohn: FC = () => {
  return (
    <Post
      postedDate="Jun 1, 2020"
      tagName="Laravel"
      title="Build Your New Idea with Laravel Freamwork."
      summary="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!"
      path="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
      name="Alex John"
    />
  );
};
