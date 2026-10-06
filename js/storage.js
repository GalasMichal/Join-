const JOIN_STORAGE_PREFIX = "join_";

const JOIN_DEMO_USERS = [
  {
    name: "Anton Meyer",
    email: "antom@gmail.com",
    password: "join",
    phone: "0123 45678910",
    Number: "0123 45678910",
    bgcolor: "#6E52FF",
  },
  {
    name: "Anja Schulz",
    email: "schulz@hotmail.com",
    password: "join",
    phone: "0123 45678910",
    Number: "0123 45678910",
    bgcolor: "#FF7A00",
  },
  {
    name: "Benedikt Ziegler",
    email: "benedikt@gmail.com",
    password: "join",
    phone: "0123 45678910",
    Number: "0123 45678910",
    bgcolor: "#9327FF",
  },
  {
    name: "David Eisenberg",
    email: "davidberg@gmail.com",
    password: "join",
    phone: "0123 45678910",
    Number: "0123 45678910",
    bgcolor: "#FC71FF",
  },
  {
    name: "Eva Fischer",
    email: "eva@gmail.com",
    password: "join",
    phone: "0123 45678910",
    Number: "0123 45678910",
    bgcolor: "#FFBB2B",
  },
  {
    name: "Emmanuel Mauer",
    email: "emmanuelma@gmail.com",
    password: "join",
    phone: "0123 45678910",
    Number: "0123 45678910",
    bgcolor: "#1FD7C1",
  },
  {
    name: "Marcel Bauer",
    email: "bauer@gmail.com",
    password: "join",
    phone: "0123 45678910",
    Number: "0123 45678910",
    bgcolor: "#462F8A",
  },
  {
    name: "Tatjana Wolf",
    email: "wolf@gmail.com",
    password: "join",
    phone: "0123 45678910",
    Number: "0123 45678910",
    bgcolor: "#FF5EB3",
  },
  {
    name: "Demo User",
    email: "demo@join.de",
    password: "join",
    phone: "0123 45678910",
    Number: "0123 45678910",
    bgcolor: "#2A3647",
  },
];

const JOIN_DEMO_TASKS = [
  {
    id: 0,
    bucket: "to-do",
    title: "Website redesign",
    description: "Create wireframes for the Join landing page.",
    assigned: ["Anton Meyer", "Anja Schulz"],
    duedate: "2026-10-20",
    prio: "Urgent",
    category: "User Story",
    subtask: [
      { subdone: true, subtitle: "Collect requirements" },
      { subdone: false, subtitle: "Sketch first layout" },
    ],
  },
  {
    id: 1,
    bucket: "to-do",
    title: "Setup local storage",
    description: "Keep demo data in the browser instead of a remote API.",
    assigned: ["Demo User"],
    duedate: "2026-10-15",
    prio: "Medium",
    category: "Technical Task",
    subtask: [{ subdone: false, subtitle: "Seed users and tasks" }],
  },
  {
    id: 2,
    bucket: "in-progress",
    title: "Contact badges",
    description: "Show assigned contacts on every board card.",
    assigned: ["Benedikt Ziegler", "Eva Fischer"],
    duedate: "2026-10-18",
    prio: "Medium",
    category: "User Story",
    subtask: [
      { subdone: true, subtitle: "Initials from name" },
      { subdone: false, subtitle: "Match badge colors" },
    ],
  },
  {
    id: 3,
    bucket: "await-feedback",
    title: "Review legal notice",
    description: "Check Impressum and privacy pages before the demo.",
    assigned: ["Tatjana Wolf"],
    duedate: "2026-10-12",
    prio: "Low",
    category: "Technical Task",
    subtask: [],
  },
  {
    id: 4,
    bucket: "done",
    title: "Guest login",
    description: "Let recruiters open the board without an account.",
    assigned: ["Marcel Bauer", "David Eisenberg"],
    duedate: "2026-10-08",
    prio: "Low",
    category: "User Story",
    subtask: [
      { subdone: true, subtitle: "Guest button" },
      { subdone: true, subtitle: "Redirect to summary" },
    ],
  },
];

function joinStorageKey(key) {
  return JOIN_STORAGE_PREFIX + key;
}

function ensureJoinDemoData() {
  if (localStorage.getItem(joinStorageKey("users")) == null) {
    localStorage.setItem(joinStorageKey("users"), JSON.stringify(JOIN_DEMO_USERS));
  }
  if (localStorage.getItem(joinStorageKey("addedTasks")) == null) {
    localStorage.setItem(joinStorageKey("addedTasks"), JSON.stringify(JOIN_DEMO_TASKS));
  }
}

async function setItem(key, value) {
  ensureJoinDemoData();
  localStorage.setItem(joinStorageKey(key), value);
  return { status: "success" };
}

async function getItem(key) {
  ensureJoinDemoData();
  const raw = localStorage.getItem(joinStorageKey(key));
  if (raw == null) {
    throw `Could not find data with key "${key}".`;
  }
  return raw;
}
