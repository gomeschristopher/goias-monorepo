import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'button-id-goias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-id-goias.component.html',
  styleUrl: './button-id-goias.component.css',
})
export class ButtonIdGoiasComponent {
  @Input() label: string | null = null;
  @Input() variant: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @Input() disabled = false;

  getClasses(): string {
    return this.variant;
  }
}
