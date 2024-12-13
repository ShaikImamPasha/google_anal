'use client'
import { $getRoot, $getSelection } from "lexical";
import { useEffect } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { MuiContentEditable, placeHolderSx } from "./styles";
import { Box, Divider } from "@mui/material";
import { lexicalEditorConfig } from "../../config/lexicalEditorConfig";
import LexicalEditorTopBar from "../LexicalEditorTopBar";
import TreeViewPlugin from "../CustomPlugins/TreeViewPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import ImagesPlugin from "../CustomPlugins/ImagePlugin";
import FloatingTextFormatToolbarPlugin from "../CustomPlugins/FloatingTextFormatPlugin";
import { $generateHtmlFromNodes } from "@lexical/html";

function LexicalEditorWrapper(props) {
  return (
    <LexicalComposer initialConfig={lexicalEditorConfig}>
      <LexicalEditorTopBar />
      <Divider />
      <Box sx={{ position: "relative", background: "white" }}>
        <RichTextPlugin
          contentEditable={<MuiContentEditable />}
          placeholder={<Box sx={placeHolderSx}>Enter some text...</Box>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <OnChangePlugin onChange={onChange} />
        <HistoryPlugin />
        <TreeViewPlugin />
        <ListPlugin />
        <LinkPlugin />
        <ImagesPlugin captionsEnabled={false} />
        <FloatingTextFormatToolbarPlugin />
      </Box>
    </LexicalComposer>
  );
}

function onChange(editorState, editor) {
  editorState.read(() => {
    const htmlContent = $generateHtmlFromNodes(editor); // Pass the editor instance
    console.log("Editor Content as HTML:", htmlContent);
  });
}

export default LexicalEditorWrapper;
