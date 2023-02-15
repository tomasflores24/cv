import { SvgIcon, Grid, Typography } from '@mui/material';

export const IconCheck = () => {
  return (
    <SvgIcon
      sx={{
        color: '#34d399',
        marginRight: '.3rem',
        position: 'absolute',
        left: '15px',
      }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      ></path>
    </SvgIcon>
  );
};

export const Skill = ({ skillName }: { skillName: string }) => {
  return (
    <Grid
      item
      xs={10}
      md={5}
      sx={{
        backgroundColor: '#1f2937',
        position: 'relative',
        margin: 'auto',
        marginBottom: '1rem',

        paddingBottom: '.5rem',
        paddingTop: '.5rem',
        paddingLeft: '2.8rem',

        borderRadius: '3px',
      }}
    >
      <IconCheck />
      <Typography>{skillName}</Typography>
    </Grid>
  );
};

{
  /* <Paper
  sx={{
    backgroundColor: '#1f2937',
    color: 'white',
    marginBottom: '1rem',
    paddingTop: '.5rem',
    paddingBottom: '.5rem',
    paddingLeft: '1.2rem',
    width: '40%',
  }}
  elevation={3}
>
  <IconCheck />
  {skillName}
</Paper>; */
}
