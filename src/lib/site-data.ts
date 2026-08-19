export const SITE = {
  name: "Sabaragamuwa Road Passenger Transport Authority",
  shortName: "SGRPTA",
  tagline: "Reliable and Quality passenger transport in Sabaragamuwa",
  facebook: "https://www.facebook.com/share/1EWsfWbS5K/",
};

// External Google Drive folders — updated Nov 2025.
export const FARE_TABLES_URL =
  "https://drive.google.com/drive/folders/1jKOGu-yYGdJDFWtg-c1lo4-d0nUCQKtt";
export const BUS_TIMETABLE_URL =
  "https://drive.google.com/drive/folders/14rU5DvrDFV2GJAGI1kfiB871c6MNUsWl";

// Leadership: roleKey drives i18n label; name stays as proper noun.
export const LEADERSHIP = [
  { roleKey: "governor", name: "Mrs. Champa Janaki Rajarathne" },
  { roleKey: "chairman", name: "Mr. Leelananda Kaluthota" },
  { roleKey: "gm", name: "Mr. Thusitha Jayasena" },
] as const;

export const COMPLAINTS = {
  ratnapura: ["070 438 6096", "045 2230557"],
  kegalle: ["076 097 3888", "035 2222307"],
};

// Per-district statistics (Kegalle figures from the District Office name list, Aug 2026).
export const STATS_RATNAPURA = [
  { key: "drivers", value: "1,007" },
  { key: "conductors", value: "939" },
  { key: "buses", value: "990" },
  { key: "owners", value: "780" },
] as const;

export const STATS_KEGALLE = [
  { key: "drivers", value: "880" },
  { key: "conductors", value: "855" },
  { key: "buses", value: "824" },
  { key: "owners", value: "730" },
] as const;

export const STATS_BY_DISTRICT = {
  ratnapura: STATS_RATNAPURA,
  kegalle: STATS_KEGALLE,
} as const;

export const BOARD = [
  { name: "Mr. L. Kaluthota", phone: "+94 717398763" },
  { name: "Mr. K. Palitha Kalugama", phone: "+94 71 801 4639" },
  { name: "Mr. H.A.D. Hettiarachchi", phone: "+94 71 442 6337" },
  { name: "Mr. M.R.S.K. Nisakantha", phone: "+94 71 807 4255" },
  { name: "Ms. W.R.S.K. Weerasekara", phone: "+94 71 444 0680" },
  { name: "Mr. P. Danasekara", phone: "+94 76 128 8688" },
  { name: "Mr. G. Shantha Ajith", phone: "+94 71 448 2485" },
  { name: "Mrs. Shamedani Matharahewa", phone: "+94 71 990 5040" },
  { name: "Mr. K.P.M. Gunarathna", phone: "+94 71 859 2618" },
  { name: "Mr. M.G. Wijerathna", phone: "+94 70 278 1747" },
  { name: "Mr. H.W. Roopasinghe", phone: "+94 71 443 0797" },
  { name: "Mr. H.A.N.T.K. Jayasena ", phone: "+94 71 513 1303" },
  { name: "Mr. D.M.W.B. Delpitiya ", phone: "+94 76 330 6777" },
  
];

export const INFO_OFFICER = {
  name: "Mr. Thusitha Jayasena",
  role: "Information Officer / General Manager(Acting)",
  mobile: "+94 71 513 1303",
  phones: ["035 2232295", "045 2222085"],
};

export const RTI_OFFICER = {
  name: "Mr. Thusitha Jayasena",
  role: "Information Officer — General Manager(Acting)",
  mobile: "+94 71 513 1303",
  phones: ["+94 45 2230557", "+94 35 2232295"],
  email: "sprptarathnapura@gmail.com",
};

// HEAD OFFICE: Ratnapura · DISTRICT OFFICE: Kegalle
export const OFFICES = [
  {
    key: "ratnapura",
    titleKey: "offices.head",
    address: [
      "Sabaragamuwa Road Passenger Transport Authority",
      "Provincial Council Complex, New Town",
      "Ratnapura",
    ],
    phones: ["+94 45 222 2085", "+94 45 223 0557"],
    email: "sprptarathnapura@gmail.com",
    mapQuery: "Provincial Council Complex New Town Ratnapura",
  },
  {
    key: "kegalle",
    titleKey: "offices.district",
    address: ["Sabaragamuwa Road Passenger Transport Authority", "Rathambalawatta", "Kegalle"],
    phones: ["+94 35 223 2295"],
    email: "sgprptakegalle@gmail.com",
    mapQuery: "Sabaragamuwa Road Passenger Transport Authority Rathambalawatta Kegalle",
  },
] as const;

// Ratnapura district branches — Ratnapura → Eheliyagoda.
export const SUB_BRANCHES_RATNAPURA = [
  { town: "Ratnapura", stand: "Central Bus Stand, Ratnapura", phone: "045 2226486" },
  { town: "Nivithigala", stand: "Central Bus Stand, Nivithigala" },
  { town: "Balangoda", stand: "Central Bus Stand, Balangoda" },
  { town: "Kuruwita", stand: "Central Bus Stand, Kuruwita" },
  { town: "Pelmadulla", stand: "Central Bus Stand, Pelmadulla" },
  { town: "Kalawana", stand: "Central Bus Stand, Kalawana" },
  { town: "Rakwana", stand: "Central Bus Stand, Rakwana" },
  { town: "Embilipitiya", stand: "Central Bus Stand, Embilipitiya" },
  { town: "Eheliyagoda", stand: "Central Bus Stand, Eheliyagoda" },
];

// Kegalle district branches — Warakapola → Nelumdeniya.
export const SUB_BRANCHES_KEGALLE = [
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
  { to: "/", key: "home", label: "Home" },
  { to: "/about", key: "about", label: "About" },
  { to: "/services", key: "services", label: "Services" },
  { to: "/information-act", key: "information-act", label: "Information Act" },
  { to: "/news", key: "news", label: "News" },
  { to: "/staff", key: "staff", label: "Staff" },
  { to: "/contact", key: "contact", label: "Contact" },
] as const;

const avatar = (name: string) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=6b1220&color=f6c352&size=256&bold=true&format=png`;

// Position keys map to translation entries under `positions.*`.
export const STAFF = [
  { name: "H. N. T. K. Jayasena", positionKey: "gm_acting", photo: avatar("H N T K Jayasena") },
  { name: "D. L. T. M. Disanayaka", positionKey: "operational_manager", photo: avatar("D L T M Disanayaka") },
  { name: "M. L. Thamali Dhanushika", positionKey: "assistant_manager", photo: avatar("T L Dhanushika") },
  { name: "K. M. Udeshika Madubhashini", positionKey: "chief_mso", photo: avatar("Udeshika Madubhashini") },
  { name: "S. A. Swarnalatha", positionKey: "mso", photo: avatar("S A Swarnalatha") },
  { name: "J. M. Pramila Niroshani Jayasekara", positionKey: "mso", photo: avatar("P N Jayasekara") },
  { name: "Nilusha Dilrukshi Godawitharana", positionKey: "mso", photo: avatar("N D Godawitharana") },
  { name: "M. A. Chamari Nowadani Mallikaarachchi", positionKey: "mso", photo: avatar("C N Mallikaarachchi") },
  { name: "N. K. Nandani Sujatha", positionKey: "mso", photo: avatar("N K N Sujatha") },
  { name: "K. K. Anusha Damayanthi", positionKey: "mso", photo: avatar("A K Damayanthi") },
  { name: "R. A. Nadika Lalani", positionKey: "mso", photo: avatar("R A N Lalani") },
  { name: "H. M. Buddhika Gunathilaka", positionKey: "mso", photo: avatar("B M Gunathilaka") },
  { name: "M. L. Thamali Dhanushika", positionKey: "mso", photo: avatar("T L Dhanushika") },
  { name: "D. H. A. Harsha Medhani Wickramasinghe", positionKey: "mso", photo: avatar("H M Wickramasinghe") },
  { name: "H. B. N. D. Somarathna", positionKey: "mso", photo: avatar("H B N D Somarathna") },
  { name: "R. R. L. Jayawardhana", positionKey: "mso", photo: avatar("R R L Jayawardhana") },
  { name: "H. M. Sumith Karunarathna", positionKey: "mso", photo: avatar("S M Karunarathna") },
  { name: "W. M. Munasinghe", positionKey: "office_assistant", photo: avatar("W M Munasinghe") },
  { name: "M. W. K. Tilakarathna", positionKey: "office_assistant", photo: avatar("M W K Tilakarathna") },
  { name: "T. M. Harsha Lakruwan", positionKey: "driver", photo: avatar("T M Harsha Lakruwan") },
];

// Kegalle District Office staff — official name list.
export const STAFF_KEGALLE = [
  { name: "W.D.J. Sanjeewa", positionKey: "operational_manager", photo: avatar("W D J Sanjeewa") },
  { name: "J.D. Nimal Jayawardhana", positionKey: "transport_manager", photo: avatar("J D Nimal Jayawardhana") },
  { name: "G.D.M. Weerasinghe", positionKey: "chief_mso", photo: avatar("G D M Weerasinghe") },
  { name: "W.A.D.R. Priyanka Wijesooriya", positionKey: "mso", photo: avatar("W A D R P Wijesooriya") },
  { name: "G.V.K. Nilakshi Vidanage", positionKey: "mso", photo: avatar("G V K N Vidanage") },
  { name: "B.B.G.RA.T. Bakmeedeniya", positionKey: "mso", photo: avatar("B B G T Bakmeedeniya") },
  { name: "R.W.A. Senali Shyamalika", positionKey: "mso", photo: avatar("R W A S Shyamalika") },
  { name: "W.A. Shyamalee Bopitiya", positionKey: "mso", photo: avatar("W A S Bopitiya") },
  { name: "W.N.N.K. Witharana", positionKey: "mso", photo: avatar("W N N K Witharana") },
  { name: "A.G. Upajeewa Madhusanka", positionKey: "mso", photo: avatar("A G U Madhusanka") },
  { name: "H.A. Madhurika Kumari Hettiarachchi", positionKey: "mso", photo: avatar("H A M K Hettiarachchi") },
  { name: "S. Ruchira Sarath Kumara", positionKey: "mso", photo: avatar("S Ruchira Sarath Kumara") },
  { name: "W.N.D. Welipitiya", positionKey: "mso", photo: avatar("W N D Welipitiya") },
  { name: "S.D. Supun Abesinghe", positionKey: "mso", photo: avatar("S D Supun Abesinghe") },
  { name: "H.R. Sadi Banda", positionKey: "office_assistant", photo: avatar("H R Sadi Banda") },
  { name: "K.A. Saman Chandana", positionKey: "driver", photo: avatar("K A Saman Chandana") },
];

// Number of registered bus routes per district.
export const BUS_ROUTES = {
  ratnapura: 627,
  kegalle: 540,
} as const;

