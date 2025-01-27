"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function AboutPage() {
  const router = useRouter();
  const isLoggedIn = true;
  const handleNavigation = () => {
    if (isLoggedIn) {
      router.push('/about/address');
    } else {
      router.push('/')
    }

  }
  return (
    <div>
      <p className="text-3xl">AboutPage</p>
      <p>
      <Link href="/about/address">Address Page</Link>

      </p>
      <button className="bg-blue-300 p-2 " type="button" onClick={handleNavigation}>
        Address Page
      </button>
    </div>
  );
}
