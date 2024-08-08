import { getCaracterizacion } from '../caracterizacionDeNegocio/getCaracterizacion';
import { getModeloHipotetico } from '../modeloHipotetico/getModeloHipotetico';

export const getModeloyCaracterizacion = () => {
  const modeloHipotetico =
    window.localStorage.getItem('modelos_hipoteticos') || '';
  const { questCero, questUno } = getModeloHipotetico(modeloHipotetico);
  const caracterizacion =
    window.localStorage.getItem('caracterizacion_de_negocio') || '';
  const { titular } = getCaracterizacion(caracterizacion);

  return { questCero, questUno, titular };
};
