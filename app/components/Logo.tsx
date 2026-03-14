import Image from "next/image";

interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 36, className = "" }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Inkbit Labs"
      width={size}
      height={size}
      className={className}
      priority
    />
  );
}