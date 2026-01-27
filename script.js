const packs = {
  ocean: {
    price: 35,
    uncommons: [
      "Bubble Crab", "Shell Pup", "Wave Hopper", "Reef Gecko",
      "Foam Otter", "Kelp Cat", "Tide Gull", "Pebble Turtle"
    ],
    rares: ["Deep Blue Ray", "Storm Dolphin", "Coral Serpent", "Abyss Pike"],
    epics: ["Scarlet Leviathan", "Tidal Roc"],
    legendaries: ["Tidal Serpent", "Pearl Kraken"],
    mythics: ["Abyssal Star Whale"]
  },
  arctic: {
    price: 35,
    uncommons: [
      "Frost Pup", "Snow Hare", "Ice Finch", "Glacier Seal",
      "Chill Fox", "Snowy Lynx", "Frost Beetle", "Ice Cub"
    ],
    rares: ["Blizzard Wolf", "Aurora Owl", "Glacier Bear"],
    epics: ["Crimson Yeti", "Frozen Titan"],
    legendaries: ["Polar Warden"],
    mythics: ["Eternal Ice Spirit"]
  },
  sky: {
    price: 30,
    uncommons: [
      "Cloud Chick", "Breeze Pup", "Sky Moth", "Gust Finch",
      "Drift Kite", "Nimbus Cat", "Wind Hopper", "Sky Beetle"
    ],
    rares: ["Storm Hawk", "Thunder Roc", "Zephyr Drake"],
    epics: ["Crimson Sky Serpent"],
    legendaries: ["Sunrise Phoenix"],
    mythics: ["Tempest Godwing"]
  },
  volcano: {
    price: 40,
    uncommons: [
      "Ember Pup", "Ash Lizard", "Cinder Beetle", "Magma Cub",
      "Coal Bat", "Smoke Rat", "Charred Gecko", "Spark Moth"
    ],
    rares: ["Lava Hound", "Blaze Drake", "Molten Boar"],
    epics: ["Inferno Golem", "Crimson Magmus"],
    legendaries: ["Ember Phoenix", "Volcanic Colossus"],
    mythics: ["Eruption Worldheart"]
  },
  spirit: {
    price: 40,
    uncommons: [
      "Wisp Pup", "Lantern Moth", "Echo Cat", "Shade Hare",
      "Glow Beetle", "Driftling", "Faint Fox", "Hollow Finch"
    ],
    rares: ["Grave Warden", "Soul Owl", "Spectral Wolf"],
    epics: ["Crimson Reaper", "Ethereal Knight"],
    legendaries: ["Phantom Monarch"],
    mythics: ["Eternal Gravekeeper"]
  },
  crystal: {
    price: 45,
    uncommons: [
      "Shard Pup", "Gem Beetle", "Quartz Cat", "Prism Gecko",
      "Opal Hare", "Glint Moth", "Facet Fox", "Shardling", "Dust Sprite"
    ],
    rares: ["Amethyst Drake", "Sapphire Serpent", "Ruby Stag"],
    epics: ["Crystal Colossus", "Prism Titan"],
    legendaries: ["Crown of Shards"],
    mythics: ["Heart of the Crystal"]
  },
  cosmic: {
    price: 50,
    uncommons: [
      "Starling", "Orbit Pup", "Meteor Bug", "Comet Fox",
      "Void Moth", "Nebula Mouse", "Astro Gecko", "Dust Pup", "Ringed Hare"
    ],
    rares: ["Nebula Drake", "Void Lynx", "Galaxy Serpent", "Comet Roc"],
    epics: ["Red Nova Titan", "Stellar Colossus"],
    legendaries: ["Solar Phoenix"],
    mythics: ["Eclipse Godbeast", "Prismatic Core"]
  },
  cyber: {
    price: 45,
    uncommons: [
      "Byte Fox", "Pixel Pup", "Glitch Beetle", "Neon Rat",
      "Wire Gecko", "Code Moth", "Data Hare", "Chip Cat"
    ],
    rares: ["Neon Mantis", "Firewall Drake", "Circuit Wolf"],
    epics: ["Glitch Dragon", "Cyber Titan"],
    legendaries: ["Quantum Panther"],
    mythics: ["Overclocked Singularity"]
  },
  quantum: {
    price: 55,
    uncommons: [
      "Phase Pup", "Quark Beetle", "Spin Cat", "Wave Hare",
      "Flux Gecko", "Loop Moth", "Bit Rat", "Echo Pup"
    ],
    rares: ["Quantum Serpent", "Phase Wyrm", "Time Lynx"],
    epics: ["Chrono Colossus", "Paradox Titan"],
    legendaries: ["Event Horizon Dragon"],
    mythics: ["Infinite Collapse"]
  },
  food: {
    price: 25,
    uncommons: [
      "Burger Pup", "Noodle Cat", "Berry Hare", "Toast Gecko",
      "Soda Moth", "Candy Beetle", "Pizza Rat", "Apple Fox"
    ],
    rares: ["Sundae Serpent", "Donut Drake", "Milkshake Wolf"],
    epics: ["Crimson Chef Titan"],
    legendaries: ["Golden Feast Beast"],
    mythics: ["Eternal Snack God"]
  }
};

let coins = 500;
let inventory = {};
let chromaMode = false; // secret mythic mode
let logoClicks = 0;
let logoTimer = null;

const legendaryMode = {};
const packWordClicks = {};

const card = document.getElementById("aldiCard");
const nameBox = document.getElementById("aldiName");
const statusText = document.getElementById("statusText");
const coinCount = document.getElementById("coinCount");
const inventoryList = document.getElementById("inventoryList");
const confettiContainer = document.getElementById("confettiContainer");
const mythicOverlay = document.getElementById("mythicOverlay");
const mythicNameEl = document.getElementById("mythicName");
const closeMythicBtn = document.getElementById("closeMythic");
const sfxOpen = document.getElementById("sfxOpen");
const sfxMythic = document.getElementById("sfxMythic");

const buyOverlay = document.getElementById("buyOverlay");
const buyText = document.getElementById("buyText");
const buyYes = document.getElementById("buyYes");
const buyNo = document.getElementById("buyNo");

let pendingPackKey = null;

coinCount.textContent = coins;

// Secret mythic mode: logo 3 clicks on, 4th reset
document.getElementById("logo").addEventListener("click", () => {
  logoClicks++;
  if (!logoTimer) {
    logoTimer = setTimeout(() => {
      logoClicks = 0;
      logoTimer = null;
    }, 2000);
  }
  if (logoClicks === 3) {
    chromaMode = true;
    statusText.textContent = "Secret mythic mode ACTIVATED.";
  } else if (logoClicks === 4) {
    chromaMode = false;
    statusText.textContent = "Secret mythic mode RESET.";
    logoClicks = 0;
    clearTimeout(logoTimer);
    logoTimer = null;
  }
});

// Secret legendary mode per pack: last word 3 clicks on, 4th reset
document.querySelectorAll(".pack-last-word").forEach(span => {
  const packKey = span.dataset.pack;
  packWordClicks[packKey] = 0;
  legendaryMode[packKey] = false;

  span.addEventListener("click", e => {
    e.stopPropagation();
    packWordClicks[packKey]++;
    if (packWordClicks[packKey] === 3) {
      legendaryMode[packKey] = true;
      statusText.textContent = `Legendary mode ON for ${packKey} pack.`;
    } else if (packWordClicks[packKey] === 4) {
      legendaryMode[packKey] = false;
      statusText.textContent = `Legendary mode RESET for ${packKey} pack.`;
      packWordClicks[packKey] = 0;
    }
  });
});

// Clicking a pack opens buy confirmation
document.querySelectorAll(".pack").forEach(packEl => {
  packEl.addEventListener("click", () => {
    const packKey = packEl.dataset.pack;
    const price = packs[packKey].price;
    pendingPackKey = packKey;
    buyText.textContent = `Buy ${capitalize(packKey)} Pack for ${price} coins?`;
    buyOverlay.classList.remove("hidden");
  });
});

buyYes.addEventListener("click", () => {
  if (pendingPackKey) {
    openPack(pendingPackKey);
  }
  pendingPackKey = null;
  buyOverlay.classList.add("hidden");
});

buyNo.addEventListener("click", () => {
  pendingPackKey = null;
  buyOverlay.classList.add("hidden");
});

closeMythicBtn.addEventListener("click", () => {
  mythicOverlay.classList.add("hidden");
});

function openPack(packKey) {
  const pack = packs[packKey];
  if (!pack) return;

  if (coins < pack.price) {
    statusText.textContent = "Not enough coins!";
    return;
  }

  coins -= pack.price;
  coinCount.textContent = coins;

  playSfx(sfxOpen);

  const result = pullFromPack(packKey, pack);
  revealAldi(result.name, result.rarity);
  addToInventory(result.name, result.rarity);
}

function pullFromPack(packKey, pack) {
  // Mythic secret mode
  if (chromaMode && pack.mythics.length) {
    return { name: randomFrom(pack.mythics), rarity: "mythic" };
  }

  // Legendary secret mode
  if (legendaryMode[packKey] && pack.legendaries.length) {
    return { name: randomFrom(pack.legendaries), rarity: "legendary" };
  }

  const roll = Math.random();
  const mythicChance = 0.0005;    // 0.05%
  const legendaryChance = 0.005;  // 0.5%
  const epicChance = 0.15;
  const rareChance = 0.25;
  // Uncommon is the rest

  if (roll < mythicChance && pack.mythics.length) {
    return { name: randomFrom(pack.mythics), rarity: "mythic" };
  } else if (roll < mythicChance + legendaryChance && pack.legendaries.length) {
    return { name: randomFrom(pack.legendaries), rarity: "legendary" };
  } else if (roll < mythicChance + legendaryChance + epicChance && pack.epics.length) {
    return { name: randomFrom(pack.epics), rarity: "epic" };
  } else if (roll < mythicChance + legendaryChance + epicChance + rareChance && pack.rares.length) {
    return { name: randomFrom(pack.rares), rarity: "rare" };
  } else {
    return { name: randomFrom(pack.uncommons), rarity: "uncommon" };
  }
}

function revealAldi(name, rarity) {
  card.className = "aldi-card";
  nameBox.className = "aldi-name";
  nameBox.textContent = name;
  card.classList.add(rarity);

  if (rarity === "rare") spawnSideConfetti("#0033cc");
  if (rarity === "epic") spawnCornerConfetti("#ff0033");
  if (rarity === "legendary") {
    spawnTopConfetti("#ff9900");
    nameBox.classList.add("fall-in");
  }
  if (rarity === "mythic") {
    spawnBurstConfetti("#00eaff");
    nameBox.classList.add("spin-in");
    showMythicScreen(name);
    playSfx(sfxMythic);
  }

  statusText.textContent = `You pulled a ${rarity.toUpperCase()} Aldi: ${name}`;
}

function addToInventory(name, rarity) {
  if (!inventory[name]) {
    inventory[name] = { count: 0, rarity };
  }
  inventory[name].count++;
  renderInventory();
}

function renderInventory() {
  inventoryList.innerHTML = "";
  Object.entries(inventory).forEach(([name, data]) => {
    const li = document.createElement("li");
    li.textContent = `${name} (${data.rarity}) x${data.count}`;
    inventoryList.appendChild(li);
  });
}

function showMythicScreen(name) {
  mythicNameEl.textContent = name;
  mythicOverlay.classList.remove("hidden");
}

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/* Confetti helpers */

function spawnSideConfetti(color) {
  for (let i = 0; i < 40; i++) {
    const c = document.createElement("div");
    c.classList.add("confetti");
    c.style.background = color;
    c.style.left = Math.random() < 0.5 ? "0px" : window.innerWidth + "px";
    c.style.top = Math.random() * window.innerHeight + "px";
    confettiContainer.appendChild(c);
    removeLater(c);
  }
}

function spawnCornerConfetti(color) {
  for (let i = 0; i < 40; i++) {
    const c = document.createElement("div");
    c.classList.add("confetti");
    c.style.background = color;
    c.style.left = Math.random() < 0.5 ? "0px" : window.innerWidth + "px";
    c.style.top = Math.random() < 0.5 ? "0px" : window.innerHeight + "px";
    confettiContainer.appendChild(c);
    removeLater(c);
  }
}

function spawnTopConfetti(color) {
  for (let i = 0; i < 50; i++) {
    const c = document.createElement("div");
    c.classList.add("confetti");
    c.style.background = color;
    c.style.left = Math.random() * window.innerWidth + "px";
    c.style.top = "-20px";
    confettiContainer.appendChild(c);
    removeLater(c);
  }
}

function spawnBurstConfetti(color) {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  for (let i = 0; i < 60; i++) {
    const c = document.createElement("div");
    c.classList.add("confetti");
    c.style.background = color;
    c.style.left = centerX + "px";
    c.style.top = centerY + "px";
    const dx = (Math.random() - 0.5) * 400;
    const dy = (Math.random() - 0.5) * 400;
    c.style.transform = `translate(${dx}px, ${dy}px)`;
    confettiContainer.appendChild(c);
    removeLater(c);
  }
}

function removeLater(el) {
  setTimeout(() => el.remove(), 2000);
}

function playSfx(audioEl) {
  if (!audioEl) return;
  audioEl.currentTime = 0;
  audioEl.play().catch(() => {});
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
