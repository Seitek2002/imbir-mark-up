import Link from "next/link";

import FacebookIcon from "@/assets/icons/auth/facebook.svg";
import InstagramIcon from "@/assets/icons/auth/instagram.svg";
import LinkedinIcon from "@/assets/icons/auth/linkedin.svg";
import TwitterIcon from "@/assets/icons/auth/twitter.svg";
import ArrowLeftIcon from "@/assets/icons/button/arrow-left.svg";
import ArrowRightIcon from "@/assets/icons/button/arrow-right.svg";
import ClockIcon from "@/assets/icons/common/clock.svg";
import EditIcon from "@/assets/icons/common/edit.svg";
import StarIcon from "@/assets/icons/common/star.svg";
import DropdownArrowIcon from "@/assets/icons/dropdown/arrow.svg";
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
                    href="/clinic-profile/procedures/1"
                    aria-label="Назад"
                    className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent justify-self-start"
                  >
                    <HeaderBackIcon className="size-4" />
                  </Link>
                  <h1 className="text-center font-medium text-base text-foreground truncate px-2">
                    Редактировать
                  </h1>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      aria-label="Сохранить"
                      className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] active:bg-border-soft hover:bg-background text-primary"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M4 10L8 14L16 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="px-4 pt-4 pb-6 md:p-0">
                <div className="hidden md:flex items-center gap-4 mb-6">
                  <Link
                    href="/clinic-profile/procedures/1"
                    aria-label="Назад"
                    className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] active:bg-border-soft hover:bg-background shrink-0"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M12.5 15L7.5 10L12.5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                  <h2 className="text-[28px] font-semibold text-foreground flex-1">
                    Редактировать
                  </h2>

                  <button
                    type="button"
                    className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-8 text-xs px-4 relative after:absolute after:inset-x-0 after:-inset-y-2 after:content-[''] bg-primary text-white active:bg-primary-dark hover:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)]"
                  >
                    <span>Сохранить</span>
                  </button>
                </div>

                <input type="file" accept="image/*" className="hidden" />

                <div className="bg-white rounded-3xl border border-border p-5 mb-4">
                  <div className="flex flex-col gap-4">
                    <div>
                      <label className="block text-foreground text-sm font-medium mb-1.5">
                        Фото процедуры
                      </label>

                      <div className="relative w-28 h-28 rounded-2xl overflow-hidden bg-primary-tint shrink-0">
                        <img
                          src="/images/services/cardiology.png"
                          alt="Консультация терапевта"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          aria-label="Изменить фото"
                          className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-1.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent absolute bottom-1.5 right-1.5 bg-white"
                        >
                          <EditIcon className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <label className="flex flex-col gap-1.5">
                      <span className="text-overlay text-sm font-medium">
                        Название
                      </span>
                      <div className="relative w-full">
                        <input
                          type="text"
                          defaultValue="Консультация терапевта"
                          placeholder="Введите название"
                          className="text-base leading-0 border border-border-soft text-foreground rounded-lg py-2.25 px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background w-full"
                        />
                      </div>
                    </label>

                    <div className="flex flex-col gap-1.5 w-full">
                      <span className="text-overlay text-sm font-medium">
                        Категория услуги
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
                              Терапия
                            </span>
                          </div>
                          <DropdownArrowIcon className="text-muted transition-transform duration-300 size-5" />
                        </div>
                      </div>
                    </div>

                    <label className="flex flex-col gap-1.5">
                      <span className="text-overlay text-sm font-medium">
                        Описание
                      </span>
                      <textarea
                        rows={3}
                        defaultValue="Первичный приём терапевта: сбор жалоб и анамнеза, осмотр, измерение давления и сатурации. По итогам — план обследования и рекомендации по лечению."
                        placeholder="Расскажите, как проходит процедура"
                        className="text-base border border-border-soft text-foreground rounded-lg py-2.5 px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background w-full resize-none"
                      />
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <label className="flex flex-col gap-1.5">
                        <span className="text-overlay text-sm font-medium">
                          Стоимость
                        </span>
                        <div className="relative w-full">
                          <input
                            type="number"
                            defaultValue="1200"
                            placeholder="0"
                            className="text-base leading-0 border border-border-soft text-foreground rounded-lg py-2.25 px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background w-full"
                          />
                        </div>
                      </label>

                      <div className="flex flex-col gap-1.5 w-full">
                        <span className="text-overlay text-sm font-medium">
                          {" "}
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
                                KGS
                              </span>
                            </div>
                            <DropdownArrowIcon className="text-muted transition-transform duration-300 size-5" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5 w-full">
                      <span className="text-overlay text-sm font-medium">
                        Филиал, где проводится процедура
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
                              г. Бишкек, мкр. Джал, 23/5
                            </span>
                          </div>
                          <DropdownArrowIcon className="text-muted transition-transform duration-300 size-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl border border-border p-5 mb-4">
                  <h3 className="text-foreground font-semibold text-lg mb-3">
                    Специалисты, выполняющие услугу
                  </h3>
                  <div>
                    <div className="flex flex-col gap-2 mb-3">
                      <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-2xl border border-border">
                        <span className="text-foreground text-sm">
                          Асанова Айгуль Бакытовна
                        </span>
                        <button
                          type="button"
                          aria-label="Убрать"
                          className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-1.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] active:bg-border-soft hover:bg-background text-dim hover:text-red-500 shrink-0"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <path
                              d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-2xl border border-border">
                        <span className="text-foreground text-sm">
                          Жумабеков Азамат Талантович
                        </span>
                        <button
                          type="button"
                          aria-label="Убрать"
                          className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-1.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] active:bg-border-soft hover:bg-background text-dim hover:text-red-500 shrink-0"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <path
                              d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <Link
                      href="/clinic-profile/procedures/1/edit/add-specialist-modal"
                      className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-8 text-xs px-4 relative after:absolute after:inset-x-0 after:-inset-y-2 after:content-[''] active:bg-border-soft hover:bg-background text-primary"
                    >
                      <span>+ Добавить специалиста</span>
                    </Link>
                  </div>
                </div>

                <div className="bg-white rounded-3xl border border-border p-5 mb-4">
                  <h3 className="text-foreground font-semibold text-lg mb-1">
                    График проведения процедуры
                  </h3>

                  <div>
                    <p className="text-muted text-sm mb-4 leading-relaxed">
                      Укажите время проведения процедуры (с какого времени до
                      какого), оставьте поля пустыми, если в какой-то день
                      процедура не проводится
                    </p>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <span className="w-8 text-sm text-secondary shrink-0">
                          ПН
                        </span>
                        <input
                          type="time"
                          defaultValue="08:00"
                          className="w-24 px-3 py-2 rounded-xl border border-border-soft text-sm text-foreground focus:outline-none focus:border-primary transition-colors disabled:opacity-40"
                        />
                        <span className="text-muted">–</span>
                        <input
                          type="time"
                          defaultValue="18:00"
                          className="w-24 px-3 py-2 rounded-xl border border-border-soft text-sm text-foreground focus:outline-none focus:border-primary transition-colors disabled:opacity-40"
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-8 text-sm text-secondary shrink-0">
                          ВТ
                        </span>
                        <input
                          type="time"
                          defaultValue="08:00"
                          className="w-24 px-3 py-2 rounded-xl border border-border-soft text-sm text-foreground focus:outline-none focus:border-primary transition-colors disabled:opacity-40"
                        />
                        <span className="text-muted">–</span>
                        <input
                          type="time"
                          defaultValue="18:00"
                          className="w-24 px-3 py-2 rounded-xl border border-border-soft text-sm text-foreground focus:outline-none focus:border-primary transition-colors disabled:opacity-40"
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-8 text-sm text-secondary shrink-0">
                          СР
                        </span>
                        <input
                          type="time"
                          defaultValue="08:00"
                          className="w-24 px-3 py-2 rounded-xl border border-border-soft text-sm text-foreground focus:outline-none focus:border-primary transition-colors disabled:opacity-40"
                        />
                        <span className="text-muted">–</span>
                        <input
                          type="time"
                          defaultValue="18:00"
                          className="w-24 px-3 py-2 rounded-xl border border-border-soft text-sm text-foreground focus:outline-none focus:border-primary transition-colors disabled:opacity-40"
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-8 text-sm text-secondary shrink-0">
                          ЧТ
                        </span>
                        <input
                          type="time"
                          defaultValue="08:00"
                          className="w-24 px-3 py-2 rounded-xl border border-border-soft text-sm text-foreground focus:outline-none focus:border-primary transition-colors disabled:opacity-40"
                        />
                        <span className="text-muted">–</span>
                        <input
                          type="time"
                          defaultValue="18:00"
                          className="w-24 px-3 py-2 rounded-xl border border-border-soft text-sm text-foreground focus:outline-none focus:border-primary transition-colors disabled:opacity-40"
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-8 text-sm text-secondary shrink-0">
                          ПТ
                        </span>
                        <input
                          type="time"
                          defaultValue="08:00"
                          className="w-24 px-3 py-2 rounded-xl border border-border-soft text-sm text-foreground focus:outline-none focus:border-primary transition-colors disabled:opacity-40"
                        />
                        <span className="text-muted">–</span>
                        <input
                          type="time"
                          defaultValue="16:00"
                          className="w-24 px-3 py-2 rounded-xl border border-border-soft text-sm text-foreground focus:outline-none focus:border-primary transition-colors disabled:opacity-40"
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-8 text-sm text-secondary shrink-0">
                          СБ
                        </span>
                        <input
                          type="time"
                          defaultValue="09:00"
                          className="w-24 px-3 py-2 rounded-xl border border-border-soft text-sm text-foreground focus:outline-none focus:border-primary transition-colors disabled:opacity-40"
                        />
                        <span className="text-muted">–</span>
                        <input
                          type="time"
                          defaultValue="14:00"
                          className="w-24 px-3 py-2 rounded-xl border border-border-soft text-sm text-foreground focus:outline-none focus:border-primary transition-colors disabled:opacity-40"
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-8 text-sm text-secondary shrink-0">
                          ВС
                        </span>
                        <input
                          type="time"
                          className="w-24 px-3 py-2 rounded-xl border border-border-soft text-sm text-foreground focus:outline-none focus:border-primary transition-colors disabled:opacity-40"
                        />
                        <span className="text-muted">–</span>
                        <input
                          type="time"
                          className="w-24 px-3 py-2 rounded-xl border border-border-soft text-sm text-foreground focus:outline-none focus:border-primary transition-colors disabled:opacity-40"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-background">
                      <span className="text-sm font-medium text-foreground shrink-0">
                        Обеденный перерыв
                      </span>
                      <div className="flex items-center gap-3">
                        <input
                          type="time"
                          defaultValue="13:00"
                          className="w-24 px-3 py-2 rounded-xl border border-border-soft text-sm text-foreground focus:outline-none focus:border-primary transition-colors disabled:opacity-40"
                        />
                        <span className="text-muted">–</span>
                        <input
                          type="time"
                          defaultValue="14:00"
                          className="w-24 px-3 py-2 rounded-xl border border-border-soft text-sm text-foreground focus:outline-none focus:border-primary transition-colors disabled:opacity-40"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl border border-border p-5">
                  <h3 className="text-foreground font-semibold text-lg mb-3">
                    Записи
                  </h3>

                  <div className="space-y-3">
                    {/* MOBILE layout */}
                    <div className="lg:hidden space-y-3">
                      <div className="border border-border-soft rounded-2xl p-3">
                        <div className="flex items-center justify-between bg-background rounded-xl px-2 py-1.5">
                          <button
                            type="button"
                            aria-label="Предыдущий месяц"
                            className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-1.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] active:bg-border-soft hover:bg-white"
                          >
                            <ArrowLeftIcon className="size-4" />
                          </button>
                          <span className="text-sm font-medium text-foreground">
                            Сентябрь 2026
                          </span>
                          <button
                            type="button"
                            aria-label="Следующий месяц"
                            className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-1.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] active:bg-border-soft hover:bg-white"
                          >
                            <ArrowRightIcon className="size-4" />
                          </button>
                        </div>
                        <div className="mt-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                          <div
                            className="flex gap-2"
                            style={{ width: "max-content" }}
                          >
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">ВТ</span>
                              <span className="font-medium">25</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">СР</span>
                              <span className="font-medium">26</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">ЧТ</span>
                              <span className="font-medium">27</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">ПТ</span>
                              <span className="font-medium">28</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">СБ</span>
                              <span className="font-medium">29</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">ВС</span>
                              <span className="font-medium">30</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">ПН</span>
                              <span className="font-medium">31</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">ВТ</span>
                              <span className="font-medium">01</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">СР</span>
                              <span className="font-medium">02</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">ЧТ</span>
                              <span className="font-medium">03</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">ПТ</span>
                              <span className="font-medium">04</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">СБ</span>
                              <span className="font-medium">05</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">ВС</span>
                              <span className="font-medium">06</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">ПН</span>
                              <span className="font-medium">07</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">ВТ</span>
                              <span className="font-medium">08</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">СР</span>
                              <span className="font-medium">09</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">ЧТ</span>
                              <span className="font-medium">10</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">ПТ</span>
                              <span className="font-medium">11</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">СБ</span>
                              <span className="font-medium">12</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">ВС</span>
                              <span className="font-medium">13</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">ПН</span>
                              <span className="font-medium">14</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">ВТ</span>
                              <span className="font-medium">15</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">СР</span>
                              <span className="font-medium">16</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">ЧТ</span>
                              <span className="font-medium">17</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">ПТ</span>
                              <span className="font-medium">18</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">СБ</span>
                              <span className="font-medium">19</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">ВС</span>
                              <span className="font-medium">20</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">ПН</span>
                              <span className="font-medium">21</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">ВТ</span>
                              <span className="font-medium">22</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">СР</span>
                              <span className="font-medium">23</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">ЧТ</span>
                              <span className="font-medium">24</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-primary text-primary bg-[#FFF3EE]"
                            >
                              <span className="text-[10px] text-primary">
                                ПТ
                              </span>
                              <span className="font-medium">25</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">СБ</span>
                              <span className="font-medium">26</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">ВС</span>
                              <span className="font-medium">27</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">ПН</span>
                              <span className="font-medium">28</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">ВТ</span>
                              <span className="font-medium">29</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">СР</span>
                              <span className="font-medium">30</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">ЧТ</span>
                              <span className="font-medium">01</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">ПТ</span>
                              <span className="font-medium">02</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">СБ</span>
                              <span className="font-medium">03</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">ВС</span>
                              <span className="font-medium">04</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">ПН</span>
                              <span className="font-medium">05</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">ВТ</span>
                              <span className="font-medium">06</span>
                            </button>
                            <button
                              type="button"
                              className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white"
                            >
                              <span className="text-[10px] text-muted">СР</span>
                              <span className="font-medium">07</span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="border border-border-soft rounded-2xl p-3 space-y-3">
                        <div>
                          <p className="text-sm text-secondary mb-2">Утро</p>
                          <div className="flex flex-wrap gap-1.5">
                            <button
                              type="button"
                              className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground"
                            >
                              08:00
                            </button>
                            <button
                              type="button"
                              className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground"
                            >
                              09:00
                            </button>
                            <button
                              type="button"
                              className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground"
                            >
                              10:00
                            </button>
                            <button
                              type="button"
                              className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-primary text-primary bg-[#FFF3EE]"
                            >
                              11:00
                            </button>
                            <button
                              type="button"
                              className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground"
                            >
                              12:00
                            </button>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-secondary mb-2">Обед</p>
                          <div className="flex flex-wrap gap-1.5">
                            <button
                              type="button"
                              className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground"
                            >
                              13:00
                            </button>
                            <button
                              type="button"
                              className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground"
                            >
                              14:00
                            </button>
                            <button
                              type="button"
                              disabled
                              className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed"
                            >
                              15:00
                            </button>
                            <button
                              type="button"
                              disabled
                              className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed"
                            >
                              16:00
                            </button>
                            <button
                              type="button"
                              className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground"
                            >
                              17:00
                            </button>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-secondary mb-2">Вечер</p>
                          <div className="flex flex-wrap gap-1.5">
                            <button
                              type="button"
                              className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground"
                            >
                              18:00
                            </button>
                            <button
                              type="button"
                              disabled
                              className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed"
                            >
                              19:00
                            </button>
                            <button
                              type="button"
                              className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground"
                            >
                              20:00
                            </button>
                            <button
                              type="button"
                              className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground"
                            >
                              21:00
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* DESKTOP layout */}
                    <div className="hidden lg:grid lg:grid-cols-2 gap-3">
                      <div className="border border-border-soft rounded-2xl p-3">
                        <div className="flex items-center justify-between bg-background rounded-xl px-2 py-1.5">
                          <button
                            type="button"
                            aria-label="Предыдущий месяц"
                            className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-1.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] active:bg-border-soft hover:bg-white"
                          >
                            <ArrowLeftIcon className="size-4" />
                          </button>
                          <span className="text-sm font-medium text-foreground">
                            Сентябрь 2026
                          </span>
                          <button
                            type="button"
                            aria-label="Следующий месяц"
                            className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-1.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] active:bg-border-soft hover:bg-white"
                          >
                            <ArrowRightIcon className="size-4" />
                          </button>
                        </div>
                        <div className="mt-3">
                          <div className="grid grid-cols-7 gap-1 mb-2">
                            <span className="text-center text-xs text-muted py-1">
                              ПН
                            </span>
                            <span className="text-center text-xs text-muted py-1">
                              ВТ
                            </span>
                            <span className="text-center text-xs text-muted py-1">
                              СР
                            </span>
                            <span className="text-center text-xs text-muted py-1">
                              ЧТ
                            </span>
                            <span className="text-center text-xs text-muted py-1">
                              ПТ
                            </span>
                            <span className="text-center text-xs text-muted py-1">
                              СБ
                            </span>
                            <span className="text-center text-xs text-muted py-1">
                              ВС
                            </span>
                          </div>
                          <div className="grid grid-cols-7 gap-1.5">
                            <div className="h-9" />
                            <button
                              type="button"
                              className="h-9 rounded-lg border text-sm transition-all border-border-soft text-foreground hover:border-primary/40"
                            >
                              01
                            </button>
                            <button
                              type="button"
                              className="h-9 rounded-lg border text-sm transition-all border-border-soft text-foreground hover:border-primary/40"
                            >
                              02
                            </button>
                            <button
                              type="button"
                              className="h-9 rounded-lg border text-sm transition-all border-border-soft text-foreground hover:border-primary/40"
                            >
                              03
                            </button>
                            <button
                              type="button"
                              className="h-9 rounded-lg border text-sm transition-all border-border-soft text-foreground hover:border-primary/40"
                            >
                              04
                            </button>
                            <button
                              type="button"
                              className="h-9 rounded-lg border text-sm transition-all border-border-soft text-foreground hover:border-primary/40"
                            >
                              05
                            </button>
                            <button
                              type="button"
                              className="h-9 rounded-lg border text-sm transition-all border-border-soft text-foreground hover:border-primary/40"
                            >
                              06
                            </button>
                            <button
                              type="button"
                              className="h-9 rounded-lg border text-sm transition-all border-border-soft text-foreground hover:border-primary/40"
                            >
                              07
                            </button>
                            <button
                              type="button"
                              className="h-9 rounded-lg border text-sm transition-all border-border-soft text-foreground hover:border-primary/40"
                            >
                              08
                            </button>
                            <button
                              type="button"
                              className="h-9 rounded-lg border text-sm transition-all border-border-soft text-foreground hover:border-primary/40"
                            >
                              09
                            </button>
                            <button
                              type="button"
                              className="h-9 rounded-lg border text-sm transition-all border-border-soft text-foreground hover:border-primary/40"
                            >
                              10
                            </button>
                            <button
                              type="button"
                              className="h-9 rounded-lg border text-sm transition-all border-border-soft text-foreground hover:border-primary/40"
                            >
                              11
                            </button>
                            <button
                              type="button"
                              className="h-9 rounded-lg border text-sm transition-all border-border-soft text-foreground hover:border-primary/40"
                            >
                              12
                            </button>
                            <button
                              type="button"
                              className="h-9 rounded-lg border text-sm transition-all border-border-soft text-foreground hover:border-primary/40"
                            >
                              13
                            </button>
                            <button
                              type="button"
                              className="h-9 rounded-lg border text-sm transition-all border-border-soft text-foreground hover:border-primary/40"
                            >
                              14
                            </button>
                            <button
                              type="button"
                              className="h-9 rounded-lg border text-sm transition-all border-border-soft text-foreground hover:border-primary/40"
                            >
                              15
                            </button>
                            <button
                              type="button"
                              className="h-9 rounded-lg border text-sm transition-all border-border-soft text-foreground hover:border-primary/40"
                            >
                              16
                            </button>
                            <button
                              type="button"
                              className="h-9 rounded-lg border text-sm transition-all border-border-soft text-foreground hover:border-primary/40"
                            >
                              17
                            </button>
                            <button
                              type="button"
                              className="h-9 rounded-lg border text-sm transition-all border-border-soft text-foreground hover:border-primary/40"
                            >
                              18
                            </button>
                            <button
                              type="button"
                              className="h-9 rounded-lg border text-sm transition-all border-border-soft text-foreground hover:border-primary/40"
                            >
                              19
                            </button>
                            <button
                              type="button"
                              className="h-9 rounded-lg border text-sm transition-all border-border-soft text-foreground hover:border-primary/40"
                            >
                              20
                            </button>
                            <button
                              type="button"
                              className="h-9 rounded-lg border text-sm transition-all border-border-soft text-foreground hover:border-primary/40"
                            >
                              21
                            </button>
                            <button
                              type="button"
                              className="h-9 rounded-lg border text-sm transition-all border-border-soft text-foreground hover:border-primary/40"
                            >
                              22
                            </button>
                            <button
                              type="button"
                              className="h-9 rounded-lg border text-sm transition-all border-border-soft text-foreground hover:border-primary/40"
                            >
                              23
                            </button>
                            <button
                              type="button"
                              className="h-9 rounded-lg border text-sm transition-all border-border-soft text-foreground hover:border-primary/40"
                            >
                              24
                            </button>
                            <button
                              type="button"
                              className="h-9 rounded-lg border text-sm transition-all border-primary text-primary bg-[#FFF3EE]"
                            >
                              25
                            </button>
                            <button
                              type="button"
                              className="h-9 rounded-lg border text-sm transition-all border-border-soft text-foreground hover:border-primary/40"
                            >
                              26
                            </button>
                            <button
                              type="button"
                              className="h-9 rounded-lg border text-sm transition-all border-border-soft text-foreground hover:border-primary/40"
                            >
                              27
                            </button>
                            <button
                              type="button"
                              className="h-9 rounded-lg border text-sm transition-all border-border-soft text-foreground hover:border-primary/40"
                            >
                              28
                            </button>
                            <button
                              type="button"
                              className="h-9 rounded-lg border text-sm transition-all border-border-soft text-foreground hover:border-primary/40"
                            >
                              29
                            </button>
                            <button
                              type="button"
                              className="h-9 rounded-lg border text-sm transition-all border-border-soft text-foreground hover:border-primary/40"
                            >
                              30
                            </button>
                            <div className="h-9" />
                            <div className="h-9" />
                            <div className="h-9" />
                            <div className="h-9" />
                          </div>
                        </div>
                      </div>
                      <div className="border border-border-soft rounded-2xl p-3 space-y-3">
                        <div>
                          <p className="text-sm text-secondary mb-2">Утро</p>
                          <div className="flex flex-wrap gap-1.5">
                            <button
                              type="button"
                              className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground hover:border-primary/40"
                            >
                              08:00
                            </button>
                            <button
                              type="button"
                              className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground hover:border-primary/40"
                            >
                              09:00
                            </button>
                            <button
                              type="button"
                              className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground hover:border-primary/40"
                            >
                              10:00
                            </button>
                            <button
                              type="button"
                              className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-primary text-primary bg-[#FFF3EE]"
                            >
                              11:00
                            </button>
                            <button
                              type="button"
                              className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground hover:border-primary/40"
                            >
                              12:00
                            </button>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-secondary mb-2">Обед</p>
                          <div className="flex flex-wrap gap-1.5">
                            <button
                              type="button"
                              className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground hover:border-primary/40"
                            >
                              13:00
                            </button>
                            <button
                              type="button"
                              className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground hover:border-primary/40"
                            >
                              14:00
                            </button>
                            <button
                              type="button"
                              disabled
                              className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground hover:border-primary/40 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed"
                            >
                              15:00
                            </button>
                            <button
                              type="button"
                              disabled
                              className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground hover:border-primary/40 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed"
                            >
                              16:00
                            </button>
                            <button
                              type="button"
                              className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground hover:border-primary/40"
                            >
                              17:00
                            </button>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-secondary mb-2">Вечер</p>
                          <div className="flex flex-wrap gap-1.5">
                            <button
                              type="button"
                              className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground hover:border-primary/40"
                            >
                              18:00
                            </button>
                            <button
                              type="button"
                              disabled
                              className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground hover:border-primary/40 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed"
                            >
                              19:00
                            </button>
                            <button
                              type="button"
                              className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground hover:border-primary/40"
                            >
                              20:00
                            </button>
                            <button
                              type="button"
                              className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground hover:border-primary/40"
                            >
                              21:00
                            </button>
                          </div>
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
