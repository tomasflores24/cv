import Card from '@mui/material/Card';
import { DataProyect } from '../utils';
import { Box } from '@mui/material';
import {
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';

interface Props {
  data: DataProyect;
  length: number;
  index: number;
}

export const SliderProyects = ({ data, length, index }: Props) => {
  const { title, image, content, deploy, gitHub } = data;
  return (
    <Card
      component="figure"
      sx={{
        maxWidth: '70%',
        margin: 'auto',
        marginTop: '3rem',
        marginBottom: '1.5rem',
        position: 'relative',
      }}
    >
      <CardMedia component="img" alt="Portada" height="140" image={image} />
      <CardContent component="figcaption">
        <Typography
          component="p"
          sx={{
            backgroundColor: '#676767',
            color: 'white',
            opacity: '90%',
            padding: '.2rem',
            position: 'absolute',
            top: '0.5rem',
            right: '0.5rem',
            borderRadius: '5px',
            overflow: 'hidden|',
          }}
        >
          {index}/{length}
        </Typography>

        <Typography gutterBottom variant="h5" component="h3">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>

      <CardActions>
        <Button variant="outlined" size="small" disabled={!gitHub}>
          <Box component="a" href={gitHub || '*'} target="_blank">
            GitHub
          </Box>
        </Button>

        <Button variant="outlined" size="small" disabled={!deploy}>
          <Box component="a" href={deploy || '*'} target="_blank">
            Deploy
          </Box>
        </Button>
      </CardActions>
    </Card>
  );
};

export const ButtonsSlider = ({ prevProyect, nextProyect }: any) => (
  <Box
    sx={{
      margin: 'auto',
      width: '50%',
      display: 'flex',
      justifyContent: 'space-evenly',
      color: '#10b981',
    }}
  >
    <Button
      onClick={prevProyect}
      variant="contained"
      color="success"
      sx={{ fontWeight: '900', backgroundColor: '#10b981' }}
    >
      {'<'}
    </Button>
    <Button
      onClick={nextProyect}
      variant="contained"
      color="success"
      sx={{ fontWeight: '900', backgroundColor: '#10b981' }}
    >
      {'>'}
    </Button>
  </Box>
);
