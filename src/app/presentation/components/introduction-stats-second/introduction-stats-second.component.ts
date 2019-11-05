import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-introduction-stats-second',
  template: `
  <div class="slide">
    <div class="row mt-4 mb-2">
    <div class="col">
    <h3 class="font-weight-bold">Wykorzystanie frameworków wśród profesjonalistów w 2019 (ankieta StackOverflow)</h3>
    </div>
    </div>
    <div class="row">
      <div class="col text-center">
      <img class="" [ngStyle]="{'height':'400px','width':'auto'}" src="assets/image2.png" />
      </div>
    </div>
  </div>
  `,
  styles: []
})
export class IntroductionStatsSecondComponent { @Input() content }
