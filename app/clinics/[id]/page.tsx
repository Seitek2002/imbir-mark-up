import Link from "next/link";

import FacebookIcon from "@/assets/icons/auth/facebook.svg";
import InstagramIcon from "@/assets/icons/auth/instagram.svg";
import LinkedinIcon from "@/assets/icons/auth/linkedin.svg";
import TwitterIcon from "@/assets/icons/auth/twitter.svg";
import HeartIcon from "@/assets/icons/cards/heart.svg";
import StarIcon from "@/assets/icons/common/star.svg";
import OfflineRecordIcon from "@/assets/icons/details/offline-record.svg";
import OnlineRecordIcon from "@/assets/icons/details/online-record.svg";
import PhoneIcon from "@/assets/icons/details/phone.svg";
import HeaderBackIcon from "@/assets/icons/header/back-arrow.svg";
import ChatIcon from "@/assets/icons/header/chat.svg";
import GeoBtnArrowIcon from "@/assets/icons/header/geo-btn-arrow.svg";
import GeoIcon from "@/assets/icons/header/geo.svg";
import Logo from "@/assets/icons/header/logo.svg";
import ProfileIcon from "@/assets/icons/header/profile.svg";
import SearchIcon from "@/assets/icons/header/search.svg";
import EmailIcon from "@/assets/icons/input/email.svg";
import HistoryIcon from "@/assets/icons/profile/history.svg";

// Детальная страница клиники (pages/clinic/clinic-details).
// Состояние: гость в хедере, клиника не в избранном, активна первая фотография галереи.
// Блок отзывов показан в варианте авторизованного пользователя, который ещё не оставлял отзыв
// (на десктопе видна форма «Оставьте свой отзыв»).
// Модалка «Офлайн-консультация» (ContactInfoModal) закрыта — открытое состояние: /clinics/[id]/contacts-modal.
export default function Page() {
  return (
    <main className="min-h-screen bg-background md:bg-white flex flex-col relative pb-20 md:pb-0">
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

      <div className="flex-1 w-full max-w-350 mx-auto md:px-8 flex flex-col pt-0 md:pt-6 pb-10">
        <div className="hidden md:flex text-sm text-secondary mb-6 items-center gap-2">
          <Link href="/" className="hover:text-primary transition-colors">
            Главная
          </Link>
          <span>•</span>
          <Link href="/clinics" className="hover:text-primary transition-colors">
            Клиники
          </Link>
          <span>•</span>
          <span className="text-primary">Медицинский центр «Медиком»</span>
        </div>

        {/* --- ОСНОВНОЙ БЛОК --- */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          <div className="h-fit w-full md:sticky md:top-0 md:w-130 shrink-0">
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 md:hidden">
              <Link
                href="/clinics"
                aria-label="Вернуться назад"
                className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent bg-white/80 backdrop-blur"
              >
                <HeaderBackIcon className="size-4" />
              </Link>
              <button
                type="button"
                aria-label="Сохранить клинику"
                className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent bg-white/80 backdrop-blur"
              >
                <HeartIcon className="size-5 text-[#FFA18D]" />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <div className="relative flex overflow-x-auto md:overflow-hidden snap-x snap-mandatory scrollbar-hide h-[392px] md:h-100 w-full md:rounded-3xl md:bg-border-soft gap-3 px-4 md:px-0">
                {/* Mobile scrollable gallery */}
                <div className="md:hidden relative w-[calc(100vw-32px)] h-full shrink-0 snap-start rounded-[20px] overflow-hidden bg-border-soft">
                  <img
                    src="/images/clinics/clinic-1.png"
                    alt="Медицинский центр «Медиком»-0"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="md:hidden relative w-[calc(100vw-32px)] h-full shrink-0 snap-start rounded-[20px] overflow-hidden bg-border-soft">
                  <img
                    src="/images/clinics/clinic-2.png"
                    alt="Медицинский центр «Медиком»-1"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="md:hidden relative w-[calc(100vw-32px)] h-full shrink-0 snap-start rounded-[20px] overflow-hidden bg-border-soft">
                  <img
                    src="/images/clinics/clinic-3.png"
                    alt="Медицинский центр «Медиком»-2"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="md:hidden relative w-[calc(100vw-32px)] h-full shrink-0 snap-start rounded-[20px] overflow-hidden bg-border-soft">
                  <img
                    src="/images/clinics/clinic-4.png"
                    alt="Медицинский центр «Медиком»-3"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>

                {/* Desktop static active image */}
                <div className="hidden md:block relative w-full h-full overflow-hidden">
                  <img
                    src="/images/clinics/clinic-1.png"
                    alt="Медицинский центр «Медиком»"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Миниатюры: активная — "border-2 border-primary", остальные — "border-2 border-transparent hover:border-primary/50" */}
              <div className="hidden md:flex gap-3 overflow-x-auto scrollbar-hide">
                <div className="relative size-20 lg:size-24 rounded-2xl bg-border-soft shrink-0 cursor-pointer transition-all overflow-hidden border-2 border-primary">
                  <img
                    src="/images/clinics/clinic-1.png"
                    alt="thumb-0"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="relative size-20 lg:size-24 rounded-2xl bg-border-soft shrink-0 cursor-pointer transition-all overflow-hidden border-2 border-transparent hover:border-primary/50">
                  <img
                    src="/images/clinics/clinic-2.png"
                    alt="thumb-1"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="relative size-20 lg:size-24 rounded-2xl bg-border-soft shrink-0 cursor-pointer transition-all overflow-hidden border-2 border-transparent hover:border-primary/50">
                  <img
                    src="/images/clinics/clinic-3.png"
                    alt="thumb-2"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="relative size-20 lg:size-24 rounded-2xl bg-border-soft shrink-0 cursor-pointer transition-all overflow-hidden border-2 border-transparent hover:border-primary/50">
                  <img
                    src="/images/clinics/clinic-4.png"
                    alt="thumb-3"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col rounded-t-3xl md:rounded-none -mt-6 md:mt-0 relative z-10 p-2 md:p-0">
            <div className="bg-white rounded-[20px] p-4 border border-border-soft">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-2xl md:text-3xl font-semibold text-foreground leading-tight">
                      Медицинский центр «Медиком»
                    </h1>
                  </div>
                  <p className="text-muted text-base mb-4">
                    Многопрофильная клиника
                  </p>

                  <div className="flex flex-col gap-1.5 text-sm text-foreground">
                    <div className="flex items-center gap-2">
                      <span className="text-primary flex items-center justify-center">
                        <GeoIcon className="size-4" />
                      </span>
                      г. Бишкек, ул. Токтогула, 125
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary flex items-center justify-center">
                        <HistoryIcon className="size-4" />
                      </span>
                      ПН-СБ • 08:00-20:00
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="Сохранить клинику"
                  className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-3.5 border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent"
                >
                  <HeartIcon className="size-5" />
                </button>
              </div>

              <div className="flex items-center justify-between bg-white border border-border-soft rounded-2xl p-4 divide-x divide-border-soft">
                <div className="flex flex-col items-center flex-1">
                  <span className="text-base md:text-[20px] font-medium text-foreground">
                    <span>4.80</span>
                  </span>
                  <span className="text-sm text-muted">Оценка</span>
                </div>
                <div className="flex flex-col items-center flex-1">
                  <span className="text-base md:text-[20px] font-medium text-foreground">
                    <span>15</span> лет
                  </span>
                  <span className="text-sm text-muted">Опыт</span>
                </div>
                <div className="flex flex-col items-center flex-1">
                  <span className="text-base md:text-[20px] font-medium text-foreground">
                    <span>312</span>
                  </span>
                  <span className="text-sm text-muted">Отзывов</span>
                </div>
              </div>
            </div>

            <div className="hidden md:flex gap-4 mb-10 mt-4">
              <Link href="/clinics/1/contacts-modal" className="flex-1 flex">
                <button
                  type="button"
                  className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-12 text-sm md:text-base px-6 border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent flex-1 bg-[#FFF2F0] border-transparent text-primary"
                >
                  <span>
                    <span className="flex gap-2.5">
                      <OfflineRecordIcon className="size-5" />
                      Офлайн-консультация
                    </span>
                  </span>
                </button>
              </Link>
              <Link href="/record?clinic=1" className="flex-1 flex">
                <button
                  type="button"
                  className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-12 text-sm md:text-base px-6 bg-primary text-white active:bg-primary-dark hover:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] flex-1"
                >
                  <span>
                    <span className="flex gap-2.5">
                      <OnlineRecordIcon className="size-6" />
                      Онлайн-консультация
                    </span>
                  </span>
                </button>
              </Link>
            </div>

            <div className="flex flex-col gap-2 md:gap-10 md:border-none pt-8 md:pt-0">
              <div className="bg-white rounded-[20px] p-4 border border-border-soft">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground">О клинике</h3>
                  <button
                    type="button"
                    className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 relative after:absolute after:inset-x-0 after:-inset-y-2 after:content-[''] active:bg-border-soft hover:bg-background text-sm text-primary hover:text-primary-dark px-0 h-auto"
                  >
                    <span>Подробнее</span>
                  </button>
                </div>

                <div
                  className="text-muted text-sm md:text-base leading-relaxed transition-all duration-300"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  «Медиком» — многопрофильный медицинский центр в центре Бишкека. Более 15 лет
                  мы принимаем взрослых и детей: кардиология, неврология, гинекология,
                  стоматология и функциональная диагностика под одной крышей. В клинике работает
                  собственная лаборатория, экспертное УЗИ и суточное мониторирование ЭКГ, а
                  результаты анализов приходят в личный кабинет уже на следующий день. Мы
                  составляем индивидуальный план обследования и сопровождаем пациента до полного
                  выздоровления.
                </div>
              </div>

              <div className="bg-white rounded-[20px] p-4 border border-border-soft">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground">Контакты</h3>
                </div>

                <div className="text-muted text-sm md:text-base leading-relaxed transition-all duration-300">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-primary">
                        <HistoryIcon className="size-5" />
                      </span>
                      <span className="text-muted text-sm md:text-base">
                        ПН-СБ • 08:00-20:00
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-primary">
                        <GeoIcon className="size-5" />
                      </span>
                      <span className="text-muted text-sm md:text-base">
                        г. Бишкек, ул. Токтогула, 125
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-primary">
                        <PhoneIcon className="size-5" />
                      </span>
                      <span className="text-muted text-sm md:text-base">
                        +996 312 90-12-34
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-primary">
                        <EmailIcon className="size-5" />
                      </span>
                      <span className="text-muted text-sm md:text-base">
                        info@medicom.kg
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- СЕКЦИЯ: ФИЛИАЛЫ --- */}
        <div className="mt-10 md:mt-20 px-4 md:px-0">
          <h2 className="text-2xl font-semibold text-foreground mb-6 md:mb-8">
            Филиалы
          </h2>
          <div className="flex flex-col gap-3 md:grid md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white border border-border-soft rounded-2xl p-4 flex flex-col gap-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-semibold text-foreground">
                  Филиал №1
                </span>
                <span className="text-xs text-primary bg-[#FFF2F0] px-2 py-0.5 rounded-full">
                  ПН-ПТ • 08:00-18:00
                </span>
              </div>
              <div className="flex items-start gap-2 text-sm text-secondary">
                <GeoIcon className="size-4 text-primary mt-0.5 shrink-0" />
                <span>г. Бишкек, мкр. Джал, ул. Ахунбаева, 190</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-secondary">
                <PhoneIcon className="size-4 text-primary shrink-0" />
                <span>+996 312 90-12-35</span>
              </div>
            </div>
            <div className="bg-white border border-border-soft rounded-2xl p-4 flex flex-col gap-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-semibold text-foreground">
                  Филиал №2
                </span>
                <span className="text-xs text-primary bg-[#FFF2F0] px-2 py-0.5 rounded-full">
                  По записи
                </span>
              </div>
              <div className="flex items-start gap-2 text-sm text-secondary">
                <GeoIcon className="size-4 text-primary mt-0.5 shrink-0" />
                <span>г. Бишкек, 7 мкр., д. 42/1</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-secondary">
                <PhoneIcon className="size-4 text-primary shrink-0" />
                <span>+996 555 90-12-36</span>
              </div>
            </div>
            <div className="bg-white border border-border-soft rounded-2xl p-4 flex flex-col gap-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-semibold text-foreground">
                  Филиал №3
                </span>
                <span className="text-xs text-primary bg-[#FFF2F0] px-2 py-0.5 rounded-full">
                  ЕЖЕДНЕВНО • 09:00-21:00
                </span>
              </div>
              <div className="flex items-start gap-2 text-sm text-secondary">
                <GeoIcon className="size-4 text-primary mt-0.5 shrink-0" />
                <span>г. Бишкек, пр. Чуй, 265а</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- СЕКЦИЯ: УСЛУГИ --- */}
        <div className="mt-10 md:mt-20 px-4 md:px-0">
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <h2 className="text-2xl font-semibold text-foreground">Услуги</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Услуга 1 */}
            <Link
              href="/record?service=11"
              className="bg-white rounded-3xl border border-border overflow-hidden flex flex-col h-full cursor-pointer hover:border-primary/40 transition-colors"
            >
              <div className="relative aspect-4/3 w-full">
                <img
                  src="/images/services/cardiology.png"
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
                  Медицинский центр «Медиком»
                </p>

                <div className="flex items-center gap-1 mb-4 text-sm">
                  <StarIcon className="w-3.5 h-3.5 text-primary" />
                  <span className="text-primary font-medium">4.90</span>
                  <span className="text-secondary">(64)</span>
                </div>

                <div className="mt-auto pt-3 flex items-center justify-between gap-3 border-t border-border-soft">
                  <span className="text-foreground font-bold text-lg whitespace-nowrap">
                    2500 с
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
            {/* Услуга 2 */}
            <Link
              href="/record?service=12"
              className="bg-white rounded-3xl border border-border overflow-hidden flex flex-col h-full cursor-pointer hover:border-primary/40 transition-colors"
            >
              <div className="relative aspect-4/3 w-full">
                <img
                  src="/images/services/nevrology.png"
                  alt="Приём невролога первичный"
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
                  Неврология
                </p>

                <h3 className="text-foreground font-semibold text-base leading-snug mb-1 line-clamp-2">
                  Приём невролога первичный
                </h3>

                <p className="text-secondary text-xs mb-3 truncate">
                  Медицинский центр «Медиком»
                </p>

                <div className="flex items-center gap-1 mb-4 text-sm">
                  <StarIcon className="w-3.5 h-3.5 text-primary" />
                  <span className="text-primary font-medium">4.75</span>
                  <span className="text-secondary">(38)</span>
                </div>

                <div className="mt-auto pt-3 flex items-center justify-between gap-3 border-t border-border-soft">
                  <span className="text-foreground font-bold text-lg whitespace-nowrap">
                    1800 с
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
            {/* Услуга 3 */}
            <Link
              href="/record?service=13"
              className="bg-white rounded-3xl border border-border overflow-hidden flex flex-col h-full cursor-pointer hover:border-primary/40 transition-colors"
            >
              <div className="relative aspect-4/3 w-full">
                <img
                  src="/images/services/ginecology.png"
                  alt="УЗИ органов малого таза"
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
                  Гинекология
                </p>

                <h3 className="text-foreground font-semibold text-base leading-snug mb-1 line-clamp-2">
                  УЗИ органов малого таза
                </h3>

                <p className="text-secondary text-xs mb-3 truncate">
                  Медицинский центр «Медиком»
                </p>

                <div className="flex items-center gap-1 mb-4 text-sm">
                  <StarIcon className="w-3.5 h-3.5 text-primary" />
                  <span className="text-primary font-medium">4.85</span>
                  <span className="text-secondary">(51)</span>
                </div>

                <div className="mt-auto pt-3 flex items-center justify-between gap-3 border-t border-border-soft">
                  <span className="text-foreground font-bold text-lg whitespace-nowrap">
                    1500 с
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
            {/* Услуга 4 */}
            <Link
              href="/record?service=14"
              className="bg-white rounded-3xl border border-border overflow-hidden flex flex-col h-full cursor-pointer hover:border-primary/40 transition-colors"
            >
              <div className="relative aspect-4/3 w-full">
                <img
                  src="/images/services/gastroenterology.png"
                  alt="Гастроскопия под седацией"
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
                  Гастроэнтерология
                </p>

                <h3 className="text-foreground font-semibold text-base leading-snug mb-1 line-clamp-2">
                  Гастроскопия под седацией
                </h3>

                <p className="text-secondary text-xs mb-3 truncate">
                  Медицинский центр «Медиком»
                </p>

                <div className="flex items-center gap-1 mb-4 text-sm">
                  <StarIcon className="w-3.5 h-3.5 text-primary" />
                  <span className="text-primary font-medium">4.60</span>
                  <span className="text-secondary">(22)</span>
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
          </div>
        </div>

        {/* --- СЕКЦИЯ: СПЕЦИАЛИСТЫ --- */}
        <div className="mt-10 md:mt-20 px-4 md:px-0">
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <h2 className="text-2xl font-semibold text-foreground">
              Специалисты клиники
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Врач 1 */}
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
            {/* Врач 2 */}
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
                    • Медиком{" "}
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
            {/* Врач 3 */}
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
                    • Медиком{" "}+2
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
            {/* Врач 4 */}
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
          </div>
        </div>

        {/* --- СЕКЦИЯ: ОТЗЫВЫ (widgets/reviews) --- */}
        <div className="mt-10 md:mt-20 mb-10 md:mb-20 md:px-0 bg-white rounded-[20px] p-4 mx-2">
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <h2 className="text-2xl font-semibold text-foreground">Отзывы</h2>
            <Link
              href="/clinics/1/reviews"
              className="text-primary text-sm font-medium hover:underline"
            >
              Все
            </Link>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="w-full md:w-[320px] shrink-0 flex flex-col gap-5">
              {/* Статистика */}
              <div className="flex gap-4">
                <div className="flex-1 bg-white md:bg-transparent border border-border-soft rounded-2xl p-6 flex flex-col items-center md:items-start justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-[#FFA18D] p-2.5 rounded-xl size-10 flex items-center justify-center">
                      <StarIcon className="size-5 text-white" />
                    </div>
                    <span className="text-[24px] font-semibold text-foreground">4.80</span>
                  </div>
                  <span className="text-muted">Средняя оценка</span>
                </div>

                <div className="flex-1 bg-white md:bg-transparent border border-border-soft rounded-2xl p-6 flex flex-col items-center md:items-start justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-[#FFA18D] p-2.5 rounded-xl size-10 flex items-center justify-center">
                      <ChatIcon className="size-5 text-white" />
                    </div>
                    <span className="text-[24px] font-semibold text-foreground">5</span>
                  </div>
                  <span className="text-muted">Всего отзывов</span>
                </div>
              </div>

              {/* Мобильная кнопка открывает ReviewModal — открытое состояние: /specialists/[id]/review-modal */}
              <button
                type="button"
                className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent md:hidden w-full bg-white"
              >
                <span>Оставить свой отзыв</span>
              </button>

              {/* Форма — вариант авторизованного пользователя без своего отзыва */}
              <div className="hidden md:flex flex-col bg-white border border-border-soft rounded-2xl p-4">
                <h3 className="font-medium text-[20px] text-foreground mb-6">
                  Оставьте свой отзыв
                </h3>
                <span className="text-base mb-2">Оцените специалиста</span>

                {/* Звёзды: выбранная — "text-primary", невыбранная — "text-border" */}
                <div className="flex justify-center gap-5 py-4 mb-6 border border-border rounded-xl">
                  <StarIcon className="size-10 cursor-pointer transition-colors text-border" />
                  <StarIcon className="size-10 cursor-pointer transition-colors text-border" />
                  <StarIcon className="size-10 cursor-pointer transition-colors text-border" />
                  <StarIcon className="size-10 cursor-pointer transition-colors text-border" />
                  <StarIcon className="size-10 cursor-pointer transition-colors text-border" />
                </div>

                <span className="text-base mb-2">Поделитесь своим мнением</span>
                <textarea
                  className="w-full border border-border-soft rounded-xl p-3 text-sm outline-none focus:border-primary resize-none h-24 mb-4"
                  placeholder="Введите текст"
                />

                <button
                  type="button"
                  disabled
                  className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-12 text-sm md:text-base px-6 bg-primary text-white active:bg-primary-dark hover:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] w-full"
                >
                  <span>Отправить</span>
                </button>
              </div>
            </div>

            {/* Список отзывов */}
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
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
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
