
import "./globals.css";
import Header from "@/components/header/header.js"

export const metadata = {
  title: "AMAVI",
  description: "Aplicação de Front-End II",
  charset: 'UTF-8',
  authors: [
    { name: "Leticia Silva" },
    { name: "Marcos Casemiro" },
    { name: "Aline Perroni" },
    { name: "Luana Vitoria" },
    { name: "João Oliveira" },
  ],
  keywords: "HTML, CSS, JavaScript, React, Next.js, AMAVI"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}