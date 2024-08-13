import { Box } from '@mui/material';
import { FC, Suspense } from 'react';
import { Header } from '../Header';

const App: FC = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        height: '100vh',
        gridTemplateRows: 'auto 1fr auto',
        gridTemplateAreas: `"header" "main"`,
      }}
      id="appContainer"
      role="main"
    >
      <Box
        sx={{
          gridArea: 'header',
        }}
      >
        <Header />
      </Box>
      <Box
        sx={{
          gridArea: 'main',
        }}
      >
        <Suspense fallback={<div>Loading...</div>}></Suspense>
        Main
      </Box>
    </Box>
  );
};

export { App };
