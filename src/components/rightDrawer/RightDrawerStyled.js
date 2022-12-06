import { Drawer, styled, Theme } from "@mui/material";



const RightDrawerStyled = styled(Drawer, { shouldForwardProp: (prop) => prop !== "drawerWidthState" && prop !== "theme" })(({ drawerWidthState, theme }) => ({
  flexShrink: 0,
  [`& .MuiDrawer-paper`]: {
    width: drawerWidthState === "expand"|| drawerWidthState === "expandMobile100%"? "100vw" : `35vw`,
    boxSizing: "border-box",
    transitionProperty: "width, transform!important",
    transitionDuration: `${theme.transitions.duration.complex}!important`,
    transitionTimingFunction: `${theme.transitions.easing.easeInOut}!important`,
  },
}));
export default RightDrawerStyled;
