'use client'
import moment from "moment";
import { useEffect, useState } from "react";

export default function Home() {
  const [ clock, setClock ] = useState<String>("loading...")
  const [ date, setDate ] = useState<String>("loading...")

  useEffect(() => {
    setInterval(() => {
      const dateNow = new Date()
      const clock = moment(dateNow).format("HH:mm:ss")
      const date = moment(dateNow).format("dd, DD MMMM YYYY")
      setClock(clock.toString())
      setDate(date)
    }, 50)
  }, [setClock, setDate])
  
  return (
    <main className="container">
      <div className="card">
        <p className="clock">{ clock }</p>
        <p className="date">{ date }</p>
      </div>
    </main>
  );
}
