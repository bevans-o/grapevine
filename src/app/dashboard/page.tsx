"use client";
import { stat } from "fs";
import {useSession} from "next-auth/react";

export default function Dashboard() {
  const {data: session, status} = useSession();
  return (
    <main>
      Dashboard {status ?? "" }
    </main>
  )
}
