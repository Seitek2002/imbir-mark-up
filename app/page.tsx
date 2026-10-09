import Link from "next/link";

import FacebookIcon from "@/assets/icons/auth/facebook.svg";
import InstagramIcon from "@/assets/icons/auth/instagram.svg";
import LinkedinIcon from "@/assets/icons/auth/linkedin.svg";
import TwitterIcon from "@/assets/icons/auth/twitter.svg";
import HeartIcon from "@/assets/icons/cards/heart.svg";
import StarIcon from "@/assets/icons/common/star.svg";
import DropdownArrowIcon from "@/assets/icons/dropdown/arrow.svg";
import ChatIcon from "@/assets/icons/header/chat.svg";
import GeoBtnArrowIcon from "@/assets/icons/header/geo-btn-arrow.svg";
import GeoIcon from "@/assets/icons/header/geo.svg";
import Logo from "@/assets/icons/header/logo.svg";
import ProfileIcon from "@/assets/icons/header/profile.svg";
import SearchIcon from "@/assets/icons/header/search.svg";

export default function Page() {
  return (
    <>
      <main className="pb-16 lg:pb-0">
        {/* ===================== HEADER (searchable) ===================== */}
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

              <div className="w-full flex items-center justify-center mt-4 md:hidden">
                <Link
                  href="/search"
                  className="flex items-center w-full gap-2 border border-border px-3 py-2 rounded-full transition-transform active:scale-95"
                >
                  <SearchIcon className="size-5" />
                  <span className="text-secondary text-base">Поиск клиники</span>
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* ===================== HERO ===================== */}
        <section className="relative max-w-340 mx-auto mt-6 overflow-hidden rounded-3xl bg-[#FFF0E9] pt-8 px-4 pb-0 md:p-12 md:pb-0 flex flex-col md:block min-h-150">
          <img
            src="/images/hero/bg.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-75"
          />

          <div className="relative z-10 w-full max-w-300 mx-auto h-full flex flex-col md:flex-row justify-between">
            <div className="flex flex-col items-start w-full md:w-1/2 z-20">
              <h1 className="font-semibold text-[32px] leading-[1.1] md:text-5xl text-foreground mb-3 md:mb-5">
                Лучшие специалисты <br className="hidden md:block" /> и честные
                отзывы
              </h1>

              <p className="text-secondary text-sm md:text-lg mb-6 md:mb-8 max-w-[320px] md:max-w-112.5">
                Свяжитесь со специалистом из любой точки — быстро, удобно и без
                ожидания
              </p>

              <Link href="/specialists" className="w-full md:w-auto mb-6 md:mb-16">
                <button
                  type="button"
                  className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-12 text-sm md:text-base px-6 bg-primary text-white active:bg-primary-dark hover:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] w-full"
                >
                  <span>Выбрать специалиста / услугу</span>
                </button>
              </Link>

              <div className="border border-primary rounded-3xl bg-white p-4 w-full md:w-105 flex flex-col gap-4">
                <Link
                  href="/chat?ai=1"
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <div className="w-12 h-12 overflow-hidden rounded-full shrink-0">
                    <img
                      src="/images/hero/assistant.png"
                      alt=""
                      className="w-full h-full object-cover object-top group-hover:opacity-90 transition-opacity"
                    />
                  </div>
                  <p className="text-sm text-secondary leading-tight group-hover:text-primary transition-colors">
                    Что вас беспокоит? <br /> Я помогу подобрать вам специалиста
                  </p>
                </Link>

                <input
                  placeholder="Опишите, что вас беспокоит…"
                  className="w-full px-4 py-2.5 rounded-full border border-border text-sm text-foreground outline-none focus:border-primary transition-colors"
                />

                <div className="flex justify-between items-center">
                  <Link
                    href="/chat?ai=1"
                    className="text-sm text-primary hover:underline font-medium"
                  >
                    Перейти в чат
                  </Link>
                  <button
                    type="button"
                    className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] bg-primary text-white active:bg-primary-dark hover:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)]"
                  >
                    <span>Описать симптомы</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-0 w-full md:absolute md:bottom-0 md:right-0 flex justify-center md:justify-end items-end z-10 h-87.5 md:h-[90%] pointer-events-none">
              <img
                src="/images/hero/avatar.png"
                alt=""
                className="w-auto h-full object-contain object-bottom"
              />
            </div>
          </div>
        </section>

        {/* ===================== СПЕЦИАЛИСТЫ (DoctorsMainList) ===================== */}
        <div className="max-w-340 mx-auto pt-8 pb-0 md:py-30 px-4">
          {/* FilterBar (только lg+) */}
          <div className="hidden lg:block">
            <div className="w-full">
              <div className="max-w-200">
                <h2 className="text-[40px] font-semibold leading-none">Специалисты</h2>
              </div>
              <p className="text-secondary text-lg mt-4 mb-6">
                Поиск в г.{" "}
                <span className="font-medium text-foreground">Бишкек</span>.
                Выберите интересующие вас параметры, чтобы ознакомиться с
                подходящими вариантами
              </p>

              <div className="grid grid-cols-4 gap-5 items-start">
                <div className="flex flex-col gap-1.5 w-full">
                  <span className="text-overlay text-sm font-medium">Специализация</span>

                  <div className="relative">
                    <div
                      role="combobox"
                      tabIndex={0}
                      aria-expanded={false}
                      aria-haspopup="listbox"
                      className="flex items-center justify-between min-h-10.5 p-3 border rounded-lg cursor-pointer transition-all duration-200 bg-white select-none border-border-soft outline-none focus-visible:border-primary focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] hover:border-primary/50"
                    >
                      <div className="flex flex-wrap items-center gap-1.5 flex-1 min-w-0 overflow-hidden">
                        <span className="truncate text-foreground">Все</span>
                      </div>
                      <DropdownArrowIcon className="text-muted transition-transform duration-300 size-5" />
                    </div>
                  </div>
                </div>
                <div className="block w-full bg-white">
                  <span className="block text-overlay text-sm font-medium mb-1.5">
                    Стаж, лет
                  </span>

                  <div className="border border-border-soft rounded-lg p-3 pt-2">
                    <div className="flex justify-between text-sm text-foreground leading-none">
                      <span>0</span>
                      <span>50</span>
                    </div>

                    <div className="relative w-full flex items-center h-4">
                      <div className="absolute w-full h-0.5 bg-border-soft rounded-full" />
                      <div
                        className="absolute h-0.5 bg-primary rounded-full"
                        style={{ left: "0%", width: "100%" }}
                      />
                      <input
                        id="exp-desktop-doc-min"
                        type="range"
                        min={0}
                        max={50}
                        step={1}
                        defaultValue={0}
                        className="absolute w-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer z-20"
                      />
                      <input
                        id="exp-desktop-doc-max"
                        type="range"
                        min={0}
                        max={50}
                        step={1}
                        defaultValue={50}
                        className="absolute w-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer z-20"
                      />
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
                        <span className="truncate text-foreground">Все</span>
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
                      <span>5000</span>
                    </div>

                    <div className="relative w-full flex items-center h-4">
                      <div className="absolute w-full h-0.5 bg-border-soft rounded-full" />
                      <div
                        className="absolute h-0.5 bg-primary rounded-full"
                        style={{ left: "0%", width: "100%" }}
                      />
                      <input
                        id="price-desktop-doc-min"
                        type="range"
                        min={0}
                        max={5000}
                        step={50}
                        defaultValue={0}
                        className="absolute w-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer z-20"
                      />
                      <input
                        id="price-desktop-doc-max"
                        type="range"
                        min={0}
                        max={5000}
                        step={50}
                        defaultValue={5000}
                        className="absolute w-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer z-20"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between lg:hidden">
            <h2 className="text-[18px] font-medium text-foreground">Специалисты</h2>
            <Link href="/specialists">
              <button
                type="button"
                className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-12 text-sm md:text-base px-6 active:bg-border-soft hover:bg-background text-[#FF7C63]"
              >
                <span>Все</span>
              </button>
            </Link>
          </div>

          <div className="flex flex-col gap-3 lg:mt-10">
            {/* Мобильный вид */}
            <div className="flex flex-col gap-2 md:hidden">
              {/* Врач (horizontal) 1 */}
              <Link
                href="/specialists/1"
                className="bg-white rounded-2xl border border-border-soft p-2.5 flex items-stretch gap-2.5 w-full cursor-pointer hover:border-primary/40 transition-colors"
              >
                <div className="relative w-30 min-w-30 self-stretch rounded-2xl overflow-hidden bg-primary-tint">
                  <img
                    src="/images/doctors/doctor-1.png"
                    alt="Асанова Айгуль Бакытовна"
                    className="absolute inset-0 h-full w-full object-cover object-top scale-110"
                  />
                </div>

                <div className="flex-1 min-w-0 py-0.5 flex flex-col">
                  <p className="font-semibold text-[18px] text-foreground leading-tight truncate">
                    Асанова Айгуль Бакытовна
                  </p>

                  <p className="text-[14px] text-secondary truncate mt-1">
                    Кардиолог
                    <span className="text-primary">
                      {" "}
                      • Медиком{" "}+ еще 1
                    </span>
                  </p>

                  <div className="flex items-center gap-1 mt-1.5 text-[14px] flex-wrap">
                    <StarIcon className="size-4 text-[#FF7C63]" />
                      <span className="font-medium text-[#FF7C63]">4.90</span>
                      <span className="text-secondary">(128)</span>
                      <span className="text-secondary">• 12 лет опыта</span>
                  </div>

                  <div className="mt-auto pt-2 flex items-center gap-2">
                    <button
                      type="button"
                      className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-8 px-4 relative after:absolute after:inset-x-0 after:-inset-y-2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent flex-1 text-[16px] py-2"
                    >
                      <span>Записаться</span>
                    </button>
                    <div>
                      <button
                        type="button"
                        aria-label="Сохранить врача"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <HeartIcon className="size-6 transition-colors" />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
              {/* Врач (horizontal) 2 */}
              <Link
                href="/specialists/2"
                className="bg-white rounded-2xl border border-border-soft p-2.5 flex items-stretch gap-2.5 w-full cursor-pointer hover:border-primary/40 transition-colors"
              >
                <div className="relative w-30 min-w-30 self-stretch rounded-2xl overflow-hidden bg-primary-tint">
                  <img
                    src="/images/doctors/doctor-2.png"
                    alt="Токтогулов Эрлан Маратович"
                    className="absolute inset-0 h-full w-full object-cover object-top scale-110"
                  />
                </div>

                <div className="flex-1 min-w-0 py-0.5 flex flex-col">
                  <p className="font-semibold text-[18px] text-foreground leading-tight truncate">
                    Токтогулов Эрлан Маратович
                  </p>

                  <p className="text-[14px] text-secondary truncate mt-1">
                    Невролог
                    <span className="text-primary">
                      {" "}
                      • Нео Клиник{" "}
                    </span>
                  </p>

                  <div className="flex items-center gap-1 mt-1.5 text-[14px] flex-wrap">
                    <StarIcon className="size-4 text-[#FF7C63]" />
                      <span className="font-medium text-[#FF7C63]">4.80</span>
                      <span className="text-secondary">(94)</span>
                      <span className="text-secondary">• 9 лет опыта</span>
                  </div>

                  <div className="mt-auto pt-2 flex items-center gap-2">
                    <button
                      type="button"
                      className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-8 px-4 relative after:absolute after:inset-x-0 after:-inset-y-2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent flex-1 text-[16px] py-2"
                    >
                      <span>Записаться</span>
                    </button>
                    <div>
                      <button
                        type="button"
                        aria-label="Сохранить врача"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <HeartIcon className="size-6 transition-colors" />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
              {/* Врач (horizontal) 3 */}
              <Link
                href="/specialists/3"
                className="bg-white rounded-2xl border border-border-soft p-2.5 flex items-stretch gap-2.5 w-full cursor-pointer hover:border-primary/40 transition-colors"
              >
                <div className="relative w-30 min-w-30 self-stretch rounded-2xl overflow-hidden bg-primary-tint">
                  <img
                    src="/images/doctors/doctor-3.png"
                    alt="Жумабаева Назгуль Асановна"
                    className="absolute inset-0 h-full w-full object-cover object-top scale-110"
                  />
                </div>

                <div className="flex-1 min-w-0 py-0.5 flex flex-col">
                  <p className="font-semibold text-[18px] text-foreground leading-tight truncate">
                    Жумабаева Назгуль Асановна
                  </p>

                  <p className="text-[14px] text-secondary truncate mt-1">
                    Гинеколог
                    <span className="text-primary">
                      {" "}
                      • Aya Clinic{" "}+ еще 2
                    </span>
                  </p>

                  <div className="flex items-center gap-1 mt-1.5 text-[14px] flex-wrap">
                    <StarIcon className="size-4 text-[#FF7C63]" />
                      <span className="font-medium text-[#FF7C63]">5.00</span>
                      <span className="text-secondary">(211)</span>
                      <span className="text-secondary">• 15 лет опыта</span>
                  </div>

                  <div className="mt-auto pt-2 flex items-center gap-2">
                    <button
                      type="button"
                      className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-8 px-4 relative after:absolute after:inset-x-0 after:-inset-y-2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent flex-1 text-[16px] py-2"
                    >
                      <span>Записаться</span>
                    </button>
                    <div>
                      <button
                        type="button"
                        aria-label="Сохранить врача"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <HeartIcon className="size-6 transition-colors" />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
              {/* Врач (horizontal) 4 */}
              <Link
                href="/specialists/4"
                className="bg-white rounded-2xl border border-border-soft p-2.5 flex items-stretch gap-2.5 w-full cursor-pointer hover:border-primary/40 transition-colors"
              >
                <div className="relative w-30 min-w-30 self-stretch rounded-2xl overflow-hidden bg-primary-tint">
                  <img
                    src="/images/doctors/doctor-4.png"
                    alt="Осмонов Бакыт Талантович"
                    className="absolute inset-0 h-full w-full object-cover object-top scale-110"
                  />
                </div>

                <div className="flex-1 min-w-0 py-0.5 flex flex-col">
                  <p className="font-semibold text-[18px] text-foreground leading-tight truncate">
                    Осмонов Бакыт Талантович
                  </p>

                  <p className="text-[14px] text-secondary truncate mt-1">
                    Стоматолог
                    <span className="text-primary">
                      {" "}
                      • Дента Люкс{" "}
                    </span>
                  </p>

                  <div className="flex items-center gap-1 mt-1.5 text-[14px] flex-wrap">
                    <StarIcon className="size-4 text-[#FF7C63]" />
                      <span className="font-medium text-[#FF7C63]">4.70</span>
                      <span className="text-secondary">(56)</span>
                      <span className="text-secondary">• 7 лет опыта</span>
                  </div>

                  <div className="mt-auto pt-2 flex items-center gap-2">
                    <button
                      type="button"
                      className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-8 px-4 relative after:absolute after:inset-x-0 after:-inset-y-2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent flex-1 text-[16px] py-2"
                    >
                      <span>Записаться</span>
                    </button>
                    <div>
                      <button
                        type="button"
                        aria-label="Сохранить врача"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <HeartIcon className="size-6 transition-colors" />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
              {/* Врач (horizontal) 5 */}
              <Link
                href="/specialists/5"
                className="bg-white rounded-2xl border border-border-soft p-2.5 flex items-stretch gap-2.5 w-full cursor-pointer hover:border-primary/40 transition-colors"
              >
                <div className="relative w-30 min-w-30 self-stretch rounded-2xl overflow-hidden bg-primary-tint">
                  <img
                    src="/images/doctors/doctor-5.png"
                    alt="Садыкова Жибек Нурлановна"
                    className="absolute inset-0 h-full w-full object-cover object-top scale-110"
                  />
                </div>

                <div className="flex-1 min-w-0 py-0.5 flex flex-col">
                  <p className="font-semibold text-[18px] text-foreground leading-tight truncate">
                    Садыкова Жибек Нурлановна
                  </p>

                  <p className="text-[14px] text-secondary truncate mt-1">
                    Офтальмолог
                    <span className="text-primary">
                      {" "}
                      • Оптимед{" "}
                    </span>
                  </p>

                  <div className="flex items-center gap-1 mt-1.5 text-[14px] flex-wrap">
                    <StarIcon className="size-4 text-[#FF7C63]" />
                      <span className="font-medium text-[#FF7C63]">4.95</span>
                      <span className="text-secondary">(143)</span>
                      <span className="text-secondary">• 21 год опыта</span>
                  </div>

                  <div className="mt-auto pt-2 flex items-center gap-2">
                    <button
                      type="button"
                      className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-8 px-4 relative after:absolute after:inset-x-0 after:-inset-y-2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent flex-1 text-[16px] py-2"
                    >
                      <span>Записаться</span>
                    </button>
                    <div>
                      <button
                        type="button"
                        aria-label="Сохранить врача"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <HeartIcon className="size-6 transition-colors" />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
              {/* Врач (horizontal) 6 */}
              <Link
                href="/specialists/6"
                className="bg-white rounded-2xl border border-border-soft p-2.5 flex items-stretch gap-2.5 w-full cursor-pointer hover:border-primary/40 transition-colors"
              >
                <div className="relative w-30 min-w-30 self-stretch rounded-2xl overflow-hidden bg-primary-tint">
                  <img
                    src="/images/doctors/doctor-6.png"
                    alt="Мамытов Азамат Кубанычевич"
                    className="absolute inset-0 h-full w-full object-cover object-top scale-110"
                  />
                </div>

                <div className="flex-1 min-w-0 py-0.5 flex flex-col">
                  <p className="font-semibold text-[18px] text-foreground leading-tight truncate">
                    Мамытов Азамат Кубанычевич
                  </p>

                  <p className="text-[14px] text-secondary truncate mt-1">
                    Оториноларинголог
                    <span className="text-primary">
                      {" "}
                      • Кыргызско-Турецкая клиника{" "}+ еще 1
                    </span>
                  </p>

                  <div className="flex items-center gap-1 mt-1.5 text-[14px] flex-wrap">
                    <StarIcon className="size-4 text-[#FF7C63]" />
                      <span className="font-medium text-[#FF7C63]">4.60</span>
                      <span className="text-secondary">(38)</span>
                      <span className="text-secondary">• 4 года опыта</span>
                  </div>

                  <div className="mt-auto pt-2 flex items-center gap-2">
                    <button
                      type="button"
                      className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-8 px-4 relative after:absolute after:inset-x-0 after:-inset-y-2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent flex-1 text-[16px] py-2"
                    >
                      <span>Записаться</span>
                    </button>
                    <div>
                      <button
                        type="button"
                        aria-label="Сохранить врача"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <HeartIcon className="size-6 transition-colors" />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
              {/* Врач (horizontal) 7 */}
              <Link
                href="/specialists/7"
                className="bg-white rounded-2xl border border-border-soft p-2.5 flex items-stretch gap-2.5 w-full cursor-pointer hover:border-primary/40 transition-colors"
              >
                <div className="relative w-30 min-w-30 self-stretch rounded-2xl overflow-hidden bg-primary-tint">
                  <img
                    src="/images/doctors/doctor-7.png"
                    alt="Ибраимова Динара Сейтековна"
                    className="absolute inset-0 h-full w-full object-cover object-top scale-110"
                  />
                </div>

                <div className="flex-1 min-w-0 py-0.5 flex flex-col">
                  <p className="font-semibold text-[18px] text-foreground leading-tight truncate">
                    Ибраимова Динара Сейтековна
                  </p>

                  <p className="text-[14px] text-secondary truncate mt-1">
                    Гастроэнтеролог
                    <span className="text-primary">
                      {" "}
                      • Медиком{" "}
                    </span>
                  </p>

                  <div className="flex items-center gap-1 mt-1.5 text-[14px] flex-wrap">
                    <StarIcon className="size-4 text-[#FF7C63]" />
                      <span className="font-medium text-[#FF7C63]">4.85</span>
                      <span className="text-secondary">(77)</span>
                      <span className="text-secondary">• 11 лет опыта</span>
                  </div>

                  <div className="mt-auto pt-2 flex items-center gap-2">
                    <button
                      type="button"
                      className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-8 px-4 relative after:absolute after:inset-x-0 after:-inset-y-2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent flex-1 text-[16px] py-2"
                    >
                      <span>Записаться</span>
                    </button>
                    <div>
                      <button
                        type="button"
                        aria-label="Сохранить врача"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <HeartIcon className="size-6 transition-colors" />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
              {/* Врач (horizontal) 8 */}
              <Link
                href="/specialists/8"
                className="bg-white rounded-2xl border border-border-soft p-2.5 flex items-stretch gap-2.5 w-full cursor-pointer hover:border-primary/40 transition-colors"
              >
                <div className="relative w-30 min-w-30 self-stretch rounded-2xl overflow-hidden bg-primary-tint">
                  <img
                    src="/images/doctors/doctor-8.png"
                    alt="Кадыров Руслан Эркинович"
                    className="absolute inset-0 h-full w-full object-cover object-top scale-110"
                  />
                </div>

                <div className="flex-1 min-w-0 py-0.5 flex flex-col">
                  <p className="font-semibold text-[18px] text-foreground leading-tight truncate">
                    Кадыров Руслан Эркинович
                  </p>

                  <p className="text-[14px] text-secondary truncate mt-1">
                    Пульмонолог
                    <span className="text-primary">
                      {" "}
                      • Нео Клиник{" "}
                    </span>
                  </p>

                  <div className="flex items-center gap-1 mt-1.5 text-[14px] flex-wrap">
                    <span className="text-secondary">3 года опыта</span>
                  </div>

                  <div className="mt-auto pt-2 flex items-center gap-2">
                    <button
                      type="button"
                      className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-8 px-4 relative after:absolute after:inset-x-0 after:-inset-y-2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent flex-1 text-[16px] py-2"
                    >
                      <span>Записаться</span>
                    </button>
                    <div>
                      <button
                        type="button"
                        aria-label="Сохранить врача"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <HeartIcon className="size-6 transition-colors" />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Десктоп вид */}
            <div className="hidden md:grid md:grid-cols-4 gap-3 items-stretch">
              {/* Врач (vertical) 1 */}
              <Link
                href="/specialists/1"
                className="bg-white rounded-3xl border border-border-soft p-2 w-full h-full flex flex-col relative cursor-pointer hover:border-primary/40 transition-colors"
              >
                <div className="relative aspect-square w-full">
                  <div className="rounded-2xl overflow-hidden bg-primary-tint absolute inset-0">
                    <img
                      src="/images/doctors/doctor-1.png"
                      alt="Асанова Айгуль Бакытовна"
                      className="absolute inset-0 h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute top-2 right-2 z-10">
                    <button
                      type="button"
                      aria-label="Сохранить врача"
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                    >
                      <HeartIcon className="size-6 transition-colors" />
                    </button>
                  </div>
                </div>

                <div className="flex-1 px-1 mt-3">
                  <p className="font-semibold text-sm text-foreground leading-snug truncate">
                    Асанова Айгуль Бакытовна
                  </p>
                  <p className="text-xs text-secondary truncate mt-0.5">
                    Кардиолог
                    <span className="text-primary">
                      {" "}
                      • Медиком{" "}+1
                    </span>
                  </p>
                  <div className="flex items-center gap-1 mt-1 text-xs flex-wrap">
                    <StarIcon className="size-3.5 text-[#FF7C63]" />
                      <span className="font-medium text-[#FF7C63]">4.90</span>
                      <span className="text-secondary">(128)</span>
                      <span className="text-secondary">• 12 лет</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent w-full mt-3"
                >
                  <span>Записаться</span>
                </button>
              </Link>
              {/* Врач (vertical) 2 */}
              <Link
                href="/specialists/2"
                className="bg-white rounded-3xl border border-border-soft p-2 w-full h-full flex flex-col relative cursor-pointer hover:border-primary/40 transition-colors"
              >
                <div className="relative aspect-square w-full">
                  <div className="rounded-2xl overflow-hidden bg-primary-tint absolute inset-0">
                    <img
                      src="/images/doctors/doctor-2.png"
                      alt="Токтогулов Эрлан Маратович"
                      className="absolute inset-0 h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute top-2 right-2 z-10">
                    <button
                      type="button"
                      aria-label="Сохранить врача"
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                    >
                      <HeartIcon className="size-6 transition-colors" />
                    </button>
                  </div>
                </div>

                <div className="flex-1 px-1 mt-3">
                  <p className="font-semibold text-sm text-foreground leading-snug truncate">
                    Токтогулов Эрлан Маратович
                  </p>
                  <p className="text-xs text-secondary truncate mt-0.5">
                    Невролог
                    <span className="text-primary">
                      {" "}
                      • Нео Клиник{" "}
                    </span>
                  </p>
                  <div className="flex items-center gap-1 mt-1 text-xs flex-wrap">
                    <StarIcon className="size-3.5 text-[#FF7C63]" />
                      <span className="font-medium text-[#FF7C63]">4.80</span>
                      <span className="text-secondary">(94)</span>
                      <span className="text-secondary">• 9 лет</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent w-full mt-3"
                >
                  <span>Записаться</span>
                </button>
              </Link>
              {/* Врач (vertical) 3 */}
              <Link
                href="/specialists/3"
                className="bg-white rounded-3xl border border-border-soft p-2 w-full h-full flex flex-col relative cursor-pointer hover:border-primary/40 transition-colors"
              >
                <div className="relative aspect-square w-full">
                  <div className="rounded-2xl overflow-hidden bg-primary-tint absolute inset-0">
                    <img
                      src="/images/doctors/doctor-3.png"
                      alt="Жумабаева Назгуль Асановна"
                      className="absolute inset-0 h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute top-2 right-2 z-10">
                    <button
                      type="button"
                      aria-label="Сохранить врача"
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                    >
                      <HeartIcon className="size-6 transition-colors" />
                    </button>
                  </div>
                </div>

                <div className="flex-1 px-1 mt-3">
                  <p className="font-semibold text-sm text-foreground leading-snug truncate">
                    Жумабаева Назгуль Асановна
                  </p>
                  <p className="text-xs text-secondary truncate mt-0.5">
                    Гинеколог
                    <span className="text-primary">
                      {" "}
                      • Aya Clinic{" "}+2
                    </span>
                  </p>
                  <div className="flex items-center gap-1 mt-1 text-xs flex-wrap">
                    <StarIcon className="size-3.5 text-[#FF7C63]" />
                      <span className="font-medium text-[#FF7C63]">5.00</span>
                      <span className="text-secondary">(211)</span>
                      <span className="text-secondary">• 15 лет</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent w-full mt-3"
                >
                  <span>Записаться</span>
                </button>
              </Link>
              {/* Врач (vertical) 4 */}
              <Link
                href="/specialists/4"
                className="bg-white rounded-3xl border border-border-soft p-2 w-full h-full flex flex-col relative cursor-pointer hover:border-primary/40 transition-colors"
              >
                <div className="relative aspect-square w-full">
                  <div className="rounded-2xl overflow-hidden bg-primary-tint absolute inset-0">
                    <img
                      src="/images/doctors/doctor-4.png"
                      alt="Осмонов Бакыт Талантович"
                      className="absolute inset-0 h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute top-2 right-2 z-10">
                    <button
                      type="button"
                      aria-label="Сохранить врача"
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                    >
                      <HeartIcon className="size-6 transition-colors" />
                    </button>
                  </div>
                </div>

                <div className="flex-1 px-1 mt-3">
                  <p className="font-semibold text-sm text-foreground leading-snug truncate">
                    Осмонов Бакыт Талантович
                  </p>
                  <p className="text-xs text-secondary truncate mt-0.5">
                    Стоматолог
                    <span className="text-primary">
                      {" "}
                      • Дента Люкс{" "}
                    </span>
                  </p>
                  <div className="flex items-center gap-1 mt-1 text-xs flex-wrap">
                    <StarIcon className="size-3.5 text-[#FF7C63]" />
                      <span className="font-medium text-[#FF7C63]">4.70</span>
                      <span className="text-secondary">(56)</span>
                      <span className="text-secondary">• 7 лет</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent w-full mt-3"
                >
                  <span>Записаться</span>
                </button>
              </Link>
              {/* Врач (vertical) 5 */}
              <Link
                href="/specialists/5"
                className="bg-white rounded-3xl border border-border-soft p-2 w-full h-full flex flex-col relative cursor-pointer hover:border-primary/40 transition-colors"
              >
                <div className="relative aspect-square w-full">
                  <div className="rounded-2xl overflow-hidden bg-primary-tint absolute inset-0">
                    <img
                      src="/images/doctors/doctor-5.png"
                      alt="Садыкова Жибек Нурлановна"
                      className="absolute inset-0 h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute top-2 right-2 z-10">
                    <button
                      type="button"
                      aria-label="Сохранить врача"
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                    >
                      <HeartIcon className="size-6 transition-colors" />
                    </button>
                  </div>
                </div>

                <div className="flex-1 px-1 mt-3">
                  <p className="font-semibold text-sm text-foreground leading-snug truncate">
                    Садыкова Жибек Нурлановна
                  </p>
                  <p className="text-xs text-secondary truncate mt-0.5">
                    Офтальмолог
                    <span className="text-primary">
                      {" "}
                      • Оптимед{" "}
                    </span>
                  </p>
                  <div className="flex items-center gap-1 mt-1 text-xs flex-wrap">
                    <StarIcon className="size-3.5 text-[#FF7C63]" />
                      <span className="font-medium text-[#FF7C63]">4.95</span>
                      <span className="text-secondary">(143)</span>
                      <span className="text-secondary">• 21 год</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent w-full mt-3"
                >
                  <span>Записаться</span>
                </button>
              </Link>
              {/* Врач (vertical) 6 */}
              <Link
                href="/specialists/6"
                className="bg-white rounded-3xl border border-border-soft p-2 w-full h-full flex flex-col relative cursor-pointer hover:border-primary/40 transition-colors"
              >
                <div className="relative aspect-square w-full">
                  <div className="rounded-2xl overflow-hidden bg-primary-tint absolute inset-0">
                    <img
                      src="/images/doctors/doctor-6.png"
                      alt="Мамытов Азамат Кубанычевич"
                      className="absolute inset-0 h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute top-2 right-2 z-10">
                    <button
                      type="button"
                      aria-label="Сохранить врача"
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                    >
                      <HeartIcon className="size-6 transition-colors" />
                    </button>
                  </div>
                </div>

                <div className="flex-1 px-1 mt-3">
                  <p className="font-semibold text-sm text-foreground leading-snug truncate">
                    Мамытов Азамат Кубанычевич
                  </p>
                  <p className="text-xs text-secondary truncate mt-0.5">
                    Оториноларинголог
                    <span className="text-primary">
                      {" "}
                      • Кыргызско-Турецкая клиника{" "}+1
                    </span>
                  </p>
                  <div className="flex items-center gap-1 mt-1 text-xs flex-wrap">
                    <StarIcon className="size-3.5 text-[#FF7C63]" />
                      <span className="font-medium text-[#FF7C63]">4.60</span>
                      <span className="text-secondary">(38)</span>
                      <span className="text-secondary">• 4 года</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent w-full mt-3"
                >
                  <span>Записаться</span>
                </button>
              </Link>
              {/* Врач (vertical) 7 */}
              <Link
                href="/specialists/7"
                className="bg-white rounded-3xl border border-border-soft p-2 w-full h-full flex flex-col relative cursor-pointer hover:border-primary/40 transition-colors"
              >
                <div className="relative aspect-square w-full">
                  <div className="rounded-2xl overflow-hidden bg-primary-tint absolute inset-0">
                    <img
                      src="/images/doctors/doctor-7.png"
                      alt="Ибраимова Динара Сейтековна"
                      className="absolute inset-0 h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute top-2 right-2 z-10">
                    <button
                      type="button"
                      aria-label="Сохранить врача"
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                    >
                      <HeartIcon className="size-6 transition-colors" />
                    </button>
                  </div>
                </div>

                <div className="flex-1 px-1 mt-3">
                  <p className="font-semibold text-sm text-foreground leading-snug truncate">
                    Ибраимова Динара Сейтековна
                  </p>
                  <p className="text-xs text-secondary truncate mt-0.5">
                    Гастроэнтеролог
                    <span className="text-primary">
                      {" "}
                      • Медиком{" "}
                    </span>
                  </p>
                  <div className="flex items-center gap-1 mt-1 text-xs flex-wrap">
                    <StarIcon className="size-3.5 text-[#FF7C63]" />
                      <span className="font-medium text-[#FF7C63]">4.85</span>
                      <span className="text-secondary">(77)</span>
                      <span className="text-secondary">• 11 лет</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent w-full mt-3"
                >
                  <span>Записаться</span>
                </button>
              </Link>
              {/* Врач (vertical) 8 */}
              <Link
                href="/specialists/8"
                className="bg-white rounded-3xl border border-border-soft p-2 w-full h-full flex flex-col relative cursor-pointer hover:border-primary/40 transition-colors"
              >
                <div className="relative aspect-square w-full">
                  <div className="rounded-2xl overflow-hidden bg-primary-tint absolute inset-0">
                    <img
                      src="/images/doctors/doctor-8.png"
                      alt="Кадыров Руслан Эркинович"
                      className="absolute inset-0 h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute top-2 right-2 z-10">
                    <button
                      type="button"
                      aria-label="Сохранить врача"
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                    >
                      <HeartIcon className="size-6 transition-colors" />
                    </button>
                  </div>
                </div>

                <div className="flex-1 px-1 mt-3">
                  <p className="font-semibold text-sm text-foreground leading-snug truncate">
                    Кадыров Руслан Эркинович
                  </p>
                  <p className="text-xs text-secondary truncate mt-0.5">
                    Пульмонолог
                    <span className="text-primary">
                      {" "}
                      • Нео Клиник{" "}
                    </span>
                  </p>
                  <div className="flex items-center gap-1 mt-1 text-xs flex-wrap">
                    <span className="text-secondary">3 года</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent w-full mt-3"
                >
                  <span>Записаться</span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* ===================== СПЕЦИАЛИЗАЦИИ ===================== */}
        <section className="w-full max-w-360 mx-auto px-4 md:px-10 pt-8 pb-0 md:py-12">
          <div className="flex items-start justify-between mb-6 md:mb-8">
            <div>
              <h2 className="text-2xl md:text-[32px] font-bold text-foreground leading-tight">
                Специализации
              </h2>
              <p className="hidden md:block text-muted text-base mt-1">
                Весь спектр услуг на одной площадке
              </p>
            </div>
            <Link
              href="/specialists"
              className="md:hidden text-primary text-sm font-medium mt-1"
            >
              Все
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {/* Специализация 1 */}
            <Link
              href="/specialists?doc_spec=Оториноларингология"
              className="group flex flex-col items-center gap-3 md:gap-4 p-4 md:p-6 bg-white border border-border rounded-2xl md:rounded-3xl cursor-pointer hover:border-primary/40 hover:shadow-sm transition-all duration-200"
            >
              <div className="relative w-20 h-20 md:w-28 md:h-28 shrink-0">
                <img
                  src="/images/services/lor.png"
                  alt="Оториноларингология"
                  className="absolute inset-0 h-full w-full object-contain group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <span className="text-sm md:text-base font-medium text-foreground text-center leading-snug">
                Оториноларингология
              </span>
            </Link>
            {/* Специализация 2 */}
            <Link
              href="/specialists?doc_spec=Неврология"
              className="group flex flex-col items-center gap-3 md:gap-4 p-4 md:p-6 bg-white border border-border rounded-2xl md:rounded-3xl cursor-pointer hover:border-primary/40 hover:shadow-sm transition-all duration-200"
            >
              <div className="relative w-20 h-20 md:w-28 md:h-28 shrink-0">
                <img
                  src="/images/services/nevrology.png"
                  alt="Неврология"
                  className="absolute inset-0 h-full w-full object-contain group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <span className="text-sm md:text-base font-medium text-foreground text-center leading-snug">
                Неврология
              </span>
            </Link>
            {/* Специализация 3 */}
            <Link
              href="/specialists?doc_spec=Гинекология"
              className="group flex flex-col items-center gap-3 md:gap-4 p-4 md:p-6 bg-white border border-border rounded-2xl md:rounded-3xl cursor-pointer hover:border-primary/40 hover:shadow-sm transition-all duration-200"
            >
              <div className="relative w-20 h-20 md:w-28 md:h-28 shrink-0">
                <img
                  src="/images/services/ginecology.png"
                  alt="Гинекология"
                  className="absolute inset-0 h-full w-full object-contain group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <span className="text-sm md:text-base font-medium text-foreground text-center leading-snug">
                Гинекология
              </span>
            </Link>
            {/* Специализация 4 */}
            <Link
              href="/specialists?doc_spec=Кардиология"
              className="group flex flex-col items-center gap-3 md:gap-4 p-4 md:p-6 bg-white border border-border rounded-2xl md:rounded-3xl cursor-pointer hover:border-primary/40 hover:shadow-sm transition-all duration-200"
            >
              <div className="relative w-20 h-20 md:w-28 md:h-28 shrink-0">
                <img
                  src="/images/services/cardiology.png"
                  alt="Кардиология"
                  className="absolute inset-0 h-full w-full object-contain group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <span className="text-sm md:text-base font-medium text-foreground text-center leading-snug">
                Кардиология
              </span>
            </Link>
            {/* Специализация 5 */}
            <Link
              href="/specialists?doc_spec=Пульмонология"
              className="group flex flex-col items-center gap-3 md:gap-4 p-4 md:p-6 bg-white border border-border rounded-2xl md:rounded-3xl cursor-pointer hover:border-primary/40 hover:shadow-sm transition-all duration-200"
            >
              <div className="relative w-20 h-20 md:w-28 md:h-28 shrink-0">
                <img
                  src="/images/services/pulmonology.png"
                  alt="Пульмонология"
                  className="absolute inset-0 h-full w-full object-contain group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <span className="text-sm md:text-base font-medium text-foreground text-center leading-snug">
                Пульмонология
              </span>
            </Link>
            {/* Специализация 6 */}
            <Link
              href="/specialists?doc_spec=Офтальмология"
              className="group flex flex-col items-center gap-3 md:gap-4 p-4 md:p-6 bg-white border border-border rounded-2xl md:rounded-3xl cursor-pointer hover:border-primary/40 hover:shadow-sm transition-all duration-200"
            >
              <div className="relative w-20 h-20 md:w-28 md:h-28 shrink-0">
                <img
                  src="/images/services/ophthalmology.png"
                  alt="Офтальмология"
                  className="absolute inset-0 h-full w-full object-contain group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <span className="text-sm md:text-base font-medium text-foreground text-center leading-snug">
                Офтальмология
              </span>
            </Link>
            {/* Специализация 7 */}
            <Link
              href="/specialists?doc_spec=Гастроэнтерология"
              className="group flex flex-col items-center gap-3 md:gap-4 p-4 md:p-6 bg-white border border-border rounded-2xl md:rounded-3xl cursor-pointer hover:border-primary/40 hover:shadow-sm transition-all duration-200"
            >
              <div className="relative w-20 h-20 md:w-28 md:h-28 shrink-0">
                <img
                  src="/images/services/gastroenterology.png"
                  alt="Гастроэнтерология"
                  className="absolute inset-0 h-full w-full object-contain group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <span className="text-sm md:text-base font-medium text-foreground text-center leading-snug">
                Гастроэнтерология
              </span>
            </Link>
            {/* Специализация 8 */}
            <Link
              href="/specialists?doc_spec=Стоматология"
              className="group flex flex-col items-center gap-3 md:gap-4 p-4 md:p-6 bg-white border border-border rounded-2xl md:rounded-3xl cursor-pointer hover:border-primary/40 hover:shadow-sm transition-all duration-200"
            >
              <div className="relative w-20 h-20 md:w-28 md:h-28 shrink-0">
                <img
                  src="/images/services/dentistry.png"
                  alt="Стоматология"
                  className="absolute inset-0 h-full w-full object-contain group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <span className="text-sm md:text-base font-medium text-foreground text-center leading-snug">
                Стоматология
              </span>
            </Link>
          </div>
        </section>

        {/* ===================== КЛИНИКИ (ClinicsMainList) ===================== */}
        <div style={{ minHeight: 520 }}>
          <div className="max-w-340 mx-auto pt-8 md:pt-0 pb-0 md:pb-30 px-4">
            {/* FilterBar (только lg+) */}
            <div className="hidden lg:block">
              <div className="w-full">
                <div className="max-w-200">
                  <h2 className="text-[40px] font-semibold leading-none">Клиники</h2>
                </div>
                <p className="text-secondary text-lg mt-4 mb-6">
                  Поиск в г.{" "}
                  <span className="font-medium text-foreground">Бишкек</span>.
                  Выберите интересующие вас параметры, чтобы ознакомиться с
                  подходящими вариантами
                </p>

                <div className="grid grid-cols-4 gap-5 items-start">
                  <div className="flex flex-col gap-1.5 w-full">
                    <span className="text-overlay text-sm font-medium">Специализация</span>

                    <div className="relative">
                      <div
                        role="combobox"
                        tabIndex={0}
                        aria-expanded={false}
                        aria-haspopup="listbox"
                        className="flex items-center justify-between min-h-10.5 p-3 border rounded-lg cursor-pointer transition-all duration-200 bg-white select-none border-border-soft outline-none focus-visible:border-primary focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] hover:border-primary/50"
                      >
                        <div className="flex flex-wrap items-center gap-1.5 flex-1 min-w-0 overflow-hidden">
                          <span className="truncate text-foreground">Все</span>
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
                          <span className="truncate text-foreground">Все</span>
                        </div>
                        <DropdownArrowIcon className="text-muted transition-transform duration-300 size-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between lg:hidden">
              <h2 className="text-[18px] font-medium text-foreground">Клиники</h2>
              <Link href="/clinics">
                <button
                  type="button"
                  className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-12 text-sm md:text-base px-6 active:bg-border-soft hover:bg-background text-[#FF7C63]"
                >
                  <span>Все</span>
                </button>
              </Link>
            </div>

            <div className="flex flex-col gap-3 lg:mt-10">
              <div className="flex flex-col gap-2 md:hidden">
                {/* Клиника (horizontal) 1 */}
                <Link
                  href="/clinics/1"
                  className="bg-white rounded-2xl border border-border-soft overflow-hidden flex items-stretch w-full cursor-pointer hover:border-primary/40 transition-colors"
                >
                  <div className="relative w-35">
                    <img
                      src="/images/clinics/clinic-1.png"
                      alt="Медицинский центр «Медиком»"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-3 flex-1 min-w-0">
                    <p className="font-semibold text-sm text-foreground truncate">
                      Медицинский центр «Медиком»
                    </p>
                    <div className="flex items-center gap-1 mt-1 text-xs flex-wrap">
                      <StarIcon className="size-3.5 text-[#FFA18D]" />
                      <span className="font-medium text-[#FFA18D]">4.80</span>
                      <span className="text-secondary">(312)</span>
                      <span className="text-secondary">• 15 лет опыта</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-xs text-secondary">
                      <GeoIcon className="size-3.5 text-primary" />
                      <span className="truncate">г. Бишкек, ул. Токтогула, 125</span>
                    </div>
                    <div className="flex justify-end mt-2">
                      <button
                        type="button"
                        aria-label="Сохранить клинику"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <HeartIcon className="size-6 transition-colors" />
                      </button>
                    </div>
                  </div>
                </Link>
                {/* Клиника (horizontal) 2 */}
                <Link
                  href="/clinics/2"
                  className="bg-white rounded-2xl border border-border-soft overflow-hidden flex items-stretch w-full cursor-pointer hover:border-primary/40 transition-colors"
                >
                  <div className="relative w-35">
                    <img
                      src="/images/clinics/clinic-2.png"
                      alt="Нео Клиник"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-3 flex-1 min-w-0">
                    <p className="font-semibold text-sm text-foreground truncate">
                      Нео Клиник
                    </p>
                    <div className="flex items-center gap-1 mt-1 text-xs flex-wrap">
                      <StarIcon className="size-3.5 text-[#FFA18D]" />
                      <span className="font-medium text-[#FFA18D]">4.70</span>
                      <span className="text-secondary">(186)</span>
                      <span className="text-secondary">• 8 лет опыта</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-xs text-secondary">
                      <GeoIcon className="size-3.5 text-primary" />
                      <span className="truncate">г. Бишкек, пр. Чуй, 204</span>
                    </div>
                    <div className="flex justify-end mt-2">
                      <button
                        type="button"
                        aria-label="Сохранить клинику"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <HeartIcon className="size-6 transition-colors" />
                      </button>
                    </div>
                  </div>
                </Link>
                {/* Клиника (horizontal) 3 */}
                <Link
                  href="/clinics/3"
                  className="bg-white rounded-2xl border border-border-soft overflow-hidden flex items-stretch w-full cursor-pointer hover:border-primary/40 transition-colors"
                >
                  <div className="relative w-35">
                    <img
                      src="/images/clinics/clinic-3.png"
                      alt="Aya Clinic"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-3 flex-1 min-w-0">
                    <p className="font-semibold text-sm text-foreground truncate">
                      Aya Clinic
                    </p>
                    <div className="flex items-center gap-1 mt-1 text-xs flex-wrap">
                      <StarIcon className="size-3.5 text-[#FFA18D]" />
                      <span className="font-medium text-[#FFA18D]">4.90</span>
                      <span className="text-secondary">(264)</span>
                      <span className="text-secondary">• 11 лет опыта</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-xs text-secondary">
                      <GeoIcon className="size-3.5 text-primary" />
                      <span className="truncate">г. Бишкек, ул. Киевская, 77</span>
                    </div>
                    <div className="flex justify-end mt-2">
                      <button
                        type="button"
                        aria-label="Сохранить клинику"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <HeartIcon className="size-6 transition-colors" />
                      </button>
                    </div>
                  </div>
                </Link>
                {/* Клиника (horizontal) 4 */}
                <Link
                  href="/clinics/4"
                  className="bg-white rounded-2xl border border-border-soft overflow-hidden flex items-stretch w-full cursor-pointer hover:border-primary/40 transition-colors"
                >
                  <div className="relative w-35">
                    <img
                      src="/images/clinics/clinic-4.png"
                      alt="Стоматология «Дента Люкс»"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-3 flex-1 min-w-0">
                    <p className="font-semibold text-sm text-foreground truncate">
                      Стоматология «Дента Люкс»
                    </p>
                    <div className="flex items-center gap-1 mt-1 text-xs flex-wrap">
                      <StarIcon className="size-3.5 text-[#FFA18D]" />
                      <span className="font-medium text-[#FFA18D]">4.60</span>
                      <span className="text-secondary">(98)</span>
                      <span className="text-secondary">• 6 лет опыта</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-xs text-secondary">
                      <GeoIcon className="size-3.5 text-primary" />
                      <span className="truncate">г. Бишкек, ул. Ахунбаева, 98/1</span>
                    </div>
                    <div className="flex justify-end mt-2">
                      <button
                        type="button"
                        aria-label="Сохранить клинику"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <HeartIcon className="size-6 transition-colors" />
                      </button>
                    </div>
                  </div>
                </Link>
                {/* Клиника (horizontal) 5 */}
                <Link
                  href="/clinics/5"
                  className="bg-white rounded-2xl border border-border-soft overflow-hidden flex items-stretch w-full cursor-pointer hover:border-primary/40 transition-colors"
                >
                  <div className="relative w-35">
                    <img
                      src="/images/clinics/clinic-2.png"
                      alt="Глазная клиника «Оптимед»"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-3 flex-1 min-w-0">
                    <p className="font-semibold text-sm text-foreground truncate">
                      Глазная клиника «Оптимед»
                    </p>
                    <div className="flex items-center gap-1 mt-1 text-xs flex-wrap">
                      <StarIcon className="size-3.5 text-[#FFA18D]" />
                      <span className="font-medium text-[#FFA18D]">4.85</span>
                      <span className="text-secondary">(141)</span>
                      <span className="text-secondary">• 10 лет опыта</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-xs text-secondary">
                      <GeoIcon className="size-3.5 text-primary" />
                      <span className="truncate">г. Бишкек, мкр. Джал, 23/5</span>
                    </div>
                    <div className="flex justify-end mt-2">
                      <button
                        type="button"
                        aria-label="Сохранить клинику"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <HeartIcon className="size-6 transition-colors" />
                      </button>
                    </div>
                  </div>
                </Link>
                {/* Клиника (horizontal) 6 */}
                <Link
                  href="/clinics/6"
                  className="bg-white rounded-2xl border border-border-soft overflow-hidden flex items-stretch w-full cursor-pointer hover:border-primary/40 transition-colors"
                >
                  <div className="relative w-35">
                    <img
                      src="/images/clinics/clinic-1.png"
                      alt="Кыргызско-Турецкая клиника"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-3 flex-1 min-w-0">
                    <p className="font-semibold text-sm text-foreground truncate">
                      Кыргызско-Турецкая клиника
                    </p>
                    <div className="flex items-center gap-1 mt-1 text-xs flex-wrap">
                      <StarIcon className="size-3.5 text-[#FFA18D]" />
                      <span className="font-medium text-[#FFA18D]">4.75</span>
                      <span className="text-secondary">(203)</span>
                      <span className="text-secondary">• 21 год опыта</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-xs text-secondary">
                      <GeoIcon className="size-3.5 text-primary" />
                      <span className="truncate">г. Бишкек, ул. Байтик Баатыра, 9</span>
                    </div>
                    <div className="flex justify-end mt-2">
                      <button
                        type="button"
                        aria-label="Сохранить клинику"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <HeartIcon className="size-6 transition-colors" />
                      </button>
                    </div>
                  </div>
                </Link>
                {/* Клиника (horizontal) 7 */}
                <Link
                  href="/clinics/7"
                  className="bg-white rounded-2xl border border-border-soft overflow-hidden flex items-stretch w-full cursor-pointer hover:border-primary/40 transition-colors"
                >
                  <div className="relative w-35">
                    <img
                      src="/images/clinics/clinic-4.png"
                      alt="Семейная клиника «Бонецкий»"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-3 flex-1 min-w-0">
                    <p className="font-semibold text-sm text-foreground truncate">
                      Семейная клиника «Бонецкий»
                    </p>
                    <div className="flex items-center gap-1 mt-1 text-xs flex-wrap">
                      <StarIcon className="size-3.5 text-[#FFA18D]" />
                      <span className="font-medium text-[#FFA18D]">4.50</span>
                      <span className="text-secondary">(67)</span>
                      <span className="text-secondary">• 4 года опыта</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-xs text-secondary">
                      <GeoIcon className="size-3.5 text-primary" />
                      <span className="truncate">г. Бишкек, ул. Исанова, 42</span>
                    </div>
                    <div className="flex justify-end mt-2">
                      <button
                        type="button"
                        aria-label="Сохранить клинику"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <HeartIcon className="size-6 transition-colors" />
                      </button>
                    </div>
                  </div>
                </Link>
                {/* Клиника (horizontal) 8 */}
                <Link
                  href="/clinics/8"
                  className="bg-white rounded-2xl border border-border-soft overflow-hidden flex items-stretch w-full cursor-pointer hover:border-primary/40 transition-colors"
                >
                  <div className="relative w-35">
                    <div className="w-full h-full bg-linear-to-br from-[#FFF2F0] to-[#FFD9CC] flex flex-col items-center justify-center gap-2 p-3">
                      <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shrink-0">
                        <span className="text-white font-bold text-lg leading-none">
                          ЗП
                        </span>
                      </div>
                      <p className="text-primary text-xs font-medium text-center line-clamp-2 leading-tight">
                        «Здоровье Плюс»
                      </p>
                    </div>
                  </div>
                  <div className="p-3 flex-1 min-w-0">
                    <p className="font-semibold text-sm text-foreground truncate">
                      «Здоровье Плюс»
                    </p>
                    <div className="flex items-center gap-1 mt-1 text-xs flex-wrap">
                      <StarIcon className="size-3.5 text-[#FFA18D]" />
                      <span className="font-medium text-[#FFA18D]">5.00</span>
                      <span className="text-secondary">(45)</span>
                      <span className="text-secondary">• 3 года опыта</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-xs text-secondary">
                      <GeoIcon className="size-3.5 text-primary" />
                      <span className="truncate">г. Бишкек, пр. Жибек Жолу, 488</span>
                    </div>
                    <div className="flex justify-end mt-2">
                      <button
                        type="button"
                        aria-label="Сохранить клинику"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <HeartIcon className="size-6 transition-colors" />
                      </button>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="hidden md:grid md:grid-cols-4 gap-3 items-stretch">
                {/* Клиника (vertical) 1 */}
                <Link
                  href="/clinics/1"
                  className="bg-white rounded-3xl border border-border-soft w-full h-full flex flex-col p-2 cursor-pointer hover:border-primary/40 transition-colors"
                >
                  <div className="relative w-full h-55 rounded-2xl overflow-hidden">
                    <img
                      src="/images/clinics/clinic-1.png"
                      alt="Медицинский центр «Медиком»"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <button
                        type="button"
                        aria-label="Сохранить клинику"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <HeartIcon className="size-6 transition-colors" />
                      </button>
                    </div>
                  </div>

                  <div className="p-3">
                    <p className="font-semibold text-sm text-foreground truncate">
                      Медицинский центр «Медиком»
                    </p>
                    <div className="flex items-center gap-1 mt-1 text-xs flex-wrap">
                      <StarIcon className="size-3.5 text-[#FFA18D]" />
                      <span className="font-medium text-[#FFA18D]">4.80</span>
                      <span className="text-secondary">(312)</span>
                      <span className="text-secondary">• 15 лет опыта</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-xs text-secondary">
                      <GeoIcon className="size-3.5 text-primary" />
                      <span className="truncate">г. Бишкек, ул. Токтогула, 125</span>
                    </div>
                  </div>
                </Link>
                {/* Клиника (vertical) 2 */}
                <Link
                  href="/clinics/2"
                  className="bg-white rounded-3xl border border-border-soft w-full h-full flex flex-col p-2 cursor-pointer hover:border-primary/40 transition-colors"
                >
                  <div className="relative w-full h-55 rounded-2xl overflow-hidden">
                    <img
                      src="/images/clinics/clinic-2.png"
                      alt="Нео Клиник"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <button
                        type="button"
                        aria-label="Сохранить клинику"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <HeartIcon className="size-6 transition-colors" />
                      </button>
                    </div>
                  </div>

                  <div className="p-3">
                    <p className="font-semibold text-sm text-foreground truncate">
                      Нео Клиник
                    </p>
                    <div className="flex items-center gap-1 mt-1 text-xs flex-wrap">
                      <StarIcon className="size-3.5 text-[#FFA18D]" />
                      <span className="font-medium text-[#FFA18D]">4.70</span>
                      <span className="text-secondary">(186)</span>
                      <span className="text-secondary">• 8 лет опыта</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-xs text-secondary">
                      <GeoIcon className="size-3.5 text-primary" />
                      <span className="truncate">г. Бишкек, пр. Чуй, 204</span>
                    </div>
                  </div>
                </Link>
                {/* Клиника (vertical) 3 */}
                <Link
                  href="/clinics/3"
                  className="bg-white rounded-3xl border border-border-soft w-full h-full flex flex-col p-2 cursor-pointer hover:border-primary/40 transition-colors"
                >
                  <div className="relative w-full h-55 rounded-2xl overflow-hidden">
                    <img
                      src="/images/clinics/clinic-3.png"
                      alt="Aya Clinic"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <button
                        type="button"
                        aria-label="Сохранить клинику"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <HeartIcon className="size-6 transition-colors" />
                      </button>
                    </div>
                  </div>

                  <div className="p-3">
                    <p className="font-semibold text-sm text-foreground truncate">
                      Aya Clinic
                    </p>
                    <div className="flex items-center gap-1 mt-1 text-xs flex-wrap">
                      <StarIcon className="size-3.5 text-[#FFA18D]" />
                      <span className="font-medium text-[#FFA18D]">4.90</span>
                      <span className="text-secondary">(264)</span>
                      <span className="text-secondary">• 11 лет опыта</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-xs text-secondary">
                      <GeoIcon className="size-3.5 text-primary" />
                      <span className="truncate">г. Бишкек, ул. Киевская, 77</span>
                    </div>
                  </div>
                </Link>
                {/* Клиника (vertical) 4 */}
                <Link
                  href="/clinics/4"
                  className="bg-white rounded-3xl border border-border-soft w-full h-full flex flex-col p-2 cursor-pointer hover:border-primary/40 transition-colors"
                >
                  <div className="relative w-full h-55 rounded-2xl overflow-hidden">
                    <img
                      src="/images/clinics/clinic-4.png"
                      alt="Стоматология «Дента Люкс»"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <button
                        type="button"
                        aria-label="Сохранить клинику"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <HeartIcon className="size-6 transition-colors" />
                      </button>
                    </div>
                  </div>

                  <div className="p-3">
                    <p className="font-semibold text-sm text-foreground truncate">
                      Стоматология «Дента Люкс»
                    </p>
                    <div className="flex items-center gap-1 mt-1 text-xs flex-wrap">
                      <StarIcon className="size-3.5 text-[#FFA18D]" />
                      <span className="font-medium text-[#FFA18D]">4.60</span>
                      <span className="text-secondary">(98)</span>
                      <span className="text-secondary">• 6 лет опыта</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-xs text-secondary">
                      <GeoIcon className="size-3.5 text-primary" />
                      <span className="truncate">г. Бишкек, ул. Ахунбаева, 98/1</span>
                    </div>
                  </div>
                </Link>
                {/* Клиника (vertical) 5 */}
                <Link
                  href="/clinics/5"
                  className="bg-white rounded-3xl border border-border-soft w-full h-full flex flex-col p-2 cursor-pointer hover:border-primary/40 transition-colors"
                >
                  <div className="relative w-full h-55 rounded-2xl overflow-hidden">
                    <img
                      src="/images/clinics/clinic-2.png"
                      alt="Глазная клиника «Оптимед»"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <button
                        type="button"
                        aria-label="Сохранить клинику"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <HeartIcon className="size-6 transition-colors" />
                      </button>
                    </div>
                  </div>

                  <div className="p-3">
                    <p className="font-semibold text-sm text-foreground truncate">
                      Глазная клиника «Оптимед»
                    </p>
                    <div className="flex items-center gap-1 mt-1 text-xs flex-wrap">
                      <StarIcon className="size-3.5 text-[#FFA18D]" />
                      <span className="font-medium text-[#FFA18D]">4.85</span>
                      <span className="text-secondary">(141)</span>
                      <span className="text-secondary">• 10 лет опыта</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-xs text-secondary">
                      <GeoIcon className="size-3.5 text-primary" />
                      <span className="truncate">г. Бишкек, мкр. Джал, 23/5</span>
                    </div>
                  </div>
                </Link>
                {/* Клиника (vertical) 6 */}
                <Link
                  href="/clinics/6"
                  className="bg-white rounded-3xl border border-border-soft w-full h-full flex flex-col p-2 cursor-pointer hover:border-primary/40 transition-colors"
                >
                  <div className="relative w-full h-55 rounded-2xl overflow-hidden">
                    <img
                      src="/images/clinics/clinic-1.png"
                      alt="Кыргызско-Турецкая клиника"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <button
                        type="button"
                        aria-label="Сохранить клинику"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <HeartIcon className="size-6 transition-colors" />
                      </button>
                    </div>
                  </div>

                  <div className="p-3">
                    <p className="font-semibold text-sm text-foreground truncate">
                      Кыргызско-Турецкая клиника
                    </p>
                    <div className="flex items-center gap-1 mt-1 text-xs flex-wrap">
                      <StarIcon className="size-3.5 text-[#FFA18D]" />
                      <span className="font-medium text-[#FFA18D]">4.75</span>
                      <span className="text-secondary">(203)</span>
                      <span className="text-secondary">• 21 год опыта</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-xs text-secondary">
                      <GeoIcon className="size-3.5 text-primary" />
                      <span className="truncate">г. Бишкек, ул. Байтик Баатыра, 9</span>
                    </div>
                  </div>
                </Link>
                {/* Клиника (vertical) 7 */}
                <Link
                  href="/clinics/7"
                  className="bg-white rounded-3xl border border-border-soft w-full h-full flex flex-col p-2 cursor-pointer hover:border-primary/40 transition-colors"
                >
                  <div className="relative w-full h-55 rounded-2xl overflow-hidden">
                    <img
                      src="/images/clinics/clinic-4.png"
                      alt="Семейная клиника «Бонецкий»"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <button
                        type="button"
                        aria-label="Сохранить клинику"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <HeartIcon className="size-6 transition-colors" />
                      </button>
                    </div>
                  </div>

                  <div className="p-3">
                    <p className="font-semibold text-sm text-foreground truncate">
                      Семейная клиника «Бонецкий»
                    </p>
                    <div className="flex items-center gap-1 mt-1 text-xs flex-wrap">
                      <StarIcon className="size-3.5 text-[#FFA18D]" />
                      <span className="font-medium text-[#FFA18D]">4.50</span>
                      <span className="text-secondary">(67)</span>
                      <span className="text-secondary">• 4 года опыта</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-xs text-secondary">
                      <GeoIcon className="size-3.5 text-primary" />
                      <span className="truncate">г. Бишкек, ул. Исанова, 42</span>
                    </div>
                  </div>
                </Link>
                {/* Клиника (vertical) 8 */}
                <Link
                  href="/clinics/8"
                  className="bg-white rounded-3xl border border-border-soft w-full h-full flex flex-col p-2 cursor-pointer hover:border-primary/40 transition-colors"
                >
                  <div className="relative w-full h-55 rounded-2xl overflow-hidden">
                    <div className="w-full h-full bg-linear-to-br from-[#FFF2F0] to-[#FFD9CC] flex flex-col items-center justify-center gap-2 p-3">
                      <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shrink-0">
                        <span className="text-white font-bold text-lg leading-none">
                          ЗП
                        </span>
                      </div>
                      <p className="text-primary text-xs font-medium text-center line-clamp-2 leading-tight">
                        «Здоровье Плюс»
                      </p>
                    </div>
                    <div className="absolute top-2 right-2">
                      <button
                        type="button"
                        aria-label="Сохранить клинику"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-surface transition-colors shadow-sm shrink-0 disabled:opacity-70 disabled:pointer-events-none"
                      >
                        <HeartIcon className="size-6 transition-colors" />
                      </button>
                    </div>
                  </div>

                  <div className="p-3">
                    <p className="font-semibold text-sm text-foreground truncate">
                      «Здоровье Плюс»
                    </p>
                    <div className="flex items-center gap-1 mt-1 text-xs flex-wrap">
                      <StarIcon className="size-3.5 text-[#FFA18D]" />
                      <span className="font-medium text-[#FFA18D]">5.00</span>
                      <span className="text-secondary">(45)</span>
                      <span className="text-secondary">• 3 года опыта</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-xs text-secondary">
                      <GeoIcon className="size-3.5 text-primary" />
                      <span className="truncate">г. Бишкек, пр. Жибек Жолу, 488</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== БАННЕРЫ ===================== */}
        <div style={{ minHeight: 228 }}>
          <section className="mx-auto w-full max-w-360 px-4 pt-8 pb-0 md:px-10 md:pt-8 md:pb-8">
            {/* Мобильная карусель: горизонтальный скролл */}
            <div className="md:hidden">
              <div className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto">
                <div className="w-full shrink-0 snap-start">
                  <div className="relative flex h-[196px] w-full flex-col justify-between overflow-hidden rounded-[20px] bg-[#FFA18D] p-6 pb-4 md:h-[424px] md:rounded-3xl md:pb-6">
                    <div className="relative z-10">
                      <h3 className="mb-2 text-[28px] leading-tight font-bold text-white md:text-[32px]">
                        100+ процедур
                      </h3>
                      <p className="text-base leading-tight text-white">
                        Все необходимые услуги
                        <br />— быстро и удобно
                      </p>
                    </div>
                    <div className="relative z-10 flex justify-start md:justify-end">
                      <Link href="/services">
                        <button
                          type="button"
                          className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-[52px] text-base px-8 active:bg-primary-dark hover:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] w-44 border-none bg-white text-foreground hover:bg-gray-50 md:w-[156px]"
                        >
                          <span>Смотреть</span>
                        </button>
                      </Link>
                    </div>
                    <img
                      src="/images/banners/grid-first.png"
                      alt=""
                      className="pointer-events-none absolute top-[100px] right-0 z-1 hidden md:block"
                    />
                    <img
                      src="/images/banners/banner-1.png"
                      alt=""
                      className="pointer-events-none absolute bottom-6 left-0 z-0 hidden w-48 object-contain md:block"
                    />
                  </div>
                </div>
                <div className="w-full shrink-0 snap-start">
                  <div className="relative flex h-[196px] w-full flex-col overflow-hidden rounded-[20px] bg-primary-tint p-6 pb-4 md:h-[424px] md:rounded-3xl md:bg-[#F6F8F5] md:p-8">
                    <div className="relative z-10 flex h-full max-w-[360px] flex-col">
                      <h3 className="text-[28px] leading-tight font-bold text-foreground md:text-[36px]">
                        Онлайн-
                        <br className="hidden md:block" />
                        консультация
                      </h3>
                      <p className="mt-1 text-base leading-tight text-secondary md:mt-4 md:max-w-[340px]">
                        Свяжитесь с врачом из любой точки
                        <br className="md:hidden" /> — быстро, удобно и без ожидания
                      </p>
                      <div className="mt-auto md:mt-5">
                        <Link href="/record">
                          <button
                            type="button"
                            className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-[52px] text-base px-8 bg-primary text-white active:bg-primary-dark hover:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] w-48 md:w-44"
                          >
                            <span>Записаться</span>
                          </button>
                        </Link>
                      </div>
                    </div>
                    <img
                      src="/images/banners/grid-pink-slanted.png"
                      alt=""
                      className="pointer-events-none absolute bottom-0 left-0 z-0 hidden h-[192px] w-[499px] md:block"
                    />
                    <img
                      src="/images/banners/grid-pink-straight.png"
                      alt=""
                      className="pointer-events-none absolute top-0 right-0 z-0 hidden h-[193px] w-[197px] md:block"
                    />
                    <img
                      src="/images/banners/banner-2.png"
                      alt=""
                      className="pointer-events-none absolute right-8 bottom-0 z-0 hidden w-[306px] object-contain md:block"
                    />
                  </div>
                </div>
                <div className="w-full shrink-0 snap-start">
                  <div className="relative flex h-[196px] w-full flex-col justify-between overflow-hidden rounded-[20px] bg-white p-6 pb-4 md:h-[424px] md:rounded-3xl md:bg-[#F2F3F5] md:pb-6">
                    <div className="relative z-10">
                      <h3 className="mb-2 text-[28px] leading-tight font-bold text-foreground md:text-[32px]">
                        100+
                        <br className="hidden md:block" /> специалистов
                      </h3>
                      <p className="max-w-[280px] text-base leading-tight text-secondary">
                        Опытные эксперты для решения ваших задач
                      </p>
                    </div>
                    <div className="relative z-10 flex justify-start">
                      <Link href="/specialists">
                        <button
                          type="button"
                          className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-[52px] text-base px-8 border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] w-44 border-[#FFA18D] bg-white hover:bg-gray-50 md:w-[156px]"
                        >
                          <span>Смотреть</span>
                        </button>
                      </Link>
                    </div>
                    <img
                      src="/images/banners/grid-blue.png"
                      alt=""
                      className="pointer-events-none absolute bottom-0 left-0 z-0 hidden h-[276px] w-[151px] md:block"
                    />
                    <img
                      src="/images/banners/banner-3.png"
                      alt=""
                      className="pointer-events-none absolute right-10 bottom-2 z-0 hidden w-50 object-contain md:block"
                    />
                  </div>
                </div>
              </div>

              {/* Точки: активная — "w-6 bg-muted", неактивная — "w-2 bg-border-soft" */}
              <div className="mt-4 flex justify-center gap-2">
                <button
                  type="button"
                  aria-label="Перейти к баннеру 1"
                  aria-current="true"
                  className="h-2 rounded-full transition-all duration-300 w-6 bg-muted"
                />
                <button
                  type="button"
                  aria-label="Перейти к баннеру 2"
                  className="h-2 rounded-full transition-all duration-300 w-2 bg-border-soft"
                />
                <button
                  type="button"
                  aria-label="Перейти к баннеру 3"
                  className="h-2 rounded-full transition-all duration-300 w-2 bg-border-soft"
                />
              </div>
            </div>

            <div className="hidden md:grid grid-cols-4 gap-5">
              <div className="col-span-1">
                <div className="relative flex h-[196px] w-full flex-col justify-between overflow-hidden rounded-[20px] bg-[#FFA18D] p-6 pb-4 md:h-[424px] md:rounded-3xl md:pb-6">
                  <div className="relative z-10">
                    <h3 className="mb-2 text-[28px] leading-tight font-bold text-white md:text-[32px]">
                      100+ процедур
                    </h3>
                    <p className="text-base leading-tight text-white">
                      Все необходимые услуги
                      <br />— быстро и удобно
                    </p>
                  </div>
                  <div className="relative z-10 flex justify-start md:justify-end">
                    <Link href="/services">
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-[52px] text-base px-8 active:bg-primary-dark hover:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] w-44 border-none bg-white text-foreground hover:bg-gray-50 md:w-[156px]"
                      >
                        <span>Смотреть</span>
                      </button>
                    </Link>
                  </div>
                  <img
                    src="/images/banners/grid-first.png"
                    alt=""
                    className="pointer-events-none absolute top-[100px] right-0 z-1 hidden md:block"
                  />
                  <img
                    src="/images/banners/banner-1.png"
                    alt=""
                    className="pointer-events-none absolute bottom-6 left-0 z-0 hidden w-48 object-contain md:block"
                  />
                </div>
              </div>
              <div className="col-span-2">
                <div className="relative flex h-[196px] w-full flex-col overflow-hidden rounded-[20px] bg-primary-tint p-6 pb-4 md:h-[424px] md:rounded-3xl md:bg-[#F6F8F5] md:p-8">
                  <div className="relative z-10 flex h-full max-w-[360px] flex-col">
                    <h3 className="text-[28px] leading-tight font-bold text-foreground md:text-[36px]">
                      Онлайн-
                      <br className="hidden md:block" />
                      консультация
                    </h3>
                    <p className="mt-1 text-base leading-tight text-secondary md:mt-4 md:max-w-[340px]">
                      Свяжитесь с врачом из любой точки
                      <br className="md:hidden" /> — быстро, удобно и без ожидания
                    </p>
                    <div className="mt-auto md:mt-5">
                      <Link href="/record">
                        <button
                          type="button"
                          className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-[52px] text-base px-8 bg-primary text-white active:bg-primary-dark hover:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] w-48 md:w-44"
                        >
                          <span>Записаться</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                  <img
                    src="/images/banners/grid-pink-slanted.png"
                    alt=""
                    className="pointer-events-none absolute bottom-0 left-0 z-0 hidden h-[192px] w-[499px] md:block"
                  />
                  <img
                    src="/images/banners/grid-pink-straight.png"
                    alt=""
                    className="pointer-events-none absolute top-0 right-0 z-0 hidden h-[193px] w-[197px] md:block"
                  />
                  <img
                    src="/images/banners/banner-2.png"
                    alt=""
                    className="pointer-events-none absolute right-8 bottom-0 z-0 hidden w-[306px] object-contain md:block"
                  />
                </div>
              </div>
              <div className="col-span-1">
                <div className="relative flex h-[196px] w-full flex-col justify-between overflow-hidden rounded-[20px] bg-white p-6 pb-4 md:h-[424px] md:rounded-3xl md:bg-[#F2F3F5] md:pb-6">
                  <div className="relative z-10">
                    <h3 className="mb-2 text-[28px] leading-tight font-bold text-foreground md:text-[32px]">
                      100+
                      <br className="hidden md:block" /> специалистов
                    </h3>
                    <p className="max-w-[280px] text-base leading-tight text-secondary">
                      Опытные эксперты для решения ваших задач
                    </p>
                  </div>
                  <div className="relative z-10 flex justify-start">
                    <Link href="/specialists">
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-[52px] text-base px-8 border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] w-44 border-[#FFA18D] bg-white hover:bg-gray-50 md:w-[156px]"
                      >
                        <span>Смотреть</span>
                      </button>
                    </Link>
                  </div>
                  <img
                    src="/images/banners/grid-blue.png"
                    alt=""
                    className="pointer-events-none absolute bottom-0 left-0 z-0 hidden h-[276px] w-[151px] md:block"
                  />
                  <img
                    src="/images/banners/banner-3.png"
                    alt=""
                    className="pointer-events-none absolute right-10 bottom-2 z-0 hidden w-50 object-contain md:block"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ===================== ИНТЕРВЬЮ (VideosSwiper) ===================== */}
        <div className="w-full" style={{ minHeight: 320 }}>
          <section className="flex flex-col gap-6 w-full max-w-360 mx-auto px-4 md:px-10 pt-8 pb-0 md:pt-0 md:pb-0">
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-1.5">
                <h2 className="font-semibold text-xl md:text-[28px] text-foreground leading-tight">
                  Интервью
                </h2>
                <p className="hidden md:block text-sm text-secondary">
                  Ознакомьтесь с интервью наших специалистов
                </p>
              </div>

              <Link
                href="/videos"
                className="text-sm md:text-base text-primary shrink-0 hover:opacity-70 transition-opacity mt-1 md:mt-2"
              >
                Все
              </Link>
            </div>

            {/* Mobile: горизонтальный скролл, слайды ~87% ширины */}
            <div className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto md:hidden">
              {/* Интервью 1 */}
              <div className="snap-start shrink-0 w-[87%]">
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
              </div>
              {/* Интервью 2 */}
              <div className="snap-start shrink-0 w-[87%]">
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
              </div>
              {/* Интервью 3 */}
              <div className="snap-start shrink-0 w-[87%]">
                <a
                  href="https://www.youtube.com/watch?v=imbir-int-03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-3xl border border-[#D8DCE0] p-2 flex flex-col w-full h-auto md:h-89.25 shrink-0 hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300"
                >
                  <div className="relative w-full aspect-video md:aspect-auto md:h-55 shrink-0 overflow-hidden rounded-2xl bg-background">
                    <img
                      src="/images/videos/video-3.jpg"
                      alt="Планирование беременности: с чего начать и какие анализы сдать"
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
                      Планирование беременности: с чего начать и какие анализы сдать
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
              </div>
              {/* Интервью 4 */}
              <div className="snap-start shrink-0 w-[87%]">
                <a
                  href="https://www.youtube.com/watch?v=imbir-int-04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-3xl border border-[#D8DCE0] p-2 flex flex-col w-full h-auto md:h-89.25 shrink-0 hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300"
                >
                  <div className="relative w-full aspect-video md:aspect-auto md:h-55 shrink-0 overflow-hidden rounded-2xl bg-background">
                    <img
                      src="/images/videos/video-1.jpg"
                      alt="Почему нельзя откладывать лечение кариеса"
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
                      Почему нельзя откладывать лечение кариеса
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
              </div>
              {/* Интервью 5 */}
              <div className="snap-start shrink-0 w-[87%]">
                <a
                  href="https://www.youtube.com/watch?v=imbir-int-05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-3xl border border-[#D8DCE0] p-2 flex flex-col w-full h-auto md:h-89.25 shrink-0 hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300"
                >
                  <div className="relative w-full aspect-video md:aspect-auto md:h-55 shrink-0 overflow-hidden rounded-2xl bg-background">
                    <img
                      src="/images/videos/video-2.jpg"
                      alt="Компьютерный зрительный синдром: как защитить глаза"
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
                      Компьютерный зрительный синдром: как защитить глаза
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
              </div>
              {/* Интервью 6 */}
              <div className="snap-start shrink-0 w-[87%]">
                <a
                  href="https://www.youtube.com/watch?v=imbir-int-06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-3xl border border-[#D8DCE0] p-2 flex flex-col w-full h-auto md:h-89.25 shrink-0 hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300"
                >
                  <div className="relative w-full aspect-video md:aspect-auto md:h-55 shrink-0 overflow-hidden rounded-2xl bg-background">
                    <img
                      src="/images/videos/video-3.jpg"
                      alt="Гастрит и питание: мифы и правда"
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
                      Гастрит и питание: мифы и правда
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
              </div>
            </div>

            <div className="hidden md:grid md:grid-cols-3 gap-5">
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
                    alt="Планирование беременности: с чего начать и какие анализы сдать"
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
                    Планирование беременности: с чего начать и какие анализы сдать
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
                    alt="Почему нельзя откладывать лечение кариеса"
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
                    Почему нельзя откладывать лечение кариеса
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
                    alt="Компьютерный зрительный синдром: как защитить глаза"
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
                    Компьютерный зрительный синдром: как защитить глаза
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
                    alt="Гастрит и питание: мифы и правда"
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
                    Гастрит и питание: мифы и правда
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
            </div>
          </section>
        </div>

        {/* ===================== БЛОГ (variant home) ===================== */}
        <section className="mx-auto w-full max-w-360 px-3 pt-3 pb-0 md:px-8 md:pt-8 md:pb-12">
          <div className="rounded-2xl bg-white px-4 py-4 md:rounded-none md:bg-transparent md:px-0 md:py-0">
            <div className="mb-4 flex items-start justify-between md:mb-6">
              <div>
                <h2 className="text-[18px] font-semibold leading-tight text-foreground md:text-[28px]">
                  Блог
                </h2>
                <p className="hidden md:block text-muted text-base mt-1">
                  Статьи о здоровье, советы специалистов и новости медицины
                </p>
              </div>
              <Link
                href="/blog"
                className="md:hidden text-primary text-sm font-medium mt-1"
              >
                Все
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-7">
              {/* Главная статья (только десктоп) */}
              <Link
                href="/blog/kak-podgotovitsya-k-priemu-kardiologa"
                className="hidden min-w-0 overflow-hidden rounded-2xl border border-border-soft bg-white md:flex md:flex-col"
              >
                <div className="relative overflow-hidden mx-1 mt-1 aspect-[5/3] rounded-2xl">
                  <img
                    src="/images/videos/video-1.jpg"
                    alt="Как подготовиться к первому приёму у кардиолога"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 p-3.5 pt-2.5">
                  <div className="flex items-center gap-2 whitespace-nowrap text-xs leading-none">
                    <span className="font-medium text-primary">Кардиология</span>
                    <span className="text-muted">•</span>
                    <span className="hidden text-muted md:inline">12 сентября 2026</span>
                    <span className="text-muted md:hidden">12 сент. 2026</span>
                  </div>
                  <h3 className="line-clamp-2 text-base font-semibold leading-snug text-foreground">
                    Как подготовиться к первому приёму у кардиолога
                  </h3>
                  <p className="line-clamp-2 text-sm leading-snug text-secondary">
                    Какие анализы сдать заранее, что взять с собой и какие вопросы задать врачу, чтобы консультация прошла с максимальной пользой.
                  </p>
                </div>
              </Link>

              {/* Десктоп: 3 горизонтальные карточки */}
              <div className="hidden flex-col gap-3 md:flex">
                {/* Статья 1 */}
                <Link
                  href="/blog/sezonnaya-allergiya-ili-prostuda"
                  className="flex h-[108px] min-w-0 gap-2 overflow-hidden rounded-2xl border border-border-soft bg-white p-1 md:h-[120px] md:gap-3"
                >
                  <div className="relative overflow-hidden h-full w-[102px] shrink-0 rounded-xl md:w-[110px] md:rounded-2xl">
                    <img
                      src="/images/clinics/clinic-2.png"
                      alt="Сезонная аллергия или простуда: как отличить и что делать"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 px-1.5 py-2 md:gap-3 md:px-2.5">
                    <div className="flex items-center gap-2 whitespace-nowrap text-xs leading-none">
                      <span className="font-medium text-primary">Аллергология</span>
                      <span className="text-muted">•</span>
                      <span className="hidden text-muted md:inline">3 сентября 2026</span>
                      <span className="text-muted md:hidden">3 сент. 2026</span>
                    </div>
                    <h3 className="line-clamp-3 text-base font-semibold leading-[1.2] text-foreground md:line-clamp-2">
                      Сезонная аллергия или простуда: как отличить и что делать
                    </h3>
                  </div>
                </Link>
                {/* Статья 2 */}
                <Link
                  href="/blog/zachem-proveryat-zrenie"
                  className="flex h-[108px] min-w-0 gap-2 overflow-hidden rounded-2xl border border-border-soft bg-white p-1 md:h-[120px] md:gap-3"
                >
                  <div className="relative overflow-hidden h-full w-[102px] shrink-0 rounded-xl md:w-[110px] md:rounded-2xl">
                    <img
                      src="/images/videos/video-2.jpg"
                      alt="Зачем проверять зрение раз в год, даже если всё хорошо"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 px-1.5 py-2 md:gap-3 md:px-2.5">
                    <div className="flex items-center gap-2 whitespace-nowrap text-xs leading-none">
                      <span className="font-medium text-primary">Офтальмология</span>
                      <span className="text-muted">•</span>
                      <span className="hidden text-muted md:inline">28 августа 2026</span>
                      <span className="text-muted md:hidden">28 авг. 2026</span>
                    </div>
                    <h3 className="line-clamp-3 text-base font-semibold leading-[1.2] text-foreground md:line-clamp-2">
                      Зачем проверять зрение раз в год, даже если всё хорошо
                    </h3>
                  </div>
                </Link>
                {/* Статья 3 */}
                <Link
                  href="/blog/kalendar-privivok"
                  className="flex h-[108px] min-w-0 gap-2 overflow-hidden rounded-2xl border border-border-soft bg-white p-1 md:h-[120px] md:gap-3"
                >
                  <div className="relative overflow-hidden h-full w-[102px] shrink-0 rounded-xl md:w-[110px] md:rounded-2xl">
                    <img
                      src="/images/videos/video-3.jpg"
                      alt="Детские прививки: национальный календарь вакцинации в Кыргызстане"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 px-1.5 py-2 md:gap-3 md:px-2.5">
                    <div className="flex items-center gap-2 whitespace-nowrap text-xs leading-none">
                      <span className="font-medium text-primary">Педиатрия</span>
                      <span className="text-muted">•</span>
                      <span className="hidden text-muted md:inline">15 августа 2026</span>
                      <span className="text-muted md:hidden">15 авг. 2026</span>
                    </div>
                    <h3 className="line-clamp-3 text-base font-semibold leading-[1.2] text-foreground md:line-clamp-2">
                      Детские прививки: национальный календарь вакцинации в Кыргызстане
                    </h3>
                  </div>
                </Link>
              </div>

              {/* Мобильный: главная + 2 следующих */}
              <div className="flex flex-col gap-2 md:hidden">
                {/* Статья 1 */}
                <Link
                  href="/blog/kak-podgotovitsya-k-priemu-kardiologa"
                  className="flex h-[108px] min-w-0 gap-2 overflow-hidden rounded-2xl border border-border-soft bg-white p-1 md:h-[120px] md:gap-3"
                >
                  <div className="relative overflow-hidden h-full w-[102px] shrink-0 rounded-xl md:w-[110px] md:rounded-2xl">
                    <img
                      src="/images/videos/video-1.jpg"
                      alt="Как подготовиться к первому приёму у кардиолога"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 px-1.5 py-2 md:gap-3 md:px-2.5">
                    <div className="flex items-center gap-2 whitespace-nowrap text-xs leading-none">
                      <span className="font-medium text-primary">Кардиология</span>
                      <span className="text-muted">•</span>
                      <span className="hidden text-muted md:inline">12 сентября 2026</span>
                      <span className="text-muted md:hidden">12 сент. 2026</span>
                    </div>
                    <h3 className="line-clamp-3 text-base font-semibold leading-[1.2] text-foreground md:line-clamp-2">
                      Как подготовиться к первому приёму у кардиолога
                    </h3>
                  </div>
                </Link>
                {/* Статья 2 */}
                <Link
                  href="/blog/sezonnaya-allergiya-ili-prostuda"
                  className="flex h-[108px] min-w-0 gap-2 overflow-hidden rounded-2xl border border-border-soft bg-white p-1 md:h-[120px] md:gap-3"
                >
                  <div className="relative overflow-hidden h-full w-[102px] shrink-0 rounded-xl md:w-[110px] md:rounded-2xl">
                    <img
                      src="/images/clinics/clinic-2.png"
                      alt="Сезонная аллергия или простуда: как отличить и что делать"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 px-1.5 py-2 md:gap-3 md:px-2.5">
                    <div className="flex items-center gap-2 whitespace-nowrap text-xs leading-none">
                      <span className="font-medium text-primary">Аллергология</span>
                      <span className="text-muted">•</span>
                      <span className="hidden text-muted md:inline">3 сентября 2026</span>
                      <span className="text-muted md:hidden">3 сент. 2026</span>
                    </div>
                    <h3 className="line-clamp-3 text-base font-semibold leading-[1.2] text-foreground md:line-clamp-2">
                      Сезонная аллергия или простуда: как отличить и что делать
                    </h3>
                  </div>
                </Link>
                {/* Статья 3 */}
                <Link
                  href="/blog/zachem-proveryat-zrenie"
                  className="flex h-[108px] min-w-0 gap-2 overflow-hidden rounded-2xl border border-border-soft bg-white p-1 md:h-[120px] md:gap-3"
                >
                  <div className="relative overflow-hidden h-full w-[102px] shrink-0 rounded-xl md:w-[110px] md:rounded-2xl">
                    <img
                      src="/images/videos/video-2.jpg"
                      alt="Зачем проверять зрение раз в год, даже если всё хорошо"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 px-1.5 py-2 md:gap-3 md:px-2.5">
                    <div className="flex items-center gap-2 whitespace-nowrap text-xs leading-none">
                      <span className="font-medium text-primary">Офтальмология</span>
                      <span className="text-muted">•</span>
                      <span className="hidden text-muted md:inline">28 августа 2026</span>
                      <span className="text-muted md:hidden">28 авг. 2026</span>
                    </div>
                    <h3 className="line-clamp-3 text-base font-semibold leading-[1.2] text-foreground md:line-clamp-2">
                      Зачем проверять зрение раз в год, даже если всё хорошо
                    </h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== FOOTER ===================== */}
        <div style={{ minHeight: 300 }}>
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

      {/* ===================== MOBILE BOTTOM NAV (активен Home) ===================== */}
      <nav className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-border pb-[env(safe-area-inset-bottom)]">
        <div className="flex items-stretch">
          <Link
            href="/"
            className="flex-1 flex flex-col items-center justify-center gap-1 py-2.5 transition-colors text-primary"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
              <path
                d="M3 10.5 12 3l9 7.5M5.25 9v10.5A.75.75 0 0 0 6 20.25h3.75V15a1.5 1.5 0 0 1 1.5-1.5h1.5a1.5 1.5 0 0 1 1.5 1.5v5.25H18a.75.75 0 0 0 .75-.75V9"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[11px] font-medium leading-none">Home</span>
          </Link>
          <Link
            href="/search"
            className="flex-1 flex flex-col items-center justify-center gap-1 py-2.5 transition-colors text-muted"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
              <path
                d="m20 20-3.5-3.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-[11px] font-medium leading-none">Поиск</span>
          </Link>
          <Link
            href="/chat"
            className="flex-1 flex flex-col items-center justify-center gap-1 py-2.5 transition-colors text-muted"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
              <path
                d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v9a1.5 1.5 0 0 1-1.5 1.5H9l-4 3.5V16H5.5A1.5 1.5 0 0 1 4 14.5v-9Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[11px] font-medium leading-none">Чат</span>
          </Link>
          <Link
            href="/profile"
            prefetch={false}
            className="flex-1 flex flex-col items-center justify-center gap-1 py-2.5 transition-colors text-muted"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
              <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" />
              <path
                d="M4.5 20a7.5 7.5 0 0 1 15 0"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-[11px] font-medium leading-none">Профиль</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
