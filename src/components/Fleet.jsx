import CarCard from './CarCard';
import './Fleet.css';

const WHATSAPP_NUMBER = '60172975568'; // +60 17-297 5568

const cars = [
  {
    id: 'myvi-h',
    name: 'Perodua Myvi H 1.5',
    year: '2020',
    category: 'Hatchback',
    image: '/myvi.jpeg',
    pricing: [
      { label: '1 Hari',  price: 'RM 130'   },
      { label: '3 Hari',  price: 'RM 350'   },
      { label: '1 Bulan', price: 'RM 1,700' },
    ],
    seats: 5,
    transmission: 'Automatik',
    fuel: 'Petrol',
    features: ['Sporty Design', 'ASA 2.0', 'Skrin Sentuh', 'Android Auto'],
    badge: 'Berpatutan',
    badgeColor: 'green',
  },
  {
    id: 'axia-myvi',
    name: 'Perodua Axia / Myvi',
    category: 'City Car',
    image: '/axiamyvi.jpeg',
    pricing: [
      { label: '1 Hari',  price: 'RM 150'   },
      { label: '3 Hari',  price: 'RM 400'   },
      { label: '1 Bulan', price: 'RM 1,900' },
    ],
    seats: 5,
    transmission: 'Automatik',
    fuel: 'Petrol',
    features: ['Ekonomi', 'Easy Park', 'Kamera Belakang', 'USB Charging'],
    badge: 'Paling Jimat',
    badgeColor: 'green',
  },
  {
    id: 'honda-city',
    name: 'Honda City',
    category: 'Sedan',
    image: '/hondacity24.jpeg',
    pricing: [
      { label: '1 Hari',  price: 'RM 250'   },
      { label: '3 Hari',  price: 'RM 650'   },
      { label: '1 Bulan', price: 'RM 2,800' },
    ],
    seats: 5,
    transmission: 'Automatik',
    fuel: 'Petrol',
    features: ['Honda Sensing', 'Skrin Sentuh', 'Apple CarPlay', 'Lane Assist'],
    badge: 'Best Seller',
    badgeColor: 'blue',
  },
  {
    id: 'nissan-serena',
    name: 'Nissan Serena',
    category: 'MPV Keluarga',
    image: '/nissanserena.jpeg',
    pricing: [
      { label: '1 Hari',  price: 'RM 200'   },
      { label: '3 Hari',  price: 'RM 1,000' },
      { label: '1 Bulan', price: 'RM 3,900' },
    ],
    seats: 8,
    transmission: 'Automatik',
    fuel: 'Petrol',
    features: ['8 Tempat Duduk', 'Pintu Gelongsor', 'USB Charging', 'Reverse Cam'],
    badge: 'Keluarga',
    badgeColor: 'orange',
  },
  {
    id: 'mini-coopers',
    name: 'MINI Cooper S',
    category: 'Hatchback Premium',
    image: '/minicoopers.jpeg',
    pricing: [
      { label: '1 Hari',  price: 'RM 450'   },
      { label: '3 Hari',  price: 'RM 1,200' },
      { label: '1 Bulan', price: 'RM 5,500' },
    ],
    seats: 4,
    transmission: 'Automatik',
    fuel: 'Petrol',
    features: ['Sporty Look', 'JCW Body Kit', 'Harman Kardon', 'Driving Modes'],
    badge: 'Gaya Hidup',
    badgeColor: 'orange',
  },
  {
    id: 'mercy-hatch',
    name: 'Mercedes-Benz Hatchback',
    category: 'Hatchback Mewah',
    image: '/mercyhatchback.jpeg',
    pricing: [
      { label: '1 Hari',  price: 'RM 650'   },
      { label: '3 Hari',  price: 'RM 1,800' },
      { label: '1 Bulan', price: 'RM 6,500' },
    ],
    seats: 5,
    transmission: 'Automatik',
    fuel: 'Petrol',
    features: ['AMG Pakej', 'Digital Cockpit', 'Ambient Lighting', 'Burmester Audio'],
    badge: 'Premium',
    badgeColor: 'blue',
  },
  {
    id: 'mercy-a200',
    name: 'Mercedes-Benz A200 Sedan',
    category: 'Sedan Mewah',
    image: '/mercya200sedan.jpeg',
    pricing: [
      { label: '1 Hari',  price: 'RM 650'   },
      { label: '3 Hari',  price: 'RM 1,800' },
      { label: '1 Bulan', price: 'RM 8,000' },
    ],
    seats: 5,
    transmission: 'Automatik',
    fuel: 'Petrol',
    features: ['MBUX System', 'LED Headlamps', 'Widescreen Kokpit', 'Wireless Charge'],
    badge: 'Mewah',
    badgeColor: 'purple',
  },
  {
    id: 'mercy-c200',
    name: 'Mercedes-Benz C200 W205',
    category: 'Sedan Mewah',
    image: '/mercyc200.jpeg',
    pricing: [
      { label: '1 Hari',  price: 'RM 600'   },
      { label: '3 Hari',  price: 'RM 1,600' },
      { label: '1 Bulan', price: 'RM 7,000' },
    ],
    seats: 5,
    transmission: 'Automatik',
    fuel: 'Petrol',
    features: ['AMG Line', 'Skrin Sentuh', 'Burmester Audio', 'Panoramic Roof'],
    badge: 'Pilihan Utama',
    badgeColor: 'blue',
  },
  {
    id: 'bmw-530i',
    name: 'BMW G30 530i',
    category: 'Sedan Mewah',
    image: '/bmwg30.jpeg',
    pricing: [
      { label: '1 Hari',  price: 'RM 750'   },
      { label: '3 Hari',  price: 'RM 1,900' },
      { label: '1 Bulan', price: 'RM 8,000' },
    ],
    seats: 5,
    transmission: 'Automatik',
    fuel: 'Petrol',
    features: ['M Sport Pakej', 'Tempat Duduk Kulit', 'HUD', 'Harman Kardon'],
    badge: 'Eksklusif',
    badgeColor: 'blue',
  },
  {
    id: 'velfire-zg',
    name: 'Toyota Velfire ZG',
    category: 'MPV Premium',
    image: '/velfirezg.jpeg',
    pricing: [
      { label: '1 Hari',  price: 'RM 800'   },
      { label: '3 Hari',  price: 'RM 2,100' },
      { label: '1 Bulan', price: 'RM 8,500' },
    ],
    seats: 7,
    transmission: 'Automatik',
    fuel: 'Petrol',
    features: ['Captain Seat', 'Power Door', 'AC 3 Zon', 'JBL Audio'],
    badge: 'Paling Popular',
    badgeColor: 'purple',
  },
];

export default function Fleet() {
  return (
    <section className="fleet" id="fleet">
      <div className="fleet__orb"></div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div className="fleet__header">
          <div className="section-tag">🚗 Kenderaan Kami</div>
          <h2 className="section-title">
            Pilihan Kenderaan <span>Premium</span>
          </h2>
          <p className="section-subtitle">
            10 pilihan kenderaan — dari city car jimat hingga MPV mewah dan sedan premium untuk setiap keperluan anda.
          </p>
        </div>

        {/* Grid */}
        <div className="fleet__grid">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} whatsappNumber={WHATSAPP_NUMBER} />
          ))}
        </div>
      </div>
    </section>
  );
}
