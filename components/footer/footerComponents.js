import Link from "next/link";
import React, { useState } from "react";
import FooterStyles from "../../styles/partial/footer.module.scss";
const Footer = ({ footerid }) => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={`${FooterStyles.footer} cOrange `} id={footerid}>
      <div>
        <hr />
      </div>
      <section
        className={`${FooterStyles.flex_cr} ${FooterStyles.socials} cOrange `}
      >
        <Link href="/">
          <a className={`${FooterStyles.logo} ${FooterStyles.none} cOrange `}>
            <svg
              width="29"
              height="19"
              viewBox="0 0 29 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6445 18L11.4023 13.9219H5.15625L3.91406 18H0L6.04688 0.796875H10.4883L16.5586 18H12.6445ZM10.5352 10.875L9.29297 6.89062C9.21484 6.625 9.10938 6.28516 8.97656 5.87109C8.85156 5.44922 8.72266 5.02344 8.58984 4.59375C8.46484 4.15625 8.36328 3.77734 8.28516 3.45703C8.20703 3.77734 8.09766 4.17578 7.95703 4.65234C7.82422 5.12109 7.69531 5.56641 7.57031 5.98828C7.44531 6.41016 7.35547 6.71094 7.30078 6.89062L6.07031 10.875H10.5352ZM28.8398 13.2422C28.8398 14.2578 28.5938 15.1406 28.1016 15.8906C27.6094 16.6406 26.8906 17.2188 25.9453 17.625C25.0078 18.0312 23.8672 18.2344 22.5234 18.2344C21.9297 18.2344 21.3477 18.1953 20.7773 18.1172C20.2148 18.0391 19.6719 17.9258 19.1484 17.7773C18.6328 17.6211 18.1406 17.4297 17.6719 17.2031V13.8281C18.4844 14.1875 19.3281 14.5117 20.2031 14.8008C21.0781 15.0898 21.9453 15.2344 22.8047 15.2344C23.3984 15.2344 23.875 15.1562 24.2344 15C24.6016 14.8438 24.8672 14.6289 25.0312 14.3555C25.1953 14.082 25.2773 13.7695 25.2773 13.418C25.2773 12.9883 25.1328 12.6211 24.8438 12.3164C24.5547 12.0117 24.1562 11.7266 23.6484 11.4609C23.1484 11.1953 22.582 10.9102 21.9492 10.6055C21.5508 10.418 21.1172 10.1914 20.6484 9.92578C20.1797 9.65234 19.7344 9.32031 19.3125 8.92969C18.8906 8.53906 18.543 8.06641 18.2695 7.51172C18.0039 6.94922 17.8711 6.27734 17.8711 5.49609C17.8711 4.47266 18.1055 3.59766 18.5742 2.87109C19.043 2.14453 19.7109 1.58984 20.5781 1.20703C21.4531 0.816406 22.4844 0.621094 23.6719 0.621094C24.5625 0.621094 25.4102 0.726562 26.2148 0.9375C27.0273 1.14062 27.875 1.4375 28.7578 1.82812L27.5859 4.65234C26.7969 4.33203 26.0898 4.08594 25.4648 3.91406C24.8398 3.73438 24.2031 3.64453 23.5547 3.64453C23.1016 3.64453 22.7148 3.71875 22.3945 3.86719C22.0742 4.00781 21.832 4.21094 21.668 4.47656C21.5039 4.73438 21.4219 5.03516 21.4219 5.37891C21.4219 5.78516 21.5391 6.12891 21.7734 6.41016C22.0156 6.68359 22.375 6.94922 22.8516 7.20703C23.3359 7.46484 23.9375 7.76562 24.6562 8.10938C25.5312 8.52344 26.2773 8.95703 26.8945 9.41016C27.5195 9.85547 28 10.3828 28.3359 10.9922C28.6719 11.5938 28.8398 12.3438 28.8398 13.2422Z"
                fill="#FB4B04"
              />
            </svg>
          </a>
        </Link>
        <div
          className={`${FooterStyles.flex_cr} ${FooterStyles.follow} cOrange `}
        >
          <Link href="/services">
            <a
              className={`cOrange`}
            >
              Services
            </a>
          </Link>
          <Link href="/projects">
            <a
              className={`cOrange`}
            >
              Projects
            </a>
          </Link>
          <Link href="/testimonials">
            <a
              className={`cOrange`}
            >
              Testimonials
            </a>
          </Link>
          <Link href="/connect">
            <a
            className={`cOrange`}
            >
              Connect
            </a>
          </Link>
          <Link href="/resume">
            <a
              className={`cOrange`}
            >
              Resume
            </a>
          </Link>
        </div>
        <div
          className={`${FooterStyles.allRightReserved} ${FooterStyles.flex_r} cOrange `}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 0C5.37256 0 0 5.37256 0 12C0 18.6274 5.37256 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37256 18.6274 0 12 0ZM12 21.6774C6.65168 21.6774 2.32258 17.3491 2.32258 12C2.32258 6.65173 6.65085 2.32258 12 2.32258C17.3483 2.32258 21.6774 6.65086 21.6774 12C21.6774 17.3483 17.3491 21.6774 12 21.6774ZM17.1944 16.7872C16.7292 17.2572 14.9913 18.7903 12.159 18.7903C8.17045 18.7903 5.36139 15.8181 5.36139 11.9402C5.36139 8.11031 8.27792 5.19503 12.1241 5.19503C14.811 5.19503 16.4178 6.4831 16.8463 6.87789C16.947 6.97048 17.0116 7.09574 17.0288 7.23144C17.0459 7.36715 17.0145 7.50455 16.94 7.61927L16.0615 8.97958C15.8757 9.26748 15.4825 9.33193 15.2148 9.12092C14.7989 8.79305 13.6754 8.03037 12.2289 8.03037C9.89168 8.03037 8.45879 9.73989 8.45879 11.9053C8.45879 13.9177 9.75982 15.9549 12.2464 15.9549C13.8266 15.9549 14.9969 15.0337 15.4267 14.6376C15.6817 14.4026 16.0845 14.4421 16.2889 14.7217L17.2501 16.0364C17.3321 16.1475 17.3715 16.2844 17.3613 16.4221C17.3511 16.5598 17.2919 16.6894 17.1944 16.7872Z"
              fill="#FB4B04"
            />
          </svg>
          <p className={`cOrange`}>Ademola Sikiru {year}</p>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
