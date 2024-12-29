import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Muhammad Asim. | Software Engineer & Nft Specialist",
  description:
    "Bringing a dynamic blend of innovation and expertise, I am Muhammad Asim, a seasoned FullStack MERN (MongoDB, Express, React, Node.js, Typescript) and Blockchain Developer. With 2 years of hands-on experience, I am currently excelling in my role as ReactJS Developer at AAK, TeleScience. Inc, Callifornia USA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* favicons */}
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Muhammad Asim." />
        <link rel="manifest" href="/site.webmanifest" />

        {/* other SEO tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Muhammad Asim. | Software Engineer & Nft Specialist</title>
        <meta
          name="description"
          content="Bringing a dynamic blend of innovation and expertise, I am Muhammad Asim, a seasoned FullStack MERN (MongoDB, Express, React, Node.js, Typescript) and Blockchain Developer. With 2 years of hands-on experience, I am currently excelling in my role as ReactJS Developer at AAK, TeleScience. Inc, Callifornia USA."
        />
        <meta
          name="keywords"
          content="Foxlancerr, Muhammad Asim Full Stack Developer, Blockchain Developer, MERN Stack, React Developer, NodeJS, Web3 Developer, NFT Specialist, Smart Contracts, Blockchain Technology, DeFi, Ethereum, Solidity, Web Development, App Development, ReactJS, JavaScript, NodeJS, ExpressJS, MongoDB, Crypto, Smart Contracts Development, Decentralized Applications, Decentralized Finance, Blockchain Portfolio"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Muhammad Asim" />
        <link rel="canonical" href="https://www.muhammadasim.dev" />

        {/* og description */}
        <meta
          property="og:title"
          content="Muhammad Asim. | Software Engineer & Nft Specialist"
        />
        <meta
          property="og:description"
          content="Bringing a dynamic blend of innovation and expertise, I am Muhammad Asim, a seasoned FullStack MERN (MongoDB, Express, React, Node.js, Typescript) and Blockchain Developer. With 2 years of hands-on experience, I am currently excelling in my role as ReactJS Developer at AAK, TeleScience. Inc, Callifornia USA."
        />
        <meta property="og:image" content="/public/assets/profile.png" />
        <meta property="og:url" content="https://www.muhammadasim.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Muhammad Asim." />
        <meta property="og:locale" content="en_US" />

        {/* twitter description */}
        <meta
          name="twitter:title"
          content="Muhammad Asim. | Software Engineer & Nft Specialist"
        />
        <meta
          name="twitter:description"
          content="Bringing a dynamic blend of innovation and expertise, I am Muhammad Asim, a seasoned FullStack MERN (MongoDB, Express, React, Node.js, Typescript) and Blockchain Developer. With 2 years of hands-on experience, I am currently excelling in my role as ReactJS Developer at AAK, TeleScience. Inc, Callifornia USA."
        />
        <meta name="twitter:image" content="/public/assets/profile.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MuhammadAsim." />
        <meta name="twitter:creator" content="@Muhammad Asim." />

        {/* facebook description */}
        <meta property="fb:app_id" content="YOUR_FB_APP_ID" />
        <meta
          property="article:published_time"
          content="2024-12-29T00:00:00Z"
        />
        <meta property="article:author" content="Muhammad Asim." />
        <meta
          property="article:section"
          content="Software Development, Blockchain Technology, Full Stack Development"
        />
        <meta
          property="article:tag"
          content="Full Stack Development, Blockchain, Smart Contracts, Web3, React, MERN, NFTs, Crypto, JavaScript, Ethereum"
        />
      </head>
      <body>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Toaster />
      </body>
    </html>
  );
}
