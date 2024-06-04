import Link from "next/link";


export default function Home() {
  return (
    <main>
      <h1>Login</h1>
      <Link href={"/sitetable"}>Login</Link>
    </main>
  );
}
