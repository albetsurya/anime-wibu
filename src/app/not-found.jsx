"use client";
import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex flex-col justify-center items-center gap-4">
      <div className="gap-4 flex justify-center items-center">
        <FileSearch size={32} className="text-color-accent " />
        <h3 className="text-color-accent text-2xl font-bold">Not Found</h3>
      </div>
      <Link
        href="/"
        className="text-color-primary hover:text-color-accent transition-all underline"
      >
        Kembali
      </Link>
    </div>
  );
};

export default Page;
