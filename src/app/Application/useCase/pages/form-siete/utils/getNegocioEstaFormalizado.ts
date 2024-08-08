export const getNegocioEstaFormalizado = (data: string) => {
  const tiene_registro_unico_tributario = window.JSON.parse(data)[0].value;
  const tiene_registro_mercantil = window.JSON.parse(data)[1].value;
  const renueva_el_registro_mercantil_cada_anio =
    window.JSON.parse(data)[2].value;

  const paga_salud_pensiones_riesgos_trabajadores =
    window.JSON.parse(data)[3].value;
  const paga_salud_pensiones_riesgos = window.JSON.parse(data)[4].value;
  const para_desarrollar_actividad_cumple_con_estos =
    window.JSON.parse(data)[5].value;
  const deberes_obligaciones_actividad = window.JSON.parse(data)[6].value;

  return {
    tiene_registro_unico_tributario,
    tiene_registro_mercantil,
    renueva_el_registro_mercantil_cada_anio,
    paga_salud_pensiones_riesgos_trabajadores,
    paga_salud_pensiones_riesgos,
    para_desarrollar_actividad_cumple_con_estos,
    deberes_obligaciones_actividad,
  };
};
