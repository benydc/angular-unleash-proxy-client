import { Component } from '@angular/core';

@Component({
  selector: 'app-c',
  template: `<h3>Component C</h3>
    <p>This component is protected by feature flag(s)</p>`,
  standalone: true
})
export class CComponent {}