import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();

  return (
    <div className="mt-8 text-color-primary flex flex-col justify-center items-center">
      <h5 className="text-2xl font-bold ">Welcome, {user.name}</h5>
      <Image
        src={user.image}
        alt="..."
        width={200}
        height={200}
        className="rounded-full"
      />
      <div className="flex flex-wrap gap-4 py-8">
        <Link
          href="/users/dashboard/collection"
          className="bg-color-accent font-bold text-color-dark font-bold px-4 py-3 text-xl"
        >
          My Collections
        </Link>
        <Link
          href="/users/dashboard/comment"
          className="bg-color-accent font-bold text-color-dark font-bold px-4 py-3 text-xl"
        >
          My Comment
        </Link>
      </div>
    </div>
  );
};

export default Page;
