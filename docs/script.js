// Student Notes Hub - Complete JavaScript

// Global Data
let notesData = null;
let currentBranch = 'all';
let currentSemester = '';
let currentSubject = '';
let quizData = null;
let currentQuestion = 0;
let quizScore = 0;
let userAnswers = [];

// Complete embedded data
const embeddedData = {
  "branches": [
    {
      "id": "cs",
      "name": "Computer Science",
      "shortName": "CS",
      "icon": "fa-laptop-code",
      "semesters": [
        {
          "number": 1,
          "subjects": [
            {
              "id": "cs101",
              "name": "Data Structures",
              "code": "CS-101",
              "notes": [
                { "id": "ds1", "title": "Introduction to Data Structures", "type": "Notes", "driveLink": "https://drive.google.com/filehttps://drive.google.com/file/d/1z18fqeuaFX0lcVbjc1PELcgn8X9Klye3/view?usp=sharing/example1", "previewLink": "https://drive.google.com/file/example1/preview", "uploadedBy": "John Doe", "date": "2026-04-20", "downloads": 245 },
                { "id": "ds2", "title": "Arrays and Linked Lists", "type": "Notes", "driveLink": "https://drive.google.com/file/example2", "previewLink": "https://drive.google.com/file/example2/preview", "uploadedBy": "Jane Smith", "date": "2026-04-18", "downloads": 189 },
                { "id": "ds3", "title": "Stacks and Queues", "type": "PDF", "driveLink": "https://drive.google.com/file/example3", "previewLink": "https://drive.google.com/file/example3/preview", "uploadedBy": "Mike Johnson", "date": "2026-04-15", "downloads": 156 }
              ]
            },
            {
              "id": "cs102",
              "name": "Digital Electronics",
              "code": "CS-102",
              "notes": [
                { "id": "de1", "title": "Number Systems", "type": "Notes", "driveLink": "https://drive.google.com/file/example4", "previewLink": "https://drive.google.com/file/example4/preview", "uploadedBy": "Sarah Lee", "date": "2026-04-12", "downloads": 132 }
              ]
            }
          ]
        },
        {
          "number": 2,
          "subjects": [
            {
              "id": "cs201",
              "name": "Database Management",
              "code": "CS-201",
              "notes": [
                { "id": "db1", "title": "SQL Basics", "type": "Notes", "driveLink": "https://drive.google.com/file/example5", "previewLink": "https://drive.google.com/file/example5/preview", "uploadedBy": "Alex Brown", "date": "2026-04-10", "downloads": 278 }
              ]
            }
          ]
        },
        {
          "number": 3,
          "subjects": [
            {
              "id": "cs301",
              "name": "Operating Systems",
              "code": "CS-301",
              "notes": [
                { "id": "os1", "title": "Process Management", "type": "Notes", "driveLink": "https://drive.google.com/file/example6", "previewLink": "https://drive.google.com/file/example6/preview", "uploadedBy": "Chris Wilson", "date": "2026-04-08", "downloads": 198 }
              ]
            }
          ]
        },
        {
          "number": 4,
          "subjects": [
            {
              "id": "cs401",
              "name": "Computer Networks",
              "code": "CS-401",
              "notes": [
                { "id": "cn1", "title": "Network Layers", "type": "PDF", "driveLink": "https://drive.google.com/file/example7", "previewLink": "https://drive.google.com/file/example7/preview", "uploadedBy": "Emma Davis", "date": "2026-04-05", "downloads": 167 }
              ]
            }
          ]
        },
        {
          "number": 5,
          "subjects": [
            {
              "id": "cs501",
              "name": "Machine Learning",
              "code": "CS-501",
              "notes": [
                { "id": "ml1", "title": "Linear Regression", "type": "Notes", "driveLink": "https://drive.google.com/file/example8", "previewLink": "https://drive.google.com/file/example8/preview", "uploadedBy": "David Miller", "date": "2026-04-01", "downloads": 312 }
              ]
            }
          ]
        },
        {
          "number": 6,
          "subjects": [
            {
              "id": "cs601",
              "name": "Cloud Computing",
              "code": "CS-601",
              "notes": [
                { "id": "cc1", "title": "Introduction to Cloud", "type": "Notes", "driveLink": "https://drive.google.com/file/example9", "previewLink": "https://drive.google.com/file/example9/preview", "uploadedBy": "Lisa Anderson", "date": "2026-03-28", "downloads": 145 }
              ]
            }
          ]
        },
        {
          "number": 7,
          "subjects": [
            {
              "id": "cs701",
              "name": "Cyber Security",
              "code": "CS-701",
              "notes": [
                { "id": "cs1", "title": "Network Security", "type": "Notes", "driveLink": "https://drive.google.com/file/example10", "previewLink": "https://drive.google.com/file/example10/preview", "uploadedBy": "Tom Harris", "date": "2026-03-25", "downloads": 189 }
              ]
            }
          ]
        },
        {
          "number": 8,
          "subjects": [
            {
              "id": "cs801",
              "name": "Project Management",
              "code": "CS-801",
              "notes": [
                { "id": "pm1", "title": "Project Planning", "type": "PDF", "driveLink": "https://drive.google.com/file/example11", "previewLink": "https://drive.google.com/file/example11/preview", "uploadedBy": "Amy Thomas", "date": "2026-03-20", "downloads": 98 }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "me",
      "name": "Mechanical Engineering",
      "shortName": "ME",
      "icon": "fa-cogs",
      "semesters": [
        {
          "number": 1,
          "subjects": [
            {
              "id": "me101",
              "name": "Engineering Mechanics",
              "code": "ME-101",
              "notes": [
                { "id": "em1", "title": "Statics Basics", "type": "Notes", "driveLink": "https://drive.google.com/file/me1", "previewLink": "https://drive.google.com/file/me1/preview", "uploadedBy": "Robert White", "date": "2026-04-15", "downloads": 178 }
              ]
            },
            {
              "id": "me102",
              "name": "Thermodynamics",
              "code": "ME-102",
              "notes": [
                { "id": "td1", "title": "Heat and Work", "type": "Notes", "driveLink": "https://drive.google.com/file/td1", "previewLink": "https://drive.google.com/file/td1/preview", "uploadedBy": "Kevin Martin", "date": "2026-04-12", "downloads": 156 }
              ]
            }
          ]
        },
        {
          "number": 2,
          "subjects": [
            {
              "id": "me201",
              "name": "Fluid Mechanics",
              "code": "ME-201",
              "notes": [
                { "id": "fm1", "title": "Fluid Properties", "type": "PDF", "driveLink": "https://drive.google.com/file/fm1", "previewLink": "https://drive.google.com/file/fm1/preview", "uploadedBy": "Paul Garcia", "date": "2026-04-08", "downloads": 134 }
              ]
            }
          ]
        },
        {
          "number": 3,
          "subjects": [
            {
              "id": "me301",
              "name": "Machine Design",
              "code": "ME-301",
              "notes": [
                { "id": "md1", "title": "Design Principles", "type": "Notes", "driveLink": "https://drive.google.com/file/md1", "previewLink": "https://drive.google.com/file/md1/preview", "uploadedBy": "Steve Martinez", "date": "2026-04-05", "downloads": 167 }
              ]
            }
          ]
        },
        {
          "number": 4,
          "subjects": [
            {
              "id": "me401",
              "name": "Manufacturing Processes",
              "code": "ME-401",
              "notes": [
                { "id": "mp1", "title": "Casting Processes", "type": "Notes", "driveLink": "https://drive.google.com/file/mp1", "previewLink": "https://drive.google.com/file/mp1/preview", "uploadedBy": "Mark Robinson", "date": "2026-04-01", "downloads": 123 }
              ]
            }
          ]
        },
        {
          "number": 5,
          "subjects": [
            {
              "id": "me501",
              "name": "Heat Transfer",
              "code": "ME-501",
              "notes": [
                { "id": "ht1", "title": "Conduction", "type": "Notes", "driveLink": "https://drive.google.com/file/ht1", "previewLink": "https://drive.google.com/file/ht1/preview", "uploadedBy": "James Clark", "date": "2026-03-28", "downloads": 145 }
              ]
            }
          ]
        },
        {
          "number": 6,
          "subjects": [
            {
              "id": "me601",
              "name": "Automobile Engineering",
              "code": "ME-601",
              "notes": [
                { "id": "ae1", "title": "Engine Components", "type": "PDF", "driveLink": "https://drive.google.com/file/ae1", "previewLink": "https://drive.google.com/file/ae1/preview", "uploadedBy": "Daniel Lewis", "date": "2026-03-25", "downloads": 98 }
              ]
            }
          ]
        },
        {
          "number": 7,
          "subjects": [
            {
              "id": "me701",
              "name": "Industrial Engineering",
              "code": "ME-701",
              "notes": [
                { "id": "ie1", "title": "Production Planning", "type": "Notes", "driveLink": "https://drive.google.com/file/ie1", "previewLink": "https://drive.google.com/file/ie1/preview", "uploadedBy": "Brian Walker", "date": "2026-03-20", "downloads": 87 }
              ]
            }
          ]
        },
        {
          "number": 8,
          "subjects": [
            {
              "id": "me801",
              "name": "Robotics",
              "code": "ME-801",
              "notes": [
                { "id": "rb1", "title": "Robot Kinematics", "type": "Notes", "driveLink": "https://drive.google.com/file/rb1", "previewLink": "https://drive.google.com/file/rb1/preview", "uploadedBy": "Ryan Hall", "date": "2026-03-15", "downloads": 112 }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "ce",
      "name": "Civil Engineering",
      "shortName": "CE",
      "icon": "fa-building",
      "semesters": [
        {
          "number": 1,
          "subjects": [
            {
              "id": "ce101",
              "name": "Surveying",
              "code": "CE-101",
              "notes": [
                { "id": "su1", "title": "Chain Surveying", "type": "Notes", "driveLink": "https://drive.google.com/file/su1", "previewLink": "https://drive.google.com/file/su1/preview", "uploadedBy": "Peter Young", "date": "2026-04-18", "downloads": 145 }
              ]
            },
            {
              "id": "ce102",
              "name": "Building Materials",
              "code": "CE-102",
              "notes": [
                { "id": "bm1", "title": "Construction Materials", "type": "Notes", "driveLink": "https://drive.google.com/file/bm1", "previewLink": "https://drive.google.com/file/bm1/preview", "uploadedBy": "George King", "date": "2026-04-15", "downloads": 123 }
              ]
            }
          ]
        },
        {
          "number": 2,
          "subjects": [
            {
              "id": "ce201",
              "name": "Structural Analysis",
              "code": "CE-201",
              "notes": [
                { "id": "sa1", "title": "Truss Analysis", "type": "Notes", "driveLink": "https://drive.google.com/file/sa1", "previewLink": "https://drive.google.com/file/sa1/preview", "uploadedBy": "Charles Wright", "date": "2026-04-10", "downloads": 167 }
              ]
            }
          ]
        },
        {
          "number": 3,
          "subjects": [
            {
              "id": "ce301",
              "name": "Concrete Technology",
              "code": "CE-301",
              "notes": [
                { "id": "ct1", "title": "Concrete Mix Design", "type": "PDF", "driveLink": "https://drive.google.com/file/ct1", "previewLink": "https://drive.google.com/file/ct1/preview", "uploadedBy": "Joseph Lopez", "date": "2026-04-05", "downloads": 134 }
              ]
            }
          ]
        },
        {
          "number": 4,
          "subjects": [
            {
              "id": "ce401",
              "name": "Geotechnical Engineering",
              "code": "CE-401",
              "notes": [
                { "id": "ge1", "title": "Soil Mechanics", "type": "Notes", "driveLink": "https://drive.google.com/file/ge1", "previewLink": "https://drive.google.com/file/ge1/preview", "uploadedBy": "Thomas Hill", "date": "2026-04-01", "downloads": 156 }
              ]
            }
          ]
        },
        {
          "number": 5,
          "subjects": [
            {
              "id": "ce501",
              "name": "Transportation Engineering",
              "code": "CE-501",
              "notes": [
                { "id": "te1", "title": "Highway Design", "type": "Notes", "driveLink": "https://drive.google.com/file/te1", "previewLink": "https://drive.google.com/file/te1/preview", "uploadedBy": "Andrew Scott", "date": "2026-03-28", "downloads": 98 }
              ]
            }
          ]
        },
        {
          "number": 6,
          "subjects": [
            {
              "id": "ce601",
              "name": "Water Resources Engineering",
              "code": "CE-601",
              "notes": [
                { "id": "wr1", "title": "Hydrology", "type": "Notes", "driveLink": "https://drive.google.com/file/wr1", "previewLink": "https://drive.google.com/file/wr1/preview", "uploadedBy": "Edward Green", "date": "2026-03-25", "downloads": 112 }
              ]
            }
          ]
        },
        {
          "number": 7,
          "subjects": [
            {
              "id": "ce701",
              "name": "Environmental Engineering",
              "code": "CE-701",
              "notes": [
                { "id": "ee1", "title": "Water Treatment", "type": "PDF", "driveLink": "https://drive.google.com/file/ee1", "previewLink": "https://drive.google.com/file/ee1/preview", "uploadedBy": "William Adams", "date": "2026-03-20", "downloads": 87 }
              ]
            }
          ]
        },
        {
          "number": 8,
          "subjects": [
            {
              "id": "ce801",
              "name": "Bridge Engineering",
              "code": "CE-801",
              "notes": [
                { "id": "be1", "title": "Bridge Types", "type": "Notes", "driveLink": "https://drive.google.com/file/be1", "previewLink": "https://drive.google.com/file/be1/preview", "uploadedBy": "Henry Baker", "date": "2026-03-15", "downloads": 76 }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "ee",
      "name": "Electrical Engineering",
      "shortName": "EE",
      "icon": "fa-bolt",
      "semesters": [
        {
          "number": 1,
          "subjects": [
            {
              "id": "ee101",
              "name": "Circuit Theory",
              "code": "EE-101",
              "notes": [
                { "id": "ct1", "title": "Network Theorems", "type": "Notes", "driveLink": "https://drive.google.com/file/ee-ct1", "previewLink": "https://drive.google.com/file/ee-ct1/preview", "uploadedBy": "Benjamin Nelson", "date": "2026-04-20", "downloads": 234 }
              ]
            },
            {
              "id": "ee102",
              "name": "Electromagnetic Theory",
              "code": "EE-102",
              "notes": [
                { "id": "emt1", "title": "Maxwell's Equations", "type": "Notes", "driveLink": "https://drive.google.com/file/emt1", "previewLink": "https://drive.google.com/file/emt1/preview", "uploadedBy": "Samuel Carter", "date": "2026-04-16", "downloads": 178 }
              ]
            }
          ]
        },
        {
          "number": 2,
          "subjects": [
            {
              "id": "ee201",
              "name": "Electrical Machines",
              "code": "EE-201",
              "notes": [
                { "id": "em1", "title": "DC Machines", "type": "Notes", "driveLink": "https://drive.google.com/file/em1", "previewLink": "https://drive.google.com/file/em1/preview", "uploadedBy": "Christopher Mitchell", "date": "2026-04-12", "downloads": 198 }
              ]
            }
          ]
        },
        {
          "number": 3,
          "subjects": [
            {
              "id": "ee301",
              "name": "Power Systems",
              "code": "EE-301",
              "notes": [
                { "id": "ps1", "title": "Transmission Lines", "type": "PDF", "driveLink": "https://drive.google.com/file/ps1", "previewLink": "https://drive.google.com/file/ps1/preview", "uploadedBy": "Jonathan Perez", "date": "2026-04-08", "downloads": 167 }
              ]
            }
          ]
        },
        {
          "number": 4,
          "subjects": [
            {
              "id": "ee401",
              "name": "Control Systems",
              "code": "EE-401",
              "notes": [
                { "id": "cs1", "title": "Transfer Functions", "type": "Notes", "driveLink": "https://drive.google.com/file/cs1", "previewLink": "https://drive.google.com/file/cs1/preview", "uploadedBy": "Matthew Roberts", "date": "2026-04-04", "downloads": 145 }
              ]
            }
          ]
        },
        {
          "number": 5,
          "subjects": [
            {
              "id": "ee501",
              "name": "Power Electronics",
              "code": "EE-501",
              "notes": [
                { "id": "pe1", "title": "Rectifiers", "type": "Notes", "driveLink": "https://drive.google.com/file/pe1", "previewLink": "https://drive.google.com/file/pe1/preview", "uploadedBy": "Joshua Turner", "date": "2026-04-01", "downloads": 189 }
              ]
            }
          ]
        },
        {
          "number": 6,
          "subjects": [
            {
              "id": "ee601",
              "name": "Signals and Systems",
              "code": "EE-601",
              "notes": [
                { "id": "ss1", "title": "Fourier Transform", "type": "Notes", "driveLink": "https://drive.google.com/file/ss1", "previewLink": "https://drive.google.com/file/ss1/preview", "uploadedBy": "Brandon Phillips", "date": "2026-03-28", "downloads": 123 }
              ]
            }
          ]
        },
        {
          "number": 7,
          "subjects": [
            {
              "id": "ee701",
              "name": "Electrical Measurements",
              "code": "EE-701",
              "notes": [
                { "id": "em1", "title": "Measuring Instruments", "type": "PDF", "driveLink": "https://drive.google.com/file/em1", "previewLink": "https://drive.google.com/file/em1/preview", "uploadedBy": "Justin Campbell", "date": "2026-03-24", "downloads": 98 }
              ]
            }
          ]
        },
        {
          "number": 8,
          "subjects": [
            {
              "id": "ee801",
              "name": "High Voltage Engineering",
              "code": "EE-801",
              "notes": [
                { "id": "hv1", "title": "Dielectric Materials", "type": "Notes", "driveLink": "https://drive.google.com/file/hv1", "previewLink": "https://drive.google.com/file/hv1/preview", "uploadedBy": "Tyler Evans", "date": "2026-03-20", "downloads": 87 }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "it",
      "name": "Information Technology",
      "shortName": "IT",
      "icon": "fa-network-wired",
      "semesters": [
        {
          "number": 1,
          "subjects": [
            {
              "id": "it101",
              "name": "C Programming",
              "code": "IT-101",
              "notes": [
                { "id": "cp1", "title": "C Basics", "type": "Notes", "driveLink": "https://drive.google.com/file/it-cp1", "previewLink": "https://drive.google.com/file/it-cp1/preview", "uploadedBy": "Austin Reed", "date": "2026-04-22", "downloads": 312 }
              ]
            },
            {
              "id": "it102",
              "name": "Web Development",
              "code": "IT-102",
              "notes": [
                { "id": "wd1", "title": "HTML & CSS", "type": "Notes", "driveLink": "https://drive.google.com/file/wd1", "previewLink": "https://drive.google.com/file/wd1/preview", "uploadedBy": "Jordan Cook", "date": "2026-04-18", "downloads": 267 }
              ]
            }
          ]
        },
        {
          "number": 2,
          "subjects": [
            {
              "id": "it201",
              "name": "Java Programming",
              "code": "IT-201",
              "notes": [
                { "id": "jp1", "title": "OOP Concepts", "type": "Notes", "driveLink": "https://drive.google.com/file/jp1", "previewLink": "https://drive.google.com/file/jp1/preview", "uploadedBy": "Connor Morgan", "date": "2026-04-14", "downloads": 234 }
              ]
            }
          ]
        },
        {
          "number": 3,
          "subjects": [
            {
              "id": "it301",
              "name": "Data Structures",
              "code": "IT-301",
              "notes": [
                { "id": "it-ds1", "title": "Trees and Graphs", "type": "Notes", "driveLink": "https://drive.google.com/file/it-ds1", "previewLink": "https://drive.google.com/file/it-ds1/preview", "uploadedBy": "Ethan Bell", "date": "2026-04-10", "downloads": 198 }
              ]
            }
          ]
        },
        {
          "number": 4,
          "subjects": [
            {
              "id": "it401",
              "name": "Database Management",
              "code": "IT-401",
              "notes": [
                { "id": "it-db1", "title": "SQL Queries", "type": "PDF", "driveLink": "https://drive.google.com/file/it-db1", "previewLink": "https://drive.google.com/file/it-db1/preview", "uploadedBy": "Liam Murphy", "date": "2026-04-06", "downloads": 176 }
              ]
            }
          ]
        },
        {
          "number": 5,
          "subjects": [
            {
              "id": "it501",
              "name": "Software Engineering",
              "code": "IT-501",
              "notes": [
                { "id": "se1", "title": "SDLC Models", "type": "Notes", "driveLink": "https://drive.google.com/file/se1", "previewLink": "https://drive.google.com/file/se1/preview", "uploadedBy": "Noah Bailey", "date": "2026-04-02", "downloads": 156 }
              ]
            }
          ]
        },
        {
          "number": 6,
          "subjects": [
            {
              "id": "it601",
              "name": "Computer Networks",
              "code": "IT-601",
              "notes": [
                { "id": "it-cn1", "title": "OSI Model", "type": "Notes", "driveLink": "https://drive.google.com/file/it-cn1", "previewLink": "https://drive.google.com/file/it-cn1/preview", "uploadedBy": "Lucas Rivera", "date": "2026-03-30", "downloads": 134 }
              ]
            }
          ]
        },
        {
          "number": 7,
          "subjects": [
            {
              "id": "it701",
              "name": "Artificial Intelligence",
              "code": "IT-701",
              "notes": [
                { "id": "ai1", "title": "Search Algorithms", "type": "Notes", "driveLink": "https://drive.google.com/file/ai1", "previewLink": "https://drive.google.com/file/ai1/preview", "uploadedBy": "Caleb Cooper", "date": "2026-03-26", "downloads": 189 }
              ]
            }
          ]
        },
        {
          "number": 8,
          "subjects": [
            {
              "id": "it801",
              "name": "Cyber Security",
              "code": "IT-801",
              "notes": [
                { "id": "it-cs1", "title": "Network Security", "type": "PDF", "driveLink": "https://drive.google.com/file/it-cs1", "previewLink": "https://drive.google.com/file/it-cs1/preview", "uploadedBy": "Hunter Richardson", "date": "2026-03-22", "downloads": 145 }
              ]
            }
          ]
        }
      ]
    }
  ],
  "announcements": [
    { "id": 1, "title": "Mid Semester Exams - Schedule Released", "description": "The mid semester examination schedule has been uploaded. Check the exams section for details.", "date": "2026-04-24", "type": "exam", "priority": "high" },
    { "id": 2, "title": "New Study Materials Added", "description": "50+ new notes added for Computer Science and IT branches.", "date": "2026-04-23", "type": "update", "priority": "medium" },
    { "id": 3, "title": "Workshop: Python for Data Science", "description": "Join us for a hands-on workshop on Python programming for data science. Register now!", "date": "2026-04-22", "type": "event", "priority": "medium" },
    { "id": 4, "title": "Notes Contribution Bonus", "description": "Top contributors this month will receive bonus points. Keep uploading!", "date": "2026-04-20", "type": "announcement", "priority": "low" }
  ],
  "contributors": [
    { "name": "John Doe", "uploads": 45, "branch": "CS" },
    { "name": "Jane Smith", "uploads": 38, "branch": "IT" },
    { "name": "Mike Johnson", "uploads": 32, "branch": "CS" },
    { "name": "Sarah Lee", "uploads": 28, "branch": "EE" },
    { "name": "Alex Brown", "uploads": 25, "branch": "ME" }
  ],
  "quizzes": [
    {
      "branch": "cs",
      "subject": "Data Structures",
      "questions": [
        { "q": "What is the time complexity of binary search?", "options": ["O(n)", "O(log n)", "O(n log n)", "O(1)"], "answer": 1 },
        { "q": "Which data structure uses LIFO principle?", "options": ["Queue", "Stack", "Array", "Linked List"], "answer": 1 },
        { "q": "What is the maximum number of nodes in a binary tree of height h?", "options": ["2^h", "2^(h+1) - 1", "2h", "h^2"], "answer": 1 }
      ]
    },
    {
      "branch": "cs",
      "subject": "Database Management",
      "questions": [
        { "q": "Which SQL command is used to retrieve data?", "options": ["INSERT", "SELECT", "UPDATE", "DELETE"], "answer": 1 },
        { "q": "What is a primary key?", "options": ["Unique identifier", "Foreign identifier", "Multiple keys", "No key"], "answer": 0 }
      ]
    }
  ],
  "syllabus": [
    { "branch": "cs", "semester": 1, "subject": "Data Structures", "completed": 75 },
    { "branch": "cs", "semester": 1, "subject": "Digital Electronics", "completed": 60 },
    { "branch": "cs", "semester": 2, "subject": "Database Management", "completed": 80 },
    { "branch": "me", "semester": 1, "subject": "Engineering Mechanics", "completed": 70 },
    { "branch": "ee", "semester": 1, "subject": "Circuit Theory", "completed": 65 }
  ]
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    notesData = embeddedData;
    initializeApp();
});

function initializeApp() {
    renderBranches();
    renderAnnouncements();
    renderLeaderboard();
    setupEventListeners();
    loadTheme();
}

// Render Branch Cards
function renderBranches(filter = 'all') {
    const grid = document.getElementById('branchCards');
    if (!grid || !notesData) return;

    const branches = filter === 'all' 
        ? notesData.branches 
        : notesData.branches.filter(b => b.id === filter);

    grid.innerHTML = branches.map(branch => {
        const noteCount = countNotes(branch);
        return `
            <div class="col-md-4 col-lg-3">
                <div class="branch-card" data-branch="${branch.id}">
                    <i class="fas ${branch.icon}"></i>
                    <h3>${branch.name}</h3>
                    <p>${branch.shortName}</p>
                    <span class="note-count">${noteCount} Notes</span>
                </div>
            </div>
        `;
    }).join('');

    document.querySelectorAll('.branch-card').forEach(card => {
        card.addEventListener('click', () => selectBranch(card.dataset.branch));
    });
}

function countNotes(branch) {
    let count = 0;
    branch.semesters.forEach(sem => {
        sem.subjects.forEach(sub => {
            count += sub.notes.length;
        });
    });
    return count;
}

function selectBranch(branchId) {
    currentBranch = branchId;
    const branch = notesData.branches.find(b => b.id === branchId);
    
    document.getElementById('selectedBranchTitle').textContent = 
        branch ? branch.name : 'All Notes';
    
    document.querySelectorAll('.branch-card').forEach(card => {
        card.classList.toggle('active', card.dataset.branch === branchId);
    });
    
    populateSubjectFilter(branchId);
    renderNotes();
    
    document.getElementById('notes').scrollIntoView({ behavior: 'smooth' });
}

function populateSubjectFilter(branchId) {
    const subjectSelect = document.getElementById('subjectFilter');
    const branch = notesData.branches.find(b => b.id === branchId);
    
    if (!branch) {
        subjectSelect.innerHTML = '<option value="">Select Subject</option>';
        return;
    }
    
    let options = '<option value="">All Subjects</option>';
    branch.semesters.forEach(sem => {
        sem.subjects.forEach(sub => {
            options += `<option value="${sub.id}">${sub.name} (${sub.code})</option>`;
        });
    });
    
    subjectSelect.innerHTML = options;
}

// Render Notes
function renderNotes() {
    const grid = document.getElementById('notesGrid');
    if (!grid || !notesData) return;

    let allNotes = [];
    
    if (currentBranch === 'all') {
        notesData.branches.forEach(branch => {
            branch.semesters.forEach(sem => {
                sem.subjects.forEach(sub => {
                    sub.notes.forEach(note => {
                        allNotes.push({ ...note, subject: sub });
                    });
                });
            });
        });
    } else {
        const branch = notesData.branches.find(b => b.id === currentBranch);
        if (branch) {
            branch.semesters.forEach(sem => {
                if (currentSemester && sem.number !== parseInt(currentSemester)) return;
                
                sem.subjects.forEach(sub => {
                    if (currentSubject && sub.id !== currentSubject) return;
                    
                    sub.notes.forEach(note => {
                        allNotes.push({ ...note, subject: sub });
                    });
                });
            });
        }
    }

    if (allNotes.length === 0) {
        grid.innerHTML = '<div class="col-12 text-center"><p>No notes found. Select a branch to view notes.</p></div>';
        return;
    }

    grid.innerHTML = allNotes.map(note => `
        <div class="note-card">
            <div class="note-header">
                <i class="fas ${getNoteIcon(note.type)}"></i>
                <span class="note-type">${note.type}</span>
            </div>
            <div class="note-body">
                <div class="subject-code">${note.subject.code}</div>
                <h4>${note.title}</h4>
                <div class="meta">
                    <span><i class="fas fa-user"></i> ${note.uploadedBy}</span>
                    <span><i class="fas fa-calendar"></i> ${formatDate(note.date)}</span>
                </div>
                <div class="meta">
                    <span><i class="fas fa-download"></i> ${note.downloads}</span>
                </div>
                <div class="note-actions">
                    <button class="preview-btn" onclick="previewNote('${note.id}', '${note.previewLink}', '${note.title}')">
                        <i class="fas fa-eye"></i> Preview
                    </button>
                    <button class="download-btn" onclick="downloadNote('${note.driveLink}', '${note.title}')">
                        <i class="fas fa-download"></i> Download
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function getNoteIcon(type) {
    const icons = {
        'Notes': 'fa-sticky-note',
        'PDF': 'fa-file-pdf',
        'Video': 'fa-video',
        'Past Paper': 'fa-file-alt'
    };
    return icons[type] || 'fa-file-alt';
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
}

// Preview & Download Functions
function previewNote(id, link, title) {
    document.getElementById('previewTitle').textContent = title;
    document.getElementById('previewFrame').src = link;
    document.getElementById('downloadLink').href = link;
    
    const modal = new bootstrap.Modal(document.getElementById('previewModal'));
    modal.show();
}

function downloadNote(link, title) {
    window.open(link, '_blank');
}

// Render Announcements
function renderAnnouncements() {
    const grid = document.getElementById('announcementsGrid');
    if (!grid || !notesData || !notesData.announcements) return;

    grid.innerHTML = notesData.announcements.map(ann => `
        <div class="col-md-6 col-lg-4">
            <div class="announcement-card ${ann.priority}">
                <div class="announcement-header">
                    <h4>${ann.title}</h4>
                    <span class="announcement-date">${formatDate(ann.date)}</span>
                </div>
                <p>${ann.description}</p>
                <span class="announcement-type">${ann.type}</span>
            </div>
        </div>
    `).join('');
}

// Render Leaderboard
function renderLeaderboard() {
    const body = document.getElementById('leaderboardBody');
    if (!body || !notesData || !notesData.contributors) return;

    const sorted = [...notesData.contributors].sort((a, b) => b.uploads - a.uploads);
    
    body.innerHTML = sorted.map((contributor, index) => `
        <div class="leaderboard-row">
            <div class="rank ${getRankClass(index)}">${index + 1}</div>
            <div class="name">${contributor.name}</div>
            <div class="branch">${contributor.branch}</div>
            <div class="uploads">${contributor.uploads}</div>
        </div>
    `).join('');
}

function getRankClass(index) {
    if (index === 0) return 'gold';
    if (index === 1) return 'silver';
    if (index === 2) return 'bronze';
    return '';
}

// Quiz Functions
function setupQuizControls() {
    const branchSelect = document.getElementById('quizBranch');
    const subjectSelect = document.getElementById('quizSubject');
    
    branchSelect.addEventListener('change', () => {
        const branch = branchSelect.value;
        populateQuizSubjects(branch);
    });
}

function populateQuizSubjects(branch) {
    const subjectSelect = document.getElementById('quizSubject');
    const branchData = notesData?.branches?.find(b => b.id === branch);
    
    if (!branchData) {
        subjectSelect.innerHTML = '<option value="">Select Subject</option>';
        return;
    }
    
    let options = '<option value="">Select Subject</option>';
    branchData.semesters.forEach(sem => {
        sem.subjects.forEach(sub => {
            options += `<option value="${sub.id}">${sub.name}</option>`;
        });
    });
    
    subjectSelect.innerHTML = options;
}

function startQuiz() {
    const branch = document.getElementById('quizBranch').value;
    const subjectId = document.getElementById('quizSubject').value;
    
    if (!branch || !subjectId) {
        alert('Please select branch and subject');
        return;
    }
    
    quizData = notesData.quizzes?.find(q => q.branch === branch && q.subject);
    
    if (!quizData || !quizData.questions || quizData.questions.length === 0) {
        alert('No quiz available for this subject yet!');
        return;
    }
    
    currentQuestion = 0;
    quizScore = 0;
    userAnswers = [];
    
    document.getElementById('quizContainer').style.display = 'block';
    renderQuestion();
}

function renderQuestion() {
    if (!quizData || !quizData.questions) return;
    
    const question = quizData.questions[currentQuestion];
    document.getElementById('questionNumber').textContent = `Question ${currentQuestion + 1} of ${quizData.questions.length}`;
    document.getElementById('quizScore').textContent = `Score: ${quizScore}`;
    document.getElementById('quizQuestion').textContent = question.q;
    
    const optionsHtml = question.options.map((opt, index) => `
        <div class="quiz-option" data-index="${index}" onclick="selectOption(${index})">${opt}</div>
    `).join('');
    
    document.getElementById('quizOptions').innerHTML = optionsHtml;
    
    document.getElementById('prevQuestion').style.display = currentQuestion === 0 ? 'none' : 'block';
    document.getElementById('nextQuestion').textContent = 
        currentQuestion === quizData.questions.length - 1 ? 'Submit' : 'Next';
}

function selectOption(index) {
    document.querySelectorAll('.quiz-option').forEach((opt, i) => {
        opt.classList.toggle('selected', i === index);
    });
    userAnswers[currentQuestion] = index;
}

function navigateQuiz(direction) {
    if (direction === 1 && currentQuestion < quizData.questions.length - 1) {
        currentQuestion++;
        renderQuestion();
    } else if (direction === -1 && currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
    } else if (direction === 1 && currentQuestion === quizData.questions.length - 1) {
        submitQuiz();
    }
}

function submitQuiz() {
    if (!quizData || !quizData.questions) return;
    
    let score = 0;
    quizData.questions.forEach((q, index) => {
        if (userAnswers[index] === q.answer) {
            score++;
        }
    });
    
    alert(`Quiz Completed!\n\nYour Score: ${score}/${quizData.questions.length}\n\nPercentage: ${Math.round((score/quizData.questions.length)*100)}%`);
    
    document.getElementById('quizContainer').style.display = 'none';
}

// Syllabus Tracker
function loadSyllabusProgress() {
    const branch = document.getElementById('syllabusBranch').value;
    const semester = document.getElementById('syllabusSemester').value;
    
    if (!branch || !semester) {
        alert('Please select branch and semester');
        return;
    }
    
    const progressDiv = document.getElementById('syllabusProgress');
    const filtered = notesData.syllabus?.filter(s => s.branch === branch && s.semester === parseInt(semester)) || [];
    
    if (filtered.length === 0) {
        progressDiv.innerHTML = '<p class="text-center">No syllabus data available for this selection.</p>';
        return;
    }
    
    progressDiv.innerHTML = filtered.map(s => `
        <div class="syllabus-card">
            <h4>Semester ${s.semester}</h4>
            <p class="subject">${s.subject}</p>
            <div class="progress">
                <div class="progress-bar" style="width: ${s.completed}%"></div>
            </div>
            <div class="progress-label">
                <span>Progress</span>
                <span>${s.completed}%</span>
            </div>
        </div>
    `).join('');
}

// Search Function
function performSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (!query) {
        alert('Please enter a search term');
        return;
    }
    
    const results = [];
    
    notesData.branches.forEach(branch => {
        branch.semesters.forEach(sem => {
            sem.subjects.forEach(sub => {
                sub.notes.forEach(note => {
                    if (note.title.toLowerCase().includes(query) || 
                        sub.name.toLowerCase().includes(query) ||
                        sub.code.toLowerCase().includes(query)) {
                        results.push({ branch: branch.name, subject: sub.name, note });
                    }
                });
            });
        });
    });
    
    if (results.length > 0) {
        const message = results.slice(0, 5).map(r => 
            `${r.note.title} (${r.branch} - ${r.subject})`
        ).join('\n');
        
        alert(`Found ${results.length} results:\n\n${message}${results.length > 5 ? '\n\n...and more' : ''}`);
    } else {
        alert('No results found. Try different keywords.');
    }
}

// Theme Toggle
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('#themeToggle i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Contribution Form
function handleContribution(e) {
    e.preventDefault();
    
    const name = document.getElementById('contributorName').value;
    const email = document.getElementById('contributorEmail').value;
    const branch = document.getElementById('contributeBranch').value;
    const semester = document.getElementById('contributeSemester').value;
    const subject = document.getElementById('contributeSubject').value;
    const driveLink = document.getElementById('driveLink').value;
    
    const contributions = JSON.parse(localStorage.getItem('contributions') || '[]');
    contributions.push({ name, email, branch, semester, subject, driveLink, date: new Date().toISOString() });
    localStorage.setItem('contributions', JSON.stringify(contributions));
    
    alert('Thank you for your contribution! Your notes will be reviewed and added soon.');
    e.target.reset();
}

// Setup All Event Listeners
function setupEventListeners() {
    // Branch filters
    document.querySelectorAll('.branch-filters .filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.branch-filters .filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderBranches(btn.dataset.branch);
        });
    });
    
    // Semester filter
    document.getElementById('semesterFilter').addEventListener('change', (e) => {
        currentSemester = e.target.value;
        renderNotes();
    });
    
    // Subject filter
    document.getElementById('subjectFilter').addEventListener('change', (e) => {
        currentSubject = e.target.value;
        renderNotes();
    });
    
    // Search
    document.getElementById('searchBtn').addEventListener('click', performSearch);
    document.getElementById('searchInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });
    
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    
    // Quiz controls
    setupQuizControls();
    document.getElementById('startQuiz').addEventListener('click', startQuiz);
    document.getElementById('prevQuestion').addEventListener('click', () => navigateQuiz(-1));
    document.getElementById('nextQuestion').addEventListener('click', () => navigateQuiz(1));
    
    // Syllabus controls
    document.getElementById('syllabusBranch').addEventListener('change', (e) => {
        const semSelect = document.getElementById('syllabusSemester');
        let options = '<option value="">Select Semester</option>';
        for (let i = 1; i <= 8; i++) {
            options += `<option value="${i}">Semester ${i}</option>`;
        }
        semSelect.innerHTML = options;
    });
    document.getElementById('loadSyllabus').addEventListener('click', loadSyllabusProgress);
    
    // Contribution form
    document.getElementById('contributionForm').addEventListener('submit', handleContribution);
    
    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        }
    });
}

// Export functions for global use
window.previewNote = previewNote;
window.downloadNote = downloadNote;
window.selectOption = selectOption;
window.navigateQuiz = navigateQuiz;