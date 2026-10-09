// Страница поиска (pages/search) — вариант с результатами по запросу «кардио» (/search?q=кардио).
// Мобильный: врачи (первые 4), клиники (первые 3), услуги списком. Десктоп: все найденные врачи
// (FilterBar со своим заголовком «Врачи · N совпадений»), клиники и услуги.
// Состояние без запроса (история + категории) — /search/categories.

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
      <main className="min-h-screen bg-background md:bg-white flex flex-col pb-16 lg:pb-0">
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
                <h2 className="text-center font-medium text-base px-2">Поиск</h2>
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
                          placeholder="Поиск клиники, специалиста, услуги"
                          defaultValue="кардио"
                          className="text-base leading-0 border border-border-soft text-foreground py-2.25 px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background pl-10 w-full rounded-full bg-white"
                        />
                        <button
                          type="button"
                          className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center justify-center size-8 rounded-md text-foreground cursor-pointer outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)]"
                        >
                          <RemoveIcon className="size-5" />
                        </button>
                      </div>
                    </label>
                  </div>
                  <div className="md:hidden">
                    <Link
                      href="/specialists/filters-modal"
                      aria-label="Открыть фильтры"
                      className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent"
                    >
                      <FilterSample />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 w-full max-w-360 mx-auto pb-10">
          {/* === МОБИЛЬНАЯ ВЕРСИЯ РЕЗУЛЬТАТОВ === */}
          <div className="md:hidden p-4 flex flex-col gap-8">
            <h2 className="text-foreground text-lg font-medium">
              Результаты по запросу: кардио
            </h2>

            {/* Блок Врачей (первые 4) */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-foreground text-base border-b border-border-soft pb-2">
                Врачи
              </h3>
              <div className="flex flex-col gap-2">
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
                  href="/specialists/21"
                  className="bg-white rounded-2xl border border-border-soft p-2.5 flex items-stretch gap-2.5 w-full cursor-pointer hover:border-primary/40 transition-colors"
                >
                  <div className="relative w-30 min-w-30 self-stretch rounded-2xl overflow-hidden bg-primary-tint">
                    <img
                      src="/images/doctors/doctor-4.png"
                      alt="Мамбетов Улан Кадырбекович"
                      className="absolute inset-0 h-full w-full object-cover object-top scale-110"
                    />
                  </div>

                  <div className="flex-1 min-w-0 py-0.5 flex flex-col">
                    <p className="font-semibold text-[18px] text-foreground leading-tight truncate">
                      Мамбетов Улан Кадырбекович
                    </p>

                    <p className="text-[14px] text-secondary truncate mt-1">
                      Кардиолог
                      <span className="text-primary">
                        {" "}
                        • Кардиоцентр «Жүрөк»{" "}
                      </span>
                    </p>

                    <div className="flex items-center gap-1 mt-1.5 text-[14px] flex-wrap">
                      <StarIcon className="size-4 text-[#FF7C63]" />
                      <span className="font-medium text-[#FF7C63]">4.85</span>
                      <span className="text-secondary">(203)</span>
                      <span className="text-secondary">• 25 лет опыта</span>
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
                  href="/specialists/22"
                  className="bg-white rounded-2xl border border-border-soft p-2.5 flex items-stretch gap-2.5 w-full cursor-pointer hover:border-primary/40 transition-colors"
                >
                  <div className="relative w-30 min-w-30 self-stretch rounded-2xl overflow-hidden bg-primary-tint">
                    <img
                      src="/images/doctors/doctor-5.png"
                      alt="Токтосунова Бермет Акылбековна"
                      className="absolute inset-0 h-full w-full object-cover object-top scale-110"
                    />
                  </div>

                  <div className="flex-1 min-w-0 py-0.5 flex flex-col">
                    <p className="font-semibold text-[18px] text-foreground leading-tight truncate">
                      Токтосунова Бермет Акылбековна
                    </p>

                    <p className="text-[14px] text-secondary truncate mt-1">
                      Кардиолог-аритмолог
                      <span className="text-primary">
                        {" "}
                        • Нео Клиник{" "}
                      </span>
                    </p>

                    <div className="flex items-center gap-1 mt-1.5 text-[14px] flex-wrap">
                      <StarIcon className="size-4 text-[#FF7C63]" />
                      <span className="font-medium text-[#FF7C63]">4.75</span>
                      <span className="text-secondary">(67)</span>
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
                {/* Врач (horizontal) 4 */}
                <Link
                  href="/specialists/23"
                  className="bg-white rounded-2xl border border-border-soft p-2.5 flex items-stretch gap-2.5 w-full cursor-pointer hover:border-primary/40 transition-colors"
                >
                  <div className="relative w-30 min-w-30 self-stretch rounded-2xl overflow-hidden bg-primary-tint">
                    <img
                      src="/images/doctors/doctor-6.png"
                      alt="Сулайманов Эрмек Жолдошевич"
                      className="absolute inset-0 h-full w-full object-cover object-top scale-110"
                    />
                  </div>

                  <div className="flex-1 min-w-0 py-0.5 flex flex-col">
                    <p className="font-semibold text-[18px] text-foreground leading-tight truncate">
                      Сулайманов Эрмек Жолдошевич
                    </p>

                    <p className="text-[14px] text-secondary truncate mt-1">
                      Кардиохирург
                      <span className="text-primary">
                        {" "}
                        • Кыргызско-Турецкая клиника{" "}+ еще 1
                      </span>
                    </p>

                    <div className="flex items-center gap-1 mt-1.5 text-[14px] flex-wrap">
                      <StarIcon className="size-4 text-[#FF7C63]" />
                      <span className="font-medium text-[#FF7C63]">4.95</span>
                      <span className="text-secondary">(119)</span>
                      <span className="text-secondary">• 19 лет опыта</span>
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
            </div>

            {/* Блок Клиник (первые 3) */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-foreground text-base border-b border-border-soft pb-2">
                Клиники
              </h3>
              <div className="flex flex-col gap-2">
                {/* Клиника (horizontal) 1 */}
                <Link
                  href="/clinics/21"
                  className="bg-white rounded-2xl border border-border-soft overflow-hidden flex items-stretch w-full cursor-pointer hover:border-primary/40 transition-colors"
                >
                  <div className="relative w-35">
                    <img
                      src="/images/clinics/clinic-2.png"
                      alt="Кардиоцентр «Жүрөк»"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-3 flex-1 min-w-0">
                    <p className="font-semibold text-sm text-foreground truncate">
                      Кардиоцентр «Жүрөк»
                    </p>
                    <div className="flex items-center gap-1 mt-1 text-xs flex-wrap">
                      <StarIcon className="size-3.5 text-[#FFA18D]" />
                      <span className="font-medium text-[#FFA18D]">4.90</span>
                      <span className="text-secondary">(187)</span>
                      <span className="text-secondary">• 20 лет опыта</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-xs text-secondary">
                      <GeoIcon className="size-3.5 text-primary" />
                      <span className="truncate">г. Бишкек, ул. Тоголок Молдо, 3</span>
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
                  href="/clinics/22"
                  className="bg-white rounded-2xl border border-border-soft overflow-hidden flex items-stretch w-full cursor-pointer hover:border-primary/40 transition-colors"
                >
                  <div className="relative w-35">
                    <img
                      src="/images/clinics/clinic-4.png"
                      alt="Кардиологическая клиника «Пульс»"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-3 flex-1 min-w-0">
                    <p className="font-semibold text-sm text-foreground truncate">
                      Кардиологическая клиника «Пульс»
                    </p>
                    <div className="flex items-center gap-1 mt-1 text-xs flex-wrap">
                      <StarIcon className="size-3.5 text-[#FFA18D]" />
                      <span className="font-medium text-[#FFA18D]">4.65</span>
                      <span className="text-secondary">(73)</span>
                      <span className="text-secondary">• 8 лет опыта</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-xs text-secondary">
                      <GeoIcon className="size-3.5 text-primary" />
                      <span className="truncate">г. Бишкек, ул. Абдрахманова, 170</span>
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
                  href="/clinics/23"
                  className="bg-white rounded-2xl border border-border-soft overflow-hidden flex items-stretch w-full cursor-pointer hover:border-primary/40 transition-colors"
                >
                  <div className="relative w-35">
                    <div className="w-full h-full bg-linear-to-br from-[#FFF2F0] to-[#FFD9CC] flex flex-col items-center justify-center gap-2 p-3">
                      <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shrink-0">
                        <span className="text-white font-bold text-lg leading-none">
                          НЦ
                        </span>
                      </div>
                      <p className="text-primary text-xs font-medium text-center line-clamp-2 leading-tight">
                        Национальный центр кардиологии и терапии
                      </p>
                    </div>
                  </div>
                  <div className="p-3 flex-1 min-w-0">
                    <p className="font-semibold text-sm text-foreground truncate">
                      Национальный центр кардиологии и терапии
                    </p>
                    <div className="flex items-center gap-1 mt-1 text-xs flex-wrap">
                      <StarIcon className="size-3.5 text-[#FFA18D]" />
                      <span className="font-medium text-[#FFA18D]">4.70</span>
                      <span className="text-secondary">(412)</span>
                      <span className="text-secondary">• 45 лет опыта</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-xs text-secondary">
                      <GeoIcon className="size-3.5 text-primary" />
                      <span className="truncate">г. Бишкек, ул. Тоголок Молдо, 3</span>
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
            </div>

            {/* Блок Услуг */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-foreground text-base border-b border-border-soft pb-2">
                Услуги
              </h3>
              <div className="flex flex-col gap-2">
                <div className="bg-white p-3 rounded-xl border border-border-soft flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-sm text-foreground">
                      Консультация кардиолога
                    </p>
                    <p className="text-xs text-muted">Кардиология</p>
                  </div>
                  <div className="font-bold text-foreground text-sm">1800 с</div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-border-soft flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-sm text-foreground">
                      Электрокардиография (ЭКГ) с расшифровкой
                    </p>
                    <p className="text-xs text-muted">Кардиология</p>
                  </div>
                  <div className="font-bold text-foreground text-sm">600 с</div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-border-soft flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-sm text-foreground">
                      Холтеровское мониторирование ЭКГ, 24 часа
                    </p>
                    <p className="text-xs text-muted">Кардиология</p>
                  </div>
                  <div className="font-bold text-foreground text-sm">3200 с</div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-border-soft flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-sm text-foreground">
                      ЭхоКГ (УЗИ сердца)
                    </p>
                    <p className="text-xs text-muted">Кардиология</p>
                  </div>
                  <div className="font-bold text-foreground text-sm">2500 с</div>
                </div>
              </div>
            </div>
          </div>

          {/* === ДЕСКТОПНАЯ ВЕРСИЯ РЕЗУЛЬТАТОВ === */}
          <div className="hidden md:block px-10 py-6">
            <div className="text-sm text-secondary mb-6 flex items-center gap-2">
              <Link href="/" className="hover:text-primary transition-colors">
                Главная
              </Link>
              <span>•</span>
              <span className="text-primary">По запросу «кардио»</span>
            </div>

            <div className="flex flex-col gap-14">
              {/* Секция Врачей с фильтрами */}
              <div>
                <div className="w-full">
                  <div className="flex items-end gap-3 mb-6">
                    <h2 className="text-[32px] font-semibold text-foreground leading-none">
                      Врачи
                    </h2>
                    <span className="text-muted text-lg pb-1">
                      6 совпадений
                    </span>
                  </div>

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
                <div className="grid grid-cols-4 gap-5 mt-2">
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
                    href="/specialists/21"
                    className="bg-white rounded-3xl border border-border-soft p-2 w-full h-full flex flex-col relative cursor-pointer hover:border-primary/40 transition-colors"
                  >
                    <div className="relative aspect-square w-full">
                      <div className="rounded-2xl overflow-hidden bg-primary-tint absolute inset-0">
                        <img
                          src="/images/doctors/doctor-4.png"
                          alt="Мамбетов Улан Кадырбекович"
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
                        Мамбетов Улан Кадырбекович
                      </p>
                      <p className="text-xs text-secondary truncate mt-0.5">
                        Кардиолог
                        <span className="text-primary">
                          {" "}
                          • Кардиоцентр «Жүрөк»{" "}
                        </span>
                      </p>
                      <div className="flex items-center gap-1 mt-1 text-xs flex-wrap">
                        <StarIcon className="size-3.5 text-[#FF7C63]" />
                        <span className="font-medium text-[#FF7C63]">4.85</span>
                        <span className="text-secondary">(203)</span>
                        <span className="text-secondary">• 25 лет</span>
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
                    href="/specialists/22"
                    className="bg-white rounded-3xl border border-border-soft p-2 w-full h-full flex flex-col relative cursor-pointer hover:border-primary/40 transition-colors"
                  >
                    <div className="relative aspect-square w-full">
                      <div className="rounded-2xl overflow-hidden bg-primary-tint absolute inset-0">
                        <img
                          src="/images/doctors/doctor-5.png"
                          alt="Токтосунова Бермет Акылбековна"
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
                        Токтосунова Бермет Акылбековна
                      </p>
                      <p className="text-xs text-secondary truncate mt-0.5">
                        Кардиолог-аритмолог
                        <span className="text-primary">
                          {" "}
                          • Нео Клиник{" "}
                        </span>
                      </p>
                      <div className="flex items-center gap-1 mt-1 text-xs flex-wrap">
                        <StarIcon className="size-3.5 text-[#FF7C63]" />
                        <span className="font-medium text-[#FF7C63]">4.75</span>
                        <span className="text-secondary">(67)</span>
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
                  {/* Врач (vertical) 4 */}
                  <Link
                    href="/specialists/23"
                    className="bg-white rounded-3xl border border-border-soft p-2 w-full h-full flex flex-col relative cursor-pointer hover:border-primary/40 transition-colors"
                  >
                    <div className="relative aspect-square w-full">
                      <div className="rounded-2xl overflow-hidden bg-primary-tint absolute inset-0">
                        <img
                          src="/images/doctors/doctor-6.png"
                          alt="Сулайманов Эрмек Жолдошевич"
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
                        Сулайманов Эрмек Жолдошевич
                      </p>
                      <p className="text-xs text-secondary truncate mt-0.5">
                        Кардиохирург
                        <span className="text-primary">
                          {" "}
                          • Кыргызско-Турецкая клиника{" "}+1
                        </span>
                      </p>
                      <div className="flex items-center gap-1 mt-1 text-xs flex-wrap">
                        <StarIcon className="size-3.5 text-[#FF7C63]" />
                        <span className="font-medium text-[#FF7C63]">4.95</span>
                        <span className="text-secondary">(119)</span>
                        <span className="text-secondary">• 19 лет</span>
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
                    href="/specialists/24"
                    className="bg-white rounded-3xl border border-border-soft p-2 w-full h-full flex flex-col relative cursor-pointer hover:border-primary/40 transition-colors"
                  >
                    <div className="relative aspect-square w-full">
                      <div className="rounded-2xl overflow-hidden bg-primary-tint absolute inset-0">
                        <img
                          src="/images/doctors/doctor-7.png"
                          alt="Алымкулова Нургуль Советбековна"
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
                        Алымкулова Нургуль Советбековна
                      </p>
                      <p className="text-xs text-secondary truncate mt-0.5">
                        Детский кардиолог
                        <span className="text-primary">
                          {" "}
                          • Детская клиника «Балдаркан»{" "}
                        </span>
                      </p>
                      <div className="flex items-center gap-1 mt-1 text-xs flex-wrap">
                        <StarIcon className="size-3.5 text-[#FF7C63]" />
                        <span className="font-medium text-[#FF7C63]">4.80</span>
                        <span className="text-secondary">(52)</span>
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
                  {/* Врач (vertical) 6 */}
                  <Link
                    href="/specialists/25"
                    className="bg-white rounded-3xl border border-border-soft p-2 w-full h-full flex flex-col relative cursor-pointer hover:border-primary/40 transition-colors"
                  >
                    <div className="relative aspect-square w-full">
                      <div className="rounded-2xl overflow-hidden bg-primary-tint absolute inset-0">
                        <img
                          src="/images/doctors/doctor-2.png"
                          alt="Рысбеков Азамат Таалайбекович"
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
                        Рысбеков Азамат Таалайбекович
                      </p>
                      <p className="text-xs text-secondary truncate mt-0.5">
                        Кардиолог
                        <span className="text-primary">
                          {" "}
                          • Мед-Сити{" "}
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

              {/* Секция Клиник */}
              <div>
                <div className="flex items-end gap-3 mb-6">
                  <h2 className="text-[32px] font-semibold text-foreground leading-none">
                    Клиники
                  </h2>
                  <span className="text-muted text-lg pb-1">
                    3 совпадения
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-5 items-stretch">
                  {/* Клиника (vertical) 1 */}
                  <Link
                    href="/clinics/21"
                    className="bg-white rounded-3xl border border-border-soft w-full h-full flex flex-col p-2 cursor-pointer hover:border-primary/40 transition-colors"
                  >
                    <div className="relative w-full h-55 rounded-2xl overflow-hidden">
                      <img
                        src="/images/clinics/clinic-2.png"
                        alt="Кардиоцентр «Жүрөк»"
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
                        Кардиоцентр «Жүрөк»
                      </p>
                      <div className="flex items-center gap-1 mt-1 text-xs flex-wrap">
                        <StarIcon className="size-3.5 text-[#FFA18D]" />
                        <span className="font-medium text-[#FFA18D]">4.90</span>
                        <span className="text-secondary">(187)</span>
                        <span className="text-secondary">• 20 лет опыта</span>
                      </div>
                      <div className="flex items-center gap-1 mt-1 text-xs text-secondary">
                        <GeoIcon className="size-3.5 text-primary" />
                        <span className="truncate">г. Бишкек, ул. Тоголок Молдо, 3</span>
                      </div>
                    </div>
                  </Link>
                  {/* Клиника (vertical) 2 */}
                  <Link
                    href="/clinics/22"
                    className="bg-white rounded-3xl border border-border-soft w-full h-full flex flex-col p-2 cursor-pointer hover:border-primary/40 transition-colors"
                  >
                    <div className="relative w-full h-55 rounded-2xl overflow-hidden">
                      <img
                        src="/images/clinics/clinic-4.png"
                        alt="Кардиологическая клиника «Пульс»"
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
                        Кардиологическая клиника «Пульс»
                      </p>
                      <div className="flex items-center gap-1 mt-1 text-xs flex-wrap">
                        <StarIcon className="size-3.5 text-[#FFA18D]" />
                        <span className="font-medium text-[#FFA18D]">4.65</span>
                        <span className="text-secondary">(73)</span>
                        <span className="text-secondary">• 8 лет опыта</span>
                      </div>
                      <div className="flex items-center gap-1 mt-1 text-xs text-secondary">
                        <GeoIcon className="size-3.5 text-primary" />
                        <span className="truncate">г. Бишкек, ул. Абдрахманова, 170</span>
                      </div>
                    </div>
                  </Link>
                  {/* Клиника (vertical) 3 */}
                  <Link
                    href="/clinics/23"
                    className="bg-white rounded-3xl border border-border-soft w-full h-full flex flex-col p-2 cursor-pointer hover:border-primary/40 transition-colors"
                  >
                    <div className="relative w-full h-55 rounded-2xl overflow-hidden">
                      <div className="w-full h-full bg-linear-to-br from-[#FFF2F0] to-[#FFD9CC] flex flex-col items-center justify-center gap-2 p-3">
                        <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shrink-0">
                          <span className="text-white font-bold text-lg leading-none">
                            НЦ
                          </span>
                        </div>
                        <p className="text-primary text-xs font-medium text-center line-clamp-2 leading-tight">
                          Национальный центр кардиологии и терапии
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
                        Национальный центр кардиологии и терапии
                      </p>
                      <div className="flex items-center gap-1 mt-1 text-xs flex-wrap">
                        <StarIcon className="size-3.5 text-[#FFA18D]" />
                        <span className="font-medium text-[#FFA18D]">4.70</span>
                        <span className="text-secondary">(412)</span>
                        <span className="text-secondary">• 45 лет опыта</span>
                      </div>
                      <div className="flex items-center gap-1 mt-1 text-xs text-secondary">
                        <GeoIcon className="size-3.5 text-primary" />
                        <span className="truncate">г. Бишкек, ул. Тоголок Молдо, 3</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Секция Услуг */}
              <div>
                <div className="flex items-end gap-3 mb-6">
                  <h2 className="text-[32px] font-semibold text-foreground leading-none">
                    Услуги
                  </h2>
                  <span className="text-muted text-lg pb-1">
                    4 совпадения
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white border border-border-soft rounded-2xl p-4 flex flex-col">
                    <h4 className="font-semibold text-foreground">Консультация кардиолога</h4>
                    <p className="text-xs text-muted mb-4">Кардиология</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="font-bold text-foreground text-lg">
                        1800 с
                      </span>
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent ml-auto"
                      >
                        <span>Подробнее</span>
                      </button>
                    </div>
                  </div>
                  <div className="bg-white border border-border-soft rounded-2xl p-4 flex flex-col">
                    <h4 className="font-semibold text-foreground">Электрокардиография (ЭКГ) с расшифровкой</h4>
                    <p className="text-xs text-muted mb-4">Кардиология</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="font-bold text-foreground text-lg">
                        600 с
                      </span>
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent ml-auto"
                      >
                        <span>Подробнее</span>
                      </button>
                    </div>
                  </div>
                  <div className="bg-white border border-border-soft rounded-2xl p-4 flex flex-col">
                    <h4 className="font-semibold text-foreground">Холтеровское мониторирование ЭКГ, 24 часа</h4>
                    <p className="text-xs text-muted mb-4">Кардиология</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="font-bold text-foreground text-lg">
                        3200 с
                      </span>
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent ml-auto"
                      >
                        <span>Подробнее</span>
                      </button>
                    </div>
                  </div>
                  <div className="bg-white border border-border-soft rounded-2xl p-4 flex flex-col">
                    <h4 className="font-semibold text-foreground">ЭхоКГ (УЗИ сердца)</h4>
                    <p className="text-xs text-muted mb-4">Кардиология</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="font-bold text-foreground text-lg">
                        2500 с
                      </span>
                      <button
                        type="button"
                        className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent ml-auto"
                      >
                        <span>Подробнее</span>
                      </button>
                    </div>
                  </div>
                </div>
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

      {/* ===================== MOBILE BOTTOM NAV (активен «Поиск») ===================== */}
      <nav className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-border pb-[env(safe-area-inset-bottom)]">
        <div className="flex items-stretch">
          <Link
            href="/"
            className="flex-1 flex flex-col items-center justify-center gap-1 py-2.5 transition-colors text-muted"
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
            className="flex-1 flex flex-col items-center justify-center gap-1 py-2.5 transition-colors text-primary"
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
