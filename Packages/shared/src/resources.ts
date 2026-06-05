import { FourKingdomId } from './types';

export type SupplyCategory =
  | 'Food'
  | 'Material'
  | 'Equipment'
  | 'Luxury'
  | 'Support'
  | 'Service';

export type SupplyResourceType =
  | 'Iron'
  | 'Lumber'
  | 'Grain'
  | 'Livestock'
  | 'Cloth'
  | 'Leather'
  | 'Rope'
  | 'Fuel'
  | 'Oil'
  | 'Medicine'
  | 'Salt'
  | 'Glass'
  | 'Stone'
  | 'Gem'
  | 'Shard'
  | 'Herbs'
  | 'Fish'
  | 'Tool'
  | 'Talisman'
  | 'Guide'
  | 'Escort';

export interface SupplyItem {
  id: string;
  name: string;
  resourceType: SupplyResourceType;
  category: SupplyCategory;
  description: string;
  islandProduct?: boolean;
}

export interface SupplyRequestLine {
  supplyId: string;
  quantity: number;
  priority: 'low' | 'medium' | 'high';
  note?: string;
}

export interface KingdomRestockRequest {
  id: string;
  kingdomId: FourKingdomId;
  location: string;
  requestName: string;
  trigger: 'post-restoration' | 'post-clearance' | 'post-castle-clear';
  supplies: SupplyRequestLine[];
}

export const SANCTUARY_ISLE_PRODUCTION: SupplyItem[] = [
  {
    id: 'sanctuary-preserved-grain',
    name: 'Preserved Grain Packs',
    resourceType: 'Grain',
    category: 'Food',
    description: 'Salted and packed grain for long journeys and supply depots.',
    islandProduct: true
  },
  {
    id: 'sanctuary-salve-blend',
    name: 'Herbal Salve Blend',
    resourceType: 'Medicine',
    category: 'Support',
    description: 'A blend of island herbs, oils, and binding resins for wound care.',
    islandProduct: true
  },
  {
    id: 'sanctuary-braided-rope',
    name: 'Braided Transport Rope',
    resourceType: 'Rope',
    category: 'Equipment',
    description: 'Durable rope braided by Sanctuary craftsmen for caravans and repairs.',
    islandProduct: true
  },
  {
    id: 'sanctuary-treated-leather',
    name: 'Treated Leather Straps',
    resourceType: 'Leather',
    category: 'Equipment',
    description: 'Leather treated with island oils for saddles, harnesses, and repairs.',
    islandProduct: true
  },
  {
    id: 'sanctuary-route-scrolls',
    name: 'Rider Route Scrolls',
    resourceType: 'Guide',
    category: 'Service',
    description: 'Maps and safe-route notes written by Sanctuary riders for convoy leaders.',
    islandProduct: true
  },
  {
    id: 'sanctuary-emergency-lantern',
    name: 'Emergency Beacon Lantern',
    resourceType: 'Tool',
    category: 'Luxury',
    description: 'Lightweight lantern with blessed oil for search, rescue, and late-night travel.',
    islandProduct: true
  }
];

export const KINGDOM_RESTOCK_REQUESTS: KingdomRestockRequest[] = [
  {
    id: 'aldermarch-smithy-restock',
    kingdomId: 'aldermarch',
    location: 'Soot and Stitch Smithy',
    requestName: 'Smithy Restock',
    trigger: 'post-restoration',
    supplies: [
      { supplyId: 'forge-iron', quantity: 40, priority: 'high', note: 'Iron ore and forge repair tools for smithing demand.' },
      { supplyId: 'sanctuary-braided-rope', quantity: 12, priority: 'medium', note: 'Replacement rope for bellows, wagons, and repairs.' },
      { supplyId: 'sanctuary-salve-blend', quantity: 8, priority: 'low', note: 'Herbal salves for smith injuries and worker care.' }
    ]
  },
  {
    id: 'stormrage-inn-restock',
    kingdomId: 'stormrage',
    location: 'Galewind Inn',
    requestName: 'Inn Supplies Replenishment',
    trigger: 'post-clearance',
    supplies: [
      { supplyId: 'sanctuary-preserved-grain', quantity: 30, priority: 'high', note: 'Stable dining rations while the kitchen recovers.' },
      { supplyId: 'sanctuary-treated-leather', quantity: 20, priority: 'medium', note: 'New chair bindings, aprons, and saddle straps.' },
      { supplyId: 'sanctuary-emergency-lantern', quantity: 6, priority: 'low', note: 'Lanterns to help guests and staff after dark.' }
    ]
  },
  {
    id: 'vastmalaise-depot-restock',
    kingdomId: 'vastmalaise',
    location: 'Fenbarge Supply Depot',
    requestName: 'Depot Resupply',
    trigger: 'post-restoration',
    supplies: [
      { supplyId: 'sanctuary-salve-blend', quantity: 24, priority: 'high', note: 'Healer supplies for recovery and quarantine care.' },
      { supplyId: 'sanctuary-braided-rope', quantity: 18, priority: 'medium', note: 'Rope for loading, shipping, and levee repairs.' },
      { supplyId: 'sanctuary-route-scrolls', quantity: 10, priority: 'low', note: 'New route notes for seasonal fen paths.' }
    ]
  },
  {
    id: 'sunward-dock-restock',
    kingdomId: 'sunward',
    location: 'Marr Glasskiln',
    requestName: 'Glasskiln Supply Run',
    trigger: 'post-castle-clear',
    supplies: [
      { supplyId: 'sanctuary-emergency-lantern', quantity: 12, priority: 'high', note: 'Bright lanterns for kiln and nightwork safety.' },
      { supplyId: 'sanctuary-preserved-grain', quantity: 16, priority: 'medium', note: 'Food stores for workers and caravan crews.' },
      { supplyId: 'sanctuary-treated-leather', quantity: 12, priority: 'low', note: 'Straps and protective gear for glassworkers.' }
    ]
  }
];

export const RESTOCK_TRIGGER_LABELS: Record<KingdomRestockRequest['trigger'], string> = {
  'post-restoration': 'After Restoration',
  'post-clearance': 'After Clearance',
  'post-castle-clear': 'Post-Castle Clearance'
};

export function getKingdomRestockRequestsByTrigger(trigger: KingdomRestockRequest['trigger']): KingdomRestockRequest[] {
  return KINGDOM_RESTOCK_REQUESTS.filter((request) => request.trigger === trigger);
}

export function findSupplyItemById(supplyId: string): SupplyItem | undefined {
  return SANCTUARY_ISLE_PRODUCTION.find((item) => item.id === supplyId);
}

export function getRestockRequestSupplySummary(request: KingdomRestockRequest): string {
  return request.supplies
    .map((line) => {
      const item = findSupplyItemById(line.supplyId);
      const supplyName = item?.name ?? line.supplyId.replace(/-/g, ' ');
      return `${line.quantity}× ${supplyName}`;
    })
    .join(', ');
}

export function getRestockRequestTitle(request: KingdomRestockRequest): string {
  return `${request.requestName} (${request.location})`;
}
