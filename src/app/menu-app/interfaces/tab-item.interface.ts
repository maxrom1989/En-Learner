import { IComponentNameType } from "./component-name-type.interface";

export interface ITabItem {
  componentName: string;
  routerLink: string[];
  // url: IComponentNameType;
  clipboardName: string;
  styleClass: string;
  isSelected: boolean;
}