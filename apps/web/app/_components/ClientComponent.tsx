"use client";

import { useEffect, useState } from "react";

type Props = {};

export default function ClientComponent({}: Props) {
  const [data, setData] = useState<any>({});
  const fetchData = async () => {
    const res = await fetch(
      "http://worldtimeapi.org/api/timezone/America/New_York"
    );
    const dataa = await res.json();
    setData(dataa);
    return;
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Client</h1>
      <h1>{data?.datetime}</h1>
    </div>
  );
}
