import './WhyUs.css';

const reasons = [
  {
    id: 'fleet',
    icon: '🚗',
    title: 'Kereta Berkualiti',
    desc: 'Kereta bersih, selesa dan sentiasa dalam keadaan terbaik untuk setiap perjalanan anda.',
  },
  {
    id: 'price',
    icon: '💰',
    title: 'Harga Terbaik',
    desc: 'Harga telus tanpa caj tersembunyi. Harga yang anda lihat, itulah yang  anda bayar',
  },
  {
    id: 'support',
    icon: '🕐',
    title: 'Sokongan 24/7',
    desc: 'Pasukan kami sedia membantu anda bila-bila masa melalui WhatsApp untuk sebarang pertanyaan dan keperluan.',
  },
];

export default function WhyUs() {
  return (
    <section className="whyus" id="about">
      <div className="container">
        <div className="whyus__header">
          <div className="section-tag">✨ Mengapa Pilih Kami?</div>
          <h2 className="section-title">
            Kepercayaan Anda adalah <span>Keutamaan Kami</span>
          </h2>
          <p className="section-subtitle">
            Kami hadir untuk memastikan setiap perjalanan anda selesa, selamat, dan berkesan.
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
