export type Artwork = {
  id: number;
  api_model: string;
  api_link: string;
  is_boosted: boolean;
  title: string;
  alt_titles: string | null;
  thumbnail: {
    lqip: string;
    width: number;
    height: number;
    alt_text: string;
  };
  main_reference_number: string;
  has_not_been_viewed_much: boolean;
  boost_rank: string | null;
  date_start: number;
  date_end: number;
  date_display: string;
  date_qualifier_title: string;
  date_qualifier_id: null | number;
  artist_display: string;
  place_of_origin: string;
  description: null | string;
  short_description: null | string;
  dimensions: string;
  dimensions_detail: [
    {
      depth: number;
      width: number;
      height: number;
      diameter: number | null;
      clarification: number | null;
    },
  ];
  medium_display: string;
  inscriptions: null | string;
  credit_line: string;
  catalogue_display: null | string;
  publication_history: string;
  exhibition_history: string;
  provenance_text: string;
  edition: null | string;
  publishing_verification_level: string;
  internal_department_id: number;
  fiscal_year: string;
  fiscal_year_deaccession: null | number;
  is_public_domain: boolean;
  is_zoomable: boolean;
  max_zoom_window_size: number;
  copyright_notice: null | string;
  has_multimedia_resources: boolean;
  has_educational_resources: boolean;
  has_advanced_imaging: boolean;
  colorfulness: number;
  color: {
    h: number;
    l: number;
    s: number;
    percentage: number;
    population: number;
  };
  latitude: number;
  longitude: number;
  latlon: string;
  is_on_view: boolean;
  gallery_title: string;
  gallery_id: number;
  artwork_type_title: string;
  artwork_type_id: number;
  department_title: string;
  department_id: string;
  artist_id: null | number;
  artist_title: null | string;
  category_ids: string[];
  category_titles: string[];
  term_titles: string[];
  style_id: string;
  style_title: string;
  alt_style_ids: string[];
  style_ids: string[];
  style_titles: string[];
  classification_id: string;
  classification_title: string;
  alt_classification_ids: string[];
  classification_ids: string[];
  classification_titles: string[];
  subject_id: null;
  alt_subject_ids: string[];
  subject_ids: string[];
  subject_titles: string[];
  material_id: number;
  alt_material_ids: string[];
  material_ids: string[];
  material_titles: string[];
  technique_id: null | number;
  alt_technique_ids: string[];
  technique_ids: string[];
  technique_titles: string[];
  theme_titles: string[];
  image_id: string;
  alt_image_ids: string[];
  document_ids: string[];
  sound_ids: string[];
  video_ids: string[];
  text_ids: string[];
  section_ids: string[];
  section_titles: string[];
  site_ids: string[];
  suggest_autocomplete_all: [
    {
      input: string[];
      contexts: {
        groupings: string[];
      };
    },
    {
      input: string[];
      weight: number;
      contexts: {
        groupings: string[];
      };
    },
  ];
  source_updated_at: string;
  updated_at: string;
  timestamp: string;
};

export type ArtworkShort = {
  id: number;
  title: string;
  artwork_type_title: string;
  artist_title: string;
  image_id: string;
};
