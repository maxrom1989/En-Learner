import { ITabItem } from '../../../interfaces/tab-item.interface.interface';


export const tabsList: ITabItem[] = [
    {
      componentName: 'Rephrase',
      routerLink: ['/RephraseComponent'],
      clipboardName: '(rephrase)',
      styleClass: 'red',
      isSelected: true
    },
    {
      componentName: 'Meanings',
      routerLink: ['/MeaningsComponent'],
      clipboardName: '(meanings)',
      styleClass: 'green',
      isSelected: false
    },
    {
      componentName: 'Generator',
      routerLink: ['/GeneratorComponent'],
      clipboardName: '(generator)',
      styleClass: 'blue',
      isSelected: false
    }
]