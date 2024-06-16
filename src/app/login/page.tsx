import { signIn, signOut } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { currentUser } from "../data/auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const user = await currentUser();

  if (user) {
    redirect("/mypage");
  }
  return (
    <div className="p-6">
      <h1 className="font-bold text-2xl mb-6">ログイン</h1>
      {user ? JSON.stringify(user) : null}

      <form action={signIn}>
        <Button>ログイン</Button>
      </form>
    </div>
  );
}
