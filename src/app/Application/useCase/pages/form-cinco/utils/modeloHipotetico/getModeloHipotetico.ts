export const getModeloHipotetico = (data: string) => {
  const modeloHipoteticos = JSON.parse(data);

  const questCero = modeloHipoteticos[0].quest;
  const questUno = modeloHipoteticos[1].quest;
  return {
    questCero,
    questUno,
  };
};
