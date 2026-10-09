import Link from "next/link";

import CheckIcon from "@/assets/icons/common/check.svg";
import ChatIcon from "@/assets/icons/header/chat.svg";
import GeoIcon from "@/assets/icons/header/geo.svg";
import GeoBtnArrowIcon from "@/assets/icons/header/geo-btn-arrow.svg";
import Logo from "@/assets/icons/header/logo.svg";
import ProfileIcon from "@/assets/icons/header/profile.svg";
import SearchIcon from "@/assets/icons/header/search.svg";

export default function Page() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
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
            <div className="flex flex-col items-center justify-center h-full my-auto py-10 md:py-20 text-center">
              <div className="size-24 md:size-32 bg-primary-tint rounded-full mb-6 flex items-center justify-center">
                <CheckIcon className="size-12 md:size-16 [&_path]:stroke-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
                Пароль успешно сохранён!
              </h2>
              <p className="text-muted text-sm md:text-base mb-10">
                Войдите в свой аккаунт с новым паролем
              </p>
              <Link
                href="/login"
                className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-[52px] text-base px-8 bg-primary text-white active:bg-primary-dark hover:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] w-full max-w-70 md:h-14 md:text-lg"
              >
                <span>Войти</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
