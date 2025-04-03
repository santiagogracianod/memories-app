import React, { useState, useRef, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Toast } from "primereact/toast";
import "./App.css"; // Importa el archivo CSS

const MemoriesApp = () => {
  const [visible, setVisible] = useState(false);
  const [response, setResponse] = useState(null);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });
  const toast = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determinar si estamos en móvil
  const isMobile = windowSize.width < 768;

  const images = [
    {
      id: 1,
      url: "/images/DSC_0496.jpeg",
      alt: "Nuestro primer recuerdo",
    },
    { id: 2, url: "/images/foto2.jpeg", alt: "Momentos especiales" },
    { id: 3, url: "/images/foto3.jpeg", alt: "Atardeceres juntos" },
    { id: 4, url: "/images/foto4.jpeg", alt: "Caminando de la mano" },
    { id: 5, url: "/images/foto5.jpeg", alt: "Momentos inolvidables" },
    { id: 6, url: "/images/foto6.jpeg", alt: "Juntos por siempre" },
  ];

  const details = [
    "Vístete como la persona más especial del mundo (porque lo eres)",
    "Trae esa sonrisa que hace que mi mundo gire",
    "Prepárate para recibir todo mi amor",
    "Solo necesito tu presencia para ser feliz",
  ];

  const romanticMessages = [
    "Cada latido de mi corazón lleva tu nombre",
    "Eres el sueño que nunca quise despertar",
    "En un mundo de temporadas, tú eres mi eterno verano",
    "Tu amor es la melodía que alegra mis días",
  ];

  const imageTemplate = (image) => (
    <div className="carousel-item-container">
      <img src={image.url} alt={image.alt} className="carousel-image" />
      <div className="carousel-caption">
        <h3 className="caption-title">
          {romanticMessages[image.id % romanticMessages.length]}
        </h3>
        <p className="caption-subtitle">Un capítulo más de nuestra historia</p>
      </div>
    </div>
  );

  const handleResponse = (answer) => {
    setResponse(answer);
    if (answer === "yes") {
      setVisible(true);
      toast.current.show({
        severity: "success",
        summary: "¡Mi corazón baila de alegría!",
        detail: "Sabía que dirías que sí, mi amor 💘",
        life: 3000,
      });
    } else {
      toast.current.show({
        severity: "warn",
        summary: "Espera...",
        detail: "Vuelve a mirar nuestras fotos y reconsidera 💔",
        life: 3000,
      });
    }
  };

  // Contenido del diálogo
  const dialogContent = (
    <div className="dialog-content">
      <p className="dialog-intro">
        "Para hacer de esta noche tan perfecta como tú..."
      </p>
      <ul className="detail-list">
        {details.map((item, index) => (
          <li key={index} className="detail-item">
            <span className="detail-icon">❤</span>
            <span className="detail-text">{item}</span>
          </li>
        ))}
      </ul>
      <p className="dialog-footer">
        Además de tu mejor sonrisa, trae algo cómodo para la cena y un cambio de
        ropa. Ah, y si quieres disfrutar al máximo, algo para el jacuzzi tampoco
        estaría mal. 😉
      </p>
    </div>
  );

  // Contenido del footer del diálogo
  const dialogFooter = (
    <div className="dialog-button-container">
      <Button
        label="¡Estaré allí!"
        icon="pi pi-heart-fill"
        onClick={() => setVisible(false)}
        className="confirm-button"
      />
    </div>
  );

  return (
    <div className="app-container">
      <Toast ref={toast} />

      <div className="content-container">
        {/* Título */}
        <div className="title-container">
          <h1 className="main-title">Nuestra Historia de Amor</h1>
          <p className="subtitle">
            "Donde dos almas se encuentran y el tiempo se detiene"
          </p>
          <div className="heart-icon">💖</div>
        </div>

        {/* Carrusel */}
        <div className="carousel-container">
          <Carousel
            value={images}
            itemTemplate={imageTemplate}
            numVisible={1}
            numScroll={1}
            circular
            autoplayInterval={4000}
            className="custom-carousel"
          />
        </div>

        {/* Tarjeta de invitación */}
        <Card
          title="¿Aceptas compartir esta noche mágica conmigo?"
          subTitle="Una velada creada especialmente para ti"
          className="invitation-card"
        >
          <div className="card-content">
            <p className="invitation-text">
              "Te invito a una noche en la que solo existamos tú y yo. Un
              espacio para compartir, reír y seguir escribiendo nuestra
              historia. ¿Lista para aceptar esta aventura juntos?"
            </p>

            <div className="button-container">
              <Button
                label="Sí, mi amor"
                icon="pi pi-heart-fill"
                onClick={() => handleResponse("yes")}
                className="yes-button"
              />
              <Button
                label="No esta vez"
                icon="pi pi-heart"
                onClick={() => handleResponse("no")}
                className="no-button"
              />
            </div>
          </div>
        </Card>

        {/* Diálogo de confirmación */}
        <Dialog
          header="¡Nuestra noche especial! 💫"
          visible={visible}
          onHide={() => setVisible(false)}
          footer={dialogFooter}
          className="confirmation-dialog"
          dismissableMask
        >
          {dialogContent}
        </Dialog>
      </div>

      {/* Efecto de corazones flotantes (para todos los dispositivos) */}
      <div className="hearts-container">
        {[...Array(isMobile ? 8 : 15)].map((_, i) => (
          <div
            key={i}
            className="floating-heart"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `scale(${Math.random() * 0.7 + 0.3})`,
            }}
          >
            ❤
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoriesApp;
