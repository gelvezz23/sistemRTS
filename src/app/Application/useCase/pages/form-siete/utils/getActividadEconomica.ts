export const getActividadEconomica = (data: string) => {
  if (!data) {
    throw new Error('Input data is empty');
  }

  const parsedData = JSON.parse(data);

  const [
    { value: mas_de_un_establecimiento },
    { value: actividad_gravada_iva },
    { value: otros_ingresos },
    { value: realizo_compras_consumo },
    { value: la_actividad_economica },
  ] = parsedData;

  return {
    mas_de_un_establecimiento,
    actividad_gravada_iva,
    otros_ingresos,
    realizo_compras_consumo,
    la_actividad_economica,
  };
};
