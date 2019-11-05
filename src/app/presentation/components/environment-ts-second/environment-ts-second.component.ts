import { Component } from '@angular/core';
import { AbstractSlideComponent } from '../abstract-slide/abstract-slide.component'

@Component({
  selector: 'app-environment-ts-second',
  template: `
  <app-abstract-slide [content]="content">
  <div class="row my-5">
    <div class="col h2 font-weight-bold text-center">Silne typowanie</div>
    <div class="col offset-1 h2 font-weight-bold text-center">Statyczne typowanie</div>
  </div>
  <div class="row">
    <div class="col"><prism *ngIf="content.code && content.language" [code]="content.code" [language]="content.language"></prism></div>
    <div class="col offset-1"><prism *ngIf="content.codeb && content.languageb" [code]="content.codeb" [language]="content.languageb"></prism></div>
  </div>
  </app-abstract-slide>
  `,
  styles: []
})
export class EnvironmentTsSecondComponent extends AbstractSlideComponent { }
