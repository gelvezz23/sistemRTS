export const caracterizacionValidate = (titular: string, negocio: string) => {
  if (
    titular === 'persona natural' &&
    negocio === 'profesion liberal o artistica'
  ) {
    return false;
  }

  if (titular === 'persona natural' && negocio === 'agricultura o ganaderia') {
    return false;
  }

  return true;
};
