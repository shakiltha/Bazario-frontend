import FaqComponent from "../FAQS/FaqComponent";
const FAQs = () => {
  const data = {
    faqs: [
      {
        question: "What products do you sell?",
        answer:
          "We offer a wide variety of fresh fish, fruits, vegetables, meat, dairy products, groceries, and frozen goods.",
      },

      {
        question: "Do you deliver to my area?",
        answer:
          "We currently deliver to only in bangladesh. Enter your location during checkout to confirm delivery availability.",
      },

      {
        question: "What are your delivery charges?",
        answer:
          "Delivery charges vary based on your location and order size. Orders over TK1500 may qualify for free delivery.",
      },
      {
        question: "How long does delivery take?",
        answer:
          "We aim to deliver orders within 24-48 hours. Same-day delivery is available for select areas.",
      },
      {
        question: "Can I track my order?",
        answer:
          "Yes, once your order is shipped, we will send you a tracking link via email or SMS.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept credit/debit cards, mobile banking (bKash, Nagad, etc.), and cash on delivery.",
      },
      {
        question: "Is online payment safe on your website?",
        answer:
          "Absolutely! Our website uses secure payment gateways to ensure your information is safe.",
      },
      {
        question: "Do you offer discounts or promotions?",
        answer:
          "Yes, we frequently have discounts and promotional offers. Subscribe to our newsletter or check our homepage for updates.",
      },
      {
        question: "What is your return policy?",
        answer:
          "If you receive a damaged or incorrect product, please contact us within 24 hours for a replacement or refund.",
      },
      {
        question: "How do I request a refund?",
        answer:
          "You can request a refund by contacting our customer service team with your order details.",
      },
      {
        question: "Do I need to create an account to shop?",
        answer:
          "While you can browse without an account, creating an account makes it easier to track orders and save your preferences.",
      },
    ],
    backgroundColor: "#f4f5f9",
    titleColor: "#000",
    answerColor: "#000",
    iconColor: "#000",
  };
  return (
    <div className="w-3/4 mx-auto">
      <div className="w-full h-full flex justify-center items-center flex-col">
        <h2 className="text-3xl mb-2">Frequently Asked Questions</h2>
        <FaqComponent data={data} />
      </div>
    </div>
  );
};

export default FAQs;
