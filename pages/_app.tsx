import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { light } from "../scss/MaterialTheme/index";
import { useState } from "react";
import "../scss/app.scss";
import "../scss/pc/main.scss";

{
  /** NEXTJS Global integrationlar uchun ishlatiladi */
}
export default function App({ Component, pageProps }: AppProps) {
  console.log("App Rendering");
  //@ts-ignore
  const [theme, setTheme] = useState(createTheme(light));

  // Socket.io, redux , MUI kabilarni  global integrationlar uchun ishlatiladi

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
//paeprops - bu har bir page componentga uzatiladigan propslarni o'z ichiga oladi. Bu orqali har bir sahifada kerakli ma'lumotlarni uzatish mumkin bo'ladi.
