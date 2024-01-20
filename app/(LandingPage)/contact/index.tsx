import Form from './components/FormSection';
import Hero from './components/HeroSection';
import CTASection from '../shared/components/CTASection';

const Contact = () => {
  return (
    <div className="px-4 pt-16 lg:pt-24">
      <Hero />
      <Form />
      <CTASection
        mainText={'Ready to make a difference?'}
        subText={
          'Join our community of passionate mentors and mentees on Mentored'
        }
        customButtonText={'Get Started'}
      />
    </div>
  );
};

export default Contact;
