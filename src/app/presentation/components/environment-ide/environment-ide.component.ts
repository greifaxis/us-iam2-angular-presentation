import { Component } from '@angular/core';
import { AbstractSlideComponent } from '../abstract-slide/abstract-slide.component'

@Component({
  selector: 'app-environment-ide',
  template: `
  <app-abstract-slide [content]="content">
  <div class="container">
    <div class="row mb-2 justify-content-center">
      <div class="col-4 border border-danger mr-2">
        <div class="row justify-content-center h3">Visual Studio Code</div>
        <div class="row justify-content-center  pb-2"><img class="" [ngStyle]="{'height':'128px','width':'auto'}" src="assets/l_vs_code_angular.png" /></div>
      </div>
      <div class="col-4 border border-danger">
        <div class="row justify-content-center h3">Sublime Text</div>
        <div class="row justify-content-center  pb-2"><img class="" [ngStyle]="{'height':'128px','width':'auto'}" src="assets/l_sublime_text_angular.png" /></div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-4 border border-danger mr-2">
        <div class="row justify-content-center h3">IntelliJ WebStorm</div>
        <div class="row justify-content-center  pb-2"><img class="" [ngStyle]="{'height':'128px','width':'auto'}" src="assets/l_webstorm_angular.png" /></div>
      </div>
      <div class="col-4 border border-danger">
        <div class="row justify-content-center h3">Atom</div>
        <div class="row justify-content-center pb-2"><img class="" [ngStyle]="{'height':'128px','width':'auto'}" src="assets/l_atom_angular.png" /></div>
      </div>
    </div>
  </div>
  </app-abstract-slide>
  `,
  styles: []
})
export class EnvironmentIdeComponent extends AbstractSlideComponent { }
