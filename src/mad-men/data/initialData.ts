import type { ClothingItem, Character } from '../types/types';

export const MOCK_CHARACTERS: Character[] = [
    {
        id: 'don_draper',
        name: 'Don Draper',
        base_image_url: '/assets/mannequins/don_base.png',
        compatible_categories: ['Hat', 'Coat', 'Top', 'Bottom', 'Shoe', 'Accessory', 'Undergarment']
    },
    {
        id: 'joan_holloway',
        name: 'Joan Holloway',
        base_image_url: '/assets/mannequins/joan_base.png',
        compatible_categories: ['Hat', 'Coat', 'Dress', 'Top', 'Bottom', 'Shoe', 'Accessory', 'Undergarment', 'Hosiery']
    },
    {
        id: 'peggy_olson',
        name: 'Peggy Olson',
        base_image_url: '/assets/mannequins/peggy_base.png',
        compatible_categories: ['Hat', 'Coat', 'Dress', 'Top', 'Bottom', 'Shoe', 'Accessory', 'Undergarment']
    },
    {
        id: 'roger_sterling',
        name: 'Roger Sterling',
        base_image_url: '/assets/mannequins/roger_base.png',
        compatible_categories: ['Hat', 'Coat', 'Top', 'Bottom', 'Shoe', 'Accessory', 'Undergarment']
    }
];

export const MOCK_ITEMS: ClothingItem[] = [
    {
        item_id: 'grey_suit_trousers',
        name: 'Grey Wool Trousers',
        category: 'Bottom',
        z_index: 45,
        compatibility_tags: ['Don Draper', 'Roger Sterling'],
        is_generated: false,
        assets: {
            layer_source: '/assets/clothes/grey_trousers.png'
        }
    },
    {
        item_id: 'white_shirt',
        name: 'Crisp White Shirt',
        category: 'Top',
        z_index: 40,
        compatibility_tags: ['Don Draper', 'Roger Sterling', 'Pete Campbell', 'Peggy Olson'],
        is_generated: false,
        assets: {
            layer_source: '/assets/clothes/white_shirt.png'
        }
    },
    {
        item_id: 'fedora_hat',
        name: 'Classic Fedora',
        category: 'Hat',
        z_index: 80,
        compatibility_tags: ['Don Draper', 'Roger Sterling'],
        is_generated: false,
        assets: {
            layer_source: '/assets/clothes/fedora.png'
        }
    },
    {
        item_id: 'red_pencil_dress',
        name: 'Red Pencil Dress',
        category: 'Dress',
        z_index: 50,
        compatibility_tags: ['Joan Holloway'],
        is_generated: false,
        assets: {
            layer_source: '/assets/clothes/red_dress.png'
        }
    },
    {
        item_id: 'plaid_skirt_suit',
        name: 'Plaid Skirt Suit',
        category: 'Dress',
        z_index: 50,
        compatibility_tags: ['Peggy Olson'],
        is_generated: false,
        assets: {
            layer_source: '/assets/clothes/plaid_suit.png'
        }
    },
    {
        item_id: 'three_piece_suit_jacket',
        name: 'Three-Piece Suit Jacket',
        category: 'Top',
        z_index: 55,
        compatibility_tags: ['Roger Sterling'],
        is_generated: false,
        assets: {
            layer_source: '/assets/clothes/roger_jacket.png'
        }
    },
    {
        item_id: 'silk_scarf',
        name: 'Floral Silk Scarf',
        category: 'Accessory',
        z_index: 75,
        compatibility_tags: ['Joan Holloway', 'Peggy Olson'],
        is_generated: false,
        assets: {
            layer_source: '/assets/clothes/scarf.png'
        }
    },
    {
        item_id: 'pearl_necklace',
        name: 'Pearl Necklace',
        category: 'Accessory',
        z_index: 70,
        compatibility_tags: ['Joan Holloway', 'Betty Draper', 'Peggy Olson'],
        is_generated: false,
        assets: {
            layer_source: '/assets/clothes/pearls.png'
        }
    },
    {
        item_id: 'trench_coat',
        name: 'Beige Trench Coat',
        category: 'Coat',
        z_index: 60,
        compatibility_tags: ['Don Draper', 'Joan Holloway', 'Peggy Olson'],
        is_generated: false,
        assets: {
            layer_source: '/assets/clothes/trench.png'
        }
    },
    {
        item_id: 'wayfarer_sunglasses',
        name: 'Wayfarer Sunglasses',
        category: 'Accessory',
        z_index: 85,
        compatibility_tags: ['Don Draper'],
        is_generated: false,
        assets: {
            layer_source: '/assets/clothes/sunglasses.png'
        }
    }
];
