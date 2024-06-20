import Link from "next/link";

const Logo = () => {
  return (
    <div>
      {/* <Link href={"/"} className="md:hidden">
        <FcBinoculars className="p-1 text-2xl" />
      </Link>

      <Link href={"/"} className="hidden md:block text-2xl">
        <FcBinoculars className="p-1 text-2xl" />
      </Link> */}

      <Link href={"/"} className="md:hidden">
        <h1 className="text-xl p-1 font-bold">InventorSpott</h1>
      </Link>
      <Link href={"/"} className="md:block hidden">
        <h1 className="text-2xl p-2 font-bold">InventorSpott</h1>
      </Link>
    </div>
  );
};

export default Logo;
