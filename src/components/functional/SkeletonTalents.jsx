import React from "react";
import Skeleton from "react-loading-skeleton";
import css from "../../layout/1_about/8_talent_pool/styles.module.scss";

const SkeletonTalents = () => {
  return (
    <div>
      {Array(3)
        .fill()
        .map((item, index) => (
          <div className={css.talent} key={index}>
            <Skeleton height={200} width={`20%`} />
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
    </div>
  );
};

export default SkeletonTalents;
{
  /* <Skeleton height={160} />
            <aside className={css.single}>
              <p>
                <Skeleton height={120} width={50} />{" "}
              </p>
            </aside>
            <p>
              <Skeleton count={6} height={10} width={250} />
            </p> */
}
