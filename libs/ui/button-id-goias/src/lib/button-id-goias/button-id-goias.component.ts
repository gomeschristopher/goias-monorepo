import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypographyComponent } from '@goias-ssi/typography';

@Component({
  selector: 'go-button-id-goias',
  standalone: true,
  imports: [
    CommonModule,
    TypographyComponent,
  ],
  templateUrl: './button-id-goias.component.html',
  styleUrl: './button-id-goias.component.css',
})
export class ButtonIdGoiasComponent {
  /**
   * Button label
   */
  @Input() label: string | null = null;
  @Input() variant: 'primary' | 'secondary' | 'tertiary' = 'primary';
  /**
   * Disabled or enabled button
   */
  @Input() disabled = false;

  getClasses(): string {
    return this.variant;
  }
}
