import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <AppRoutes />

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;