export const caracterizacionValidate = (titular: string, negocio: string) => {
  if (
    titular !== 'persona natural' ||
    negocio !== 'profesion liberal o artistica'
  ) {
    return true;
  }
  return false;
};
