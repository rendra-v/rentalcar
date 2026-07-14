import './Navbar.css';

export default function Navbar() {
  const scrollToFleet = () => {
    document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="container navbar__inner">
        {/* Logo */}
        <a href="/" className="navbar__logo" id="navbar-logo">
          <img src="/logo_mhs.png" alt="MHS Revolusi Logo" className="navbar__logo-img" />
        </a>

        {/* Nav Links */}
        <ul className="navbar__links">
          <li><button className="nav-link" onClick={scrollToFleet} id="nav-fleet">Kenderaan</button></li>
          <li><button className="nav-link" onClick={scrollToContact} id="nav-contact">Hubungi Kami</button></li>
        </ul>
      </div>
    </nav>
  );
}
