export const STORE_URL = 'https://shop.adamboas.com';

export type StoreProduct = {
	name: string;
	description: string;
	price: string;
	slug: string;
	imageUrl: string;
};

export const storeProducts: StoreProduct[] = [
	{
		name: 'Authority to Iterate Wordmark Tee',
		description: 'The operating principle, embroidered up front.',
		price: 'From $26.50',
		slug: 'comfort-colors-garment-dyed-heavyweight-t-shirt-3',
		imageUrl:
			'https://cdn.fourthwall.com/customizations/sh_4089b78b-d945-4e72-850a-cd87de50c010/7208decc-f48d-4379-869a-d347970b92ec.webp',
	},
	{
		name: 'Software Defined Warfare Field Notes',
		description: 'For hypotheses, after-action notes, and the next iteration.',
		price: '$16.00',
		slug: 'hardcover-bound-notebook-journalbook',
		imageUrl:
			'https://cdn.fourthwall.com/customizations/sh_4089b78b-d945-4e72-850a-cd87de50c010/bcf73b9c-5fa1-4716-af6c-bea554867df2.webp',
	},
	{
		name: 'Software Defined Warfare Tee',
		description: 'For people who know the stack is part of the battlespace.',
		price: 'From $26.50',
		slug: 'comfort-colors-garment-dyed-heavyweight-t-shirt-2',
		imageUrl:
			'https://cdn.fourthwall.com/customizations/sh_4089b78b-d945-4e72-850a-cd87de50c010/8b3a6b02-9d13-42aa-8550-4f6a0fd7ffd4.webp',
	},
	{
		name: 'Department of War Seal Tee',
		description: 'A deliberately unofficial seal for the people changing how the mission gets done.',
		price: 'From $26.50',
		slug: 'comfort-colors-garment-dyed-heavyweight-t-shirt',
		imageUrl:
			'https://cdn.fourthwall.com/customizations/sh_4089b78b-d945-4e72-850a-cd87de50c010/96a6c69e-9cc1-430e-a73e-699a541a7d9b.webp',
	},
];

export function storeProductUrl(slug: string) {
	return `${STORE_URL}/products/${slug}`;
}
