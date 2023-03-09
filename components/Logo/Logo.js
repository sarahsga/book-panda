import React from "react";
import classes from "./Logo.module.scss";
import Image from "next/image";

const logo = (props) => (
  <div className={classes.Logo}>
    <Image
      src="/images/logo-panda.png"
      alt="Panda Books"
      fill
      sizes="100vw"
      style={{
        padding: "8px !important",
        marginTop: "8px !important",
        objectFit: "contain"
      }} />
  </div>
);

export default logo;
