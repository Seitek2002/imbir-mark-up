// Все интервью (app/videos). В оригинале fetchInterviews(24) — здесь 12 карточек VideoCard
// (widgets/videos-swiper), ссылки ведут на YouTube в новой вкладке.

import Link from "next/link";

import FacebookIcon from "@/assets/icons/auth/facebook.svg";
import InstagramIcon from "@/assets/icons/auth/instagram.svg";
import LinkedinIcon from "@/assets/icons/auth/linkedin.svg";
import TwitterIcon from "@/assets/icons/auth/twitter.svg";
import HeaderBackIcon from "@/assets/icons/header/back-arrow.svg";
import ChatIcon from "@/assets/icons/header/chat.svg";
import GeoBtnArrowIcon from "@/assets/icons/header/geo-btn-arrow.svg";
import GeoIcon from "@/assets/icons/header/geo.svg";
import Logo from "@/assets/icons/header/logo.svg";
import ProfileIcon from "@/assets/icons/header/profile.svg";
import SearchIcon from "@/assets/icons/header/search.svg";

export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-background flex flex-col">
        <header className="px-4 pt-1 pb-4 bg-white md:border md:border-border-soft md:mt-6 md:py-3 w-full max-w-360 md:max-w-340 mx-auto border-b border-border-soft md:rounded-full">
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
              <div className="grid grid-cols-3 items-center min-h-10">
                <div>
                  <Link
                    href="/"
                    aria-label="Вернуться назад"
                    className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent"
                  >
                    <HeaderBackIcon className="size-4" />
                  </Link>
                </div>
                <h2 className="text-center font-medium text-base px-2">Интервью</h2>
                <div className="flex justify-end">
                  {/* Место для иконки справа, если понадобится */}
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 w-full max-w-360 mx-auto px-4 md:px-10 py-10">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Интервью с врачами
            </h1>
            <p className="text-secondary text-base md:text-lg">
              Наши специалисты делятся знаниями, советами и отвечают на частые
              вопросы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
                  alt="Мигрень: когда головная боль — повод идти к врачу"
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
                  Мигрень: когда головная боль — повод идти к врачу
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
                  <span className="truncate text-[#313A45]">Токтогулов Эрлан</span>
                  <span className="shrink-0">•</span>
                  <span className="truncate">Невролог</span>
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
                  alt="Планирование беременности: с чего начать"
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
                  Планирование беременности: с чего начать
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
                  <span className="truncate text-[#313A45]">Жумабаева Назгуль</span>
                  <span className="shrink-0">•</span>
                  <span className="truncate">Гинеколог</span>
                </div>
              </div>
            </a>
            {/* Интервью 4 */}
            <a
              href="https://www.youtube.com/watch?v=imbir-int-04"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-3xl border border-[#D8DCE0] p-2 flex flex-col w-full h-auto md:h-89.25 shrink-0 hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300"
            >
              <div className="relative w-full aspect-video md:aspect-auto md:h-55 shrink-0 overflow-hidden rounded-2xl bg-background">
                <img
                  src="/images/videos/video-1.jpg"
                  alt="Как часто нужно ходить к стоматологу взрослым и детям"
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
                  Как часто нужно ходить к стоматологу взрослым и детям
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
                  <span className="truncate text-[#313A45]">Осмонов Бакыт</span>
                  <span className="shrink-0">•</span>
                  <span className="truncate">Стоматолог</span>
                </div>
              </div>
            </a>
            {/* Интервью 5 */}
            <a
              href="https://www.youtube.com/watch?v=imbir-int-05"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-3xl border border-[#D8DCE0] p-2 flex flex-col w-full h-auto md:h-89.25 shrink-0 hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300"
            >
              <div className="relative w-full aspect-video md:aspect-auto md:h-55 shrink-0 overflow-hidden rounded-2xl bg-background">
                <img
                  src="/images/videos/video-2.jpg"
                  alt="Сидим за компьютером: как не испортить зрение"
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
                  Сидим за компьютером: как не испортить зрение
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
                  <span className="truncate text-[#313A45]">Садыкова Жибек</span>
                  <span className="shrink-0">•</span>
                  <span className="truncate">Офтальмолог</span>
                </div>
              </div>
            </a>
            {/* Интервью 6 */}
            <a
              href="https://www.youtube.com/watch?v=imbir-int-06"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-3xl border border-[#D8DCE0] p-2 flex flex-col w-full h-auto md:h-89.25 shrink-0 hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300"
            >
              <div className="relative w-full aspect-video md:aspect-auto md:h-55 shrink-0 overflow-hidden rounded-2xl bg-background">
                <img
                  src="/images/videos/video-3.jpg"
                  alt="Хронический тонзиллит: удалять миндалины или лечить"
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
                  Хронический тонзиллит: удалять миндалины или лечить
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
                  <span className="truncate text-[#313A45]">Мамытов Азамат</span>
                  <span className="shrink-0">•</span>
                  <span className="truncate">Оториноларинголог</span>
                </div>
              </div>
            </a>
            {/* Интервью 7 */}
            <a
              href="https://www.youtube.com/watch?v=imbir-int-07"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-3xl border border-[#D8DCE0] p-2 flex flex-col w-full h-auto md:h-89.25 shrink-0 hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300"
            >
              <div className="relative w-full aspect-video md:aspect-auto md:h-55 shrink-0 overflow-hidden rounded-2xl bg-background">
                <img
                  src="/images/videos/video-1.jpg"
                  alt="Изжога и гастрит: что можно есть и чего избегать"
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
                  Изжога и гастрит: что можно есть и чего избегать
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
                  <span className="truncate text-[#313A45]">Ибраимова Динара</span>
                  <span className="shrink-0">•</span>
                  <span className="truncate">Гастроэнтеролог</span>
                </div>
              </div>
            </a>
            {/* Интервью 8 */}
            <a
              href="https://www.youtube.com/watch?v=imbir-int-08"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-3xl border border-[#D8DCE0] p-2 flex flex-col w-full h-auto md:h-89.25 shrink-0 hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300"
            >
              <div className="relative w-full aspect-video md:aspect-auto md:h-55 shrink-0 overflow-hidden rounded-2xl bg-background">
                <img
                  src="/images/videos/video-2.jpg"
                  alt="Кашель после ОРВИ: когда пора сделать рентген"
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
                  Кашель после ОРВИ: когда пора сделать рентген
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
                  <span className="truncate text-[#313A45]">Кадыров Руслан</span>
                  <span className="shrink-0">•</span>
                  <span className="truncate">Пульмонолог</span>
                </div>
              </div>
            </a>
            {/* Интервью 9 */}
            <a
              href="https://www.youtube.com/watch?v=imbir-int-09"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-3xl border border-[#D8DCE0] p-2 flex flex-col w-full h-auto md:h-89.25 shrink-0 hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300"
            >
              <div className="relative w-full aspect-video md:aspect-auto md:h-55 shrink-0 overflow-hidden rounded-2xl bg-background">
                <img
                  src="/images/videos/video-3.jpg"
                  alt="Щитовидная железа: какие анализы сдавать раз в год"
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
                  Щитовидная железа: какие анализы сдавать раз в год
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
                  <span className="truncate text-[#313A45]">Кенжебаева Айжан</span>
                  <span className="shrink-0">•</span>
                  <span className="truncate">Эндокринолог</span>
                </div>
              </div>
            </a>
            {/* Интервью 10 */}
            <a
              href="https://www.youtube.com/watch?v=imbir-int-10"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-3xl border border-[#D8DCE0] p-2 flex flex-col w-full h-auto md:h-89.25 shrink-0 hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300"
            >
              <div className="relative w-full aspect-video md:aspect-auto md:h-55 shrink-0 overflow-hidden rounded-2xl bg-background">
                <img
                  src="/images/videos/video-1.jpg"
                  alt="Прививки для взрослых: какие нужны и зачем"
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
                  Прививки для взрослых: какие нужны и зачем
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
                  <span className="truncate text-[#313A45]">Абдыкадырова Эльмира</span>
                  <span className="shrink-0">•</span>
                  <span className="truncate">Терапевт</span>
                </div>
              </div>
            </a>
            {/* Интервью 11 */}
            <a
              href="https://www.youtube.com/watch?v=imbir-int-11"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-3xl border border-[#D8DCE0] p-2 flex flex-col w-full h-auto md:h-89.25 shrink-0 hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300"
            >
              <div className="relative w-full aspect-video md:aspect-auto md:h-55 shrink-0 overflow-hidden rounded-2xl bg-background">
                <img
                  src="/images/videos/video-2.jpg"
                  alt="Температура у ребёнка: когда сбивать и когда вызывать врача"
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
                  Температура у ребёнка: когда сбивать и когда вызывать врача
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
                  <span className="truncate text-[#313A45]">Сатыбалдиева Гульнара</span>
                  <span className="shrink-0">•</span>
                  <span className="truncate">Педиатр</span>
                </div>
              </div>
            </a>
            {/* Интервью 12 */}
            <a
              href="https://www.youtube.com/watch?v=imbir-int-12"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-3xl border border-[#D8DCE0] p-2 flex flex-col w-full h-auto md:h-89.25 shrink-0 hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300"
            >
              <div className="relative w-full aspect-video md:aspect-auto md:h-55 shrink-0 overflow-hidden rounded-2xl bg-background">
                <img
                  src="/images/videos/video-3.jpg"
                  alt="Родинки и солнце: как вовремя заметить опасные изменения"
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
                  Родинки и солнце: как вовремя заметить опасные изменения
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
                  <span className="truncate text-[#313A45]">Исмаилов Тимур</span>
                  <span className="shrink-0">•</span>
                  <span className="truncate">Дерматолог</span>
                </div>
              </div>
            </a>
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
      </main>
    </>
  );
}
