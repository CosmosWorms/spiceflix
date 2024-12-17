import React, { useState } from "react";
import "./App.css";

function App() {
  const [modalData, setModalData] = useState(null); // Holds video details for the modal
  const [isPlaylist, setIsPlaylist] = useState(false); // Tracks if "Play All" mode is active
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0); // Tracks current video index in playlist mode

  // Function to open the modal
  const openModal = (video, isPlayAll = false) => {
    setIsPlaylist(isPlayAll); // Set if it's "Play All"
    setCurrentVideoIndex(0); // Reset to first video in playlist mode
    setModalData(video);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalData(null);
    setIsPlaylist(false);
    setCurrentVideoIndex(0);
  };

  // List of videos
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
      descriptionLine2: "Many cheeks were clenched for this moment...",
      videoSrc: "/videos/part2.mp4",
      placeholderSrc: "/images/part2-placeholder.png",
      postUrl: "https://x.com/richieblasco/status/1862992510261526682",
    },
    {
      id: 3,
      title: "Part 3 - Teaser",
      descriptionLine1: "Full episode coming soon...",
      descriptionLine2: "Guests have arrived...",
      videoSrc: "/teasers/part3teaser.mp4",
      placeholderSrc: "/teasers/part3-teaser-placeholder.png",
      postUrl: "https://x.com/richieblasco/status/1868832935388103078",
    },
  ];

  const sortedVideos = [...videos].sort((a, b) => a.id - b.id);

  // Handle video end event for "Play All" mode
  const handleVideoEnd = () => {
    if (isPlaylist) {
      const nextIndex = currentVideoIndex + 1;
      if (nextIndex < sortedVideos.length) {
        setCurrentVideoIndex(nextIndex); // Move to the next video
        setModalData(sortedVideos[nextIndex]);
      } else {
        closeModal(); // Close modal when all videos finish
      }
    }
  };

  return (
    <div className="App">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo" style={{ fontFamily: "Bebas Neue" }}>
          SPICEFLIX
        </div>
        <div className="tagline" style={{ fontFamily: "Bebas Neue" }}>
          <a
            href="https://x.com/spiceoncosmos"
            target="_blank"
            rel="noopener noreferrer"
            title="Spice on X"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            The SPICE must flow 🌶️
          </a>
        </div>
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
            src="/teasers/part3-teaser-placeholder.png"
            alt="Hero Scene"
          />
          <div className="hero-text">
            <h1 className="hero-title">$SPICE PART 3 - TEASER</h1>
            <p className="hero-description">
              Guests have arrived... Full episode coming soon...
            </p>
            <button
              className="play-button"
              onClick={() => openModal(videos[2])}
            >
              <span className="play-triangle"></span> Play
            </button>
          </div>
        </section>

        {/* Episodes Section */}
        {/* Episodes Section */}
        <section className="rows">
          <div className="row">
            {/* Header Section */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px", // Space between h2 and button
              }}
            >
              <h2 style={{ margin: "0" }}>Episodes</h2>
              <button
                className="play-all-button"
                onClick={() => openModal(sortedVideos[0], true)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <span className="play-triangle"></span> Play All
              </button>
            </div>

            {/* Video Thumbnails */}
            <div className="row-content">
              {sortedVideos.map((video) => (
                <div
                  key={video.id}
                  className="card"
                  onClick={() => openModal(video)}
                >
                  <img src={video.placeholderSrc} alt={video.title} />
                  <div className="thumbnail-title">{video.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Video Modal */}
      {modalData && (
        <div className="modal show" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>
              ✖
            </button>
            <video
              className="modal-video"
              controls
              autoPlay
              src={modalData.videoSrc}
              onEnded={handleVideoEnd}
            ></video>
            {/* Video Details */}
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
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
