import {countries} from './countries.api'

const travelList = [
  {
    id: '2422442',
    country: countries.Russia.name,
    dateBegin: '15.05.2022',
    dateEnd: '21.06.2022',
    isfinished: true,
    travelName: 'Путешествие на Байкал'
  },
  {
    id: '24243442',
    country: countries.Ukraine.name,
    dateBegin: '15.08.2021',
    dateEnd: '24.09.2022',
    isfinished: true,
    travelName: 'Путешествие на Днепр'
  },
  {
    id: '22243442',
    country: countries.Japan.name,
    dateBegin: '07.10.2022',
    dateEnd: '',
    isfinished: false,
    travelName: 'Путешествие в Японию'
  },
  {
    id: '223423442',
    country: countries.Japan.name,
    dateBegin: '07.10.2022',
    dateEnd: '',
    isfinished: false,
    travelName: 'Путешествие в Японию'
  },
  {
    id: '2533442',
    country: countries.Japan.name,
    dateBegin: '07.10.2022',
    dateEnd: '',
    isfinished: false,
    travelName: 'Путешествие в Японию'
  },
  {
    id: '22264442',
    country: countries.USA.name,
    dateBegin: '07.10.2022',
    dateEnd: '',
    isfinished: false,
    travelName: 'Путешествие в Техас'
  },
  {
    id: '21343442',
    country: countries.Germany.name,
    dateBegin: '07.10.2022',
    dateEnd: '',
    isfinished: false,
    travelName: 'Путешествие в Лейпциг'
  },
]



export function fetchAll () {
  return travelList
}