import { FC } from "react";
import { twMerge } from "tailwind-merge";

type LogoTextVersion = {
  useText: true;
  logoName: string;
};

type LogoImageVersion = {
  useText: false;
  logoSrc: string;
  logoAlt?: string;
  width?: number;
  height?: number;
  className?: string;
};

export type LogoProps = LogoTextVersion | LogoImageVersion;

const Logo: FC<LogoProps> = (props) => {
  if (props.useText && props.logoName !== "") {
    return (
      <h1 className="text-2xl font-bold text-gray-900">{props.logoName}</h1>
    );
  }

  const propsAsImage = props as LogoImageVersion;
  return (
    <img
      className={twMerge("h-8 w-auto", propsAsImage.className)}
      src={propsAsImage.logoSrc}
      alt={propsAsImage.logoAlt ?? "Your Company"}
      width={propsAsImage.width}
      height={propsAsImage.height}
    />
  );
};

export default Logo;
