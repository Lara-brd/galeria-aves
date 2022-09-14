import { Component} from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent  {
  centered = false;
  disabled = false;
  unbounded = true;

  radius: number = 50;
  color: string = 'rgba(255, 255, 255, 0.3)';

}
