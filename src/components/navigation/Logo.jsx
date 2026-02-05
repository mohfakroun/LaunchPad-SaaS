import Image from "next/image";


export const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <Image
      src="/black-logo.png"
      alt="TaskTrackr Logo"
      width={50}
      height={60}
      className="object-contain"
    />
  );
};

export const LogoSmall = () => {

  return (
    <Image
      src="/black-logo.png"
      alt="TaskTrackr Logo"
      width={50}
      height={48}
      className="object-contain"
    />
  );
};

export const LogoLarge = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <Image
      src="/black-logo.png"
      alt="TaskTrackr Logo"
      width={120}
      height={80}
      className="object-contain"
    />
  );
};
