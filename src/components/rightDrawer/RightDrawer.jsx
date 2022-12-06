import { IconButton, Toolbar, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import ExpandButton from "./expandButton";
import RightDrawerStyled from "./RightDrawerStyled";


 const RightDrawer = ({ drawerState, handleDrawerClose, children}) => {
  const theme = useTheme();
  /* Checking if the screen is less than lg. */
  const matchDownMD = useMediaQuery(theme.breakpoints.down("lg"));

  /* Setting the state of the drawerWidthState to collapsed. */
  const [drawerWidthState, setDrawerWidthState] = useState("collapsed");

  useEffect(() => {
    /* Checking if the screen is less than lg and if the drawer is open then it will set the
    drawerWidthState to expandMobile100% */
    if (matchDownMD && drawerState) {
      setDrawerWidthState("expandMobile100%");
    }
  }, [drawerWidthState, matchDownMD, drawerState]);

  useEffect(() => {
    if (!drawerState) {
      setDrawerWidthState("collapsed");
    }
  }, [drawerState]);

  return (
    <RightDrawerStyled
      anchor="right"
      open={drawerState}
      onClose={handleDrawerClose}
      theme={theme}
      drawerWidthState={drawerWidthState}
    >
    {/*   {!matchDownMD && <Toolbar />} */}
      {!matchDownMD ? (
        <ExpandButton
          drawerWidthState={drawerWidthState}
          setDrawerWidthState={setDrawerWidthState}
        />
      ) : (
        <IconButton
          aria-label="closeDrawer"
          color="primary"
          edge="end"
          size="large"
          onClick={handleDrawerClose}
          sx={{
            position: "fixed",
            top: "8px",
            right: "20px",
          }}
        >
          <AiOutlineClose />
        </IconButton>
      )}
      {children}
    </RightDrawerStyled>
  );
};
export default RightDrawer
