import { Component } from '@angular/core';
import { AbstractSlideComponent } from '../abstract-slide/abstract-slide.component'

@Component({
  selector: 'app-introduction-second',
  template: `
  <app-abstract-slide [content]="content">
  <div class="row m-0 p-0">
    <div class="col">
      <div class="row mb-3">
        <div class="col-2 my-auto text-center">
          <h1 class="font-weight-bold">1</h1>
        </div>
        <div class="col-10">
          <div class="row h3">Modularność</div>
          <div class="row h5">Reużywalność, separacja, czytelność</div>
        </div>
      </div>
      <div class="row mb-3">
      <div class="col-2 my-auto text-center">
      <h1 class="font-weight-bold">2</h1>
    </div>
        <div class="col-10">
        <div class="row h3">Wieloplatformowość</div>
        <div class="row h5">Strony WWW, SPA, PWA, aplikacje mobilne i desktopowe</div>
        </div>
      </div>
      <div class="row">
      <div class="col-2 my-auto text-center">
      <h1 class="font-weight-bold">3</h1>
    </div>
        <div class="col-10">
        <div class="row h3">Zorientowanie na komponenty</div>
        <div class="row h5">Lepsza separacja logiki od widoków</div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="row mb-3">
      <div class="col-2 my-auto text-center">
      <h1 class="font-weight-bold">4</h1>
    </div>
        <div class="col-10">
        <div class="row h3">SPA oraz SPI</div>
        <div class="row h5">Brak przeładowań i aktualizacja na żywo</div>
        </div>
      </div>
      <div class="row mb-3">
      <div class="col-2 my-auto text-center">
      <h1 class="font-weight-bold">5</h1>
    </div>
        <div class="col-10">
        <div class="row h3">Typescript</div>
        <div class="row h5">Silne typowanie i inne zalety</div>
        </div>
      </div>
      <div class="row">
      <div class="col-2 my-auto text-center">
      <h1 class="font-weight-bold">6</h1>
    </div>
        <div class="col-10">
        <div class="row h3">Własne dyrektywy i tagi</div>
        <div class="row h5">Dodatki do tagów HTML i ich rozszerzanie</div>
        </div>
      </div>
    </div>
  </div>
  </app-abstract-slide>
  `,
  styles: []
})
export class IntroductionSecondComponent extends AbstractSlideComponent { }
