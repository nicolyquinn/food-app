import { Cart } from "@/components/Cart";
import { Sidebar } from "@/components/Sidebar";
import { TodayMenu } from "@/components/TodayMenu";
import { UserInfo } from "@/components/UserInfo";
import styles from "@/styles/Home.module.scss";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Food Delivery Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className={styles.mainBody}>
          <Sidebar />
          <TodayMenu />
          <div>
            <UserInfo /> and <Cart />
          </div>
        </div>
      </main>
    </>
  );
}
