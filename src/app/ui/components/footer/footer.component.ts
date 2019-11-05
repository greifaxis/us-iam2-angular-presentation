import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <nav class="navbar fixed-bottom navbar-dark bg-dark">
      <div class="navbar-text m-auto">
          <a [attr.href]="linkProject" target="_blank">{{year}} &copy; {{author}}</a>
          <a [attr.href]="linkScaffolding" target="_blank" class="text-muted">{{textFooter}}</a>
      </div>
    </nav>
  `,
  styles: []
})
export class FooterComponent {
  public linkProject = 'https://github.com/greifaxis'
  public linkScaffolding = 'https://github.com/beeman/angular-presentations'
  public author = 'Gala & Malinowski'
  public year = '2019'
  public textFooter = 'Stworzone dzięki Angular Presentations'
}
