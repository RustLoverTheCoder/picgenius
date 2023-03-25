import { getDictionary } from "@/dictionaries";
import Ui from "./ui";

const Page = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);
  console.log("lang", lang, dict);

  return (
    <>
      <Ui />
    </>
  );
};

export default Page;
