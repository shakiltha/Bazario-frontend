import { useState } from "react";
import { MdAdd, MdRemove } from "react-icons/md";
import "./FAQ.css";
import PropTypes from "prop-types";

const FaqComponent = (props) => {
  const [expandFAQ, setExpandFAQ] = useState(null);
  return (
    <>
      {props.data.faqs.map((faq, index) => {
        return (
          <div className="faq-section" key={index}>
            <div
              className="faq"
              style={{ backgroundColor: props.data.backgroundColor }}
            >
              <div className="faq-heading">
                <span style={{ color: props.data.titleColor }}>
                  {faq.question}
                </span>
                {expandFAQ === index ? (
                  <MdRemove
                    onClick={() => setExpandFAQ(null)}
                    className="faq-icon"
                    size={30}
                    style={{ color: props.data.iconColor }}
                  />
                ) : (
                  <MdAdd
                    onClick={() => setExpandFAQ(index)}
                    className="faq-icon"
                    size={30}
                    style={{ color: props.data.iconColor }}
                  />
                )}
              </div>
              <div className={expandFAQ === index ? "show show-faq-2" : "hide"}>
                <p
                  className={
                    expandFAQ === index ? "show-faq-text" : "hide-faq-text"
                  }
                  style={{
                    color: props.data.answerColor,
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FaqComponent;

FaqComponent.propTypes = {
  data: PropTypes.shape({
    faqs: PropTypes.arrayOf(
      PropTypes.shape({
        question: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired,
      })
    ).isRequired,
    backgroundColor: PropTypes.string,
    titleColor: PropTypes.string,
    iconColor: PropTypes.string,
    answerColor: PropTypes.string,
    overflow: PropTypes.string,
  }).isRequired,
};
