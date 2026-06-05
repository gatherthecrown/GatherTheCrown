# 📜 Quest System - Gather the Crown: Creats & Foes

**System:** Dynamic quest generation and tracking  
**Purpose:** Provide engaging objectives and rewards  
**Created:** February 25, 2026

---

## 🎯 QUEST TYPES

### Main Story Quests
- **Purpose:** Progress the main narrative
- **Structure:** Linear, chapter-based
- **Rewards:** Major XP, unique items, story progression
- **Tracking:** Always visible, cannot abandon
- **Example:** "Restore the Fire Kingdom"

### Side Quests
- **Purpose:** Explore lore, earn rewards
- **Structure:** Optional, can be done anytime
- **Rewards:** Moderate XP, gold, items
- **Tracking:** Up to 20 active at once
- **Example:** "Help the Blacksmith Find Materials"

### Daily Quests
- **Purpose:** Encourage daily play
- **Structure:** Reset every 24 hours
- **Rewards:** Gold, XP, Crown Shards
- **Tracking:** 4 daily quests available
- **Example:** "Win 3 Races"

### Weekly Quests
- **Purpose:** Long-term goals
- **Structure:** Reset every 7 days
- **Rewards:** Large gold, rare items
- **Tracking:** 4 weekly quests available
- **Example:** "Defeat 10 Bosses"

### Faction Quests
- **Purpose:** Build faction reputation
- **Structure:** Repeatable, faction-specific
- **Rewards:** Reputation, faction currency, exclusive items
- **Tracking:** Unlimited active
- **Example:** "Purify 5 Corrupted Zones (Purifiers)"

### World Events
- **Purpose:** Limited-time community events
- **Structure:** Server-wide, time-limited
- **Rewards:** Exclusive cosmetics, titles
- **Tracking:** Event tracker (separate UI)
- **Example:** "Defend the Crown Convergence"

---

## 📊 QUEST STRUCTURE

### Quest Template
```
QUEST: The Lost Crown Fragment
├─ Type: Main Story
├─ Level: 25
├─ Difficulty: 🟣 Epic
├─ Giver: Elder Sage (Luminaris)
├─ Location: Crystal Temple
├─ Prerequisites: Complete "Restore Luminaris"
├─ Objectives:
│  ├─ 1. Explore the Forgotten Vault (0/1)
│  ├─ 2. Defeat the Vault Guardian (0/1)
│  └─ 3. Retrieve the Crown Fragment (0/1)
├─ Rewards:
│  ├─ XP: 5,000
│  ├─ Gold: 1,500g
│  ├─ Item: Crown Fragment (quest item)
│  └─ Choice: Pick 1 of 3 epic items
├─ Time Limit: None
├─ Shareable: No (story quest)
└─ Lore: "The Crown was shattered long ago..."
```

---

## 🎲 DYNAMIC QUEST GENERATION

### Quest Generator System
Based on the Codex implementation, quests are dynamically generated based on:

**Player Level:**
- Scales difficulty and rewards
- Higher level = more objectives
- Formula: `objectiveCount = min(4, max(2, ceil(playerLevel / 8)))`

**Area/Region:**
- Each area has unique quest profiles
- Different objective types per area
- Themed rewards

**Quest Difficulty Tiers:**
```
DIFFICULTY SCALING:
┌────────────────────────────────────────┐
│ Normal (Level 1-14)                    │
│ - 2-3 objectives                       │
│ - Base rewards                         │
│                                        │
│ Veteran (Level 15-34)                  │
│ - 3-4 objectives                       │
│ - 1.5x rewards                         │
│                                        │
│ Elite (Level 35+)                      │
│ - 4+ objectives                        │
│ - 2x rewards                           │
└────────────────────────────────────────┘
```

### Area Quest Profiles

**Forest (Sylvara):**
```
Title: "Verdant Patrol"
Objective Types: Eliminate, Collect, Explore
Pace: 1.0x (standard)
Reward Multiplier: 1.0x
Example: "Defeat 15 hostiles in Sylvara"
```

**Ruins (Ancient Sites):**
```
Title: "Relic Recovery"
Objective Types: Explore, Collect, Eliminate
Pace: 1.15x (slightly harder)
Reward Multiplier: 1.1x
Example: "Survey 8 landmarks in Ancient Ruins"
```

**Desert (Zerath Dunes):**
```
Title: "Dune Endurance Trial"
Objective Types: Survive, Collect, Eliminate
Pace: 1.2x (harder)
Reward Multiplier: 1.2x
Example: "Survive 4 waves in Zerath Dunes"
```

**Caverns (Underground):**
```
Title: "Cavern Sweep"
Objective Types: Eliminate, Explore, Collect
Pace: 1.1x
Reward Multiplier: 1.05x
Example: "Collect 12 resources from Caverns"
```

---

## 🎯 OBJECTIVE TYPES

### Eliminate Objectives
- **Task:** Defeat X enemies
- **Target Calculation:** `baseTarget + 2` (scales with level)
- **Examples:**
  - "Defeat 15 hostiles in Sylvara"
  - "Kill 20 corrupted creatures"
  - "Eliminate 10 shadow beasts"

### Collect Objectives
- **Task:** Gather X items/resources
- **Target Calculation:** `max(3, round(baseTarget * 0.75))`
- **Examples:**
  - "Collect 12 resources from Zerath Dunes"
  - "Gather 8 Crown Fragments"
  - "Find 15 ancient relics"

### Explore Objectives
- **Task:** Discover X locations
- **Target Calculation:** `max(2, round(baseTarget * 0.5))`
- **Examples:**
  - "Survey 5 landmarks in Frostvale"
  - "Discover 3 hidden caves"
  - "Explore 8 ruins"

### Survive Objectives
- **Task:** Survive X waves/time
- **Target Calculation:** `max(1, round(baseTarget * 0.35))`
- **Examples:**
  - "Survive 3 waves in the Arena"
  - "Endure 5 minutes in the Void"
  - "Withstand 2 boss phases"

### Escort Objectives
- **Task:** Protect NPC to destination
- **Failure:** NPC dies
- **Examples:**
  - "Escort the Merchant to Luminaris"
  - "Protect the Elder during ritual"

### Delivery Objectives
- **Task:** Bring item to NPC
- **Examples:**
  - "Deliver supplies to the Outpost"
  - "Return the stolen artifact"

---

## 🎒 Supply Run Side Quests
- **World Logic:** Sanctuary Isle survives through rider treaties and supply accords. The isle provides trained riders, emergency response, trail clearing, escort work, creat handling, and hybrid training knowledge.
- **Exchange:** In return, kingdoms send lumber, ore, grains, livestock, cloth, medicine ingredients, tools, ship parts, and specialty materials.
- **Why kingdoms agree:** Sanctuary is neutral, strategically useful, trusted with riders, and politically safer than direct kingdom cooperation. Even rival kingdoms trade with Sanctuary because everyone eventually needs riders.
- **Culture:** This makes Sanctuary feel community-oriented, practical, welcoming, and modestly stable. It explains why the isle is a protected rider harbor sustained through alliances rather than a self-sufficient empire.
- **Hero work = kingdom supplies:** Rider missions are not just story beats; they are the backbone of Sanctuary’s economy and supply chain.

### Supply Run Quest Template
- **Quest Type:** Side Quest / Supply Run
- **Requestor:** Sanctuary authority, isle merchant, depot manager
- **Origin:** Mainland kingdom or first kingdom land crossing
- **Destination:** Sanctuary Isle or island supply depot
- **Cargo:** Lumber, ore, grains, livestock, cloth, medicine, tools, ship parts, specialty materials
- **Transport:** `cart/wagon`, `ship/ferry`, `convoy`
- **Objective List:**
  - Travel to supplier location
  - Locate contact or stockpile
  - Secure cargo and load transport
  - Defend the route / escort cargo back
  - Deliver intact supplies to Sanctuary
- **Rewards:** Gold payment, XP, regional materials, shards/gems, possible cosmetics or trade goods
- **Bonus Conditions:** Speed, cargo intact, minimal losses, escort success

### Kingdom Export Identity
- **Forest / Nature kingdoms:** lumber, herbs, paper, moss gems, bark shards, growth crystals
- **Ember / Forge kingdoms:** ore, metal, forge tools, ember shards, forge stones, heat cores, weapon skins
- **Plains / Agricultural kingdoms:** grains, livestock, cloth, feed, preserved goods, harvest charms
- **Coastal / Storm kingdoms:** salt, fish oil, rope, sailcloth, tide gems, pearl fragments, stormglass
- **Frost kingdoms:** crystals, preserved goods, iceglass, snow pelts, frost shards

### Supply & Production Needs
- **Core consumables:** grain, preserved meats/fish, bread, salt, cooking oil, medicinal herbs, livestock feed, cloth, rope, waterskins.
- **Heavy production inputs:** iron ore/ingots, lumber/timber, stone, bronze/brass, leather, sailcloth, forge fuel, nails, tools.
- **High-demand materials:** iron is the most used industrial material for weapons, armor, siege gear, and construction. Lumber is equally essential for buildings, carts, ships, crates, and fortifications.
- **Food/food production:** fields, ranches, fisheries, wheat mills, herb gardens, and pantry stores keep Sanctuary alive. Grain and preserved goods are continuous demand, not one-off rewards.
- **Craft and maintenance supplies:** tools, forge materials, rope, lantern oil, cloth, leather, and rope are needed for every repair, caravan, and island building.
- **Strategic luxury/quest items:** gems, shards, sacred oils, incense, rare herbs, and imported jewels are lower volume but high priority for special rewards, faction missions, and seasonal deliveries.

### Production by Kingdom Type
- **Forest kingdoms:** produce timber, herbal medicine, paper, fiber cloth, olive oil, and natural dyes. Heavy demand for lumber and herbs is constant.
- **Forge kingdoms:** produce iron, copper/brass, tool steel, weapons, armor components, and forge stones. Iron is the most heavily used resource here.
- **Plains kingdoms:** produce grain, livestock, cloth, leather, feed, and preserved food. These are the long-term staples that keep the isle fed and rested.
- **Coastal kingdoms:** produce salt, fish oil, rope, sailcloth, nets, and sea gems. Ship and ferry routes depend on these supplies.
- **Frost kingdoms:** produce crystal, iceglass, snow pelts, preserved goods, and cold-weather materials. They also provide rare, high-value goods for premium quests.

### Most Heavily Used Supplies
- **Iron / metal:** primary for weapons, armor, equipment, repair, and heavy delivery missions.
- **Lumber / wood:** essential for construction, wagons, docks, crates, and island infrastructure.
- **Grain / preserved food:** essential daily consumption for Sanctuary residents and expedition crews.
- **Rope / cloth / leather:** constant maintenance and transport needs for caravans, ships, shelters, saddles, and sails.
- **Fuel / forge materials:** critical for camp cooking, heat-based crafting, forge work, and lanterns.
- **Medicinal herbs / supplies:** important for healing, bond care, and crisis response — high priority for recovery and rescue missions.

### Sanctuary Isle Production
- **Island strengths:** Sanctuary Isle is a shelter and training hub, not a bulk industrial center. Its production is best expressed as specialist goods, rider support services, and preserved supplies.
- **Produce/grow locally:** cured fish and salt-cured provisions, preserved grains, medicinal salves, blessed oils, herb blends, rope braids, treated leather, pack saddles, and light transport gear.
- **Unique sanctuary goods:** rider harnesses, convoy kits, route scrolls, repair bundles, sacred talismans, emergency beacon lanterns, and hybrid creat feed mixes.
- **Services as supply:** the isle exports more than items — it can send rider escorts, repair crews, guides, intelligence on safe routes, and stabilized caravan teams.
- **Island advantage:** kingdoms may lack the protected space, skilled rider labor, or sanctified medicine recipes that Sanctuary has. This makes island deliveries valuable even if mainland kingdoms can produce raw materials.

### Kingdom Replenishment After Restoration
- **Restoration flow:** abandoned/wrecked homes, shops, and castles create local shortages. After a district is cleared and repaired, the next phase is restocking.
- **Replenishment mission types:**
  - **Shop restock:** herbs, cloth, metal parts, dyes, tool kits, and merchant goods.
  - **Town rebuilding:** lumber, roofing tiles, nails, glass, furniture, lighting oil, and cooking supplies.
  - **Forge revival:** iron ore, coal, tongs, anvils, steel ingots, and maintenance tools.
  - **Dock repair:** rope, sailcloth, tar, lantern oil, fishing nets, barrel wood, and salt.
  - **Castle recovery:** banners, armor, weapons, siege rope, gate repairs, and food stores.
- **Delayed demand:** once a kingdom is restored, its population begins consuming supplies again, which creates a second wave of supply quests beyond the initial purge of enemies.
- **Quest triggers:** kingdom quests should shift from “clear and conquer” to “restore and restock” once a location is liberated.
- **Narrative fit:** this makes the world feel alive — Sanctuary helps heal a kingdom, then helps it recover by replenishing the goods lost during occupation.

### Why this matters
- Sanctuary should feel like a resilient support hub that both imports raw materials and exports specialist goods.
- Restored kingdoms should generate meaningful follow-up requests: the fight is over, but the supply chain is just starting.
- This gives players a clear progression from reclamation to recovery to long-term trade.

### Implementation Note
- This section is currently design-level. The next step is to model this in the quest system with concrete quest definitions, request generation, reward tables, and route-specific travel/escort rules.

### Travel Structure
- **First Kingdom / Land Crossing**
  - Closest mainland kingdom is accessible by bridge/road crossing.
  - Carts and wagons are possible.
  - Easier civilian trade and early progression.
  - This kingdom becomes the starter mainland hub for escort and cargo runs.
- **Other Kingdoms**
  - Require ships, ferries, convoys, and trade fleets.
  - Create longer journeys, weather risks, pirate threats, and multi-rider expeditions.
  - Support cargo escort gameplay with coastal hazards and open-sea tension.

### Gameplay Loop
1. **Sanctuary receives request**
   - Example: Isle Iron needs ore, Herb & Brew Isle needs dried moss, Hatchling Hallow needs feed grain, Trading Poste awaits shipment.
2. **Hero accepts the run**
   - Solo, paired, or as a small rider convoy.
3. **Travel outward**
   - Along roads, forest paths, ferries, crossings, and kingdom outskirts.
   - Gameplay includes gathering, scouting, optional encounters, weather, travelers, ambushes, and creatures.
4. **Locate supplier/contact**
   - Example targets: mill owner, forge merchant, ranch keeper, dock quartermaster, grain steward.
   - Sometimes supplies are delayed, stolen, or lost, which creates natural story gameplay.
5. **Retrieve cargo**
   - Cargo types: lumber, livestock, crates, ore, medicine, rope, cloth, feed, fish barrels, lantern oil.
6. **Return trip**
   - Luggage adds tension: cargo slows movement, enemies target it, escort mechanics matter.
   - The feeling becomes “bringing something home” instead of “clearing another dungeon.”

### Why this works
- Roads become trade arteries, lifelines, and rider routes.
- Kingdom relationships become visible through imports: Ashenreach metals keep Isle Iron running, Verdantwild grain keeps Sanctuary fed, Stormspire rope keeps ferries moving.
- The outside world and Sanctuary depend on each other.
- Early game can focus on small satchels and local deliveries; mid game on wagons and ferry cargo; late game on convoys, storm crossings, and emergency relief shipments.
- These quests should feel responsible, hopeful, practical, and adventurous — not mindless fetch quests.

### Reward Structure
- **Base rewards:** GC (gold/currency), XP, and materials.
- **Regional reward themes:**
  - Forest/Nature kingdoms: moss gems, bark shards, herbal bundles, growth crystals, vine cord.
  - Ember/Forge kingdoms: ember shards, forge stones, metal chunks, heat cores, weapon skins.
  - Coastal/Storm kingdoms: tide gems, sailcloth, pearl fragments, stormglass, anchor charms.
  - Frost kingdoms: frost shards, crystal dust, preserved goods, iceglass, snow pelts.
- **Bonus rewards:**
  - Hero cosmetics: cloaks, emblems, cart skins, ferry banners, weapon appearances, lantern styles.
  - Rare finds: hidden caches, abandoned cargo, roadside relics, storm wreckage.
  - Delivery quality bonuses: speed bonus, cargo intact bonus, storm route bonus, no supply loss bonus, passenger protection bonus.
- **Reputation layer:** Reliable supply runs unlock better contracts, trade discounts, special materials, kingdom cosmetics, and convoy invitations.
- **Sanctuary payoff:** Successful missions should visibly benefit the isle — market stalls restock, tavern chatter changes, feed supplies arrive, and NPCs notice the difference.

### What still needs implementation
- Quest system: Add a supply-run quest generator and request board for Sanctuary supply missions.
- World routes: Model first-kingdom land crossings vs. coastal ferry/ship routes in gameplay.
- Cargo mechanics: Represent cargo size, transport mode, and escort difficulty.
- Rewards: Tie regional reward themes into actual item tables and unlockable materials.
- Reputation: Add a lightweight trust system so repeat success improves kingdom contracts.
- Visibility: Show supply impact on Sanctuary through NPC dialogue, market restocks, and isle scenes.

### Emotional tone
- Supply runs give heroes ordinary responsibilities and real-world meaning.
- They reward money, materials, reputation, progression, rare items, and rider status.
- This makes traveling for supplies feel like actual professional rider work, not just symbolic story questing.

---

## 💰 REWARD CALCULATION

### XP Rewards
```
Formula:
baseXP = 75 + (playerLevel * 18)
finalXP = baseXP * rewardMultiplier * (1 + objectiveCount * 0.2)

Example (Level 20, Forest, 3 objectives):
baseXP = 75 + (20 * 18) = 435
finalXP = 435 * 1.0 * (1 + 3 * 0.2) = 696 XP
```

### Gold Rewards
```
Formula:
baseGold = 25 + (playerLevel * 7)
finalGold = baseGold * rewardMultiplier * (1 + objectiveCount * 0.2)

Example (Level 20, Forest, 3 objectives):
baseGold = 25 + (20 * 7) = 165
finalGold = 165 * 1.0 * (1 + 3 * 0.2) = 264 gold
```

### Bonus Rewards
- **Speed Bonus:** Complete 50% faster = +25% rewards
- **Perfect Bonus:** No deaths = +50% rewards
- **Style Bonus:** High combat rating = +20% rewards
- **Faction Bonus:** Faction-aligned quest = +10% reputation

---

## 📋 QUEST TRACKING

### Quest Log UI
```
┌─────────────────────────────────────────────────┐
│  QUEST LOG                          [X] Close   │
├─────────────────────────────────────────────────┤
│  [Main] [Side] [Daily] [Weekly] [Faction]      │
├──────────────────────┬──────────────────────────┤
│  ACTIVE QUESTS (5)   │  QUEST DETAILS           │
│                      │                          │
│  📜 The Lost Fragment│  The Lost Crown Fragment │
│     Level 25 🟣      │  Level: 25 (Epic)        │
│                      │                          │
│  📜 Help the Smith   │  Objectives:             │
│     Level 15 🔵      │  ☑ Explore Vault (1/1)   │
│                      │  ☐ Defeat Guardian (0/1) │
│  📜 Daily: Win Races │  ☐ Get Fragment (0/1)    │
│     ●●●○             │                          │
│                      │  Rewards:                │
│  [Track] [Abandon]   │  • 5,000 XP              │
│                      │  • 1,500 Gold            │
│                      │  • Crown Fragment        │
│                      │  • Choice of Epic Item   │
│                      │                          │
│                      │  [Track] [Abandon]       │
└──────────────────────┴──────────────────────────┘
```

### On-Screen Tracker
```
┌─────────────────────────┐
│ 📜 The Lost Fragment    │
│ ☑ Explore Vault         │
│ ☐ Defeat Guardian (0/1) │
│ ☐ Get Fragment (0/1)    │
└─────────────────────────┘
```

### Minimap Markers
- 🎯 Quest Objective
- ❗ Quest Giver (new quest)
- ❓ Quest Giver (in progress)
- ✅ Quest Turn-in

---

## 🎁 QUEST REWARDS

### Reward Types

**Guaranteed Rewards:**
- XP (always)
- Gold (always)
- Reputation (faction quests)

**Item Rewards:**
- Fixed item (specific quest reward)
- Choice (pick 1 of 2-3 items)
- Random (loot table roll)

**Special Rewards:**
- Titles
- Cosmetics
- Mounts/Pets
- Abilities/Attacks
- Recipes
- Access to new areas

### Reward Scaling
```
QUEST DIFFICULTY → REWARD QUALITY
┌────────────────────────────────────────┐
│ Normal:    Common-Uncommon items       │
│ Veteran:   Uncommon-Rare items         │
│ Elite:     Rare-Epic items             │
│ Legendary: Epic-Legendary items        │
│ Mythic:    Legendary-Mythic items      │
└────────────────────────────────────────┘
```

---

## 🔄 REPEATABLE QUESTS

### Daily Quest Examples
```
DAILY QUEST: Win 3 Races
├─ Objective: Win any 3 races
├─ Progress: 0/3
├─ Rewards:
│  ├─ 500 Gold
│  ├─ 1,000 XP
│  └─ 1 Crown Shard (if all 4 dailies done)
└─ Reset: 24 hours
```

```
DAILY QUEST: Complete 5 Quests
├─ Objective: Complete any 5 quests
├─ Progress: 0/5
├─ Rewards:
│  ├─ 750 Gold
│  └─ 1,500 XP
└─ Reset: 24 hours
```

### Weekly Quest Examples
```
WEEKLY QUEST: Win 25 Races
├─ Objective: Win 25 races
├─ Progress: 0/25
├─ Rewards:
│  ├─ 5,000 Gold
│  ├─ 10,000 XP
│  └─ 5 Crown Shards (if all 4 weeklies done)
└─ Reset: 7 days
```

---

## 🏆 QUEST CHAINS

### Multi-Part Quests
```
QUEST CHAIN: Restore the Fire Kingdom
├─ Part 1: "Investigate the Corruption"
│  └─ Rewards: 1,000 XP, 500g
├─ Part 2: "Cleanse the Temple"
│  └─ Rewards: 2,000 XP, 1,000g
├─ Part 3: "Defeat the Fire Lord"
│  └─ Rewards: 5,000 XP, 2,500g, Legendary Item
└─ Chain Completion Bonus:
   ├─ Title: "Savior of Pyrrathia"
   ├─ Mount: Fire Phoenix
   └─ Achievement: "Kingdom Restored"
```

---

## 🎮 UNITY IMPLEMENTATION

### Scripts Needed
```csharp
// Core quest system
QuestManager.cs
QuestData.cs
QuestObjective.cs
QuestGenerator.cs

// UI components
QuestLogUI.cs
QuestTrackerUI.cs
QuestNotification.cs

// Quest givers
QuestGiver.cs
QuestTurnIn.cs

// Objective tracking
ObjectiveTracker.cs
KillTracker.cs
CollectTracker.cs
ExploreTracker.cs
```

### Key Features
1. Dynamic quest generation based on player level
2. Area-specific quest profiles
3. Objective tracking with progress bars
4. Quest marker system (minimap + world)
5. Quest notification system
6. Daily/weekly reset timers
7. Reward calculation and distribution
8. Quest chain progression

---

**This quest system provides endless content through dynamic generation while maintaining meaningful story progression and rewarding player engagement.**

📜🎯👑
