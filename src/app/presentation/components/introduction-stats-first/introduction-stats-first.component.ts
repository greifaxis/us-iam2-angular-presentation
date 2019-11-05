import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-introduction-stats-first',
  template: `
  <div class="slide">
    <div class="row mt-4 mb-2">
    <div class="col">
    <h3 class="font-weight-bold">Popularność języków związanych z Web na podstawie liczby pytań w StackOverflow</h3>
    </div>
    </div>
    <div class="row">
      <div class="col text-center">
      <img class="" [ngStyle]="{'height':'400px','width':'auto'}" src="assets/image1.png" />
      </div>
    </div>
  </div>
  `,
  styles: []
})
export class IntroductionStatsFirstComponent {
  @Input() content
}
