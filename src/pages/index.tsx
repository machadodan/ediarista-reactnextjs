import type { GetStaticProps, NextPage } from "next";
import Advantages from "../UI/partials/index/_advantages";
import FrequestQuestion from "../UI/partials/index/_frequent-question";
import Presentation from "../UI/partials/index/_presentation";



export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "",
    },
  };
};

const Index: NextPage<{ title: string }> = (props) => {
  return (
    <div>
      <Presentation />
      <Advantages />
      <FrequestQuestion />
    </div>
  );
};

export default Index;