export const headers_links = [
  {
    name: "Calculadora",
    href: "/calculadora",
  },
  {
    name: "Info",
    href: "/info",
  },
  {
    name: "Contacto",
    href: "/contacto",
  },
  {
    name: "Sobre Nosotros",
    href: "/about",
  },
];

export const inputValues = [
  {
    label: "Depósito Inicial",
    name: "DepósitoInicial",
    id: "DepósitoInicial",
    type: "number",
    value: "formData.DepósitoInicial",
    descripcion: "Cantidad con la que vas a comenzar a invertir.",
    isInput: true,
    icon: "icon/usd-circle.svg",
  },
  {
    label: "Tasa De Interés Anual",
    name: "TasaDeInterésAnual",
    id: "TasaDeInterésAnual",
    type: "number",
    value: "formData.DepósitoInicial",
    descripcion:
      "Tasa de rendimiento anual que recibes expresada en porcentaje",
    isInput: true,
    icon: "icon/percentage.svg",
  },
  {
    label: "Años a Invertir",
    name: "AñosAInvertir",
    id: "AñosAInvertir",
    type: "number",
    value: "formData.DepósitoInicial",
    descripcion: "Número de años por los que vas a realizar la inversión.",
    isInput: true,
    icon: "icon/calendar-minus.svg",
  },
  {
    label: "Frecuencia Anual De Interés",
    name: "FrecuenciaAnualDeInterés",
    id: "FrecuenciaAnualDeInterés",
    type: "number",
    value: "formData.DepósitoInicial",
    descripcion:
      "Número de veces al año que se agrega el interés al capital (interés compuesto).",
    isInput: false,
    icon: "icon/clock.svg",
  },
  {
    label: "Aportaciones Adicionales",
    name: "AportacionesAdicionales",
    id: "AportacionesAdicionales",
    type: "number",
    value: "formData.DepósitoInicial",
    descripcion:
      "Depósitos adicionales a lo que invertiste inicialmente, la frecuencia del depósito es la misma que la que definas en 'Frecuencia anual de interés'.",
    isInput: true,
    icon: "icon/usd-circle.svg",
  },
];

export const ChartData = [
  {
    label: "Depósito Inicial",
  },
  {
    label: "Depositos adicionales acomulados",
  },
  {
    label: "Interes acomulado",
  },
];

export const homeInfo = [
  {
    icon: "/icon/tools.svg",
    titulo: "Herramienta Interactiva",
    informacion:
      "Interes-Plus ofrece una herramienta interactiva para calcular el interés simple y compuesto, ayudándole a comprender y gestionar el crecimiento de sus inversiones.",
    link: "/calculadora",
  },

  {
    icon: "/icon/graduation-cap.svg",
    titulo: "Recursos Educativos",
    informacion:
      "Interes-Plus proporciona recursos educativos y artículos sobre finanzas, ayudándole a navegar por el mundo financiero con confianza y conocimiento.",
    link: "/info",
  },

  {
    icon: "/icon/id-card-clip-alt.svg",
    titulo: "Sobre Nosotros",
    informacion:
      "Conozca más sobre la misión y el equipo detrás de Interes-Plus, dedicados a ofrecer herramientas y recursos para su educación financiera.",
    link: "/about",
  },
];

export const aboutInfo = [
  {
    title: " ¿Quiénes somos?",
    info: "Somos Interes-Plus, una plataforma dedicada a proporcionar herramientas y recursos educativos para la gestión financiera personal. Nuestro equipo está compuesto por apasionados a tecnología, dispuestos a seguir aprendiendo y mejorando cada dia.",
  },
  {
    title: "¿Qué hacemos?",
    info: " En Interes-Plus, ofrecemos calculadoras interactivas para el cálculo de interés simple y compuesto, así como recursos educativos que ayudan a nuestros usuarios a comprender mejor sus finanzas. Nuestra misión es facilitar la toma de decisiones financieras informadas y efectivas.",
  },
  {
    title: "¿En qué creemos?",
    info: "  Creemos en la importancia de la educación financiera para alcanzar la libertad económica. Nos guiamos por valores como la integridad, la transparencia, y la accesibilidad, y nos esforzamos por hacer que la gestión financiera sea comprensible y accesible para todos.",
  },
];
