import Link from "next/link";
import { Button } from "@/components/ui/button";
import { currentUser } from "@/app/data/auth";
import { signOut } from "@/actions/auth";

export default async function Header() {
  const user = await currentUser();
  return (
    <header className="h-16 border-b px-6 flex items-center gap-3">
      <Button asChild variant="ghost" className="text-xl font-bold">
        <Link href="/">Logo</Link>
      </Button>
      <Button asChild variant="ghost">
        <Link href="/items">商品一覧</Link>
      </Button>
      <Button asChild variant="ghost">
        <Link href="/mypage">マイページ</Link>
      </Button>

      <span className="flex-1"></span>

      {user ? (
        <form action={signOut}>
          <Button variant="outline">ログアウト</Button>
        </form>
      ) : (
        <Button asChild variant="ghost">
          <Link href="/login">ログイン</Link>
        </Button>
      )}
    </header>
  );
}
