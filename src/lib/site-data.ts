import logo from "@/assets/bus.png";

export const SITE = {
  name: "Sabaragamuwa Provincial Road Passenger Transport Authority",
  shortName: "SGPRPTA",
  tagline: "Reliable and Quality passenger transport in Sabaragamuwa",
  facebook: "https://www.facebook.com/share/1EWsfWbS5K/",
};

export { logo };

export const NOTICES = [
  {
    title: "New Recruiting 2025.10.23 – 2025.11.12",
    href: "https://sgprpta.sg.gov.lk/wp-content/uploads/2025/10/%E0%B6%9A%E0%B7%85%E0%B6%B8%E0%B6%B1%E0%B7%8F%E0%B6%9A%E0%B6%BB%E0%B7%94-%E0%B6%B8%E0%B7%99%E0%B7%84%E0%B7%99%E0%B6%BA%E0%B7%94%E0%B6%B8%E0%B7%8A-2.pdf",
    tag: "Recruitment",
  },
  {
    title: "Annual Bus Fare Revision 2025/07/04",
    href: "https://sgprpta.sg.gov.lk/wp-content/uploads/2025/07/Annual-Bus-Fare-Revision-2025.pdf",
    tag: "Fare Revision",
  },
];

export const LEADERSHIP = [
  { role: "The Governor", name: "Mrs. Champa Janaki Rajarathne" },
  { role: "The Chairman", name: "Mr. Leelananda Kaluthota" },
  { role: "General Manager", name: "Damith Priyantha Batawala" },
];

export const MAIN_FUNCTIONS = [
  {
    title: "Regulation of Passenger Transport",
    body: "Passenger transport is a power vested in the Provincial Council since 1987, with provisions under Act No. 1 of 1994 for the establishment of this Authority.",
  },
  {
    title: "Increasing Passenger Safety",
    body: "Providing security for passengers travelling in the province, subject to NTC regulations, provincial statutes and rules of the Sabaragamuwa Provincial Council.",
  },
  {
    title: "Quality Passenger Transport",
    body: "Improving in-bus service, running training programmes for drivers and conductors, and shaping the attitudes of employees toward the travelling public.",
  },
  {
    title: "Employee Welfare",
    body: "Introducing welfare programmes for staff and maintaining funds for charity work across the province.",
  },
];

export const COMPLAINTS = {
  ratnapura: ["070 438 6096", "045 2230557"],
  kegalle: ["076 097 3888", "035 2222307"],
};

export const STATS = [
  { label: "Bus Drivers", value: "1,007" },
  { label: "Bus Conductors", value: "939" },
  { label: "Buses", value: "990" },
  { label: "Bus Owners", value: "780" },
];

export const BOARD = [
  { name: "Mr. M.A. Pushpakumara Danasekara", phone: "+94 76 330 6777" },
  { name: "Mr. K. Palitha Kalugama", phone: "+94 71 801 4639" },
  { name: "Mr. H.A.D. Hettiarachchi", phone: "+94 71 442 6337" },
  { name: "Mr. M.R.S.K. Nishakantha", phone: "+94 71 807 4255" },
  { name: "Ms. Wijitha Samarasinghe", phone: "+94 71 823 8368" },
  { name: "Mr. P. Danasekara", phone: "+94 76 128 8688" },
  { name: "Mr. G. Shantha Ajith", phone: "+94 71 448 2485" },
  { name: "Mrs. Shamedani Matharahewa", phone: "+94 71 990 5040" },
  { name: "Mr. W.R.S.K. Weerasekara", phone: "+94 71 444 0680" },
  { name: "Mr. D.M.W.B. Delpitiya", phone: "+94 76 330 6777" },
];

export const INFO_OFFICER = {
  name: "Mr. Thusitha Jayasena",
  role: "Information Officer / Main Coordinator",
  mobile: "+94 71 513 1303",
  phones: ["035 2232295", "045 2222085"],
};

export const RTI_OFFICER = {
  name: "Damith Priyantha Batawala",
  role: "Information Officer — General Manager",
  mobile: "+94 71 439 6696",
  phones: ["+94 45 2230557", "+94 35 2232295"],
  fax: "+94 45 2222085",
  email: "sgprptarathnapura@gmail.com",
};

export const SERVICES = [
  {
    title: "Passenger and Cargo Transportation",
    items: [
      "Take action on passenger and cargo transportation",
      "Setting standards for passenger and goods transport and imposing regulations",
      "Passenger transport service routes and regulations governing the use of motor vehicles",
      "Check the suitability of vehicles used for passenger and goods transportation",
      "Investigating the fulfilment of passenger transport activity",
      "Imposition of regulations relating to passenger transport",
      "Passengers travelling in three-wheelers",
      "Freight Transport License permits and regulations",
      "Checking illegal passenger and goods transportation",
    ],
  },
  {
    title: "Common Services",
    items: [
      "Issue of permits and regulations",
      "Providing information",
      "Tariff setting",
      "School transport services",
      "Providing permits on documents other than a vehicle that is not a bus",
      "Maintaining records",
      "Acquisition of property",
      "Imposition of service fees",
      "Donations and contracts",
    ],
  },
  {
    title: "Services of Buses",
    items: [
      "Designing of bus terminus name boards",
      "Specifying the documents in the bus",
      "Registration of drivers and conductors",
      "Designation of permit conditions",
      "Issue of leaflets and logs",
      "Managing bus stations and bus halts",
      "Management of bus stops",
    ],
  },
  {
    title: "Services of the Staff",
    items: [
      "Administration and discipline of employees",
      "Providing welfare and other relief assistance to members and employees",
      "Training programmes for drivers and conductors",
      "Attitudinal development for public-facing staff",
      "Recruitment and promotions",
      "Handling grievances and appeals",
      "Retirement and pension co-ordination",
    ],
  },
];

export const BUS_TIMETABLE = [
  { route: "122", from: "Ratnapura", to: "Colombo (via Avissawella)", departure: "05:30", arrival: "08:45", type: "Semi-Luxury", days: "Daily" },
  { route: "122", from: "Ratnapura", to: "Colombo (via Avissawella)", departure: "07:15", arrival: "10:30", type: "Normal", days: "Daily" },
  { route: "125", from: "Kegalle", to: "Colombo", departure: "05:45", arrival: "08:15", type: "Semi-Luxury", days: "Daily" },
  { route: "125", from: "Kegalle", to: "Colombo", departure: "09:00", arrival: "11:30", type: "Normal", days: "Daily" },
  { route: "34", from: "Ratnapura", to: "Embilipitiya", departure: "06:00", arrival: "08:00", type: "Normal", days: "Daily" },
  { route: "34", from: "Ratnapura", to: "Embilipitiya", departure: "13:15", arrival: "15:15", type: "Normal", days: "Daily" },
  { route: "44", from: "Ratnapura", to: "Balangoda", departure: "06:30", arrival: "07:45", type: "Normal", days: "Daily" },
  { route: "44", from: "Ratnapura", to: "Balangoda", departure: "12:00", arrival: "13:15", type: "Normal", days: "Daily" },
  { route: "62", from: "Kegalle", to: "Kandy", departure: "06:15", arrival: "07:45", type: "Semi-Luxury", days: "Daily" },
  { route: "62", from: "Kegalle", to: "Kandy", departure: "10:45", arrival: "12:15", type: "Normal", days: "Daily" },
  { route: "17", from: "Ratnapura", to: "Kalawana", departure: "07:00", arrival: "08:30", type: "Normal", days: "Daily" },
  { route: "17", from: "Ratnapura", to: "Kalawana", departure: "14:30", arrival: "16:00", type: "Normal", days: "Daily" },
];

// HEAD OFFICE: Ratnapura · DISTRICT OFFICE: Kegalle
export const OFFICES = [
  {
    key: "ratnapura",
    title: "Head Office — Ratnapura",
    address: [
      "Sabaragamuwa Road Passenger Transport Authority",
      "Provincial Council Complex, New Town",
      "Ratnapura",
    ],
    phones: ["+94 45 222 2085", "+94 45 223 0557"],
    fax: "+94 45 223 0557",
    email: "sgprptarathnapura@gmail.com",
    mapQuery: "Provincial Council Complex New Town Ratnapura",
  },
  {
    key: "kegalle",
    title: "District Office — Kegalle",
    address: ["Sabaragamuwa Road Passenger Transport Authority", "Rathambalawatta", "Kegalle"],
    phones: ["+94 35 223 2295"],
    fax: "+94 35 222 2307",
    email: "sgprptakegalle@gmail.com",
    mapQuery: "Sabaragamuwa Road Passenger Transport Authority Rathambalawatta Kegalle",
  },
];


// De-duplicated (BA §2.4: Ratnapura was listed 3x).
export const SUB_BRANCHES = [
  { town: "Ratnapura", stand: "Central Bus Stand, Ratnapura", phone: "045 2226486" },
  { town: "Nivithigala", stand: "Central Bus Stand, Nivithigala" },
  { town: "Balangoda", stand: "Central Bus Stand, Balangoda" },
  { town: "Kuruwita", stand: "Central Bus Stand, Kuruwita" },
  { town: "Pelmadulla", stand: "Central Bus Stand, Pelmadulla" },
  { town: "Kalawana", stand: "Central Bus Stand, Kalawana" },
  { town: "Rakwana", stand: "Central Bus Stand, Rakwana" },
  { town: "Embilipitiya", stand: "Central Bus Stand, Embilipitiya" },
  { town: "Eheliyagoda", stand: "Central Bus Stand, Eheliyagoda" },
  { town: "Warakapola", stand: "Central Bus Stand, Warakapola" },
  { town: "Wariyapola", stand: "Central Bus Stand, Wariyapola" },
  { town: "Algama", stand: "Central Bus Stand, Algama" },
  { town: "Galapitamada", stand: "Central Bus Stand, Galapitamada" },
  { town: "Ruwanwella", stand: "Central Bus Stand, Ruwanwella" },
  { town: "Karawanella", stand: "Central Bus Stand, Karawanella" },
  { town: "Deraniyagala", stand: "Central Bus Stand, Deraniyagala" },
  { town: "Bulathkohupitiya", stand: "Central Bus Stand, Bulathkohupitiya" },
  { town: "Aranayaka", stand: "Central Bus Stand, Aranayaka" },
  { town: "Hemmathagama", stand: "Central Bus Stand, Hemmathagama" },
  { town: "Dikpitiya", stand: "Central Bus Stand, Dikpitiya" },
  { town: "Mawanella", stand: "Central Bus Stand, Mawanella" },
  { town: "Rambukkana", stand: "Central Bus Stand, Rambukkana" },
  { town: "Nelumdeniya", stand: "Central Bus Stand, Nelumdeniya" },
];

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/information-act", label: "Information Act" },
  { to: "/contact", label: "Contact" },
] as const;
