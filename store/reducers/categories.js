const initialState = {
  categories: [
    {
      id: 1,
      name: 'humor',
      label: 'Humor & Entertainment'
    },
    {
      id: 2,
      name: 'biographies',
      label: 'Biographies'
    },
    {
      id: 3,
      name: 'computers',
      label: 'Computers & Technology'
    },
    {
      id: 4,
      name: 'science-math',
      label: 'Science & Math'
    },
    {
      id: 5,
      name: 'religion',
      label: 'Religion & Spirituality'
    },
    {
      id: 6,
      name: 'self-help',
      label: 'Self Help'
    },
    {
      id: 7,
      name: 'children',
      label: "Children's Books"
    },
    {
      id: 8,
      name: 'business',
      label: 'Business & Money'
    },
    {
      id: 9,
      name: 'mystery-thriller-suspense',
      label: 'Mystery, Thriller & Suspense'
    },
    {
      id: 10,
      name: 'arts',
      label: 'Arts & Photography'
    },
    {
      id: 11,
      name: 'science-fiction',
      label: 'Science Fiction & Fantasy'
    },
    {
      id: 12,
      name: 'history',
      label: 'History'
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
