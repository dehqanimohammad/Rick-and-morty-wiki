import { CharachterSchema } from "@/schema/CharacterSchema";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

function CharacterCard(item: CharachterSchema) {
  return (
    <Card
      className="bg-slate-800 flex flex-col xl:flex-row rounded-lg h-[540px] xl:h-[220px]"
      sx={{ maxWidth: 600 }}
    >
      <CardMedia
        className="w-full object-cover h-80 xl:w-56 xl:h-56"
        component="img"
        image={item.image}
        alt={item.name}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          className="font-extrabold text-white line-clamp-1"
        >
          {item.name}
        </Typography>
        <span
          className={`w-2 h-2 rounded-full ${
            item.status == "Alive"
              ? "bg-green-500"
              : item.status == "Dead"
              ? "bg-red-600"
              : item.status == "unknown"
              ? "bg-gray-600"
              : ""
          }  text-transparent px-2 mr-2`}
        >
          .
        </span>
        <span className="text-slate-50 text-md">{item.status} - </span>
        <span className="text-slate-50 text-md">{item.species}</span>
        <p className="text-sm font-semibold text-gray-500 mt-4">
          Last known location:
        </p>
        <p className="text-md font-medium text-gray-300 line-clamp-1">
          {item.location.name}
        </p>
        <p className="text-sm font-semibold text-gray-500 mt-4">
          First seen in:
        </p>
        <p className="text-md font-medium text-gray-300 line-clamp-1">
          {item.origin.name}
        </p>
      </CardContent>
    </Card>
  );
}

export default CharacterCard;
