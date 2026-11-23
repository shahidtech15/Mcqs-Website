/**
 * CSS Prep Central - Half-Face Celebrity & Personality Guess Game Data
 * 36 Verified Portraits (Wikimedia Commons / Wikipedia) across 5 Categories
 */
const HALF_FACE_DATA = [
  {
    "id": "jinnah",
    "name": "Muhammad Ali Jinnah",
    "category": "pakistan",
    "country": "Pakistan",
    "role": "Founder of Pakistan & First Governor-General",
    "era": "1876–1948",
    "fact": "Known as Quaid-e-Azam; led the All-India Muslim League to establish Pakistan on August 14, 1947.",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Jinnah1945c.jpg/500px-Jinnah1945c.jpg"
  },
  {
    "id": "iqbal",
    "name": "Allama Muhammad Iqbal",
    "category": "pakistan",
    "country": "Pakistan",
    "role": "National Poet & Philosopher of Pakistan",
    "era": "1877–1938",
    "fact": "Delivered the landmark 1930 Allahabad Address envisioning an autonomous Muslim state in northwestern India.",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Muhammad_Iqbal_in_1931.jpg/500px-Muhammad_Iqbal_in_1931.jpg"
  },
  {
    "id": "abdus_salam",
    "name": "Dr. Abdus Salam",
    "category": "pakistan",
    "country": "Pakistan",
    "role": "Theoretical Physicist & Nobel Laureate",
    "era": "1926–1996",
    "fact": "First Pakistani and first Muslim scientist to win the Nobel Prize in Physics (1979) for electroweak unification.",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Abdus_Salam_1987.jpg/500px-Abdus_Salam_1987.jpg"
  },
  {
    "id": "malala",
    "name": "Malala Yousafzai",
    "category": "pakistan",
    "country": "Pakistan",
    "role": "Education Activist & Nobel Peace Laureate",
    "era": "Born 1997",
    "fact": "Became the youngest Nobel Prize laureate in history at age 17 in 2014 for advocating girls' education.",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/Malala_Yousafzai_2023_portrait_2x3.jpg/500px-Malala_Yousafzai_2023_portrait_2x3.jpg"
  },
  {
    "id": "imran_khan",
    "name": "Imran Khan",
    "category": "pakistan",
    "country": "Pakistan",
    "role": "1992 World Cup Captain & 22nd Prime Minister",
    "era": "Born 1952",
    "fact": "Captained Pakistan to its historic 1992 Cricket World Cup victory and founded Shaukat Khanum Cancer Hospital.",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Prime_Minister_Imran_Khan_Adresses_the_Forum_01.jpg/500px-Prime_Minister_Imran_Khan_Adresses_the_Forum_01.jpg"
  },
  {
    "id": "wasim_akram",
    "name": "Wasim Akram",
    "category": "pakistan",
    "country": "Pakistan",
    "role": "Cricket Legend (Sultan of Swing)",
    "era": "Born 1966",
    "fact": "First bowler in history to take 500 ODI wickets; named Man of the Match in the 1992 World Cup Final.",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f4/Wasim-akram-gesf-2018-7878.jpg/500px-Wasim-akram-gesf-2018-7878.jpg"
  },
  {
    "id": "nusrat",
    "name": "Nusrat Fateh Ali Khan",
    "category": "pakistan",
    "country": "Pakistan",
    "role": "Shahenshah-e-Qawwali & World Music Icon",
    "era": "1948–1997",
    "fact": "Introduced Sufi Qawwali to global audiences, collaborating with Peter Gabriel and Eddie Vedder.",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2d/Nusrat_Fateh_Ali_Khan_%281948-1997%29.jpg/500px-Nusrat_Fateh_Ali_Khan_%281948-1997%29.jpg"
  },
  {
    "id": "benazir",
    "name": "Benazir Bhutto",
    "category": "pakistan",
    "country": "Pakistan",
    "role": "11th & 13th Prime Minister of Pakistan",
    "era": "1953–2007",
    "fact": "First woman elected to head a democratic government in a Muslim-majority nation (1988).",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Oliver_Mark_-_Benazir_Bhutto%2C_Dubai_2006_%28cropped%29.jpg/500px-Oliver_Mark_-_Benazir_Bhutto%2C_Dubai_2006_%28cropped%29.jpg"
  },
  {
    "id": "edhi",
    "name": "Abdul Sattar Edhi",
    "category": "pakistan",
    "country": "Pakistan",
    "role": "Humanitarian & Founder of Edhi Foundation",
    "era": "1928–2016",
    "fact": "Built the world's largest volunteer ambulance network and received the Ramon Magsaysay Award (1986).",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6e/Abdul_Sattar_Edhi.jpg/500px-Abdul_Sattar_Edhi.jpg"
  },
  {
    "id": "srk",
    "name": "Shah Rukh Khan",
    "category": "entertainment",
    "country": "India",
    "role": "Actor & Global Cinema Icon",
    "era": "Born 1965",
    "fact": "Widely known as the \"King of Bollywood\"; honored with France's Legion of Honour and Padma Shri.",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg/500px-Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg"
  },
  {
    "id": "kalam",
    "name": "A. P. J. Abdul Kalam",
    "category": "science",
    "country": "India",
    "role": "Aerospace Scientist & 11th President of India",
    "era": "1931–2015",
    "fact": "Known as the \"Missile Man of India\" for his leadership in India's space launch vehicle and defense programs.",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6e/A._P._J._Abdul_Kalam.jpg/500px-A._P._J._Abdul_Kalam.jpg"
  },
  {
    "id": "sachin",
    "name": "Sachin Tendulkar",
    "category": "sports",
    "country": "India",
    "role": "Cricket Legend (Master Blaster)",
    "era": "Born 1973",
    "fact": "Highest run-scorer in international cricket history and the only player to score 100 international centuries.",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/The_cricket_legend_Sachin_Tendulkar_at_the_Oval_Maidan_in_Mumbai_During_the_Duke_and_Duchess_of_Cambridge_Visit%2826271019082%29.jpg/500px-The_cricket_legend_Sachin_Tendulkar_at_the_Oval_Maidan_in_Mumbai_During_the_Duke_and_Duchess_of_Cambridge_Visit%2826271019082%29.jpg"
  },
  {
    "id": "mandela",
    "name": "Nelson Mandela",
    "category": "leaders",
    "country": "South Africa",
    "role": "Anti-Apartheid Leader & President of South Africa",
    "era": "1918–2013",
    "fact": "Spent 27 years in prison before becoming South Africa's first Black president and winning the 1993 Nobel Peace Prize.",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Nelson_Mandela_1994.jpg/500px-Nelson_Mandela_1994.jpg"
  },
  {
    "id": "lincoln",
    "name": "Abraham Lincoln",
    "category": "leaders",
    "country": "United States",
    "role": "16th President of the United States",
    "era": "1809–1865",
    "fact": "Issued the Emancipation Proclamation (1863) and delivered the Gettysburg Address preserving the American Union.",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg/500px-Abraham_Lincoln_O-77_matte_collodion_print.jpg"
  },
  {
    "id": "churchill",
    "name": "Winston Churchill",
    "category": "leaders",
    "country": "United Kingdom",
    "role": "Wartime Prime Minister & Nobel Laureate",
    "era": "1874–1965",
    "fact": "Led Britain through World War II and won the 1953 Nobel Prize in Literature for his historical writings.",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Sir_Winston_Churchill_-_19086236948_%28restored%29.jpg/500px-Sir_Winston_Churchill_-_19086236948_%28restored%29.jpg"
  },
  {
    "id": "mlk",
    "name": "Martin Luther King Jr.",
    "category": "leaders",
    "country": "United States",
    "role": "Civil Rights Leader & Nobel Peace Laureate",
    "era": "1929–1968",
    "fact": "Delivered the iconic \"I Have a Dream\" speech in 1963; championed nonviolent civil rights reform.",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/Martin_Luther_King%2C_Jr._and_Lyndon_Johnson_%28cropped%29.jpg/500px-Martin_Luther_King%2C_Jr._and_Lyndon_Johnson_%28cropped%29.jpg"
  },
  {
    "id": "gandhi",
    "name": "Mahatma Gandhi",
    "category": "leaders",
    "country": "India",
    "role": "Leader of the Indian Independence Movement",
    "era": "1869–1948",
    "fact": "Pioneered Satyagraha (nonviolent resistance); his birthday (October 2) is observed as International Day of Non-Violence.",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg/500px-Mahatma-Gandhi%2C_studio%2C_1931.jpg"
  },
  {
    "id": "obama",
    "name": "Barack Obama",
    "category": "leaders",
    "country": "United States",
    "role": "44th President of the United States",
    "era": "Born 1961",
    "fact": "First African-American U.S. President (2009–2017) and recipient of the 2009 Nobel Peace Prize.",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/500px-President_Barack_Obama.jpg"
  },
  {
    "id": "merkel",
    "name": "Angela Merkel",
    "category": "leaders",
    "country": "Germany",
    "role": "Former Chancellor of Germany (2005–2021)",
    "era": "Born 1954",
    "fact": "First female Chancellor of Germany; trained as a quantum chemist before leading Europe's largest economy for 16 years.",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0f/Angela_Merkel_2019_cropped.jpg/500px-Angela_Merkel_2019_cropped.jpg"
  },
  {
    "id": "elizabeth",
    "name": "Queen Elizabeth II",
    "category": "leaders",
    "country": "United Kingdom",
    "role": "Longest-Reigning British Monarch",
    "era": "1926–2022",
    "fact": "Reigned for 70 years and 214 days (1952–2022), serving as Head of the Commonwealth across 15 prime ministers.",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/Queen_Elizabeth_II_official_portrait_for_1959_tour_%28retouched%29_%28cropped%29_%283-to-4_aspect_ratio%29.jpg/500px-Queen_Elizabeth_II_official_portrait_for_1959_tour_%28retouched%29_%28cropped%29_%283-to-4_aspect_ratio%29.jpg"
  },
  {
    "id": "einstein",
    "name": "Albert Einstein",
    "category": "science",
    "country": "Germany / USA",
    "role": "Theoretical Physicist & Relativity Pioneer",
    "era": "1879–1955",
    "fact": "Formulated E=mc² and General Relativity; won the 1921 Nobel Prize in Physics for explaining the photoelectric effect.",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/Albert_Einstein_Head_cleaned.jpg/500px-Albert_Einstein_Head_cleaned.jpg"
  },
  {
    "id": "curie",
    "name": "Marie Curie",
    "category": "science",
    "country": "Poland / France",
    "role": "Physicist, Chemist & Pioneer of Radioactivity",
    "era": "1867–1934",
    "fact": "Only person in history to win Nobel Prizes in two different sciences — Physics (1903) and Chemistry (1911).",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c._1920s.jpg/500px-Marie_Curie_c._1920s.jpg"
  },
  {
    "id": "tesla",
    "name": "Nikola Tesla",
    "category": "science",
    "country": "Serbia / USA",
    "role": "Electrical Engineer & Inventor of AC Power",
    "era": "1856–1943",
    "fact": "Designed the modern Alternating Current (AC) induction motor and polyphase power distribution system.",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/Tesla_circa_1890.jpeg/500px-Tesla_circa_1890.jpeg"
  },
  {
    "id": "hawking",
    "name": "Stephen Hawking",
    "category": "science",
    "country": "United Kingdom",
    "role": "Cosmologist & Author of A Brief History of Time",
    "era": "1942–2018",
    "fact": "Predicted black holes emit thermal radiation (Hawking Radiation) and held the Lucasian Chair at Cambridge.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/eb/Stephen_Hawking.StarChild.jpg"
  },
  {
    "id": "newton",
    "name": "Isaac Newton",
    "category": "science",
    "country": "England",
    "role": "Mathematician, Physicist & Astronomer",
    "era": "1643–1727",
    "fact": "Published Principia Mathematica (1687), establishing the laws of motion, universal gravitation, and calculus.",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Portrait_of_Sir_Isaac_Newton%2C_1689_%28brightened%29.jpg/500px-Portrait_of_Sir_Isaac_Newton%2C_1689_%28brightened%29.jpg"
  },
  {
    "id": "darwin",
    "name": "Charles Darwin",
    "category": "science",
    "country": "England",
    "role": "Naturalist & Author of On the Origin of Species",
    "era": "1809–1882",
    "fact": "Voyaged aboard HMS Beagle to the Galápagos Islands, formulating the theory of evolution by natural selection (1859).",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/Charles_Darwin_seated_crop.jpg/500px-Charles_Darwin_seated_crop.jpg"
  },
  {
    "id": "musk",
    "name": "Elon Musk",
    "category": "science",
    "country": "South Africa / USA",
    "role": "Tech Entrepreneur (SpaceX & Tesla)",
    "era": "Born 1971",
    "fact": "Led the development of reusable orbital rockets (Falcon 9) and mainstream electric vehicles.",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Elon_Musk_-_54820081119_%283x4_cropped%2C_Rule_of_thirds%29.jpg/500px-Elon_Musk_-_54820081119_%283x4_cropped%2C_Rule_of_thirds%29.jpg"
  },
  {
    "id": "gates",
    "name": "Bill Gates",
    "category": "science",
    "country": "United States",
    "role": "Co-Founder of Microsoft & Philanthropist",
    "era": "Born 1955",
    "fact": "Co-founded Microsoft in 1975 and established the Gates Foundation supporting global health and polio eradication.",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/Bill_Gates_at_the_European_Commission_-_P067383-987995_%28cropped%29_5.jpg/500px-Bill_Gates_at_the_European_Commission_-_P067383-987995_%28cropped%29_5.jpg"
  },
  {
    "id": "ronaldo",
    "name": "Cristiano Ronaldo",
    "category": "sports",
    "country": "Portugal",
    "role": "Football Icon & 5x Ballon d'Or Winner",
    "era": "Born 1985",
    "fact": "All-time leading goalscorer in men's international football and UEFA Champions League history.",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/26/Cristiano_Ronaldo_Croatia_v_Portugal_2_July_2026-075_%28cropped%29.jpg/500px-Cristiano_Ronaldo_Croatia_v_Portugal_2_July_2026-075_%28cropped%29.jpg"
  },
  {
    "id": "messi",
    "name": "Lionel Messi",
    "category": "sports",
    "country": "Argentina",
    "role": "Football Legend & 8x Ballon d'Or Winner",
    "era": "Born 1987",
    "fact": "Captained Argentina to victory at the 2022 FIFA World Cup in Qatar and holds a record 8 Ballon d'Or awards.",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Leo_Messi_Argentina_v_Egypt_7_July_2026-1.jpg/500px-Leo_Messi_Argentina_v_Egypt_7_July_2026-1.jpg"
  },
  {
    "id": "ali",
    "name": "Muhammad Ali",
    "category": "sports",
    "country": "United States",
    "role": "3x World Heavyweight Boxing Champion",
    "era": "1942–2016",
    "fact": "Nicknamed \"The Greatest\"; won Olympic gold in 1960 and became a global symbol of courage and civil rights.",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Muhammad_Ali_NYWTS.jpg/500px-Muhammad_Ali_NYWTS.jpg"
  },
  {
    "id": "federer",
    "name": "Roger Federer",
    "category": "sports",
    "country": "Switzerland",
    "role": "Tennis Legend & 20x Grand Slam Champion",
    "era": "Born 1981",
    "fact": "Won a record 8 Wimbledon singles titles and held the ATP World No. 1 ranking for 237 consecutive weeks.",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/Roger_Federer_2015_%28cropped%29.jpg/500px-Roger_Federer_2015_%28cropped%29.jpg"
  },
  {
    "id": "mj",
    "name": "Michael Jackson",
    "category": "entertainment",
    "country": "United States",
    "role": "King of Pop & Cultural Icon",
    "era": "1958–2009",
    "fact": "His 1982 album Thriller remains the best-selling album of all time and won a record 8 Grammy Awards in one night.",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Michael_Jackson_1983_%283x4_cropped%29_%28contrast%29.jpg/500px-Michael_Jackson_1983_%283x4_cropped%29_%28contrast%29.jpg"
  },
  {
    "id": "taylor",
    "name": "Taylor Swift",
    "category": "entertainment",
    "country": "United States",
    "role": "Singer-Songwriter & 14x Grammy Winner",
    "era": "Born 1989",
    "fact": "First artist in history to win the Grammy Award for Album of the Year four times; named Time Person of the Year 2023.",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b1/Taylor_Swift_at_the_2023_MTV_Video_Music_Awards_%283%29.png/500px-Taylor_Swift_at_the_2023_MTV_Video_Music_Awards_%283%29.png"
  },
  {
    "id": "dicaprio",
    "name": "Leonardo DiCaprio",
    "category": "entertainment",
    "country": "United States",
    "role": "Academy Award-Winning Actor & Climate Advocate",
    "era": "Born 1974",
    "fact": "Won the Best Actor Oscar for The Revenant (2015) and serves as a UN Messenger of Peace on Climate Change.",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2d/LeoPTABFI191125-28_%28cropped%29.jpg/500px-LeoPTABFI191125-28_%28cropped%29.jpg"
  },
  {
    "id": "chaplin",
    "name": "Charlie Chaplin",
    "category": "entertainment",
    "country": "United Kingdom",
    "role": "Silent Film Pioneer, Actor & Filmmaker",
    "era": "1889–1977",
    "fact": "Created the iconic \"The Tramp\" persona and co-founded United Artists; awarded an Honorary Oscar in 1972.",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Charlie_Chaplin_portrait_Getty_1739411952.jpg/500px-Charlie_Chaplin_portrait_Getty_1739411952.jpg"
  }
];

if (typeof window !== 'undefined') {
  window.HALF_FACE_DATA = HALF_FACE_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = HALF_FACE_DATA;
}
