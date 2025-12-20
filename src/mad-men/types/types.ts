export type ClothingCategory = 
  | 'Hat'
  | 'Accessory'
  | 'Top' // Blouses, Shirts
  | 'Bottom' // Skirts, Trousers
  | 'Dress'
  | 'Coat'
  | 'Hosiery'
  | 'Shoe'
  | 'Bag'
  | 'Umbrella'
  | 'Undergarment';

export interface ClothingAssets {
  layer_source: string; // image_url_or_path
  mask_source?: string; // mask_url_or_path (optional based on JSON, but good to have)
}

export interface GenAIMetadata {
  base_prompt: string;
  control_net_model?: string;
}

export interface ClothingItem {
  item_id: string;
  name: string;
  category: ClothingCategory; // Using strict type instead of string for safety
  z_index: number;
  compatibility_tags: string[]; // e.g. ["Don_Draper", "Roger_Sterling"]
  is_generated: boolean;
  assets: ClothingAssets;
  gen_ai_metadata?: GenAIMetadata; // Optional as not all items might have this if static only? Or strict from JSON?
                           // JSON shows it present. I'll keep it optional or mandatory based on "is_generated"?
                           // The prompt JSON implies it's always there structure-wise, but I'll make it optional for static items if they don't need it.
}

export type CharacterName = 
  | 'Don Draper'
  | 'Betty Draper'
  | 'Peggy Olson'
  | 'Joan Holloway'
  | 'Roger Sterling'
  | 'Pete Campbell'
  | 'Sally Draper';

export interface Character {
  id: string;
  name: CharacterName;
  base_image_url: string; // The mannequin/base
  compatible_categories: ClothingCategory[];
}

export interface FashionState {
  selectedCharacter: Character | null;
  equippedItems: ClothingItem[]; // Array of equipped items
}
