import { Box, Skeleton } from '@mui/material/';

export const SkeletonLoading = () => {
  return (
    <Box
      sx={{
        maxWidth: '80%',
        m: 'auto',
      }}
    >
      <Skeleton
        variant="rounded"
        animation="wave"
        width={'100%'}
        height={360}
        sx={{ bgcolor: 'background.default' }}
      />
      <Skeleton
        width="30%"
        sx={{ my: '.5rem', py: '.7rem', bgcolor: 'background.default' }}
      />
      <Skeleton width="90%" sx={{ bgcolor: 'background.default' }} />
      <Skeleton width="88%" sx={{ bgcolor: 'background.default' }} />
      <Skeleton width="65%" sx={{ bgcolor: 'background.default' }} />

      <Skeleton
        width="15%"
        sx={{
          display: 'inline-block',
          mr: '.5rem',
          py: '1rem',
          px: '2.3rem',
          bgcolor: 'background.default',
        }}
      />
      <Skeleton
        width="15%"
        sx={{
          display: 'inline-block',
          mr: '.5rem',
          py: '1rem',
          px: '2.1rem',
          bgcolor: 'background.default',
        }}
      />
    </Box>
  );
};
