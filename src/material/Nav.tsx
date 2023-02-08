import Button from '@mui/material/Button';

interface ButtomNavProps {
  item: string;
}

export const ButtonNav = ({ item }: ButtomNavProps) => {
  return (
    <a href={`/#${item}`} key={item}>
      <Button sx={{ color: 'inherit' }}>{item}</Button>
    </a>
  );
};
