import Link from "next/link";

import FacebookIcon from "@/assets/icons/auth/facebook.svg";
import InstagramIcon from "@/assets/icons/auth/instagram.svg";
import LinkedinIcon from "@/assets/icons/auth/linkedin.svg";
import TwitterIcon from "@/assets/icons/auth/twitter.svg";
import CheckIcon from "@/assets/icons/common/check.svg";
import ClockIcon from "@/assets/icons/common/clock.svg";
import CloseIcon from "@/assets/icons/common/close.svg";
import StarIcon from "@/assets/icons/common/star.svg";
import DropdownArrowIcon from "@/assets/icons/dropdown/arrow.svg";
import DropdownRemoveIcon from "@/assets/icons/dropdown/remove.svg";
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
                {/* ===== Раздел «Основная информация» (DoctorBasicInfoSection), режим редактирования ===== */}
                {/* ----- Мобильная шапка страницы (DoctorPageLayout), < lg ----- */}
                <div className="lg:hidden flex items-center justify-between px-4 py-4 bg-white border-b border-border">
                  <Link
                    href="/doctor-profile/my-data/basic"
                    aria-label="Назад"
                    className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] active:bg-border-soft hover:bg-background"
                  >
                    <HeaderBackIcon className="w-5 h-5" />
                  </Link>
                  <h1 className="text-base font-semibold text-foreground truncate mx-2">
                    Редактировать
                  </h1>
                  <div className="flex items-center gap-1">
                    <Link
                      href="/doctor-profile/my-data/basic"
                      aria-label="Отменить редактирование"
                      className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] active:bg-border-soft hover:bg-background"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        className="size-4 text-muted"
                        aria-hidden
                      >
                        <path
                          d="M3.5 3.5L16.5 16.5M16.5 3.5L3.5 16.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                    <Link
                      href="/doctor-profile/my-data/save-modal"
                      aria-label="Сохранить"
                      className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] active:bg-border-soft hover:bg-background text-primary"
                    >
                      <CheckIcon className="w-5 h-5" />
                    </Link>
                  </div>
                </div>

                <div className="px-4 py-4 lg:p-0">
                  <div className="hidden lg:flex items-center justify-between mb-6">
                    <h2 className="text-[28px] font-semibold text-foreground">
                      Редактировать
                    </h2>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        aria-label="Отменить редактирование"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent"
                      >
                        <span>Отмена</span>
                      </button>
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] bg-primary text-white active:bg-primary-dark hover:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)]"
                      >
                        <span>Сохранить</span>
                      </button>
                    </div>
                  </div>
                  <div className="bg-white rounded-3xl border border-border p-5 lg:p-8 flex flex-col lg:block">
                    <div className="order-last pt-3 border-t border-background lg:order-none lg:pt-0 lg:mb-6 lg:border-0 lg:flex lg:justify-center">
                      <p className="text-muted text-xs mb-2 lg:hidden">Фото</p>
                      <div className="relative w-28 h-28 lg:w-20 lg:h-20">
                        <div className="w-full h-full rounded-full overflow-hidden bg-linear-to-br from-primary to-[#FF8A6B] flex items-center justify-center">
                          <img
                            src="/images/doctors/doctor-2.png"
                            alt="Асанова Айгуль Бакытовна"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                        />
                        <Link
                          href="/doctor-profile/my-data/photo-modal"
                          className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-1.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] bg-primary active:bg-primary-dark hover:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] absolute bottom-0 right-0"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <path
                              d="M10 1.5a1.5 1.5 0 012.121 2.121L4.5 11.25 2 12l.75-2.5L10 1.5z"
                              stroke="white"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-5">
                      <div className="lg:col-span-2">
                        <label className="flex flex-col gap-1.5">
                          <span className="text-overlay text-sm font-medium">
                            ФИО
                          </span>
                          <div className="relative w-full">
                            <input
                              type="text"
                              placeholder="Введите ФИО"
                              defaultValue="Асанова Айгуль Бакытовна"
                              className="text-base leading-0 border border-border-soft text-foreground rounded-lg py-2.25 px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background w-full"
                            />
                          </div>
                        </label>
                      </div>
                      <div>
                        <label className="block text-muted text-sm mb-1.5">
                          Пол
                        </label>
                        <div className="flex gap-4">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors border-dim"></div>
                            <span className="text-foreground text-sm">
                              Мужской
                            </span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors border-primary">
                              <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                            </div>
                            <span className="text-foreground text-sm">
                              Женский
                            </span>
                          </label>
                        </div>
                      </div>
                      <div>
                        {/* DateField (календарь закрыт) */}
                        <div className="relative">
                          <label className="flex flex-col gap-1.5">
                            <span className="text-overlay text-sm font-medium">
                              Дата рождения
                            </span>
                            <div className="relative w-full">
                              <input
                                type="text"
                                placeholder="ДД.ММ.ГГГГ"
                                defaultValue="14.03.1986"
                                inputMode="numeric"
                                autoComplete="off"
                                className="text-base leading-0 border border-border-soft text-foreground rounded-lg py-2.25 px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background w-full"
                              />
                              <button
                                type="button"
                                aria-label="Открыть календарь"
                                className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center justify-center size-8 rounded-md text-foreground cursor-pointer outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)]"
                              >
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                >
                                  <rect
                                    x="2.25"
                                    y="3.75"
                                    width="13.5"
                                    height="12"
                                    rx="2"
                                    stroke="#838A8D"
                                    strokeWidth="1.3"
                                  />
                                  <path
                                    d="M2.25 7.5h13.5M6 2.25v3M12 2.25v3"
                                    stroke="#838A8D"
                                    strokeWidth="1.3"
                                    strokeLinecap="round"
                                  />
                                </svg>
                              </button>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div>
                        <label className="flex flex-col gap-1.5">
                          <span className="text-overlay text-sm font-medium">
                            Город
                          </span>
                          <div className="relative w-full">
                            <input
                              type="text"
                              placeholder="Введите город"
                              defaultValue="Бишкек"
                              className="text-base leading-0 border border-border-soft text-foreground rounded-lg py-2.25 px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background w-full"
                            />
                          </div>
                        </label>
                      </div>
                      <div>
                        <label className="flex flex-col gap-1.5">
                          <span className="text-overlay text-sm font-medium">
                            Языки общения
                          </span>
                          <div className="relative w-full">
                            <input
                              type="text"
                              placeholder="Русский, Английский"
                              defaultValue="Русский, Кыргызский, Английский"
                              className="text-base leading-0 border border-border-soft text-foreground rounded-lg py-2.25 px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background w-full"
                            />
                          </div>
                        </label>
                      </div>
                      <div>
                        {/* PhoneInput (список стран закрыт) */}
                        <div className="flex flex-col gap-1.5">
                          <span className="text-overlay text-sm font-medium">
                            Телефон
                          </span>
                          <div className="relative">
                            <div className="flex items-center border rounded-lg bg-white transition-all duration-200 border-border-soft focus-within:border-primary focus-within:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)]">
                              <button
                                type="button"
                                className="flex items-center gap-1.5 pl-3 pr-2 py-[9px] shrink-0 select-none"
                              >
                                <span className="text-lg leading-none">🇰🇬</span>
                                <span className="text-sm font-medium text-foreground tabular-nums">
                                  +996
                                </span>
                                <DropdownArrowIcon className="size-4 text-muted transition-transform duration-300 shrink-0" />
                              </button>
                              <div className="w-px h-5 bg-border-soft shrink-0" />
                              <input
                                type="tel"
                                inputMode="numeric"
                                placeholder="•••••••••"
                                defaultValue="555123456"
                                maxLength={9}
                                autoComplete="tel-national"
                                className="flex-1 px-3 py-[9px] text-base text-foreground outline-none bg-transparent placeholder:text-[#C5C8CA] rounded-r-lg min-w-0"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="flex flex-col gap-1.5">
                          <span className="text-overlay text-sm font-medium">
                            Почта
                          </span>
                          <div className="relative w-full">
                            <input
                              type="email"
                              placeholder="example@mail.com"
                              defaultValue="aigul.asanova@imbir.kg"
                              className="text-base leading-0 border border-border-soft text-foreground rounded-lg py-2.25 px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background w-full"
                              disabled
                            />
                          </div>
                        </label>
                      </div>
                    </div>
                    {/* OnlineProfileSettings — редактирование */}
                    <div className="mt-6 pt-6 border-t border-border order-last lg:order-none">
                      <h3 className="text-base font-semibold text-foreground mb-4">
                        Онлайн-приём и публикация
                      </h3>
                      <div className="flex flex-col gap-4">
                        <label className="group flex cursor-pointer items-center gap-2.5">
                          <div className="relative flex items-center justify-center">
                            <input
                              type="checkbox"
                              className="peer sr-only"
                              defaultChecked
                            />
                            <div className="relative flex items-center justify-center rounded-full border transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none border-border-soft bg-white peer-checked:bg-primary peer-checked:border-primary peer-indeterminate:bg-primary peer-indeterminate:border-primary peer-focus-visible:shadow-[0_0_0.5px_2px_rgba(245,101,62,0.2)] peer-focus-visible:border-primary peer-checked:[&>.check]:opacity-100 peer-checked:[&>.check]:scale-100 peer-indeterminate:[&>.minus]:opacity-100 peer-indeterminate:[&>.minus]:scale-100 size-5">
                              <div className="check absolute inset-0 flex items-center justify-center opacity-0 scale-50 transition-all duration-200">
                                <svg
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  className="text-white shrink-0 size-3"
                                >
                                  <path
                                    d="M10 3L4.5 8.5L2 6"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <div className="minus absolute inset-0 flex items-center justify-center opacity-0 scale-50 transition-all duration-200">
                                <svg
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  className="text-white shrink-0 size-3"
                                >
                                  <path
                                    d="M2.5 6H9.5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <span className="font-medium text-overlay text-base">
                            Принимаю онлайн (видеоконсультации)
                          </span>
                        </label>
                        <div className="max-w-xs">
                          <label className="flex flex-col gap-1.5">
                            <span className="text-overlay text-sm font-medium">
                              Стоимость консультации, сом
                            </span>
                            <div className="relative w-full">
                              <input
                                type="number"
                                min="0"
                                step="1"
                                placeholder="0"
                                defaultValue="1500"
                                className="text-base leading-0 border border-border-soft text-foreground rounded-lg py-2.25 px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background w-full"
                              />
                            </div>
                          </label>
                        </div>
                        <label className="group flex cursor-pointer items-center gap-2.5">
                          <div className="relative flex items-center justify-center">
                            <input
                              type="checkbox"
                              className="peer sr-only"
                              defaultChecked
                            />
                            <div className="relative flex items-center justify-center rounded-full border transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none border-border-soft bg-white peer-checked:bg-primary peer-checked:border-primary peer-indeterminate:bg-primary peer-indeterminate:border-primary peer-focus-visible:shadow-[0_0_0.5px_2px_rgba(245,101,62,0.2)] peer-focus-visible:border-primary peer-checked:[&>.check]:opacity-100 peer-checked:[&>.check]:scale-100 peer-indeterminate:[&>.minus]:opacity-100 peer-indeterminate:[&>.minus]:scale-100 size-5">
                              <div className="check absolute inset-0 flex items-center justify-center opacity-0 scale-50 transition-all duration-200">
                                <svg
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  className="text-white shrink-0 size-3"
                                >
                                  <path
                                    d="M10 3L4.5 8.5L2 6"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <div className="minus absolute inset-0 flex items-center justify-center opacity-0 scale-50 transition-all duration-200">
                                <svg
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  className="text-white shrink-0 size-3"
                                >
                                  <path
                                    d="M2.5 6H9.5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <span className="font-medium text-overlay text-base">
                            Опубликовать профиль в каталоге
                          </span>
                        </label>
                        <p className="text-muted text-sm">
                          Пока профиль не опубликован, он не показывается в
                          поиске и на него нельзя записаться.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                {/* ===== «Мои данные» на десктопе (DoctorMyDataOverview), режим редактирования ===== */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-[32px] font-semibold text-foreground">
                    Мои данные
                  </h2>
                  <div className="flex items-center gap-3">
                    <Link href="/doctor-profile/my-data">
                      <button
                        type="button"
                        aria-label="Отменить редактирование"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent"
                      >
                        <span>Отмена</span>
                      </button>
                    </Link>
                    <Link href="/doctor-profile/my-data/save-modal">
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] bg-primary text-white active:bg-primary-dark hover:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)]"
                      >
                        <span>Сохранить</span>
                      </button>
                    </Link>
                  </div>
                </div>

                {/* ── 1. Основная информация ── */}
                <div className="bg-white rounded-3xl p-5 lg:p-6 border border-border mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Основная информация
                  </h3>
                  <div className="flex flex-col gap-4">
                    <div>
                      <label className="flex flex-col gap-1.5">
                        <span className="text-overlay text-sm font-medium">
                          ФИО
                        </span>
                        <div className="relative w-full">
                          <input
                            type="text"
                            placeholder="Введите ФИО"
                            defaultValue="Асанова Айгуль Бакытовна"
                            className="text-base leading-0 border border-border-soft text-foreground rounded-lg py-2.25 px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background w-full"
                          />
                        </div>
                      </label>
                    </div>
                    <div>
                      <label className="block text-muted text-sm mb-1.5">
                        Пол
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors border-dim"></div>
                          <span className="text-foreground text-sm">
                            Мужской
                          </span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors border-primary">
                            <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                          </div>
                          <span className="text-foreground text-sm">
                            Женский
                          </span>
                        </label>
                      </div>
                    </div>
                    <div>
                      {/* DateField (календарь закрыт) */}
                      <div className="relative">
                        <label className="flex flex-col gap-1.5">
                          <span className="text-overlay text-sm font-medium">
                            Дата рождения
                          </span>
                          <div className="relative w-full">
                            <input
                              type="text"
                              placeholder="ДД.ММ.ГГГГ"
                              defaultValue="14.03.1986"
                              inputMode="numeric"
                              autoComplete="off"
                              className="text-base leading-0 border border-border-soft text-foreground rounded-lg py-2.25 px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background w-full"
                            />
                            <button
                              type="button"
                              aria-label="Открыть календарь"
                              className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center justify-center size-8 rounded-md text-foreground cursor-pointer outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)]"
                            >
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                              >
                                <rect
                                  x="2.25"
                                  y="3.75"
                                  width="13.5"
                                  height="12"
                                  rx="2"
                                  stroke="#838A8D"
                                  strokeWidth="1.3"
                                />
                                <path
                                  d="M2.25 7.5h13.5M6 2.25v3M12 2.25v3"
                                  stroke="#838A8D"
                                  strokeWidth="1.3"
                                  strokeLinecap="round"
                                />
                              </svg>
                            </button>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="flex flex-col gap-1.5">
                        <span className="text-overlay text-sm font-medium">
                          Город
                        </span>
                        <div className="relative w-full">
                          <input
                            type="text"
                            placeholder="Введите город"
                            defaultValue="Бишкек"
                            className="text-base leading-0 border border-border-soft text-foreground rounded-lg py-2.25 px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background w-full"
                          />
                        </div>
                      </label>
                    </div>
                    <div>
                      <label className="flex flex-col gap-1.5">
                        <span className="text-overlay text-sm font-medium">
                          Языки общения
                        </span>
                        <div className="relative w-full">
                          <input
                            type="text"
                            placeholder="Русский, Английский"
                            defaultValue="Русский, Кыргызский, Английский"
                            className="text-base leading-0 border border-border-soft text-foreground rounded-lg py-2.25 px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background w-full"
                          />
                        </div>
                      </label>
                    </div>
                    <div>
                      {/* PhoneInput (список стран закрыт) */}
                      <div className="flex flex-col gap-1.5">
                        <span className="text-overlay text-sm font-medium">
                          Телефон
                        </span>
                        <div className="relative">
                          <div className="flex items-center border rounded-lg bg-white transition-all duration-200 border-border-soft focus-within:border-primary focus-within:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)]">
                            <button
                              type="button"
                              className="flex items-center gap-1.5 pl-3 pr-2 py-[9px] shrink-0 select-none"
                            >
                              <span className="text-lg leading-none">🇰🇬</span>
                              <span className="text-sm font-medium text-foreground tabular-nums">
                                +996
                              </span>
                              <DropdownArrowIcon className="size-4 text-muted transition-transform duration-300 shrink-0" />
                            </button>
                            <div className="w-px h-5 bg-border-soft shrink-0" />
                            <input
                              type="tel"
                              inputMode="numeric"
                              placeholder="•••••••••"
                              defaultValue="555123456"
                              maxLength={9}
                              autoComplete="tel-national"
                              className="flex-1 px-3 py-[9px] text-base text-foreground outline-none bg-transparent placeholder:text-[#C5C8CA] rounded-r-lg min-w-0"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="flex flex-col gap-1.5">
                        <span className="text-overlay text-sm font-medium">
                          Почта
                        </span>
                        <div className="relative w-full">
                          <input
                            type="email"
                            placeholder="example@mail.com"
                            defaultValue="aigul.asanova@imbir.kg"
                            className="text-base leading-0 border border-border-soft text-foreground rounded-lg py-2.25 px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background w-full"
                            disabled
                          />
                        </div>
                      </label>
                    </div>

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
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                        />
                        <Link
                          href="/doctor-profile/my-data/photo-modal"
                          className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-1.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] bg-primary active:bg-primary-dark hover:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] absolute bottom-1 right-1"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <path
                              d="M10 1.5a1.5 1.5 0 012.121 2.121L4.5 11.25 2 12l.75-2.5L10 1.5z"
                              stroke="white"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── 2. Профессиональные данные ── */}
                <div className="bg-white rounded-3xl p-5 lg:p-6 border border-border mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Профессиональные данные
                  </h3>
                  <div className="flex flex-col gap-4">
                    <div>
                      {/* Dropdown (закрыт) */}
                      <div className="flex flex-col gap-1.5 w-full">
                        <span className="text-overlay text-sm font-medium">
                          Специализация
                        </span>
                        <div className="relative">
                          <div
                            role="combobox"
                            tabIndex={0}
                            aria-expanded={false}
                            aria-haspopup="listbox"
                            className="flex items-center justify-between min-h-10.5 p-3 border rounded-lg cursor-pointer transition-all duration-200 bg-white select-none border-border-soft outline-none focus-visible:border-primary focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] hover:border-primary/50"
                          >
                            <div className="flex flex-wrap items-center gap-1.5 flex-1 min-w-0 overflow-hidden">
                              <span className="flex items-center gap-1 max-w-full px-2 py-0.5 border border-border-soft rounded-md bg-white text-sm">
                                <span className="truncate">Кардиолог</span>
                                <button
                                  type="button"
                                  className="size-6 shrink-0 inline-flex items-center justify-center hover:text-primary transition-colors"
                                >
                                  <DropdownRemoveIcon className="size-4" />
                                </button>
                              </span>
                            </div>
                            <DropdownArrowIcon className="text-muted transition-transform duration-300 size-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      {/* Dropdown (закрыт) */}
                      <div className="flex flex-col gap-1.5 w-full">
                        <span className="text-overlay text-sm font-medium">
                          Дополнительная специализация
                        </span>
                        <div className="relative">
                          <div
                            role="combobox"
                            tabIndex={0}
                            aria-expanded={false}
                            aria-haspopup="listbox"
                            className="flex items-center justify-between min-h-10.5 p-3 border rounded-lg cursor-pointer transition-all duration-200 bg-white select-none border-border-soft outline-none focus-visible:border-primary focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] hover:border-primary/50"
                          >
                            <div className="flex flex-wrap items-center gap-1.5 flex-1 min-w-0 overflow-hidden">
                              <span className="flex items-center gap-1 max-w-full px-2 py-0.5 border border-border-soft rounded-md bg-white text-sm">
                                <span className="truncate">Терапевт</span>
                                <button
                                  type="button"
                                  className="size-6 shrink-0 inline-flex items-center justify-center hover:text-primary transition-colors"
                                >
                                  <DropdownRemoveIcon className="size-4" />
                                </button>
                              </span>
                              <span className="flex items-center gap-1 max-w-full px-2 py-0.5 border border-border-soft rounded-md bg-white text-sm">
                                <span className="truncate">
                                  Функциональная диагностика
                                </span>
                                <button
                                  type="button"
                                  className="size-6 shrink-0 inline-flex items-center justify-center hover:text-primary transition-colors"
                                >
                                  <DropdownRemoveIcon className="size-4" />
                                </button>
                              </span>
                            </div>
                            <DropdownArrowIcon className="text-muted transition-transform duration-300 size-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="flex flex-col gap-1.5">
                        <span className="text-overlay text-sm font-medium">
                          Стаж работы, лет
                        </span>
                        <div className="relative w-full">
                          <input
                            type="number"
                            placeholder="0"
                            defaultValue="14"
                            className="text-base leading-0 border border-border-soft text-foreground rounded-lg py-2.25 px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background w-full"
                            min="0"
                          />
                        </div>
                      </label>
                    </div>
                    <div>
                      <label className="flex flex-col gap-1.5">
                        <span className="text-overlay text-sm font-medium">
                          Текущая должность
                        </span>
                        <div className="relative w-full">
                          <input
                            type="text"
                            placeholder="Введите должность"
                            defaultValue="Заведующая кардиологическим отделением"
                            className="text-base leading-0 border border-border-soft text-foreground rounded-lg py-2.25 px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background w-full"
                          />
                        </div>
                      </label>
                    </div>
                    <div>
                      <label className="flex flex-col gap-1.5">
                        <span className="text-overlay text-sm font-medium">
                          Место работы (клиника)
                        </span>
                        <div className="relative w-full">
                          <input
                            type="text"
                            placeholder="Введите название клиники"
                            defaultValue="Медицинский центр «Неомед»"
                            className="text-base leading-0 border border-border-soft text-foreground rounded-lg py-2.25 px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background w-full"
                          />
                        </div>
                      </label>
                    </div>
                    <div>
                      {/* Dropdown (закрыт) */}
                      <div className="flex flex-col gap-1.5 w-full">
                        <span className="text-overlay text-sm font-medium">
                          Категория / Квалификация
                        </span>
                        <div className="relative">
                          <div
                            role="combobox"
                            tabIndex={0}
                            aria-expanded={false}
                            aria-haspopup="listbox"
                            className="flex items-center justify-between min-h-10.5 p-3 border rounded-lg cursor-pointer transition-all duration-200 bg-white select-none border-border-soft outline-none focus-visible:border-primary focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] hover:border-primary/50"
                          >
                            <div className="flex flex-wrap items-center gap-1.5 flex-1 min-w-0 overflow-hidden">
                              <span className="truncate text-foreground">
                                Высшая
                              </span>
                            </div>
                            <DropdownArrowIcon className="text-muted transition-transform duration-300 size-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="flex flex-col gap-1.5">
                        <span className="text-overlay text-sm font-medium">
                          Научная степень
                        </span>
                        <div className="relative w-full">
                          <input
                            type="text"
                            placeholder="Введите степень"
                            defaultValue="Кандидат медицинских наук"
                            className="text-base leading-0 border border-border-soft text-foreground rounded-lg py-2.25 px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background w-full"
                          />
                        </div>
                      </label>
                    </div>
                    <div>
                      {/* Dropdown (закрыт) */}
                      <div className="flex flex-col gap-1.5 w-full">
                        <span className="text-overlay text-sm font-medium">
                          Оборудование
                        </span>
                        <div className="relative">
                          <div
                            role="combobox"
                            tabIndex={0}
                            aria-expanded={false}
                            aria-haspopup="listbox"
                            className="flex items-center justify-between min-h-10.5 p-3 border rounded-lg cursor-pointer transition-all duration-200 bg-white select-none border-border-soft outline-none focus-visible:border-primary focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] hover:border-primary/50"
                          >
                            <div className="flex flex-wrap items-center gap-1.5 flex-1 min-w-0 overflow-hidden">
                              <span className="flex items-center gap-1 max-w-full px-2 py-0.5 border border-border-soft rounded-md bg-white text-sm">
                                <span className="truncate">УЗИ</span>
                                <button
                                  type="button"
                                  className="size-6 shrink-0 inline-flex items-center justify-center hover:text-primary transition-colors"
                                >
                                  <DropdownRemoveIcon className="size-4" />
                                </button>
                              </span>
                              <span className="flex items-center gap-1 max-w-full px-2 py-0.5 border border-border-soft rounded-md bg-white text-sm">
                                <span className="truncate">Лаборатория</span>
                                <button
                                  type="button"
                                  className="size-6 shrink-0 inline-flex items-center justify-center hover:text-primary transition-colors"
                                >
                                  <DropdownRemoveIcon className="size-4" />
                                </button>
                              </span>
                            </div>
                            <DropdownArrowIcon className="text-muted transition-transform duration-300 size-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      {/* Dropdown (закрыт) */}
                      <div className="flex flex-col gap-1.5 w-full">
                        <span className="text-overlay text-sm font-medium">
                          Условия приёма
                        </span>
                        <div className="relative">
                          <div
                            role="combobox"
                            tabIndex={0}
                            aria-expanded={false}
                            aria-haspopup="listbox"
                            className="flex items-center justify-between min-h-10.5 p-3 border rounded-lg cursor-pointer transition-all duration-200 bg-white select-none border-border-soft outline-none focus-visible:border-primary focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] hover:border-primary/50"
                          >
                            <div className="flex flex-wrap items-center gap-1.5 flex-1 min-w-0 overflow-hidden">
                              <span className="flex items-center gap-1 max-w-full px-2 py-0.5 border border-border-soft rounded-md bg-white text-sm">
                                <span className="truncate">Парковка</span>
                                <button
                                  type="button"
                                  className="size-6 shrink-0 inline-flex items-center justify-center hover:text-primary transition-colors"
                                >
                                  <DropdownRemoveIcon className="size-4" />
                                </button>
                              </span>
                              <span className="flex items-center gap-1 max-w-full px-2 py-0.5 border border-border-soft rounded-md bg-white text-sm">
                                <span className="truncate">
                                  Онлайн-консультация
                                </span>
                                <button
                                  type="button"
                                  className="size-6 shrink-0 inline-flex items-center justify-center hover:text-primary transition-colors"
                                >
                                  <DropdownRemoveIcon className="size-4" />
                                </button>
                              </span>
                            </div>
                            <DropdownArrowIcon className="text-muted transition-transform duration-300 size-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* OnlineProfileSettings — редактирование */}
                  <div className="mt-6 pt-6 border-t border-border order-last lg:order-none">
                    <h3 className="text-base font-semibold text-foreground mb-4">
                      Онлайн-приём и публикация
                    </h3>
                    <div className="flex flex-col gap-4">
                      <label className="group flex cursor-pointer items-center gap-2.5">
                        <div className="relative flex items-center justify-center">
                          <input
                            type="checkbox"
                            className="peer sr-only"
                            defaultChecked
                          />
                          <div className="relative flex items-center justify-center rounded-full border transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none border-border-soft bg-white peer-checked:bg-primary peer-checked:border-primary peer-indeterminate:bg-primary peer-indeterminate:border-primary peer-focus-visible:shadow-[0_0_0.5px_2px_rgba(245,101,62,0.2)] peer-focus-visible:border-primary peer-checked:[&>.check]:opacity-100 peer-checked:[&>.check]:scale-100 peer-indeterminate:[&>.minus]:opacity-100 peer-indeterminate:[&>.minus]:scale-100 size-5">
                            <div className="check absolute inset-0 flex items-center justify-center opacity-0 scale-50 transition-all duration-200">
                              <svg
                                viewBox="0 0 12 12"
                                fill="none"
                                className="text-white shrink-0 size-3"
                              >
                                <path
                                  d="M10 3L4.5 8.5L2 6"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <div className="minus absolute inset-0 flex items-center justify-center opacity-0 scale-50 transition-all duration-200">
                              <svg
                                viewBox="0 0 12 12"
                                fill="none"
                                className="text-white shrink-0 size-3"
                              >
                                <path
                                  d="M2.5 6H9.5"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <span className="font-medium text-overlay text-base">
                          Принимаю онлайн (видеоконсультации)
                        </span>
                      </label>
                      <div className="max-w-xs">
                        <label className="flex flex-col gap-1.5">
                          <span className="text-overlay text-sm font-medium">
                            Стоимость консультации, сом
                          </span>
                          <div className="relative w-full">
                            <input
                              type="number"
                              min="0"
                              step="1"
                              placeholder="0"
                              defaultValue="1500"
                              className="text-base leading-0 border border-border-soft text-foreground rounded-lg py-2.25 px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background w-full"
                            />
                          </div>
                        </label>
                      </div>
                      <label className="group flex cursor-pointer items-center gap-2.5">
                        <div className="relative flex items-center justify-center">
                          <input
                            type="checkbox"
                            className="peer sr-only"
                            defaultChecked
                          />
                          <div className="relative flex items-center justify-center rounded-full border transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none border-border-soft bg-white peer-checked:bg-primary peer-checked:border-primary peer-indeterminate:bg-primary peer-indeterminate:border-primary peer-focus-visible:shadow-[0_0_0.5px_2px_rgba(245,101,62,0.2)] peer-focus-visible:border-primary peer-checked:[&>.check]:opacity-100 peer-checked:[&>.check]:scale-100 peer-indeterminate:[&>.minus]:opacity-100 peer-indeterminate:[&>.minus]:scale-100 size-5">
                            <div className="check absolute inset-0 flex items-center justify-center opacity-0 scale-50 transition-all duration-200">
                              <svg
                                viewBox="0 0 12 12"
                                fill="none"
                                className="text-white shrink-0 size-3"
                              >
                                <path
                                  d="M10 3L4.5 8.5L2 6"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <div className="minus absolute inset-0 flex items-center justify-center opacity-0 scale-50 transition-all duration-200">
                              <svg
                                viewBox="0 0 12 12"
                                fill="none"
                                className="text-white shrink-0 size-3"
                              >
                                <path
                                  d="M2.5 6H9.5"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <span className="font-medium text-overlay text-base">
                          Опубликовать профиль в каталоге
                        </span>
                      </label>
                      <p className="text-muted text-sm">
                        Пока профиль не опубликован, он не показывается в поиске
                        и на него нельзя записаться.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ── 3. Образование ── */}
                <div className="bg-white rounded-3xl p-5 lg:p-6 border border-border mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Образование
                  </h3>
                  <div className="flex flex-col gap-4">
                    <div>
                      <label className="flex flex-col gap-1.5">
                        <span className="text-overlay text-sm font-medium">
                          ВУЗ
                        </span>
                        <div className="relative w-full">
                          <input
                            type="text"
                            placeholder="Название учебного заведения"
                            defaultValue="КГМА им. И. К. Ахунбаева"
                            className="text-base leading-0 border border-border-soft text-foreground rounded-lg py-2.25 px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background w-full"
                          />
                        </div>
                      </label>
                    </div>
                    <div>
                      <label className="flex flex-col gap-1.5">
                        <span className="text-overlay text-sm font-medium">
                          Год окончания
                        </span>
                        <div className="relative w-full">
                          <input
                            type="text"
                            placeholder="ГГГГ"
                            defaultValue="2009"
                            className="text-base leading-0 border border-border-soft text-foreground rounded-lg py-2.25 px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background w-full"
                          />
                        </div>
                      </label>
                    </div>
                    <div>
                      <label className="flex flex-col gap-1.5">
                        <span className="text-overlay text-sm font-medium">
                          Интернатура
                        </span>
                        <div className="relative w-full">
                          <input
                            type="text"
                            placeholder="Специальность"
                            defaultValue="Терапия"
                            className="text-base leading-0 border border-border-soft text-foreground rounded-lg py-2.25 px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background w-full"
                          />
                        </div>
                      </label>
                    </div>
                    <div>
                      <label className="flex flex-col gap-1.5">
                        <span className="text-overlay text-sm font-medium">
                          Ординатура
                        </span>
                        <div className="relative w-full">
                          <input
                            type="text"
                            placeholder="Специальность"
                            defaultValue="Кардиология"
                            className="text-base leading-0 border border-border-soft text-foreground rounded-lg py-2.25 px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background w-full"
                          />
                        </div>
                      </label>
                    </div>
                    <div>
                      <label className="flex flex-col gap-1.5">
                        <span className="text-overlay text-sm font-medium">
                          Специализация по диплому
                        </span>
                        <div className="relative w-full">
                          <input
                            type="text"
                            placeholder="Введите специализацию"
                            defaultValue="Лечебное дело"
                            className="text-base leading-0 border border-border-soft text-foreground rounded-lg py-2.25 px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background w-full"
                          />
                        </div>
                      </label>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-muted text-sm">
                          Дополнительное образование
                        </p>
                        <button
                          type="button"
                          className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-8 text-xs px-4 relative after:absolute after:inset-x-0 after:-inset-y-2 after:content-[''] active:bg-border-soft hover:bg-background text-primary"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            className="size-5"
                          >
                            <path
                              d="M7 2V12M2 7H12"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                          <span>Добавить</span>
                        </button>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <label className="flex flex-col gap-1.5">
                            <div className="relative w-full">
                              <input
                                type="text"
                                placeholder="Курс"
                                defaultValue="Эхокардиография в клинической практике"
                                className="text-base leading-0 border border-border-soft text-foreground rounded-lg py-2.25 px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background w-full flex-1"
                              />
                            </div>
                          </label>
                          <label className="flex flex-col gap-1.5">
                            <div className="relative w-full">
                              <input
                                type="text"
                                placeholder="Год"
                                defaultValue="2018"
                                className="text-base leading-0 border border-border-soft text-foreground rounded-lg py-2.25 px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background w-24"
                              />
                            </div>
                          </label>
                          <button
                            type="button"
                            className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-1.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] active:bg-border-soft hover:bg-background text-dim hover:text-primary"
                          >
                            <CloseIcon />
                          </button>
                        </div>
                        <div className="flex items-center gap-2">
                          <label className="flex flex-col gap-1.5">
                            <div className="relative w-full">
                              <input
                                type="text"
                                placeholder="Курс"
                                defaultValue="Современные подходы к лечению артериальной гипертензии"
                                className="text-base leading-0 border border-border-soft text-foreground rounded-lg py-2.25 px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background w-full flex-1"
                              />
                            </div>
                          </label>
                          <label className="flex flex-col gap-1.5">
                            <div className="relative w-full">
                              <input
                                type="text"
                                placeholder="Год"
                                defaultValue="2021"
                                className="text-base leading-0 border border-border-soft text-foreground rounded-lg py-2.25 px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background w-24"
                              />
                            </div>
                          </label>
                          <button
                            type="button"
                            className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-1.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] active:bg-border-soft hover:bg-background text-dim hover:text-primary"
                          >
                            <CloseIcon />
                          </button>
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
                        <input
                          type="file"
                          accept="image/*,.pdf"
                          className="hidden"
                        />
                        <button
                          type="button"
                          className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-8 text-xs px-4 relative after:absolute after:inset-x-0 after:-inset-y-2 after:content-[''] active:bg-border-soft hover:bg-background text-primary"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            className="size-5"
                          >
                            <path
                              d="M7 2V12M2 7H12"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                          <span>Добавить документ</span>
                        </button>
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
                          <button
                            type="button"
                            className="absolute top-0 right-0 z-10 w-1/2 aspect-square bg-primary flex items-center justify-center"
                          >
                            <svg
                              className="w-1/2 h-1/2"
                              viewBox="0 0 8 8"
                              fill="none"
                            >
                              <path
                                d="M6.5 1.5L1.5 6.5M1.5 1.5L6.5 6.5"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                            </svg>
                          </button>
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
                          <button
                            type="button"
                            className="absolute top-0 right-0 z-10 w-1/2 aspect-square bg-primary flex items-center justify-center"
                          >
                            <svg
                              className="w-1/2 h-1/2"
                              viewBox="0 0 8 8"
                              fill="none"
                            >
                              <path
                                d="M6.5 1.5L1.5 6.5M1.5 1.5L6.5 6.5"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                            </svg>
                          </button>
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
                          <button
                            type="button"
                            className="absolute top-0 right-0 z-10 w-1/2 aspect-square bg-primary flex items-center justify-center"
                          >
                            <svg
                              className="w-1/2 h-1/2"
                              viewBox="0 0 8 8"
                              fill="none"
                            >
                              <path
                                d="M6.5 1.5L1.5 6.5M1.5 1.5L6.5 6.5"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="flex flex-col gap-1.5">
                        <span className="text-overlay text-sm font-medium">
                          Номер лицензии
                        </span>
                        <div className="relative w-full">
                          <input
                            type="text"
                            placeholder="ЛИЦ-XXXXXX"
                            defaultValue="ЛИЦ-048213"
                            className="text-base leading-0 border border-border-soft text-foreground rounded-lg py-2.25 px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background w-full"
                          />
                        </div>
                      </label>
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

      {/* ===================== Сохранение данных профиля (ConfirmDialog, открыт) ===================== */}
      <div className="fixed inset-0 z-200 flex items-end sm:items-center justify-center">
        <div
          className="modal-overlay absolute inset-0 bg-black/40 backdrop-blur-sm"
          data-state="open"
        />

        {/* Mobile bottom-sheet */}
        <div
          className="modal-sheet sm:hidden relative bg-white rounded-t-3xl w-full p-6 pb-8 flex flex-col items-center gap-4"
          data-state="open"
        >
          <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#FFF0EE] text-primary">
            <CheckIcon className="w-7 h-7 text-primary" />
          </div>
          <div className="text-center">
            <h2 className="text-lg font-bold text-foreground">
              Сохранить изменения?
            </h2>
            <p className="text-sm text-muted mt-1.5 leading-snug">
              Обновлённые данные профиля будут сохранены
            </p>
          </div>
          <div className="flex gap-3 w-full mt-2">
            <button
              type="button"
              className="flex-1 py-3.5 rounded-full border border-border-soft text-foreground font-medium text-base hover:bg-background transition-colors active:scale-95"
            >
              Отмена
            </button>
            <button
              type="button"
              className="flex-1 py-3.5 rounded-full text-white font-medium text-base transition-colors active:scale-95 bg-primary hover:bg-primary-dark"
            >
              Сохранить
            </button>
          </div>
        </div>

        {/* Desktop centered */}
        <div
          className="modal-panel hidden sm:flex relative bg-white rounded-3xl w-full max-w-sm p-6 flex-col items-center gap-4 shadow-xl"
          data-state="open"
        >
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#FFF0EE] text-primary">
            <CheckIcon className="w-7 h-7 text-primary" />
          </div>
          <div className="text-center">
            <h2 className="text-lg font-bold text-foreground">
              Сохранить изменения?
            </h2>
            <p className="text-sm text-muted mt-1.5 leading-snug">
              Обновлённые данные профиля будут сохранены
            </p>
          </div>
          <div className="flex gap-3 w-full mt-2">
            <button
              type="button"
              className="flex-1 py-3.5 rounded-full border border-border-soft text-foreground font-medium text-base hover:bg-background transition-colors active:scale-95"
            >
              Отмена
            </button>
            <button
              type="button"
              className="flex-1 py-3.5 rounded-full text-white font-medium text-base transition-colors active:scale-95 bg-primary hover:bg-primary-dark"
            >
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
