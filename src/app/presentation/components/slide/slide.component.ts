import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-slide',
  template: `
    <app-introduction-first *ngIf="slide.type === 'introductionFirst'" [content]="slide.content"></app-introduction-first>
    <app-introduction-second *ngIf="slide.type === 'introductionSecond'" [content]="slide.content"></app-introduction-second>
    <app-introduction-third *ngIf="slide.type === 'introductionThird'" [content]="slide.content"></app-introduction-third>
    <app-introduction-stats-first *ngIf="slide.type === 'introductionStatsFirst'" [content]="slide.content"></app-introduction-stats-first>
    <app-introduction-stats-second *ngIf="slide.type === 'introductionStatsSecond'" [content]="slide.content"></app-introduction-stats-second>
    <app-introduction-stats-third *ngIf="slide.type === 'introductionStatsThird'" [content]="slide.content"></app-introduction-stats-third>
    <app-environment-ide *ngIf="slide.type === 'environmentIde'" [content]="slide.content"></app-environment-ide>
    <app-environment-npm *ngIf="slide.type === 'environmentNpm'" [content]="slide.content"></app-environment-npm>
    <app-environment-ts-first *ngIf="slide.type === 'environmentTsFirst'" [content]="slide.content"></app-environment-ts-first>
    <app-environment-ts-second *ngIf="slide.type === 'environmentTsSecond'" [content]="slide.content"></app-environment-ts-second>
    <app-environment-cli *ngIf="slide.type === 'environmentCli'" [content]="slide.content"></app-environment-cli>
    <app-build *ngIf="slide.type === 'build'" [content]="slide.content"></app-build>
    <app-projects *ngIf="slide.type === 'projects'" [content]="slide.content"></app-projects>
    <div *ngIf="unknown(slide.type)" class="slide">
      <h1>Unknown slide type: </h1>
      <pre>{{slide | json}}</pre>
    </div>
  `,
})
export class SlideComponent {

  @Input() slide: any
  @Input() slideTypes: string[]

  unknown(type: string) {
    return !this.slideTypes.find(t => t === type)
  }
}
