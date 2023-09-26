import { useEffect, useState } from 'react';
import { InitialSession } from './style';
import { GiTowTruck } from 'react-icons/gi';

export function SessionInitial() {
  const images = [
    '/img/foto1.png',
    '/img/foto2.png',
    '/img/foto3.png',
    '/img/foto4.png',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section aria-label="Seção Inicial do Site" id="inicio">
      <InitialSession>
        <div className="carousel-container">
          <div
            className="carousel-content"
            style={{
              transform: `translateX(${-currentImageIndex * 100}%)`,
              display: 'flex',
              transition: 'transform 1s ease-in-out',
            }}
          >
            {images.map((src, index) => (
              <div key={index} style={{ flex: '0 0 100%' }}>
                <img src={src} alt={`Foto do banner ${index}`} />
              </div>
            ))}
          </div>
          <div className="text-container">
            <div className="text-center">
              <GiTowTruck className="icon" />
              <h1 className="front-heading">AG GUINCHO</h1>
              <h2 className="sub-heading">(77) 9 8846-1478</h2>
              <h2 className="sub-heading">
                REBOQUE 24H - VITÓRIA DA CONQUISTA E REGIÃO
              </h2>
            </div>
          </div>
        </div>
      </InitialSession>
    </section>
  );
}
