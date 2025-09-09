import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { TestComponent } from "./test/test.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [TestComponent]
})
export class AppComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  title = 'frontend';

  constructor() {
    console.log('👷‍♂️ Jestem konstruktorem. Uruchamiam się przy tworzeniu instancji komponentu. Tutaj wstrzykuję zależności i inicjalizuję pola.');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('🔄 Jestem ngOnChanges. Uruchamiam się za każdym razem, gdy zmieniają się dane wejściowe (@Input).');
  }

  ngOnInit(): void {
    console.log('🚀 Jestem ngOnInit. Odpalam się raz po pierwszym ngOnChanges. Idealny moment na inicjalizację logiki komponentu.');
  }

  ngDoCheck(): void {
    console.log('🕵️ Jestem ngDoCheck. Uruchamiam się przy każdej detekcji zmian. Pozwalam na ręczne sprawdzanie zmian.');
  }

  ngAfterContentInit(): void {
    console.log('📦 Jestem ngAfterContentInit. Odpalam się po wstawieniu zawartości zewnętrznej (ng-content) do komponentu.');
  }

  ngAfterContentChecked(): void {
    console.log('🔍 Jestem ngAfterContentChecked. Uruchamiam się po każdej detekcji zmian zawartości zewnętrznej.');
  }

  ngAfterViewInit(): void {
    console.log('🖼️ Jestem ngAfterViewInit. Odpalam się po inicjalizacji widoku komponentu i jego dzieci. Tu masz dostęp do elementów DOM przez ViewChild.');
  }

  ngAfterViewChecked(): void {
    console.log('🔁 Jestem ngAfterViewChecked. Uruchamiam się po każdej detekcji zmian widoku komponentu.');
  }

  ngOnDestroy(): void {
    console.log('🧹 Jestem ngOnDestroy. Odpalam się tuż przed zniszczeniem komponentu. To czas na sprzątanie: odpinanie subskrypcji, timerów itd.');
  }
}
