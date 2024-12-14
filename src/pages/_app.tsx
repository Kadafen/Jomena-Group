import { NavBar } from "@/components/navbar/NavBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CalendlyProvider } from "@/context/CalendlyContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CalendlyProvider>
      <NavBar />
      <Component {...pageProps} />
    </CalendlyProvider>
  );
}
