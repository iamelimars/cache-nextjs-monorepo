import Link from "next/link";
import ClientComponent from "./_components/ClientComponent";
import axios from "axios";
import { fetchTimezone, CustomApi } from "ui";

// export const dynamic = "force-dynamic";

const customApi = new CustomApi({});

export default async function Home() {
  // const fetchData = async () => {
  //   const res = await fetch(
  //     "http://worldtimeapi.org/api/timezone/America/New_York"
  //     // { cache: "no-store", next: { revalidate: 0 } }
  //   );
  //   return await res.json();
  // };
  // const data = await fetchData();

  // const data = await fetchTimezone();
  const data = await customApi.getTimezone();

  const axiosData = await axios.get(
    "http://worldtimeapi.org/api/timezone/America/New_York"
  );

  return (
    <>
      <h1>{data?.datetime}</h1>
      <h1>{axiosData?.data.datetime}</h1>
      <Link href="/next">Next</Link>
      <ClientComponent />
    </>
  );
}
