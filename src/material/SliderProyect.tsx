import {
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
  Card,
} from '@mui/material';
import { DataProyect } from '../utils';
import { useState } from 'react';

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
        maxWidth: { xs: '100%', sm: '80%' },
        m: 'auto',
        position: 'relative',
      }}
    >
      <CardMedia component="img" alt="Portada" height="360" image={image} />
      <CardContent component="figcaption">
        <Typography
          component="p"
          sx={{
            bgcolor: '#676767',
            color: 'white',
            opacity: '90%',
            p: '.2rem',
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
        <Button color='primary' variant="outlined" size="small" disabled={!gitHub}>
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

export const ButtonsSlider = ({ prevProyect, nextProyect }: any) => {
  const [disabledButton, setDisabledButton] = useState(false);

  const setSlider = (next: boolean) => {
    setDisabledButton(true);
    next ? nextProyect() : prevProyect();
    setTimeout(() => setDisabledButton(false), 500);
  };

  return (
    <Box
      sx={{
        m: 'auto',
        width: '50%',
        display: 'flex',
        justifyContent: 'space-evenly',
      }}
    >
      <Button
        disabled={disabledButton}
        onClick={() => setSlider(false)}
        variant="contained"
        color="success"
        sx={{
          fontWeight: '900',
          bgcolor: 'secondary.main',
          ':hover': {
            bgcolor: '#1CD698',
          },
          ':disabled': {
            bgcolor: '#11845E',
            color: 'white',
            opacity: '70%',
          },
        }}
      >
        {'<'}
      </Button>
      <Button
        disabled={disabledButton}
        onClick={() => setSlider(true)}
        variant="contained"
        color="success"
        sx={{
          fontWeight: '900',
          bgcolor: 'secondary.main',

          ':hover': {
            bgcolor: '#1CD698',
          },
          ':disabled': {
            bgcolor: '#11845E',
            color: 'white',
            opacity: '70%',
          },
        }}
      >
        {'>'}
      </Button>
    </Box>
  );
};
