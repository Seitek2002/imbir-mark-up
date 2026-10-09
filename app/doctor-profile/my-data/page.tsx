import Link from "next/link";

import FacebookIcon from "@/assets/icons/auth/facebook.svg";
import InstagramIcon from "@/assets/icons/auth/instagram.svg";
import LinkedinIcon from "@/assets/icons/auth/linkedin.svg";
import TwitterIcon from "@/assets/icons/auth/twitter.svg";
import ChevronRightIcon from "@/assets/icons/common/chevron-right.svg";
import ClockIcon from "@/assets/icons/common/clock.svg";
import StarIcon from "@/assets/icons/common/star.svg";
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
                    style={{ top: 8, height: 64 }}
                  />

                  <Link
                    href="/doctor-profile/my-data"
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
                    <span className="flex-1 font-medium text-base transition-colors duration-200 text-foreground">
                      Мои данные
                    </span>
                  </Link>

                  <Link
                    href="/doctor-profile/appointments"
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
                          d="M13.3333 0.833336V4.16667M6.66667 0.833336V4.16667M2.5 7.5H17.5M4.16667 2.5H15.8333C16.7538 2.5 17.5 3.24619 17.5 4.16667V15.8333C17.5 16.7538 16.7538 17.5 15.8333 17.5H4.16667C3.24619 17.5 2.5 16.7538 2.5 15.8333V4.16667C2.5 3.24619 3.24619 2.5 4.16667 2.5Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="flex-1 font-medium text-base transition-colors duration-200 text-secondary">
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
              <div className="lg:hidden">
                {/* ===== Мобильный экран-список «Мои данные» (DoctorMyDataList) ===== */}
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
                    Мои данные
                  </h1>
                  <div className="w-10" />
                </div>

                <div className="px-4 py-4 lg:p-0">
                  <nav className="bg-white rounded-3xl p-2 flex flex-col gap-1">
                    <Link
                      href="/doctor-profile/my-data/basic"
                      className="flex items-center gap-3 px-4 py-3.5 rounded-2xl hover:bg-surface transition-colors cursor-pointer"
                    >
                      <div className="w-9 h-9 rounded-xl bg-primary-tint flex items-center justify-center shrink-0">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M10 10C12.2091 10 14 8.20914 14 6C14 3.79086 12.2091 2 10 2C7.79086 2 6 3.79086 6 6C6 8.20914 7.79086 10 10 10Z"
                            stroke="#F5653E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3 18C3 15.2386 6.13401 13 10 13C13.866 13 17 15.2386 17 18"
                            stroke="#F5653E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="flex-1 text-left font-medium text-base text-foreground">
                        Основная информация
                      </span>
                      <ChevronRightIcon className="w-5 h-5 text-dim shrink-0" />
                    </Link>

                    <Link
                      href="/doctor-profile/my-data/professional"
                      className="flex items-center gap-3 px-4 py-3.5 rounded-2xl hover:bg-surface transition-colors cursor-pointer"
                    >
                      <div className="w-9 h-9 rounded-xl bg-primary-tint flex items-center justify-center shrink-0">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M5 2.5V7.5C5 9.15685 6.34315 10.5 8 10.5C9.65685 10.5 11 9.15685 11 7.5V2.5"
                            stroke="#F5653E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8 10.5V13C8 15.4853 10.0147 17.5 12.5 17.5C14.9853 17.5 17 15.4853 17 13V11.5"
                            stroke="#F5653E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M17 11.5C17.8284 11.5 18.5 10.8284 18.5 10C18.5 9.17157 17.8284 8.5 17 8.5C16.1716 8.5 15.5 9.17157 15.5 10C15.5 10.8284 16.1716 11.5 17 11.5Z"
                            stroke="#F5653E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="flex-1 text-left font-medium text-base text-foreground">
                        Профессиональные данные
                      </span>
                      <ChevronRightIcon className="w-5 h-5 text-dim shrink-0" />
                    </Link>

                    <Link
                      href="/doctor-profile/my-data/education"
                      className="flex items-center gap-3 px-4 py-3.5 rounded-2xl hover:bg-surface transition-colors cursor-pointer"
                    >
                      <div className="w-9 h-9 rounded-xl bg-primary-tint flex items-center justify-center shrink-0">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M10 2.5L18.3333 6.66667L10 10.8333L1.66667 6.66667L10 2.5Z"
                            stroke="#F5653E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M5 8.75V13.3333C5 13.3333 6.66667 15.4167 10 15.4167C13.3333 15.4167 15 13.3333 15 13.3333V8.75"
                            stroke="#F5653E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="flex-1 text-left font-medium text-base text-foreground">
                        Образование
                      </span>
                      <ChevronRightIcon className="w-5 h-5 text-dim shrink-0" />
                    </Link>

                    <Link
                      href="/doctor-profile/my-data/documents"
                      className="flex items-center gap-3 px-4 py-3.5 rounded-2xl hover:bg-surface transition-colors cursor-pointer"
                    >
                      <div className="w-9 h-9 rounded-xl bg-primary-tint flex items-center justify-center shrink-0">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M11.6667 1.66667H5C4.55797 1.66667 4.13405 1.84226 3.82149 2.15482C3.50893 2.46738 3.33333 2.89131 3.33333 3.33333V16.6667C3.33333 17.1087 3.50893 17.5326 3.82149 17.8452C4.13405 18.1577 4.55797 18.3333 5 18.3333H15C15.442 18.3333 15.866 18.1577 16.1785 17.8452C16.4911 17.5326 16.6667 17.1087 16.6667 16.6667V6.66667L11.6667 1.66667Z"
                            stroke="#F5653E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.6667 1.66667V6.66667H16.6667"
                            stroke="#F5653E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="flex-1 text-left font-medium text-base text-foreground">
                        Сертификаты и документы
                      </span>
                      <ChevronRightIcon className="w-5 h-5 text-dim shrink-0" />
                    </Link>
                  </nav>
                </div>
              </div>
              <div className="hidden lg:block">
                {/* ===== «Мои данные» на десктопе (DoctorMyDataOverview), режим просмотра ===== */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-[32px] font-semibold text-foreground">
                    Мои данные
                  </h2>
                  <Link href="/doctor-profile/my-data/edit">
                    <button
                      type="button"
                      className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-8 text-xs px-4 relative after:absolute after:inset-x-0 after:-inset-y-2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M11.3334 2.00001C11.5085 1.82491 11.7163 1.68602 11.9451 1.59126C12.1739 1.4965 12.4191 1.44769 12.6667 1.44769C12.9143 1.44769 13.1595 1.4965 13.3883 1.59126C13.6171 1.68602 13.8249 1.82491 14.0001 2.00001C14.1752 2.17511 14.3141 2.38291 14.4088 2.61172C14.5036 2.84052 14.5524 3.08571 14.5524 3.33334C14.5524 3.58097 14.5036 3.82617 14.4088 4.05497C14.3141 4.28377 14.1752 4.49158 14.0001 4.66668L5.00008 13.6667L1.33341 14.6667L2.33341 11L11.3334 2.00001Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>Редактировать</span>
                    </button>
                  </Link>
                </div>

                {/* ── 1. Основная информация ── */}
                <div className="bg-white rounded-3xl p-5 lg:p-6 border border-border mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Основная информация
                  </h3>
                  <div className="divide-y divide-background [&>div]:py-3 [&>div:first-child]:pt-0 [&>div:last-child]:pb-0">
                    <div>
                      <div>
                        <p className="text-muted text-sm">ФИО</p>
                        <div className="mt-0.5 space-y-0.5">
                          <p className="text-foreground font-medium text-base">
                            Асанова Айгуль Бакытовна
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="text-muted text-sm">Пол</p>
                        <div className="mt-0.5 space-y-0.5">
                          <p className="text-foreground font-medium text-base">
                            Женский
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="text-muted text-sm">Дата рождения</p>
                        <div className="mt-0.5 space-y-0.5">
                          <p className="text-foreground font-medium text-base">
                            14.03.1986
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="text-muted text-sm">Город</p>
                        <div className="mt-0.5 space-y-0.5">
                          <p className="text-foreground font-medium text-base">
                            Бишкек
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="text-muted text-sm">Языки общения</p>
                        <div className="mt-0.5 space-y-0.5">
                          <p className="text-foreground font-medium text-base">
                            Русский, Кыргызский, Английский
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="text-muted text-sm">Телефон</p>
                        <div className="mt-0.5 space-y-0.5">
                          <p className="text-foreground font-medium text-base">
                            +996555123456
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="text-muted text-sm">Почта</p>
                        <div className="mt-0.5 space-y-0.5">
                          <p className="text-foreground font-medium text-base">
                            aigul.asanova@imbir.kg
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* По макету «Фото» — последнее поле карточки, с подписью и по левому краю */}
                    <div>
                      <p className="text-muted text-sm mb-2">Фото</p>
                      <div className="relative w-28 h-28">
                        <div className="w-full h-full rounded-full overflow-hidden bg-linear-to-br from-primary to-[#FF8A6B] flex items-center justify-center">
                          <img
                            src="/images/doctors/doctor-2.png"
                            alt="Асанова Айгуль Бакытовна"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── 2. Профессиональные данные ── */}
                <div className="bg-white rounded-3xl p-5 lg:p-6 border border-border mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Профессиональные данные
                  </h3>
                  <div className="divide-y divide-background [&>div]:py-3 [&>div:first-child]:pt-0 [&>div:last-child]:pb-0">
                    <div>
                      <div>
                        <p className="text-muted text-sm">Специализация</p>
                        <div className="mt-0.5 space-y-0.5">
                          <p className="text-foreground font-medium text-base">
                            Кардиолог
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="text-muted text-sm">
                          Дополнительная специализация
                        </p>
                        <div className="mt-0.5 space-y-0.5">
                          <p className="text-foreground font-medium text-base">
                            Терапевт
                          </p>
                          <p className="text-foreground font-medium text-base">
                            Функциональная диагностика
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="text-muted text-sm">Стаж работы, лет</p>
                        <div className="mt-0.5 space-y-0.5">
                          <p className="text-foreground font-medium text-base">
                            14
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="text-muted text-sm">Текущая должность</p>
                        <div className="mt-0.5 space-y-0.5">
                          <p className="text-foreground font-medium text-base">
                            Заведующая кардиологическим отделением
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="text-muted text-sm">
                          Место работы (клиника)
                        </p>
                        <div className="mt-0.5 space-y-0.5">
                          <p className="text-foreground font-medium text-base">
                            Медицинский центр «Неомед»
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="text-muted text-sm">
                          Категория / Квалификация
                        </p>
                        <div className="mt-0.5 space-y-0.5">
                          <p className="text-foreground font-medium text-base">
                            Высшая
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="text-muted text-sm">Научная степень</p>
                        <div className="mt-0.5 space-y-0.5">
                          <p className="text-foreground font-medium text-base">
                            Кандидат медицинских наук
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="text-muted text-sm">Оборудование</p>
                        <div className="mt-0.5 space-y-0.5">
                          <p className="text-foreground font-medium text-base">
                            УЗИ
                          </p>
                          <p className="text-foreground font-medium text-base">
                            Лаборатория
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="text-muted text-sm">Условия приёма</p>
                        <div className="mt-0.5 space-y-0.5">
                          <p className="text-foreground font-medium text-base">
                            Парковка
                          </p>
                          <p className="text-foreground font-medium text-base">
                            Онлайн-консультация
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* OnlineProfileSettings — просмотр */}
                  <div className="mt-6 pt-6 border-t border-border order-last lg:order-none">
                    <h3 className="text-base font-semibold text-foreground mb-4">
                      Онлайн-приём и публикация
                    </h3>
                    <div className="divide-y divide-background [&>div]:py-3 [&>div:first-child]:pt-0 [&>div:last-child]:pb-0">
                      <div>
                        <p className="text-muted text-sm">Приём онлайн</p>
                        <div className="mt-0.5 space-y-0.5">
                          <p className="text-foreground font-medium text-base">
                            Включён
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-muted text-sm">
                          Стоимость консультации, сом
                        </p>
                        <div className="mt-0.5 space-y-0.5">
                          <p className="text-foreground font-medium text-base">
                            1500
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-muted text-sm">Профиль в каталоге</p>
                        <div className="mt-0.5 space-y-0.5">
                          <p className="text-foreground font-medium text-base">
                            Опубликован
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── 3. Образование ── */}
                <div className="bg-white rounded-3xl p-5 lg:p-6 border border-border mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Образование
                  </h3>
                  <div className="divide-y divide-background [&>div]:py-3 [&>div:first-child]:pt-0 [&>div:last-child]:pb-0">
                    <div>
                      <div>
                        <p className="text-muted text-sm">ВУЗ</p>
                        <div className="mt-0.5 space-y-0.5">
                          <p className="text-foreground font-medium text-base">
                            КГМА им. И. К. Ахунбаева
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="text-muted text-sm">Год окончания</p>
                        <div className="mt-0.5 space-y-0.5">
                          <p className="text-foreground font-medium text-base">
                            2009
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="text-muted text-sm">Интернатура</p>
                        <div className="mt-0.5 space-y-0.5">
                          <p className="text-foreground font-medium text-base">
                            Терапия
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="text-muted text-sm">Ординатура</p>
                        <div className="mt-0.5 space-y-0.5">
                          <p className="text-foreground font-medium text-base">
                            Кардиология
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="text-muted text-sm">
                          Специализация по диплому
                        </p>
                        <div className="mt-0.5 space-y-0.5">
                          <p className="text-foreground font-medium text-base">
                            Лечебное дело
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-muted text-sm">
                          Дополнительное образование
                        </p>
                      </div>
                      <div>
                        <div className="mt-0.5 space-y-0.5">
                          <p className="text-foreground font-medium text-base">
                            Эхокардиография в клинической практике (2018)
                          </p>
                          <p className="text-foreground font-medium text-base">
                            Современные подходы к лечению артериальной
                            гипертензии (2021)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── 4. Сертификаты и документы ── */}
                <div className="bg-white rounded-3xl p-5 lg:p-6 border border-border mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Сертификаты и документы
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-muted text-sm">Сертификаты</p>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-border bg-surface">
                          <a
                            href="/images/services/cardiology.png"
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Скачать сертификат"
                            title="Скачать сертификат"
                            className="block w-full h-full cursor-pointer"
                          >
                            <img
                              src="/images/services/cardiology.png"
                              alt="cert"
                              className="w-full h-full object-cover"
                            />
                          </a>
                        </div>
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-border bg-surface">
                          <a
                            href="/images/services/pulmonology.png"
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Скачать сертификат"
                            title="Скачать сертификат"
                            className="block w-full h-full cursor-pointer"
                          >
                            <img
                              src="/images/services/pulmonology.png"
                              alt="cert"
                              className="w-full h-full object-cover"
                            />
                          </a>
                        </div>
                        {/* PDF — превью нет, рисуется fallback-иконка документа */}
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-border bg-surface">
                          <a
                            href="#"
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Скачать сертификат"
                            title="Скачать сертификат"
                            className="block w-full h-full cursor-pointer"
                          >
                            <div className="w-full h-full flex items-center justify-center text-dim">
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                              >
                                <path
                                  d="M4 3h9l3 3v11a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M13 3v3h3"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div>
                        <p className="text-muted text-sm">Номер лицензии</p>
                        <div className="mt-0.5 space-y-0.5">
                          <p className="text-foreground font-medium text-base">
                            ЛИЦ-048213
                          </p>
                        </div>
                      </div>
                    </div>
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
