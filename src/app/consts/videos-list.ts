interface IVideos {
  id: number;
  title: string;
  videoUrl: string;
}

const leads: IVideos[] = [
  {
    id: 0,
    title: 'Tutoriais - Personalização de páginas e camapanhas',
    videoUrl:
      'https://www.youtube.com/watch?v=iHetrYfuJ-w&list=PL_dirAhLkFrvUz1Ml31VcRFdUXm5vgUiB&index=1',
  },
  {
    id: 1,
    title:
      'Como aplicar chamadas inteligente para gerar mais leads qualificados',
    videoUrl:
      'https://www.youtube.com/watch?v=EFSpoXt1zrI&list=PL_dirAhLkFrvUz1Ml31VcRFdUXm5vgUiB&index=2',
  },
  {
    id: 2,
    title: 'Como criar uma chamada de Alta Conversão',
    videoUrl:
      'https://www.youtube.com/watch?v=EFSpoXt1zrI&list=PL_dirAhLkFrvUz1Ml31VcRFdUXm5vgUiB&index=3',
  },
  {
    id: 3,
    title:
      'O fator mais importante de conversão para sua estratégia de Marketing Conversacional - Chamada ',
    videoUrl:
      'https://www.youtube.com/watch?v=Xfpr9JYX78A&list=PL_dirAhLkFrvUz1Ml31VcRFdUXm5vgUiB&index=4',
  },
  {
    id: 4,
    title:
      'Como usar a Leadster para qualificar seus leads de forma automática',
    videoUrl:
      'https://www.youtube.com/watch?v=Xfpr9JYX78A&list=PL_dirAhLkFrvUz1Ml31VcRFdUXm5vgUiB&index=5',
  },
  {
    id: 5,
    title:
      '6 Exemplos para personalizar a conversa de acordo com suas páginas e aumentar o volume de leads🚀 ',
    videoUrl:
      'https://www.youtube.com/watch?v=Xfpr9JYX78A&list=PL_dirAhLkFrvUz1Ml31VcRFdUXm5vgUiB&index=6',
  },
  {
    id: 6,
    title:
      'Como usar o poder da personalização por dispositivo para aumentar sua conversão.',
    videoUrl:
      'https://www.youtube.com/watch?v=Xfpr9JYX78A&list=PL_dirAhLkFrvUz1Ml31VcRFdUXm5vgUiB&index=7',
  },
  {
    id: 7,
    title:
      'Como Transformar o Blog da sua Empresa em um Canal de Vendas (Inbound Marketing)',
    videoUrl:
      'https://www.youtube.com/watch?v=Xfpr9JYX78A&list=PL_dirAhLkFrvUz1Ml31VcRFdUXm5vgUiB&index=8',
  },
  {
    id: 8,
    title:
      'Agendamento de Reuniões - Acelere suas vendas com a nova funcionalidade da Leadster!',
    videoUrl:
      'https://www.youtube.com/watch?v=Xfpr9JYX78A&list=PL_dirAhLkFrvUz1Ml31VcRFdUXm5vgUiB&index=9',
  },
  {
    id: 9,
    title:
      'Por que você perde 60% dos leads usando formulários de contato no site?',
    videoUrl:
      'https://www.youtube.com/watch?v=Xfpr9JYX78A&list=PL_dirAhLkFrvUz1Ml31VcRFdUXm5vgUiB&index=10',
  },
  {
    id: 10,
    title: 'Leadster - Demonstração da plataforma de Marketing Conversacional',
    videoUrl:
      'https://www.youtube.com/watch?v=Xfpr9JYX78A&list=PL_dirAhLkFrvUz1Ml31VcRFdUXm5vgUiB&index=11',
  },
  {
    id: 11,
    title:
      'Por que 60% do seu Investimento em Anúncios pode estar sendo Desperdiçado',
    videoUrl:
      'https://www.youtube.com/watch?v=Xfpr9JYX78A&list=PL_dirAhLkFrvUz1Ml31VcRFdUXm5vgUiB&index=12',
  },
];

const navigationBar = [
  { id: 'agency', title: 'Agência' },
  { id: 'chatbot', title: 'Chatbot' },
  { id: 'digital market', title: 'Marketing Digital' },
  { id: 'leads generation', title: 'Geração de leads' },
  { id: 'paid media', title: 'Mídia paga' },
];

export { navigationBar, leads };
export type { IVideos };
