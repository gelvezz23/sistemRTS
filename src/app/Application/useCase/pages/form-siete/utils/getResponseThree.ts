export const getResponseThree = (data: string) => {
  const patrimonio_bruto_anterior = JSON.parse(data)[0].value;
  const patrimonio_bruto_presente = JSON.parse(data)[1].value;
  const gravadas_con_iva = JSON.parse(data)[2].value;
  const total_ingreso_uno = JSON.parse(data)[6].value;
  const gravadas_con_iva_2 = JSON.parse(data)[7].value;
  const total_ingresos_brutos_2 = JSON.parse(data)[10].value;

  return {
    patrimonio_bruto_anterior,
    patrimonio_bruto_presente,
    gravadas_con_iva,
    total_ingreso_uno,
    total_ingresos_brutos_2,
    gravadas_con_iva_2,
  };
};
