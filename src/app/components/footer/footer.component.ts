import { Component } from '@angular/core';
import { faGithub, IconDefinition } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})

export class FooterComponent {

  public github: IconDefinition = faGithub;

  constructor() { }

  public GitHub = () => window.open("https://github.com/CharlesPeterMcCarthy", "_blank");

}
