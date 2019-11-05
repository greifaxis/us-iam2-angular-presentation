import { Component } from '@angular/core';
import { AbstractSlideComponent } from '../abstract-slide/abstract-slide.component'

@Component({
  selector: 'app-introduction-third',
  template: `
  <app-abstract-slide [content]="content">
    <div class="row mb-1 justify-content-center">
      <div class="col-4  h3 font-weight-bold text-right pr-5">1997</div>
      <div class="col-4 h3">Javascript</div>
    </div>
    <div class="row mb-1 justify-content-center">
      <div class="col-4 h3 font-weight-bold text-right pr-5">2009</div>
      <div class="col-4 h3">AngularJS</div>
    </div>
    <div class="row mb-1 justify-content-center">
      <div class="col-4 h3 font-weight-bold text-right pr-5">2012</div>
      <div class="col-4 h3">Typescript</div>
    </div>
    <div class="row mb-1 justify-content-center">
      <div class="col-4 h3 font-weight-bold text-right pr-5">2014</div>
      <div class="col-4 h3">AngularDart</div>
    </div>
    <div class="row mb-1 justify-content-center">
      <div class="col-4 h3 font-weight-bold text-right pr-5">2014</div>
      <div class="col-4 h3">Angular 2</div>
    </div>
    <div class="row justify-content-center">
      <div class="col-4 h3 font-weight-bold text-right pr-5">2019</div>
      <div class="col-4 h3">Angular 8</div>
    </div>
  </app-abstract-slide>
  `,
  styles: []
})
export class IntroductionThirdComponent extends AbstractSlideComponent { }
