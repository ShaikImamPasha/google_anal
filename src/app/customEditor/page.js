'use client'
import {
  Box,
  CssBaseline,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import theme from "@/theme";
import "../../assests/css/editor.css";
import LexicalEditorWrapper from "@/comp/LexicalEditorWrapper";

function customEditor() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid
        container
        sx={{ minHeight: "100vh" }}
        flexDirection="column"
        alignItems="center"
      >
        <Grid item sx={{ my: 4 }}>
          <Typography variant="h4">Lexical Editor</Typography>
        </Grid>
        <Grid item sx={{ width: 750, overflow: "hidden" }}>
          <LexicalEditorWrapper />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default customEditor;
