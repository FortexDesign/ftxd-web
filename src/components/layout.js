import React from "react";
import PropTypes from "prop-types";
import Header from "./header";
import { Footer } from "./footer";

const Layout = ({ children, isExpanded, toggleExpansion, color, setDrawerState }) => {
  return (
    <div>
      <Header
        setDrawerState={setDrawerState}
        color={color}
        isExpanded={isExpanded}
        toggleExpansion={toggleExpansion}
      />
      <div>
        {/* Here all the components inside the layout tag are rendered */}
        <main>{children}</main>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
