import { useState, useRef, useEffect } from "react";
import {
  Button,
  Popper,
  Paper,
  MenuItem,
  styled,
  List,
  ListItem,
  useTheme,
  Box,
} from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import { navData } from "./headerData";
import { Link } from "react-router-dom";

const StyledList = styled(List)(({ theme }) => ({
  display: "flex !important",
  listStyle: "none",
  padding: "0px 80px",
  margin: 0,
  color: "#000000",
  alignItems: "center",
}));

const StyledListItem = styled(ListItem)({
  position: "relative",
  padding: 0,
  width: "fit-content",
});

const StyledButton = styled(Button)(({ theme }) => ({
  color: "#000000",
  textTransform: "none",
  fontSize: "1rem",
  padding: theme.spacing(1, 2),
  "&:hover": {
    color: "#2042e3",
    backgroundColor: "transparent",
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: "#000000",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
}));

const StyledSubMenu = styled(List)({
  padding: 0,
  margin: 0,
  minWidth: "200px",
});

const StyledSubMenuItem = styled(MenuItem)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  color: "#000000",
  position: "relative",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

export default function DesktopNav() {
  const theme = useTheme();
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [subAnchorEl, setSubAnchorEl] = useState(null);
  const timerRef = useRef(null);
  const subTimerRef = useRef(null);
  const menuRefs = useRef({});
  const subMenuRefs = useRef({});

  const handleMenuOpen = (navHeading, event) => {
    clearTimeout(timerRef.current);
    setActiveMenu(navHeading);
    setAnchorEl(event.currentTarget);
    setActiveSubMenu(null);
  };

  const handleMenuClose = (navHeading) => {
    timerRef.current = setTimeout(() => {
      if (activeMenu === navHeading) {
        setActiveMenu(null);
        setAnchorEl(null);
        setActiveSubMenu(null);
      }
    }, 200);
  };

  const handleSubMenuOpen = (subNavHeading, event) => {
    clearTimeout(subTimerRef.current);
    setActiveSubMenu(subNavHeading);
    setSubAnchorEl(event.currentTarget);
  };

  const handleSubMenuClose = (subNavHeading) => {
    subTimerRef.current = setTimeout(() => {
      if (activeSubMenu === subNavHeading) {
        setActiveSubMenu(null);
        setSubAnchorEl(null);
      }
    }, 200);
  };

  const handleCloseAll = () => {
    setActiveMenu(null);
    setActiveSubMenu(null);
    setAnchorEl(null);
    setSubAnchorEl(null);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
      clearTimeout(subTimerRef.current);
    };
  }, []);

  return (
    <StyledList id="menu-topLvl">
      <Box display={"flex"} sx={{ margin: "0 auto" }}>
        {navData.map((navItem) => {
          const isOpen = activeMenu === navItem.navHeading;
          return (
            <StyledListItem
              key={navItem.id}
              onMouseEnter={(e) => handleMenuOpen(navItem.navHeading, e)}
              onMouseLeave={() => handleMenuClose(navItem.navHeading)}
              ref={(el) => (menuRefs.current[navItem.navHeading] = el)}
            >
              <StyledButton
                id={navItem.navHeading}
                aria-controls={
                  isOpen ? `${navItem.navHeading}-menu` : undefined
                }
                aria-haspopup="true"
                aria-expanded={isOpen ? "true" : undefined}
                component={navItem.hasSubs ? "Box" : Link}
                to={navItem.hasSubs ? "#" : navItem.link}
              >
                {navItem.navHeading}
                {navItem.hasSubs && <KeyboardArrowDown />}
              </StyledButton>

              {navItem.hasSubs && (
                <Popper
                  id={`${navItem.navHeading}-menu`}
                  open={isOpen}
                  anchorEl={anchorEl}
                  placement="bottom-start"
                  modifiers={[
                    {
                      name: "offset",
                      options: {
                        offset: [0, 4],
                      },
                    },
                  ]}
                  style={{ zIndex: theme.zIndex.modal }}
                  onMouseEnter={() => clearTimeout(timerRef.current)}
                  onMouseLeave={() => handleMenuClose(navItem.navHeading)}
                  disablePortal
                >
                  <Paper elevation={3}>
                    <StyledSubMenu>
                      {navItem.lvlTwo.map((subNav, index) => {
                        const isSubOpen =
                          activeSubMenu === subNav.subNavHeading;
                        const hasMoreSubs = subNav.hasMoreSubs;

                        return (
                          <StyledSubMenuItem
                            key={index}
                            onMouseEnter={(e) =>
                              hasMoreSubs &&
                              handleSubMenuOpen(subNav.subNavHeading, e)
                            }
                            onMouseLeave={() =>
                              hasMoreSubs &&
                              handleSubMenuClose(subNav.subNavHeading)
                            }
                            ref={(el) =>
                              (subMenuRefs.current[subNav.subNavHeading] = el)
                            }
                            onClick={handleCloseAll}
                          >
                            <StyledLink to={subNav.link || "#"}>
                              {subNav.subNavHeading}
                              {hasMoreSubs && (
                                <KeyboardArrowDown fontSize="small" />
                              )}
                            </StyledLink>

                            {hasMoreSubs && isSubOpen && (
                              <Popper
                                id={`${subNav.subNavHeading}-submenu`}
                                open={isSubOpen}
                                anchorEl={subAnchorEl}
                                placement="left-start"
                                modifiers={[
                                  {
                                    name: "offset",
                                    options: {
                                      offset: [0, 0],
                                    },
                                  },
                                ]}
                                style={{ zIndex: theme.zIndex.modal + 1 }}
                                onMouseEnter={() =>
                                  clearTimeout(subTimerRef.current)
                                }
                                onMouseLeave={() =>
                                  handleSubMenuClose(subNav.subNavHeading)
                                }
                                disablePortal
                              >
                                <Paper elevation={3}>
                                  <StyledSubMenu>
                                    {subNav.lvlThree.map((moreSub, idx) => (
                                      <StyledSubMenuItem
                                        key={idx}
                                        onClick={handleCloseAll}
                                      >
                                        <StyledLink to={moreSub.link}>
                                          {moreSub.lvl3Heading}
                                        </StyledLink>
                                      </StyledSubMenuItem>
                                    ))}
                                  </StyledSubMenu>
                                </Paper>
                              </Popper>
                            )}
                          </StyledSubMenuItem>
                        );
                      })}
                    </StyledSubMenu>
                  </Paper>
                </Popper>
              )}
            </StyledListItem>
          );
        })}
      </Box>
    </StyledList>
  );
}
