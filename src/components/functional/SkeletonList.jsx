import React from "react";
import Skeleton from "react-loading-skeleton";
import css from "../../layout/_home/2_events/styles.module.scss";

const SkeletonList = () => {
  return (
    <div>
      {Array(3)
        .fill()
        .map((item, index) => (
          <div className={css.event} key={index}>
            <Skeleton height={160} />
            <aside className={css.single}>
              <p>
                <Skeleton height={120} width={50} />{" "}
              </p>
            </aside>
            <p>
              <Skeleton count={6} height={10} width={250} />
            </p>
          </div>
        ))}
    </div>
  );
};

export default SkeletonList;
