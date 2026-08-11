declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"4x4-self-drive-vs-escorted-convoy-expeditions.md": {
	id: "4x4-self-drive-vs-escorted-convoy-expeditions.md";
  slug: "4x4-self-drive-vs-escorted-convoy-expeditions";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"bangalore-sakleshpur-chikmagalur-4x4-trail-guide.md": {
	id: "bangalore-sakleshpur-chikmagalur-4x4-trail-guide.md";
  slug: "bangalore-sakleshpur-chikmagalur-4x4-trail-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"bhutan-next-adventure.md": {
	id: "bhutan-next-adventure.md";
  slug: "bhutan-next-adventure";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"choosing-right-tires-himalayan-overlanding.md": {
	id: "choosing-right-tires-himalayan-overlanding.md";
  slug: "choosing-right-tires-himalayan-overlanding";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"conquering-umling-la-khardung-la-driving-guide.md": {
	id: "conquering-umling-la-khardung-la-driving-guide.md";
  slug: "conquering-umling-la-khardung-la-driving-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"convoy-dynamics-radio-communication-etiquette.md": {
	id: "convoy-dynamics-radio-communication-etiquette.md";
  slug: "convoy-dynamics-radio-communication-etiquette";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"essential-first-aid-medical-kit-checklist.md": {
	id: "essential-first-aid-medical-kit-checklist.md";
  slug: "essential-first-aid-medical-kit-checklist";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"essential-overland-off-road-recovery-equipment.md": {
	id: "essential-overland-off-road-recovery-equipment.md";
  slug: "essential-overland-off-road-recovery-equipment";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"family-overlanding-in-the-himalayas-guide.md": {
	id: "family-overlanding-in-the-himalayas-guide.md";
  slug: "family-overlanding-in-the-himalayas-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"high-altitude-sickness-ams-guide-for-overlanders.md": {
	id: "high-altitude-sickness-ams-guide-for-overlanders.md";
  slug: "high-altitude-sickness-ams-guide-for-overlanders";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"himalayan-expedition-photography-guide.md": {
	id: "himalayan-expedition-photography-guide.md";
  slug: "himalayan-expedition-photography-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"how-to-pack-organize-4x4-overland-expedition.md": {
	id: "how-to-pack-organize-4x4-overland-expedition.md";
  slug: "how-to-pack-organize-4x4-overland-expedition";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"inner-line-permits-ilp-guide-ladakh-spiti.md": {
	id: "inner-line-permits-ilp-guide-ladakh-spiti.md";
  slug: "inner-line-permits-ilp-guide-ladakh-spiti";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"monsoon-overlanding-western-ghats-water-crossings.md": {
	id: "monsoon-overlanding-western-ghats-water-crossings.md";
  slug: "monsoon-overlanding-western-ghats-water-crossings";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"navigating-nepal-by-4x4-border-crossing-guide.md": {
	id: "navigating-nepal-by-4x4-border-crossing-guide.md";
  slug: "navigating-nepal-by-4x4-border-crossing-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"overland-camping-in-ladakh-guide.md": {
	id: "overland-camping-in-ladakh-guide.md";
  slug: "overland-camping-in-ladakh-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"overland-power-systems-dual-battery-solar-guide.md": {
	id: "overland-power-systems-dual-battery-solar-guide.md";
  slug: "overland-power-systems-dual-battery-solar-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"overlanding-tips-himalayas.md": {
	id: "overlanding-tips-himalayas.md";
  slug: "overlanding-tips-himalayas";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"self-driving-in-bhutan-complete-guide.md": {
	id: "self-driving-in-bhutan-complete-guide.md";
  slug: "self-driving-in-bhutan-complete-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"spiti-valley-vs-leh-ladakh-expedition-comparison.md": {
	id: "spiti-valley-vs-leh-ladakh-expedition-comparison.md";
  slug: "spiti-valley-vs-leh-ladakh-expedition-comparison";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"sustainable-overlanding-responsible-tourism-guide.md": {
	id: "sustainable-overlanding-responsible-tourism-guide.md";
  slug: "sustainable-overlanding-responsible-tourism-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ultimate-4x4-vehicle-preparation-checklist.md": {
	id: "ultimate-4x4-vehicle-preparation-checklist.md";
  slug: "ultimate-4x4-vehicle-preparation-checklist";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"vehicle-preparation-guide.md": {
	id: "vehicle-preparation-guide.md";
  slug: "vehicle-preparation-guide";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
