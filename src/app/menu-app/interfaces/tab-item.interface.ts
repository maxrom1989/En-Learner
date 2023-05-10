import { IComponentNameType } from "./component-name-type.interface";

export interface ITabItem {
  componentName: string;
  url: IComponentNameType;
  isSelected: boolean;
}