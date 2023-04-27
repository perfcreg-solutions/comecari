import { ReactComponentElement } from "react";

export interface IRoute {
  name: string;
  layout: string;
  component: ReactComponentElement | null;
  icon: ReactComponentElement | string;
  secondary?: boolean;
  path: string;
  children?: Route[];
}
