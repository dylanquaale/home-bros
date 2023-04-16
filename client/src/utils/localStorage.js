// exporting property ids from storage
export const getSavedPropertyIds = () => {
    const savedPropertyIds = localStorage.getItem('saved_properties')
        ? JSON.parse(localStorage.getItem('saved_properties'))
        : [];

    return savedPropertyIds;
};
// save the property by id to local storage 
export const savePropertyIds = (propertyIdArr) => {
    if (propertyIdArr.length) {
        localStorage.setItem('saved_properties', JSON.stringify(propertyIdArr));
    } else {
        localStorage.removeItem('saved_properties');
    }
};
//remove the property from storage by the id
export const removePropertyId = (propertyId) => {
    const savedPropertyIds = localStorage.getItem('saved_properties')
        ? JSON.parse(localStorage.getItem('saved_properties'))
        : null;
// if false not there return false
    if (!savedPropertyIds) {
        return false;
    }

    const updatedSavedPropertyIds = savedPropertyIds?.filter((savedPropertyId) => savedPropertyId !== propertyId);
    localStorage.setItem('saved_properties', JSON.stringify(updatedSavedPropertyIds));
// if true return true
    return true;
};
