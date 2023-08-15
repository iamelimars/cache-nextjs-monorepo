import Link from "next/link";
import React from "react";

type Props = {};

export default function NextPage({}: Props) {
  return (
    <div>
      <h1>Next Page</h1>
      <Link href="/">Back</Link>
    </div>
  );
}
