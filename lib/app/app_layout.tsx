import { Flex} from "@chakra-ui/react";
import React from "react";
import { APP_MAX_WIDTH, APP_WIDTH, CONTENT_MAX_WIDTH, OVERALL_PAGE_BG, SECTION_PADDING_X } from "./app_constants";

const AppLayout = ({ children }:{ children: React.ReactNode }) => {

  return (
    <Flex id = 'app_layout'
      minH = '100vh'
      w = '100%'
      px = {SECTION_PADDING_X}
      direction = {'column'}
      alignItems = {'center'}
      backgroundSize = {"cover"}
      backgroundRepeat = {"none"}
      overflowX = {'hidden'}
      bg = {OVERALL_PAGE_BG}
    >
      
      <Flex 
        maxW = {CONTENT_MAX_WIDTH} 
        flexDir = {'column'}
        w = {'100%'}
        h = {'100%'} 
        alignItems = {'center'} 
      >
        {children}
      </Flex>
    </Flex>
  );
}

export default AppLayout;