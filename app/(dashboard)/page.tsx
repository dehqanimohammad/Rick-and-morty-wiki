"use client";

import React, { Suspense, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import LoadingButton from "@mui/lab/LoadingButton";
import CharacterCard from "@/components/CharacterCard";
import { CharachterSchema } from "@/schema/characterSchema";
import { Skeleton } from "@mui/material";
import SkeletonContainer from "@/components/SkeletonContainer";

function page() {
  const [page, setPage] = useState(1);
  const { data, isPending } = useQuery({
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

  if (isPending) {
    return (
      <div className="flex gap-10 mt-10 px-2 lg:px-10 ">
        <SkeletonContainer />
      </div>
    );
  }

  return (
    <>
      <div className="px-2 lg:px-10 mt-10 flex flex-col">
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3  gap-10 mx-auto">
          {characters?.map((item: CharachterSchema) => (
            <CharacterCard {...item} key={item.id} />
          ))}
        </div>

        <div className="my-10 gap-3 flex justify-center">
          <LoadingButton
            className="bg-slate-300 text-black font-semibold"
            loading={isPending}
            variant="contained"
            onClick={handleDecrease}
          >
            Prev
          </LoadingButton>
          <LoadingButton
            className="bg-slate-300 text-black font-semibold"
            loading={isPending}
            variant="contained"
            onClick={handleIncrease}
          >
            Next
          </LoadingButton>
        </div>
      </div>
    </>
  );
}

export default page;
