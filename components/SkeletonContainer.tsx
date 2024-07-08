import { Skeleton } from "@mui/material";
import React from "react";

function SkeletonContainer() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
        <Skeleton
          sx={{ bgcolor: "grey.900" }}
          variant="rectangular"
          width={600}
          height={350}
        />
        <Skeleton
          sx={{ bgcolor: "grey.900" }}
          variant="rectangular"
          width={600}
          height={350}
        />
        <Skeleton
          sx={{ bgcolor: "grey.900" }}
          variant="rectangular"
          width={600}
          height={350}
        />
      </div>
    </>
  );
}

export default SkeletonContainer;
