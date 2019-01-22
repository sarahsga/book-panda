const initialState = {
  books: [
    {
      id: 1,
      categoryId: 10,
      name:
        'Muslims of the World: Portraits and Stories of Hope, Survival, Loss, and Love',
      description:
        'We are living in a time of unrest for many members of the Islamic faith around the globe. Enter Muslims of the World, a book based on the popular Instagram account @MuslimsoftheWorld1. Like the account, the book’s mission is to tell the diverse stories of Muslims living in the US and around the world. Illustrated throughout with moving photographs, each chapter will focus on different aspects of the Islamic faith and the many varying cultures it encompasses, offering tales of love, family, and faith while empowering Muslim women, refugees, and people of color. Whether it is telling a story about a young Syrian refugee who dreams of being a pilot or about a young girl’s decision to not remove her hijab, which in turn saved her family’s life, Muslims of the World aims to unite people of all cultures and faiths by sharing the hopes, trials, and tribulations of Muslims from every walk of life.',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/511mfj1oExL._SY375_.jpg',
      authors: [
        {
          id: 1,
          name: 'Sajjad Shah',
          about:
            'is the founder of Shah and Co. LLC, a consulting firm that focuses specifically on Muslim owned start-up companies. He launched the Instagram account @MuslimsoftheWorld1 three years ago with the intention of one day turning the stories posted there into a book. He is one of five boys and now spends most of his time bringing attention to the humanitarian crisis in Yemen through a non-profit called Pure Hands. He holds a Master of Professional Accounting degree from Butler University.'
        },
        {
          id: 2,
          name: 'Iman Mahoui',
          about:
            'is finishing up her last year at Indiana University, focusing on neuroscience and international studies. Her love of books and poetry, as well as social activism, inspired her work with Muslims of the World. She is the oldest of three girls, and through the dedication and commitment of her parents she hopes to empower other women the way her parents have empowered her.'
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'Arkansas Democrat-Gazette',
          review:
            '…this compilation give faces and voices to more than 60 Muslims living around the world and in the United States as they tell stories of faith, family, love and loss, and what it means to each person to live by their Islamic faith in both tangible and unseen ways through those life experiences.'
        }
      ],
      length: 267,
      publisher: 'Harry N. Abrams',
      publishDate: 'October 9, 2018',
      isbn: '141973248X',
      shippingWeight: '1.3 pounds',
      dimensions: '7.4 x 0.7 x 9 inches',
      price: 5.13,
      discountPercentage: 50,
      url:
        'https://www.amazon.com/Muslims-World-Portraits-Stories-Survival/dp/141973248X/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=',
      rating: 2.9
    }
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer
