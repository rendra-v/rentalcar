import './WhyUs.css';

const reasons = [
  {
    id: 'fleet',
    icon: '🚗',
    title: 'Armada Premium',
    desc: 'Semua kendaraan terawat dengan baik dan selalu dalam kondisi prima untuk perjalanan Anda.',
  },
  {
    id: 'driver',
    icon: '👨‍✈️',
    title: 'Sopir Profesional',
    desc: 'Tersedia pilihan dengan sopir berpengalaman yang ramah dan mengenal rute terbaik.',
  },
  {
    id: 'price',
    icon: '💰',
    title: 'Harga Transparan',
    desc: 'Tidak ada biaya tersembunyi. Harga yang Anda lihat adalah harga yang Anda bayar.',
  },
  {
    id: 'support',
    icon: '🕐',
    title: 'Support 24/7',
    desc: 'Tim kami siap membantu Anda kapan saja melalui WhatsApp untuk pertanyaan dan kebutuhan.',
  },
];

export default function WhyUs() {
  return (
    <section className="whyus" id="about">
      <div className="container">
        <div className="whyus__header">
          <div className="section-tag">✨ Mengapa Kami?</div>
          <h2 className="section-title">
            Kepercayaan Anda adalah <span>Prioritas Kami</span>
          </h2>
          <p className="section-subtitle">
            Kami hadir untuk memastikan setiap perjalanan Anda nyaman, aman, dan berkesan.
          </p>
        </div>

        <div className="whyus__grid">
          {reasons.map((r) => (
            <div className="reason-card" key={r.id} id={`reason-${r.id}`}>
              <div className="reason-card__icon">{r.icon}</div>
              <h3 className="reason-card__title">{r.title}</h3>
              <p className="reason-card__desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
