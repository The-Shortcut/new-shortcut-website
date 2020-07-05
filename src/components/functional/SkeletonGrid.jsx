import React from "react";
import Skeleton from "react-loading-skeleton";
import css from "../../layout/1_about/3_team/styles.module.scss";

const SkeletonGrid = () => {
  return (
    <>
      {Array(12)
        .fill()
        .map((item, index) => (
          <div className={css.profile} key={index}>
            <Skeleton height={200} width={`100%`} />
            <div className={css.info}>
              <h4>
                <Skeleton height={10} width={`70%`} />
              </h4>
              <p>
                <Skeleton height={10} width={`60%`} />
              </p>
              <div className={css.links}>
                <Skeleton height={20} width={40} />
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default SkeletonGrid;
