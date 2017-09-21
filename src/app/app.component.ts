import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  emails: object[] = [{from: 'microsoft@bill.gates', priority: true, subject: 'upgrade your Windows to Doors', content: 'try my new OS, we are calling it Doors. much better than windows'},
  {from: 'chairman@board.borg', priority: true, subject: 'dirty joke', content: 'so dirty omg! lol okay... so, this horse, huh-huh, so he fell down in the mud!'},
  {from: 'lol@cats.lol', priority: false, subject: 'got milk?', content: "meow"},
  {from: 'admin@broski.gov', priority: false, subject: 'invest in doors!', content: 'omg, M$ finally released my dream product: DOORS OS.... the first microsoft OS designed specifically for jailbroken iphones!!'}]
}
