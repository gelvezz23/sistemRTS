export const caracterizacionValidate = (titular: string, negocio: string) => {
  if (negocio === 'agricultura o ganaderia') {
    return true;
  }

  if (
    titular !== 'persona natural' ||
    negocio !== 'profesion liberal o artistica'
  ) {
    return true;
  }
  return false;
};
