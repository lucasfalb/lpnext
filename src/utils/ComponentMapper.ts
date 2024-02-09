import { FunctionComponent } from 'react';

import SmallTextContainer from "@/components/SmallTextContainer";
import SectionWithCards from "@/components/SectionWithCards";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormMultistep from "@/components/FormMultistep";
import Countdown from "@/components/Countdown";
import VehicleFilterComponent from "@/components/VehicleFilterComponent";
import HeroSectionWithMultistep from "@/components/HeroSectionWithMultistep";
import Trustpilot from "@/components/Trustpilot";
import CustomerTestimonial from "@/components/CustomerTestimonial/CustomerTestimonial";

interface ComponentMapperType {
  [key: string]: FunctionComponent;
}
const ComponentMapper: ComponentMapperType = {
  header: Header,
  hero_section_w_multistep: HeroSectionWithMultistep,
  countdown: Countdown,
  cars_gallery: VehicleFilterComponent,
  trustpilot: Trustpilot,
  services_box: SectionWithCards,
  customer_testimonial: CustomerTestimonial,
  footer: Footer
};

export default ComponentMapper;