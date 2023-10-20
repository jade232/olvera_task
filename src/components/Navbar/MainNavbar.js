import React from "react";
import { Box, Container, Button } from "@mui/material";
import "./navbar.css";
import Logo from "../../assets/logo.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";

function MainNavbar() {
  const List = [
    "Home",
    "About Us",
    "Our Services",
    "Our Experience",
    "Resources",
    "Contact Us",
  ];

  return (
    <Box>
      <Box bgcolor={"#C2278E"} py={1}>
        <h4 className="text-center header-1">
          Turning Uncertainity Into your advantage
        </h4>
      </Box>
      <Container>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          py={3}
        >
          <Box className="logo-wrapper" width={"142px"} height={"33px"}>
            <img src={Logo} alt="" height={"100%"} width={"100%"} />
          </Box>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <MenuIcon />
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-around"}
            gap={3}
            alignItems={"center"}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            {List.map((list, index) => (
              <Button
                sx={{
                  "&:hover": {
                    color: "#1C1C1C",
                    bgcolor: "transparent",
                  },
                  color: "#1c1c1c",
                  fontFamily: "'Oswald', sans-serif",
                  letterSpacing: "2px",
                }}
                key={index}
              >
                {list}
              </Button>
            ))}
          </Box>
          <Box
            display={"flex"}
            gap={1}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default MainNavbar;
