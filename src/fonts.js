import { Roboto, Poppins } from "next/font/google";


export const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export const font = Roboto({
  subsets: ["latin"],

  weight: ["100", "300", "400", "500", "700", "900"],
});
