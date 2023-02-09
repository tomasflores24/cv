import { Box } from '@mui/material';
import { allSkills, navName } from '../utils';
import { IconApp, Skill, Title } from '../material';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';

export const Skills = () => {
  return (
    <Box
      component="section"
      id={navName.Competencias}
      sx={{ marginBottom: '6rem', paddingBottom:'5rem' }}
    >
      <IconApp nameIcon={faMicrochip} />

      <Title>Competencias</Title>

      <Box
        sx={{
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
        }}
      >
        {allSkills.map((skillName) => (
          <Skill key={skillName} skillName={skillName} />
        ))}
      </Box>
    </Box>
  );
};
