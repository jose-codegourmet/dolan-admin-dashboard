import Image from "next/image";

const Logo = () => {
  return (
    <Image
      className="h-8 w-auto"
      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
      alt="Your Company"
      width={32}
      height={32}
    />
  );
};

export default Logo;
