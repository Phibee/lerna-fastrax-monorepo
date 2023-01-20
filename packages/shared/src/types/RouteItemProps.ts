export interface RouteItemProps {
  uri: string;
  defaultUri?: string;
  name: string;
  component?: any;
  children?: RouteItemProps[];
  meta?: MetaProps;
  layout?: LayoutPartProps;
  hasChild?: boolean;
  level?: number;
  auth?: boolean;
  global?: boolean;
  isExact?: boolean;
}

export interface LayoutPartProps {
  name: string;
  header?: boolean;
  banner?: boolean;
  bannerControl?: boolean;
  aside?: boolean;
  footer?: boolean;
}

export interface MetaProps {
  icon?: string;
  title: string;
  description?: string;
  hideOnSidebar?: boolean;
  headerBoxTogglerEnable?: boolean;
  excludeInBreadcrumb?: boolean;
  excludeRadialMenu?: boolean;
}
