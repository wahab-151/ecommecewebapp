import React from "react";
import logow from "./logow.png";
import logov from "./logob.png";
export default function Logowhite() {
  return (
    <div>
      <img style={{ width: 100, height: 60 }} src={logow} alt="logo" />
    </div>
  );
}

export const LogoBlack = () => {
  return (
    <div>
      <img style={{ width: 100, height: 60 }} src={logov} alt="logo" />
    </div>
  );
};
