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
      rating: 4.5
    },
    {
      id: 2,
      categoryId: 10,
      name:
        'The Astrophotography Manual: A Practical and Scientific Approach to Deep Sky Imaging',
      description:
        'The Astrophotography Manual, Second Edition is for photographers ready to move beyond standard SLR cameras and editing software to create beautiful images of nebulas, galaxies, clusters, and the stars. Beginning with a brief astronomy primer, this book takes readers through the full astrophotography process, from choosing and using equipment to image capture, calibration, and processing. This combination of technical background and hands-on approach brings the science down to earth, with practical methods to ensure success.',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/61OSfoGECML._SY375_.jpg',
      authors: [
        {
          id: 1,
          name: 'Chris Woodhouse',
          about:
            'was born in England, and during his teenage years was a keen amateur photographer. After receiving an M.Eng. in Electronics at Bath University, he designed communication and optical gauging equipment before joining an automotive company. His traditional monochrome photography earned him an Associateship distinction from the Royal Photographic Society. After the publication of the first edition of The Astrophotography Manual and astronomy-related activities, he was accepted as a Fellow of the Royal Astronomical Society. He has pursued his passion for all forms of photography over the last 35 years and additionally invented and patented several unique darkroom timers and meters, which are sold throughout the world. He quickly found the technical challenges of astrophotography responded well to methodical and scientific methods, and together with his traditional photographic experience, he produces beautiful and fascinating images.'
        }
      ],
      editorialReviews: null,
      length: 432,
      publisher: 'Routledge; 2 edition',
      publishDate: 'December 14, 2017',
      isbn: '1138055360',
      shippingWeight: '2.9 pounds',
      dimensions: '8 x 1 x 10 inches',
      price: 56.95,
      discountPercentage: 5,
      url:
        'https://www.amazon.com/Astrophotography-Manual-Practical-Scientific-Approach-dp-1138055360/dp/1138055360/ref=mt_paperback?_encoding=UTF8&me=&qid=',
      rating: 4.8
    },
    {
      id: 3,
      categoryId: 10,
      name:
        'Art 101: From Vincent van Gogh to Andy Warhol, Key People, Ideas, and Moments in the History of Art (Adams 101)',
      description: `Too often, textbooks obscure the beauty and wonder of fine art with tedious discourse that even Leonardo da Vinci would oppose. Art 101 cuts out the boring details and lengthy explanations, and instead, gives you a lesson in artistic expression that keeps you engaged as you discover the world's greatest artists and their masterpieces.
        From color theory and Claude Monet to Jackson Pollock and Cubism, this primer is packed with hundreds of entertaining tidbits and works of art that you won't be able to get anywhere else.
        
        So whether you're looking to master classic painting techniques, or just want to learn more about popular styles of art, Art 101 has all the answers--even the ones you didn't know you were looking for.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51yiYxETVIL._SX366_BO1,204,203,200_.jpg',
      authors: [
        {
          id: 1,
          name: 'Eric Grzymkowski',
          about: `is a writer and trivia buff who has written several books, including The United States of Strange, Attack of the Killer Facts!, The Quotable A**hole, and A Year of Living Sinfully.`
        }
      ],
      editorialReviews: null,
      length: 288,
      publisher: 'Adams Media',
      publishDate: 'January 1, 2014',
      isbn: '1440571546',
      shippingWeight: '13.4 ounces',
      dimensions: '5.2 x 1 x 7.1 inches',
      price: 15.99,
      discountPercentage: 20,
      url:
        'https://www.amazon.com/Art-101-Vincent-Moments-History/dp/1440571546/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=&sr=',
      rating: 4.0
    },
    {
      id: 4,
      categoryId: 10,
      name: 'Universal Principles of Design',
      description: `Universal Principles of Design, Revised and Updated is a comprehensive, cross-disciplinary encyclopedia covering 125 laws, guidelines, human biases, and general considerations important to successful design. Richly illustrated and easy to navigate, it pairs clear explanations of every design concept with visual examples of the ideas applied in practice. From the 80/20 Rule to the Weakest Link, every major design concept is defined and illustrated.

        Whether a marketing campaign or a museum exhibit, a video game or a complex control system, the design we see is the culmination of many concepts and practices brought together from a variety of disciplines. Because no one can be an expert on everything, designers have always had to scramble to find the information and know-how required to make a design work—until now.
        
        Just a few of the principles that will broaden your design knowledge, promote brainstorming, and help you check the quality of your work:
        
        Baby-Face Bias
        Expectation Effect
        Golden Ration
        Ockham's Razor
        Proximity
        Scaling Fallacy`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/41NRT1nGnSL._SX418_BO1,204,203,200_.jpg',
      authors: [
        {
          id: 1,
          name: 'William Lidwell',
          about: `is the Director of Design at Stuff Creators Design in Houston, Texas. He is author of the best-selling design book, Universal Principles of Design, which has been translated into 12+ languages, and Deconstructing Product Design, a social deconstruction of 100 classic products. He is the lecturer of two video series on design: "How Colors Affect You: What Science Reveals" available from The Great Courses, and "The Science of Logo Design," available from Lynda.com.`
        },
        {
          id: 2,
          name: 'Kritina Holden',
          about: `is a Human Factors specialist at Lockheed Martin–Space Operations and NASA, where she is responsible for performing applied research on HCI topics for the space environment. Formerly a Lead Usability Engineer with BMC Software, Kritina is author of numerous guideline texts in the areas of human-computer interaction and human performance.`
        },
        {
          id: 3,
          name: 'Jill Butler',
          about: `is the founder and president of Stuff Creators Design Studio. She and her staff help clients explain concepts and express themselves through graphics, interaction design, web site design, printed products, and custom-designed 3-D objects. She has worked as a print designer, information designer, and multimedia designer for herself and various companies in the Houston area. Jill served as a lecturer and taught design-related classes at the University of Houston and Kingwood Community College.`
        }
      ],
      editorialReviews: null,
      length: 272,
      publisher:
        'Rockport Publishers; 2nd Second Edition, Revised and Up ed. edition',
      publishDate: 'January 1, 2010',
      isbn: '1592535879',
      shippingWeight: '1.8 pounds',
      dimensions: '8.9 x 0.8 x 10.2 inches',
      price: 20.37,
      discountPercentage: 32,
      url:
        'https://www.amazon.com/Universal-Principles-Design-Revised-Updated-dp-1592535879/dp/1592535879/ref=mt_paperback?_encoding=UTF8&me=&qid=',
      rating: 4.5
    },
    {
      id: 5,
      categoryId: 10,
      name:
        'Basic Music Theory: How to Read, Write, and Understand Written Music',
      description:
        'What do all those lines and squiggles and dots mean? Basic Music Theory takes you through the sometimes confusing world of written music with a clear, concise style that is at times funny and always friendly. The book is written by an experienced music teacher using methods refined over more than twenty years in schools and in his private teaching studio. Lessons are fun, well-paced, and enjoyable. Whether you’re a beginner of any age, whether you’re an experienced player who wants to bone up on your theory, or whether you teach music and need a fun way to do it, you’ll find this book valuable and will refer to it again and again.',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51rNQ70DJzL._SX398_BO1,204,203,200_.jpg',
      authors: [
        {
          id: 1,
          name: 'Jonathan Harnum',
          about: `is an author, musician, educator, and proud Alaskan. His latest book,"The Practice of Practice," is a result of over 5 years of study, including original research of my own, and more than 30 years of experience as both musician and teacher. Learn more at www.ThePracticeOfPractice.com `
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'Midwest Book Review',
          review: `Basic Music Theory is an ideal and highly recommended text for anyone of any background wanting to become proficient in the reading, composing, and performance of written and notated music.`
        },
        {
          id: 2,
          editor: 'KLIATT Library Review Service',
          review: `This is a book that covers lots of ground without ever appearing "difficult." It is written in a breezy, conversational manner, so one "talk" naturally drifts into the next.`
        },
        {
          id: 3,
          editor: 'Chris Ward (Kendal, UK) ',
          review: `Basic Music Theory by Jonathan Harnum explains the subject in a manner that is light-hearted and easy to follow. For someone in their late forties (like me) who hasn't had formal music training since the age of thirteen, it's been extremely useful. I can now say that I'm able to read music and understand some of the more-complex musical arrangements. I've been playing the saxophone for about 18 months now and the book has helped to bring me from a level of not being able to read music up to one of reasonable competence at sight reading.`
        }
      ],
      length: 226,
      publisher: 'CreateSpace Independent Publishing Platform; 4th edition',
      publishDate: '2013',
      isbn: '1492831638',
      shippingWeight: '1.3 pounds',
      dimensions: '8 x 0.5 x 10 inches',
      price: 18.95,
      discountPercentage: 5,
      url:
        'https://www.amazon.com/Basic-Music-Theory-4th-ed-dp-1492831638/dp/1492831638/ref=mt_paperback?_encoding=UTF8&me=&qid=',
      rating: 4.4
    },
    {
      id: 6,
      categoryId: 10,
      name:
        'Mastering Photographic Histograms: The key to fine-tuning exposure and better photo editing',
      description: `Histograms are the key to proper exposure and creating stunning images in the post-processing stage of DIGITAL photography.
        Photographic Histograms are unique to Digital Photography.
        Most books on the subject of Photographic Histograms only discuss the Luminosity Histogram that is projected on the LCD screens of Digital cameras. There are three other types of Histograms that you should know about -- RGB, Colors, and Color Channel.
        
        Most books also only describe the basics of how to use the Luminosity Histogram to set exposure. In this relatively short but fact filled book you will learn how histograms are created and their significance to photography.
        
        Though they did not exist in the days of film photography, they are closely related to the Exposure Zones System created by Ansel Adams and Fred Archer around 1939.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51mQsloGHBL._SX384_BO1,204,203,200_.jpg',
      authors: [
        {
          id: 1,
          name: 'Al Judge',
          about: `is a professional photographer and author living with his wife in Prescott, Arizona. In March 2012, the Sedona Area Guild of Artists (SAGA) included Al in their list of the Best Artists of Sedona 2012. Al's books use numerous illustrations and clear explanations to take the mystery out of creating excellent images. A few hours spent with one of these books can save the reader from months of frustration and confusion.`
        }
      ],
      editorialReviews: null,
      length: 98,
      publisher: 'CreateSpace Independent Publishing Platform; 1 edition',
      publishDate: 'November 1, 2016',
      isbn: '1539538222',
      shippingWeight: '11 ounces',
      dimensions: '8.5 x 0.2 x 11 inches',
      price: 21.95,
      discountPercentage: 14,
      url:
        'https://www.amazon.com/Mastering-Photographic-Histograms-fine-tuning-exposure/dp/1539538222/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=',
      rating: 3.9
    },
    {
      id: 7,
      categoryId: 2,
      name: `Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future`,
      description: `In the spirit of Steve Jobs and Moneyball, Elon Musk is both an illuminating and authorized look at the extraordinary life of one of Silicon Valley's most exciting, unpredictable, and ambitious entrepreneurs--a real-life Tony Stark--and a fascinating exploration of the renewal of American invention and its new "makers."
        Elon Musk spotlights the technology and vision of Elon Musk, the renowned entrepreneur and innovator behind SpaceX, Tesla, and SolarCity, who sold one of his Internet companies, PayPal, for $1.5 billion. Ashlee Vance captures the full spectacle and arc of the genius's life and work, from his tumultuous upbringing in South Africa and flight to the United States to his dramatic technical innovations and entrepreneurial pursuits.
        Vance uses Musk's story to explore one of the pressing questions of our age: can the nation of inventors and creators who led the modern world for a century still compete in an age of fierce global competition? He argues that Musk--one of the most unusual and striking figures in American business history--is a contemporary, visionary amalgam of legendary inventors and industrialists including Thomas Edison, Henry Ford, Howard Hughes, and Steve Jobs. More than any other entrepreneur today, Musk has dedicated his energies and his own vast fortune to inventing a future that is as rich and far-reaching as the visionaries of the golden age of science-fiction fantasy.
        Thorough and insightful, Elon Musk brings to life a technology industry that is rapidly and dramatically changing by examining the life of one of its most powerful and influential titans.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/5112YFsXIJL._SX330_BO1,204,203,200_.jpg',
      authors: [
        {
          id: 1,
          name: 'Ashlee Vance',
          about: `offers an unprecedented look into the remarkable life of the most daring entrepreneur of our time. Elon Musk paints a portrait of a complex man who has renewed American industry and sparked new levels of innovation—from PayPal to Tesla, SpaceX, and SolarCity—overcoming hardship, earning billions, and making plenty of enemies along the way.`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'Dwight Garner, New York Times',
          review:
            'Mr. Vance tells the stories of both SpaceX and Tesla with intricacy and insight. . . . What does come through is a sense of legitimate wonder at what humans can accomplish when they aim high, and aim weird.'
        },
        {
          id: 2,
          editor: 'New York Times Book Review',
          review:
            '[T]his work will likely serve as the definitive account of a man whom so far we’ve seen mostly through caricature. By the final pages, too, any reader will sense the need to put comparisons to Steve Jobs aside. Give Musk credit. There is no one like him.'
        },
        {
          id: 3,
          editor: 'Wall Street Journal',
          review: '[A] spirited and riveting biography.'
        },
        {
          id: 4,
          editor: 'Financial Times',
          review:
            'The SpaceX and Tesla founder certainly sees setbacks as an unavoidable part of innovation. But a brilliant new biography paints a picture of him as an obsessive, intolerant perfectionist.'
        },
        {
          id: 5,
          editor: 'The Guardian UK',
          review: 'Fascinating and superbly researched…'
        }
      ],
      length: 416,
      publisher: 'Ecco; Reprint edition',
      publishDate: 'January 24, 2017',
      isbn: '006230125X',
      shippingWeight: '12 ounces',
      dimensions: '5.3 x 1 x 8 inches',
      price: 11.55,
      discountPercentage: 32,
      url:
        'https://www.amazon.com/Elon-Musk-SpaceX-Fantastic-Future/dp/006230125X/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1548160206&sr=1-45',
      rating: 4.6
    },
    {
      id: 8,
      categoryId: 2,
      name: `The Girl with Seven Names: A North Korean Defector’s Story`,
      description: `An extraordinary insight into life under one of the world’s most ruthless and secretive dictatorships – and the story of one woman’s terrifying struggle to avoid capture/repatriation and guide her family to freedom.

        As a child growing up in North Korea, Hyeonseo Lee was one of millions trapped by a secretive and brutal communist regime. Her home on the border with China gave her some exposure to the world beyond the confines of the Hermit Kingdom and, as the famine of the 1990s struck, she began to wonder, question and to realise that she had been brainwashed her entire life. Given the repression, poverty and starvation she witnessed surely her country could not be, as she had been told “the best on the planet”?
        
        Aged seventeen, she decided to escape North Korea. She could not have imagined that it would be twelve years before she was reunited with her family.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51OT1t6aUIL._SX322_BO1,204,203,200_.jpg',
      authors: [
        {
          id: 1,
          name: 'Hyeonseo Lee',
          about: `grew up in North Korea but escaped to China in 1997. In 2008, after more than 10 years there, she came to Seoul, South Korea, where she struggled to adjust to life in the bustling city. Recently graduated from Hankuk University of Foreign Studies, she has become a regular speaker on the international stage fostering human rights and awareness of the plight of North Koreans. She is an advocate for fellow refugees, even helping close relatives leave North Korea. Her TED talk has been viewed nearly 4m times. She is married to her American husband Brian Gleason and currently lives in South Korea.`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'Oprah',
          review: 'The most riveting TED talk ever'
        },
        {
          id: 2,
          editor: 'Wired',
          review: 'Harrowing'
        },
        {
          id: 3,
          editor: 'Jang Jin-sung, author of ‘Dear Leader’',
          review:
            'A sad and beautiful story of a girl who could not even keep her name, yet overcame all with the identity of what it is to be human'
        },
        {
          id: 4,
          editor: 'Scotsman',
          review:
            'Stirring and brave … true, committed, unvarnished and honest. Lee has made her own life the keyhole to the present, inside and outside of North Korea'
        },
        {
          id: 5,
          editor: 'Kirkus',
          review: 'Remarkable bravery fluently recounted'
        }
      ],
      length: 320,
      publisher: 'William Collins; Reprint edition',
      publishDate: 'May 19, 2016',
      isbn: '0007554850',
      shippingWeight: '7.2 ounces',
      dimensions: '5.5 x 1 x 8 inches',
      price: 10.87,
      discountPercentage: 32,
      url:
        'https://www.amazon.com/Girl-Seven-Names-Hyeonseo-Lee/dp/0007554850/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1548160206&sr=1-37',
      rating: 4.8
    },
    {
      id: 9,
      categoryId: 2,
      name: `Born a Crime: Stories from a South African Childhood`,
      description: `Trevor Noah’s unlikely path from apartheid South Africa to the desk of The Daily Show began with a criminal act: his birth. Trevor was born to a white Swiss father and a black Xhosa mother at a time when such a union was punishable by five years in prison. Living proof of his parents’ indiscretion, Trevor was kept mostly indoors for the earliest years of his life, bound by the extreme and often absurd measures his mother took to hide him from a government that could, at any moment, steal him away. Finally liberated by the end of South Africa’s tyrannical white rule, Trevor and his mother set forth on a grand adventure, living openly and freely and embracing the opportunities won by a centuries-long struggle.

        Born a Crime is the story of a mischievous young boy who grows into a restless young man as he struggles to find himself in a world where he was never supposed to exist. It is also the story of that young man’s relationship with his fearless, rebellious, and fervently religious mother—his teammate, a woman determined to save her son from the cycle of poverty, violence, and abuse that would ultimately threaten her own life.
        
        The stories collected here are by turns hilarious, dramatic, and deeply affecting. Whether subsisting on caterpillars for dinner during hard times, being thrown from a moving car during an attempted kidnapping, or just trying to survive the life-and-death pitfalls of dating in high school, Trevor illuminates his curious world with an incisive wit and unflinching honesty. His stories weave together to form a moving and searingly funny portrait of a boy making his way through a damaged world in a dangerous time, armed only with a keen sense of humor and a mother’s unconventional, unconditional love.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51v55L2fxfL.jpg',
      authors: [
        {
          id: 1,
          name: 'Trevor Noah',
          about: `is a comedian from South Africa.`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: `The New York Times`,
          review: `[A] compelling new memoir. . . . By turns alarming, sad and funny, [the] book provides a harrowing look, through the prism of Mr. Noah's family, at life in South Africa under apartheid and the country's lurching entry into a postapartheid era in the 1990s.`
        },
        {
          id: 2,
          editor: `Entertainment Weekly`,
          review: `[A] stirring memoir. . . . Noah proves to be a gifted storyteller, able to deftly lace his poignant tales with amusing irony.`
        },
        {
          id: 3,
          editor: `The Guardian (UK)`,
          review: `Born a Crime is an engaging, fast-paced and vivid read. . . . The book is essential reading not only because it is a personal story of survival, leavened with insight and wit, but because it does more to expose apartheid—its legacy, its pettiness, its small-minded stupidity and its damage—than any other recent history book or academic text.
            `
        },
        {
          id: 4,
          editor: `Booklist, starred review`,
          review: `[A] substantial collection of staggering personal essays. . . . Incisive, funny and vivid, these true tales are anchored to his portrait of his courageous, rebellious and religious mother who defied racially restrictive laws to secure an education and a career for herself—and to have a child with a white Swiss/German even though sex between whites and blacks was illegal. . . . [Trevor Noah's] electrifying memoir sparkles with funny stories . . . and his candid and compassionate essays deepen our perception of the complexities of race, gender and class.`
        },
        {
          id: 5,
          editor: `Kirkus Reviews`,
          review: `A gritty memoir . . . studded with insight and provocative social criticism . . . with flashes of brilliant storytelling and acute observations.`
        },
        {
          id: 6,
          editor: `Cosmopolitan`,
          review: `[Noah's] story of surviving—and thriving—is mind-blowing.`
        },
        {
          id: 7,
          editor: `The Seattle Times`,
          review: `Noah's memoir is extraordinary in its observations of South Africa in the years when apartheid crumbled. It's equally unusual in the troubling personal story it tells. Throw in Noah's sharp, droll prose style, and you have a book that feels like essential reading on every level.`
        },
        {
          id: 8,
          editor: `USA Today`,
          review: `What makes Born a Crime such a soul-nourishing pleasure, even with all its darker edges and perilous turns, is reading Noah recount in brisk, warmly conversational prose how he learned to negotiate his way through the bullying and ostracism. . . . What also helped was having a mother like Patricia Nombuyiselo Noah. . . . Consider Born a Crime another such gift to her—and an enormous gift to the rest of us.`
        },
        {
          id: 9,
          editor: `The Oprah Magazine`,
          review: `You'd be hard-pressed to find a comic's origin story better than the one Trevor Noah serves up in Born a Crime.`
        },
        {
          id: 10,
          editor: `—People`,
          review: `[Noah] thrives with the help of his astonishingly fearless mother. . . . Their fierce bond makes this story soar`
        }
      ],
      length: 304,
      publisher: 'Trevor Noah',
      publishDate: 'January 1, 2017',
      isbn: '1473635306',
      shippingWeight: '8 ounces',
      dimensions: '8 x 0.8 x 7 inches',
      price: 99.99,
      discountPercentage: 87,
      url:
        'https://www.amazon.com/Born-Crime-Stories-African-Childhood/dp/1473635306/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1548160037&sr=1-13',
      rating: 4.6
    },
    {
      id: 10,
      categoryId: 2,
      name: `Educated: A Memoir`,
      description: `
        An unforgettable memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University
        
        Born to survivalists in the mountains of Idaho, Tara Westover was seventeen the first time she set foot in a classroom. Her family was so isolated from mainstream society that there was no one to ensure the children received an education, and no one to intervene when one of Tara’s older brothers became violent. When another brother got himself into college, Tara decided to try a new kind of life. Her quest for knowledge transformed her, taking her over oceans and across continents, to Harvard and to Cambridge University. Only then would she wonder if she’d traveled too far, if there was still a way home`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/41Ld1sqdhgL.jpg',
      authors: [
        {
          id: 1,
          name: 'Tara Westover',
          about: `is an American author living in the UK. Born in Idaho to a father opposed to public education, she never attended school. She spent her days working in her father's junkyard or stewing herbs for her mother, a self-taught herbalist and midwife. She was seventeen the first time she set foot in a classroom, and after that first taste, she pursued learning for a decade. She graduated magna cum laude from Brigham Young University in 2008 and was subsequently awarded a Gates Cambridge Scholarship. She earned an MPhil from Trinity College, Cambridge in 2009, and in 2010 was a visiting fellow at Harvard University. She returned to Cambridge, where she was awarded a PhD in history in 2014.`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'The Oprah Magazine',
          review: `A coming-of-age memoir reminiscent of The Glass Castle.`
        },
        {
          id: 2,
          editor: 'Vogue',
          review: `Beautiful and propulsive . . . [Tara Westover’s] voice is so sui generis it feels in debt to no one. . . . And despite the singularity of her childhood, the questions her book poses are universal: How much of ourselves should we give to those we love? And how much must we betray them to grow up?`
        },
        {
          id: 3,
          editor: 'Bill Gates',
          review: `An amazing story, and truly inspiring. The kind of book everyone will enjoy. It’s even better than you’ve heard.`
        },
        {
          id: 4,
          editor: 'Amy Chua, The New York Times Book Review',
          review: `Heart-wrenching . . . a beautiful testament to the power of education to open eyes and change lives.`
        },
        {
          id: 5,
          editor: 'The New Yorker',
          review: `Westover is a keen and honest guide to the difficulties of filial love, and to the enchantment of embracing a life of the mind.`
        }
      ],
      length: 336,
      publisher: 'Random House',
      publishDate: 'February 20, 2018',
      isbn: 'B072BLVM83',
      shippingWeight: '1 pounds',
      dimensions: '6 x 1 x 9.2 inches',
      price: 30.0,
      discountPercentage: 32,
      url:
        'https://www.amazon.com/Educated-Memoir-Random-House-Large/dp/0525589988/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1548160037&sr=1-2',
      rating: 4.2
    },
    {
      id: 11,
      categoryId: 2,
      name: `Fear: Trump in the White House`,
      description: `With authoritative reporting honed through eight presidencies from Nixon to Obama, author Bob Woodward reveals in unprecedented detail the harrowing life inside President Donald Trump’s White House and precisely how he makes decisions on major foreign and domestic policies. Woodward draws from hundreds of hours of interviews with firsthand sources, meeting notes, personal diaries, files and documents. The focus is on the explosive debates and the decision-making in the Oval Office, the Situation Room, Air Force One and the White House residence.

        Fear is the most intimate portrait of a sitting president ever published during the president’s first years in office.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/416jD1EyieL.jpg',
      authors: [
        {
          id: 1,
          name: 'Bob Woodward',
          about: `is an associate editor of The Washington Post, where he has worked since 1971. He has shared in two Pulitzer Prizes, first in 1973 for the coverage of the Watergate scandal with Carl Bernstein, and second in 2003 as the lead reporter for coverage of the 9/11 terrorist attacks. 

            He has authored or coauthored 18 books, all of which have been national non-fiction bestsellers. Twelve of those have been #1 national bestsellers. He has written books on eight of the most recent presidents, from Nixon to Obama.`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'Phillip Rucker and Robert Costa, The Washington Post',
          review: `A harrowing portrait of the Trump presidency . . . Again and again, Woodward recounts at length how Trump’s national security team was shaken by his lack of curiosity and knowledge about world affairs and his contempt for the mainstream perspectives of military and intelligence leaders.`
        },
        {
          id: 2,
          editor: 'David Martin, CBS News',
          review: `A damning picture of the current presidency.`
        },
        {
          id: 3,
          editor: 'CNN',
          review: `An unprecedented inside-the-room look through the eyes of the President's inner circle. . . . stunning.`
        },
        {
          id: 4,
          editor: 'Susan B. Glasser, The New Yorker',
          review: `A devastating reported account of the Trump Presidency that will be consulted as a first draft of the grim history it portrays . . . What Woodward has written is not just the story of a deeply flawed President but also, finally, an account of what those surrounding him have chosen to do about it.`
        },
        {
          id: 5,
          editor: 'John Diaz, San Francisco Chronicle',
          review: `Fear is Woodward at his best, the quintessential investigative reporter with an eye for detail and an uncanny ability to get key players to ensure that their perspective is etched into history. Its timing could not be more critical for a nation exhausted by tweets and spin, and trying to assess the danger to democracy posed by a presidency that shatters its norms and demeans its institutions.`
        }
      ],
      length: 448,
      publisher: 'Simon & Schuster; 2nd edition',
      publishDate: 'September 11, 2018',
      isbn: '1501175513',
      shippingWeight: '1.5 pounds',
      dimensions: '6 x 1.2 x 9 inches',
      price: 30.0,
      discountPercentage: 40,
      url:
        'https://www.amazon.com/Fear-Trump-White-Bob-Woodward/dp/1501175513/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1548160037&sr=1-3',
      rating: 3.0
    },
    {
      id: 12,
      categoryId: 2,
      name: `A Mind at Play: How Claude Shannon Invented the Information Age`,
      description: `In their second collaboration, biographers Jimmy Soni and Rob Goodman present the story of Claude Shannon—one of the foremost intellects of the twentieth century and the architect of the Information Age, whose insights stand behind every computer built, email sent, video streamed, and webpage loaded. Claude Shannon was a groundbreaking polymath, a brilliant tinkerer, and a digital pioneer. He constructed the first wearable computer, outfoxed Vegas casinos, and built juggling robots. He also wrote the seminal text of the digital revolution, which has been called “the Magna Carta of the Information Age.” In this elegantly written, exhaustively researched biography, Soni and Goodman reveal Claude Shannon’s full story for the first time. With unique access to Shannon’s family and friends, A Mind at Play brings this singular innovator and always playful genius to life.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/511pVVCQgZL._SX326_BO1,204,203,200_.jpg',
      authors: [
        {
          id: 1,
          name: 'Jimmy Soni',
          about: `has served as an editor at The New York Observer and the Washington Examiner and as managing editor of Huffington Post. He is a former speechwriter, and his written work and commentary have appeared in Slate, The Atlantic, and CNN, among other outlets. He is a graduate of Duke University. With Rob Goodman, he is the coauthor of Rome’s Last Citizen: The Life and Legacy of Cato, Mortal Enemy of Caesar, and A Mind at Play: How Claude Shannon Invented the Information Age.`
        },
        {
          id: 2,
          name: 'Rob Goodman',
          about: `is a doctoral candidate at Columbia University and a former congressional speechwriter. He has written for Slate, The Atlantic, Politico, and The Chronicle of Higher Education. His scholarly work has appeared in History of Political Thought, the Kennedy Institute of Ethics Journal, and The Journal of Medicine and Philosophy. With Jimmy Soni, he is the coauthor of Rome’s Last Citizen: The Life and Legacy of Cato, Mortal Enemy of Caesar, and A Mind at Play: How Claude Shannon Invented the Information Age.`
        }
      ],
      length: 384,
      publisher: 'Simon & Schuster; Reprint edition',
      publishDate: 'July 17, 2018',
      isbn: '147676669X',
      shippingWeight: '11.7 ounces',
      dimensions: '5.5 x 1 x 8.4 inches',
      price: 17.0,
      discountPercentage: 32,
      url:
        'https://www.amazon.com/Mind-Play-Shannon-Invented-Information/dp/147676669X/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=',
      rating: 4
    },
    {
      id: 13,
      categoryId: 8,
      name: `Bad Blood: Secrets and Lies in a Silicon Valley Startup`,
      description: `The full inside story of the breathtaking rise and shocking collapse of Theranos, the multibillion-dollar biotech startup, by the prize-winning journalist who first broke the story and pursued it to the end, despite pressure from its charismatic CEO and threats by her lawyers.

        In 2014, Theranos founder and CEO Elizabeth Holmes was widely seen as the female Steve Jobs: a brilliant Stanford dropout whose startup "unicorn" promised to revolutionize the medical industry with a machine that would make blood testing significantly faster and easier. Backed by investors such as Larry Ellison and Tim Draper, Theranos sold shares in a fundraising round that valued the company at more than $9 billion, putting Holmes's worth at an estimated $4.7 billion. There was just one problem: The technology didn't work.
        
        A riveting story of the biggest corporate fraud since Enron, a tale of ambition and hubris set amid the bold promises of Silicon Valley.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/41tmqEUIbSL._SX329_BO1,204,203,200_.jpg',
      authors: [
        {
          id: 1,
          name: 'John Carreyrou',
          about: `is a Pulitzer Prize-winning reporter and a nonfiction author. His first book, "Bad Blood: Secrets and Lies in a Silicon Valley Startup," chronicles Silicon Valley's biggest fraud.`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'Roger Lowenstein, The New York Times Book Review',
          review: `[A] chilling, third-person narrative of how Holmes came up with a fantastic idea that made her, for a while, the most successful woman entrepreneur in Silicon valley… Prizewinning Wall Street Journal reporter John Carreyrou tells [this story] virtually to perfection… [His] description of Holmes as a manic leader who turned coolly hostile when challenged is ripe material for a psychologist… His recounting of his efforts to track down sources—many of whom were being intimidated by Theranos’s bullying lawyer, David Boies—reads like a West Coast version of All the President's Men.`
        },
        {
          id: 2,
          editor: 'Publishers Weekly',
          review: `Carreyrou blends lucid descriptions of Theranos’s technology and its failures with a vivid portrait of its toxic culture and its supporters’ delusional boosterism. The result is a bracing cautionary tale about visionary entrepreneurship gone very wrong.`
        },
        {
          id: 3,
          editor:
            'Bethany McLean, bestselling coauthor of The Smartest Guys in the Room and All the Devils Are Here',
          review: `You will not want to put this riveting, masterfully reported book down. No matter how bad you think the Theranos story was, you'll learn that the reality was actually far worse`
        },
        {
          id: 4,
          editor: 'Yashar Ali, New York Magazine',
          review: `A great and at times almost unbelievable story of scandalous fraud, surveillance, and legal intimidation at the highest levels of American corporate power. . . . The story of Theranos may be the biggest case of corporate fraud since Enron. But it’s also the story of how a lot of powerful men were fooled by a remarkably brazen liar`
        }
      ],
      length: 352,
      publisher: 'Knopf; 1 edition',
      publishDate: 'May 21, 2018',
      isbn: '152473165X',
      shippingWeight: '1.5 pounds',
      dimensions: '6.5 x 1.3 x 9.6 inches',
      price: 27.95,
      discountPercentage: 40,
      url:
        'https://www.amazon.com/Bad-Blood-Secrets-Silicon-Startup-ebook/dp/B078VW3VM7/ref=lp_154821011_1_1?s=digital-text&ie=UTF8&qid=1548164102&sr=1-1',
      rating: 5.0
    },
    {
      id: 14,
      categoryId: 8,
      name: `The Fifth Risk`,
      description: `"The election happened," remembers Elizabeth Sherwood-Randall, then deputy secretary of the Department of Energy. "And then there was radio silence." Across all departments, similar stories were playing out: Trump appointees were few and far between; those that did show up were shockingly uninformed about the functions of their new workplace. Some even threw away the briefing books that had been prepared for them.

        Michael Lewis’s brilliant narrative takes us into the engine rooms of a government under attack by its own leaders. In Agriculture the funding of vital programs like food stamps and school lunches is being slashed. The Commerce Department may not have enough staff to conduct the 2020 Census properly. Over at Energy, where international nuclear risk is managed, it’s not clear there will be enough inspectors to track and locate black market uranium before terrorists do.
        
        Willful ignorance plays a role in these looming disasters. If your ambition is to maximize short-term gains without regard to the long-term cost, you are better off not knowing those costs. If you want to preserve your personal immunity to the hard problems, it’s better never to really understand those problems. There is upside to ignorance, and downside to knowledge. Knowledge makes life messier. It makes it a bit more difficult for a person who wishes to shrink the world to a worldview.
        
        If there are dangerous fools in this book, there are also heroes, unsung, of course. They are the linchpins of the system―those public servants whose knowledge, dedication, and proactivity keep the machinery running. Michael Lewis finds them, and he asks them what keeps them up at night.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/41ZTSdtYIlL._SX331_BO1,204,203,200_.jpg',
      authors: [
        {
          id: 1,
          name: 'Michael Lewis',
          about: `the best-selling author of The Undoing Project, Liar's Poker, Flash Boys, Moneyball, The Blind Side, Home Game and The Big Short, among other works, lives in Berkeley, California, with his wife, Tabitha Soren, and their three children.
            `
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'Tom Wolfe',
          review: `Saturation reporting, conceptual thinking of a high order, a rich sense of humor, and talent to burn.`
        },
        {
          id: 2,
          editor: 'John Gapper, Financial Times',
          review: `Michael Lewis has a spellbinding talent for finding emotional dramas in complex, highly technical subjects.`
        },
        {
          id: 3,
          editor: 'Pamela Paul, New York Times Book Review',
          review: `[Lewis] has a genius for unearthing tales of the counterintuitive.`
        },
        {
          id: 4,
          editor: 'Kyle Smith, Forbes',
          review: `The leading journalist of his generation.`
        },
        {
          id: 5,
          editor: 'John Lanchester, London Review of Books',
          review: `Lewis is the kind of writer who creates his own weather system.`
        }
      ],
      length: 256,
      publisher: 'W. W. Norton & Company; 1 edition',
      publishDate: 'October 2, 2018',
      isbn: '9781324002642',
      shippingWeight: '11.2 ounces',
      dimensions: '6.5 x 0.9 x 9.6 inches',
      price: 26.95,
      discountPercentage: 50,
      url:
        'https://www.amazon.com/Fifth-Risk-Michael-Lewis/dp/1324002646/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1548164102&sr=1-4',
      rating: 4.0
    },
    {
      id: 15,
      categoryId: 8,
      name: `Measure What Matters: How Google, Bono, and the Gates Foundation Rock the World with OKRs`,
      description: `In the fall of 1999, John Doerr met with the founders of a start-up whom he'd just given $12.5 million, the biggest investment of his career. Larry Page and Sergey Brin had amazing technology, entrepreneurial energy, and sky-high ambitions, but no real business plan. For Google to change the world (or even to survive), Page and Brin had to learn how to make tough choices on priorities while keeping their team on track. They'd have to know when to pull the plug on losing propositions, to fail fast. And they needed timely, relevant data to track their progress—to measure what mattered.

        Doerr taught them about a proven approach to operating excellence: Objectives and Key Results. He had first discovered OKRs in the 1970s as an engineer at Intel, where the legendary Andy Grove ("the greatest manager of his or any era") drove the best-run company Doerr had ever seen. Later, as a venture capitalist, Doerr shared Grove's brainchild with more than fifty companies. Wherever the process was faithfully practiced, it worked.
        
        In this goal-setting system, objectives define what we seek to achieve; key results are how those top-priority goals will be attained with specific, measurable actions within a set time frame. Everyone's goals, from entry level to CEO, are transparent to the entire organization. 
        
        The benefits are profound. OKRs surface an organization's most important work. They focus effort and foster coordination. They keep employees on track. They link objectives across silos to unify and strengthen the entire company. Along the way, OKRs enhance workplace satisfaction and boost retention.
        
        In Measure What Matters, Doerr shares a broad range of first-person, behind-the-scenes case studies, with narrators including Bono and Bill Gates, to demonstrate the focus, agility, and explosive growth that OKRs have spurred at so many great organizations. This book will help a new generation of leaders capture the same magic.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51G-XiecxvL._SX329_BO1,204,203,200_.jpg',
      authors: [
        {
          id: 1,
          name: 'John Doerr',
          about: `is an engineer, acclaimed venture capitalist, and the chairman of Kleiner Perkins. He was an original investor and board member at Google and Amazon, helping to create more than half a million jobs and the world's second and third most valuable companies. He's passionate about encouraging leaders to reimagine the future, from transforming healthcare to advancing applications of machine learning. Outside of Kleiner Perkins, John works with social entrepreneurs for change in public education, the climate crisis, and global poverty. John serves on the board of the Obama Foundation and ONE.org.`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'Bill Gates',
          review: `I’d recommend John’s book for anyone interested in becoming a better manager.`
        },
        {
          id: 2,
          editor:
            'Reid Hoffman, cofounder of LinkedIn and author of The Start-up of You',
          review: `Whether you're a seasoned CEO or a first-time entrepreneur, you'll find valuable lessons, tools, and inspiration in the pages of Measure What Matters. I'm glad John invested the time to share these ideas with the world.`
        },
        {
          id: 3,
          editor: 'Jim Collins, author of Good to Great',
          review: `“Measure What Matters deserves to be fully embraced by every person responsible for performance, in any walk of life. John Doerr makes Andy Grove a mentor to us all. If every team, leader, and individual applied OKRs with rigor and imagination, all sectors of society could see an exponential increase in productivity and innovation.`
        },
        {
          id: 4,
          editor:
            'Sheryl Sandberg, Facebook COO and founder of LeanIn.org and OptionB.org',
          review: `John Doerr has taught a generation of entrepreneurs and philanthropists that execution is everything. Measure What Matters shows how any organization or team can aim high, move fast, and excel.`
        }
      ],
      length: 320,
      publisher: 'Portfolio',
      publishDate: 'April 24, 2018',
      isbn: '0525536221',
      shippingWeight: '15.2 ounces',
      dimensions: '5.7 x 1 x 8.6 inches',
      price: 27.0,
      discountPercentage: 34,
      url:
        'https://www.amazon.com/Measure-What-Matters-Google-Foundation/dp/0525536221/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1548164102&sr=1-16',
      rating: 4.6
    },
    {
      id: 16,
      categoryId: 8,
      name: `Rich Dad Poor Dad: What The Rich Teach Their Kids About Money - That The Poor And Middle Class Do Not!`,
      description: `In Rich Dad Poor Dad, the #1 Personal Finance book of all time, Robert Kiyosaki shares the story of his two dad: his real father, whom he calls his ‘poor dad,’ and the father of his best friend, the man who became his mentor and his ‘rich dad.’ One man was well educated and an employee all his life, the other’s education was “street smarts” over traditional classroom education and he took the path of entrepreneurship…a road that led him to become one of the wealthiest men in Hawaii. Robert’s poor dad struggled financially all his life, and these two dads—these very different points of view of money, investing, and employment—shaped Robert’s thinking about money.

        Robert has challenged and changed the way tens of millions of people, around the world, think about money and investing and he has become a global advocate for financial education and the path to financial freedom. Rich Dad Poor Dad (and the Rich Dad series it spawned) has sold over 36 million copies in English and translated editions around the world.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/515cbkoa-WL._SX408_BO1,204,203,200_.jpg',
      authors: [
        {
          id: 1,
          name: 'Robert T. Kiyosaki ',
          about: `developed his unique economic perspective from two very different influences - his two fathers. This text lays out Kiyosaki's philosophy and his relationship with money.`
        }
      ],
      editorialReviews: null,
      length: 204,
      publisher: 'First Borders Edition',
      publishDate: '2009',
      isbn: '0446568813',
      shippingWeight: '14.4 ounces',
      dimensions: '9.1 x 6.1 x 1.1 inches',
      price: 95.97,
      discountPercentage: 52,
      url:
        'https://www.amazon.com/Rich-Dad-Poor-Teach-Middle-ebook/dp/B0175P82RA/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1548164158&sr=1-21',
      rating: 2.6
    },
    {
      id: 17,
      categoryId: 8,
      name: `The Total Money Makeover: Classic Edition: A Proven Plan for Financial Fitness`,
      description: `Okay, folks, do you want to turn those fat and flabby expenses into a well-toned budget? Do you want to transform your sad and skinny little bank account into a bulked-up cash machine? Then get with the program, people. There’s one sure way to whip your finances into shape, and that’s with The Total Money Makeover: Classic Edition.

        By now, you’ve heard all the nutty get-rich-quick schemes, the fiscal diet fads that leave you with a lot of kooky ideas but not a penny in your pocket. Hey, if you’re tired of the lies and sick of the false promises, take a look at this—it’s the simplest, most straightforward game plan for completely making over your money habits. And it’s based on results, not pie-in-the-sky fantasies. With The Total Money Makeover: Classic Edition, you’ll be able to: 
        
        Design a sure-fire plan for paying off all debt—meaning cars, houses, everything
        Recognize the 10 most dangerous money myths (these will kill you)
        Secure a big, fat nest egg for emergencies and retirement!
         
        
        Includes new, expanded “Dave Rants” sidebars tackle marriage conflict, college debt, and more. All-new forms and back-of-the-book resources to make Total Money Makeover a reality.
        
         
        
        Dive deeper into Dave’s game plan with The Total Money Makeover Workbook: Classic Edition. The Total Money Makeover: Classic Edition is also available in Spanish, transformación total de su dinero.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51AyzNQ41%2BL.jpg',
      authors: [
        {
          id: 1,
          name: 'Dave Ramsey',
          about: `is America’s trusted voice on money and business. His five New York Times bestselling books—Financial Peace, More Than Enough, The Total Money Makeover, EntreLeadership, and Smart Money Smart Kids—have sold more than 7 million copies combined. The Dave Ramsey Show is heard by more than 8 million listeners each week on more than 500 radio stations and iHeartRadio.`
        }
      ],
      editorialReviews: null,
      length: 272,
      publisher: 'Thomas Nelson; 1 edition',
      publishDate: 'September 17, 2013',
      isbn: '9781595555274',
      shippingWeight: '1.3 pounds',
      dimensions: '7.7 x 0.9 x 9.6 inches',
      price: 26.99,
      discountPercentage: 40,
      url:
        'https://www.amazon.com/Total-Money-Makeover-Classic-Financial/dp/1595555277/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1548164158&sr=1-27',
      rating: 4.6
    },
    {
      id: 18,
      categoryId: 8,
      name: `Everyday Millionaires: How Ordinary People Built Extraordinary Wealth—and How You Can Too`,
      description: `In Everyday Millionaires, #1 national best-selling author Chris Hogan will show you how ordinary people built extraordinary wealth—and how you can too. You’ll learn how millionaires live on less than they make, avoid debt, invest, are disciplined and responsible!

        Our new book is based on the largest study EVER conducted on 10,000 U.S. millionaires—and the results will shock you! You’ll learn that building wealth has almost NOTHING to do with your income or your background! It doesn’t matter where you come from. It matters where you’re going.
        
        Most people think it takes crazy investing knowledge, a giant salary, a streak of luck, or a huge inheritance to become a millionaire. But that couldn’t be further from the truth! Here’s what you need to understand: if you’re willing to do the work—if you’ll follow the stuff we teach, if you’ll commit to our plan—then you CAN become a millionaire.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/5187XlmYeiL.jpg',
      authors: [
        {
          id: 1,
          name: 'Chris Hogan',
          about: `is the #1 national best-selling author and host of The Chris Hogan Show. A popular and dynamic speaker on the topics of personal finance, retirement and leadership, he helps people across the country develop successful strategies to manage their money in both their personal lives and businesses. Chris has served at Ramsey Solutions for more than a decade as a trusted financial coach and Ramsey Personality.`
        }
      ],
      editorialReviews: null,
      length: 272,
      publisher: 'Ramsey Press',
      publishDate: 'January 7, 2019',
      isbn: '0977489523',
      shippingWeight: '15.2 ounces',
      dimensions: '6.5 x 1.2 x 9.5 inches',
      price: 24.99,
      discountPercentage: 40,
      url:
        'https://www.amazon.com/Everyday-Millionaires-Ordinary-Extraordinary-Wealth_and/dp/0977489523/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1548164158&sr=1-28',
      rating: 3.7
    },
    {
      id: 19,
      categoryId: 7,
      name: `What If Everybody Did That?`,
      description: `If you drop just one soda can out the window, it’s no big deal ... right? But what if everybody did that? What if everybody broke the rules ... and spoke during story time, didn’t wash up, or splashed too much at the pool? Then the world would be a mess. But what if everybody obeyed the rules so that the world would become a better place? Using humorous illustrations rendered in mixed media, these questions are answered in a child-friendly way and show the consequences of thoughtless behavior.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51Wd6jibWLL.jpg',

      authors: [
        {
          id: 1,
          name: 'Ellen Javernick',
          about: `lives in Loveland, Colorado.`
        }
      ],
      editorialReviews: null,
      length: 32,
      publisher: 'Two Lions; 1 edition',
      publishDate: 'March 1, 2010',
      isbn: '0761456864',
      shippingWeight: '14.4 ounces',
      dimensions: '9 x 0.5 x 9 inches',
      price: 12.99,
      discountPercentage: 46,
      url:
        'https://www.amazon.com/What-If-Everybody-Did-That/dp/0761456864/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=&sr=',
      rating: 4.0
    },
    {
      id: 20,
      categoryId: 7,
      name: `My Monster Farts`,
      description: `My Monster Farts 2,3,4 &5 is now also available as one book – 4 BOOKS FOR THE PRICE OF 3! 
        Check out 'My Monster Farts 2,3,4 &5' for more fun and farts with Zach and Lenny!
        
        
        Short chapter book ideal for kids age 4 up to 7. Good for beginner chapter readers.
        
        Zach has a pet monster called Lenny. No one else can see or hear him.
        He loves Lenny but there is one big problem. Lenny loves to fart!
        He farts at home and at school and everyone thinks that it’s Zach.
        Zach is tired of getting in trouble because of Lenny’s farting.
        What will Zach do?
        
        If you enjoy this book, you may also enjoy other books by Kate Clary, including THE MONSTER THAT STOLE MY UNDERWEAR and FARTICUS STINKAMUS.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51N3KkhqWSL.jpg',
      authors: [
        {
          id: 1,
          name: 'Kate Clary',
          about: `has worked in an elementary school setting for most of her working life. An avid book reader since she was a young child, she has now authored fun, short chapter books for children between the ages of 4-9. 

          Kate is an animal lover and lives with her two rescue cats. She also enjoys traveling to places near and far. Curling up with a good book, with her cats by her side, is still one of her favorite past times.`
        }
      ],
      editorialReviews: null,
      length: 12,
      publisher: 'Amazon Digital Services LLC',
      publishDate: 'October 25, 2013',
      isbn: 'B00G7MXV92',
      shippingWeight: '9 ounces',
      dimensions: '4 x 4 x 4',
      price: 1,
      discountPercentage: 10,
      url:
        'https://www.amazon.com/gp/product/B00G7MXV92/ref=s9_acsd_hps_bw_c_x_5_w?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-7&pf_rd_r=HSME60NAM8Q28B2FJYQ6&pf_rd_r=HSME60NAM8Q28B2FJYQ6&pf_rd_t=101&pf_rd_p=c4dba822-405a-42b1-80b8-78cb35363bee&pf_rd_p=c4dba822-405a-42b1-80b8-78cb35363bee&pf_rd_i=155009011',
      rating: 4.6
    },
    {
      id: 21,
      categoryId: 7,
      name: `Don't Forget Dexter!`,
      description: `Introducing Dexter T. Rexter, the toughest, coolest dinosaur ever. At least he likes to think so.

        When his best friend, Jack, leaves him behind at the doctor’s office, Dexter T. Rexter panics. First he tries to find Jack. Then he sings their special song. Then he sings their special song even louder. But when Jack still doesn’t appear, Dexter starts to wonder. What if he’s being replaced by another toy? It can’t be—after all, he can STOMP, RAWR, and CHOMP! Right? Right?!
        
        This hilariously neurotic dinosaur will do whatever it takes to get his friend back—even asking the reader’s advice—in this first book of a brand-new series.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51HaAVevIKL.jpg',
      authors: [
        {
          id: 1,
          name: 'Lindsay Ward',
          about: `has a BFA in Illustration from Syracuse University. Her most recent books include It's Show-and-Tell, Dexter! (Two Lions, 2018), Don't Forget Dexter! (Two Lions, 2018), and Brobarians (Two Lions, 2017). She is also the author and illustrator of The Importance of Being 3 (Dial 2016), Rosco vs. the Baby (S&S, 2016), Henry Finds His Word (Dial, 2015), a Choose to Read Ohio Book for 2017/2018, When Blue Met Egg (Dial, 2012), and Please Bring Balloons (Dial, 2013), which was produced into a play by the New York City Children's Theater in 2017. Her work has been reviewed in Kirkus Reviews, Publisher's Weekly, and the New York Times. `
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'Kirkus Reviews',
          review: `Ward’s ink, colored-pencil, and cut-paper illustrations give readers a toy’s view of the world and allow children to stomp in Dexter’s feet for a while, his facial expressions giving them lots of clues to his feelings. Readers will be reminded of both Knuffle Bunny and Scaredy Squirrel, but Dexter is a character all his own. Lost and found was never so riotously funny or emotionally draining`
        },
        {
          id: 2,
          editor: 'Publishers Weekly',
          review: `Ward (Brobarians) is as funny as ever as she chronicles her orange hero’s nervous, no-filter state of mind, and her cut-paper, pencil, and ink drawings—with their visual asides, annotations, and shifts in scale—are irrepressible. It’s high anxiety made highly adorable.`
        },
        {
          id: 3,
          editor: 'Christy’s Cozy Corners',
          review: `There are so many cute books for kids out there, but this is really one you’re going to want to add to your child’s personal library.`
        },
        {
          id: 4,
          editor: 'Mom Read It',
          review: `Lindsay Ward writes books that just know kids. I love this story.`
        }
      ],
      length: 32,
      publisher: 'Two Lions',
      publishDate: 'January 1, 2018',
      isbn: '1542047277',
      shippingWeight: '1 pounds',
      dimensions: '8.5 x 1 x 11 inches',
      price: 17.99,
      discountPercentage: 39,
      url:
        'https://www.amazon.com/Dont-Forget-Dexter-T-Rexter/dp/1542047277/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=&sr=',
      rating: 3.8
    },
    {
      id: 22,
      categoryId: 7,
      name: `You Are Not Small`,
      description: `Two fuzzy creatures can't agree on who is small and who is big, until a couple of surprise guests show up, settling it once and for all!

        The simple text of Anna Kang and bold illustrations of New Yorker cartoonist Christopher Weyant tell an original and very funny story about size—it all depends on who's standing next to you.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51-xUGTf54L.jpg',
      authors: [
        {
          id: 1,
          name: 'Anna Kang',
          about: `lives in USA and writes story books for children.`
        }
      ],
      editorialReviews: null,
      length: 32,
      publisher: 'Two Lions; 1st edition',
      publishDate: 'August 5, 2014',
      isbn: '1477847723',
      shippingWeight: '1.1 pounds',
      dimensions: '9 x 1 x 11 inches',
      price: 16.99,
      discountPercentage: 16,
      url:
        'https://www.amazon.com/You-Are-Small-Anna-Kang/dp/1477847723/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=&sr=',
      rating: 4.0
    },
    {
      id: 23,
      categoryId: 7,
      name: `Sneezy the Snowman`,
      description: `B-R-R-R-R! AH-CHOO! Sneezy the Snowman is cold, cold, cold. To warm up, he drinks cocoa, sits in a hot tub, stands near a warm fire – and melts! But the children know just what to do to build him up again – and make him feel "just right". Hilarity chills the air with playful mixed-media illustrations by Stephen Gilpin as Sneezy attempts to warm himself with some silly results.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51ee-YkNyAL.jpg',
      authors: [
        {
          id: 1,
          name: 'Maureen Wright',
          about: `lives in USA and writes story books for children.`
        }
      ],
      length: 36,
      publisher: 'Two Lions',
      publishDate: 'October 1, 2010',
      isbn: '0761457119',
      shippingWeight: '1 pounds',
      dimensions: '8.5 x 1 x 11 inches',
      price: 31.87,
      discountPercentage: 40,
      url:
        'https://www.amazon.com/gp/product/B008NBZ43G/ref=s9_acsd_hps_bw_c_x_3_w?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-7&pf_rd_r=HSME60NAM8Q28B2FJYQ6&pf_rd_r=HSME60NAM8Q28B2FJYQ6&pf_rd_t=101&pf_rd_p=c4dba822-405a-42b1-80b8-78cb35363bee&pf_rd_p=c4dba822-405a-42b1-80b8-78cb35363bee&pf_rd_i=155009011',
      rating: 5.0
    },
    {
      id: 24,
      categoryId: 7,
      name: `Duck on a Disco Ball (A Duck in the Fridge Book)`,
      description: `Bedtime has never been so silly!

        Every night it’s the same old story. A boy wants to stay up late, but his parents won’t let him. But sometimes in the morning, he notices things look a little off—like when he sees a disco ball in the kitchen…with his toy duck on it. So one night he decides to stay up. And that’s when the fun really begins.
        
        Silliness builds with each page of this high-energy, pun-filled companion to Duck in the Fridge until the moment when sleep eventually takes hold and morning arrives once more.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/61WhOpxPZbL.jpg',
      authors: [
        {
          id: 1,
          name: 'Jeff Mack',
          about: `is the award-winning author and illustrator of Duck in the Fridge; Mine!; Ah Ha!; Good News, Bad News; and the Hippo and Rabbit series. He has also illustrated many books, including If My Love Were a Fire Truck by Luke Reynolds. His books have been awarded the Texas 2x2, a Junior Library Guild award, a Colorado Bell Award, a Pennsylvania Family Literacy Award, a New York Public Library Best Book of the Year Award, and a Bank Street Best Book of the Year award. Jeff lives in Massachusetts. Visit him online at jeffmack.com.`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'Mom Read It',
          review: `Duck on a Disco Ball is fun, punny, and most of all, gives us grown-ups the chance to wink at our kids when we say that fifteenth good night to our kids. Always leave ’em guessing.`
        },
        {
          id: 2,
          editor: 'Publishers Weekly',
          review: `Mack’s tongue-in-cheek story centers on a common childhood suspicion—that all the fun is had once the kids go to bed.`
        }
      ],
      length: 40,
      publisher: 'Two Lions',
      publishDate: 'November 1, 2018',
      isbn: '1503902927',
      shippingWeight: '1.2 pounds',
      dimensions: '8.5 x 1 x 11 inches',
      price: 17.99,
      discountPercentage: 39,
      url:
        'https://www.amazon.com/Duck-Disco-Ball-Fridge-Book/dp/1503902927/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=&sr=',
      rating: 3.8
    },
    {
      id: 25,
      categoryId: 3,
      name: `CyberStorm`,
      description: `Mike Mitchell is an average New Yorker struggling just to keep his family together when a string of disasters shreds the bustling megacity around them.

        The Internet and communication networks go down...a deadly epidemic rages across the country...then a monster snowstorm cuts New York off from the world.
        
        Days go by without contact to the outside world. Then weeks. Murder and vigilante justice replace law and order. Millions fight to survive.
        
        In the chaos, conspiracy theories rage about a foreign cyberattack. Was it the North Koreans? The Russians? The Chinese? Might it be the first shockwave of a global shift in power? But even these questions become unimportant as Mike and his family struggle for survival in the wintry tomb of a doomed New York.
        `,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51E3rlEMB0L.jpg',
      authors: [
        {
          id: 1,
          name: 'Matthew Mather',
          about: `'s books have sold a million and a half copies, been translated and published in over 24 countries, and optioned for multiple movie and television contracts. He began his career as a researcher at the McGill Center for Intelligent Machines before starting and working in high-tech ventures ranging from nanotechnology to cyber security. He now works as a full-time author of speculative fiction.`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor:
            'Michael Gallagher, Amazon Vine Voice Hall of Fame Top-10 Reviewer',
          review: `If you like realistic doomsday-type fiction, I recommend this one.`
        },
        {
          id: 2,
          editor: 'HUGH HOWEY, author of Wool (praise for Atopia series)',
          review: `So great, I wish I'd come up with it myself...`
        },
        {
          id: 3,
          editor: 'Jeremey Bray, book reviewer for Global Geek News',
          review: `The plausible nightmare scenario in this story absolutely terrifies me.`
        },
        {
          id: 4,
          editor: 'Ian Peterson, book reviewer for Sci-Fi Readers',
          review: `A chilling prophecy...well written.`
        },
        {
          id: 5,
          editor: 'Adria Fraser, book reviewer for Amazing Stories',
          review: `CyberStorm is such a page turner. I couldn't wait to see what happened next!`
        }
      ],
      length: 362,
      publisher: 'PhutureNews Publishing; 1 edition',
      publishDate: 'March 23, 2013',
      isbn: '0991677196',
      shippingWeight: '1.4 pounds',
      dimensions: '6 x 0.8 x 9 inches',
      price: 12.99,
      discountPercentage: 7,
      url:
        'https://www.amazon.com/CyberStorm-Matthew-Mather/dp/0991677196/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1548234165&sr=1-4',
      rating: 4.6
    },

    {
      id: 26,
      categoryId: 3,
      name: `Artificial Intelligence: 101 Things You Must Know Today About Our Future`,
      description: `Artificial intelligence will help us do almost everything better, faster and cheaper, and it will profoundly change industries such as transportation, tourism, healthcare, education, retail, agriculture, finance, sales and marketing. In fact, AI will dramatically change our entire society.



        You might have heard that many jobs will be replaced by automation and robots, but did you also know that at the same time a huge number of new jobs will be created by AI?
        
        
        
        This book covers many fascinating and timely topics related to artificial intelligence, including: self-driving cars, robots, chatbots, and how AI will impact the job market, business processes, and entire industries, just to name a few.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/414CkWAdy1L.jpg',
      authors: [
        {
          id: 1,
          name: 'Lasse Rouhiainen',
          about: `is an international author and keynote speaker on emerging technologies, social media and video marketing. He has presented seminars and workshops in more than 16 countries worldwide and is a frequent guest lecturer at several universities and business schools. Lasse is the author of four best-selling books, all of which are available on Amazon.com, and has been featured in several media outlets including BBC and Business Insider. Lasse has extensive experience in online education, and has taught thousands of students and professionals around the world in three languages (English, Spanish and Finnish). For more information about Lasse's work and to subscribe to his content, visit: www.lasserouhiainen.com.`
        }
      ],
      editorialReviews: null,
      length: 288,
      publisher: 'CreateSpace Independent Publishing Platform',
      publishDate: 'January 29, 2018',
      isbn: '1982048808',
      shippingWeight: '14.9 ounces',
      dimensions: '5.5 x 0.6 x 8.5 inches',
      price: 18.79,
      discountPercentage: 31,
      url:
        'https://www.amazon.com/Artificial-Intelligence-Things-Today-Future/dp/1982048808/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=',
      rating: 4.0
    },

    {
      id: 27,
      categoryId: 3,
      name: `Computer Science Distilled: Learn the Art of Solving Computational Problems`,
      description: `A walkthrough of computer science concepts you must know. Designed for readers who don't care for academic formalities, it's a fast and easy computer science guide. It teaches the foundations you need to program computers effectively. After a simple introduction to discrete math, it presents common algorithms and data structures. It also outlines the principles that make computers and programming languages work.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51Lb4J6645L.jpg',
      authors: [
        {
          id: 1,
          name: 'Wladston',
          about: `was born in Brazil, and was always interested in computers and coding. I hold a master's degrees in computer science from the Federal University of Minas Gerais (UFMG). My first book, "Computer Science Distilled", explains the science of computation in an easy way.`
        }
      ],
      editorialReviews: null,
      length: 180,
      publisher: 'Code Energy LLC',
      publishDate: 'January 17, 2017',
      isbn: '0997316020',
      shippingWeight: '12 ounces',
      dimensions: '5.5 x 0.5 x 8.5 inches',
      price: 25,
      discountPercentage: 20,
      url:
        'https://www.amazon.com/Computer-Science-Distilled-Computational-Problems/dp/0997316020/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=',
      rating: 3.0
    },

    {
      id: 28,
      categoryId: 3,
      name: `Ultimate Guide to Google AdWords: How to Access 100 Million People in 10 Minutes`,
      description: `Covering the latest breaking news in Google AdWords, the fifth edition introduces revised, expanded and new chapters covering Enhanced Campaigns, Google AdWord’s Express, Google’s Product Listing Ads, and the introduction to Google’s Universal Analytics. Nuances in Big Data advertising are also revealed and expanded sections and necessary updates have been added throughout. `,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51Mc4v7YcgL._SX394_BO1,204,203,200_.jpg',
      authors: [
        {
          id: 1,
          name: 'Perry Marshall',
          about: `is the number-one author and worlds most-quoted consultant on Google advertising. He has helped over 100,000 advertisers save literally billions of dollars in "AdWords Stupidity Tax." His Chicago company, Perry S. Marshall & Associates, consults both online and brick-and-mortar companies on generating sales leads, web traffic, and maximizing advertising results. He's been featured at conferences in the U.S., Canada, Ireland, Great Britain, Israel and Australia. He's shared the stage with Zig Ziglar, Brian Tracy, Jay Abraham, Gary Halbert, Harvey Mackay and Les Brown. He's consulted in over 200 industries, from computer hardware and software to high-end consulting, from health & fitness to corporate finance.`
        },
        {
          id: 2,
          name: 'Mike Rhodes',
          about: `, CEO and founder of WebSavvy, is an international speaker, bestselling author, specializing in Google AdWords, Google Analytics, and website conversions.`
        },
        {
          id: 3,
          name: 'Bryan Todd',
          about: `is an international marketing consultant and Google AdWords specialist.`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'Kirkus Reviews',
          review: `An exemplary Google AdWords manual that could easily prevent costly mistakes and help boost profits. `
        }
      ],
      length: 380,
      publisher: 'Entrepreneur Press; 5 edition',
      publishDate: 'October 17, 2017',
      isbn: '1599186128',
      shippingWeight: '1.6 pounds',
      dimensions: '8 x 1 x 9.9 inches',
      price: 24.95,
      discountPercentage: 32,
      url:
        'https://www.amazon.com/Ultimate-Guide-Google-AdWords-Million-dp-1599186128/dp/1599186128/ref=mt_paperback?_encoding=UTF8&me=&qid=',
      rating: 4.6
    },

    {
      id: 29,
      categoryId: 3,
      name: `Steve Jobs`,
      description: `Based on more than forty interviews with Jobs conducted over two years—as well as interviews with more than a hundred family members, friends, adversaries, competitors, and colleagues—Walter Isaacson has written a riveting story of the roller-coaster life and searingly intense personality of a creative entrepreneur whose passion for perfection and ferocious drive revolutionized six industries: personal computers, animated movies, music, phones, tablet computing, and digital publishing. 

        At a time when America is seeking ways to sustain its innovative edge, and when societies around the world are trying to build digital-age economies, Jobs stands as the ultimate icon of inventiveness and applied imagination. He knew that the best way to create value in the twenty-first century was to connect creativity with technology. He built a company where leaps of the imagination were combined with remarkable feats of engineering.   
        
        Although Jobs cooperated with this book, he asked for no control over what was written nor even the right to read it before it was published. He put nothing off-limits. He encouraged the people he knew to speak honestly. And Jobs speaks candidly, sometimes brutally so, about the people he worked with and competed against. His friends, foes, and colleagues provide an unvarnished view of the passions, perfectionism, obsessions, artistry, devilry, and compulsion for control that shaped his approach to business and the innovative products that resulted. 
        
        Driven by demons, Jobs could drive those around him to fury and despair. But his personality and products were interrelated, just as Apple’s hardware and software tended to be, as if part of an integrated system. His tale is instructive and cautionary, filled with lessons about innovation, character, leadership, and values.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/418oH6YjpFL.jpg',
      authors: [
        {
          id: 1,
          name: 'Walter Isaacson',
          about: `has been CEO of the Aspen Institute, chairman of CNN, and editor of Time magazine. He is the author of Leonardo da Vinci; Steve Jobs; Einstein: His Life and Universe; Benjamin Franklin: An American Life; and Kissinger: A Biography. He is also the coauthor of The Wise Men: Six Friends and the World They Made.`
        }
      ],
      editorialReviews: null,
      length: 656,
      publisher: 'Simon & Schuster; Reissue edition',
      publishDate: 'September 15, 2015',
      isbn: '9781501127625',
      shippingWeight: '1.8 pounds ',
      dimensions: '6.1 x 1.5 x 9.2 inches',
      price: 20.0,
      discountPercentage: 35,
      url:
        'https://www.amazon.com/Steve-Jobs-Walter-Isaacson/dp/1501127624/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1548234165&sr=1-7',
      rating: 4.6
    },

    {
      id: 30,
      categoryId: 3,
      name: `Digital Marketers Sound Off: Tips, Tactics, Tools, and Predictions from 101 Digital Marketing Specialists`,
      description: `In Digital Marketers Sound Off, you'll find 101 accomplished digital marketing specialists sharing their favorite tools, tips, tactics, and predictions for the future. 

        This easy-to-follow book contains digital marketing insights spanning many specializations: Search Engine Optimization, Google AdWords, Facebook Ads, PR, Email Marketing, Content Marketing, Social Media Marketing, and Affiliate Marketing.
        
        Digital Marketers Sound Off features digital marketing wisdom from Fortune 500 in-house marketers, B2B marketers, B2C marketers, small business freelancers, agency owners, and consultants who work with some of the largest brands in the world.
        
        If you've never set up a digital marketing campaign before, this book will give you the information to set yourself up for success. If you're an expert marketer, this book will provide fresh insights and recommendations to improve your day-to-day work. If you're somewhere in the middle, you'll get the best of both worlds.
        `,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51shwKH5DxL.jpg',
      authors: [
        {
          id: 1,
          name: 'Matt Chiera',
          about: `is Founder of Ice Nine Online, a Chicago-based digital agency by day and market research lab by night. Matt is also Digital Director (contract) for enterprise advertising agency The Well and former Head of Business Development for award-winning search marketing agency Perfect Search Media. Matt has been managing and executing digital marketing projects for over a decade.`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'Steve Fretzin, Author, Sales Free Selling',
          review: `Being in the marketing space myself, I'm always looking for new information and fresh ideas. Wow, does this book hit the ball out of the PARK! Every chapter had me scribbling notes of new ways to grow business. I highly recommend this book to marketers and want-to-be marketers alike.`
        },
        {
          id: 2,
          editor: 'Infront Webworks Blog',
          review: `The book is a great quick reference and contains expert digital marketing insights from a variety of specializations including: Search Engine Optimization, Google AdWords, Facebook Ads, PR, Email Marketing, Content Marketing, Social Media Marketing, and Affiliate Marketing.`
        },
        {
          id: 3,
          editor: 'Derek L., Amazon Reviewer',
          review: `This is by far best way to get a snapshot of the tips and tricks from today's best digital marketing minds. Speed to market and brand awareness are more important now than ever and this book will put you ahead of the competition.`
        }
      ],
      length: 330,
      publisher: 'Matt Chiera',
      publishDate: 'June 1, 2018',
      isbn: '0692121595',
      shippingWeight: '1.1 pounds',
      dimensions: '6 x 0.8 x 9 inches',
      price: 14.99,
      discountPercentage: 8,
      url:
        'https://www.amazon.com/Digital-Marketers-Sound-Off-Predictions/dp/0692121595/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=',
      rating: 5.0
    },

    {
      id: 31,
      categoryId: 6,
      name: `Unlimited Memory: How to Use Advanced Learning Strategies to Learn Faster, Remember More and be More Productive`,
      description: `Do you ever feel like you're too busy, too stressed or just too distracted to concentrate and get work done?

        In Unlimited Memory, you'll learn how the world's best memory masters get themselves to concentrate at will, anytime they want. When you can easily focus and concentrate on the task at hand, and store and recall useful information, you can easily double your productivity and eliminate wasted time, stress and mistakes at work.
        
        In this book, you'll find all the tools, strategies and techniques you need to improve your memory.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51jUYPfM%2B1L.jpg',
      authors: [
        {
          id: 1,
          name: 'Kevin Horsley',
          about: `has been analyzing the mind and memory and its capacity for brilliance. He is one of only a few people in the world to have received the title of International Grandmaster of Memory. He is a World Memory Championship medalist, and a two-time World Record holder for The Everest of memory tests. Kevin is also an author of four books, and the designer of a mathematics game with the Serious Games Institute at North-West University Vaal Campus.

            His work has been featured in The Oprah Magazine, Time, Forbes, Inc., The Huffington Post, ELLE, Longevity and on numerous TV and radio shows.
            
            Kevin is an International professional speaker and has spoken in many different countries. He assists organizations in improving their learning, motivation, creativity and thinking.`
        }
      ],
      editorialReviews: null,
      length: 188,
      publisher: 'TCKPublishing.com',
      publishDate: 'March 28, 2016',
      isbn: '1631619985',
      shippingWeight: '6.4 ounces',
      dimensions: '6 x 0.4 x 9 inches',
      price: 19.99,
      discountPercentage: 50,
      url:
        'https://www.amazon.com/Unlimited-Memory-Advanced-Strategies-Productive/dp/1631619985/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1548235972&sr=1-19',
      rating: 4.6
    },

    {
      id: 32,
      categoryId: 6,
      name: `Feeling Good: The New Mood Therapy`,
      description: `The good news is that anxiety, guilt, pessimism, procrastination, low self-esteem, and other 'black holes' of depression can be cured without drugs. In Feeling Good, eminent psychiatrist David D. Burns, M.D. outlines the remarkable, scientifically proven techniques that will immediately lift your spirits and help you develop a positive outlook on life.

        Now, in this updated edition, Dr Burns adds an all-new Consumer's Guide To Antidepressant Drugs, as well as a new introduction to help answer your questions about the many options available for treating depression.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/5176Hgp9x-L.jpg',
      authors: [
        {
          id: 1,
          name: 'David D. Burns',
          about: `lives in USA and writes self help books`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'Los Angeles Times',
          review: `A BOOK TO READ AND RE-READ!`
        },
        {
          id: 2,
          editor:
            'Dr. David F. Maas, Professor of English, Ambassador University',
          review: `A book to read and re-read!" -- "Los Angeles Times ""I would personally evaluate David Burns' "Feeling Good as one of the most significant books to come out of the last third of the Twentieth Century.`
        }
      ],
      length: 706,
      publisher: 'William Morrow',
      publishDate: 'April 6, 1999',
      isbn: '9780380731763',
      shippingWeight: '1.1 pounds',
      dimensions: '5.2 x 1.2 x 8 inches',
      price: 19.99,
      discountPercentage: 34,
      url:
        'https://www.amazon.com/Feeling-Good-New-Mood-Therapy-ebook/dp/B009UW5X4C/ref=sr_1_54?s=digital-text&ie=UTF8&qid=1548236015&sr=1-54',
      rating: 4.6
    },

    {
      id: 33,
      categoryId: 6,
      name: `The 5 AM Club: Own Your Morning. Elevate Your Life`,
      description: `Legendary leadership and elite performance expert Robin Sharma introduced The 5am Club concept over twenty years ago, based on a revolutionary morning routine that has helped his clients maximize their productivity, activate their best health and bulletproof their serenity in this age of overwhelming complexity.

        Now, in this life-changing book, handcrafted by the author over a rigorous four-year period, you will discover the early-rising habit that has helped so many accomplish epic results while upgrading their happiness, helpfulness and feelings of aliveness.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/41QKRLgR0uL.jpg',
      authors: [
        {
          id: 1,
          name: 'ROBIN SHARMA',
          about: `is a globally respected humanitarian. Widely considered one of the world’s top leadership and personal optimization advisors, his clients include famed billionaires, professional sports superstars and many Fortune 100 companies. The author’s #1 bestsellers such as The Monk Who Sold His Ferrari, The Greatness Guide and The Leader Who Had No Title, are in over 92 languages making him one of the most broadly read writers alive today.`
        }
      ],
      editorialReviews: null,
      length: 336,
      publisher: 'HarperCollins Publishers',
      publishDate: 'December 4, 2018',
      isbn: '1443456624',
      shippingWeight: '1.3 pounds',
      dimensions: '6 x 1.1 x 9 inches',
      price: 23.99,
      discountPercentage: 22,
      url:
        'https://www.amazon.com/AM-Club-Morning-Elevate-Life/dp/1443456624/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1548236031&sr=1-69',
      rating: 4.0
    },

    {
      id: 34,
      categoryId: 6,
      name: `Declutter Your Mind: How to Stop Worrying, Relieve Anxiety, and Eliminate Negative Thinking`,
      description: `The truth is...We all experience the occasional negative thought. But if you always feel overwhelmed, then you need to closely examine how these thoughts are negatively impacting your lifestyle.

        The solution is to practice specific mindfulness techniques that create more "space" in your mind to enjoy inner peace and happiness. With these habits, you'll have the clarity to prioritize what's most important in your life, what no longer serves your goals, and how you want to live on a daily basis. And that's what you'll learn in Declutter Your Mind.
        `,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/41KsLkBbR9L.jpg',
      authors: [
        {
          id: 1,
          name: 'S.J. Scott',
          about: `provides daily action plans for every area of your life: health, fitness, work and personal relationships. Unlike other personal development guides, his content focuses on taking action. So instead of reading over-hyped strategies that rarely work in the real-world, you'll get information that can be immediately implemented.`
        }
      ],
      editorialReviews: null,
      length: 156,
      publisher: 'CreateSpace Independent Publishing Platform',
      publishDate: 'August 23, 2016',
      isbn: '1535575085',
      shippingWeight: '5.6 ounces',
      dimensions: '6 x 0.4 x 9 inches',
      price: 14.99,
      discountPercentage: 10,
      url:
        'https://www.amazon.com/Declutter-Your-Mind-Worrying-Eliminate/dp/1535575085/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1548236050&sr=1-82',
      rating: 4.0
    },

    {
      id: 35,
      categoryId: 6,
      name: `The Choice: Embrace the Possible`,
      description: `It’s 1944 and sixteen-year-old ballerina and gymnast Edith Eger is sent to Auschwitz. Separated from her parents on arrival, she endures unimaginable experiences, including being made to dance for the infamous Josef Mengele. When the camp is finally liberated, she is pulled from a pile of bodies, barely alive.

        The horrors of the Holocaust didn’t break Edith. In fact, they helped her learn to live again with a life-affirming strength and a truly remarkable resilience. The Choice is her unforgettable story.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/515IAjI62OL.jpg',
      authors: [
        {
          id: 1,
          name: 'Dr. Edith Eger',
          about: `has worked with veterans, military personnel, and victims of physical and mental trauma. She lives in La Jolla. The Choice is her first book.`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'The Bookseller',
          review: `A more important book for our times is hard to imagine`
        },
        {
          id: 2,
          editor: 'Kirkus',
          review: `A poignantly crafted memoir...a searing, astute study of intensive healing and self-acceptance through the absolution of suffering and atrocity.`
        }
      ],
      length: 304,
      publisher: 'Scribner',
      publishDate: 'September 5, 2017',
      isbn: '1501130781',
      shippingWeight: '1 pounds',
      dimensions: '6 x 1.2 x 9 inches',
      price: 27.0,
      discountPercentage: 46,
      url:
        'https://www.amazon.com/Choice-Dr-Edith-Eva-Eger/dp/1501130781/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1548236050&sr=1-85',
      rating: 5.0
    },

    {
      id: 36,
      categoryId: 6,
      name: `Your Best Year Ever: A 5-Step Plan for Achieving Your Most Important Goals`,
      description: `We all want to live a life that matters. We all want to reach our full potential. But too often we find ourselves overwhelmed by the day-to-day. Our big goals get pushed to the back burner--and then, more often than not, they get forgotten. New York Times bestselling author Michael Hyatt wants readers to know that it doesn't have to be this way. In fact, he thinks that this is the year readers can finally close the gap between reality and their dreams.

        In Your Best Year Ever, Hyatt shares a powerful, proven, research-driven system for setting and achieving goals. Readers learn how to design their best year ever in just five hours`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51-Em5zHdDL.jpg',
      authors: [
        {
          id: 1,
          name: 'Michael Hyatt',
          about: `is the author of Living Forward: A Proven Plan to Stop Drifting and Get the Life You Want (Baker, 2016), which he wrote with Daniel Harkavy. It is Wall Street Journal​, ​USA Today​, and Publishers Weekly bestseller. 

          He is also the author of Platform: Get Noticed in a Noisy World​ (Thomas Nelson, 2012). It is a ​New York Times​, ​Wall Street Journal​, and ​USA Today​ bestseller.`
        }
      ],
      editorialReviews: null,
      length: 440,
      publisher: 'Baker Academic, Div of Baker Publishing Group',
      publishDate: 'January 1, 2018',
      isbn: '0801075890',
      shippingWeight: '12.6 ounces',
      dimensions: '5.5 x 0.7 x 8.5 inches',
      price: 12.45,
      discountPercentage: 10,
      url:
        'https://www.amazon.com/Your-Best-Michael-Hyatt-author/dp/0801075890/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1548236078&sr=1-111',
      rating: 5.0
    },

    {
      id: 37,
      categoryId: 11,
      name: `11/22/63: A Novel`,
      description: `On November 22, 1963, three shots rang out in Dallas, President Kennedy died, and the world changed. What if you could change it back? Stephen King’s heart-stoppingly dramatic new novel is about a man who travels back in time to prevent the JFK assassination—a thousand page tour de force.

        Following his massively successful novel Under the Dome, King sweeps readers back in time to another moment—a real life moment—when everything went wrong: the JFK assassination. And he introduces readers to a character who has the power to change the course of history.
        
        Jake Epping is a thirty-five-year-old high school English teacher in Lisbon Falls, Maine, who makes extra money teaching adults in the GED program. He receives an essay from one of the students—a gruesome, harrowing first person story about the night 50 years ago when Harry Dunning’s father came home and killed his mother, his sister, and his brother with a hammer. Harry escaped with a smashed leg, as evidenced by his crooked walk.
        
        Not much later, Jake’s friend Al, who runs the local diner, divulges a secret: his storeroom is a portal to 1958. He enlists Jake on an insane—and insanely possible—mission to try to prevent the Kennedy assassination. So begins Jake’s new life as George Amberson and his new world of Elvis and JFK, of big American cars and sock hops, of a troubled loner named Lee Harvey Oswald and a beautiful high school librarian named Sadie Dunhill, who becomes the love of Jake’s life – a life that transgresses all the normal rules of time.
        
        A tribute to a simpler era and a devastating exercise in escalating suspense, 11/22/63 is Stephen King at his epic best.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51gir4MU%2B2L.jpg',
      authors: [
        {
          id: 1,
          name: 'Stephen King',
          about: `is the author of more than fifty books, all of them worldwide bestsellers. His recent work includes Elevation, The Outsider, Sleeping Beauties (cowritten with his son Owen King), the Bill Hodges trilogy End of Watch, Finders Keepers, and Mr. Mercedes (an Edgar Award winner for Best Novel and an AT&T Audience Network original television series). His novel 11/22/63 was named a top ten book of 2011 by The New York Times Book Review and won the Los Angeles Times Book Prize for Mystery/Thriller. His epic works The Dark Tower and It are the basis for major motion pictures, with It now the highest grossing horror film of all time. He is the recipient of the 2018 PEN America Literary Service Award, the 2014 National Medal of Arts, and the 2003 National Book Foundation Medal for Distinguished Contribution to American Letters. He lives in Bangor, Maine, with his wife, novelist Tabitha King.`
        }
      ],
      editorialReviews: null,
      length: 880,
      publisher: 'Gallery Books; PAPERBACK edition',
      publishDate: 'July 24, 2012',
      isbn: '1451627297',
      shippingWeight: '2.4 pounds',
      dimensions: '6 x 2.1 x 9 inches',
      price: 19.99,
      discountPercentage: 21,
      url:
        'https://www.amazon.com/11-22-63-Stephen-King/dp/1451627297/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=',
      rating: 4.6
    },

    {
      id: 38,
      categoryId: 11,
      name: `The End of Eternity: A Novel`,
      description: `One of Isaac Asimov's SF masterpieces, this stand-alone novel is a monument of the flowering of SF in the twentieth century. It is widely regarded as Asimov's single best SF novel.

        Andrew Harlan is an Eternal, a member of the elite of the future. One of the few who live in Eternity, a location outside of place and time, Harlan's job is to create carefully controlled and enacted Reality Changes. These Changes are small, exactingly calculated shifts in the course of history, made for the benefit of humankind. Though each Change has been made for the greater good, there are also always costs.
        
        
        During one of his assignments, Harlan meets and falls in love with Noÿs Lambent, a woman who lives in real time and space. Then Harlan learns that Noÿs will cease to exist after the next Change, and he risks everything to sneak her into Eternity.
        
        Unfortunately, they are caught. Harlan's punishment? His next assignment: Kill the woman he loves before the paradox they have created results in the destruction of Eternity.
        
        
        At the Publisher's request, this title is being sold without Digital Rights Management Software (DRM) applied.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51E6%2BDV08SL.jpg',
      authors: [
        {
          id: 1,
          name: 'Isaac Asimov',
          about: `lived in Boston and in New York City for most of his life. He died in 1992 at the age of 72.`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'Locus',
          review: `His most effective piece of work. Asimov's exemplary clarity in plotting is precisely suited to the material at hand. Asimov's engagement with the present is clearer here than in his other works, as is his engagement with the human.`
        },
        {
          id: 2,
          editor: 'Entertainment Weekly',
          review: `By literary standards, this tale of time travel from the 95th century is generally rated Asimov's best.`
        },
        {
          id: 3,
          editor: 'SciFi.com',
          review: `Asimov's flirtation with the tropes employed by A. E. van Vogt and Charles Harness is startling for an author deemed ultra-rational and scientific.… The effects of this influential, seminal book echo to the present, in the works of such writers as Greg Egan, John Varley, Kage Baker, and Greg Bear.`
        }
      ],
      length: 256,
      publisher: 'Tor Books; 1 edition',
      publishDate: 'January 5, 2010',
      isbn: '0765319187',
      shippingWeight: '12 ounces',
      dimensions: '6 x 0.8 x 9 inches',
      price: 36.49,
      discountPercentage: 10,
      url:
        'https://www.amazon.com/End-Eternity-Isaac-Asimov/dp/0765319187/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=&sr=',
      rating: 4.6
    },

    {
      id: 39,
      categoryId: 11,
      name: `The Accidental Time Machine`,
      description: `Grad- school dropout Matt Fuller is toiling as a lowly research assistant at MIT when he inadvertently creates a time machine. With a dead-end job and a girlfriend who left him for another man, Matt has nothing to lose in taking a time-machine trip himself?or so he thinks.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51gAwtlsXtL.jpg',
      authors: [
        {
          id: 1,
          name: 'Joe Haldeman',
          about: `began his writing career while he was still in the army. Drafted in 1967, he fought in the Central Highlands of Vietnam as a combat engineer with the Fourth Division. He was awarded several medals, including a Purple Heart. Haldeman sold his first story in 1969 and has since written over two dozen novels and five collections of short stories and poetry. He has won the Nebula and Hugo Awards for his novels, novellas, poems, and short stories, as well as the John W. Campbell Memorial Award, the Locus Award, the Rhysling Award, the World Fantasy Award, and the James Tiptree, Jr. Award. His works include The Forever War, Forever Peace, Camouflage, 1968, the Worlds saga, and the Marsbound series. Haldeman recently retired after many years as an associate professor in the Department of Writing and Humanistic Studies at the Massachusetts Institute of Technology. He and his wife, Gay, live in Florida, where he also paints, plays the guitar, rides his bicycle, and studies the skies with his telescope.`
        }
      ],
      editorialReviews: null,
      length: 288,
      publisher: 'Ace Hardcover',
      publishDate: 'August 7, 2007',
      isbn: '0441014992',
      shippingWeight: '1 pounds',
      dimensions: '6.3 x 1.1 x 9.2 inches',
      price: 23.96,
      discountPercentage: 21,
      url:
        'https://www.amazon.com/Accidental-Time-Machine-Joe-Haldeman/dp/0441014992/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=&sr=',
      rating: 4.0
    },

    {
      id: 40,
      categoryId: 11,
      name: `Dune`,
      description: `Frank Herbert’s classic masterpiece—a triumph of the imagination and one of the bestselling science fiction novels of all time—nominated as one of America’s best-loved novels by PBS’s The Great American Read.

        Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides—who would become known as Muad’Dib—and of a great family’s ambition to bring to fruition humankind’s most ancient and unattainable dream.
        
        A stunning blend of adventure and mysticism, environmentalism and politics, Dune won the first Nebula Award, shared the Hugo Award, and formed the basis of what is undoubtedly the grandest epic in science fiction.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51CU7gd1yrL._SX310_BO1,204,203,200_.jpg',
      authors: [
        {
          id: 1,
          name: 'Frank Herbert',
          about: `(1920–1986) published more than twenty-five books, including five Dune sequels. Born in Tacoma, Washington, and educated at the University of Washington, Seattle, he worked a wide variety of jobs—including TV cameraman, radio commentator, oyster diver, jungle survival instructor, lay analyst, creative writing teacher, reporter, and editor of several West Coast newspapers—before becoming a full-time writer. His son Brian Herbert continues to co-author new books in the Dune saga.`
        },
        {
          id: 2,
          name: 'Neil Gaiman',
          about: `(series introduction) is the #1 New York Times bestselling author of more than twenty books for readers of all ages, including American Gods, The Ocean at the End of the Lane, The Graveyard Book, Coraline, and the Sandman series of graphic novels. He is Professor in the Arts at Bard College.
            `
        },
        {
          id: 3,
          name: 'Brian Herbert',
          about: `(afterword) is the eldest son of Frank Herbert. He has co-authored numerous New York Times bestsellers in the Dune series and has written many critically acclaimed novels of his own. His biography of his father, Dreamer of Dune, was a finalist for the Hugo Award.`
        },
        {
          id: 4,
          name: 'Alex Trochut',
          about: `(cover designer) is an award-winning artist, graphic designer, illustrator, and typographer. He has designed for The New York Times, The Guardian, Nike, Adidas, The Rolling Stones, Coca-Cola, and Pepsi and was nominated for a 2016 Grammy Award for Best Recording Package. Born in Barcelona, Spain, he lives in Brooklyn.`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'Chicago Tribune',
          review: `One of the monuments of modern science fiction.`
        },
        {
          id: 2,
          editor: 'Arthur C. Clarke, author of 2001: A Space Odyssey',
          review: `Unique . . . I know nothing comparable to it except Lord of the Rings.`
        }
      ],
      length: 720,
      publisher: 'Penguin Classics; Reprint edition',
      publishDate: 'October 25, 2016',
      isbn: '9780143111580',
      shippingWeight: '1.8 pounds',
      dimensions: '5.8 x 2 x 8.5 inches',
      price: 30.0,
      discountPercentage: 45,
      url:
        'https://www.amazon.com/Dune-Penguin-Galaxy-Frank-Herbert/dp/0143111582/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=&sr=',
      rating: 4.6
    },

    {
      id: 41,
      categoryId: 11,
      name: `Children of Time`,
      description: `

        Who will inherit this new Earth?
        
        The last remnants of the human race left a dying Earth, desperate to find a new home among the stars. Following in the footsteps of their ancestors, they discover the greatest treasure of the past age - a world terraformed and prepared for human life.
        
        But all is not right in this new Eden. In the long years since the planet was abandoned, the work of its architects has borne disastrous fruit. The planet is not waiting for them, pristine and unoccupied. New masters have turned it from a refuge into mankind's worst nightmare.
        
        Now two civilizations are on a collision course, both testing the boundaries of what they will do to survive. As the fate of humanity hangs in the balance, who are the true heirs of this new Earth?`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51sR5hLQZIL.jpg',
      authors: [
        {
          id: 1,
          name: 'Adrian Tchaikovsky',
          about: `is the author of the Shadows of the Apt series, which includes Empire in Black and Gold, Dragonfly Falling, Blood of the Mantis, and other titles.`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'SFF World',
          review: `Like a Stephen Baxter novel with an epic sweep of history (see his Evolution, for example), added to a broad cast of a Peter Hamilton Space Opera and the narrative drive of, say, a David Brin or a Greg Bear old style SF novel, Children of Time soon got me hooked.`
        }
      ],
      length: 600,
      publisher: 'Pan Macmillan; Reprint edition',
      publishDate: 'July 1, 2016',
      isbn: '1447273303',
      shippingWeight: '14.9 ounces',
      dimensions: '5 x 1.5 x 7.8 inches',
      price: 14.95,
      discountPercentage: 20,
      url:
        'https://www.amazon.com/Children-Time-Adrian-Tchaikovsky/dp/1447273303/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=',
      rating: 4.6
    },

    {
      id: 42,
      categoryId: 11,
      name: `Bird Box: A Novel`,
      description: `Written with the narrative tension of The Road and the exquisite terror of classic Stephen King, Bird Box is a propulsive, edge-of-your-seat horror thriller, set in an apocalyptic near-future world—a masterpiece of suspense from the brilliantly imaginative Josh Malerman.

        Something is out there . . .
        
        Something terrifying that must not be seen. One glimpse and a person is driven to deadly violence. No one knows what it is or where it came from.
        
        Five years after it began, a handful of scattered survivors remain, including Malorie and her two young children. Living in an abandoned house near the river, she has dreamed of fleeing to a place where they might be safe. Now, that the boy and girl are four, it is time to go. But the journey ahead will be terrifying: twenty miles downriver in a rowboat—blindfolded—with nothing to rely on but her wits and the children’s trained ears. One wrong choice and they will die. And something is following them. But is it man, animal, or monster?
        
        Engulfed in darkness, surrounded by sounds both familiar and frightening, Malorie embarks on a harrowing odyssey—a trip that takes her into an unseen world and back into the past, to the companions who once saved her. Under the guidance of the stalwart Tom, a motely group of strangers banded together against the unseen terror, creating order from the chaos. But when supplies ran low, they were forced to venture outside—and confront the ultimate question: in a world gone mad, who can really be trusted?
        
        Interweaving past and present, Josh Malerman’s breathtaking debut is a horrific and gripping snapshot of a world unraveled that will have you racing to the final page.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/41sRIihnXzL.jpg',
      authors: [
        {
          id: 1,
          name: 'Josh Malerman',
          about: `is an American author and also one of two singer/songwriters for the rock band The High Strung, whose song "The Luck You Got" can be heard as the theme song to the Showtime show "Shameless." His book Bird Box is also currently being filmed as a feature film starring Sandra Bullock, John Malkovich, and Sarah Paulson. Bird Box was also nominated for the Stoker Award, the Shirley Jackson Award, and the James Herbert Award. His books Black Mad Wheel and Goblin have also been nominated for Stoker Awards.`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'Hugh Howey, New York Times bestselling author of Wool',
          review: `A book that demands to be read in a single sitting, and through the cracks between one’s fingers. There has never been a horror story quite like this. Josh Malerman truly delivers.`
        },
        {
          id: 2,
          editor: 'Peter Straub',
          review: `This completely compelling novel contains a thousand subtle touches but no mere flourishes-it is so well, so efficiently, so directly written I read it with real admiration. Josh Malerman does the job like a fast-talking, wised-up angel.`
        }
      ],
      length: 272,
      publisher: 'Ecco; Reprint edition',
      publishDate: 'February 10, 2015',
      isbn: '0062259660',
      shippingWeight: '11.2 ounces',
      dimensions: '5.3 x 0.6 x 8 inches',
      price: 15.99,
      discountPercentage: 34,
      url:
        'https://www.amazon.com/Bird-Box-Novel-Josh-Malerman/dp/0062259660/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1548236955&sr=1-4',
      rating: 5.0
    },

    {
      id: 43,
      categoryId: 9,
      name: `The Tuscan Child`,
      description: `In 1944, British bomber pilot Hugo Langley parachuted from his stricken plane into the verdant fields of German-occupied Tuscany. Badly wounded, he found refuge in a ruined monastery and in the arms of Sofia Bartoli. But the love that kindled between them was shaken by an irreversible betrayal.

        Nearly thirty years later, Hugo’s estranged daughter, Joanna, has returned home to the English countryside to arrange her father’s funeral. Among his personal effects is an unopened letter addressed to Sofia. In it is a startling revelation.
        
        Still dealing with the emotional wounds of her own personal trauma, Joanna embarks on a healing journey to Tuscany to understand her father’s history—and maybe come to understand herself as well. Joanna soon discovers that some would prefer the past be left undisturbed, but she has come too far to let go of her father’s secrets now…`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/516RInLmgQL.jpg',
      authors: [
        {
          id: 1,
          name: 'Rhys Bowen',
          about: `is the New York Times bestselling author of the Royal Spyness, Molly Murphy, and Constable Evans mystery series, as well as the #1 Kindle bestseller In Farleigh Field. She has won the Agatha Award for Best Novel and has been nominated for the Edgar Award for Best Novel, among numerous other awards, nominations, and starred reviews. Bowen was born in Bath, England, studied at London University, married into a family with historic royal connections, and now divides her time between Northern California and Arizona.`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'NPR',
          review: `Pass the bread, the olives, and the wine. Oh, and a copy of The Tuscan Child to savor with them.`
        },
        {
          id: 2,
          editor: 'HelloGiggles',
          review: `The next best thing to going to Italy right now.`
        },
        {
          id: 3,
          editor: 'Library Journal',
          review: `Readers who enjoy World War II historical fiction and rural Italian culture will appreciate this story by a master of her genre.`
        },
        {
          id: 4,
          editor: 'Booklist',
          review: `The alternating narratives keep the story moving along, and the pastoral setting is transporting.`
        }
      ],
      length: 352,
      publisher: 'Lake Union Publishing; 1st edition',
      publishDate: 'February 20, 2018',
      isbn: '1503951820',
      shippingWeight: '1.1 pounds',
      dimensions: '5.5 x 1 x 8.2 inches',
      price: 24.95,
      discountPercentage: 36,
      url:
        'https://www.amazon.com/Tuscan-Child-Rhys-Bowen/dp/1503951820/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=&sr=',
      rating: 4.6
    },

    {
      id: 44,
      categoryId: 9,
      name: `The Girl from Krakow: A Novel`,
      description: `It’s 1935. Rita Feuerstahl comes to the university in Krakow intent on enjoying her freedom. But life has other things in store—marriage, a love affair, a child, all in the shadows of the oncoming war. When the war arrives, Rita is armed with a secret so enormous that it could cost the Allies everything, even as it gives her the will to live. She must find a way both to keep her secret and to survive amid the chaos of Europe at war. Living by her wits among the Germans as their conquests turn to defeat, she seeks a way to prevent the inevitable doom of Nazism from making her one of its last victims. Can her passion and resolve outlast the most powerful evil that Europe has ever seen?

        In an epic saga that spans from Paris in the ’30s and Spain’s Civil War to Moscow, Warsaw, and the heart of Nazi Germany, The Girl from Krakow follows one woman’s battle for survival as entire nations are torn apart, never to be the same.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/5105063cO-L.jpg',
      authors: [
        {
          id: 1,
          name: 'Alex Rosenberg',
          about: `is an American philosopher and the R. Taylor Cole Professor of Philosophy at Duke University. Rosenberg has written many books, including The Atheist’s Guide to Reality. The Girl from Krakow is his first novel. It is based on the experiences of several individuals through the 1930s and World War II.`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'Library Journal, Audio Book Review',
          review: `Rita’s story of survival will appeal to aficionados of historical, Holocaust, and war fiction.`
        }
      ],
      length: 452,
      publisher: 'Lake Union Publishing',
      publishDate: 'September 1, 2015',
      isbn: '1477830812',
      shippingWeight: '1 pounds',
      dimensions: '5.5 x 1 x 8.2 inches',
      price: 14.95,
      discountPercentage: 26,
      url:
        'https://www.amazon.com/Girl-Krakow-Novel-Alex-Rosenberg/dp/1477830812/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=',
      rating: 4.0
    },

    {
      id: 45,
      categoryId: 9,
      name: `White Rose, Black Forest`,
      description: `In the shadows of World War II, trust becomes the greatest risk of all for two strangers.

        December 1943. In the years before the rise of Hitler, the Gerber family’s summer cottage was filled with laughter. Now, as deep drifts of snow blanket the Black Forest, German dissenter Franka Gerber is alone and hopeless. Fervor and brutality have swept through her homeland, taking away both her father and her brother and leaving her with no reason to live.
        
        That is, until she discovers an unconscious airman lying in the snow wearing a Luftwaffe uniform, his parachute flapping in the wind. Unwilling to let him die, Franka takes him to her family’s isolated cabin despite her hatred for the regime he represents. But when it turns out that he is not who he seems, Franka begins a race against time to unravel the mystery of the airman’s true identity. Their tenuous bond becomes as inseparable as it is dangerous. Hunted by the Gestapo, can they trust each other enough to join forces on a mission that could change the face of the war and their own lives forever?`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51b14mLJA0L.jpg',
      authors: [
        {
          id: 1,
          name: 'Eoin Dempsey',
          about: `was born in Dublin, Ireland. He moved to Philadelphia in 2008, where he works as a teacher and lives with his wonderful wife and two boys. His critically acclaimed first novel, Finding Rebecca, was an Amazon Top Ten Overall bestseller, and he is also the author of The Bogside Boys. Follow him on Twitter @EoinDempsey1 or visit his website www.eoindempseybooks.com`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'Olivia Hawker, author of The Ragged Edge of Night',
          review: `A gripping story of heroism and redemption, White Rose, Black Forest glows with delicate yet vivid writing. I enjoyed it tremendously.`
        },
        {
          id: 2,
          editor: 'Flora J. Solomon, author of A Pledge of Silence',
          review: `White Rose, Black Forest is partly a lyrical poem, an uncomfortable history lesson, and a page-turning thriller that will keep the reader engaged from the beginning to the end.`
        },
        {
          id: 3,
          editor:
            'James D. Shipman, bestselling author of It Is Well and A Bitter Rain',
          review: `Dempsey’s World War II thriller is a haunting page-turner. The settings are detailed and the characters leap off the page. I couldn’t put this book down. An instant bestseller.`
        }
      ],
      length: 270,
      publisher: 'Lake Union Publishing; Reprint edition',
      publishDate: 'August 28, 2018',
      isbn: '1503954056',
      shippingWeight: '7.2 ounces',
      dimensions: '5.5 x 1 x 8.2 inches',
      price: 14.95,
      discountPercentage: 31,
      url:
        'https://www.amazon.com/White-Rose-Black-Forest-Dempsey/dp/1503954056/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=',
      rating: 4.6
    },

    {
      id: 46,
      categoryId: 9,
      name: `The Reckoning: A Novel`,
      description: `Pete Banning was Clanton, Mississippi’s favorite son—a decorated World War II hero, the patriarch of a prominent family, a farmer, father, neighbor, and a faithful member of the Methodist church. Then one cool October morning he rose early, drove into town, and committed a shocking crime.  Pete's only statement about it—to the sheriff, to his lawyers, to the judge, to the jury, and to his family—was: "I have nothing to say." He was not afraid of death and was willing to take his motive to the grave.
           
        In a major novel unlike anything he has written before, John Grisham takes us on an incredible journey, from the Jim Crow South to the jungles of the Philippines during World War II; from an insane asylum filled with secrets to the Clanton courtroom where Pete’s defense attorney tries desperately to save him. 
        
        Reminiscent of the finest tradition of Southern Gothic storytelling, The Reckoning would not be complete without Grisham’s signature layers of legal suspense, and he delivers on every page.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/514U1B0D-iL.jpg',
      authors: [
        {
          id: 1,
          name: 'John Grisham',
          about: `is the author of thirty-two novels, one work of nonfiction, a collection of stories, and six novels for young readers.`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'Associated Press',
          review: `The quest for justice is only the beginning in this Southern-family saga…Grisham does so much more this time around.`
        },
        {
          id: 2,
          editor:
            'Jodi Picoult, #1 New York Times bestselling author of A Spark of Light and Small Great Things',
          review: `ohn Grisham is the master of legal fiction, and his latest starts with a literal bang — and then travels backward through the horrors of war to explore what makes a hero, what makes a villain, and how thin the line between the two might be.`
        },
        {
          id: 3,
          editor:
            'David Grann, New York Times bestselling author of Killers of the Flower Moon',
          review: `John Grisham is not only the master of suspense but also an acute observer of the human condition. And these remarkable skills converge in The Reckoning—an original, gripping, penetrating novel that may be his greatest work yet.`
        }
      ],
      length: 432,
      publisher: 'Doubleday',
      publishDate: 'October 23, 2018',
      isbn: '9780385544153',
      shippingWeight: '1.6 pounds',
      dimensions: '6.4 x 1.4 x 9.5 inches',
      price: 29.95,
      discountPercentage: 43,
      url:
        'https://www.amazon.com/Reckoning-Novel-John-Grisham/dp/0385544154/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1548237960&sr=1-1',
      rating: 3.5
    },

    {
      id: 47,
      categoryId: 9,
      name: `Nine Perfect Strangers`,
      description: `Nine people gather at a remote health resort. Some are here to lose weight, some are here to get a reboot on life, some are here for reasons they can’t even admit to themselves. Amidst all of the luxury and pampering, the mindfulness and meditation, they know these ten days might involve some real work. But none of them could imagine just how challenging the next ten days are going to be.

        Frances Welty, the formerly best-selling romantic novelist, arrives at Tranquillum House nursing a bad back, a broken heart, and an exquisitely painful paper cut. She’s immediately intrigued by her fellow guests. Most of them don’t look to be in need of a health resort at all. But the person that intrigues her most is the strange and charismatic owner/director of Tranquillum House. Could this person really have the answers Frances didn’t even know she was seeking? Should Frances put aside her doubts and immerse herself in everything Tranquillum House has to offer – or should she run while she still can?
        
        It’s not long before every guest at Tranquillum House is asking exactly the same question.
        
        Combining all of the hallmarks that have made her writing a go-to for anyone looking for wickedly smart, page-turning fiction that will make you laugh and gasp, Liane Moriarty’s Nine Perfect Strangers once again shows why she is a master of her craft.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51L8BF5PZ3L.jpg',
      authors: [
        {
          id: 1,
          name: 'Liane Moriarty',
          about: `is the Australian author of seven internationally best-selling novels: Three Wishes, The Last Anniversary, What Alice Forgot, The Hypnotist’s Love Story and the number 1 New York Times bestsellers: The Husband's Secret, Big Little Lies and Truly Madly Guilty. Her books have been translated into over forty languages and read by more than 14 million people worldwide. 

            Big Little Lies and Truly Madly Guilty both debuted at number one on the New York Times bestseller list - the first time this has been achieved by an Australian. Big Little Lies was adapted into a multiple award-winning HBO series starring Nicole Kidman and Reese Witherspoon, who have also optioned the film rights for Truly Madly Guilty. Truly Madly Guilty has sold over 1 million copies in the US alone. `
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'People, Book of the Week',
          review: `A treat for Big Little Lies fans....Witty and poignant, Moriarty’s storytelling is worth every penny.`
        },
        {
          id: 2,
          editor: 'Woman’s World',
          review: `[A] smart and suspenseful page-turner.`
        }
      ],
      length: 464,
      publisher: 'Flatiron Books; First Edition edition',
      publishDate: 'November 6, 2018',
      isbn: '1250069823',
      shippingWeight: '1.4 pounds',
      dimensions: '6.5 x 1.4 x 9.4 inches',
      price: 28.99,
      discountPercentage: 30,
      url:
        'https://www.amazon.com/Nine-Perfect-Strangers-Liane-Moriarty/dp/1250069823/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1548237960&sr=1-2',
      rating: 3.6
    },

    {
      id: 48,
      categoryId: 9,
      name: `Of Blood and Bone: Chronicles of The One, Book 2`,
      description: `They look like an everyday family living an ordinary life. But beyond the edges of this peaceful farm, unimaginable forces of light and dark have been unleashed.

        Fallon Swift, approaching her thirteenth birthday, barely knows the world that existed before—the city where her parents lived, now in ruins and reclaimed by nature since the Doom sickened and killed billions. Traveling anywhere is a danger, as vicious gangs of Raiders and fanatics called Purity Warriors search for their next victim. Those like Fallon, in possession of gifts, are hunted—and the time is coming when her true nature, her identity as The One, can no longer be hidden.
        
        In a mysterious shelter in the forest, her training is about to begin under the guidance of Mallick, whose skills have been honed over centuries. She will learn the old ways of healing; study and spar; encounter faeries and elves and shifters; and find powers within herself she never imagined. And when the time is right, she will take up the sword, and fight. For until she grows into the woman she was born to be, the world outside will never be whole again.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51wcGk5gd%2BL.jpg',
      authors: [
        {
          id: 1,
          name: 'NORA ROBERTS',
          about: `is the #1 New York Times bestselling author of more than 200 novels, including Year One, Come Sundown, The Obsession, The Liar, and many more. She is also the author of the bestselling In Death series written under the pen name J.D. Robb. There are more than 500 million copies of her books in print. She lives in Maryland.`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'People Magazine',
          review: `You’ll be hooked.`
        },
        {
          id: 2,
          editor: 'Kirkus',
          review: `Electric and ground-breaking…A fast-paced, mesmerizing, and thought-provoking novel that will no doubt add to Roberts' legions of fans.`
        },
        {
          id: 3,
          editor: 'New York Times Book Review',
          review: `Magnificent...A match for end-of-the-world classics like Stephen King’s The Stand.`
        }
      ],
      length: 464,
      publisher: "St. Martin's Press; First Printing edition",
      publishDate: 'December 4, 2018',
      isbn: '1250122996',
      shippingWeight: '1.4 pounds',
      dimensions: '6.4 x 1.6 x 9.6 inches',
      price: 28.99,
      discountPercentage: 30,
      url:
        'https://www.amazon.com/Blood-Bone-Chronicles-One-Book/dp/1250122996/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1548237960&sr=1-7',
      rating: 4.6
    },

    {
      id: 49,
      categoryId: 1,
      name: `Marvel Comics: The Untold Story`,
      description: `Operating out of a tiny office on Madison Avenue in the early 1960s, a struggling company called Marvel Comics introduced a series of superhero characters with eye-catching bright costumes, smart banter, and compellingly human flaws that thrilled not just children but also pop artists, public intellectuals, and campus radicals: The Fantastic Four. Spider-Man. The Hulk. The X-Men. Iron Man. Thor. Daredevil. All of them interacted in the same epic universe, weaving a tapestry of stories that, taken together, would become the most elaborate fictional narrative in history and serve as a modern American mythology for millions of readers.

        For the first time, Marvel Comics tells the stories of the men who made Marvel, including Martin Goodman, the self-made publisher who forayed into comics after a get-rich-quick tip in 1939; the late Stan Lee, the energetic editor who would shepherd the company through thick and thin for decades; Jack Kirby, the WWII veteran who’d co-created Captain America in 1940 and, twenty years later, developed with Lee the bulk of the company’s marquee characters in a three-year frenzy of creativity that would be the grounds for future legal battles and endless debate. Incorporating more than one hundred original interviews with those who worked behind the scenes at Marvel over a seventy-year-span, Marvel Comics packs anecdotes and analysis into a gripping narrative of how a small group of people on the cusp of failure created one of the most dominant pop cultural forces in contemporary America.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51%2BCTaluvDL.jpg',
      authors: [
        {
          id: 1,
          name: 'Sean Howe',
          about: `writes comic books and lives in USA`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'Jonathan Lethem',
          review: `Sean Howe’s history of Marvel makes a compulsively readable, riotous and heartbreaking version of my favorite story, that of how a bunch of weirdos changed the world. That it’s all true is just frosting on the cake.`
        },
        {
          id: 2,
          editor: 'Patton Oswalt',
          review: `A warts-and-all, nail-biting mini-epic about the low-paid, unsung ‘funnybook men’ who were unwittingly creating twenty-first century pop culture. If you thought the fisticuffs were bare and bloody on the four-color page, wait ‘til you hear about what went down in the Marvel bullpen.`
        },
        {
          id: 3,
          editor: 'Sloane Crosley',
          review: `Page after page, Sean Howe’s Marvel Comics manages to be enchantingly told, emotionally suspenseful and totally revelatory. If I knew more about superpowers, I’d be able to explain how he did it.`
        },
        {
          id: 4,
          editor: 'Entertainment Weekly',
          review: `Sean Howe reveals the real-world battles and triumphs behind the biggest name in comics.`
        }
      ],
      length: 496,
      publisher: 'Harper Perennial; First Edition edition',
      publishDate: 'October 1, 2013',
      isbn: '0061992119',
      shippingWeight: '14.4 ounces',
      dimensions: '5.3 x 1.2 x 8 inches',
      price: 17.99,
      discountPercentage: 9,
      url:
        'https://www.amazon.com/Marvel-Comics-Untold-Sean-Howe/dp/0061992119/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=',
      rating: 4.6
    },

    {
      id: 50,
      categoryId: 1,
      name: `The Totally Unscientific Study of the Search for Human Happiness`,
      description: `“Is there a secret to happiness?” asks comedian Paula Poundstone. "I don’t know how or why anyone would keep it a secret. It seems rather cruel, really . . . Where could  it be? Is it deceptively simple? Does it melt at a certain temperature? Can you buy it? Must you suffer for it before or after?” In her wildly and wisely observed book, the comedy legend takes on that most inalienable of rights—the pursuit of happiness.

        Offering herself up as a human guinea pig in a series of thoroughly unscientific experiments, Poundstone tries out a different get-happy hypothesis in each chapter of her data-driven search. She gets in shape with taekwondo. She drives fast behind the wheel of a Lamborghini. She communes with nature while camping with her daughter, and commits to getting her house organized (twice!). Swing dancing? Meditation? Volunteering? Does any of it bring her happiness? You may be laughing too hard to care.  
        
        The Totally Unscientific Study of the Search for Human Happiness is both a story of jumping into new experiences with both feet and a surprisingly poignant tale of a single working mother of three children (not to mention dozens of cats, a dog, a bearded dragon lizard, a lop-eared bunny, and one ant left from her ant farm) who is just trying to keep smiling while living a busy life.
        
        The queen of the skepticism-fueled rant, Paula Poundstone stands alone in her talent for bursting bubbles and slaying sacred cows.
        
        Like George Carlin, Steve Martin, and David Sedaris, she is a master of her craft, and her comedic brilliance is served up in abundance in this book. As author and humorist Roy Blount Jr. notes, “Paula Poundstone deserves to be happy. Nobody deserves to be this funny.”`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/518xmafgjlL.jpg',
      authors: [
        {
          id: 1,
          name: 'Paula Poundstone',
          about: `is a commedian and writes comic and humor books. She lives in USA`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'Dick Cavett',
          review: `My God, this is a funny book!`
        },
        {
          id: 2,
          editor: 'Carl Reiner',
          review: `Paula Poundstone never disappoints with her stand-up, and now she has written an informative and highly entertaining book that deserves to be read and discussed.`
        }
      ],
      length: 288,
      publisher: 'Algonquin Books; First Edition edition',
      publishDate: 'May 9, 2017',
      isbn: '1616204168',
      shippingWeight: '1 pounds',
      dimensions: '6.5 x 1 x 10 inches',
      price: 25.95,
      discountPercentage: 37,
      url:
        'https://www.amazon.com/Totally-Unscientific-Study-Search-Happiness/dp/1616204168/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=&sr=',
      rating: 5.0
    },

    {
      id: 51,
      categoryId: 1,
      name: `The Red Notebook`,
      description: `Bookseller Laurent Letellier comes across an abandoned handbag on a Parisian street and feels impelled to return it to its owner. The bag contains no money, phone or contact information. But a small red notebook with handwritten thoughts and jottings reveals a person that Laurent would very much like to meet. Without even a name to go on, and only a few of her possessions to help him, how is he to find one woman in a city of millions?`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51bMLYF58zL.jpg',
      authors: [
        {
          id: 1,
          name: 'Antoine Laurain',
          about: `was born in Paris in the early 1970s. After studying cinema, he began his career directing short films and writing screenplays. His passion for art led him to take a job assisting an antiques dealer in Paris, an experience which provided the inspiration for his prize-winning debut novel.
            `
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'The Telegraph',
          review: `This is in equal parts an offbeat romance, detective story and a clarion call for metropolitans to look after their neighbours. . . . Reading The Red Notebook is a little like finding a gem among the bric-a-brac in a local brocante.`
        },
        {
          id: 2,
          editor: 'San Diego Book Review',
          review: `Definitely a heartwarming tale.`
        },
        {
          id: 3,
          editor: 'The Times',
          review: `Resist this novel if you can; it’s the very quintessence of French romance.`
        }
      ],
      length: 240,
      publisher: 'Gallic Books',
      publishDate: 'April 7, 2015',
      isbn: '1908313862',
      shippingWeight: '3.5 ounces',
      dimensions: '5 x 0.8 x 7.8 inches',
      price: 14.94,
      discountPercentage: 10,
      url:
        'https://www.amazon.com/Red-Notebook-Antoine-Laurain/dp/1908313862/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=',
      rating: 4.6
    },

    {
      id: 52,
      categoryId: 1,
      name: `The World According to Tom Hanks: The Life, the Obsessions, the Good Deeds of America's Most Decent Guy`,
      description: `Niceness gets a bad rap these days. Our culture rewards those who troll the hardest and who snark the most. At times it seems like there's no place anymore for optimism, integrity, and good old-fashioned respect. Enter "America's Dad": Tom Hanks. Whether he's buying espresso machines for the White House Press Corps, rewarding a jovial cab driver with a night out on Broadway, or extolling the virtues of using a typewriter, Hanks lives a passionate, joyful life and pays it forward to others. Gavin Edwards, the New York Times bestselling author of The Tao of Bill Murray, takes readers on a tour behind the scenes of Hanks's life: from his less-than-idyllic childhood, rocky first marriage, and career wipeouts to the pinnacle of his acting career and domestic bliss with the love of his life, Rita Wilson. As he did for Bill Murray, Edwards distills Hanks's life story into ten "commandments" that beautifully encapsulate his All-American philosophy. Contemplating the life, the achievements, and the obsessions of Mr. Tom Hanks may or may not give you the road map you need to find your way. But at the very least, it'll show you how niceness can be a worthy destination.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/515s%2BwK0okL.jpg',
      authors: [
        {
          id: 1,
          name: 'Gavin Edwards',
          about: `is the New York Times bestselling author of nine books, including The Tao of Bill Murray, Last Night at the Viper Room, Can I Say (written with Travis Barker), VJ (written with the original MTV VJs), and 'Scuse Me While I Kiss This Guy. As a longtime contributing editor for Rolling Stone, he has written a dozen cover stories for the magazine, traveled the world from Bahrain to New Zealand, and taken a city bus to the Grammys. He lives in Charlotte, North Carolina, with his wife and their two sons.`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: "Morgan Neville, director of Won't You Be My Neighbor?",
          review: `If there is a new Mr. Rogers in our culture, it's got to be Tom Hanks: honest, decent, trustworthy. Gavin Edwards's book taps into what makes Hanks someone we love and someone we should emulate.`
        },
        {
          id: 2,
          editor: 'The New York Times Book Review',
          review: `There have been greater, weightier testaments to the art of cinema published in 2016 . . . but for sheer dopamine release, [The Tao of Bill Murray is] hard to beat.`
        }
      ],
      length: 368,
      publisher: 'Grand Central Publishing',
      publishDate: 'September 3, 2019',
      isbn: '1538712229',
      shippingWeight: '1.1 pounds',
      dimensions: '4 x 4 x 4',
      price: 17.99,
      discountPercentage: 20,
      url:
        'https://www.amazon.com/World-According-Tom-Hanks-Obsessions/dp/1538712229/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=',
      rating: 4.0
    },

    {
      id: 53,
      categoryId: 1,
      name: `Granny Is My Wingman`,
      description: `At twenty-three, Kayli Stollak, like most starry-eyed twentysomethings, assumed that she and her boyfriend, Charlie, would be together forever. Besides a rockin’ sex life, they shared a passion for motorcycle adventures, hedonistic European music festivals, and wearing matching glittery spandex to the disco. What more could a gal ask for? She envisioned their love burning well into their sixties.
        And then he dumped her.
        
        Heartbroken, Kayli turned to her seventy-five-year-old granny for support. And this ain’t no ordinary granny. Granny Gail is a ball-busting, sh*t-talking, gossipy yenta with an anecdote or piece of unsolicited advice for every situation. Granny didn’t sugarcoat the truth or let Kayli dwell on her failed relationship. No, Granny told her to cut the crap and snap out of it. Why didn’t Kayli give “one of those dating websites” a shot? With her ego on the line, Kayli threw the dare right back at her—if it was so wonderful, why didn’t single Granny join her in the world of cyber romance?
        
        Granny Is My Wingman chronicles Kayli’s and Granny’s misadventures in online dating. What ensues is a hilarious tour through the obstacles of modern love: drunken hookups, late-night Facebook stalking, breathy phone calls with geriatric suitors, and the occasional rude dude. While Kayli powers through a marathon of OkCupid dates—the corporate drone married to his BlackBerry, the nail-biting thirty-three-year-old who still lives at home with his mom, the serial online dater—we learn about Granny’s romantic past and the bittersweet affair she carried on, even while married, for more than thirty years. The two women cheer each other on and become even closer as they share their dating exploits, learning that the hunt for happiness is the same whether you’re twenty-five or seventy-five.
        
        Fresh, funny, and honest, Granny Is My Wingman is a book for anyone who has ever found love, lost it, and been crazy enough to do it all over again.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/61r4aNLxBZL.jpg',
      authors: [
        {
          id: 1,
          name: 'KAYLI STOLLAK',
          about: `studied film production at the Tisch School of the Arts at NYU. She started the blog Granny Is My Wingman to share her and Granny Gail's online dating escapades. The blog has been featured on Oprah.com, CNN, Nylon, and Good Morning America.`
        }
      ],
      editorialReviews: null,
      length: 208,
      publisher: 'Amazon Publishing; Reprint edition',
      publishDate: 'October 25, 2016',
      isbn: '1477800867',
      shippingWeight: '7.8 ounces',
      dimensions: '5.5 x 1 x 8.2 inches',
      price: 14.95,
      discountPercentage: 28,
      url:
        'https://www.amazon.com/Granny-My-Wingman-Kayli-Stollak/dp/1477800867/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=',
      rating: 4.0
    },

    {
      id: 54,
      categoryId: 1,
      name: `Checking Out`,
      description: `What do you do when the doctor says you could die at any moment? Well…after you’ve made a cup of tea, of course.

        Nathan James is young, successful and has the world at his feet. Unfortunately, he’s also about to die—which ruins things somewhat. And now he’s staring imminent death in the face, Nathan is having to rethink some of his life choices very hard.
        
        This means embarking on a hectic journey of self-discovery that includes, amongst other things, losing his dignity to an inescapable bean bag, suffering screaming nightmares about a monstrous potato, and getting up close and very personal with a bipolar donkey.
        
        All of which is fine, but then Nathan falls in love with a charming girl called Alison, which is a really stupid thing to do. Because how can you give your heart to someone when it might be about to stop?
        
        From Nick Spalding, the bestselling author of Fat Chance, Bricking It and Mad Love, comes a comedy about dying—which is easy—and living, which is most certainly not.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51wDRrjwtWL.jpg',
      authors: [
        {
          id: 1,
          name: 'Nick Spalding',
          about: `is the bestselling author of ten novels, two novellas and two semi-fictional memoirs. Nick worked in media and communications for most of his life before turning his energy to genre-spanning humorous writing. He lives in the south of England with his wife.`
        }
      ],
      editorialReviews: null,
      length: 316,
      publisher: 'Lake Union Publishing',
      publishDate: 'March 22, 2018',
      isbn: '1612185940',
      shippingWeight: '15.5 ounces',
      dimensions: '5.5 x 1 x 8.2 inches',
      price: 14.95,
      discountPercentage: 50,
      url:
        'https://www.amazon.com/Checking-Out-Nick-Spalding/dp/1612185940/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=',
      rating: 4.0
    },

    {
      id: 55,
      categoryId: 4,
      name: `The Astronomy Book: Big Ideas Simply Explained`,
      description: `An essential guide to milestone developments in astronomy, telling the story of our ideas about space, time, and the physics of the cosmos-from ancient times to the present day.

        From planets and stars to black holes and the Big Bang, take a journey through the wonders of the universe. Featuring topics from the Copernican Revolution to the mind-boggling theories of recent science, The Astronomy Book uses flowcharts, graphics, and illustrations to help clarify hard-to-grasp concepts and explain almost 100 big astronomical ideas. Covering the biographies of key astronomers through the ages such as Ptolemy, Galileo, Newton, Hubble, and Hawking, The Astronomy Book details their theories and discoveries in a user-friendly format to make the information accessible and easy to follow.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/61hMhkSajpL._SX260_.jpg',
      authors: [
        {
          id: 1,
          name: 'DK',
          about: `was founded in London in 1974 and is now the world's leading illustrated reference publisher and part of Penguin Random House, formed on July 1, 2013. DK publishes highly visual, photographic nonfiction for adults and children. DK produces content for consumers in over 87 countries and in 62 languages, with offices in Delhi, London, Melbourne, Munich, New York, and Toronto. DK's aim is to inform, enrich, and entertain readers of all ages, and everything DK publishes, whether print or digital, embodies the unique DK design approach.`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'School Library Journal',
          review: `Accessible guide to the great thinkers.`
        }
      ],
      length: 352,
      publisher: 'DK; 1 edition',
      publishDate: 'September 5, 2017',
      isbn: '1465464182',
      shippingWeight: '2.3 pounds',
      dimensions: '8 x 1 x 9.6 inches',
      price: 25,
      discountPercentage: 32,
      url:
        'https://www.amazon.com/Astronomy-Book-Ideas-Simply-Explained/dp/1465464182/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=&sr=',
      rating: 5.0
    },

    {
      id: 56,
      categoryId: 4,
      name: `Cognitive Behavioral Therapy Made Simple: 10 Strategies for Managing Anxiety, Depression, Anger, Panic, and Worry`,
      description: `In his new book, the author of the bestselling Retrain Your Brain: Cognitive Behavioral Therapy in 7 Days delivers 10 easy, yet essential strategies for applying CBT to everyday issues with Cognitive Behavioral Therapy Made Simple.

        Cognitive behavioral therapy is a proven form of psychotherapy that is often the first-line of treatment recommended for managing depression, anxiety, worry, and other common issues. Cognitive Behavioral Therapy Made Simple delivers a simplified approach to learning the most essential parts of cognitive behavioral therapy and applying them to your life.
        
        Written by licensed psychologist and bestselling author Seth Gillihan, Cognitive Behavioral Therapy Made Simple replaces workbook pages and technical language with quick and highly accessible cognitive behavioral therapy strategies that can be used on an as-needed basis.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51l2YPEtRTL.jpg',
      authors: [
        {
          id: 1,
          name: 'SETH J. GILLIHAN',
          about: `, PhD, is a licensed psychologist and Clinical Assistant Professor of Psychology in the Psychiatry Department at the University of Pennsylvania. Dr. Gillihan has written more than 40 journal articles and book chapters on the effectiveness of cognitive behavioral therapy (CBT) for anxiety and depression, how CBT works, and the use of brain imaging to study psychiatric conditions. He is the author of Retrain Your Brain: Cognitive Behavioral Therapy in 7 Weeks, a self-directed workbook for managing depression and anxiety, and co-author with Janet Singer of Overcoming OCD: A Journey to Recovery. Dr. Gillihan has a clinical practice in Haverford, Pennsylvania, where he specializes in CBT and mindfulness-based interventions for anxiety, depression, and related conditions. He lives outside Philadelphia with his wife and three children. Learn more about Dr. Gillihan and find more resources at his website: http://sethgillihan.com.`
        }
      ],
      editorialReviews: null,
      length: 234,
      publisher: 'Althea Press; 1 edition',
      publishDate: 'May 22, 2018',
      isbn: '1939754852',
      shippingWeight: '15.5 ounces',
      dimensions: '6 x 0.6 x 8.9 inches',
      price: 15.99,
      discountPercentage: 39,
      url:
        'https://www.amazon.com/Cognitive-Behavioral-Therapy-Made-Simple/dp/1939754852/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=',
      rating: 4.6
    },

    {
      id: 57,
      categoryId: 4,
      name: `Sapiens: A Brief History of Humankind `,
      description: `From a renowned historian comes a groundbreaking narrative of humanity’s creation and evolution—a #1 international bestseller—that explores the ways in which biology and history have defined us and enhanced our understanding of what it means to be “human.”

        One hundred thousand years ago, at least six different species of humans inhabited Earth. Yet today there is only one—homo sapiens. What happened to the others? And what may happen to us?
        
        Most books about the history of humanity pursue either a historical or a biological approach, but Dr. Yuval Noah Harari breaks the mold with this highly original book that begins about 70,000 years ago with the appearance of modern cognition. From examining the role evolving humans have played in the global ecosystem to charting the rise of empires, Sapiens integrates history and science to reconsider accepted narratives, connect past developments with contemporary concerns, and examine specific events within the context of larger ideas.
        
        Dr. Harari also compels us to look ahead, because over the last few decades humans have begun to bend laws of natural selection that have governed life for the past four billion years. We are acquiring the ability to design not only the world around us, but also ourselves. Where is this leading us, and what do we want to become?`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51Sn8PEXwcL.jpg',
      authors: [
        {
          id: 1,
          name: 'Prof. Yuval Noah Harari',
          about: `has a PhD in History from the University of Oxford and lectures at the Hebrew University of Jerusalem, specializing in world history. His books have been translated into 50+ languages, with 12+ million copies sold worldwide. 'Sapiens: A Brief History of Humankind' (2014) looked deep into our past, 'Homo Deus: A Brief History of Tomorrow' (2016) considered far-future scenarios, and '21 Lessons for the 21st Century' (2018) zoomed in on the biggest questions of the present moment.`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'Sebastian Junger',
          review: `Thank God someone finally wrote [this] exact book.`
        },
        {
          id: 2,
          editor: 'Wall Street Journal',
          review: `Sapiens is learned, thought-provoking and crisply written…. Fascinating.`
        }
      ],
      length: 464,
      publisher: 'Harper Perennial; Reprint edition',
      publishDate: 'May 15, 2018',
      isbn: '9780062316110',
      shippingWeight: '2.2 pounds',
      dimensions: '6 x 1.1 x 9 inches',
      price: 22.99,
      discountPercentage: 38,
      url:
        'https://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari/dp/0062316117/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1548239930&sr=1-2',
      rating: 4.6
    },

    {
      id: 58,
      categoryId: 4,
      name: `Thinking, Fast and Slow`,
      description: `In the international bestseller, Thinking, Fast and Slow, Daniel Kahneman, the renowned psychologist and winner of the Nobel Prize in Economics, takes us on a groundbreaking tour of the mind and explains the two systems that drive the way we think. System 1 is fast, intuitive, and emotional; System 2 is slower, more deliberative, and more logical. The impact of overconfidence on corporate strategies, the difficulties of predicting what will make us happy in the future, the profound effect of cognitive biases on everything from playing the stock market to planning our next vacation—each of these can be understood only by knowing how the two systems shape our judgments and decisions.

        Engaging the reader in a lively conversation about how we think, Kahneman reveals where we can and cannot trust our intuitions and how we can tap into the benefits of slow thinking. He offers practical and enlightening insights into how choices are made in both our business and our personal lives—and how we can use different techniques to guard against the mental glitches that often get us into trouble. Winner of the National Academy of Sciences Best Book Award and the Los Angeles Times Book Prize and selected by The New York Times Book Review as one of the ten best books of 2011, Thinking, Fast and Slow is destined to be a classic.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/41shZGS-G%2BL.jpg',
      authors: [
        {
          id: 1,
          name: 'Daniel Kahneman',
          about: `is Eugene Higgins Professor of Psychology Emeritus at Princeton University and Professor of Psychology and Public Affairs Emeritus at Princeton's Woodrow Wilson School of Public and International Affairs. He received the 2002 Nobel Prize in Economic Sciences for his pioneering work with Amos Tversky on decision-making.`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'Larry Swedroe, CBS News',
          review: `A tour de force. . . Kahneman's book is a must read for anyone interested in either human behavior or investing. He clearly shows that while we like to think of ourselves as rational in our decision making, the truth is we are subject to many biases. At least being aware of them will give you a better chance of avoiding them, or at least making fewer of them.`
        },
        {
          id: 2,
          editor: 'Christopher Shea, The Washington Post',
          review: `Daniel Kahneman demonstrates forcefully in his new book, Thinking, Fast and Slow, how easy it is for humans to swerve away from rationality.`
        }
      ],
      length: 499,
      publisher: 'Farrar, Straus and Giroux; 1st edition',
      publishDate: 'April 2, 2013',
      isbn: '0374533555',
      shippingWeight: '1.2 pounds',
      dimensions: '8.2 x 1.4 x 5.5 inches',
      price: 17.0,
      discountPercentage: 37,
      url:
        'https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1548239930&sr=1-11',
      rating: 4.6
    },

    {
      id: 59,
      categoryId: 4,
      name: `Brief Answers to the Big Questions`,
      description: `Stephen Hawking was the most renowned scientist since Einstein, known both for his groundbreaking work in physics and cosmology and for his mischievous sense of humor. He educated millions of readers about the origins of the universe and the nature of black holes, and inspired millions more by defying a terrifying early prognosis of ALS, which originally gave him only two years to live. In later life he could communicate only by using a few facial muscles, but he continued to advance his field and serve as a revered voice on social and humanitarian issues.

        Hawking not only unraveled some of the universe’s greatest mysteries but also believed science plays a critical role in fixing problems here on Earth. Now, as we face immense challenges on our planet—including climate change, the threat of nuclear war, and the development of artificial intelligence—he turns his attention to the most urgent issues facing us.
        
        Will humanity survive? Should we colonize space? Does God exist? ​​These are just a few of the questions Hawking addresses in this wide-ranging, passionately argued final book from one of the greatest minds in history.
        
        Featuring a foreword by Eddie Redmayne, who won an Oscar playing Stephen Hawking, an introduction by Nobel Laureate Kip Thorne, and an afterword from Hawking’s daughter, Lucy, Brief Answers to the Big Questions is a brilliant last message to the world.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/510m74miiaL.jpg',
      authors: [
        {
          id: 1,
          name: 'Stephen Hawking',
          about: `was the Lucasian Professor of Mathematics at the University of Cambridge for thirty years and the recipient of numerous awards and honors including the Presidential Medal of Freedom. His books for the general reader include My Brief History, the classic A Brief History of Time, the essay collection Black Holes and Baby Universes, The Universe in a Nutshell, and, with Leonard Mlodinow, A Briefer History of Time and The Grand Design. He also co-authored a series of children’s books with his daughter, beginning with George’s Secret Key to the Universe. Stephen Hawking died in 2018.`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'NPR',
          review: `It’s a book every thinking person worried about humanity’s future should read. . . . Hawking’s parting gift to humanity`
        },
        {
          id: 2,
          editor: 'The Washington Post',
          review: `[Hawking is] a symbol of the soaring power of the human mind.`
        },
        {
          id: 3,
          editor: 'Quartz',
          review: `Hawking pulls no punches on subjects like machines taking over, the biggest threat to Earth, and the possibilities of intelligent life in space.`
        },
        {
          id: 4,
          editor: 'The Telegraph',
          review: `This beautiful little book is a fitting last twinkle from a new star in the firmament above.`
        }
      ],
      length: 352,
      publisher: 'Random House Large Print; Large Print edition',
      publishDate: 'November 13, 2018',
      isbn: '1984887262',
      shippingWeight: '8 ounces',
      dimensions: '5.4 x 0.9 x 7.9 inches',
      price: 27,
      discountPercentage: 35,
      url:
        'https://www.amazon.com/Brief-Answers-Questions-Stephen-Hawking/dp/1984887262/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1548239930&sr=1-13',
      rating: 4.0
    },

    {
      id: 60,
      categoryId: 4,
      name: `Math with Bad Drawings: Illuminating the Ideas That Shape Our Reality`,
      description: `In Math With Bad Drawings, Ben Orlin reveals to us what math actually is; its myriad uses, its strange symbols, and the wild leaps of logic and faith that define the usually impenetrable work of the mathematician.

        Truth and knowledge come in multiple forms: colorful drawings, encouraging jokes, and the stories and insights of an empathetic teacher who believes that math should belong to everyone. Orlin shows us how to think like a mathematician by teaching us a brand-new game of tic-tac-toe, how to understand an economic crises by rolling a pair of dice, and the mathematical headache that ensues when attempting to build a spherical Death Star.
        
        Every discussion in the book is illustrated with Orlin's trademark "bad drawings," which convey his message and insights with perfect pitch and clarity. With 24 chapters covering topics from the electoral college to human genetics to the reasons not to trust statistics, Math with Bad Drawings is a life-changing book for the math-estranged and math-enamored alike.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51jCMZs-2TL.jpg',
      authors: [
        {
          id: 1,
          name: 'Ben Orlin',
          about: `is the author of the blog Math With Bad Drawings. He also writes on topics related to math for The Atlantic, Slate, Los Angeles Times, and Chicago Tribune. He began his teaching career in Oakland, California, and later taught at King Edward's School in Birmingham, England. He lives with his wife, a mathematician, in Northampton, Massachusetts.`
        }
      ],
      editorialReviews: null,
      length: 376,
      publisher: 'Black Dog & Leventhal',
      publishDate: 'September 18, 2018',
      isbn: '0316509035',
      shippingWeight: '2.5 pounds',
      dimensions: '7.4 x 1.4 x 9.3 inches',
      price: 27.99,
      discountPercentage: 32,
      url:
        'https://www.amazon.com/Math-Bad-Drawings-Illuminating-Reality/dp/0316509035/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1548239985&sr=1-9',
      rating: 5.0
    },
    {
      id: 61,
      categoryId: 5,
      name: `Excellence of Patience & Gratefulness`,
      description: `The book is English translation of “Uddat al-Sabirin wa Zakhirat al-Shakirin” by Ibn Qayyim. It highlights the need and importance of two key qualities: patience and gratefulness that can help us go through the ups and downs of life with grace. The writer has compiled plenty of advices in light with Quran, Sunnah and Islamic History. The original Arabic text was written around 600 years ago but the content still matters; hence, being presented with English Translation by Darussalam. 

        It is intended to be a comprehensive, extensive and useful book that contains a great amount of credible Islamic information. It also contains points of benefit from the exegesis of the Qur'an and the traditions of the Prophet (may peace and blessings of Allah be upon him) duly referred to their sources, reports from pious predecessors with references, juristic issues supported by evidence, and indications to the spiritual path. All these will be obvious to the one who contemplates over it and is endowed with a sound intellect. 
        Easy to understand language, authentic information, references to the original sources, and decent outlook, are few to mention qualities. Now, you can download this classic book in digital format and enjoy e-reading experience.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/41i7JcnhvuL.jpg',
      authors: [
        {
          id: 1,
          name: 'Ibn al-Qayyim',
          about: `commonly known as Ibn Qayyim al-Jawziyya or Ibn al-Qayyim for short, or reverentially as Imam Ibn al-Qayyim in Sunni tradition, was an important medieval Islamic jurisconsult, theologian, and spiritual writer.`
        }
      ],
      editorialReviews: null,
      length: 588,
      publisher: 'Darussalam Publishers',
      publishDate: 'September 8, 2014',
      isbn: 'B00NFTETG4',
      shippingWeight: '1.2 pounds',
      dimensions: '4 x 4 x 4',
      price: 2.99,
      discountPercentage: 5,
      url:
        'https://www.amazon.com/gp/product/B00NFTETG4?pf_rd_m=A2R2RITDJNW1Q6&storeType=ebooks&pf_rd_p=3b56c491-980b-4d85-8554-4f927a04dc30&pf_rd_r=P09XHHX219HYJHS3DT6W&pf_rd_s=merchandised-search-4&pf_rd_t=40901&ref_=dbs_c_def_rwt_wigo_rfy_ms4_kmw_3b56c491-980b-4d85-8554-4f927a04d&pf_rd_i=158280011',
      rating: 5.0
    },

    {
      id: 62,
      categoryId: 5,
      name: `Revive Your Heart: Putting Life in Perspective`,
      description: `How do modern Muslims maintain a spiritual connection with Allah and how do they address major challenges facing the ummah today? These questions and more are answered by Nouman Ali Khan, with his profound engagement with the Qur'an, in this inspiring collection of reminders that exhort us to remember our place in this world.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/41xdzPLqt6L.jpg',
      authors: [
        {
          id: 1,
          name: 'Nouman Ali Khan',
          about: `is a Muslim speaker and the CEO and founder of Bayyinah Institute, an Arabic studies, educational institution in the United States.
            Currently, he is recongized as one of the world's most influential Muslims, not only in the West.
            His deep and profound bond with the Qur'an, the Muslim holy book, is at the heart of his work and the focus of his teachings, which manage to reach out to millions of Muslims, from many different countries.`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'Step Inside My Handbag',
          review: `An Instant Connection! Can I just say that it felt almost as if Nouman Ali Khan was talking to me as I read the book.`
        },
        {
          id: 2,
          editor: 'Quake Books',
          review: `an excellent resource for people who want to learn the actual message and the essence of Islam`
        },
        {
          id: 3,
          editor: 'AboutIslam.net',
          review: `If you enjoy his lectures, you will enjoy this.`
        }
      ],
      length: 192,
      publisher: 'Kube Publishing Ltd',
      publishDate: 'May 2, 2017',
      isbn: '1847741010',
      shippingWeight: '13.3 ounces',
      dimensions: '5.5 x 0.8 x 8.5 inches',
      price: 15.95,
      discountPercentage: 32,
      url:
        'https://www.amazon.com/Revive-Your-Heart-Putting-Perspective/dp/1847741010/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=',
      rating: 4.0
    },

    {
      id: 63,
      categoryId: 5,
      name: `The Mythology Book: Big Ideas Simply Explained`,
      description: `Eighty of the world's greatest myths and characters, from the gods of Greek mythology to the Norse heroes, retold and explained with engaging text and bold graphics.

        From early creation stories to classical hero narratives and the recurring theme of the afterlife, experience each myth and unravel the meanings behind the stories, getting to the heart of the importance of mythology to different cultures worldwide. More than just stories, myths are a testament to the amazing creativity of humans striving to explain and make sense of the world around them. Here you will discover Zeus, god of the sky and ruler of the Olympian gods, and Loki, the cunning trickster with a knack for causing havoc, aided by his ability to change shape and gender. Beyond the gods and goddesses of Ancient Greek, Roman, and Norse myths, this book delves into the stories of the Australian aborigines, the Cherokee, and the Aztecs, each brimming with amazing characters and insights into human existence.
        
        This newest title in the bestselling Big Ideas series pairs engaging visual style with global coverage of world myths--profiling everything from the well-known tales of the Greeks, Norsemen, and Egyptians to the legends of the Caribbean, the Americas, Oceania, and East Asia--bringing the wisdom of the ages to life.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/61uWn-M637L.jpg',
      authors: [
        {
          id: 1,
          name: 'DK',
          about: `was founded in London in 1974 and is now the world's leading illustrated reference publisher and part of Penguin Random House, formed on July 1, 2013. DK publishes highly visual, photographic nonfiction for adults and children. DK produces content for consumers in over 87 countries and in 62 languages, with offices in Delhi, London, Melbourne, Munich, New York, and Toronto. DK's aim is to inform, enrich, and entertain readers of all ages, and everything DK publishes, whether print or digital, embodies the unique DK design approach. DK brings unrivalled clarity to a wide range of topics with a unique combination of words and pictures, put together to spectacular effect. We have a reputation for innovation in design for both print and digital products.`
        }
      ],
      editorialReviews: null,
      length: 352,
      publisher: 'DK',
      publishDate: 'May 15, 2018',
      isbn: '1465473378',
      shippingWeight: '2.6 pounds',
      dimensions: '8 x 1.1 x 9.5 inches',
      price: 25,
      discountPercentage: 32,
      url:
        'https://www.amazon.com/Mythology-Book-Ideas-Simply-Explained/dp/1465473378/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=&sr=',
      rating: 4.6
    },

    {
      id: 64,
      categoryId: 5,
      name: `Religion 101: From Allah to Zen Buddhism, an Exploration of the Key People, Practices, and Beliefs that Have Shaped the Religions of the World (Adams 101)`,
      description: `With so many religions in the world, it isn't always easy to recall each faith's key influences, spiritual figures, and dogmas. Written in easy-to-understand language, Religion 101 offers a fascinating--and memorable--glimpse at the sacred stories, traditions, and doctrines that have influenced today's most popular religions.

        From Jesus and the Four Noble Truths to the Buddhist Wheel of Existence, this book provides you with thought-provoking insight into the customs and beliefs of common faiths like Christianity, Judaism, Buddhism, and Islam. Inside, you will also discover hundreds of important religious facts, illustrations, and thought puzzles that you won't be able to find anywhere else.
        
        So whether you're looking to unravel the mysteries of existence and meaning, or just want to find out what Kabbalah is all about, Religion 101 has all the answers--even the ones you didn't know you were looking for.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51uQElX2uTL.jpg',
      authors: [
        {
          id: 1,
          name: 'Peter Archer',
          about: `is the author of The Quotable Intellectual and 500 Foreign Words and Phrases You Should Know to Sound Smart. He received an MA in history from the University of Toledo and an MLlitt in medieval history from the University of St. Andrews, where he wrote his thesis on the writings of St. Bede. He also taught courses on history, humanities, and philosophy at Eastern New Mexico University.`
        }
      ],
      editorialReviews: null,
      length: 288,
      publisher: 'Adams Media',
      publishDate: 'November 29, 2013',
      isbn: '1440572631',
      shippingWeight: '1 pounds',
      dimensions: '5.2 x 1 x 7.1 inches',
      price: 15.99,
      discountPercentage: 32,
      url:
        'https://www.amazon.com/Religion-101-Exploration-Practices-Religions/dp/1440572631/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=&sr=',
      rating: 4.0
    },

    {
      id: 65,
      categoryId: 5,
      name: `Living with the Monks: What Turning Off My Phone Taught Me about Happiness, Gratitude, and Focus`,
      description: `Equal parts memoir and road map to living a less stressful and more vibrant life, bestselling author Jesse Itzler offers an illuminating, entertaining, and unexpected trip for anyone looking to feel calmer and more controlled in our crazy, hectic world.

        Entrepreneur, endurance athlete, and father of four Jesse Itzler only knows one speed: Full Blast. But when he felt like the world around him was getting too hectic, he didn't take a vacation or get a massage. Instead, Jesse moved into a monastery for a self-imposed time-out. In Living with the Monks, the follow-up to his New York Times bestselling Living with a SEAL, Jesse takes us on a spiritual journey like no other.
        
        Having only been exposed to monasteries on TV, Jesse arrives at the New Skete religious community in the isolated mountains of upstate New York with a shaved head and a suitcase filled with bananas. To his surprise, New Skete monks have most of their hair. They're Russian Orthodox, not Buddhist, and they're also world-renowned German shepherd breeders and authors of dog-training books that have sold in the millions.
        
        As Jesse struggles to fit in amongst the odd but lovable monks, self-doubt begins to beat like a tribal drum. Questioning his motivation to embark on this adventure and missing his family (and phone), Jesse struggles to balance his desire for inner peace with his need to check Twitter. But in the end, Jesse discovers the undeniable power of the monks and their wisdom, and the very real benefits of taking a well-deserved break as a means of self-preservation in our fast-paced world.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51kMXSuuTSL.jpg',
      authors: [
        {
          id: 1,
          name: 'Jesse Itzler',
          about: `only eats fruit 'til noon, loves Run-D.M.C., and enjoys living life "out of the box." In fact, he doesn't even have a box. The author of the New York Times bestseller, Living with a SEAL, cofounded Marquis Jet, the world's largest private jet card company which he and his partner sold to Berkshire Hathaway/NetJets. Jesse then partnered with Zico coconut water, which he and his partner sold to The Coca-Cola Company. He's a former rapper on MTV and wrote and performed the NBA's Emmy Award-winning "I Love This Game" music campaign and the popular New York Knicks anthem "Go NY Go." When he's not running ultra-marathons, eating vegan food or being a dad to his four kids, Jesse can be found at the NBA's Atlanta Hawks games, where he's an owner of the team. He is married to Spanx founder Sara Blakely.`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'LeBron James',
          review: `It's hilarious!`
        },
        {
          id: 2,
          editor: `Mike "Coach K" Krzyzewski, Duke Basketball head coach`,
          review: `This is 100% Jesse. Do it differently and you get different results. That's the way he has operated his entire life and it has worked beautifully.`
        },
        {
          id: 3,
          editor:
            'Tom Brady, New England Patriots, four-time NFL Champion, two-time NFL MVP',
          review: `Jesse is a risk taker and is always trying different things to get better. Plus, he's fun to go out with.`
        }
      ],
      length: 304,
      publisher: 'Center Street; Reprint edition',
      publishDate: 'July 16, 2019',
      isbn: '147899343X',
      shippingWeight: '1.1 pounds',
      dimensions: '4 x 4 x 4',
      price: 15.99,
      discountPercentage: 12,
      url:
        'https://www.amazon.com/Living-Monks-Turning-Happiness-Gratitude/dp/147899343X/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=',
      rating: 4.6
    },

    {
      id: 66,
      categoryId: 5,
      name: `The Sealed Nectar | Biography of Prophet Muhammad`,
      description: `A complete authoritative book on the life of Prophet Muhammad (S) by Sheikh Safi-ur-Rahman al-Mubarkpuri. It was honored by the World Muslim League as first prize winner book. Whoever wants to know the whole life style of the Prophet in detail must read this book. Muhammad (S) is the Messenger of Allah, and those who are with him, are severe against the disbelievers, and merciful among themselves. You see them bowing and falling down prostrate (in prayer), seeking bounty from Allah and (His) Good Pleasure. The mark of them (i.e. of their Faith) is on their faces (fore heads) from the traces of prostration (during prayers). This is their description in the Taurdt (Torah). But their description in the Injeel (Gospel) is like a (sown) seed which sends forth its shoot, then makes it strong, and becomes thick and it stands straight on its stem, delighting the sowers, that He may enrage the disbelievers with them. `,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51HAqojbztL._SY346_.jpg',
      authors: [
        {
          id: 1,
          name: 'Safiur Rahman Al Mubarakpuri',
          about: `was an Indian writer. Mubarakpuri was born in Husainabad, a village one mile deep to the north side of Mubarakpur, Azamgarh district, Uttar Pradesh, India.`
        }
      ],
      editorialReviews: null,
      length: 1022,
      publisher: 'Darussalam',
      publishDate: 'January 1, 2011',
      isbn: '6035001106',
      shippingWeight: '2.9 pounds',
      dimensions: '7 x 9.5 inches',
      price: 73.33,
      discountPercentage: 59,
      url:
        'https://www.amazon.com/Sealed-Nectar-Safiur-Rahman-Mubarakpuri/dp/6035001106/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=&sr=',
      rating: 4.6
    },

    {
      id: 67,
      categoryId: 12,
      name: `Frozen in Time: An Epic Story of Survival and a Modern Quest for Lost Heroes of World War II`,
      description: `Frozen in Time is a gripping true story of survival, bravery, and honor in the vast Arctic wilderness during World War II, from the author of New York Times bestseller Lost in Shangri-La.

        On November 5, 1942, a US cargo plane slammed into the Greenland Ice Cap. Four days later, the B-17 assigned to the search-and-rescue mission became lost in a blinding storm and also crashed. Miraculously, all nine men on board survived, and the US military launched a daring rescue operation. But after picking up one man, the Grumman Duck amphibious plane flew into a severe storm and vanished.
        
        Frozen in Time tells the story of these crashes and the fate of the survivors, bringing vividly to life their battle to endure 148 days of the brutal Arctic winter, until an expedition headed by famed Arctic explorer Bernt Balchen brought them to safety. Mitchell Zuckoff takes the reader deep into the most hostile environment on earth, through hurricane-force winds, vicious blizzards, and subzero temperatures.
        
        Moving forward to today, he recounts the efforts of the Coast Guard and North South Polar Inc. – led by indefatigable dreamer Lou Sapienza – who worked for years to solve the mystery of the Duck’s last flight and recover the remains of its crew.
        
        A breathtaking blend of mystery and adventure Mitchell Zuckoff's Frozen in Time: An Epic Story of Survival and a Modern Quest for Lost Heroes of World War II is also a poignant reminder of the sacrifices of our military personnel and a tribute to the everyday heroism of the US Coast Guard.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51htCF0sUvL.jpg',
      authors: [
        {
          id: 1,
          name: 'Mitchell Zuckoff',
          about: `is the Sumner M. Redstone Professor of Narrative Studies at Boston University and a #1 New York Times bestselling author. Previously, he was a reporter and writing coach for The Boston Globe, where he was a finalist for a Pulitzer Prize in investigative reporting as a member of the Spotlight Team. His honors include the PEN/Winship Award for Nonfiction, the Distinguished Writing Award from the American Society of Newspaper Editors, The Livingston Award for International Reporting, and The Heywood Broun Award, among others. He received a master's degree from the University of Missouri and was a Batten Fellow at the University of Virginia. He lives outside Boston. His website is www.mitchellzuckoff.com`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'People',
          review: `The gripping story of a WWII-era plane crash, the survivors who braved subzero conditions, and the modern-day quest for answers.`
        },
        {
          id: 2,
          editor: 'Entertainment Weekly',
          review: `A true-life nail-biter—as nimbly paced as a novel. Grade: A.`
        },
        {
          id: 3,
          editor: 'Entertainment Weekly',
          review: `This stunningly immersive true-life account of a U.S. military search-and-rescue operation…reads like a stellar adventure novel.`
        }
      ],
      length: 393,
      publisher: 'Harper Perennial; Reprint edition',
      publishDate: 'April 29, 2014',
      isbn: '0062133403',
      shippingWeight: '12 ounces',
      dimensions: '5.3 x 1 x 8 inches',
      price: 15.99,
      discountPercentage: 28,
      url:
        'https://www.amazon.com/Frozen-Time-Survival-Modern-Heroes/dp/0062133403/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=',
      rating: 4.6
    },

    {
      id: 68,
      categoryId: 12,
      name: `The Age of Eisenhower: America and the World in the 1950s`,
      description: `In a 2017 survey, presidential historians ranked Dwight D. Eisenhower fifth on the list of great presidents, behind the perennial top four: Lincoln, Washington, Franklin D. Roosevelt, and Teddy Roosevelt. Historian William Hitchcock shows that this high ranking is justified. Eisenhower’s accomplishments were enormous, and loom ever larger from the vantage point of our own tumultuous times.

        A former general, Ike kept the peace: he ended the Korean War, avoided a war in Vietnam, adroitly managed a potential confrontation with China, and soothed relations with the Soviet Union after Stalin’s death. He guided the Republican Party to embrace central aspects of the New Deal like Social Security. He thwarted the demagoguery of McCarthy and he advanced the agenda of civil rights for African Americans. As part of his strategy to wage, and win, the Cold War, Eisenhower expanded American military power, built a fearsome nuclear arsenal and launched the space race. In his famous Farewell Address, he acknowledged that Americans needed such weapons in order to keep global peace—but he also admonished his citizens to remain alert to the potentially harmful influence of the “military-industrial complex.”
        
        From 1953 to 1961, no one dominated the world stage as did President Dwight D. Eisenhower. The Age of Eisenhower is the definitive account of this presidency, drawing extensively on declassified material from the Eisenhower Library, the CIA and Defense Department, and troves of unpublished documents. In his masterful account, Hitchcock shows how Ike shaped modern America, and he astutely assesses Eisenhower’s close confidants, from Attorney General Brownell to Secretary of State Dulles. The result is an eye-opening reevaluation that explains why this “do-nothing” president is rightly regarded as one of the best leaders our country has ever had.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51SxX3iZvBL.jpg',
      authors: [
        {
          id: 1,
          name: 'William I. Hitchcock',
          about: `is a professor of history at the University of Virginia and the Randolph Compton Professor at the Miller Center for Public Affairs. A graduate of Kenyon College and Yale University, he is the author most recently of The Bitter Road to Freedom: The Human Cost of Allied Victory in World War II Europe, which was a finalist for the Pulitzer Prize. For more about the book, visit AgeofEisenhower.com.`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: "Michael O'Donnell The Atlantic",
          review: `Outstanding.`
        },
        {
          id: 2,
          editor: 'Booklist',
          review: `A complete and persuasive assessment.`
        }
      ],
      length: 672,
      publisher: 'Simon & Schuster; Reprint edition',
      publishDate: 'March 5, 2019',
      isbn: '1451698429',
      shippingWeight: '6 x 9 inches',
      dimensions: '1.1 pounds',
      price: 20,
      discountPercentage: 16,
      url:
        'https://www.amazon.com/Age-Eisenhower-America-World-1950s/dp/1451698429/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=',
      rating: 3.6
    },

    {
      id: 69,
      categoryId: 12,
      name: `The Last Lion: Winston Spencer Churchill: Defender of the Realm, 1940-1965`,
      description: `Spanning the years of 1940-1965, THE LAST LION picks up shortly after Winston Churchill became Prime Minister-when his tiny island nation stood alone against the overwhelming might of Nazi Germany. The Churchill conjured up by William Manchester and Paul Reid is a man of indomitable courage, lightning fast intellect, and an irresistible will to action. THE LAST LION brilliantly recounts how Churchill organized his nation's military response and defense; compelled FDR into supporting America's beleaguered cousins, and personified the "never surrender" ethos that helped the Allies win the war, while at the same time adapting himself and his country to the inevitable shift of world power from the British Empire to the United States. 

        More than twenty years in the making, THE LAST LION presents a revelatory and unparalleled portrait of this brilliant, flawed, and dynamic leader. This is popular history at its most stirring.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51dA6rzIbZL.jpg',
      authors: [
        {
          id: 1,
          name: 'William Manchester',
          about: `was a hugely successful popular historian and renowned biographer. In addition to the first two volumes of The Last Lion, his books include Goodbye, Darkness, A World Lit Only by Fire, The Glory and the Dream, The Arms of Krupp, American Caesar, and The Death of a President, as well as assorted works of journalism. He was awarded the National Humanities Medal and the Abraham Lincoln Literary Award. He passed away in 2004.`
        },
        {
          id: 2,
          name: 'Paul Reid',
          about: `is an award-winning journalist. In late 2003, Manchester, in failing health, asked him to complete The Last Lion: Defender of the Realm. He lives in North Carolina.`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'The Washington Post',
          review: `Majestic . . . This book is superb. It has tremendous pace, rich detail and immense drama.`
        },
        {
          id: 2,
          editor: 'USA Today',
          review: `A must-read finale for those who loved Manchester’s first two books.`
        },
        {
          id: 3,
          editor: 'Library Journal',
          review: `One of the most thorough treatments of Churchill so far produced.`
        }
      ],
      length: 1200,
      publisher: 'Bantam; Reprint edition',
      publishDate: 'November 5, 2013',
      isbn: '0345548639',
      shippingWeight: '2 pounds',
      dimensions: '5.4 x 2 x 8.1 inches',
      price: 24,
      discountPercentage: 23,
      url:
        'https://www.amazon.com/Last-Lion-Churchill-Defender-1940-1965/dp/0345548639/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=',
      rating: 4.6
    },

    {
      id: 70,
      categoryId: 12,
      name: `You Learn By Living: Eleven Keys for a More Fulfilling Life`,
      description: `From one of the world’s most celebrated and admired public figures, a wise and intimate book on how to get the most of out life.

        Courage is more exhilarating than fear and in the long run it is easier. We do not have to become heroes overnight. Just a step at a time, meeting each new thing that comes up, seeing it is not as dreadful as it appeared, discovering we have the strength to stare it down.
        
        Eleanor Roosevelt, one of the world’s best loved and most admired public figures, offers a wise and intimate guide on how to overcome fears, embrace challenges as opportunities, and cultivate civic pride: You Learn by Living. A crucial precursor to better-living guides like Mark Nepo’s The Book of Awakening or Robert Persig’s Zen and the Art of Motorcycle Maintenance, as well as political memoirs such as John F. Kennedy’s Profiles in Courage, the First Lady’s illuminating manual of personal exploration resonates with the timeless power to change lives.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51H0E5DUCvL.jpg',
      authors: [
        {
          id: 1,
          name: 'Eleanor Roosevelt',
          about: `was born in New York City on October 11, 1884. She married Franklin Delano Roosevelt on March 17, 1905, and was the mother of six children. She became First Lady on March 4, 1933, and went on to serve as Delegate to the United Nations General Assembly and Representative to the Commission on Human Rights under Harry S. Truman, and chairwoman of the Presidential Commission on the Status of Women under John F. Kennedy. She died on November 7, 1962, at the age of seventy-eight.`
        }
      ],
      editorialReviews: null,
      length: 224,
      publisher: 'Harper Perennial; Anniversary edition',
      publishDate: 'April 26, 2011',
      isbn: '9780062061577',
      shippingWeight: '5.6 ounces',
      dimensions: '5.3 x 0.5 x 8 inches',
      price: 15.99,
      discountPercentage: 33,
      url:
        'https://www.amazon.com/You-Learn-Living-Eleven-Fulfilling/dp/0062061577/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=',
      rating: 4.0
    },

    {
      id: 71,
      categoryId: 12,
      name: `The First Conspiracy: The Secret Plot to Kill George Washington`,
      description: `In 1776, an elite group of soldiers were handpicked to serve as George Washington’s bodyguards. Washington trusted them; relied on them. But unbeknownst to Washington, some of them were part of a treasonous plan. In the months leading up to the Revolutionary War, these traitorous soldiers, along with the Governor of New York, William Tryon, and Mayor David Mathews, launched a deadly plot against the most important member of the military: George Washington himself.

        This is the story of the secret plot and how it was revealed. It is a story of leaders, liars, counterfeiters, and jailhouse confessors. It also shows just how hard the battle was for George Washington and how close America was to losing the Revolutionary War.
        
        In this historical page-turner, New York Times bestselling author Brad Meltzer teams up with American history writer and documentary television producer, Josh Mensch to unravel the shocking true story behind what has previously been a footnote in the pages of history. Drawing on extensive research, Meltzer and Mensch capture in riveting detail how George Washington not only defeated the most powerful military force in the world, but also uncovered the secret plot against him in the tumultuous days leading up to July 4, 1776.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/411kO5uPDyL.jpg',
      authors: [
        {
          id: 1,
          name: 'Brad Meltzer',
          about: `is the #1 New York Times bestselling author of The Escape Artist, The Inner Circle, and many other bestselling thrillers, as well as the "Ordinary People Change the World" series. He is also the host of the History Channel TV shows Brad Meltzer’s Decoded and Brad Meltzer’s Lost History, which he used to help find the missing 9/11 flag that the firefighters raised at Ground Zero.`
        },
        {
          id: 2,
          name: 'Josh Mensch',
          about: `is a writer and documentary television producer with a focus on American history and culture. He has produced, written and directed series for PBS, National Geographic, A&E, Discovery and other networks. He was also the showrunner on Brad Meltzer’s Lost History for the History Channel. Josh is a graduate of Princeton and Columbia Universities, and lives in Brooklyn with his family`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'USA Today',
          review: `A breezily entertaining account. For Meltzer…this foray into nonfiction has a decidedly melodramatic flavor, rushing along in the present tense from one breathless, cliffhanging chapter to the next.`
        },
        {
          id: 2,
          editor: 'Associated Press',
          review: `The author extract what they can out of the historical record to tell a colorful story giving the reader a sense of Revolutionary-era Manhattan. The writing is punchy and the chapters are short.`
        }
      ],
      length: 432,
      publisher: 'Flatiron Books; Reprint edition',
      publishDate: 'January 8, 2019',
      isbn: '1250130336',
      shippingWeight: '1.3 pounds',
      dimensions: '6.4 x 1.4 x 9.6 inches',
      price: 29.99,
      discountPercentage: 40,
      url:
        'https://www.amazon.com/First-Conspiracy-Secret-George-Washington/dp/1250130336/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1548241656&sr=1-3',
      rating: 4.0
    },

    {
      id: 72,
      categoryId: 12,
      name: `The Spy and the Traitor: The Greatest Espionage Story of the Cold War`,
      description: `f anyone could be considered a Russian counterpart to the infamous British double-agent Kim Philby, it was Oleg Gordievsky. The son of two KGB agents and the product of the best Soviet institutions, the savvy, sophisticated Gordievsky grew to see his nation's communism as both criminal and philistine. He took his first posting for Russian intelligence in 1968 and eventually became the Soviet Union's top man in London, but from 1973 on he was secretly working for MI6. For nearly a decade, as the Cold War reached its twilight, Gordievsky helped the West turn the tables on the KGB, exposing Russian spies and helping to foil countless intelligence plots, as the Soviet leadership grew increasingly paranoid at the United States's nuclear first-strike capabilities and brought the world closer to the brink of war. Desperate to keep the circle of trust close, MI6 never revealed Gordievsky's name to its counterparts in the CIA, which in turn grew obsessed with figuring out the identity of Britain's obviously top-level source. Their obsession ultimately doomed Gordievsky: the CIA officer assigned to identify him was none other than Aldrich Ames, the man who would become infamous for secretly spying for the Soviets. 

        Unfolding the delicious three-way gamesmanship between America, Britain, and the Soviet Union, and culminating in the gripping cinematic beat-by-beat of Gordievsky's nail-biting escape from Moscow in 1985, Ben Macintyre's latest may be his best yet. Like the greatest novels of John le Carré, it brings readers deep into a world of treachery and betrayal, where the lines bleed between the personal and the professional, and one man's hatred of communism had the power to change the future of nations.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51iN3-aaUAL.jpg',
      authors: [
        {
          id: 1,
          name: 'Ben Macintyre',
          about: `is a writer-at-large for The Times of London and the bestselling author of A Spy Among Friends, Double Cross, Operation Mincemeat, Agent Zigzag, and Rogue Heroes, among other books. Macintyre has also written and presented BBC documentaries of his work.`
        }
      ],
      editorialReviews: null,
      length: 608,
      publisher: 'Random House Large Print; Large Print edition',
      publishDate: 'September 18, 2018',
      isbn: '198484153X',
      shippingWeight: '1.3 pounds',
      dimensions: '6.1 x 1 x 9.2 inches',
      price: 30,
      discountPercentage: 35,
      url:
        'https://www.amazon.com/Spy-Traitor-Greatest-Espionage-Story/dp/198484153X/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1548241656&sr=1-11',
      rating: 4.6
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
