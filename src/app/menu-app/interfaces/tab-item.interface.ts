import { IComponentNameType } from "./component-name-type.interface";

export interface ITabItem {
  componentName: IComponentNameType;
  url: string;
  isSelected: boolean;
}