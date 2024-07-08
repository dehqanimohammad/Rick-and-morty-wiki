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
        className="w-full xl:w-56 object-cover		"
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
        <span className="text-slate-50 text-md">{item.status} -</span>
        <span className="text-slate-50 text-md"> {item.species}</span>
      </CardContent>
    </Card>
  );
}

export default CharacterCard;
