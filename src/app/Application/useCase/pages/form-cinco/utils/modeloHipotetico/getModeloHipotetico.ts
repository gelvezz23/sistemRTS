export const getModeloHipotetico = (data: string) => {
  try {
    if (!data) {
      return { questCero: '', questUno: '' };
    }

    const modeloHipoteticos = JSON.parse(data);

    // Verificar si modeloHipoteticos tiene al menos dos elementos
    if (modeloHipoteticos.length >= 2) {
      const questCero = modeloHipoteticos[0].quest || '';
      const questUno = modeloHipoteticos[1].quest || '';
      return { questCero, questUno };
    } else {
      console.error(
        'Error: El objeto modeloHipoteticos no tiene suficientes elementos'
      );
      return { questCero: '', questUno: '' };
    }
  } catch (error) {
    console.error('Error parsing JSON data:', error);
    return { questCero: '', questUno: '' };
  }
};
