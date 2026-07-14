import CarCard from './CarCard';
import './Fleet.css';

const WHATSAPP_NUMBER = '6281234567890'; // Ganti dengan nomor WhatsApp Anda

const cars = [
  {
    id: 'bmw-5series',
    name: 'BMW 5 Series',
    category: 'Sedan Mewah',
    image: '/car_bmw.png',
    price: 'Rp 1.200.000',
    pricePeriod: '/ hari',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Bensin',
    features: ['GPS Navigation', 'AC Dual Zone', 'Leather Seat', 'Sunroof'],
    badge: 'Terpopuler',
    badgeColor: 'gold',
  },
  {
    id: 'toyota-alphard',
    name: 'Toyota Alphard',
    category: 'MPV Premium',
    image: '/car_alphard.png',
    price: 'Rp 1.500.000',
    pricePeriod: '/ hari',
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Bensin',
    features: ['Captain Seat', 'Entertainment System', 'AC 3 Zone', 'Power Door'],
    badge: 'Eksklusif',
    badgeColor: 'purple',
  },
  {
    id: 'toyota-innova',
    name: 'Toyota Innova Reborn',
    category: 'MPV Keluarga',
    image: '/car_innova.png',
    price: 'Rp 650.000',
    pricePeriod: '/ hari',
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Diesel',
    features: ['AC Double Blower', 'Airbag 6', 'USB Charger', 'Cruise Control'],
    badge: 'Terjangkau',
    badgeColor: 'green',
  },
  {
    id: 'toyota-fortuner',
    name: 'Toyota Fortuner',
    category: 'SUV Tangguh',
    image: '/car_fortuner.png',
    price: 'Rp 900.000',
    pricePeriod: '/ hari',
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Diesel',
    features: ['4x4 AWD', 'Off-Road Mode', 'LED Headlights', 'TPMS'],
    badge: 'Petualangan',
    badgeColor: 'orange',
  },
];

export default function Fleet() {
  return (
    <section className="fleet" id="fleet">
      <div className="bg-orb" style={{
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(255,213,0,0.06) 0%, transparent 70%)',
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div className="fleet__header">
          <div className="section-tag">🚗 Armada Kami</div>
          <h2 className="section-title">
            Pilihan Kendaraan <span>Premium</span>
          </h2>
          <p className="section-subtitle">
            Dari sedan mewah hingga SUV tangguh, kami memiliki armada terbaik untuk setiap kebutuhan perjalanan Anda.
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
