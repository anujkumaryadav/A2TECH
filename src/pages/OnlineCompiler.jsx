import { useRef, useState } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "../components/core/Compiler/LanguageSelector";
import { CODE_SNIPPETS } from "../components/core/Compiler/constants";
import Output from "../components/core/Compiler/Output";

const OnlineCompiler = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <Box className="bg-richblack-100 ">
      <HStack spacing={10}>
        <Box w="50%">
          <LanguageSelector language={language} onSelect={onSelect} />
          <Editor className="m-3"
            options={{
              minimap: {
                enabled: false,
              },
            }}
            height="75vh"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
          />
        </Box>
        <Output editorRef={editorRef} language={language} className="mt-5"/>
      </HStack>
    </Box>
  );
};
export default OnlineCompiler;