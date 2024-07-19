class LocalStorageMock implements Storage {
  store: { [key: string]: string } = {
    conocimiento_del_usuario: `[
      {
        id: 1,
        quest: '¿Cuál es tu sexo?',
        value: 'Mujer',
        error: false,
      },
      {
        id: 2,
        quest: '¿En qué rango de edad te encuentras?',
        value: '18 a 29',
        error: false,
      },
      {
        id: 3,
        quest: 'Selecciona el departamento donde vives',
        value: 'Amazonas',
        error: false,
      },
      {
        id: 4,
        quest: 'Selecciona el municipio donde vives',
        value: 'El Encanto',
        error: false,
      },
      {
        id: 5,
        quest: '¿En qué tipo de zona vives?',
        value: 'Urbana',
        error: false,
      },
      {
        id: 6,
        quest: '¿Qué uso le dará al simulador?',
        value: 'Proyectar un negocio',
        error: false,
      },
    ]`,
    caracterizacion_de_negocio: `{
      titular: {
        id: 7,
        value: 'persona natural',
        error: false,
        quest: 'Titular del negocio',
      },
      negocio: {
        id: 8,
        value: 'comercial',
        error: false,
        quest: 'Clasifica el negocio de acuerdo a la Actividad del negocio',
      },
      trabajadores: {
        id: 9,
        value: 'si',
        error: false,
        quest: '¿Emplea trabajadores?',
      },
    }`,
    negocio_esta_formalizado: `[
    {
        "id": 10,
        "quest": "¿Tiene Registro Único Tributario (RUT)?",
        "value": "si",
        "disabled": false,
        "error": false
    },
    {
        "id": 11,
        "quest": "¿Tiene Registro Mercantil?",
        "value": "",
        "disabled": true,
        "error": false
    },
    {
        "id": 12,
        "quest": "¿Renueva el Registro Mercantil cada año?",
        "value": "",
        "disabled": true,
        "error": false
    },
    {
        "id": 13,
        "quest": "¿Paga su salud, pensiones y riesgos laborales de los trabajadores?",
        "value": "si",
        "disabled": false,
        "error": false
    },
    {
        "id": 14,
        "quest": "¿Paga su salud, pensiones y riesgos laborales?",
        "value": "si",
        "disabled": false,
        "error": false
    },
    {
        "id": 15,
        "quest": "¿Conoce los requerimientos o permisos para desarrollar su actividad y cumple con estos?",
        "value": "si",
        "disabled": false,
        "error": false
    },
    {
        "id": 16,
        "quest": "¿Conoce los deberes y obligaciones tributarias de su actividad?",
        "value": "si",
        "disabled": false,
        "error": false
    }
]`,
    modelos_hipoteticos: `[
      {
        id: 47,
        value: true,
        quest:
          'Igual o más de 1400 UVT a menos de 3500 UVT (de $65.891.000 a $164.727.500)',
        error: false,
      },
      {
        id: 48,
        value: true,
        quest: 'Igual o menos de 4500 UVT (Igual o menos de $ 211.792.500)',
        error: false,
      },
    ]`,
    token:
      'drgyu0ze7tdpqjqksvxako4efoqwsj4oxy3viw3lvscos6jsfbhukrfm53xvzhr5fl15jxt9ypp1elwtpnr3hqkql471ejhcq3g0as390iyburrffpxq24tshix9zvd1rzhiw0n91ku220cwu9nraacngur0akw0y7cu3dr4yqiyncv1cqkdaece2j69398ef6ty1eyg',
    formulario_sobre_actividad_economica: `[
    {
        "id": 25,
        "question": "¿Tiene más de un establecimiento de comercio?",
        "value": "no",
        "disabled": false,
        "checkedYes": false,
        "checkedNo": false,
        "required": true,
        "error": false,
        "content": "El establecimiento de comercio es un conjunto de bienes organizados por el empresario para desarrollar y cumplir los fines de la empresa, ejemplo: tiendas, supermercados, restaurantes, cafeterías, fábricas, almacenes, etc."
    },
    {
        "id": 26,
        "question": "¿Cual fue el monto de sus consignaciones bancarias, depositos o inversiones financieras en el año inmediatamente anterior?",
        "value": "35235325",
        "required": true,
        "disabled": false,
        "checkedYes": false,
        "checkedNo": false,
        "error": false,
        "content": ""
    },
    {
        "id": 27,
        "question": "¿Cual fue el monto de sus consignaciones bancarias, depositos o inversiones financieras en el año inmediatamente anterior?",
        "value": "23523535",
        "required": true,
        "disabled": false,
        "checkedYes": false,
        "checkedNo": false,
        "error": false,
        "content": ""
    },
    {
        "id": 28,
        "question": "¿Realizo compras y consumos totales superioes a 1400 unidades de Valor Tributario (UVT) ($65.891.000) durante el año inmediatamente anterior ?",
        "value": "no",
        "required": true,
        "disabled": false,
        "checkedYes": false,
        "checkedNo": false,
        "error": false,
        "content": "¿La actividad economica se realiza bajo un sistema que implica la explotacion de intangibles (por ejemplo, franquicia,concesion, regalia o similar)"
    },
    {
        "id": 29,
        "question": "¿La actividad económica se realiza bajo un sistema que implique la explotación de\n        intangibles (por ejemplo, franquicia, concesión, regalía o similar) ?",
        "value": "no",
        "disabled": false,
        "checkedYes": false,
        "required": true,
        "checkedNo": false,
        "error": false,
        "content": "Los intangibles son activos no físicos que\n      tienen valor para una organización o persona, como marcas comerciales, patentes, derechos de autor y propiedad intelectual.\n      A diferencia de cosas físicas como computadoras o edificios, su valor viene de lo que representan, como ideas o reputación."
    }
]`,
    actividad_economica_a_formalizar: `[
    {
        "id": 17,
        "question": "¿Corresponde una actividad de restaurante, cafeterías, autoservicio, bares y similares?",
        "value": "no",
        "disabled": false,
        "required": true,
        "checkedYes": false,
        "checkedNo": false,
        "content": "",
        "error": false
    },
    {
        "id": 18,
        "question": "¿Es realizada con una franquicia?",
        "value": "",
        "disabled": true,
        "checkedYes": false,
        "checkedNo": false,
        "required": true,
        "error": false,
        "content": "Una franquicia es un acuerdo donde el\n    franquiciador permite al franquiciado explotar un negocio bajo su marca y sistema a cambio de un pago. Beneficia al\n    franquiciado con una marca establecida y soporte, mientras el franquiciador expande su mercado con menor riesgo. Se aplica\n    en varios sectores como restauración y retail. Ejemplos incluyen McDonald's y Starbucks."
    },
    {
        "id": 19,
        "question": "¿Se utilizan marcas propias?",
        "value": "",
        "disabled": true,
        "required": true,
        "checkedYes": false,
        "checkedNo": false,
        "error": false,
        "content": "Marca es una categoría de signo distintivo que identifica los productos o servicios de una empresa o empresario, como por ejemplo Coca Cola o Apple."
    },
    {
        "id": 20,
        "question": "¿Está gravada con IVA?",
        "value": "no",
        "disabled": false,
        "checkedYes": false,
        "required": true,
        "checkedNo": false,
        "checkedNose": false,
        "error": false,
        "content": "Quiere decir que la actividad está sujeta al Impuesto sobre el Valor Agregado (IVA), lo que se produce cuando una persona vende bienes o presta servicios. El IVA es un impuesto que el responsable, es decir, el vendedor o prestador, debe adicionar en la factura que expide, y posteriormente deberá transferir a la DIAN."
    },
    {
        "id": 21,
        "question": "¿Consiste en venta de bienes corporales muebles?",
        "value": "",
        "disabled": true,
        "required": true,
        "checkedYes": false,
        "checkedNo": false,
        "error": false,
        "content": ""
    },
    {
        "id": 22,
        "question": "¿Estos bienes están excluidos?",
        "value": "",
        "disabled": true,
        "checkedYes": false,
        "required": true,
        "checkedNo": false,
        "error": false,
        "content": ""
    },
    {
        "id": 23,
        "question": "¿Consiste en la prestación de servicios en el territorio nacional o desde el exterior?",
        "value": "",
        "disabled": true,
        "checkedYes": false,
        "checkedNo": false,
        "required": true,
        "error": false,
        "content": "Cuando se realiza una prestación de servicios dentro del territorio nacional, significa que el proveedor presta del servicio desde Colombia y el cliente lo recibe en Colombia. Mientras que la prestación de servicios desde el exterior se refiere a cuando el proveedor de servicios está ubicado por fuera de Colombia pero el servicio es recibido por el cliente en Colombia."
    },
    {
        "id": 24,
        "question": "¿Estos servicios están excluidos?",
        "value": "",
        "disabled": true,
        "checkedYes": false,
        "required": true,
        "checkedNo": false,
        "error": false,
        "content": ""
    }
]`,
    'response-Three': `[
    {
        "id": 30,
        "value": "$1,523,151,235",
        "text": "¿Cuál fue su patrimonio bruto el año anterior?"
    },
    {
        "id": 31,
        "value": "$35,235,325",
        "text": "¿Cuál es su patrimonio bruto del presente año?"
    },
    {
        "id": 32,
        "value": "$23,532,532",
        "text": "¿Ingresos de actividades gravadas con IVA?"
    },
    {
        "id": 33,
        "value": "$235,235",
        "text": "Ingresos de actividades de restaurante, cafeterías, autoservicio, bares y similares"
    },
    {
        "id": 34,
        "value": "$23,523,523",
        "text": "Ingresos Laborales"
    },
    {
        "id": 35,
        "value": "$23,523,532",
        "text": "Otros ingresos"
    },
    {
        "id": 36,
        "value": "$70,814,822",
        "text": "Total de ingresos brutos"
    },
    {
        "id": 37,
        "value": "$235,235,325",
        "text": "¿Ingresos de actividades gravadas con IVA?"
    },
    {
        "id": 38,
        "value": "$235,325",
        "text": "Ingresos de actividades de restaurante, cafeterías, autoservicio, bares y similares"
    },
    {
        "id": 39,
        "value": "$235,235",
        "text": "Ingresos Laborales"
    },
    {
        "id": 40,
        "value": "$2,352,353",
        "text": "Otros ingresos"
    },
    {
        "id": 41,
        "value": "$238,058,238",
        "text": "Total de ingresos brutos"
    }
]`,
    encuesta: `[
    {
        "id": 42,
        "value": "4",
        "question": "En una escala del 1 a 5, donde uno es muy malo y 5 muy bueno, la experiencia de uso del simulador"
    },
    {
        "id": 43,
        "value": "3",
        "question": "En una escala del 1 a 5, donde uno es muy malo y 5 muy util, la información arrojada por el simulador"
    },
    {
        "id": 44,
        "value": "4",
        "question": "En una escala del 1 a 5, donde 1 es muy dificil y 5 muy facil, la el acceso al simulador fue"
    },
    {
        "id": 45,
        "value": "si",
        "question": "¿Recomendaría el simulador a amigos o familiares que deseen formalizar su negocio?"
    },
    {
        "id": 46,
        "value": "asfsafsaf",
        "question": "¿En qué considera que podríamos mejorar para hacer un proceso más amigable y eficiente para nuestros usuarios? Déjenos un comentario en el recuadro."
    }
]`,
  };

  get length(): number {
    return Object.keys(this.store).length;
  }

  clear(): void {
    this.store = {};
  }

  getItem(key: string): string | null {
    return this.store[key] || null;
  }

  key(index: number): string | null {
    const keys = Object.keys(this.store);
    return index >= 0 && index < keys.length ? keys[index] : null;
  }

  removeItem(key: string): void {
    delete this.store[key];
  }

  setItem(key: string, value: string): void {
    this.store[key] = value;
  }
}

export const localStorageMock = new LocalStorageMock();
