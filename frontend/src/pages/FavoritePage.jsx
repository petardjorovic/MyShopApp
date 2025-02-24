import React from "react";
import { useSelector } from "react-redux";
import SingleProductCardComponent from "../components/SingleProductCardComponent";
import { motion } from "framer-motion";

function FavoritePage() {
  const { allFavorites } = useSelector((state) => state.favoriteStore);
  const fadeInAnimationVariantsBottom = {
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: {
      delay: 0.1,
      duration: 1,
    },
  };
  return (
    <div className="container mx-auto my-[40px]">
      <h2 className="text-mainBlue text-3xl font-semibold text-center my-[30px] uppercase">
        Favorite Items
      </h2>
      <motion.div
        variants={fadeInAnimationVariantsBottom}
        initial="initial"
        whileInView="animate"
        className="flex flex-wrap items-center justify-center gap-[30px]"
      >
        {allFavorites.map((el) => {
          return (
            <SingleProductCardComponent
              key={el.id}
              product={el}
              activeView={"gridView"}
            />
          );
        })}
        {allFavorites.length === 0 && (
          <h2 className="text-2xl font-semibold text-mainBlue">
            You haven't added any product to Favorite!
          </h2>
        )}
      </motion.div>
    </div>
  );
}

export default FavoritePage;
