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
                  data-active="true"
                  className="flex items-center gap-3 px-4 py-3.5 rounded-2xl relative z-10 bg-primary-tint"
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 bg-primary text-white">
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
                  <span className="flex-1 font-medium text-base transition-colors duration-200 text-foreground">
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
                  className="flex items-center gap-3 px-4 py-3.5 rounded-2xl relative z-10 hover:bg-surface"
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 bg-primary-tint text-primary">
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
                  <span className="flex-1 font-medium text-base transition-colors duration-200 text-secondary">
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
                    Моя клиника
                  </h1>
                  <div className="flex justify-end"></div>
                </div>
              </div>

              <div className="px-4 pt-4 pb-6 md:p-0">
                {/* Десктоп: единая страница со всеми секциями */}
                <div className="hidden md:block">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-[32px] font-semibold text-foreground">
                      Моя клиника
                    </h2>

                    <button
                      type="button"
                      className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-8 text-xs px-4 relative after:absolute after:inset-x-0 after:-inset-y-2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
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
                  </div>

                  {/* StatTiles */}
                  <div className="grid grid-cols-2 gap-3 md:grid-cols-3 mb-6">
                    <div className="bg-white rounded-2xl border border-border p-4">
                      <p className="text-2xl font-semibold text-foreground">
                        <span>12480</span>
                      </p>
                      <p className="text-muted text-xs mt-1">
                        Просмотры профиля
                      </p>
                    </div>

                    <div className="bg-white rounded-2xl border border-border p-4">
                      <p className="text-2xl font-semibold text-foreground">
                        <span>3265</span>
                      </p>
                      <p className="text-muted text-xs mt-1">Записей всего</p>
                    </div>

                    <div className="bg-white rounded-2xl border border-border p-4">
                      <p className="text-2xl font-semibold text-foreground">
                        <span>214</span>
                      </p>
                      <p className="text-muted text-xs mt-1">
                        Записей за месяц
                      </p>
                    </div>

                    <div className="bg-white rounded-2xl border border-border p-4">
                      <p className="text-2xl font-semibold text-foreground">
                        <span>18</span>
                      </p>
                      <p className="text-muted text-xs mt-1">Врачей</p>
                    </div>

                    <div className="bg-white rounded-2xl border border-border p-4">
                      <p className="text-2xl font-semibold text-foreground">
                        <span>2147</span>
                      </p>
                      <p className="text-muted text-xs mt-1">Пациентов</p>
                    </div>

                    <div className="bg-white rounded-2xl border border-border p-4">
                      <p className="text-2xl font-semibold text-foreground">
                        <span>386</span>
                      </p>
                      <p className="text-muted text-xs mt-1">Отзывов</p>
                    </div>
                  </div>

                  {/* Филиалы */}
                  <div className="bg-white rounded-3xl border border-border p-5 lg:p-6 mb-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      Филиалы
                    </h3>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3 py-2 border-b border-background last:border-0">
                        <span className="flex-1 text-sm text-foreground truncate">
                          г. Бишкек, мкр. Джал, 23/5
                        </span>

                        <button
                          type="button"
                          className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-8 text-xs px-4 relative after:absolute after:inset-x-0 after:-inset-y-2 after:content-[''] active:bg-border-soft hover:bg-background text-primary"
                        >
                          <span>Изменить</span>
                        </button>
                      </div>

                      <div className="flex items-center gap-3 py-2 border-b border-background last:border-0">
                        <span className="flex-1 text-sm text-foreground truncate">
                          г. Бишкек, пр. Чуй, 210
                        </span>

                        <button
                          type="button"
                          className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-8 text-xs px-4 relative after:absolute after:inset-x-0 after:-inset-y-2 after:content-[''] active:bg-border-soft hover:bg-background text-primary"
                        >
                          <span>Изменить</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* ClinicProfileForm — режим просмотра */}

                  <div className="bg-white rounded-3xl p-5 lg:p-6 border border-border mb-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Основная информация
                    </h3>

                    <div>
                      <div className="py-3 border-b border-background last:border-b-0">
                        <div className="text-muted text-sm mb-1">Название</div>
                        <div className="text-foreground font-medium text-base">
                          Медицинский центр «Авиценна»
                        </div>
                      </div>
                      <div className="py-3 border-b border-background">
                        <div className="text-muted text-sm mb-2">Логотип</div>

                        <div className="w-24 h-24 rounded-2xl overflow-hidden bg-linear-to-br from-primary to-[#FF8A6B] flex items-center justify-center">
                          <img
                            src="/images/clinics/clinic-1.png"
                            alt="Logo"
                            width={96}
                            height={96}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      <div className="py-3 border-b border-background last:border-b-0">
                        <div className="text-muted text-sm mb-1">Тип</div>
                        <div className="text-foreground font-medium text-base">
                          Многопрофильная клиника
                        </div>
                      </div>

                      <div className="py-3 border-b border-background last:border-b-0">
                        <div className="text-muted text-sm mb-1">Описание</div>
                        <div className="text-foreground font-medium text-base">
                          Многопрофильный медицинский центр в центре Бишкека.
                          Принимаем взрослых и детей: терапия, кардиология,
                          педиатрия, неврология и собственная лаборатория.
                          Большинство анализов готовы в течение суток.
                        </div>
                      </div>
                      <div className="pt-3">
                        <div className="text-muted text-sm mb-2">
                          Фотографии
                        </div>

                        <div className="flex items-center gap-4 overflow-x-auto pb-2">
                          <button
                            type="button"
                            className="w-24 h-24 rounded-2xl overflow-hidden bg-surface shrink-0 cursor-pointer"
                          >
                            <img
                              src="/images/clinics/clinic-2.png"
                              alt="Photo 1"
                              width={96}
                              height={96}
                              className="w-full h-full object-cover"
                            />
                          </button>
                          <button
                            type="button"
                            className="w-24 h-24 rounded-2xl overflow-hidden bg-surface shrink-0 cursor-pointer"
                          >
                            <img
                              src="/images/clinics/clinic-3.png"
                              alt="Photo 2"
                              width={96}
                              height={96}
                              className="w-full h-full object-cover"
                            />
                          </button>
                          <button
                            type="button"
                            className="w-24 h-24 rounded-2xl overflow-hidden bg-surface shrink-0 cursor-pointer"
                          >
                            <img
                              src="/images/clinics/clinic-4.png"
                              alt="Photo 3"
                              width={96}
                              height={96}
                              className="w-full h-full object-cover"
                            />
                          </button>
                          <button
                            type="button"
                            className="w-24 h-24 rounded-2xl overflow-hidden bg-surface shrink-0 cursor-pointer"
                          >
                            <img
                              src="/images/clinics/clinic-1.png"
                              alt="Photo 4"
                              width={96}
                              height={96}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-3xl p-5 lg:p-6 border border-border mb-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Локация и контакты
                    </h3>

                    <div>
                      <div className="py-3 border-b border-background last:border-b-0">
                        <div className="text-muted text-sm mb-1">Страна</div>
                        <div className="text-foreground font-medium text-base">
                          Кыргызстан
                        </div>
                      </div>

                      <div className="py-3 border-b border-background last:border-b-0">
                        <div className="text-muted text-sm mb-1">Город</div>
                        <div className="text-foreground font-medium text-base">
                          Бишкек
                        </div>
                      </div>

                      <div className="py-3 border-b border-background last:border-b-0">
                        <div className="text-muted text-sm mb-1">
                          Полный адрес
                        </div>
                        <div className="text-foreground font-medium text-base">
                          г. Бишкек, ул. Токтогула, 125/1
                        </div>
                      </div>

                      <div className="py-3 border-b border-background last:border-b-0">
                        <div className="text-muted text-sm mb-1">Телефон</div>
                        <div className="text-foreground font-medium text-base">
                          +996 555 12 34 56
                        </div>
                      </div>

                      <div className="py-3 border-b border-background last:border-b-0">
                        <div className="text-muted text-sm mb-1">Почта</div>
                        <div className="text-foreground font-medium text-base">
                          info@avicenna.kg
                        </div>
                      </div>

                      <div className="py-3 border-b border-background last:border-b-0">
                        <div className="text-muted text-sm mb-1">Сайт</div>
                        <div className="text-foreground font-medium text-base">
                          https://avicenna.kg
                        </div>
                      </div>
                      <div className="pt-3">
                        <div className="text-muted text-sm mb-2">
                          Геолокация
                        </div>

                        <div className="rounded-2xl overflow-hidden border border-border">
                          <div className="w-full h-50 bg-surface flex flex-col items-center justify-center gap-2 text-muted">
                            <GeoIcon className="size-8 text-primary" />
                            <span className="text-sm">
                              Карта: 42.8746, 74.5698
                            </span>
                          </div>
                          <div className="flex items-center gap-2 px-4 py-3 bg-surface">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              className="text-primary shrink-0"
                            >
                              <path
                                d="M13.3333 6.66667C13.3333 10.6667 8 14.6667 8 14.6667C8 14.6667 2.66667 10.6667 2.66667 6.66667C2.66667 5.25218 3.22857 3.89563 4.22876 2.89543C5.22896 1.89524 6.58551 1.33333 8 1.33333C9.41449 1.33333 10.771 1.89524 11.7712 2.89543C12.7714 3.89563 13.3333 5.25218 13.3333 6.66667Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M8 8.66667C9.10457 8.66667 10 7.77124 10 6.66667C10 5.5621 9.10457 4.66667 8 4.66667C6.89543 4.66667 6 5.5621 6 6.66667C6 7.77124 6.89543 8.66667 8 8.66667Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span className="text-sm text-foreground">
                              г. Бишкек, ул. Токтогула, 125/1
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-3xl p-5 lg:p-6 border border-border mb-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Расписание
                    </h3>

                    <div className="mb-6">
                      <div className="text-sm font-medium text-foreground mb-4">
                        График работы
                      </div>
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <span className="w-8 shrink-0 text-sm text-secondary">
                            ПН
                          </span>
                          <span className="w-24 rounded-xl border border-border bg-white px-3 py-2 text-center text-sm text-foreground tabular-nums">
                            08:00
                          </span>
                          <span className="text-muted">–</span>
                          <span className="w-24 rounded-xl border border-border bg-white px-3 py-2 text-center text-sm text-foreground tabular-nums">
                            20:00
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="w-8 shrink-0 text-sm text-secondary">
                            ВТ
                          </span>
                          <span className="w-24 rounded-xl border border-border bg-white px-3 py-2 text-center text-sm text-foreground tabular-nums">
                            08:00
                          </span>
                          <span className="text-muted">–</span>
                          <span className="w-24 rounded-xl border border-border bg-white px-3 py-2 text-center text-sm text-foreground tabular-nums">
                            20:00
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="w-8 shrink-0 text-sm text-secondary">
                            СР
                          </span>
                          <span className="w-24 rounded-xl border border-border bg-white px-3 py-2 text-center text-sm text-foreground tabular-nums">
                            08:00
                          </span>
                          <span className="text-muted">–</span>
                          <span className="w-24 rounded-xl border border-border bg-white px-3 py-2 text-center text-sm text-foreground tabular-nums">
                            20:00
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="w-8 shrink-0 text-sm text-secondary">
                            ЧТ
                          </span>
                          <span className="w-24 rounded-xl border border-border bg-white px-3 py-2 text-center text-sm text-foreground tabular-nums">
                            08:00
                          </span>
                          <span className="text-muted">–</span>
                          <span className="w-24 rounded-xl border border-border bg-white px-3 py-2 text-center text-sm text-foreground tabular-nums">
                            20:00
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="w-8 shrink-0 text-sm text-secondary">
                            ПТ
                          </span>
                          <span className="w-24 rounded-xl border border-border bg-white px-3 py-2 text-center text-sm text-foreground tabular-nums">
                            08:00
                          </span>
                          <span className="text-muted">–</span>
                          <span className="w-24 rounded-xl border border-border bg-white px-3 py-2 text-center text-sm text-foreground tabular-nums">
                            20:00
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="w-8 shrink-0 text-sm text-secondary">
                            СБ
                          </span>
                          <span className="w-24 rounded-xl border border-border bg-white px-3 py-2 text-center text-sm text-foreground tabular-nums">
                            09:00
                          </span>
                          <span className="text-muted">–</span>
                          <span className="w-24 rounded-xl border border-border bg-white px-3 py-2 text-center text-sm text-foreground tabular-nums">
                            17:00
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="text-sm font-medium text-foreground mb-3">
                        Обеденный перерыв
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-24 rounded-xl border border-border bg-white px-3 py-2 text-center text-sm text-foreground tabular-nums">
                          13:00
                        </span>
                        <span className="text-muted">–</span>
                        <span className="w-24 rounded-xl border border-border bg-white px-3 py-2 text-center text-sm text-foreground tabular-nums">
                          14:00
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-primary shrink-0" />
                      <span className="text-sm text-foreground">
                        Экстренный приём 24/7
                      </span>
                    </div>
                  </div>

                  <div className="bg-white rounded-3xl p-5 lg:p-6 border border-border mb-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Юридическая информация
                    </h3>

                    <div>
                      <div className="py-3 border-b border-background last:border-b-0">
                        <div className="text-muted text-sm mb-1">
                          Юридическое название
                        </div>
                        <div className="text-foreground font-medium text-base">
                          ОсОО «Авиценна Мед»
                        </div>
                      </div>

                      <div className="py-3 border-b border-background last:border-b-0">
                        <div className="text-muted text-sm mb-1">
                          Регистрационный номер
                        </div>
                        <div className="text-foreground font-medium text-base">
                          184512-3301-ООО
                        </div>
                      </div>

                      <div className="py-3 border-b border-background last:border-b-0">
                        <div className="text-muted text-sm mb-1">
                          Номер лицензии
                        </div>
                        <div className="text-foreground font-medium text-base">
                          ЛИЦ-004521
                        </div>
                      </div>

                      <div className="py-3 border-b border-background last:border-b-0">
                        <div className="text-muted text-sm mb-1">
                          Дата выдачи лицензии
                        </div>
                        <div className="text-foreground font-medium text-base">
                          15.03.2021
                        </div>
                      </div>

                      <div className="py-3 border-b border-background last:border-b-0">
                        <div className="text-muted text-sm mb-1">
                          Орган, выдавший лицензию
                        </div>
                        <div className="text-foreground font-medium text-base">
                          Министерство здравоохранения Кыргызской Республики
                        </div>
                      </div>
                      <div className="pt-3">
                        <div className="text-muted text-sm mb-2">
                          Документы (лицензии, регистрационные документы)
                        </div>

                        <div className="flex flex-wrap gap-4">
                          <a
                            href="#"
                            className="flex flex-col items-center gap-1 hover:opacity-70 transition-opacity"
                          >
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                            >
                              <rect
                                width="32"
                                height="32"
                                rx="8"
                                fill="#F2F4F7"
                              />
                              <path
                                d="M11 10C11 9.44772 11.4477 9 12 9H19.5858C19.851 9 20.1054 9.10536 20.2929 9.29289L22.7071 11.7071C22.8946 11.8946 23 12.149 23 12.4142V22C23 22.5523 22.5523 23 22 23H12C11.4477 23 11 22.5523 11 22V10Z"
                                stroke="#686F72"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M19 9V12C19 12.5523 19.4477 13 20 13H23"
                                stroke="#686F72"
                                strokeWidth="1.5"
                              />
                            </svg>
                            <span className="text-xs text-secondary max-w-20 text-center truncate">
                              license-2021.pdf
                            </span>
                          </a>
                          <a
                            href="#"
                            className="flex flex-col items-center gap-1 hover:opacity-70 transition-opacity"
                          >
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                            >
                              <rect
                                width="32"
                                height="32"
                                rx="8"
                                fill="#F2F4F7"
                              />
                              <path
                                d="M11 10C11 9.44772 11.4477 9 12 9H19.5858C19.851 9 20.1054 9.10536 20.2929 9.29289L22.7071 11.7071C22.8946 11.8946 23 12.149 23 12.4142V22C23 22.5523 22.5523 23 22 23H12C11.4477 23 11 22.5523 11 22V10Z"
                                stroke="#686F72"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M19 9V12C19 12.5523 19.4477 13 20 13H23"
                                stroke="#686F72"
                                strokeWidth="1.5"
                              />
                            </svg>
                            <span className="text-xs text-secondary max-w-20 text-center truncate">
                              registration.pdf
                            </span>
                          </a>
                          <a
                            href="#"
                            className="flex flex-col items-center gap-1 hover:opacity-70 transition-opacity"
                          >
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                            >
                              <rect
                                width="32"
                                height="32"
                                rx="8"
                                fill="#F2F4F7"
                              />
                              <path
                                d="M11 10C11 9.44772 11.4477 9 12 9H19.5858C19.851 9 20.1054 9.10536 20.2929 9.29289L22.7071 11.7071C22.8946 11.8946 23 12.149 23 12.4142V22C23 22.5523 22.5523 23 22 23H12C11.4477 23 11 22.5523 11 22V10Z"
                                stroke="#686F72"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M19 9V12C19 12.5523 19.4477 13 20 13H23"
                                stroke="#686F72"
                                strokeWidth="1.5"
                              />
                            </svg>
                            <span className="text-xs text-secondary max-w-20 text-center truncate">
                              iso-9001.pdf
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-3xl p-5 lg:p-6 border border-border mb-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Специализация и услуги
                    </h3>
                    <div>
                      <div className="py-3 border-b border-background last:border-b-0">
                        <div className="text-muted text-sm mb-1">
                          Основные направления
                        </div>
                        <div className="text-foreground font-medium text-base">
                          Терапия, Кардиология, Педиатрия
                        </div>
                      </div>

                      <div className="py-3 border-b border-background last:border-b-0">
                        <div className="text-muted text-sm mb-1">
                          Узкие направления
                        </div>
                        <div className="text-foreground font-medium text-base">
                          Гастроэнтерология, Эндокринология, Неврология,
                          Офтальмология
                        </div>
                      </div>

                      <div className="py-3 border-b border-background last:border-b-0">
                        <div className="text-muted text-sm mb-1">
                          Дополнительные услуги
                        </div>
                        <div className="text-foreground font-medium text-base">
                          Анализы, УЗИ, ЭКГ, Рентген, Вакцинация
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-3xl p-5 lg:p-6 border border-border mb-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Оборудование и условия
                    </h3>

                    <div className="flex flex-col divide-y divide-background">
                      <div className="pb-4">
                        <div className="text-xs text-muted mb-2">
                          Оборудование
                        </div>
                        <ul className="flex flex-col gap-1">
                          <li className="text-sm text-foreground flex items-center gap-2">
                            <span className="text-muted">–</span> Аппарат УЗИ
                            экспертного класса
                          </li>
                          <li className="text-sm text-foreground flex items-center gap-2">
                            <span className="text-muted">–</span> Цифровой
                            рентген
                          </li>
                          <li className="text-sm text-foreground flex items-center gap-2">
                            <span className="text-muted">–</span>{" "}
                            Электрокардиограф
                          </li>
                          <li className="text-sm text-foreground flex items-center gap-2">
                            <span className="text-muted">–</span> Холтер-монитор
                          </li>
                          <li className="text-sm text-foreground flex items-center gap-2">
                            <span className="text-muted">–</span> Лабораторный
                            анализатор
                          </li>
                        </ul>
                      </div>
                      <div className="pt-4">
                        <div className="text-xs text-muted mb-2">
                          Условия для пациентов
                        </div>
                        <ul className="flex flex-col gap-1">
                          <li className="text-sm text-foreground flex items-center gap-2">
                            <span className="text-muted">–</span> Пандус и лифт
                            для маломобильных пациентов
                          </li>
                          <li className="text-sm text-foreground flex items-center gap-2">
                            <span className="text-muted">–</span> Бесплатная
                            парковка
                          </li>
                          <li className="text-sm text-foreground flex items-center gap-2">
                            <span className="text-muted">–</span> Детская
                            игровая зона
                          </li>
                          <li className="text-sm text-foreground flex items-center gap-2">
                            <span className="text-muted">–</span> Wi-Fi в зоне
                            ожидания
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Мобайл: хаб-список секций */}
                <div className="md:hidden">
                  <div className="bg-white rounded-3xl border border-border overflow-hidden">
                    <Link
                      href="/clinic-profile/basic-info"
                      className="flex items-center gap-3 px-4 py-4 hover:bg-surface transition-colors border-b border-background"
                    >
                      <div className="w-9 h-9 rounded-xl bg-primary-tint flex items-center justify-center shrink-0">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M4.16667 7.5L10 3.33333L15.8333 7.5V15.8333C15.8333 16.2754 15.6577 16.6993 15.3452 17.0118C15.0326 17.3244 14.6087 17.5 14.1667 17.5H5.83333C5.39131 17.5 4.96738 17.3244 4.65482 17.0118C4.34226 16.6993 4.16667 16.2754 4.16667 15.8333V7.5Z"
                            stroke="#F5653E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="flex-1 font-medium text-base text-foreground">
                        Основная информация
                      </span>
                      <ChevronRightIcon className="w-5 h-5 text-dim" />
                    </Link>
                    <Link
                      href="/clinic-profile/location"
                      className="flex items-center gap-3 px-4 py-4 hover:bg-surface transition-colors border-b border-background"
                    >
                      <div className="w-9 h-9 rounded-xl bg-primary-tint flex items-center justify-center shrink-0">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M6.14417 9.17667C7.036 10.9942 8.514 12.4675 10.335 13.3517C10.4696 13.4153 10.6188 13.4412 10.7669 13.4267C10.9151 13.4121 11.0565 13.3576 11.1763 13.2692L13.8225 11.325C13.9384 11.2402 14.0737 11.1859 14.216 11.1671C14.3583 11.1483 14.5031 11.1656 14.637 11.2175L19.6108 13.1642C19.7852 13.2334 19.9331 13.3563 20.0329 13.5152C20.1326 13.674 20.179 13.8607 20.1654 14.0475C20.0563 15.2196 19.5031 16.3057 18.6193 17.088C17.7355 17.8702 16.5875 18.2903 15.4108 18.2617C11.9895 18.2617 8.70732 16.9033 6.28698 14.483C3.86665 12.0627 2.50823 8.78047 2.50823 5.35917C2.47966 4.18247 2.89975 3.03453 3.68199 2.15069C4.46423 1.26685 5.55029 0.713729 6.72239 0.604584C6.90921 0.590994 7.09595 0.637345 7.25479 0.737132C7.41363 0.836919 7.53649 0.984819 7.60573 1.15917L9.55573 6.14375C9.6073 6.27632 9.62438 6.4198 9.60543 6.56081C9.58648 6.70182 9.53211 6.83568 9.44739 6.94958L7.51073 9.63459C7.42622 9.75378 7.37547 9.89354 7.36384 10.0392C7.35221 10.1849 7.38014 10.331 7.44489 10.4622"
                            stroke="#F5653E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="flex-1 font-medium text-base text-foreground">
                        Локация и контакты
                      </span>
                      <ChevronRightIcon className="w-5 h-5 text-dim" />
                    </Link>
                    <Link
                      href="/clinic-profile/schedule"
                      className="flex items-center gap-3 px-4 py-4 hover:bg-surface transition-colors border-b border-background"
                    >
                      <div className="w-9 h-9 rounded-xl bg-primary-tint flex items-center justify-center shrink-0">
                        <ClockIcon className="size-5 text-primary" />
                      </div>
                      <span className="flex-1 font-medium text-base text-foreground">
                        Расписание
                      </span>
                      <ChevronRightIcon className="w-5 h-5 text-dim" />
                    </Link>
                    <Link
                      href="/clinic-profile/legal"
                      className="flex items-center gap-3 px-4 py-4 hover:bg-surface transition-colors border-b border-background"
                    >
                      <div className="w-9 h-9 rounded-xl bg-primary-tint flex items-center justify-center shrink-0">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M11 1.66667H5C4.55797 1.66667 4.13405 1.84226 3.82149 2.15482C3.50893 2.46738 3.33333 2.89131 3.33333 3.33333V16.6667C3.33333 17.1087 3.50893 17.5326 3.82149 17.8452C4.13405 18.1577 4.55797 18.3333 5 18.3333H15C15.442 18.3333 15.866 18.1577 16.1785 17.8452C16.4911 17.5326 16.6667 17.1087 16.6667 16.6667V7.5L11 1.66667Z"
                            stroke="#F5653E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10.8333 1.66667V6.66667C10.8333 7.10869 11.0089 7.53262 11.3215 7.84518C11.634 8.15774 12.058 8.33333 12.5 8.33333H17.5"
                            stroke="#F5653E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="flex-1 font-medium text-base text-foreground">
                        Юридическая информация
                      </span>
                      <ChevronRightIcon className="w-5 h-5 text-dim" />
                    </Link>
                    <Link
                      href="/clinic-profile/specialization"
                      className="flex items-center gap-3 px-4 py-4 hover:bg-surface transition-colors border-b border-background"
                    >
                      <div className="w-9 h-9 rounded-xl bg-primary-tint flex items-center justify-center shrink-0">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M15.8333 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5Z"
                            stroke="#F5653E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 6.66667V13.3333M6.66667 10H13.3333"
                            stroke="#F5653E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="flex-1 font-medium text-base text-foreground">
                        Специализация и услуги
                      </span>
                      <ChevronRightIcon className="w-5 h-5 text-dim" />
                    </Link>
                    <Link
                      href="/clinic-profile/equipment"
                      className="flex items-center gap-3 px-4 py-4 hover:bg-surface transition-colors "
                    >
                      <div className="w-9 h-9 rounded-xl bg-primary-tint flex items-center justify-center shrink-0">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M17.5 8.33333C17.5 13.75 10 17.5 10 17.5C10 17.5 2.5 13.75 2.5 8.33333C2.5 6.83333 3.33333 5.41667 4.58333 4.66667C5.83333 3.91667 7.5 4.16667 8.75 5.41667L10 6.66667L11.25 5.41667C12.5 4.16667 14.1667 3.91667 15.4167 4.66667C16.6667 5.41667 17.5 6.83333 17.5 8.33333Z"
                            stroke="#F5653E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="flex-1 font-medium text-base text-foreground">
                        Оборудование и условия
                      </span>
                      <ChevronRightIcon className="w-5 h-5 text-dim" />
                    </Link>
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
