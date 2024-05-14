import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  [x: string]: any;
  public bienesExcluidos: string[];
  public serviciosExcluidos: string[];
  filtroNombre: string = '';
  filtroNombreDos: string = '';
  showList: boolean = false;
  showListDos: boolean = false;
  matchingSearch: string[] = [];
  matchingSearchDos: string[] = [];
  @Input({ required: true }) modalTitle!: string;
  @Input({ required: true }) modalContent!: string;
  @Input({ required: true }) id!: number | string;

  constructor() {
    this.serviciosExcluidos = [
      'Los servicios médicos, odontológicos, hospitalarios, clínicos y de laboratorio, para la salud humana.',
      'Los servicios de administración de fondos del Estado y los servicios vinculados con la seguridad social de acuerdo con lo previsto en la Ley 100 de 1993.',
      'Los planes obligatorios de salud del sistema de seguridad social en salud expedidos por entidades autorizadas por la Superintendencia Nacional de Salud, los servicios prestados por las administradoras dentro del régimen de ahorro individual con solidaridad y de prima media con prestación definida, los servicios prestados por administradoras de riesgos laborales y los servicios de seguros y reaseguros para invalidez y sobrevivientes, contemplados dentro del régimen de ahorro individual con solidaridad a que se refiere el artículo 135 de la Ley 100 de 1993 o las disposiciones que la modifiquen o sustituyan.',
      'Las comisiones por intermediación por la colocación de los planes de salud del sistema general de seguridad social en salud expedidos por las entidades autorizadas legalmente por la Superintendencia Nacional de Salud, que no estén sometidos al impuesto sobre las ventas (IVA). ',
      'Los servicios de educación prestados por establecimientos de educación preescolar, primaria, media e intermedia, superior y especial o no formal, reconocidos como tales por el Gobierno nacional, y los servicios de educación prestados por personas naturales a dichos establecimientos. Están excluidos igualmente los servicios prestados por los establecimientos de educación relativos a restaurantes, cafeterías y transporte, así como los que se presten en desarrollo de las Leyes 30 de 1992 y 115 de 1994, o las disposiciones que las modifiquen o sustituyan. Igualmente están excluidos los servicios de evaluación de la educación y de elaboración y aplicación de exámenes para la selección y promoción de personal, prestados por organismos o entidades de la administración pública.',
      'Los servicios de educación virtual para el desarrollo de contenidos digitales, de acuerdo con la reglamentación expedida por el Ministerio de Tecnologías de la Información y las Comunicaciones, prestados en Colombia o en el exterior.',
      'Los servicios de conexión y acceso a internet de los usuarios residenciales del estrato 3.',
      'En el caso del servicio telefónico local, se excluyen del impuesto los primeros trescientos veinticinco (325) minutos mensuales del servicio telefónico local facturado a los usuarios de los estratos 1, 2 y 3 y el servicio telefónico prestado desde teléfonos públicos.',
      'El servicio de transporte público, terrestre, fluvial y marítimo de personas en el territorio nacional, y el de transporte público o privado nacional e internacional de carga marítimo, fluvial, terrestre y aéreo. Igualmente, se excluye el transporte de gas e hidrocarburos.',
      'El transporte aéreo nacional de pasajeros con destino o procedencia de rutas nacionales donde no exista transporte terrestre organizado. Esta exclusión también aplica para el transporte aéreo turístico con destino o procedencia al departamento de La Guajira y los municipios de Nuquí, en el departamento de Chocó, Mompox en el departamento de Bolívar, Tolú, en el departamento de Sucre, Miraflores en el departamento del Guaviare y Puerto Carreño en el departamento del Vichada.',
      'Los servicios públicos de energía. La energía y los servicios públicos de energía a base de gas u otros insumos.',
      'El agua para la prestación del servicio público de acueducto y alcantarillado, los servicios públicos de acueducto y alcantarillado, los servicios de aseo público y los servicios públicos de recolección de basuras.',
      'El gas para la prestación del servicio público de gas domiciliario y el servicio de gas domiciliario, ya sea conducido por tubería o distribuido en cilindros.',
      'Los servicios de alimentación, contratados con recursos públicos, destinados al sistema penitenciario, de asistencia social, de escuelas de educación pública, a las Fuerzas Militares, Policía Nacional, Centro de Desarrollo Infantil, centros geriátricos públicos, hospitales públicos, comedores comunitarios. 	',
      'El servicio de arrendamiento de inmuebles para vivienda y el arrendamiento de espacios para exposiciones y muestras artesanales nacionales, incluidos los eventos artísticos y culturales.',
      'Los intereses y rendimientos financieros por operaciones de crédito, siempre que no formen parte de la base gravable señalada en el artículo 447, y el arrendamiento financiero (leasing).',
      'Los servicios de intermediación para el pago de incentivos o transferencias monetarias condicionadas en el marco de los programas sociales del Gobierno nacional.',
      'Las boletas de entrada a cine, a los eventos deportivos, culturales, incluidos los musicales y de recreación familiar. También se encuentran excluidos los servicios de que trata el Artículo 6o de la Ley 1493 de 2011.',
      'Los servicios funerarios, los de cremación, inhumación y exhumación de cadáveres, alquiler y mantenimiento de tumbas y mausoleos.',
      'Adquisición de licencias de software para el desarrollo comercial de contenidos digitales, de acuerdo con la reglamentación expedida por el Ministerio de Tecnologías de la Información y Comunicaciones.',
      'Suministro de páginas web, servidores (hosting), computación en la nube (cloud computing).',
      'Las comisiones pagadas por los servicios que se presten para el desarrollo de procesos de titularización de activos a través de universalidades y patrimonios autónomos cuyo pago se realice exclusivamente con cargo a los recursos de tales universalidades o patrimonios autónomos.',
      'Las comisiones percibidas por las sociedades fiduciarias, sociedades administradoras de inversión y comisionistas de bolsa por la administración de fondos de inversión colectiva.',
      'Los siguientes servicios, siempre que se destinen a la adecuación de tierras, a la producción agropecuaria y pesquera y a la comercialización de los respectivos productos:',
      'a) El riego de terrenos dedicados a la explotación agropecuaria;',
      'b) El diseño de sistemas de riego, su instalación, construcción, operación, administración y conservación;',
      'c) La construcción de reservorios para la actividad agropecuaria;',
      'd) La preparación y limpieza de terrenos de siembra;',
      'e) El control de plagas, enfermedades y malezas, incluida la fumigación aérea y terrestre de sembradíos;',
      'f) El corte y recolección manual y mecanizada de productos agropecuarios;',
      'g) Aplicación de fertilizantes y elementos de nutrición edáfica y foliar de los cultivos;',
      'h) Aplicación de sales mineralizadas;',
      'i) Aplicación de enmiendas agrícolas;',
      'j) Aplicación de insumos como vacunas y productos veterinarios;',
      'k) El pesaje y el alquiler de corrales en ferias de ganado mayor y menor;',
      'l) La siembra;',
      'm) La construcción de drenajes para la agricultura;',
      'n) La construcción de estanques para la piscicultura;',
      'o) Los programas de sanidad animal;',
      'p) La perforación de pozos profundos para la extracción de agua;',
      'q) El desmonte de algodón, la trilla y el secamiento de productos agrícolas;',
      'r) La selección, clasificación y el empaque de productos agropecuarios sin procesamiento industrial',
      's) La asistencia técnica en el sector agropecuario;',
      't) La captura, procesamiento y comercialización de productos pesqueros;',
      'u) El servicio de recaudo de derechos de acceso vehicular a las centrales mayoristas de abasto.',
      'La comercialización de animales vivos, excepto los animales domésticos de compañía.',
      'El servicio de faenamiento.',
      'Están excluidos de IVA los servicios de hotelería y turismo que sean prestados en los municipios que integran las siguientes zonas de régimen aduanero especial:',
      'a) Zona de régimen aduanero especial de Urabá, Tumaco y Guapi.',
      'b) Zona de régimen aduanero especial de Inírida, Puerto Carreño, La Primavera y Cumaribo.',
      'c) Zona de régimen aduanero especial de Maicao, Uribia y Manaure.',
      'Las operaciones cambiarias de compra y venta de divisas, así como las operaciones cambiarias sobre instrumentos derivados financieros.',
      'Las comisiones percibidas por la utilización de tarjetas crédito y débito.',
      'Los servicios de promoción y fomento deportivo prestados por los clubes deportivos definidos en el artículo 2o del Decreto Ley 1228 de 1995.',
      'Los servicios de reparación y mantenimiento de naves y artefactos navales tanto marítimos como fluviales de bandera colombiana, excepto los servicios que se encuentran en el literal P) del numeral 3 del artículo 477 de este Estatuto.',
      'Los servicios de publicidad en periódicos que registren ventas en publicidad a 31 de diciembre del año inmediatamente anterior inferiores a 180.000 UVT.',
      'La publicidad en las emisoras de radio cuyas ventas sean inferiores a 30.000 UVT al 31 de diciembre del año inmediatamente anterior y programadoras de canales regionales de televisión cuyas ventas sean inferiores a 60.000 UVT al 31 de diciembre del año inmediatamente anterior. Aquellas que superen este monto se regirán por la regla general.',
      'Los servicios de corretaje de contratos de reaseguros.',
      'Los seguros tomados en el exterior, para amparar riesgos de transporte, barcos, aeronaves y vehículos matriculados en Colombia, así como bienes situados en territorio nacional y los seguros que en virtud de la Ley 1328 de 2009 sean adquiridos en el exterior, estarán gravados con el impuesto sobre las ventas a la tarifa general, cuando no se encuentren gravados con este impuesto en el país de origen. Cuando en el país en el que se tome el seguro, el servicio se encuentre gravado con el impuesto sobre las ventas a una tarifa inferior a la indicada en el inciso anterior, se causará el impuesto con la tarifa equivalente a la diferencia entre la aplicable en Colombia y la del correspondiente país. Los seguros de casco, accidentes y responsabilidad a terceros, de naves o aeronaves destinadas al transporte internacional de mercancías y aquellos que se contraten por el Fondo de Solidaridad y Garantía creado por la Ley 100 de 1993 tomados en el país o en el exterior, no estarán gravados con el impuesto sobre las ventas.',
    ];

    this.bienesExcluidos = [
      'Animales vivos de la especie porcina.',
      'Animales vivos de las especies ovina o caprina.',
      'Gallos, gallinas, patos, gansos, pavos (gallipavos) y pintadas, de las especies domésticas, vivos.',
      'Los demás animales vivos, excepto los animales domésticos de compañía',
      'Peces vivos, excepto los peces ornamentales',
      'Albacoras o atunes blancos.',
      'Atunes de aleta amarilla (rabiles).',
      'Atunes comunes o de aleta azul, del Atlántico y del Pacífico.',
      'Pescado seco, salado o en salmuera.',
      'Pescado ahumado, incluso cocido antes o durante el ahumado.',
      'Pescaso presentado en harina, polvo y "pellets", aptos para la alimentación humana.',
      'Productos constituidos por los componentes naturales de la leche.',
      'Miel natural.',
      'Semen de Bovino.	',
      'Bulbos, cebollas, tubérculos, raíces y bulbos tuberosos, turiones y rizomas, en reposo vegetativo, en vegetación o en flor, plantas y raíces de achicoria.',
      'Plantas vivas (incluidas sus raíces), esquejes e injertos; micelios.',
      'Plántulas para la siembra, incluso de especies forestales maderables.',
      'Papas (patatas) frescas o refrigeradas.	',
      'Tomates frescos o refrigerados.',
      'Cebollas, chalotes, ajos, puerros y demás hortalizas aliáceas, frescos o refrigerados.',
      'Coles, incluidos los repollos, coliflores, coles rizadas, colinabos.',
      'Productos comestibles similares del género Brassica, frescos o refrigerados.',
      'Lechugas (Lactuca sativa) y achicorias, comprendidas la escarola y la endibia (Cichoriumspp.), frescas o refrigeradas.',
      'Zanahorias, nabos, remolachas para ensalada, salsifies, apionabos, rábanos y raíces comestibles similares, frescos o refrigerados.',
      'Pepinos y pepinillos, frescos o refrigerados.',
      'Hortalizas de vaina, aunque estén desvainadas, frescas o refrigeradas.',
      'Las demás hortalizas, frescas o refrigeradas.',
      'Hortalizas secas, incluidas las cortadas en trozos o en rodajas o las trituradas o pulverizadas, pero sin otra preparación.',
      'Hortalizas de vaina secas desvainadas, aunque estén mondadas o partidas.	',
      'Raíces de yuca (mandioca), arrurruz o salep, aguaturmas (patacas), camotes (batatas, boniatos) y raíces y tubérculos similares ricos en fécula o inulina, frescos, refrigerados, congelados o secos, incluso troceados o en "pellets", médula de sagú.',
      'Cocos con la cáscara interna (endocarpio)',
      'Los demás cocos frescos',
      'Bananas, incluidos los plátanos "plantains", frescos o secos.',
      'Datiles, higos, piñas (ananás), aguacates (paltas), guayabas, mangos y mangostanes, frescos o secos.',
      'Agrios (cítricos) frescos o secos.',
      'Uvas, frescas o secas, incluidas las pasas.',
      'Melones, sandías y papayas, frescos.',
      'nzanas, peras y membrillos, frescos.',
      'Damascos (albaricoques, chabacanos), cerezas, duraznos (melocotones) (incluidos los griñones nectarines), ciruelas y endrinas, frescos.',
      'Las demás frutas u otros frutos, frescos.',
      'Café en grano sin tostar, cáscara y cascarilla de café.',
      'Semillas de cilantro para la siembra.',
      'Trigo duro para la siembra.',
      'Las demás semillas de trigo para la siembra.	',
      'Centeno para la siembra.	',
      'Cebada.',
      'Avena para la siembra.	',
      'Maíz para la siembra.',
      'Maíz para consumo humano.',
      'Arroz para consumo humano.	',
      'Arroz para la siembra.	',
      'Arroz con cáscara (Arroz Paddy).	',
      'Orgo de grano para la siembra.',
      'Maíz trillado para consumo humano.	',
      'Habas de soya para la siembra.	',
      'Maníes (cacahuetes, cacahuates) para la siembra.	',
      'Copra para la siembra.	',
      'Semillas de lino para la siembra.	',
      'Semillas de nabo (nabina) o de colza para siembra.		',
      'Semillas de girasol para la siembra.	',
      'Semillas de nueces y almendras de palma para la siembra.	',
      'Semillas de algodón para la siembra.	',
      'Semillas de ricino para la siembra. I',
      'Semillas de sésamo (ajonjolí) para la siembra.',
      'Semillas de mostaza para la siembra.',
      'Semillas de cártamo para la siembra.',
      'Semillas de melón para la siembra.',
      'Las demás semillas y frutos oleaginosos para la siembra.',
      'Semillas, frutos y esporas, para siembra.',
      'Caña de azúcar.',
      'Chancaca (panela, raspadura) obtenida de la extracción y evaporación en forma artesanal de los jugos de caña de azúcar en trapiches paneleros.	',
      'Cacao en grano para la siembra.',
      'Cacao en grano crudo.	',
      'Unicamente la Bienestarina.	',
      'Productos alimenticios elaborados de manera artesanal a base de leche.					',
      'Pan horneado o cocido y producido a base principalmente de harinas de cereales, con o sin levadura, sal o dulce, sea integral o no, incluida la arepa de maíz.	',
      'Productos alimenticios elaborados de manera artesanal a base de guayaba.	',
      'Agua, incluidas el agua mineral natural o artificial y la gaseada, sin adición de azúcar u otro edulcorante ni aromatizada, hielo y nieve.',
      'Sal (incluidas la de mesa y la desnaturalizada) y cloruro de sodio puro, incluso en disolución acuosa o con adición de antiaglomerantes o de agentes que garanticen una buena fluidez, agua de mar.',
      'Azufre de cualquier clase, excepto el sublimado, el precipitado y el coloidal.	',
      'Fosfatos de calcio naturales, fosfatos aluminocálcicos naturales y cretas fosfatadas.		',
      'lomita sin calcinar ni sintetizar, llamada "cruda". Cal dolomita inorgánica para uso agrícola como fertilizante.	',
      'llas, briquetas, ovoides y combustibles sólidos similares, obtenidos de la hulla.	',
      'ques y semicoques de hulla.',
      'ques y semicoques de lignito o turba.	',
      's natural licuado.		',
      's propano, incluido el autogás.	',
      'tanos licuados.',
      's natural en estado gaseoso, incluido el biogás.		',
      's propano en estado gaseoso y gas butano en estado gaseoso, incluido el autogás.		',
      'ergía eléctrica.',
      'terial radiactivo para uso médico.		',
      'atas, gasas, vendas y artículos análogos, impregnados o recubiertos de sustancias farmacéuticas o acondicionados para la venta al por menor con fines médicos.	',
      'onos de origen animal o vegetal, incluso mezclados entre sí o tratados químicamente..',
      'onos procedentes de la mezcla o del tratamiento químico de productos de origen animal o vegetal.	',
      'onos minerales o químicos nitrogenados.	',
      'onos minerales o químicos fosfatados.	',
      'onos minerales o químicos potásicos.',
      'onos minerales o químicos, con dos o tres de los elementos fertilizantes: nitrógeno, fósforo y potasio.',
      'onosen tabletas o formas similares o en envases de un peso bruto inferior o igual a 10 kg.	',
      'secticidas, raticidas y demás antirroedores, fungicidas.',
      'rbicidas, inhibidores de germinación y reguladores del crecimiento de las plantas, desinfectantes y productos similares, presentados en formas o en envases para la venta al por menor, o como preparaciones.',
      'activos de diagnóstico sobre cualquier soporte y reactivos de diagnóstico preparados, incluso sobre soporte.',
      'umáticos de los tipos utilizados en vehículos y máquinas agrícolas o forestales.',
      'eservativos.',
      'pel prensa en bobinas (rollos) o en hojas.',
      's demás papeles prensa en bobinas (rollos)	',
      'ta (Cabuya, fique).',
      'jidos de las demás fibras textiles vegetales.',
      'des confeccionadas para la pesca.',
      'paques de yute, cáñamo y fique.	',
      'cos (bolsas) y talegas, para envasar de yute.	',
      'cos (bolsas) y talegas, para envasar de pita (cabuya, fique).	',
      'cos (bolsas) y talegas, para envasar de cáñamo.	',
      'drillos de construcción y bloques de calicanto, de arcilla, y con base en cemento, bloques de arcilla silvocalcarea.	',
      'nedas de curso legal.',
      'tores fuera de borda, hasta 115HP.	',
      'tores Diésel hasta 150H P.	',
      'stemas de riego por goteo o aspersión.			',
      's demás sistemas de riego.		',
      'persores y goteros, para sistemas de riego.',
      'adañadoras, incluidas las barras de corte para montar sobre un tractor.	',
      's demás máquinas y aparatos de henificar.	',
      'ensas para paja o forraje, incluidas las prensas recogedoras.		',
      'sechadoras-trilladoras.	',
      's demás máquinas y aparatos de trillar.	',
      'quinas de cosechar raíces o tubérculos.	',
      's demás máquinas y aparatos de cosechar, máquinas y aparatos de trillar.	',
      'quinas para limpieza o clasificación de huevos, frutos o demás productos agrícolas.	',
      'rtes de máquinas, aparatos y artefactos de cosechar o trillar.		',
      'ensas para paja o forraje, cortadoras de césped y guadañadoras.	',
      'quinas para limpieza o clasificación de huevos, frutos o demás productos agrícolas.	',
      'quinas y aparatos para preparar alimentos o piensos para animales.',
      's demás máquinas y aparatos para uso agropecuario.	',
      'rtes de las demás máquinas y aparatos para uso agropecuario.		',
      'quinas para limpieza, clasificación o cribado de semillas, granos u hortalizas de vaina secas.	',
      'actores para uso agropecuario.',
      'llones de ruedas y demás vehículos para inválidos, incluso con motor u otro mecanismo de propulsión.',
      'rtes y accesorios de sillones de ruedas y demás vehículos para inválidos de la partida	',
      'molques y semirremolques, autocargadores o autodescargadores, para uso agrícola.	',
      'ntes de contacto.',
      'ntes de vidrio para gafas.	',
      'ntes de otras materias para gafas.',
      'téteres y catéteres peritoneales y equipos para la infusión de líquidos y filtros para diálisis renal de esta subpartida.',
      'uipos para la infusión de sangre.',
      'Artículos y aparatos de ortopedia, incluidas las fajas y vendajes médicoquirúrgicos y las muletas tablillas, férulas u otros artículos y aparatos para fracturas.',
      'Artículos y aparatos de prótesis, audífonos y demás aparatos que lleve la propia persona o se le implanten para compensar un defecto o incapacidad.',
      'Impresoras braille, máquinas inteligentes de lectura para ciegos, software lector de pantalla para ciegos.	',
      'Estereotipadoras braille, líneas braille, regletas braille, cajas aritméticas y de dibujo braille.	',
      'Lápices de escribir y colorear.',
      'Elementos manuales o mecánicos de escritura del sistema braille.		',
      'Bastones para ciegos aunque estén dotados de tecnología.	',
      'Las materias primas químicas con destino a la producción de plaguicidas e insecticidas.',
      'Las materias primas químicas con destino a la producción de plaguicidas e insecticidas de fertilizantes.	',
      'Las materias primas químicas con destino a la producción de medicamentos de las posiciones.	',
      'Las materias primas destinadas a la producción de vacunas para lo cual deberá acreditarse tal condición en la forma como lo señale el reglamento.	',
      'Productos de soporte nutricional del régimen especial destinados a ser administrados por vía enteral, para pacientes con patologías específicas o con condiciones especiales.	',
      'Alimentos para propósitos médicos especiales para pacientes que requieren nutrición enteral por sonda a corto o largo plazo.',
      'Los dispositivos anticonceptivos para uso femenino.',
      'Los computadores personales de escritorio o portátiles, cuyo valor no exceda de cincuenta (50) UVT.',
      'Los dispositivos móviles inteligentes (tabletas y celulares) cuyo valor no exceda de veintidós (22) UVT.',
      'Los equipos y elementos que se destinen a la construcción, instalación, montaje y operación de sistemas de control y monitoreo, necesarios para el cumplimiento de las regulaciones ambientales.	',
      'Los alimentos de consumo humano y animal que se importen de los países colindantes a los departamentos de Vichada, Guajira, Guainía y Vaupés, cuando se destinen  al consumo esos departamentos.',
      'Los alimentos de consumo humano donados a favor de los bancos de alimentos legalmente constituidos.',
      'Los objetos con interés artístico, cultural e histórico comprados por parte de los museos que integren la Red Nacional de Museos.',
      'Bienes para el consumo humano y animal, vestuario, elementos de aseo que se introduzcan, comercialicen y consuman en los departamentos de Guainía, Guaviare, Vaupés y Vichada.	',
      'Medicamentos para uso humano o veterinario que se introduzcan, comercialicen y consuman en los departamentos de Guainía, Guaviare, Vaupés y Vichada.	',
      'Materiales de construcción que se introduzcan, comercialicen y consuman en los departamentos de Guainía, Guaviare, Vaupés y Vichada.	',
      'El combustible para aviación que se suministre para el servicio de transporte aéreo nacional de pasajeros y de carga con origen y destino a los departamentos de Guainía, Amazonas, Vaupés, San Andrés Islas y Providencia, Arauca y Vichada.',
      'Los productos que se compren o introduzcan al departamento del Amazonas en el marco del convenio Colombo-Peruano y el convenio con la República Federativa del Brasil.	',
      'La compraventa de maquinaria y equipos destinados al desarrollo de proyectos o actividades que se encuentren registrados en el Registro Nacional de Reducción de Emisiones de Gases Efecto Invernadero	',
      'Las bicicletas, bicicletas eléctricas, motos eléctricas, patines, monopatines, monopatines eléctricos, patinetas, y patinetas eléctricas, de hasta 50 UVT.',
      'La venta de los bienes facturados por los comerciantes que se dedican exclusivamente a la venta de libros, revistas, folletos o coleccionables seriados de carácter científico o cultural.	',
      'Incentivos de premio inmediato de juegos de suerte y azar territoriales.',
      'El petróleo crudo recibido por parte de la Agencia Nacional de Hidrocarburos por concepto de pago de regalías para su respectiva monetización.	',
    ];
  }

  getItems(target: any) {
    const value = (target.value || '').toLowerCase();
    this.showList = value !== '';
    if (this.showList) {
      this.matchingSearch = this.bienesExcluidos.filter((items) =>
        items.toLowerCase().includes(value)
      );
    }
  }

  getItemsDos(target: any) {
    const value = (target.value || '').toLowerCase();
    this.showListDos = value !== '';
    if (this.showListDos) {
      this.matchingSearchDos = this.serviciosExcluidos.filter((items) =>
        items.toLowerCase().includes(value)
      );
    }
  }

  filtroNombreChangeDos(target: any) {
    this.filtroNombreDos = target.value;
  }

  filtroNombreChange(target: any) {
    this.filtroNombre = target.value;
  }
}
