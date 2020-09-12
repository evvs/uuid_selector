
export const getUuid = (text) => {
  const regex = RegExp('[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}', 'gm');
  const matches = text.match(regex);
  return matches;
};

export const removeDuplicates = (init, duplicates) => {
  if (init && duplicates === null) return init;
  if (init && duplicates) return init.filter((e) => !duplicates.includes(e))
  return []
};
