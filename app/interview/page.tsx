
import Agent from "@/components/Agent";
//import { getCurrentUser } from "@/lib/action/auth.action";

const Page = () => {
  //const user = await getCurrentUser();

  return (
    <>
    <h3>Interview generation</h3>
    <Agent userName="You" userId="user1" type="generate"/>
    </>
  );
};

export default Page;
