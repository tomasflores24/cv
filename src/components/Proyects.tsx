import { useState } from 'react';
import { ButtonsSlider, SliderProyects, Title } from '../material';
import { allProyects, navName } from '../utils';
import Box from '@mui/material/Box';

export const Proyects = () => {
  const [index, setIndex] = useState(0);

  const setSlider = (index: number, next: boolean) => {
    const lengthProyects = allProyects.length;
    const condition = next ? index === lengthProyects - 1 : index === 0;

    const newIndex = next
      ? condition
        ? 0
        : index + 1
      : condition
      ? lengthProyects - 1
      : index - 1;
    setIndex(newIndex);
  };
  const prevProyect = () => setSlider(index, false);
  const nextProyect = () => setSlider(index, true);

  return (
    <Box
      id={navName.Experiencias}
      component="section"
      sx={{
        paddingTop: '15rem',
        paddingBottom: '10rem',
      }}
    >
      <i>ICON</i>
      <Title>{navName.Experiencias}</Title>

      <SliderProyects data={allProyects[index]} />
      <ButtonsSlider prevProyect={prevProyect} nextProyect={nextProyect}/>

    </Box>
  );
};