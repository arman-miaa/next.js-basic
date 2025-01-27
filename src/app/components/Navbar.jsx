import Link from "next/link";


const Navbar = () => {
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
};

export default Navbar;