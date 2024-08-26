import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CoupleComponent } from "./components/couple/couple.component";
import { EventComponent } from "./components/event/event.component";
import { HistoryComponent } from "./components/history/history.component";
import { GaleryComponent } from "./components/galery/galery.component";
import { CounterComponent } from "./components/counter/counter.component";
import { TestimonialComponent } from "./components/testimonial/testimonial.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavbarComponent, CoupleComponent, EventComponent, HistoryComponent, GaleryComponent, CounterComponent, TestimonialComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Wedding';
}
