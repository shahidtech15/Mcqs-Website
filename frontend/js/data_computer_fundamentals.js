/**
 * CSS Prep Central - 300 High-Yield Computer Fundamentals MCQs Bank (Easy -> Medium -> Hard)
 * Covers all 10 Core Computer Fundamentals Syllabus Topics (History & Generations, Hardware & CPU,
 * Input/Output Devices, Memory & Storage, Number Systems & Logic, Software & OS, Networks & Internet,
 * Databases & DBMS, Cybersecurity & Malware, and MS Office & Shortcuts).
 * Easy: 117 | Medium: 102 | Hard: 81 | Total: 300
 */
(function (global) {
  'use strict';

  const COMPUTER_FUNDAMENTALS_MCQS = [
  {
    "_id": "cf_001",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "History & Generations",
    "difficulty": "Easy",
    "questionText": "Who is universally recognized as the \"Father of the Computer\" for designing the Analytical Engine?",
    "options": {
      "A": "Charles Babbage",
      "B": "John von Neumann",
      "C": "Blaise Pascal",
      "D": "Alan Turing"
    },
    "correctAnswer": "A",
    "explanation": "Charles Babbage conceptualized the mechanical Analytical Engine in the 1830s with an arithmetic mill, memory store, and punched-card input."
  },
  {
    "_id": "cf_002",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "History & Generations",
    "difficulty": "Easy",
    "questionText": "Who is celebrated as the world's first computer programmer for writing an algorithm for Babbage's Analytical Engine?",
    "options": {
      "A": "Grace Hopper",
      "B": "Margaret Hamilton",
      "C": "Hedy Lamarr",
      "D": "Ada Lovelace"
    },
    "correctAnswer": "D",
    "explanation": "Augusta Ada King, Countess of Lovelace, published the first algorithm intended for machine execution (computing Bernoulli numbers) in 1843."
  },
  {
    "_id": "cf_003",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "History & Generations",
    "difficulty": "Easy",
    "questionText": "Which primary electronic switching component characterized First-Generation computers (1940–1956)?",
    "options": {
      "A": "Microprocessors",
      "B": "Transistors",
      "C": "Vacuum tubes",
      "D": "Integrated circuits"
    },
    "correctAnswer": "C",
    "explanation": "First-generation machines like ENIAC and UNIVAC relied on thousands of bulky, heat-generating vacuum tubes."
  },
  {
    "_id": "cf_004",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "History & Generations",
    "difficulty": "Easy",
    "questionText": "Second-Generation computers (1956–1963) replaced vacuum tubes with:",
    "options": {
      "A": "Optical fibers",
      "B": "Transistors",
      "C": "Quantum qubits",
      "D": "Microprocessors"
    },
    "correctAnswer": "B",
    "explanation": "Invented at Bell Labs in 1947, transistors made second-generation computers smaller, faster, cheaper, and more reliable."
  },
  {
    "_id": "cf_005",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "History & Generations",
    "difficulty": "Easy",
    "questionText": "Third-Generation computers (1964–1971) were defined by the introduction of:",
    "options": {
      "A": "Vacuum tubes",
      "B": "Integrated Circuits (ICs)",
      "C": "Magnetic drums only",
      "D": "Punch cards only"
    },
    "correctAnswer": "B",
    "explanation": "Integrated Circuits (Jack Kilby & Robert Noyce) packed multiple transistors onto a single silicon chip."
  },
  {
    "_id": "cf_006",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "History & Generations",
    "difficulty": "Easy",
    "questionText": "Fourth-Generation computers (1971–present) are powered by:",
    "options": {
      "A": "VLSI Microprocessors",
      "B": "Abacus beads",
      "C": "Vacuum tubes",
      "D": "Relays"
    },
    "correctAnswer": "A",
    "explanation": "Very Large Scale Integration (VLSI) placed millions to billions of transistors onto a single microprocessor chip."
  },
  {
    "_id": "cf_007",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "History & Generations",
    "difficulty": "Easy",
    "questionText": "Fifth-Generation computing focuses primarily on:",
    "options": {
      "A": "Mechanical gears",
      "B": "Vacuum diodes",
      "C": "Punch cards",
      "D": "Artificial Intelligence (AI), parallel processing, and ULSI"
    },
    "correctAnswer": "D",
    "explanation": "Fifth-generation computing emphasizes AI, natural language processing, neural networks, and Ultra Large Scale Integration (ULSI)."
  },
  {
    "_id": "cf_008",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "History & Generations",
    "difficulty": "Easy",
    "questionText": "What does the acronym ENIAC stand for?",
    "options": {
      "A": "Enhanced Network Interface and Controller",
      "B": "Electronic Natural Intelligence and Computing",
      "C": "Electronic Numerical Integrator and Computer",
      "D": "External Node Input and Compiler"
    },
    "correctAnswer": "C",
    "explanation": "Completed in 1945 by J. Presper Eckert and John Mauchly, ENIAC was the first programmable general-purpose electronic digital computer."
  },
  {
    "_id": "cf_009",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "History & Generations",
    "difficulty": "Easy",
    "questionText": "What was the world's first commercially available general-purpose computer delivered in 1951?",
    "options": {
      "A": "Apple I",
      "B": "ENIAC",
      "C": "UNIVAC I",
      "D": "IBM PC"
    },
    "correctAnswer": "C",
    "explanation": "UNIVAC I (Universal Automatic Computer I) was famously used to predict the 1952 U.S. presidential election."
  },
  {
    "_id": "cf_010",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "History & Generations",
    "difficulty": "Easy",
    "questionText": "Which company released the world's first commercial single-chip microprocessor, the Intel 4004, in 1971?",
    "options": {
      "A": "IBM",
      "B": "Intel",
      "C": "Motorola",
      "D": "AMD"
    },
    "correctAnswer": "B",
    "explanation": "The 4-bit Intel 4004 (designed by Federico Faggin, Ted Hoff, Stan Mazor) launched the microprocessor revolution."
  },
  {
    "_id": "cf_011",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "History & Generations",
    "difficulty": "Easy",
    "questionText": "Which ancient calculating frame using sliding beads on rods is considered the earliest computing aid?",
    "options": {
      "A": "Abacus",
      "B": "Pascaline",
      "C": "Slide rule",
      "D": "Difference Engine"
    },
    "correctAnswer": "A",
    "explanation": "The Abacus was used across ancient Mesopotamia, China, and Rome for rapid arithmetic calculations."
  },
  {
    "_id": "cf_012",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "History & Generations",
    "difficulty": "Easy",
    "questionText": "Computers classified by size from largest/most powerful to smallest start with:",
    "options": {
      "A": "Laptops",
      "B": "Microcomputers",
      "C": "Minicomputers",
      "D": "Supercomputers"
    },
    "correctAnswer": "D",
    "explanation": "Supercomputers lead in raw FLOPS for weather modeling, nuclear simulations, and AI, followed by Mainframes, Minicomputers, and Microcomputers."
  },
  {
    "_id": "cf_013",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Hardware & CPU Architecture",
    "difficulty": "Easy",
    "questionText": "Which component is known as the \"Brain of the Computer\"?",
    "options": {
      "A": "Monitor",
      "B": "Power Supply",
      "C": "Hard Disk",
      "D": "Central Processing Unit (CPU)"
    },
    "correctAnswer": "D",
    "explanation": "The CPU fetches, decodes, and executes program instructions and coordinates all system operations."
  },
  {
    "_id": "cf_014",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Hardware & CPU Architecture",
    "difficulty": "Easy",
    "questionText": "What are the two core functional units inside a classic CPU?",
    "options": {
      "A": "Monitor and Keyboard",
      "B": "RAM and Hard Drive",
      "C": "Arithmetic Logic Unit (ALU) and Control Unit (CU)",
      "D": "Modem and Router"
    },
    "correctAnswer": "C",
    "explanation": "The ALU executes arithmetic/logical operations while the CU directs data flow and instruction sequencing."
  },
  {
    "_id": "cf_015",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Hardware & CPU Architecture",
    "difficulty": "Easy",
    "questionText": "Which unit inside the CPU performs addition, subtraction, comparisons (>, <, =), and Boolean operations (AND, OR, NOT)?",
    "options": {
      "A": "Southbridge",
      "B": "Arithmetic Logic Unit (ALU)",
      "C": "Control Unit",
      "D": "BIOS"
    },
    "correctAnswer": "B",
    "explanation": "The ALU is the mathematical and logical engine of the processor."
  },
  {
    "_id": "cf_016",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Hardware & CPU Architecture",
    "difficulty": "Easy",
    "questionText": "The main printed circuit board that connects the CPU, RAM, storage, and expansion cards is the:",
    "options": {
      "A": "Motherboard (System Board)",
      "B": "UPS",
      "C": "Heat sink",
      "D": "Sound card"
    },
    "correctAnswer": "A",
    "explanation": "The motherboard provides electrical pathways (buses) and slots uniting all computer hardware components."
  },
  {
    "_id": "cf_017",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Hardware & CPU Architecture",
    "difficulty": "Easy",
    "questionText": "CPU clock speed is commonly measured in:",
    "options": {
      "A": "Hertz (MHz / GHz)",
      "B": "Bytes",
      "C": "Pixels",
      "D": "Watts"
    },
    "correctAnswer": "A",
    "explanation": "1 GHz equals one billion clock cycles per second, pacing the processor's internal operations."
  },
  {
    "_id": "cf_018",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Hardware & CPU Architecture",
    "difficulty": "Easy",
    "questionText": "What does BIOS stand for?",
    "options": {
      "A": "Bus Interface OS",
      "B": "Binary Input Output System",
      "C": "Built-In Operating Software",
      "D": "Basic Input/Output System"
    },
    "correctAnswer": "D",
    "explanation": "BIOS (and modern UEFI) firmware initializes hardware during boot via POST and loads the operating system."
  },
  {
    "_id": "cf_019",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Hardware & CPU Architecture",
    "difficulty": "Easy",
    "questionText": "What does POST stand for when a computer powers on?",
    "options": {
      "A": "Peripheral Operating Status Tool",
      "B": "Processor Overload Safety Trigger",
      "C": "Power-On Self-Test",
      "D": "Program Output System Test"
    },
    "correctAnswer": "C",
    "explanation": "POST checks critical hardware (CPU, RAM, video, keyboard) immediately at startup before handing control to the OS."
  },
  {
    "_id": "cf_020",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Hardware & CPU Architecture",
    "difficulty": "Easy",
    "questionText": "What is the purpose of a UPS (Uninterruptible Power Supply)?",
    "options": {
      "A": "Increase internet speed",
      "B": "Provide instant backup battery power and surge protection during power outages",
      "C": "Cool the CPU",
      "D": "Print documents"
    },
    "correctAnswer": "B",
    "explanation": "A UPS prevents sudden data loss and hardware damage during electricity blackouts or voltage spikes."
  },
  {
    "_id": "cf_021",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Hardware & CPU Architecture",
    "difficulty": "Easy",
    "questionText": "Which component converts AC wall power into regulated low-voltage DC power for internal computer parts?",
    "options": {
      "A": "NIC",
      "B": "SMPS / PSU (Power Supply Unit)",
      "C": "CPU",
      "D": "GPU"
    },
    "correctAnswer": "B",
    "explanation": "Switched-Mode Power Supplies (SMPS) deliver stable +3.3V, +5V, and +12V DC rails to components."
  },
  {
    "_id": "cf_022",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Hardware & CPU Architecture",
    "difficulty": "Easy",
    "questionText": "What does USB stand for?",
    "options": {
      "A": "Universal Serial Bus",
      "B": "Ultra Speed Bridge",
      "C": "User Storage Base",
      "D": "Unified System Bus"
    },
    "correctAnswer": "A",
    "explanation": "USB is the universal plug-and-play interface for connecting peripherals, storage, and power."
  },
  {
    "_id": "cf_023",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Hardware & CPU Architecture",
    "difficulty": "Easy",
    "questionText": "Which specialized processor is optimized for rendering 3D graphics, video, and parallel AI matrix computations?",
    "options": {
      "A": "CPU",
      "B": "CMOS",
      "C": "NIC",
      "D": "GPU (Graphics Processing Unit)"
    },
    "correctAnswer": "D",
    "explanation": "GPUs contain thousands of parallel cores ideal for rendering frames and deep learning workloads."
  },
  {
    "_id": "cf_024",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Hardware & CPU Architecture",
    "difficulty": "Easy",
    "questionText": "The small battery on the motherboard (CR2032) maintains the system clock and BIOS settings inside:",
    "options": {
      "A": "Printer spool",
      "B": "Hard disk",
      "C": "CMOS RAM",
      "D": "Optical drive"
    },
    "correctAnswer": "C",
    "explanation": "CMOS (Complementary Metal-Oxide-Semiconductor) low-power memory retains date, time, and hardware configuration when powered off."
  },
  {
    "_id": "cf_025",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Input & Output Devices",
    "difficulty": "Easy",
    "questionText": "Which of the following is strictly an INPUT device?",
    "options": {
      "A": "Speaker",
      "B": "Projector",
      "C": "Keyboard",
      "D": "Printer"
    },
    "correctAnswer": "C",
    "explanation": "A keyboard sends user keystroke data into the computer; printers, speakers, and projectors produce output."
  },
  {
    "_id": "cf_026",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Input & Output Devices",
    "difficulty": "Easy",
    "questionText": "Which of the following is strictly an OUTPUT device?",
    "options": {
      "A": "Scanner",
      "B": "Monitor (VDU)",
      "C": "Microphone",
      "D": "Joystick"
    },
    "correctAnswer": "B",
    "explanation": "A monitor (Visual Display Unit) displays visual output generated by the computer."
  },
  {
    "_id": "cf_027",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Input & Output Devices",
    "difficulty": "Easy",
    "questionText": "Which device acts as BOTH an input and an output device?",
    "options": {
      "A": "Touchscreen",
      "B": "Webcam",
      "C": "Mouse",
      "D": "Laser printer"
    },
    "correctAnswer": "A",
    "explanation": "A touchscreen displays visual output while simultaneously detecting touch input coordinates."
  },
  {
    "_id": "cf_028",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Input & Output Devices",
    "difficulty": "Easy",
    "questionText": "The standard English keyboard layout is named \"QWERTY\" after:",
    "options": {
      "A": "A computer brand",
      "B": "A military code",
      "C": "Its inventor's surname",
      "D": "The first six letters on the top left alphabetical row"
    },
    "correctAnswer": "D",
    "explanation": "Christopher Latham Sholes designed the QWERTY layout in the 1870s for typewriters to reduce mechanical key jams."
  },
  {
    "_id": "cf_029",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Input & Output Devices",
    "difficulty": "Easy",
    "questionText": "Which key combination is universally used to copy selected text or files in Windows?",
    "options": {
      "A": "Ctrl + X",
      "B": "Ctrl + V",
      "C": "Ctrl + Z",
      "D": "Ctrl + C"
    },
    "correctAnswer": "D",
    "explanation": "Ctrl+C copies, Ctrl+X cuts, Ctrl+V pastes, and Ctrl+Z undoes the last action."
  },
  {
    "_id": "cf_030",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Input & Output Devices",
    "difficulty": "Easy",
    "questionText": "Which input device reads vertical black-and-white bars on retail products at supermarket checkouts?",
    "options": {
      "A": "Trackball",
      "B": "MICR",
      "C": "Barcode Reader (Scanner)",
      "D": "Plotter"
    },
    "correctAnswer": "C",
    "explanation": "Barcode readers use optical sensors/lasers to decode product UPC/EAN identifiers instantly."
  },
  {
    "_id": "cf_031",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Input & Output Devices",
    "difficulty": "Easy",
    "questionText": "Which technology is used by banks to read special magnetic-ink account and routing numbers printed at the bottom of cheques?",
    "options": {
      "A": "OMR",
      "B": "MICR (Magnetic Ink Character Recognition)",
      "C": "QR",
      "D": "OCR"
    },
    "correctAnswer": "B",
    "explanation": "MICR reads magnetized iron-oxide ink characters accurately even if a cheque is stamped or folded."
  },
  {
    "_id": "cf_032",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Input & Output Devices",
    "difficulty": "Easy",
    "questionText": "Which input device is used to grade multiple-choice bubble answer sheets in FPSC, CSS MPT, and NTS exams?",
    "options": {
      "A": "OMR (Optical Mark Recognition)",
      "B": "MICR",
      "C": "Plotter",
      "D": "Webcam"
    },
    "correctAnswer": "A",
    "explanation": "OMR detects pencil/pen shading in predefined bubble positions rapidly and accurately."
  },
  {
    "_id": "cf_033",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Input & Output Devices",
    "difficulty": "Easy",
    "questionText": "Which technology converts scanned images of printed or handwritten text into editable digital text?",
    "options": {
      "A": "OCR (Optical Character Recognition)",
      "B": "DPI",
      "C": "OMR",
      "D": "MICR"
    },
    "correctAnswer": "A",
    "explanation": "OCR analyzes character shapes in scanned images and translates them into searchable, editable ASCII/Unicode text."
  },
  {
    "_id": "cf_034",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Input & Output Devices",
    "difficulty": "Easy",
    "questionText": "Which type of printer physically strikes an ink ribbon against paper (e.g., Dot Matrix)?",
    "options": {
      "A": "Laser printer",
      "B": "Thermal inkjet",
      "C": "Non-impact printer",
      "D": "Impact printer"
    },
    "correctAnswer": "D",
    "explanation": "Impact printers (Dot Matrix, Daisy Wheel) strike the paper, enabling carbon-copy multi-part forms but producing more noise."
  },
  {
    "_id": "cf_035",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Input & Output Devices",
    "difficulty": "Easy",
    "questionText": "Laser and Inkjet printers are classified as:",
    "options": {
      "A": "Impact printers",
      "B": "Line plotters",
      "C": "Non-impact printers",
      "D": "Input scanners"
    },
    "correctAnswer": "C",
    "explanation": "Non-impact printers form characters without mechanical striking, yielding quieter, faster, higher-resolution prints."
  },
  {
    "_id": "cf_036",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Input & Output Devices",
    "difficulty": "Easy",
    "questionText": "Which specialized output device is used by architects and engineers to print large-scale vector blueprints and CAD drawings?",
    "options": {
      "A": "Barcode reader",
      "B": "Plotter",
      "C": "Dot matrix printer",
      "D": "Microphone"
    },
    "correctAnswer": "B",
    "explanation": "Plotters produce precise large-format engineering plans, maps, and architectural schematics."
  },
  {
    "_id": "cf_037",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Input & Output Devices",
    "difficulty": "Easy",
    "questionText": "Printer resolution (sharpness) is measured in:",
    "options": {
      "A": "RPM",
      "B": "DPI (Dots Per Inch)",
      "C": "Mbps",
      "D": "GHz"
    },
    "correctAnswer": "B",
    "explanation": "Higher DPI means more microscopic ink/toner dots packed per linear inch, yielding sharper text and images."
  },
  {
    "_id": "cf_038",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Input & Output Devices",
    "difficulty": "Easy",
    "questionText": "The tiny glowing picture elements that make up an image on a monitor screen are called:",
    "options": {
      "A": "Pixels",
      "B": "Bytes",
      "C": "Sectors",
      "D": "Nodes"
    },
    "correctAnswer": "A",
    "explanation": "\"Pixel\" (Picture Element) is the smallest addressable dot on a digital display."
  },
  {
    "_id": "cf_039",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Input & Output Devices",
    "difficulty": "Easy",
    "questionText": "Which input device is primarily used to capture live audio/voice for calls, dictation, and recording?",
    "options": {
      "A": "Monitor",
      "B": "Speaker",
      "C": "Headphone",
      "D": "Microphone"
    },
    "correctAnswer": "D",
    "explanation": "A microphone converts acoustic sound waves into electrical/digital audio input signals."
  },
  {
    "_id": "cf_040",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Memory & Storage Hierarchy",
    "difficulty": "Easy",
    "questionText": "Which type of computer memory is VOLATILE, meaning its contents are lost when power is turned off?",
    "options": {
      "A": "Hard Disk Drive",
      "B": "DVD",
      "C": "RAM (Random Access Memory)",
      "D": "ROM"
    },
    "correctAnswer": "C",
    "explanation": "RAM holds actively running programs and data temporarily while powered on; it clears on shutdown."
  },
  {
    "_id": "cf_041",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Memory & Storage Hierarchy",
    "difficulty": "Easy",
    "questionText": "Which type of memory is NON-VOLATILE and permanently stores startup firmware (BIOS/UEFI)?",
    "options": {
      "A": "RAM",
      "B": "L1 Cache",
      "C": "ROM (Read-Only Memory)",
      "D": "CPU Register"
    },
    "correctAnswer": "C",
    "explanation": "ROM retains essential boot instructions permanently even without electricity."
  },
  {
    "_id": "cf_042",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Memory & Storage Hierarchy",
    "difficulty": "Easy",
    "questionText": "What is the smallest unit of digital data in a computer?",
    "options": {
      "A": "Kilobyte",
      "B": "Bit (Binary Digit: 0 or 1)",
      "C": "Byte",
      "D": "Nibble"
    },
    "correctAnswer": "B",
    "explanation": "A bit represents a single binary state (0 or 1); 4 bits = 1 Nibble; 8 bits = 1 Byte."
  },
  {
    "_id": "cf_043",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Memory & Storage Hierarchy",
    "difficulty": "Easy",
    "questionText": "How many bits make 1 Byte?",
    "options": {
      "A": "8 bits",
      "B": "16 bits",
      "C": "32 bits",
      "D": "4 bits"
    },
    "correctAnswer": "A",
    "explanation": "One byte consists of 8 bits, sufficient to encode one standard ASCII character (256 possible values)."
  },
  {
    "_id": "cf_044",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Memory & Storage Hierarchy",
    "difficulty": "Easy",
    "questionText": "How many bits make 1 Nibble?",
    "options": {
      "A": "2 bits",
      "B": "8 bits",
      "C": "16 bits",
      "D": "4 bits"
    },
    "correctAnswer": "D",
    "explanation": "A nibble is half a byte (4 bits), corresponding directly to a single hexadecimal digit (0–F)."
  },
  {
    "_id": "cf_045",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Memory & Storage Hierarchy",
    "difficulty": "Easy",
    "questionText": "In binary storage measurement, 1 Kilobyte (KiB) equals:",
    "options": {
      "A": "512 bytes",
      "B": "100 bytes",
      "C": "1,000,000 bytes",
      "D": "1,024 bytes"
    },
    "correctAnswer": "D",
    "explanation": "2¹⁰ = 1,024 bytes (1 KiB); similarly 1 MiB = 1,024 KiB, 1 GiB = 1,024 MiB, 1 TiB = 1,024 GiB."
  },
  {
    "_id": "cf_046",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Memory & Storage Hierarchy",
    "difficulty": "Easy",
    "questionText": "Which is the FASTEST memory located directly inside the CPU?",
    "options": {
      "A": "RAM",
      "B": "USB Flash Drive",
      "C": "CPU Registers",
      "D": "Hard Disk"
    },
    "correctAnswer": "C",
    "explanation": "Speed hierarchy from fastest to slowest: Registers > L1/L2/L3 Cache > RAM > SSD > HDD > Optical/Tape."
  },
  {
    "_id": "cf_047",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Memory & Storage Hierarchy",
    "difficulty": "Easy",
    "questionText": "High-speed memory placed between the CPU and main RAM to reduce average data access time is:",
    "options": {
      "A": "Hard Disk",
      "B": "Cache Memory",
      "C": "Floppy Disk",
      "D": "Magnetic Tape"
    },
    "correctAnswer": "B",
    "explanation": "Cache stores frequently accessed instructions/data so the CPU avoids slower trips to main RAM."
  },
  {
    "_id": "cf_048",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Memory & Storage Hierarchy",
    "difficulty": "Easy",
    "questionText": "What does SSD stand for in modern computer storage?",
    "options": {
      "A": "Solid-State Drive",
      "B": "System Software Drive",
      "C": "Super Speed Disk",
      "D": "Serial Storage Device"
    },
    "correctAnswer": "A",
    "explanation": "SSDs use NAND flash memory with zero moving mechanical parts, making them far faster and more durable than spinning HDDs."
  },
  {
    "_id": "cf_049",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Memory & Storage Hierarchy",
    "difficulty": "Easy",
    "questionText": "What is the typical storage capacity of a standard single-layer CD-ROM?",
    "options": {
      "A": "700 MB",
      "B": "4.7 GB",
      "C": "25 GB",
      "D": "1.44 MB"
    },
    "correctAnswer": "A",
    "explanation": "A standard CD holds ~700 MB, a single-layer DVD holds ~4.7 GB, and a single-layer Blu-ray disc holds 25 GB."
  },
  {
    "_id": "cf_050",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Memory & Storage Hierarchy",
    "difficulty": "Easy",
    "questionText": "Which storage medium is accessed SEQUENTIALLY rather than randomly, making it mainly useful for bulk archival backups?",
    "options": {
      "A": "SSD",
      "B": "RAM",
      "C": "NVMe Drive",
      "D": "Magnetic Tape"
    },
    "correctAnswer": "D",
    "explanation": "Magnetic tape must wind past earlier data to reach a target block, whereas RAM, SSDs, and HDDs support random/direct access."
  },
  {
    "_id": "cf_051",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Memory & Storage Hierarchy",
    "difficulty": "Easy",
    "questionText": "USB flash drives and SD memory cards use which type of non-volatile semiconductor memory?",
    "options": {
      "A": "Punched paper",
      "B": "Magnetic platters",
      "C": "Flash Memory (EEPROM-based NAND)",
      "D": "Vacuum tubes"
    },
    "correctAnswer": "C",
    "explanation": "NAND flash memory is electrically erasable, compact, shock-resistant, and requires no power to retain files."
  },
  {
    "_id": "cf_052",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Memory & Storage Hierarchy",
    "difficulty": "Easy",
    "questionText": "Primary memory (Main Memory) consists primarily of:",
    "options": {
      "A": "USB and Cloud",
      "B": "RAM and ROM",
      "C": "Printer and Scanner",
      "D": "HDD and DVD"
    },
    "correctAnswer": "B",
    "explanation": "Primary memory is directly addressable by the CPU, whereas secondary storage (HDD/SSD) holds long-term files."
  },
  {
    "_id": "cf_053",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Number Systems & Data Representation",
    "difficulty": "Easy",
    "questionText": "Computers internally process and store all data using which number system?",
    "options": {
      "A": "Decimal (Base 10)",
      "B": "Binary (Base 2)",
      "C": "Octal (Base 8)",
      "D": "Roman numerals"
    },
    "correctAnswer": "B",
    "explanation": "Digital circuits have two reliable voltage states (OFF = 0, ON = 1), making Base-2 binary ideal."
  },
  {
    "_id": "cf_054",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Number Systems & Data Representation",
    "difficulty": "Easy",
    "questionText": "What is the base (radix) of the Hexadecimal number system?",
    "options": {
      "A": "16",
      "B": "10",
      "C": "2",
      "D": "8"
    },
    "correctAnswer": "A",
    "explanation": "Hexadecimal uses 16 symbols: 0–9 and A–F (where A=10 through F=15)."
  },
  {
    "_id": "cf_055",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Number Systems & Data Representation",
    "difficulty": "Easy",
    "questionText": "What is the base (radix) of the Octal number system?",
    "options": {
      "A": "12",
      "B": "16",
      "C": "2",
      "D": "8"
    },
    "correctAnswer": "D",
    "explanation": "Octal uses digits 0 through 7; each octal digit maps cleanly to exactly 3 binary bits."
  },
  {
    "_id": "cf_056",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Number Systems & Data Representation",
    "difficulty": "Easy",
    "questionText": "What is the binary equivalent of the decimal number 10?",
    "options": {
      "A": "1000",
      "B": "1100",
      "C": "1010",
      "D": "1001"
    },
    "correctAnswer": "C",
    "explanation": "10 = 8 + 2 = (1×2³) + (0×2²) + (1×2¹) + (0×2⁰) = 1010₂."
  },
  {
    "_id": "cf_057",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Number Systems & Data Representation",
    "difficulty": "Easy",
    "questionText": "What is the decimal equivalent of the binary number 1111₂?",
    "options": {
      "A": "8",
      "B": "14",
      "C": "15",
      "D": "16"
    },
    "correctAnswer": "C",
    "explanation": "8 + 4 + 2 + 1 = 15 (which is also F in hexadecimal)."
  },
  {
    "_id": "cf_058",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Number Systems & Data Representation",
    "difficulty": "Easy",
    "questionText": "In Hexadecimal, the letter \"A\" represents which decimal value?",
    "options": {
      "A": "11",
      "B": "10",
      "C": "16",
      "D": "9"
    },
    "correctAnswer": "B",
    "explanation": "A=10, B=11, C=12, D=13, E=14, F=15."
  },
  {
    "_id": "cf_059",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Number Systems & Data Representation",
    "difficulty": "Easy",
    "questionText": "In Hexadecimal, the letter \"F\" represents which decimal value?",
    "options": {
      "A": "15",
      "B": "14",
      "C": "16",
      "D": "12"
    },
    "correctAnswer": "A",
    "explanation": "F is the highest single hexadecimal digit, equal to 15 in decimal and 1111 in binary."
  },
  {
    "_id": "cf_060",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Number Systems & Data Representation",
    "difficulty": "Easy",
    "questionText": "What does ASCII stand for?",
    "options": {
      "A": "Advanced Serial Computing Instruction Input",
      "B": "Automated System Code for Internet Integration",
      "C": "Applied Software Character Index Interface",
      "D": "American Standard Code for Information Interchange"
    },
    "correctAnswer": "D",
    "explanation": "Standard 7-bit ASCII encodes 128 characters (English letters, digits, punctuation, and control codes)."
  },
  {
    "_id": "cf_061",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Number Systems & Data Representation",
    "difficulty": "Easy",
    "questionText": "Which universal character encoding standard supports almost every script worldwide — including Urdu, Arabic, Chinese, and Emojis?",
    "options": {
      "A": "EBCDIC",
      "B": "Morse Code",
      "C": "7-bit ASCII",
      "D": "Unicode (e.g., UTF-8)"
    },
    "correctAnswer": "D",
    "explanation": "Unicode assigns a unique code point to over 150,000 characters across global writing systems; UTF-8 is the dominant web encoding."
  },
  {
    "_id": "cf_062",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Number Systems & Data Representation",
    "difficulty": "Easy",
    "questionText": "What is the output of a logic AND gate when both inputs are 1?",
    "options": {
      "A": "0",
      "B": "2",
      "C": "1",
      "D": "Undefined"
    },
    "correctAnswer": "C",
    "explanation": "An AND gate outputs 1 ONLY when all inputs are 1; otherwise it outputs 0."
  },
  {
    "_id": "cf_063",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Number Systems & Data Representation",
    "difficulty": "Easy",
    "questionText": "What is the output of a logic OR gate when inputs are 1 and 0?",
    "options": {
      "A": "Undefined",
      "B": "1",
      "C": "0",
      "D": "2"
    },
    "correctAnswer": "B",
    "explanation": "An OR gate outputs 1 whenever AT LEAST ONE input is 1."
  },
  {
    "_id": "cf_064",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Number Systems & Data Representation",
    "difficulty": "Easy",
    "questionText": "Which logic gate simply inverts its single input (0 becomes 1, and 1 becomes 0)?",
    "options": {
      "A": "NOT gate (Inverter)",
      "B": "OR gate",
      "C": "XOR gate",
      "D": "AND gate"
    },
    "correctAnswer": "A",
    "explanation": "A NOT gate performs Boolean negation (complement)."
  },
  {
    "_id": "cf_065",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Number Systems & Data Representation",
    "difficulty": "Easy",
    "questionText": "What is the decimal equivalent of the binary number 10000₂?",
    "options": {
      "A": "16",
      "B": "8",
      "C": "32",
      "D": "10"
    },
    "correctAnswer": "A",
    "explanation": "1 × 2⁴ = 16."
  },
  {
    "_id": "cf_066",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Software & Operating Systems",
    "difficulty": "Easy",
    "questionText": "Software is broadly classified into two primary categories:",
    "options": {
      "A": "Primary and Secondary software",
      "B": "Input and Output software",
      "C": "Hard and Soft software",
      "D": "System Software and Application Software"
    },
    "correctAnswer": "D",
    "explanation": "System software (OS, drivers, compilers) manages hardware; Application software (Word, browsers, games) performs user tasks."
  },
  {
    "_id": "cf_067",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Software & Operating Systems",
    "difficulty": "Easy",
    "questionText": "An Operating System (OS) acts primarily as an intermediary interface between:",
    "options": {
      "A": "Two cables",
      "B": "RAM and ROM only",
      "C": "Computer hardware and the user / application programs",
      "D": "Two printers"
    },
    "correctAnswer": "C",
    "explanation": "The OS abstracts complex hardware into clean services: process scheduling, memory management, file systems, and security."
  },
  {
    "_id": "cf_068",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Software & Operating Systems",
    "difficulty": "Easy",
    "questionText": "Which of the following is an Open-Source Operating System?",
    "options": {
      "A": "Windows 11",
      "B": "Linux (e.g., Ubuntu, Fedora)",
      "C": "macOS",
      "D": "iOS"
    },
    "correctAnswer": "B",
    "explanation": "Created by Linus Torvalds in 1991, the Linux kernel is open-source (GPL) and powers most servers, Android phones, and supercomputers."
  },
  {
    "_id": "cf_069",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Software & Operating Systems",
    "difficulty": "Easy",
    "questionText": "What does GUI stand for?",
    "options": {
      "A": "Guided Unit Input",
      "B": "Graphical User Interface",
      "C": "General Utility Interface",
      "D": "Global User Internet"
    },
    "correctAnswer": "B",
    "explanation": "GUIs let users interact visually via windows, icons, menus, and pointers (WIMP) rather than text-only command lines (CLI)."
  },
  {
    "_id": "cf_070",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Software & Operating Systems",
    "difficulty": "Easy",
    "questionText": "The process of starting or restarting a computer and loading the Operating System into RAM is called:",
    "options": {
      "A": "Booting",
      "B": "Spooling",
      "C": "Compiling",
      "D": "Formatting"
    },
    "correctAnswer": "A",
    "explanation": "Cold booting starts from power-off; Warm booting restarts an already-running system without cutting power."
  },
  {
    "_id": "cf_071",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Software & Operating Systems",
    "difficulty": "Easy",
    "questionText": "Which system program translates an ENTIRE high-level language program into machine code all at once before execution?",
    "options": {
      "A": "Interpreter",
      "B": "Loader",
      "C": "Text editor",
      "D": "Compiler"
    },
    "correctAnswer": "D",
    "explanation": "A Compiler translates the entire source file into an executable (fast runtime), whereas an Interpreter translates and executes line-by-line."
  },
  {
    "_id": "cf_072",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Software & Operating Systems",
    "difficulty": "Easy",
    "questionText": "Which language translator converts Assembly Language mnemonics (like ADD, MOV) into binary machine code?",
    "options": {
      "A": "Browser",
      "B": "Compiler",
      "C": "Assembler",
      "D": "Debugger"
    },
    "correctAnswer": "C",
    "explanation": "An Assembler maps low-level assembly instructions directly to processor opcodes."
  },
  {
    "_id": "cf_073",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Software & Operating Systems",
    "difficulty": "Easy",
    "questionText": "Which software allows the Operating System to communicate properly with a specific hardware device like a printer or GPU?",
    "options": {
      "A": "Spreadsheet",
      "B": "Web browser",
      "C": "Device Driver",
      "D": "Antivirus"
    },
    "correctAnswer": "C",
    "explanation": "Device drivers translate generic OS I/O calls into hardware-specific commands for each peripheral."
  },
  {
    "_id": "cf_074",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Software & Operating Systems",
    "difficulty": "Easy",
    "questionText": "MS Word, Adobe Photoshop, and Google Chrome are examples of:",
    "options": {
      "A": "System software",
      "B": "Application software",
      "C": "Firmware",
      "D": "Assemblers"
    },
    "correctAnswer": "B",
    "explanation": "Application software helps end-users accomplish specific productivity, creative, or communication goals."
  },
  {
    "_id": "cf_075",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Software & Operating Systems",
    "difficulty": "Easy",
    "questionText": "The core central component of an Operating System that stays resident in RAM and manages CPU, memory, and devices is the:",
    "options": {
      "A": "Kernel",
      "B": "Wallpaper",
      "C": "Shell",
      "D": "Desktop"
    },
    "correctAnswer": "A",
    "explanation": "The Kernel runs in privileged supervisor mode; the Shell provides the user command/GUI interface around it."
  },
  {
    "_id": "cf_076",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Software & Operating Systems",
    "difficulty": "Easy",
    "questionText": "Software that is permanently embedded into hardware ROM/Flash (such as a router OS or BIOS) is called:",
    "options": {
      "A": "Freeware",
      "B": "Adware",
      "C": "Shareware",
      "D": "Firmware"
    },
    "correctAnswer": "D",
    "explanation": "Firmware bridges hardware and software, providing low-level control for devices."
  },
  {
    "_id": "cf_077",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Software & Operating Systems",
    "difficulty": "Easy",
    "questionText": "Which Windows utility displays currently running processes, CPU/RAM usage, and lets you terminate unresponsive apps?",
    "options": {
      "A": "Paint",
      "B": "Notepad",
      "C": "Calculator",
      "D": "Task Manager (Ctrl + Shift + Esc)"
    },
    "correctAnswer": "D",
    "explanation": "Task Manager provides real-time performance monitoring and process control."
  },
  {
    "_id": "cf_078",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Computer Networks & Internet",
    "difficulty": "Easy",
    "questionText": "What does LAN stand for in computer networking?",
    "options": {
      "A": "Link Array Network",
      "B": "Large Area Network",
      "C": "Local Area Network",
      "D": "Logical Access Node"
    },
    "correctAnswer": "C",
    "explanation": "A LAN interconnects computers within a limited geographic area such as a home, office, or school campus."
  },
  {
    "_id": "cf_079",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Computer Networks & Internet",
    "difficulty": "Easy",
    "questionText": "The global network of interconnected networks spanning continents (such as the Internet) is an example of a:",
    "options": {
      "A": "LAN",
      "B": "WAN (Wide Area Network)",
      "C": "Bus",
      "D": "PAN"
    },
    "correctAnswer": "B",
    "explanation": "WANs link multiple LANs across cities, countries, and continents via fiber optics, satellites, and leased lines."
  },
  {
    "_id": "cf_080",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Computer Networks & Internet",
    "difficulty": "Easy",
    "questionText": "What does HTTP stand for on the World Wide Web?",
    "options": {
      "A": "HyperText Transfer Protocol",
      "B": "High Transfer Text Protocol",
      "C": "Hybrid Terminal Transport Path",
      "D": "Host Transmission Tracking Protocol"
    },
    "correctAnswer": "A",
    "explanation": "HTTP is the foundational application-layer protocol for fetching web pages; HTTPS adds TLS/SSL encryption."
  },
  {
    "_id": "cf_081",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Computer Networks & Internet",
    "difficulty": "Easy",
    "questionText": "What does URL stand for?",
    "options": {
      "A": "Uniform Resource Locator",
      "B": "User Reference Label",
      "C": "Universal Routing Link",
      "D": "Unified Register List"
    },
    "correctAnswer": "A",
    "explanation": "A URL (e.g., https://www.cssprepcentral.com/index.html) uniquely specifies the address and protocol of a web resource."
  },
  {
    "_id": "cf_082",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Computer Networks & Internet",
    "difficulty": "Easy",
    "questionText": "Which network device forwards data packets between different networks (such as your home LAN and the Internet) using IP addresses?",
    "options": {
      "A": "Repeater",
      "B": "Keyboard",
      "C": "Hub",
      "D": "Router"
    },
    "correctAnswer": "D",
    "explanation": "Routers operate at Layer 3 (Network Layer) of the OSI model, determining optimal paths across interconnected networks."
  },
  {
    "_id": "cf_083",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Computer Networks & Internet",
    "difficulty": "Easy",
    "questionText": "Which protocol translates human-readable domain names (like google.com) into numerical IP addresses?",
    "options": {
      "A": "FTP",
      "B": "SMTP",
      "C": "DNS (Domain Name System)",
      "D": "DHCP"
    },
    "correctAnswer": "C",
    "explanation": "DNS acts as the phonebook of the Internet, resolving domain names to IPv4/IPv6 addresses."
  },
  {
    "_id": "cf_084",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Computer Networks & Internet",
    "difficulty": "Easy",
    "questionText": "Which protocol is primarily used for SENDING outgoing emails across the Internet?",
    "options": {
      "A": "HTTP",
      "B": "SMTP (Simple Mail Transfer Protocol)",
      "C": "POP3",
      "D": "FTP"
    },
    "correctAnswer": "B",
    "explanation": "SMTP pushes/sends emails, while IMAP and POP3 retrieve emails from a mail server to a client."
  },
  {
    "_id": "cf_085",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Computer Networks & Internet",
    "difficulty": "Easy",
    "questionText": "What does IP stand for in IP Address?",
    "options": {
      "A": "Input Port",
      "B": "Internet Protocol",
      "C": "Integrated Processor",
      "D": "Internal Program"
    },
    "correctAnswer": "B",
    "explanation": "Every device on an IP network has a unique logical IP address (IPv4 32-bit or IPv6 128-bit) for routing."
  },
  {
    "_id": "cf_086",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Computer Networks & Internet",
    "difficulty": "Easy",
    "questionText": "What does Wi-Fi use to transmit data wirelessly between devices and a wireless access point?",
    "options": {
      "A": "Radio waves (IEEE 802.11 standard)",
      "B": "Sound waves",
      "C": "Copper wires",
      "D": "X-rays"
    },
    "correctAnswer": "A",
    "explanation": "Wi-Fi operates over unlicensed 2.4 GHz, 5 GHz, and 6 GHz radio frequency bands."
  },
  {
    "_id": "cf_087",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Computer Networks & Internet",
    "difficulty": "Easy",
    "questionText": "In which network topology are all computers connected to a single central switch or hub?",
    "options": {
      "A": "Mesh topology",
      "B": "Bus topology",
      "C": "Ring topology",
      "D": "Star topology"
    },
    "correctAnswer": "D",
    "explanation": "Star topology is the most common modern LAN design because a single cable failure affects only one host."
  },
  {
    "_id": "cf_088",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Computer Networks & Internet",
    "difficulty": "Easy",
    "questionText": "Who invented the World Wide Web (WWW), HTML, and the first web browser at CERN in 1989?",
    "options": {
      "A": "Vint Cerf",
      "B": "Steve Jobs",
      "C": "Tim Berners-Lee",
      "D": "Bill Gates"
    },
    "correctAnswer": "C",
    "explanation": "Sir Tim Berners-Lee created WWW to enable global hypertext information sharing."
  },
  {
    "_id": "cf_089",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Computer Networks & Internet",
    "difficulty": "Easy",
    "questionText": "What does MODEM stand for?",
    "options": {
      "A": "Modern Electronic Machine",
      "B": "Mobile Data Exchange Module",
      "C": "Modulator-Demodulator",
      "D": "Memory Output Device Manager"
    },
    "correctAnswer": "C",
    "explanation": "A modem modulates digital signals for transmission over analog/cable lines and demodulates incoming signals back to digital."
  },
  {
    "_id": "cf_090",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Databases & DBMS",
    "difficulty": "Easy",
    "questionText": "What does DBMS stand for?",
    "options": {
      "A": "Dynamic Bus Management Service",
      "B": "Database Management System",
      "C": "Digital Binary Memory System",
      "D": "Data Backup Monitoring Software"
    },
    "correctAnswer": "B",
    "explanation": "A DBMS (e.g., MySQL, PostgreSQL, Oracle, SQL Server) creates, organizes, secures, and queries structured databases."
  },
  {
    "_id": "cf_091",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Databases & DBMS",
    "difficulty": "Easy",
    "questionText": "In a Relational Database table, a single horizontal row representing one entity instance (e.g., one student) is called a:",
    "options": {
      "A": "Record / Tuple",
      "B": "Schema",
      "C": "Index",
      "D": "Attribute / Column"
    },
    "correctAnswer": "A",
    "explanation": "Columns are Attributes (Fields); Rows are Records (Tuples)."
  },
  {
    "_id": "cf_092",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Databases & DBMS",
    "difficulty": "Easy",
    "questionText": "A column (or combination of columns) that UNIQUELY identifies every row in a database table and cannot be NULL is the:",
    "options": {
      "A": "Foreign Key",
      "B": "Duplicate Key",
      "C": "Text Field",
      "D": "Primary Key"
    },
    "correctAnswer": "D",
    "explanation": "Every relational table has at most one Primary Key ensuring entity integrity (unique + NOT NULL)."
  },
  {
    "_id": "cf_093",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Databases & DBMS",
    "difficulty": "Easy",
    "questionText": "What does SQL stand for?",
    "options": {
      "A": "Standard Quality Link",
      "B": "Simple Query Logic",
      "C": "System Queue List",
      "D": "Structured Query Language"
    },
    "correctAnswer": "D",
    "explanation": "SQL is the universal declarative language for defining and querying relational databases."
  },
  {
    "_id": "cf_094",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Databases & DBMS",
    "difficulty": "Easy",
    "questionText": "Which SQL command is used to retrieve/read data from one or more database tables?",
    "options": {
      "A": "DELETE",
      "B": "DROP",
      "C": "SELECT",
      "D": "UPDATE"
    },
    "correctAnswer": "C",
    "explanation": "`SELECT columns FROM table WHERE condition;` is the fundamental SQL query statement."
  },
  {
    "_id": "cf_095",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Databases & DBMS",
    "difficulty": "Easy",
    "questionText": "Which SQL command permanently removes an entire table structure AND all its data from the database?",
    "options": {
      "A": "DELETE",
      "B": "DROP TABLE",
      "C": "SELECT",
      "D": "INSERT"
    },
    "correctAnswer": "B",
    "explanation": "`DELETE` removes rows (can be filtered with WHERE); `DROP TABLE` destroys the entire table definition and data."
  },
  {
    "_id": "cf_096",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Databases & DBMS",
    "difficulty": "Easy",
    "questionText": "A \"Foreign Key\" in a relational table is used primarily to:",
    "options": {
      "A": "Establish and enforce a referential integrity link to the Primary Key of another table",
      "B": "Delete backups",
      "C": "Encrypt passwords",
      "D": "Sort rows alphabetically"
    },
    "correctAnswer": "A",
    "explanation": "Foreign keys prevent orphan records and connect related tables (e.g., `Orders.customer_id` → `Customers.id`)."
  },
  {
    "_id": "cf_097",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Databases & DBMS",
    "difficulty": "Easy",
    "questionText": "Which of the following is a popular open-source Relational Database Management System (RDBMS)?",
    "options": {
      "A": "MySQL / PostgreSQL",
      "B": "VLC Media Player",
      "C": "WinRAR",
      "D": "MS Paint"
    },
    "correctAnswer": "A",
    "explanation": "MySQL and PostgreSQL are widely deployed open-source RDBMS engines powering millions of web apps."
  },
  {
    "_id": "cf_098",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Databases & DBMS",
    "difficulty": "Easy",
    "questionText": "Data about data (such as table schemas, column data types, and constraints stored in a Data Dictionary) is called:",
    "options": {
      "A": "Big Data",
      "B": "Raw Data",
      "C": "Cache",
      "D": "Metadata"
    },
    "correctAnswer": "D",
    "explanation": "Metadata describes the structure, format, and rules governing stored data."
  },
  {
    "_id": "cf_099",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Databases & DBMS",
    "difficulty": "Easy",
    "questionText": "What is \"Data Redundancy\" in legacy flat-file systems that a DBMS aims to minimize?",
    "options": {
      "A": "Data backups",
      "B": "Fast queries",
      "C": "Unnecessary duplication of the same data across multiple files leading to wasted storage and update anomalies",
      "D": "Strong encryption"
    },
    "correctAnswer": "C",
    "explanation": "Relational normalization reduces redundancy and ensures single-source-of-truth consistency."
  },
  {
    "_id": "cf_100",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Cybersecurity & Malware",
    "difficulty": "Easy",
    "questionText": "Software specifically designed to harm, exploit, or gain unauthorized access to a computer system is broadly called:",
    "options": {
      "A": "Firmware",
      "B": "Malware (Malicious Software)",
      "C": "Middleware",
      "D": "Freeware"
    },
    "correctAnswer": "B",
    "explanation": "Malware is the umbrella term encompassing viruses, worms, Trojans, ransomware, spyware, and adware."
  },
  {
    "_id": "cf_101",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Cybersecurity & Malware",
    "difficulty": "Easy",
    "questionText": "Which type of malware disguises itself as a legitimate useful program (like a free game or cracked tool) to trick users into installing it?",
    "options": {
      "A": "Worm",
      "B": "Trojan Horse",
      "C": "Firewall",
      "D": "Cookie"
    },
    "correctAnswer": "B",
    "explanation": "Named after the Greek wooden horse, a Trojan hides malicious payloads inside seemingly harmless software."
  },
  {
    "_id": "cf_102",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Cybersecurity & Malware",
    "difficulty": "Easy",
    "questionText": "Which type of malware encrypts a victim's files and demands payment (often in cryptocurrency) to restore access?",
    "options": {
      "A": "Ransomware",
      "B": "Rootkit",
      "C": "Adware",
      "D": "Spyware"
    },
    "correctAnswer": "A",
    "explanation": "Ransomware (like WannaCry) locks critical data; regular offline (3-2-1) backups are the strongest defense."
  },
  {
    "_id": "cf_103",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Cybersecurity & Malware",
    "difficulty": "Easy",
    "questionText": "Sending deceptive emails or SMS messages impersonating a bank or official agency to steal passwords or OTPs is called:",
    "options": {
      "A": "Debugging",
      "B": "Routing",
      "C": "Hashing",
      "D": "Phishing"
    },
    "correctAnswer": "D",
    "explanation": "Phishing exploits human trust (social engineering) rather than technical software flaws."
  },
  {
    "_id": "cf_104",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Cybersecurity & Malware",
    "difficulty": "Easy",
    "questionText": "Which security system monitors and filters incoming and outgoing network traffic based on predefined security rules?",
    "options": {
      "A": "Compiler",
      "B": "Defragmenter",
      "C": "Firewall",
      "D": "Plotter"
    },
    "correctAnswer": "C",
    "explanation": "Firewalls act as a protective barrier between a trusted internal network and untrusted external networks like the Internet."
  },
  {
    "_id": "cf_105",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Cybersecurity & Malware",
    "difficulty": "Easy",
    "questionText": "How does a Computer Worm differ primarily from a Computer Virus?",
    "options": {
      "A": "Worms only infect printers",
      "B": "Worms need a host file to attach to",
      "C": "A Worm is self-replicating and spreads autonomously across networks without needing to attach to a host file or human click",
      "D": "Viruses cannot spread"
    },
    "correctAnswer": "C",
    "explanation": "Viruses attach to executable host files; worms exploit network vulnerabilities to propagate independently."
  },
  {
    "_id": "cf_106",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Cybersecurity & Malware",
    "difficulty": "Easy",
    "questionText": "What does \"2FA / MFA\" (Two-Factor / Multi-Factor Authentication) require to log in?",
    "options": {
      "A": "Using a shorter password",
      "B": "Two or more independent verification factors (e.g., Password + OTP/Authenticator App or Biometric)",
      "C": "Disabling encryption",
      "D": "Typing the same password twice"
    },
    "correctAnswer": "B",
    "explanation": "Combining \"something you know\" with \"something you have\" or \"something you are\" stops most stolen-password attacks."
  },
  {
    "_id": "cf_107",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Cybersecurity & Malware",
    "difficulty": "Easy",
    "questionText": "The padlock icon and `https://` in a web browser address bar indicate that communication between your browser and the server is:",
    "options": {
      "A": "Encrypted in transit using TLS/SSL",
      "B": "Publicly readable",
      "C": "Offline",
      "D": "Virus-free forever"
    },
    "correctAnswer": "A",
    "explanation": "HTTPS protects confidentiality and integrity against eavesdropping on public Wi-Fi or networks."
  },
  {
    "_id": "cf_108",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Cybersecurity & Malware",
    "difficulty": "Easy",
    "questionText": "Malware that secretly records every key a user types in order to steal passwords and credit card numbers is a:",
    "options": {
      "A": "Assembler",
      "B": "Firewall",
      "C": "Spam filter",
      "D": "Keylogger (a type of Spyware)"
    },
    "correctAnswer": "D",
    "explanation": "Keyloggers capture keystrokes silently and exfiltrate credentials to attackers."
  },
  {
    "_id": "cf_109",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Cybersecurity & Malware",
    "difficulty": "Easy",
    "questionText": "Unsolicited bulk commercial or junk emails sent to millions of recipients are called:",
    "options": {
      "A": "Patches",
      "B": "Drivers",
      "C": "Cookies",
      "D": "Spam"
    },
    "correctAnswer": "D",
    "explanation": "Email gateways use SPF, DKIM, DMARC, and ML spam filters to block bulk junk and phishing mail."
  },
  {
    "_id": "cf_110",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "MS Office & Productivity Shortcuts",
    "difficulty": "Easy",
    "questionText": "In Microsoft Word, which keyboard shortcut saves the current document?",
    "options": {
      "A": "Ctrl + P",
      "B": "Ctrl + N",
      "C": "Ctrl + S",
      "D": "Ctrl + O"
    },
    "correctAnswer": "C",
    "explanation": "Ctrl+S saves, Ctrl+P prints, Ctrl+N creates a new document, and Ctrl+O opens an existing file."
  },
  {
    "_id": "cf_111",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "MS Office & Productivity Shortcuts",
    "difficulty": "Easy",
    "questionText": "In Microsoft Excel, EVERY formula or function MUST begin with which symbol?",
    "options": {
      "A": "$",
      "B": "=",
      "C": "#",
      "D": "@"
    },
    "correctAnswer": "B",
    "explanation": "Starting a cell with `=` tells Excel to evaluate the expression (e.g., `=SUM(A1:A10)`) rather than treating it as plain text."
  },
  {
    "_id": "cf_112",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "MS Office & Productivity Shortcuts",
    "difficulty": "Easy",
    "questionText": "In MS Excel, the intersection of a vertical Column (e.g., B) and a horizontal Row (e.g., 5) is called a:",
    "options": {
      "A": "Cell (referenced as B5)",
      "B": "Slide",
      "C": "Paragraph",
      "D": "Table"
    },
    "correctAnswer": "A",
    "explanation": "Each cell has a unique column-letter + row-number address used in formulas and ranges."
  },
  {
    "_id": "cf_113",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "MS Office & Productivity Shortcuts",
    "difficulty": "Easy",
    "questionText": "In MS PowerPoint, which function key starts the Slide Show from the very first slide?",
    "options": {
      "A": "F5",
      "B": "F1",
      "C": "F7",
      "D": "F12"
    },
    "correctAnswer": "A",
    "explanation": "F5 starts from Slide 1; Shift+F5 starts the slideshow from the currently selected slide."
  },
  {
    "_id": "cf_114",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "MS Office & Productivity Shortcuts",
    "difficulty": "Easy",
    "questionText": "What is the default file extension for modern Microsoft Word documents (Word 2007 and later)?",
    "options": {
      "A": ".pptx",
      "B": ".txt",
      "C": ".xlsx",
      "D": ".docx"
    },
    "correctAnswer": "D",
    "explanation": "Modern Office uses XML-based formats: `.docx` (Word), `.xlsx` (Excel), `.pptx` (PowerPoint)."
  },
  {
    "_id": "cf_115",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "MS Office & Productivity Shortcuts",
    "difficulty": "Easy",
    "questionText": "In MS Word, which feature automatically checks spelling and grammar errors while you type (also triggered by F7)?",
    "options": {
      "A": "Track Changes",
      "B": "Header",
      "C": "Spell Check / Editor (F7)",
      "D": "Mail Merge"
    },
    "correctAnswer": "C",
    "explanation": "Pressing F7 launches the Spelling & Grammar checker across MS Office applications."
  },
  {
    "_id": "cf_116",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "MS Office & Productivity Shortcuts",
    "difficulty": "Easy",
    "questionText": "Which keyboard shortcut makes selected text **Bold** in MS Word, Excel, and PowerPoint?",
    "options": {
      "A": "Ctrl + I",
      "B": "Ctrl + B",
      "C": "Ctrl + U",
      "D": "Ctrl + E"
    },
    "correctAnswer": "B",
    "explanation": "Ctrl+B = Bold, Ctrl+I = Italic, Ctrl+U = Underline, Ctrl+E = Center Align."
  },
  {
    "_id": "cf_117",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "MS Office & Productivity Shortcuts",
    "difficulty": "Easy",
    "questionText": "In MS Word, what is \"Portrait\" vs. \"Landscape\"?",
    "options": {
      "A": "Line spacing",
      "B": "Page Orientation (vertical taller page vs. horizontal wider page)",
      "C": "Font styles",
      "D": "Margin colors"
    },
    "correctAnswer": "B",
    "explanation": "Landscape orientation is especially helpful for wide tables and Excel charts."
  },
  {
    "_id": "cf_118",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "History & Generations",
    "difficulty": "Medium",
    "questionText": "Who proposed the \"Stored-Program Architecture\" where both instructions and data reside together in memory?",
    "options": {
      "A": "John von Neumann",
      "B": "Herman Hollerith",
      "C": "Konrad Zuse",
      "D": "Charles Babbage"
    },
    "correctAnswer": "A",
    "explanation": "The von Neumann architecture (1945 EDVAC report) remains the foundation of nearly all modern general-purpose computers."
  },
  {
    "_id": "cf_119",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "History & Generations",
    "difficulty": "Medium",
    "questionText": "Who invented the punched-card tabulating machine used in the 1890 U.S. Census and later founded the company that became IBM?",
    "options": {
      "A": "Blaise Pascal",
      "B": "Gottfried Leibniz",
      "C": "Howard Aiken",
      "D": "Herman Hollerith"
    },
    "correctAnswer": "D",
    "explanation": "Hollerith's Tabulating Machine Company merged into CTR, which was renamed International Business Machines (IBM) in 1924."
  },
  {
    "_id": "cf_120",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "History & Generations",
    "difficulty": "Medium",
    "questionText": "Which computer was the first to implement the stored-program concept in practical operation (1949, Cambridge)?",
    "options": {
      "A": "Harvard Mark I",
      "B": "ENIAC",
      "C": "EDSAC",
      "D": "Z1"
    },
    "correctAnswer": "C",
    "explanation": "Maurice Wilkes's EDSAC (Electronic Delay Storage Automatic Calculator) ran its first stored program in May 1949."
  },
  {
    "_id": "cf_121",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "History & Generations",
    "difficulty": "Medium",
    "questionText": "Alan Turing is regarded as the Father of Theoretical Computer Science and AI primarily for formulating the:",
    "options": {
      "A": "HTML language",
      "B": "Ethernet cable",
      "C": "Turing Machine and Turing Test",
      "D": "Transistor"
    },
    "correctAnswer": "C",
    "explanation": "Turing's 1936 universal machine formalized computation, and his 1950 Imitation Game (Turing Test) benchmarked machine intelligence."
  },
  {
    "_id": "cf_122",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "History & Generations",
    "difficulty": "Medium",
    "questionText": "Which mechanical calculator capable of addition and subtraction was invented by Blaise Pascal in 1642?",
    "options": {
      "A": "Napier's Bones",
      "B": "Pascaline",
      "C": "Stepped Reckoner",
      "D": "Jacquard Loom"
    },
    "correctAnswer": "B",
    "explanation": "Pascal built the Pascaline to assist his tax-collector father with arithmetic computations."
  },
  {
    "_id": "cf_123",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "History & Generations",
    "difficulty": "Medium",
    "questionText": "A Hybrid Computer combines the features of both:",
    "options": {
      "A": "Analog and Digital computers",
      "B": "Hardware and Cloud",
      "C": "Supercomputer and Smartphone",
      "D": "Client and Printer"
    },
    "correctAnswer": "A",
    "explanation": "Hybrid computers process continuous analog signals (e.g., ECG/ICU monitors, radar) and convert them into digital computations."
  },
  {
    "_id": "cf_124",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "History & Generations",
    "difficulty": "Medium",
    "questionText": "Which pioneering computer scientist developed the first compiler and helped design COBOL?",
    "options": {
      "A": "Linus Torvalds",
      "B": "Dennis Ritchie",
      "C": "Ada Lovelace",
      "D": "Grace Hopper"
    },
    "correctAnswer": "D",
    "explanation": "Rear Admiral Grace Hopper pioneered machine-independent programming languages and popularized the term \"debugging.\""
  },
  {
    "_id": "cf_125",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "History & Generations",
    "difficulty": "Medium",
    "questionText": "Which type of computer is engineered to support thousands of concurrent banking or airline transactions with extreme reliability?",
    "options": {
      "A": "Microcomputer",
      "B": "Embedded microcontroller",
      "C": "Netbook",
      "D": "Mainframe computer"
    },
    "correctAnswer": "D",
    "explanation": "Mainframes (e.g., IBM Z) prioritize massive I/O throughput, uptime, and transaction security."
  },
  {
    "_id": "cf_126",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "History & Generations",
    "difficulty": "Medium",
    "questionText": "Moore's Law (Gordon Moore, 1965) observed that the number of transistors on a microchip doubles roughly every:",
    "options": {
      "A": "25 years",
      "B": "6 months",
      "C": "18 to 24 months",
      "D": "10 years"
    },
    "correctAnswer": "C",
    "explanation": "Moore's empirical observation drove decades of exponential semiconductor scaling and cost reduction."
  },
  {
    "_id": "cf_127",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "History & Generations",
    "difficulty": "Medium",
    "questionText": "Which high-level programming language, developed by IBM in 1957 for scientific computing, is the oldest still in active use?",
    "options": {
      "A": "Java",
      "B": "FORTRAN",
      "C": "C++",
      "D": "Python"
    },
    "correctAnswer": "B",
    "explanation": "FORTRAN (Formula Translation), led by John Backus, revolutionized scientific and engineering programming."
  },
  {
    "_id": "cf_128",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Hardware & CPU Architecture",
    "difficulty": "Medium",
    "questionText": "What are the four standard steps of the CPU Machine Cycle (Instruction Cycle)?",
    "options": {
      "A": "Fetch, Decode, Execute, Store (Write-back)",
      "B": "Read, Print, Save, Delete",
      "C": "Boot, Login, Browse, Shutdown",
      "D": "Compile, Link, Load, Zip"
    },
    "correctAnswer": "A",
    "explanation": "The CPU repeatedly fetches an instruction from memory, decodes its opcode, executes it in the ALU, and writes back results."
  },
  {
    "_id": "cf_129",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Hardware & CPU Architecture",
    "difficulty": "Medium",
    "questionText": "Which CPU register holds the memory address of the NEXT instruction to be fetched?",
    "options": {
      "A": "Program Counter (PC)",
      "B": "Memory Data Register (MDR)",
      "C": "Accumulator (AC)",
      "D": "Instruction Register (IR)"
    },
    "correctAnswer": "A",
    "explanation": "The Program Counter (Instruction Pointer) automatically increments after each fetch unless altered by a jump/branch instruction."
  },
  {
    "_id": "cf_130",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Hardware & CPU Architecture",
    "difficulty": "Medium",
    "questionText": "Which CPU register temporarily stores the instruction currently being decoded and executed?",
    "options": {
      "A": "Stack Pointer",
      "B": "Status Register",
      "C": "Program Counter",
      "D": "Instruction Register (IR)"
    },
    "correctAnswer": "D",
    "explanation": "Once fetched from memory via the MDR, the instruction is placed in the IR for the Control Unit to decode."
  },
  {
    "_id": "cf_131",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Hardware & CPU Architecture",
    "difficulty": "Medium",
    "questionText": "A system bus consists of three distinct functional buses:",
    "options": {
      "A": "Input, Output, Power",
      "B": "LAN, WAN, MAN",
      "C": "Data Bus, Address Bus, and Control Bus",
      "D": "USB, HDMI, VGA"
    },
    "correctAnswer": "C",
    "explanation": "Address bus (unidirectional) carries memory addresses, Data bus (bidirectional) transfers data, and Control bus carries timing/read-write signals."
  },
  {
    "_id": "cf_132",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Hardware & CPU Architecture",
    "difficulty": "Medium",
    "questionText": "If a CPU has a 32-bit Address Bus, what is the maximum amount of byte-addressable RAM it can directly address?",
    "options": {
      "A": "64 TB",
      "B": "4 GB (2³² bytes)",
      "C": "2 GB",
      "D": "16 GB"
    },
    "correctAnswer": "B",
    "explanation": "2³² = 4,294,967,296 bytes = 4 GiB, which is why modern systems moved to 64-bit addressing."
  },
  {
    "_id": "cf_133",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Hardware & CPU Architecture",
    "difficulty": "Medium",
    "questionText": "Which CPU register stores intermediate arithmetic and logic results directly produced by the ALU?",
    "options": {
      "A": "MAR",
      "B": "Accumulator",
      "C": "Index Register",
      "D": "Program Counter"
    },
    "correctAnswer": "B",
    "explanation": "The Accumulator is a primary working register holding ALU outputs in classic processor designs."
  },
  {
    "_id": "cf_134",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Hardware & CPU Architecture",
    "difficulty": "Medium",
    "questionText": "What is the main advantage of a Multi-Core processor over a Single-Core processor at the same clock speed?",
    "options": {
      "A": "Executes multiple threads/tasks truly in parallel across independent cores",
      "B": "Uses zero electricity",
      "C": "Eliminates RAM completely",
      "D": "Requires no cooling"
    },
    "correctAnswer": "A",
    "explanation": "Multi-core CPUs boost throughput and multitasking efficiency without hitting the thermal wall of extreme single-core frequencies."
  },
  {
    "_id": "cf_135",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Hardware & CPU Architecture",
    "difficulty": "Medium",
    "questionText": "What does HDMI stand for in display hardware?",
    "options": {
      "A": "Hardware Direct Memory Interface",
      "B": "High-Density Media Index",
      "C": "Hybrid Digital Monitor Input",
      "D": "High-Definition Multimedia Interface"
    },
    "correctAnswer": "D",
    "explanation": "HDMI transmits uncompressed high-definition digital video and multi-channel audio over a single cable."
  },
  {
    "_id": "cf_136",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Hardware & CPU Architecture",
    "difficulty": "Medium",
    "questionText": "Which hardware interface replaced legacy BIOS on modern PCs, supporting >2 TB GPT drives, Secure Boot, and mouse-driven menus?",
    "options": {
      "A": "ISA",
      "B": "PCI",
      "C": "UEFI (Unified Extensible Firmware Interface)",
      "D": "DOS"
    },
    "correctAnswer": "C",
    "explanation": "UEFI provides faster boot times, 64-bit firmware, GPT partitioning, and cryptographic Secure Boot protection."
  },
  {
    "_id": "cf_137",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Hardware & CPU Architecture",
    "difficulty": "Medium",
    "questionText": "What is \"DMA\" (Direct Memory Access)?",
    "options": {
      "A": "A virus",
      "B": "Manual RAM installation",
      "C": "A hardware mechanism allowing high-speed I/O devices to transfer data directly to/from RAM without tying up the CPU",
      "D": "A display cable"
    },
    "correctAnswer": "C",
    "explanation": "DMA offloads bulk block transfers (disk, network) to a DMA controller, freeing the CPU for computation."
  },
  {
    "_id": "cf_138",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Input & Output Devices",
    "difficulty": "Medium",
    "questionText": "What does LCD stand for in modern flat-panel display technology?",
    "options": {
      "A": "Local Color Device",
      "B": "Liquid Crystal Display",
      "C": "Light Control Diode",
      "D": "Linear Cathode Display"
    },
    "correctAnswer": "B",
    "explanation": "LCD panels modulate light from a backlight through liquid crystal molecules controlled by electric fields."
  },
  {
    "_id": "cf_139",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Input & Output Devices",
    "difficulty": "Medium",
    "questionText": "How does an OLED display differ fundamentally from a standard LED-backlit LCD display?",
    "options": {
      "A": "Each OLED pixel emits its own light and can turn completely off for true blacks and infinite contrast",
      "B": "OLED cannot display color",
      "C": "OLED requires a bulky mercury tube",
      "D": "OLED uses cathode rays"
    },
    "correctAnswer": "A",
    "explanation": "Organic Light-Emitting Diodes eliminate the need for a separate backlight layer, enabling thin, flexible, high-contrast screens."
  },
  {
    "_id": "cf_140",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Input & Output Devices",
    "difficulty": "Medium",
    "questionText": "Laser printers fuse powdered ink onto paper using heat and pressure. What is this dry powdered ink called?",
    "options": {
      "A": "Liquid dye",
      "B": "Carbon paper",
      "C": "Ribbon wax",
      "D": "Toner"
    },
    "correctAnswer": "D",
    "explanation": "Laser printers use electrophotography: a laser draws an electrostatic charge on a drum that attracts toner, which a fuser melts onto paper."
  },
  {
    "_id": "cf_141",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Input & Output Devices",
    "difficulty": "Medium",
    "questionText": "The speed of a modern office laser or inkjet printer is usually rated in:",
    "options": {
      "A": "Hz",
      "B": "CPS (Characters Per Second)",
      "C": "DPI",
      "D": "PPM (Pages Per Minute)"
    },
    "correctAnswer": "D",
    "explanation": "Character printers use CPS, line printers use LPM, and page printers (Laser/Inkjet) use PPM."
  },
  {
    "_id": "cf_142",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Input & Output Devices",
    "difficulty": "Medium",
    "questionText": "What does \"Refresh Rate\" (e.g., 60 Hz, 120 Hz, 144 Hz) of a monitor measure?",
    "options": {
      "A": "Screen diagonal size",
      "B": "Power consumption",
      "C": "How many times per second the screen redraws the image",
      "D": "Number of colors"
    },
    "correctAnswer": "C",
    "explanation": "Higher refresh rates produce noticeably smoother motion in scrolling, video, and interactive applications."
  },
  {
    "_id": "cf_143",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Input & Output Devices",
    "difficulty": "Medium",
    "questionText": "Keys such as Shift, Ctrl, and Alt that change the function of another key pressed simultaneously are called:",
    "options": {
      "A": "Toggle keys",
      "B": "Modifier keys",
      "C": "Function keys",
      "D": "Navigation keys"
    },
    "correctAnswer": "B",
    "explanation": "Caps Lock, Num Lock, and Scroll Lock are Toggle keys; Shift, Ctrl, and Alt are Modifier keys."
  },
  {
    "_id": "cf_144",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Input & Output Devices",
    "difficulty": "Medium",
    "questionText": "How many standard Function Keys (F1 to F12) appear on a full-size modern PC keyboard?",
    "options": {
      "A": "12",
      "B": "16",
      "C": "8",
      "D": "10"
    },
    "correctAnswer": "A",
    "explanation": "F1 (Help) through F12 provide quick OS and application shortcuts across standard 104-key keyboards."
  },
  {
    "_id": "cf_145",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Input & Output Devices",
    "difficulty": "Medium",
    "questionText": "A \"Trackball\" is essentially an upside-down mechanical mouse that is especially useful when:",
    "options": {
      "A": "Desk space is very limited or ergonomic stationary wrist posture is needed",
      "B": "Scanning barcodes",
      "C": "Recording audio",
      "D": "Printing photos"
    },
    "correctAnswer": "A",
    "explanation": "Users roll the exposed ball with fingers/thumb without moving the device across a desk."
  },
  {
    "_id": "cf_146",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Input & Output Devices",
    "difficulty": "Medium",
    "questionText": "Which type of printer is commonly used in POS cash registers and ATM receipt machines using heat-sensitive paper?",
    "options": {
      "A": "Laser printer",
      "B": "Daisy-wheel printer",
      "C": "3D printer",
      "D": "Thermal printer"
    },
    "correctAnswer": "D",
    "explanation": "Direct thermal printers heat coated thermal paper selectively, requiring no ink cartridges or toner."
  },
  {
    "_id": "cf_147",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Input & Output Devices",
    "difficulty": "Medium",
    "questionText": "A \"Stylus\" paired with a \"Digitizer Tablet\" is most widely used by:",
    "options": {
      "A": "Server racks",
      "B": "Audio engineers only",
      "C": "Digital illustrators, graphic designers, and note-takers for pressure-sensitive freehand drawing",
      "D": "Network routers"
    },
    "correctAnswer": "C",
    "explanation": "Graphics tablets capture exact coordinates, tilt, and thousands of pressure levels for natural pen input."
  },
  {
    "_id": "cf_148",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Input & Output Devices",
    "difficulty": "Medium",
    "questionText": "Which color model do computer monitors and TVs use to produce millions of colors by mixing light?",
    "options": {
      "A": "Grayscale",
      "B": "RGB (Red, Green, Blue)",
      "C": "Pantone only",
      "D": "CMYK"
    },
    "correctAnswer": "B",
    "explanation": "Displays use additive RGB light mixing; color printers use subtractive CMYK (Cyan, Magenta, Yellow, Key/Black) inks."
  },
  {
    "_id": "cf_149",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Input & Output Devices",
    "difficulty": "Medium",
    "questionText": "A \"QR Code\" (Quick Response Code) improves on a traditional 1D barcode primarily because it:",
    "options": {
      "A": "Requires magnetic ink",
      "B": "Stores data in two dimensions (horizontally & vertically), holding far more data with built-in error correction",
      "C": "Works only in black rooms",
      "D": "Cannot store URLs"
    },
    "correctAnswer": "B",
    "explanation": "Invented by Denso Wave in 1994, 2D QR codes encode URLs, payments, and text rapidly from any angle."
  },
  {
    "_id": "cf_150",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Input & Output Devices",
    "difficulty": "Medium",
    "questionText": "What is a \"Biometric Input Device\"?",
    "options": {
      "A": "A sensor that authenticates users via unique physiological traits (fingerprint, iris, facial geometry)",
      "B": "A joystick",
      "C": "A standard mouse",
      "D": "A laser printer"
    },
    "correctAnswer": "A",
    "explanation": "Biometric scanners strengthen security because biological traits are hard to forge or forget."
  },
  {
    "_id": "cf_151",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Input & Output Devices",
    "difficulty": "Medium",
    "questionText": "Which port was historically standard for analog monitors (15-pin blue connector) before DVI, HDMI, and DisplayPort?",
    "options": {
      "A": "RJ-45",
      "B": "PS/2",
      "C": "USB-C",
      "D": "VGA (Video Graphics Array)"
    },
    "correctAnswer": "D",
    "explanation": "VGA carries analog RGB video signals, whereas HDMI and DisplayPort carry pure digital signals."
  },
  {
    "_id": "cf_152",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Input & Output Devices",
    "difficulty": "Medium",
    "questionText": "A \"Braille Embosser\" is an assistive output device that produces:",
    "options": {
      "A": "3D plastic toys",
      "B": "Audio podcasts",
      "C": "Raised tactile Braille dots on paper for visually impaired readers",
      "D": "Color posters"
    },
    "correctAnswer": "C",
    "explanation": "Braille embossers translate digital text into tactile Braille output for blind users."
  },
  {
    "_id": "cf_153",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Memory & Storage Hierarchy",
    "difficulty": "Medium",
    "questionText": "What is the key difference between SRAM (Static RAM) and DRAM (Dynamic RAM)?",
    "options": {
      "A": "DRAM has no power requirement",
      "B": "DRAM is faster and used for L1 cache",
      "C": "SRAM uses flip-flops (faster, costlier, no refresh needed — used in Cache); DRAM uses capacitors (needs periodic refresh — used in main RAM)",
      "D": "SRAM is non-volatile"
    },
    "correctAnswer": "C",
    "explanation": "DRAM's single-transistor/capacitor cell enables huge affordable capacity (GBs), while SRAM's 6-transistor cell powers ultra-fast CPU caches."
  },
  {
    "_id": "cf_154",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Memory & Storage Hierarchy",
    "difficulty": "Medium",
    "questionText": "What does EEPROM stand for?",
    "options": {
      "A": "External Encrypted Processor Output Memory",
      "B": "Electrically Erasable Programmable Read-Only Memory",
      "C": "Enhanced Error-Proof Operating Memory",
      "D": "Extended Electronic Programmable Optical Memory"
    },
    "correctAnswer": "B",
    "explanation": "Unlike UV-EPROM (erased by ultraviolet light), EEPROM can be erased and reprogrammed electrically in-circuit."
  },
  {
    "_id": "cf_155",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Memory & Storage Hierarchy",
    "difficulty": "Medium",
    "questionText": "What is \"Virtual Memory\" in an operating system?",
    "options": {
      "A": "Using a portion of secondary storage (page file/swap) as an extension of RAM so programs larger than physical RAM can run",
      "B": "Cloud storage on Google Drive",
      "C": "Fake RAM stickers",
      "D": "CPU cache only"
    },
    "correctAnswer": "A",
    "explanation": "Virtual memory provides each process an illusion of large contiguous memory via demand paging managed by the MMU."
  },
  {
    "_id": "cf_156",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Memory & Storage Hierarchy",
    "difficulty": "Medium",
    "questionText": "On a spinning magnetic Hard Disk Drive (HDD), concentric circular rings on each platter are called:",
    "options": {
      "A": "Frames",
      "B": "Clusters",
      "C": "Registers",
      "D": "Tracks (which are further divided into Sectors)"
    },
    "correctAnswer": "D",
    "explanation": "Tracks are concentric circles; pie-slice subdivisions of a track are Sectors (traditionally 512 bytes or 4 KB)."
  },
  {
    "_id": "cf_157",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Memory & Storage Hierarchy",
    "difficulty": "Medium",
    "questionText": "Arrange the following storage units in strictly ASCENDING order of size:",
    "options": {
      "A": "MB < KB < TB < GB",
      "B": "GB < MB < PB < TB",
      "C": "TB < GB < MB < KB",
      "D": "KB < MB < GB < TB < PB"
    },
    "correctAnswer": "D",
    "explanation": "Kilobyte (10³) < Megabyte (10⁶) < Gigabyte (10⁹) < Terabyte (10¹²) < Petabyte (10¹⁵) < Exabyte (10¹⁸)."
  },
  {
    "_id": "cf_158",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Memory & Storage Hierarchy",
    "difficulty": "Medium",
    "questionText": "Which type of memory is DDR5 (Double Data Rate 5)?",
    "options": {
      "A": "Hard disk",
      "B": "Optical disc",
      "C": "Synchronous Dynamic RAM (SDRAM) transferring data on both rising and falling clock edges",
      "D": "ROM"
    },
    "correctAnswer": "C",
    "explanation": "DDR transfers twice per clock cycle, dramatically increasing memory bandwidth for modern CPUs."
  },
  {
    "_id": "cf_159",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Memory & Storage Hierarchy",
    "difficulty": "Medium",
    "questionText": "What does \"Access Time\" of a storage device measure?",
    "options": {
      "A": "Power wattage",
      "B": "The time elapsed from issuing a read/write request until data transfer begins",
      "C": "Total gigabytes",
      "D": "Device warranty length"
    },
    "correctAnswer": "B",
    "explanation": "For HDDs, access time includes mechanical seek time + rotational latency; SSDs slash access time to microseconds."
  },
  {
    "_id": "cf_160",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Memory & Storage Hierarchy",
    "difficulty": "Medium",
    "questionText": "What is \"Disk Defragmentation\" on a traditional mechanical HDD?",
    "options": {
      "A": "Reorganizing scattered file fragments into contiguous sectors to reduce head movement and speed up reads",
      "B": "Formatting to zero",
      "C": "Installing RAM",
      "D": "Deleting all files"
    },
    "correctAnswer": "A",
    "explanation": "Note: SSDs should NOT be defragmented (they use TRIM instead) because flash has zero seek latency and limited write cycles."
  },
  {
    "_id": "cf_161",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Memory & Storage Hierarchy",
    "difficulty": "Medium",
    "questionText": "Which high-speed storage protocol connects modern M.2 SSDs directly over PCIe lanes, vastly outperforming legacy SATA?",
    "options": {
      "A": "NVMe (Non-Volatile Memory Express)",
      "B": "IDE / PATA",
      "C": "SCSI-1",
      "D": "Floppy bus"
    },
    "correctAnswer": "A",
    "explanation": "NVMe exploits PCIe parallelism and deep command queues to reach 3,500–14,000+ MB/s throughput."
  },
  {
    "_id": "cf_162",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Memory & Storage Hierarchy",
    "difficulty": "Medium",
    "questionText": "What is a \"Cache Hit\"?",
    "options": {
      "A": "A virus infection",
      "B": "Dropping a hard drive",
      "C": "A power surge",
      "D": "When the CPU finds the requested instruction or data directly in fast cache memory without accessing slower RAM"
    },
    "correctAnswer": "D",
    "explanation": "High cache hit ratios (>95%) are made possible by temporal and spatial locality of reference."
  },
  {
    "_id": "cf_163",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Memory & Storage Hierarchy",
    "difficulty": "Medium",
    "questionText": "What does RAID stand for in enterprise server storage?",
    "options": {
      "A": "Rapid Archive Input Device",
      "B": "Remote Automated Index Drive",
      "C": "Redundant Array of Independent (or Inexpensive) Disks",
      "D": "Random Access Internal Disk"
    },
    "correctAnswer": "C",
    "explanation": "RAID combines multiple drives for performance (RAID 0 striping), fault tolerance (RAID 1 mirroring, RAID 5/6 parity), or both (RAID 10)."
  },
  {
    "_id": "cf_164",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Memory & Storage Hierarchy",
    "difficulty": "Medium",
    "questionText": "Which RAID level provides exact mirroring of data across two disks for fault tolerance?",
    "options": {
      "A": "RAID 0",
      "B": "RAID 1",
      "C": "RAID 5",
      "D": "JBOD"
    },
    "correctAnswer": "B",
    "explanation": "RAID 0 stripes for speed (zero redundancy); RAID 1 mirrors identically so if one disk fails, the system keeps running."
  },
  {
    "_id": "cf_165",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Number Systems & Data Representation",
    "difficulty": "Medium",
    "questionText": "What is the Hexadecimal equivalent of the binary number 1011 1101₂?",
    "options": {
      "A": "DF",
      "B": "BD",
      "C": "AD",
      "D": "CB"
    },
    "correctAnswer": "B",
    "explanation": "Group into 4-bit nibbles: 1011₂ = 11 = B; 1101₂ = 13 = D → BD₁₆."
  },
  {
    "_id": "cf_166",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Number Systems & Data Representation",
    "difficulty": "Medium",
    "questionText": "What is the Decimal equivalent of the Hexadecimal number 1F₁₆?",
    "options": {
      "A": "31",
      "B": "32",
      "C": "16",
      "D": "25"
    },
    "correctAnswer": "A",
    "explanation": "(1 × 16¹) + (15 × 16⁰) = 16 + 15 = 31."
  },
  {
    "_id": "cf_167",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Number Systems & Data Representation",
    "difficulty": "Medium",
    "questionText": "What is the Octal equivalent of the binary number 110 101₂?",
    "options": {
      "A": "56",
      "B": "75",
      "C": "35",
      "D": "65"
    },
    "correctAnswer": "D",
    "explanation": "Group into 3-bit chunks from right: 110₂ = 6, 101₂ = 5 → 65₈."
  },
  {
    "_id": "cf_168",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Number Systems & Data Representation",
    "difficulty": "Medium",
    "questionText": "Which two logic gates are called \"Universal Gates\" because any Boolean function can be constructed using only one of them?",
    "options": {
      "A": "NOT and OR",
      "B": "AND and OR",
      "C": "NAND and NOR",
      "D": "XOR and XNOR"
    },
    "correctAnswer": "C",
    "explanation": "Both NAND and NOR are functionally complete; entire CPUs can be synthesized from NAND gates alone."
  },
  {
    "_id": "cf_169",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Number Systems & Data Representation",
    "difficulty": "Medium",
    "questionText": "What is the output of an XOR (Exclusive-OR) gate when both inputs are identical (0,0 or 1,1)?",
    "options": {
      "A": "Undefined",
      "B": "Depends on clock",
      "C": "0",
      "D": "1"
    },
    "correctAnswer": "C",
    "explanation": "XOR outputs 1 only when its two inputs DIFFER (0,1 or 1,0) — essential for binary adders and parity checks."
  },
  {
    "_id": "cf_170",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Number Systems & Data Representation",
    "difficulty": "Medium",
    "questionText": "In ASCII encoding, what is the decimal code for uppercase letter \"A\"?",
    "options": {
      "A": "32",
      "B": "65",
      "C": "97",
      "D": "48"
    },
    "correctAnswer": "B",
    "explanation": "Key ASCII landmarks: Space = 32, \"0\" = 48, \"A\" = 65, \"a\" = 97 (lowercase = uppercase + 32)."
  },
  {
    "_id": "cf_171",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Number Systems & Data Representation",
    "difficulty": "Medium",
    "questionText": "How do modern computers universally represent signed (positive and negative) integers in binary?",
    "options": {
      "A": "Two's Complement representation",
      "B": "BCD only",
      "C": "Sign-magnitude only",
      "D": "Roman signs"
    },
    "correctAnswer": "A",
    "explanation": "Two's complement has a single representation for zero and allows addition/subtraction using the exact same adder hardware."
  },
  {
    "_id": "cf_172",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Number Systems & Data Representation",
    "difficulty": "Medium",
    "questionText": "What is the 1's complement of the binary number 101001₂?",
    "options": {
      "A": "101010",
      "B": "111111",
      "C": "010111",
      "D": "010110"
    },
    "correctAnswer": "D",
    "explanation": "1's complement flips every bit (0→1, 1→0); adding 1 to the 1's complement yields the 2's complement (010111)."
  },
  {
    "_id": "cf_173",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Number Systems & Data Representation",
    "difficulty": "Medium",
    "questionText": "What is the 2's complement of the 4-bit binary number 0101₂ (+5)?",
    "options": {
      "A": "1010",
      "B": "1100",
      "C": "0110",
      "D": "1011 (-5)"
    },
    "correctAnswer": "D",
    "explanation": "Flip bits of 0101 → 1010, then add 1 → 1011 (which represents -5 in 4-bit signed two's complement)."
  },
  {
    "_id": "cf_174",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Number Systems & Data Representation",
    "difficulty": "Medium",
    "questionText": "What does BCD stand for in digital electronics?",
    "options": {
      "A": "Bit Compression Driver",
      "B": "Binary Control Device",
      "C": "Binary-Coded Decimal",
      "D": "Basic Character Data"
    },
    "correctAnswer": "C",
    "explanation": "BCD encodes each decimal digit (0–9) separately into its own 4-bit binary nibble (e.g., 25 = 0010 0101)."
  },
  {
    "_id": "cf_175",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Number Systems & Data Representation",
    "difficulty": "Medium",
    "questionText": "What is the binary sum of 1011₂ + 0110₂?",
    "options": {
      "A": "11101₂",
      "B": "10001₂",
      "C": "10101₂",
      "D": "10000₂"
    },
    "correctAnswer": "B",
    "explanation": "11 + 6 = 17; in binary, 17 = 16 + 1 = 10001₂."
  },
  {
    "_id": "cf_176",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Number Systems & Data Representation",
    "difficulty": "Medium",
    "questionText": "Which legacy 8-bit character encoding was developed and used primarily by IBM mainframes?",
    "options": {
      "A": "EBCDIC (Extended Binary Coded Decimal Interchange Code)",
      "B": "ASCII",
      "C": "UTF-16",
      "D": "Gray Code"
    },
    "correctAnswer": "A",
    "explanation": "EBCDIC was IBM's mainframe standard before ASCII and Unicode unified computing platforms."
  },
  {
    "_id": "cf_177",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Software & Operating Systems",
    "difficulty": "Medium",
    "questionText": "In Operating Systems, a \"Process\" is best defined as:",
    "options": {
      "A": "A program in active execution along with its current state, registers, stack, and memory",
      "B": "A compiler error",
      "C": "A static file saved on disk",
      "D": "A hardware port"
    },
    "correctAnswer": "A",
    "explanation": "A program is passive code on disk; a process is a living dynamic instance of that program running in memory."
  },
  {
    "_id": "cf_178",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Software & Operating Systems",
    "difficulty": "Medium",
    "questionText": "Which CPU scheduling algorithm assigns every ready process a fixed small time slice (quantum) in cyclic order?",
    "options": {
      "A": "Shortest Job First",
      "B": "Priority only",
      "C": "FCFS (First-Come, First-Served)",
      "D": "Round Robin (RR)"
    },
    "correctAnswer": "D",
    "explanation": "Round Robin ensures fair responsiveness in interactive time-sharing operating systems."
  },
  {
    "_id": "cf_179",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Software & Operating Systems",
    "difficulty": "Medium",
    "questionText": "What is \"Deadlock\" in an Operating System?",
    "options": {
      "A": "A computer screen turning black",
      "B": "Fast multitasking",
      "C": "A state where two or more processes wait indefinitely for resources held by each other and none can proceed",
      "D": "A keyboard shortcut"
    },
    "correctAnswer": "C",
    "explanation": "Coffman's 4 necessary deadlock conditions: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait."
  },
  {
    "_id": "cf_180",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Software & Operating Systems",
    "difficulty": "Medium",
    "questionText": "Which type of Operating System guarantees strict deterministic response deadlines (used in aircraft avionics, robotics, and medical devices)?",
    "options": {
      "A": "Network OS",
      "B": "Real-Time Operating System (RTOS)",
      "C": "Batch OS",
      "D": "Desktop OS"
    },
    "correctAnswer": "B",
    "explanation": "Hard real-time OSs must never miss critical timing deadlines, unlike general-purpose OSs optimized for average throughput."
  },
  {
    "_id": "cf_181",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Software & Operating Systems",
    "difficulty": "Medium",
    "questionText": "What is the difference between \"Multitasking\" and \"Multiprocessing\"?",
    "options": {
      "A": "Multiprocessing uses only 1 core",
      "B": "Multitasking rapidly switches one CPU among multiple tasks; Multiprocessing executes tasks simultaneously across multiple physical CPUs/cores",
      "C": "Multitasking requires 2 monitors",
      "D": "They are identical"
    },
    "correctAnswer": "B",
    "explanation": "Modern computers combine both preemptive multitasking and symmetric multiprocessing (SMP)."
  },
  {
    "_id": "cf_182",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Software & Operating Systems",
    "difficulty": "Medium",
    "questionText": "Which modern Windows file system supports large >4 GB files, file-level permissions (ACLs), encryption, and journaling?",
    "options": {
      "A": "NTFS (New Technology File System)",
      "B": "FAT16",
      "C": "FAT12",
      "D": "CP/M"
    },
    "correctAnswer": "A",
    "explanation": "NTFS replaced FAT32 for Windows system drives due to its reliability, journaling crash-recovery, and security features."
  },
  {
    "_id": "cf_183",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Software & Operating Systems",
    "difficulty": "Medium",
    "questionText": "A \"Thread\" is often called a \"Lightweight Process\" because threads within the same process:",
    "options": {
      "A": "Never communicate",
      "B": "Have no CPU access",
      "C": "Run only on printers",
      "D": "Share the same code, data, and heap address space while keeping only their own stack and registers, making context switches much faster"
    },
    "correctAnswer": "D",
    "explanation": "Shared memory makes multithreading fast and efficient, though it requires synchronization (mutexes/semaphores) to avoid race conditions."
  },
  {
    "_id": "cf_184",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Software & Operating Systems",
    "difficulty": "Medium",
    "questionText": "In the Software Development Life Cycle (SDLC), which phase gathers functional and non-functional needs before designing the system?",
    "options": {
      "A": "Deployment",
      "B": "Testing",
      "C": "Requirement Analysis",
      "D": "Maintenance"
    },
    "correctAnswer": "C",
    "explanation": "Classic SDLC phases: Planning → Requirement Analysis → Design → Implementation (Coding) → Testing → Deployment → Maintenance."
  },
  {
    "_id": "cf_185",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Software & Operating Systems",
    "difficulty": "Medium",
    "questionText": "What is \"Open-Source Software\" (OSS)?",
    "options": {
      "A": "Software that is always illegal",
      "B": "Software with no features",
      "C": "Software whose source code is publicly available under a license allowing anyone to inspect, modify, and redistribute it",
      "D": "Paid trialware only"
    },
    "correctAnswer": "C",
    "explanation": "Examples include Linux, Python, PostgreSQL, Firefox, and VS Code (core)."
  },
  {
    "_id": "cf_186",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Software & Operating Systems",
    "difficulty": "Medium",
    "questionText": "In OS memory management, what is \"Fragmentation\"?",
    "options": {
      "A": "Disk encryption",
      "B": "Wasted unusable memory gaps (internal inside allocated blocks, or external scattered free holes between blocks)",
      "C": "Breaking a RAM chip physically",
      "D": "Faster boot time"
    },
    "correctAnswer": "B",
    "explanation": "Paging eliminates external fragmentation completely while keeping internal fragmentation tiny (at most half a page on average)."
  },
  {
    "_id": "cf_187",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Computer Networks & Internet",
    "difficulty": "Medium",
    "questionText": "How many layers are in the ISO OSI (Open Systems Interconnection) Reference Model?",
    "options": {
      "A": "7 layers",
      "B": "5 layers",
      "C": "9 layers",
      "D": "4 layers"
    },
    "correctAnswer": "A",
    "explanation": "From Layer 1 to 7: Physical, Data Link, Network, Transport, Session, Presentation, Application."
  },
  {
    "_id": "cf_188",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Computer Networks & Internet",
    "difficulty": "Medium",
    "questionText": "At which layer of the OSI Model does a Network Switch operate using MAC addresses?",
    "options": {
      "A": "Layer 1 (Physical)",
      "B": "Layer 3 (Network)",
      "C": "Layer 7 (Application)",
      "D": "Layer 2 (Data Link)"
    },
    "correctAnswer": "D",
    "explanation": "Switches inspect Layer-2 Ethernet MAC addresses to forward frames selectively only to the target port."
  },
  {
    "_id": "cf_189",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Computer Networks & Internet",
    "difficulty": "Medium",
    "questionText": "How many bits long is an IPv4 address versus an IPv6 address?",
    "options": {
      "A": "8 bits vs. 32 bits",
      "B": "16 bits vs. 64 bits",
      "C": "64 bits vs. 256 bits",
      "D": "32 bits (IPv4) vs. 128 bits (IPv6)"
    },
    "correctAnswer": "D",
    "explanation": "IPv4 provides ~4.3 billion addresses (exhausted), while 128-bit IPv6 provides 3.4 × 10³⁸ addresses."
  },
  {
    "_id": "cf_190",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Computer Networks & Internet",
    "difficulty": "Medium",
    "questionText": "Which transport-layer protocol provides reliable, ordered, connection-oriented delivery with error recovery (3-way handshake)?",
    "options": {
      "A": "ICMP",
      "B": "ARP",
      "C": "TCP (Transmission Control Protocol)",
      "D": "UDP"
    },
    "correctAnswer": "C",
    "explanation": "TCP guarantees reliable delivery (web, email, file transfers); UDP sacrifices reliability for ultra-low latency (gaming, live streaming, DNS)."
  },
  {
    "_id": "cf_191",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Computer Networks & Internet",
    "difficulty": "Medium",
    "questionText": "What is the standard well-known TCP port number for HTTPS (secure web traffic)?",
    "options": {
      "A": "21",
      "B": "443",
      "C": "25",
      "D": "80"
    },
    "correctAnswer": "B",
    "explanation": "Common ports: FTP=21, SSH=22, SMTP=25, DNS=53, HTTP=80, HTTPS=443."
  },
  {
    "_id": "cf_192",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Computer Networks & Internet",
    "difficulty": "Medium",
    "questionText": "Which protocol automatically assigns IP addresses, subnet masks, and default gateways to devices joining a network?",
    "options": {
      "A": "DHCP (Dynamic Host Configuration Protocol)",
      "B": "Telnet",
      "C": "DNS",
      "D": "SNMP"
    },
    "correctAnswer": "A",
    "explanation": "DHCP uses a 4-step DORA process (Discover, Offer, Request, Acknowledge) so admins don't configure IPs manually."
  },
  {
    "_id": "cf_193",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Computer Networks & Internet",
    "difficulty": "Medium",
    "questionText": "Which command-line utility sends ICMP Echo Request packets to test reachability and round-trip latency to a remote host?",
    "options": {
      "A": "ping",
      "B": "format",
      "C": "chmod",
      "D": "mkdir"
    },
    "correctAnswer": "A",
    "explanation": "`ping` verifies Layer-3 connectivity and reports packet loss and latency in milliseconds."
  },
  {
    "_id": "cf_194",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Computer Networks & Internet",
    "difficulty": "Medium",
    "questionText": "What is a \"MAC Address\" (Media Access Control address)?",
    "options": {
      "A": "A temporary web cookie",
      "B": "A Mac computer password",
      "C": "An email domain",
      "D": "A unique 48-bit (6-byte) hardware physical address burned into a Network Interface Card (NIC)"
    },
    "correctAnswer": "D",
    "explanation": "Written as six hex pairs (e.g., 00:1A:2B:3C:4D:5E), MAC addresses uniquely identify hardware on a local Ethernet/Wi-Fi segment."
  },
  {
    "_id": "cf_195",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Computer Networks & Internet",
    "difficulty": "Medium",
    "questionText": "Which transmission mode allows data to travel in BOTH directions SIMULTANEOUSLY (like a telephone call)?",
    "options": {
      "A": "Unicast",
      "B": "Simplex",
      "C": "Full-Duplex",
      "D": "Half-Duplex"
    },
    "correctAnswer": "C",
    "explanation": "Simplex = one way (radio/TV); Half-Duplex = both ways, one at a time (walkie-talkie); Full-Duplex = simultaneous two-way."
  },
  {
    "_id": "cf_196",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Computer Networks & Internet",
    "difficulty": "Medium",
    "questionText": "What is the key advantage of Fiber-Optic cable over Copper Twisted-Pair (Ethernet) cable?",
    "options": {
      "A": "Carries AC power",
      "B": "Immune to electromagnetic interference (EMI), far higher bandwidth, and long-distance low-attenuation light transmission",
      "C": "Works without transceivers",
      "D": "Cheaper connectors"
    },
    "correctAnswer": "B",
    "explanation": "Fiber transmits modulated pulses of light via total internal reflection through glass/plastic strands."
  },
  {
    "_id": "cf_197",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Databases & DBMS",
    "difficulty": "Medium",
    "questionText": "In SQL, which sub-language includes `CREATE`, `ALTER`, and `DROP` for defining database structures?",
    "options": {
      "A": "DML (Data Manipulation Language)",
      "B": "DDL (Data Definition Language)",
      "C": "DCL (Data Control Language)",
      "D": "TCL"
    },
    "correctAnswer": "B",
    "explanation": "DDL = CREATE/ALTER/DROP; DML = SELECT/INSERT/UPDATE/DELETE; DCL = GRANT/REVOKE; TCL = COMMIT/ROLLBACK."
  },
  {
    "_id": "cf_198",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Databases & DBMS",
    "difficulty": "Medium",
    "questionText": "What is the purpose of \"Database Normalization\" (1NF, 2NF, 3NF, BCNF)?",
    "options": {
      "A": "Organize tables systematically to minimize redundancy and eliminate insertion, update, and deletion anomalies",
      "B": "Remove primary keys",
      "C": "Increase duplicate columns",
      "D": "Slow down joins"
    },
    "correctAnswer": "A",
    "explanation": "Edgar F. Codd introduced normal forms so each fact is stored cleanly in one appropriate relation."
  },
  {
    "_id": "cf_199",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Databases & DBMS",
    "difficulty": "Medium",
    "questionText": "In an Entity-Relationship (ER) Diagram, how are Entities, Attributes, and Relationships conventionally represented?",
    "options": {
      "A": "Triangles only",
      "B": "Arrows only",
      "C": "All circles",
      "D": "Rectangles (Entities), Ovals (Attributes), and Diamonds (Relationships)"
    },
    "correctAnswer": "D",
    "explanation": "Chen's ER notation uses Rectangles for entities, Ellipses for attributes, and Diamonds for relationships."
  },
  {
    "_id": "cf_200",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Databases & DBMS",
    "difficulty": "Medium",
    "questionText": "Which SQL clause filters AGGREGATED groups produced by `GROUP BY` (e.g., departments with >10 employees)?",
    "options": {
      "A": "WHERE",
      "B": "ORDER BY",
      "C": "HAVING",
      "D": "LIMIT"
    },
    "correctAnswer": "C",
    "explanation": "`WHERE` filters individual rows BEFORE grouping; `HAVING` filters groups AFTER `GROUP BY` aggregation."
  },
  {
    "_id": "cf_201",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Databases & DBMS",
    "difficulty": "Medium",
    "questionText": "What does an SQL `INNER JOIN` return?",
    "options": {
      "A": "Duplicate headers",
      "B": "All rows from both tables regardless of match",
      "C": "Only rows that have matching key values in BOTH joined tables",
      "D": "Only unmatched rows"
    },
    "correctAnswer": "C",
    "explanation": "In contrast, `LEFT JOIN` keeps all rows from the left table plus matching right-table rows (or NULLs)."
  },
  {
    "_id": "cf_202",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Databases & DBMS",
    "difficulty": "Medium",
    "questionText": "What is the primary purpose of creating a \"Database Index\" (such as a B-Tree index) on a frequently searched column?",
    "options": {
      "A": "Replace primary keys",
      "B": "Dramatically speed up `SELECT` lookup queries without scanning the entire table row-by-row",
      "C": "Prevent backups",
      "D": "Compress text files"
    },
    "correctAnswer": "B",
    "explanation": "Like a book index, a B-Tree index trades a little extra disk space and write overhead for logarithmic O(log n) read lookups."
  },
  {
    "_id": "cf_203",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Databases & DBMS",
    "difficulty": "Medium",
    "questionText": "Which category of databases (e.g., MongoDB, Redis, Cassandra) stores flexible JSON documents, key-value pairs, or wide columns for horizontal scale?",
    "options": {
      "A": "NoSQL Databases",
      "B": "Legacy Mainframe DB",
      "C": "Spreadsheets",
      "D": "Flat CSVs"
    },
    "correctAnswer": "A",
    "explanation": "NoSQL (\"Not Only SQL\") databases prioritize flexible schemas, high write throughput, and distributed horizontal scaling."
  },
  {
    "_id": "cf_204",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Databases & DBMS",
    "difficulty": "Medium",
    "questionText": "In SQL, `COMMIT` and `ROLLBACK` belong to which command category?",
    "options": {
      "A": "HTML",
      "B": "DDL",
      "C": "DML",
      "D": "TCL (Transaction Control Language)"
    },
    "correctAnswer": "D",
    "explanation": "`COMMIT` permanently saves a transaction; `ROLLBACK` undoes uncommitted changes if an error occurs."
  },
  {
    "_id": "cf_205",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Cybersecurity & Malware",
    "difficulty": "Medium",
    "questionText": "The three foundational pillars of Information Security known as the **CIA Triad** are:",
    "options": {
      "A": "Coding, Indexing, Auditing",
      "B": "Cloud, Identity, Antivirus",
      "C": "Control, Internet, Access",
      "D": "Confidentiality, Integrity, and Availability"
    },
    "correctAnswer": "D",
    "explanation": "Confidentiality prevents unauthorized disclosure, Integrity prevents unauthorized alteration, and Availability ensures reliable access."
  },
  {
    "_id": "cf_206",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Cybersecurity & Malware",
    "difficulty": "Medium",
    "questionText": "In a **DDoS (Distributed Denial-of-Service)** attack, attackers primarily target which pillar of the CIA Triad?",
    "options": {
      "A": "Confidentiality",
      "B": "Encryption",
      "C": "Availability — flooding a server with massive botnet traffic so legitimate users cannot reach it",
      "D": "Hardware cooling"
    },
    "correctAnswer": "C",
    "explanation": "DDoS overwhelms bandwidth, sockets, or application servers using thousands of hijacked botnet devices."
  },
  {
    "_id": "cf_207",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Cybersecurity & Malware",
    "difficulty": "Medium",
    "questionText": "What is the difference between **Symmetric Encryption** (e.g., AES) and **Asymmetric Encryption** (e.g., RSA)?",
    "options": {
      "A": "Symmetric cannot encrypt files",
      "B": "Symmetric uses the SAME secret key for both encryption and decryption; Asymmetric uses a mathematically linked Public Key and Private Key pair",
      "C": "Symmetric uses two keys",
      "D": "Asymmetric is faster for huge videos"
    },
    "correctAnswer": "B",
    "explanation": "HTTPS uses Asymmetric crypto during the TLS handshake to exchange a fast Symmetric session key (AES)."
  },
  {
    "_id": "cf_208",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Cybersecurity & Malware",
    "difficulty": "Medium",
    "questionText": "What is a **VPN (Virtual Private Network)** primarily used for?",
    "options": {
      "A": "Creating an encrypted tunnel over a public network to protect privacy and securely access remote private networks",
      "B": "Speeding up RAM",
      "C": "Installing Windows",
      "D": "Increasing monitor brightness"
    },
    "correctAnswer": "A",
    "explanation": "A VPN encrypts IP traffic and masks your public IP address from local eavesdroppers on untrusted Wi-Fi."
  },
  {
    "_id": "cf_209",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Cybersecurity & Malware",
    "difficulty": "Medium",
    "questionText": "What is a **Zero-Day Vulnerability**?",
    "options": {
      "A": "A newly discovered software security flaw unknown to the vendor for which no official patch exists yet",
      "B": "A bug that takes zero bytes",
      "C": "An expired antivirus license",
      "D": "A 0-second boot time"
    },
    "correctAnswer": "A",
    "explanation": "Attackers exploiting zero-day flaws have a head start until vendors release emergency security patches."
  },
  {
    "_id": "cf_210",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Cybersecurity & Malware",
    "difficulty": "Medium",
    "questionText": "What is a **SQL Injection (SQLi)** attack?",
    "options": {
      "A": "Overheating a router",
      "B": "Deleting a hard drive physically",
      "C": "Sending spam emails",
      "D": "Inserting malicious SQL code into an unvalidated web input field to manipulate backend database queries and steal or alter data"
    },
    "correctAnswer": "D",
    "explanation": "Parameterized queries (prepared statements) completely neutralize SQL Injection by separating SQL code from user data."
  },
  {
    "_id": "cf_211",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Cybersecurity & Malware",
    "difficulty": "Medium",
    "questionText": "Why should websites store user passwords as **Salted Cryptographic Hashes** (e.g., bcrypt/Argon2) rather than plain text or simple encryption?",
    "options": {
      "A": "Plain text uses more CPU",
      "B": "Salts shorten passwords",
      "C": "One-way hashes cannot be reversed back to plain text, and unique random salts defeat precomputed Rainbow Table attacks",
      "D": "Hashes are reversible easily"
    },
    "correctAnswer": "C",
    "explanation": "Even if a database is breached, properly salted slow hashes (Argon2id/bcrypt) protect user credentials."
  },
  {
    "_id": "cf_212",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Cybersecurity & Malware",
    "difficulty": "Medium",
    "questionText": "A stealthy set of malicious tools designed to hide deep inside the OS kernel with administrator privileges while evading antivirus detection is a:",
    "options": {
      "A": "Adware",
      "B": "Rootkit",
      "C": "Cookie",
      "D": "Macro"
    },
    "correctAnswer": "B",
    "explanation": "Rootkits conceal malware processes and files at the OS/firmware level, often requiring a clean OS reinstall."
  },
  {
    "_id": "cf_213",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "MS Office & Productivity Shortcuts",
    "difficulty": "Medium",
    "questionText": "In MS Word, which powerful feature generates personalized letters, certificates, or envelopes for hundreds of recipients by linking a template to a spreadsheet?",
    "options": {
      "A": "Drop Cap",
      "B": "Mail Merge",
      "C": "SmartArt",
      "D": "WordArt"
    },
    "correctAnswer": "B",
    "explanation": "Mail Merge merges a main document with a structured data source (like Excel contacts) automatically."
  },
  {
    "_id": "cf_214",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "MS Office & Productivity Shortcuts",
    "difficulty": "Medium",
    "questionText": "In MS Excel, what does the dollar sign `$` do in a cell reference like `$A$1`?",
    "options": {
      "A": "Creates an Absolute Cell Reference that stays locked when copied or dragged to other cells",
      "B": "Multiplies by 100",
      "C": "Deletes the cell",
      "D": "Formats currency only"
    },
    "correctAnswer": "A",
    "explanation": "Relative (`A1`) shifts on copy; Absolute (`$A$1`) stays fixed; Mixed (`$A1` or `A$1`) locks only column or row."
  },
  {
    "_id": "cf_215",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "MS Office & Productivity Shortcuts",
    "difficulty": "Medium",
    "questionText": "In MS Excel, which function searches for a value in the leftmost column of a table and returns a matching value from a specified column?",
    "options": {
      "A": "SUMIF",
      "B": "CONCAT",
      "C": "COUNT",
      "D": "VLOOKUP (and modern XLOOKUP)"
    },
    "correctAnswer": "D",
    "explanation": "VLOOKUP performs vertical table lookups; XLOOKUP (Excel 365/2021+) supports left/right lookups and defaults to exact match."
  },
  {
    "_id": "cf_216",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "MS Office & Productivity Shortcuts",
    "difficulty": "Medium",
    "questionText": "In MS PowerPoint, which feature controls the visual effect when moving FROM ONE SLIDE TO THE NEXT?",
    "options": {
      "A": "Hyperlink",
      "B": "Animation",
      "C": "Slide Transition",
      "D": "Slide Master"
    },
    "correctAnswer": "C",
    "explanation": "Transitions apply between slides; Animations apply to individual text/objects inside a single slide."
  },
  {
    "_id": "cf_217",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "MS Office & Productivity Shortcuts",
    "difficulty": "Medium",
    "questionText": "In MS Word, what is the difference between a **Footnote** and an **Endnote**?",
    "options": {
      "A": "Endnotes cannot have numbers",
      "B": "They are identical",
      "C": "A Footnote appears at the bottom of the SAME page, whereas an Endnote appears at the end of the section or entire document",
      "D": "Footnotes are bold only"
    },
    "correctAnswer": "C",
    "explanation": "Academic writing uses footnotes for immediate page commentary and endnotes for consolidated references."
  },
  {
    "_id": "cf_218",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "MS Office & Productivity Shortcuts",
    "difficulty": "Medium",
    "questionText": "In MS Excel, which interactive tool rapidly summarizes, groups, counts, and cross-tabulates thousands of rows of data via drag-and-drop?",
    "options": {
      "A": "Goal Seek",
      "B": "PivotTable",
      "C": "Freeze Panes",
      "D": "Format Painter"
    },
    "correctAnswer": "B",
    "explanation": "PivotTables are Excel's premier analytical engine for multidimensional data summarization without writing complex formulas."
  },
  {
    "_id": "cf_219",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "MS Office & Productivity Shortcuts",
    "difficulty": "Medium",
    "questionText": "In MS Word, pressing **Ctrl + Shift + C** followed by **Ctrl + Shift + V** mimics which toolbar tool?",
    "options": {
      "A": "Format Painter (copies and pastes formatting style without changing text)",
      "B": "Insert Hyperlink",
      "C": "Find & Replace",
      "D": "Page Break"
    },
    "correctAnswer": "A",
    "explanation": "Format Painter rapidly replicates font, color, indentation, and border styles across documents."
  },
  {
    "_id": "cf_220",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "History & Generations",
    "difficulty": "Hard",
    "questionText": "What is the \"Von Neumann Bottleneck\" in classical computer architecture?",
    "options": {
      "A": "Overheating keyboards",
      "B": "Slow mouse polling",
      "C": "Lack of monitor pixels",
      "D": "Shared single bus between CPU and memory limiting instruction/data throughput compared to CPU speed"
    },
    "correctAnswer": "D",
    "explanation": "Because instructions and data share one memory pathway, the CPU often idles waiting for memory transfers—mitigated by caches and Harvard architectures."
  },
  {
    "_id": "cf_221",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "History & Generations",
    "difficulty": "Hard",
    "questionText": "How does \"Harvard Architecture\" differ from Von Neumann Architecture?",
    "options": {
      "A": "It uses vacuum tubes",
      "B": "It has no ALU",
      "C": "It cannot run loops",
      "D": "It maintains physically separate memory spaces and buses for instructions and data"
    },
    "correctAnswer": "D",
    "explanation": "Separate instruction and data buses allow simultaneous instruction fetch and data access, common in DSPs and microcontrollers."
  },
  {
    "_id": "cf_222",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "History & Generations",
    "difficulty": "Hard",
    "questionText": "In Flynn's Taxonomy of parallel computer architectures, modern GPUs and vector processors are best classified as:",
    "options": {
      "A": "Uniprocessor",
      "B": "SISD",
      "C": "SIMD (Single Instruction, Multiple Data)",
      "D": "MISD"
    },
    "correctAnswer": "C",
    "explanation": "SIMD executes the exact same operation simultaneously across large arrays of data elements (graphics, matrix math, AI tensors)."
  },
  {
    "_id": "cf_223",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "History & Generations",
    "difficulty": "Hard",
    "questionText": "Supercomputer performance is traditionally benchmarked in:",
    "options": {
      "A": "DPI",
      "B": "FLOPS (Floating-Point Operations Per Second)",
      "C": "PPM",
      "D": "RPM"
    },
    "correctAnswer": "B",
    "explanation": "Modern exascale supercomputers (e.g., Frontier, El Capitan) exceed 10¹⁸ FLOPS (1 ExaFLOPS)."
  },
  {
    "_id": "cf_224",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "History & Generations",
    "difficulty": "Hard",
    "questionText": "What distinguishes an \"Embedded System\" from a general-purpose PC?",
    "options": {
      "A": "It is a dedicated hardware-software system built inside a larger device for a specific real-time control function",
      "B": "It has a larger monitor",
      "C": "It runs only Windows",
      "D": "It lacks memory"
    },
    "correctAnswer": "A",
    "explanation": "Examples include automotive ECUs, pacemakers, smart meters, and washing machine controllers."
  },
  {
    "_id": "cf_225",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "History & Generations",
    "difficulty": "Hard",
    "questionText": "Which 1940s electromechanical computer built by Howard Aiken at Harvard inspired the name \"Harvard Architecture\"?",
    "options": {
      "A": "Harvard Mark I (IBM ASCC)",
      "B": "Cray-1",
      "C": "ENIAC",
      "D": "Altair 8800"
    },
    "correctAnswer": "A",
    "explanation": "The Mark I stored instructions on punched paper tape separately from numeric data counters."
  },
  {
    "_id": "cf_226",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "History & Generations",
    "difficulty": "Hard",
    "questionText": "The Cray-1 (1976), designed by Seymour Cray, is iconic in computing history as the first commercially successful:",
    "options": {
      "A": "Laptop",
      "B": "Quantum computer",
      "C": "Personal smartphone",
      "D": "Vector Supercomputer"
    },
    "correctAnswer": "D",
    "explanation": "Its C-shaped chassis minimized wire lengths to reduce signal propagation delay at high clock speeds."
  },
  {
    "_id": "cf_227",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "History & Generations",
    "difficulty": "Hard",
    "questionText": "In quantum computing, unlike a classical bit (0 or 1), a \"Qubit\" can exist in a coherent combination of 0 and 1 simultaneously due to:",
    "options": {
      "A": "Fragmentation",
      "B": "Compilation",
      "C": "Superposition",
      "D": "Pipelining"
    },
    "correctAnswer": "C",
    "explanation": "Superposition and entanglement allow quantum algorithms (like Shor's and Grover's) to explore vast solution spaces in parallel."
  },
  {
    "_id": "cf_228",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Hardware & CPU Architecture",
    "difficulty": "Hard",
    "questionText": "What is the key architectural difference between RISC (e.g., ARM) and CISC (e.g., x86) processors?",
    "options": {
      "A": "RISC cannot run operating systems",
      "B": "RISC uses a small, uniform set of simple single-cycle load/store instructions; CISC uses richer variable-length complex instructions",
      "C": "RISC uses vacuum tubes",
      "D": "CISC has no registers"
    },
    "correctAnswer": "B",
    "explanation": "RISC simplifies hardware decoding and pipelining for high power efficiency, whereas CISC minimizes instruction count per task."
  },
  {
    "_id": "cf_229",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Hardware & CPU Architecture",
    "difficulty": "Hard",
    "questionText": "In CPU design, \"Instruction Pipelining\" increases throughput by:",
    "options": {
      "A": "Deleting cache memory",
      "B": "Overlapping the Fetch, Decode, Execute, and Write-back stages of multiple consecutive instructions like an assembly line",
      "C": "Running at 0 Hz",
      "D": "Increasing wire thickness"
    },
    "correctAnswer": "B",
    "explanation": "Pipelining boosts instructions completed per clock cycle, though it must handle structural, data, and control (branch) hazards."
  },
  {
    "_id": "cf_230",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Hardware & CPU Architecture",
    "difficulty": "Hard",
    "questionText": "What is a \"Branch Misprediction\" hazard in a deeply pipelined CPU?",
    "options": {
      "A": "When the CPU speculatively fetches the wrong path of a conditional branch and must flush the pipeline, incurring a cycle penalty",
      "B": "A broken motherboard wire",
      "C": "A hard disk crash",
      "D": "A printer jam"
    },
    "correctAnswer": "A",
    "explanation": "Modern CPUs employ sophisticated branch predictors to guess if/else outcomes with >95% accuracy and avoid pipeline stalls."
  },
  {
    "_id": "cf_231",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Hardware & CPU Architecture",
    "difficulty": "Hard",
    "questionText": "In Interrupt-Driven I/O, what happens immediately when an I/O device raises a hardware interrupt?",
    "options": {
      "A": "The keyboard locks permanently",
      "B": "The computer shuts down",
      "C": "RAM is wiped",
      "D": "The CPU finishes the current instruction, saves its state/PC on the stack, and jumps to the Interrupt Service Routine (ISR) via the Interrupt Vector Table"
    },
    "correctAnswer": "D",
    "explanation": "Interrupts eliminate wasteful busy-waiting (polling) by notifying the CPU only when an event requires attention."
  },
  {
    "_id": "cf_232",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Hardware & CPU Architecture",
    "difficulty": "Hard",
    "questionText": "A \"Superscalar\" processor achieves higher IPC (Instructions Per Cycle) by:",
    "options": {
      "A": "Removing registers",
      "B": "Using slower RAM",
      "C": "Fetching, decoding, and dispatching multiple independent instructions simultaneously to multiple parallel execution units",
      "D": "Having only one ALU"
    },
    "correctAnswer": "C",
    "explanation": "Superscalar architectures exploit instruction-level parallelism (ILP) dynamically in hardware."
  },
  {
    "_id": "cf_233",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Hardware & CPU Architecture",
    "difficulty": "Hard",
    "questionText": "What does \"Little-Endian\" byte ordering (used in x86/x64 CPUs) mean when storing a multi-byte integer in memory?",
    "options": {
      "A": "The most significant byte is stored at the lowest memory address",
      "B": "Only 1 bit is stored",
      "C": "The least significant byte (LSB) is stored at the lowest memory address",
      "D": "Bytes are compressed randomly"
    },
    "correctAnswer": "C",
    "explanation": "In Little-Endian, the \"little end\" (LSB) comes first; network protocols (TCP/IP) conventionally use Big-Endian (\"network byte order\")."
  },
  {
    "_id": "cf_234",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Hardware & CPU Architecture",
    "difficulty": "Hard",
    "questionText": "In PCIe (Peripheral Component Interconnect Express), moving from x1 to x16 primarily increases:",
    "options": {
      "A": "Audio volume",
      "B": "Parallel serial data lanes and aggregate bandwidth (especially for GPUs and NVMe drives)",
      "C": "Cable color options",
      "D": "AC voltage"
    },
    "correctAnswer": "B",
    "explanation": "Each PCIe lane is a dedicated full-duplex serial point-to-point link, eliminating shared-bus bottlenecks of legacy PCI."
  },
  {
    "_id": "cf_235",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Hardware & CPU Architecture",
    "difficulty": "Hard",
    "questionText": "What is \"Hyper-Threading\" (Simultaneous Multithreading — SMT) in a CPU core?",
    "options": {
      "A": "Duplicating architectural register state so a single physical core presents two logical threads to keep execution units busy during stalls",
      "B": "Adding two monitors",
      "C": "Compressing files",
      "D": "Overclocking RAM"
    },
    "correctAnswer": "A",
    "explanation": "SMT improves core utilization by scheduling a second thread's instructions whenever the first thread stalls on memory access."
  },
  {
    "_id": "cf_236",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Input & Output Devices",
    "difficulty": "Hard",
    "questionText": "How does a \"Capacitive Touchscreen\" (used in modern smartphones) differ from a \"Resistive Touchscreen\"?",
    "options": {
      "A": "Capacitive requires hard stylus pressure",
      "B": "Resistive supports only fingers",
      "C": "Capacitive cannot sense glass",
      "D": "Capacitive detects changes in the screen's electrostatic field from a conductive finger, supporting multi-touch and higher clarity"
    },
    "correctAnswer": "D",
    "explanation": "Resistive screens rely on physical pressure closing two thin layers (working with gloves/styli), whereas capacitive screens sense human body capacitance."
  },
  {
    "_id": "cf_237",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Input & Output Devices",
    "difficulty": "Hard",
    "questionText": "In printing, \"Spooling\" (Simultaneous Peripheral Operations On-Line) improves system performance by:",
    "options": {
      "A": "Encrypting paper",
      "B": "Compressing toner",
      "C": "Printing two pages on one side",
      "D": "Temporarily buffering print jobs on fast disk storage so the CPU can continue other work while the slow printer catches up"
    },
    "correctAnswer": "D",
    "explanation": "Spooling bridges the massive speed gap between the GHz CPU and mechanical peripherals."
  },
  {
    "_id": "cf_238",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Input & Output Devices",
    "difficulty": "Hard",
    "questionText": "In a 24-bit \"True Color\" RGB display (8 bits per channel), how many distinct colors can each pixel theoretically represent?",
    "options": {
      "A": "65,536",
      "B": "1 billion",
      "C": "16,777,216 (≈16.7 million)",
      "D": "256"
    },
    "correctAnswer": "C",
    "explanation": "2⁸ × 2⁸ × 2⁸ = 2²⁴ = 16,777,216 distinct RGB color combinations."
  },
  {
    "_id": "cf_239",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Input & Output Devices",
    "difficulty": "Hard",
    "questionText": "In a laser printer's 6-step xerographic process, which component melts and bonds toner permanently onto the paper fibers?",
    "options": {
      "A": "Corona wire",
      "B": "Fuser assembly (heated rollers)",
      "C": "Optical mirror",
      "D": "Paper tray"
    },
    "correctAnswer": "B",
    "explanation": "The classic laser print cycle: Charging → Exposing → Developing → Transferring → Fusing → Cleaning."
  },
  {
    "_id": "cf_240",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Input & Output Devices",
    "difficulty": "Hard",
    "questionText": "What is the purpose of an \"ADC\" (Analog-to-Digital Converter) inside a computer's sound card?",
    "options": {
      "A": "Sample and quantize continuous analog microphone voltages into discrete binary audio data",
      "B": "Cool the audio chip",
      "C": "Amplify speaker volume",
      "D": "Convert HDMI to VGA"
    },
    "correctAnswer": "A",
    "explanation": "Conversely, a DAC (Digital-to-Analog Converter) turns digital audio streams back into analog waves to drive speakers/headphones."
  },
  {
    "_id": "cf_241",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Input & Output Devices",
    "difficulty": "Hard",
    "questionText": "What is \"Polling Rate\" (measured in Hz) on a high-precision computer mouse?",
    "options": {
      "A": "How many times per second the mouse reports its cursor position and clicks to the computer",
      "B": "Optical lens weight",
      "C": "Scroll wheel height",
      "D": "Number of buttons"
    },
    "correctAnswer": "A",
    "explanation": "A 1000 Hz polling rate reports position every 1 millisecond, reducing input latency."
  },
  {
    "_id": "cf_242",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Input & Output Devices",
    "difficulty": "Hard",
    "questionText": "In display specifications, \"Aspect Ratio\" (e.g., 16:9 or 16:10) defines the:",
    "options": {
      "A": "Brightness level",
      "B": "Contrast ratio",
      "C": "Response time in ms",
      "D": "Proportional ratio between the display's horizontal width and vertical height"
    },
    "correctAnswer": "D",
    "explanation": "16:9 is the widescreen standard for HD/4K video (e.g., 1920×1080, 3840×2160)."
  },
  {
    "_id": "cf_243",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Input & Output Devices",
    "difficulty": "Hard",
    "questionText": "What distinguishes an \"Optical Mouse\" from a legacy \"Mechanical Ball Mouse\"?",
    "options": {
      "A": "Mechanical mice have higher DPI",
      "B": "Optical mice use a heavy rubber ball",
      "C": "Optical mice illuminate the surface with an LED/laser and use a tiny CMOS image sensor + DSP to compute motion without moving parts",
      "D": "Optical mice need special mousepads with magnets"
    },
    "correctAnswer": "C",
    "explanation": "Eliminating the mechanical ball prevented dust buildup and vastly improved tracking precision and durability."
  },
  {
    "_id": "cf_244",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Input & Output Devices",
    "difficulty": "Hard",
    "questionText": "Which input technology enables \"Haptic Feedback\" in modern touchscreens, controllers, and VR gloves?",
    "options": {
      "A": "Optical lasers",
      "B": "Linear resonant actuators / vibration motors delivering tactile force feedback to the user",
      "C": "Thermal paper",
      "D": "Inkjet nozzles"
    },
    "correctAnswer": "B",
    "explanation": "Haptics simulate physical texture, clicks, or resistance to enrich human-computer interaction."
  },
  {
    "_id": "cf_245",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Input & Output Devices",
    "difficulty": "Hard",
    "questionText": "In DisplayPort vs. HDMI, what feature allows DisplayPort 1.2+ to drive multiple independent monitors from a single laptop output port?",
    "options": {
      "A": "Analog modulation",
      "B": "Daisy-chaining via Multi-Stream Transport (MST)",
      "C": "Toner fusing",
      "D": "Bluetooth tethering"
    },
    "correctAnswer": "B",
    "explanation": "MST splits a single high-bandwidth DisplayPort signal into multiple independent video streams."
  },
  {
    "_id": "cf_246",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Memory & Storage Hierarchy",
    "difficulty": "Hard",
    "questionText": "Cache memory works effectively because programs exhibit \"Principle of Locality\", consisting of:",
    "options": {
      "A": "Temporal locality (recently accessed items likely reused soon) and Spatial locality (nearby memory addresses likely accessed soon)",
      "B": "Sequential encryption",
      "C": "Vertical and horizontal locality",
      "D": "Random dispersion"
    },
    "correctAnswer": "A",
    "explanation": "Loops create temporal locality; iterating through arrays creates spatial locality, allowing caches to prefetch contiguous cache lines."
  },
  {
    "_id": "cf_247",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Memory & Storage Hierarchy",
    "difficulty": "Hard",
    "questionText": "In Cache Write Policies, how does \"Write-Back\" differ from \"Write-Through\"?",
    "options": {
      "A": "Write-Through never updates RAM",
      "B": "They are identical",
      "C": "Write-Back writes to disk immediately",
      "D": "Write-Through updates both cache and RAM simultaneously; Write-Back updates only cache (marking a dirty bit) and writes to RAM only upon eviction"
    },
    "correctAnswer": "D",
    "explanation": "Write-Back cuts memory bus traffic significantly, though it requires coherence protocols (like MESI) in multi-core CPUs."
  },
  {
    "_id": "cf_248",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Memory & Storage Hierarchy",
    "difficulty": "Hard",
    "questionText": "What is \"Thrashing\" in a virtual memory system?",
    "options": {
      "A": "Overheating the GPU",
      "B": "Fast cache hits",
      "C": "Excessive continuous paging/swapping between RAM and disk so the CPU spends more time handling page faults than executing useful work",
      "D": "Formatting an SSD"
    },
    "correctAnswer": "C",
    "explanation": "Thrashing occurs when the combined working sets of active processes exceed available physical RAM frames."
  },
  {
    "_id": "cf_249",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Memory & Storage Hierarchy",
    "difficulty": "Hard",
    "questionText": "In virtual-to-physical address translation, what is the role of the TLB (Translation Lookaside Buffer)?",
    "options": {
      "A": "Control USB ports",
      "B": "Store user passwords",
      "C": "Act as a tiny ultra-fast associative cache inside the MMU storing recent virtual-to-physical page table mappings",
      "D": "Defragment disks"
    },
    "correctAnswer": "C",
    "explanation": "Without a TLB, every single memory access would require extra slow trips to RAM just to walk the page table."
  },
  {
    "_id": "cf_250",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Memory & Storage Hierarchy",
    "difficulty": "Hard",
    "questionText": "In SSD management, what does the \"TRIM\" command do?",
    "options": {
      "A": "Defragments tracks",
      "B": "Informs the SSD controller which data blocks are no longer in use by the OS so garbage collection can erase them proactively, preserving write speed",
      "C": "Overclocks CPU",
      "D": "Physically cuts the drive"
    },
    "correctAnswer": "B",
    "explanation": "Because NAND flash must erase whole blocks before rewriting, TRIM prevents severe write-amplification slowdowns."
  },
  {
    "_id": "cf_251",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Memory & Storage Hierarchy",
    "difficulty": "Hard",
    "questionText": "In Cache Mapping techniques, which scheme allows any main memory block to be placed into ANY cache line, minimizing conflict misses at the cost of complex hardware comparators?",
    "options": {
      "A": "Fully Associative Mapping",
      "B": "Direct Mapping",
      "C": "Sequential Mapping",
      "D": "Linear Hashing"
    },
    "correctAnswer": "A",
    "explanation": "Set-Associative mapping (e.g., 8-way) strikes the practical balance between Direct Mapping and Fully Associative Mapping."
  },
  {
    "_id": "cf_252",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Memory & Storage Hierarchy",
    "difficulty": "Hard",
    "questionText": "ECC (Error-Correcting Code) RAM is standard in mission-critical servers because it can:",
    "options": {
      "A": "Store terabytes on 1 chip",
      "B": "Double clock speed automatically",
      "C": "Run without electricity",
      "D": "Detect and automatically correct single-bit memory errors (and detect double-bit errors) on the fly using Hamming/SECDED codes"
    },
    "correctAnswer": "D",
    "explanation": "ECC prevents silent data corruption and kernel panics caused by cosmic-ray bit flips or electrical noise."
  },
  {
    "_id": "cf_253",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Memory & Storage Hierarchy",
    "difficulty": "Hard",
    "questionText": "In Page Replacement Algorithms (virtual memory), \"Belady's Anomaly\" shows that under which algorithm can INCREASING RAM frames counter-intuitively INCREASE page faults?",
    "options": {
      "A": "Optimal (OPT)",
      "B": "Clock algorithm",
      "C": "LRU (Least Recently Used)",
      "D": "FIFO (First-In, First-Out)"
    },
    "correctAnswer": "D",
    "explanation": "FIFO is not a stack algorithm and can suffer Belady's Anomaly; LRU and Optimal never exhibit this anomaly."
  },
  {
    "_id": "cf_254",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Memory & Storage Hierarchy",
    "difficulty": "Hard",
    "questionText": "What is \"Memory Interleaving\" in high-performance computer architecture?",
    "options": {
      "A": "Stacking RAM sticks physically",
      "B": "Compressing RAM with ZIP",
      "C": "Splitting consecutive memory addresses across multiple independent memory banks so they can be accessed in parallel to boost bandwidth",
      "D": "Deleting BIOS"
    },
    "correctAnswer": "C",
    "explanation": "Interleaving hides DRAM bank cycle latency by overlapping accesses across multiple banks/channels."
  },
  {
    "_id": "cf_255",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Memory & Storage Hierarchy",
    "difficulty": "Hard",
    "questionText": "In modern multi-core CPUs, \"Cache Coherence\" protocols (such as MESI: Modified, Exclusive, Shared, Invalid) guarantee that:",
    "options": {
      "A": "Disks spin faster",
      "B": "All processor cores observe a consistent, up-to-date view of shared memory locations across their private L1/L2 caches",
      "C": "All cores run at 100°C",
      "D": "RAM never fills up"
    },
    "correctAnswer": "B",
    "explanation": "Without cache coherence, two cores could read stale conflicting copies of the same shared variable."
  },
  {
    "_id": "cf_256",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Number Systems & Data Representation",
    "difficulty": "Hard",
    "questionText": "What is the key property of \"Gray Code\" (Reflected Binary Code) that makes it vital in rotary encoders and Karnaugh maps?",
    "options": {
      "A": "Any two consecutive values differ in ONLY ONE single bit position, preventing transient multi-bit reading glitches",
      "B": "It uses base 16",
      "C": "It encrypts passwords",
      "D": "It compresses text by 90%"
    },
    "correctAnswer": "A",
    "explanation": "Single-bit transitions eliminate ambiguous intermediate states during mechanical or asynchronous digital transitions."
  },
  {
    "_id": "cf_257",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Number Systems & Data Representation",
    "difficulty": "Hard",
    "questionText": "In Boolean Algebra, De Morgan's First Theorem states that NOT(A AND B) is logically equivalent to:",
    "options": {
      "A": "(NOT A) OR (NOT B)",
      "B": "(NOT A) AND (NOT B)",
      "C": "A XOR B",
      "D": "A OR B"
    },
    "correctAnswer": "A",
    "explanation": "De Morgan's Laws: ¬(A·B) = ¬A + ¬B, and ¬(A+B) = ¬A · ¬B — fundamental to circuit minimization and NAND/NOR conversion."
  },
  {
    "_id": "cf_258",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Number Systems & Data Representation",
    "difficulty": "Hard",
    "questionText": "In the IEEE 754 Single-Precision (32-bit) Floating-Point standard, the 32 bits are partitioned into:",
    "options": {
      "A": "8-bit Sign, 24-bit Value",
      "B": "16-bit integer, 16-bit fraction",
      "C": "1-bit Sign, 11-bit Exponent, 20-bit Mantissa",
      "D": "1-bit Sign, 8-bit Biased Exponent (bias 127), and 23-bit Mantissa/Fraction"
    },
    "correctAnswer": "D",
    "explanation": "Double-precision (64-bit) IEEE 754 uses 1 sign bit, 11 exponent bits (bias 1023), and 52 fraction bits."
  },
  {
    "_id": "cf_259",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Number Systems & Data Representation",
    "difficulty": "Hard",
    "questionText": "What is the signed range of an 8-bit Two's Complement integer?",
    "options": {
      "A": "0 to 255",
      "B": "-256 to +255",
      "C": "-128 to +127",
      "D": "-127 to +127"
    },
    "correctAnswer": "C",
    "explanation": "For n-bit two's complement, the range is -2^(n-1) to +2^(n-1) - 1; for n=8, that is -128 to +127."
  },
  {
    "_id": "cf_260",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Number Systems & Data Representation",
    "difficulty": "Hard",
    "questionText": "Why is UTF-8 the dominant Unicode encoding on the Web (>98% of websites)?",
    "options": {
      "A": "It uses fixed 4 bytes for English",
      "B": "It is variable-length (1–4 bytes), 100% backward-compatible with 7-bit ASCII, and immune to byte-order endianness issues",
      "C": "It only supports Latin letters",
      "D": "It requires no RAM"
    },
    "correctAnswer": "B",
    "explanation": "ASCII characters remain 1 byte in UTF-8 while global scripts and emojis smoothly use 2–4 bytes."
  },
  {
    "_id": "cf_261",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Number Systems & Data Representation",
    "difficulty": "Hard",
    "questionText": "A single \"Parity Bit\" added to a byte can detect:",
    "options": {
      "A": "Software bugs",
      "B": "Any ODD number of single-bit flip errors (e.g., 1-bit error), though it cannot correct them",
      "C": "All possible burst errors",
      "D": "Only even numbers of errors"
    },
    "correctAnswer": "B",
    "explanation": "If two bits flip simultaneously, parity stays unchanged—requiring stronger CRC or Hamming ECC codes for robust detection/correction."
  },
  {
    "_id": "cf_262",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Number Systems & Data Representation",
    "difficulty": "Hard",
    "questionText": "How many minimum Half-Adders and OR gates are needed to construct a 1-bit Full-Adder circuit?",
    "options": {
      "A": "2 Half-Adders and 1 OR gate",
      "B": "4 AND gates only",
      "C": "1 NOT gate",
      "D": "1 Half-Adder only"
    },
    "correctAnswer": "A",
    "explanation": "A Full-Adder sums A, B, and Carry-In using two chained Half-Adders plus an OR gate to combine the carry outputs."
  },
  {
    "_id": "cf_263",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Number Systems & Data Representation",
    "difficulty": "Hard",
    "questionText": "What is the decimal value of the fractional binary number 101.101₂?",
    "options": {
      "A": "5.5",
      "B": "5.75",
      "C": "6.25",
      "D": "5.625"
    },
    "correctAnswer": "D",
    "explanation": "101₂ = 5; .101₂ = (1×0.5) + (0×0.25) + (1×0.125) = 0.625 → total = 5.625."
  },
  {
    "_id": "cf_264",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Number Systems & Data Representation",
    "difficulty": "Hard",
    "questionText": "What is a \"Karnaugh Map (K-Map)\" used for in digital logic design?",
    "options": {
      "A": "Formatting hard disks",
      "B": "Mapping internet routes",
      "C": "Visually simplifying Boolean algebra expressions into minimal Sum-of-Products or Product-of-Sums logic gate circuits",
      "D": "Drawing CPU floor plans"
    },
    "correctAnswer": "C",
    "explanation": "K-Maps group adjacent 1s (in powers of 2) using Gray-code ordering to eliminate redundant variables."
  },
  {
    "_id": "cf_265",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Number Systems & Data Representation",
    "difficulty": "Hard",
    "questionText": "In Signed Two's Complement arithmetic, \"Arithmetic Overflow\" occurs when:",
    "options": {
      "A": "Multiplying by zero",
      "B": "Shifting right by 1",
      "C": "Adding two numbers of the SAME sign produces a result with the OPPOSITE sign bit",
      "D": "Adding a positive and a negative number"
    },
    "correctAnswer": "C",
    "explanation": "Equivalently, overflow occurs when the carry-in to the sign bit differs from the carry-out of the sign bit."
  },
  {
    "_id": "cf_266",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Software & Operating Systems",
    "difficulty": "Hard",
    "questionText": "In Dijkstra's \"Banker's Algorithm\", an Operating System handles Deadlock via:",
    "options": {
      "A": "Deadlock Detection only",
      "B": "Deadlock Avoidance — granting resource requests only if the resulting system state remains \"safe\"",
      "C": "Rebooting every hour",
      "D": "Ignoring all locks"
    },
    "correctAnswer": "B",
    "explanation": "The Banker's Algorithm simulates allocation to verify at least one safe completion sequence exists for all processes."
  },
  {
    "_id": "cf_267",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Software & Operating Systems",
    "difficulty": "Hard",
    "questionText": "What is a \"Race Condition\" in concurrent programming and Operating Systems?",
    "options": {
      "A": "A bug where program output depends unpredictably on the non-deterministic timing/interleaving of concurrent threads accessing shared mutable data",
      "B": "A boot race",
      "C": "Two CPUs competing on benchmarks",
      "D": "A fast network transfer"
    },
    "correctAnswer": "A",
    "explanation": "Critical sections must be protected using atomic locks, mutexes, or semaphores to guarantee mutual exclusion."
  },
  {
    "_id": "cf_268",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Software & Operating Systems",
    "difficulty": "Hard",
    "questionText": "In CPU scheduling, the \"Convoy Effect\" occurs under First-Come, First-Served (FCFS) when:",
    "options": {
      "A": "Time quantum is too small",
      "B": "Priority inversion happens",
      "C": "All processes finish instantly",
      "D": "Many short I/O-bound processes get stuck waiting behind one long CPU-bound process, spiking average waiting time"
    },
    "correctAnswer": "D",
    "explanation": "Preemptive schedulers like Round Robin and Multilevel Feedback Queues prevent the convoy effect."
  },
  {
    "_id": "cf_269",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Software & Operating Systems",
    "difficulty": "Hard",
    "questionText": "How does a \"Microkernel\" OS architecture (e.g., QNX, MINIX) differ from a \"Monolithic Kernel\" (e.g., Linux)?",
    "options": {
      "A": "Microkernels run everything in kernel mode",
      "B": "Monolithic kernels have no drivers",
      "C": "Microkernels cannot run on x86",
      "D": "Microkernels keep only minimal IPC, scheduling, and basic memory in kernel mode while running drivers and file systems in isolated user space"
    },
    "correctAnswer": "D",
    "explanation": "Microkernels enhance fault isolation and security, whereas monolithic kernels offer lower IPC overhead and higher raw speed."
  },
  {
    "_id": "cf_270",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Software & Operating Systems",
    "difficulty": "Hard",
    "questionText": "What is \"Priority Inversion\" in Real-Time Operating Systems (famously encountered on the Mars Pathfinder spacecraft)?",
    "options": {
      "A": "Swapping RAM",
      "B": "High-priority tasks always run first",
      "C": "A high-priority task gets blocked waiting for a resource held by a low-priority task that is repeatedly preempted by medium-priority tasks",
      "D": "Zero-priority idle loop"
    },
    "correctAnswer": "C",
    "explanation": "Priority Inheritance Protocol solves priority inversion by temporarily elevating the low-priority lock-holder to the high-priority waiter's level."
  },
  {
    "_id": "cf_271",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Software & Operating Systems",
    "difficulty": "Hard",
    "questionText": "What is a \"Context Switch\" in a multitasking Operating System?",
    "options": {
      "A": "Plugging in a USB mouse",
      "B": "Saving the CPU registers/PCB state of the currently running process and restoring the saved state of the next scheduled process",
      "C": "Switching monitors",
      "D": "Changing desktop wallpaper"
    },
    "correctAnswer": "B",
    "explanation": "Context switching is pure overhead (no user code runs during it), so OS kernels optimize it heavily."
  },
  {
    "_id": "cf_272",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Software & Operating Systems",
    "difficulty": "Hard",
    "questionText": "In Linux/Unix systems, what does the `fork()` system call do?",
    "options": {
      "A": "Creates a new child process that is a near-identical duplicate of the calling parent process (using Copy-on-Write)",
      "B": "Deletes a file",
      "C": "Shuts down the kernel",
      "D": "Formats a partition"
    },
    "correctAnswer": "A",
    "explanation": "Typically followed by `exec()` to replace the child's memory image with a new program."
  },
  {
    "_id": "cf_273",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Software & Operating Systems",
    "difficulty": "Hard",
    "questionText": "What is \"Hypervisor\" (Type-1 Bare-Metal vs. Type-2 Hosted) software in virtualization and cloud computing?",
    "options": {
      "A": "A virtual machine monitor (VMM) that creates, isolates, and manages multiple virtual machines sharing physical server hardware",
      "B": "A database table",
      "C": "An antivirus scanner",
      "D": "A web browser plugin"
    },
    "correctAnswer": "A",
    "explanation": "Type-1 hypervisors (VMware ESXi, KVM, Hyper-V) run directly on bare-metal hardware to power cloud data centers."
  },
  {
    "_id": "cf_274",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Computer Networks & Internet",
    "difficulty": "Hard",
    "questionText": "In TCP connection establishment, what is the exact sequence of the \"Three-Way Handshake\"?",
    "options": {
      "A": "GET → POST → OK",
      "B": "HELLO → SEND → BYE",
      "C": "ACK → SYN → FIN",
      "D": "SYN → SYN-ACK → ACK"
    },
    "correctAnswer": "D",
    "explanation": "Client sends SYN, server replies SYN-ACK, client confirms with ACK — synchronizing initial sequence numbers for full-duplex communication."
  },
  {
    "_id": "cf_275",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Computer Networks & Internet",
    "difficulty": "Hard",
    "questionText": "Which protocol resolves a known Layer-3 IPv4 address into its corresponding Layer-2 MAC address on a local LAN?",
    "options": {
      "A": "DNS",
      "B": "BGP",
      "C": "ARP (Address Resolution Protocol)",
      "D": "OSPF"
    },
    "correctAnswer": "C",
    "explanation": "ARP broadcasts \"Who has IP X.X.X.X?\" on the local subnet and caches the replying host's MAC address in the ARP table."
  },
  {
    "_id": "cf_276",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Computer Networks & Internet",
    "difficulty": "Hard",
    "questionText": "In IPv4 CIDR notation, how many usable host IP addresses are available inside a `/24` subnet (subnet mask 255.255.255.0)?",
    "options": {
      "A": "512",
      "B": "254",
      "C": "256",
      "D": "128"
    },
    "correctAnswer": "B",
    "explanation": "2⁸ = 256 total addresses minus 2 reserved (network ID .0 and broadcast address .255) = 254 usable host addresses."
  },
  {
    "_id": "cf_277",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Computer Networks & Internet",
    "difficulty": "Hard",
    "questionText": "What is the primary function of NAT (Network Address Translation) on a home or corporate router?",
    "options": {
      "A": "Block spam emails",
      "B": "Map multiple private internal LAN IP addresses (e.g., 192.168.x.x) onto a single or small pool of public routable IPv4 addresses",
      "C": "Compress images",
      "D": "Encrypt Wi-Fi passwords"
    },
    "correctAnswer": "B",
    "explanation": "NAT (and PAT/Port Address Translation) dramatically extended the usable lifespan of IPv4 while hiding internal network topology."
  },
  {
    "_id": "cf_278",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Computer Networks & Internet",
    "difficulty": "Hard",
    "questionText": "Which routing protocol is the core Exterior Gateway Protocol (EGP) that exchanges routing paths between Autonomous Systems across the global Internet?",
    "options": {
      "A": "BGP (Border Gateway Protocol)",
      "B": "RIP",
      "C": "ARP",
      "D": "DHCP"
    },
    "correctAnswer": "A",
    "explanation": "BGP is the \"glue of the Internet,\" making policy-based path-vector routing decisions between ISPs and major networks."
  },
  {
    "_id": "cf_279",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Computer Networks & Internet",
    "difficulty": "Hard",
    "questionText": "In Ethernet LANs, why did modern full-duplex switches eliminate the need for CSMA/CD (Carrier Sense Multiple Access with Collision Detection)?",
    "options": {
      "A": "CSMA/CD is only for fiber",
      "B": "Switches block all packets",
      "C": "Ethernet no longer uses frames",
      "D": "Each switch port forms its own dedicated collision domain with separate transmit and receive wire pairs, preventing collisions"
    },
    "correctAnswer": "D",
    "explanation": "Legacy shared hubs had one giant collision domain; full-duplex switches isolate every link."
  },
  {
    "_id": "cf_280",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Computer Networks & Internet",
    "difficulty": "Hard",
    "questionText": "Which HTTP status code family indicates a Client Error (such as 404 Not Found or 403 Forbidden)?",
    "options": {
      "A": "3xx",
      "B": "5xx",
      "C": "4xx",
      "D": "2xx"
    },
    "correctAnswer": "C",
    "explanation": "HTTP status families: 1xx Informational, 2xx Success (200 OK), 3xx Redirection (301/308), 4xx Client Error, 5xx Server Error (500/503)."
  },
  {
    "_id": "cf_281",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Computer Networks & Internet",
    "difficulty": "Hard",
    "questionText": "What is a \"CDN\" (Content Delivery Network) such as Cloudflare or Akamai used for?",
    "options": {
      "A": "Writing SQL queries",
      "B": "Replacing CPUs",
      "C": "Caching and serving website static/dynamic content from geographically distributed edge servers close to end users to slash latency and absorb DDoS traffic",
      "D": "Compiling C code"
    },
    "correctAnswer": "C",
    "explanation": "CDNs improve global website speed, availability, and security by terminating requests at nearby edge Points of Presence (PoPs)."
  },
  {
    "_id": "cf_282",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Databases & DBMS",
    "difficulty": "Hard",
    "questionText": "In Database Transactions, what does the acronym **ACID** guarantee?",
    "options": {
      "A": "Algorithm, Cache, Input, Disk",
      "B": "Atomicity, Consistency, Isolation, and Durability",
      "C": "Access, Control, Index, Data",
      "D": "Archive, Compress, Integrate, Deploy"
    },
    "correctAnswer": "B",
    "explanation": "ACID guarantees reliable banking/enterprise transactions: all-or-nothing (Atomicity), valid constraints (Consistency), concurrency safety (Isolation), and crash persistence (Durability)."
  },
  {
    "_id": "cf_283",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Databases & DBMS",
    "difficulty": "Hard",
    "questionText": "A table is in **Third Normal Form (3NF)** if it is in 2NF and has NO:",
    "options": {
      "A": "Transitive functional dependencies of non-key attributes on the primary key",
      "B": "Foreign keys",
      "C": "Numeric columns",
      "D": "Primary keys"
    },
    "correctAnswer": "A",
    "explanation": "1NF removes repeating groups (atomic values); 2NF removes partial dependencies on composite keys; 3NF removes transitive dependencies."
  },
  {
    "_id": "cf_284",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Databases & DBMS",
    "difficulty": "Hard",
    "questionText": "In distributed databases, Eric Brewer's **CAP Theorem** states that during a Network Partition (P), a distributed data store must choose between:",
    "options": {
      "A": "Speed and Cost",
      "B": "SQL and JSON",
      "C": "RAM and SSD",
      "D": "Consistency (C) and Availability (A)"
    },
    "correctAnswer": "D",
    "explanation": "You cannot simultaneously guarantee strong linearizable Consistency, 100% Availability, and Partition Tolerance across distributed nodes."
  },
  {
    "_id": "cf_285",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Databases & DBMS",
    "difficulty": "Hard",
    "questionText": "What is a \"Dirty Read\" concurrency anomaly in database transactions?",
    "options": {
      "A": "A syntax error in SELECT",
      "B": "Reading dusty backup tapes",
      "C": "Reading an indexed column",
      "D": "When Transaction B reads uncommitted data modified by Transaction A that later rolls back"
    },
    "correctAnswer": "D",
    "explanation": "Setting transaction isolation level to `READ COMMITTED` or higher prevents dirty reads."
  },
  {
    "_id": "cf_286",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Databases & DBMS",
    "difficulty": "Hard",
    "questionText": "In relational database internals, why is **Write-Ahead Logging (WAL)** essential for crash recovery?",
    "options": {
      "A": "It skips ACID durability",
      "B": "It encrypts SQL syntax",
      "C": "Changes are durably written to a sequential log file BEFORE modifying actual data pages, allowing exact Redo/Undo recovery after a power crash",
      "D": "It deletes old logs immediately"
    },
    "correctAnswer": "C",
    "explanation": "WAL guarantees Atomicity and Durability efficiently in PostgreSQL, InnoDB, SQLite, and Oracle."
  },
  {
    "_id": "cf_287",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Databases & DBMS",
    "difficulty": "Hard",
    "questionText": "What is \"Horizontal Sharding\" in large-scale database architecture?",
    "options": {
      "A": "Adding more CPU cores to one server",
      "B": "Partitioning a massive table's rows across multiple independent database servers (shards) by a shard key to scale writes and storage",
      "C": "Deleting old rows",
      "D": "Joining two tables"
    },
    "correctAnswer": "B",
    "explanation": "Vertical scaling buys a bigger single server; horizontal sharding distributes load across a cluster of servers."
  },
  {
    "_id": "cf_288",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Databases & DBMS",
    "difficulty": "Hard",
    "questionText": "What is a \"Materialized View\" compared to a standard SQL View?",
    "options": {
      "A": "A standard View is a virtual saved query computed on the fly; a Materialized View physically stores the precomputed query result on disk for fast analytics",
      "B": "Standard views use more disk space",
      "C": "They are identical",
      "D": "Materialized views cannot be queried"
    },
    "correctAnswer": "A",
    "explanation": "Materialized views accelerate expensive analytical aggregations at the cost of periodic refresh maintenance."
  },
  {
    "_id": "cf_289",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Cybersecurity & Malware",
    "difficulty": "Hard",
    "questionText": "In Public Key Infrastructure (PKI), how does a **Digital Signature** guarantee BOTH Integrity and Non-Repudiation?",
    "options": {
      "A": "The sender hashes the document and encrypts the hash with their OWN Private Key; anyone can verify it with the sender's Public Key",
      "B": "By adding a scanned JPEG signature",
      "C": "By zipping the file",
      "D": "By encrypting with the recipient's public key"
    },
    "correctAnswer": "A",
    "explanation": "Because only the sender possesses the Private Key, valid verification proves the sender signed it and no bit was tampered with."
  },
  {
    "_id": "cf_290",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Cybersecurity & Malware",
    "difficulty": "Hard",
    "questionText": "What is a **Man-in-the-Middle (MitM)** attack?",
    "options": {
      "A": "Guessing a password offline",
      "B": "Deleting local backups",
      "C": "Scanning open ports only",
      "D": "An attacker secretly intercepting, relaying, and potentially altering live communications between two parties who believe they are communicating directly"
    },
    "correctAnswer": "D",
    "explanation": "Mutual TLS, HSTS, and verified digital certificates issued by trusted Certificate Authorities (CAs) defend against MitM."
  },
  {
    "_id": "cf_291",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Cybersecurity & Malware",
    "difficulty": "Hard",
    "questionText": "What is **Cross-Site Scripting (XSS)** in web application security?",
    "options": {
      "A": "Brute-forcing SSH",
      "B": "Crashing a SQL database",
      "C": "Injecting malicious client-side JavaScript into a trusted web page so it executes inside other victims' browsers to hijack sessions or cookies",
      "D": "Flooding UDP ports"
    },
    "correctAnswer": "C",
    "explanation": "Context-aware output encoding, Content Security Policy (CSP), and `HttpOnly` cookies mitigate XSS attacks."
  },
  {
    "_id": "cf_292",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Cybersecurity & Malware",
    "difficulty": "Hard",
    "questionText": "The security principle of **Least Privilege** states that every user, program, or process should be granted:",
    "options": {
      "A": "Zero access to anything",
      "B": "Only the bare minimum permissions strictly necessary to perform its authorized task",
      "C": "Shared root passwords",
      "D": "Full administrator rights for convenience"
    },
    "correctAnswer": "B",
    "explanation": "Least privilege drastically limits the \"blast radius\" if an account or service is compromised."
  },
  {
    "_id": "cf_293",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Cybersecurity & Malware",
    "difficulty": "Hard",
    "questionText": "In **Zero Trust Security Architecture**, the guiding operational rule is:",
    "options": {
      "A": "Trust everyone inside the office Wi-Fi",
      "B": "\"Never Trust, Always Verify\" — every access request is continuously authenticated, authorized, and encrypted regardless of network location",
      "C": "Disable firewalls internally",
      "D": "Use one master password"
    },
    "correctAnswer": "B",
    "explanation": "Zero Trust assumes breaches can occur inside the perimeter and enforces micro-segmentation and continuous verification."
  },
  {
    "_id": "cf_294",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Cybersecurity & Malware",
    "difficulty": "Hard",
    "questionText": "In enterprise backup strategy, what does the **3-2-1 Backup Rule** recommend?",
    "options": {
      "A": "Keep 3 copies of data, on 2 different storage media types, with at least 1 copy stored off-site/offline (air-gapped)",
      "B": "Use 3 antivirus apps",
      "C": "3 passwords, 2 monitors, 1 PC",
      "D": "Backup every 3 years"
    },
    "correctAnswer": "A",
    "explanation": "An off-site immutable/offline copy protects recovery even against ransomware, fire, or flood."
  },
  {
    "_id": "cf_295",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "Cybersecurity & Malware",
    "difficulty": "Hard",
    "questionText": "What is **ARP Spoofing (ARP Poisoning)** on a local Ethernet network?",
    "options": {
      "A": "Cracking WPA3 offline",
      "B": "Overclocking a switch",
      "C": "Sending spam SMS",
      "D": "Broadcasting forged ARP replies linking the attacker's MAC address to the router's IP address so LAN traffic routes through the attacker"
    },
    "correctAnswer": "D",
    "explanation": "Dynamic ARP Inspection (DAI) on managed switches defends against ARP spoofing and local MitM interception."
  },
  {
    "_id": "cf_296",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "MS Office & Productivity Shortcuts",
    "difficulty": "Hard",
    "questionText": "In MS Excel, what does the error `#REF!` indicate in a formula cell?",
    "options": {
      "A": "Division by zero",
      "B": "Wrong spelling of function name",
      "C": "Invalid cell reference — typically because a row, column, or worksheet referenced by the formula was deleted",
      "D": "Column too narrow"
    },
    "correctAnswer": "C",
    "explanation": "Key Excel errors: `#DIV/0!` (divide by 0), `#NAME?` (unrecognized function/name), `#VALUE!` (wrong data type), `#N/A` (lookup not found), `#REF!` (deleted reference)."
  },
  {
    "_id": "cf_297",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "MS Office & Productivity Shortcuts",
    "difficulty": "Hard",
    "questionText": "In MS PowerPoint, editing the **Slide Master** (View → Slide Master) is best practice for large decks because:",
    "options": {
      "A": "It disables transitions",
      "B": "It deletes animations",
      "C": "Changes to fonts, logo placement, footers, and color theme on the Slide Master propagate uniformly across every slide layout",
      "D": "It converts slides to Excel"
    },
    "correctAnswer": "C",
    "explanation": "Slide Master ensures institutional brand consistency and saves hours of manual slide-by-slide formatting."
  },
  {
    "_id": "cf_298",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "MS Office & Productivity Shortcuts",
    "difficulty": "Hard",
    "questionText": "In MS Excel, why is `INDEX(..., MATCH(...))` (or `XLOOKUP`) historically preferred over `VLOOKUP` by advanced analysts?",
    "options": {
      "A": "VLOOKUP only works on 10 rows",
      "B": "INDEX/MATCH can look up values to the LEFT of the key column and does not break when new columns are inserted into the table",
      "C": "INDEX/MATCH requires no arguments",
      "D": "VLOOKUP cannot read numbers"
    },
    "correctAnswer": "B",
    "explanation": "VLOOKUP's hardcoded column-index number breaks easily if columns are inserted; INDEX/MATCH and XLOOKUP remain resilient."
  },
  {
    "_id": "cf_299",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "MS Office & Productivity Shortcuts",
    "difficulty": "Hard",
    "questionText": "In MS Word, what is the purpose of inserting a **Section Break (Next Page)** instead of a simple **Page Break (Ctrl + Enter)**?",
    "options": {
      "A": "A Section Break allows independent page layout formatting (e.g., switching one page to Landscape or using different headers/page numbering) within the same document",
      "B": "It shrinks font size",
      "C": "It deletes footers",
      "D": "It locks the file"
    },
    "correctAnswer": "A",
    "explanation": "Simple page breaks only force text onto a new page while sharing identical margins, orientation, and headers."
  },
  {
    "_id": "cf_300",
    "category": {
      "name": "Computer Science"
    },
    "subCategory": "Computer Fundamentals",
    "topic": "MS Office & Productivity Shortcuts",
    "difficulty": "Hard",
    "questionText": "In MS Excel, which What-If Analysis tool automatically adjusts ONE input cell to reach a specific desired target value in a formula cell (e.g., finding the loan amount for a fixed monthly EMI)?",
    "options": {
      "A": "Conditional Formatting",
      "B": "PivotChart",
      "C": "Data Validation",
      "D": "Goal Seek"
    },
    "correctAnswer": "D",
    "explanation": "Goal Seek solves single-variable back-calculation problems; Excel Solver handles multi-variable constrained optimization."
  }
];

  global.COMPUTER_FUNDAMENTALS_MCQS = COMPUTER_FUNDAMENTALS_MCQS;
})(typeof window !== 'undefined' ? window : globalThis);
