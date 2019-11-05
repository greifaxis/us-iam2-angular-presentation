import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { PrismModule } from '@sgbj/angular-prism'
import { PresentationComponent } from './container/presentation/presentation.component';
import { SlidesService } from './services/slides.service';
import { SlideComponent } from './components/slide/slide.component';
import { AbstractSlideComponent } from './components/abstract-slide/abstract-slide.component';

import 'prismjs/prism';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-markup';
import { IntroductionFirstComponent } from './components/introduction-first/introduction-first.component';
import { IntroductionSecondComponent } from './components/introduction-second/introduction-second.component';
import { IntroductionThirdComponent } from './components/introduction-third/introduction-third.component';
import { IntroductionStatsFirstComponent } from './components/introduction-stats-first/introduction-stats-first.component';
import { IntroductionStatsSecondComponent } from './components/introduction-stats-second/introduction-stats-second.component';
import { IntroductionStatsThirdComponent } from './components/introduction-stats-third/introduction-stats-third.component';
import { EnvironmentIdeComponent } from './components/environment-ide/environment-ide.component';
import { EnvironmentNpmComponent } from './components/environment-npm/environment-npm.component';
import { EnvironmentTsFirstComponent } from './components/environment-ts-first/environment-ts-first.component';
import { EnvironmentTsSecondComponent } from './components/environment-ts-second/environment-ts-second.component';
import { EnvironmentCliComponent } from './components/environment-cli/environment-cli.component';
import { BuildComponent } from './components/build/build.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  { path: '', component: PresentationComponent },
  { path: ':slideId', component: PresentationComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PrismModule,
  ],
  declarations: [
    PresentationComponent,
    SlideComponent,
    AbstractSlideComponent,
    IntroductionFirstComponent,
    IntroductionSecondComponent,
    IntroductionThirdComponent,
    IntroductionStatsFirstComponent,
    IntroductionStatsSecondComponent,
    IntroductionStatsThirdComponent,
    EnvironmentIdeComponent,
    EnvironmentNpmComponent,
    EnvironmentTsFirstComponent,
    EnvironmentTsSecondComponent,
    EnvironmentCliComponent,
    BuildComponent,
    ProjectsComponent,
  ],
  providers: [SlidesService]
})
export class PresentationModule { }
