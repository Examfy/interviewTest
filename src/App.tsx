import PhotoGallery from "./gallery";

const photos = [
  {
    id: 1,
    name: "Photo 1",
    url: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Photo 2",
    url: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Photo 3",
    url: "https://via.placeholder.com/150",
  },
];

function App() {
  return (
    <div className="App">
      <PhotoGallery photos={photos}></PhotoGallery>
    </div>
  );
}

export default App;
