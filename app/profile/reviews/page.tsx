import Link from "next/link";

import FacebookIcon from "@/assets/icons/auth/facebook.svg";
import InstagramIcon from "@/assets/icons/auth/instagram.svg";
import LinkedinIcon from "@/assets/icons/auth/linkedin.svg";
import TwitterIcon from "@/assets/icons/auth/twitter.svg";
import ClinicBuildingIcon from "@/assets/icons/common/clinic-building.svg";
import DoctorPersonIcon from "@/assets/icons/common/doctor-person.svg";
import EditIcon from "@/assets/icons/common/edit.svg";
import StarIcon from "@/assets/icons/common/star.svg";
import TrashIcon from "@/assets/icons/common/trash.svg";
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

// Кабинет пациента → «Отзывы», вкладка «Клиники».
// Раскрыты: app/profile/layout.tsx, app/profile/(cabinet)/layout.tsx,
// pages/profile/reviews (MobilePageHeader + FilterTabBar, UserReviewCard, «Показать ещё»).
// Видно первые 2 отзыва (PAGE_SIZE = 2), ниже — кнопка «Показать ещё».
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
                  style={{ top: 144, height: 64 }}
                />

                <Link
                  href="/profile/history"
                  className="flex items-center gap-3 px-4 py-3.5 rounded-2xl relative z-10 hover:bg-surface"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 bg-primary-tint text-primary"
                  >
                    <HistoryIcon className="w-5 h-5" />
                  </div>
                  <span
                    className="font-medium text-base transition-colors duration-200 text-secondary"
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
                  data-active="true"
                  className="flex items-center gap-3 px-4 py-3.5 rounded-2xl relative z-10"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 bg-primary text-white"
                  >
                    <ReviewsIcon className="w-5 h-5" />
                  </div>
                  <span
                    className="font-medium text-base transition-colors duration-200 text-foreground"
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

                <h1 className="text-center font-medium text-base px-2">Отзывы</h1>

                <div className="flex justify-end"></div>
              </div>

              <div className="mt-3">
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide pb-0">
                  <button
                    type="button"
                    className="px-4 py-2.5 rounded-full font-medium text-sm whitespace-nowrap transition-all flex items-center gap-2 shrink-0 bg-primary text-white"
                  >
                    <ClinicBuildingIcon className="shrink-0" />
                    <span>Клиники</span>
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2.5 rounded-full font-medium text-sm whitespace-nowrap transition-all flex items-center gap-2 shrink-0 bg-[#F2F4F7] text-secondary hover:bg-border"
                  >
                    <DoctorPersonIcon className="shrink-0" />
                    <span>Специалисты</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="px-4 pt-6 pb-8 md:p-0">
              {/* Заголовок и переключатель — одной строкой, табы справа (по макету). */}
              <div className="hidden md:flex items-center justify-between gap-4 mb-6">
                <h2 className="text-[28px] md:text-[32px] font-semibold text-foreground">
                  Отзывы
                </h2>
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide pb-0">
                  <button
                    type="button"
                    className="px-4 py-2.5 rounded-full font-medium text-sm whitespace-nowrap transition-all flex items-center gap-2 shrink-0 bg-primary text-white"
                  >
                    <ClinicBuildingIcon className="shrink-0" />
                    <span>Клиники</span>
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2.5 rounded-full font-medium text-sm whitespace-nowrap transition-all flex items-center gap-2 shrink-0 bg-[#F2F4F7] text-secondary hover:bg-border"
                  >
                    <DoctorPersonIcon className="shrink-0" />
                    <span>Специалисты</span>
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {/* Отзыв 1 — с ответом клиники */}
                <div className="bg-white rounded-3xl p-6 border border-border flex flex-col gap-5 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                        <div className="w-full h-full bg-surface flex items-center justify-center text-muted text-lg font-semibold">
                          М
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-foreground font-semibold text-base leading-tight">
                          Медицинский центр «Медиком»
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        aria-label="Редактировать"
                        className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent"
                      >
                        <EditIcon className="w-5 h-5 text-secondary" />
                      </button>
                      <button
                        type="button"
                        aria-label="Удалить"
                        className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent hover:bg-[#FFE5E0] hover:border-[#FFE5E0]"
                      >
                        <TrashIcon className="w-5 h-5 text-primary" />
                      </button>
                    </div>
                  </div>

                  <div className="inline-flex">
                    <div className="inline-flex items-center gap-0.5 px-2.5 py-1.5 rounded-full bg-[#FFA18D]">
                      <StarIcon className="text-white" style={{ width: 20, height: 20 }} />
                      <StarIcon className="text-white" style={{ width: 20, height: 20 }} />
                      <StarIcon className="text-white" style={{ width: 20, height: 20 }} />
                      <StarIcon className="text-white" style={{ width: 20, height: 20 }} />
                      <StarIcon className="text-white" style={{ width: 20, height: 20 }} />
                    </div>
                  </div>

                  <p className="text-secondary text-base leading-relaxed break-words">
                    Проходила здесь полное обследование сердца. Всё организовано
                    очень чётко: без очередей, анализы готовы на следующий день,
                    врачи внимательные и всё подробно объясняют. Отдельное
                    спасибо администраторам за вежливость.
                  </p>

                  <div className="rounded-2xl bg-surface border border-border-soft p-4">
                    <p className="text-foreground font-medium text-sm mb-1">
                      Ответ клиники
                    </p>
                    <p className="text-secondary text-sm leading-relaxed break-words">
                      Айгерим, спасибо за тёплый отзыв! Передадим вашу
                      благодарность команде. Будем рады видеть вас снова.
                    </p>
                    <p className="text-muted text-xs mt-1">22 Августа, 2026</p>
                  </div>

                  <p className="text-muted text-sm">20 Августа, 2026</p>
                </div>

                {/* Отзыв 2 */}
                <div className="bg-white rounded-3xl p-6 border border-border flex flex-col gap-5 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                        <div className="w-full h-full bg-surface flex items-center justify-center text-muted text-lg font-semibold">
                          Н
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-foreground font-semibold text-base leading-tight">
                          Нео Клиник
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        aria-label="Редактировать"
                        className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent"
                      >
                        <EditIcon className="w-5 h-5 text-secondary" />
                      </button>
                      <button
                        type="button"
                        aria-label="Удалить"
                        className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent hover:bg-[#FFE5E0] hover:border-[#FFE5E0]"
                      >
                        <TrashIcon className="w-5 h-5 text-primary" />
                      </button>
                    </div>
                  </div>

                  <div className="inline-flex">
                    <div className="inline-flex items-center gap-0.5 px-2.5 py-1.5 rounded-full bg-[#FFA18D]">
                      <StarIcon className="text-white" style={{ width: 20, height: 20 }} />
                      <StarIcon className="text-white" style={{ width: 20, height: 20 }} />
                      <StarIcon className="text-white" style={{ width: 20, height: 20 }} />
                      <StarIcon className="text-white" style={{ width: 20, height: 20 }} />
                      <StarIcon className="text-white/50" style={{ width: 20, height: 20 }} />
                    </div>
                  </div>

                  <p className="text-secondary text-base leading-relaxed break-words">
                    Хорошая клиника, современное оборудование. Немного пришлось
                    подождать приёма — примерно двадцать минут сверх записи, но
                    сама консультация невролога понравилась.
                  </p>

                  <p className="text-muted text-sm">3 Июля, 2026</p>
                </div>
              </div>

              <div className="flex justify-center mt-4">
                <button
                  type="button"
                  className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-8 text-xs px-4 relative after:absolute after:inset-x-0 after:-inset-y-2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent"
                >
                  <span>Показать ещё</span>
                </button>
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
