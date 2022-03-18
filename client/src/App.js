import "./App.css";
import { AppBar, Typography, Box } from "@mui/material";


import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Options";
import Notifications from "./components/Notifications";

const topSx = {
  borderRadius: 15,
  margin: "30px 100px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: { xs: "90%", md: "600px" },
  border: "2px solid black",
};

const wrapSx = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
};

export default function App() {
  return (
    <Box sx={wrapSx}>
      <AppBar sx={topSx} position="static" color="inherit">
        <Typography  variant="h3">Video Player</Typography>
      </AppBar>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </Box>
  );
}
