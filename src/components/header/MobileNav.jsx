import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import {
  Collapse,
  List,
  ListItem,
  ListItemText,
  Paper,
  Popper,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { navData } from "./headerData";

const MobileNav = ({ mobileOpen, handleDrawerToggle }) => {
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [openThirdLevelMenu, setOpenThirdLevelMenu] = useState(null);

  const handleSubMenuClick = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
    setOpenThirdLevelMenu(null);
  };

  const handleThirdLevelMenuClick = (parentIndex, childIndex) => {
    const key = `${parentIndex}-${childIndex}`;
    setOpenThirdLevelMenu(openThirdLevelMenu === key ? null : key);
  };

  // Function to handle navigation and close drawer
  const handleNavigation = () => {
    handleDrawerToggle();
  };

  return (
    <Popper
      placement="top-right"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      sx={{
        "& .MuiDrawer-paper": {
          width: "80%",
        },
        width: "80%",
      }}
    >
      <Paper sx={{ width: "100%" }}>
        <List>
          {navData.map((item, index) => (
            <React.Fragment key={item.id}>
              {/* Top-level items */}
              {item.hasSubs ? (
                <ListItem
                  button="true"
                  onClick={() => handleSubMenuClick(index)}
                >
                  <ListItemText primary={item.navHeading} />
                  {openSubMenu === index ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
              ) : (
                <ListItem
                  button="true"
                  component={Link}
                  to={item.link}
                  onClick={handleNavigation}
                >
                  <ListItemText primary={item.navHeading} />
                </ListItem>
              )}

              {/* Second Level Menu */}
              {item.hasSubs && (
                <Collapse
                  in={openSubMenu === index}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {item.lvlTwo.map((subItem, subIndex) => (
                      <React.Fragment key={subIndex}>
                        {subItem.hasMoreSubs ? (
                          <ListItem
                            button="true"
                            sx={{ pl: 4 }}
                            onClick={() =>
                              handleThirdLevelMenuClick(index, subIndex)
                            }
                          >
                            <ListItemText primary={subItem.subNavHeading} />
                            {openThirdLevelMenu === `${index}-${subIndex}` ? (
                              <ExpandLess />
                            ) : (
                              <ExpandMore />
                            )}
                          </ListItem>
                        ) : (
                          <ListItem
                            button="true"
                            sx={{ pl: 4 }}
                            component={Link}
                            to={subItem.link}
                            onClick={handleNavigation}
                          >
                            <ListItemText primary={subItem.subNavHeading} />
                          </ListItem>
                        )}

                        {/* Third Level Menu */}
                        {subItem.hasMoreSubs && (
                          <Collapse
                            in={openThirdLevelMenu === `${index}-${subIndex}`}
                            timeout="auto"
                            unmountOnExit
                          >
                            <List component="div" disablePadding>
                              {subItem.lvlThree.map((thirdItem, thirdIndex) => (
                                <ListItem
                                  key={thirdIndex}
                                  button="true"
                                  sx={{ pl: 8 }}
                                  component={Link}
                                  to={thirdItem.link}
                                  onClick={handleNavigation}
                                >
                                  <ListItemText
                                    primary={thirdItem.lvl3Heading}
                                  />
                                </ListItem>
                              ))}
                            </List>
                          </Collapse>
                        )}
                      </React.Fragment>
                    ))}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Popper>
  );
};

export default MobileNav;
