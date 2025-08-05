import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import AppointmentForm from '@/components/AppointmentForm'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Products />
        <Services />
        <Testimonials />
        <AppointmentForm />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
