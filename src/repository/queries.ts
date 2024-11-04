export async function getImages() {
  // Genereate a random number between 1 and 4 to simulate an error
  const random = Math.floor(Math.random() * 3) + 1;
  console.log(random);
  if (random === 3) {
    throw new Error("Error fetching images");
  }
  await new Promise((resolve, reject) => setTimeout(resolve, 1000));
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
    {
      id: 4,
      name: "Photo 4",
      url: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Photo 5",
      url: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Photo 6",
      url: "https://via.placeholder.com/150",
    },
  ];
  return photos;
}
