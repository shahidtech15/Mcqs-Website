/**
 * Comprehensive English Language Preparation Dataset
 * Covers: Daily Vocabulary (56 words / 7-day cycle + Weekly Test),
 * One Word Substitution (45), Topic-wise Synonyms & Antonyms MCQs (24),
 * Idioms & Phrases (36), Grammar (Tenses, Prepositions, Articles),
 * Sentence Correction (20), Active & Passive Voice (15),
 * Direct & Indirect Speech (15), Reading Comprehension (3 passages),
 * Precis Writing (3 exercises), and Essay Writing Outlines (6 topics).
 */
window.ENGLISH_PREP_DATA = {
    dailyVocabPool: [
        // Day 1 (8 words)
        { word: "Ubiquitous", pos: "adj.", pron: "/juːˈbɪk.wɪ.təs/", meaning: "Present, appearing, or found everywhere at the same time.", synonyms: ["Omnipresent", "Pervasive", "Universal"], antonyms: ["Rare", "Scarce"], example: "Digital payment platforms have become ubiquitous across urban Pakistan.", topic: "Academic" },
        { word: "Ephemeral", pos: "adj.", pron: "/ɪˈfem.ər.əl/", meaning: "Lasting for a very short time; transitory.", synonyms: ["Transient", "Fleeting", "Momentary"], antonyms: ["Permanent", "Enduring"], example: "Populist enthusiasm often proves ephemeral without institutional reform.", topic: "Academic" },
        { word: "Pragmatic", pos: "adj.", pron: "/præɡˈmæt.ɪk/", meaning: "Dealing with things sensibly and realistically based on practical considerations.", synonyms: ["Practical", "Realistic", "Sensible"], antonyms: ["Idealistic", "Impractical"], example: "The central bank adopted a pragmatic monetary policy to curb inflation.", topic: "Governance" },
        { word: "Mitigate", pos: "verb", pron: "/ˈmɪt.ɪ.ɡeɪt/", meaning: "To make something less severe, serious, or painful.", synonyms: ["Alleviate", "Assuage", "Diminish"], antonyms: ["Aggravate", "Exacerbate"], example: "Early flood warning systems can significantly mitigate loss of life.", topic: "Governance" },
        { word: "Laconic", pos: "adj.", pron: "/ləˈkɒn.ɪk/", meaning: "Using very few words; concise to the point of seeming brusque.", synonyms: ["Terse", "Succinct", "Pithy"], antonyms: ["Verbose", "Loquacious"], example: "Her laconic reply ended the heated parliamentary debate immediately.", topic: "Communication" },
        { word: "Equivocal", pos: "adj.", pron: "/ɪˈkwɪv.ə.kəl/", meaning: "Open to more than one interpretation; ambiguous or uncertain.", synonyms: ["Ambiguous", "Vague", "Evading"], antonyms: ["Unequivocal", "Explicit"], example: "The committee issued an equivocal statement that satisfied neither side.", topic: "Communication" },
        { word: "Magnanimous", pos: "adj.", pron: "/mæɡˈnæn.ɪ.məs/", meaning: "Generous or forgiving, especially toward a rival or less powerful person.", synonyms: ["Benevolent", "Charitable", "Noble"], antonyms: ["Petty", "Vindictive"], example: "In a magnanimous gesture, the victorious leader invited the opposition to dialogue.", topic: "Character" },
        { word: "Recalcitrant", pos: "adj.", pron: "/rɪˈkæl.sɪ.trənt/", meaning: "Having an obstinately uncooperative attitude toward authority or discipline.", synonyms: ["Defiant", "Refractory", "Obstinate"], antonyms: ["Compliant", "Amenable"], example: "Tax authorities struggled to bring recalcitrant sectors into the documented economy.", topic: "Governance" },

        // Day 2 (8 words)
        { word: "Alacrity", pos: "noun", pron: "/əˈlæk.rə.ti/", meaning: "Brisk and cheerful readiness; eager willingness.", synonyms: ["Eagerness", "Promptness", "Zeal"], antonyms: ["Reluctance", "Apathy"], example: "The rescue teams responded with remarkable alacrity after the earthquake.", topic: "Character" },
        { word: "Ameliorate", pos: "verb", pron: "/əˈmiː.li.ə.reɪt/", meaning: "To make something bad or unsatisfactory better.", synonyms: ["Improve", "Enhance", "Rectify"], antonyms: ["Worsen", "Deteriorate"], example: "Targeted social safety nets help ameliorate poverty in drought-hit districts.", topic: "Governance" },
        { word: "Cacophony", pos: "noun", pron: "/kəˈkɒf.ə.ni/", meaning: "A harsh, discordant mixture of sounds.", synonyms: ["Din", "Discord", "Clamor"], antonyms: ["Euphony", "Harmony"], example: "A cacophony of car horns echoed through the congested intersection.", topic: "Academic" },
        { word: "Capricious", pos: "adj.", pron: "/kəˈprɪʃ.əs/", meaning: "Given to sudden and unaccountable changes of mood or behavior.", synonyms: ["Fickle", "Erratic", "Whimsical"], antonyms: ["Steadfast", "Consistent"], example: "Foreign investors avoid markets governed by capricious regulatory policies.", topic: "Character" },
        { word: "Cogent", pos: "adj.", pron: "/ˈkəʊ.dʒənt/", meaning: "Clear, logical, and convincing.", synonyms: ["Compelling", "Persuasive", "Sound"], antonyms: ["Weak", "Unconvincing"], example: "The counsel presented a cogent constitutional argument before the Supreme Court.", topic: "Communication" },
        { word: "Deference", pos: "noun", pron: "/ˈdef.ər.əns/", meaning: "Polite submission and respect toward another person's judgment or authority.", synonyms: ["Respect", "Reverence", "Esteem"], antonyms: ["Disrespect", "Contempt"], example: "Junior officers listened in quiet deference to the senior jurist's remarks.", topic: "Character" },
        { word: "Disparate", pos: "adj.", pron: "/ˈdɪs.pər.ət/", meaning: "Essentially different in kind; not able to be compared.", synonyms: ["Divergent", "Distinct", "Contrasting"], antonyms: ["Similar", "Homogeneous"], example: "The coalition brought together disparate political factions for electoral reform.", topic: "Academic" },
        { word: "Enervate", pos: "verb", pron: "/ˈen.ə.veɪt/", meaning: "To make someone feel drained of energy or vitality; weaken.", synonyms: ["Exhaust", "Debilitate", "Sap"], antonyms: ["Invigorate", "Energize"], example: "Prolonged circular debt continues to enervate the national power sector.", topic: "Academic" },

        // Day 3 (8 words)
        { word: "Exacerbate", pos: "verb", pron: "/ɪɡˈzæs.ə.beɪt/", meaning: "To make a problem, bad situation, or negative feeling worse.", synonyms: ["Aggravate", "Intensify", "Compound"], antonyms: ["Alleviate", "Mitigate"], example: "Unplanned urban sprawl will exacerbate water scarcity in metropolitan cities.", topic: "Governance" },
        { word: "Fastidious", pos: "adj.", pron: "/fæˈstɪd.i.əs/", meaning: "Very attentive to and concerned about accuracy and detail.", synonyms: ["Meticulous", "Scrupulous", "Punctilious"], antonyms: ["Careless", "Sloppy"], example: "Auditors must remain fastidious when verifying public procurement records.", topic: "Character" },
        { word: "Garrulous", pos: "adj.", pron: "/ˈɡær.ə.ləs/", meaning: "Excessively talkative, especially on trivial matters.", synonyms: ["Loquacious", "Verbose", "Chatty"], antonyms: ["Taciturn", "Reticent"], example: "The garrulous commentator spent twenty minutes without answering the question.", topic: "Communication" },
        { word: "Harbinger", pos: "noun", pron: "/ˈhɑː.bɪn.dʒər/", meaning: "A person or thing that announces or signals the approach of another.", synonyms: ["Forerunner", "Herald", "Precursor"], antonyms: ["Aftermath", "Consequence"], example: "Rising glacier melt rates are a grim harbinger of severe monsoon floods.", topic: "Academic" },
        { word: "Iconoclast", pos: "noun", pron: "/aɪˈkɒn.ə.klæst/", meaning: "A person who attacks or criticizes cherished beliefs or institutions.", synonyms: ["Dissenter", "Rebel", "Nonconformist"], antonyms: ["Conformist", "Traditionalist"], example: "As an economic iconoclast, she challenged decades of protectionist orthodoxy.", topic: "Character" },
        { word: "Impecunious", pos: "adj.", pron: "/ˌɪm.pɪˈkjuː.ni.əs/", meaning: "Having little or no money; penniless.", synonyms: ["Indigent", "Destitute", "Impoverished"], antonyms: ["Affluent", "Wealthy"], example: "Merit scholarships open doors for brilliant yet impecunious students.", topic: "Academic" },
        { word: "Inculcate", pos: "verb", pron: "/ˈɪŋ.kʌl.keɪt/", meaning: "To instill an idea, attitude, or habit by persistent instruction.", synonyms: ["Instill", "Imbue", "Implant"], antonyms: ["Eradicate", "Remove"], example: "Primary curricula should inculcate critical thinking and civic responsibility.", topic: "Academic" },
        { word: "Intransigent", pos: "adj.", pron: "/ɪnˈtræn.sɪ.dʒənt/", meaning: "Unwilling or refusing to change one's views or to agree about something.", synonyms: ["Unyielding", "Inflexible", "Adamant"], antonyms: ["Flexible", "Compromising"], example: "An intransigent stance on border tariffs stalled the regional trade summit.", topic: "Governance" },

        // Day 4 (8 words)
        { word: "Juxtapose", pos: "verb", pron: "/ˌdʒʌk.stəˈpəʊz/", meaning: "To place or deal with close together for contrasting effect.", synonyms: ["Contrast", "Compare", "Collocate"], antonyms: ["Separate", "Isolate"], example: "The report juxtaposes rising literacy rates with persistent graduate unemployment.", topic: "Academic" },
        { word: "Lethargic", pos: "adj.", pron: "/ləˈθɑː.dʒɪk/", meaning: "Affected by lethargy; sluggish and apathetic.", synonyms: ["Sluggish", "Torpid", "Listless"], antonyms: ["Energetic", "Vigorous"], example: "A lethargic bureaucracy delays essential infrastructure projects by years.", topic: "Character" },
        { word: "Loquacious", pos: "adj.", pron: "/ləˈkweɪ.ʃəs/", meaning: "Tending to talk a great deal; talkative.", synonyms: ["Garrulous", "Voluble", "Talkative"], antonyms: ["Reticent", "Laconic"], example: "Unlike his loquacious colleagues, the diplomat spoke only when necessary.", topic: "Communication" },
        { word: "Meticulous", pos: "adj.", pron: "/məˈtɪk.jʊ.ləs/", meaning: "Showing great attention to detail; very careful and precise.", synonyms: ["Thorough", "Precise", "Fastidious"], antonyms: ["Negligent", "Sloppy"], example: "Meticulous forensic investigation is essential for securing convictions in court.", topic: "Character" },
        { word: "Nefarious", pos: "adj.", pron: "/nəˈfeə.ri.əs/", meaning: "Wicked, villainous, or criminal in nature.", synonyms: ["Wicked", "Heinous", "Sinister"], antonyms: ["Virtuous", "Honorable"], example: "Cybercrime units dismantled a nefarious network involved in financial fraud.", topic: "Governance" },
        { word: "Obfuscate", pos: "verb", pron: "/ˈɒb.fʌs.keɪt/", meaning: "To render obscure, unclear, or unintelligible deliberately.", synonyms: ["Obscure", "Cloud", "Muddle"], antonyms: ["Clarify", "Elucidate"], example: "Excessive legal jargon should not be used to obfuscate public accountability.", topic: "Communication" },
        { word: "Ostensible", pos: "adj.", pron: "/ɒsˈten.sə.bəl/", meaning: "Stated or appearing to be true, but not necessarily so.", synonyms: ["Apparent", "Seeming", "Purported"], antonyms: ["Genuine", "Actual"], example: "The ostensible purpose of the bill was security, though critics saw other motives.", topic: "Governance" },
        { word: "Panacea", pos: "noun", pron: "/ˌpæn.əˈsiː.ə/", meaning: "A solution or remedy for all difficulties or diseases.", synonyms: ["Cure-all", "Elixir", "Universal remedy"], antonyms: ["Affliction", "Bane"], example: "Technology alone is not a panacea for deep-rooted governance failures.", topic: "Academic" },

        // Day 5 (8 words)
        { word: "Parsimonious", pos: "adj.", pron: "/ˌpɑː.sɪˈməʊ.ni.əs/", meaning: "Very unwilling to spend money or use resources; excessively frugal.", synonyms: ["Stingy", "Miserly", "Frugal"], antonyms: ["Generous", "Extravagant"], example: "A parsimonious allocation to public health leaves rural clinics understaffed.", topic: "Governance" },
        { word: "Perfidious", pos: "adj.", pron: "/pəˈfɪd.i.əs/", meaning: "Deceitful and untrustworthy; guilty of betrayal.", synonyms: ["Treacherous", "Disloyal", "Duplicitous"], antonyms: ["Faithful", "Loyal"], example: "History remembers perfidious allies who abandoned treaties in times of crisis.", topic: "Character" },
        { word: "Perspicacious", pos: "adj.", pron: "/ˌpɜː.spɪˈkeɪ.ʃəs/", meaning: "Having a ready insight into and understanding of things; shrewd.", synonyms: ["Astute", "Discerning", "Sagacious"], antonyms: ["Obtuse", "Unobservant"], example: "Her perspicacious analysis predicted the sovereign debt crisis two years early.", topic: "Character" },
        { word: "Placate", pos: "verb", pron: "/pləˈkeɪt/", meaning: "To make someone less angry or hostile; appease.", synonyms: ["Appease", "Pacify", "Mollify"], antonyms: ["Provoke", "Antagonize"], example: "The ministry announced fuel rebates to placate protesting transporters.", topic: "Governance" },
        { word: "Precarious", pos: "adj.", pron: "/prɪˈkeə.ri.əs/", meaning: "Not securely held or in position; dependent on chance; uncertain.", synonyms: ["Unstable", "Perilous", "Insecure"], antonyms: ["Secure", "Stable"], example: "Low foreign exchange reserves left the economy in a precarious position.", topic: "Academic" },
        { word: "Proliferate", pos: "verb", pron: "/prəˈlɪf.ər.eɪt/", meaning: "To increase rapidly in number; multiply.", synonyms: ["Multiply", "Mushroom", "Escalate"], antonyms: ["Dwindle", "Decline"], example: "AI-powered educational tools have begun to proliferate across universities.", topic: "Academic" },
        { word: "Quixotic", pos: "adj.", pron: "/kwɪkˈsɒt.ɪk/", meaning: "Exceedingly idealistic; unrealistic and impractical.", synonyms: ["Idealistic", "Utopian", "Visionary"], antonyms: ["Pragmatic", "Realistic"], example: "Expecting overnight tax compliance without digitization is a quixotic ambition.", topic: "Character" },
        { word: "Reticent", pos: "adj.", pron: "/ˈret.ɪ.sənt/", meaning: "Not revealing one's thoughts or feelings readily; reserved.", synonyms: ["Reserved", "Taciturn", "Guarded"], antonyms: ["Loquacious", "Forthcoming"], example: "Officials remained reticent about the confidential terms of the trade pact.", topic: "Communication" },

        // Day 6 (8 words)
        { word: "Sagacious", pos: "adj.", pron: "/səˈɡeɪ.ʃəs/", meaning: "Having or showing keen mental discernment and good judgment; wise.", synonyms: ["Wise", "Judicious", "Astute"], antonyms: ["Foolish", "Imprudent"], example: "Sagacious leadership requires balancing short-term relief with long-term stability.", topic: "Character" },
        { word: "Sanguine", pos: "adj.", pron: "/ˈsæŋ.ɡwɪn/", meaning: "Optimistic or positive, especially in an apparently bad or difficult situation.", synonyms: ["Optimistic", "Hopeful", "Confident"], antonyms: ["Pessimistic", "Gloomy"], example: "Exporters remain sanguine about textile demand recovering in the next quarter.", topic: "Character" },
        { word: "Spurious", pos: "adj.", pron: "/ˈspjʊə.ri.əs/", meaning: "Not being what it purports to be; false or fake.", synonyms: ["Bogus", "Counterfeit", "Specious"], antonyms: ["Authentic", "Genuine"], example: "Fact-checkers exposed several spurious statistics circulating on social media.", topic: "Communication" },
        { word: "Sycophant", pos: "noun", pron: "/ˈsɪk.ə.fænt/", meaning: "A person who acts obsequiously toward someone important to gain advantage.", synonyms: ["Flatterer", "Toady", "Yes-man"], antonyms: ["Critic", "Detractor"], example: "Effective leaders surround themselves with candid advisors rather than sycophants.", topic: "Character" },
        { word: "Taciturn", pos: "adj.", pron: "/ˈtæs.ɪ.tɜːn/", meaning: "Reserved or uncommunicative in speech; saying little.", synonyms: ["Reticent", "Silent", "Laconic"], antonyms: ["Garrulous", "Talkative"], example: "Though taciturn in meetings, his written policy briefs were extraordinarily clear.", topic: "Communication" },
        { word: "Tenacious", pos: "adj.", pron: "/təˈneɪ.ʃəs/", meaning: "Tending to keep a firm hold of something; persistent and determined.", synonyms: ["Persistent", "Resolute", "Steadfast"], antonyms: ["Irresolute", "Yielding"], example: "Tenacious preparation over six months helped her top the CSS examination.", topic: "Character" },
        { word: "Trepidation", pos: "noun", pron: "/ˌtrep.ɪˈdeɪ.ʃən/", meaning: "A feeling of fear or agitation about something that may happen.", synonyms: ["Apprehension", "Anxiety", "Dread"], antonyms: ["Composure", "Confidence"], example: "Small businesses watched the upcoming tariff announcement with trepidation.", topic: "Character" },
        { word: "Venerable", pos: "adj.", pron: "/ˈven.ər.ə.bəl/", meaning: "Accorded a great deal of respect, especially because of age, wisdom, or character.", synonyms: ["Revered", "Respected", "Esteemed"], antonyms: ["Disreputable", "Contemptible"], example: "The venerable university has educated civil servants for over a century.", topic: "Academic" },

        // Day 7 (8 words)
        { word: "Veracity", pos: "noun", pron: "/vəˈræs.ə.ti/", meaning: "Conformity to facts; accuracy and habitual truthfulness.", synonyms: ["Truthfulness", "Accuracy", "Candor"], antonyms: ["Deceit", "Mendacity"], example: "Journalists must verify the veracity of primary documents before publication.", topic: "Communication" },
        { word: "Vindicate", pos: "verb", pron: "/ˈvɪn.dɪ.keɪt/", meaning: "To clear someone of blame or suspicion; show or prove to be right.", synonyms: ["Exonerate", "Justify", "Absolve"], antonyms: ["Incriminate", "Condemn"], example: "Independent audit findings completely vindicated the project director.", topic: "Governance" },
        { word: "Vociferous", pos: "adj.", pron: "/vəˈsɪf.ər.əs/", meaning: "Expressing or characterized by vehement opinions; loud and forceful.", synonyms: ["Clamorous", "Outspoken", "Vehement"], antonyms: ["Quiet", "Subdued"], example: "Civil society groups raised vociferous objections to the proposed censorship clause.", topic: "Communication" },
        { word: "Zealous", pos: "adj.", pron: "/ˈzel.əs/", meaning: "Having or showing great energy or enthusiasm in pursuit of a cause.", synonyms: ["Fervent", "Ardent", "Passionate"], antonyms: ["Apathetic", "Indifferent"], example: "Zealous enforcement of environmental laws restored the polluted river basin.", topic: "Character" },
        { word: "Abstemious", pos: "adj.", pron: "/æbˈstiː.mi.əs/", meaning: "Not self-indulgent, especially when eating and drinking; moderate.", synonyms: ["Temperate", "Moderate", "Frugal"], antonyms: ["Indulgent", "Gluttonous"], example: "His abstemious lifestyle reflected strict personal discipline.", topic: "Character" },
        { word: "Acumen", pos: "noun", pron: "/ˈæk.jʊ.mən/", meaning: "The ability to make good judgments and quick decisions in a particular domain.", synonyms: ["Shrewdness", "Astuteness", "Insight"], antonyms: ["Ignorance", "Ineptitude"], example: "Her diplomatic acumen helped defuse tensions during the bilateral talks.", topic: "Governance" },
        { word: "Anachronism", pos: "noun", pron: "/əˈnæk.rə.nɪ.zəm/", meaning: "A thing belonging to a period other than that in which it exists; outdated practice.", synonyms: ["Relic", "Throwback", "Outdatedness"], antonyms: ["Innovation", "Modernity"], example: "Paper-only land registries have become an anachronism in the digital era.", topic: "Academic" },
        { word: "Assiduous", pos: "adj.", pron: "/əˈsɪdʒ.u.əs/", meaning: "Showing great care, attention, and perseverance.", synonyms: ["Diligent", "Industrious", "Sedulous"], antonyms: ["Lazy", "Negligent"], example: "Assiduous note-taking during editorial reading builds strong essay content.", topic: "Character" }
    ],

    oneWordSubstitutions: [
        // Governance & Law
        { term: "Plutocracy", phrase: "Government by the wealthy or rich class", category: "Governance & Law" },
        { term: "Oligarchy", phrase: "Government by a small group of powerful people", category: "Governance & Law" },
        { term: "Theocracy", phrase: "Government ruled by religious leaders or divine law", category: "Governance & Law" },
        { term: "Autocracy", phrase: "A system of government by one person with absolute power", category: "Governance & Law" },
        { term: "Bureaucracy", phrase: "Government run by unelected state officials and administrative departments", category: "Governance & Law" },
        { term: "Anarchy", phrase: "Absence of government and absolute disorder in a state", category: "Governance & Law" },
        { term: "Amnesty", phrase: "An official pardon granted to people convicted of political offenses", category: "Governance & Law" },
        { term: "Extradition", phrase: "Handing over an accused or convicted criminal to another country", category: "Governance & Law" },
        { term: "Perjury", phrase: "The offense of willfully telling an untruth in a court after taking an oath", category: "Governance & Law" },
        { term: "Nepotism", phrase: "Favoritism granted to relatives or friends in appointments and jobs", category: "Governance & Law" },
        { term: "Sinecure", phrase: "A position requiring little or no work but giving the holder status or financial benefit", category: "Governance & Law" },
        { term: "Plebiscite", phrase: "Direct vote of all members of an electorate on an important public question", category: "Governance & Law" },

        // People & Behavior
        { term: "Philanthropist", phrase: "A person who loves humankind and promotes human welfare through charity", category: "People & Behavior" },
        { term: "Misanthrope", phrase: "A person who dislikes humankind and avoids human society", category: "People & Behavior" },
        { term: "Altruist", phrase: "A person unselfishly concerned for or devoted to the welfare of others", category: "People & Behavior" },
        { term: "Stoic", phrase: "A person who endures pain or hardship without showing feelings or complaining", category: "People & Behavior" },
        { term: "Polyglot", phrase: "A person who knows and is able to use several languages", category: "People & Behavior" },
        { term: "Octogenarian", phrase: "A person who is between 80 and 89 years old", category: "People & Behavior" },
        { term: "Connoisseur", phrase: "An expert judge in matters of taste, fine art, or cuisine", category: "People & Behavior" },
        { term: "Dilettante", phrase: "A person who cultivates an area of interest without real commitment or expertise", category: "People & Behavior" },
        { term: "Mercenary", phrase: "A professional soldier hired to serve in a foreign army solely for money", category: "People & Behavior" },
        { term: "Recluse", phrase: "A person who lives a solitary life and tends to avoid other people", category: "People & Behavior" },
        { term: "Sycophant", phrase: "A person who flatters powerful people to gain personal advantage", category: "People & Behavior" },
        { term: "Agnostic", phrase: "A person who believes nothing is known or can be known of the existence of God", category: "People & Behavior" },

        // Science, Study & Phobias
        { term: "Entomology", phrase: "The scientific study of insects", category: "Science & Study" },
        { term: "Ornithology", phrase: "The scientific study of birds", category: "Science & Study" },
        { term: "Etymology", phrase: "The study of the origin and historical development of words", category: "Science & Study" },
        { term: "Numismatics", phrase: "The study or collection of coins, paper currency, and medals", category: "Science & Study" },
        { term: "Philately", phrase: "The collection and study of postage stamps", category: "Science & Study" },
        { term: "Cartography", phrase: "The science or practice of drawing maps", category: "Science & Study" },
        { term: "Claustrophobia", phrase: "Extreme or irrational fear of confined or enclosed spaces", category: "Science & Study" },
        { term: "Xenophobia", phrase: "Dislike of or prejudice against people from other countries", category: "Science & Study" },
        { term: "Insomnia", phrase: "Habitual sleeplessness; inability to sleep", category: "Science & Study" },
        { term: "Somnambulism", phrase: "The habit or condition of walking while asleep", category: "Science & Study" },
        { term: "Panacea", phrase: "A universal remedy for all diseases or difficulties", category: "Science & Study" },

        // Literature, Speech & General
        { term: "Plagiarism", phrase: "Taking someone else's work or ideas and passing them off as one's own", category: "Literature & Speech" },
        { term: "Euphemism", phrase: "A mild or indirect word substituted for one considered harsh or blunt", category: "Literature & Speech" },
        { term: "Soliloquy", phrase: "An act of speaking one's thoughts aloud when by oneself in a play", category: "Literature & Speech" },
        { term: "Epitaph", phrase: "A phrase or statement written in memory of a person who has died, especially on a tombstone", category: "Literature & Speech" },
        { term: "Verbatim", phrase: "In exactly the same words as were used originally", category: "Literature & Speech" },
        { term: "Extempore", phrase: "Spoken or done without prior preparation", category: "Literature & Speech" },
        { term: "Pseudonym", phrase: "A fictitious name, especially one used by an author", category: "Literature & Speech" },
        { term: "Posthumous", phrase: "Occurring, awarded, or published after the death of the originator", category: "Literature & Speech" },
        { term: "Infallible", phrase: "Incapable of making mistakes or being wrong", category: "Literature & Speech" },
        { term: "Inevitable", phrase: "Certain to happen; unavoidable", category: "Literature & Speech" }
    ],

    synAntMcqs: [
        // Academic & Formal
        { topic: "Academic & Formal", type: "Synonym", word: "PERNICIOUS", options: ["Beneficial", "Harmful", "Transparent", "Temporary"], answer: 1, exp: "Pernicious means having a harmful effect, especially in a gradual or subtle way." },
        { topic: "Academic & Formal", type: "Antonym", word: "EPHEMERAL", options: ["Fleeting", "Perpetual", "Fragile", "Brief"], answer: 1, exp: "Ephemeral means short-lived; its antonym is perpetual (everlasting)." },
        { topic: "Academic & Formal", type: "Synonym", word: "ESOTERIC", options: ["Commonplace", "Abstruse", "Obvious", "Popular"], answer: 1, exp: "Esoteric means intended for or understood by only a small number of people with specialized knowledge (abstruse)." },
        { topic: "Academic & Formal", type: "Antonym", word: "UBIQUITOUS", options: ["Pervasive", "Widespread", "Scarce", "Universal"], answer: 2, exp: "Ubiquitous means found everywhere; its opposite is scarce." },
        { topic: "Academic & Formal", type: "Synonym", word: "CORROBORATE", options: ["Contradict", "Substantiate", "Fabricate", "Ignore"], answer: 1, exp: "Corroborate means to confirm or give support to a statement or theory (substantiate)." },
        { topic: "Academic & Formal", type: "Antonym", word: "ENERVATE", options: ["Weaken", "Exhaust", "Invigorate", "Deplete"], answer: 2, exp: "Enervate means to drain of energy; its antonym is invigorate." },

        // Governance & Law
        { topic: "Governance & Law", type: "Synonym", word: "ABROGATE", options: ["Enact", "Repeal", "Validate", "Uphold"], answer: 1, exp: "Abrogate means to repeal or do away with a law, right, or formal agreement." },
        { topic: "Governance & Law", type: "Antonym", word: "INTRANSIGENT", options: ["Stubborn", "Adamant", "Flexible", "Rigid"], answer: 2, exp: "Intransigent means unwilling to change views or compromise; its opposite is flexible." },
        { topic: "Governance & Law", type: "Synonym", word: "EXONERATE", options: ["Convict", "Absolve", "Accuse", "Penalize"], answer: 1, exp: "Exonerate means to absolve someone from blame for a fault or wrongdoing." },
        { topic: "Governance & Law", type: "Antonym", word: "EXACERBATE", options: ["Worsen", "Intensify", "Ameliorate", "Inflame"], answer: 2, exp: "Exacerbate means to make worse; its antonym is ameliorate (make better)." },
        { topic: "Governance & Law", type: "Synonym", word: "CLANDESTINE", options: ["Covert", "Public", "Transparent", "Official"], answer: 0, exp: "Clandestine means kept secret or done secretively (covert)." },
        { topic: "Governance & Law", type: "Antonym", word: "OSTENSIBLE", options: ["Apparent", "Seeming", "Genuine", "Surface"], answer: 2, exp: "Ostensible means appearing true on the surface but not necessarily so; its antonym is genuine." },

        // Emotion & Character
        { topic: "Emotion & Character", type: "Synonym", word: "MAGNANIMOUS", options: ["Petty", "Generous", "Selfish", "Hostile"], answer: 1, exp: "Magnanimous means generous and forgiving, especially toward a rival." },
        { topic: "Emotion & Character", type: "Antonym", word: "SANGUINE", options: ["Hopeful", "Confident", "Pessimistic", "Cheerful"], answer: 2, exp: "Sanguine means optimistic even in difficulty; its antonym is pessimistic." },
        { topic: "Emotion & Character", type: "Synonym", word: "FASTIDIOUS", options: ["Careless", "Meticulous", "Hasty", "Reckless"], answer: 1, exp: "Fastidious means very attentive to accuracy and detail (meticulous)." },
        { topic: "Emotion & Character", type: "Antonym", word: "PARSIMONIOUS", options: ["Frugal", "Stingy", "Munificent", "Thrifty"], answer: 2, exp: "Parsimonious means excessively stingy; munificent means very generous." },
        { topic: "Emotion & Character", type: "Synonym", word: "PERFIDIOUS", options: ["Loyal", "Treacherous", "Sincere", "Honest"], answer: 1, exp: "Perfidious means deceitful and untrustworthy (treacherous)." },
        { topic: "Emotion & Character", type: "Antonym", word: "GARRULOUS", options: ["Talkative", "Verbose", "Taciturn", "Chatty"], answer: 2, exp: "Garrulous means excessively talkative; taciturn means reserved and saying little." },

        // Action & Change
        { topic: "Action & Change", type: "Synonym", word: "PROLIFERATE", options: ["Dwindle", "Multiply", "Shrink", "Halt"], answer: 1, exp: "Proliferate means to increase rapidly in number or multiply." },
        { topic: "Action & Change", type: "Antonym", word: "OBFUSCATE", options: ["Confuse", "Cloud", "Elucidate", "Darken"], answer: 2, exp: "Obfuscate means to make unclear; elucidate means to make clear and explain." },
        { topic: "Action & Change", type: "Synonym", word: "PLACATE", options: ["Provoke", "Appease", "Agitate", "Offend"], answer: 1, exp: "Placate means to pacify or appease someone who is angry." },
        { topic: "Action & Change", type: "Antonym", word: "MITIGATE", options: ["Soften", "Lessen", "Aggravate", "Ease"], answer: 2, exp: "Mitigate means to make less severe; aggravate means to make more severe." },
        { topic: "Action & Change", type: "Synonym", word: "INCULCATE", options: ["Erase", "Instill", "Neglect", "Dismiss"], answer: 1, exp: "Inculcate means to instill an idea or habit through persistent instruction." },
        { topic: "Action & Change", type: "Antonym", word: "VINDICATE", options: ["Justify", "Clear", "Incriminate", "Defend"], answer: 2, exp: "Vindicate means to clear of blame; incriminate means to make someone appear guilty." }
    ],

    idiomsPhrases: [
        { idiom: "Burn the midnight oil", meaning: "To work or study late into the night", example: "CSS aspirants burn the midnight oil for months before the written examination." },
        { idiom: "At the eleventh hour", meaning: "At the latest possible moment; just before a deadline", example: "The two delegations reached a compromise on tariffs at the eleventh hour." },
        { idiom: "Bite the bullet", meaning: "To face a difficult or unpleasant situation with courage", example: "The government had to bite the bullet and withdraw untargeted energy subsidies." },
        { idiom: "A bolt from the blue", meaning: "A sudden, completely unexpected event or piece of news", example: "The sudden resignation of the finance minister came as a bolt from the blue." },
        { idiom: "Read between the lines", meaning: "To understand the hidden or implied meaning behind words", example: "Seasoned diplomats know how to read between the lines of official communiqués." },
        { idiom: "Once in a blue moon", meaning: "Very rarely; almost never", example: "Bipartisan consensus on structural tax reform occurs once in a blue moon." },
        { idiom: "Leave no stone unturned", meaning: "To try every possible course of action to achieve something", example: "Investigators promised to leave no stone unturned in the cyber-fraud case." },
        { idiom: "Cut the Gordian knot", meaning: "To solve a very difficult problem by bold, decisive action", example: "Digitizing land records finally cut the Gordian knot of property litigation." },
        { idiom: "A white elephant", meaning: "A costly possession or project that is useless or burdensome to maintain", example: "The underutilized airport turned into a white elephant for the public exchequer." },
        { idiom: "Crocodile tears", meaning: "Insincere or hypocritical display of grief or sympathy", example: "Voters quickly saw through the politician's crocodile tears over inflation." },
        { idiom: "Burn one's boats / bridges", meaning: "To commit irrevocably to a course of action with no way back", example: "By publicly rejecting the mediator's proposal, the envoy burned his bridges." },
        { idiom: "By leaps and bounds", meaning: "With remarkably rapid progress", example: "Pakistan's freelance IT exports have grown by leaps and bounds over the past five years." },
        { idiom: "Call a spade a spade", meaning: "To speak plainly and directly without avoiding unpleasant truths", example: "The audit report called a spade a spade regarding procurement irregularities." },
        { idiom: "A wild goose chase", meaning: "A foolish and hopeless search for something unattainable", example: "Without verified intelligence, the raid turned into a wild goose chase." },
        { idiom: "Hit the nail on the head", meaning: "To describe exactly what is causing a situation or problem", example: "The economist hit the nail on the head when linking exports to energy costs." },
        { idiom: "In the doldrums", meaning: "In a state of stagnation, inactivity, or low spirits", example: "Manufacturing output remained in the doldrums due to high interest rates." },
        { idiom: "Keep at bay", meaning: "To prevent someone or something unpleasant from coming closer", example: "Prudent fiscal discipline helped keep sovereign default at bay." },
        { idiom: "Make a mountain out of a molehill", meaning: "To exaggerate a minor problem out of proportion", example: "Critics accused the tabloid of making a mountain out of a molehill." },
        { idiom: "Nip in the bud", meaning: "To stop a problem or bad tendency at an early stage", example: "Swift regulatory action nipped the speculative housing bubble in the bud." },
        { idiom: "On the horns of a dilemma", meaning: "Faced with a difficult choice between two equally undesirable alternatives", example: "Policymakers were on the horns of a dilemma between curbing inflation and boosting growth." },
        { idiom: "Pour oil on troubled waters", meaning: "To calm down a tense or angry situation", example: "The neutral mediator poured oil on troubled waters during the water-sharing talks." },
        { idiom: "Red herring", meaning: "A misleading clue or distraction from the real issue", example: "The debate over minor procedural details proved to be a red herring." },
        { idiom: "Sit on the fence", meaning: "To avoid making a decision or taking a side in a dispute", example: "Several neutral states chose to sit on the fence during the UN vote." },
        { idiom: "Storm in a teacup", meaning: "Great excitement or anger over a trivial matter", example: "What began as a heated media controversy turned out to be a storm in a teacup." },
        { idiom: "Take with a grain of salt", meaning: "To view a claim with skepticism rather than accepting it literally", example: "Analysts took the unverified pre-election poll with a grain of salt." },
        { idiom: "Throw down the gauntlet", meaning: "To issue a direct challenge", example: "The opposition threw down the gauntlet by demanding a live televised debate." },
        { idiom: "Turn a blind eye", meaning: "To deliberately ignore something known to be wrong", example: "Inspectors must never turn a blind eye to workplace safety violations." },
        { idiom: "Under a cloud", meaning: "Under suspicion or in disgrace", example: "The contractor left the ministry under a cloud after the audit inquiry." },
        { idiom: "Break the ice", meaning: "To relieve tension or start conversation in an awkward situation", example: "A brief cultural exchange helped break the ice before the trade talks." },
        { idiom: "Feather one's own nest", meaning: "To enrich oneself dishonestly using one's position", example: "Anti-corruption laws penalize officials who feather their own nests." },
        { idiom: "Go the extra mile", meaning: "To make a special extra effort beyond what is required", example: "Dedicated civil servants go the extra mile during flood relief operations." },
        { idiom: "In black and white", meaning: "In writing or print; clearly documented", example: "Always ensure that official service agreements are recorded in black and white." },
        { idiom: "Pay through the nose", meaning: "To pay an excessively high price for something", example: "Consumers paid through the nose for imported fuel during the supply crunch." },
        { idiom: "Rule of thumb", meaning: "A broadly accurate practical guide based on experience", example: "As a rule of thumb, a CSS precis should be one-third of the original passage." },
        { idiom: "Silver lining", meaning: "A hopeful or comforting aspect in a difficult situation", example: "The silver lining of remote work was greater participation of women in tech." },
        { idiom: "Weather the storm", meaning: "To survive a period of severe difficulty successfully", example: "Diversified economies are better equipped to weather the storm of global recessions." }
    ],

    grammarModules: [
        {
            id: "tenses",
            title: "Tenses & Sequence of Tenses",
            icon: "fa-clock",
            rules: [
                { title: "Present Perfect vs. Simple Past", rule: "Use Simple Past with a finished past time marker (yesterday, in 2020, ago). Use Present Perfect when no specific past time is mentioned or the effect continues now.", right: "She graduated in 2022. / She has completed her thesis.", wrong: "She has graduated in 2022." },
                { title: "Past Perfect (Two Past Actions)", rule: "When two actions occurred in the past, use Past Perfect (had + V3) for the earlier action and Simple Past for the later action.", right: "The train had left before we reached the station.", wrong: "The train left before we had reached the station." },
                { title: "Conditional Type 3 (Unreal Past)", rule: "Structure: If + had + V3, ... would have + V3. Never put 'would have' inside the 'if' clause.", right: "If he had studied harder, he would have passed.", wrong: "If he would have studied harder, he would have passed." },
                { title: "Since vs. For (Perfect Continuous)", rule: "Use 'since' with a starting point (since 2019, since Monday) and 'for' with a duration (for three hours, for five years).", right: "He has been working here since 2021 / for five years.", wrong: "He is working here since 2021." }
            ],
            mcqs: [
                { q: "By the time the ambulance arrived, the injured passenger _____ to the clinic.", options: ["was taken", "had been taken", "has been taken", "is taken"], answer: 1, exp: "Past Perfect Passive ('had been taken') denotes an action completed before another past event ('arrived')." },
                { q: "If the committee _____ the audit report earlier, the fraud would have been prevented.", options: ["reviewed", "would review", "had reviewed", "has reviewed"], answer: 2, exp: "Third Conditional requires 'had + V3' in the if-clause." },
                { q: "She _____ for the Federal Public Service Commission exam since January.", options: ["is preparing", "was preparing", "has been preparing", "prepared"], answer: 2, exp: "Action started in the past and continuing to the present with 'since' requires Present Perfect Continuous." },
                { q: "Scarcely _____ the auditorium when the keynote speech began.", options: ["he had entered", "had he entered", "he entered", "did he entered"], answer: 1, exp: "Negative adverb 'Scarcely' at the start triggers inversion: 'Scarcely + had + subject + V3 ... when'." }
            ]
        },
        {
            id: "prepositions",
            title: "Prepositions & Fixed Collocations",
            icon: "fa-link",
            rules: [
                { title: "No Preposition After Transitive Verbs", rule: "Verbs like discuss, enter, comprise, emphasize, resemble, order, and investigate take direct objects WITHOUT prepositions.", right: "We discussed the policy. / The board comprises five members.", wrong: "We discussed about the policy. / comprises of five members." },
                { title: "Latin Comparatives Take 'to'", rule: "Senior, junior, superior, inferior, prior, anterior, and prefer take 'to' — NEVER 'than'.", right: "She is senior to me. / I prefer tea to coffee.", wrong: "She is senior than me. / I prefer tea than coffee." },
                { title: "High-Yield Exam Pairs", rule: "Abide BY, abstain FROM, accede TO, acquitted OF, adhere TO, averse TO, comply WITH, cope WITH (not 'cope up with'), devoid OF, exempt FROM.", right: "Officials must abide by the rules and cope with pressure.", wrong: "Officials must cope up with pressure." },
                { title: "Between vs. Among / Beside vs. Besides", rule: "Use 'between' for two (or distinct reciprocal items) and 'among' for three or more. 'Beside' = next to; 'Besides' = in addition to.", right: "Besides English, he speaks French. Sit beside me.", wrong: "Beside English, he speaks French." }
            ],
            mcqs: [
                { q: "The newly appointed officer is fully capable of coping _____ administrative challenges.", options: ["up with", "with", "over", "against"], answer: 1, exp: "'Cope with' is the standard idiom; 'cope up with' is a classic exam error." },
                { q: "The defense counsel proved that the accused was completely innocent _____ the charge.", options: ["from", "with", "of", "for"], answer: 2, exp: "Correct collocation: 'innocent of' (and 'acquitted of', 'guilty of')." },
                { q: "The inquiry committee will investigate _____ the procurement irregularities next week.", options: ["into", "about", "over", "(no preposition)"], answer: 3, exp: "'Investigate' is a transitive verb and does not take 'into'." },
                { q: "This revised draft is far superior _____ the earlier proposal.", options: ["than", "from", "to", "over"], answer: 2, exp: "Latin comparatives (superior, inferior, senior, junior, prior) always take 'to'." }
            ]
        },
        {
            id: "articles",
            title: "Articles (A, An, The & Zero Article)",
            icon: "fa-font",
            rules: [
                { title: "Sound, Not Spelling (A vs. An)", rule: "Use 'an' before vowel SOUNDS (an hour, an honest man, an MNA, an FIR, an heirloom) and 'a' before consonant SOUNDS (a university, a European, a one-rupee coin).", right: "An FIR was lodged against a university contractor.", wrong: "A FIR was lodged against an university contractor." },
                { title: "Definite Article 'The' with Geography", rule: "Use 'the' with rivers (the Indus), mountain ranges (the Himalayas), oceans, deserts, and plural/republic country names (the USA, the Netherlands). Omit before single peaks (Mount Everest) and most countries.", right: "The Indus flows through Pakistan; Mount K2 is in the Karakoram.", wrong: "The Pakistan; the Mount Everest." },
                { title: "Superlatives & Double Comparatives", rule: "Always use 'the' before superlatives and in parallel double comparatives ('The more..., the better...').", right: "The higher you climb, the colder it gets.", wrong: "Higher you climb, colder it gets." },
                { title: "Zero Article with Uncountable / Abstract Nouns", rule: "Do not use 'a/an' before uncountable nouns (advice, information, furniture, luggage, news) or general abstract nouns (honesty, wisdom).", right: "She gave me useful advice. Honesty is the best policy.", wrong: "She gave me a useful advice. The honesty is the best policy." }
            ],
            mcqs: [
                { q: "He filed _____ FIR at the police station after losing his passport.", options: ["a", "an", "the", "no article"], answer: 1, exp: "'FIR' begins with the vowel sound /ef/, so it takes 'an'." },
                { q: "_____ more transparent the procurement process is, _____ greater the public trust.", options: ["A / a", "The / the", "No article / the", "The / a"], answer: 1, exp: "Double comparative constructions require 'The ... the ...'." },
                { q: "She is pursuing _____ European Union fellowship at _____ university in Sweden.", options: ["an / an", "a / an", "a / a", "an / a"], answer: 2, exp: "Both 'European' (/jʊə/) and 'university' (/juː/) start with a consonant 'y' sound, so both take 'a'." },
                { q: "_____ honesty of the witness impressed the entire bench.", options: ["A", "An", "The", "No article"], answer: 2, exp: "When an abstract noun ('honesty') is particularized ('of the witness'), it takes 'The'." }
            ]
        }
    ],

    sentenceCorrection: [
        { q: "Neither the director (A) / nor the senior analysts (B) / was present (C) / at the briefing. (D)", error: "C", corrected: "Neither the director nor the senior analysts WERE present at the briefing.", rule: "With 'neither...nor', the verb agrees with the nearer subject ('senior analysts' = plural)." },
        { q: "One of my closest friend (A) / has been selected (B) / for the prestigious (C) / Chevening scholarship. (D)", error: "A", corrected: "One of my closest FRIENDS has been selected for the prestigious Chevening scholarship.", rule: "'One of + plural noun' always takes a plural noun ('friends') followed by a singular verb ('has')." },
        { q: "The committee discussed about (A) / the proposed amendments (B) / for nearly three hours (C) / without reaching consensus. (D)", error: "A", corrected: "The committee DISCUSSED the proposed amendments for nearly three hours without reaching consensus.", rule: "'Discuss' is a transitive verb; never use 'about' after 'discuss'." },
        { q: "No sooner the minister (A) / arrived at the venue (B) / than the journalists (C) / surrounded him. (D)", error: "A", corrected: "No sooner DID the minister ARRIVE at the venue than the journalists surrounded him.", rule: "'No sooner' at the beginning requires subject-auxiliary inversion ('No sooner did/had + subject... than')." },
        { q: "She is more wiser (A) / and more experienced (B) / than any other officer (C) / in her cadre. (D)", error: "A", corrected: "She is WISER and more experienced than any other officer in her cadre.", rule: "Avoid double comparatives ('more wiser' is redundant; use 'wiser')." },
        { q: "Each of the candidates (A) / were given (B) / fifteen minutes to present (C) / their policy brief. (D)", error: "B", corrected: "Each of the candidates WAS given fifteen minutes to present a policy brief.", rule: "'Each of + plural noun' always takes a singular verb ('was')." },
        { q: "Unless you do not submit (A) / the attested transcripts (B) / before Friday, your application (C) / will be rejected. (D)", error: "A", corrected: "UNLESS YOU SUBMIT the attested transcripts before Friday, your application will be rejected.", rule: "'Unless' already means 'if not'; adding 'do not' creates a double negative." },
        { q: "The furniture in the new office (A) / are modern, durable, (B) / and ergonomically designed (C) / for long shifts. (D)", error: "B", corrected: "The furniture in the new office IS modern, durable, and ergonomically designed for long shifts.", rule: "'Furniture' is an uncountable singular noun and takes a singular verb ('is')." },
        { q: "He insisted to attend (A) / the parliamentary hearing (B) / despite his doctor's (C) / strict advice. (D)", error: "A", corrected: "He INSISTED ON ATTENDING the parliamentary hearing despite his doctor's strict advice.", rule: "'Insist' takes the preposition 'on' followed by a gerund ('insisted on attending')." },
        { q: "Hardly had the session started (A) / than the power outage (B) / disrupted the live broadcast (C) / across the country. (D)", error: "B", corrected: "Hardly had the session started WHEN the power outage disrupted the live broadcast across the country.", rule: "'Hardly / Scarcely' pairs with 'when', NOT 'than' ('No sooner... than')." },
        { q: "The number of applicants (A) / for civil service exams (B) / have risen sharply (C) / over the last decade. (D)", error: "C", corrected: "The number of applicants for civil service exams HAS risen sharply over the last decade.", rule: "'The number of + plural noun' takes a singular verb ('has'); 'A number of' takes a plural verb." },
        { q: "Between you and I, (A) / the fiscal projections (B) / appear overly optimistic (C) / for this quarter. (D)", error: "A", corrected: "Between you and ME, the fiscal projections appear overly optimistic for this quarter.", rule: "Prepositions ('between') always take objective-case pronouns ('me', 'him', 'her', 'us', 'them')." },
        { q: "The judge along with (A) / two senior registrars (B) / were inspecting (C) / the digital archive. (D)", error: "C", corrected: "The judge along with two senior registrars WAS inspecting the digital archive.", rule: "Phrases like 'along with', 'as well as', and 'together with' do not make a singular subject plural." },
        { q: "I look forward to meet (A) / the visiting delegation (B) / at the Foreign Office (C) / tomorrow morning. (D)", error: "A", corrected: "I look forward to MEETING the visiting delegation at the Foreign Office tomorrow morning.", rule: "In 'look forward to', 'to' is a preposition and must be followed by a gerund ('meeting')." },
        { q: "Scarcely anyone among the delegates (A) / knew where was the treaty (B) / originally drafted (C) / in 1945. (D)", error: "B", corrected: "Scarcely anyone among the delegates knew WHERE THE TREATY WAS originally drafted in 1945.", rule: "Indirect/embedded questions use normal statement word order (subject before verb), not question inversion." },
        { q: "He gave me many advices (A) / on how to structure (B) / a persuasive CSS essay (C) / under time pressure. (D)", error: "A", corrected: "He gave me MUCH ADVICE (or MANY PIECES OF ADVICE) on how to structure a persuasive CSS essay.", rule: "'Advice' is uncountable; never pluralize it as 'advices'." },
        { q: "Although he worked diligently, (A) / but he could not (B) / complete the audit (C) / before the deadline. (D)", error: "B", corrected: "Although he worked diligently, HE COULD NOT complete the audit before the deadline.", rule: "Never pair 'Although / Though' with 'but' in the same sentence (use a comma or 'yet')." },
        { q: "The climate of Islamabad (A) / is much cooler (B) / than Lahore (C) / during the monsoon. (D)", error: "C", corrected: "The climate of Islamabad is much cooler than THAT OF Lahore during the monsoon.", rule: "Compare like with like: compare the climate of Islamabad with 'that of Lahore', not with the city itself." },
        { q: "She is one of those scholars (A) / who has dedicated (B) / their entire career (C) / to constitutional law. (D)", error: "B", corrected: "She is one of those scholars who HAVE dedicated their entire career to constitutional law.", rule: "In 'one of those [plural noun] who...', the relative pronoun 'who' refers to 'scholars' (plural) → 'have'." },
        { q: "He abstained to comment (A) / on the sub-judice matter (B) / during the press conference (C) / yesterday evening. (D)", error: "A", corrected: "He ABSTAINED FROM COMMENTING on the sub-judice matter during the press conference yesterday evening.", rule: "'Abstain' always takes 'from + gerund' ('abstained from commenting')." }
    ],

    voiceData: {
        rules: [
            { tense: "Present Simple", active: "writes / write", passive: "is / am / are + written" },
            { tense: "Present Continuous", active: "is / am / are writing", passive: "is / am / are + being written" },
            { tense: "Present Perfect", active: "has / have written", passive: "has / have + been written" },
            { tense: "Past Simple", active: "wrote", passive: "was / were + written" },
            { tense: "Past Continuous", active: "was / were writing", passive: "was / were + being written" },
            { tense: "Past Perfect", active: "had written", passive: "had + been written" },
            { tense: "Future Simple", active: "will write", passive: "will + be written" },
            { tense: "Future Perfect", active: "will have written", passive: "will have + been written" },
            { tense: "Modals (can/may/must/should)", active: "must write", passive: "must + be written" },
            { tense: "Imperative (Command)", active: "Close the door.", passive: "Let the door be closed." }
        ],
        exercises: [
            { q: "Active: The commission announced the shortlisted candidates yesterday.", options: ["The shortlisted candidates are announced yesterday by the commission.", "The shortlisted candidates were announced yesterday by the commission.", "The shortlisted candidates had been announced yesterday by the commission.", "The shortlisted candidates have been announced yesterday by the commission."], answer: 1, exp: "Past Simple ('announced') converts to 'were + V3' ('were announced')." },
            { q: "Active: Who drafted the 1973 Constitution?", options: ["By whom was the 1973 Constitution drafted?", "By who was the 1973 Constitution drafted?", "Who was the 1973 Constitution drafted by?", "By whom the 1973 Constitution was drafted?"], answer: 0, exp: "'Who' becomes 'By whom' followed by auxiliary inversion: 'By whom was the 1973 Constitution drafted?'" },
            { q: "Active: The auditors are verifying the procurement vouchers.", options: ["The procurement vouchers are verified by the auditors.", "The procurement vouchers were being verified by the auditors.", "The procurement vouchers are being verified by the auditors.", "The procurement vouchers have been verified by the auditors."], answer: 2, exp: "Present Continuous ('are verifying') converts to 'are being + V3'." },
            { q: "Active: Close all classified files immediately.", options: ["Let all classified files be closed immediately.", "All classified files should closed immediately.", "Let all classified files are closed immediately.", "You are ordered that close all classified files."], answer: 0, exp: "Imperative sentences convert using 'Let + object + be + V3'." },
            { q: "Active: People speak Urdu across Pakistan.", options: ["Urdu was spoken across Pakistan.", "Urdu is being spoken across Pakistan.", "Urdu is spoken across Pakistan.", "Urdu has been spoken across Pakistan."], answer: 2, exp: "Present Simple with vague agent ('People') drops 'by people' → 'Urdu is spoken across Pakistan.'" },
            { q: "Active: The Senate has approved the climate finance bill.", options: ["The climate finance bill was approved by the Senate.", "The climate finance bill has been approved by the Senate.", "The climate finance bill is being approved by the Senate.", "The climate finance bill had been approved by the Senate."], answer: 1, exp: "Present Perfect ('has approved') converts to 'has been + V3'." },
            { q: "Passive: The inquiry report must be submitted by Friday.", options: ["They must submit the inquiry report by Friday.", "They had to submit the inquiry report by Friday.", "They must be submitting the inquiry report by Friday.", "They should have submitted the inquiry report by Friday."], answer: 0, exp: "Modal Passive ('must be submitted') converts back to Modal Active ('must submit')." },
            { q: "Active: Did the investigator record the witness's statement?", options: ["Was the witness's statement being recorded by the investigator?", "Was the witness's statement recorded by the investigator?", "Had the witness's statement been recorded by the investigator?", "Is the witness's statement recorded by the investigator?"], answer: 1, exp: "Past Simple Interrogative ('Did ... record') converts to 'Was/Were + object + V3?'." },
            { q: "Active: Someone had tampered with the electronic evidence.", options: ["The electronic evidence was tampered with.", "The electronic evidence has been tampered with.", "The electronic evidence had been tampered with.", "The electronic evidence is being tampered with."], answer: 2, exp: "Past Perfect ('had tampered with') converts to 'had been tampered with' (retain the preposition 'with'!)." },
            { q: "Active: Her eloquent speech amazed the entire panel.", options: ["The entire panel was amazed by her eloquent speech.", "The entire panel was amazed at her eloquent speech.", "The entire panel is amazed with her eloquent speech.", "The entire panel had been amazed by her eloquent speech."], answer: 1, exp: "Certain verbs take fixed prepositions in passive voice instead of 'by': amazed AT, surprised AT, known TO, satisfied WITH." }
        ]
    },

    speechData: {
        rules: [
            { change: "Present Simple → Past Simple", direct: "He said, \"I write daily.\"", indirect: "He said that he wrote daily." },
            { change: "Present Continuous → Past Continuous", direct: "She said, \"I am reading.\"", indirect: "She said that she was reading." },
            { change: "Present Perfect → Past Perfect", direct: "He said, \"I have finished.\"", indirect: "He said that he had finished." },
            { change: "Past Simple → Past Perfect", direct: "She said, \"I visited Rome.\"", indirect: "She said that she had visited Rome." },
            { change: "Modals (will/can/may → would/could/might)", direct: "He said, \"I will attend.\"", indirect: "He said that he would attend." },
            { change: "Universal Truth (No Backshift)", direct: "The teacher said, \"Water boils at 100°C.\"", indirect: "The teacher said that water boils at 100°C." },
            { change: "Time & Place Words", direct: "now → then | today → that day | yesterday → the previous day | tomorrow → the next day | here → there", indirect: "Always shift deictic words when reporting verb is in past tense." }
        ],
        exercises: [
            { q: "Direct: The chairman said, \"We will announce the final merit list tomorrow.\"", options: ["The chairman said that they will announce the final merit list the next day.", "The chairman said that they would announce the final merit list the next day.", "The chairman said that we would announce the final merit list tomorrow.", "The chairman told that they would announce the final merit list the next day."], answer: 1, exp: "'We' → 'they', 'will' → 'would', 'tomorrow' → 'the next day'." },
            { q: "Direct: She said to me, \"Have you submitted your application form?\"", options: ["She asked me if I had submitted my application form.", "She asked me that if I had submitted my application form.", "She asked me whether I have submitted my application form.", "She asked me did I submit my application form."], answer: 0, exp: "Yes/No questions use 'if/whether' (never 'that if'), statement word order, and backshift Present Perfect → Past Perfect." },
            { q: "Direct: The professor said, \"Honesty is the best policy.\"", options: ["The professor said that honesty was the best policy.", "The professor said that honesty had been the best policy.", "The professor said that honesty is the best policy.", "The professor told that honesty is the best policy."], answer: 2, exp: "Proverbs and universal truths do NOT change tense in indirect speech." },
            { q: "Direct: The officer ordered the clerk, \"Submit the dossier immediately.\"", options: ["The officer ordered the clerk that submit the dossier immediately.", "The officer ordered the clerk to submit the dossier immediately.", "The officer ordered to the clerk to submit the dossier immediately.", "The officer ordered the clerk submitting the dossier immediately."], answer: 1, exp: "Imperatives convert using 'to + base verb' ('ordered the clerk to submit...')." },
            { q: "Direct: He said, \"Alas! We have lost a great jurist.\"", options: ["He exclaimed with sorrow that they had lost a great jurist.", "He said with sorrow that they have lost a great jurist.", "He exclaimed sorrowfully that we had lost a great jurist.", "He told with sorrow that they had lost a great jurist."], answer: 0, exp: "'Alas!' becomes 'exclaimed with sorrow', 'we' → 'they', 'have lost' → 'had lost'." },
            { q: "Direct: My mentor said to me, \"Where did you buy this grammar handbook?\"", options: ["My mentor asked me where did I buy that grammar handbook.", "My mentor asked me where I bought that grammar handbook.", "My mentor asked me where I had bought that grammar handbook.", "My mentor asked me where had I bought that grammar handbook."], answer: 2, exp: "Wh-questions keep the Wh-word, use statement word order (subject before verb), and shift Past Simple → Past Perfect ('had bought') and 'this' → 'that'." },
            { q: "Direct: She said, \"May you succeed in your CSS examination!\"", options: ["She prayed that I might succeed in my CSS examination.", "She prayed that I may succeed in my CSS examination.", "She wished that may I succeed in my CSS examination.", "She told me that I might succeed in my CSS examination."], answer: 0, exp: "Optative sentences (prayers/wishes) use 'prayed/wished that + subject + might + V1'." },
            { q: "Direct: He said to his colleague, \"Let us review the budget figures.\"", options: ["He suggested to his colleague that they should review the budget figures.", "He ordered his colleague to review the budget figures.", "He suggested his colleague that they will review the budget figures.", "He asked his colleague let them review the budget figures."], answer: 0, exp: "'Let us' proposals convert to 'suggested/proposed that they should + V1'." }
        ]
    },

    comprehensionPassages: [
        {
            id: "comp_1",
            title: "Passage 1: Climate Vulnerability & Fiscal Resilience",
            level: "CSS / PMS Standard",
            text: "Developing economies across South Asia face a paradoxical predicament: while their historical contribution to global greenhouse gas emissions remains minimal, they endure disproportionate macroeconomic shocks from climate-induced disasters. Recurrent mega-floods, heatwaves, and glacial lake outbursts not only destroy physical infrastructure but also erode agricultural productivity, widen fiscal deficits, and trap vulnerable states in cycles of external borrowing. Consequently, climate adaptation can no longer be treated as a peripheral environmental initiative. Instead, it must be integrated into the core of national fiscal planning, urban zoning, and water governance. Without proactive investment in climate-resilient infrastructure and transparent disaster-risk financing, post-disaster reconstruction will continue to crowd out essential spending on education and public health.",
            questions: [
                { q: "What is the 'paradoxical predicament' highlighted by the author?", options: ["South Asian economies emit the most carbon yet suffer the least.", "Countries with minimal historical emissions bear severe economic damage from climate shocks.", "Urban zoning increases greenhouse emissions in rural areas.", "External borrowing eliminates climate vulnerability."], answer: 1, exp: "The opening sentence explicitly contrasts minimal historical emissions with disproportionate macroeconomic climate shocks." },
                { q: "According to the passage, how do climate disasters affect social sectors like education and health?", options: ["They permanently abolish public education ministries.", "Post-disaster reconstruction diverts limited fiscal resources away from them.", "They increase tax revenues spent on schools.", "They have no measurable fiscal link to social sectors."], answer: 1, exp: "The final sentence states that post-disaster reconstruction will 'crowd out essential spending on education and public health'." },
                { q: "What does the word 'peripheral' in the passage most nearly mean?", options: ["Central and urgent", "Secondary or marginal", "Legally binding", "Financially profitable"], answer: 1, exp: "The author contrasts 'peripheral' with 'integrated into the core', showing it means secondary/marginal." },
                { q: "Which policy shift does the author advocate?", options: ["Abandoning international trade entirely", "Embedding climate adaptation into core fiscal planning and water governance", "Relying exclusively on post-disaster foreign loans", "Halting all urban development"], answer: 1, exp: "The passage calls for integrating climate adaptation into national fiscal planning, urban zoning, and water governance." }
            ]
        },
        {
            id: "comp_2",
            title: "Passage 2: Artificial Intelligence & the Future of Knowledge Work",
            level: "CSS / FPSC Standard",
            text: "Unlike earlier waves of industrial automation that predominantly displaced routine manual labor, contemporary generative artificial intelligence directly augments—and occasionally substitutes for—cognitive tasks such as drafting, coding, translation, and legal research. Yet historical evidence cautions against simplistic predictions of mass technological unemployment. Whenever general-purpose technologies emerge, productivity gains tend to lower the cost of complex services, thereby expanding aggregate demand and creating entirely new occupational niches. The real policy challenge is therefore distributional rather than apocalyptic: workers who master AI-assisted workflows experience sharp wage premiums, whereas those locked out of digital literacy risk structural marginalization. Education systems that cling to rote memorization prepare graduates for obsolescence; those that cultivate analytical judgment, ethical reasoning, and cross-disciplinary synthesis equip citizens to thrive alongside intelligent machines.",
            questions: [
                { q: "How does generative AI differ from earlier waves of industrial automation?", options: ["It only affects agricultural machinery.", "It directly impacts cognitive and knowledge-based tasks rather than solely manual labor.", "It eliminates the need for electricity.", "It prevents any productivity gains."], answer: 1, exp: "The first sentence contrasts earlier automation of routine manual labor with generative AI impacting cognitive tasks." },
                { q: "Why does the author describe the policy challenge as 'distributional rather than apocalyptic'?", options: ["AI will destroy all jobs overnight.", "The main risk is widening inequality between AI-literate workers and those lacking digital skills, not total job extinction.", "Technology never changes labor markets.", "Governments should ban computers in schools."], answer: 1, exp: "The passage notes AI-skilled workers gain wage premiums while digitally excluded workers risk marginalization." },
                { q: "Which educational approach does the author criticize as preparing graduates for obsolescence?", options: ["Ethical reasoning", "Cross-disciplinary synthesis", "Rote memorization", "Analytical judgment"], answer: 2, exp: "The final sentence directly warns that 'Education systems that cling to rote memorization prepare graduates for obsolescence'." },
                { q: "The tone of the passage can best be described as:", options: ["Alarmist and fatalistic", "Balanced and analytical", "Sarcastic and dismissive", "Nostalgic and sentimental"], answer: 1, exp: "The author weighs both displacement risks and historical productivity gains calmly and analytically." }
            ]
        },
        {
            id: "comp_3",
            title: "Passage 3: Institutional Trust & the Rule of Law",
            level: "CSS / Judiciary Standard",
            text: "Economic historians increasingly agree that natural resource endowments alone cannot explain why some nations achieve sustained prosperity while others stagnate. Far more decisive is the quality of domestic institutions—specifically, predictable contract enforcement, impartial courts, and transparent regulatory frameworks. When citizens and entrepreneurs trust that property rights will be protected regardless of political affiliation, capital flows toward long-term productive enterprise rather than short-term rent-seeking. Conversely, selective enforcement of the law breeds cynicism, encourages capital flight, and forces businesses into the informal sector to evade arbitrary taxation. Strengthening the rule of law is thus not merely a moral ideal; it is the indispensable foundation of economic dynamism and social cohesion.",
            questions: [
                { q: "What is the central thesis of the passage?", options: ["Natural resources are the sole determinant of national wealth.", "Strong, impartial institutions and the rule of law are decisive drivers of sustained economic prosperity.", "Informal economies always outperform formal economies.", "Short-term rent-seeking builds long-term social cohesion."], answer: 1, exp: "The passage argues institutional quality and rule of law are far more decisive than resource endowments." },
                { q: "According to the author, what is a direct consequence of selective law enforcement?", options: ["Higher foreign direct investment", "Elimination of the informal sector", "Cynicism, capital flight, and expansion of the informal sector", "Predictable contract enforcement"], answer: 2, exp: "Sentence four explicitly lists cynicism, capital flight, and businesses retreating into the informal sector." },
                { q: "In this context, 'indispensable' most closely means:", options: ["Optional", "Absolutely necessary", "Controversial", "Temporary"], answer: 1, exp: "Indispensable means essential or absolutely necessary." }
            ]
        }
    ],

    precisExercises: [
        {
            id: "precis_1",
            title: "Exercise 1: The True Purpose of Higher Education",
            passage: "In an era dominated by immediate market metrics, higher education is increasingly judged solely by how rapidly graduates secure lucrative employment. While vocational competence is undeniably vital for economic self-sufficiency, reducing universities to mere job-training factories impoverishes both the individual and the republic. True university education must cultivate intellectual curiosity, the capacity to evaluate competing evidence objectively, and the moral courage to question prevailing dogmas. A democracy cannot endure on technical proficiency alone; it requires citizens capable of discerning propaganda from fact, deliberating across ideological divides, and imagining humane solutions to collective crises. When societies underfund the humanities and pure sciences in favor of narrow utilitarianism, they forfeit the very habits of mind that sustain innovation and civic liberty over the long run.",
            modelTitles: [
                "Beyond Utility: The Civic Mission of Higher Education",
                "Higher Education: More Than Job Training",
                "The Intellectual and Democratic Purpose of Universities"
            ],
            modelPrecis: "Judging higher education solely by immediate employment outcomes undermines its deeper mission. Although career skills matter, universities must also nurture critical inquiry, objective reasoning, and civic ethics. Democracies depend on informed citizens who resist propaganda and think broadly; neglecting humanities and pure sciences for narrow utilitarianism ultimately weakens both innovation and liberty."
        },
        {
            id: "precis_2",
            title: "Exercise 2: Social Media & Public Discourse",
            passage: "Digital social networks were initially heralded as democratizing platforms that would dismantle gatekeeping and empower ordinary citizens to participate freely in public debate. In practice, however, engagement-driven algorithms frequently reward outrage, polarization, and sensationalism over nuanced deliberation. Because emotionally charged misinformation spreads faster than sober corrections, online echo chambers harden partisan identities and erode shared civic realities. Restoring healthy public discourse does not require authoritarian censorship, which poses its own grave dangers to free expression. Rather, it demands algorithmic transparency, independent fact-checking ecosystems, and widespread media literacy so that citizens become critical consumers rather than passive amplifiers of digital noise.",
            modelTitles: [
                "Social Media Algorithms and the Crisis of Public Discourse",
                "Reclaiming Civic Debate in the Algorithmic Age",
                "Combating Digital Polarization Without Censorship"
            ],
            modelPrecis: "Although social media promised to democratize debate, engagement-focused algorithms amplify outrage and misinformation, deepening polarization. Repairing public discourse requires avoiding authoritarian censorship and instead promoting algorithmic transparency, independent fact-checking, and public media literacy to foster responsible digital citizenship."
        },
        {
            id: "precis_3",
            title: "Exercise 3: Water Governance in the 21st Century",
            passage: "Freshwater scarcity is rapidly emerging as one of the defining strategic challenges of the twenty-first century. Population growth, inefficient flood-irrigation practices, groundwater depletion, and erratic monsoon patterns have pushed several river basins to the brink of chronic water stress. Treating water merely as a free and limitless gift of nature encourages massive conveyance losses and discourages conservation. Sustainable water security requires a comprehensive shift from supply-side mega-projects alone toward demand management: lining canals, adopting drip irrigation, pricing water equitably, recycling urban wastewater, and strengthening transboundary river treaties through scientific data-sharing.",
            modelTitles: [
                "From Abundance to Stewardship: Modern Water Governance",
                "Addressing 21st-Century Freshwater Scarcity",
                "Demand Management for Sustainable Water Security"
            ],
            modelPrecis: "Population pressure, wasteful irrigation, and climate variability are driving severe freshwater scarcity. Achieving water security requires moving beyond supply-side projects to active demand management—reducing canal losses, adopting efficient irrigation, recycling wastewater, fair pricing, and cooperative transboundary data-sharing."
        }
    ],

    essayOutlines: [
        {
            title: "Artificial Intelligence: Opportunity for Developing Economies or Catalyst for Inequality?",
            category: "Technology & Economy",
            thesis: "While Artificial Intelligence offers developing economies a historic leapfrog opportunity in healthcare, agriculture, and governance, its benefits will widen socio-economic inequality unless paired with universal digital infrastructure, curriculum overhaul, and ethical regulation.",
            outline: [
                "1. Introduction: The fourth industrial revolution; thesis statement framing AI as a double-edged catalyst.",
                "2. Transformative Opportunities for Developing Nations: Precision agriculture, telemedicine in rural districts, e-governance & tax digitization, and export-oriented IT services.",
                "3. Structural Risks & Catalysts of Inequality: Digital divide (broadband/electricity gaps), displacement of routine BPO/clerical jobs, algorithmic bias, and data colonialism.",
                "4. Case Studies: India's Digital Public Infrastructure (DPI) & Estonia's e-Governance vs. unregulated labor transitions.",
                "5. Way Forward: National AI Strategy, STEM & critical-thinking curriculum reform, reskilling funds, and data-protection legislation.",
                "6. Conclusion: Technology reflects institutional choices—proactive governance can turn AI into an equalizer."
            ]
        },
        {
            title: "Climate Justice and Developing Nations: From Vulnerability to Resilience",
            category: "Environment & IR",
            thesis: "Developing nations bear an asymmetric burden of climate devastation despite negligible historical emissions; therefore, genuine climate resilience requires both enforceable global climate finance (Loss & Damage Fund) and disciplined domestic adaptation governance.",
            outline: [
                "1. Introduction: Pakistan's 2022 mega-floods ($30B+ losses) as a stark symbol of climate injustice; thesis statement.",
                "2. The Science & Ethics of Climate Injustice: Less than 1% global emissions vs. Top-10 climate vulnerability index.",
                "3. Multi-Dimensional Impacts: Food insecurity, glacier melt in the HKH region, fiscal debt spirals, and internal climate migration.",
                "4. Global Accountability Deficit: Unmet $100B pledge, grant vs. loan trap, and operationalizing the COP28 Loss & Damage Fund.",
                "5. Domestic Imperatives: Climate-resilient infrastructure, urban flood zoning, drought-resistant seeds, and renewable energy transition.",
                "6. Conclusion: Climate justice is not charity—it is a shared planetary survival imperative."
            ]
        },
        {
            title: "Good Governance and Institutional Reform: The Missing Link in Economic Stability",
            category: "Governance & Economy",
            thesis: "Chronic fiscal crises and low investment in developing states stem less from resource scarcity than from weak governance; sustainable macroeconomic stability requires depoliticized civil services, rule of law, and transparent fiscal institutions.",
            outline: [
                "1. Introduction: Why nations with comparable resources diverge economically (Acemoglu & Robinson's institutional thesis).",
                "2. Anatomy of Governance Deficits: Elite capture, circular debt, untaxed sectors, red tape, and delayed judicial contract enforcement.",
                "3. How Weak Institutions Undermine Growth: Capital flight, low tax-to-GDP ratio, and erosion of investor confidence.",
                "4. Pillars of Institutional Reform: Merit-based civil service modernization, e-procurement, independent audit bodies, and devolved local governments.",
                "5. Global Benchmarks: Singapore's civil service meritocracy and Rwanda's ease-of-doing-business transformation.",
                "6. Conclusion: Economic bailouts buy time, but institutional reform secures sovereignty and prosperity."
            ]
        },
        {
            title: "Education Crisis and Youth Bulge: Turning Demographic Pressure into a Dividend",
            category: "Education & Society",
            thesis: "With over 60% of its population under 30, Pakistan stands at a demographic crossroads: without emergency investment in foundational literacy, TVET skills, and gender-equitable schooling, the youth bulge risks becoming a socio-economic liability rather than a dividend.",
            outline: [
                "1. Introduction: The demographic window of opportunity; 26M+ out-of-school children; thesis statement.",
                "2. Root Causes of the Education Crisis: Underfunding (<2% of GDP), rote-learning curricula, teacher absenteeism, and rural gender disparities.",
                "3. Economic & Social Fallout: Graduate unemployment, brain drain, and low labor productivity.",
                "4. Strategic Roadmap: Raising education spending to 4% of GDP, vocational/digital skills (TVET), public-private school partnerships, and female stipends.",
                "5. East Asian Lesson: How South Korea and Vietnam converted youth bulges into manufacturing & tech powerhouses.",
                "6. Conclusion: Investing in human capital is the highest-return national security strategy."
            ]
        },
        {
            title: "Women Empowerment: Catalyst for Sustainable Socio-Economic Development",
            category: "Gender & Society",
            thesis: "No nation can achieve sustained prosperity while half its human capital remains underutilized; true women empowerment requires dismantling structural barriers in education, financial inclusion, workplace safety, and legal inheritance.",
            outline: [
                "1. Introduction: IMF & World Bank findings on GDP gains from closing gender gaps; thesis statement.",
                "2. Current Barriers: Low female labor-force participation, unpaid care burden, mobility constraints, and weak enforcement of inheritance/harassment laws.",
                "3. Economic & Social Multiplier Effects: Improved child health/literacy, household resilience, and diverse institutional leadership.",
                "4. Policy Enablers: Safe public transport, childcare facilities, digital freelancing & microfinance access, and strict workplace protection.",
                "5. Conclusion: Empowering women is simultaneously a constitutional right and an economic necessity."
            ]
        },
        {
            title: "Multipolar World Order: Geopolitical Realignments and Diplomatic Challenges",
            category: "International Relations",
            thesis: "As the post-Cold War unipolar moment gives way to a fluid multipolar order marked by US-China rivalry and rising middle powers, developing states must practice pragmatic multi-alignment anchored in geo-economics rather than bloc politics.",
            outline: [
                "1. Introduction: Transition from unipolarity to contested multipolarity; thesis statement.",
                "2. Drivers of Multipolarity: China's economic rise, BRICS expansion, regionalization of trade, and shifts in global energy geopolitics.",
                "3. Flashpoints & Fragilities: Trade wars, tech decoupling, Middle East crises, and paralysis of multilateral institutions (UNSC, WTO).",
                "4. Strategic Imperatives for Middle & Developing Powers: Hedging, balanced connectivity (BRI/CPEC + Western trade), and regional trade integration.",
                "5. Conclusion: Strategic autonomy and internal economic strength remain the ultimate anchors in a multipolar world."
            ]
        }
    ]
};
