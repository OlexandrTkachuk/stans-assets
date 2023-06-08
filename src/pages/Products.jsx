import Footer from 'components/Foooter/Footer';
import HomeContacts from 'components/HomePage/HomeContacts/HomeContacts';
import HomeSponsor from 'components/HomePage/HomeSponsor/HomeSponsor';
import Navbar from 'components/Navbar/Navbar';
import ProductsGallery from 'components/ProductsPage/ProductsGallery/ProductsGallery';

const Products = () => {
  return (
    <div>
      <Navbar />
      <ProductsGallery />
      <HomeSponsor />
      <HomeContacts />
      <Footer />
    </div>
  );
};

export default Products;
