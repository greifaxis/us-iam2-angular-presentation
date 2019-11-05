import { Component } from '@angular/core';
import { AbstractSlideComponent } from '../abstract-slide/abstract-slide.component'

@Component({
  selector: 'app-environment-cli',
  template: `
  <app-abstract-slide [content]="content">
  <div class="row">
    <div class="col">
      <div class="row">
        <div class="col ml-3">
        <div class="row h4 mb-2">Angular CLI jest narzędziem służącym do tworzenia aplikacji Angular i zarządzania nią. Udostępnia możliwości:</div>
        <div class="row h4 mb-1 ml-2">Utworzenie projektu od zera</div>
        <div class="row h4 mb-1 ml-2">Dodanie elementów frameworku (komponentów, routingu itd.)</div>
        <div class="row h4 mb-1 ml-2">Obsługa aplikacji</div>
        <div class="row h4 mb-1 ml-2">Uruchamianie testów jednostkowych i testów e2e</div>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col">  <prism *ngIf="content.code && content.language" [code]="content.code" [language]="content.language"></prism></div>
      </div>
      <div class="row">
      <div class="col">  <prism [code]="'ng serve'" [language]="'markup'"></prism></div>
    </div>
    </div>
  </div>
  </app-abstract-slide>
  `,
  styles: []
})
export class EnvironmentCliComponent extends AbstractSlideComponent { }
