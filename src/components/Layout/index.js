import React from "react";
import Header from "./Header";

const Layout = ({ children, logout, authId }) => {
  return (
    <div>
      <Header logout={logout} authId={authId} />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
