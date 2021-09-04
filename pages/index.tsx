// import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { Header, Footer, LanguageSwitcher } from "../components";

function HomePage() {
  return (
    <div>
      <Header />
      <LanguageSwitcher />
      <Footer />
    </div>
  );
}

export default HomePage;
