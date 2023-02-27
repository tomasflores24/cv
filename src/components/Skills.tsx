import { Box, Grid } from '@mui/material';
import { allSkills, navName } from '../utils';
import { IconApp, Skill, Title } from '../material';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';

export const Skills = () => {
  return (
    <Box
      component="section"
      id={navName.Competencias}
      sx={{ mb: '6rem', pb: '5rem', pt:'7rem' }}
    >
      <IconApp nameIcon={faMicrochip} />

      <Title>Competencias</Title>

      <Grid container sx={{ pt: '1.5rem' }}>
        {allSkills.map((skillName) => (
          <Skill key={skillName} skillName={skillName} />
        ))}
      </Grid>
    </Box>
  );
};
