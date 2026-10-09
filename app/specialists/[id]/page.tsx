import Link from "next/link";

import FacebookIcon from "@/assets/icons/auth/facebook.svg";
import InstagramIcon from "@/assets/icons/auth/instagram.svg";
import LinkedinIcon from "@/assets/icons/auth/linkedin.svg";
import TwitterIcon from "@/assets/icons/auth/twitter.svg";
import HeartIcon from "@/assets/icons/cards/heart.svg";
import StarIcon from "@/assets/icons/common/star.svg";
import OfflineRecordIcon from "@/assets/icons/details/offline-record.svg";
import OnlineRecordIcon from "@/assets/icons/details/online-record.svg";
import PhoneIcon from "@/assets/icons/details/phone.svg";
import HeaderBackIcon from "@/assets/icons/header/back-arrow.svg";
import ChatIcon from "@/assets/icons/header/chat.svg";
import GeoBtnArrowIcon from "@/assets/icons/header/geo-btn-arrow.svg";
import GeoIcon from "@/assets/icons/header/geo.svg";
import Logo from "@/assets/icons/header/logo.svg";
import ProfileIcon from "@/assets/icons/header/profile.svg";
import SearchIcon from "@/assets/icons/header/search.svg";
import EmailIcon from "@/assets/icons/input/email.svg";
import HistoryIcon from "@/assets/icons/profile/history.svg";

// Детальная страница врача (pages/specialist-details).
// Состояние: гость в хедере (кнопки записи видны), врач не в избранном, фото загружено,
// онлайн-приём доступен (isOnlineAvailable) — поэтому есть кнопка «Онлайн консультация».
// Блок отзывов — вариант авторизованного пользователя без своего отзыва (на десктопе видна форма).
// Модалка «Офлайн-запись» (ContactInfoModal) закрыта — её разметка: /clinics/[id]/contacts-modal
// (тот же компонент, заголовок здесь был бы «Офлайн-запись»).
export default function Page() {
  return (
    <main className="min-h-screen bg-background md:bg-white flex flex-col relative pb-20 md:pb-0">
      <div className="hidden md:block">
        <header className="px-4 pt-1 pb-4 bg-white md:border md:border-border-soft md:mt-6 md:py-3 w-full max-w-360 md:max-w-340 mx-auto rounded-bl-2xl rounded-br-2xl md:rounded-full">
          {/* Десктоп */}
          <div className="hidden md:block">
            <div>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <Link href="/">
                    <Logo className="w-26.5 h-6.5" />
                  </Link>

                  <div className="hidden md:block">
                    <button
                      type="button"
                      className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent"
                    >
                      <GeoIcon className="size-5" />
                      <span>Бишкек</span>
                      <GeoBtnArrowIcon className="size-5" />
                    </button>
                  </div>
                </div>

                <nav className="hidden md:flex text-foreground text-xs lg:text-base gap-6 items-center">
                  <Link href="/clinics">Клиники</Link>
                  <Link href="/specialists">Специалисты</Link>
                  <Link href="/services">Услуги</Link>
                  <Link href="/blog">Блог</Link>
                </nav>

                {/* Mobile City Selector */}
                <div className="md:hidden">
                  <button
                    type="button"
                    className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent"
                  >
                    <GeoIcon className="size-5" />
                    <span>Бишкек</span>
                    <GeoBtnArrowIcon className="size-5" />
                  </button>
                </div>

                <div className="hidden md:flex gap-3">
                  <Link href="/record">
                    <button
                      type="button"
                      className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] bg-primary text-white active:bg-primary-dark hover:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] px-5 whitespace-nowrap"
                    >
                      <span>Записаться на приём</span>
                    </button>
                  </Link>
                  <button
                    type="button"
                    aria-label="Поиск"
                    className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent"
                  >
                    <SearchIcon className="size-5" />
                  </button>
                  <Link href="/login">
                    <button
                      type="button"
                      aria-label="Чат"
                      className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent"
                    >
                      <span className="relative">
                        <ChatIcon className="size-5" />
                      </span>
                    </button>
                  </Link>
                  <Link href="/login">
                    <button
                      type="button"
                      aria-label="Профиль"
                      className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent"
                    >
                      <ProfileIcon className="size-5" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Мобильный */}
          <div className="md:hidden">
            <div>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <Link href="/">
                    <Logo className="w-26.5 h-6.5" />
                  </Link>

                  <div className="hidden md:block">
                    <button
                      type="button"
                      className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent"
                    >
                      <GeoIcon className="size-5" />
                      <span>Бишкек</span>
                      <GeoBtnArrowIcon className="size-5" />
                    </button>
                  </div>
                </div>

                <nav className="hidden md:flex text-foreground text-xs lg:text-base gap-6 items-center">
                  <Link href="/clinics">Клиники</Link>
                  <Link href="/specialists">Специалисты</Link>
                  <Link href="/services">Услуги</Link>
                  <Link href="/blog">Блог</Link>
                </nav>

                {/* Mobile City Selector */}
                <div className="md:hidden">
                  <button
                    type="button"
                    className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent"
                  >
                    <GeoIcon className="size-5" />
                    <span>Бишкек</span>
                    <GeoBtnArrowIcon className="size-5" />
                  </button>
                </div>

                <div className="hidden md:flex gap-3">
                  <Link href="/record">
                    <button
                      type="button"
                      className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] bg-primary text-white active:bg-primary-dark hover:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] px-5 whitespace-nowrap"
                    >
                      <span>Записаться на приём</span>
                    </button>
                  </Link>
                  <button
                    type="button"
                    aria-label="Поиск"
                    className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent"
                  >
                    <SearchIcon className="size-5" />
                  </button>
                  <Link href="/login">
                    <button
                      type="button"
                      aria-label="Чат"
                      className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent"
                    >
                      <span className="relative">
                        <ChatIcon className="size-5" />
                      </span>
                    </button>
                  </Link>
                  <Link href="/login">
                    <button
                      type="button"
                      aria-label="Профиль"
                      className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent"
                    >
                      <ProfileIcon className="size-5" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      <div className="flex-1 w-full max-w-350 mx-auto md:px-8 flex flex-col pt-0 md:pt-6 pb-10">
        <div className="hidden md:flex text-sm text-secondary mb-6 items-center gap-2">
          <Link href="/" className="hover:text-primary transition-colors">
            Главная
          </Link>
          <span>•</span>
          <Link href="/specialists" className="hover:text-primary transition-colors">
            Специалисты
          </Link>
          <span>•</span>
          <span className="text-primary">Асанова Айгуль Бакытовна</span>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          <div className="h-fit w-full md:sticky md:top-0 md:w-130 shrink-0">
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 md:hidden">
              <Link
                href="/specialists"
                aria-label="Вернуться назад"
                className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent bg-white/80 backdrop-blur"
              >
                <HeaderBackIcon className="size-4" />
              </Link>
              <button
                type="button"
                aria-label="Сохранить врача"
                className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent bg-white/80 backdrop-blur"
              >
                <HeartIcon className="size-5 text-[#FFA18D]" />
              </button>
            </div>

            <div className="relative w-full h-85 md:h-125 bg-[#FFEFE5] md:rounded-3xl overflow-hidden flex items-center justify-center">
              <img
                src="/images/doctors/doctor-1.png"
                alt="Асанова Айгуль Бакытовна"
                className="absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-300 opacity-100"
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col rounded-t-3xl md:rounded-none -mt-6 md:mt-0 relative z-10 p-2 md:p-0">
            <div className="bg-white rounded-[20px] p-4 border border-border-soft">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-2xl md:text-3xl font-semibold text-foreground leading-tight">
                      Асанова Айгуль Бакытовна
                    </h1>
                  </div>
                  <p className="text-muted text-base">Кардиолог</p>

                  <div className="mt-3 flex flex-col gap-1.5">
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <span className="text-primary">
                        <GeoIcon className="size-4" />
                      </span>
                      <span>Медицинский центр «Медиком»</span>
                      <span className="text-muted ml-auto font-medium">
                        2500 с
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <span className="text-primary">
                        <GeoIcon className="size-4" />
                      </span>
                      <span>Кардиоцентр «Кордиа»</span>
                      <span className="text-muted ml-auto font-medium">
                        2800 с
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="Сохранить врача"
                  className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-3.5 border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent"
                >
                  <HeartIcon className="size-5" />
                </button>
              </div>

              <div className="flex items-center justify-between bg-white border border-border-soft rounded-2xl p-4 divide-x divide-border-soft">
                <div className="flex flex-col items-center flex-1">
                  <span className="text-base md:text-[20px] font-medium text-foreground">
                    <span>4.90</span>
                  </span>
                  <span className="text-sm text-muted">Оценка</span>
                </div>
                <div className="flex flex-col items-center flex-1">
                  <span className="text-base md:text-[20px] font-medium text-foreground">
                    <span>12</span> лет
                  </span>
                  <span className="text-sm text-muted">Стаж</span>
                </div>
                <div className="flex flex-col items-center flex-1">
                  <span className="text-base md:text-[20px] font-medium text-foreground">
                    <span>128</span>
                  </span>
                  <span className="text-sm text-muted">Отзывов</span>
                </div>
              </div>
            </div>

            <div className="hidden md:flex gap-4 mb-10 mt-4">
              <button
                type="button"
                className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-12 text-sm md:text-base px-6 border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] flex-1 bg-[#FFF2F0] border-transparent text-primary hover:bg-[#FFEAE5]"
              >
                <span>
                  <span className="flex gap-2.5">
                    <OfflineRecordIcon className="size-5" />
                    Офлайн-запись
                  </span>
                </span>
              </button>
              <Link href="/record?doctor=1&mode=online" className="flex-1 flex">
                <button
                  type="button"
                  className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-12 text-sm md:text-base px-6 bg-primary text-white active:bg-primary-dark hover:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] flex-1"
                >
                  <span>
                    <span className="flex gap-2.5">
                      <OnlineRecordIcon className="size-6" />
                      Онлайн консультация
                    </span>
                  </span>
                </button>
              </Link>
            </div>

            <div className="flex flex-col gap-2 md:gap-10 md:border-none pt-8 md:pt-0">
              {/* Образование */}
              <div className="bg-white rounded-[20px] p-4 border border-border-soft">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground">Образование</h3>
                  <button
                    type="button"
                    className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 relative after:absolute after:inset-x-0 after:-inset-y-2 after:content-[''] active:bg-border-soft hover:bg-background text-sm text-primary hover:text-primary-dark px-0 h-auto"
                  >
                    <span>Подробнее</span>
                  </button>
                </div>

                <div
                  className="text-muted text-sm md:text-base leading-relaxed transition-all duration-300"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  <div className="flex flex-col gap-1">
                    <p>2008–2014 — Кыргызская государственная медицинская академия им. И. К. Ахунбаева, лечебное дело</p>
                    <p>2014–2016 — Клиническая ординатура по кардиологии, Национальный центр кардиологии и терапии им. М. Миррахимова</p>
                    <p>2019 — Повышение квалификации «Эхокардиография в клинической практике», Алматы</p>
                    <p>2023 — Курс «Современные подходы к лечению артериальной гипертензии», Москва</p>
                  </div>
                </div>
              </div>

              {/* О враче */}
              <div className="bg-white rounded-[20px] p-4 border border-border-soft">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground">О враче</h3>
                  <button
                    type="button"
                    className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 relative after:absolute after:inset-x-0 after:-inset-y-2 after:content-[''] active:bg-border-soft hover:bg-background text-sm text-primary hover:text-primary-dark px-0 h-auto"
                  >
                    <span>Подробнее</span>
                  </button>
                </div>

                <div
                  className="text-muted text-sm md:text-base leading-relaxed transition-all duration-300"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  Врач-кардиолог высшей категории. Занимается диагностикой и лечением артериальной
                  гипертензии, нарушений ритма сердца, ишемической болезни и сердечной
                  недостаточности. Проводит ЭКГ, эхокардиографию и расшифровку суточного
                  мониторирования. Особое внимание уделяет профилактике сердечно-сосудистых
                  заболеваний у пациентов после 40 лет и ведению беременных с патологией сердца.
                </div>
              </div>

              {/* Опыт работы */}
              <div className="bg-white rounded-[20px] p-4 border border-border-soft">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground">Опыт работы</h3>
                </div>

                <div className="text-muted text-sm md:text-base leading-relaxed transition-all duration-300">
                  <div className="flex flex-col gap-5">
                    <div className="relative pl-5">
                      <span className="absolute left-0 top-2.5 w-2.5 h-0.5 bg-primary" />
                      <div className="mb-1">
                        <span className="text-foreground font-medium text-sm md:text-base">
                          2019 — наст. время{" "}
                        </span>
                        <span className="text-primary text-sm md:text-base">
                          7 лет
                        </span>
                      </div>
                      <p className="text-foreground text-sm md:text-base">
                        Медицинский центр «Медиком»
                      </p>
                      <p className="text-muted text-sm md:text-base">
                        Врач-кардиолог, заведующая кардиологическим отделением
                      </p>
                    </div>
                    <div className="relative pl-5">
                      <span className="absolute left-0 top-2.5 w-2.5 h-0.5 bg-primary" />
                      <div className="mb-1">
                        <span className="text-foreground font-medium text-sm md:text-base">
                          2016 — 2019{" "}
                        </span>
                        <span className="text-primary text-sm md:text-base">
                          3 года
                        </span>
                      </div>
                      <p className="text-foreground text-sm md:text-base">
                        Национальный центр кардиологии и терапии им. М. Миррахимова
                      </p>
                      <p className="text-muted text-sm md:text-base">
                        Врач-кардиолог стационара
                      </p>
                    </div>
                    <div className="relative pl-5">
                      <span className="absolute left-0 top-2.5 w-2.5 h-0.5 bg-primary" />
                      <div className="mb-1">
                        <span className="text-primary text-sm md:text-base">
                          Высшая квалификационная категория
                        </span>
                      </div>
                      <p className="text-foreground text-sm md:text-base">
                        Кардиоцентр «Кордиа»
                      </p>
                      <p className="text-muted text-sm md:text-base">
                        Консультант по совместительству
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Профессиональные навыки */}
              <div className="bg-white rounded-[20px] p-4 border border-border-soft">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground">Профессиональные навыки</h3>
                </div>

                <div className="text-muted text-sm md:text-base leading-relaxed transition-all duration-300">
                  <ul className="flex flex-col gap-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-medium text-lg leading-none mt-0.5">
                        —
                      </span>
                      <span className="text-muted text-sm md:text-base leading-relaxed">
                        Эхокардиография (УЗИ сердца) и расшифровка ЭКГ
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-medium text-lg leading-none mt-0.5">
                        —
                      </span>
                      <span className="text-muted text-sm md:text-base leading-relaxed">
                        Суточное мониторирование ЭКГ и артериального давления (Холтер, СМАД)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-medium text-lg leading-none mt-0.5">
                        —
                      </span>
                      <span className="text-muted text-sm md:text-base leading-relaxed">
                        Подбор антигипертензивной и антиаритмической терапии
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-medium text-lg leading-none mt-0.5">
                        —
                      </span>
                      <span className="text-muted text-sm md:text-base leading-relaxed">
                        Реабилитация после инфаркта и стентирования
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Контакты */}
              <div className="bg-white rounded-[20px] p-4 border border-border-soft">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground">Контакты</h3>
                </div>

                <div className="text-muted text-sm md:text-base leading-relaxed transition-all duration-300">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-primary">
                        <HistoryIcon className="size-5" />
                      </span>
                      <span className="text-muted text-sm md:text-base">
                        ПН-ПТ • 09:00-17:00
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-primary">
                        <PhoneIcon className="size-5" />
                      </span>
                      <span className="text-muted text-sm md:text-base">
                        +996 700 45-12-89
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-primary">
                        <EmailIcon className="size-5" />
                      </span>
                      <span className="text-muted text-sm md:text-base">
                        a.asanova@medicom.kg
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Секция отзывов (widgets/reviews) */}
        <div className="mt-10 md:mt-20 mb-10 md:mb-20 md:px-0 bg-white rounded-[20px] p-4 mx-2">
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <h2 className="text-2xl font-semibold text-foreground">Отзывы</h2>
            <Link
              href="/specialists/1/reviews"
              className="text-primary text-sm font-medium hover:underline"
            >
              Все
            </Link>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="w-full md:w-[320px] shrink-0 flex flex-col gap-5">
              {/* Статистика */}
              <div className="flex gap-4">
                <div className="flex-1 bg-white md:bg-transparent border border-border-soft rounded-2xl p-6 flex flex-col items-center md:items-start justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-[#FFA18D] p-2.5 rounded-xl size-10 flex items-center justify-center">
                      <StarIcon className="size-5 text-white" />
                    </div>
                    <span className="text-[24px] font-semibold text-foreground">4.90</span>
                  </div>
                  <span className="text-muted">Средняя оценка</span>
                </div>

                <div className="flex-1 bg-white md:bg-transparent border border-border-soft rounded-2xl p-6 flex flex-col items-center md:items-start justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-[#FFA18D] p-2.5 rounded-xl size-10 flex items-center justify-center">
                      <ChatIcon className="size-5 text-white" />
                    </div>
                    <span className="text-[24px] font-semibold text-foreground">5</span>
                  </div>
                  <span className="text-muted">Всего отзывов</span>
                </div>
              </div>

              {/* Мобильная кнопка открывает ReviewModal — открытое состояние: /specialists/[id]/review-modal */}
              <Link
                href="/specialists/1/review-modal"
                className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent md:hidden w-full bg-white"
              >
                <span>Оставить свой отзыв</span>
              </Link>

              {/* Форма — вариант авторизованного пользователя без своего отзыва */}
              <div className="hidden md:flex flex-col bg-white border border-border-soft rounded-2xl p-4">
                <h3 className="font-medium text-[20px] text-foreground mb-6">
                  Оставьте свой отзыв
                </h3>
                <span className="text-base mb-2">Оцените специалиста</span>

                {/* Звёзды: выбранная — "text-primary", невыбранная — "text-border" */}
                <div className="flex justify-center gap-5 py-4 mb-6 border border-border rounded-xl">
                  <StarIcon className="size-10 cursor-pointer transition-colors text-border" />
                  <StarIcon className="size-10 cursor-pointer transition-colors text-border" />
                  <StarIcon className="size-10 cursor-pointer transition-colors text-border" />
                  <StarIcon className="size-10 cursor-pointer transition-colors text-border" />
                  <StarIcon className="size-10 cursor-pointer transition-colors text-border" />
                </div>

                <span className="text-base mb-2">Поделитесь своим мнением</span>
                <textarea
                  className="w-full border border-border-soft rounded-xl p-3 text-sm outline-none focus:border-primary resize-none h-24 mb-4"
                  placeholder="Введите текст"
                />

                <button
                  type="button"
                  disabled
                  className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-12 text-sm md:text-base px-6 bg-primary text-white active:bg-primary-dark hover:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] w-full"
                >
                  <span>Отправить</span>
                </button>
              </div>
            </div>

            {/* Список отзывов */}
            <div className="flex-1 min-w-0 flex flex-col gap-4">
              {/* Отзыв 1 */}
              <div className="bg-white border border-border-soft rounded-[20px] flex flex-col min-w-0">
                <div className="p-5 border-b border-border-soft">
                  <p className="text-secondary text-[15px] leading-relaxed break-words">
                    Айгуль Бакытовна подробно разобрала мою кардиограмму и суточный холтер, объяснила всё простыми словами. Подобрала терапию — давление за месяц пришло в норму.
                  </p>
                  <div className="mt-3 rounded-2xl bg-surface border border-border-soft p-3">
                    <p className="text-foreground font-medium text-sm mb-1">Ответ</p>
                    <p className="text-secondary text-sm leading-relaxed break-words">
                      Нурлан, спасибо! Не забывайте про контрольный визит через три месяца.
                    </p>
                    <p className="text-muted text-xs mt-1">2026-09-21</p>
                  </div>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-10.5 rounded-full bg-[#FFF0EE] shrink-0 overflow-hidden relative flex items-center justify-center">
                      <span className="text-primary font-semibold">Н</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-foreground font-medium text-base">Нурлан Бейшеналиев</span>
                      <span className="text-muted text-sm mt-0.5">2026-09-20</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="flex items-center bg-[#FFA18D] py-1.5 px-2.5 rounded-full gap-0.5">
                      <StarIcon className="size-3.5 text-white" />
                      <StarIcon className="size-3.5 text-white" />
                      <StarIcon className="size-3.5 text-white" />
                      <StarIcon className="size-3.5 text-white" />
                      <StarIcon className="size-3.5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Отзыв 2 */}
              <div className="bg-white border border-border-soft rounded-[20px] flex flex-col min-w-0">
                <div className="p-5 border-b border-border-soft">
                  <p className="text-secondary text-[15px] leading-relaxed break-words">
                    Очень внимательный врач, никуда не торопит, отвечает на все вопросы. Записывалась онлайн — связь была отличная, рекомендации пришли сразу после консультации.
                  </p>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-10.5 rounded-full bg-[#FFF0EE] shrink-0 overflow-hidden relative flex items-center justify-center">
                      <img src="/images/hero/avatar.png" alt="Чолпон Мамбетова" className="absolute inset-0 h-full w-full object-cover" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-foreground font-medium text-base">Чолпон Мамбетова</span>
                      <span className="text-muted text-sm mt-0.5">2026-09-07</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="flex items-center bg-[#FFA18D] py-1.5 px-2.5 rounded-full gap-0.5">
                      <StarIcon className="size-3.5 text-white" />
                      <StarIcon className="size-3.5 text-white" />
                      <StarIcon className="size-3.5 text-white" />
                      <StarIcon className="size-3.5 text-white" />
                      <StarIcon className="size-3.5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Отзыв 3 */}
              <div className="bg-white border border-border-soft rounded-[20px] flex flex-col min-w-0">
                <div className="p-5 border-b border-border-soft">
                  <p className="text-secondary text-[15px] leading-relaxed break-words">
                    Грамотный специалист, назначила только нужные обследования без лишних трат. Поставил бы пять, но на приём пришлось записываться за две недели.
                  </p>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-10.5 rounded-full bg-[#FFF0EE] shrink-0 overflow-hidden relative flex items-center justify-center">
                      <span className="text-primary font-semibold">А</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-foreground font-medium text-base">Алексей Петренко</span>
                      <span className="text-muted text-sm mt-0.5">2026-08-25</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="flex items-center bg-[#FFA18D] py-1.5 px-2.5 rounded-full gap-0.5">
                      <StarIcon className="size-3.5 text-white" />
                      <StarIcon className="size-3.5 text-white" />
                      <StarIcon className="size-3.5 text-white" />
                      <StarIcon className="size-3.5 text-white" />
                      <StarIcon className="size-3.5 text-white/50" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Отзыв 4 */}
              <div className="bg-white border border-border-soft rounded-[20px] flex flex-col min-w-0">
                <div className="p-5 border-b border-border-soft">
                  <p className="text-secondary text-[15px] leading-relaxed break-words">
                    Наблюдаюсь у Айгуль Бакытовны уже третий год. Всегда помнит историю болезни, спокойно и доброжелательно всё объясняет. Спасибо за заботу!
                  </p>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-10.5 rounded-full bg-[#FFF0EE] shrink-0 overflow-hidden relative flex items-center justify-center">
                      <span className="text-primary font-semibold">А</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-foreground font-medium text-base">Аида Токтосунова</span>
                      <span className="text-muted text-sm mt-0.5">2026-08-11</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="flex items-center bg-[#FFA18D] py-1.5 px-2.5 rounded-full gap-0.5">
                      <StarIcon className="size-3.5 text-white" />
                      <StarIcon className="size-3.5 text-white" />
                      <StarIcon className="size-3.5 text-white" />
                      <StarIcon className="size-3.5 text-white" />
                      <StarIcon className="size-3.5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Отзыв 5 */}
              <div className="bg-white border border-border-soft rounded-[20px] flex flex-col min-w-0">
                <div className="p-5 border-b border-border-soft">
                  <p className="text-secondary text-[15px] leading-relaxed break-words">
                    Консультация была полезной, получил понятный план лечения. Немного не хватило времени обсудить питание, но врач предложила продолжить на повторном приёме.
                  </p>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-10.5 rounded-full bg-[#FFF0EE] shrink-0 overflow-hidden relative flex items-center justify-center">
                      <span className="text-primary font-semibold">Э</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-foreground font-medium text-base">Эмиль Урматбеков</span>
                      <span className="text-muted text-sm mt-0.5">2026-07-28</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="flex items-center bg-[#FFA18D] py-1.5 px-2.5 rounded-full gap-0.5">
                      <StarIcon className="size-3.5 text-white" />
                      <StarIcon className="size-3.5 text-white" />
                      <StarIcon className="size-3.5 text-white" />
                      <StarIcon className="size-3.5 text-white" />
                      <StarIcon className="size-3.5 text-white/50" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Интервью врача (widgets/videos-swiper) */}
        <div className="mt-10 md:mt-20 mb-10 md:mb-20 px-4 md:px-0">
          <div className="flex items-center justify-between mb-6 md:mb-8 md:hidden">
            <h2 className="text-2xl font-semibold text-foreground">
              Интервью
            </h2>
            <Link
              href="/videos"
              className="text-primary text-sm font-medium hover:underline"
            >
              Все
            </Link>
          </div>

          <section className="flex flex-col gap-6 w-full max-w-360 mx-auto pt-8 pb-0 md:pt-0 md:pb-0 px-0 md:px-0">
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-1.5">
                <h2 className="font-semibold text-xl md:text-[28px] text-foreground leading-tight">
                  Интервью
                </h2>
                <p className="hidden md:block text-sm text-secondary">
                  Ознакомьтесь с интервью этого врача
                </p>
              </div>

              <Link
                href="/videos"
                className="text-sm md:text-base text-primary shrink-0 hover:opacity-70 transition-opacity mt-1 md:mt-2"
              >
                Все
              </Link>
            </div>

            {/* Mobile: горизонтальный скролл, слайды ~87% ширины */}
            <div className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto md:hidden">
              {/* Интервью 1 */}
              <div className="snap-start shrink-0 w-[87%]">
                <a
                  href="https://www.youtube.com/watch?v=imbir-int-01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-3xl border border-[#D8DCE0] p-2 flex flex-col w-full h-auto md:h-89.25 shrink-0 hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300"
                >
                  <div className="relative w-full aspect-video md:aspect-auto md:h-55 shrink-0 overflow-hidden rounded-2xl bg-background">
                    <img
                      src="/images/videos/video-1.jpg"
                      alt="Как сохранить здоровье сердца после 40 лет"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="size-12 rounded-full bg-white/90 flex items-center justify-center shadow-md pl-0.5">
                        <svg
                          viewBox="0 0 24 24"
                          className="size-5 fill-primary stroke-primary"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 5.14v14l11-7-11-7z"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 flex-1 px-2 pt-3 pb-2 md:px-4 md:pt-4 md:pb-3">
                    <p
                      className="font-medium text-base md:text-[18px] text-foreground leading-snug overflow-hidden"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      Как сохранить здоровье сердца после 40 лет
                    </p>

                    <div className="flex items-center gap-2 text-xs md:text-sm text-secondary">
                      <svg
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 shrink-0 text-primary"
                        fill="none"
                        aria-hidden="true"
                      >
                        <ellipse
                          cx="10"
                          cy="14.583"
                          rx="5.833"
                          ry="2.917"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                        <circle
                          cx="10"
                          cy="5.833"
                          r="3.333"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="truncate text-[#313A45]">Асанова Айгуль</span>
                      <span className="shrink-0">•</span>
                      <span className="truncate">Кардиолог</span>
                    </div>
                  </div>
                </a>
              </div>
              {/* Интервью 2 */}
              <div className="snap-start shrink-0 w-[87%]">
                <a
                  href="https://www.youtube.com/watch?v=imbir-int-02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-3xl border border-[#D8DCE0] p-2 flex flex-col w-full h-auto md:h-89.25 shrink-0 hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300"
                >
                  <div className="relative w-full aspect-video md:aspect-auto md:h-55 shrink-0 overflow-hidden rounded-2xl bg-background">
                    <img
                      src="/images/videos/video-2.jpg"
                      alt="Аритмия: какие перебои в сердце требуют внимания"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="size-12 rounded-full bg-white/90 flex items-center justify-center shadow-md pl-0.5">
                        <svg
                          viewBox="0 0 24 24"
                          className="size-5 fill-primary stroke-primary"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 5.14v14l11-7-11-7z"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 flex-1 px-2 pt-3 pb-2 md:px-4 md:pt-4 md:pb-3">
                    <p
                      className="font-medium text-base md:text-[18px] text-foreground leading-snug overflow-hidden"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      Аритмия: какие перебои в сердце требуют внимания
                    </p>

                    <div className="flex items-center gap-2 text-xs md:text-sm text-secondary">
                      <svg
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 shrink-0 text-primary"
                        fill="none"
                        aria-hidden="true"
                      >
                        <ellipse
                          cx="10"
                          cy="14.583"
                          rx="5.833"
                          ry="2.917"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                        <circle
                          cx="10"
                          cy="5.833"
                          r="3.333"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="truncate text-[#313A45]">Асанова Айгуль</span>
                      <span className="shrink-0">•</span>
                      <span className="truncate">Кардиолог</span>
                    </div>
                  </div>
                </a>
              </div>
              {/* Интервью 3 */}
              <div className="snap-start shrink-0 w-[87%]">
                <a
                  href="https://www.youtube.com/watch?v=imbir-int-03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-3xl border border-[#D8DCE0] p-2 flex flex-col w-full h-auto md:h-89.25 shrink-0 hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300"
                >
                  <div className="relative w-full aspect-video md:aspect-auto md:h-55 shrink-0 overflow-hidden rounded-2xl bg-background">
                    <img
                      src="/images/videos/video-3.jpg"
                      alt="Холестерин и давление: что проверять каждый год"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="size-12 rounded-full bg-white/90 flex items-center justify-center shadow-md pl-0.5">
                        <svg
                          viewBox="0 0 24 24"
                          className="size-5 fill-primary stroke-primary"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 5.14v14l11-7-11-7z"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 flex-1 px-2 pt-3 pb-2 md:px-4 md:pt-4 md:pb-3">
                    <p
                      className="font-medium text-base md:text-[18px] text-foreground leading-snug overflow-hidden"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      Холестерин и давление: что проверять каждый год
                    </p>

                    <div className="flex items-center gap-2 text-xs md:text-sm text-secondary">
                      <svg
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 shrink-0 text-primary"
                        fill="none"
                        aria-hidden="true"
                      >
                        <ellipse
                          cx="10"
                          cy="14.583"
                          rx="5.833"
                          ry="2.917"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                        <circle
                          cx="10"
                          cy="5.833"
                          r="3.333"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="truncate text-[#313A45]">Асанова Айгуль</span>
                      <span className="shrink-0">•</span>
                      <span className="truncate">Кардиолог</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="hidden md:grid md:grid-cols-3 gap-5">
              {/* Интервью 1 */}
              <a
                href="https://www.youtube.com/watch?v=imbir-int-01"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-3xl border border-[#D8DCE0] p-2 flex flex-col w-full h-auto md:h-89.25 shrink-0 hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300"
              >
                <div className="relative w-full aspect-video md:aspect-auto md:h-55 shrink-0 overflow-hidden rounded-2xl bg-background">
                  <img
                    src="/images/videos/video-1.jpg"
                    alt="Как сохранить здоровье сердца после 40 лет"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="size-12 rounded-full bg-white/90 flex items-center justify-center shadow-md pl-0.5">
                      <svg
                        viewBox="0 0 24 24"
                        className="size-5 fill-primary stroke-primary"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 5.14v14l11-7-11-7z"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 flex-1 px-2 pt-3 pb-2 md:px-4 md:pt-4 md:pb-3">
                  <p
                    className="font-medium text-base md:text-[18px] text-foreground leading-snug overflow-hidden"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    Как сохранить здоровье сердца после 40 лет
                  </p>

                  <div className="flex items-center gap-2 text-xs md:text-sm text-secondary">
                    <svg
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 shrink-0 text-primary"
                      fill="none"
                      aria-hidden="true"
                    >
                      <ellipse
                        cx="10"
                        cy="14.583"
                        rx="5.833"
                        ry="2.917"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="10"
                        cy="5.833"
                        r="3.333"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="truncate text-[#313A45]">Асанова Айгуль</span>
                    <span className="shrink-0">•</span>
                    <span className="truncate">Кардиолог</span>
                  </div>
                </div>
              </a>
              {/* Интервью 2 */}
              <a
                href="https://www.youtube.com/watch?v=imbir-int-02"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-3xl border border-[#D8DCE0] p-2 flex flex-col w-full h-auto md:h-89.25 shrink-0 hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300"
              >
                <div className="relative w-full aspect-video md:aspect-auto md:h-55 shrink-0 overflow-hidden rounded-2xl bg-background">
                  <img
                    src="/images/videos/video-2.jpg"
                    alt="Аритмия: какие перебои в сердце требуют внимания"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="size-12 rounded-full bg-white/90 flex items-center justify-center shadow-md pl-0.5">
                      <svg
                        viewBox="0 0 24 24"
                        className="size-5 fill-primary stroke-primary"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 5.14v14l11-7-11-7z"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 flex-1 px-2 pt-3 pb-2 md:px-4 md:pt-4 md:pb-3">
                  <p
                    className="font-medium text-base md:text-[18px] text-foreground leading-snug overflow-hidden"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    Аритмия: какие перебои в сердце требуют внимания
                  </p>

                  <div className="flex items-center gap-2 text-xs md:text-sm text-secondary">
                    <svg
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 shrink-0 text-primary"
                      fill="none"
                      aria-hidden="true"
                    >
                      <ellipse
                        cx="10"
                        cy="14.583"
                        rx="5.833"
                        ry="2.917"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="10"
                        cy="5.833"
                        r="3.333"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="truncate text-[#313A45]">Асанова Айгуль</span>
                    <span className="shrink-0">•</span>
                    <span className="truncate">Кардиолог</span>
                  </div>
                </div>
              </a>
              {/* Интервью 3 */}
              <a
                href="https://www.youtube.com/watch?v=imbir-int-03"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-3xl border border-[#D8DCE0] p-2 flex flex-col w-full h-auto md:h-89.25 shrink-0 hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300"
              >
                <div className="relative w-full aspect-video md:aspect-auto md:h-55 shrink-0 overflow-hidden rounded-2xl bg-background">
                  <img
                    src="/images/videos/video-3.jpg"
                    alt="Холестерин и давление: что проверять каждый год"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="size-12 rounded-full bg-white/90 flex items-center justify-center shadow-md pl-0.5">
                      <svg
                        viewBox="0 0 24 24"
                        className="size-5 fill-primary stroke-primary"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 5.14v14l11-7-11-7z"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 flex-1 px-2 pt-3 pb-2 md:px-4 md:pt-4 md:pb-3">
                  <p
                    className="font-medium text-base md:text-[18px] text-foreground leading-snug overflow-hidden"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    Холестерин и давление: что проверять каждый год
                  </p>

                  <div className="flex items-center gap-2 text-xs md:text-sm text-secondary">
                    <svg
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 shrink-0 text-primary"
                      fill="none"
                      aria-hidden="true"
                    >
                      <ellipse
                        cx="10"
                        cy="14.583"
                        rx="5.833"
                        ry="2.917"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="10"
                        cy="5.833"
                        r="3.333"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="truncate text-[#313A45]">Асанова Айгуль</span>
                    <span className="shrink-0">•</span>
                    <span className="truncate">Кардиолог</span>
                  </div>
                </div>
              </a>
            </div>
          </section>
        </div>
      </div>

      <div className="hidden md:block">
        <footer className="w-full max-w-360 mx-auto px-4 md:px-10 pb-6 pt-8 md:pt-10">
          {/* Контейнер со светло-бежевым фоном */}
          <div className="bg-[#FCF9F7] rounded-4xl p-6 sm:p-10 md:p-12 flex flex-col gap-10">
            {/* Верхняя часть: Сетка с контентом */}
            <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-8">
              {/* Логотип и социальные сети */}
              <div className="flex flex-col gap-6 lg:w-1/4 shrink-0">
                <Link href="/">
                  <Logo className="w-35 h-auto" />
                </Link>
                <div className="flex items-center gap-3">
                  <a
                    href="https://facebook.com/imbir.kg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-11 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors shrink-0"
                  >
                    <FacebookIcon className="[&_path]:fill-white" />
                  </a>
                  <a
                    href="https://instagram.com/imbir.kg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-11 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors shrink-0"
                  >
                    <InstagramIcon className="[&_path]:fill-white" />
                  </a>
                  <a
                    href="https://x.com/imbir_kg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-11 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors shrink-0"
                  >
                    <TwitterIcon className="[&_path]:fill-white" />
                  </a>
                  <a
                    href="https://linkedin.com/company/imbir-kg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-11 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors shrink-0"
                  >
                    <LinkedinIcon className="[&_path]:fill-white" />
                  </a>
                </div>
              </div>

              {/* Ссылки и контакты (Сетка: 1 колонка на моб, 2 на планшете, 3 на ПК) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-10 lg:w-3/4 lg:ml-auto">
                {/* Блок 1 */}
                <div className="flex flex-col items-start">
                  <h3 className="text-foreground font-semibold text-base mb-4 md:mb-6">
                    Быстрые ссылки
                  </h3>
                  <Link
                    href="/clinics"
                    className="text-secondary text-sm md:text-base hover:text-primary transition-colors inline-block py-1.5 md:py-2 min-w-11"
                  >
                    Клиники
                  </Link>
                  <Link
                    href="/specialists"
                    className="text-secondary text-sm md:text-base hover:text-primary transition-colors inline-block py-1.5 md:py-2 min-w-11"
                  >
                    Специалисты
                  </Link>
                  <Link
                    href="/services"
                    className="text-secondary text-sm md:text-base hover:text-primary transition-colors inline-block py-1.5 md:py-2 min-w-11"
                  >
                    Услуги
                  </Link>
                </div>

                {/* Блок 2 */}
                <div className="flex flex-col items-start">
                  <h3 className="text-foreground font-semibold text-base mb-4 md:mb-6">
                    Помощь и поддержка
                  </h3>
                  <Link
                    href="/contacts"
                    className="text-secondary text-sm md:text-base hover:text-primary transition-colors inline-block py-1.5 md:py-2 min-w-11"
                  >
                    Контакты
                  </Link>
                  <Link
                    href="/terms"
                    className="text-secondary text-sm md:text-base hover:text-primary transition-colors inline-block py-1.5 md:py-2 min-w-11"
                  >
                    Условия и положения
                  </Link>
                  <Link
                    href="/privacy"
                    className="text-secondary text-sm md:text-base hover:text-primary transition-colors inline-block py-1.5 md:py-2 min-w-11"
                  >
                    Политика конфиденциальности
                  </Link>
                </div>

                {/* Блок 3 */}
                <div className="flex flex-col items-start">
                  <h3 className="text-foreground font-semibold text-base mb-4 md:mb-6">
                    Свяжитесь с нами
                  </h3>
                  <p className="text-secondary text-sm md:text-base mb-3 md:mb-4">
                    info@imbir.kg
                  </p>
                  <p className="text-secondary text-sm md:text-base mb-3 md:mb-4">
                    +996 (312) 55-00-11
                  </p>
                  <p className="text-secondary text-sm md:text-base mb-3 md:mb-4">
                    г. Бишкек, ул. Мидина Алыбаева, 10
                  </p>
                </div>
              </div>
            </div>

            {/* Нижняя часть: Копирайт */}
            <div className="flex justify-center items-center md:mt-10 pt-6 md:pt-0 border-t border-border-soft/50 md:border-none">
              <p className="text-foreground text-sm text-center">
                © 2026 Imbir. Все права защищены
              </p>
            </div>
          </div>
        </footer>
      </div>

      {/* Мобильная закреплённая панель записи */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-border-soft z-50 flex gap-2 shadow-[0_-4px_10px_rgba(0,0,0,0.03)]">
        <button
          type="button"
          className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-[52px] text-base px-8 active:bg-primary-dark hover:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] flex-1 bg-[#FFF2F0] text-primary border border-transparent"
        >
          <OfflineRecordIcon className="size-5" />
          <span>Офлайн</span>
        </button>
        <Link href="/record?doctor=1" className="flex-1 flex">
          <button
            type="button"
            className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-[52px] text-base px-8 bg-primary text-white active:bg-primary-dark hover:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] flex-1"
          >
            <OnlineRecordIcon className="size-5" />
            <span>Онлайн</span>
          </button>
        </Link>
      </div>
    </main>
  );
}
