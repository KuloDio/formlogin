import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DescriptionIcon from '@mui/icons-material/Description';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { DemoProvider, useDemoRouter } from '@toolpad/core/internal';


const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {pathname === '/home' && (
        <>
          <Typography variant='h3' sx={{ fontWeight: 'bold' }}>
            Welcome To Dashboard
          </Typography>
          <Typography variant="body1" sx={{ py: 5, px: 8 }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae incidunt tempora optio, voluptatem, adipisci velit praesentium nobis sit nostrum dolore ipsam perferendis aspernatur repellendus explicabo illum provident eligendi libero quaerat! Repellendus, aliquid officia aspernatur vero voluptatum excepturi dolorem illum aut!
          </Typography>
        </>
      )}

      {pathname === '/about' && (
        <>
          <Typography variant='h3' sx={{ fontWeight: 'bold' }}>
            About Us
          </Typography>
          <Typography variant="body1" sx={{ py: 5, px: 8 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis fugiat hic eveniet quas distinctio. Totam ipsa exercitationem fuga ad dolor deleniti iste reprehenderit amet nisi pariatur facere, quas distinctio eaque iure facilis ut tempore atque enim rerum sequi recusandae. Neque pariatur, harum minus soluta consequatur dolores blanditiis. Tempore vitae sed consectetur dolorem ipsam odit quod ut provident incidunt earum illo, labore, optio itaque reiciendis quia deleniti maxime iure, consequuntur officia?
          </Typography>
        </>
      )}
    </Box>
  );
}


DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function DashboardLayoutNavigationLinks(props) {
  const { window } = props;

  const router = useDemoRouter('/home');

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    // Remove this provider when copying and pasting into your project.
    <DemoProvider window={demoWindow}>
      {/* preview-start */}
      <AppProvider
        navigation={[
          {
            segment: 'home',
            title: 'Home',
            icon: <DescriptionIcon />,
          },
          {
            segment: 'about',
            title: 'About Us',
            icon: <DescriptionIcon />,
          },
        ]}
        router={router}
        theme={demoTheme}
        window={demoWindow}
        branding={{
          logo: <></>,   // 👉 kosongkan logo
          title: '',     // 👉 kosongkan tulisan Toolpad
        }}
      >
        <DashboardLayout>
          <DemoPageContent pathname={router.pathname} />
        </DashboardLayout>
      </AppProvider>
      {/* preview-end */}
    </DemoProvider>
  );
}

DashboardLayoutNavigationLinks.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default DashboardLayoutNavigationLinks;
