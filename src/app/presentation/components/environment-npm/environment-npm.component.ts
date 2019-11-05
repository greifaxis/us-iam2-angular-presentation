import { Component } from '@angular/core';
import { AbstractSlideComponent } from '../abstract-slide/abstract-slide.component'

@Component({
  selector: 'app-environment-npm',
  template: `
  <app-abstract-slide [content]="content">
  <div class="row m-0">
  <div class="col-8">
    <h2 class="mb-5">
      NPM to manager pakietów używany do zarządzania zależnościami projektów. Jest aplikacją wiersza poleceń, za pomocą której można instalować aplikacje dostępne w repozytorium npm. Instaluje się go razem ze środowiskiem Node.JS.
    </h2>
    <prism *ngIf="content.code && content.language" [code]="content.code" [language]="content.language"></prism>
  </div>
    <div class="col-4 my-auto text-center">
      <img src="assets/npm.svg" alt="" class="img-fluid">
    </div>
  </div>
  </app-abstract-slide>
  `,
  styles: []
})
export class EnvironmentNpmComponent extends AbstractSlideComponent { }
