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
		name: 'Control Planes > Models Tee',
		description: 'A blazer-compatible architecture argument, embroidered up front.',
		price: '$29.57',
		slug: 'control-planes-over-models-tee',
		imageUrl: '/merch/mission-tempo/control-planes-over-models-storefront-hero.png',
	},
	{
		name: 'Control Planes Decision Log',
		description: 'A hardcover notebook for architectures, hypotheses, and the next iteration.',
		price: '$26.00',
		slug: 'control-planes-decision-log',
		imageUrl:
			'https://cdn.fourthwall.com/customizations/sh_4089b78b-d945-4e72-850a-cd87de50c010/ed5ed394-6b89-4978-bad6-243bcfc50520.webp',
	},
	{
		name: 'Control Plane Cap',
		description: 'The architecture mark on a quiet, organic-cotton dad cap.',
		price: '$32.00',
		slug: 'control-plane-cap',
		imageUrl:
			'https://cdn.fourthwall.com/customizations/sh_4089b78b-d945-4e72-850a-cd87de50c010/694fe7dd-43c0-40b8-a05c-be1b7ba72c2e.webp',
	},
	{
		name: 'Control Planes Desk Mat',
		description: 'A full-width control-plane architecture for the workstation.',
		price: '$34.00',
		slug: 'control-planes-desk-mat',
		imageUrl:
			'https://cdn.fourthwall.com/customizations/sh_4089b78b-d945-4e72-850a-cd87de50c010/ed6dc164-095a-46e2-a879-2fc70138d37f.webp',
	},
	{
		name: 'Control Planes Sticker',
		description: 'The complete lockup as a durable four-inch vinyl sticker.',
		price: '$8.49',
		slug: 'control-planes-sticker',
		imageUrl:
			'https://cdn.fourthwall.com/customizations/sh_4089b78b-d945-4e72-850a-cd87de50c010/40b9dba0-71e7-4743-8154-e1dbe2d235d4.webp',
	},
	{
		name: 'Control Planes Insulated Tumbler',
		description: 'A laser-etched control-plane mark on a 20 oz insulated tumbler.',
		price: '$37.95',
		slug: 'control-planes-insulated-tumbler',
		imageUrl:
			'https://cdn.fourthwall.com/customizations/sh_4089b78b-d945-4e72-850a-cd87de50c010/6e4ca90a-77d8-43f9-892e-aefe3e79345b.webp',
	},
	{
		name: 'Authority to Iterate Wordmark Tee',
		description: 'The operating principle, embroidered up front.',
		price: '$29.57',
		slug: 'authority-to-iterate-wordmark-tee',
		imageUrl:
			'https://cdn.fourthwall.com/customizations/sh_4089b78b-d945-4e72-850a-cd87de50c010/7208decc-f48d-4379-869a-d347970b92ec.webp',
	},
	{
		name: 'Software Defined Warfare Field Notes',
		description: 'For hypotheses, after-action notes, and the next iteration.',
		price: '$16.00',
		slug: 'software-defined-warfare-field-notes',
		imageUrl:
			'https://cdn.fourthwall.com/customizations/sh_4089b78b-d945-4e72-850a-cd87de50c010/bcf73b9c-5fa1-4716-af6c-bea554867df2.webp',
	},
	{
		name: 'Software Defined Warfare Tee',
		description: 'For people who know the stack is part of the battlespace.',
		price: '$29.57',
		slug: 'software-defined-warfare-tee',
		imageUrl:
			'https://cdn.fourthwall.com/customizations/sh_4089b78b-d945-4e72-850a-cd87de50c010/8b3a6b02-9d13-42aa-8550-4f6a0fd7ffd4.webp',
	},
	{
		name: 'Department of War Seal Tee',
		description: 'A deliberately unofficial seal for the people changing how the mission gets done.',
		price: '$29.57',
		slug: 'department-of-war-seal-tee',
		imageUrl:
			'https://cdn.fourthwall.com/customizations/sh_4089b78b-d945-4e72-850a-cd87de50c010/96a6c69e-9cc1-430e-a73e-699a541a7d9b.webp',
	},
];

export function storeProductUrl(slug: string) {
	return `${STORE_URL}/products/${slug}`;
}
