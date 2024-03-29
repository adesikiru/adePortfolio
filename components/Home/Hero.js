/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import LandingPageStyles from '../../styles/partial/home.module.scss'
import LinkButtons from '../button/linkButton'
import HeaderStyles from '../../styles/partial/header.module.scss'
import { motion } from 'framer-motion'
import FooterStyles from '../../styles/partial/footer.module.scss'

const Hero = () => {
  return (
    <section
      className={`${LandingPageStyles.flex_cr} ${LandingPageStyles.section}  gap-2`}
      id={`${LandingPageStyles.hero}`}
    >
      <div className={`${LandingPageStyles.heroText}`}>
        <span>
          Hello, <span className={`cOrange`}>I am</span>
        </span>
        <h1 className={`cOrange`}>Sikiru Ademola</h1>
        <h3>Frontend Web Developer</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat nibh
          nunc, id ac quisque. Vivamus vitae, id lacus et, enim mi amet. Leo
          quis a ut est at sit ut aenean. Tincidunt nulla nisi, velit viverra
          maecenas eu condimentum odio.
        </p>
        <span className={`${LandingPageStyles.flex_cr}`}>
          <p className={`cOrange`}>
            Exceptionally talented in UI engineering, design systems, and
            progressive enhancement.
          </p>
          <p className={`cOrange`}>
            Building items for clients in many nations for more than ten years.
          </p>
        </span>
      </div>
      <div className={`${LandingPageStyles.heroImg}`}>
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          src='/adeHero.png'
          alt='adeHero'
          className={`wow animate__animated animate__fadeIn`}
        />
        <motion.div
          initial={{ opacity: 0, x: -1000 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 4 }}
          className={`${FooterStyles.flex_r} ${LandingPageStyles.socials}`}
        >
          <a
            href='https://www.linkedin.com/in/ade-sikiru-271886215/'
            target='_blank'
            rel='noreferrer'
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8ZM2 9H6V21H2V9Z'
                stroke='#FB4B04'
                strokeWidth='2.08333'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z'
                stroke='#FB4B04'
                strokeWidth='2.08333'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </a>
          <a
            href='https://www.facebook.com/sikiru.sulaimon.98'
            target='_blank'
            rel='noreferrer'
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z'
                stroke='#FB4B04'
                strokeWidth='2.08333'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </a>
          <a
            href='https://github.com/Ade2002/'
            target='_blank'
            rel='noreferrer'
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M14.672 15.2385C15.874 14.9885 16.9645 14.5555 17.812 13.9195C19.26 12.834 20 11.157 20 9.49999C20 8.33799 19.5595 7.25299 18.7965 6.33399C18.3715 5.82199 19.6145 2.00049 18.51 2.51499C17.405 3.02999 15.785 4.16899 14.9365 3.91749C13.9828 3.63815 12.9938 3.49754 12 3.49999C11.1 3.49999 10.234 3.61149 9.4265 3.81699C8.2525 4.11599 7.1295 2.99999 6 2.51499C4.87 2.02999 5.487 5.98199 5.1515 6.39749C4.42 7.30249 4 8.36499 4 9.49999C4 11.157 4.895 12.834 6.343 13.92C7.308 14.643 8.517 15.104 9.87 15.331M9.87 15.331C9.2905 15.9685 9.001 16.574 9.001 17.147V21.5055M14.6725 15.2385C15.221 15.9585 15.4955 16.6055 15.4955 17.1785V21.5055M3 15.6075C3.4495 15.6625 3.783 15.8695 4 16.2275C4.326 16.765 5.537 18.759 6.9125 18.759H9.001'
                stroke='#FB4B04'
                strokeWidth='2.08333'
                strokeLinecap='round'
              />
            </svg>
          </a>
          <a
            href='https://www.instagram.com/ade.techh/'
            target='_blank'
            rel='noreferrer'
          >
            <svg
              width='22'
              height='23'
              viewBox='0 0 22 23'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10.9915 5.34131C9.49329 5.34131 8.05644 5.93647 6.99704 6.99588C5.93763 8.05528 5.34247 9.49213 5.34247 10.9904C5.34247 12.4886 5.93763 13.9254 6.99704 14.9848C8.05644 16.0442 9.49329 16.6394 10.9915 16.6394C12.4897 16.6394 13.9266 16.0442 14.986 14.9848C16.0454 13.9254 16.6406 12.4886 16.6406 10.9904C16.6406 9.49213 16.0454 8.05528 14.986 6.99588C13.9266 5.93647 12.4897 5.34131 10.9915 5.34131V5.34131ZM10.9915 14.6591C10.0182 14.6591 9.08473 14.2724 8.39648 13.5842C7.70824 12.8959 7.32159 11.9625 7.32159 10.9891C7.32159 10.0158 7.70824 9.08235 8.39648 8.3941C9.08473 7.70586 10.0182 7.31921 10.9915 7.31921C11.9648 7.31921 12.8983 7.70586 13.5865 8.3941C14.2748 9.08235 14.6614 10.0158 14.6614 10.9891C14.6614 11.9625 14.2748 12.8959 13.5865 13.5842C12.8983 14.2724 11.9648 14.6591 10.9915 14.6591V14.6591Z'
                fill='#FB4B04'
              />
              <path
                d='M16.8648 6.45035C17.5921 6.45035 18.1817 5.86072 18.1817 5.13338C18.1817 4.40603 17.5921 3.81641 16.8648 3.81641C16.1374 3.81641 15.5478 4.40603 15.5478 5.13338C15.5478 5.86072 16.1374 6.45035 16.8648 6.45035Z'
                fill='#FB4B04'
              />
              <path
                d='M21.4173 3.79454C21.1344 3.06419 20.7022 2.40094 20.1483 1.84725C19.5944 1.29356 18.931 0.861615 18.2006 0.579076C17.3458 0.25821 16.4428 0.0847126 15.53 0.0659706C14.3535 0.01466 13.9809 0 10.9976 0C8.01422 0 7.63183 -1.2288e-07 6.46513 0.0659706C5.55301 0.0837543 4.65064 0.257287 3.79698 0.579076C3.06634 0.861285 2.40276 1.29311 1.84881 1.84685C1.29486 2.40058 0.862785 3.064 0.580298 3.79454C0.259368 4.64924 0.0862683 5.55233 0.068414 6.46513C0.0158818 7.64038 0 8.01299 0 10.9976C0 13.9809 -9.10222e-09 14.3608 0.068414 15.53C0.0867392 16.4438 0.258996 17.3454 0.580298 18.2018C0.863578 18.9321 1.29607 19.5952 1.85016 20.1489C2.40424 20.7025 3.06771 21.1345 3.7982 21.4173C4.65024 21.751 5.55299 21.9369 6.46757 21.967C7.64405 22.0183 8.01666 22.0342 11 22.0342C13.9833 22.0342 14.3657 22.0342 15.5324 21.967C16.4452 21.9484 17.3481 21.7754 18.203 21.4551C18.9333 21.1719 19.5965 20.7396 20.1503 20.1858C20.7042 19.6319 21.1365 18.9687 21.4197 18.2384C21.741 17.3833 21.9133 16.4817 21.9316 15.5679C21.9841 14.3926 22 14.02 22 11.0354C22 8.05087 22 7.67215 21.9316 6.503C21.9174 5.5773 21.7434 4.66101 21.4173 3.79454V3.79454ZM19.9293 15.4396C19.9214 16.1436 19.7929 16.8411 19.5493 17.5018C19.3658 17.9768 19.085 18.4083 18.7248 18.7683C18.3646 19.1283 17.933 19.4089 17.4578 19.5921C16.8045 19.8345 16.1144 19.963 15.4176 19.972C14.257 20.0258 13.9296 20.0392 10.9536 20.0392C7.97512 20.0392 7.67092 20.0392 6.48834 19.972C5.79189 19.9635 5.10213 19.835 4.44936 19.5921C3.97252 19.41 3.53921 19.1299 3.17745 18.7698C2.8157 18.4098 2.53356 17.9778 2.34929 17.5018C2.10916 16.8482 1.98072 16.159 1.96935 15.4628C1.91681 14.3022 1.9046 13.9748 1.9046 10.9988C1.9046 8.02155 1.9046 7.71735 1.96935 6.53354C1.97724 5.82988 2.10575 5.13279 2.34929 4.47257C2.7219 3.50866 3.48545 2.75 4.44936 2.38105C5.10245 2.13933 5.79201 2.01084 6.48834 2.00111C7.65016 1.94858 7.97634 1.93392 10.9536 1.93392C13.9308 1.93392 14.2362 1.93392 15.4176 2.00111C16.1144 2.00949 16.8046 2.13803 17.4578 2.38105C17.9329 2.56464 18.3645 2.84554 18.7246 3.20572C19.0848 3.56591 19.3657 3.99742 19.5493 4.47257C19.7894 5.1261 19.9179 5.81539 19.9293 6.51155C19.9818 7.67337 19.9952 7.99956 19.9952 10.9768C19.9952 13.9528 19.9952 14.2729 19.9427 15.4408H19.9293V15.4396Z'
                fill='#FB4B04'
              />
            </svg>
          </a>
          <a
            href='https://twitter.com/_adesikiru/'
            target='_blank'
            rel='noreferrer'
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M22 3.99999C22 3.99999 21.3 6.09999 20 7.39999C21.6 17.4 10.6 24.7 2 19C4.2 19.1 6.4 18.4 8 17C3 15.5 0.5 9.59999 3 4.99999C5.2 7.59999 8.6 9.09999 12 8.99999C11.1 4.79999 16 2.39999 19 5.19999C20.1 5.19999 22 3.99999 22 3.99999Z'
                stroke='#FB4B04'
                strokeWidth='2.08333'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </a>
          <a
            href='https://wa.me/2349078863112?text=Hello,%20I%20would%20love%20to%20hire%20a%20developer%20.'
            target='_blank'
            rel='noreferrer'
          >
            <svg
              width='20'
              height='21'
              viewBox='0 0 20 21'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M14.6 12.025C14.4 11.925 13.1 11.325 12.9 11.225C12.7 11.125 12.5 11.125 12.3 11.325C12.1 11.525 11.7 12.125 11.5 12.325C11.4 12.525 11.2 12.525 11 12.425C10.3 12.125 9.6 11.725 9 11.225C8.5 10.725 8 10.125 7.6 9.525C7.5 9.325 7.6 9.125 7.7 9.025C7.8 8.925 7.9 8.725 8.1 8.625C8.2 8.525 8.3 8.325 8.3 8.225C8.4 8.125 8.4 7.925 8.3 7.825C8.2 7.725 7.7 6.525 7.5 6.025C7.4 5.325 7.2 5.325 7 5.325H6.5C6.3 5.325 6 5.525 5.9 5.625C5.3 6.225 5 6.925 5 7.725C5.1 8.625 5.4 9.525 6 10.325C7.1 11.925 8.5 13.225 10.2 14.025C10.7 14.225 11.1 14.425 11.6 14.525C12.1 14.725 12.6 14.725 13.2 14.625C13.9 14.525 14.5 14.025 14.9 13.425C15.1 13.025 15.1 12.625 15 12.225L14.6 12.025V12.025ZM17.1 2.925C13.2 -0.975 6.9 -0.975 3 2.925C-0.2 6.125 -0.8 11.025 1.4 14.925L0 20.025L5.3 18.625C6.8 19.425 8.4 19.825 10 19.825C15.5 19.825 19.9 15.425 19.9 9.925C20 7.325 18.9 4.825 17.1 2.925V2.925ZM14.4 16.925C13.1 17.725 11.6 18.225 10 18.225C8.5 18.225 7.1 17.825 5.8 17.125L5.5 16.925L2.4 17.725L3.2 14.725L3 14.425C0.6 10.425 1.8 5.425 5.7 2.925C9.6 0.425 14.6 1.725 17 5.525C19.4 9.425 18.3 14.525 14.4 16.925Z'
                fill='#FB4B04
'
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
