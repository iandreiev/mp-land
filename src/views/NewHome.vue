<template>
  <div class="page">
    <header class="header">
      <div class="header__wrap">
        <div class="header__list">
          <div class="header__fold">
            <ul class="header__menu">
              <li class="header__logo">
                <a href="index.html">
                  <picture>
                    <source
                      srcset="../assets/img/new/logo.svg"
                      media="(max-width: 767px)"
                    />
                    <img src="../assets/img/new/logo_color.svg" alt="" />
                  </picture>
                </a>
              </li>

              <li class="header__toggle">
                <button class="header__open" type="button">
                  <svg width="32" height="32">
                    <use href="../assets/img/new/sprite.svg#menu"></use>
                  </svg>
                </button>
              </li>

              <li>
                <button
                  class="btn btn--yellow js-modal-open"
                  type="button"
                  data-target="#modal-form"
                >
                  Играть
                </button>
              </li>
            </ul>
          </div>

          <div class="header__collapse" data-scroll-lock-scrollable>
            <button class="header__close" type="button">
              <svg width="32" height="32">
                <use href="../assets/img/new/sprite.svg#cross-white"></use>
              </svg>
            </button>

            <nav class="header__nav">
              <ul class="header__menu header__menu--collapse">
                <li><a href="#promo">Monopoly life</a></li>
                <li><a href="#project">Наши проекты</a></li>
                <li><a href="#video">Как это работает?</a></li>
                <li><a href="#faq">О площадке</a></li>
                <li><a href="#features">Преимущества</a></li>
                <li><a href="#why-project">Почему стоит поучаствовать?</a></li>
              </ul>

              <div class="header__social">
                <p>Мы в социальных сетях:</p>

                <ul class="social">
                  <li>
                    <a href="#" target="_blank">
                      <svg width="11" height="24">
                        <use href="../assets/img/new/sprite.svg#fb"></use>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/MonopolyLife_RUS" target="_blank">
                      <svg width="28" height="24">
                        <use href="../assets/img/new/sprite.svg#telegram"></use>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/monopolylife.ru?utm_medium=copy_link"
                      target="_blank"
                    >
                      <svg width="24" height="24">
                        <use href="../assets/img/new/sprite.svg#inst"></use>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UC-9c_nnHDZAflOquOjiGcKw"
                      target="_blank"
                    >
                      <svg width="34" height="24">
                        <use href="../assets/img/new/sprite.svg#youtube"></use>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>

    <main class="main">
      <section id="promo" class="scene scene--large promo">
        <div class="grid">
          <div class="grid__item">
            <div class="swiper-container promo__slider">
              <div class="swiper-wrapper">
                <div class="swiper-slide promo__slide">
                  <div class="promo__item">
                    <div class="promo__content">
                      <div class="promo__title">
                        <h1>
                          Общая концепция игры
                          <span class="nowrap">Monopoly Life</span>
                        </h1>
                      </div>

                      <div class="promo__text">
                        <p>
                          Площадка для реального бизнеса «Monopoly Life»,
                          предлагает каждому желающему, стать совладельцем
                          действующего бизнеса и получать пассивный доход.
                        </p>

                        <p>
                          Для участия в игре не требуются специальные знания, ни
                          опыта ведения бизнеса, ни больших вложений!
                        </p>

                        <p>Увеличь свой доход играючи!</p>
                      </div>
                    </div>

                    <div class="promo__accent">
                      <div class="promo__frame promo__frame--custom">
                        <img src="../assets/img/new/a1.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide promo__slide">
                  <div class="promo__item">
                    <div class="promo__content">
                      <div class="promo__title">
                        <h2>
                          Коллективные инвестиции с <span class="nowrap"
                            >Monopoly Life</span
                          >
                        </h2>
                      </div>

                      <div class="promo__text">
                        <p>
                          Принцип такого инвестирования позволяет уменьшить ваши
                          риски, теперь для того что бы попробовать, не нужно
                          выкупать бизнес целиком, достаточно купить минимальный
                          кусочек. Такой подход, делает участия людей в бизнесе
                          с небольшим капиталом доступным.
                        </p>

                        <p>
                          Для совсем мелких участников мы разработали формат
                          игры, а для крупных инвесторов доступны варианты
                          участия в проектах с юридическим оформлением через
                          кооператив.
                        </p>
                      </div>
                    </div>

                    <div class="promo__accent">
                      <div class="promo__frame">
                        <img src="../assets/img/new/a2.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide promo__slide">
                  <div class="promo__item">
                    <div class="promo__content">
                      <div class="promo__title">
                        <h2>Биржа <span class="nowrap">Monopoly Life</span></h2>
                      </div>

                      <div class="promo__text">
                        <p>
                          Всё можно купить и продать! Как и любая другая биржа
                          мы создаем ее для того, чтобы наши игроки и инвесторы
                          могли продавать, покупать и обмениваться долями на
                          внутреннем рынке площадки, что бы в конечном итоге
                          заработать или выкупить понравившийся бизнес целиком.
                        </p>

                        <p>
                          Определяя стратегию торговли, Вы управляете стратегией
                          в игре!
                        </p>

                        <p>Покупать или продавать – решать только Вам!</p>
                      </div>
                    </div>

                    <div class="promo__accent">
                      <div class="promo__frame">
                        <img src="../assets/img/new/a3.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="swiper-button-prev promo__prev"></div>
              <div class="swiper-button-next promo__next"></div>
            </div>
          </div>
        </div>

        <div class="promo__scroll">
          <span>Scroll</span>

          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </section>

      <section id="project" class="scene scene--large project">
        <div class="grid">
          <div class="grid__item">
            <div class="scene__title">
              <h2>Наши проекты</h2>
            </div>
          </div>
        </div>

        <div class="grid grid--triple">
        <project-card v-for="i in sortProjects" :key="i.id" :i="i"  />
        </div>

        <div class="grid">
          <div class="grid__item">
            <div class="project__action">
              <button @click="routerPass('projects')" class="btn btn--transparent">Все проекты</button>
            </div>
          </div>
        </div>
      </section>

      <section id="video" class="scene scene--large video">
        <div class="grid">
          <div class="grid__item">
            <div class="scene__title">
              <h2>Как это работает?</h2>
            </div>
          </div>
        </div>

        <div class="grid">
          <div class="grid__item">
            <div class="video__frame">
              <iframe
                width="1280"
                height="720"
                src="https://www.youtube.com/embed/5IKPxffsmEo"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" class="scene scene--large faq">
        <div class="grid">
          <div class="grid__item">
            <div class="faq__title">
              <h2>О площадке</h2>
            </div>

            <div class="faq__subtitle">
              <p>
                «Площадка для реального бизнеса «Monopoly Life», предлагает
                каждому желающему стать совладельцем действующего бизнеса и
                получать пассивный доход.
              </p>
            </div>
          </div>

          <div class="grid__item">
            <div class="faq__image">
              <img src="../assets/img/new/pole.png" alt="" />
            </div>
          </div>
        </div>

        <div class="grid">
          <div class="grid__item">
            <div class="faq__content">
              <p>
                За подробностями о том, как подбирается бизнес, как можно
                увеличить свой доход, что будет если приобрести золотую или
                платиновую фишку, вы можете найти
                <span class="link js-modal-open" data-target="#modal-faq"
                  >здесь</span
                >.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" class="scene scene--large features">
        <div class="grid">
          <div class="grid__item">
            <div class="scene__title features__title">
              <h2>Преимущества</h2>
            </div>
          </div>
        </div>

        <div class="grid">
          <div class="grid__item features__main">
            <div class="swiper-container features__slider">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="features__content">
                    <div class="features__subtitle">
                      <p>для игрока</p>
                    </div>

                    <div class="features__promo">
                      <img src="../assets/img/new/Investor.svg" alt="" />
                    </div>

                    <div class="features__text">
                      <ul class="features__list">
                        <li>
                          <div class="features__image">
                            <img
                              src="../assets/img/new/features_1.svg"
                              width="80"
                              height="80"
                              alt=""
                            />
                          </div>

                          <div class="features__desc">
                            Пассивный доход, мобильность
                          </div>
                        </li>
                        <li>
                          <div class="features__image">
                            <img
                              src="../assets/img/new/features_2.svg"
                              width="80"
                              height="80"
                              alt=""
                            />
                          </div>

                          <div class="features__desc">
                            Возможность стать директором
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide features__slide">
                  <div class="features__content">
                    <div class="features__subtitle">
                      <p>для выставившего бизнес на площадку</p>
                    </div>

                    <div class="features__promo">
                      <img src="../assets/img/new/Company.svg" alt="" />
                    </div>

                    <div class="features__text">
                      <ul class="features__list">
                        <li>
                          <div class="features__image">
                            <img
                              src="../assets/img/new/features_3.svg"
                              width="80"
                              height="80"
                              alt=""
                            />
                          </div>

                          <div class="features__desc">
                            Пассивный доход, мобильность
                          </div>
                        </li>
                        <li>
                          <div class="features__image">
                            <img
                              src="../assets/img/new/features_4.svg"
                              width="80"
                              height="80"
                              alt=""
                            />
                          </div>

                          <div class="features__desc">
                            Возможность стать директором
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="swiper-button-prev features__prev js-features-button"
              ></div>
              <div
                class="swiper-button-next features__next js-features-button"
              ></div>
            </div>
          </div>
        </div>
      </section>

      <section id="why-project" class="scene scene--large why-project">
        <div class="grid">
          <div class="grid__item">
            <div class="scene__title">
              <h2>Почему стоит поучаствовать в проекте?</h2>
            </div>
          </div>
        </div>

        <div class="grid">
          <div class="grid__item">
            <div class="why-project__steps">
              <div class="why-project__pacman">
                <img
                  src="../assets/img/new/pacman.svg"
                  width="418"
                  height="430"
                  alt=""
                />
              </div>

              <div class="why-project__content">
                <div class="swiper-container why-project__slider">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <ul class="why-project__coins why-project__coins--first">
                        <li>
                          <div class="round round--small"></div>
                        </li>
                        <li class="why-project__desc">
                          <div class="round">
                            <img src="../assets/img/new/coin.svg" alt="" />
                          </div>

                          <p class="round__text">
                            Доступно <br />
                            для каждого
                          </p>
                        </li>
                        <li>
                          <div class="round round--small"></div>
                        </li>
                        <li class="hidden-xl">
                          <div class="round round--small"></div>
                        </li>
                      </ul>
                    </div>

                    <div class="swiper-slide">
                      <ul class="why-project__coins">
                        <li>
                          <div class="round round--small"></div>
                        </li>
                        <li class="hidden-xs">
                          <div class="round round--small"></div>
                        </li>
                        <li class="why-project__desc">
                          <div class="round">
                            <img src="../assets/img/new/coin.svg" alt="" />
                          </div>

                          <p class="round__text">Безграничный рост прибыли</p>
                        </li>
                        <li>
                          <div class="round round--small"></div>
                        </li>
                        <li class="hidden-xl">
                          <div class="round round--small"></div>
                        </li>
                      </ul>
                    </div>

                    <div class="swiper-slide">
                      <ul class="why-project__coins">
                        <li>
                          <div class="round round--small"></div>
                        </li>
                        <li class="hidden-xs">
                          <div class="round round--small"></div>
                        </li>
                        <li class="why-project__desc">
                          <div class="round">
                            <img src="../assets/img/new/coin.svg" alt="" />
                          </div>

                          <p class="round__text">
                            Пассивный <br />
                            доход
                          </p>
                        </li>
                        <li>
                          <div class="round round--small"></div>
                        </li>
                        <li class="hidden-xl">
                          <div class="round round--small"></div>
                        </li>
                      </ul>
                    </div>

                    <div class="swiper-slide">
                      <ul class="why-project__coins">
                        <li>
                          <div class="round round--small"></div>
                        </li>
                        <li class="hidden-xs">
                          <div class="round round--small"></div>
                        </li>
                        <li class="why-project__desc">
                          <div class="round">
                            <img src="../assets/img/new/coin.svg" alt="" />
                          </div>

                          <p class="round__text">
                            Не требует <br />
                            специальных <br />
                            знаний
                          </p>
                        </li>
                        <li>
                          <div class="round round--small"></div>
                        </li>
                        <li class="hidden-xl">
                          <div class="round round--small"></div>
                        </li>
                      </ul>
                    </div>

                    <div class="swiper-slide">
                      <ul class="why-project__coins">
                        <li>
                          <div class="round round--small"></div>
                        </li>
                        <li class="hidden-xs">
                          <div class="round round--small"></div>
                        </li>
                        <li class="why-project__desc">
                          <div class="round">
                            <img src="../assets/img/new/coin.svg" alt="" />
                          </div>

                          <p class="round__text">
                            Возможность <br />
                            стать владельцем <br />
                            бизнеса
                          </p>
                        </li>
                        <li>
                          <div class="round round--small"></div>
                        </li>
                        <li class="hidden-xl">
                          <div class="round round--small"></div>
                        </li>
                      </ul>
                    </div>

                    <div class="swiper-slide js-target-slider"></div>

                    <div class="swiper-slide"></div>
                  </div>

                  <div class="swiper-button-next why-project__next"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid">
          <div class="grid__item">
            <div class="project__action">
              <button class="btn js-modal-open" data-target="#modal-form">
                Теперь я готов играть
              </button>
            </div>
          </div>
        </div>
      </section>

      <div id="modal-faq" class="modal modal--full" data-scroll-lock-scrollable>
        <div class="modal__overlay"></div>

        <div class="modal__window">
          <div class="modal__close">
            <button class="js-modal-close" aria-label="Закрыть" type="button">
              <svg width="32" height="32">
                <use href="../assets/img/new/sprite.svg#cross"></use>
              </svg>
            </button>
          </div>

          <div class="modal__content">
            <section class="scene faq-info">
              <div class="grid">
                <div class="grid__item">
                  <div class="faq-info__title">
                    <h2>Ответы на вопросы</h2>
                  </div>
                </div>
              </div>

              <div class="grid faq-info__main">
                <div class="grid__item">
                  <div class="faq-info__list">
                    <div class="faq-info__item">
                      <div
                        class="faq-info__toggle js-collapse-faq-toggle"
                        data-target-faq="#question-1"
                      >
                        <div class="faq-info__question">
                          <h3>О площадке «Monopoly Life»</h3>
                        </div>

                        <div class="faq-info__icon">
                          <svg width="18" height="10">
                            <use
                              href="../assets/img/new/sprite.svg#arrow-black"
                            ></use>
                          </svg>
                        </div>
                      </div>

                      <div class="faq-info__collapse" id="question-1">
                        <div class="faq-info__text">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Doloremque ducimus expedita tenetur in impedit
                            provident excepturi. Cumque sunt cum perferendis?
                            Dignissimos veritatis corrupti labore quia, neque
                            asperiores voluptate quis non!
                          </p>

                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Doloremque ducimus expedita tenetur in impedit
                            provident excepturi. Cumque sunt cum perferendis?
                            Dignissimos veritatis corrupti labore quia, neque
                            asperiores voluptate quis non!
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="faq-info__item">
                      <div
                        class="faq-info__toggle js-collapse-faq-toggle"
                        data-target-faq="#question-2"
                      >
                        <div class="faq-info__question">
                          <h3>О площадке «Monopoly Life»</h3>
                        </div>

                        <div class="faq-info__icon">
                          <svg width="18" height="10">
                            <use
                              href="../assets/img/new/sprite.svg#arrow-black"
                            ></use>
                          </svg>
                        </div>
                      </div>

                      <div class="faq-info__collapse" id="question-2">
                        <div class="faq-info__text">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Doloremque ducimus expedita tenetur in impedit
                            provident excepturi. Cumque sunt cum perferendis?
                            Dignissimos veritatis corrupti labore quia, neque
                            asperiores voluptate quis non!
                          </p>

                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Doloremque ducimus expedita tenetur in impedit
                            provident excepturi. Cumque sunt cum perferendis?
                            Dignissimos veritatis corrupti labore quia, neque
                            asperiores voluptate quis non!
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="faq-info__item">
                      <div
                        class="faq-info__toggle js-collapse-faq-toggle"
                        data-target-faq="#question-3"
                      >
                        <div class="faq-info__question">
                          <h3>О площадке «Monopoly Life»</h3>
                        </div>

                        <div class="faq-info__icon">
                          <svg width="18" height="10">
                            <use
                              href="../assets/img/new/sprite.svg#arrow-black"
                            ></use>
                          </svg>
                        </div>
                      </div>

                      <div class="faq-info__collapse" id="question-3">
                        <div class="faq-info__text">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Doloremque ducimus expedita tenetur in impedit
                            provident excepturi. Cumque sunt cum perferendis?
                            Dignissimos veritatis corrupti labore quia, neque
                            asperiores voluptate quis non!
                          </p>

                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Doloremque ducimus expedita tenetur in impedit
                            provident excepturi. Cumque sunt cum perferendis?
                            Dignissimos veritatis corrupti labore quia, neque
                            asperiores voluptate quis non!
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="faq-info__item">
                      <div
                        class="faq-info__toggle js-collapse-faq-toggle"
                        data-target-faq="#question-4"
                      >
                        <div class="faq-info__question">
                          <h3>О площадке «Monopoly Life»</h3>
                        </div>

                        <div class="faq-info__icon">
                          <svg width="18" height="10">
                            <use
                              href="../assets/img/new/sprite.svg#arrow-black"
                            ></use>
                          </svg>
                        </div>
                      </div>

                      <div class="faq-info__collapse" id="question-4">
                        <div class="faq-info__text">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Doloremque ducimus expedita tenetur in impedit
                            provident excepturi. Cumque sunt cum perferendis?
                            Dignissimos veritatis corrupti labore quia, neque
                            asperiores voluptate quis non!
                          </p>

                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Doloremque ducimus expedita tenetur in impedit
                            provident excepturi. Cumque sunt cum perferendis?
                            Dignissimos veritatis corrupti labore quia, neque
                            asperiores voluptate quis non!
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="faq-info__item">
                      <div
                        class="faq-info__toggle js-collapse-faq-toggle"
                        data-target-faq="#question-5"
                      >
                        <div class="faq__question">
                          <h3>О площадке «Monopoly Life»</h3>
                        </div>

                        <div class="faq-info__icon">
                          <svg width="18" height="10">
                            <use
                              href="../assets/img/new/sprite.svg#arrow-black"
                            ></use>
                          </svg>
                        </div>
                      </div>

                      <div class="faq-info__collapse" id="question-5">
                        <div class="faq-info__text">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Doloremque ducimus expedita tenetur in impedit
                            provident excepturi. Cumque sunt cum perferendis?
                            Dignissimos veritatis corrupti labore quia, neque
                            asperiores voluptate quis non!
                          </p>

                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Doloremque ducimus expedita tenetur in impedit
                            provident excepturi. Cumque sunt cum perferendis?
                            Dignissimos veritatis corrupti labore quia, neque
                            asperiores voluptate quis non!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>

    <footer class="footer">
      <div class="footer__wrap">
        <div class="footer__list">
          <div class="footer__logo">
            <picture>
              <source
                srcset="../assets/img/new/logo_mono_2.svg"
                media="(max-width: 767px)"
              />
              <img src="../assets/img/new/logo_mono.svg" alt="" />
            </picture>

            <p class="footer__copy">© Monopoly Life 2020</p>
          </div>

          <div class="footer__doc">
            <a href="#">Пользовательское соглашение</a>
            <a href="#">Лицензионное соглашение</a>
            <a href="#">Политика конфиденциальности</a>
          </div>

          <div class="footer__phone">
            <ul>
              <li>
                <span>Телефон поддержки:</span
                ><a href="tel:+79873434344">+7 (987) 34-34-344</a>
              </li>
              <li>
                <span>Разместить проект:</span
                ><a href="tel:+79873434344">+7 (987) 34-34-344</a>
              </li>
            </ul>
          </div>

          <div class="footer__social">
            <p>Мы в социальных сетях:</p>

            <ul class="social social--dark">
              <li>
                <a href="#" target="_blank">
                  <svg width="11" height="24">
                    <use href="../assets/img/new/sprite.svg#fb"></use>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://t.me/MonopolyLife_RUS" target="_blank">
                  <svg width="28" height="24">
                    <use href="../assets/img/new/sprite.svg#telegram"></use>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/monopolylife.ru?utm_medium=copy_link"
                  target="_blank"
                >
                  <svg width="24" height="24">
                    <use href="../assets/img/new/sprite.svg#inst"></use>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UC-9c_nnHDZAflOquOjiGcKw"
                  target="_blank"
                >
                  <svg width="34" height="24">
                    <use href="../assets/img/new/sprite.svg#youtube"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div class="footer__address">
            <p>
              Москва, Каширское шоссе, 3 <br />
              строение 2/9, офис 613
            </p>
            <p>ОГРН 1107746618385</p>
            <p>ИНН 7722724252</p>
          </div>

          <div class="footer__desc">
            <p>
              Все материалы, представленные на данном Сайте, носят исключительно
              ознакомительный характер, они не являются предложением или советом
              по покупке либо продаже долей компаний в любом виде и не должны
              рассматриваться как рекомендации к подобного рода действиям.
              Компания не предоставляет Пользователю советов и/или рекомендаций
              по заключению сделок, и во всех случаях Пользователь по своему
              единоличному усмотрению, на свой страх и риск, принимает решение о
              заключении сделок.
            </p>
          </div>
        </div>
      </div>
    </footer>

    <div class="navigation">
      <ul class="navigation__list">
        <li class="navigation__item">
          <a class="navigation__link" href="#promo"></a>
        </li>
        <li class="navigation__item">
          <a class="navigation__link" href="#project"></a>
        </li>
        <li class="navigation__item">
          <a class="navigation__link" href="#video"></a>
        </li>
        <li class="navigation__item">
          <a class="navigation__link" href="#faq"></a>
        </li>
        <li class="navigation__item">
          <a class="navigation__link" href="#features"></a>
        </li>
        <li class="navigation__item">
          <a class="navigation__link" href="#why-project"></a>
        </li>
      </ul>
    </div>

    <div id="modal-form" class="modal modal--full" data-scroll-lock-scrollable>
      <div class="modal__overlay"></div>

      <div class="modal__window">
        <div class="modal__close">
          <button class="js-modal-close" aria-label="Закрыть" type="button">
            <svg width="32" height="32">
              <use href="../assets/img/new/sprite.svg#cross"></use>
            </svg>
          </button>
        </div>

        <div class="modal__content">
          <section class="scene registration">
            <div class="grid registration__list">
              <div class="grid__item">
                <div class="registration__title">
                  <h2>Скоро запуск!</h2>
                </div>

                <div class="registration__subtitle">
                  <p>
                    А сейчас время подарков! Заполни форму, что бы не пропустить
                    СТАРТ и получить приятный бонус!
                  </p>
                </div>
              </div>

              <div class="grid__item">
                <form class="form">
                  <div class="form__item">
                    <div class="form__row">
                      <div class="form__control">
                        <input
                          class="form__input"
                          type="text"
                          name="name"
                          placeholder="Ф.И.О."
                          required
                        />
                      </div>
                    </div>

                    <div class="form__row">
                      <div class="form__control">
                        <input
                          class="form__input input-phone"
                          name="phone"
                          placeholder="+7 (XXX) XXX-XX-XX"
                          required
                        />
                      </div>

                      <div class="form__control">
                        <input
                          class="form__input"
                          type="email"
                          name="email"
                          placeholder="e-mail"
                          required
                        />
                      </div>
                    </div>

                    <div class="form__row">
                      <div class="form__control">
                        <p>Приоритетный для Вас способ оповещения:</p>
                      </div>

                      <div class="form__control">
                        <input type="radio" name="connection" />
                        <span>телефон</span>
                      </div>

                      <div class="form__control">
                        <input type="radio" name="connection" />
                        <span>e-mail</span>
                      </div>
                    </div>

                    <div class="form__row">
                      <div class="form__control">
                        <textarea
                          class="form__textarea"
                          placeholder="Комментарий"
                          rows="5"
                        ></textarea>
                      </div>
                    </div>

                    <div class="form__row form__row--action">
                      <div class="form__control" style="text-align: center">
                        <button
                          class="btn js-modal-open"
                          data-target="#modal-submit"
                          type="button"
                        >
                          Отправить
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>

    <div
      id="modal-submit"
      class="modal modal--full"
      data-scroll-lock-scrollable
    >
      <div class="modal__overlay"></div>

      <div class="modal__window">
        <div class="modal__close">
          <button class="js-modal-close" aria-label="Закрыть" type="button">
            <svg width="32" height="32">
              <use href="../assets/img/new/sprite.svg#cross"></use>
            </svg>
          </button>
        </div>

        <div class="modal__content">
          <section class="scene success">
            <div class="grid success__list">
              <div class="grid__item">
                <div class="success__title">
                  <h2>Ура!</h2>
                </div>

                <div class="success__subtitle">
                  <p>
                    Мы благодарим вас за регистрацию и интерес к нашему проекту!
                  </p>
                </div>
              </div>

              <div class="grid__item">
                <div class="success__main">
                  <div class="success__image">
                    <img src="../assets/img/new/coin.svg" alt="" />
                  </div>

                  <div class="success__desc">
                    <p>Ваш бонус - 5000 монет</p>

                    <p>1 монета = 1 рубль</p>
                  </div>

                  <div class="success__text">
                    <p>
                      Они будут начислены вам в личном кабинете пользователя,
                      после запуска проекта
                    </p>
                  </div>

                  <div class="success__social">
                    <p>Оставайтесь с нами в социальных сетях:</p>

                    <ul class="social">
                      <li>
                        <a href="#">
                          <img
                            src="../assets/img/new/fb_icon.svg"
                            width="11"
                            height="24"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="../assets/img/new/telegram_icon.svg"
                            width="24"
                            height="24"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="../assets/img/new/inst_icon.svg"
                            width="24"
                            height="24"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="../assets/img/new/ytb_icon.svg"
                            width="34"
                            height="24"
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { gsap, ScrollTrigger } from "gsap/all";
import Swiper from "swiper";
import ProjectCard from '../components/new-home/project-card.vue';
import {mapState} from "vuex"

export default {
    components:{
        ProjectCard
    },
  methods: {
    initAll() {
    
    ProjectCard  // "use strict";
      document.querySelector(".js-collapse-faq-toggle") &&
        document.querySelectorAll(".js-collapse-faq-toggle").forEach((e) => {
          e.addEventListener("click", () => {
            if (e.classList.contains("faq-info__toggle--show"))
              document.querySelectorAll(".faq-info__collapse").forEach((e) => {
                e.classList.remove("faq-info__collapse--show");
              }),
                document.querySelectorAll(".faq-info__toggle").forEach((e) => {
                  e.classList.remove("faq-info__toggle--show");
                });
            else {
              document.querySelectorAll(".faq-info__collapse").forEach((e) => {
                e.classList.remove("faq-info__collapse--show");
              }),
                document.querySelectorAll(".faq-info__toggle").forEach((e) => {
                  e.classList.remove("faq-info__toggle--show");
                }),
                e.classList.toggle("faq-info__toggle--show");
              const t = e.getAttribute("data-target-faq");
              document
                .querySelector(t)
                .classList.toggle("faq-info__collapse--show");
            }
          });
        }),
        (function () {
          const e = document.querySelector(".features__slide"),
            t = document.querySelector(".features");
          document.querySelectorAll(".js-features-button").forEach((o) => {
            o.addEventListener("click", () => {
              e.classList.contains("swiper-slide-active")
                ? t.classList.remove("features--yellow")
                : t.classList.add("features--yellow");
            });
          });
        })(),
        (function () {
          const e = document.querySelector(".features__text");
          let t = e.offsetHeight;
          document.documentElement.style.setProperty(
            "--features-height",
            "".concat(t, "px")
          ),
            window.addEventListener("resize", () => {
              (t = e.offsetHeight),
                document.documentElement.style.setProperty(
                  "--features-height",
                  "".concat(t, "px")
                );
            });
        })(),
        (function () {
          const e = document.querySelector(".header");
          let t = e.offsetHeight;
          document.documentElement.style.setProperty(
            "--header-height",
            "".concat(t, "px")
          ),
            window.addEventListener("resize", () => {
              (t = e.offsetHeight),
                document.documentElement.style.setProperty(
                  "--header-height",
                  "".concat(t, "px")
                );
            });
        })(),
        (function () {
          const e = document.querySelector(".header__open"),
            t = document.querySelector(".header__close"),
            o = document.querySelector(".header__collapse"),
            a = document.querySelectorAll(".header__menu--collapse a");
          e.addEventListener("click", () => {
            o.classList.add("header__collapse--open"), disablePageScroll();
          }),
            t.addEventListener("click", () => {
              o.classList.remove("header__collapse--open"), enablePageScroll();
            }),
            a.forEach((e) => {
              e.addEventListener("click", (e) => {
                o.classList.remove("header__collapse--open"),
                  enablePageScroll();
              });
            });
        })();
      const inputPhones = document.querySelectorAll(".input-phone");
      inputPhones && Inputmask({ mask: "+7(999) 999-99-99" }).mask(inputPhones),
        (function () {
          if (document.querySelector(".modal")) {
            const e = () => {
              document.querySelectorAll(".modal").forEach((e) => {
                e.classList.remove("modal--show");
              });
            };
            document.querySelectorAll(".js-modal-open").forEach((t) => {
              t.addEventListener("click", () => {
                e();
                const o = t.getAttribute("data-target");
                document.querySelector(o).classList.add("modal--show"),
                  disablePageScroll();
              });
            }),
              document.querySelectorAll(".js-modal-close").forEach((e) => {
                e.addEventListener("click", () => {
                  document.querySelectorAll(".modal").forEach((e) => {
                    e.classList.remove("modal--show"), enablePageScroll();
                  });
                });
              }),
              document.querySelectorAll(".modal__overlay").forEach((e) => {
                e.addEventListener("click", () => {
                  document.querySelectorAll(".modal").forEach((e) => {
                    e.classList.remove("modal--show"), enablePageScroll();
                  });
                });
              }),
              document.addEventListener("keydown", (e) => {
                27 === e.keyCode &&
                  document.querySelectorAll(".modal").forEach((e) => {
                    e.classList.remove("modal--show"), enablePageScroll();
                  });
              });
          }
        })(),
        gsap.registerPlugin(ScrollTrigger),
        document.documentElement.clientWidth >= 1920 &&
          gsap.utils.toArray(".scene--large").forEach((e, t) => {
            ScrollTrigger.create({
              trigger: e,
              start: "top center",
              end: "bottom center",
              onEnter: () => {
                switch (t) {
                  case 0:
                    document
                      .querySelectorAll(".navigation__item")
                      .forEach((e) => {
                        e.classList.remove("navigation__item--active"),
                          e.classList.remove("navigation__item--back");
                      }),
                      document
                        .querySelector(".navigation__item:nth-child(1)")
                        .classList.add("navigation__item--active");
                    break;
                  case 1:
                    document
                      .querySelectorAll(".navigation__item")
                      .forEach((e) => {
                        e.classList.remove("navigation__item--active"),
                          e.classList.remove("navigation__item--back");
                      }),
                      document
                        .querySelector(".navigation__item:nth-child(2)")
                        .classList.add("navigation__item--active");
                    break;
                  case 2:
                    document
                      .querySelectorAll(".navigation__item")
                      .forEach((e) => {
                        e.classList.remove("navigation__item--active"),
                          e.classList.remove("navigation__item--back");
                      }),
                      document
                        .querySelector(".navigation__item:nth-child(3)")
                        .classList.add("navigation__item--active");
                    break;
                  case 3:
                    document
                      .querySelectorAll(".navigation__item")
                      .forEach((e) => {
                        e.classList.remove("navigation__item--active"),
                          e.classList.remove("navigation__item--back");
                      }),
                      document
                        .querySelector(".navigation__item:nth-child(4)")
                        .classList.add("navigation__item--active");
                    break;
                  case 4:
                    document
                      .querySelectorAll(".navigation__item")
                      .forEach((e) => {
                        e.classList.remove("navigation__item--active"),
                          e.classList.remove("navigation__item--back");
                      }),
                      document
                        .querySelector(".navigation__item:nth-child(5)")
                        .classList.add("navigation__item--active");
                    break;
                  case 5:
                    document
                      .querySelectorAll(".navigation__item")
                      .forEach((e) => {
                        e.classList.remove("navigation__item--active"),
                          e.classList.remove("navigation__item--back");
                      }),
                      document
                        .querySelector(".navigation")
                        .classList.add("navigation--dark"),
                      document
                        .querySelector(".navigation__item:nth-child(6)")
                        .classList.add("navigation__item--back");
                }
              },
              onEnterBack: () => {
                switch (t) {
                  case 0:
                    document
                      .querySelectorAll(".navigation__item")
                      .forEach((e) => {
                        e.classList.remove("navigation__item--back"),
                          e.classList.remove("navigation__item--active");
                      }),
                      document
                        .querySelector(".navigation__item:nth-child(1)")
                        .classList.add("navigation__item--active");
                    break;
                  case 1:
                    document
                      .querySelectorAll(".navigation__item")
                      .forEach((e) => {
                        e.classList.remove("navigation__item--back"),
                          e.classList.remove("navigation__item--active");
                      }),
                      document
                        .querySelector(".navigation__item:nth-child(2)")
                        .classList.add("navigation__item--back");
                    break;
                  case 2:
                    document
                      .querySelectorAll(".navigation__item")
                      .forEach((e) => {
                        e.classList.remove("navigation__item--back"),
                          e.classList.remove("navigation__item--active");
                      }),
                      document
                        .querySelector(".navigation__item:nth-child(3)")
                        .classList.add("navigation__item--back");
                    break;
                  case 3:
                    document
                      .querySelectorAll(".navigation__item")
                      .forEach((e) => {
                        e.classList.remove("navigation__item--back"),
                          e.classList.remove("navigation__item--active");
                      }),
                      document
                        .querySelector(".navigation__item:nth-child(4)")
                        .classList.add("navigation__item--back");
                    break;
                  case 4:
                    document
                      .querySelectorAll(".navigation__item")
                      .forEach((e) => {
                        e.classList.remove("navigation__item--back"),
                          e.classList.remove("navigation__item--active");
                      }),
                      document
                        .querySelector(".navigation")
                        .classList.remove("navigation--dark"),
                      document
                        .querySelector(".navigation__item:nth-child(5)")
                        .classList.add("navigation__item--back");
                    break;
                  case 5:
                    document
                      .querySelectorAll(".navigation__item")
                      .forEach((e) => {
                        e.classList.remove("navigation__item--back"),
                          e.classList.remove("navigation__item--active");
                      }),
                      document
                        .querySelector(".navigation__item:nth-child(6)")
                        .classList.add("navigation__item--active");
                }
              },
            });
          });
      const coinsArray = [],
        widthPacman =
          document.querySelector(".why-project__pacman").clientWidth / 2,
        widthPacmanMobile =
          document.querySelector(".why-project__pacman").clientWidth / 1.5,
        centerPacman =
          document.querySelector(".why-project__steps").clientWidth / 2 -
          widthPacman,
        widthCoins = document.querySelector(".why-project__coins").clientWidth,
        sizePacman = document.querySelector(".why-project__pacman").clientWidth,
        offsetCoins = -1 * (widthCoins + sizePacman),
        nextCoins = document.querySelector(".why-project__next"),
        targetSlider = document.querySelector(".js-target-slider");
      gsap.set(".why-project__pacman", { x: centerPacman }),
        ScrollTrigger.matchMedia({
          "(min-width: 768px)": function () {
            gsap.to(".why-project__pacman", {
              x: 0,
              scrollTrigger: {
                trigger: ".why-project",
                start: "top 60%",
                end: "bottom bottom",
                once: !0,
                scrub: !0,
              },
            });
          },
          "(max-width: 767px)": function () {
            gsap.to(".why-project__pacman", {
              x: -widthPacmanMobile,
              scrollTrigger: {
                trigger: ".why-project",
                start: "top 60%",
                end: "bottom bottom",
                once: !0,
                scrub: !0,
              },
            });
          },
        }),
        nextCoins.addEventListener("click", () => {
          gsap.to(".swiper-slide-active p", { opacity: 0, duration: 0.1 }),
            targetSlider.classList.contains("swiper-slide-next") &&
              (console.log("target"),
              gsap.to(".why-project__pacman", { x: centerPacman, delay: 1 }),
              gsap.to(nextCoins, { opacity: 0 }));
        }),
        (function () {
          const e = document.querySelector(".promo__frame");
          let t = e.offsetHeight;
          document.documentElement.style.setProperty(
            "--promo-height",
            "".concat(t, "px")
          ),
            window.addEventListener("resize", () => {
              (t = e.offsetHeight),
                document.documentElement.style.setProperty(
                  "--promo-height",
                  "".concat(t, "px")
                );
            });
        })(),
        (function () {
          function e(e, t) {
            const o = !!e && document.querySelector(e);
            o &&
              (t && t.preventDefault(),
              gsap.to(window, {
                duration: 2,
                scrollTo: o,
                ease: "power4.out",
              }));
          }
          document.querySelectorAll("a[href]").forEach((t) => {
            t.addEventListener("click", (o) => {
              var a;
              e(
                (a = t).protocol === window.location.protocol &&
                  a.host === window.location.host &&
                  a.pathname === window.location.pathname &&
                  a.search === window.location.search &&
                  a.hash,
                o
              );
            });
          }),
            e(window.location.hash);
        })();
      const swiperFeatures = new Swiper(".features__slider", {
          navigation: { nextEl: ".features__next", prevEl: ".features__prev" },
        }),
        swiperPromo = new Swiper(".promo__slider", {
          navigation: { nextEl: ".promo__next", prevEl: ".promo__prev" },
        }),
        swiperPacman = new Swiper(".why-project__slider", {
          slidesPerView: 1,
          speed: 750,
          navigation: { nextEl: ".why-project__next", prevEl: ".promo__prev" },
          breakpoints: { 992: { slidesPerView: 2 } },
        });
      let vh = 0.01 * window.innerHeight;
      document.documentElement.style.setProperty("--vh", "".concat(vh, "px")),
        window.addEventListener("resize", () => {
          (vh = 0.01 * window.innerHeight),
            document.documentElement.style.setProperty(
              "--vh",
              "".concat(vh, "px")
            );
        });
    },
    getProjects() {
      let options = {
        url: "projects",
        method: "get",
      };

      this.$http(options).then((res) => {
        this.$store.commit("SAVE_PROJECTS", res.data);
      });
    },
    getCategories() {
      let options = {
        url: "categories",
        method: "get",
      };

      this.$http(options).then((res) => {
        this.$store.commit("SAVE_CATEGORIES", res.data);
      });
    },
    routerPass(url){
      window.open('https://app.monopolylife.ru/'+url, '_blank')
    }
  },
  computed:{
      ...mapState(["projects", "categories"]),
      sortProjects(){
         return this.projects.slice(0,3)
      }
  },
   mounted() {
     this.getProjects();
     this.getCategories()
     this.initAll();
  },
};
</script>

<style>
</style>

</style>