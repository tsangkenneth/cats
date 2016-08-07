export const requestCatItems = () => {
  return {
    type: 'REQUEST_CAT_ITEMS'
  }
}

export const receiveCatItems = (catItems) => {
  return {
    type: 'RECEIVE_CAT_ITEMS',
    catItems: catItems
  }
}

export const getCatItems = () => {
  return function (dispatch) {
    dispatch(requestCatItems())

    const getCatFacts = () => {
      return fetch('http://mapd-cats.azurewebsites.net/catfacts').then((response) => {
        return response.json();
      });
    }

    const getCatImages = () => {
      return fetch('http://mapd-cats.azurewebsites.net/catpics').then((response) => {
        return response.text();
      });
    }

    Promise.all([getCatFacts(), getCatImages()]).then((catStuff) => {
      let catItems = [];
      let catFacts = catStuff[0].facts;
      let catImages = new DOMParser().parseFromString(catStuff[1], 'text/xml').getElementsByTagName('url');

      // Assume catFacts.length <= catImages.length
      catFacts.forEach((fact, index) => {
        let newItem = {
          image: catImages[index].innerHTML,
          fact: fact
        };

        catItems.push(newItem);
      });

      dispatch(receiveCatItems(catItems));
    });
  }
}

export const removeCatItem = (index) => {
  return {
    type: 'REMOVE_CAT_ITEM',
    index
  }
}
