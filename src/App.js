import { useState, useEffect } from "react";
import sendRequest from "./services/api";
import Loader from "react-loader-spinner";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";


export default function App() {
  const [value, setValue] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loaded, setLoaded] = useState('');
  const [modal, setModal] = useState(false);
  const [largeImage, setLargeImage] = useState('');


  function handleChange(e) {
    setValue(e.target.value );
  };

  function searchImages(e) {
    setImages([]);
    setPage(2);
    setLoaded(false);
    sendRequest(value, page, images).then((data) => { setImages(data.images); setLoaded(data.loaded)});

  };

  function openLargeImage(e) {
    setModal(true);
    const largeImage = images.find((item) => item.id === Number(e.target.parentNode.id));
    return setLargeImage(largeImage);
  };

  function loadMoreImages() {
    setPage(page + 1);
    sendRequest(value, page, images).then((data) => { setImages([...images, ...data.images]); setLoaded(data.loaded)});
  };

  
  function  closeModal(e) {
    if (e.target.className === "Overlay") {
    setModal(false);
    setLargeImage('');
    };
  };

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  });
  
    return (
      <>
        <Searchbar
          onChange={handleChange}
          onClick={searchImages}
          value={value}
        />
        {loaded === false ? (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
            className="loader"
          />
        ) : (
          <ImageGallery images={images} onClick={openLargeImage} />
        )}
        ;{images.length && <Button onClick={loadMoreImages} />};
        {modal && <Modal image={largeImage} onClick={closeModal} />}
      </>
    );
};