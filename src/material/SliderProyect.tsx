import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DataProyect } from '../utils';
import { Box } from '@mui/material';

interface Props {
  data: DataProyect;
}

export const SliderProyects = ({ data }: Props) => {
  const { title, image, content } = data;

  return (
    <Card
      component="figure"
      sx={{
        maxWidth: '70%',
        margin: 'auto',
        marginTop: '3rem',
        marginBottom: '1.5rem',
      }}
    >
      <CardMedia component="img" alt="Portada" height="140" image={image} />
      <CardContent component="figcaption">
        <Typography gutterBottom variant="h5" component="h3">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>

      <CardActions>
        {/* falta agregar ss respectivos links */}
        <Button size="small">GitHub</Button>
        <Button size="small">Deploy</Button>
      </CardActions>
    </Card>
  );
};
