const travelList = [
  {
    id: '2422442',
    country: 'Россия',
    dateBegin: '15.05.2022',
    dateEnd: '21.06.2022',
    isfinished: true,
    travelName: 'Путешествие на Байкал'
  },
  {
    id: '24243442',
    country: 'Украина',
    dateBegin: '15.08.2021',
    dateEnd: '24.09.2022',
    isfinished: true,
    travelName: 'Путешествие на Днепр'
  },
  {
    id: '22243442',
    country: 'Япония',
    dateBegin: '07.10.2022',
    dateEnd: '',
    isfinished: false,
    travelName: 'Путешествие в Японию'
  },
]

export function fetchAll () {
  return travelList
}