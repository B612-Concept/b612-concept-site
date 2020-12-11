import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { BOX_SHADOW_BLACK } from '@src/components/colors.js';
import { max, min } from '@src/responsive';

const Box = styled.div`
  background-color: #fff;
  font-size: 20px;
  box-shadow: 0px 0px 50px ${BOX_SHADOW_BLACK};
  margin: auto;

  // Tablet / Desktop should behave the same.
  // This is for the smallest of phones to manipulate the box
  @media all and ${min.tabletSm} {
    max-width: 600px;
    width: 80vw;
    height: 200px;
  }

  @media all and ${max.tabletSm} {
    width: 80vw;
    height: 150px;
  }
`;

const ChildrenWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

const MotionBox = (props) => {
  return (
    <Box>
      <ChildrenWrapper
        {...props}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      />
    </Box>
  );
};

export default MotionBox;
