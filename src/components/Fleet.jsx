import CarCard from './CarCard';
import './Fleet.css';

const WHATSAPP_NUMBER = '60172975568'; // +60 17-297 5568

const cars = [
  {
    id: 'myvi-h',
    name: 'Perodua Myvi H 1.5',
    year: '2020',
    category: 'Hatchback',
    image: '/car_myvi.jpg',
    pricing: [
      { label: '1 Hari', price: 'RM 130' },
      { label: '3 Hari', price: 'RM 350' },
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
    id: 'mercy-hatch',
    name: 'Mercedes-Benz Hatchback',
    category: 'Hatchback Mewah',
    image: '/car_mercy_hatch.jpg',
    pricing: [
      { label: '1 Hari', price: 'RM 650' },
      { label: '3 Hari', price: 'RM 1,800' },
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
    id: 'velfire-zg',
    name: 'Toyota Velfire ZG',
    category: 'MPV Premium',
    image: '/car_velfire.jpg',
    pricing: [
      { label: '1 Hari', price: 'RM 800' },
      { label: '3 Hari', price: 'RM 2,100' },
      { label: '1 Bulan', price: 'RM 8,500' },
    ],
    seats: 7,
    transmission: 'Automatik',
    fuel: 'Petrol',
    features: ['Captain Seat', 'Power Door', 'AC 3 Zon', 'JBL Audio'],
    badge: 'Paling Popular',
    badgeColor: 'purple',
  },
  {
    id: 'bmw-530i',
    name: 'BMW G30 530i',
    category: 'Sedan Mewah',
    image: '/car_bmw_530i.jpg',
    pricing: [
      { label: '1 Hari', price: 'RM 750' },
      { label: '3 Hari', price: 'RM 1,900' },
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
    id: 'mercy-c200',
    name: 'Mercedes-Benz C200 W205',
    category: 'Sedan Mewah',
    image: '/car_mercy_c200.jpg',
    pricing: [
      { label: '1 Hari', price: 'RM 600' },
      { label: '3 Hari', price: 'RM 1,600' },
      { label: '1 Bulan', price: 'RM 7,000' },
    ],
    seats: 5,
    transmission: 'Automatik',
    fuel: 'Petrol',
    features: ['AMG Line', 'Skrin Sentuh', 'Burmester Audio', 'Panoramic Roof'],
    badge: 'Pilihan Utama',
    badgeColor: 'orange',
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
            Dari hatchback sporty hingga MPV mewah dan sedan premium — kami ada untuk setiap keperluan perjalanan anda.
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
