import { LOCALE_ID, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { CORPORATE_THEME, COSMIC_THEME, DARK_THEME, DEFAULT_THEME, NbAccordionModule, NbActionsModule, NbAlertModule, NbButtonGroupModule, NbButtonModule, NbCardModule, NbChatModule, NbCheckboxModule, NbContextMenuModule, NbDatepickerModule, NbDialogModule, NbFormFieldModule, NbIconLibraries, NbIconModule, NbInputModule, NbLayoutModule, NbListModule, NbMenuModule, NbPopoverModule, NbProgressBarModule, NbRadioModule, NbRouteTabsetModule, NbSelectModule, NbSidebarModule, NbStepperModule, NbTabsetModule, NbTagModule, NbThemeModule, NbTimepickerModule, NbToastrModule, NbToggleModule, NbTooltipModule, NbUserModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import zh from '@angular/common/locales/zh';
import en from '@angular/common/locales/en';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LayoutComponent } from './compoents/layout/layout.component';
import { MATERIAL_LIGHT_THEME } from './styles/material-light.theme';
import { MATERIAL_DARK_THEME } from './styles/material-dark.theme';
import { HeaderComponent } from './compoents/header/header.component';
import { FooterComponent } from './compoents/footer/footer.component';
import { NgxEchartsModule } from 'ngx-echarts';


const COMPONENTS = [
  LayoutComponent,
  HeaderComponent,
  FooterComponent,
]

const MODULES = [
  CommonModule,
  FormsModule,
  TranslateModule,
  RouterModule,
  NbAccordionModule,
  NbActionsModule,
  NbAlertModule,
  NbButtonModule,
  NbButtonGroupModule,
  NbCardModule,
  NbCheckboxModule,
  NbContextMenuModule,
  NbDatepickerModule,
  NbDialogModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule, 
  NbMenuModule,
  NbProgressBarModule,
  NbPopoverModule,
  NbRadioModule,
  NbRouteTabsetModule,
  NbSelectModule,
  NbSidebarModule,
  NbStepperModule,
  NbTabsetModule,
  NbTagModule,
  NbDatepickerModule,
  NbTimepickerModule,
  NbToggleModule,
  NbToastrModule,
  NbTooltipModule,
  NbUserModule,

  NgxEchartsModule
]

const PROVIDERS=[
  NbThemeModule.forRoot(
    {
      name: 'default',
    },
    [DEFAULT_THEME,DARK_THEME,COSMIC_THEME,CORPORATE_THEME,MATERIAL_LIGHT_THEME,MATERIAL_DARK_THEME]
  ).providers,
  {provide:LOCALE_ID,useValue:navigator.language.match(/zh-CN|en-US/)?navigator.language:'en-US'},
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...COMPONENTS,...MODULES]

})
export class ThemeModule { 
  constructor(private translate: TranslateService,private iconsLibrary:NbIconLibraries){
    this.iconsLibrary.registerFontPack('font-awesome',{packClass:'fa',iconClassPrefix:'fa'});
    this.iconsLibrary.setDefaultPack("font-awesome");

    registerLocaleData(en,'en-US');
    registerLocaleData(zh,'zh-CN');

    this.translate.addLangs(["zh-CN","en-US"]);
    this.translate.setDefaultLang("zh-CN");
    this.translate.use(navigator.language.match(/zh-CN|en-US/)?navigator.language:'zh-CN');
  }

  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [PROVIDERS],
    };
  }
}
