import { PremiumTestimonial } from "../../../../../components/nurui/premium-testimonial";
export default function PremiumTestimonialDemo() {
  return (
    <div
      className="py-10 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://c.animaapp.com/JykgXKim/img/world-map-png28-1.png')",
      }}
    >
      <PremiumTestimonial
        title="Trusted by"
        subTitle="Industry Leaders"
        tagline="Client Success Stories"
        des="Join thousands of businesses already transforming their operations with our manage system."
      />
    </div>
  );
}
