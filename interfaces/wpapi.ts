import { ACFResponse } from './acf';

export interface WPInfo {
  name: string;
  description: string;
  url: string;
  home: string;
  gmt_offset?: string;
  timezone_string?: string;
  namespaces?: string[];
  authentication?: any[];
  routes?: any;
  _links: any;
}

export interface WPMenuItem {
  ID: number;
  guid: string;
  object: string;
  type: string;
  type_label: string;
  url: string;
  title: string;
  target?: string;
  attr_title?: string;
  description?: string;
  classes: string[];
  xfn: string;
}

export interface WPMenu {
  term_id: number;
  name: string;
  slug: string;
  term_group: number;
  term_taxonomy_id: number;
  taxonomy: string;
  description: string;
  parent: number;
  count: number;
  filter: string;
  items: WPMenuItem[];
}

export interface WPErrorResponse {
  code: string;
  message: string;
  data: {
    status: number;
  };
}

export interface WPUser {
  id: number;
  name: string;
  url?: string;
  description?: string;
  link: string;
  slug: string;
  avatar_urls: {
    [key: string]: string;
  };
  meta?: any[];
  acf?: ACFResponse;
  _links: {
    [key: string]: any;
  };
}

export interface WPTaxonomy {
  id: number;
  count: number;
  description?: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent?: 0;
  meta?: any[];
  _links: {
    [key: string]: any;
  };
}

export interface WPGutenblocks {
  blockName?: string;
  attrs: any[] | null;
  innerBlocks?: any[];
  innerHTML: string;
}

export interface WPPost {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  permalink: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: false;
  };
  author: number;
  featured_media: 0;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template?: string;
  format: string;
  meta?: any[];
  categories: number[];
  tags?: any[];
  acf: ACFResponse;
  blocks: WPGutenblocks[];
  _links: {
    [key: string]: any;
  };
  _embedded: {
    author: WPUser[];
    [key: string]: any;
  };
  wp_category: WPTaxonomy[];
  [key: string]: any;
}
