import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUser } from '@fortawesome/free-solid-svg-icons';

import { Box } from '@mui/system';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export const IconApp = ({ nameIcon }: { nameIcon: IconProp }) => {
  return (
    <Box
      component="i"
      sx={{
        backgroundColor: 'gra',
        width: '100%',
        display: 'block',
        fontSize: 'xx-large',
        textAlign: 'center',
        marginBottom: '.6rem',
        opacity: '70%',
      }}
    >
      <FontAwesomeIcon icon={nameIcon} />
    </Box>
  );
};
