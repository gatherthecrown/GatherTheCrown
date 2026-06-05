export type ForestTrialDifficultyId = 'gentle' | 'rider' | 'sovereign';

export type ForestTrialEnemyRole = 'crawling' | 'walking' | 'flying';
export type ForestTrialPickupKind = 'green-gem' | 'soulshard' | 'ember-fruit' | 'gold-cache';

export interface ForestTrialRouteEnemy {
  kind: 'venom-spider' | 'root-beast' | 'stone-sentinel' | 'sky-stinger';
  role: ForestTrialEnemyRole;
  x: number;
  y: number;
  patrolPoints: Array<{ x: number; y: number }>;
  isFinalSkirmisher?: boolean;
}

export interface ForestTrialRoutePickup {
  kind: ForestTrialPickupKind;
  x: number;
  y: number;
  amount: number;
}

export interface ForestTrialRouteProfile {
  id: ForestTrialDifficultyId;
  title: string;
  summary: string;
  detail: string;
  eta: string;
  enemyCount: string;
  rewardTier: string;
  color: number;
  stroke: number;
  textColor: string;
  expectedMinutes: number;
  ambience: string;
  rewardNote: string;
  pathWidth: 'wide' | 'standard' | 'tight';
  ambientHook: string;
  skyTint: number;
  skyAlpha: number;
  fogColor: number;
  fogCount: number;
  treeDensity: 'open' | 'balanced' | 'dense';
  enemySpacing: 'spread' | 'balanced' | 'packed';
  enemyPlan: ForestTrialRouteEnemy[];
  pickupPlan: ForestTrialRoutePickup[];
}

export const FOREST_TRIAL_ROUTE_PROFILES: Record<ForestTrialDifficultyId, ForestTrialRouteProfile> = {
  gentle: {
    id: 'gentle',
    title: 'Gentle Trail',
    summary: 'Best for learning movement, pickups, healing, and basic combat.',
    detail: 'Low pressure entry. Clear guidance, light enemy density, and the safest route to begin building confidence.',
    eta: '8-10 min',
    enemyCount: '3 foes',
    rewardTier: 'More food / starter supplies',
    color: 0x14532d,
    stroke: 0x22c55e,
    textColor: '#86efac',
    expectedMinutes: 9,
    ambience: 'Open trail, calmer pacing, low-pressure combat rhythm.',
    rewardNote: 'Safer route: more food/support pickups, fewer enemy spikes.',
    pathWidth: 'wide',
    ambientHook: 'forest.gentle.calm',
    skyTint: 0x0f766e,
    skyAlpha: 0.045,
    fogColor: 0x6ee7b7,
    fogCount: 4,
    treeDensity: 'open',
    enemySpacing: 'spread',
    enemyPlan: [
      { kind: 'venom-spider', role: 'crawling', x: 614, y: 182, patrolPoints: [{ x: 586, y: 166 }, { x: 646, y: 198 }] },
      { kind: 'venom-spider', role: 'crawling', x: 486, y: 186, patrolPoints: [{ x: 456, y: 168 }, { x: 520, y: 204 }] },
      { kind: 'root-beast', role: 'walking', x: 364, y: 180, patrolPoints: [{ x: 332, y: 164 }, { x: 398, y: 198 }] },
      { kind: 'sky-stinger', role: 'flying', x: 276, y: 162, patrolPoints: [{ x: 246, y: 144 }, { x: 312, y: 182 }] },
      { kind: 'stone-sentinel', role: 'walking', x: 194, y: 184, patrolPoints: [{ x: 166, y: 168 }, { x: 228, y: 200 }], isFinalSkirmisher: true }
    ],
    pickupPlan: [
      { kind: 'green-gem', x: 584, y: 154, amount: 1 },
      { kind: 'soulshard', x: 452, y: 216, amount: 1 },
      { kind: 'ember-fruit', x: 332, y: 150, amount: 2 },
      { kind: 'ember-fruit', x: 242, y: 222, amount: 2 },
      { kind: 'gold-cache', x: 286, y: 218, amount: 8 },
      { kind: 'gold-cache', x: 194, y: 150, amount: 6 }
    ]
  },
  rider: {
    id: 'rider',
    title: 'Rider\'s Path',
    summary: 'Balanced danger and reward. The intended route for most riders.',
    detail: 'A fuller challenge with more pressure, more resource flow, and stronger preparation for bond and home-base systems.',
    eta: '12-15 min',
    enemyCount: '5 foes',
    rewardTier: 'Balanced loot / crafting mats',
    color: 0x1e3a8a,
    stroke: 0x3b82f6,
    textColor: '#93c5fd',
    expectedMinutes: 14,
    ambience: 'Balanced terrain, moderate pressure, steady adventure rhythm.',
    rewardNote: 'Standard route: balanced combat, gathering, and rewards.',
    pathWidth: 'standard',
    ambientHook: 'forest.rider.adventure',
    skyTint: 0x1d4ed8,
    skyAlpha: 0.06,
    fogColor: 0x0f766e,
    fogCount: 7,
    treeDensity: 'balanced',
    enemySpacing: 'balanced',
    enemyPlan: [
      { kind: 'venom-spider', role: 'crawling', x: 640, y: 246, patrolPoints: [{ x: 610, y: 232 }, { x: 670, y: 264 }] },
      { kind: 'venom-spider', role: 'crawling', x: 548, y: 250, patrolPoints: [{ x: 518, y: 234 }, { x: 580, y: 266 }] },
      { kind: 'root-beast', role: 'walking', x: 452, y: 252, patrolPoints: [{ x: 420, y: 236 }, { x: 486, y: 268 }] },
      { kind: 'root-beast', role: 'walking', x: 358, y: 246, patrolPoints: [{ x: 328, y: 228 }, { x: 392, y: 264 }] },
      { kind: 'sky-stinger', role: 'flying', x: 286, y: 226, patrolPoints: [{ x: 256, y: 208 }, { x: 320, y: 246 }] },
      { kind: 'stone-sentinel', role: 'walking', x: 212, y: 250, patrolPoints: [{ x: 182, y: 232 }, { x: 246, y: 266 }], isFinalSkirmisher: true }
    ],
    pickupPlan: [
      { kind: 'green-gem', x: 610, y: 216, amount: 1 },
      { kind: 'soulshard', x: 520, y: 284, amount: 2 },
      { kind: 'ember-fruit', x: 430, y: 214, amount: 2 },
      { kind: 'ember-fruit', x: 320, y: 286, amount: 1 },
      { kind: 'gold-cache', x: 256, y: 214, amount: 10 },
      { kind: 'gold-cache', x: 188, y: 286, amount: 8 }
    ]
  },
  sovereign: {
    id: 'sovereign',
    title: 'Sovereign Thicket',
    summary: 'Hardest route. Greater pressure, sharper resource decisions, and less forgiveness.',
    detail: 'For players who want to push early. Expect denser threats and a steeper climb through advanced trials.',
    eta: '16-20 min',
    enemyCount: '7 foes',
    rewardTier: 'High-value materials / risk-reward',
    color: 0x4a044e,
    stroke: 0xa855f7,
    textColor: '#d8b4fe',
    expectedMinutes: 20,
    ambience: 'Dense and enclosed with higher pressure, still readable.',
    rewardNote: 'Dangerous route: tighter enemy pressure, rarer high-value rewards.',
    pathWidth: 'tight',
    ambientHook: 'forest.sovereign.tension',
    skyTint: 0x312e81,
    skyAlpha: 0.09,
    fogColor: 0x312e81,
    fogCount: 12,
    treeDensity: 'dense',
    enemySpacing: 'packed',
    enemyPlan: [
      { kind: 'venom-spider', role: 'crawling', x: 650, y: 308, patrolPoints: [{ x: 622, y: 292 }, { x: 682, y: 324 }] },
      { kind: 'venom-spider', role: 'crawling', x: 582, y: 312, patrolPoints: [{ x: 552, y: 294 }, { x: 614, y: 326 }] },
      { kind: 'root-beast', role: 'walking', x: 520, y: 316, patrolPoints: [{ x: 486, y: 298 }, { x: 556, y: 334 }] },
      { kind: 'root-beast', role: 'walking', x: 450, y: 308, patrolPoints: [{ x: 420, y: 292 }, { x: 482, y: 326 }] },
      { kind: 'sky-stinger', role: 'flying', x: 392, y: 286, patrolPoints: [{ x: 360, y: 266 }, { x: 430, y: 304 }] },
      { kind: 'sky-stinger', role: 'flying', x: 328, y: 338, patrolPoints: [{ x: 298, y: 318 }, { x: 364, y: 354 }] },
      { kind: 'stone-sentinel', role: 'walking', x: 266, y: 312, patrolPoints: [{ x: 236, y: 292 }, { x: 298, y: 328 }], isFinalSkirmisher: true },
      { kind: 'stone-sentinel', role: 'walking', x: 206, y: 306, patrolPoints: [{ x: 176, y: 288 }, { x: 238, y: 324 }] }
    ],
    pickupPlan: [
      { kind: 'green-gem', x: 618, y: 278, amount: 2 },
      { kind: 'soulshard', x: 548, y: 348, amount: 3 },
      { kind: 'ember-fruit', x: 470, y: 274, amount: 1 },
      { kind: 'ember-fruit', x: 358, y: 350, amount: 1 },
      { kind: 'gold-cache', x: 286, y: 278, amount: 12 },
      { kind: 'gold-cache', x: 220, y: 346, amount: 10 }
    ]
  }
};

export const DEFAULT_FOREST_TRIAL_DIFFICULTY: ForestTrialDifficultyId = 'gentle';

export function getForestTrialDifficultyProfile(id: string): ForestTrialRouteProfile {
  return FOREST_TRIAL_ROUTE_PROFILES[(id.toLowerCase() as ForestTrialDifficultyId)] || FOREST_TRIAL_ROUTE_PROFILES.gentle;
}
