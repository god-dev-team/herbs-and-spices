import { Component } from '@angular/core';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls:   ['./app.component.scss']
})
export class AppComponent {
  public herbsAndSpicesLogo = faSeedling;
  public title = 'Herbs and Spices';
  public herbsAndSpices = [
    {
      name:        'Lemon Thyme',
      type:        'Herb',
      latinName:   'Thymus citriodorus',
      description: 'Thymus citriodorus, the lemon thyme or citrus thyme, is a lemon-scented evergreen mat-forming perennial. There has been a great deal of confusion over the plant\'s correct name and origin. Recent DNA analysis suggests that it is not a hybrid or cross, but a distinct species as it was first described in 1811.'
    },
    {
      name:        'Basil',
      type:        'Herb',
      latinName:   'Ocimum basilicum',
      description: 'Basil is native to tropical regions from central Africa to Southeast Asia. It is a tender plant, and is used in cuisines worldwide. Depending on the species and cultivar, the leaves may taste somewhat like anise, with a strong, pungent, often sweet smell.'
    },
    {
      name:        'Spearmint',
      type:        'Herb',
      latinName:   'Mentha spicata',
      description: 'Spearmint, also known as garden mint, common mint, lamb mint and mackerel mint, is a species of mint, Mentha spicata, native to Europe and southern temperate Asia, extending from Ireland in the west to southern China in the east.'
    },
    {
      name:        'Rosemary',
      type:        'Herb',
      latinName:   'Salvia rosmarinus',
      description: 'Salvia rosmarinus, commonly known as rosemary, is a woody, perennial herb with fragrant, evergreen, needle-like leaves and white, pink, purple, or blue flowers, native to the Mediterranean region.'
    },
    {
      name:        'Black Pepper',
      type:        'Spice',
      latinName:   'Piper nigrum',
      description: 'Black pepper (Piper nigrum) is a flowering vine in the family Piperaceae, cultivated for its fruit, known as a peppercorn, which is usually dried and used as a spice and seasoning. When fresh and fully mature, it is about 5 mm (0.20 in) in diameter and dark red, and contains a single seed, like all drupes.'
    },
    {
      name:        'Ginger',
      type:        'Spice',
      latinName:   'Zingiber officinale',
      description: 'Ginger (Zingiber officinale) is a flowering plant whose rhizome, ginger root or ginger, is widely used as a spice and a folk medicine. It is a herbaceous perennial which grows annual pseudostems (false stems made of the rolled bases of leaves) about one meter tall bearing narrow leaf blades.'
    }
  ];
}
