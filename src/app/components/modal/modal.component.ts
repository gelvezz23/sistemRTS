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
  @Input({ required: true }) modalTitle!: string;
  @Input({ required: true }) modalContent!: string;
  @Input({ required: true }) id!: number;

  constructor() {
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
}
