export interface MainMneu {
  id: number
  menu: string
  link: string
}

export const mainmenu: MainMneu[] = [
  {
    id: 1,
    menu: 'Q&A',
    link: '/qa',
  },
  {
    id: 2,
    menu: 'Lab5',
    link: '/lab5',
  },
]
