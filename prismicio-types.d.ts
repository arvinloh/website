// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type BlogDocumentDataSlicesSlice = ImageLeftSlice;

/**
 * Content for blog documents
 */
interface BlogDocumentData {
  /**
   * Slice Zone field in *blog*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BlogDocumentDataSlicesSlice> /**
   * Meta Description field in *blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blog.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *blog*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blog.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * blog document from Prismic
 *
 * - **API ID**: `blog`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<BlogDocumentData>, "blog", Lang>;

export type AllDocumentTypes = BlogDocument;

/**
 * Primary content in *BeforeAfter → Primary*
 */
export interface BeforeAfterSliceDefaultPrimary {
  /**
   * title field in *BeforeAfter → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: before_after.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * before image field in *BeforeAfter → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: before_after.primary.before_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  before_image: prismic.ImageField<never>;

  /**
   * after image field in *BeforeAfter → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: before_after.primary.after_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  after_image: prismic.ImageField<never>;
}

/**
 * Default variation for BeforeAfter Slice
 *
 * - **API ID**: `default`
 * - **Description**: BeforeAfter
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BeforeAfterSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BeforeAfterSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *BeforeAfter*
 */
type BeforeAfterSliceVariation = BeforeAfterSliceDefault;

/**
 * BeforeAfter Shared Slice
 *
 * - **API ID**: `before_after`
 * - **Description**: BeforeAfter
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BeforeAfterSlice = prismic.SharedSlice<
  "before_after",
  BeforeAfterSliceVariation
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * eyebrowHeadline field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Eyebrow
   * - **API ID Path**: hero.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  eyebrowHeadline: prismic.KeyTextField;

  /**
   * title field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * callToActionLabel field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.callToActionLabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  callToActionLabel: prismic.KeyTextField;

  /**
   * callToActionLink field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.callToActionLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  callToActionLink: prismic.LinkField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceImageRightPrimary {
  /**
   * eyebrowHeadline field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Eyebrow
   * - **API ID Path**: hero.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  eyebrowHeadline: prismic.KeyTextField;

  /**
   * title field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * callToActionLabel field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.callToActionLabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  callToActionLabel: prismic.KeyTextField;

  /**
   * callToActionLink field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.callToActionLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  callToActionLink: prismic.LinkField;
}

/**
 * Image Right variation for Hero Slice
 *
 * - **API ID**: `imageRight`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceImageRight = prismic.SharedSliceVariation<
  "imageRight",
  Simplify<HeroSliceImageRightPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault | HeroSliceImageRight;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *ImageGroup → Primary*
 */
export interface ImageGroupSliceDefaultPrimary {
  /**
   * title field in *ImageGroup → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_group.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Primary content in *ImageGroup → Items*
 */
export interface ImageGroupSliceDefaultItem {
  /**
   * image field in *ImageGroup → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_group.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for ImageGroup Slice
 *
 * - **API ID**: `default`
 * - **Description**: ImageGroup
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageGroupSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageGroupSliceDefaultPrimary>,
  Simplify<ImageGroupSliceDefaultItem>
>;

/**
 * Slice variation for *ImageGroup*
 */
type ImageGroupSliceVariation = ImageGroupSliceDefault;

/**
 * ImageGroup Shared Slice
 *
 * - **API ID**: `image_group`
 * - **Description**: ImageGroup
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageGroupSlice = prismic.SharedSlice<
  "image_group",
  ImageGroupSliceVariation
>;

/**
 * Primary content in *ImageWithTextonOneSide → Primary*
 */
export interface ImageLeftSliceDefaultPrimary {
  /**
   * text field in *ImageWithTextonOneSide → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: This is where it all begins...
   * - **API ID Path**: image_left.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * image field in *ImageWithTextonOneSide → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_left.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * position field in *ImageWithTextonOneSide → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: left
   * - **API ID Path**: image_left.primary.position
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  position: prismic.SelectField<"left" | "right", "filled">;
}

/**
 * Default variation for ImageWithTextonOneSide Slice
 *
 * - **API ID**: `default`
 * - **Description**: ImageLeft
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageLeftSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageLeftSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ImageWithTextonOneSide*
 */
type ImageLeftSliceVariation = ImageLeftSliceDefault;

/**
 * ImageWithTextonOneSide Shared Slice
 *
 * - **API ID**: `image_left`
 * - **Description**: ImageLeft
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageLeftSlice = prismic.SharedSlice<
  "image_left",
  ImageLeftSliceVariation
>;

/**
 * Primary content in *RichText → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * richtext field in *RichText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: This is where it all begins...
   * - **API ID Path**: rich_text.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RichTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  "rich_text",
  RichTextSliceVariation
>;

/**
 * Primary content in *SingleImage → Primary*
 */
export interface SingleImageSliceDefaultPrimary {
  /**
   * image field in *SingleImage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: single_image.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * description field in *SingleImage → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: single_image.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * Default variation for SingleImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: SingleImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SingleImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SingleImageSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *SingleImage*
 */
type SingleImageSliceVariation = SingleImageSliceDefault;

/**
 * SingleImage Shared Slice
 *
 * - **API ID**: `single_image`
 * - **Description**: SingleImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SingleImageSlice = prismic.SharedSlice<
  "single_image",
  SingleImageSliceVariation
>;

/**
 * Primary content in *TextBlock → Primary*
 */
export interface TextBlockSliceDefaultPrimary {
  /**
   * Title field in *TextBlock → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_block.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Banner field in *TextBlock → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: text_block.primary.banner
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  banner: prismic.ImageField<never>;

  /**
   * date field in *TextBlock → Primary*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: text_block.primary.date
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date: prismic.DateField;

  /**
   * colorpicker field in *TextBlock → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: text_block.primary.colorpicker
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  colorpicker: prismic.ColorField;
}

/**
 * Primary content in *TextBlock → Items*
 */
export interface TextBlockSliceDefaultItem {
  /**
   * Body field in *TextBlock → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_block.items[].body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;
}

/**
 * Default variation for TextBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextBlockSliceDefaultPrimary>,
  Simplify<TextBlockSliceDefaultItem>
>;

/**
 * Slice variation for *TextBlock*
 */
type TextBlockSliceVariation = TextBlockSliceDefault;

/**
 * TextBlock Shared Slice
 *
 * - **API ID**: `text_block`
 * - **Description**: TextBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextBlockSlice = prismic.SharedSlice<
  "text_block",
  TextBlockSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      BlogDocument,
      BlogDocumentData,
      BlogDocumentDataSlicesSlice,
      AllDocumentTypes,
      BeforeAfterSlice,
      BeforeAfterSliceDefaultPrimary,
      BeforeAfterSliceVariation,
      BeforeAfterSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceImageRightPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      HeroSliceImageRight,
      ImageGroupSlice,
      ImageGroupSliceDefaultPrimary,
      ImageGroupSliceDefaultItem,
      ImageGroupSliceVariation,
      ImageGroupSliceDefault,
      ImageLeftSlice,
      ImageLeftSliceDefaultPrimary,
      ImageLeftSliceVariation,
      ImageLeftSliceDefault,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
      SingleImageSlice,
      SingleImageSliceDefaultPrimary,
      SingleImageSliceVariation,
      SingleImageSliceDefault,
      TextBlockSlice,
      TextBlockSliceDefaultPrimary,
      TextBlockSliceDefaultItem,
      TextBlockSliceVariation,
      TextBlockSliceDefault,
    };
  }
}
