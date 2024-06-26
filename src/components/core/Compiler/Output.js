import { useState } from "react";
import { Box, Button, Text, useToast } from "@chakra-ui/react";
import { executeCode } from "./api";

const Output = ({ editorRef, language }) => {
  const toast = useToast();
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.log(error);
      toast({
        title: "An error occurred.",
        description: error.message || "Unable to run code",
        status: "error",
        duration: 6000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box w="50%" className="">
     <div className="pt-0">
     <Text mb={2} fontSize="lg" className=" text-richblack-5">
        Output:
      </Text>
      
      <Text >
      <Button
  fontSize="lg"
  variant="outline"
  colorScheme="gray"
  color="gray.800"
  className="mb-4"
  bg ='gray.200'
  _hover={{ bg:"gray.800", color: 'gray.200' }}
  
  isLoading={isLoading}
  onClick={runCode}
>
  Run Code
</Button>
      </Text>
     </div>
      <Box
        height="70vh"
        p={3}
        bg ='gray.100'
        color={isError ? "red.400" : "gray.800"}
        border="1px solid"
        borderRadius={4}
        borderColor={isError ? "red.500" : "#333"}
        className="mt-2 mr-4 pb-10"
      >
        {output
          ? output.map((line, i) => <Text key={i}>{line}</Text>)
          : 'Click "Run Code" to see the output here'}
      </Box>
    </Box>
  );
};
export default Output;