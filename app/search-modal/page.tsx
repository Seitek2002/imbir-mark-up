// Открытая панель глобального поиска (features/global-search) — по кнопке с лупой в хедере (десктоп).
// Запрос пустой: «Недавно искали» + «Категории». Фон — страница с обычным хедером и футером.
// Вариант с введённым запросом и подсказками — /search-modal/suggestions.

import Link from "next/link";

import FacebookIcon from "@/assets/icons/auth/facebook.svg";
import InstagramIcon from "@/assets/icons/auth/instagram.svg";
import LinkedinIcon from "@/assets/icons/auth/linkedin.svg";
import TwitterIcon from "@/assets/icons/auth/twitter.svg";
import ChatIcon from "@/assets/icons/header/chat.svg";
import GeoBtnArrowIcon from "@/assets/icons/header/geo-btn-arrow.svg";
import GeoIcon from "@/assets/icons/header/geo.svg";
import Logo from "@/assets/icons/header/logo.svg";
import ProfileIcon from "@/assets/icons/header/profile.svg";
import SearchIcon from "@/assets/icons/header/search.svg";
import SearchHistory from "@/assets/icons/search/history.svg";
import SearchRemoveHistory from "@/assets/icons/search/remove-history.svg";

export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-background md:bg-white flex flex-col">
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

        <div className="flex-1" />

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

      {/* ===================== GLOBAL SEARCH (открыт) ===================== */}
      <div
        className="modal-overlay fixed inset-0 z-50 flex justify-center items-start pt-[15vh] bg-overlay/40 backdrop-blur-[2px]"
        data-state="open"
      >
        <div
          className="search-panel w-full max-w-150 mx-4 overflow-hidden"
          data-state="open"
        >
          <div className="py-4">
            <label className="flex flex-col gap-1.5">
              <div className="relative w-full">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-foreground" />

                <input
                  type="text"
                  placeholder="Поиск клиники, специалиста, услуги"
                  className="text-base leading-0 border border-border-soft text-foreground py-2.25 px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background pl-10 w-full rounded-full bg-white"
                />
              </div>
            </label>
          </div>

          <div className="max-h-[60vh] overflow-y-auto scrollbar-hide bg-white rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
            <div className="bg-white p-4">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-foreground text-lg font-medium">
                  Недавно искали
                </h2>
                <button
                  type="button"
                  className="text-primary text-base active:scale-95 transition-transform hover:opacity-80"
                >
                  Удалить все
                </button>
              </div>

              <ul className="flex flex-col gap-4">
                <li className="flex items-center justify-between group">
                  <Link
                    href="/search"
                    className="flex items-center gap-3 flex-1 text-left hover:opacity-70 transition-opacity"
                  >
                    <SearchHistory className="size-5 text-muted shrink-0" />
                    <span className="text-foreground text-base truncate">
                      Кардиолог
                    </span>
                  </Link>

                  <button
                    type="button"
                    className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-1.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent shrink-0 ml-2"
                  >
                    <SearchRemoveHistory className="size-3" />
                  </button>
                </li>
                <li className="flex items-center justify-between group">
                  <Link
                    href="/search"
                    className="flex items-center gap-3 flex-1 text-left hover:opacity-70 transition-opacity"
                  >
                    <SearchHistory className="size-5 text-muted shrink-0" />
                    <span className="text-foreground text-base truncate">
                      УЗИ щитовидной железы
                    </span>
                  </Link>

                  <button
                    type="button"
                    className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-1.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent shrink-0 ml-2"
                  >
                    <SearchRemoveHistory className="size-3" />
                  </button>
                </li>
                <li className="flex items-center justify-between group">
                  <Link
                    href="/search"
                    className="flex items-center gap-3 flex-1 text-left hover:opacity-70 transition-opacity"
                  >
                    <SearchHistory className="size-5 text-muted shrink-0" />
                    <span className="text-foreground text-base truncate">
                      Медиком
                    </span>
                  </Link>

                  <button
                    type="button"
                    className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-1.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent shrink-0 ml-2"
                  >
                    <SearchRemoveHistory className="size-3" />
                  </button>
                </li>
                <li className="flex items-center justify-between group">
                  <Link
                    href="/search"
                    className="flex items-center gap-3 flex-1 text-left hover:opacity-70 transition-opacity"
                  >
                    <SearchHistory className="size-5 text-muted shrink-0" />
                    <span className="text-foreground text-base truncate">
                      Детский стоматолог
                    </span>
                  </Link>

                  <button
                    type="button"
                    className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-1.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent shrink-0 ml-2"
                  >
                    <SearchRemoveHistory className="size-3" />
                  </button>
                </li>
              </ul>
            </div>
            <div className="p-4 bg-white">
              <h2 className="text-foreground text-lg font-medium mb-3">Категории</h2>
              <div className="grid grid-cols-2 gap-x-3.5 gap-y-3 text-foreground font-medium">
                <Link
                  href="/specialists?doc_spec=Оториноларингология"
                  className="flex items-center gap-3 border border-border-soft p-3 rounded-2xl cursor-pointer hover:bg-background transition-colors"
                >
                  <span className="relative w-9 h-9 shrink-0">
                    <img
                      src="/images/services/lor.png"
                      alt="Оториноларингология"
                      className="absolute inset-0 h-full w-full object-contain"
                    />
                  </span>
                  <span className="truncate text-sm md:text-base">Оториноларингология</span>
                </Link>
                <Link
                  href="/specialists?doc_spec=Неврология"
                  className="flex items-center gap-3 border border-border-soft p-3 rounded-2xl cursor-pointer hover:bg-background transition-colors"
                >
                  <span className="relative w-9 h-9 shrink-0">
                    <img
                      src="/images/services/nevrology.png"
                      alt="Неврология"
                      className="absolute inset-0 h-full w-full object-contain"
                    />
                  </span>
                  <span className="truncate text-sm md:text-base">Неврология</span>
                </Link>
                <Link
                  href="/specialists?doc_spec=Гинекология"
                  className="flex items-center gap-3 border border-border-soft p-3 rounded-2xl cursor-pointer hover:bg-background transition-colors"
                >
                  <span className="relative w-9 h-9 shrink-0">
                    <img
                      src="/images/services/ginecology.png"
                      alt="Гинекология"
                      className="absolute inset-0 h-full w-full object-contain"
                    />
                  </span>
                  <span className="truncate text-sm md:text-base">Гинекология</span>
                </Link>
                <Link
                  href="/specialists?doc_spec=Кардиология"
                  className="flex items-center gap-3 border border-border-soft p-3 rounded-2xl cursor-pointer hover:bg-background transition-colors"
                >
                  <span className="relative w-9 h-9 shrink-0">
                    <img
                      src="/images/services/cardiology.png"
                      alt="Кардиология"
                      className="absolute inset-0 h-full w-full object-contain"
                    />
                  </span>
                  <span className="truncate text-sm md:text-base">Кардиология</span>
                </Link>
                <Link
                  href="/specialists?doc_spec=Пульмонология"
                  className="flex items-center gap-3 border border-border-soft p-3 rounded-2xl cursor-pointer hover:bg-background transition-colors"
                >
                  <span className="relative w-9 h-9 shrink-0">
                    <img
                      src="/images/services/pulmonology.png"
                      alt="Пульмонология"
                      className="absolute inset-0 h-full w-full object-contain"
                    />
                  </span>
                  <span className="truncate text-sm md:text-base">Пульмонология</span>
                </Link>
                <Link
                  href="/specialists?doc_spec=Офтальмология"
                  className="flex items-center gap-3 border border-border-soft p-3 rounded-2xl cursor-pointer hover:bg-background transition-colors"
                >
                  <span className="relative w-9 h-9 shrink-0">
                    <img
                      src="/images/services/ophthalmology.png"
                      alt="Офтальмология"
                      className="absolute inset-0 h-full w-full object-contain"
                    />
                  </span>
                  <span className="truncate text-sm md:text-base">Офтальмология</span>
                </Link>
                <Link
                  href="/specialists?doc_spec=Гастроэнтерология"
                  className="flex items-center gap-3 border border-border-soft p-3 rounded-2xl cursor-pointer hover:bg-background transition-colors"
                >
                  <span className="relative w-9 h-9 shrink-0">
                    <img
                      src="/images/services/gastroenterology.png"
                      alt="Гастроэнтерология"
                      className="absolute inset-0 h-full w-full object-contain"
                    />
                  </span>
                  <span className="truncate text-sm md:text-base">Гастроэнтерология</span>
                </Link>
                <Link
                  href="/specialists?doc_spec=Стоматология"
                  className="flex items-center gap-3 border border-border-soft p-3 rounded-2xl cursor-pointer hover:bg-background transition-colors"
                >
                  <span className="relative w-9 h-9 shrink-0">
                    <img
                      src="/images/services/dentistry.png"
                      alt="Стоматология"
                      className="absolute inset-0 h-full w-full object-contain"
                    />
                  </span>
                  <span className="truncate text-sm md:text-base">Стоматология</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
