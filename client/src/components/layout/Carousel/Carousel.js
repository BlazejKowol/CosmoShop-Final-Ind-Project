import { UncontrolledCarousel } from 'reactstrap';
import './Carousel.scss';

const items = [
  {
    src: '/uploads/promo1.jpg',
    header: 'Sprawdź nasze produkty',
    caption: 'Uznane marki w najlepszych cenach!',
    alt: 'Sprawdź nasze produkty',
  },
  {
    src: '/uploads/promo2.jpg',
    altText: 'Zadbaj o siebie',
    caption: 'Produkty do twarzy -20%',
    header: 'Zadbaj o siebie',
  },
  {
    src: '/uploads/promo3.jpg',
    altText: 'Resibo!',
    caption: 'Kremy, toniki, mydła',
    header: 'Poznaj produkty marki Resibo',
  }
];

const Carousel = () => <UncontrolledCarousel className="Carousel" items={items} />;

export default Carousel;