import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ButtonIdGoiasComponent } from '@goias-ssi/button-id-goias';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, ButtonIdGoiasComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'smart';
}
