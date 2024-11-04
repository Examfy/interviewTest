import React, { useState, useEffect } from "react";
import { getImages } from "./repository/queries";

const PhotoGallery = ({ photos }: { photos: any }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch photos from props every time component renders
  useEffect(() => {
    if (photos) {
      setLoading(true);
      setFilteredPhotos(photos);
      setLoading(false);
    }
  }, [photos]);

  // Filter photos based on search term
  useEffect(() => {
    const filtered = photos.filter((photo: any) =>
      photo.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPhotos(filtered);
  }, []);

  const handleSearch = (e: any) => {
    if (e.target.value != searchTerm) {
      setSearchTerm(e.target.value);
    }
  };

  return (
    <div>
      <h2>Photo Gallery</h2>
      <input
        type="text"
        placeholder="Search photos"
        value={searchTerm}
        onChange={handleSearch}
      />
      {loading && <p>Loading...</p>}
      <ul>
        {filteredPhotos.map((photo: any, index) => (
          <li key={photo.id}>
            <img src={photo.url} alt={photo.name} />
            <p>{photo.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhotoGallery;
