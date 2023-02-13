import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box } from '@mui/system';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
  nameIcon: IconProp;
  size?: string;
  display?: string;
  width?: string;
  opacity?: string;
  color?: string;
}

export const IconApp = ({
  nameIcon,
  size = 'xx-large',
  display = 'block',
  width = '100%',
  opacity = '70%',
  color = 'white',
}: Props) => {
  console.log(size);
  return (
    <Box
      component="i"
      sx={{
        width: `${width}`,
        display: `${display}`,
        fontSize: `${size}`,
        textAlign: 'center',
        marginBottom: '.6rem',
        opacity: `${opacity}`,
        color: `${color}`,
      }}
    >
      <FontAwesomeIcon icon={nameIcon} />
    </Box>
  );
};
