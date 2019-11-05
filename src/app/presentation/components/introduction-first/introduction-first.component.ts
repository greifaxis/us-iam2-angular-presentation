import { Component } from '@angular/core';
import { AbstractSlideComponent } from '../abstract-slide/abstract-slide.component'

@Component({
  selector: 'app-introduction-first',
  template: `
  <app-abstract-slide [content]="content">
  <div class="row m-0">
  <div class="col-8">
    <h2 class="mb-5">
      Angular to framework, wspierany i firmowany przez Google, na którym opiera się wiele stron, aplikacji webowych i aplikacji mobilnych.
    </h2>
    <h2 class="">
      Uniwersalność Angulara i jego architektura powoduje, że w ostatnich latach stał się bardzo popularny, lubiany przez developerów i poszukiwany przez pracodawców. Niedawno pojawiła się jego kolejna wersja – Angular 8.
    </h2>
    </div>
    <div class="col-4 my-auto text-center">
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" alt="" class="img-fluid">
    </div>
  </div>
  </app-abstract-slide>
  `,
  styles: []
})
export class IntroductionFirstComponent extends AbstractSlideComponent { }
