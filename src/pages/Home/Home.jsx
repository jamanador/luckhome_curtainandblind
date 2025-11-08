import ContactForm from './ContactForm.jsx';
import DiscoverUs from './DiscoverUs.jsx';
import Hero from './Hero.jsx';
import OurCommitment from './OurCommitment.jsx';
import OurWave from './OurWave.jsx';
import Products from './products.jsx';
import Projects from './Projects.jsx';
const Home = () => {
  return (
    <>
      <Hero />
      {/* <RenovationSection /> */}
      <Products />
      <div className="overflow-hidden">
        <OurWave />
      </div>
      <OurCommitment />
      <Projects />
      <DiscoverUs />
      <ContactForm />
    </>
  );
}

export default Home;