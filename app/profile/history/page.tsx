import Link from "next/link";

import FacebookIcon from "@/assets/icons/auth/facebook.svg";
import InstagramIcon from "@/assets/icons/auth/instagram.svg";
import LinkedinIcon from "@/assets/icons/auth/linkedin.svg";
import TwitterIcon from "@/assets/icons/auth/twitter.svg";
import CalendarIcon from "@/assets/icons/common/calendar.svg";
import CloseIcon from "@/assets/icons/common/close.svg";
import MedicalServiceIcon from "@/assets/icons/common/medical-service.svg";
import StarIcon from "@/assets/icons/common/star.svg";
import VideoCallIcon from "@/assets/icons/common/video-call.svg";
import HeaderBackIcon from "@/assets/icons/header/back-arrow.svg";
import ChatIcon from "@/assets/icons/header/chat.svg";
import GeoBtnArrowIcon from "@/assets/icons/header/geo-btn-arrow.svg";
import GeoIcon from "@/assets/icons/header/geo.svg";
import Logo from "@/assets/icons/header/logo.svg";
import ProfileIcon from "@/assets/icons/header/profile.svg";
import SearchIcon from "@/assets/icons/header/search.svg";
import HistoryIcon from "@/assets/icons/profile/history.svg";
import LogoutIcon from "@/assets/icons/profile/logout.svg";
import ReviewsIcon from "@/assets/icons/profile/reviews.svg";
import SavedIcon from "@/assets/icons/profile/saved.svg";
import SettingsIcon from "@/assets/icons/profile/settings.svg";

// Кабинет пациента → «История записей», вкладка «Предстоящие».
// Раскрыты: app/profile/layout.tsx (хедер/футер только md+),
// app/profile/(cabinet)/layout.tsx (заголовок + сайдбар lg+),
// pages/profile/history (MobilePageHeader, поиск, SegmentedControl, AppointmentCard).
export default function Page() {
  return (
    <>
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
                        <span className="absolute -top-1.5 -right-1.5 min-w-4 h-4 px-0.5 rounded-full bg-primary text-white text-[10px] font-semibold flex items-center justify-center">3</span>
                      </span>
                    </button>
                  </Link>
                  <Link href="/profile">
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
                        <span className="absolute -top-1.5 -right-1.5 min-w-4 h-4 px-0.5 rounded-full bg-primary text-white text-[10px] font-semibold flex items-center justify-center">3</span>
                      </span>
                    </button>
                  </Link>
                  <Link href="/profile">
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

      <div className="w-full max-w-360 mx-auto md:px-10 md:py-8">
        <h1 className="text-[40px] font-semibold text-foreground mb-8 hidden md:block">
          Мой профиль
        </h1>

        <div className="flex gap-6">
          <aside className="hidden lg:block shrink-0">
            <div className="w-full max-w-88 flex flex-col gap-4">
              {/* Profile Card — белая рамка с отступом 4px, внутри градиентная подложка */}
              <div className="bg-white border border-border-soft rounded-3xl p-1">
                <div className="bg-linear-to-b from-[#FFE2DA] to-white rounded-[20px] px-6 py-5 flex flex-col items-center gap-3">
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-linear-to-br from-primary to-[#FF8A6B] flex items-center justify-center shrink-0">
                    <img
                      src="/images/hero/avatar.png"
                      alt="Айгерим Садыкова"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-foreground font-semibold text-base">
                    Айгерим Садыкова
                  </h3>
                </div>
              </div>

              {/* Menu. Индикатор активного пункта: в оригинале top/height считаются по
                  offsetTop активной ссылки; здесь — готовые значения (py-2 = 8px, пункт
                  64px + gap 4px). */}
              <nav className="bg-white border border-border-soft rounded-3xl py-2 px-2 flex flex-col gap-1 relative">
                <div
                  className="absolute inset-x-2 rounded-2xl bg-primary-tint transition-all duration-200 ease-out pointer-events-none"
                  style={{ top: 8, height: 64 }}
                />

                <Link
                  href="/profile/history"
                  data-active="true"
                  className="flex items-center gap-3 px-4 py-3.5 rounded-2xl relative z-10"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 bg-primary text-white"
                  >
                    <HistoryIcon className="w-5 h-5" />
                  </div>
                  <span
                    className="font-medium text-base transition-colors duration-200 text-foreground"
                  >
                    История записей
                  </span>
                  <svg
                    className="w-5 h-5 ml-auto shrink-0 text-dim"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M7.5 15L12.5 10L7.5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <Link
                  href="/profile/saved"
                  className="flex items-center gap-3 px-4 py-3.5 rounded-2xl relative z-10 hover:bg-surface"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 bg-primary-tint text-primary"
                  >
                    <SavedIcon className="w-5 h-5" />
                  </div>
                  <span
                    className="font-medium text-base transition-colors duration-200 text-secondary"
                  >
                    Сохранённое
                  </span>
                  <svg
                    className="w-5 h-5 ml-auto shrink-0 text-dim"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M7.5 15L12.5 10L7.5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <Link
                  href="/profile/reviews"
                  className="flex items-center gap-3 px-4 py-3.5 rounded-2xl relative z-10 hover:bg-surface"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 bg-primary-tint text-primary"
                  >
                    <ReviewsIcon className="w-5 h-5" />
                  </div>
                  <span
                    className="font-medium text-base transition-colors duration-200 text-secondary"
                  >
                    Отзывы
                  </span>
                  <svg
                    className="w-5 h-5 ml-auto shrink-0 text-dim"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M7.5 15L12.5 10L7.5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <Link
                  href="/profile/my-data"
                  className="flex items-center gap-3 px-4 py-3.5 rounded-2xl relative z-10 hover:bg-surface"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 bg-primary-tint text-primary"
                  >
                    <SettingsIcon className="w-5 h-5" />
                  </div>
                  <span
                    className="font-medium text-base transition-colors duration-200 text-secondary"
                  >
                    Настройки профиля
                  </span>
                  <svg
                    className="w-5 h-5 ml-auto shrink-0 text-dim"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M7.5 15L12.5 10L7.5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </nav>

              {/* Logout — своя рамка + небольшой отступ со всех сторон */}
              <button
                type="button"
                className="bg-white border border-border-soft rounded-3xl p-1 w-full group"
              >
                <div className="flex items-center gap-3 px-4 py-3.5 rounded-[20px] text-secondary group-hover:bg-surface transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-primary-tint flex items-center justify-center shrink-0 text-primary">
                    <LogoutIcon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-base">Выйти из профиля</span>
                  <svg
                    className="w-5 h-5 ml-auto shrink-0 text-dim"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M7.5 15L12.5 10L7.5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>

              {/* Карточка статуса пользователя (entities/user-status) */}
              <div className="bg-white rounded-3xl border border-border p-6">
                <p className="text-muted text-sm mb-2">Статус пользователя</p>
                <h4 className="text-primary text-2xl font-bold mb-3">Доверенный пациент</h4>
                <p className="text-secondary text-sm leading-relaxed mb-6">
                  Ваши отзывы взвешенные и полезные — другие пациенты опираются на них при
                  выборе врача и клиники.
                </p>

                {/* Подписи, чипы и трек — в отдельной светлой подложке, как в макете. */}
                <div className="bg-background rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-muted text-xs">
                      Положительных
                      <br />
                      отзывов
                    </span>
                    <span className="text-muted text-xs text-right">
                      Отрицательных
                      <br />
                      отзывов
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-primary text-sm font-semibold border border-primary rounded-lg px-2 py-0.5">
                      82%
                    </span>
                    <div className="flex-1 h-2 rounded-full overflow-hidden flex bg-border-soft">
                      <div className="bg-primary h-full" style={{ width: "82%" }} />
                      <div className="h-full flex-1" style={{ backgroundColor: "#8B9FFF" }} />
                    </div>
                    <span
                      className="text-sm font-semibold border rounded-lg px-2 py-0.5"
                      style={{ color: "#8B9FFF", borderColor: "#8B9FFF" }}
                    >
                      18%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <main className="flex-1 min-w-0">
            {/* Мобильная шапка (widgets/profile/mobile-header) */}
            <div className="md:hidden px-4 pt-1 pb-4 bg-white">
              <div className="grid grid-cols-3 items-center min-h-10">
                <div>
                  <Link
                    href="/profile"
                    aria-label="Назад"
                    className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent"
                  >
                    <HeaderBackIcon className="size-4" />
                  </Link>
                </div>

                <h1 className="text-center font-medium text-base px-2">
                  История записей
                </h1>

                <div className="flex justify-end">
                  <button
                    type="button"
                    aria-label="Открыть поиск"
                    className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent"
                  >
                    <SearchIcon className="size-5" />
                  </button>
                </div>
              </div>

              <div className="mt-3">
                <div className="flex flex-col gap-3">
                  <div className="relative flex items-center bg-background p-1 rounded-full w-full select-none">
                    <div
                      className="absolute top-1 bottom-1 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-transform duration-300 ease-in-out"
                      style={{
                        width: "calc((100% - 8px) / 2)",
                        transform: "translateX(calc(0 * 100%))",
                        left: "4px",
                      }}
                    />
                    <button
                      type="button"
                      className="relative z-10 min-w-0 flex-1 truncate px-0 sm:px-1 py-2 text-xs sm:text-sm font-medium transition-colors duration-300 rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] text-foreground"
                    >
                      Предстоящие
                    </button>
                    <button
                      type="button"
                      className="relative z-10 min-w-0 flex-1 truncate px-0 sm:px-1 py-2 text-xs sm:text-sm font-medium transition-colors duration-300 rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] text-secondary hover:text-foreground"
                    >
                      Прошедшие
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 pt-6 pb-8 md:p-0">
              {/* Desktop: заголовок + поиск в одну строку, табы ниже */}
              <div className="hidden md:flex items-center justify-between gap-6 mb-5">
                <h2 className="text-[32px] font-semibold text-foreground">
                  История записей
                </h2>
                <div className="flex items-center gap-3 shrink-0">
                  <div className="w-80">
                    <label className="flex flex-col gap-1.5">
                      <div className="relative w-full">
                        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-foreground" />
                        <input
                          type="text"
                          placeholder="Поиск"
                          className="text-base leading-0 border border-border-soft text-foreground px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background py-2.25 pl-10 w-full rounded-full bg-white"
                        />
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="hidden md:block w-75 mb-6">
                <div className="relative flex items-center bg-background p-1 rounded-full w-full select-none">
                  <div
                    className="absolute top-1 bottom-1 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-transform duration-300 ease-in-out"
                    style={{
                      width: "calc((100% - 8px) / 2)",
                      transform: "translateX(calc(0 * 100%))",
                      left: "4px",
                    }}
                  />
                  <button
                    type="button"
                    className="relative z-10 min-w-0 flex-1 truncate px-0 sm:px-1 py-2 text-xs sm:text-sm font-medium transition-colors duration-300 rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] text-foreground"
                  >
                    Предстоящие
                  </button>
                  <button
                    type="button"
                    className="relative z-10 min-w-0 flex-1 truncate px-0 sm:px-1 py-2 text-xs sm:text-sm font-medium transition-colors duration-300 rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] text-secondary hover:text-foreground"
                  >
                    Прошедшие
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {/* ── Запись 1 (онлайн) — Desktop ── */}
                <div className="hidden md:flex bg-white rounded-3xl p-5 border border-border gap-5">
                  <div className="relative shrink-0">
                    <div className="relative w-44 h-44 rounded-2xl overflow-hidden bg-primary-tint">
                      <img
                        src="/images/doctors/doctor-2.png"
                        alt="Асанова Гульнара Бакытовна"
                        className="absolute inset-0 h-full w-full object-cover object-top"
                      />
                    </div>
                    <div className="absolute top-3 left-3 flex items-center gap-1 bg-[#FFF0EE] rounded-lg px-2 py-1 shadow-sm">
                      <StarIcon className="text-primary w-4 h-4" />
                      <span className="text-foreground font-semibold text-sm">4.90</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0 pt-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-foreground font-semibold text-[22px] leading-tight">
                        Асанова Гульнара Бакытовна
                      </h3>
                    </div>
                    <div className="text-base mb-5">
                      <p className="text-muted">
                        Кардиолог{" "}
                        <span className="text-primary">• Медицинский центр «Медиком»</span>
                      </p>
                    </div>

                    <div className="flex flex-col gap-3 text-base text-foreground">
                      <div className="flex items-center gap-2.5">
                        <CalendarIcon className="w-5 h-5 shrink-0 text-primary" />
                        <span>02.10.2026</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <svg className="w-5 h-5 shrink-0 text-primary" viewBox="0 0 20 20" fill="none">
                          <circle cx="10" cy="10" r="7.25" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M10 6v4l2.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>10:30</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <GeoIcon className="w-5 h-5 mt-0.5 shrink-0 [&_path]:stroke-primary" />
                        <span className="flex-1">г. Бишкек, ул. Токтогула, 125</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end justify-between shrink-0 pt-1">
                    <div className="flex flex-col items-end gap-2">
                      <Link
                        href="/consultation/1"
                        className="px-5 py-2.5 rounded-full bg-primary text-white font-medium text-sm hover:bg-primary-dark transition-colors flex items-center gap-2 whitespace-nowrap"
                      >
                        <VideoCallIcon className="w-4 h-4" />
                        Подключиться
                      </Link>
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] bg-[#FFF0EE] text-primary hover:bg-[#FFE4DE] active:bg-[#FFE4DE]"
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="size-5">
                          <path
                            d="M10.5 1.5v2.5M5.5 1.5v2.5M2 6.5h12M3.5 3h9A1.5 1.5 0 0 1 14 4.5v4M2 4.5A1.5 1.5 0 0 1 3.5 3M2 4.5v8A1.5 1.5 0 0 0 3.5 14h4.5M11 14.5l3.5-3.5-1.5-1.5L9.5 13v1.5H11z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>Перенести</span>
                      </button>
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] bg-red-50 text-red-500 hover:bg-red-100 active:bg-red-100"
                      >
                        <CloseIcon className="size-5" />
                        <span>Отменить</span>
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="text-secondary text-lg mb-1">Онлайн-консультация кардиолога</p>
                      <span className="text-foreground font-semibold text-[28px]">
                        1 500 <span className="underline">с</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* ── Запись 1 (онлайн) — Mobile ── */}
                <div className="md:hidden bg-white rounded-3xl p-3 border border-border">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="relative shrink-0">
                      <div className="relative w-28 h-28 rounded-2xl overflow-hidden bg-primary-tint">
                        <img
                          src="/images/doctors/doctor-2.png"
                          alt="Асанова Гульнара Бакытовна"
                          className="absolute inset-0 h-full w-full object-cover object-top"
                        />
                      </div>
                      <div className="absolute top-2 left-2 flex items-center gap-0.5 bg-[#FFF0EE] rounded-md px-1.5 py-0.5 shadow-sm">
                        <StarIcon className="text-primary w-3 h-3" />
                        <span className="text-foreground font-semibold text-xs">4.90</span>
                      </div>
                    </div>

                    <div className="flex-1 min-w-0 pt-0.5">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <h3 className="text-foreground font-semibold text-base leading-tight truncate">
                          Асанова Гульнара Бакытовна
                        </h3>
                      </div>
                      <div className="text-sm mb-2.5">
                        <p className="text-muted">
                          Кардиолог{" "}
                          <span className="text-primary">• Медицинский центр «Медиком»</span>
                        </p>
                      </div>

                      <div className="flex flex-col gap-1.5 text-sm text-secondary">
                        <div className="flex items-center gap-1.5">
                          <CalendarIcon className="w-4 h-4 shrink-0 [&_path]:stroke-secondary" />
                          <span>2 окт 2026 • 10:30</span>
                        </div>
                        <div className="flex items-center gap-1.5 min-w-0">
                          <MedicalServiceIcon className="w-4 h-4 shrink-0 [&_path]:stroke-secondary" />
                          <span className="truncate">
                            Онлайн-консультация кардиолога{" • "}
                            <span>
                              1 500 <span className="underline">с</span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 text-sm text-secondary flex-1 min-w-0 bg-background px-3 py-2.5 rounded-2xl">
                      <GeoIcon className="w-4 h-4 shrink-0 [&_path]:stroke-secondary" />
                      <span className="flex-1 truncate">г. Бишкек, ул. Токтогула, 125</span>
                    </div>

                    <Link
                      href="/consultation/1"
                      aria-label="Подключиться к онлайн-консультации"
                      className="w-11 h-11 rounded-full bg-primary flex items-center justify-center shrink-0 hover:bg-primary-dark transition-colors"
                    >
                      <VideoCallIcon className="w-4.5 h-4.5 text-white" />
                    </Link>
                    <button
                      type="button"
                      aria-label="Перенести запись"
                      className="w-11 h-11 rounded-full border border-border flex items-center justify-center shrink-0 text-primary hover:bg-primary-tint transition-colors"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="w-4.5 h-4.5">
                        <path
                          d="M10.5 1.5v2.5M5.5 1.5v2.5M2 6.5h12M3.5 3h9A1.5 1.5 0 0 1 14 4.5v4M2 4.5A1.5 1.5 0 0 1 3.5 3M2 4.5v8A1.5 1.5 0 0 0 3.5 14h4.5M11 14.5l3.5-3.5-1.5-1.5L9.5 13v1.5H11z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      aria-label="Отменить"
                      className="w-11 h-11 rounded-full border border-border flex items-center justify-center shrink-0 text-primary hover:bg-primary-tint transition-colors"
                    >
                      <CloseIcon className="w-4.5 h-4.5" />
                    </button>
                  </div>
                </div>

                {/* ── Запись 2 (очно) — Desktop ── */}
                <div className="hidden md:flex bg-white rounded-3xl p-5 border border-border gap-5">
                  <div className="relative shrink-0">
                    <div className="relative w-44 h-44 rounded-2xl overflow-hidden bg-primary-tint">
                      <img
                        src="/images/doctors/doctor-5.png"
                        alt="Токтосунов Бакыт Эрмекович"
                        className="absolute inset-0 h-full w-full object-cover object-top"
                      />
                    </div>
                    <div className="absolute top-3 left-3 flex items-center gap-1 bg-[#FFF0EE] rounded-lg px-2 py-1 shadow-sm">
                      <StarIcon className="text-primary w-4 h-4" />
                      <span className="text-foreground font-semibold text-sm">4.80</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0 pt-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-foreground font-semibold text-[22px] leading-tight">
                        Токтосунов Бакыт Эрмекович
                      </h3>
                    </div>
                    <div className="text-base mb-5">
                      <p className="text-muted">
                        Невролог{" "}
                        <span className="text-primary">• Нео Клиник</span>
                      </p>
                    </div>

                    <div className="flex flex-col gap-3 text-base text-foreground">
                      <div className="flex items-center gap-2.5">
                        <CalendarIcon className="w-5 h-5 shrink-0 text-primary" />
                        <span>05.10.2026</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <svg className="w-5 h-5 shrink-0 text-primary" viewBox="0 0 20 20" fill="none">
                          <circle cx="10" cy="10" r="7.25" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M10 6v4l2.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>14:00</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <GeoIcon className="w-5 h-5 mt-0.5 shrink-0 [&_path]:stroke-primary" />
                        <span className="flex-1">г. Бишкек, пр. Чуй, 204</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end justify-between shrink-0 pt-1">
                    <div className="flex flex-col items-end gap-2">
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] bg-[#FFF0EE] text-primary hover:bg-[#FFE4DE] active:bg-[#FFE4DE]"
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="size-5">
                          <path
                            d="M10.5 1.5v2.5M5.5 1.5v2.5M2 6.5h12M3.5 3h9A1.5 1.5 0 0 1 14 4.5v4M2 4.5A1.5 1.5 0 0 1 3.5 3M2 4.5v8A1.5 1.5 0 0 0 3.5 14h4.5M11 14.5l3.5-3.5-1.5-1.5L9.5 13v1.5H11z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>Перенести</span>
                      </button>
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] bg-red-50 text-red-500 hover:bg-red-100 active:bg-red-100"
                      >
                        <CloseIcon className="size-5" />
                        <span>Отменить</span>
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="text-secondary text-lg mb-1">Первичный приём невролога</p>
                      <span className="text-foreground font-semibold text-[28px]">
                        1 700 <span className="underline">с</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* ── Запись 2 (очно) — Mobile ── */}
                <div className="md:hidden bg-white rounded-3xl p-3 border border-border">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="relative shrink-0">
                      <div className="relative w-28 h-28 rounded-2xl overflow-hidden bg-primary-tint">
                        <img
                          src="/images/doctors/doctor-5.png"
                          alt="Токтосунов Бакыт Эрмекович"
                          className="absolute inset-0 h-full w-full object-cover object-top"
                        />
                      </div>
                      <div className="absolute top-2 left-2 flex items-center gap-0.5 bg-[#FFF0EE] rounded-md px-1.5 py-0.5 shadow-sm">
                        <StarIcon className="text-primary w-3 h-3" />
                        <span className="text-foreground font-semibold text-xs">4.80</span>
                      </div>
                    </div>

                    <div className="flex-1 min-w-0 pt-0.5">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <h3 className="text-foreground font-semibold text-base leading-tight truncate">
                          Токтосунов Бакыт Эрмекович
                        </h3>
                      </div>
                      <div className="text-sm mb-2.5">
                        <p className="text-muted">
                          Невролог{" "}
                          <span className="text-primary">• Нео Клиник</span>
                        </p>
                      </div>

                      <div className="flex flex-col gap-1.5 text-sm text-secondary">
                        <div className="flex items-center gap-1.5">
                          <CalendarIcon className="w-4 h-4 shrink-0 [&_path]:stroke-secondary" />
                          <span>5 окт 2026 • 14:00</span>
                        </div>
                        <div className="flex items-center gap-1.5 min-w-0">
                          <MedicalServiceIcon className="w-4 h-4 shrink-0 [&_path]:stroke-secondary" />
                          <span className="truncate">
                            Первичный приём невролога{" • "}
                            <span>
                              1 700 <span className="underline">с</span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 text-sm text-secondary flex-1 min-w-0 bg-background px-3 py-2.5 rounded-2xl">
                      <GeoIcon className="w-4 h-4 shrink-0 [&_path]:stroke-secondary" />
                      <span className="flex-1 truncate">г. Бишкек, пр. Чуй, 204</span>
                    </div>

                    <button
                      type="button"
                      aria-label="Перенести запись"
                      className="w-11 h-11 rounded-full border border-border flex items-center justify-center shrink-0 text-primary hover:bg-primary-tint transition-colors"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="w-4.5 h-4.5">
                        <path
                          d="M10.5 1.5v2.5M5.5 1.5v2.5M2 6.5h12M3.5 3h9A1.5 1.5 0 0 1 14 4.5v4M2 4.5A1.5 1.5 0 0 1 3.5 3M2 4.5v8A1.5 1.5 0 0 0 3.5 14h4.5M11 14.5l3.5-3.5-1.5-1.5L9.5 13v1.5H11z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      aria-label="Отменить"
                      className="w-11 h-11 rounded-full border border-border flex items-center justify-center shrink-0 text-primary hover:bg-primary-tint transition-colors"
                    >
                      <CloseIcon className="w-4.5 h-4.5" />
                    </button>
                  </div>
                </div>

                {/* ── Запись 3 (очно) — Desktop ── */}
                <div className="hidden md:flex bg-white rounded-3xl p-5 border border-border gap-5">
                  <div className="relative shrink-0">
                    <div className="relative w-44 h-44 rounded-2xl overflow-hidden bg-primary-tint">
                      <img
                        src="/images/doctors/doctor-7.png"
                        alt="Жумабаева Айнура Талантовна"
                        className="absolute inset-0 h-full w-full object-cover object-top"
                      />
                    </div>
                    <div className="absolute top-3 left-3 flex items-center gap-1 bg-[#FFF0EE] rounded-lg px-2 py-1 shadow-sm">
                      <StarIcon className="text-primary w-4 h-4" />
                      <span className="text-foreground font-semibold text-sm">5.00</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0 pt-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-foreground font-semibold text-[22px] leading-tight">
                        Жумабаева Айнура Талантовна
                      </h3>
                    </div>
                    <div className="text-base mb-5">
                      <p className="text-muted">
                        Стоматолог-терапевт{" "}
                        <span className="text-primary">• Стоматология «Дент Люкс»</span>
                      </p>
                    </div>

                    <div className="flex flex-col gap-3 text-base text-foreground">
                      <div className="flex items-center gap-2.5">
                        <CalendarIcon className="w-5 h-5 shrink-0 text-primary" />
                        <span>12.10.2026</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <svg className="w-5 h-5 shrink-0 text-primary" viewBox="0 0 20 20" fill="none">
                          <circle cx="10" cy="10" r="7.25" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M10 6v4l2.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>09:00</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <GeoIcon className="w-5 h-5 mt-0.5 shrink-0 [&_path]:stroke-primary" />
                        <span className="flex-1">г. Бишкек, ул. Киевская, 95</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end justify-between shrink-0 pt-1">
                    <div className="flex flex-col items-end gap-2">
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] bg-[#FFF0EE] text-primary hover:bg-[#FFE4DE] active:bg-[#FFE4DE]"
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="size-5">
                          <path
                            d="M10.5 1.5v2.5M5.5 1.5v2.5M2 6.5h12M3.5 3h9A1.5 1.5 0 0 1 14 4.5v4M2 4.5A1.5 1.5 0 0 1 3.5 3M2 4.5v8A1.5 1.5 0 0 0 3.5 14h4.5M11 14.5l3.5-3.5-1.5-1.5L9.5 13v1.5H11z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>Перенести</span>
                      </button>
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] bg-red-50 text-red-500 hover:bg-red-100 active:bg-red-100"
                      >
                        <CloseIcon className="size-5" />
                        <span>Отменить</span>
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="text-secondary text-lg mb-1">Лечение кариеса</p>
                      <span className="text-foreground font-semibold text-[28px]">
                        3 200 <span className="underline">с</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* ── Запись 3 (очно) — Mobile ── */}
                <div className="md:hidden bg-white rounded-3xl p-3 border border-border">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="relative shrink-0">
                      <div className="relative w-28 h-28 rounded-2xl overflow-hidden bg-primary-tint">
                        <img
                          src="/images/doctors/doctor-7.png"
                          alt="Жумабаева Айнура Талантовна"
                          className="absolute inset-0 h-full w-full object-cover object-top"
                        />
                      </div>
                      <div className="absolute top-2 left-2 flex items-center gap-0.5 bg-[#FFF0EE] rounded-md px-1.5 py-0.5 shadow-sm">
                        <StarIcon className="text-primary w-3 h-3" />
                        <span className="text-foreground font-semibold text-xs">5.00</span>
                      </div>
                    </div>

                    <div className="flex-1 min-w-0 pt-0.5">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <h3 className="text-foreground font-semibold text-base leading-tight truncate">
                          Жумабаева Айнура Талантовна
                        </h3>
                      </div>
                      <div className="text-sm mb-2.5">
                        <p className="text-muted">
                          Стоматолог-терапевт{" "}
                          <span className="text-primary">• Стоматология «Дент Люкс»</span>
                        </p>
                      </div>

                      <div className="flex flex-col gap-1.5 text-sm text-secondary">
                        <div className="flex items-center gap-1.5">
                          <CalendarIcon className="w-4 h-4 shrink-0 [&_path]:stroke-secondary" />
                          <span>12 окт 2026 • 09:00</span>
                        </div>
                        <div className="flex items-center gap-1.5 min-w-0">
                          <MedicalServiceIcon className="w-4 h-4 shrink-0 [&_path]:stroke-secondary" />
                          <span className="truncate">
                            Лечение кариеса{" • "}
                            <span>
                              3 200 <span className="underline">с</span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 text-sm text-secondary flex-1 min-w-0 bg-background px-3 py-2.5 rounded-2xl">
                      <GeoIcon className="w-4 h-4 shrink-0 [&_path]:stroke-secondary" />
                      <span className="flex-1 truncate">г. Бишкек, ул. Киевская, 95</span>
                    </div>

                    <button
                      type="button"
                      aria-label="Перенести запись"
                      className="w-11 h-11 rounded-full border border-border flex items-center justify-center shrink-0 text-primary hover:bg-primary-tint transition-colors"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="w-4.5 h-4.5">
                        <path
                          d="M10.5 1.5v2.5M5.5 1.5v2.5M2 6.5h12M3.5 3h9A1.5 1.5 0 0 1 14 4.5v4M2 4.5A1.5 1.5 0 0 1 3.5 3M2 4.5v8A1.5 1.5 0 0 0 3.5 14h4.5M11 14.5l3.5-3.5-1.5-1.5L9.5 13v1.5H11z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      aria-label="Отменить"
                      className="w-11 h-11 rounded-full border border-border flex items-center justify-center shrink-0 text-primary hover:bg-primary-tint transition-colors"
                    >
                      <CloseIcon className="w-4.5 h-4.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

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
