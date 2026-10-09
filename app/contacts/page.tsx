import Link from "next/link";

import FacebookIcon from "@/assets/icons/auth/facebook.svg";
import InstagramIcon from "@/assets/icons/auth/instagram.svg";
import LinkedinIcon from "@/assets/icons/auth/linkedin.svg";
import TwitterIcon from "@/assets/icons/auth/twitter.svg";
import HeaderBackIcon from "@/assets/icons/header/back-arrow.svg";
import ChatIcon from "@/assets/icons/header/chat.svg";
import GeoIcon from "@/assets/icons/header/geo.svg";
import GeoBtnArrowIcon from "@/assets/icons/header/geo-btn-arrow.svg";
import Logo from "@/assets/icons/header/logo.svg";
import ProfileIcon from "@/assets/icons/header/profile.svg";
import SearchIcon from "@/assets/icons/header/search.svg";

export default function Page() {
  return (
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
              <h2 className="text-center font-medium text-base px-2">
                Контакты
              </h2>
              <div className="flex justify-end"></div>
            </div>
          </div>
        </div>
      </header>
      <div className="flex-1 w-full max-w-360 mx-auto px-4 md:px-10 py-10">
        {/* Hero */}
        <div className="bg-primary rounded-3xl p-8 md:p-12 mb-6 text-white overflow-hidden relative">
          <div className="relative z-10 max-w-md">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Свяжитесь с нами
            </h1>
            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              Мы всегда на связи — по любым вопросам о записи, услугах или
              партнёрстве пишите или звоните нам.
            </p>
          </div>
          <div className="absolute -right-8 -bottom-8 size-48 rounded-full bg-white/10" />
          <div className="absolute -right-4 -bottom-16 size-32 rounded-full bg-white/10" />
        </div>
        {/* Contacts grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-white rounded-3xl p-6 flex flex-col gap-3 border border-border">
            <div className="size-12 rounded-2xl bg-[#FEF3F0] flex items-center justify-center text-2xl">
              📞
            </div>
            <p className="text-xs font-medium text-muted uppercase tracking-wide">
              Телефон
            </p>
            <div className="flex flex-col gap-1">
              <p className="text-foreground font-medium text-sm">
                +996 (312) 55-00-11
              </p>
              <p className="text-foreground font-medium text-sm">
                +996 (700) 55-00-11
              </p>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-6 flex flex-col gap-3 border border-border">
            <div className="size-12 rounded-2xl bg-[#FEF3F0] flex items-center justify-center text-2xl">
              ✉️
            </div>
            <p className="text-xs font-medium text-muted uppercase tracking-wide">
              Email
            </p>
            <div className="flex flex-col gap-1">
              <p className="text-foreground font-medium text-sm">
                info@imbir.kg
              </p>
              <p className="text-foreground font-medium text-sm">
                support@imbir.kg
              </p>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-6 flex flex-col gap-3 border border-border">
            <div className="size-12 rounded-2xl bg-[#FEF3F0] flex items-center justify-center text-2xl">
              📍
            </div>
            <p className="text-xs font-medium text-muted uppercase tracking-wide">
              Адрес
            </p>
            <div className="flex flex-col gap-1">
              <p className="text-foreground font-medium text-sm">г. Бишкек</p>
              <p className="text-foreground font-medium text-sm">
                ул. Мидина Алыбаева, 10
              </p>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-6 flex flex-col gap-3 border border-border">
            <div className="size-12 rounded-2xl bg-[#FEF3F0] flex items-center justify-center text-2xl">
              🕐
            </div>
            <p className="text-xs font-medium text-muted uppercase tracking-wide">
              Режим работы
            </p>
            <div className="flex flex-col gap-1">
              <p className="text-foreground font-medium text-sm">
                Пн–Пт: 09:00–18:00
              </p>
              <p className="text-foreground font-medium text-sm">
                Сб–Вс: выходной
              </p>
            </div>
          </div>
        </div>
        {/* Карта — заглушка */}
        <div className="mb-4">
          <div className="rounded-2xl overflow-hidden border border-border">
            <div className="w-full h-50 bg-surface flex flex-col items-center justify-center gap-2 text-muted">
              <svg width="24" height="24" viewBox="0 0 16 16" fill="none">
                <path
                  d="M13.3333 6.66667C13.3333 10.6667 8 14.6667 8 14.6667C8 14.6667 2.66667 10.6667 2.66667 6.66667C2.66667 5.25218 3.22857 3.89563 4.22876 2.89543C5.22896 1.89524 6.58551 1.33333 8 1.33333C9.41449 1.33333 10.771 1.89524 11.7712 2.89543C12.7714 3.89563 13.3333 5.25218 13.3333 6.66667Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 8.66667C9.10457 8.66667 10 7.77124 10 6.66667C10 5.5621 9.10457 4.66667 8 4.66667C6.89543 4.66667 6 5.5621 6 6.66667C6 7.77124 6.89543 8.66667 8 8.66667Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm">Карта</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-3 bg-surface">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="text-primary shrink-0"
              >
                <path
                  d="M13.3333 6.66667C13.3333 10.6667 8 14.6667 8 14.6667C8 14.6667 2.66667 10.6667 2.66667 6.66667C2.66667 5.25218 3.22857 3.89563 4.22876 2.89543C5.22896 1.89524 6.58551 1.33333 8 1.33333C9.41449 1.33333 10.771 1.89524 11.7712 2.89543C12.7714 3.89563 13.3333 5.25218 13.3333 6.66667Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 8.66667C9.10457 8.66667 10 7.77124 10 6.66667C10 5.5621 9.10457 4.66667 8 4.66667C6.89543 4.66667 6 5.5621 6 6.66667C6 7.77124 6.89543 8.66667 8 8.66667Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm text-foreground">
                ул. Мидина Алыбаева, 10, г. Бишкек
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-3xl border border-border p-6 mb-6">
          <h2 className="text-foreground font-semibold text-lg mb-1">
            Как нас найти
          </h2>
          <p className="text-secondary text-sm">
            Офис находится в жилмассиве «Пишпек», Ленинский район Бишкека. Есть
            парковка для клиентов.
          </p>
        </div>
        {/* Support + Social */}
        <div className="grid md:grid-cols-2 gap-3">
          <div className="bg-white rounded-3xl p-6 border border-border">
            <h2 className="text-foreground font-semibold text-lg mb-4">
              Техподдержка
            </h2>
            <div className="flex flex-col gap-3 text-sm text-secondary">
              <div className="flex items-center gap-3">
                <span className="size-8 rounded-xl bg-[#FEF3F0] flex items-center justify-center text-base">
                  📞
                </span>
                <span>+996 (700) 55-00-99</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="size-8 rounded-xl bg-[#FEF3F0] flex items-center justify-center text-base">
                  ✉️
                </span>
                <span>help@imbir.kg</span>
              </div>
              <p className="text-xs text-muted mt-1">
                Техподдержка работает: Пн–Пт с 09:00 до 20:00
              </p>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-6 border border-border">
            <h2 className="text-foreground font-semibold text-lg mb-4">
              Мы в социальных сетях
            </h2>
            <div className="flex flex-col gap-3 text-sm text-secondary">
              <div className="flex items-center gap-3">
                <span className="size-8 rounded-xl bg-[#FEF3F0] flex items-center justify-center text-base">
                  📷
                </span>
                <div>
                  <p className="text-foreground font-medium text-xs">
                    Instagram
                  </p>
                  <p className="text-primary text-xs">@imbir.kg</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="size-8 rounded-xl bg-[#FEF3F0] flex items-center justify-center text-base">
                  ✈️
                </span>
                <div>
                  <p className="text-foreground font-medium text-xs">
                    Telegram
                  </p>
                  <p className="text-primary text-xs">@imbir_kg</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="size-8 rounded-xl bg-[#FEF3F0] flex items-center justify-center text-base">
                  ▶️
                </span>
                <div>
                  <p className="text-foreground font-medium text-xs">YouTube</p>
                  <p className="text-primary text-xs">IMBIR Health</p>
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
  );
}
