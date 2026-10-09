import Link from "next/link";

import FacebookIcon from "@/assets/icons/auth/facebook.svg";
import InstagramIcon from "@/assets/icons/auth/instagram.svg";
import LinkedinIcon from "@/assets/icons/auth/linkedin.svg";
import TwitterIcon from "@/assets/icons/auth/twitter.svg";
import ClockIcon from "@/assets/icons/common/clock.svg";
import CloseIcon from "@/assets/icons/common/close.svg";
import StarIcon from "@/assets/icons/common/star.svg";
import HeaderBackIcon from "@/assets/icons/header/back-arrow.svg";
import ChatIcon from "@/assets/icons/header/chat.svg";
import GeoIcon from "@/assets/icons/header/geo.svg";
import GeoBtnArrowIcon from "@/assets/icons/header/geo-btn-arrow.svg";
import Logo from "@/assets/icons/header/logo.svg";
import ProfileIcon from "@/assets/icons/header/profile.svg";
import SearchIcon from "@/assets/icons/header/search.svg";
import LogoutIcon from "@/assets/icons/profile/logout.svg";

export default function Page() {
  return (
    <>
      {/* ===================== HEADER (только md+, как в app/clinic-profile/layout.tsx) ===================== */}
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
                  <Link href="/clinic-profile">
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
                  <Link href="/clinic-profile">
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

      {/* ===================== CABINET (ClinicPageLayoutSkeleton) ===================== */}
      <div className="w-full min-h-screen">
        <div className="max-w-360 mx-auto md:px-10 md:py-8">
          <h1 className="text-[40px] font-semibold text-foreground mb-8 hidden md:block">
            Мой профиль
          </h1>

          <div className="flex gap-6">
            {/* ===================== SIDEBAR (widgets/clinic/layout/sidebar) ===================== */}
            <aside className="w-72 shrink-0 hidden lg:block sticky top-0 h-fit">
              <Link
                href="/clinic-profile"
                className="block bg-white border border-border-soft rounded-3xl p-1 mb-4 hover:border-primary transition-colors"
              >
                <div className="bg-linear-to-b from-[#FFE2DA] to-white rounded-[20px] p-6 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-linear-to-br from-primary to-[#FF8A6B] flex items-center justify-center shrink-0 mb-3 border-2 border-white shadow-sm">
                    <img
                      src="/images/clinics/clinic-1.png"
                      alt="Медицинский центр «Авиценна»"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-foreground font-semibold text-base truncate max-w-full">
                    Медицинский центр «Авиценна»
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <StarIcon className="w-4 h-4 text-primary" />
                    <span className="text-primary text-sm font-medium">
                      4.8
                    </span>
                  </div>
                </div>
              </Link>

              <nav className="bg-white border border-border-soft rounded-3xl p-2 flex flex-col gap-1 mb-4 relative">
                <Link
                  href="/clinic-profile"
                  className="flex items-center gap-3 px-4 py-3.5 rounded-2xl relative z-10 hover:bg-surface"
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 bg-primary-tint text-primary">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M4.16667 7.5L10 3.33333L15.8333 7.5V15.8333C15.8333 16.2754 15.6577 16.6993 15.3452 17.0118C15.0326 17.3244 14.6087 17.5 14.1667 17.5H5.83333C5.39131 17.5 4.96738 17.3244 4.65482 17.0118C4.34226 16.6993 4.16667 16.2754 4.16667 15.8333V7.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="flex-1 font-medium text-base transition-colors duration-200 text-secondary">
                    Моя клиника
                  </span>
                </Link>

                <Link
                  href="/clinic-profile/specialists"
                  className="flex items-center gap-3 px-4 py-3.5 rounded-2xl relative z-10 hover:bg-surface"
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 bg-primary-tint text-primary">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
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
                    Мои специалисты
                  </span>
                </Link>

                <Link
                  href="/clinic-profile/procedures"
                  data-active="true"
                  className="flex items-center gap-3 px-4 py-3.5 rounded-2xl relative z-10 bg-primary-tint"
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 bg-primary text-white">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M15.8333 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.3333 0.833336V4.16667M6.66667 0.833336V4.16667M2.5 7.5H17.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="flex-1 font-medium text-base transition-colors duration-200 text-foreground">
                    Мои процедуры
                  </span>
                </Link>

                <Link
                  href="/clinic-profile/appointments"
                  className="flex items-center gap-3 px-4 py-3.5 rounded-2xl relative z-10 hover:bg-surface"
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 bg-primary-tint text-primary">
                    <ClockIcon className="size-5" />
                  </div>
                  <span className="flex-1 font-medium text-base transition-colors duration-200 text-secondary">
                    Записи
                  </span>
                  <span
                    className="shrink-0 min-w-6 h-6 px-1.5 rounded-full bg-info text-white text-xs font-semibold inline-flex items-center justify-center tabular-nums"
                    aria-label="Новых записей: 3"
                  >
                    3
                  </span>
                </Link>

                <Link
                  href="/clinic-profile/reviews"
                  className="flex items-center gap-3 px-4 py-3.5 rounded-2xl relative z-10 hover:bg-surface"
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 bg-primary-tint text-primary">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
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
                  href="/clinic-profile/invites"
                  className="flex items-center gap-3 px-4 py-3.5 rounded-2xl relative z-10 hover:bg-surface"
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 bg-primary-tint text-primary">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M13.3333 17.5V15.8333C13.3333 14.9493 12.9821 14.1014 12.357 13.4763C11.7319 12.8512 10.884 12.5 10 12.5H4.16667C3.28261 12.5 2.43477 12.8512 1.80964 13.4763C1.18452 14.1014 0.833332 14.9493 0.833332 15.8333V17.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="7.08333"
                        cy="7.08333"
                        r="3.33333"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.8333 6.66667V11.6667M13.3333 9.16667H18.3333"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="flex-1 font-medium text-base transition-colors duration-200 text-secondary">
                    Ссылка для регистрации
                  </span>
                </Link>

                <Link
                  href="/clinic-profile/doctor-invitations"
                  className="flex items-center gap-3 px-4 py-3.5 rounded-2xl relative z-10 hover:bg-surface"
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 bg-primary-tint text-primary">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
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
                    Приглашения врачам
                  </span>
                </Link>
              </nav>

              <Link
                href="/clinic-profile/logout-modal"
                className="block bg-white border border-border-soft rounded-3xl p-1 w-full group"
              >
                <div className="flex items-center gap-3 px-4 py-3.5 rounded-[20px] text-secondary group-hover:bg-surface transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-primary-tint flex items-center justify-center shrink-0 text-primary">
                    <LogoutIcon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-base">
                    Выйти из профиля
                  </span>
                </div>
              </Link>
            </aside>

            <main className="flex-1 min-w-0">
              {/* Mobile header (ClinicPageLayout) */}
              <div className="md:hidden bg-white px-4 pt-1 pb-4">
                <div className="grid grid-cols-[2.5rem_minmax(0,1fr)_2.5rem] items-center min-h-10">
                  <Link
                    href="/clinic-profile/menu"
                    aria-label="Назад"
                    className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent justify-self-start"
                  >
                    <HeaderBackIcon className="size-4" />
                  </Link>
                  <h1 className="text-center font-medium text-base text-foreground truncate px-2">
                    Мои процедуры
                  </h1>
                  <div className="flex justify-end"></div>
                </div>
              </div>

              <div className="px-4 pt-4 pb-6 md:p-0">
                <div className="hidden md:flex items-center justify-between mb-6">
                  <h2 className="text-[32px] font-semibold text-foreground">
                    Мои процедуры
                  </h2>
                  <Link
                    href="/clinic-profile/procedures/new"
                    className="flex items-center gap-2 pl-4 pr-5 py-2.5 rounded-full border border-border bg-white text-foreground font-medium hover:border-primary hover:text-primary transition-colors whitespace-nowrap"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M8 3V13M3 8H13"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    Добавить процедуру
                  </Link>
                </div>

                <div className="pb-24 md:pb-0">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex-1">
                        <label className="flex flex-col gap-1.5">
                          <div className="relative w-full">
                            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-foreground" />
                            <input
                              type="text"
                              placeholder="Поиск"
                              className="text-base leading-0 border border-border-soft text-foreground py-2.25 px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background pl-10 w-full rounded-full bg-white"
                            />
                          </div>
                        </label>
                      </div>

                      <button
                        type="button"
                        className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-1.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent w-12 h-12 shrink-0"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M2.5 5.83333H17.5M5.83333 10H14.1667M8.33333 14.1667H11.6667"
                            stroke="#686F72"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Десктоп: сетка карточек */}
                    <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-5">
                      <div className="bg-white rounded-3xl border border-border-soft p-2 relative">
                        <Link
                          href="/clinic-profile/procedures/delete-modal"
                          className="z-10 rounded-full bg-white border border-border flex items-center justify-center hover:bg-primary-tint hover:border-primary transition-colors shrink-0 absolute top-4 right-4 w-8 h-8"
                          aria-label="Удалить"
                        >
                          <CloseIcon className="size-4 text-secondary" />
                        </Link>
                        <Link href="/clinic-profile/procedures/1">
                          <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-primary-tint mb-3">
                            <img
                              src="/images/services/cardiology.png"
                              alt="Консультация терапевта"
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                          </div>
                          <div className="px-1">
                            <h3 className="font-semibold text-base text-foreground leading-tight truncate mb-1">
                              Консультация терапевта
                            </h3>
                            <p className="text-sm text-muted truncate mb-2">
                              Терапия{" "}
                              <span className="text-primary">
                                • Медицинский центр «Авиценна»
                              </span>
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-foreground font-semibold text-base">
                                1200 с
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="bg-white rounded-3xl border border-border-soft p-2 relative">
                        <Link
                          href="/clinic-profile/procedures/delete-modal"
                          className="z-10 rounded-full bg-white border border-border flex items-center justify-center hover:bg-primary-tint hover:border-primary transition-colors shrink-0 absolute top-4 right-4 w-8 h-8"
                          aria-label="Удалить"
                        >
                          <CloseIcon className="size-4 text-secondary" />
                        </Link>
                        <Link href="/clinic-profile/procedures/2">
                          <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-primary-tint mb-3">
                            <img
                              src="/images/services/pulmonology.png"
                              alt="ЭКГ с расшифровкой"
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                          </div>
                          <div className="px-1">
                            <h3 className="font-semibold text-base text-foreground leading-tight truncate mb-1">
                              ЭКГ с расшифровкой
                            </h3>
                            <p className="text-sm text-muted truncate mb-2">
                              Кардиология{" "}
                              <span className="text-primary">
                                • Медицинский центр «Авиценна»
                              </span>
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-foreground font-semibold text-base">
                                900 с
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="bg-white rounded-3xl border border-border-soft p-2 relative">
                        <Link
                          href="/clinic-profile/procedures/delete-modal"
                          className="z-10 rounded-full bg-white border border-border flex items-center justify-center hover:bg-primary-tint hover:border-primary transition-colors shrink-0 absolute top-4 right-4 w-8 h-8"
                          aria-label="Удалить"
                        >
                          <CloseIcon className="size-4 text-secondary" />
                        </Link>
                        <Link href="/clinic-profile/procedures/3">
                          <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-primary-tint mb-3">
                            <img
                              src="/images/services/gastroenterology.png"
                              alt="УЗИ брюшной полости"
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                          </div>
                          <div className="px-1">
                            <h3 className="font-semibold text-base text-foreground leading-tight truncate mb-1">
                              УЗИ брюшной полости
                            </h3>
                            <p className="text-sm text-muted truncate mb-2">
                              Ультразвуковая диагностика{" "}
                              <span className="text-primary">
                                • Медицинский центр «Авиценна»
                              </span>
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-foreground font-semibold text-base">
                                1800 с
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="bg-white rounded-3xl border border-border-soft p-2 relative">
                        <Link
                          href="/clinic-profile/procedures/delete-modal"
                          className="z-10 rounded-full bg-white border border-border flex items-center justify-center hover:bg-primary-tint hover:border-primary transition-colors shrink-0 absolute top-4 right-4 w-8 h-8"
                          aria-label="Удалить"
                        >
                          <CloseIcon className="size-4 text-secondary" />
                        </Link>
                        <Link href="/clinic-profile/procedures/4">
                          <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-primary-tint mb-3">
                            <img
                              src="/images/services/nevrology.png"
                              alt="Консультация невролога"
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                          </div>
                          <div className="px-1">
                            <h3 className="font-semibold text-base text-foreground leading-tight truncate mb-1">
                              Консультация невролога
                            </h3>
                            <p className="text-sm text-muted truncate mb-2">
                              Неврология{" "}
                              <span className="text-primary">
                                • Медицинский центр «Авиценна»
                              </span>
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-foreground font-semibold text-base">
                                1500 с
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="bg-white rounded-3xl border border-border-soft p-2 relative">
                        <Link
                          href="/clinic-profile/procedures/delete-modal"
                          className="z-10 rounded-full bg-white border border-border flex items-center justify-center hover:bg-primary-tint hover:border-primary transition-colors shrink-0 absolute top-4 right-4 w-8 h-8"
                          aria-label="Удалить"
                        >
                          <CloseIcon className="size-4 text-secondary" />
                        </Link>
                        <Link href="/clinic-profile/procedures/5">
                          <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-primary-tint mb-3">
                            <img
                              src="/images/services/ophthalmology.png"
                              alt="Осмотр офтальмолога"
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                          </div>
                          <div className="px-1">
                            <h3 className="font-semibold text-base text-foreground leading-tight truncate mb-1">
                              Осмотр офтальмолога
                            </h3>
                            <p className="text-sm text-muted truncate mb-2">
                              Офтальмология{" "}
                              <span className="text-primary">
                                • Медицинский центр «Авиценна»
                              </span>
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-foreground font-semibold text-base">
                                1300 с
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="bg-white rounded-3xl border border-border-soft p-2 relative">
                        <Link
                          href="/clinic-profile/procedures/delete-modal"
                          className="z-10 rounded-full bg-white border border-border flex items-center justify-center hover:bg-primary-tint hover:border-primary transition-colors shrink-0 absolute top-4 right-4 w-8 h-8"
                          aria-label="Удалить"
                        >
                          <CloseIcon className="size-4 text-secondary" />
                        </Link>
                        <Link href="/clinic-profile/procedures/6">
                          <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-primary-tint mb-3">
                            <div className="w-full h-full flex items-center justify-center">
                              <svg
                                width="80"
                                height="80"
                                viewBox="0 0 80 80"
                                fill="none"
                              >
                                <rect width="80" height="80" fill="#F8F9FA" />
                                <path
                                  d="M40 20C28.96 20 20 28.96 20 40C20 51.04 28.96 60 40 60C51.04 60 60 51.04 60 40C60 28.96 51.04 20 40 20Z"
                                  fill="#E5E6E8"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="px-1">
                            <h3 className="font-semibold text-base text-foreground leading-tight truncate mb-1">
                              Спирометрия
                            </h3>
                            <p className="text-sm text-muted truncate mb-2">
                              Пульмонология{" "}
                              <span className="text-primary">
                                • Медицинский центр «Авиценна»
                              </span>
                            </p>
                            <div className="flex items-center justify-between"></div>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Мобайл: компактный список строк */}
                    <div className="md:hidden flex flex-col gap-3">
                      <Link
                        href="/clinic-profile/procedures/1"
                        className="flex items-center gap-3 bg-white rounded-2xl border border-border-soft p-3"
                      >
                        <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-primary-tint shrink-0">
                          <img
                            src="/images/services/cardiology.png"
                            alt="Консультация терапевта"
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="font-semibold text-sm text-foreground truncate">
                              Консультация терапевта
                            </h3>
                            <span className="text-foreground font-semibold text-sm shrink-0">
                              1200 с
                            </span>
                          </div>
                          <p className="text-xs text-muted truncate mt-0.5">
                            Терапия{" "}
                            <span className="text-primary">
                              • Медицинский центр «Авиценна»
                            </span>
                          </p>
                        </div>

                        <Link
                          href="/clinic-profile/procedures/delete-modal"
                          className="z-10 rounded-full bg-white border border-border flex items-center justify-center hover:bg-primary-tint hover:border-primary transition-colors shrink-0 w-8 h-8"
                          aria-label="Удалить"
                        >
                          <CloseIcon className="size-4 text-secondary" />
                        </Link>
                      </Link>
                      <Link
                        href="/clinic-profile/procedures/2"
                        className="flex items-center gap-3 bg-white rounded-2xl border border-border-soft p-3"
                      >
                        <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-primary-tint shrink-0">
                          <img
                            src="/images/services/pulmonology.png"
                            alt="ЭКГ с расшифровкой"
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="font-semibold text-sm text-foreground truncate">
                              ЭКГ с расшифровкой
                            </h3>
                            <span className="text-foreground font-semibold text-sm shrink-0">
                              900 с
                            </span>
                          </div>
                          <p className="text-xs text-muted truncate mt-0.5">
                            Кардиология{" "}
                            <span className="text-primary">
                              • Медицинский центр «Авиценна»
                            </span>
                          </p>
                        </div>

                        <Link
                          href="/clinic-profile/procedures/delete-modal"
                          className="z-10 rounded-full bg-white border border-border flex items-center justify-center hover:bg-primary-tint hover:border-primary transition-colors shrink-0 w-8 h-8"
                          aria-label="Удалить"
                        >
                          <CloseIcon className="size-4 text-secondary" />
                        </Link>
                      </Link>
                      <Link
                        href="/clinic-profile/procedures/3"
                        className="flex items-center gap-3 bg-white rounded-2xl border border-border-soft p-3"
                      >
                        <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-primary-tint shrink-0">
                          <img
                            src="/images/services/gastroenterology.png"
                            alt="УЗИ брюшной полости"
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="font-semibold text-sm text-foreground truncate">
                              УЗИ брюшной полости
                            </h3>
                            <span className="text-foreground font-semibold text-sm shrink-0">
                              1800 с
                            </span>
                          </div>
                          <p className="text-xs text-muted truncate mt-0.5">
                            Ультразвуковая диагностика{" "}
                            <span className="text-primary">
                              • Медицинский центр «Авиценна»
                            </span>
                          </p>
                        </div>

                        <Link
                          href="/clinic-profile/procedures/delete-modal"
                          className="z-10 rounded-full bg-white border border-border flex items-center justify-center hover:bg-primary-tint hover:border-primary transition-colors shrink-0 w-8 h-8"
                          aria-label="Удалить"
                        >
                          <CloseIcon className="size-4 text-secondary" />
                        </Link>
                      </Link>
                      <Link
                        href="/clinic-profile/procedures/4"
                        className="flex items-center gap-3 bg-white rounded-2xl border border-border-soft p-3"
                      >
                        <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-primary-tint shrink-0">
                          <img
                            src="/images/services/nevrology.png"
                            alt="Консультация невролога"
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="font-semibold text-sm text-foreground truncate">
                              Консультация невролога
                            </h3>
                            <span className="text-foreground font-semibold text-sm shrink-0">
                              1500 с
                            </span>
                          </div>
                          <p className="text-xs text-muted truncate mt-0.5">
                            Неврология{" "}
                            <span className="text-primary">
                              • Медицинский центр «Авиценна»
                            </span>
                          </p>
                        </div>

                        <Link
                          href="/clinic-profile/procedures/delete-modal"
                          className="z-10 rounded-full bg-white border border-border flex items-center justify-center hover:bg-primary-tint hover:border-primary transition-colors shrink-0 w-8 h-8"
                          aria-label="Удалить"
                        >
                          <CloseIcon className="size-4 text-secondary" />
                        </Link>
                      </Link>
                      <Link
                        href="/clinic-profile/procedures/5"
                        className="flex items-center gap-3 bg-white rounded-2xl border border-border-soft p-3"
                      >
                        <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-primary-tint shrink-0">
                          <img
                            src="/images/services/ophthalmology.png"
                            alt="Осмотр офтальмолога"
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="font-semibold text-sm text-foreground truncate">
                              Осмотр офтальмолога
                            </h3>
                            <span className="text-foreground font-semibold text-sm shrink-0">
                              1300 с
                            </span>
                          </div>
                          <p className="text-xs text-muted truncate mt-0.5">
                            Офтальмология{" "}
                            <span className="text-primary">
                              • Медицинский центр «Авиценна»
                            </span>
                          </p>
                        </div>

                        <Link
                          href="/clinic-profile/procedures/delete-modal"
                          className="z-10 rounded-full bg-white border border-border flex items-center justify-center hover:bg-primary-tint hover:border-primary transition-colors shrink-0 w-8 h-8"
                          aria-label="Удалить"
                        >
                          <CloseIcon className="size-4 text-secondary" />
                        </Link>
                      </Link>
                      <Link
                        href="/clinic-profile/procedures/6"
                        className="flex items-center gap-3 bg-white rounded-2xl border border-border-soft p-3"
                      >
                        <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-primary-tint shrink-0">
                          <div className="w-full h-full flex items-center justify-center">
                            <svg
                              width="80"
                              height="80"
                              viewBox="0 0 80 80"
                              fill="none"
                              className="w-8 h-8"
                            >
                              <rect width="80" height="80" fill="#F8F9FA" />
                              <path
                                d="M40 20C28.96 20 20 28.96 20 40C20 51.04 28.96 60 40 60C51.04 60 60 51.04 60 40C60 28.96 51.04 20 40 20Z"
                                fill="#E5E6E8"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="font-semibold text-sm text-foreground truncate">
                              Спирометрия
                            </h3>
                          </div>
                          <p className="text-xs text-muted truncate mt-0.5">
                            Пульмонология{" "}
                            <span className="text-primary">
                              • Медицинский центр «Авиценна»
                            </span>
                          </p>
                        </div>

                        <Link
                          href="/clinic-profile/procedures/delete-modal"
                          className="z-10 rounded-full bg-white border border-border flex items-center justify-center hover:bg-primary-tint hover:border-primary transition-colors shrink-0 w-8 h-8"
                          aria-label="Удалить"
                        >
                          <CloseIcon className="size-4 text-secondary" />
                        </Link>
                      </Link>
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

      {/* Мобайл: кнопка добавления закреплена снизу */}
      <div className="md:hidden fixed inset-x-0 bottom-0 p-4 bg-[#FAFAFA] z-30">
        <Link
          href="/clinic-profile/procedures/new"
          className="w-full py-3.5 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-colors active:scale-95 flex items-center justify-center gap-2"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 3V13M3 8H13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          Добавить процедуру
        </Link>
      </div>
    </>
  );
}
