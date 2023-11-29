"use client";

import { ArrowSquareLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Header = ({ title }) => {
  const router = useRouter();
  const handleBack = (event) => {
    event.preventDefault();
    router.back();
  };

  return (
    <div className="flex justify-between mb-4">
      <button className="text-color-primary " onClick={handleBack}>
        <ArrowSquareLeft size={32} />
      </button>
      <h3 className="text-color-primary font-bold text-2xl">{title}</h3>
    </div>
  );
};

export default Header;
