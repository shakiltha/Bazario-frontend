import { AiOutlineMail } from "react-icons/ai";
import { BiPhone } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h2 className="text-center text-2xl font-semibold mt-3">About</h2>
      <div className="w-3/4 my-4 mx-auto">
        Bazario has established itself as a key player in Bangladeshs e-commerce
        landscape, leveraging the strength and legacy of one of the nations
        largest retail chains. Offering a wide variety of products, a reliable
        1-hour home delivery service, multiple delivery slots to suit customer
        schedules, seamless cashless payment options, and a dedicated 24/7
        customer support team, Bazario Online focuses on meeting customer
        expectations while maintaining top-tier service quality. Its unique
        &quot;send as a gift&quot; feature further enhances the shopping
        experience. Bazarios physical stores act as fulfillment hubs for online
        orders, creating a seamless integration between traditional and digital
        retail channels. This hybrid approach not only adds a distinct advantage
        but also reinforces the brands trust and accessibility. Alongside
        groceries, Bazario Online caters to diverse needs by offering books,
        electronics, home appliances, fashion items, and much more. In todays
        fast-paced world, saving time is more valuable than ever. Bazario Online
        is committed to simplifying the shopping process with an intuitive
        website and mobile apps available on both Android and iOS platforms. By
        leveraging data and analytics, we continuously refine our Omni Channel
        Strategy to uncover customer pain points and enhance the overall user
        experience, ensuring shopping is effortless, efficient, and tailored to
        individual preferences.
      </div>
      <footer className="footer bg-neutral text-neutral-content p-10 my-4">
        <nav>
          <h6 className="footer-title">CUSTOMER SERVICES</h6>
          <Link className="link link-hover">Bazario Stores</Link>
          <Link className="link link-hover">Terms and Conditions</Link>
          <Link className="link link-hover">Privacy Policy</Link>
        </nav>
        <nav>
          <h6 className="footer-title">BAZARIO</h6>
          <Link className="link link-hover">About Bazario</Link>
          <Link className="link link-hover">Shipping and Delivery</Link>
          <Link className="link link-hover">Customer Care</Link>
          <Link className="link link-hover">Careers</Link>
        </nav>
        <nav>
          <h6 className="footer-title">CONTACT US</h6>
          <div className="flex gap-2 items-center">
            <IoLocationOutline />{" "}
            <p>House:22, Road(27 Old), zindabazar, sylhet</p>
          </div>
          <div className="flex gap-2 items-center">
            <AiOutlineMail /> <p>info@bazario.com.bd</p>
          </div>
          <div className="flex gap-2 items-center">
            <BiPhone />
            <p>01999-000000</p>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default About;
