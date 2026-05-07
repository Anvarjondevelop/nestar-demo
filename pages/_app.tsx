import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { light } from "../scss/MaterialTheme/index";
import { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import client from "@/apollo/client";
import "../scss/app.scss";
import "../scss/pc/main.scss";
import "../scss/mobile/main.scss";
{
  /** NEXTJS Global integrationlar uchun ishlatiladi */
}
export default function App({ Component, pageProps }: AppProps) {
  console.log("App Rendering");
  //@ts-ignore
  const [theme, setTheme] = useState(createTheme(light));

  // Socket.io, redux , MUI kabilarni  global integrationlar uchun ishlatiladi

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
//paeprops - bu har bir page componentga uzatiladigan propslarni o'z ichiga oladi. Bu orqali har bir sahifada kerakli ma'lumotlarni uzatish mumkin bo'ladi.
