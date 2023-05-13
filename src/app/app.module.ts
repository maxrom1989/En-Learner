import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderAppComponent } from './menu-app/header/header-app.component';
import { ClipboardAppComponent } from './clipboard-app/clipboard-app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RephraseComponent } from './menu-app/tabs/rephrase/rephrase.component';
import { MeaningsComponent } from './menu-app/tabs/meanings/meanings.component';
import { GeneratorComponent } from './menu-app/tabs/generator/generator.component';
import { TabsComponent } from './menu-app/tabs/tabs.component';
import { ContentComponent } from './menu-app/content/content.component';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { TabMenuModule } from 'primeng/tabmenu';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';

const routes: Routes = [
  {path: 'RephraseComponent', component: RephraseComponent},
  {path: 'MeaningsComponent', component: MeaningsComponent},
  {path: 'GeneratorComponent', component: GeneratorComponent},
  {path: '**', redirectTo:'RephraseComponent'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderAppComponent,
    ClipboardAppComponent,
    RephraseComponent,
    MeaningsComponent,
    GeneratorComponent,
    TabsComponent,
    ContentComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ButtonModule,
    TabViewModule,
    TabMenuModule,
    RadioButtonModule,
    BrowserAnimationsModule,
    SplitButtonModule,
    ToastModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
