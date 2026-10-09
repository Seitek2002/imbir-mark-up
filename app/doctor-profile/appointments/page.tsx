import Link from "next/link";

import FacebookIcon from "@/assets/icons/auth/facebook.svg";
import InstagramIcon from "@/assets/icons/auth/instagram.svg";
import LinkedinIcon from "@/assets/icons/auth/linkedin.svg";
import TwitterIcon from "@/assets/icons/auth/twitter.svg";
import ClockIcon from "@/assets/icons/common/clock.svg";
import StarIcon from "@/assets/icons/common/star.svg";
import ViewCardsIcon from "@/assets/icons/common/view-cards.svg";
import ViewTableIcon from "@/assets/icons/common/view-table.svg";
import HeaderBackIcon from "@/assets/icons/header/back-arrow.svg";
import ChatIcon from "@/assets/icons/header/chat.svg";
import GeoBtnArrowIcon from "@/assets/icons/header/geo-btn-arrow.svg";
import GeoIcon from "@/assets/icons/header/geo.svg";
import Logo from "@/assets/icons/header/logo.svg";
import ProfileIcon from "@/assets/icons/header/profile.svg";
import SearchIcon from "@/assets/icons/header/search.svg";
import LogoutIcon from "@/assets/icons/profile/logout.svg";

export default function Page() {
  return (
    <>
      {/* ===================== HEADER (врач авторизован; в кабинете только md+) ===================== */}
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
                  <button
                    type="button"
                    aria-label="Поиск"
                    className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent"
                  >
                    <SearchIcon className="size-5" />
                  </button>
                  <Link href="/chat">
                    <button
                      type="button"
                      aria-label="Чат"
                      className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent"
                    >
                      <span className="relative">
                        <ChatIcon className="size-5" />
                        <span className="absolute -top-1.5 -right-1.5 min-w-4 h-4 px-0.5 rounded-full bg-primary text-white text-[10px] font-semibold flex items-center justify-center">
                          2
                        </span>
                      </span>
                    </button>
                  </Link>
                  <Link href="/doctor-profile">
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
                  <button
                    type="button"
                    aria-label="Поиск"
                    className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent"
                  >
                    <SearchIcon className="size-5" />
                  </button>
                  <Link href="/chat">
                    <button
                      type="button"
                      aria-label="Чат"
                      className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent"
                    >
                      <span className="relative">
                        <ChatIcon className="size-5" />
                        <span className="absolute -top-1.5 -right-1.5 min-w-4 h-4 px-0.5 rounded-full bg-primary text-white text-[10px] font-semibold flex items-center justify-center">
                          2
                        </span>
                      </span>
                    </button>
                  </Link>
                  <Link href="/doctor-profile">
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

      {/* ===================== КАБИНЕТ ВРАЧА (DoctorPageLayoutSkeleton) ===================== */}
      <div className="w-full min-h-screen bg-[#FAFAFA]">
        <div className="max-w-360 mx-auto lg:px-10 lg:py-8">
          <h1 className="text-[40px] font-semibold text-foreground mb-8 hidden lg:block">
            Мой профиль
          </h1>

          <div className="flex gap-6">
            <div className="hidden lg:block">
              {/* ===== Сайдбар кабинета врача (widgets/doctor/layout/sidebar) ===== */}
              <aside className="w-88 shrink-0 hidden lg:block top-0 sticky h-fit">
                {/* Profile Card — белая рамка с отступом 4px, внутри градиентная подложка */}
                <Link
                  href="/doctor-profile"
                  className="block bg-white border border-border-soft rounded-3xl p-1 mb-4 hover:border-primary transition-colors"
                >
                  <div className="bg-linear-to-b from-[#FFE2DA] to-white rounded-[20px] pt-7 pb-5 px-5 flex flex-col items-center">
                    {/* Centered Avatar */}
                    <div className="w-20 h-20 rounded-full overflow-hidden bg-linear-to-br from-primary to-[#FF8A6B] flex items-center justify-center mb-3 border-2 border-white shadow-sm">
                      <img
                        src="/images/doctors/doctor-2.png"
                        alt="Асанова Айгуль Бакытовна"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Centered Doctor Details */}
                    <div className="text-center w-full">
                      <p className="text-foreground font-semibold text-lg leading-tight truncate">
                        Асанова Айгуль Бакытовна
                      </p>
                      <div className="flex items-center justify-center gap-1 mt-2">
                        <StarIcon className="w-4 h-4 text-primary" />
                        <span className="text-primary text-sm font-semibold">
                          4.8
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>

                <nav className="bg-white border border-border-soft rounded-3xl p-2 flex flex-col gap-1 mb-4 relative">
                  {/* Подложка активного пункта (в оригинале позиция считается useSidebarIndicator) */}
                  <div
                    className="absolute inset-x-2 rounded-2xl bg-primary-tint transition-all duration-200 ease-out pointer-events-none"
                    style={{ top: 76, height: 64 }}
                  />

                  <Link
                    href="/doctor-profile/my-data"
                    className="flex items-center gap-3 px-4 py-3.5 rounded-2xl relative z-10 hover:bg-surface"
                  >
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 bg-primary-tint text-primary">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M10 10C12.2091 10 14 8.20914 14 6C14 3.79086 12.2091 2 10 2C7.79086 2 6 3.79086 6 6C6 8.20914 7.79086 10 10 10Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3 18C3 15.2386 6.13401 13 10 13C13.866 13 17 15.2386 17 18"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="flex-1 font-medium text-base transition-colors duration-200 text-secondary">
                      Мои данные
                    </span>
                  </Link>

                  <Link
                    href="/doctor-profile/appointments"
                    data-active="true"
                    className="flex items-center gap-3 px-4 py-3.5 rounded-2xl relative z-10"
                  >
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 bg-primary text-white">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M13.3333 0.833336V4.16667M6.66667 0.833336V4.16667M2.5 7.5H17.5M4.16667 2.5H15.8333C16.7538 2.5 17.5 3.24619 17.5 4.16667V15.8333C17.5 16.7538 16.7538 17.5 15.8333 17.5H4.16667C3.24619 17.5 2.5 16.7538 2.5 15.8333V4.16667C2.5 3.24619 3.24619 2.5 4.16667 2.5Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="flex-1 font-medium text-base transition-colors duration-200 text-foreground">
                      Записи
                    </span>
                    {/* NavBadge — записи, ждущие подтверждения */}
                    <span
                      className="shrink-0 min-w-6 h-6 px-1.5 rounded-full bg-info text-white text-xs font-semibold inline-flex items-center justify-center tabular-nums"
                      aria-label="Новых записей: 2"
                    >
                      2
                    </span>
                  </Link>

                  <Link
                    href="/doctor-profile/schedule"
                    className="flex items-center gap-3 px-4 py-3.5 rounded-2xl relative z-10 hover:bg-surface"
                  >
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 bg-primary-tint text-primary">
                      <ClockIcon className="size-5" />
                    </div>
                    <span className="flex-1 font-medium text-base transition-colors duration-200 text-secondary">
                      Расписание
                    </span>
                  </Link>

                  <Link
                    href="/doctor-profile/patients"
                    className="flex items-center gap-3 px-4 py-3.5 rounded-2xl relative z-10 hover:bg-surface"
                  >
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 bg-primary-tint text-primary">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M14.1667 17.5V15.8333C14.1667 14.9493 13.8155 14.1014 13.1904 13.4763C12.5652 12.8512 11.7174 12.5 10.8333 12.5H4.16667C3.28261 12.5 2.43477 12.8512 1.80965 13.4763C1.18453 14.1014 0.833336 14.9493 0.833336 15.8333V17.5M19.1667 17.5V15.8333C19.1662 15.0948 18.9204 14.3773 18.4679 13.7936C18.0154 13.2099 17.3819 12.793 16.6667 12.6083M13.3333 2.60833C14.0503 2.79192 14.6858 3.20892 15.1396 3.7936C15.5935 4.37827 15.8399 5.09736 15.8399 5.8375C15.8399 6.57764 15.5935 7.29673 15.1396 7.8814C14.6858 8.46608 14.0503 8.88308 13.3333 9.06667M10.8333 5.83333C10.8333 7.67428 9.34095 9.16667 7.5 9.16667C5.65905 9.16667 4.16667 7.67428 4.16667 5.83333C4.16667 3.99238 5.65905 2.5 7.5 2.5C9.34095 2.5 10.8333 3.99238 10.8333 5.83333Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="flex-1 font-medium text-base transition-colors duration-200 text-secondary">
                      Пациенты
                    </span>
                  </Link>

                  <Link
                    href="/doctor-profile/services"
                    className="flex items-center gap-3 px-4 py-3.5 rounded-2xl relative z-10 hover:bg-surface"
                  >
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 bg-primary-tint text-primary">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M15.8333 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 6.66667V13.3333M6.66667 10H13.3333"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="flex-1 font-medium text-base transition-colors duration-200 text-secondary">
                      Услуги
                    </span>
                  </Link>

                  <Link
                    href="/doctor-profile/reviews"
                    className="flex items-center gap-3 px-4 py-3.5 rounded-2xl relative z-10 hover:bg-surface"
                  >
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 bg-primary-tint text-primary">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M10 1.66667L12.575 6.88334L18.3333 7.72501L14.1667 11.7833L15.15 17.5167L10 14.8083L4.85 17.5167L5.83333 11.7833L1.66667 7.72501L7.425 6.88334L10 1.66667Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="flex-1 font-medium text-base transition-colors duration-200 text-secondary">
                      Отзывы
                    </span>
                  </Link>

                  <Link
                    href="/doctor-profile/invitations"
                    className="flex items-center gap-3 px-4 py-3.5 rounded-2xl relative z-10 hover:bg-surface"
                  >
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 bg-primary-tint text-primary">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M3 5h14v10H3zM3 6l7 5 7-5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="flex-1 font-medium text-base transition-colors duration-200 text-secondary">
                      Приглашения
                    </span>
                  </Link>
                </nav>

                {/* Logout — своя рамка + небольшой отступ со всех сторон
                    (открытое подтверждение — /doctor-profile/logout-modal) */}
                <button
                  type="button"
                  className="bg-white border border-border-soft rounded-3xl p-1 w-full group"
                >
                  <div className="flex items-center gap-3 px-4 py-3.5 rounded-[20px] text-secondary group-hover:bg-surface transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-primary-tint flex items-center justify-center shrink-0 text-primary">
                      <LogoutIcon className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-base">
                      Выйти из профиля
                    </span>
                  </div>
                </button>
              </aside>
            </div>

            <main className="flex-1 min-w-0">
              {/* ----- Мобильная шапка страницы (DoctorPageLayout), < lg ----- */}
              <div className="lg:hidden flex items-center justify-between px-4 py-4 bg-white border-b border-border">
                <Link
                  href="/doctor-profile"
                  aria-label="Назад"
                  className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] active:bg-border-soft hover:bg-background"
                >
                  <HeaderBackIcon className="w-5 h-5" />
                </Link>
                <h1 className="text-base font-semibold text-foreground truncate mx-2">
                  Записи
                </h1>
                <div className="w-10" />
              </div>

              <div className="px-4 py-4 lg:p-0">
                {/* Десктоп: заголовок + фильтр по статусу + вид списка в одну строку */}
                <div className="hidden lg:flex items-center justify-between gap-3 mb-6">
                  <h2 className="text-[32px] font-semibold text-foreground">
                    Записи
                  </h2>
                  <div className="flex items-center gap-3">
                    <div className="w-90 shrink-0">
                      {/* SegmentedControl (выбрано «Все») */}
                      <div className="relative flex items-center bg-background p-1 rounded-full w-full select-none">
                        <div
                          className="absolute top-1 bottom-1 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-transform duration-300 ease-in-out"
                          style={{
                            width: "calc((100% - 8px) / 3)",
                            transform: "translateX(calc(0 * 100%))",
                            left: "4px",
                          }}
                        />
                        <button
                          type="button"
                          className="relative z-10 min-w-0 flex-1 truncate px-0 sm:px-1 py-2 text-xs sm:text-sm font-medium transition-colors duration-300 rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] text-foreground"
                        >
                          Все
                        </button>
                        <button
                          type="button"
                          className="relative z-10 min-w-0 flex-1 truncate px-0 sm:px-1 py-2 text-xs sm:text-sm font-medium transition-colors duration-300 rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] text-secondary hover:text-foreground"
                        >
                          Предстоящие
                        </button>
                        <button
                          type="button"
                          className="relative z-10 min-w-0 flex-1 truncate px-0 sm:px-1 py-2 text-xs sm:text-sm font-medium transition-colors duration-300 rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] text-secondary hover:text-foreground"
                        >
                          Завершенные
                        </button>
                      </div>
                    </div>
                    {/* ViewModeToggle (активен вид «table») */}
                    <div className="inline-flex items-center gap-0.5 bg-background rounded-full p-1 shrink-0">
                      <button
                        type="button"
                        aria-pressed={false}
                        aria-label="Карточками"
                        title="Карточками"
                        className="size-8 flex items-center justify-center rounded-full transition-colors outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] text-muted hover:text-foreground"
                      >
                        <ViewCardsIcon className="size-4" />
                      </button>
                      <button
                        type="button"
                        aria-pressed={true}
                        aria-label="Таблицей"
                        title="Таблицей"
                        className="size-8 flex items-center justify-center rounded-full transition-colors outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] bg-white text-foreground shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                      >
                        <ViewTableIcon className="size-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Мобайл: сегмент под шапкой страницы, вид списка — под ним */}
                <div className="lg:hidden flex flex-col gap-3 mb-4 sm:flex-row sm:items-center">
                  <div className="sm:flex-1 sm:min-w-0">
                    {/* SegmentedControl (выбрано «Все») */}
                    <div className="relative flex items-center bg-background p-1 rounded-full w-full select-none">
                      <div
                        className="absolute top-1 bottom-1 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-transform duration-300 ease-in-out"
                        style={{
                          width: "calc((100% - 8px) / 3)",
                          transform: "translateX(calc(0 * 100%))",
                          left: "4px",
                        }}
                      />
                      <button
                        type="button"
                        className="relative z-10 min-w-0 flex-1 truncate px-0 sm:px-1 py-2 text-xs sm:text-sm font-medium transition-colors duration-300 rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] text-foreground"
                      >
                        Все
                      </button>
                      <button
                        type="button"
                        className="relative z-10 min-w-0 flex-1 truncate px-0 sm:px-1 py-2 text-xs sm:text-sm font-medium transition-colors duration-300 rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] text-secondary hover:text-foreground"
                      >
                        Предстоящие
                      </button>
                      <button
                        type="button"
                        className="relative z-10 min-w-0 flex-1 truncate px-0 sm:px-1 py-2 text-xs sm:text-sm font-medium transition-colors duration-300 rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] text-secondary hover:text-foreground"
                      >
                        Завершенные
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    {/* ViewModeToggle (активен вид «cards») */}
                    <div className="inline-flex items-center gap-0.5 bg-background rounded-full p-1 shrink-0">
                      <button
                        type="button"
                        aria-pressed={true}
                        aria-label="Карточками"
                        title="Карточками"
                        className="size-8 flex items-center justify-center rounded-full transition-colors outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] bg-white text-foreground shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                      >
                        <ViewCardsIcon className="size-4" />
                      </button>
                      <button
                        type="button"
                        aria-pressed={false}
                        aria-label="Таблицей"
                        title="Таблицей"
                        className="size-8 flex items-center justify-center rounded-full transition-colors outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] text-muted hover:text-foreground"
                      >
                        <ViewTableIcon className="size-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Карточки (вид по умолчанию на телефоне). Клик по записи открывает «Итоги приёма» — /doctor-profile/appointments/summary-modal */}
                <div className="flex flex-col gap-3 md:hidden">
                  <div className="bg-white rounded-2xl border p-3 border-info">
                    <button type="button" className="w-full text-left">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm font-medium text-foreground">
                          Жумабекова Динара Маратовна
                        </p>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-info-tint text-info">
                          Новая
                        </span>
                      </div>
                      <p className="text-xs text-muted mt-1">
                        26.09.2026 • 09:30
                      </p>
                      <p className="text-xs text-muted mt-0.5">
                        Консультация кардиолога
                      </p>
                    </button>
                    <div className="flex flex-wrap items-center gap-1.5 mt-3">
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent text-xs px-2.5 h-8 border-primary text-primary"
                      >
                        <span>Подтвердить</span>
                      </button>
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] text-white active:bg-primary-dark hover:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] text-xs px-2.5 h-8 bg-[#2FA968] hover:bg-[#258753]"
                      >
                        <span>Завершить</span>
                      </button>
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] text-xs px-2.5 h-8 border-red-200 text-red-500 hover:bg-red-50"
                      >
                        <span>Отменить</span>
                      </button>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl border p-3 border-info">
                    <button type="button" className="w-full text-left">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm font-medium text-foreground">
                          Осмонов Эрлан Бакытбекович
                        </p>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-info-tint text-info">
                          Новая
                        </span>
                      </div>
                      <p className="text-xs text-muted mt-1">
                        26.09.2026 • 11:00
                      </p>
                      <p className="text-xs text-muted mt-0.5">
                        ЭКГ с расшифровкой
                      </p>
                    </button>
                    <div className="flex flex-wrap items-center gap-1.5 mt-3">
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent text-xs px-2.5 h-8 border-primary text-primary"
                      >
                        <span>Подтвердить</span>
                      </button>
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] text-white active:bg-primary-dark hover:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] text-xs px-2.5 h-8 bg-[#2FA968] hover:bg-[#258753]"
                      >
                        <span>Завершить</span>
                      </button>
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] text-xs px-2.5 h-8 border-red-200 text-red-500 hover:bg-red-50"
                      >
                        <span>Отменить</span>
                      </button>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl border p-3 border-border">
                    <button type="button" className="w-full text-left">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm font-medium text-foreground">
                          Токтогулова Асель Нурлановна
                        </p>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-tint text-primary">
                          Подтверждена
                        </span>
                      </div>
                      <p className="text-xs text-muted mt-1">
                        27.09.2026 • 14:00
                      </p>
                      <p className="text-xs text-muted mt-0.5">
                        Консультация кардиолога
                      </p>
                    </button>
                    <div className="flex flex-wrap items-center gap-1.5 mt-3">
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] text-white active:bg-primary-dark hover:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] text-xs px-2.5 h-8 bg-[#2FA968] hover:bg-[#258753]"
                      >
                        <span>Завершить</span>
                      </button>
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] text-xs px-2.5 h-8 border-red-200 text-red-500 hover:bg-red-50"
                      >
                        <span>Отменить</span>
                      </button>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl border p-3 border-border">
                    <button type="button" className="w-full text-left">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm font-medium text-foreground">
                          Иванов Сергей Петрович
                        </p>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-tint text-primary">
                          Предстоящая
                        </span>
                      </div>
                      <p className="text-xs text-muted mt-1">
                        29.09.2026 • 10:30
                      </p>
                      <p className="text-xs text-muted mt-0.5">
                        Холтеровское мониторирование ЭКГ
                      </p>
                    </button>
                    <div className="flex flex-wrap items-center gap-1.5 mt-3">
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] text-white active:bg-primary-dark hover:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] text-xs px-2.5 h-8 bg-[#2FA968] hover:bg-[#258753]"
                      >
                        <span>Завершить</span>
                      </button>
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] text-xs px-2.5 h-8 border-red-200 text-red-500 hover:bg-red-50"
                      >
                        <span>Отменить</span>
                      </button>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl border p-3 border-border">
                    <button type="button" className="w-full text-left">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm font-medium text-foreground">
                          Абдыкадыров Нурлан Садыкович
                        </p>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#E3F5EC] text-[#2FA968]">
                          Завершенная
                        </span>
                      </div>
                      <p className="text-xs text-muted mt-1">
                        22.09.2026 • 16:00
                      </p>
                      <p className="text-xs text-muted mt-0.5">
                        Консультация кардиолога
                      </p>
                    </button>
                  </div>
                  <div className="bg-white rounded-2xl border p-3 border-border">
                    <button type="button" className="w-full text-left">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm font-medium text-foreground">
                          Садыкова Гульнара Эркиновна
                        </p>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-surface text-muted">
                          Отменена
                        </span>
                      </div>
                      <p className="text-xs text-muted mt-1">
                        20.09.2026 • 12:30
                      </p>
                      <p className="text-xs text-muted mt-0.5">
                        ЭхоКГ (УЗИ сердца)
                      </p>
                    </button>
                  </div>
                </div>

                {/* Таблица (вид по умолчанию от md) */}
                <div className="bg-white rounded-3xl border border-border overflow-hidden hidden md:block">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-160 text-left border-collapse">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="px-6 py-4 text-muted text-sm font-normal whitespace-nowrap">
                            Пациент
                          </th>
                          <th className="px-6 py-4 text-muted text-sm font-normal whitespace-nowrap">
                            Дата
                          </th>
                          <th className="px-6 py-4 text-muted text-sm font-normal whitespace-nowrap">
                            Время
                          </th>
                          <th className="px-6 py-4 text-muted text-sm font-normal whitespace-nowrap">
                            Тип
                          </th>
                          <th className="px-6 py-4 text-muted text-sm font-normal whitespace-nowrap">
                            Статус
                          </th>
                          <th className="px-6 py-4 text-muted text-sm font-normal whitespace-nowrap">
                            Действия
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border last:border-0 transition-colors bg-info-tint">
                          <td className="px-6 py-4 whitespace-nowrap text-foreground font-medium cursor-pointer shadow-[inset_4px_0_0_0_var(--color-info)]">
                            Жумабекова Динара Маратовна
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-foreground cursor-pointer">
                            26.09.2026
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-foreground cursor-pointer">
                            09:30
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-foreground cursor-pointer">
                            Консультация кардиолога
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-info-tint text-info">
                              Новая
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-1.5">
                              <button
                                type="button"
                                className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent text-xs px-2.5 h-8 border-primary text-primary"
                              >
                                <span>Подтвердить</span>
                              </button>
                              <button
                                type="button"
                                className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] text-white active:bg-primary-dark hover:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] text-xs px-2.5 h-8 bg-[#2FA968] hover:bg-[#258753]"
                              >
                                <span>Завершить</span>
                              </button>
                              <button
                                type="button"
                                className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] text-xs px-2.5 h-8 border-red-200 text-red-500 hover:bg-red-50"
                              >
                                <span>Отменить</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b border-border last:border-0 transition-colors bg-info-tint">
                          <td className="px-6 py-4 whitespace-nowrap text-foreground font-medium cursor-pointer shadow-[inset_4px_0_0_0_var(--color-info)]">
                            Осмонов Эрлан Бакытбекович
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-foreground cursor-pointer">
                            26.09.2026
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-foreground cursor-pointer">
                            11:00
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-foreground cursor-pointer">
                            ЭКГ с расшифровкой
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-info-tint text-info">
                              Новая
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-1.5">
                              <button
                                type="button"
                                className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent text-xs px-2.5 h-8 border-primary text-primary"
                              >
                                <span>Подтвердить</span>
                              </button>
                              <button
                                type="button"
                                className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] text-white active:bg-primary-dark hover:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] text-xs px-2.5 h-8 bg-[#2FA968] hover:bg-[#258753]"
                              >
                                <span>Завершить</span>
                              </button>
                              <button
                                type="button"
                                className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] text-xs px-2.5 h-8 border-red-200 text-red-500 hover:bg-red-50"
                              >
                                <span>Отменить</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b border-border last:border-0 transition-colors hover:bg-surface">
                          <td className="px-6 py-4 whitespace-nowrap text-foreground font-medium cursor-pointer">
                            Токтогулова Асель Нурлановна
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-foreground cursor-pointer">
                            27.09.2026
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-foreground cursor-pointer">
                            14:00
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-foreground cursor-pointer">
                            Консультация кардиолога
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-tint text-primary">
                              Подтверждена
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-1.5">
                              <button
                                type="button"
                                className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] text-white active:bg-primary-dark hover:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] text-xs px-2.5 h-8 bg-[#2FA968] hover:bg-[#258753]"
                              >
                                <span>Завершить</span>
                              </button>
                              <button
                                type="button"
                                className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] text-xs px-2.5 h-8 border-red-200 text-red-500 hover:bg-red-50"
                              >
                                <span>Отменить</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b border-border last:border-0 transition-colors hover:bg-surface">
                          <td className="px-6 py-4 whitespace-nowrap text-foreground font-medium cursor-pointer">
                            Иванов Сергей Петрович
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-foreground cursor-pointer">
                            29.09.2026
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-foreground cursor-pointer">
                            10:30
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-foreground cursor-pointer">
                            Холтеровское мониторирование ЭКГ
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-tint text-primary">
                              Предстоящая
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-1.5">
                              <button
                                type="button"
                                className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] text-white active:bg-primary-dark hover:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] text-xs px-2.5 h-8 bg-[#2FA968] hover:bg-[#258753]"
                              >
                                <span>Завершить</span>
                              </button>
                              <button
                                type="button"
                                className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] text-xs px-2.5 h-8 border-red-200 text-red-500 hover:bg-red-50"
                              >
                                <span>Отменить</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b border-border last:border-0 transition-colors hover:bg-surface">
                          <td className="px-6 py-4 whitespace-nowrap text-foreground font-medium cursor-pointer">
                            Абдыкадыров Нурлан Садыкович
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-foreground cursor-pointer">
                            22.09.2026
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-foreground cursor-pointer">
                            16:00
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-foreground cursor-pointer">
                            Консультация кардиолога
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#E3F5EC] text-[#2FA968]">
                              Завершенная
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-1.5"></div>
                          </td>
                        </tr>
                        <tr className="border-b border-border last:border-0 transition-colors hover:bg-surface">
                          <td className="px-6 py-4 whitespace-nowrap text-foreground font-medium cursor-pointer">
                            Садыкова Гульнара Эркиновна
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-foreground cursor-pointer">
                            20.09.2026
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-foreground cursor-pointer">
                            12:30
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-foreground cursor-pointer">
                            ЭхоКГ (УЗИ сердца)
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-surface text-muted">
                              Отменена
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-1.5"></div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* ===================== FOOTER (только md+) ===================== */}
      <div className="hidden md:block mt-auto">
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
    </>
  );
}
