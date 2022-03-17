import "./App.css";

import { Typography, AppBar } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center" color="se">
          Video Chat
        </Typography>
      </AppBar>
    </div>
  );
}

export default App;
