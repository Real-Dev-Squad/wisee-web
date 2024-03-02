import type { AppProps } from "next/app";

import { inter } from "@/fonts";
import { ClientProvider } from "@/providers/client-provider";
import { cn } from "@/utils/classname";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClientProvider>
      <div className={cn("font-sans", inter.variable)}>
        <Component {...pageProps} />
      </div>
    </ClientProvider>
  );
}
