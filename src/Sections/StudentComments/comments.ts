import ana from './assets/ana.jpg'

type Comment = {
  image?: string
  name: string
  nameAbbreviation: string
  comment: string
  time: string
  reply?: {
    professor?: boolean
    name?: string
    comment: string
    time: string
  }
}

export const COMMENTS: Comment[] = [
  {
    name: 'Samuel Vidal Hernández',
    nameAbbreviation: 'SV',
    comment: `Ha sido un curso muy gratificante,en el que he podido 
      aprender muchas cosas gracias a los grandes ponentes que han colaborado 
      y aportado sus conocimientos. Ahora toca ponerse manos a la obra 
      y poner en practica todo lo aprendido. Estoy muy orgulloso.`,
    time: '2 meses',
  },
  {
    name: 'Francisco José Sacedo',
    nameAbbreviation: 'F',
    comment: `Seguir creciendo como profesional es necesario pero si lo haces 
      junto a tus ídolos se convierte en un placer. Gracias por esta experiencia 
      y espero poder comentarlo en persona con sus protagonistas muy pronto.`,
    time: '3 meses',
    reply: {
      comment: `Este texto es una simulación de una contestación del equipo o 
        del profesor directamente. El texto tendrá un aspecto diferenciado, y 
        también tendrá un destaque mayor.`,
      time: '3 meses',
    },
  },
  {
    image: ana,
    name: 'Ana Milena Gómez',
    nameAbbreviation: 'AM',
    comment: `Profundizar en el entrenamiento y proceso de enseñanza`,
    time: '3 meses',
    reply: {
      professor: true,
      name: 'Mireia Belmonte',
      comment: `Hola, Ana! Continúa a practicar y seguro que mejorarás más y 
        más tu desempeño! Un abrazo!`,
      time: '3 meses',
    },
  },
]
