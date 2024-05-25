import { Box ,Typography} from "@mui/material";
import React from "react";
import ProcessImg from "../../../assets/Pages/VpmProcess.webp"

const VpnProcess = () => {
  return (
    <Box sx={{ padding: { xs: "0rem 4%", md: "0rem  5% 3.5rem  5%" } }}>
      <Typography
        sx={{
          fontSize: { xs: "26px", md: "30px", lg: "40px" },
          fontWeight: 500,
          letterSpacing: { XS: 3, md: 2, lg: 2 },
          textAlign: "center",
          lineHeight: 1,
        }}
      >
        Safeguard Your Privacy
      </Typography>
      <Box mt="3rem">
        <Box component={"img"} src={ProcessImg} alt="process-vpn" sx={{maxWidth:"100%",backgroundAttachment:"fixed",backgroundPosition:"center",objectFit:"cover"}}/>
        <Typography sx={{textAlign:"center",padding:"2.5rem 0 0rem 0"}}>Conceal Your IP Address, Shield from Prying Eyes, and Encrypt All Data Transfers for Confident, Protected Browsing.</Typography>
      </Box>
    </Box>
  );
};

export default VpnProcess;
