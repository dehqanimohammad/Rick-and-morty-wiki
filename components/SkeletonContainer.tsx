import { Skeleton } from "@mui/material";
import React from "react";

const arr = [1, 2, 3];

function SkeletonContainer() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
        {arr.map((_, index) => (
          <Skeleton
            key={index}
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width={600}
            height={220}
          />
        ))}
      </div>
    </>
  );
}

export default SkeletonContainer;
