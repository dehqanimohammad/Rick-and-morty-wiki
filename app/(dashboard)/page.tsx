"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

function page() {
  const [page, setPage] = useState(0);
  const { data, isPending, isError, error } = useQuery<any>({
    queryKey: ["characters", page],
    queryFn: async () => {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      const response = await res.json();
      return response;
    },
  });

  const handleIncrease = () => {
    if (page == data?.info.pages) {
      setPage(data?.info.pages);
    } else {
      setPage((page) => page + 1);
    }
  };

  const handleDecrease = () => {
    if (page <= 1) {
      setPage(1);
    } else {
      setPage((page) => page - 1);
    }
  };
  const characters = data?.results;

  console.log("data fetched! info:", data);
  return (
    <>
      <div className="px-2 lg:px-10">
        <div>
          {characters?.map((item: any) => (
            <p key={item.id}>{item.name}</p>
          ))}
        </div>
        <button onClick={handleIncrease}>next</button>
        <button onClick={handleDecrease}>prev</button>
      </div>
    </>
  );
}

export default page;
