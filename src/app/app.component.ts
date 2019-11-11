import { Component } from '@angular/core';

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls:   ['./app.component.scss']
})
export class AppComponent {
  public title = 'Herbs and Spices';
  public herbsAndSpices = [
    {
      name:      'Lemon Thyme',
      type:      'Herb',
      latinName: 'Thymus citriodorus'
    },
    {
      name:      'Basil',
      type:      'Herb',
      latinName: 'Ocimum basilicum'
    },
    {
      name:      'Spearmint',
      type:      'Herb',
      latinName: 'Mentha spicata'
    },
    {
      name:      'Rosemary',
      type:      'Herb',
      latinName: 'Salvia rosmarinus'
    },
    {
      name:      'Black Pepper',
      type:      'Spice',
      latinName: 'Piper nigrum'
    },
    {
      name:      'Ginger',
      type:      'Spice',
      latinName: 'Zingiber officinale'
    }
  ];
}
