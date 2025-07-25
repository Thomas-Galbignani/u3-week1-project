import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from "./components/MyNavBar";
import GenersSection from "./components/GenersSection";
import MyGallery from "./components/gallery/MyGallery";
import MyFooter from "./components/MyFooter"



function App() {
  return (
    <>
      <MyNavbar />
      <GenersSection />
      <MyGallery titleMovie={`L.O.T.R saga`} searchQuery={`lord of the rings`} />
      <MyGallery titleMovie={`StarTrek saga`} searchQuery={`star trek`} />
      <MyGallery titleMovie={`Doctor Who saga`} searchQuery={`doctor who`} />
      <MyFooter className='bottom-0' />
    </>
  )
}

export default App
