// route to get logged in user's info (needs the token)
export const getMe = (token) => {
  return fetch('/api/users/me', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = (userData) => {
  return fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

// save property data for a logged in user
export const saveProperty = (propertyData, token) => {
  return fetch('/api/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(propertyData),
  });
};

// remove saved property data for a logged in user
export const deleteProperty = (propertyId, token) => {
  return fetch(`/api/users/properties/${propertyId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '95ca73bdfamshb3559b4cafeb6c0p1be87ajsnd385a82867f4',
		'X-RapidAPI-Host': 'zillow56.p.rapidapi.com'
	}
};

fetch(`https://zillow56.p.rapidapi.com/search?location=${searchInput}`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));