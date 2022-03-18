import React from "react";

import { Grid, Typography, Paper } from "@mui/material";

import { SocketContext } from "../SocketContext";
import { useContext } from "react";

const paperSx = {
  padding: "10px",
  border: "2px solid black",
  margin: "10px",
};

const gridSx = {
  justifyContent: "center",
  flexDirection: { xs: "column", md: "row" },
};

const VideoPlayer = () => {
  const { myVideo, userVideo, name, callAccepted, callEnded, stream, call } =
    useContext(SocketContext);
  return (
    <Grid container sx={gridSx}>
      {/* Our own video */}
      {stream && (
        <Paper sx={paperSx}>
          <Grid sx={gridSx} item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {name || "Name"}
            </Typography>
            <video style={{width:"100%"}}  autoPlay muted ref={myVideo} />
          </Grid>
        </Paper>
      )}

      {/*Other video*/}
      {callAccepted && !callEnded && (
        <Paper sx={paperSx}>
          <Grid sx={gridSx} item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {call.name || "Name"}
            </Typography>
            <video
              
              autoPlay
              muted
              ref={userVideo}
            />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;
