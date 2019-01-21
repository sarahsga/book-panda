const initialState = {
  books: [
    {
      id: 1,
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
      editor: {
        name: 'Arkansas Democrat-Gazette',
        review:
          '…this compilation give faces and voices to more than 60 Muslims living around the world and in the United States as they tell stories of faith, family, love and loss, and what it means to each person to live by their Islamic faith in both tangible and unseen ways through those life experiences.'
      },
      length: 267208,
      publisher: 'Harry N. Abrams',
      publishDate: 'October 9, 2018',
      language: 'English',
      'ISBN-10': '141973248X',
      'ISBN-13': '978-1419732485',
      dimensions: '7.1 x 0.6 x 9.1 inches',
      shippingWeight: '1.3 pounds',
      price: 5.13,
      url:
        'https://www.amazon.com/Muslims-World-Portraits-Stories-Survival/dp/141973248X/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=',
      rating: 2.9
    }
    // {
    //   id: 2,
    //   name: "The Artist's Way: 25th Anniversary Edition",
    //   description:
    //     "The Artist’s Way is the seminal book on the subject of creativity. An international bestseller, millions of readers have found it to be an invaluable guide to living the artist’s life. Still as vital today—or perhaps even more so—than it was when it was first published twenty five years ago, it is a powerfully provocative and inspiring work. Julia Cameron reflects upon the impact of The Artist’s Way and shares additional insights into the creative process that she has gained. Updated and expanded, this anniversary edition reframes The Artist’s Way for today's creatives.",
    //   imageUrl: '',
    //   authors: [
    //     {
    //       id: 1,
    //       name: 'Julia Cameron',
    //       about:
    //         "Award-winning writer Julia Cameron is the author of seventeen books, fiction and nonfiction, including The Artist's Way, The Vein of Gold, and The Right to Write, her bestselling works on the creative process. A novelist, playwright, songwriter and poet, she has extensive credits in theater, film, and television."
    //     }
    //   ],
    //   editor: {
    //     name: 'Elizabeth Gilbert',
    //     review:
    //       "This book has been around for a long time, and I hope it sticks around forever. It guides the reader through a fascinating (and fun) 12-week-long program of exercises and explorations that help loosen up one’s artistic self. It takes you on a journey that will cost you nothing (aside from the guidebook) and it brings much insight, gently helping you see what is holding you back, and showing you how to move forward. Three times in the last decade I've committed to doing The Artist's Way's program, and each time I've learned something important and surprising about myself and my work. Just to show how influential it's been to me—the first time I did the program, I had decided by end of it that I wanted to 1) travel to Italy and learn Italian, 2) Go to an Ashram in India, and 3) Return to Indonesia to study with the old medicine man I'd once met there. We all know what THAT decision led to. . . Without The Artist's Way, there would have been no Eat, Pray, Love."
    //   },
    //   length: 267,
    //   publisher: 'Jeremy P. Tarcher/Putnam; Anniversary edition',
    //   publishDate: 'March 4, 2002',
    //   language: 'English',
    //   'ISBN-10': '1585421464',
    //   'ISBN-13': '978-1585421466',
    //   dimensions: '7.4 x 0.7 x 9 inches',
    //   shippingWeight: '1.3 pounds',
    //   price: 18.95,
    //   url:
    //     'https://www.amazon.com/Artists-Way-Spiritual-Higher-Creativity/dp/1585421464/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=',
    //   avgCustomerReview: 4.6
    // },
    // {
    //   id: 3,
    //   name:
    //     'Muslims of the World: Portraits and Stories of Hope, Survival, Loss, and Love',
    //   description:
    //     'We are living in a time of unrest for many members of the Islamic faith around the globe. Enter Muslims of the World, a book based on the popular Instagram account @MuslimsoftheWorld1. Like the account, the book’s mission is to tell the diverse stories of Muslims living in the US and around the world. Illustrated throughout with moving photographs, each chapter will focus on different aspects of the Islamic faith and the many varying cultures it encompasses, offering tales of love, family, and faith while empowering Muslim women, refugees, and people of color. Whether it is telling a story about a young Syrian refugee who dreams of being a pilot or about a young girl’s decision to not remove her hijab, which in turn saved her family’s life, Muslims of the World aims to unite people of all cultures and faiths by sharing the hopes, trials, and tribulations of Muslims from every walk of life.',
    //   imageUrl: '',
    //   authors: [
    //     {
    //       id: 1,
    //       name: 'Sajjad Shah',
    //       about:
    //         'is the founder of Shah and Co. LLC, a consulting firm that focuses specifically on Muslim owned start-up companies. He launched the Instagram account @MuslimsoftheWorld1 three years ago with the intention of one day turning the stories posted there into a book. He is one of five boys and now spends most of his time bringing attention to the humanitarian crisis in Yemen through a non-profit called Pure Hands. He holds a Master of Professional Accounting degree from Butler University.'
    //     },
    //     {
    //       id: 2,
    //       name: 'Iman Mahoui',
    //       about:
    //         'is finishing up her last year at Indiana University, focusing on neuroscience and international studies. Her love of books and poetry, as well as social activism, inspired her work with Muslims of the World. She is the oldest of three girls, and through the dedication and commitment of her parents she hopes to empower other women the way her parents have empowered her.'
    //     }
    //   ],
    //   editor: {
    //     name: 'Arkansas Democrat-Gazette',
    //     review:
    //       '…this compilation give faces and voices to more than 60 Muslims living around the world and in the United States as they tell stories of faith, family, love and loss, and what it means to each person to live by their Islamic faith in both tangible and unseen ways through those life experiences.'
    //   },
    //   length: 267208,
    //   publisher: 'Harry N. Abrams',
    //   publishDate: 'October 9, 2018',
    //   language: 'English',
    //   'ISBN-10': '141973248X',
    //   'ISBN-13': '978-1419732485',
    //   dimensions: '7.1 x 0.6 x 9.1 inches',
    //   shippingWeight: '1.3 pounds',
    //   price: 5.13,
    //   url:
    //     'https://www.amazon.com/Muslims-World-Portraits-Stories-Survival/dp/141973248X/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=',
    //   avgCustomerReview: 4.7
    // },
    // {
    //   id: 4,
    //   name: "The Artist's Way: 25th Anniversary Edition",
    //   description:
    //     "The Artist’s Way is the seminal book on the subject of creativity. An international bestseller, millions of readers have found it to be an invaluable guide to living the artist’s life. Still as vital today—or perhaps even more so—than it was when it was first published twenty five years ago, it is a powerfully provocative and inspiring work. Julia Cameron reflects upon the impact of The Artist’s Way and shares additional insights into the creative process that she has gained. Updated and expanded, this anniversary edition reframes The Artist’s Way for today's creatives.",
    //   imageUrl: '',
    //   authors: [
    //     {
    //       id: 1,
    //       name: 'Julia Cameron',
    //       about:
    //         "Award-winning writer Julia Cameron is the author of seventeen books, fiction and nonfiction, including The Artist's Way, The Vein of Gold, and The Right to Write, her bestselling works on the creative process. A novelist, playwright, songwriter and poet, she has extensive credits in theater, film, and television."
    //     }
    //   ],
    //   editor: {
    //     name: 'Elizabeth Gilbert',
    //     review:
    //       "This book has been around for a long time, and I hope it sticks around forever. It guides the reader through a fascinating (and fun) 12-week-long program of exercises and explorations that help loosen up one’s artistic self. It takes you on a journey that will cost you nothing (aside from the guidebook) and it brings much insight, gently helping you see what is holding you back, and showing you how to move forward. Three times in the last decade I've committed to doing The Artist's Way's program, and each time I've learned something important and surprising about myself and my work. Just to show how influential it's been to me—the first time I did the program, I had decided by end of it that I wanted to 1) travel to Italy and learn Italian, 2) Go to an Ashram in India, and 3) Return to Indonesia to study with the old medicine man I'd once met there. We all know what THAT decision led to. . . Without The Artist's Way, there would have been no Eat, Pray, Love."
    //   },
    //   length: 267,
    //   publisher: 'Jeremy P. Tarcher/Putnam; Anniversary edition',
    //   publishDate: 'March 4, 2002',
    //   language: 'English',
    //   'ISBN-10': '1585421464',
    //   'ISBN-13': '978-1585421466',
    //   dimensions: '7.4 x 0.7 x 9 inches',
    //   shippingWeight: '1.3 pounds',
    //   price: 18.95,
    //   url:
    //     'https://www.amazon.com/Artists-Way-Spiritual-Higher-Creativity/dp/1585421464/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=',
    //   avgCustomerReview: 4.6
    // }
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer
