/* eslint-disable @next/next/no-img-element */
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import LandingPageStyles from "../../styles/partial/home.module.scss";
import { sliderData } from "./Layouts/data/dataSwiper";
import FetchAll from "../../api";

const Testimonials = () => {
  const swiperLeftPrevRef = useRef(null);
  const swiperLeftNextRef = useRef(null);
  const { getTestimonials, fetchTestimonials } = FetchAll();
  useEffect(() => {
    getTestimonials;
  }, []);
  return (
    <section
      className={`${LandingPageStyles.section} ${LandingPageStyles.flex_c}`}
      id={`${LandingPageStyles.testimonials}`}
    >
      <div
        className={`${LandingPageStyles.flex_cr} ${LandingPageStyles.testi}`}
      >
        <span>
          <h3>
            <b className={`cOrange`}>Testimonials</b>
          </h3>
          <h2>What my clients say</h2>
          <p>
            I am very passionate about 
            what I do, with this passion and honesty
            I have been able to deliver and help people in need of my services,
            So far my skill has helped me achieved this. Here is what my clients
            are saying.
          </p>
        </span>
        {console.log(fetchTestimonials)}
        <span className={`${LandingPageStyles.flex_r}`}>
          <svg
            width="35"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="25" cy="25" r="24" stroke="#FB4B04" strokeWidth="2" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M31.5 24.9998C31.5 25.2153 31.4144 25.422 31.2621 25.5743C31.1097 25.7267 30.903 25.8123 30.6875 25.8123H21.2739L24.7628 29.2996C24.8383 29.3751 24.8983 29.4648 24.9391 29.5635C24.98 29.6622 25.0011 29.768 25.0011 29.8748C25.0011 29.9816 24.98 30.0874 24.9391 30.1861C24.8983 30.2848 24.8383 30.3745 24.7628 30.4501C24.6873 30.5256 24.5976 30.5855 24.4989 30.6264C24.4002 30.6673 24.2944 30.6883 24.1875 30.6883C24.0807 30.6883 23.9749 30.6673 23.8762 30.6264C23.7775 30.5855 23.6878 30.5256 23.6123 30.4501L18.7373 25.5751C18.6616 25.4996 18.6016 25.4099 18.5606 25.3112C18.5197 25.2125 18.4986 25.1067 18.4986 24.9998C18.4986 24.8929 18.5197 24.7871 18.5606 24.6884C18.6016 24.5897 18.6616 24.5 18.7373 24.4246L23.6123 19.5496C23.7649 19.397 23.9718 19.3113 24.1875 19.3113C24.4033 19.3113 24.6102 19.397 24.7628 19.5496C24.9154 19.7021 25.0011 19.909 25.0011 20.1248C25.0011 20.3406 24.9154 20.5475 24.7628 20.7001L21.2739 24.1873H30.6875C30.903 24.1873 31.1097 24.2729 31.2621 24.4253C31.4144 24.5777 31.5 24.7843 31.5 24.9998Z"
              fill="#FB4B04"
            />
          </svg>
          <svg
            width="35"
            height="50"
            className={`${LandingPageStyles.activeArrow}`}
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="25"
              cy="25"
              r="24"
              transform="matrix(-1 0 0 1 50 0)"
              stroke="#FB4B04"
              strokeWidth="2"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.5 24.9998C18.5 25.2153 18.5856 25.422 18.7379 25.5743C18.8903 25.7267 19.097 25.8123 19.3125 25.8123H28.7261L25.2372 29.2996C25.1617 29.3751 25.1017 29.4648 25.0609 29.5635C25.02 29.6622 24.9989 29.768 24.9989 29.8748C24.9989 29.9816 25.02 30.0874 25.0609 30.1861C25.1017 30.2848 25.1617 30.3745 25.2372 30.4501C25.3127 30.5256 25.4024 30.5855 25.5011 30.6264C25.5998 30.6673 25.7056 30.6883 25.8125 30.6883C25.9193 30.6883 26.0251 30.6673 26.1238 30.6264C26.2225 30.5855 26.3122 30.5256 26.3877 30.4501L31.2627 25.5751C31.3384 25.4996 31.3984 25.4099 31.4394 25.3112C31.4803 25.2125 31.5014 25.1067 31.5014 24.9998C31.5014 24.8929 31.4803 24.7871 31.4394 24.6884C31.3984 24.5897 31.3384 24.5 31.2627 24.4246L26.3877 19.5496C26.2351 19.397 26.0282 19.3113 25.8125 19.3113C25.5967 19.3113 25.3898 19.397 25.2372 19.5496C25.0846 19.7021 24.9989 19.909 24.9989 20.1248C24.9989 20.3406 25.0846 20.5475 25.2372 20.7001L28.7261 24.1873H19.3125C19.097 24.1873 18.8903 24.2729 18.7379 24.4253C18.5856 24.5777 18.5 24.7843 18.5 24.9998Z"
              fill="#FB4B04"
            />
          </svg>
        </span>
      </div>
      <div
        className={`${LandingPageStyles.slidersCon} ${LandingPageStyles.flex_r}`}
      >
        <span className={`${LandingPageStyles.card}`}>
          <svg
            width="45"
            height="46"
            viewBox="0 0 45 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="22.5"
              cy="23"
              r="22.5"
              fill="#FB4B04"
              fillOpacity="0.1"
            />
            <path
              d="M31.4837 20.3099C31.4836 19.4874 31.2142 18.6876 30.7168 18.0327C30.2194 17.3777 29.5213 16.9035 28.7291 16.6826C27.9369 16.4617 27.0941 16.5062 26.3295 16.8092C25.565 17.1123 24.9206 17.6573 24.4949 18.361C24.0692 19.0647 23.8855 19.8884 23.972 20.7063C24.0584 21.5242 24.4102 22.2913 24.9735 22.8905C25.5369 23.4896 26.281 23.8879 27.092 24.0245C27.903 24.1611 28.7364 24.0284 29.465 23.6468C29.2132 24.5809 28.8581 25.3632 28.433 25.9873C27.5829 27.2377 26.4692 27.8425 25.2962 27.8425C25.0822 27.8425 24.8769 27.9275 24.7255 28.0789C24.5742 28.2302 24.4892 28.4355 24.4892 28.6495C24.4892 28.8636 24.5742 29.0689 24.7255 29.2202C24.8769 29.3716 25.0822 29.4566 25.2962 29.4566C27.0944 29.4566 28.6719 28.5064 29.7684 26.8955C30.8553 25.2965 31.4837 23.0399 31.4837 20.3099Z"
              fill="#FB4B04"
            />
            <path
              d="M21.7011 20.3099C21.7009 19.4874 21.4316 18.6876 20.9342 18.0327C20.4368 17.3777 19.7386 16.9035 18.9464 16.6826C18.1542 16.4617 17.3115 16.5062 16.5469 16.8092C15.7823 17.1123 15.138 17.6573 14.7123 18.361C14.2866 19.0647 14.1029 19.8884 14.1893 20.7063C14.2757 21.5242 14.6275 22.2913 15.1909 22.8905C15.7543 23.4896 16.4983 23.8879 17.3093 24.0245C18.1203 24.1611 18.9538 24.0284 19.6823 23.6468C19.4305 24.5809 19.0754 25.3632 18.6504 25.9873C17.8003 27.2377 16.6865 27.8425 15.5136 27.8425C15.2995 27.8425 15.0942 27.9275 14.9429 28.0789C14.7915 28.2302 14.7065 28.4355 14.7065 28.6495C14.7065 28.8636 14.7915 29.0689 14.9429 29.2202C15.0942 29.3716 15.2995 29.4566 15.5136 29.4566C17.3117 29.4566 18.8893 28.5064 19.9858 26.8955C21.0726 25.2965 21.7011 23.0399 21.7011 20.3099Z"
              fill="#FB4B04"
            />
          </svg>
          <article>
            The ants enjoyed the barbecue more than the family. Everyone was
            busy, so I went to the movie alone. come from a tribe of
            head-hunters, so I will never need a shrink.Fluffy pink unicorns are
            a popular status symbol among macho men. She borrowed the book from
            him.{" "}
          </article>
          <span className={`${LandingPageStyles.flex_r}`}>
            <i>
              <img src="./me.jpg" alt="lklg" />
            </i>
            <span className={`${LandingPageStyles.flex_c}`}>
              <strong>Saliu Adio</strong>
              <small>CEO ATChub</small>
            </span>
          </span>
        </span>
        <span className={`${LandingPageStyles.card}`}>
          <svg
            width="45"
            height="46"
            viewBox="0 0 45 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="22.5"
              cy="23"
              r="22.5"
              fill="#FB4B04"
              fillOpacity="0.1"
            />
            <path
              d="M31.4837 20.3099C31.4836 19.4874 31.2142 18.6876 30.7168 18.0327C30.2194 17.3777 29.5213 16.9035 28.7291 16.6826C27.9369 16.4617 27.0941 16.5062 26.3295 16.8092C25.565 17.1123 24.9206 17.6573 24.4949 18.361C24.0692 19.0647 23.8855 19.8884 23.972 20.7063C24.0584 21.5242 24.4102 22.2913 24.9735 22.8905C25.5369 23.4896 26.281 23.8879 27.092 24.0245C27.903 24.1611 28.7364 24.0284 29.465 23.6468C29.2132 24.5809 28.8581 25.3632 28.433 25.9873C27.5829 27.2377 26.4692 27.8425 25.2962 27.8425C25.0822 27.8425 24.8769 27.9275 24.7255 28.0789C24.5742 28.2302 24.4892 28.4355 24.4892 28.6495C24.4892 28.8636 24.5742 29.0689 24.7255 29.2202C24.8769 29.3716 25.0822 29.4566 25.2962 29.4566C27.0944 29.4566 28.6719 28.5064 29.7684 26.8955C30.8553 25.2965 31.4837 23.0399 31.4837 20.3099Z"
              fill="#FB4B04"
            />
            <path
              d="M21.7011 20.3099C21.7009 19.4874 21.4316 18.6876 20.9342 18.0327C20.4368 17.3777 19.7386 16.9035 18.9464 16.6826C18.1542 16.4617 17.3115 16.5062 16.5469 16.8092C15.7823 17.1123 15.138 17.6573 14.7123 18.361C14.2866 19.0647 14.1029 19.8884 14.1893 20.7063C14.2757 21.5242 14.6275 22.2913 15.1909 22.8905C15.7543 23.4896 16.4983 23.8879 17.3093 24.0245C18.1203 24.1611 18.9538 24.0284 19.6823 23.6468C19.4305 24.5809 19.0754 25.3632 18.6504 25.9873C17.8003 27.2377 16.6865 27.8425 15.5136 27.8425C15.2995 27.8425 15.0942 27.9275 14.9429 28.0789C14.7915 28.2302 14.7065 28.4355 14.7065 28.6495C14.7065 28.8636 14.7915 29.0689 14.9429 29.2202C15.0942 29.3716 15.2995 29.4566 15.5136 29.4566C17.3117 29.4566 18.8893 28.5064 19.9858 26.8955C21.0726 25.2965 21.7011 23.0399 21.7011 20.3099Z"
              fill="#FB4B04"
            />
          </svg>
          <article>
            The ants enjoyed the barbecue more than the family. Everyone was
            busy, so I went to the movie alone. come from a tribe of
            head-hunters, so I will never need a shrink.Fluffy pink unicorns are
            a popular status symbol among macho men. She borrowed the book from
            him.{" "}
          </article>
          <span className={`${LandingPageStyles.flex_r}`}>
            <i>
              <img src="./adeCheers.jpg" alt="lklg" />
            </i>
            <span className={`${LandingPageStyles.flex_c}`}>
              <strong>Saliu Adio</strong>
              <small>CEO ATChub</small>
            </span>
          </span>
        </span>
        <span className={`${LandingPageStyles.card}`}>
          <svg
            width="45"
            height="46"
            viewBox="0 0 45 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="22.5"
              cy="23"
              r="22.5"
              fill="#FB4B04"
              fillOpacity="0.1"
            />
            <path
              d="M31.4837 20.3099C31.4836 19.4874 31.2142 18.6876 30.7168 18.0327C30.2194 17.3777 29.5213 16.9035 28.7291 16.6826C27.9369 16.4617 27.0941 16.5062 26.3295 16.8092C25.565 17.1123 24.9206 17.6573 24.4949 18.361C24.0692 19.0647 23.8855 19.8884 23.972 20.7063C24.0584 21.5242 24.4102 22.2913 24.9735 22.8905C25.5369 23.4896 26.281 23.8879 27.092 24.0245C27.903 24.1611 28.7364 24.0284 29.465 23.6468C29.2132 24.5809 28.8581 25.3632 28.433 25.9873C27.5829 27.2377 26.4692 27.8425 25.2962 27.8425C25.0822 27.8425 24.8769 27.9275 24.7255 28.0789C24.5742 28.2302 24.4892 28.4355 24.4892 28.6495C24.4892 28.8636 24.5742 29.0689 24.7255 29.2202C24.8769 29.3716 25.0822 29.4566 25.2962 29.4566C27.0944 29.4566 28.6719 28.5064 29.7684 26.8955C30.8553 25.2965 31.4837 23.0399 31.4837 20.3099Z"
              fill="#FB4B04"
            />
            <path
              d="M21.7011 20.3099C21.7009 19.4874 21.4316 18.6876 20.9342 18.0327C20.4368 17.3777 19.7386 16.9035 18.9464 16.6826C18.1542 16.4617 17.3115 16.5062 16.5469 16.8092C15.7823 17.1123 15.138 17.6573 14.7123 18.361C14.2866 19.0647 14.1029 19.8884 14.1893 20.7063C14.2757 21.5242 14.6275 22.2913 15.1909 22.8905C15.7543 23.4896 16.4983 23.8879 17.3093 24.0245C18.1203 24.1611 18.9538 24.0284 19.6823 23.6468C19.4305 24.5809 19.0754 25.3632 18.6504 25.9873C17.8003 27.2377 16.6865 27.8425 15.5136 27.8425C15.2995 27.8425 15.0942 27.9275 14.9429 28.0789C14.7915 28.2302 14.7065 28.4355 14.7065 28.6495C14.7065 28.8636 14.7915 29.0689 14.9429 29.2202C15.0942 29.3716 15.2995 29.4566 15.5136 29.4566C17.3117 29.4566 18.8893 28.5064 19.9858 26.8955C21.0726 25.2965 21.7011 23.0399 21.7011 20.3099Z"
              fill="#FB4B04"
            />
          </svg>
          <article>
            The ants enjoyed the barbecue more than the family. Everyone was
            busy, so I went to the movie alone. come from a tribe of
            head-hunters, so I will never need a shrink.Fluffy pink unicorns are
            a popular status symbol among macho men. She borrowed the book from
            him.{" "}
          </article>
          <span className={`${LandingPageStyles.flex_r}`}>
            <i>
              <img src="./adefoldarms.jpg" alt="lklg" />
            </i>
            <span className={`${LandingPageStyles.flex_c}`}>
              <strong>Saliu Adio</strong>
              <small>CEO ATChub</small>
            </span>
          </span>
        </span>
      </div>
    </section>
  );
};

export default Testimonials;
