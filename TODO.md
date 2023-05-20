<!-- ## Добавить скролл в Clipboard

## Сделать 2 кнопки вместо одной  (Convert/Add to clipboard)

## Перенести header-app на глобальный уровень (над всем контентом)

## Сделать шрифт названия Clipboard меньше и убрать нижнее подчеркивание

## В Clipboard поменять сортировка (последние добавленные сущности дб сверху)

## В Clipboard добавить кнопку ручного удаления из списка (справа)

## Если в Clipboard добавляются такая же строка что и была ранее, то прошлую удаляем из списка и добавляем новую
Например, был "My name is Max (generator)" (или "My name is Max (rephrase)") и ты добавляешь тот же текст "My name is Max" из rephrase, то "My name is Max (generator)" пропадает из списка и добавляется "My name is Max (rephrase)"

## Реализовать добавление в Cliboard из output

## В Cliboard добавить компонент списка из PrimeNG вместо текущего простого списка


## Добавить валидации:

###  Если в генераторе не выбрано кол-во повторений то кнопка также disabled

###  В генераторе в инпут кол-ва повторений можно вводить только число
 -->

# Рефактор 1 часть

## Удалить *.spec.ts

## Clipboard-app переименовать

## Удалить ненужное:

### Стили

### В шаблонах

### Ts-code

## Переструктурировать приложение

### Menu-app не дб

### app-data переименовать 

<!-- ### providedIn: 'root' внимательно!!! /common/services -->

### Из app-content удалиьь app-data

### Использовать структуру

<app-component>
    <app-content>
        <app-tabs>
        <router-outlet> -> generator/meanings/rephrase
            <app-generator>
                <form...>
                <app-data>

### Структура папок

/src
    /common
        /components
            /app-header (который сейчас header-app)
            /app-clipboard
            /app-content
            /app-tabs
            /app-data
        /interfaces (все интерфейсы внешго взаимодействия)
        /services
    /generator
        generator.module.ts
        /components (generator.component.html....)
        <!-- /interfaces (все интерфейсы только для generator)
        /services -->
    /meanings
        meaning.module.ts
        /components
            /comp1
            /comp2
            /comp3
            /comp4
            /comp5
        <!-- /interfaces (все интерфейсы только для meanings)
        /services -->
    /rephrase
        rephrase.module.ts
        /components
        <!-- /interfaces (все интерфейсы только для rephrase)
        /services -->



 ### Generator, Meanings и Rephrase дб модулями и Поменять маршрутизацию чтобы она использовала модули

 вместо этого

 const routes: Routes = [
  {path: 'RephraseComponent', component: RephraseComponent},
  //{
  //  path: 'RephraseComponent',
  //  loadChildren: () => import('./rephrase/rephrase.module').then(m => m.RephraseModule)
  //},
  {path: 'MeaningsComponent', component: MeaningsComponent},
  {path: 'GeneratorComponent', component: GeneratorComponent},
  {path: '**', redirectTo:'RephraseComponent'}
];

изать https://angular.io/guide/lazy-loading-ngmodules