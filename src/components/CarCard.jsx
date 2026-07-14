import { useState } from 'react';
import './CarCard.css';

const badgeStyles = {
  gold: { bg: 'rgba(255,213,0,0.15)', color: '#ffd500', border: 'rgba(255,213,0,0.3)' },
  purple: { bg: 'rgba(167,139,250,0.15)', color: '#a78bfa', border: 'rgba(167,139,250,0.3)' },
  green: { bg: 'rgba(52,211,153,0.15)', color: '#34d399', border: 'rgba(52,211,153,0.3)' },
  orange: { bg: 'rgba(251,146,60,0.15)', color: '#fb923c', border: 'rgba(251,146,60,0.3)' },
};

export default function CarCard({ car, whatsappNumber }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleAsk = () => {
    const message = encodeURIComponent(
      `Halo MHS Revolusi! 👋\n\nSaya tertarik untuk menyewa *${car.name}* (${car.category}).\n\nBisa tolong berikan info lebih lanjut mengenai:\n- Ketersediaan armada\n- Harga sewa\n- Syarat & ketentuan\n\nTerima kasih! 🙏`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const badge = badgeStyles[car.badgeColor] || badgeStyles.gold;

  return (
    <article className="car-card" id={`car-${car.id}`}>
      {/* Badge */}
      {car.badge && (
        <div
          className="car-card__badge"
          style={{ background: badge.bg, color: badge.color, borderColor: badge.border }}
        >
          {car.badge}
        </div>
      )}

      {/* Image */}
      <div className="car-card__img-wrapper">
        {!imgLoaded && <div className="car-card__img-skeleton"></div>}
        <img
          src={car.image}
          alt={`Foto ${car.name}`}
          className={`car-card__img ${imgLoaded ? 'loaded' : ''}`}
          onLoad={() => setImgLoaded(true)}
          loading="lazy"
        />
        <div className="car-card__img-overlay"></div>
      </div>

      {/* Body */}
      <div className="car-card__body">
        {/* Category & Name */}
        <div className="car-card__meta">
          <span className="car-card__category">{car.category}</span>
          <h3 className="car-card__name">{car.name}</h3>
        </div>

        {/* Specs */}
        <div className="car-card__specs">
          <div className="spec-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            {car.seats} Kursi
          </div>
          <div className="spec-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"/>
              <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
            </svg>
            {car.transmission}
          </div>
          <div className="spec-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 22V8l9-6 9 6v14H3z"/>
              <path d="M12 22V12"/>
            </svg>
            {car.fuel}
          </div>
        </div>

        {/* Features */}
        <div className="car-card__features">
          {car.features.map((f, i) => (
            <span key={i} className="feature-tag">{f}</span>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="car-card__footer">
          <div className="car-card__price">
            <span className="price-value">{car.price}</span>
            <span className="price-period">{car.pricePeriod}</span>
          </div>
          <button
            className="car-card__cta"
            onClick={handleAsk}
            id={`ask-${car.id}`}
            aria-label={`Tanyakan tentang ${car.name} via WhatsApp`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Tanya via WA
          </button>
        </div>
      </div>
    </article>
  );
}
