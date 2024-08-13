import { Box } from '@mui/material';
import { FC, Suspense } from 'react';
import { Header } from '../Header';
import { Board } from '../Board';

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
        <Board />
      </Box>
    </Box>
  );
};

export { App };
