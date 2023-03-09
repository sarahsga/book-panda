import React from "react";
import classes from "./Logo.module.scss";
import Image from "next/legacy/image";

const logo = (props) => (
  <div className={classes.Logo}>
    <Image
      layout="fill"
      objectFit="contain"
      style={{
        padding: "8px !important",
        marginTop: "8px !important",
      }}
      src="/images/logo-panda.png"
      alt="Panda Books"
    />
  </div>
);

export default logo;
