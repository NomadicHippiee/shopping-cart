import { useNavigate } from "react-router-dom";
import heroImage from '../assets/heroImage.jpg'

export default function Home() {
    const navigate = useNavigate();

    const handleShopClick = () => {
        navigate('/shop');
    };

  return (
    <section className="home">
    <div className="hero-text">
      <h2>Shop Like It’s Real (Spoiler: It’s Not)</h2>
      <p><strong>Welcome to Fake Shop</strong> — Where the products are fake, the prices are fake, and your cart is fake too.</p>
      <p>Browse 100% authentic fake items.</p>
      <p>Don’t worry — you can’t buy anything. It’s not a bug. It’s a feature.</p>
      <button onClick={handleShopClick}>Browse the Glitch</button>

      </div>
      <div className="img-wrapper">
        <img className="hero-image" src={heroImage} alt="Hero image"/>
      </div>
      </section>

  );
}
