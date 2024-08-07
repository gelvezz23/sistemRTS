export const questions = [
  {
    id: 17,
    question:
      '¿Corresponde una actividad de restaurante, cafeterías, autoservicio, bares y similares?',
    value: '',
    disabled: false,
    required: true,
    checkedYes: false,
    checkedNo: false,
    content: '',
    error: false,
  },
  {
    id: 18,
    question: '¿Es realizada con una franquicia?',
    value: '',
    disabled: true,
    checkedYes: false,
    checkedNo: false,
    required: true,
    error: false,
    content: `Una franquicia es un acuerdo donde el
    franquiciador permite al franquiciado explotar un negocio bajo su marca y sistema a cambio de un pago. Beneficia al
    franquiciado con una marca establecida y soporte, mientras el franquiciador expande su mercado con menor riesgo. Se aplica
    en varios sectores como restauración y retail. Ejemplos incluyen McDonald's y Starbucks.`,
  },
  {
    id: 19,
    question: '¿Se utilizan marcas propias?',
    value: '',
    disabled: true,
    required: true,
    checkedYes: false,
    checkedNo: false,
    error: false,
    content:
      'Marca es una categoría de signo distintivo que identifica los productos o servicios de una empresa o empresario, como por ejemplo Coca Cola o Apple.',
  },
  {
    id: 20,
    question: '¿Está gravada con IVA?',
    value: '',
    disabled: false,
    checkedYes: false,
    required: true,
    checkedNo: false,
    checkedNose: false,
    error: false,
    content:
      'Quiere decir que la actividad está sujeta al Impuesto sobre el Valor Agregado (IVA), lo que se produce cuando una persona vende bienes o presta servicios. El IVA es un impuesto que el responsable, es decir, el vendedor o prestador, debe adicionar en la factura que expide, y posteriormente deberá transferir a la DIAN.',
  },
  {
    id: 21,
    question: '¿Consiste en venta de bienes corporales muebles?',
    value: '',
    disabled: true,
    required: true,
    checkedYes: false,
    checkedNo: false,
    error: false,
    content: '',
  },
  {
    id: 22,
    question: '¿Estos bienes están excluidos?',
    value: '',
    disabled: true,
    checkedYes: false,
    required: true,
    checkedNo: false,
    error: false,
    content: ``,
  },
  {
    id: 23,
    question:
      '¿Consiste en la prestación de servicios en el territorio nacional o desde el exterior?',
    value: '',
    disabled: true,
    checkedYes: false,
    checkedNo: false,
    required: true,
    error: false,
    content:
      'Cuando se realiza una prestación de servicios dentro del territorio nacional, significa que el proveedor presta del servicio desde Colombia y el cliente lo recibe en Colombia. Mientras que la prestación de servicios desde el exterior se refiere a cuando el proveedor de servicios está ubicado por fuera de Colombia pero el servicio es recibido por el cliente en Colombia.',
  },
  {
    id: 24,
    question: '¿Estos servicios están excluidos?',
    value: '',
    disabled: true,
    checkedYes: false,
    required: true,
    checkedNo: false,
    error: false,
    content: '',
  },
];
