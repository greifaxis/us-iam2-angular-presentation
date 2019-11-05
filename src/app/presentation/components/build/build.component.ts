import { Component } from '@angular/core';
import { AbstractSlideComponent } from '../abstract-slide/abstract-slide.component'


@Component({
  selector: 'app-build',
  template: `
  <app-abstract-slide [content]="content">
  <div class="row mb-1 justify-content-center pl-2">
    <div class="col-1 h2 font-weight-bold text-right pr-4">1</div>
    <div class="col h2">Komponenty</div>
  </div>
  <div class="row mb-1 justify-content-center pl-2">
    <div class="col-1 h2 font-weight-bold text-right pr-4">2</div>
    <div class="col h2">Moduły</div>
  </div>
    <div class="row mb-1 justify-content-center pl-2">
    <div class="col-1 h2 font-weight-bold text-right pr-4">3</div>
    <div class="col h2">Serwisy</div>
  </div>
  <div class="row mb-1 justify-content-center pl-2">
  <div class="col-1 h2 font-weight-bold text-right pr-4">4</div>
  <div class="col h2">Router</div>
</div>
  <div class="row mb-1 justify-content-center pl-2">
    <div class="col-1 h2 font-weight-bold text-right pr-4">5</div>
    <div class="col h2">Dyrektywy: <code>NgFor</code>, <code>NgIf</code>, własne itd.</div>
  </div>
</app-abstract-slide>
  `,
  styles: []
})
export class BuildComponent extends AbstractSlideComponent { }
