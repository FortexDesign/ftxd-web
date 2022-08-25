import React from "react";
import PropTypes from "prop-types";
import Header from "./header";
import { Footer } from "./footer";

const Layout = ({ children, isExpanded, toggleExpansion, color }) => {
  return (
    <div>
      <Header
        color={color}
        isExpanded={isExpanded}
        toggleExpansion={toggleExpansion}
      />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
