import { Component } from '@angular/core';
import { ModalComponent } from '../../components/modal/modal.component';
import { DisclaimerComponent } from '../../components/disclaimer/disclaimer.component';
import { QuestionComponent } from '../../components/question/question.component';

@Component({
  selector: 'app-formulario',
  standalone: true,
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss',
  imports: [ModalComponent, DisclaimerComponent, QuestionComponent],
})
export class FormularioComponent {
  public questions: {
    id: number;
    question: string;
    value: string;
    disabled: boolean;
    content: string;
    checkedYes: boolean | string;
    checkedNo: boolean | string;
    checkedNose?: boolean | string;
    required: boolean;
  }[];
  constructor() {
    this.questions = [
      {
        id: 1,
        question:
          '¿Coresponde una actividad de restaurante, cafeterías, autoservicio, bares y similares?',
        value: '',
        disabled: false,
        required: true,
        checkedYes: false,
        checkedNo: false,
        content: '',
      },
      {
        id: 2,
        question: '¿Es realizada con una franquicia?',
        value: '',
        disabled: true,
        checkedYes: false,
        checkedNo: false,
        required: true,
        content: `Una franquicia es un acuerdo donde el
        franquiciador permite al franquiciado explotar un negocio bajo su marca y sistema a cambio de un pago. Beneficia al
        franquiciado con una marca establecida y soporte, mientras el franquiciador expande su mercado con menor riesgo. Se aplica
        en varios sectores como restauración y retail. Ejemplos incluyen McDonald's y Starbucks.`,
      },
      {
        id: 3,
        question: '¿Se utilizan marcas propias?',
        value: '',
        disabled: true,
        required: true,
        checkedYes: false,
        checkedNo: false,
        content:
          'Marca es una categoría de signo distintivo que identifica los productos o servicios de una empresa o empresario, como por ejemplo Coca Cola o Apple.',
      },
      {
        id: 4,
        question: '¿Está gravada con IVA?',
        value: '',
        disabled: false,
        checkedYes: false,
        required: true,
        checkedNo: false,
        checkedNose: false,
        content: '',
      },
      {
        id: 5,
        question: '¿Consiste en venta de bienes corporales muebles?',
        value: '',
        disabled: true,
        required: true,
        checkedYes: false,
        checkedNo: false,
        content: '',
      },
      {
        id: 6,
        question: '¿Estos bienes están excluidos?',
        value: '',
        disabled: true,
        checkedYes: false,
        required: true,
        checkedNo: false,
        content: `Un bien excluido es aquel que no está gravada su venta con IVA, en virtud de la ley. El Estatuto Tributario en el artículo 424 indica algunos bienes excluidos, entre los cuales podemos encontrar los siguientes: Viene lista larga del 424:
        Animales vivos de la especie porcina.
        Animales vivos de las
        especies ovina o
        caprina.
        Gallos, gallinas,
        patos, gansos, pavos
        (gallipavos) y
        pintadas, de las
        especies domésticas,
        vivos.
        Los demás animales
        vivos. <Partida
        modificada por el
        artículo 72 de la Ley
2277 de 2022. El
nuevo texto es el
siguiente:> Los
demás animales
vivos, excepto los
animales domésticos
de compañía
Peces vivos, excepto
los peces
ornamentales de las
posiciones
03.01.11.00.00 y
03.01.19.00.00.
Albacoras o atunes
blancos.
Atunes de aleta
amarilla (rabiles).
Atunes comunes o de
aleta azul, del
Atlántico y del
Pacífico.
Pescado seco, salado
o en salmuera,
pescado ahumado,
incluso cocido antes
o durante el
ahumado, harina,
polvo y "pellets" de
pescado, aptos para
la alimentación
humana.
Productos
constituidos por los
componentes
naturales de la leche.
Miel natural.
Semen de Bovino.
Bulbos, cebollas,
tubérculos, raíces y
bulbos tuberosos,
turiones y rizomas,
en reposo vegetativo,
en vegetación o en
flor, plantas y raíces
de achicoria, excepto
las raíces de la
partida 12.12.
Las demás plantas
vivas (incluidas sus
raíces), esquejes e
injertos; micelios.
Plántulas para la
siembra, incluso de
especies forestales
maderables.
Papas (patatas)
frescas o
refrigeradas.
Tomates frescos o
refrigerados.
Cebollas, chalotes,
ajos, puerros y
demás hortalizas
aliáceas, frescos o
refrigerados.
Coles, incluidos los
repollos, coliflores,
coles rizadas,
colinabos y
productos
comestibles similares
del género Brassica,
frescos o
refrigerados.
Lechugas (Lactuca
sativa) y achicorias,
comprendidas la
escarola y la endibia
(Cichoriumspp.),
frescas o
refrigeradas.
Zanahorias, nabos,
remolachas para
ensalada, salsifies,
apionabos, rábanos y
raíces comestibles
similares, frescos o
refrigerados.
Pepinos y pepinillos,
frescos o
refrigerados.
Hortalizas de vaina,
aunque estén
desvainadas, frescas
o refrigeradas.
Las demás hortalizas,
frescas o
refrigeradas.
Hortalizas secas,
incluidas las cortadas
en trozos o en
rodajas o las
trituradas o
pulverizadas, pero
sin otra preparación.
Hortalizas de vaina
secas desvainadas,
aunque estén
mondadas o
partidas.
Raíces de yuca
(mandioca), arrurruz
o salep, aguaturmas
(patacas), camotes
(batatas, boniatos) y
raíces y tubérculos
similares ricos en
fécula o inulina,
frescos, refrigerados,
congelados o secos,
incluso troceados o
en "pellets", médula
de sagú.
Cocos con la cáscara
interna (endocarpio)
Los demás cocos
frescos
Bananas, incluidos
los plátanos
"plantains", frescos o
secos.
Dátiles, higos, piñas
(ananás), aguacates
(paltas), guayabas,
mangos y
mangostanes,
frescos o secos.
Agrios (cítricos)
frescos o secos.
Uvas, frescas o secas,
incluidas las pasas.
Melones, sandías y
papayas, frescos.
Manzanas, peras y
membrillos, frescos.
Damascos
(albaricoques,
chabacanos),
cerezas, duraznos
(melocotones)
(incluidos los
griñones nectarines),
ciruelas y endrinas,
frescos.
Las demás frutas u
otros frutos, frescos.
Café en grano sin
tostar, cáscara y
cascarilla de café.
Semillas de cilantro
para la siembra.
Trigo duro para la
siembra.
Las demás semillas
de trigo para la
siembra.
Centeno para la
siembra.
Cebada.
Avena para la
siembra.
Maíz para la siembra.
Maíz para consumo
humano.
Arroz para consumo
humano.
Arroz para la
siembra.
Arroz con cáscara
(Arroz Paddy).
Sorgo de grano para
la siembra.
Maíz trillado para
consumo humano.
Habas de soya para
la siembra.
Maníes (cacahuetes,
cacahuates) para la
siembra.

        `,
      },
      {
        id: 7,
        question:
          '¿Consiste en la prestación de servicios en el territorio nacional o desde el exterior?',
        value: '',
        disabled: true,
        checkedYes: false,
        checkedNo: false,
        required: true,
        content: '',
      },
      {
        id: 8,
        question: '¿Estos servicios están excluidos?',
        value: '',
        disabled: false,
        checkedYes: false,
        required: true,
        checkedNo: false,
        content: '',
      },
    ];
  }

  public saveLocalStorage(): void {
    localStorage.setItem('response', JSON.stringify(this.questions));
  }

  public getValidateAnswer(id: number, value: string): void {
    if (id === 1 && value === 'si') {
      this.questions[1].disabled = false;
      this.questions[2].disabled = false;
    }

    if (id === 1 && value === 'no') {
      this.questions[1].disabled = true;
      this.questions[2].disabled = true;
    }

    if (id === 2 && value) {
      this.questions[1].disabled = false;
    }
    if (id === 3 && value) {
      this.questions[2].disabled = false;
    }

    if (id === 4 && value === 'no se') {
      this.questions[4].disabled = false;
      this.questions[6].disabled = false;
    }
    if (id === 4 && value === 'si') {
      this.questions[4].disabled = true;
      this.questions[5].disabled = true;
      this.questions[6].disabled = true;
    }

    if (id === 4 && value === 'no') {
      this.questions[4].disabled = true;
      this.questions[5].disabled = true;
      this.questions[6].disabled = true;
      this.questions[3].checkedYes = false;
    }

    if (id === 5 && value) {
      this.questions[4].disabled = false;
    }
    if (id === 5 && value === 'si') {
      this.questions[5].disabled = false;
    }

    if (id === 5 && value === 'no') {
      this.questions[5].disabled = true;
    }

    if (id === 6 && value === 'no') {
      this.questions[3].checkedYes = true;
      this.questions[5].disabled = true;
      this.getAnswer('si', 4);
    }

    if (id === 6 && value === 'si') {
      this.questions[3].checkedYes = false;
      this.getAnswer('', 4);
    }
  }

  public getAnswer(value: string, id: number): void {
    const questionIndex = this.questions.findIndex(
      (question) => question.id === id
    );

    if (questionIndex !== -1) {
      this.questions[questionIndex].value = value;
    }
    this.getValidateAnswer(id, value);
    this.saveLocalStorage();
  }

  public handleSubmit(event: any): void {
    event.preventDefault();
    console.log(event);
  }
}
