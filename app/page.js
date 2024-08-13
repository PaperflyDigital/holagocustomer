"use client"
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  
  router.push('/store')
  return (
    <main className="">
  
    </main>
  );
}
