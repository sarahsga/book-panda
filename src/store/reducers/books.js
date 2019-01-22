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
    },
    {
      id: 2,
      categoryId: 10,
      name: 'The Astrophotography Manual: A Practical and Scientific Approach to Deep Sky Imaging',
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
      description:
        `Too often, textbooks obscure the beauty and wonder of fine art with tedious discourse that even Leonardo da Vinci would oppose. Art 101 cuts out the boring details and lengthy explanations, and instead, gives you a lesson in artistic expression that keeps you engaged as you discover the world's greatest artists and their masterpieces.
        From color theory and Claude Monet to Jackson Pollock and Cubism, this primer is packed with hundreds of entertaining tidbits and works of art that you won't be able to get anywhere else.
        
        So whether you're looking to master classic painting techniques, or just want to learn more about popular styles of art, Art 101 has all the answers--even the ones you didn't know you were looking for.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51yiYxETVIL._SX366_BO1,204,203,200_.jpg',
      authors: [
        {
          id: 1,
          name: 'Eric Grzymkowski',
          about:
            `is a writer and trivia buff who has written several books, including The United States of Strange, Attack of the Killer Facts!, The Quotable A**hole, and A Year of Living Sinfully.`
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
      name:
        'Universal Principles of Design',
      description:
        `Universal Principles of Design, Revised and Updated is a comprehensive, cross-disciplinary encyclopedia covering 125 laws, guidelines, human biases, and general considerations important to successful design. Richly illustrated and easy to navigate, it pairs clear explanations of every design concept with visual examples of the ideas applied in practice. From the 80/20 Rule to the Weakest Link, every major design concept is defined and illustrated.

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
          about:
            `is the Director of Design at Stuff Creators Design in Houston, Texas. He is author of the best-selling design book, Universal Principles of Design, which has been translated into 12+ languages, and Deconstructing Product Design, a social deconstruction of 100 classic products. He is the lecturer of two video series on design: "How Colors Affect You: What Science Reveals" available from The Great Courses, and "The Science of Logo Design," available from Lynda.com.`
        },
        {
          id: 2,
          name: 'Kritina Holden',
          about:
            `is a Human Factors specialist at Lockheed Martin–Space Operations and NASA, where she is responsible for performing applied research on HCI topics for the space environment. Formerly a Lead Usability Engineer with BMC Software, Kritina is author of numerous guideline texts in the areas of human-computer interaction and human performance.`
        },
        {
          id: 3,
          name: 'Jill Butler',
          about:
            `is the founder and president of Stuff Creators Design Studio. She and her staff help clients explain concepts and express themselves through graphics, interaction design, web site design, printed products, and custom-designed 3-D objects. She has worked as a print designer, information designer, and multimedia designer for herself and various companies in the Houston area. Jill served as a lecturer and taught design-related classes at the University of Houston and Kingwood Community College.`
        }
      ],
      editorialReviews: null,
      length: 272,
      publisher: 'Rockport Publishers; 2nd Second Edition, Revised and Up ed. edition',
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
          about:
            `is an author, musician, educator, and proud Alaskan. His latest book,"The Practice of Practice," is a result of over 5 years of study, including original research of my own, and more than 30 years of experience as both musician and teacher. Learn more at www.ThePracticeOfPractice.com `
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'Midwest Book Review',
          review:
            `Basic Music Theory is an ideal and highly recommended text for anyone of any background wanting to become proficient in the reading, composing, and performance of written and notated music.`
        },
        {
          id: 2,
          editor: 'KLIATT Library Review Service',
          review:
            `This is a book that covers lots of ground without ever appearing "difficult." It is written in a breezy, conversational manner, so one "talk" naturally drifts into the next.`
        },
        {
          id: 3,
          editor: 'Chris Ward (Kendal, UK) ',
          review:
            `Basic Music Theory by Jonathan Harnum explains the subject in a manner that is light-hearted and easy to follow. For someone in their late forties (like me) who hasn't had formal music training since the age of thirteen, it's been extremely useful. I can now say that I'm able to read music and understand some of the more-complex musical arrangements. I've been playing the saxophone for about 18 months now and the book has helped to bring me from a level of not being able to read music up to one of reasonable competence at sight reading.`
        },
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
      description:
        `Histograms are the key to proper exposure and creating stunning images in the post-processing stage of DIGITAL photography.
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
          about:
            `is a professional photographer and author living with his wife in Prescott, Arizona. In March 2012, the Sedona Area Guild of Artists (SAGA) included Al in their list of the Best Artists of Sedona 2012. Al's books use numerous illustrations and clear explanations to take the mystery out of creating excellent images. A few hours spent with one of these books can save the reader from months of frustration and confusion.`
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
      name:
        `Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future`,
      description:
        `In the spirit of Steve Jobs and Moneyball, Elon Musk is both an illuminating and authorized look at the extraordinary life of one of Silicon Valley's most exciting, unpredictable, and ambitious entrepreneurs--a real-life Tony Stark--and a fascinating exploration of the renewal of American invention and its new "makers."
        Elon Musk spotlights the technology and vision of Elon Musk, the renowned entrepreneur and innovator behind SpaceX, Tesla, and SolarCity, who sold one of his Internet companies, PayPal, for $1.5 billion. Ashlee Vance captures the full spectacle and arc of the genius's life and work, from his tumultuous upbringing in South Africa and flight to the United States to his dramatic technical innovations and entrepreneurial pursuits.
        Vance uses Musk's story to explore one of the pressing questions of our age: can the nation of inventors and creators who led the modern world for a century still compete in an age of fierce global competition? He argues that Musk--one of the most unusual and striking figures in American business history--is a contemporary, visionary amalgam of legendary inventors and industrialists including Thomas Edison, Henry Ford, Howard Hughes, and Steve Jobs. More than any other entrepreneur today, Musk has dedicated his energies and his own vast fortune to inventing a future that is as rich and far-reaching as the visionaries of the golden age of science-fiction fantasy.
        Thorough and insightful, Elon Musk brings to life a technology industry that is rapidly and dramatically changing by examining the life of one of its most powerful and influential titans.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/5112YFsXIJL._SX330_BO1,204,203,200_.jpg',
      authors: [
        {
          id: 1,
          name: 'Ashlee Vance',
          about:
            `offers an unprecedented look into the remarkable life of the most daring entrepreneur of our time. Elon Musk paints a portrait of a complex man who has renewed American industry and sparked new levels of innovation—from PayPal to Tesla, SpaceX, and SolarCity—overcoming hardship, earning billions, and making plenty of enemies along the way.`
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
          review:
            '[A] spirited and riveting biography.'
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
          review:
            'Fascinating and superbly researched…'
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
      name:
        `The Girl with Seven Names: A North Korean Defector’s Story`,
      description:
        `An extraordinary insight into life under one of the world’s most ruthless and secretive dictatorships – and the story of one woman’s terrifying struggle to avoid capture/repatriation and guide her family to freedom.

        As a child growing up in North Korea, Hyeonseo Lee was one of millions trapped by a secretive and brutal communist regime. Her home on the border with China gave her some exposure to the world beyond the confines of the Hermit Kingdom and, as the famine of the 1990s struck, she began to wonder, question and to realise that she had been brainwashed her entire life. Given the repression, poverty and starvation she witnessed surely her country could not be, as she had been told “the best on the planet”?
        
        Aged seventeen, she decided to escape North Korea. She could not have imagined that it would be twelve years before she was reunited with her family.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51OT1t6aUIL._SX322_BO1,204,203,200_.jpg',
      authors: [
        {
          id: 1,
          name: 'Hyeonseo Lee',
          about:
            `grew up in North Korea but escaped to China in 1997. In 2008, after more than 10 years there, she came to Seoul, South Korea, where she struggled to adjust to life in the bustling city. Recently graduated from Hankuk University of Foreign Studies, she has become a regular speaker on the international stage fostering human rights and awareness of the plight of North Koreans. She is an advocate for fellow refugees, even helping close relatives leave North Korea. Her TED talk has been viewed nearly 4m times. She is married to her American husband Brian Gleason and currently lives in South Korea.`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'Oprah',
          review:
            'The most riveting TED talk ever'
        },
        {
          id: 2,
          editor: 'Wired',
          review:
            'Harrowing'
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
          review:
            'Remarkable bravery fluently recounted'
        },
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
      name:
        `Born a Crime: Stories from a South African Childhood`,
      description:
        `Trevor Noah’s unlikely path from apartheid South Africa to the desk of The Daily Show began with a criminal act: his birth. Trevor was born to a white Swiss father and a black Xhosa mother at a time when such a union was punishable by five years in prison. Living proof of his parents’ indiscretion, Trevor was kept mostly indoors for the earliest years of his life, bound by the extreme and often absurd measures his mother took to hide him from a government that could, at any moment, steal him away. Finally liberated by the end of South Africa’s tyrannical white rule, Trevor and his mother set forth on a grand adventure, living openly and freely and embracing the opportunities won by a centuries-long struggle.

        Born a Crime is the story of a mischievous young boy who grows into a restless young man as he struggles to find himself in a world where he was never supposed to exist. It is also the story of that young man’s relationship with his fearless, rebellious, and fervently religious mother—his teammate, a woman determined to save her son from the cycle of poverty, violence, and abuse that would ultimately threaten her own life.
        
        The stories collected here are by turns hilarious, dramatic, and deeply affecting. Whether subsisting on caterpillars for dinner during hard times, being thrown from a moving car during an attempted kidnapping, or just trying to survive the life-and-death pitfalls of dating in high school, Trevor illuminates his curious world with an incisive wit and unflinching honesty. His stories weave together to form a moving and searingly funny portrait of a boy making his way through a damaged world in a dangerous time, armed only with a keen sense of humor and a mother’s unconventional, unconditional love.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51v55L2fxfL.jpg',
      authors: [
        {
          id: 1,
          name: 'Trevor Noah',
          about:
            `is a comedian from South Africa.`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: `The New York Times`,
          review:
            `[A] compelling new memoir. . . . By turns alarming, sad and funny, [the] book provides a harrowing look, through the prism of Mr. Noah's family, at life in South Africa under apartheid and the country's lurching entry into a postapartheid era in the 1990s.`
        },
        {
          id: 2,
          editor: `Entertainment Weekly`,
          review:
            `[A] stirring memoir. . . . Noah proves to be a gifted storyteller, able to deftly lace his poignant tales with amusing irony.`
        },
        {
          id: 3,
          editor: `The Guardian (UK)`,
          review:
            `Born a Crime is an engaging, fast-paced and vivid read. . . . The book is essential reading not only because it is a personal story of survival, leavened with insight and wit, but because it does more to expose apartheid—its legacy, its pettiness, its small-minded stupidity and its damage—than any other recent history book or academic text.
            `
        },
        {
          id: 4,
          editor: `Booklist, starred review`,
          review:
            `[A] substantial collection of staggering personal essays. . . . Incisive, funny and vivid, these true tales are anchored to his portrait of his courageous, rebellious and religious mother who defied racially restrictive laws to secure an education and a career for herself—and to have a child with a white Swiss/German even though sex between whites and blacks was illegal. . . . [Trevor Noah's] electrifying memoir sparkles with funny stories . . . and his candid and compassionate essays deepen our perception of the complexities of race, gender and class.`
        },
        {
          id: 5,
          editor: `Kirkus Reviews`,
          review:
            `A gritty memoir . . . studded with insight and provocative social criticism . . . with flashes of brilliant storytelling and acute observations.`
        },
        {
          id: 6,
          editor: `Cosmopolitan`,
          review:
            `[Noah's] story of surviving—and thriving—is mind-blowing.`
        },
        {
          id: 7,
          editor: `The Seattle Times`,
          review:
            `Noah's memoir is extraordinary in its observations of South Africa in the years when apartheid crumbled. It's equally unusual in the troubling personal story it tells. Throw in Noah's sharp, droll prose style, and you have a book that feels like essential reading on every level.`
        },
        {
          id: 8,
          editor: `USA Today`,
          review:
            `What makes Born a Crime such a soul-nourishing pleasure, even with all its darker edges and perilous turns, is reading Noah recount in brisk, warmly conversational prose how he learned to negotiate his way through the bullying and ostracism. . . . What also helped was having a mother like Patricia Nombuyiselo Noah. . . . Consider Born a Crime another such gift to her—and an enormous gift to the rest of us.`
        },
        {
          id: 9,
          editor: `The Oprah Magazine`,
          review:
            `You'd be hard-pressed to find a comic's origin story better than the one Trevor Noah serves up in Born a Crime.`
        },
        {
          id: 10,
          editor: `—People`,
          review:
            `[Noah] thrives with the help of his astonishingly fearless mother. . . . Their fierce bond makes this story soar`
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
      name:
        `Educated: A Memoir`,
      description:
        `
        An unforgettable memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University
        
        Born to survivalists in the mountains of Idaho, Tara Westover was seventeen the first time she set foot in a classroom. Her family was so isolated from mainstream society that there was no one to ensure the children received an education, and no one to intervene when one of Tara’s older brothers became violent. When another brother got himself into college, Tara decided to try a new kind of life. Her quest for knowledge transformed her, taking her over oceans and across continents, to Harvard and to Cambridge University. Only then would she wonder if she’d traveled too far, if there was still a way home`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/41Ld1sqdhgL.jpg',
      authors: [
        {
          id: 1,
          name: 'Tara Westover',
          about:
            `is an American author living in the UK. Born in Idaho to a father opposed to public education, she never attended school. She spent her days working in her father's junkyard or stewing herbs for her mother, a self-taught herbalist and midwife. She was seventeen the first time she set foot in a classroom, and after that first taste, she pursued learning for a decade. She graduated magna cum laude from Brigham Young University in 2008 and was subsequently awarded a Gates Cambridge Scholarship. She earned an MPhil from Trinity College, Cambridge in 2009, and in 2010 was a visiting fellow at Harvard University. She returned to Cambridge, where she was awarded a PhD in history in 2014.`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'The Oprah Magazine',
          review:
            `A coming-of-age memoir reminiscent of The Glass Castle.`
        },
        {
          id: 2,
          editor: 'Vogue',
          review:
            `Beautiful and propulsive . . . [Tara Westover’s] voice is so sui generis it feels in debt to no one. . . . And despite the singularity of her childhood, the questions her book poses are universal: How much of ourselves should we give to those we love? And how much must we betray them to grow up?`
        },
        {
          id: 3,
          editor: 'Bill Gates',
          review:
            `An amazing story, and truly inspiring. The kind of book everyone will enjoy. It’s even better than you’ve heard.`
        },
        {
          id: 4,
          editor: 'Amy Chua, The New York Times Book Review',
          review:
            `Heart-wrenching . . . a beautiful testament to the power of education to open eyes and change lives.`
        },
        {
          id: 5,
          editor: 'The New Yorker',
          review:
            `Westover is a keen and honest guide to the difficulties of filial love, and to the enchantment of embracing a life of the mind.`
        }
      ],
      length: 336,
      publisher: 'Random House',
      publishDate: 'February 20, 2018',
      isbn: 'B072BLVM83',
      shippingWeight: '1 pounds',
      dimensions: '6 x 1 x 9.2 inches',
      price: 30.00,
      discountPercentage: 32,
      url:
        'https://www.amazon.com/Educated-Memoir-Random-House-Large/dp/0525589988/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1548160037&sr=1-2',
      rating: 4.2
    },
    {
      id: 11,
      categoryId: 2,
      name:
        `Fear: Trump in the White House`,
      description:
        `With authoritative reporting honed through eight presidencies from Nixon to Obama, author Bob Woodward reveals in unprecedented detail the harrowing life inside President Donald Trump’s White House and precisely how he makes decisions on major foreign and domestic policies. Woodward draws from hundreds of hours of interviews with firsthand sources, meeting notes, personal diaries, files and documents. The focus is on the explosive debates and the decision-making in the Oval Office, the Situation Room, Air Force One and the White House residence.

        Fear is the most intimate portrait of a sitting president ever published during the president’s first years in office.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/416jD1EyieL.jpg',
      authors: [
        {
          id: 1,
          name: 'Bob Woodward',
          about:
            `is an associate editor of The Washington Post, where he has worked since 1971. He has shared in two Pulitzer Prizes, first in 1973 for the coverage of the Watergate scandal with Carl Bernstein, and second in 2003 as the lead reporter for coverage of the 9/11 terrorist attacks. 

            He has authored or coauthored 18 books, all of which have been national non-fiction bestsellers. Twelve of those have been #1 national bestsellers. He has written books on eight of the most recent presidents, from Nixon to Obama.`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'Phillip Rucker and Robert Costa, The Washington Post',
          review:
            `A harrowing portrait of the Trump presidency . . . Again and again, Woodward recounts at length how Trump’s national security team was shaken by his lack of curiosity and knowledge about world affairs and his contempt for the mainstream perspectives of military and intelligence leaders.`
        },
        {
          id: 2,
          editor: 'David Martin, CBS News',
          review:
            `A damning picture of the current presidency.`
        },
        {
          id: 3,
          editor: 'CNN',
          review:
            `An unprecedented inside-the-room look through the eyes of the President's inner circle. . . . stunning.`
        },
        {
          id: 4,
          editor: 'Susan B. Glasser, The New Yorker',
          review:
            `A devastating reported account of the Trump Presidency that will be consulted as a first draft of the grim history it portrays . . . What Woodward has written is not just the story of a deeply flawed President but also, finally, an account of what those surrounding him have chosen to do about it.`
        },
        {
          id: 5,
          editor: 'John Diaz, San Francisco Chronicle',
          review:
            `Fear is Woodward at his best, the quintessential investigative reporter with an eye for detail and an uncanny ability to get key players to ensure that their perspective is etched into history. Its timing could not be more critical for a nation exhausted by tweets and spin, and trying to assess the danger to democracy posed by a presidency that shatters its norms and demeans its institutions.`
        },
      ],
      length: 448,
      publisher: 'Simon & Schuster; 2nd edition',
      publishDate: 'September 11, 2018',
      isbn: '1501175513',
      shippingWeight: '1.5 pounds',
      dimensions: '6 x 1.2 x 9 inches',
      price: 30.00,
      discountPercentage: 40,
      url:
        'https://www.amazon.com/Fear-Trump-White-Bob-Woodward/dp/1501175513/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1548160037&sr=1-3',
      rating: 3.0
    },
    {
      id: 12,
      categoryId: 2,
      name:
        `A Mind at Play: How Claude Shannon Invented the Information Age`,
      description:
        `In their second collaboration, biographers Jimmy Soni and Rob Goodman present the story of Claude Shannon—one of the foremost intellects of the twentieth century and the architect of the Information Age, whose insights stand behind every computer built, email sent, video streamed, and webpage loaded. Claude Shannon was a groundbreaking polymath, a brilliant tinkerer, and a digital pioneer. He constructed the first wearable computer, outfoxed Vegas casinos, and built juggling robots. He also wrote the seminal text of the digital revolution, which has been called “the Magna Carta of the Information Age.” In this elegantly written, exhaustively researched biography, Soni and Goodman reveal Claude Shannon’s full story for the first time. With unique access to Shannon’s family and friends, A Mind at Play brings this singular innovator and always playful genius to life.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/511pVVCQgZL._SX326_BO1,204,203,200_.jpg',
      authors: [
        {
          id: 1,
          name: 'Jimmy Soni',
          about:
            `has served as an editor at The New York Observer and the Washington Examiner and as managing editor of Huffington Post. He is a former speechwriter, and his written work and commentary have appeared in Slate, The Atlantic, and CNN, among other outlets. He is a graduate of Duke University. With Rob Goodman, he is the coauthor of Rome’s Last Citizen: The Life and Legacy of Cato, Mortal Enemy of Caesar, and A Mind at Play: How Claude Shannon Invented the Information Age.`
        },
        {
          id: 2,
          name: 'Rob Goodman',
          about:
            `is a doctoral candidate at Columbia University and a former congressional speechwriter. He has written for Slate, The Atlantic, Politico, and The Chronicle of Higher Education. His scholarly work has appeared in History of Political Thought, the Kennedy Institute of Ethics Journal, and The Journal of Medicine and Philosophy. With Jimmy Soni, he is the coauthor of Rome’s Last Citizen: The Life and Legacy of Cato, Mortal Enemy of Caesar, and A Mind at Play: How Claude Shannon Invented the Information Age.`
        }
      ],
      length: 384,
      publisher: 'Simon & Schuster; Reprint edition',
      publishDate: 'July 17, 2018',
      isbn: '147676669X',
      shippingWeight: '11.7 ounces',
      dimensions: '5.5 x 1 x 8.4 inches',
      price: 17.00,
      discountPercentage: 32,
      url:
        'https://www.amazon.com/Mind-Play-Shannon-Invented-Information/dp/147676669X/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=',
      rating: 4
    },
    {
      id: 13,
      categoryId: 8,
      name:
        `Bad Blood: Secrets and Lies in a Silicon Valley Startup`,
      description:
        `The full inside story of the breathtaking rise and shocking collapse of Theranos, the multibillion-dollar biotech startup, by the prize-winning journalist who first broke the story and pursued it to the end, despite pressure from its charismatic CEO and threats by her lawyers.

        In 2014, Theranos founder and CEO Elizabeth Holmes was widely seen as the female Steve Jobs: a brilliant Stanford dropout whose startup "unicorn" promised to revolutionize the medical industry with a machine that would make blood testing significantly faster and easier. Backed by investors such as Larry Ellison and Tim Draper, Theranos sold shares in a fundraising round that valued the company at more than $9 billion, putting Holmes's worth at an estimated $4.7 billion. There was just one problem: The technology didn't work.
        
        A riveting story of the biggest corporate fraud since Enron, a tale of ambition and hubris set amid the bold promises of Silicon Valley.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/41tmqEUIbSL._SX329_BO1,204,203,200_.jpg',
      authors: [
        {
          id: 1,
          name: 'John Carreyrou',
          about:
            `is a Pulitzer Prize-winning reporter and a nonfiction author. His first book, "Bad Blood: Secrets and Lies in a Silicon Valley Startup," chronicles Silicon Valley's biggest fraud.`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'Roger Lowenstein, The New York Times Book Review',
          review:
            `[A] chilling, third-person narrative of how Holmes came up with a fantastic idea that made her, for a while, the most successful woman entrepreneur in Silicon valley… Prizewinning Wall Street Journal reporter John Carreyrou tells [this story] virtually to perfection… [His] description of Holmes as a manic leader who turned coolly hostile when challenged is ripe material for a psychologist… His recounting of his efforts to track down sources—many of whom were being intimidated by Theranos’s bullying lawyer, David Boies—reads like a West Coast version of All the President's Men.`
        },
        {
          id: 2,
          editor: 'Publishers Weekly',
          review:
            `Carreyrou blends lucid descriptions of Theranos’s technology and its failures with a vivid portrait of its toxic culture and its supporters’ delusional boosterism. The result is a bracing cautionary tale about visionary entrepreneurship gone very wrong.`
        },
        {
          id: 3,
          editor: 'Bethany McLean, bestselling coauthor of The Smartest Guys in the Room and All the Devils Are Here',
          review:
            `You will not want to put this riveting, masterfully reported book down. No matter how bad you think the Theranos story was, you'll learn that the reality was actually far worse`
        },
        {
          id: 4,
          editor: 'Yashar Ali, New York Magazine',
          review:
            `A great and at times almost unbelievable story of scandalous fraud, surveillance, and legal intimidation at the highest levels of American corporate power. . . . The story of Theranos may be the biggest case of corporate fraud since Enron. But it’s also the story of how a lot of powerful men were fooled by a remarkably brazen liar`
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
      name:
        `The Fifth Risk`,
      description:
        `"The election happened," remembers Elizabeth Sherwood-Randall, then deputy secretary of the Department of Energy. "And then there was radio silence." Across all departments, similar stories were playing out: Trump appointees were few and far between; those that did show up were shockingly uninformed about the functions of their new workplace. Some even threw away the briefing books that had been prepared for them.

        Michael Lewis’s brilliant narrative takes us into the engine rooms of a government under attack by its own leaders. In Agriculture the funding of vital programs like food stamps and school lunches is being slashed. The Commerce Department may not have enough staff to conduct the 2020 Census properly. Over at Energy, where international nuclear risk is managed, it’s not clear there will be enough inspectors to track and locate black market uranium before terrorists do.
        
        Willful ignorance plays a role in these looming disasters. If your ambition is to maximize short-term gains without regard to the long-term cost, you are better off not knowing those costs. If you want to preserve your personal immunity to the hard problems, it’s better never to really understand those problems. There is upside to ignorance, and downside to knowledge. Knowledge makes life messier. It makes it a bit more difficult for a person who wishes to shrink the world to a worldview.
        
        If there are dangerous fools in this book, there are also heroes, unsung, of course. They are the linchpins of the system―those public servants whose knowledge, dedication, and proactivity keep the machinery running. Michael Lewis finds them, and he asks them what keeps them up at night.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/41ZTSdtYIlL._SX331_BO1,204,203,200_.jpg',
      authors: [
        {
          id: 1,
          name: 'Michael Lewis',
          about:
            `the best-selling author of The Undoing Project, Liar's Poker, Flash Boys, Moneyball, The Blind Side, Home Game and The Big Short, among other works, lives in Berkeley, California, with his wife, Tabitha Soren, and their three children.
            `
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'Tom Wolfe',
          review:
            `Saturation reporting, conceptual thinking of a high order, a rich sense of humor, and talent to burn.`
        },
        {
          id: 2,
          editor: 'John Gapper, Financial Times',
          review:
            `Michael Lewis has a spellbinding talent for finding emotional dramas in complex, highly technical subjects.`
        },
        {
          id: 3,
          editor: 'Pamela Paul, New York Times Book Review',
          review:
            `[Lewis] has a genius for unearthing tales of the counterintuitive.`
        },
        {
          id: 4,
          editor: 'Kyle Smith, Forbes',
          review:
            `The leading journalist of his generation.`
        },
        {
          id: 5,
          editor: 'John Lanchester, London Review of Books',
          review:
            `Lewis is the kind of writer who creates his own weather system.`
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
      name:
        `Measure What Matters: How Google, Bono, and the Gates Foundation Rock the World with OKRs`,
      description:
        `In the fall of 1999, John Doerr met with the founders of a start-up whom he'd just given $12.5 million, the biggest investment of his career. Larry Page and Sergey Brin had amazing technology, entrepreneurial energy, and sky-high ambitions, but no real business plan. For Google to change the world (or even to survive), Page and Brin had to learn how to make tough choices on priorities while keeping their team on track. They'd have to know when to pull the plug on losing propositions, to fail fast. And they needed timely, relevant data to track their progress—to measure what mattered.

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
          about:
            `is an engineer, acclaimed venture capitalist, and the chairman of Kleiner Perkins. He was an original investor and board member at Google and Amazon, helping to create more than half a million jobs and the world's second and third most valuable companies. He's passionate about encouraging leaders to reimagine the future, from transforming healthcare to advancing applications of machine learning. Outside of Kleiner Perkins, John works with social entrepreneurs for change in public education, the climate crisis, and global poverty. John serves on the board of the Obama Foundation and ONE.org.`
        }
      ],
      editorialReviews: [
        {
          id: 1,
          editor: 'Bill Gates',
          review:
            `I’d recommend John’s book for anyone interested in becoming a better manager.`
        },
        {
          id: 2,
          editor: 'Reid Hoffman, cofounder of LinkedIn and author of The Start-up of You',
          review:
            `Whether you're a seasoned CEO or a first-time entrepreneur, you'll find valuable lessons, tools, and inspiration in the pages of Measure What Matters. I'm glad John invested the time to share these ideas with the world.`
        },
        {
          id: 3,
          editor: 'Jim Collins, author of Good to Great',
          review:
            `“Measure What Matters deserves to be fully embraced by every person responsible for performance, in any walk of life. John Doerr makes Andy Grove a mentor to us all. If every team, leader, and individual applied OKRs with rigor and imagination, all sectors of society could see an exponential increase in productivity and innovation.`
        },
        {
          id: 4,
          editor: 'Sheryl Sandberg, Facebook COO and founder of LeanIn.org and OptionB.org',
          review:
            `John Doerr has taught a generation of entrepreneurs and philanthropists that execution is everything. Measure What Matters shows how any organization or team can aim high, move fast, and excel.`
        }
      ],
      length: 320,
      publisher: 'Portfolio',
      publishDate: 'April 24, 2018',
      isbn: '0525536221',
      shippingWeight: '15.2 ounces',
      dimensions: '5.7 x 1 x 8.6 inches',
      price: 27.00,
      discountPercentage: 34,
      url:
        'https://www.amazon.com/Measure-What-Matters-Google-Foundation/dp/0525536221/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1548164102&sr=1-16',
      rating: 4.6
    },
    {
      id: 16,
      categoryId: 8,
      name:
        `Rich Dad Poor Dad: What The Rich Teach Their Kids About Money - That The Poor And Middle Class Do Not!`,
      description:
        `In Rich Dad Poor Dad, the #1 Personal Finance book of all time, Robert Kiyosaki shares the story of his two dad: his real father, whom he calls his ‘poor dad,’ and the father of his best friend, the man who became his mentor and his ‘rich dad.’ One man was well educated and an employee all his life, the other’s education was “street smarts” over traditional classroom education and he took the path of entrepreneurship…a road that led him to become one of the wealthiest men in Hawaii. Robert’s poor dad struggled financially all his life, and these two dads—these very different points of view of money, investing, and employment—shaped Robert’s thinking about money.

        Robert has challenged and changed the way tens of millions of people, around the world, think about money and investing and he has become a global advocate for financial education and the path to financial freedom. Rich Dad Poor Dad (and the Rich Dad series it spawned) has sold over 36 million copies in English and translated editions around the world.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/515cbkoa-WL._SX408_BO1,204,203,200_.jpg',
      authors: [
        {
          id: 1,
          name: 'Robert T. Kiyosaki ',
          about:
            `developed his unique economic perspective from two very different influences - his two fathers. This text lays out Kiyosaki's philosophy and his relationship with money.`
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
      name:
        `The Total Money Makeover: Classic Edition: A Proven Plan for Financial Fitness`,
      description:
        `Okay, folks, do you want to turn those fat and flabby expenses into a well-toned budget? Do you want to transform your sad and skinny little bank account into a bulked-up cash machine? Then get with the program, people. There’s one sure way to whip your finances into shape, and that’s with The Total Money Makeover: Classic Edition.

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
          about:
            `is America’s trusted voice on money and business. His five New York Times bestselling books—Financial Peace, More Than Enough, The Total Money Makeover, EntreLeadership, and Smart Money Smart Kids—have sold more than 7 million copies combined. The Dave Ramsey Show is heard by more than 8 million listeners each week on more than 500 radio stations and iHeartRadio.`
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
      name:
        `Everyday Millionaires: How Ordinary People Built Extraordinary Wealth—and How You Can Too`,
      description:
        `In Everyday Millionaires, #1 national best-selling author Chris Hogan will show you how ordinary people built extraordinary wealth—and how you can too. You’ll learn how millionaires live on less than they make, avoid debt, invest, are disciplined and responsible!

        Our new book is based on the largest study EVER conducted on 10,000 U.S. millionaires—and the results will shock you! You’ll learn that building wealth has almost NOTHING to do with your income or your background! It doesn’t matter where you come from. It matters where you’re going.
        
        Most people think it takes crazy investing knowledge, a giant salary, a streak of luck, or a huge inheritance to become a millionaire. But that couldn’t be further from the truth! Here’s what you need to understand: if you’re willing to do the work—if you’ll follow the stuff we teach, if you’ll commit to our plan—then you CAN become a millionaire.`,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/5187XlmYeiL.jpg',
      authors: [
        {
          id: 1,
          name: 'Chris Hogan',
          about:
            `is the #1 national best-selling author and host of The Chris Hogan Show. A popular and dynamic speaker on the topics of personal finance, retirement and leadership, he helps people across the country develop successful strategies to manage their money in both their personal lives and businesses. Chris has served at Ramsey Solutions for more than a decade as a trusted financial coach and Ramsey Personality.`
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
    // {
    //   id: 19,
    //   categoryId: 2,
    //   name:
    //     ``,
    //   description:
    //     ``,
    //   imageUrl:
    //     '',
    //   authors: [
    //     {
    //       id: 1,
    //       name: '',
    //       about:
    //         ``
    //     }
    //   ],
    //   editorialReviews: [
    //     {
    //       id: 1,
    //       editor: '',
    //       review:
    //         ''
    //     }
    //   ],
    //   length: ,
    //   publisher: '',
    //   publishDate: '',
    //   isbn: '',
    //   shippingWeight: '',
    //   dimensions: '',
    //   price: ,
    //   discountPercentage: ,
    //   url:
    //     '',
    //   rating: 4.6
    // },
    // {
    //   id: 7,
    //   categoryId: 2,
    //   name:
    //     ``,
    //   description:
    //     ``,
    //   imageUrl:
    //     '',
    //   authors: [
    //     {
    //       id: 1,
    //       name: '',
    //       about:
    //         ``
    //     }
    //   ],
    //   editorialReviews: [
    //     {
    //       id: 1,
    //       editor: '',
    //       review:
    //         ''
    //     }
    //   ],
    //   length: ,
    //   publisher: '',
    //   publishDate: '',
    //   isbn: '',
    //   shippingWeight: '',
    //   dimensions: '',
    //   price: ,
    //   discountPercentage: ,
    //   url:
    //     '',
    //   rating: 4.6
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
