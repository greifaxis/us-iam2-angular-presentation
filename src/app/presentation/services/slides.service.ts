import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'

const slideTypes = [
  'introductionFirst',
  'introductionSecond',
  'introductionThird',
  'introductionStatsFirst',
  'introductionStatsSecond',
  'introductionStatsThird',
  'environmentIde',
  'environmentNpm',
  'environmentTsFirst',
  'environmentTsSecond',
  'environmentCli',
  'build',
  'projects'
]

const slide = (type: string, content: any) => ({ type, content })
const introductionFirst = (title: string) => slide('introductionFirst', { title })
const introductionSecond = (title: string) => slide('introductionSecond', { title })
const introductionThird = (title: string) => slide('introductionThird', { title })
const introductionStatsFirst = () => slide('introductionStatsFirst', {})
const introductionStatsSecond = () => slide('introductionStatsSecond', {})
const introductionStatsThird = () => slide('introductionStatsThird', {})
const environmentIde = (title: string) => slide('environmentIde', { title })
const environmentNpm = (title: string, code: string, language: string) => slide('environmentNpm', { title, code, language })
const environmentTsFirst = (title: string) => slide('environmentTsFirst', { title })
const environmentTsSecond = (title: string, code: string, language: string, codeb: string, languageb: string) => slide('environmentTsSecond', { title, code, language, codeb, languageb })
const environmentCli = (title: string, code: string, language: string) => slide('environmentCli', { title, code, language })
const build = (title: string) => slide('build', { title })
const projects = (title: string) => slide('projects', { title })

@Injectable()
export class SlidesService {

  public slides = [

    introductionFirst(
      'Co to jest ten cały Angular?'
    ),
    introductionSecond(
      'Najistotniejsze cechy'
    ),
    introductionThird(
      'Trochę historii...'
    ),
    introductionStatsFirst(),
    introductionStatsSecond(),
    introductionStatsThird(),
    environmentIde(
      'Najpopularniejsze IDE'
    ),
    environmentNpm(
      'O npm słów kilka...',
      'npm install @sgbj/angular-prism --save',
      'markup'
    ),
    environmentTsFirst(
      'Typescript',
    ),
    environmentTsSecond(
      'Typescript 2',
      `let dog: string = 'brutus';
let dogAge: number = 5;
let dogLegs: number = 'trzy'; //Error`,
      'typescript',
      `let dog = 'brutus';
dog = 'reksio';
dog = 5; //Error`,
      'typescript'
    ),
    environmentCli(
      'Angular CLI',
      'ng generate component presentation/components/environment-cli',
      'markup'
    ),
    build(
      'Podstawy budowy aplikacji'
    ),
    projects(
      'Znane projekty'
    ),
  ]

  public getSlides() {
    return Observable.of(this.slides)
  }

  public getSlideTypes() {
    return slideTypes
  }
}
