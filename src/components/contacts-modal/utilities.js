export function parseEvenIdContacts(data, onlyEven) {

  if (onlyEven === false) {
    return data;
  }

  const _data = data.filter((item) => {
    return item.id % 2 === 0;
  });

  return _data;
}