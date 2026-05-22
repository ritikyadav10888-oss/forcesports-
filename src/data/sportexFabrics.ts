/**
 * Sportex India fabric library — synced with public/Sportex Fabrics swatches
 * and public/Sportex India (1).pdf catalog (GSM per swatch page).
 */
export interface SportexFabric {
    name: string;
    file: string;
    gsm: string;
    desc: string;
    use?: string;
    printing?: string;
}

export const SPORTEX_FABRICS: SportexFabric[] = [
    { name: 'Polyester', file: 'Polyester.jpg', gsm: '180', desc: 'Durable, colorfast base for sports jerseys.', use: 'Jerseys & training tees', printing: 'Sublimation, Screen Print, DTF, Embroidery' },
    { name: 'Dotknit', file: 'Dotknit.jpg', gsm: '180', desc: 'Micro-dot mesh for airflow and moisture release.', use: 'Training & sublimation', printing: 'Sublimation, Screen Print, DTF, Embroidery' },
    { name: 'Nirmalknit', file: 'Nirmalknit.jpg', gsm: '180', desc: 'Soft-hand piqué knit for everyday teamwear.', use: 'Practice kits', printing: 'Sublimation, Screen Print, DTF, Embroidery' },
    { name: 'Honeycomb', file: 'Honeycomb.jpg', gsm: '180', desc: 'Hexagonal knit for temperature control.', use: 'High-heat sports', printing: 'Sublimation, Screen Print, DTF, Embroidery' },
    { name: 'Superplus', file: 'Superplus.jpg', gsm: '180', desc: 'Enhanced durability poly performance knit.', use: 'Match-day kits', printing: 'Sublimation, Screen Print, DTF, Embroidery' },
    { name: 'Maxplus', file: 'Maxplus.jpg', gsm: '180', desc: 'Heavy-duty performance mesh knit.', use: 'Competition wear', printing: 'Sublimation, Screen Print, DTF, Embroidery' },
    { name: 'Spaun Matty', file: 'Spaun Matty.jpg', gsm: '220', desc: 'Textured matty finish for corporate polos.', use: 'Corporate & events', printing: 'Screen Print, DTF, Embroidery' },
    { name: 'Monopoly', file: 'Monopoly.jpg', gsm: '190', desc: 'Smooth stripe-knit with breathable mesh bands.', use: 'Polo & corporate', printing: 'Screen Print, DTF, Embroidery' },
    { name: 'Jacquard', file: 'Jacquard.jpg', gsm: '180', desc: 'Intricate woven patterns for elite kits.', use: 'Premium team kits', printing: 'Sublimation, Embroidery, DTF' },
    { name: 'Golflink', file: 'Golflink.jpg', gsm: '190', desc: 'Classic polo texture with modern wicking.', use: 'Golf & polo shirts', printing: 'Screen Print, DTF, Embroidery' },
    { name: 'Silkysofty', file: 'Silkysofty.jpg', gsm: '140', desc: 'Lightweight silky hand-feel interlock.', use: 'Inner layers & summer tees', printing: 'Sublimation, DTF' },
    { name: 'Super Softy', file: 'Super Softy.jpg', gsm: '220', desc: 'Ultra-soft brushed interlock construction.', use: 'Hoodies & winter layers', printing: 'Sublimation, Screen Print, DTF, Embroidery' },
    { name: '4 Way Lycra', file: '4 Way lycra.jpg', gsm: '230', desc: 'Maximum 360° stretch recovery.', use: 'Compression & cycling', printing: 'Sublimation, DTF, Vinyl' },
    { name: 'Taiwan', file: 'Taiwan.jpg', gsm: '230', desc: 'Imported 4-way stretch technical knit.', use: 'Elite stretch garments', printing: 'Sublimation, DTF, Vinyl' },
    { name: 'NS Lycra', file: 'NS Lycra.jpg', gsm: '130', desc: '12% lycra blend for tracksuits & panels.', use: 'Tracksuits & side panels', printing: 'Screen Print, DTF, Vinyl' },
    { name: 'Twill', file: 'Twill.jpg', gsm: '200', desc: 'Diagonal weave for structured garments.', use: 'Pants & structured tops', printing: 'Embroidery, Screen Print, DTF' },
    { name: 'Tracko', file: 'Tracko.jpg', gsm: '220', desc: 'Specialized knit for track pants.', use: 'Track pants & joggers', printing: 'Screen Print, Embroidery, DTF, Vinyl' },
    { name: 'Bricks', file: 'Bricks.jpg', gsm: '200', desc: 'Brick-texture grid for durability.', use: 'Training & casual wear', printing: 'Sublimation, Screen Print, DTF' },
    { name: 'Cocktail', file: 'Cocktail.jpg', gsm: '190', desc: 'Premium honeycomb blend for comfort.', use: 'Versatile teamwear', printing: 'Sublimation, Screen Print, DTF' },
    { name: 'Super Poly', file: 'Super Poly.jpg', gsm: '220', desc: 'Brushed-back warm poly for outerwear.', use: 'Winter jackets & layers', printing: 'Embroidery, Screen Print, DTF, Vinyl' },
    { name: 'Dryfit', file: 'Dryfit.jpg', gsm: '180–220', desc: 'Moisture-wicking; 220 GSM import grade available.', use: 'Sports tees & kits', printing: 'Sublimation, Screen Print, DTF, Embroidery' },
    { name: 'Mesh', file: 'Mesh.jpg', gsm: 'Mesh knit', desc: 'Open mesh knit (Meshknit) for ventilation zones.', use: 'Side panels & linings', printing: 'Sublimation, DTF' },
    { name: 'RIB', file: 'RIB.jpg', gsm: 'Rib trim', desc: 'Rib knit for collars, cuffs & trims.', use: 'Collars & cuffs', printing: 'Yarn Dyed, Solid' },
];

export const SPORTEX_CONTACT = {
    phone: '7304224400',
    location: 'Bhiwandi, Mumbai',
    email: 'Sportexindia78@gmail.com',
    website: 'www.sportexindia.com',
};
