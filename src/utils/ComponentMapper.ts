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
import FAQ from '@/components/FAQ';
import SectionWithCTA from '@/components/SectionWithCTA';
import BenefitsCarplus from '@/components/BenefitsCarplus';
import BenefitsCarplusNoFilter from '@/components/BenefitsCarplusNoFilter';
import HeroSectionFullForm from '@/components/HeroSectionFullForm';

interface ComponentMapperType {
  [key: string]: FunctionComponent;
}
const ComponentMapper: ComponentMapperType = {
  header: Header,
  hero_section_w_multistep: HeroSectionWithMultistep,
  hero_section_w_fullform: HeroSectionFullForm,
  countdown: Countdown,
  cars_gallery: VehicleFilterComponent,
  trustpilot: Trustpilot,
  services_box: SectionWithCards,
  customer_testimonial: CustomerTestimonial,
  faq: FAQ,
  small_text_container: SmallTextContainer,
  section_with_cta:SectionWithCTA,
  footer: Footer,
  benefits_carplus: BenefitsCarplus,
  benefits_carplus_no_filter: BenefitsCarplusNoFilter
};

export default ComponentMapper;