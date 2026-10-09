import Link from "next/link";

import FacebookIcon from "@/assets/icons/auth/facebook.svg";
import InstagramIcon from "@/assets/icons/auth/instagram.svg";
import LinkedinIcon from "@/assets/icons/auth/linkedin.svg";
import TwitterIcon from "@/assets/icons/auth/twitter.svg";
import StarIcon from "@/assets/icons/common/star.svg";
import HeaderBackIcon from "@/assets/icons/header/back-arrow.svg";
import ChatIcon from "@/assets/icons/header/chat.svg";
import GeoBtnArrowIcon from "@/assets/icons/header/geo-btn-arrow.svg";
import GeoIcon from "@/assets/icons/header/geo.svg";
import Logo from "@/assets/icons/header/logo.svg";
import ProfileIcon from "@/assets/icons/header/profile.svg";
import SearchIcon from "@/assets/icons/header/search.svg";

// Все отзывы о клинике (pages/reviews-all, targetType="clinic").
// Состояние: гость — вместо формы плашка-ссылка «Войдите, чтобы оставить отзыв».
// (Вариант авторизованного пользователя с формой ReviewForm — на /specialists/[id]/reviews.)
export default function Page() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
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
        </header>
      </div>
      <div className="md:hidden">
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
                    href="/clinics/1"
                    aria-label="Вернуться назад"
                    className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent"
                  >
                    <HeaderBackIcon className="size-4" />
                  </Link>
                </div>
                <h2 className="text-center font-medium text-base px-2">
                  Отзывы
                </h2>
                <div className="flex justify-end"></div>
              </div>
            </div>
          </div>
        </header>
      </div>

      <div className="flex-1 w-full max-w-350 mx-auto px-4 md:px-8 pt-4 md:pt-6 pb-10">
        <Link
          href="/clinics/1"
          className="hidden md:inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors mb-6"
        >
          <HeaderBackIcon className="size-4" />
          <span className="text-sm font-medium">Назад</span>
        </Link>

        <h1 className="hidden md:block text-[32px] font-semibold text-foreground">
          Отзывы
        </h1>
        <p className="text-muted mt-1 md:mt-1">
          о клинике{" "}
          <span className="text-foreground font-medium">Медицинский центр «Медиком»</span>
        </p>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 mt-6">
          <div className="w-full lg:w-80 shrink-0 flex flex-col gap-5 lg:sticky lg:top-6 lg:self-start">
            <div className="flex gap-4">
              <div className="flex-1 bg-white border border-border-soft rounded-2xl p-5 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="bg-[#FFA18D] p-2.5 rounded-xl size-10 flex items-center justify-center shrink-0">
                    <StarIcon className="size-5 text-white" />
                  </div>
                  <span className="text-[24px] font-semibold text-foreground">
                    <span>4.80</span>
                  </span>
                </div>
                <span className="text-muted text-sm">Средняя оценка</span>
              </div>
              <div className="flex-1 bg-white border border-border-soft rounded-2xl p-5 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="bg-[#FFA18D] p-2.5 rounded-xl size-10 flex items-center justify-center shrink-0">
                    <ChatIcon className="size-5 text-white" />
                  </div>
                  <span className="text-[24px] font-semibold text-foreground">
                    <span>312</span>
                  </span>
                </div>
                <span className="text-muted text-sm">Всего отзывов</span>
              </div>
            </div>

            <Link
              href="/login"
              className="bg-white border border-border-soft rounded-2xl p-5 text-center hover:border-primary transition-colors"
            >
              <p className="text-foreground font-medium">
                Войдите, чтобы оставить отзыв
              </p>
              <p className="text-muted text-sm mt-1">
                Отзывы можно оставлять только из аккаунта
              </p>
            </Link>
          </div>

          <div className="flex-1 min-w-0 flex flex-col gap-4">
            {/* Отзыв 1 */}
            <div className="bg-white border border-border-soft rounded-[20px] flex flex-col min-w-0">
              <div className="p-5 border-b border-border-soft">
                <p className="text-secondary text-[15px] leading-relaxed break-words">
                  Проходила здесь полный чекап за один день: анализы, УЗИ, ЭКГ и консультация терапевта. Всё чётко по времени, администраторы сами провожали из кабинета в кабинет. Результаты пришли в личный кабинет уже вечером.
                </p>
                <div className="mt-3 rounded-2xl bg-surface border border-border-soft p-3">
                  <p className="text-foreground font-medium text-sm mb-1">Ответ</p>
                  <p className="text-secondary text-sm leading-relaxed break-words">
                    Гульнара, спасибо за тёплые слова! Будем рады видеть вас снова.
                  </p>
                  <p className="text-muted text-xs mt-1">2026-09-19</p>
                </div>
              </div>
              <div className="p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-10.5 rounded-full bg-[#FFF0EE] shrink-0 overflow-hidden relative flex items-center justify-center">
                    <span className="text-primary font-semibold">Г</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-foreground font-medium text-base">Гульнара Сыдыкова</span>
                    <span className="text-muted text-sm mt-0.5">2026-09-18</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <div className="flex items-center bg-[#FFA18D] py-1.5 px-2.5 rounded-full gap-0.5">
                    <StarIcon className="size-3.5 text-white" />
                    <StarIcon className="size-3.5 text-white" />
                    <StarIcon className="size-3.5 text-white" />
                    <StarIcon className="size-3.5 text-white" />
                    <StarIcon className="size-3.5 text-white" />
                  </div>
                </div>
              </div>
            </div>
            {/* Отзыв 2 */}
            <div className="bg-white border border-border-soft rounded-[20px] flex flex-col min-w-0">
              <div className="p-5 border-b border-border-soft">
                <p className="text-secondary text-[15px] leading-relaxed break-words">
                  Хорошая клиника, современное оборудование, врачи внимательные. Минус один — сложно припарковаться рядом, особенно в будни после обеда.
                </p>
              </div>
              <div className="p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-10.5 rounded-full bg-[#FFF0EE] shrink-0 overflow-hidden relative flex items-center justify-center">
                    <span className="text-primary font-semibold">Б</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-foreground font-medium text-base">Бекзат Абдыкалыков</span>
                    <span className="text-muted text-sm mt-0.5">2026-09-10</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <div className="flex items-center bg-[#FFA18D] py-1.5 px-2.5 rounded-full gap-0.5">
                    <StarIcon className="size-3.5 text-white" />
                    <StarIcon className="size-3.5 text-white" />
                    <StarIcon className="size-3.5 text-white" />
                    <StarIcon className="size-3.5 text-white" />
                    <StarIcon className="size-3.5 text-white/50" />
                  </div>
                </div>
              </div>
            </div>
            {/* Отзыв 3 */}
            <div className="bg-white border border-border-soft rounded-[20px] flex flex-col min-w-0">
              <div className="p-5 border-b border-border-soft">
                <p className="text-secondary text-[15px] leading-relaxed break-words">
                  Водила дочку к неврологу и лору в один день. Детей здесь принимают без очередей, в холле есть игровой уголок. Остались очень довольны.
                </p>
              </div>
              <div className="p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-10.5 rounded-full bg-[#FFF0EE] shrink-0 overflow-hidden relative flex items-center justify-center">
                    <img src="/images/hero/avatar.png" alt="Айпери Жолдошева" className="absolute inset-0 h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-foreground font-medium text-base">Айпери Жолдошева</span>
                    <span className="text-muted text-sm mt-0.5">2026-08-29</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <div className="flex items-center bg-[#FFA18D] py-1.5 px-2.5 rounded-full gap-0.5">
                    <StarIcon className="size-3.5 text-white" />
                    <StarIcon className="size-3.5 text-white" />
                    <StarIcon className="size-3.5 text-white" />
                    <StarIcon className="size-3.5 text-white" />
                    <StarIcon className="size-3.5 text-white" />
                  </div>
                </div>
              </div>
            </div>
            {/* Отзыв 4 */}
            <div className="bg-white border border-border-soft rounded-[20px] flex flex-col min-w-0">
              <div className="p-5 border-b border-border-soft">
                <p className="text-secondary text-[15px] leading-relaxed break-words">
                  Сам приём понравился, но пришлось подождать около 30 минут сверх назначенного времени. Хотелось бы, чтобы предупреждали о задержке заранее.
                </p>
                <div className="mt-3 rounded-2xl bg-surface border border-border-soft p-3">
                  <p className="text-foreground font-medium text-sm mb-1">Ответ</p>
                  <p className="text-secondary text-sm leading-relaxed break-words">
                    Марат, приносим извинения за ожидание. Мы добавили SMS-уведомления о сдвиге времени приёма.
                  </p>
                  <p className="text-muted text-xs mt-1">2026-08-15</p>
                </div>
              </div>
              <div className="p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-10.5 rounded-full bg-[#FFF0EE] shrink-0 overflow-hidden relative flex items-center justify-center">
                    <span className="text-primary font-semibold">М</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-foreground font-medium text-base">Марат Исаков</span>
                    <span className="text-muted text-sm mt-0.5">2026-08-14</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <div className="flex items-center bg-[#FFA18D] py-1.5 px-2.5 rounded-full gap-0.5">
                    <StarIcon className="size-3.5 text-white" />
                    <StarIcon className="size-3.5 text-white" />
                    <StarIcon className="size-3.5 text-white" />
                    <StarIcon className="size-3.5 text-white/50" />
                    <StarIcon className="size-3.5 text-white/50" />
                  </div>
                </div>
              </div>
            </div>
            {/* Отзыв 5 */}
            <div className="bg-white border border-border-soft rounded-[20px] flex flex-col min-w-0">
              <div className="p-5 border-b border-border-soft">
                <p className="text-secondary text-[15px] leading-relaxed break-words">
                  Сдавала анализы в лаборатории клиники — медсестра очень аккуратно берёт кровь, совсем не больно. Цены адекватные, всё прозрачно.
                </p>
              </div>
              <div className="p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-10.5 rounded-full bg-[#FFF0EE] shrink-0 overflow-hidden relative flex items-center justify-center">
                    <span className="text-primary font-semibold">Е</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-foreground font-medium text-base">Елена Ким</span>
                    <span className="text-muted text-sm mt-0.5">2026-07-30</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <div className="flex items-center bg-[#FFA18D] py-1.5 px-2.5 rounded-full gap-0.5">
                    <StarIcon className="size-3.5 text-white" />
                    <StarIcon className="size-3.5 text-white" />
                    <StarIcon className="size-3.5 text-white" />
                    <StarIcon className="size-3.5 text-white" />
                    <StarIcon className="size-3.5 text-white" />
                  </div>
                </div>
              </div>
            </div>
            {/* Отзыв 6 */}
            <div className="bg-white border border-border-soft rounded-[20px] flex flex-col min-w-0">
              <div className="p-5 border-b border-border-soft">
                <p className="text-secondary text-[15px] leading-relaxed break-words">
                  Делал МРТ и сразу попал на консультацию к неврологу в тот же день. Удобно, что всё в одном здании и не нужно бегать по городу.
                </p>
              </div>
              <div className="p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-10.5 rounded-full bg-[#FFF0EE] shrink-0 overflow-hidden relative flex items-center justify-center">
                    <span className="text-primary font-semibold">А</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-foreground font-medium text-base">Азиз Нурматов</span>
                    <span className="text-muted text-sm mt-0.5">2026-07-15</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <div className="flex items-center bg-[#FFA18D] py-1.5 px-2.5 rounded-full gap-0.5">
                    <StarIcon className="size-3.5 text-white" />
                    <StarIcon className="size-3.5 text-white" />
                    <StarIcon className="size-3.5 text-white" />
                    <StarIcon className="size-3.5 text-white" />
                    <StarIcon className="size-3.5 text-white" />
                  </div>
                </div>
              </div>
            </div>
            {/* Отзыв 7 */}
            <div className="bg-white border border-border-soft rounded-[20px] flex flex-col min-w-0">
              <div className="p-5 border-b border-border-soft">
                <p className="text-secondary text-[15px] leading-relaxed break-words">
                  Чисто, уютно, персонал вежливый. Цены чуть выше среднего по городу, но качество обслуживания того стоит.
                </p>
                <div className="mt-3 rounded-2xl bg-surface border border-border-soft p-3">
                  <p className="text-foreground font-medium text-sm mb-1">Ответ</p>
                  <p className="text-secondary text-sm leading-relaxed break-words">
                    Салтанат, спасибо! Напоминаем, что по будням до 10:00 действует скидка 10% на анализы.
                  </p>
                  <p className="text-muted text-xs mt-1">2026-07-03</p>
                </div>
              </div>
              <div className="p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-10.5 rounded-full bg-[#FFF0EE] shrink-0 overflow-hidden relative flex items-center justify-center">
                    <span className="text-primary font-semibold">С</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-foreground font-medium text-base">Салтанат Бообекова</span>
                    <span className="text-muted text-sm mt-0.5">2026-07-02</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <div className="flex items-center bg-[#FFA18D] py-1.5 px-2.5 rounded-full gap-0.5">
                    <StarIcon className="size-3.5 text-white" />
                    <StarIcon className="size-3.5 text-white" />
                    <StarIcon className="size-3.5 text-white" />
                    <StarIcon className="size-3.5 text-white" />
                    <StarIcon className="size-3.5 text-white/50" />
                  </div>
                </div>
              </div>
            </div>
            {/* Отзыв 8 */}
            <div className="bg-white border border-border-soft rounded-[20px] flex flex-col min-w-0">
              <div className="p-5 border-b border-border-soft">
                <p className="text-secondary text-[15px] leading-relaxed break-words">
                  Записался онлайн, но в регистратуре мою запись не нашли, пришлось ждать свободного окна почти час. Врач хороший, а вот администрирование подводит.
                </p>
                <div className="mt-3 rounded-2xl bg-surface border border-border-soft p-3">
                  <p className="text-foreground font-medium text-sm mb-1">Ответ</p>
                  <p className="text-secondary text-sm leading-relaxed break-words">
                    Игорь, приносим извинения. Мы разобрались в ситуации — сбой синхронизации расписания уже устранён.
                  </p>
                  <p className="text-muted text-xs mt-1">2026-06-22</p>
                </div>
              </div>
              <div className="p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-10.5 rounded-full bg-[#FFF0EE] shrink-0 overflow-hidden relative flex items-center justify-center">
                    <span className="text-primary font-semibold">И</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-foreground font-medium text-base">Игорь Шевченко</span>
                    <span className="text-muted text-sm mt-0.5">2026-06-21</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <div className="flex items-center bg-[#FFA18D] py-1.5 px-2.5 rounded-full gap-0.5">
                    <StarIcon className="size-3.5 text-white" />
                    <StarIcon className="size-3.5 text-white" />
                    <StarIcon className="size-3.5 text-white/50" />
                    <StarIcon className="size-3.5 text-white/50" />
                    <StarIcon className="size-3.5 text-white/50" />
                  </div>
                </div>
              </div>
            </div>
            <div />
          </div>
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
  );
}
