import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { dark } from "@clerk/themes";

const Home = async () => {
  const {userId} = await auth();

  if (!userId) {
    redirect('/login');
  }

  return <UserButton
  showName
  appearance={{
    baseTheme: dark,
  }}
  />
};

export default Home;
