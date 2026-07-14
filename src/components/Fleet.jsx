import CarCard from './CarCard';
import './Fleet.css';

const WHATSAPP_NUMBER = '6281234567890'; // Tukar kepada nombor WhatsApp anda

const cars = [
  {
    id: 'bmw-5series',
    name: 'BMW 5 Series',
    category: 'Sedan Mewah',
    image: '/car_bmw.png',
    price: 'RM 1,200',
    pricePeriod: '/ hari',
    seats: 5,
    transmission: 'Automatik',
    fuel: 'Petrol',
    features: ['GPS Navigation', 'AC Dual Zone', 'Tempat Duduk Kulit', 'Sunroof'],
    badge: 'Paling Popular',
    badgeColor: 'blue',
  },
  {
    id: 'toyota-alphard',
    name: 'Toyota Alphard',
    category: 'MPV Premium',
    image: '/car_alphard.png',
    price: 'RM 1,500',
    pricePeriod: '/ hari',
    seats: 7,
    transmission: 'Automatik',
    fuel: 'Petrol',
    features: ['Captain Seat', 'Sistem Hiburan', 'AC 3 Zon', 'Pintu Elektrik'],
    badge: 'Eksklusif',
    badgeColor: 'purple',
  },
  {
    id: 'toyota-innova',
    name: 'Toyota Innova Reborn',
    category: 'MPV Keluarga',
    image: '/car_innova.png',
    price: 'RM 650',
    pricePeriod: '/ hari',
    seats: 7,
    transmission: 'Automatik',
    fuel: 'Diesel',
    features: ['AC Double Blower', 'Beg Udara 6', 'Pengecas USB', 'Cruise Control'],
    badge: 'Berpatutan',
    badgeColor: 'green',
  },
  {
    id: 'toyota-fortuner',
    name: 'Toyota Fortuner',
    category: 'SUV Tangguh',
    image: '/car_fortuner.png',
    price: 'RM 900',
    pricePeriod: '/ hari',
    seats: 7,
    transmission: 'Automatik',
    fuel: 'Diesel',
    features: ['4x4 AWD', 'Mod Off-Road', 'Lampu LED', 'TPMS'],
    badge: 'Pengembaraan',
    badgeColor: 'orange',
  },
];

export default function Fleet() {
  return (
    <section className="fleet" id="fleet">
      <div className="bg-orb" style={{
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)',
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div className="fleet__header">
          <div className="section-tag">🚗 Kenderaan Kami</div>
          <h2 className="section-title">
            Pilihan Kenderaan <span>Premium</span>
          </h2>
          <p className="section-subtitle">
            Dari sedan mewah hingga SUV tangguh, kami mempunyai armada terbaik untuk setiap keperluan perjalanan anda.
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
