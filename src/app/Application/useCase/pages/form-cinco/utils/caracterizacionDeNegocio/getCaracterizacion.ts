export const getCaracterizacion = (data: string) => {
  try {
    const parsedData = JSON.parse(data);

    const negocio = parsedData?.negocio?.value ?? null;
    const titular = parsedData?.titular?.value ?? null;
    const trabajadores = parsedData?.trabajadores?.value ?? null;

    return { negocio, titular, trabajadores };
  } catch (error) {
    console.error('Error parsing JSON data:', error);
    return { negocio: null, titular: null, trabajadores: null };
  }
};
