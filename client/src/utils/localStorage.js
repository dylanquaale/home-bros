export const getSavedPropertyIds = () => {
  const savedPropertyIds = localStorage.getItem('saved_books')
    ? JSON.parse(localStorage.getItem('saved_books'))
    : [];

  return savedPropertyIds;
};

export const savePropertyIds = (propertyIdArr) => {
  if (propertyIdArr.length) {
    localStorage.setItem('saved_books', JSON.stringify(propertyIdArr));
  } else {
    localStorage.removeItem('saved_books');
  }
};

export const removePropertyId = (propertyId) => {
  const savedPropertyIds = localStorage.getItem('saved_books')
    ? JSON.parse(localStorage.getItem('saved_books'))
    : null;

  if (!savedPropertyIds) {
    return false;
  }

  const updatedSavedPropertyIds = savedPropertyIds?.filter((savedPropertyId) => savedPropertyId !== propertyId);
  localStorage.setItem('saved_books', JSON.stringify(updatedSavedPropertyIds));

  return true;
};
