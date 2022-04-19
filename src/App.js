import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./variables/variables.styled";
import Navbar from "./components/Navbar/Navbar";
import { Homepage, Invoice } from "./pages";
import Footer from "./components/Footer/Footer";

const App = () => (
  <ThemeProvider theme={theme}>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/invoice" element={<Invoice />} />
    </Routes>
    <Footer />
  </ThemeProvider>
);

export default App;
