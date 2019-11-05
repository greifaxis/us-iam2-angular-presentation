import { Component } from '@angular/core';
import { AbstractSlideComponent } from '../abstract-slide/abstract-slide.component'

@Component({
  selector: 'app-environment-ts-first',
  template: `
  <app-abstract-slide [content]="content">
  <div class="row m-0">
  <div class="col-8">
    <div class="ml-1 row h4 mb-3">Angular 2 został napisany w TypeScript (nadzbiór języka JavaScript) i jest to główny język z jakiego korzysta. Po napisaniu każdej aplikacji w TypeScript trzeba ją dopiero skompilować do odpowiedniej wersji JavaScript. Typescript jest językiem darmowym typu open-source rozwijanym przez Microsoft.</div>
    <div class="ml-1 row h2">Zalety TypeScript:</div>
    <div class="ml-3 row h4 mb-2"><span class="font-weight-bold mr-2">1</span>silne typowanie i statyczne typowanie</div>
    <div class="ml-3 row h4 mb-2 d-inline-block"><span class="font-weight-bold mr-2">2</span>nie trzeba jak w JS uruchamiać programu, aby zweryfikować, co znajduje się w obiekcie</div>
    <div class="ml-3 row h4 d-inline-block"><span class="font-weight-bold mr-2">3</span>możliwość wnioskowania na temat kodu przez edytor jest nieporównywalnie większa</div>
    </div>
    <div class="col-3 offset-1 my-auto text-center">
       <img class="img-fluid" [ngStyle]="{'height':'auto','width':'auto'}" src="assets/typescript.svg" />
    </div>
  </div>
  </app-abstract-slide>
  `,
  styles: []
})
export class EnvironmentTsFirstComponent extends AbstractSlideComponent { }
