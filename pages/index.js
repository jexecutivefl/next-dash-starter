import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainLayout from "../layouts/Main/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div>Home Page</div>
    </MainLayout>
  )
}
