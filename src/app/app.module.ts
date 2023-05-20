import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderAppComponent } from './common/components/header/header-app.component';
import { ClipboardListComponent } from './common/components/clipboard-list/clipboard-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { RephraseComponent } from './rephrase/components/rephrase.component';
// import { MeaningsComponent } from './meanings/components/meanings.component';
// import { GeneratorComponent } from './generator/components/generator.component';
import { TabsComponent } from './common/components/tabs/tabs.component';
import { ContentComponent } from './common/components/content/content.component';
// import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { TabMenuModule } from 'primeng/tabmenu';
import { RadioButtonModule } from 'primeng/radiobutton';
// import { ToastModule } from 'primeng/toast';
// import { InputTextareaModule } from 'primeng/inputtextarea';
// import { InputOutputComponent } from './common/components/input-output/input-output.component';
import { MessageService } from 'primeng/api';
import { TooltipModule } from 'primeng/tooltip';
import { RippleModule } from 'primeng/ripple';
// import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';

const routes: Routes = [
  {
    path: 'RephraseComponent',
    loadChildren: () => import('./rephrase/rephrase.module').then(m => m.RephraseModule)
  },
  {
    path: 'MeaningsComponent',
    loadChildren: () => import('./meanings/meanings.module').then(m => m.MeaningsModule)
  },
  {
    path: 'GeneratorComponent',
    loadChildren: () => import('./generator/generator.module').then(m => m.GeneratorModule)
  },
  { path: '**', redirectTo: 'RephraseComponent' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderAppComponent,
    ClipboardListComponent,
    TabsComponent,
    ContentComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    TabViewModule,
    TabMenuModule,
    RadioButtonModule,
    BrowserAnimationsModule,
    TooltipModule,
    RippleModule,
    ListboxModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})

export class AppModule { }
