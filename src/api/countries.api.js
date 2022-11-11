export const countries = {
  Russia: {_id: 3234, name: 'Россия'},
  Ukraine: {_id: 3334, name: 'Украина'},
  Belarus: {_id: 33534, name: 'Беларусь'},
  Japan: {_id: 7655, name: 'Япония'},
  China: {_id: 67546, name: 'Китай'},
  USA: {_id: 53673, name: 'США'},
  Germany: {_id: 46684, name: 'Германия'},
}

const fetchAll = () => new Promise((resolve) => setTimeout(() => resolve(countries)), 2000)

export default {
  fetchAll
}
