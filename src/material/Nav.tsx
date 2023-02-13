import { Button, Box } from '@mui/material';

interface ButtomNavProps {
  item: string;
}

export const ButtonNav = ({ item }: ButtomNavProps) => {
  return (
    <Box
      component="a"
      href={`/#${item}`}
      key={item}
      sx={{ ':hover': { color: 'lightgray' } }}
    >
      <Button sx={{ color: 'inherit' }}>{item}</Button>
    </Box>
  );
};
