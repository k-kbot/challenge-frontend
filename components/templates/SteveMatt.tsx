import { FC } from "react";
import { Post } from "../organisms/Post";

export const SteveMatt: FC = () => {
  return (
    <Post
      postedDate="Dec 23, 2018"
      tagName="Django"
      title="Django Dashboard - Learn by Coding"
      summary="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!"
      path="https://images.unsplash.com/photo-1500757810556-5d600d9b737d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=735&q=80"
      name="Steve Matt"
    />
  );
};
