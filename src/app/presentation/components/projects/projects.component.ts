import { Component, Input } from '@angular/core';
import { AbstractSlideComponent } from '../abstract-slide/abstract-slide.component'

@Component({
  selector: 'app-projects',
  template: `
  <app-abstract-slide [content]="content">
  <div class="row mb-1 justify-content-center pl-2">
    <div class="col-1 h2 font-weight-bold text-right pr-4">1</div>
    <div class="col h2">Forbes</div>
  </div>
  <div class="row mb-1 justify-content-center pl-2">
    <div class="col-1 h2 font-weight-bold text-right pr-4">2</div>
    <div class="col h2">ING</div>
  </div>
  <div class="row mb-1 justify-content-center pl-2">
  <div class="col-1 h2 font-weight-bold text-right pr-4">3</div>
  <div class="col h2">Microsoft Office 365 Dashboard</div>
  </div>
  <div class="row mb-1 justify-content-center pl-2">
    <div class="col-1 h2 font-weight-bold text-right pr-4">4</div>
    <div class="col h2">The Guardian</div>
  </div>
  <div class="row mb-1 justify-content-center pl-2">
  <div class="col-1 h2 font-weight-bold text-right pr-4">5</div>
  <div class="col h2">Netflix</div>
</div>
<div class="row mb-1 justify-content-center pl-2">
<div class="col offset-1 h2 font-weight-bold pr-5">i wiele innych...</div>
</div>
</app-abstract-slide>
  `,
  styles: []
})
export class ProjectsComponent extends AbstractSlideComponent { }
