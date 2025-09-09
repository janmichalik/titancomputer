import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  @HostBinding('class') bemBlockClass = 'app-test';
  title: string = 'Witam'
  click: string = 'Kliknij mnie'
}
