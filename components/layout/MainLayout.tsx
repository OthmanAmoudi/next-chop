import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../utils/theme";
import { GlobalStyles } from "../../utils/globalStyles";
import Head from "next/head";
import { Layout } from "antd";
import { MainFooter } from "./MainFooter";
import { MainNavbar } from "./MainNavbar";

const { Content } = Layout;

const MainHead = ({ title }: { title: string }) => (
  <Head>
    <title>{title}</title>
    <meta charSet="utf-8"></meta>
    <meta name="viewport" content="initial-scale=1.0,width=device-width"></meta>
    <meta
      name="description"
      content="A reciep discovery app powered by Next.js,GraphQL,TypeScript"
    ></meta>
    <meta name="author" content="othman"></meta>
    <meta name="keyword" content="next react typescript javascript"></meta>
    <meta property="og:type" content="website"></meta>

    <meta property="og:title" content={title}></meta>
    <meta property="og:url" content="https://othman.dev/nextapp"></meta>
    <meta property="og:image" content="/logo.svg"></meta>
    <meta
      property="og:description"
      content="A reciep discovery app powered by Next.js,GraphQL,TypeScript"
    ></meta>

    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/favicon/apple-touch-icon.png"
    />

    <link
      rel="apple-touch-icon"
      sizes="16x16"
      href="/favicon/favicon-16x16.png"
    />

    <link
      rel="apple-touch-icon"
      sizes="32x32"
      href="/favicon/favicon-32x32.png"
    />

    <link rel="manifest" href="/favicon/site.webmanifest" />
  </Head>
);

type Props = {
  children: ReactNode;
  title?: string;
};

export class MainLayout extends React.Component<Props> {
  render() {
    const { title, children } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <MainHead title={title} />
        <GlobalStyles />
        <Layout>
          <MainNavbar />
          <Content>{children}</Content>
        </Layout>
        <MainFooter />
      </ThemeProvider>
    );
  }
}
