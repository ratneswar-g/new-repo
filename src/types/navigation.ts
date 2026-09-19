/**
 * @file navigation.ts
 * @description Type definitions for site navigation, header dropdowns, and mobile menu hierarchies.
 */

export interface NavLinkItem {
  id: string;
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface NavDropdownSection {
  title?: string;
  items: NavLinkItem[];
}

export interface NavigationItem {
  id: string;
  label: string;
  href?: string; // If top-level clickable
  children?: NavLinkItem[]; // Sub-menu items for dropdown
  isButton?: boolean;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}
