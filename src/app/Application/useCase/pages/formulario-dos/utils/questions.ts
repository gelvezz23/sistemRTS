export const questions = (constitucion: string) => {
  return [
    {
      id: 25,
      question: '¿Tiene más de un establecimiento de comercio?',
      value: '',
      disabled: false,
      checkedYes: false,
      checkedNo: false,
      required: true,
      error: false,
      content: `El establecimiento de comercio es un conjunto de bienes organizados por el empresario
         para desarrollar y cumplir los fines de la empresa, ejemplo: tiendas, supermercados,
         restaurantes, cafeterías, fábricas, almacenes, etc.`,
    },
    {
      id: 26,
      question: `¿Cual fue el monto de sus consignaciones bancarias, depositos o inversiones financieras
        en el año inmediatamente anterior?`,
      value: '',
      required: true,
      disabled: constitucion !== 'persona natural',
      checkedYes: false,
      checkedNo: false,
      error: false,
      content: '',
    },
    {
      id: 27,
      question: `¿Cual fue el monto de sus consignaciones bancarias, depositos o
        inversiones financieras en el año inmediatamente anterior?`,
      value: '',
      required: true,
      disabled: constitucion !== 'persona natural',
      checkedYes: false,
      checkedNo: false,
      error: false,
      content: '',
    },
    {
      id: 28,
      question: `¿Realizo compras y consumos totales superioes a 1400 unidades de Valor
        Tributario (UVT) ($65.891.000) durante el año inmediatamente anterior ?`,
      value: '',
      required: true,
      disabled: constitucion !== 'persona natural',
      checkedYes: false,
      checkedNo: false,
      error: false,
      content: `¿La actividad economica se realiza bajo un sistema que implica la explotacion
        de intangibles (por ejemplo, franquicia,concesion, regalia o similar)`,
    },
    {
      id: 29,
      question: `¿La actividad económica se realiza bajo un sistema que implique la explotación de
        intangibles (por ejemplo, franquicia, concesión, regalía o similar) ?`,
      value: '',
      disabled: constitucion !== 'persona natural',
      checkedYes: false,
      required: true,
      checkedNo: false,
      error: false,

      content: `Los intangibles son activos no físicos que
      tienen valor para una organización o persona, como marcas comerciales, patentes, derechos de autor y
      propiedad intelectual. A diferencia de cosas físicas como computadoras o edificios, su valor
      viene de lo que representan, como ideas o reputación.`,
    },
  ];
};
