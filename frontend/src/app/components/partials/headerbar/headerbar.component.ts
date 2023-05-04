import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-headerbar',
  templateUrl: './headerbar.component.html',
  styleUrls: ['./headerbar.component.scss'],
})
export class HeaderbarComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'pagesIcon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../../assets/svg-icons/pagesMenu.svg'
      )
    );
  }
}
