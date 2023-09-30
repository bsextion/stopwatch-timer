import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ModalMenu from "../components/ModalMenu";
import Counter from "@/components/Counter";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Home() {
  return (
    <>
      <ModalMenu>
        <Counter></Counter>
      </ModalMenu>
    </>
  );
}
