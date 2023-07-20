import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: '/uploads/promo1.jpg',
    header: 'Sprawdź nasze produkty',
    caption: 'Have fun with thousands of people!',
    alt: 'Have fun with thousands of people!',
  },
  {
    src: '/uploads/promo2.jpg',
    altText: 'Listen to the greatest hits!',
    caption: 'Take a part in phenomenal performances.',
    header: 'Listen to the greatest hits',
  },
  {
    src: '/uploads/promo3.jpg',
    altText: 'Meet stars!',
    caption: 'Meet the biggest music starts live!',
    header: 'Meet stars!',
  }
];

const Carousel = () => <UncontrolledCarousel className="promoCarousel" items={items} />;

export default Carousel;