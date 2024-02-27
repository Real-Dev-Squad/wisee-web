import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";

import { inter } from "@/fonts";
import { cn } from "@/utils/classname";

import "@/styles/globals.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={cn("font-sans", inter.variable)}>
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  );
}
