import React from "react";
import Skeleton from "react-loading-skeleton";
import css from "../../layout/2_events/styles.module.scss";

const SkeletonEvents = () => {
  return (
    <>
      <p style={{ minHeight: "2rem" }}> </p>
      {Array(10)
        .fill()
        .map((i, index) => (
          <div
            className={css.event}
            key={index}
            style={{ border: "none", boxShadow: "none" }}
          >
            <aside className={css.single}>
              <p>
                {" "}
                <Skeleton height={120} width={50} />
              </p>
              <div>
                <Skeleton height={200} width={400} />
              </div>
            </aside>
            <div>
              <p className={css.date}>
                <span>
                  <Skeleton height={5} width={`60%`} />
                </span>
              </p>
              <p className={css.title}>
                <Skeleton height={15} width={380} />
              </p>
              <p className={css.summary}>
                {" "}
                <Skeleton count={3} height={7} width={`40%`} />
              </p>
              <p>
                {" "}
                <Skeleton height={5} width={`30%`} />
              </p>
            </div>
          </div>
        ))}
    </>
  );
};

export default SkeletonEvents;
