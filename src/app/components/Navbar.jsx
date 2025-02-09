"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {
    const pathname = usePathname();
    // console.log(pathname, pathname.includes('dashboard'));
    if(!pathname.includes('dashboard'))
    {
          return (
            <div className="flex justify-center bg-gray-300">
              <ul className="flex justify-between w-1/2  p-4 text-black">
                <Link href="/">
                  <li>Home</li>
                </Link>
                <Link href="/services">
                  <li>Servieces</li>
                </Link>
                <Link href="/about">
                  <li>About</li>
                </Link>
              </ul>
            </div>
          );
    } else {
        return <></>
  }
};

export default Navbar;