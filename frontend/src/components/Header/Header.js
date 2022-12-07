import React, { useEffect, useContext, useState } from 'react';
import styles from './Header.module.css';
import AuthContext from '../../store/auth-context';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCaretDown, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout();
  };

  const location = useLocation();

  const [couldNavigate, setCouldNavigate] = useState(true);

  useEffect(() => {
    let linkJoinUs = document.getElementById('header-menu__item-join-us');

    let timeout = false, // holder for timeout id
        delay = 250; // delay time to execute resize event

    // window.resize callback function
    function getDimensions(event) {
      // mobile only
      if (window.innerWidth < 1024) {
        // Initial loading
        if(event === undefined) {
          return setCouldNavigate(false)
        } else if(event.type === 'resize') { // On resize event
          return setCouldNavigate(false);
        } else { // On click event
          // Avoid link be triggered on first click
          if (linkJoinUs.getAttribute('href') === '#') {
            event.preventDefault();
            setCouldNavigate(true);
          }
        }
      } else { // desktop view
        setCouldNavigate(true);
      }
    }

    getDimensions();

    // window.resize event listener
    window.addEventListener('resize', function(event) {
      // clear the timeout
      clearTimeout(timeout);
      // start timing for event "completion"
      timeout = setTimeout(function() {
        getDimensions(event);
      }, delay);
    });

    linkJoinUs.addEventListener('click', function(event) {
      getDimensions(event);
    }, true);
  }, []);
  
  return (
    <header>
      <section className={styles["header-info"]}>
        <div className={`container ${styles["header-info__container"]}`}>
          <a
            href="tel:+351964278843"
            className={styles["header-info__data-contact"]}
          >
            <FontAwesomeIcon icon={faPhone} flip="horizontal" />
            <span>+351 964 278 843</span>
          </a>
          <a
            href="mailto:geral@pt-training.pt"
            className={`${styles["header-info__data-contact"]} ${styles["header-info__data-contact--email"]}`}
          >
            <FontAwesomeIcon icon={faEnvelope} />
            <span>geral@pt-training.pt</span>
          </a>
          <a
            href="https://www.facebook.com/pttrainingoficial"
            className={styles["header-info__data--social"]}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://www.instagram.com/pttraining_oficial/"
            className={styles["header-info__data--social"]}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </section>
      <section className={`container ${styles["header-menu"]}`}>
        <div className={styles["header-menu__container"]}>
          <a className={styles["header-menu__logo"]} href="/">
            <svg
              enableBackground="new 0 0 289.167 200"
              version="1.1"
              width="120px"
              height="86.122px"
              viewBox="0 0 120 86.122"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="matrix(.47089 0 0 .47089 -7.2112 -3.0142)">
                <path
                  d="m218.7 32.513c4e-3 -0.04 4e-3 -0.066 4e-3 -0.066v-21.312s-48.916 25.789-59.087 31.284c-10.171 5.493-9.688 15.204-9.688 15.204v19.857s25.096-13.274 42.753-22.554c-2e-3 2.387-4e-3 4.869-7e-3 7.383 3.453-0.882 6.81-1.738 9.355-2.386v0.078l-9.356 5.457c-2e-3 1.187-2e-3 2.378-2e-3 3.564-23.649 12.523-57.7 30.565-64.212 34.083-10.171 5.495-9.687 15.205-9.687 15.205v19.856s14.394-7.633 31.473-16.676v0.077c-0.033 16.479-0.012 39.807-0.012 39.807l18.471-9.753s7.757-4.285 7.64-17.445c-0.038-4.18-0.061-10.78-0.071-17.839l0.014-2e-3 -0.025-8.607c6.057-3.202 11.707-6.185 16.413-8.662v0.121l18.472-9.757s7.757-4.281 7.64-17.441c-0.063-7.257-0.083-25.008-0.088-39.476z"
                  fill="#d9d9d9"
                />
                <g fill="#1d1d1b">
                  <path d="m56.179 188.73c-0.301 0-0.565-0.139-0.79-0.42-0.227-0.281-0.34-0.609-0.34-0.985v-26.11h-7.796c-0.327 0-0.598-0.141-0.811-0.421-0.213-0.283-0.319-0.625-0.319-1.032v-6.376c0-0.375 0.106-0.702 0.319-0.984 0.213-0.28 0.484-0.422 0.811-0.422h26.063c0.327 0 0.603 0.142 0.83 0.422 0.226 0.282 0.339 0.609 0.339 0.984v6.376c0 0.407-0.113 0.749-0.339 1.032-0.227 0.28-0.502 0.421-0.83 0.421h-7.759v26.11c0 0.376-0.106 0.704-0.319 0.985-0.214 0.281-0.484 0.42-0.81 0.42z" />
                  <path d="m86.537 175.75v11.578c0 0.376-0.113 0.704-0.34 0.985-0.225 0.281-0.502 0.42-0.829 0.42h-8.361c-0.301 0-0.564-0.139-0.792-0.42-0.225-0.281-0.338-0.609-0.338-0.985v-33.939c0-0.375 0.113-0.702 0.338-0.984 0.227-0.28 0.49-0.422 0.792-0.422h18.908c3.238 0 5.837 0.891 7.797 2.674 2.108 1.937 3.163 4.483 3.163 7.639 0 3.563-0.866 6.142-2.598 7.737-0.429 0.404-0.924 0.786-1.488 1.146-0.565 0.361-1.187 0.682-1.865 0.964 0.803 0.53 1.488 1.107 2.052 1.732 0.565 0.627 1.036 1.251 1.413 1.876l5.159 10.829c0.251 0.53 0.27 1.024 0.057 1.477s-0.559 0.678-1.035 0.678h-9.567c-0.202 0-0.396-0.075-0.584-0.233-0.188-0.155-0.333-0.344-0.433-0.562l-4.821-11.157 0.038 0.093c-0.101-0.155-0.207-0.312-0.32-0.467-0.113-0.158-0.233-0.282-0.358-0.376-0.202-0.188-0.979-0.281-2.334-0.281h-3.654zm-0.227-15.376v6.984h4.521c1.833 0 3.226-0.264 4.181-0.797 0.954-0.531 1.431-1.482 1.431-2.859 0-1.156-0.364-2-1.093-2.53-0.729-0.532-1.782-0.798-3.164-0.798z" />
                  <path d="m139.46 188.73c-0.176 0-0.371-0.075-0.584-0.233-0.213-0.155-0.358-0.344-0.433-0.562l-1.92-4.594h-14.125l-1.92 4.594c-0.101 0.218-0.252 0.406-0.452 0.562-0.201 0.158-0.402 0.233-0.603 0.233h-7.797c-0.503 0-0.865-0.217-1.091-0.655-0.227-0.438-0.214-0.921 0.036-1.451l15.481-33.894c0.076-0.188 0.225-0.358 0.451-0.517 0.226-0.155 0.415-0.234 0.566-0.234h6.666c0.176 0 0.364 0.079 0.565 0.234 0.2 0.158 0.351 0.345 0.451 0.563l14.576 33.893c0.202 0.532 0.202 1.008 0 1.43-0.2 0.422-0.552 0.632-1.055 0.632h-8.812zm-13.372-13.639h7.006l-3.389-8.156z" />
                  <path d="m194.14 188.73c-0.274 0-0.508-0.139-0.696-0.42s-0.281-0.609-0.281-0.985v-33.939c0-0.375 0.093-0.702 0.281-0.984 0.188-0.28 0.422-0.422 0.696-0.422h7.006c0.277 0 0.51 0.142 0.697 0.422 0.189 0.282 0.284 0.609 0.284 0.984v33.939c0 0.376-0.095 0.704-0.284 0.985-0.188 0.281-0.42 0.42-0.697 0.42z" />
                  <path d="m222.77 166.96c0.704 1.203 1.42 2.431 2.146 3.68v-17.251c0-0.375 0.113-0.702 0.341-0.984 0.226-0.28 0.5-0.422 0.827-0.422h7.346c0.326 0 0.603 0.142 0.828 0.422 0.228 0.282 0.34 0.609 0.34 0.984v33.939c0 0.376-0.112 0.704-0.34 0.985-0.226 0.281-0.502 0.42-0.828 0.42h-8.438c-0.127 0-0.287-0.054-0.489-0.162-0.203-0.11-0.354-0.242-0.453-0.398l-10.621-17.814v16.97c0 0.376-0.113 0.704-0.338 0.985-0.226 0.281-0.503 0.42-0.828 0.42h-7.346c-0.301 0-0.565-0.139-0.791-0.42s-0.337-0.609-0.337-0.985v-33.939c0-0.375 0.111-0.702 0.337-0.984 0.226-0.28 0.49-0.422 0.791-0.422h8.361c0.15 0 0.331 0.063 0.548 0.188 0.211 0.124 0.345 0.265 0.394 0.422 1.104 1.875 2.179 3.696 3.222 5.461 1.042 1.768 2.104 3.54 3.183 5.32 0.728 1.187 1.442 2.383 2.145 3.585z" />
                  <path d="m249.06 177.44c1.607 1.688 3.83 2.532 6.666 2.532 2.261 0 3.98-0.282 5.16-0.844v-2.345h-3.954c-0.325 0-0.603-0.142-0.828-0.422-0.227-0.283-0.339-0.625-0.339-1.033v-6.233c0-0.405 0.112-0.741 0.339-1.006 0.226-0.268 0.503-0.399 0.828-0.399h12.054c0.324 0 0.6 0.132 0.828 0.399 0.225 0.265 0.34 0.601 0.34 1.006v16.455c0 0.281-0.083 0.554-0.245 0.818-0.164 0.267-0.357 0.446-0.585 0.54-1.831 0.722-3.923 1.298-6.27 1.734-2.35 0.438-4.891 0.656-7.627 0.656-6.202 0-10.949-1.491-14.239-4.477-3.289-2.984-4.934-7.586-4.934-13.806 0-6.094 1.695-10.923 5.086-14.484 3.39-3.5 7.819-5.251 13.294-5.251 2.663 0 5.062 0.211 7.194 0.634 2.134 0.422 3.855 0.884 5.16 1.382 0.2 0.063 0.384 0.212 0.544 0.445 0.166 0.235 0.26 0.477 0.285 0.728l0.643 6.516c0.047 0.531-0.079 0.961-0.379 1.288-0.302 0.328-0.667 0.417-1.093 0.259-1.355-0.5-2.987-0.984-4.896-1.453-0.93-0.218-1.864-0.39-2.805-0.517-0.944-0.123-1.891-0.187-2.846-0.187-2.962 0-5.349 0.938-7.156 2.813-1.731 1.874-2.599 4.345-2.599 7.406 2e-3 2.877 0.792 5.158 2.374 6.846z" />
                  <path d="m150.08 165.73v21.6c0 0.376 0.094 0.704 0.28 0.985 0.19 0.281 0.423 0.42 0.698 0.42h7.006c0.276 0 0.509-0.139 0.696-0.42 0.189-0.281 0.284-0.609 0.284-0.985v-26.756z" />
                  <path d="m190.34 151.98h-7.346c-0.325 0-0.602 0.142-0.827 0.422-0.227 0.282-0.341 0.609-0.341 0.984v17.251c-0.727-1.249-1.442-2.477-2.146-3.68-0.7-1.202-1.419-2.398-2.146-3.586-1.08-1.78-2.141-3.553-3.182-5.32-0.939-1.588-1.906-3.229-2.895-4.905-0.85 0.755-1.422 1.102-1.422 1.102l-9.337 5.371v27.707c0 0.376 0.112 0.704 0.338 0.985s0.489 0.42 0.79 0.42h7.345c0.326 0 0.604-0.139 0.828-0.42 0.226-0.281 0.339-0.609 0.339-0.985v-16.97l10.621 17.814c0.101 0.156 0.253 0.288 0.453 0.398 0.202 0.108 0.362 0.162 0.489 0.162h8.438c0.327 0 0.603-0.139 0.829-0.42s0.339-0.609 0.339-0.985v-33.939c0-0.375-0.113-0.702-0.339-0.984-0.226-0.28-0.501-0.422-0.828-0.422z" />
                </g>
                <g fill="#e20613">
                  <path d="m20.924 154.26v6.369c0 0.205-0.062 0.385-0.185 0.538-0.123 0.15-0.273 0.228-0.45 0.228h-4.341c-0.164 0-0.311-0.077-0.439-0.228-0.13-0.153-0.195-0.333-0.195-0.538v-18.446c0-0.204 0.062-0.382 0.185-0.534 0.122-0.153 0.266-0.229 0.43-0.229h6.039c1.296 0 2.437 0.114 3.418 0.344 0.983 0.229 1.802 0.599 2.457 1.108 0.656 0.511 1.149 1.168 1.484 1.975 0.334 0.808 0.501 1.78 0.501 2.918 0 2.259-0.573 3.918-1.72 4.981-1.146 1.061-2.839 1.575-5.076 1.54zm-0.021-8.178v3.618l1.044 0.05c1.651 0.085 2.478-0.534 2.478-1.859 0-0.646-0.205-1.143-0.614-1.49-0.409-0.349-0.983-0.487-1.72-0.423z" />
                  <path d="m35.397 161.4c-0.163 0-0.307-0.077-0.429-0.228-0.124-0.153-0.184-0.333-0.184-0.538v-14.19h-4.239c-0.176 0-0.324-0.077-0.44-0.229-0.116-0.153-0.174-0.341-0.174-0.563v-3.465c0-0.204 0.058-0.382 0.174-0.534 0.116-0.153 0.264-0.229 0.44-0.229h14.167c0.177 0 0.327 0.076 0.451 0.229 0.123 0.152 0.184 0.33 0.184 0.534v3.465c0 0.222-0.061 0.409-0.184 0.563-0.124 0.151-0.274 0.229-0.451 0.229h-4.218v14.19c0 0.205-0.058 0.385-0.174 0.538-0.116 0.15-0.263 0.228-0.439 0.228z" />
                </g>
                <linearGradient
                  id="SVGID_1_"
                  x1="118.15"
                  x2="170.52"
                  y1="165.66"
                  y2="113.29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#1E0000" offset=".0591" />
                  <stop stopColor="#BD1622" offset=".5645" />
                </linearGradient>
                <path
                  d="m176.26 81.146-17.213 9.899s-8.639 4.41-8.745 16.205c-0.105 11.795-0.067 52.61-0.067 52.61l18.471-10.624s7.757-4.646 7.64-17.803c-0.12-13.155-0.086-50.287-0.086-50.287z"
                  fill="url(#SVGID_1_)"
                />
                <path
                  d="m150.25 120.05 26.041-6.459-0.025-8.604s-17.524 10.091-26.016 14.985v0.078z"
                  fill="#a5151c"
                />
                <linearGradient
                  id="SVGID_2_"
                  x1="184.36"
                  x2="184.36"
                  y1="95.676"
                  y2="6.4009"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E20613" offset=".4355" />
                  <stop stopColor="#1E0000" offset=".9409" />
                </linearGradient>
                <path
                  d="m218.7 27.777c4e-3 -0.039 4e-3 -0.067 4e-3 -0.067v-21.309s-48.916 28.09-59.087 34.063-9.688 15.66-9.688 15.66v19.856s25.096-14.454 42.753-24.565c-4e-3 3.495-7e-3 7.19-8e-3 10.894 3.452-0.88 6.811-1.737 9.356-2.386v0.078l-9.358 5.458c-7e-3 15.492 3e-3 30.217 3e-3 30.217l18.472-10.626s7.757-4.646 7.64-17.802c-0.062-7.253-0.082-25.002-0.087-39.471z"
                  fill="url(#SVGID_2_)"
                />
                <linearGradient
                  id="SVGID_3_"
                  x1="118.77"
                  x2="211.03"
                  y1="101.79"
                  y2="101.79"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#BD1622" offset=".0591" />
                  <stop stopColor="#E20613" offset=".5645" />
                </linearGradient>
                <path
                  d="m192.77 65.453c-23.653 13.639-57.789 33.334-64.31 37.164-10.171 5.973-9.687 15.66-9.687 15.66v19.856s74.099-42.781 85.562-49.239c2.888-1.627 5.058-3.418 6.689-5.187z"
                  fill="url(#SVGID_3_)"
                />
              </g>
            </svg>
          </a>
          <nav className={styles["header-menu__nav"]}>
            <input type="checkbox" />
            <FontAwesomeIcon
              icon={faBars}
              className={styles["header-menu__bars-icon"]}
            />
            <FontAwesomeIcon
              icon={faXmark}
              size="lg"
              className={styles["header-menu__close-icon"]}
            />
            <ul className={styles["header-menu__list"]}>
              <li className={location.pathname === "/about-us" ? styles["header-menu__item-active"] : ""}>
                <a href="/about-us">Sobre Nós</a>
              </li>
              <li className={location.pathname === "/contact" ? styles["header-menu__item-active"] : ""}>
                <a href="/contact">Contactos</a>
              </li>
              <li 
                className={`
                  ${styles["header-menu__list-item-submenu"]}
                  ${location.pathname === "/join-us" ||location.pathname === "/personal-registration" || location.pathname === "/gymnasium-studium-registration" 
                    ? styles["header-menu__item-active"] 
                    : ""
                  }
                `}
                >
                <a id="header-menu__item-join-us" href={couldNavigate ? "/join-us" : "#"}>
                  Aderir
                  <FontAwesomeIcon icon={faCaretDown} size="sm"/>
                </a>
                <ul>
                  <li>
                    <a href="/personal-registration">Adesão Personal Trainers</a>
                  </li>
                  <li>
                    <a href="/gymnasium-studium-registration">Adesão Ginásios/Estúdios</a>
                  </li>
                </ul>
                 
              </li>
              <li className={location.pathname === "/auth" ? styles["header-menu__item-active"] : ""}>
                {!authCtx.isLoggedIn ? (
                  <a href="/auth">
                    Login
                  </a>
                ) : (
                  <a onClick={logoutHandler}>
                    Logout
                  </a>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </header>
  );
};

export default Header;
