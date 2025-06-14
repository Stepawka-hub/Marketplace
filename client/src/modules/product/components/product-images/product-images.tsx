import { Box, ImageList } from "@mui/material";
import { FC, useState } from "react";
import s from "./product-images.module.css";
import { ImageListItem } from "@ui/image-list-item";

export const ProductImages: FC = () => {
  const images = [
    "https://newcdn.igromania.ru/mnt/articles/6/5/0/8/b/3/32271/html/more/19_ecaeb2e71901a61cbd5a6_original.jpg",
    "https://80.img.avito.st/image/1/1.QqFbbra49EhtxyxNU2tD6ETP7E7lz2xALcrsSuvH5kLt.rRxsMl2KcM9hy9A8W9VczgvERqzMaf-hozkw3b7eiOs",
    "https://50.img.avito.st/image/1/1.a9hexra4xzFobwU0BJ925XFnxTfgZ0U5KGLFM-5vzzvo.RsHlr7pvOdUxAVzY0cNi53kd4BR49GmkrhkGkTmgjl4",
    "https://80.img.avito.st/image/1/1.QqFbbra49EhtxyxNU2tD6ETP7E7lz2xALcrsSuvH5kLt.rRxsMl2KcM9hy9A8W9VczgvERqzMaf-hozkw3b7eiOs",
    "https://00.img.avito.st/image/1/1.Gj2alraxttTMMzzTosoWLOg3tNQoI7LW.f8a5CgXdQIwlsdOirgVkGtqdioANcCujBNt3tomeEEI?cqp=2.d_Zf6Bm1shCMrOHY-Vj18hvV6BjwI358IHMSOoasWlTdJXwRxVlJDedyKiY=",
    "https://newcdn.igromania.ru/mnt/articles/6/5/0/8/b/3/32271/html/more/19_ecaeb2e71901a61cbd5a6_original.jpg",
    "https://80.img.avito.st/image/1/1.QqFbbra49EhtxyxNU2tD6ETP7E7lz2xALcrsSuvH5kLt.rRxsMl2KcM9hy9A8W9VczgvERqzMaf-hozkw3b7eiOs",
    "https://50.img.avito.st/image/1/1.a9hexra4xzFobwU0BJ925XFnxTfgZ0U5KGLFM-5vzzvo.RsHlr7pvOdUxAVzY0cNi53kd4BR49GmkrhkGkTmgjl4",
    "https://80.img.avito.st/image/1/1.QqFbbra49EhtxyxNU2tD6ETP7E7lz2xALcrsSuvH5kLt.rRxsMl2KcM9hy9A8W9VczgvERqzMaf-hozkw3b7eiOs",
    "https://00.img.avito.st/image/1/1.Gj2alraxttTMMzzTosoWLOg3tNQoI7LW.f8a5CgXdQIwlsdOirgVkGtqdioANcCujBNt3tomeEEI?cqp=2.d_Zf6Bm1shCMrOHY-Vj18hvV6BjwI358IHMSOoasWlTdJXwRxVlJDedyKiY=",
  ];

  const imagesWithPosition = images.map((image, index) => ({
    image,
    position: index + 1,
  }));
  const [currentImage, setCurrentImage] = useState(imagesWithPosition[0]);

  return (
    <Box component="section">
      <Box sx={{ overflow: "hidden" }}>
        <img className={s.currentImage} src={currentImage.image} />
      </Box>
      <ImageList cols={6} gap={10}>
        {imagesWithPosition.map((el, index) => (
          <ImageListItem
            key={index}
            isSelected={currentImage.position === el.position}
            onClick={() => setCurrentImage(el)}
          >
            <img className={s.image} src={el.image} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};
