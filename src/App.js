import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import profimg from "./img.jpg";
import "./App.css"; 

function App() {
  return (
    <Box className="one">
      <Box className="two">
        <Box className="container">
          <Grid container spacing={0} className="row">
            <Grid item md={6}>
              <Box id="box-profile" className="Profilepic">
                <img src={profimg} alt="Profile" />
              </Box>
              <Box id="box-ProfileName" className="ProfileName">
                <Typography>Profile Image</Typography>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box id="box2" className="CenterAligned">
                <Typography>Center Aligned</Typography>
              </Box>
              <Box id="box3" className="TopCenterAligned">
                <Typography>Top Center Aligned</Typography>
              </Box>
              <Grid container spacing={0} className="row">
                <Grid item md={4}>
                  <Box id="box4" className="TopLeft">
                    <Typography>Top Left</Typography>
                  </Box>
                </Grid>
                <Grid item md={4}>
                  <Box id="box5" className="Bottom">
                    <Typography>Bottom</Typography>
                  </Box>
                </Grid>
                <Grid item md={4}>
                  <Box id="box6" className="BottomRight">
                    <Typography>Bottom Right</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
