export const addCatItems = (catItems) => {
  return {
    type: 'ADD_CAT_ITEMS',
    catItems: [
      {
        image: 'http://24.media.tumblr.com/tumblr_m0jbyzmDzi1qzv52ko1_1280.jpg',
        fact: `An adult lion's roar can be heard up to five miles (eight kilometers) away.`
      },
      {
        image: 'http://25.media.tumblr.com/tumblr_m0tyg2fySZ1qh432wo1_1280.jpg',
        fact: `Jaguars are the only big cats that don't roar.`
      },
      {
        image: 'http://25.media.tumblr.com/tumblr_m4mm4umuMc1qzkfbpo1_1280.jpg',
        fact: `Cats lived with soldiers in trenches, where they killed mice during World War I.`
      }
    ]
  }
}

export const removeCatItem = (index) => {
  return {
    type: 'REMOVE_CAT_ITEM',
    index
  }
}
