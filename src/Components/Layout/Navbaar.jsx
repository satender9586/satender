import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import claudyImg from "../../assets/Home/clody.webp";
import { Button, Grid } from "@mui/material";
import drop from "../../assets/Home/drop.svg";
import Popover from "@mui/material/Popover";
import Product from "./PopModal/Product";
import Soution from "./PopModal/Soution";
import Pricing from "./PopModal/Pricing";
import Chooseuse from "./PopModal/Chooseuse";
import { useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";

const Navbaar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openPopover, setOpenPopover] = React.useState(null);
  const navigate = useNavigate();

  const handlePopoverOpen = (event, popoverId) => {
    setAnchorEl(event.currentTarget);
    setOpenPopover(popoverId);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setOpenPopover(null);
  };

  const isPopoverOpen = (popoverId) => openPopover === popoverId;

  // sx={{ boxShadow: "rgba(0, 0, 0, 0.30) 1.95px 1.95px 2.6px" }}
  // sx={{ boxShadow: "none" }}

  return (
    <Box>
      <AppBar
        position="static"
      >
        <Toolbar
          sx={{
            gap: { xs: 1, md: 8, lg: 20 },
            bgcolor: "#ffff",
            color: "black",
            boxShadow: "none",
            minHeight: "0px",
          }}
        >
          <Box
            padding={{ xs: "0", lg: "0.6rem 2.1rem" }}
            sx={{ flexGrow: 1 }}
            position={"relative"}
          >
            <Grid container>
              <Grid item xs={3.8}>
                <Box height={"100%"} display={"flex"} alignItems={"center"}>
                  <Button
                    onClick={() => navigate("/")}
                    sx={{
                      padding: "0px",
                      minWidth: "0px",
                      
                      backgroundColor: "transparent",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                      "&:focus": {
                        outline: "none",
                      },
                    
                    }}
                    variant="text"
                  >
                    <Box
                      component="img"
                      src={claudyImg}
                      sx={{
                        width: {xs:"120px",md:"200px"},
                        objectFit: "cover",
                        backgroundAttachment: "fixed",
                        backgroundPosition: "center",
                      }}
                      alt="claudy"
                    />
                  </Button>
                </Box>
              </Grid>
              <Grid
                item
                xs={8.2}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Grid
                  container
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    alignItems: "Center",
                    justifyContent: { xs: "end", md: "end", lg: "start" },
                  }}
                >
                  <Grid
                    item
                    xs={6}
                    md={2}
                    display={{ xs: "none", md: "block" }}
                  >
                    <div>
                      <Typography
                        sx={{
                          color: "#0066FF",
                          fontSize: "15px",
                          textAlign: "center",
                        }}
                      >
                        Products
                        <Button
                          sx={{
                            padding: "0px",
                            minHeight: "0px",
                            minWidth: "0px",
                            marginLeft: "5px",
                          }}
                          aria-owns={
                            isPopoverOpen("product")
                              ? "mouse-over-popover"
                              : undefined
                          }
                          aria-haspopup="true"
                          onMouseEnter={(event) =>
                            handlePopoverOpen(event, "product")
                          }
                        >
                          <img width={13} src={drop} />
                        </Button>
                      </Typography>
                      <Popover
                        id="mouse-over-popover"
                        sx={{
                          zIndex: 100,
                          position: "absolute",
                          top: "28px",
                        }}
                        open={isPopoverOpen("product")}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "left",
                        }}
                        onClose={handlePopoverClose}
                      >
                        <Box
                          sx={{
                            width: "100vw",
                            maxHeight: "400px",
                            overflow: "auto",
                          }}
                        >
                          <Product />
                        </Box>
                      </Popover>
                    </div>
                  </Grid>

                  <Grid
                    position={"relative"}
                    item
                    xs={6}
                    md={2}
                    display={{ xs: "none", md: "block" }}
                  >
                    <div>
                      <Typography
                        sx={{
                          color: "#0066FF",
                          fontSize: "15px",
                          textAlign: "center",
                        }}
                      >
                        Solutions
                        <Button
                          sx={{
                            padding: "0px",
                            minHeight: "0px",
                            minWidth: "0px",
                            marginLeft: "5px",
                          }}
                          aria-owns={
                            isPopoverOpen("solution")
                              ? "mouse-over-popover"
                              : undefined
                          }
                          aria-haspopup="true"
                          onMouseEnter={(event) =>
                            handlePopoverOpen(event, "solution")
                          }
                        >
                          <img width={13} src={drop} />
                        </Button>
                      </Typography>

                      <Popover
                        id="mouse-over-popover"
                        sx={{
                          zIndex: 100,
                          position: "absolute",
                          top: "28px",
                        }}
                        open={isPopoverOpen("solution")}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "left",
                        }}
                        onClose={handlePopoverClose}
                      >
                        <Box
                          sx={{
                            width: "100vw",
                            maxHeight: "400px",
                            overflow: "auto",
                          }}
                        >
                          <Soution />
                        </Box>
                      </Popover>
                    </div>
                  </Grid>

                  <Grid
                    item
                    position={"relative"}
                    xs={6}
                    md={2}
                    display={{ xs: "none", md: "block" }}
                  >
                    <div>
                      <Typography
                        sx={{
                          color: "#0066FF",
                          fontSize: "15px",
                          textAlign: "center",
                        }}
                      >
                        MarketPlace
                        <Button
                          sx={{
                            padding: "0px",
                            minHeight: "0px",
                            minWidth: "0px",
                            marginLeft: "5px",
                          }}
                          // onClick={() => navigate("/marketplace")}
                        >
                          <img width={13} src={drop} />
                        </Button>
                      </Typography>
                    </div>
                  </Grid>

                  <Grid
                    item
                    position={"relative"}
                    xs={6}
                    md={2}
                    display={{ xs: "none", md: "block" }}
                  >
                    <div>
                      <Typography
                        sx={{
                          color: "#0066FF",
                          fontSize: "15px",
                          textAlign: "center",
                        }}
                      >
                        Pricing
                        <Button
                          sx={{
                            padding: "0px",
                            minHeight: "0px",
                            minWidth: "0px",
                            marginLeft: "5px",
                          }}
                          aria-owns={
                            isPopoverOpen("pricing")
                              ? "mouse-over-popover"
                              : undefined
                          }
                          aria-haspopup="true"
                          onMouseEnter={(event) =>
                            handlePopoverOpen(event, "pricing")
                          }
                        >
                          <img width={13} src={drop} />
                        </Button>
                      </Typography>

                      <Popover
                        id="mouse-over-popover"
                        sx={{
                          zIndex: 100,
                          position: "absolute",
                          top: "28px",
                        }}
                        open={isPopoverOpen("pricing")}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "left",
                        }}
                        onClose={handlePopoverClose}
                      >
                        <Box
                          sx={{
                            width: "100vw",
                            maxHeight: "400px",
                            overflow: "auto",
                          }}
                        >
                          <Pricing />
                        </Box>
                      </Popover>
                    </div>
                  </Grid>

                  <Grid
                    position={"relative"}
                    item
                    xs={6}
                    md={2}
                    display={{ xs: "none", md: "none", lg: "block" }}
                  >
                    <div>
                      <Typography
                        sx={{
                          color: "#0066FF",
                          fontSize: "15px",
                          textAlign: "center",
                        }}
                      >
                        Why Choose us
                        <Button
                          sx={{
                            padding: "0px",
                            minHeight: "0px",
                            minWidth: "0px",
                            marginLeft: "5px",
                          }}
                          aria-owns={
                            isPopoverOpen("chooseUs")
                              ? "mouse-over-popover"
                              : undefined
                          }
                          aria-haspopup="true"
                          onMouseEnter={(event) =>
                            handlePopoverOpen(event, "chooseUs")
                          }
                        >
                          <img width={13} src={drop} />
                        </Button>
                      </Typography>

                      <Popover
                        id="mouse-over-popover"
                        sx={{
                          zIndex: 100,
                          position: "absolute",
                          top: "28px",
                        }}
                        open={isPopoverOpen("chooseUs")}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "left",
                        }}
                        onClose={handlePopoverClose}
                      >
                        <Box
                          sx={{
                            width: "100vw",
                            maxHeight: "400px",
                            overflow: "auto",
                          }}
                        >
                          <Chooseuse />
                        </Box>
                      </Popover>
                    </div>
                  </Grid>

                  <Grid
                    display={"flex"}
                    justifyContent={{ xs: "end", md: "end", lg: "end" }}
                    item
                    xs={6}
                    md={2}
                  >
                    <Button
                      variant="contained"
                      sx={{ display: { xs: "none", md: "block" } }}
                    >
                      Sign Up
                    </Button>
                    <Button
                      variant="text"
                      sx={{
                        display: {
                          xs: "block",
                          md: "none",
                          padding: "0px 0px",
                          minWidth: "0px",
                          color: "black",
                        },
                      }}
                    >
                      <IoIosMenu size={"30px"} />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbaar;
