import { Box } from '@mui/material';
import { allSkills, navName } from '../utils';
import { Skill, Title } from '../material';

export const Skills = () => {
  return (
    <Box
      component="section"
      id={navName.Competencias}
      sx={{ marginBottom: '6rem' }}
    >
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
          <Skill skillName={skillName} />
        ))}
      </Box>
    </Box>
  );
};
