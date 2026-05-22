import { Product } from '../../data/products';

const TSHIRT_PLACEMENTS = [
    'Full Front', 'Medium Front', 'Center Chest', 'Across Chest',
    'Right Chest', 'Left Chest', 'Right Sleeve', 'Left Sleeve',
    'Right Vertical', 'Left Vertical', 'Front Bottom Right', 'Front Bottom Left',
    'Full Back', 'Medium Back', 'Locker Patch Area', 'Across Shoulders',
] as const;

export type LogoPlacement = typeof TSHIRT_PLACEMENTS[number] | 'Front' | 'Back';
export type LogoSize = 'Small' | 'Medium' | 'Large' | 'Extra Large';

export function getDefaultPlacement(category: Product['category']): LogoPlacement {
    return category === 'T-Shirts' ? 'Center Chest' : 'Front';
}

export function getPlacementOverlayClass(placement: string, category: Product['category']): string {
    if (category !== 'T-Shirts') return 'hidden';
    const map: Record<string, string> = {
        'Full Front': 'top-[18%] left-[18%] w-[64%] h-[58%]',
        'Medium Front': 'top-[22%] left-[28%] w-[44%] h-[42%]',
        'Center Chest': 'top-[28%] left-[38%] w-[24%] h-[16%]',
        'Across Chest': 'top-[32%] left-[18%] w-[64%] h-[11%]',
        'Left Chest': 'top-[28%] left-[22%] w-[18%] h-[16%]',
        'Right Chest': 'top-[28%] right-[22%] w-[18%] h-[16%]',
        'Left Sleeve': 'top-[32%] left-[2%] w-[16%] h-[18%]',
        'Right Sleeve': 'top-[32%] right-[2%] w-[16%] h-[18%]',
        'Full Back': 'top-[18%] left-[18%] w-[64%] h-[58%]',
        'Medium Back': 'top-[22%] left-[28%] w-[44%] h-[42%]',
        'Locker Patch Area': 'top-[8%] left-[35%] w-[30%] h-[12%]',
        'Across Shoulders': 'top-[12%] left-[15%] w-[70%] h-[14%]',
    };
    return map[placement] ?? 'top-[36%] left-[38%] w-[24%] h-[20%]';
}

export function getLogoScaleClass(size: LogoSize): string {
    const scales: Record<LogoSize, string> = {
        Small: 'scale-[0.45]',
        Medium: 'scale-[0.7]',
        Large: 'scale-100',
        'Extra Large': 'scale-[1.25]',
    };
    return scales[size];
}

export function isBackPlacement(placement: string): boolean {
    return /back|shoulder|locker/i.test(placement);
}

export { TSHIRT_PLACEMENTS };
