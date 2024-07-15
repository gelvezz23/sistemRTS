export const getActividadEconomicaAformalizar = (data: string) => {
  const corresponde_actividad_restaurante = JSON.parse(data)[0].value;
  const corresponde_una_franquicia = JSON.parse(data)[1].value;
  const esta_con_iva = JSON.parse(data)[4].value;

  return {
    corresponde_actividad_restaurante,
    corresponde_una_franquicia,
    esta_con_iva,
  };
};
