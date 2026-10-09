import Link from "next/link";

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
                  href="/login"
                  aria-label="Вернуться назад"
                  className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent"
                >
                  <HeaderBackIcon className="size-4" />
                </Link>
              </div>
              <h2 className="text-center font-medium text-base px-2"></h2>
              <div className="flex justify-end"></div>
            </div>
          </div>
        </div>
      </header>
      <div className="flex-1 w-full max-w-360 md:max-w-340 mx-auto px-4 md:px-10 flex flex-col md:flex-row md:gap-10 pt-4 md:pt-16 pb-10">
        {/* Левая карточка */}
        <div className="hidden md:flex md:w-1/2 rounded-2xl p-6 bg-white shrink-0 items-center justify-center">
          <div className="relative w-full aspect-square rounded-xl bg-[#ADD8E6] flex items-center justify-center border-2 border-dashed border-muted/50 text-muted">
            <span className="text-xl font-medium">Место для картинки</span>
          </div>
        </div>
        {/* Правая карточка */}
        <div className="flex-1 md:bg-white md:rounded-2xl md:p-10 md:pb-16 flex flex-col max-w-120 md:max-w-none mx-auto w-full relative">
          <div className="md:contents bg-white rounded-2xl m-2 p-4 md:p-0 flex-1 flex flex-col">
            <Link
              href="/forgot-password/code"
              aria-label="Назад"
              className="relative items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-1.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent hidden md:flex size-10 mb-6"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 15L7.5 10L12.5 5"
                  stroke="#191A1B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <form className="flex flex-1 flex-col">
              <div className="mt-4 mb-6 md:mt-0">
                <h2 className="text-2xl font-semibold text-foreground mb-2">
                  Восстановить пароль
                </h2>
                <p className="text-muted text-sm md:text-base">
                  Придумайте и подтвердите новый пароль для вашего аккаунта
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <label className="flex flex-col gap-1.5">
                  <span className="text-overlay text-sm font-medium">
                    Новый пароль
                  </span>
                  <div className="relative w-full">
                    <input
                      type="password"
                      name="new-password"
                      autoComplete="new-password"
                      placeholder="Введите новый пароль"
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
                    Подтвердите новый пароль
                  </span>
                  <div className="relative w-full">
                    <input
                      type="password"
                      name="confirm-password"
                      autoComplete="new-password"
                      placeholder="Введите новый пароль повторно"
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
              {/* Чеклист валидации */}
              <div className="mt-6 flex flex-col gap-2">
                <span className="text-sm text-muted mb-1">
                  Пароль должен содержать:
                </span>
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center size-5 rounded-full bg-border-soft">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 3L4.5 8.5L2 6"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-sm transition-colors text-muted">
                    8 или более символов латинского алфавита
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center size-5 rounded-full bg-border-soft">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 3L4.5 8.5L2 6"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-sm transition-colors text-muted">
                    Заглавные и строчные буквы
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center size-5 rounded-full bg-border-soft">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 3L4.5 8.5L2 6"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-sm transition-colors text-muted">
                    Цифры
                  </span>
                </div>
              </div>
              <div className="mt-auto pt-10 md:mt-10">
                <Link
                  href="/forgot-password/success"
                  className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-[52px] text-base px-8 bg-primary text-white active:bg-primary-dark hover:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] w-full md:h-14 md:text-lg"
                >
                  <span>Сохранить пароль</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
