import React from "react";
import { Box, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Content = ({ children }) => {
  const [isSelected, setIsSelected] = useState(0);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/privacy") {
      setIsSelected(0);
    } else if (pathname === "/customersupport") {
      setIsSelected(1);
    } else if (pathname === "/refundpolicy") {
      setIsSelected(2);
    } else if (pathname === "/termsofuse") {
      setIsSelected(3);
    }
  }, [pathname, isSelected]);

  return (
    <>
      <Box sx={{ padding: "2.5rem 3rem" }}>
        <Box>
          <Box display={"flex"} gap={4}>
            <Box
              flex={{ xs: 0, md: 3 }}
              display={{ xs: "none", md: "block" }}
              border={"1px solid #D5DFFF"}
              minHeight={"400px"}
              borderRadius={"10px"}
            >
              <Box sx={{ padding: "1rem 1rem" }}>
                <nav aria-label="main mailbox folders">
                  <List sx={{ padding: "0px" }}>
                    {[
                      { title: "Privacy Policy", path: "/privacy" },
                      { title: "Support", path: "/customersupport" },
                      { title: "Refund Policy", path: "/refundpolicy" },
                      { title: "Term of Use", path: "/termsofuse" },
                    ].map((data, index) => (
                      <ListItem sx={{ padding: "0px" }} key={index}>
                        <ListItemButton
                          sx={{ padding: "0 10px" }}
                          onClick={() => {
                            setIsSelected(index), navigate(`${data.path}`);
                          }}
                        >
                          <ListItemText sx={{ padding: "0px" }}>
                            <Typography
                              sx={{
                                fontSize: "1.1rem",
                                fontFamily: "sans-serif",
                                fontWeight:
                                  index === isSelected ? "600" : "none",
                                color: index === isSelected ? "blue" : "none",
                              }}
                            >
                              {data.title}
                            </Typography>
                          </ListItemText>
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </nav>
              </Box>
            </Box>

            <Box flex={{ xs: 10, md: 7 }}>{children}</Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Content;
