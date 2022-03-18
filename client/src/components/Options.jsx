import React, { useState } from "react";
import {
  Button,
  TextField,
  Grid,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Assignment, Phone, PhoneDisabled } from "@mui/icons-material";

import { SocketContext } from "../SocketContext";
import { useContext } from "react";

const rootSx = {
  display: "flex",
  flexDirection: "column",
};
const gridContainer = {
  width: { xs: "90%", md: "600px" },
  flexDirection: { xs: "column", md: "row" },
};
const container = {
  width: "80%",
  margin: "35px auto",
  padding: 0,
};
const margin = {
  marginTop: "20px",
};

const padding = {
  padding: "20px",
};

const paper = {
  padding: "10px 20px",
  border: "2px solid black",
};

const Options = ({ children }) => {
  const { me, callAccepted, name, setName, leaveCall, callUser, callEnded } =
    useContext(SocketContext);

  const [idToCall, setIdToCall] = useState("");

  return (
    <div>
      {children}

      <Container sx={container}>
        <Paper sx={paper} elevation={10}>
          <form sx={rootSx} noValidate autoComplete="off">
            <Grid sx={gridContainer} container>
              <Grid sx={padding} item xs={12} md={6}>
                <Typography gutterBottom variant="h6">
                  Account Info
                </Typography>
                <TextField
                  label="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                />
                <CopyToClipboard sx={margin} text={me}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    startIcon={<Assignment fontSize="large" />}
                  >
                    Copy Your Id
                  </Button>
                </CopyToClipboard>
              </Grid>

              <Grid sx={padding} item xs={12} md={6}>
                <Typography gutterBottom variant="h6">
                  Make a call
                </Typography>
                <TextField
                  label="ID to call"
                  value={idToCall}
                  onChange={(e) => setIdToCall(e.target.value)}
                  fullWidth
                />
                {callAccepted && !callEnded ? (
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<PhoneDisabled fontSize="large" />}
                    fullWidth
                    onClick={leaveCall}
                    sx={margin}
                  >
                    Hang up
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<Phone fontSize="large" />}
                    fullWidth
                    onClick={(idToCall) => callUser(idToCall)}
                    sx={margin}
                  >
                    Call
                  </Button>
                )}
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default Options;
