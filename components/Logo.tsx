import Link from "next/link";
import { TbActivityHeartbeat } from "react-icons/tb";

const Logo = () => {
  return (
    <Link href="/" className="my-2 flex items-center space-x-1 text-violet-400">
      <TbActivityHeartbeat className="h-4 w-4 flex-shrink-0 mr-1" />
      <span className="font-bold text-xl font-primary tracking-tight whitespace-nowrap">
        I&#39;m yadav
      </span>
    </Link>
  );
};

export default Logo;
