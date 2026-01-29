// ---------- DATA ----------

const packs = [
  {
    id: "forest",
    name: "Forest Pack",
    cost: 25,
    blooks: [
      { name: "Squirrel Scout", rarity: "uncommon" },
      { name: "Mossy Rabbit", rarity: "uncommon" },
      { name: "Pine Owl", rarity: "rare" },
      { name: "Red Fox", rarity: "rare" },
      { name: "Bark Bear", rarity: "epic" },
      { name: "Timber Wolf", rarity: "epic" },
      { name: "Forest Guardian", rarity: "legendary" },
      { name: "Ancient Treant", rarity: "legendary" },
      { name: "Emerald Stag", rarity: "chroma" }
    ]
  },
  {
    id: "space",
    name: "Space Pack",
    cost: 35,
    blooks: [
      { name: "Astro Pup", rarity: "uncommon" },
      { name: "Moon Miner", rarity: "uncommon" },
      { name: "Star Pilot", rarity: "rare" },
      { name: "Meteor Bot", rarity: "rare" },
      { name: "Nebula Mage", rarity: "epic" },
      { name: "Void Serpent", rarity: "epic" },
      { name: "Galaxy Knight", rarity: "legendary" },
      { name: "Cosmic Titan", rarity: "legendary" },
      { name: "Prism Alien", rarity: "chroma" }
    ]
  },
  {
    id: "ocean",
    name: "Ocean Pack",
    cost: 25,
    blooks: [
      { name: "Bubble Fish", rarity: "uncommon" },
      { name: "Coral Crab", rarity: "uncommon" },
      { name: "Tide Turtle", rarity: "rare" },
      { name: "Deep Diver", rarity: "rare" },
      { name: "Storm Shark", rarity: "epic" },
      { name: "Abyss Ray", rarity: "epic" },
      { name: "Leviathan Cub", rarity: "legendary" },
      { name: "Kraken Spawn", rarity: "legendary" },
      { name: "Sapphire Dolphin", rarity: "chroma" }
    ]
  },
  {
    id: "medieval",
    name: "Medieval Pack",
    cost: 30,
    blooks: [
      { name: "Village Peasant", rarity: "uncommon" },
      { name: "Young Squire", rarity: "uncommon" },
      { name: "Archer Scout", rarity: "rare" },
      { name: "Iron Knight", rarity: "rare" },
      { name: "Battle Mage", rarity: "epic" },
      { name: "Dragon Tamer", rarity: "epic" },
      { name: "Royal Paladin", rarity: "legendary" },
      { name: "Fire Drake", rarity: "legendary" },
      { name: "Crystal Griffin", rarity: "chroma" }
    ]
  },
  {
    id: "candy",
    name: "Candy Pack",
    cost: 20,
    blooks: [
      { name: "Gumdrop Kid", rarity: "uncommon" },
      { name: "Marshmallow Puff", rarity: "uncommon" },
      { name: "Jelly Knight", rarity: "rare" },
      { name: "Licorice Cat", rarity: "rare" },
      { name: "Caramel Giant", rarity: "epic" },
      { name: "Frosted Witch", rarity: "epic" },
      { name: "Sugar King", rarity: "legendary" },
      { name: "Candy Hydra", rarity: "legendary" },
      { name: "Neon Lollipop", rarity: "chroma" }
    ]
  },
  {
    id: "tech",
    name: "Tech Pack",
    cost: 35,
    blooks: [
      { name: "Circuit Bug", rarity: "uncommon" },
      { name: "Byte Bot", rarity: "uncommon" },
      { name: "Data Drone", rarity: "rare" },
      { name: "Laser Pup", rarity: "rare" },
      { name: "Quantum Hacker", rarity: "epic" },
      { name: "Plasma Golem", rarity: "epic" },
      { name: "Cyber Warden", rarity: "legendary" },
      { name: "Omega Android", rarity: "legendary" },
      { name: "Glitch Sprite", rarity: "chroma" },
      { name: "Spectrum Core", rarity: "chroma" }
    ]
  },
  {
    id: "farm",
    name: "Farm Pack",
    cost: 20,
    blooks: [
      { name: "Hay Chick", rarity: "uncommon" },
      { name: "Mud Piglet", rarity: "uncommon" },
      { name: "Barn Cat", rarity: "rare" },
      { name: "Tractor Kid", rarity: "rare" },
      { name: "Harvest Bull", rarity: "epic" },
      { name: "Scarecrow Spirit", rarity: "epic" },
      { name: "Golden Rooster", rarity: "legendary" },
      { name: "Titan Cow", rarity: "legendary" },
      { name: "Rainbow Sheep", rarity: "chroma" }
    ]
  },
  {
    id: "city",
    name: "City Pack",
    cost: 25,
    blooks: [
      { name: "Street Kid", rarity: "uncommon" },
      { name: "Taxi Pup", rarity: "uncommon" },
      { name: "Firefighter Rookie", rarity: "rare" },
      { name: "Delivery Drone", rarity: "rare" },
      { name: "Neon Skater", rarity: "epic" },
      { name: "Skyline Guardian", rarity: "epic" },
      { name: "Metro Titan", rarity: "legendary" },
      { name: "Steel Sentinel", rarity: "legendary" },
      { name: "Prism Billboard", rarity: "chroma" }
    ]
  },
  {
    id: "mythical",
    name: "Mythical Pack",
    cost: 40,
    blooks: [
      { name: "Tiny Imp", rarity: "uncommon" },
      { name: "Baby Sprite", rarity: "uncommon" },
      { name: "Stone Gargoyle", rarity: "rare" },
      { name: "Frost Fairy", rarity: "rare" },
      { name: "Thunder Roc", rarity: "epic" },
      { name: "Lava Djinn", rarity: "epic" },
      { name: "Celestial Kirin", rarity: "legendary" },
      { name: "Shadow Behemoth", rarity: "legendary" },
      { name: "Aurora Phoenix", rarity: "chroma" },
      { name: "Spectrum Chimera", rarity: "chroma" }
    ]
  },
  {
    id: "chaos",
    name: "Chaos Pack",
    cost: 50,
    blooks: [
      { name: "Glitch Blob", rarity: "uncommon" },
      { name: "Static Worm", rarity: "uncommon" },
      { name: "Error Slime", rarity: "rare" },
      { name: "Fracture Beast", rarity: "rare" },
      { name: "Paradox Mage", rarity: "epic" },
      { name: "Rift Serpent", rarity: "epic" },
      { name: "Time Shatterer", rarity: "legendary" },
      { name: "Void Monarch", rarity: "legendary" },
      { name: "Chromatic Rift", rarity: "chroma" },
      { name: "Infinity Echo", rarity: "chroma" },
      { name: "Fractal Nova", rarity: "chroma" }
    ]
  }
];

// rarity chances (you can tweak)
const rarityChances = {
  uncommon: 0.6,   // 60%
  rare: 0.2,       // 20%
  epic: 0.05,      // 5%
  legendary: 0.01, // 1%
  chroma: 0.0005   // 0.05%
};

// ---------- STATE ----------

let tokens = 1000;
let inventory = {}; // key: blook name -> { count, rarity }
let secretChroma = false;

// secret click tracking
const secretClickWindowMs = 1500;
let lastClickTime = 0;
let clickCount = 0;

// ---------- DOM ----------

const tokenCountEl = document.getElementById("token-count");
const packsContainer = document.getElementById("packs-container");
const inventoryGrid = document.getElementById("inventory-grid");

const tabMarketBtn = document.getElementById("tab-market");
const tabInventoryBtn = document.getElementById("tab-inventory");
const marketSection = document.getElementById("market-section");
const inventorySection = document.getElementById("inventory-section");

const overlay = document.getElementById("overlay");
const overlayPackName = document.getElementById("overlay-pack-name");
const overlayBlookName = document.getElementById("overlay-blook-name");
const overlayBlookRarity = document.getElementById("overlay-blook-rarity");
const overlayContinue = document.getElementById("overlay-continue");

// ---------- INIT ----------

function loadState() {
  const savedTokens = localStorage.getItem("tokens");
  const savedInventory = localStorage.getItem("inventory");
  if (savedTokens !== null) tokens = parseInt(savedTokens, 10);
  if (savedInventory) inventory = JSON.parse(savedInventory);
}

function saveState() {
  localStorage.setItem("tokens", tokens.toString());
  localStorage.setItem("inventory", JSON.stringify(inventory));
}

function updateTokensDisplay() {
  tokenCountEl.textContent = tokens;
}

function createPackCards() {
  packsContainer.innerHTML = "";
  packs.forEach(pack => {
    const card = document.createElement("div");
    card.className = "pack-card";

    const logo = document.createElement("div");
    logo.className = "pack-logo";
    logo.textContent = pack.name.split(" ")[0];

    // secret chroma click logic (no visual)
    logo.addEventListener("click", () => {
      const now = Date.now();
      if (now - lastClickTime > secretClickWindowMs) {
        clickCount = 0;
      }
      clickCount++;
      lastClickTime = now;
      if (clickCount >= 3) {
        secretChroma = true;
        clickCount = 0;
      }
    });

    const nameEl = document.createElement("div");
    nameEl.className = "pack-name";
    nameEl.textContent = pack.name;

    const costEl = document.createElement("div");
    costEl.className = "pack-cost";
    costEl.textContent = `Cost: ${pack.cost} tokens`;

    const btn = document.createElement("button");
    btn.className = "pack-open-btn";
    btn.textContent = "Open Pack";
    btn.addEventListener("click", () => openPack(pack));

    card.appendChild(logo);
    card.appendChild(nameEl);
    card.appendChild(costEl);
    card.appendChild(btn);
    packsContainer.appendChild(card);
  });
}

function renderInventory() {
  inventoryGrid.innerHTML = "";
  const entries = Object.entries(inventory);
  if (entries.length === 0) {
    inventoryGrid.textContent = "No BLooks yet. Open some packs!";
    return;
  }

  entries.forEach(([name, data]) => {
    const item = document.createElement("div");
    item.className = "inventory-item";

    const nameEl = document.createElement("div");
    nameEl.className = "inventory-name";
    nameEl.textContent = name;

    const rarityEl = document.createElement("div");
    rarityEl.className = "inventory-rarity rarity-" + data.rarity;
    rarityEl.textContent = data.rarity.toUpperCase();

    const countEl = document.createElement("div");
    countEl.className = "inventory-count";
    countEl.textContent = `Owned: ${data.count}`;

    item.appendChild(nameEl);
    item.appendChild(rarityEl);
    item.appendChild(countEl);
    inventoryGrid.appendChild(item);
  });
}

// ---------- RARITY + PACK OPENING ----------

function rollRarity() {
  if (secretChroma) {
    secretChroma = false;
    return "chroma";
  }

  const r = Math.random();
  let sum = 0;

  sum += rarityChances.chroma;
  if (r < sum) return "chroma";

  sum += rarityChances.legendary;
  if (r < sum) return "legendary";

  sum += rarityChances.epic;
  if (r < sum) return "epic";

  sum += rarityChances.rare;
  if (r < sum) return "rare";

  return "uncommon";
}

function openPack(pack) {
  if (tokens < pack.cost) return;
  tokens -= pack.cost;
  updateTokensDisplay();
  saveState();

  const rarity = rollRarity();
  const candidates = pack.blooks.filter(b => b.rarity === rarity);

  // if no blook of that rarity in this pack, fallback to uncommon
  const chosenList = candidates.length > 0
    ? candidates
    : pack.blooks.filter(b => b.rarity === "uncommon");

  const blook = chosenList[Math.floor(Math.random() * chosenList.length)];

  addToInventory(blook);
  saveState();
  showOverlay(pack, blook);
}

// ---------- INVENTORY ----------

function addToInventory(blook) {
  if (!inventory[blook.name]) {
    inventory[blook.name] = { count: 0, rarity: blook.rarity };
  }
  inventory[blook.name].count++;
  renderInventory();
}

// ---------- OVERLAY + CONFETTI ----------

let confettiInterval = null;

function showOverlay(pack, blook) {
  overlayPackName.textContent = pack.name;
  overlayBlookName.textContent = blook.name;
  overlayBlookRarity.className = "";
  overlayBlookRarity.classList.add("rarity-" + blook.rarity);
  overlayBlookRarity.textContent = blook.rarity.toUpperCase();

  overlay.classList.remove("hidden");

  startConfettiForRarity(blook.rarity);
}

function hideOverlay() {
  overlay.classList.add("hidden");
  stopConfetti();
}

function startConfettiForRarity(rarity) {
  stopConfetti();
  const container = document.getElementById("overlay-content");

  const colorsByRarity = {
    epic: ["#ef4444", "#f97316", "#facc15"],
    legendary: ["#f97316", "#facc15", "#fb923c"],
    chroma: ["#f97316", "#eab308", "#22c55e", "#3b82f6", "#a855f7", "#ec4899"]
  };

  if (rarity === "uncommon" || rarity === "rare") return;

  confettiInterval = setInterval(() => {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";

    const rect = container.getBoundingClientRect();
    const x = Math.random() * rect.width;
    const y = Math.random() * rect.height;

    piece.style.left = x + "px";
    piece.style.top = y + "px";

    const colors = colorsByRarity[rarity] || ["#ffffff"];
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    if (rarity === "epic") {
      piece.style.animation = "shoot-side 0.8s linear forwards";
    } else if (rarity === "legendary") {
      piece.style.animation = "fall 1.2s linear forwards";
    } else if (rarity === "chroma") {
      const dx = (Math.random() - 0.5) * 300;
      const dy = (Math.random() - 0.5) * 300;
      piece.style.setProperty("--dx", dx + "px");
      piece.style.setProperty("--dy", dy + "px");
      piece.style.animation = "burst 1s ease-out forwards";
    }

    container.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 1500);
  }, 80);
}

function stopConfetti() {
  if (confettiInterval) {
    clearInterval(confettiInterval);
    confettiInterval = null;
  }
  const container = document.getElementById("overlay-content");
  const pieces = container.querySelectorAll(".confetti-piece");
  pieces.forEach(p => p.remove());
}

// ---------- TABS ----------

tabMarketBtn.addEventListener("click", () => {
  tabMarketBtn.classList.add("active");
  tabInventoryBtn.classList.remove("active");
  marketSection.classList.add("active");
  inventorySection.classList.remove("active");
});

tabInventoryBtn.addEventListener("click", () => {
  tabInventoryBtn.classList.add("active");
  tabMarketBtn.classList.remove("active");
  inventorySection.classList.add("active");
  marketSection.classList.remove("active");
});

// ---------- EVENTS ----------

overlayContinue.addEventListener("click", hideOverlay);

// ---------- STARTUP ----------

loadState();
updateTokensDisplay();
createPackCards();
renderInventory();

