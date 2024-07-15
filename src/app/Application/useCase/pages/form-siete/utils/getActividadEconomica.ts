export const getActividadEconomica = (data: string) => {
  const mas_de_un_establecimiento = JSON.parse(data)[0].value;
  const actividad_gravada_iva = JSON.parse(data)[1].value;
  const otros_ingresos = JSON.parse(data)[2].value;
  const realizo_compras_consumo = JSON.parse(data)[3].value;
  const la_actividad_economica = JSON.parse(data)[4].value;
  return {
    mas_de_un_establecimiento,
    actividad_gravada_iva,
    otros_ingresos,
    realizo_compras_consumo,
    la_actividad_economica,
  };
};
