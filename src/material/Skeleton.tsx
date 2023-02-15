import { Box, Skeleton } from '@mui/material/';

export const SkeletonLoading = () => {
  const color = '#3a4f6c';
  return (
    <Box
      sx={{
        maxWidth: '70%',
        margin: 'auto',
      }}
    >
      <Skeleton
        variant="rounded"
        animation="wave"
        width={'100%'}
        height={360}
        sx={{ bgcolor: color }}
      />
      <Skeleton width="30%" sx={{ my: '.5rem', py: '.7rem', bgcolor: color }} />
      <Skeleton width="90%" sx={{ bgcolor: color }} />
      <Skeleton width="65%" sx={{ bgcolor: color }} />

      <Skeleton
        width="15%"
        sx={{
          display: 'inline-block',
          marginRight: '.5rem',
          py: '1rem',
          px: '2.3rem',
          bgcolor: color,
        }}
      />
      <Skeleton
        width="15%"
        sx={{
          display: 'inline-block',
          marginRight: '.5rem',
          py: '1rem',
          px: '2.1rem',
          bgcolor: color,
        }}
      />
    </Box>
  );
};
