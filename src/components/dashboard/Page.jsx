import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import React, { forwardRef } from 'react';
// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

const Page = forwardRef(({ children, title = '', meta, ...other }, ref) => (
  <>
    <HelmetProvider>
      <Helmet>
        <title>{`${title} | Minimal-UI`}</title>
        {meta}
      </Helmet>
    </HelmetProvider>

    <Box ref={ref} {...other}>
      {children}
    </Box>
  </>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  meta: PropTypes.node,
};

export default Page;
