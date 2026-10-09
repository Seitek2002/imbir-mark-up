// Каталог услуг (pages/services). Первая страница выдачи — 8 услуг (PAGE_SIZE = 8), дальше «Показать ещё».
// Фильтры не выбраны: у дропдаунов value="" — поэтому «Все» серым (text-muted), как в оригинале.
// Кнопка фильтров на мобильном открывает ?modal=filters (отдельной страницы для услуг нет — просто кнопка).

import Link from "next/link";

import FacebookIcon from "@/assets/icons/auth/facebook.svg";
import InstagramIcon from "@/assets/icons/auth/instagram.svg";
import LinkedinIcon from "@/assets/icons/auth/linkedin.svg";
import TwitterIcon from "@/assets/icons/auth/twitter.svg";
import HeartIcon from "@/assets/icons/cards/heart.svg";
import StarIcon from "@/assets/icons/common/star.svg";
import DropdownArrowIcon from "@/assets/icons/dropdown/arrow.svg";
import HeaderBackIcon from "@/assets/icons/header/back-arrow.svg";
import ChatIcon from "@/assets/icons/header/chat.svg";
import FilterSample from "@/assets/icons/header/filter-sample.svg";
import GeoBtnArrowIcon from "@/assets/icons/header/geo-btn-arrow.svg";
import GeoIcon from "@/assets/icons/header/geo.svg";
import Logo from "@/assets/icons/header/logo.svg";
import ProfileIcon from "@/assets/icons/header/profile.svg";
import RemoveIcon from "@/assets/icons/header/remove.svg";
import SearchIcon from "@/assets/icons/header/search.svg";

export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-background md:bg-white flex flex-col">
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
                <h2 className="text-center font-medium text-base px-2">Услуги</h2>
                <div className="flex justify-end">
                  {/* Место для иконки справа, если понадобится */}
                </div>
              </div>
              <div className="mt-4">
                <div className="flex gap-3 items-center mt-3 md:mt-0 md:block">
                  <div className="flex-1">
                    <label className="flex flex-col gap-1.5">
                      <div className="relative w-full">
                        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-foreground" />

                        <input
                          type="text"
                          placeholder="Поиск услуги"
                          className="text-base leading-0 border border-border-soft text-foreground py-2.25 px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background pl-10 w-full rounded-full bg-white"
                        />
                      </div>
                    </label>
                  </div>
                  <div className="md:hidden">
                    <button
                      type="button"
                      aria-label="Открыть фильтры"
                      className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent"
                    >
                      <FilterSample />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 w-full max-w-360 mx-auto pb-10">
          {/* Mobile */}
          <div className="md:hidden p-4">
            <div className="flex flex-col gap-2 transition-opacity">
              {/* Услуга (horizontal) 1 */}
              <Link
                href="/record?service=101"
                className="bg-white rounded-3xl p-4 flex items-center gap-4 border border-border cursor-pointer hover:border-primary/40 transition-colors"
              >
                <div className="relative w-28 h-28 rounded-2xl overflow-hidden bg-[#FFF2F0] flex items-center justify-center shrink-0">
                  <img
                    src="/images/clinics/clinic-2.png"
                    alt="УЗИ органов брюшной полости"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0 flex flex-col self-stretch">
                  <h3 className="text-foreground font-semibold text-base leading-snug line-clamp-2 mb-1">
                    УЗИ органов брюшной полости
                  </h3>

                  <p className="text-muted text-xs mb-1">
                    Ультразвуковая диагностика
                    <span className="text-primary"> • Диагностический центр «Интермед»</span>
                  </p>

                  <div className="flex items-center gap-1 mb-2 text-xs">
                    <StarIcon className="w-3.5 h-3.5 text-primary" />
                    <span className="text-primary font-medium">4.80</span>
                    <span className="text-secondary">(132)</span>
                  </div>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                    <span className="text-foreground font-bold text-base whitespace-nowrap">
                      1200 с
                    </span>
                    <div className="flex items-center gap-2 ml-auto">
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-8 relative after:absolute after:inset-x-0 after:-inset-y-2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent px-4 py-1.5 text-xs"
                      >
                        <span>Записаться</span>
                      </button>
                      <button
                        type="button"
                        aria-label="Добавить в избранное"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <HeartIcon className="w-6 h-6 text-primary" />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
              {/* Услуга (horizontal) 2 */}
              <Link
                href="/record?service=102"
                className="bg-white rounded-3xl p-4 flex items-center gap-4 border border-border cursor-pointer hover:border-primary/40 transition-colors"
              >
                <div className="relative w-28 h-28 rounded-2xl overflow-hidden bg-[#FFF2F0] flex items-center justify-center shrink-0">
                  <img
                    src="/images/clinics/clinic-1.png"
                    alt="Консультация кардиолога с ЭКГ"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0 flex flex-col self-stretch">
                  <h3 className="text-foreground font-semibold text-base leading-snug line-clamp-2 mb-1">
                    Консультация кардиолога с ЭКГ
                  </h3>

                  <p className="text-muted text-xs mb-1">
                    Кардиология
                    <span className="text-primary"> • Медиком</span>
                  </p>

                  <div className="flex items-center gap-1 mb-2 text-xs">
                    <StarIcon className="w-3.5 h-3.5 text-primary" />
                    <span className="text-primary font-medium">4.90</span>
                    <span className="text-secondary">(88)</span>
                  </div>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                    <span className="text-foreground font-bold text-base whitespace-nowrap">
                      2000 с
                    </span>
                    <div className="flex items-center gap-2 ml-auto">
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-8 relative after:absolute after:inset-x-0 after:-inset-y-2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent px-4 py-1.5 text-xs"
                      >
                        <span>Записаться</span>
                      </button>
                      <button
                        type="button"
                        aria-label="Добавить в избранное"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <HeartIcon className="w-6 h-6 text-primary" />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
              {/* Услуга (horizontal) 3 */}
              <Link
                href="/record?service=103"
                className="bg-white rounded-3xl p-4 flex items-center gap-4 border border-border cursor-pointer hover:border-primary/40 transition-colors"
              >
                <div className="relative w-28 h-28 rounded-2xl overflow-hidden bg-[#FFF2F0] flex items-center justify-center shrink-0">
                  <img
                    src="/images/clinics/clinic-4.png"
                    alt="Профессиональная чистка зубов Air Flow"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0 flex flex-col self-stretch">
                  <h3 className="text-foreground font-semibold text-base leading-snug line-clamp-2 mb-1">
                    Профессиональная чистка зубов Air Flow
                  </h3>

                  <p className="text-muted text-xs mb-1">
                    Стоматология
                    <span className="text-primary"> • Стоматология «Smile Pro»</span>
                  </p>

                  <div className="flex items-center gap-1 mb-2 text-xs">
                    <StarIcon className="w-3.5 h-3.5 text-primary" />
                    <span className="text-primary font-medium">4.95</span>
                    <span className="text-secondary">(214)</span>
                  </div>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                    <span className="text-foreground font-bold text-base whitespace-nowrap">
                      3500 с
                    </span>
                    <div className="flex items-center gap-2 ml-auto">
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-8 relative after:absolute after:inset-x-0 after:-inset-y-2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent px-4 py-1.5 text-xs"
                      >
                        <span>Записаться</span>
                      </button>
                      <button
                        type="button"
                        aria-label="Добавить в избранное"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <HeartIcon className="w-6 h-6 text-primary" />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
              {/* Услуга (horizontal) 4 */}
              <Link
                href="/record?service=104"
                className="bg-white rounded-3xl p-4 flex items-center gap-4 border border-border cursor-pointer hover:border-primary/40 transition-colors"
              >
                <div className="relative w-28 h-28 rounded-2xl overflow-hidden bg-[#FFF2F0] flex items-center justify-center shrink-0">
                  <span className="text-primary text-2xl font-bold uppercase">
                    ОБ
                  </span>
                </div>

                <div className="flex-1 min-w-0 flex flex-col self-stretch">
                  <h3 className="text-foreground font-semibold text-base leading-snug line-clamp-2 mb-1">
                    Общий анализ крови
                  </h3>

                  <p className="text-muted text-xs mb-1">
                    Лабораторная диагностика
                    <span className="text-primary"> • Лаборатория «Диамед»</span>
                  </p>

                  <div className="flex items-center gap-1 mb-2 text-xs">
                    <StarIcon className="w-3.5 h-3.5 text-primary" />
                    <span className="text-primary font-medium">4.70</span>
                    <span className="text-secondary">(57)</span>
                  </div>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                    <span className="text-foreground font-bold text-base whitespace-nowrap">
                      450 с
                    </span>
                    <div className="flex items-center gap-2 ml-auto">
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-8 relative after:absolute after:inset-x-0 after:-inset-y-2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent px-4 py-1.5 text-xs"
                      >
                        <span>Записаться</span>
                      </button>
                      <button
                        type="button"
                        aria-label="Добавить в избранное"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <HeartIcon className="w-6 h-6 text-primary" />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
              {/* Услуга (horizontal) 5 */}
              <Link
                href="/record?service=105"
                className="bg-white rounded-3xl p-4 flex items-center gap-4 border border-border cursor-pointer hover:border-primary/40 transition-colors"
              >
                <div className="relative w-28 h-28 rounded-2xl overflow-hidden bg-[#FFF2F0] flex items-center justify-center shrink-0">
                  <img
                    src="/images/clinics/clinic-3.png"
                    alt="МРТ головного мозга"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0 flex flex-col self-stretch">
                  <h3 className="text-foreground font-semibold text-base leading-snug line-clamp-2 mb-1">
                    МРТ головного мозга
                  </h3>

                  <p className="text-muted text-xs mb-1">
                    Лучевая диагностика
                    <span className="text-primary"> • Кыргызско-Турецкая клиника</span>
                  </p>

                  <div className="flex items-center gap-1 mb-2 text-xs">
                    <StarIcon className="w-3.5 h-3.5 text-primary" />
                    <span className="text-primary font-medium">4.85</span>
                    <span className="text-secondary">(76)</span>
                  </div>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                    <span className="text-foreground font-bold text-base whitespace-nowrap">
                      6500 с
                    </span>
                    <div className="flex items-center gap-2 ml-auto">
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-8 relative after:absolute after:inset-x-0 after:-inset-y-2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent px-4 py-1.5 text-xs"
                      >
                        <span>Записаться</span>
                      </button>
                      <button
                        type="button"
                        aria-label="Добавить в избранное"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <HeartIcon className="w-6 h-6 text-primary" />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
              {/* Услуга (horizontal) 6 */}
              <Link
                href="/record?service=106"
                className="bg-white rounded-3xl p-4 flex items-center gap-4 border border-border cursor-pointer hover:border-primary/40 transition-colors"
              >
                <div className="relative w-28 h-28 rounded-2xl overflow-hidden bg-[#FFF2F0] flex items-center justify-center shrink-0">
                  <span className="text-primary text-2xl font-bold uppercase">
                    ПР
                  </span>
                </div>

                <div className="flex-1 min-w-0 flex flex-col self-stretch">
                  <h3 className="text-foreground font-semibold text-base leading-snug line-clamp-2 mb-1">
                    Проверка остроты зрения и подбор очков
                  </h3>

                  <p className="text-muted text-xs mb-1">
                    Офтальмология
                    <span className="text-primary"> • Глазная клиника «Оптимед»</span>
                  </p>

                  <div className="flex items-center gap-1 mb-2 text-xs">
                    <StarIcon className="w-3.5 h-3.5 text-primary" />
                    <span className="text-primary font-medium">4.60</span>
                    <span className="text-secondary">(43)</span>
                  </div>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                    <span className="text-foreground font-bold text-base whitespace-nowrap">
                      800 с
                    </span>
                    <div className="flex items-center gap-2 ml-auto">
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-8 relative after:absolute after:inset-x-0 after:-inset-y-2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent px-4 py-1.5 text-xs"
                      >
                        <span>Записаться</span>
                      </button>
                      <button
                        type="button"
                        aria-label="Добавить в избранное"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <HeartIcon className="w-6 h-6 text-primary" />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
              {/* Услуга (horizontal) 7 */}
              <Link
                href="/record?service=107"
                className="bg-white rounded-3xl p-4 flex items-center gap-4 border border-border cursor-pointer hover:border-primary/40 transition-colors"
              >
                <div className="relative w-28 h-28 rounded-2xl overflow-hidden bg-[#FFF2F0] flex items-center justify-center shrink-0">
                  <img
                    src="/images/clinics/clinic-1.png"
                    alt="Гастроскопия (ФГДС) под седацией"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0 flex flex-col self-stretch">
                  <h3 className="text-foreground font-semibold text-base leading-snug line-clamp-2 mb-1">
                    Гастроскопия (ФГДС) под седацией
                  </h3>

                  <p className="text-muted text-xs mb-1">
                    Эндоскопия
                    <span className="text-primary"> • Нео Клиник</span>
                  </p>

                  <div className="flex items-center gap-1 mb-2 text-xs">
                    <StarIcon className="w-3.5 h-3.5 text-primary" />
                    <span className="text-primary font-medium">4.75</span>
                    <span className="text-secondary">(31)</span>
                  </div>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                    <span className="text-foreground font-bold text-base whitespace-nowrap">
                      5200 с
                    </span>
                    <div className="flex items-center gap-2 ml-auto">
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-8 relative after:absolute after:inset-x-0 after:-inset-y-2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent px-4 py-1.5 text-xs"
                      >
                        <span>Записаться</span>
                      </button>
                      <button
                        type="button"
                        aria-label="Добавить в избранное"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <HeartIcon className="w-6 h-6 text-primary" />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
              {/* Услуга (horizontal) 8 */}
              <Link
                href="/record?service=108"
                className="bg-white rounded-3xl p-4 flex items-center gap-4 border border-border cursor-pointer hover:border-primary/40 transition-colors"
              >
                <div className="relative w-28 h-28 rounded-2xl overflow-hidden bg-[#FFF2F0] flex items-center justify-center shrink-0">
                  <span className="text-primary text-2xl font-bold uppercase">
                    МА
                  </span>
                </div>

                <div className="flex-1 min-w-0 flex flex-col self-stretch">
                  <h3 className="text-foreground font-semibold text-base leading-snug line-clamp-2 mb-1">
                    Массаж спины, 10 сеансов
                  </h3>

                  <p className="text-muted text-xs mb-1">
                    Физиотерапия
                    <span className="text-primary"> • Семейная клиника «Бонецкий»</span>
                  </p>

                  <div className="flex items-center gap-1 mb-2 text-xs">
                    <StarIcon className="w-3.5 h-3.5 text-primary" />
                    <span className="text-primary font-medium">5.00</span>
                    <span className="text-secondary">(19)</span>
                  </div>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                    <span className="text-foreground font-bold text-base whitespace-nowrap">
                      7000 с
                    </span>
                    <div className="flex items-center gap-2 ml-auto">
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-8 relative after:absolute after:inset-x-0 after:-inset-y-2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent px-4 py-1.5 text-xs"
                      >
                        <span>Записаться</span>
                      </button>
                      <button
                        type="button"
                        aria-label="Добавить в избранное"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <HeartIcon className="w-6 h-6 text-primary" />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
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

          {/* Desktop */}
          <div className="hidden md:block px-10 py-6">
            <div className="text-sm text-secondary mb-6 flex items-center gap-2">
              <Link href="/" className="hover:text-primary transition-colors">
                Главная
              </Link>
              <span>•</span>
              <span className="text-primary">Услуги</span>
            </div>

            <div className="max-w-200">
              <div className="flex items-center gap-3">
                <h2 className="text-[40px] font-semibold leading-none">Услуги</h2>
              </div>
              <p className="text-secondary text-lg mt-4 mb-6">
                Поиск в г.{" "}
                <span className="font-medium text-foreground">Бишкек</span>.
                Выберите интересующие вас параметры, чтобы ознакомиться с
                подходящими процедурами
              </p>
            </div>

            <div className="grid grid-cols-4 gap-5 items-start">
              <div className="flex flex-col gap-1.5 w-full">
                <span className="text-overlay text-sm font-medium">Категория услуги</span>

                <div className="relative">
                  <div
                    role="combobox"
                    tabIndex={0}
                    aria-expanded={false}
                    aria-haspopup="listbox"
                    className="flex items-center justify-between min-h-10.5 p-3 border rounded-lg cursor-pointer transition-all duration-200 bg-white select-none border-border-soft outline-none focus-visible:border-primary focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] hover:border-primary/50"
                  >
                    <div className="flex flex-wrap items-center gap-1.5 flex-1 min-w-0 overflow-hidden">
                      <span className="truncate text-muted">Все</span>
                    </div>
                    <DropdownArrowIcon className="text-muted transition-transform duration-300 size-5" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 w-full">
                <span className="text-overlay text-sm font-medium">Клиника</span>

                <div className="relative">
                  <div
                    role="combobox"
                    tabIndex={0}
                    aria-expanded={false}
                    aria-haspopup="listbox"
                    className="flex items-center justify-between min-h-10.5 p-3 border rounded-lg cursor-pointer transition-all duration-200 bg-white select-none border-border-soft outline-none focus-visible:border-primary focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] hover:border-primary/50"
                  >
                    <div className="flex flex-wrap items-center gap-1.5 flex-1 min-w-0 overflow-hidden">
                      <span className="truncate text-muted">Все</span>
                    </div>
                    <DropdownArrowIcon className="text-muted transition-transform duration-300 size-5" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 w-full">
                <span className="text-overlay text-sm font-medium">Оценка</span>

                <div className="relative">
                  <div
                    role="combobox"
                    tabIndex={0}
                    aria-expanded={false}
                    aria-haspopup="listbox"
                    className="flex items-center justify-between min-h-10.5 p-3 border rounded-lg cursor-pointer transition-all duration-200 bg-white select-none border-border-soft outline-none focus-visible:border-primary focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] hover:border-primary/50"
                  >
                    <div className="flex flex-wrap items-center gap-1.5 flex-1 min-w-0 overflow-hidden">
                      <span className="truncate text-muted">Все</span>
                    </div>
                    <DropdownArrowIcon className="text-muted transition-transform duration-300 size-5" />
                  </div>
                </div>
              </div>
              <div className="block w-full bg-white">
                <span className="block text-overlay text-sm font-medium mb-1.5">
                  Стоимость, с
                </span>

                <div className="border border-border-soft rounded-lg p-3 pt-2">
                  <div className="flex justify-between text-sm text-foreground leading-none">
                    <span>0</span>
                    <span>10000</span>
                  </div>

                  <div className="relative w-full flex items-center h-4">
                    <div className="absolute w-full h-0.5 bg-border-soft rounded-full" />
                    <div
                      className="absolute h-0.5 bg-primary rounded-full"
                      style={{ left: "0%", width: "100%" }}
                    />
                    <input
                      id="price-desktop-svc-min"
                      type="range"
                      min={0}
                      max={10000}
                      step={50}
                      defaultValue={0}
                      className="absolute w-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer z-20"
                    />
                    <input
                      id="price-desktop-svc-max"
                      type="range"
                      min={0}
                      max={10000}
                      step={50}
                      defaultValue={10000}
                      className="absolute w-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer z-20"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                type="button"
                className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] text-foreground active:bg-border-soft hover:bg-background"
              >
                <RemoveIcon className="size-5" />
                <span>Сбросить фильтры</span>
              </button>
            </div>

            <div className="mt-2 transition-opacity">
              <div className="grid grid-cols-4 gap-5 items-stretch">
                {/* Услуга (vertical) 1 */}
                <Link
                  href="/record?service=101"
                  className="bg-white rounded-3xl border border-border overflow-hidden flex flex-col h-full cursor-pointer hover:border-primary/40 transition-colors"
                >
                  <div className="relative aspect-4/3 w-full">
                    <img
                      src="/images/clinics/clinic-2.png"
                      alt="УЗИ органов брюшной полости"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute top-4 right-4 z-10">
                      <button
                        type="button"
                        aria-label="Добавить в избранное"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <HeartIcon className="w-6 h-6 text-primary" />
                      </button>
                    </div>
                  </div>

                  <div className="flex-1 p-4 flex flex-col">
                    <p className="text-muted text-xs mb-1 uppercase tracking-wider">
                      Ультразвуковая диагностика
                    </p>

                    <h3 className="text-foreground font-semibold text-base leading-snug mb-1 line-clamp-2">
                      УЗИ органов брюшной полости
                    </h3>

                    <p className="text-secondary text-xs mb-3 truncate">
                      Диагностический центр «Интермед»
                    </p>

                    <div className="flex items-center gap-1 mb-4 text-sm">
                      <StarIcon className="w-3.5 h-3.5 text-primary" />
                      <span className="text-primary font-medium">4.80</span>
                      <span className="text-secondary">(132)</span>
                    </div>

                    <div className="mt-auto pt-3 flex items-center justify-between gap-3 border-t border-border-soft">
                      <span className="text-foreground font-bold text-lg whitespace-nowrap">
                        1200 с
                      </span>
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent flex-1"
                      >
                        <span>Записаться</span>
                      </button>
                    </div>
                  </div>
                </Link>
                {/* Услуга (vertical) 2 */}
                <Link
                  href="/record?service=102"
                  className="bg-white rounded-3xl border border-border overflow-hidden flex flex-col h-full cursor-pointer hover:border-primary/40 transition-colors"
                >
                  <div className="relative aspect-4/3 w-full">
                    <img
                      src="/images/clinics/clinic-1.png"
                      alt="Консультация кардиолога с ЭКГ"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute top-4 right-4 z-10">
                      <button
                        type="button"
                        aria-label="Добавить в избранное"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <HeartIcon className="w-6 h-6 text-primary" />
                      </button>
                    </div>
                  </div>

                  <div className="flex-1 p-4 flex flex-col">
                    <p className="text-muted text-xs mb-1 uppercase tracking-wider">
                      Кардиология
                    </p>

                    <h3 className="text-foreground font-semibold text-base leading-snug mb-1 line-clamp-2">
                      Консультация кардиолога с ЭКГ
                    </h3>

                    <p className="text-secondary text-xs mb-3 truncate">
                      Медиком
                    </p>

                    <div className="flex items-center gap-1 mb-4 text-sm">
                      <StarIcon className="w-3.5 h-3.5 text-primary" />
                      <span className="text-primary font-medium">4.90</span>
                      <span className="text-secondary">(88)</span>
                    </div>

                    <div className="mt-auto pt-3 flex items-center justify-between gap-3 border-t border-border-soft">
                      <span className="text-foreground font-bold text-lg whitespace-nowrap">
                        2000 с
                      </span>
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent flex-1"
                      >
                        <span>Записаться</span>
                      </button>
                    </div>
                  </div>
                </Link>
                {/* Услуга (vertical) 3 */}
                <Link
                  href="/record?service=103"
                  className="bg-white rounded-3xl border border-border overflow-hidden flex flex-col h-full cursor-pointer hover:border-primary/40 transition-colors"
                >
                  <div className="relative aspect-4/3 w-full">
                    <img
                      src="/images/clinics/clinic-4.png"
                      alt="Профессиональная чистка зубов Air Flow"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute top-4 right-4 z-10">
                      <button
                        type="button"
                        aria-label="Добавить в избранное"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <HeartIcon className="w-6 h-6 text-primary" />
                      </button>
                    </div>
                  </div>

                  <div className="flex-1 p-4 flex flex-col">
                    <p className="text-muted text-xs mb-1 uppercase tracking-wider">
                      Стоматология
                    </p>

                    <h3 className="text-foreground font-semibold text-base leading-snug mb-1 line-clamp-2">
                      Профессиональная чистка зубов Air Flow
                    </h3>

                    <p className="text-secondary text-xs mb-3 truncate">
                      Стоматология «Smile Pro»
                    </p>

                    <div className="flex items-center gap-1 mb-4 text-sm">
                      <StarIcon className="w-3.5 h-3.5 text-primary" />
                      <span className="text-primary font-medium">4.95</span>
                      <span className="text-secondary">(214)</span>
                    </div>

                    <div className="mt-auto pt-3 flex items-center justify-between gap-3 border-t border-border-soft">
                      <span className="text-foreground font-bold text-lg whitespace-nowrap">
                        3500 с
                      </span>
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent flex-1"
                      >
                        <span>Записаться</span>
                      </button>
                    </div>
                  </div>
                </Link>
                {/* Услуга (vertical) 4 */}
                <Link
                  href="/record?service=104"
                  className="bg-white rounded-3xl border border-border overflow-hidden flex flex-col h-full cursor-pointer hover:border-primary/40 transition-colors"
                >
                  <div className="relative aspect-4/3 w-full">
                    <div className="w-full h-full bg-[#FFF2F0] flex items-center justify-center">
                      <span className="text-primary text-3xl font-bold uppercase">
                        ОБ
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 z-10">
                      <button
                        type="button"
                        aria-label="Добавить в избранное"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <HeartIcon className="w-6 h-6 text-primary" />
                      </button>
                    </div>
                  </div>

                  <div className="flex-1 p-4 flex flex-col">
                    <p className="text-muted text-xs mb-1 uppercase tracking-wider">
                      Лабораторная диагностика
                    </p>

                    <h3 className="text-foreground font-semibold text-base leading-snug mb-1 line-clamp-2">
                      Общий анализ крови
                    </h3>

                    <p className="text-secondary text-xs mb-3 truncate">
                      Лаборатория «Диамед»
                    </p>

                    <div className="flex items-center gap-1 mb-4 text-sm">
                      <StarIcon className="w-3.5 h-3.5 text-primary" />
                      <span className="text-primary font-medium">4.70</span>
                      <span className="text-secondary">(57)</span>
                    </div>

                    <div className="mt-auto pt-3 flex items-center justify-between gap-3 border-t border-border-soft">
                      <span className="text-foreground font-bold text-lg whitespace-nowrap">
                        450 с
                      </span>
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent flex-1"
                      >
                        <span>Записаться</span>
                      </button>
                    </div>
                  </div>
                </Link>
                {/* Услуга (vertical) 5 */}
                <Link
                  href="/record?service=105"
                  className="bg-white rounded-3xl border border-border overflow-hidden flex flex-col h-full cursor-pointer hover:border-primary/40 transition-colors"
                >
                  <div className="relative aspect-4/3 w-full">
                    <img
                      src="/images/clinics/clinic-3.png"
                      alt="МРТ головного мозга"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute top-4 right-4 z-10">
                      <button
                        type="button"
                        aria-label="Добавить в избранное"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <HeartIcon className="w-6 h-6 text-primary" />
                      </button>
                    </div>
                  </div>

                  <div className="flex-1 p-4 flex flex-col">
                    <p className="text-muted text-xs mb-1 uppercase tracking-wider">
                      Лучевая диагностика
                    </p>

                    <h3 className="text-foreground font-semibold text-base leading-snug mb-1 line-clamp-2">
                      МРТ головного мозга
                    </h3>

                    <p className="text-secondary text-xs mb-3 truncate">
                      Кыргызско-Турецкая клиника
                    </p>

                    <div className="flex items-center gap-1 mb-4 text-sm">
                      <StarIcon className="w-3.5 h-3.5 text-primary" />
                      <span className="text-primary font-medium">4.85</span>
                      <span className="text-secondary">(76)</span>
                    </div>

                    <div className="mt-auto pt-3 flex items-center justify-between gap-3 border-t border-border-soft">
                      <span className="text-foreground font-bold text-lg whitespace-nowrap">
                        6500 с
                      </span>
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent flex-1"
                      >
                        <span>Записаться</span>
                      </button>
                    </div>
                  </div>
                </Link>
                {/* Услуга (vertical) 6 */}
                <Link
                  href="/record?service=106"
                  className="bg-white rounded-3xl border border-border overflow-hidden flex flex-col h-full cursor-pointer hover:border-primary/40 transition-colors"
                >
                  <div className="relative aspect-4/3 w-full">
                    <div className="w-full h-full bg-[#FFF2F0] flex items-center justify-center">
                      <span className="text-primary text-3xl font-bold uppercase">
                        ПР
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 z-10">
                      <button
                        type="button"
                        aria-label="Добавить в избранное"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <HeartIcon className="w-6 h-6 text-primary" />
                      </button>
                    </div>
                  </div>

                  <div className="flex-1 p-4 flex flex-col">
                    <p className="text-muted text-xs mb-1 uppercase tracking-wider">
                      Офтальмология
                    </p>

                    <h3 className="text-foreground font-semibold text-base leading-snug mb-1 line-clamp-2">
                      Проверка остроты зрения и подбор очков
                    </h3>

                    <p className="text-secondary text-xs mb-3 truncate">
                      Глазная клиника «Оптимед»
                    </p>

                    <div className="flex items-center gap-1 mb-4 text-sm">
                      <StarIcon className="w-3.5 h-3.5 text-primary" />
                      <span className="text-primary font-medium">4.60</span>
                      <span className="text-secondary">(43)</span>
                    </div>

                    <div className="mt-auto pt-3 flex items-center justify-between gap-3 border-t border-border-soft">
                      <span className="text-foreground font-bold text-lg whitespace-nowrap">
                        800 с
                      </span>
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent flex-1"
                      >
                        <span>Записаться</span>
                      </button>
                    </div>
                  </div>
                </Link>
                {/* Услуга (vertical) 7 */}
                <Link
                  href="/record?service=107"
                  className="bg-white rounded-3xl border border-border overflow-hidden flex flex-col h-full cursor-pointer hover:border-primary/40 transition-colors"
                >
                  <div className="relative aspect-4/3 w-full">
                    <img
                      src="/images/clinics/clinic-1.png"
                      alt="Гастроскопия (ФГДС) под седацией"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute top-4 right-4 z-10">
                      <button
                        type="button"
                        aria-label="Добавить в избранное"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <HeartIcon className="w-6 h-6 text-primary" />
                      </button>
                    </div>
                  </div>

                  <div className="flex-1 p-4 flex flex-col">
                    <p className="text-muted text-xs mb-1 uppercase tracking-wider">
                      Эндоскопия
                    </p>

                    <h3 className="text-foreground font-semibold text-base leading-snug mb-1 line-clamp-2">
                      Гастроскопия (ФГДС) под седацией
                    </h3>

                    <p className="text-secondary text-xs mb-3 truncate">
                      Нео Клиник
                    </p>

                    <div className="flex items-center gap-1 mb-4 text-sm">
                      <StarIcon className="w-3.5 h-3.5 text-primary" />
                      <span className="text-primary font-medium">4.75</span>
                      <span className="text-secondary">(31)</span>
                    </div>

                    <div className="mt-auto pt-3 flex items-center justify-between gap-3 border-t border-border-soft">
                      <span className="text-foreground font-bold text-lg whitespace-nowrap">
                        5200 с
                      </span>
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent flex-1"
                      >
                        <span>Записаться</span>
                      </button>
                    </div>
                  </div>
                </Link>
                {/* Услуга (vertical) 8 */}
                <Link
                  href="/record?service=108"
                  className="bg-white rounded-3xl border border-border overflow-hidden flex flex-col h-full cursor-pointer hover:border-primary/40 transition-colors"
                >
                  <div className="relative aspect-4/3 w-full">
                    <div className="w-full h-full bg-[#FFF2F0] flex items-center justify-center">
                      <span className="text-primary text-3xl font-bold uppercase">
                        МА
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 z-10">
                      <button
                        type="button"
                        aria-label="Добавить в избранное"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <HeartIcon className="w-6 h-6 text-primary" />
                      </button>
                    </div>
                  </div>

                  <div className="flex-1 p-4 flex flex-col">
                    <p className="text-muted text-xs mb-1 uppercase tracking-wider">
                      Физиотерапия
                    </p>

                    <h3 className="text-foreground font-semibold text-base leading-snug mb-1 line-clamp-2">
                      Массаж спины, 10 сеансов
                    </h3>

                    <p className="text-secondary text-xs mb-3 truncate">
                      Семейная клиника «Бонецкий»
                    </p>

                    <div className="flex items-center gap-1 mb-4 text-sm">
                      <StarIcon className="w-3.5 h-3.5 text-primary" />
                      <span className="text-primary font-medium">5.00</span>
                      <span className="text-secondary">(19)</span>
                    </div>

                    <div className="mt-auto pt-3 flex items-center justify-between gap-3 border-t border-border-soft">
                      <span className="text-foreground font-bold text-lg whitespace-nowrap">
                        7000 с
                      </span>
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent flex-1"
                      >
                        <span>Записаться</span>
                      </button>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="flex justify-center mt-8">
                <button
                  type="button"
                  className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-12 text-sm md:text-base px-6 border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent"
                >
                  <span>Показать ещё</span>
                </button>
              </div>
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
    </>
  );
}
