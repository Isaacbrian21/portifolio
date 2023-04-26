import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['pt-BR', 'en-US', 'es-ES'])
    this.translate.setDefaultLang('pt-BR')
    this.translate.use('pt-BR')
  }

  changeLanguage(language: string){

    this.translate.use(language);
  }
}
