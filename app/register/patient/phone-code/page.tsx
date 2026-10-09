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
import EyeOffIcon from "@/assets/icons/input/eye-off.svg";

export default function Page() {
  return (
    <main className="min-h-screen bg-background flex flex-col pb-40 md:pb-0">
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
              <h2 className="text-center font-medium text-base px-2"></h2>
              <div className="flex justify-end"></div>
            </div>
            <div className="mt-4">
              <div className="relative flex items-center bg-background p-1 rounded-full w-full select-none">
                <div
                  className="absolute top-1 bottom-1 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-transform duration-300 ease-in-out"
                  style={{
                    width: "calc((100% - 8px) / 2)",
                    transform: "translateX(calc(1 * 100%))",
                    left: "4px",
                  }}
                />
                <Link
                  href="/login"
                  className="relative z-10 min-w-0 flex-1 truncate px-0 sm:px-1 py-2 text-xs sm:text-sm font-medium transition-colors duration-300 rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] text-center text-secondary hover:text-foreground"
                >
                  Вход
                </Link>
                <Link
                  href="/register"
                  className="relative z-10 min-w-0 flex-1 truncate px-0 sm:px-1 py-2 text-xs sm:text-sm font-medium transition-colors duration-300 rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] text-center text-foreground"
                >
                  Регистрация
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="flex-1 w-full max-w-360 md:max-w-340 mx-auto px-4 md:px-10 flex flex-col md:flex-row md:gap-10 pt-4 md:pt-16 pb-10">
        {/* Декоративная картинка — только десктоп */}
        <div className="hidden md:block md:w-1/2 shrink-0 self-start sticky top-8">
          <div className="rounded-2xl bg-[#FEF3F0] overflow-hidden flex items-center justify-center">
            <div className="relative w-full aspect-square">
              <img
                src="/assets/auth-bg.webp"
                alt="Imbir"
                className="absolute inset-0 size-full object-contain"
              />
            </div>
          </div>
        </div>
        {/* Карточка формы */}
        <div className="flex-1 md:bg-white md:rounded-2xl md:p-10 md:pb-16 flex flex-col max-w-120 md:max-w-none mx-auto w-full">
          <div className="md:contents bg-white rounded-2xl m-2 p-4 md:p-0 flex-1 flex flex-col">
            <div className="hidden md:block">
              <div className="relative flex items-center bg-background p-1 rounded-full w-full select-none">
                <div
                  className="absolute top-1 bottom-1 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-transform duration-300 ease-in-out"
                  style={{
                    width: "calc((100% - 8px) / 2)",
                    transform: "translateX(calc(1 * 100%))",
                    left: "4px",
                  }}
                />
                <Link
                  href="/login"
                  className="relative z-10 min-w-0 flex-1 truncate px-0 sm:px-1 py-2 text-xs sm:text-sm font-medium transition-colors duration-300 rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] text-center text-secondary hover:text-foreground"
                >
                  Вход
                </Link>
                <Link
                  href="/register"
                  className="relative z-10 min-w-0 flex-1 truncate px-0 sm:px-1 py-2 text-xs sm:text-sm font-medium transition-colors duration-300 rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] text-center text-foreground"
                >
                  Регистрация
                </Link>
              </div>
            </div>
            <form className="flex flex-1 flex-col" noValidate>
              <div className="mt-8 mb-6 md:mt-12">
                <h2 className="text-2xl font-semibold text-foreground mb-2">
                  Добро пожаловать в Imbir
                </h2>
                <p className="text-muted text-sm md:text-base">
                  Придумайте и подтвердите пароль вашего аккаунта
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="flex flex-col gap-1.5">
                    <span className="text-overlay text-sm font-medium">
                      Код подтверждения
                    </span>
                    <div className="relative w-full">
                      <input
                        type="text"
                        name="one-time-code"
                        autoComplete="one-time-code"
                        inputMode="numeric"
                        maxLength={4}
                        placeholder="Введите 4-значный код"
                        className="text-base leading-0 border border-border-soft text-foreground rounded-lg px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background w-full py-2.25"
                      />
                    </div>
                  </label>
                  <div className="flex justify-end text-sm">
                    <span className="text-muted">
                      Отправить код повторно через 59 с
                    </span>
                  </div>
                </div>
                <label className="flex flex-col gap-1.5">
                  <span className="text-overlay text-sm font-medium">
                    Пароль
                  </span>
                  <div className="relative w-full">
                    <input
                      type="password"
                      name="new-password"
                      autoComplete="new-password"
                      placeholder="Введите пароль"
                      className="text-base leading-0 border border-border-soft text-foreground rounded-lg px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background w-full py-2.25"
                    />
                    <button
                      type="button"
                      aria-label="Показать пароль"
                      className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center justify-center size-8 rounded-md text-foreground cursor-pointer outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)]"
                    >
                      <EyeOffIcon className="size-5" />
                    </button>
                  </div>
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-overlay text-sm font-medium">
                    Подтвердите пароль
                  </span>
                  <div className="relative w-full">
                    <input
                      type="password"
                      name="confirm-password"
                      autoComplete="new-password"
                      placeholder="Введите пароль повторно"
                      className="text-base leading-0 border border-border-soft text-foreground rounded-lg px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background w-full py-2.25"
                    />
                    <button
                      type="button"
                      aria-label="Показать пароль"
                      className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center justify-center size-8 rounded-md text-foreground cursor-pointer outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)]"
                    >
                      <EyeOffIcon className="size-5" />
                    </button>
                  </div>
                </label>
              </div>
              <div className="mt-auto pt-10 md:mt-10 flex flex-col gap-3">
                <Link
                  href="/register/patient/phone"
                  className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-[52px] text-base px-8 border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent w-full md:h-14 md:text-lg"
                >
                  <span>Назад</span>
                </Link>
                <Link
                  href="/profile"
                  className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-[52px] text-base px-8 bg-primary text-white active:bg-primary-dark hover:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] w-full md:h-14 md:text-lg"
                >
                  <span>Создать аккаунт</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
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
    </main>
  );
}
