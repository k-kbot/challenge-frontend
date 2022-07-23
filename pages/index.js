import "tailwindcss/tailwind.css";
import Head from "next/head";
import { TextLink } from "../components/atoms/TextLink";
import { Button } from "../components/atoms/Button";
import { Image } from "../components/atoms/Image";
import { Heading } from "../components/atoms/Heading";
import { ListItems } from "../components/atoms/ListItems";
import { AlexJohn } from "../components/templates/AlexJohn";
import { JaneDoe } from "../components/templates/JaneDoe";
import { KhatabWedaa } from "../components/templates/KhatabWedaa";
import { LisaWay } from "../components/templates/LisaWay";
import { SteveMatt } from "../components/templates/SteveMatt";
import { Navigation } from "../components/organisms/Navigation";
import { Categories } from "../components/templates/Categories";
import { RecentPost } from "../components/templates/RecentPost";
import { Footer } from "../components/organisms/Footer";

export default function Home() {
  return (
    <div className="container">
      <span>This a Blog Page by khatabwedaa.</span>
      <TextLink
        text="Component details"
        url="https://tailwindcomponents.com/component/blog-page"
      />
      <Navigation />
      <div>
        <Heading tag="h1">Post</Heading>
      </div>
      <AlexJohn />
      <JaneDoe />
      <LisaWay />
      <SteveMatt />
      <KhatabWedaa />
      <Categories />
      <RecentPost />
      <Footer />
      <Head>
        <title>Blog Page by khatabwedaa. </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
