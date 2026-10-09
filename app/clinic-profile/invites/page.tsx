import Link from "next/link";

import FacebookIcon from "@/assets/icons/auth/facebook.svg";
import InstagramIcon from "@/assets/icons/auth/instagram.svg";
import LinkedinIcon from "@/assets/icons/auth/linkedin.svg";
import TwitterIcon from "@/assets/icons/auth/twitter.svg";
import ClockIcon from "@/assets/icons/common/clock.svg";
import StarIcon from "@/assets/icons/common/star.svg";
import HeaderBackIcon from "@/assets/icons/header/back-arrow.svg";
import ChatIcon from "@/assets/icons/header/chat.svg";
import GeoIcon from "@/assets/icons/header/geo.svg";
import GeoBtnArrowIcon from "@/assets/icons/header/geo-btn-arrow.svg";
import Logo from "@/assets/icons/header/logo.svg";
import ProfileIcon from "@/assets/icons/header/profile.svg";
import SearchIcon from "@/assets/icons/header/search.svg";
import HistoryIcon from "@/assets/icons/profile/history.svg";
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
                  data-active="true"
                  className="flex items-center gap-3 px-4 py-3.5 rounded-2xl relative z-10 bg-primary-tint"
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 bg-primary text-white">
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
                  <span className="flex-1 font-medium text-base transition-colors duration-200 text-foreground">
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
                    Пригласить врача
                  </h1>
                  <div className="flex justify-end"></div>
                </div>
              </div>

              <div className="px-4 pt-4 pb-6 md:p-0 flex flex-col gap-6">
                <div className="bg-primary-tint border border-[#FDDDD5] rounded-2xl p-4 flex gap-3">
                  <div className="size-9 rounded-xl bg-primary flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M6.667 8.667a3.333 3.333 0 005.04.36l2-2a3.333 3.333 0 00-4.714-4.714L7.96 3.347"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.333 7.333a3.333 3.333 0 00-5.04-.36l-2 2a3.333 3.333 0 004.714 4.714l1.027-1.027"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">
                      Как это работает
                    </p>
                    <p className="text-sm text-secondary">
                      Создайте ссылку-приглашение для врача. Перейдя по ней,
                      врач попадёт на регистрацию с уже предзаполненными данными
                      вашей клиники и филиала. Без указанной даты ссылка
                      действует бессрочно и может быть использована несколькими
                      врачами.
                    </p>
                    <Link
                      href="/clinic-profile/doctor-invitations"
                      className="mt-2 inline-block text-sm font-medium text-primary underline"
                    >
                      Врач уже зарегистрирован? Отправить персональное
                      приглашение
                    </Link>
                  </div>
                </div>

                <div className="bg-white border border-border rounded-2xl p-5 flex flex-col gap-4">
                  <h2 className="font-semibold text-foreground text-lg">
                    Создать ссылку
                  </h2>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-overlay">
                      Филиал
                    </span>
                    <div className="flex flex-col gap-2">
                      <button
                        type="button"
                        className="w-full rounded-xl border-2 p-3 text-left flex items-start gap-3 transition-colors border-primary bg-primary-tint"
                      >
                        <div className="mt-0.5 size-4 rounded-full border-2 shrink-0 flex items-center justify-center border-primary">
                          <div className="size-2 rounded-full bg-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            Медицинский центр «Авиценна»
                          </p>
                          <p className="text-xs text-secondary flex items-center gap-1 mt-0.5">
                            <GeoIcon className="size-3 text-primary shrink-0" />
                            г. Бишкек, ул. Токтогула, 125/1
                          </p>
                        </div>
                      </button>

                      <button
                        type="button"
                        className="w-full rounded-xl border-2 p-3 text-left flex items-start gap-3 transition-colors border-border hover:border-primary/40"
                      >
                        <div className="mt-0.5 size-4 rounded-full border-2 shrink-0 flex items-center justify-center border-dim"></div>
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            Филиал
                          </p>
                          <p className="text-xs text-secondary flex items-center gap-1 mt-0.5">
                            <GeoIcon className="size-3 text-primary shrink-0" />
                            г. Бишкек, мкр. Джал, 23/5
                          </p>
                        </div>
                      </button>

                      <button
                        type="button"
                        className="w-full rounded-xl border-2 p-3 text-left flex items-start gap-3 transition-colors border-border hover:border-primary/40"
                      >
                        <div className="mt-0.5 size-4 rounded-full border-2 shrink-0 flex items-center justify-center border-dim"></div>
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            Филиал
                          </p>
                          <p className="text-xs text-secondary flex items-center gap-1 mt-0.5">
                            <GeoIcon className="size-3 text-primary shrink-0" />
                            г. Бишкек, пр. Чуй, 210
                          </p>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="invite-expires-at"
                      className="text-sm font-medium text-overlay"
                    >
                      Действует до (необязательно)
                    </label>
                    <input
                      id="invite-expires-at"
                      type="date"
                      min="2026-09-25"
                      className="h-11 px-3 rounded-lg border border-border-soft bg-white text-sm text-foreground outline-none focus:border-primary"
                    />
                    <p className="text-xs text-muted">
                      Если дату не выбрать, приглашение будет бессрочным.
                    </p>
                  </div>

                  <button
                    type="button"
                    className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-8 text-xs px-4 relative after:absolute after:inset-x-0 after:-inset-y-2 after:content-[''] bg-primary text-white active:bg-primary-dark hover:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] w-full justify-center"
                  >
                    <span>Создать ссылку</span>
                  </button>
                </div>

                <div className="flex flex-col gap-3">
                  <h2 className="font-semibold text-foreground text-lg">
                    Созданные ссылки
                  </h2>

                  <div className="bg-white border rounded-2xl p-4 flex flex-col gap-3 border-border">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          Медицинский центр «Авиценна»
                        </p>
                        <p className="text-xs text-muted mt-0.5 font-mono truncate">
                          /register/doctor?invite_clinic_id=42
                        </p>
                      </div>
                      <span className="shrink-0 text-xs px-2 py-0.5 rounded-full font-medium bg-green-100 text-green-700">
                        Активна
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted">
                      <span className="flex items-center gap-1">
                        <HistoryIcon className="size-3.5 text-primary" />
                        Создана: 12.09.2026
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent flex-1 justify-center gap-2"
                      >
                        <span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M13.333 4L6 11.333 2.667 8"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          Скопировано
                        </span>
                      </button>
                      <button
                        type="button"
                        className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent text-muted hover:border-red-300 hover:text-red-500"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M2 4h12M5.333 4V2.667a.667.667 0 01.667-.667h4a.667.667 0 01.667.667V4M6.667 7.333v4M9.333 7.333v4M3.333 4l.667 9.333A1.333 1.333 0 005.333 14.667h5.334a1.333 1.333 0 001.333-1.334L12.667 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="bg-white border rounded-2xl p-4 flex flex-col gap-3 border-border">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          Филиал — г. Бишкек, мкр. Джал, 23/5
                        </p>
                        <p className="text-xs text-muted mt-0.5 font-mono truncate">
                          /register/doctor?invite_clinic_id=42&invite_branch_id=7
                        </p>
                      </div>
                      <span className="shrink-0 text-xs px-2 py-0.5 rounded-full font-medium bg-green-100 text-green-700">
                        Активна
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted">
                      <span className="flex items-center gap-1">
                        <HistoryIcon className="size-3.5 text-primary" />
                        Создана: 03.09.2026
                      </span>
                      <span className="flex items-center gap-1">
                        <HistoryIcon className="size-3.5 text-muted" />
                        До: 31.12.2026
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent flex-1 justify-center gap-2"
                      >
                        <span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <rect
                              x="5.333"
                              y="5.333"
                              width="9.334"
                              height="9.334"
                              rx="1.333"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M3.333 10.667H2.667A1.333 1.333 0 011.333 9.334V2.667A1.333 1.333 0 012.667 1.334h6.666a1.333 1.333 0 011.334 1.333v.666"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          Копировать ссылку
                        </span>
                      </button>
                      <button
                        type="button"
                        className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent text-muted hover:border-red-300 hover:text-red-500"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M2 4h12M5.333 4V2.667a.667.667 0 01.667-.667h4a.667.667 0 01.667.667V4M6.667 7.333v4M9.333 7.333v4M3.333 4l.667 9.333A1.333 1.333 0 005.333 14.667h5.334a1.333 1.333 0 001.333-1.334L12.667 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="bg-white border rounded-2xl p-4 flex flex-col gap-3 border-border opacity-50">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          Филиал — г. Бишкек, пр. Чуй, 210
                        </p>
                        <p className="text-xs text-muted mt-0.5 font-mono truncate">
                          /register/doctor?invite_clinic_id=42&invite_branch_id=8
                        </p>
                      </div>
                      <span className="shrink-0 text-xs px-2 py-0.5 rounded-full font-medium bg-background text-muted">
                        Истекла
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted">
                      <span className="flex items-center gap-1">
                        <HistoryIcon className="size-3.5 text-primary" />
                        Создана: 15.06.2026
                      </span>
                      <span className="flex items-center gap-1">
                        <HistoryIcon className="size-3.5 text-muted" />
                        До: 15.08.2026
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent flex-1 justify-center gap-2"
                      >
                        <span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <rect
                              x="5.333"
                              y="5.333"
                              width="9.334"
                              height="9.334"
                              rx="1.333"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M3.333 10.667H2.667A1.333 1.333 0 011.333 9.334V2.667A1.333 1.333 0 012.667 1.334h6.666a1.333 1.333 0 011.334 1.333v.666"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          Копировать ссылку
                        </span>
                      </button>
                      <button
                        type="button"
                        className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent text-muted hover:border-red-300 hover:text-red-500"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M2 4h12M5.333 4V2.667a.667.667 0 01.667-.667h4a.667.667 0 01.667.667V4M6.667 7.333v4M9.333 7.333v4M3.333 4l.667 9.333A1.333 1.333 0 005.333 14.667h5.334a1.333 1.333 0 001.333-1.334L12.667 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
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
