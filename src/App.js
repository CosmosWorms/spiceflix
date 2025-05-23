import React, { useState } from "react";
import "./App.css";

function App() {
  const [modalData, setModalData] = useState(null);

  // Open the modal with video details
  const openModal = (video) => {
    setModalData(video);
  };

  // Close the modal
  const closeModal = () => {
    setModalData(null);
  };

  // Videos array with X post links
  const videos = [
    {
      id: 1,
      title: "Part 1 - Awakening",
      descriptionLine1: "$ SPICE : AWAKENING",
      descriptionLine2: "The time is near, we have been preparing...",
      videoSrc: "/videos/part1.mp4",
      placeholderSrc: "/images/part1-placeholder.png",
      postUrl: "https://x.com/richieblasco/status/1860543660791857578",
    },
    {
      id: 2,
      title: "Part 2 - The Signal",
      descriptionLine1: "$ SPICE : THE SIGNAL",
      descriptionLine2:  "Many cheeks were clenched for this moment...",
      videoSrc: "/videos/part2.mp4",
      placeholderSrc: "/images/part2-placeholder.png",
      postUrl: "https://x.com/richieblasco/status/1862992510261526682",
    },
    {
      id: 3,
      title: "Part 3 - Guests",
      descriptionLine1: "$ SPICE : GUESTS",
      descriptionLine2: "Guests have arrived...",
      videoSrc: "/teasers/part3teaser.mp4",
      placeholderSrc: "/teasers/part3-teaser-placeholder.png",
      postUrl: "https://x.com/richieblasco/status/1868832935388103078",
    },
    {
      id: 4,
      title: "Part 4 - Hopium",
      descriptionLine1: "$ SPICE : HOPIUM",
      descriptionLine2: "The flow of life is interesting...",
      videoSrc: "/videos/part4.mp4",
      placeholderSrc: "/images/part4-placeholder.png",
      postUrl: "https://x.com/richieblasco/status/1920286906920718431",
    },
    {
      id: 5,
      title: "Part 5 - Rebirth",
      descriptionLine1: "$ SPICE : REBIRTH",
      descriptionLine2: "What happens when a meme dies...",
      videoSrc: "/videos/part5.mp4",
      placeholderSrc: "/images/part5-placeholder.png",
      postUrl: "https://x.com/richieblasco/status/1921702900268441731",
    },
  ];

  const sortedVideos = [...videos].sort((a, b) => a.id - b.id);

  return (
    <div className="App">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo" style={{ fontFamily: "Bebas Neue" }}>SPICEFLIX</div>
        <div className="tagline" style={{ fontFamily: "Bebas Neue" }}><a href="https://x.com/spiceoncosmos" /* Replace with your desired link URL */
    target="_blank"
    rel="noopener noreferrer"
    title="Spice on X"
    
    style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>The SPICE must flow 🌶️</a></div>
    <div className="spice-link">
    <a
      href="https://app.osmosis.zone/?to=SPICE&sellOpen=false&buyOpen=false" // Replace with your desired link URL
      target="_blank"
      rel="noopener noreferrer"
      title="Trade on Osmosis"
      style={{
        textDecoration: "none",
        color: "white",
        fontWeight: "bold",
        fontSize: "16px",
        cursor: "pointer",
      }}
    >
      Get some spice on Osmosis
    </a>
  </div>
      </header>

      {/* Hero Section */}
      <main className="content">
        <section className="hero">
          <img
            className="hero-image"
            src="/images/part5-placeholder.png" /* Replace with actual hero image */
            alt="Hero Scene"
          />
          <div className="overlay"></div>
          <div className="hero-text">
            <h1 className="hero-title">$SPICE PART 5 - REBIRTH</h1>
            <p className="hero-description">
            What happens when a meme dies...
            </p>
            <div className="hero-buttons">
            <button className="play-button" onClick={() => openModal(videos[4])}>
            <span className="play-triangle"></span> Play
          </button>
            </div>
          </div>
        </section>

        {/* Episodes Row */}
        <section className="rows">
          <div className="row">
            <h2>Episodes</h2>
            <div className="row-content">
  {sortedVideos.map((video) => (
    <div
      key={video.id}
      className="card"
      onClick={() => openModal(video)}
    >
      <img
        src={video.placeholderSrc}
        alt={video.title}
      />
      <div className="thumbnail-title">{video.title}</div>
    </div>
  ))}
</div>
          </div>
        </section>
      </main>

      {/* Modal */}
      {modalData && (
  <div
    className={`modal ${modalData ? "show" : ""}`}
    onClick={closeModal} /* Close modal on background click */
  >
    <div
      className="modal-content"
      onClick={(e) => e.stopPropagation()} /* Prevent closing when clicking modal content */
    >
      <button className="close-modal" onClick={closeModal}>
        ✖
      </button>
      <video
        className="modal-video"
        controls
        autoPlay
        src={modalData.videoSrc}
      ></video>
      <div className="modal-details">
        <h2>{modalData.title}</h2>
        <p>{modalData.descriptionLine1}</p>
        <p>{modalData.descriptionLine2}</p>
        <p>
          <a
            href={modalData.postUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "lightblue", textDecoration: "underline" }}
          >
            View Richie's post on X
          </a>
        </p>
        
      </div>
      
      <p>
        <a className="tip-link" href="https://omniflix.tv/cosmoscu"
            target="_blank"
            rel="noopener noreferrer"
            >
            🪙 Tip the artist 🪙
          </a>
        </p>
    </div>
  </div>
)}


    </div>
  );
}

export default App;
