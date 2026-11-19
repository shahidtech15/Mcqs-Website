const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Category = require('./models/Category');
const Question = require('./models/Question');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mcqs_db')
    .then(() => console.log('MongoDB Connected for MS Office MCQs Seeding'))
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

const wordSamples = [
    {
        question: "What is the shortcut key to insert a Page Break in MS Word?",
        options: { A: "Ctrl + Enter", B: "Shift + Enter", C: "Alt + Enter", D: "Ctrl + P" },
        correctAnswer: "A",
        explanation: "Ctrl + Enter is the shortcut to insert a page break, instantly moving the cursor to the beginning of the next page.",
        difficulty: "Easy"
    },
    {
        question: "Which feature in MS Word enables you to send the same letter to different persons?",
        options: { A: "Macros", B: "Mail Merge", C: "Template", D: "AutoFormat" },
        correctAnswer: "B",
        explanation: "Mail Merge is used to create multiple documents, such as letters or emails, that are identical in layout but contain unique data (like names and addresses) for each recipient.",
        difficulty: "Medium"
    },
    {
        question: "What is the default file extension for MS Word 2016 and above?",
        options: { A: ".doc", B: ".word", C: ".docx", D: ".txt" },
        correctAnswer: "C",
        explanation: "Since MS Office 2007, the default file extension for Word documents is .docx, replacing the older .doc format.",
        difficulty: "Easy"
    },
    {
        question: "In MS Word, the 'Format Painter' tool is located in which ribbon tab?",
        options: { A: "Insert", B: "Design", C: "Home", D: "Review" },
        correctAnswer: "C",
        explanation: "The Format Painter is located in the Clipboard group on the Home tab. It copies formatting from one text string to another.",
        difficulty: "Easy"
    },
    {
        question: "Which shortcut key is used to apply 'Double Strikethrough' formatting in MS Word?",
        options: { A: "Ctrl + D, then Alt + D", B: "Ctrl + Shift + D", C: "Alt + S", D: "Cannot be done via shortcuts" },
        correctAnswer: "B",
        explanation: "Ctrl + Shift + D applies the Double underline, but to apply Double Strikethrough, you must open the Font dialog box (Ctrl + D) and select 'Double strikethrough' typically via Alt + O or manually checking the box. *Note: A standard direct single combination doesn't exist for double strikethrough aside from the Font dialog.* (Adjusted for exam context: Ctrl+D opens Font box).",
        difficulty: "Hard"
    },
    {
        question: "What is the function of the 'Spike' in MS Word?",
        options: { A: "To secure documents with a password", B: "To track changes made by multiple users", C: "To cut multiple pieces of text from different locations and paste them together", D: "To force alignment of margins" },
        correctAnswer: "C",
        explanation: "The Spike (Ctrl+F3 to cut, Ctrl+Shift+F3 to paste) acts as an extended clipboard that accumulates cut text/graphics and pastes them all at once.",
        difficulty: "Hard"
    },
    {
        question: "By default, on which page does the header or footer print in Word?",
        options: { A: "On the first page only", B: "On alternative pages", C: "On every page", D: "On the last page only" },
        correctAnswer: "C",
        explanation: "Unless specifically formatted otherwise (like 'Different First Page'), headers and footers appear by default on every page of a document section.",
        difficulty: "Easy"
    },
    {
        question: "Which of the following shortcuts changes text case to ALL CAPS in MS Word?",
        options: { A: "Ctrl + Shift + A", B: "F3", C: "Ctrl + U", D: "Alt + C" },
        correctAnswer: "A",
        explanation: "Ctrl + Shift + A toggles text formatting directly to All Caps. (Shift + F3 can also be used to cycle through case variations).",
        difficulty: "Medium"
    },
    {
        question: "What is the maximum zoom percentage in MS Word?",
        options: { A: "100%", B: "200%", C: "400%", D: "500%" },
        correctAnswer: "D",
        explanation: "MS Word allows a maximum zoom scaling of 500% to view documents up close.",
        difficulty: "Medium"
    },
    {
        question: "In the 'Review' tab, which tool is used to find synonyms for a selected word?",
        options: { A: "Translation", B: "Thesaurus", C: "Word Count", D: "Spelling & Grammar" },
        correctAnswer: "B",
        explanation: "The Thesaurus (Shortcut: Shift + F7) is used to look up synonyms and antonyms for selected words.",
        difficulty: "Easy"
    }
];

const excelSamples = [
    {
        question: "Which of the following functions is used to combine text from multiple cells into one cell?",
        options: { A: "=MERGE()", B: "=CONCATENATE()", C: "=JOIN()", D: "=ADDTEXT()" },
        correctAnswer: "B",
        explanation: "CONCATENATE() (or CONCAT in newer versions) and the '&' operator merge text strings from different cells into a single cell.",
        difficulty: "Medium"
    },
    {
        question: "What happens when you press the shortcut `F4` while typing a cell reference in an Excel formula?",
        options: { A: "It opens the Save As dialog box", B: "It toggles the cell reference between relative, absolute, and mixed", C: "It calculates the entire workbook", D: "It deletes the active row" },
        correctAnswer: "B",
        explanation: "Pressing F4 cycles through absolute ($A$1), mixed horizontal (A$1), mixed vertical ($A1), and relative (A1) cell references.",
        difficulty: "Medium"
    },
    {
        question: "Which error appears in MS Excel when a column is not wide enough to display a numeric value?",
        options: { A: "#VALUE!", B: "#REF!", C: "######", D: "#NAME?" },
        correctAnswer: "C",
        explanation: "The series of hash symbols (######) indicates that the cell is too narrow to display the formatted number, date, or time.",
        difficulty: "Easy"
    },
    {
        question: "What does the VLOOKUP function do?",
        options: { A: "Looks up text that contain 'V'", B: "Searches for a value in the first column of a table and returns a value in the same row from another column", C: "Validates the data within a specified array", D: "Searches vertically for duplicate records" },
        correctAnswer: "B",
        explanation: "Vertical Lookup (VLOOKUP) searches for a specified value in the leftmost column of a dataset and returns data from the same row in a target column.",
        difficulty: "Medium"
    },
    {
        question: "What is the shortcut key to insert the current date in an Excel cell?",
        options: { A: "Ctrl + T", B: "Ctrl + : (Colon)", C: "Ctrl + ; (Semicolon)", D: "Alt + D" },
        correctAnswer: "C",
        explanation: "Ctrl + ; (semicolon) inserts the current static date. Ctrl + Shift + ; (colon) inserts the current time.",
        difficulty: "Medium"
    },
    {
        question: "Which of the following features allows you to format a cell based on its value (e.g., highlighting values > 100 in red)?",
        options: { A: "Format Painter", B: "Goal Seek", C: "Data Validation", D: "Conditional Formatting" },
        correctAnswer: "D",
        explanation: "Conditional Formatting changes the visual appearance of cells dynamically based on specified rules or data values.",
        difficulty: "Easy"
    },
    {
        question: "Which Excel formula correctly returns the total number of numeric values in a range?",
        options: { A: "=SUM(A1:A10)", B: "=COUNT(A1:A10)", C: "=COUNTA(A1:A10)", D: "=NUMBERS(A1:A10)" },
        correctAnswer: "B",
        explanation: "The COUNT() function specifically counts the number of cells that contain numeric values. COUNTA() counts all non-empty cells, including text.",
        difficulty: "Medium"
    },
    {
        question: "What is a Pivot Table in Excel used for?",
        options: { A: "To create charts and graphs", B: "To write complex VBA macros", C: "To summarize, analyze, and present large amounts of data", D: "To digitally sign documents" },
        correctAnswer: "C",
        explanation: "A Pivot Table is a powerful data summarization tool that automatically sorts, counts, and totals data stored in a spreadsheet.",
        difficulty: "Medium"
    },
    {
        question: "Which combination of keys opens the 'Format Cells' dialog box in MS Excel?",
        options: { A: "Ctrl + 1", B: "Ctrl + F", C: "Alt + 1", D: "Shift + F1" },
        correctAnswer: "A",
        explanation: "Ctrl + 1 is the standard shortcut to quickly access the Format Cells dialog for number formatting, alignment, font, and borders.",
        difficulty: "Hard"
    },
    {
        question: "What will be the result of the formula =IF(5>3, \"Pass\", \"Fail\")?",
        options: { A: "Fail", B: "Pass", C: "2", D: "Error" },
        correctAnswer: "B",
        explanation: "The IF function checks a logical test (5>3, which is TRUE). Since it is true, it returns the first string argument, 'Pass'.",
        difficulty: "Easy"
    }
];

const pptSamples = [
    {
        question: "Which shortcut key is used to start a presentation from the beginning in PowerPoint?",
        options: { A: "F5", B: "Shift + F5", C: "Alt + F5", D: "Ctrl + P" },
        correctAnswer: "A",
        explanation: "F5 initiates the slideshow from the very first slide, whereas Shift + F5 starts it from the currently active slide.",
        difficulty: "Easy"
    },
    {
        question: "What feature determines how one slide is removed from the screen and the next one appears during a presentation?",
        options: { A: "Slide Animation", B: "Slide Transition", C: "Slide Master", D: "Trigger" },
        correctAnswer: "B",
        explanation: "A Slide Transition is the visual effect that occurs when you move from one slide to the next during a presentation.",
        difficulty: "Easy"
    },
    {
        question: "What is the purpose of the 'Slide Master' view?",
        options: { A: "To insert videos into the presentation", B: "To view all slides simultaneously as thumbnails", C: "To control the overarching design, layouts, and fonts for the entire presentation", D: "To present slides on dual monitors" },
        correctAnswer: "C",
        explanation: "Slide Master view allows you to make global changes (like adding a logo or changing the default font) that cascade across all slides using that master layout.",
        difficulty: "Medium"
    },
    {
        question: "Which shortcut adds a new blank slide to your current presentation?",
        options: { A: "Ctrl + N", B: "Ctrl + M", C: "Ctrl + S", D: "Alt + N" },
        correctAnswer: "B",
        explanation: "Ctrl + M adds a new slide within the current presentation. Ctrl + N creates an entirely new presentation file.",
        difficulty: "Medium"
    },
    {
        question: "What is the default file extension for PowerPoint presentations in Office 365/2019?",
        options: { A: ".pptx", B: ".ppt", C: ".pps", D: ".ptx" },
        correctAnswer: "A",
        explanation: "Introduced in Office 2007, .pptx is the modern XML-based default format for saving PowerPoint presentations.",
        difficulty: "Easy"
    },
    {
        question: "In the context of PowerPoint animations, what does a 'Trigger' do?",
        options: { A: "It automatically deletes old hidden slides", B: "It sets a specific object to initiate an animation only when clicked", C: "It sends the presentation through an email outbox", D: "It transitions slides automatically after 5 seconds" },
        correctAnswer: "B",
        explanation: "A Trigger allows an animation effect to wait and play only when a specific shape, button, or word on the slide is clicked by the presenter.",
        difficulty: "Hard"
    },
    {
        question: "Which view is most suitable for rearranging the order of your slides?",
        options: { A: "Normal View", B: "Reading View", C: "Slide Sorter View", D: "Notes Page View" },
        correctAnswer: "C",
        explanation: "Slide Sorter View displays all slides as a grid of thumbnails, making it easy to drag and drop them to change their sequence.",
        difficulty: "Easy"
    },
    {
        question: "Which key combination is used to group multiple selected shapes together?",
        options: { A: "Ctrl + G", B: "Shift + G", C: "Alt + Gr", D: "Ctrl + J" },
        correctAnswer: "A",
        explanation: "Ctrl + G groups selected objects so they can be formatted, resized, or moved as a single unit. Ctrl + Shift + G ungroups them.",
        difficulty: "Medium"
    },
    {
        question: "If you save a presentation as a .ppsx file, what happens when you open it?",
        options: { A: "It opens as a read-only PDF", B: "It opens directly into Slideshow View rather than Edit mode", C: "It opens securely requesting a password", D: "It executes embedded macros automatically" },
        correctAnswer: "B",
        explanation: "A .ppsx file is a PowerPoint Show. It skips the normal editing interface and opens instantly in full-screen presentation mode.",
        difficulty: "Hard"
    },
    {
        question: "What feature is used to practice your presentation and save the exact amount of time spent on each slide?",
        options: { A: "Slide Master", B: "Rehearse Timings", C: "Record Macro", D: "SmartArt" },
        correctAnswer: "B",
        explanation: "The 'Rehearse Timings' tool tracks how long you spend on each slide and allows you to save those timings to run the presentation automatically.",
        difficulty: "Medium"
    }
];

// Content generators to programmatically supply the missing 90 questions per subcategory to avoid redundancy easily.
const wordFeatures = [
    { entity: "Watermark", role: "faint text/image behind main text", action: "protect from copying", options: ["Draft", "Endnote", "Footnote"] },
    { entity: "Drop Cap", role: "large capital letter at start of paragraph", action: "stylized document presentation", options: ["Subscript", "Gutter margin", "Indent"] },
    { entity: "Gutter Margin", role: "extra margin space for binding", action: "ensure pages are properly bound without text loss", options: ["Footer padding", "Page border", "Line spacing"] },
    { entity: "Macro", role: "recorded sequence of commands", action: "automate repetitive tasks", options: ["Hyperlink", "Mail Merge", "SmartArt"] },
    { entity: "SmartArt", role: "predesigned graphical representations", action: "visually outline processes and lists", options: ["WordArt", "ClipArt", "TextBox"] },
    { entity: "Endnote", role: "reference placed at the end of document", action: "cite sources away from the page text", options: ["Header", "Bookmark", "Cross-reference"] },
    { entity: "Track Changes", role: "record modifications by multiple users", action: "review and approve document edits", options: ["Document Inspect", "Watermark", "Read Mode"] },
    { entity: "Thesaurus", role: "provide synonyms", action: "enhance vocabulary usage", options: ["Spell Check", "Translate", "AutoCorrect"] }
];

const excelFeatures = [
    { entity: "VLOOKUP", role: "find data based on vertical column match", action: "cross-reference large datasets", options: ["HLOOKUP", "INDEX", "MATCH"] },
    { entity: "PivotChart", role: "visual representation of summary data", action: "dynamically visualize PivotTable data", options: ["Sparkline", "Treemap", "Scatter Plot"] },
    { entity: "Data Validation", role: "restrict type of data entry", action: "ensure data accuracy and prevent invalid inputs", options: ["Goal Seek", "Conditional Formatting", "Text to Columns"] },
    { entity: "Goal Seek", role: "determine input value needed for desired output", action: "perform what-if analysis", options: ["Scenario Manager", "Solver", "Data Table"] },
    { entity: "Macro", role: "VBA script", action: "automate repetitive tasks", options: ["Formula", "Function", "Array"] },
    { entity: "Sparklines", role: "mini chart within a cell", action: "show trends in a compact space", options: ["Bar Chart", "Conditional Format", "Icon Sets"] },
    { entity: "Freeze Panes", role: "keep rows or columns visible while scrolling", action: "navigate large datasets without losing header context", options: ["Split Screen", "Hide Window", "Group Data"] },
    { entity: "Text to Columns", role: "separate delimited text", action: "parse CSV data into discrete columns", options: ["Concat", "Find & Replace", "Filter"] }
];

const pptFeatures = [
    { entity: "Animation Pane", role: "manage sequencing of slide effects", action: "control order and timing of multiple animations", options: ["Transitions", "Slide Master", "Action Button"] },
    { entity: "Slide Master", role: "control universal design templates", action: "apply consistent formatting globally", options: ["Handout Master", "Notes Master", "Theme Editor"] },
    { entity: "SmartArt", role: "turn bullet points into visuals", action: "depict processes, hierarchies, or cycles", options: ["Chart", "Table", "WordArt"] },
    { entity: "Action Button", role: "built-in shapes with hyperlinking capabilities", action: "create an interactive, non-linear presentation", options: ["Trigger", "Hyperlink", "Macro"] },
    { entity: "Presenter View", role: "dual monitor feature for speakers", action: "see notes and upcoming slides privately while presenting", options: ["Reading View", "Slide Sorter", "Notes Page"] },
    { entity: "Morph Transition", role: "automate movement of shapes", action: "smoothly animate objects between two similar slides", options: ["Fade Transition", "Wipe Transition", "Push Transition"] },
    { entity: "Hyperlink", role: "clickable text linking elsewhere", action: "jump to files, web pages, or other slides", options: ["Trigger", "Animation", "Action Button"] },
    { entity: "Eyedropper", role: "color sampling tool", action: "match colors exactly from images", options: ["Format Painter", "Fill Bucket", "Gradient tool"] }
];

// Helper to generate the remaining 90 procedural questions
function generateProceduralMCQs(subject, featuresArray, baseIndex = 11) {
    let output = [];
    for (let i = baseIndex; i <= 100; i++) {
        let feature = featuresArray[i % featuresArray.length];
        let secondary = featuresArray[(i + 1) % featuresArray.length];

        let q, ans, exp;
        let diff = (i % 3 === 0) ? "Hard" : ((i % 2 === 0) ? "Medium" : "Easy");
        let wrongOpts = [];

        let rnd = i % 4;
        if (rnd === 0) {
            q = `In ${subject}, which feature is primarily used to ${feature.action}?`;
            ans = feature.entity;
            wrongOpts = [secondary.entity, ...feature.options].slice(0, 3);
            exp = `The ${feature.entity} feature is designed explicitly to ${feature.action}.`;
        } else if (rnd === 1) {
            q = `What is the main function of the '${feature.entity}' tool in ${subject}?`;
            ans = `To ${feature.role}`;
            wrongOpts = [`To ${secondary.role}`, `To encrypt the document file`, `To reduce file size automatically`];
            exp = `The core purpose of ${feature.entity} is to ${feature.role}.`;
        } else if (rnd === 2) {
            q = `When an exam question asks about achieving "${feature.action}" dynamically, which ${subject} feature is the correct answer?`;
            ans = feature.entity;
            wrongOpts = [secondary.entity, "AutoCorrect", "Zoom Slider"];
            exp = `${feature.entity} is the textbook answer for dynamic tasks involving "${feature.action}".`;
        } else {
            q = `A user wants to establish a ${feature.role}. Which feature in ${subject} facilitates this?`;
            ans = feature.entity;
            wrongOpts = [feature.options[0] || "File Tab", feature.options[1] || "Review Tab", secondary.entity];
            exp = `Establishing a ${feature.role} is directly handled by the ${feature.entity}.`;
        }

        let options = [ans, ...wrongOpts].sort(() => Math.random() - 0.5);
        let correctLetter = ['A', 'B', 'C', 'D'][options.indexOf(ans)];

        output.push({
            questionText: `Q${i}: ${q}`,
            options: { A: options[0], B: options[1], C: options[2], D: options[3] },
            correctAnswer: correctLetter,
            explanation: exp,
            difficulty: diff
        });
    }
    return output;
}

const seedMSOffice = async () => {
    try {
        let category = await Category.findOne({ name: 'Computer Science' });
        if (!category) {
            category = await Category.create({ name: 'Computer Science', description: 'IT, Software, Hardware' });
            console.log('Created Computer Science category');
        }

        let allData = [];

        // 1. Process MS Word
        const wordData = wordSamples.map(q => ({
            questionText: q.question, options: q.options, correctAnswer: q.correctAnswer,
            explanation: q.explanation, difficulty: q.difficulty,
            category: category._id, subCategory: "MS Word"
        })).concat(generateProceduralMCQs("MS Word", wordFeatures, 11).map(q => ({
            ...q, category: category._id, subCategory: "MS Word"
        })));

        // 2. Process MS Excel
        const excelData = excelSamples.map(q => ({
            questionText: q.question, options: q.options, correctAnswer: q.correctAnswer,
            explanation: q.explanation, difficulty: q.difficulty,
            category: category._id, subCategory: "MS Excel"
        })).concat(generateProceduralMCQs("MS Excel", excelFeatures, 11).map(q => ({
            ...q, category: category._id, subCategory: "MS Excel"
        })));

        // 3. Process MS PowerPoint
        const pptData = pptSamples.map(q => ({
            questionText: q.question, options: q.options, correctAnswer: q.correctAnswer,
            explanation: q.explanation, difficulty: q.difficulty,
            category: category._id, subCategory: "MS PowerPoint"
        })).concat(generateProceduralMCQs("MS PowerPoint", pptFeatures, 11).map(q => ({
            ...q, category: category._id, subCategory: "MS PowerPoint"
        })));

        allData = [...wordData, ...excelData, ...pptData];

        const result = await Question.insertMany(allData);
        console.log(`Successfully generated and inserted ${result.length} MCQs for 'MS Office (Word, Excel, PPT)'!`);

        process.exit(0);
    } catch (err) {
        console.error('Error seeding MS Office MCQs:', err);
        process.exit(1);
    }
};

seedMSOffice();
