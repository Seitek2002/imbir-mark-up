import Link from "next/link";

import StarIcon from "@/assets/icons/common/star.svg";
import TrashIcon from "@/assets/icons/common/trash.svg";
import HeaderBackIcon from "@/assets/icons/header/back-arrow.svg";
import ChatIcon from "@/assets/icons/header/chat.svg";
import GeoBtnArrowIcon from "@/assets/icons/header/geo-btn-arrow.svg";
import GeoIcon from "@/assets/icons/header/geo.svg";
import Logo from "@/assets/icons/header/logo.svg";
import ProfileIcon from "@/assets/icons/header/profile.svg";
import SearchIcon from "@/assets/icons/header/search.svg";

// /chat/ai — открыт ИИ-помощник (pages/chat/ui/AiConversation + RecommendationCards).
// Под ответом ассистента — карточки рекомендаций (DoctorCompactCard,
// ClinicCompactCard, ServiceCompactCard) в горизонтальных лентах.
export default function Page() {
  return (
    <main className="h-dvh overflow-hidden bg-background flex flex-col">
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
                  <Link href="/chat">
                    <button
                      type="button"
                      aria-label="Чат"
                      className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent"
                    >
                      <span className="relative">
                        <ChatIcon className="size-5" />
                        <span className="absolute -top-1.5 -right-1.5 min-w-4 h-4 px-0.5 rounded-full bg-primary text-white text-[10px] font-semibold flex items-center justify-center">3</span>
                      </span>
                    </button>
                  </Link>
                  <Link href="/profile">
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
                  <Link href="/chat">
                    <button
                      type="button"
                      aria-label="Чат"
                      className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent"
                    >
                      <span className="relative">
                        <ChatIcon className="size-5" />
                        <span className="absolute -top-1.5 -right-1.5 min-w-4 h-4 px-0.5 rounded-full bg-primary text-white text-[10px] font-semibold flex items-center justify-center">3</span>
                      </span>
                    </button>
                  </Link>
                  <Link href="/profile">
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

      <div className="flex-1 min-h-0 w-full max-w-350 mx-auto md:px-10 flex flex-col pt-0 md:pt-8 pb-0 md:pb-10">
        <h1 className="hidden md:block text-[28px] font-semibold text-foreground mb-6">
          Чаты
        </h1>

        <div className="flex flex-1 min-h-0 gap-5">
          <aside className="w-full md:w-85 lg:w-92.5 shrink-0 min-h-0 flex-col hidden md:block">
            <div className="flex flex-col gap-3 h-full min-h-0 flex-1">
              {/* Search Row */}
              <div className="flex gap-2 shrink-0">
                <div className="flex-1 h-11 bg-white border border-border-soft rounded-full px-4 flex items-center gap-2 shadow-sm">
                  <SearchIcon className="size-4 text-muted shrink-0" />
                  <input
                    type="text"
                    placeholder="Поиск"
                    className="w-full outline-none bg-transparent text-foreground text-sm placeholder:text-muted"
                  />
                </div>
              </div>

              {/* AI Assistant Card */}
              <div className="bg-white border border-border-soft rounded-3xl p-1 shrink-0 shadow-sm">
                <Link
                  href="/chat/ai"
                  className="flex items-center gap-3 p-3 rounded-2xl cursor-pointer transition-colors text-left w-full bg-[#FEF3F0]"
                >
                  <span className="relative shrink-0">
                    <div
                      style={{ width: 48, height: 48 }}
                      className="shrink-0 rounded-full flex items-center justify-center text-white bg-linear-to-br from-primary to-[#FF8A6B]"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 24, height: 24 }}>
                        <path d="M12 2.5l1.9 5.7 5.6 1.8-5.6 1.9L12 17.5l-1.9-5.6-5.6-1.9 5.6-1.8L12 2.5z" />
                        <path
                          d="M18.5 14l.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9.9-2.6z"
                          opacity="0.65"
                        />
                      </svg>
                    </div>
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <span className="font-semibold text-foreground text-sm truncate">
                        ИИ-помощник
                      </span>
                    </div>
                    <p className="text-xs text-muted truncate">Задайте вопрос ассистенту</p>
                  </div>
                </Link>
              </div>

              {/* Other Chats Card List */}
              <div className="bg-white border border-border-soft rounded-3xl p-2.5 shadow-sm flex flex-col gap-1 flex-1 overflow-y-auto scrollbar-hide">
                <Link
                  href="/chat"
                  className="flex items-center gap-3 p-3 rounded-2xl cursor-pointer transition-colors text-left w-full bg-transparent hover:bg-gray-50"
                >
                  <span className="relative shrink-0">
                    <div
                      style={{ width: 48, height: 48 }}
                      className="shrink-0 rounded-full flex items-center justify-center bg-primary-tint text-primary font-semibold"
                    >
                      А
                    </div>
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <span className="font-semibold text-foreground text-sm truncate">
                        Асанова Гульнара Бакытовна
                      </span>
                      <span className="text-xs text-muted shrink-0">18:42</span>
                    </div>
                    <p className="text-xs text-muted truncate">Хорошо, жду вас на онлайн-приёме в четверг</p>
                  </div>
                </Link>
                <Link
                  href="/chat"
                  className="flex items-center gap-3 p-3 rounded-2xl cursor-pointer transition-colors text-left w-full bg-transparent hover:bg-gray-50"
                >
                  <span className="relative shrink-0">
                    <div
                      style={{ width: 48, height: 48 }}
                      className="shrink-0 rounded-full flex items-center justify-center bg-primary-tint text-primary font-semibold"
                    >
                      Т
                    </div>
                    <span className="absolute -top-1 -right-1 min-w-4.5 h-4.5 px-1 rounded-full bg-primary text-white text-[10px] font-semibold flex items-center justify-center">
                      2
                    </span>
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <span className="font-semibold text-foreground text-sm truncate">
                        Токтосунов Бакыт Эрмекович
                      </span>
                      <span className="text-xs text-muted shrink-0">15:10</span>
                    </div>
                    <p className="text-xs text-muted truncate">Результаты МРТ в норме, подробнее обсудим на приёме</p>
                  </div>
                </Link>
                <Link
                  href="/chat"
                  className="flex items-center gap-3 p-3 rounded-2xl cursor-pointer transition-colors text-left w-full bg-transparent hover:bg-gray-50"
                >
                  <span className="relative shrink-0">
                    <div
                      style={{ width: 48, height: 48 }}
                      className="shrink-0 rounded-full flex items-center justify-center bg-primary-tint text-primary font-semibold"
                    >
                      М
                    </div>
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <span className="font-semibold text-foreground text-sm truncate">
                        Медицинский центр «Медиком»
                      </span>
                      <span className="text-xs text-muted shrink-0">11:05</span>
                    </div>
                    <p className="text-xs text-muted truncate">Ваша запись подтверждена</p>
                  </div>
                </Link>
                <Link
                  href="/chat"
                  className="flex items-center gap-3 p-3 rounded-2xl cursor-pointer transition-colors text-left w-full bg-transparent hover:bg-gray-50"
                >
                  <span className="relative shrink-0">
                    <div
                      style={{ width: 48, height: 48 }}
                      className="shrink-0 rounded-full flex items-center justify-center bg-primary-tint text-primary font-semibold"
                    >
                      Ж
                    </div>
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <span className="font-semibold text-foreground text-sm truncate">
                        Жумабаева Айнура Талантовна
                      </span>
                      <span className="text-xs text-muted shrink-0">09:30</span>
                    </div>
                    <p className="text-xs text-muted truncate">Спасибо! До встречи</p>
                  </div>
                </Link>
                <Link
                  href="/chat"
                  className="flex items-center gap-3 p-3 rounded-2xl cursor-pointer transition-colors text-left w-full bg-transparent hover:bg-gray-50"
                >
                  <span className="relative shrink-0">
                    <div
                      style={{ width: 48, height: 48 }}
                      className="shrink-0 rounded-full flex items-center justify-center bg-primary-tint text-primary font-semibold"
                    >
                      И
                    </div>
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <span className="font-semibold text-foreground text-sm truncate">
                        Исаков Нурлан Алмазбекович
                      </span>
                    </div>
                    <p className="text-xs text-muted truncate">Нет сообщений</p>
                  </div>
                </Link>
              </div>
            </div>
          </aside>

          <section className="flex-1 min-h-0 bg-white flex-col overflow-hidden md:border md:border-border-soft md:rounded-[32px] shadow-sm flex">
            {/* ===== AiConversation ===== */}
            {/* ChatHeader */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border-soft">
              <div className="flex items-center gap-3 min-w-0">
                <Link
                  href="/chat/list"
                  aria-label="Назад к списку чатов"
                  className="md:hidden flex items-center justify-center size-9 p-0 rounded-full hover:bg-gray-50 text-foreground"
                >
                  <HeaderBackIcon className="size-5" />
                </Link>
                <div
                  style={{ width: 40, height: 40 }}
                  className="shrink-0 rounded-full flex items-center justify-center text-white bg-linear-to-br from-primary to-[#FF8A6B]"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20 }}>
                    <path d="M12 2.5l1.9 5.7 5.6 1.8-5.6 1.9L12 17.5l-1.9-5.6-5.6-1.9 5.6-1.8L12 2.5z" />
                    <path
                      d="M18.5 14l.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9.9-2.6z"
                      opacity="0.65"
                    />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-foreground text-sm leading-tight truncate">
                    ИИ-помощник
                  </p>
                  <div className="text-xs leading-tight mt-0.5">
                    <span className="text-muted">Виртуальный ассистент</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  aria-label="Очистить историю"
                  className="flex items-center justify-center size-9 p-0 rounded-full hover:bg-background transition-colors text-muted hover:text-foreground"
                >
                  <TrashIcon className="size-5" />
                </button>
              </div>
            </div>

            {/* MessageThread */}
            <div className="relative flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-3 scrollbar-hide bg-white">
              {/* Вопрос пользователя */}
              <div className="relative flex flex-col max-w-[75%] md:max-w-[65%] self-end">
                <div className="text-sm leading-normal whitespace-pre-wrap break-words px-4 py-2.5 bg-primary text-white rounded-2xl rounded-br-sm">
                  Третий день болит голова, особенно по утрам, и давление 140/90.
                  К какому врачу обратиться?
                </div>
                <div className="flex items-center gap-1 mt-1 self-end">
                  <span className="text-[11px] text-muted">12:14</span>
                </div>
              </div>

              {/* Ответ ассистента */}
              <div className="relative flex flex-col max-w-[75%] md:max-w-[65%] self-start">
                <div className="text-sm leading-normal whitespace-pre-wrap break-words px-4 py-2.5 bg-[#EEF1F4] text-foreground rounded-2xl rounded-bl-sm">
                  {"Утренние головные боли вместе с повышенным давлением стоит показать кардиологу или терапевту — это частый признак артериальной гипертензии.\n\nДо приёма измеряйте давление утром и вечером и записывайте значения. Если давление поднимется выше 180/110 или появятся слабость в руке, нарушение речи или сильная тошнота — сразу вызывайте скорую (103).\n\nНиже — врачи, клиники и услуги, которые могут помочь."}
                </div>
                <div className="flex items-center gap-1 mt-1 self-start">
                  <span className="text-[11px] text-muted">12:14</span>
                </div>
              </div>

              {/* RecommendationCards */}
              <div className="self-start w-full md:max-w-[85%] flex flex-col gap-3">
                <div>
                  <p className="text-xs font-medium text-secondary uppercase mb-2">Врачи</p>
                  <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
                    {/* DoctorCompactCard 1 */}
                    <Link
                      href="/specialists/1"
                      className="w-40 shrink-0 bg-white rounded-2xl border border-border-soft p-2 flex flex-col cursor-pointer hover:border-primary/40 transition-colors"
                    >
                      <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-primary-tint">
                        <img
                          src="/images/doctors/doctor-2.png"
                          alt="Асанова Гульнара Бакытовна"
                          className="absolute inset-0 h-full w-full object-cover object-top"
                        />
                      </div>
                      <div className="mt-2 px-0.5">
                        <p className="font-semibold text-xs text-foreground leading-snug truncate">
                          Асанова Гульнара Бакытовна
                        </p>
                        <p className="text-[11px] text-secondary truncate mt-0.5">Кардиолог</p>
                        <div className="flex items-center gap-1 mt-1 text-[11px]">
                          <StarIcon className="size-3 text-[#FF7C63]" />
                          <span className="font-medium text-[#FF7C63]">4.90</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="font-medium flex items-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 relative after:absolute after:inset-x-0 after:-inset-y-2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent w-full justify-center mt-2 h-7 text-[11px] px-2"
                      >
                        <span>Записаться</span>
                      </button>
                    </Link>

                    {/* DoctorCompactCard 2 */}
                    <Link
                      href="/specialists/2"
                      className="w-40 shrink-0 bg-white rounded-2xl border border-border-soft p-2 flex flex-col cursor-pointer hover:border-primary/40 transition-colors"
                    >
                      <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-primary-tint">
                        <img
                          src="/images/doctors/doctor-3.png"
                          alt="Мамытов Азамат Кубанычбекович"
                          className="absolute inset-0 h-full w-full object-cover object-top"
                        />
                      </div>
                      <div className="mt-2 px-0.5">
                        <p className="font-semibold text-xs text-foreground leading-snug truncate">
                          Мамытов Азамат Кубанычбекович
                        </p>
                        <p className="text-[11px] text-secondary truncate mt-0.5">Терапевт</p>
                        <div className="flex items-center gap-1 mt-1 text-[11px]">
                          <StarIcon className="size-3 text-[#FF7C63]" />
                          <span className="font-medium text-[#FF7C63]">4.80</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="font-medium flex items-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 relative after:absolute after:inset-x-0 after:-inset-y-2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent w-full justify-center mt-2 h-7 text-[11px] px-2"
                      >
                        <span>Записаться</span>
                      </button>
                    </Link>

                    {/* DoctorCompactCard 3 */}
                    <Link
                      href="/specialists/3"
                      className="w-40 shrink-0 bg-white rounded-2xl border border-border-soft p-2 flex flex-col cursor-pointer hover:border-primary/40 transition-colors"
                    >
                      <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-primary-tint">
                        <img
                          src="/images/doctors/doctor-5.png"
                          alt="Токтосунов Бакыт Эрмекович"
                          className="absolute inset-0 h-full w-full object-cover object-top"
                        />
                      </div>
                      <div className="mt-2 px-0.5">
                        <p className="font-semibold text-xs text-foreground leading-snug truncate">
                          Токтосунов Бакыт Эрмекович
                        </p>
                        <p className="text-[11px] text-secondary truncate mt-0.5">Невролог</p>
                        <div className="flex items-center gap-1 mt-1 text-[11px]">
                          <StarIcon className="size-3 text-[#FF7C63]" />
                          <span className="font-medium text-[#FF7C63]">4.70</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="font-medium flex items-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 relative after:absolute after:inset-x-0 after:-inset-y-2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent w-full justify-center mt-2 h-7 text-[11px] px-2"
                      >
                        <span>Записаться</span>
                      </button>
                    </Link>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-medium text-secondary uppercase mb-2">Клиники</p>
                  <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
                    {/* ClinicCompactCard 1 */}
                    <Link
                      href="/clinics/1"
                      className="w-40 shrink-0 bg-white rounded-2xl border border-border-soft p-2 flex flex-col cursor-pointer hover:border-primary/40 transition-colors"
                    >
                      <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-linear-to-br from-[#FFF2F0] to-[#FFD9CC]">
                        <img
                          src="/images/clinics/clinic-1.png"
                          alt="Медицинский центр «Медиком»"
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      </div>
                      <div className="mt-2 px-0.5">
                        <p className="font-semibold text-xs text-foreground leading-snug truncate">
                          Медицинский центр «Медиком»
                        </p>
                        <p className="text-[11px] text-secondary truncate mt-0.5">Бишкек</p>
                        <div className="flex items-center gap-1 mt-1 text-[11px]">
                          <StarIcon className="size-3 text-[#FFA18D]" />
                          <span className="font-medium text-[#FFA18D]">4.80</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="font-medium flex items-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 relative after:absolute after:inset-x-0 after:-inset-y-2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent w-full justify-center mt-2 h-7 text-[11px] px-2"
                      >
                        <span>Записаться</span>
                      </button>
                    </Link>

                    {/* ClinicCompactCard 2 — без фото: заглушка с инициалами */}
                    <Link
                      href="/clinics/4"
                      className="w-40 shrink-0 bg-white rounded-2xl border border-border-soft p-2 flex flex-col cursor-pointer hover:border-primary/40 transition-colors"
                    >
                      <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-linear-to-br from-[#FFF2F0] to-[#FFD9CC]">
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-primary font-bold text-lg">КЦ</span>
                        </div>
                      </div>
                      <div className="mt-2 px-0.5">
                        <p className="font-semibold text-xs text-foreground leading-snug truncate">
                          Кардиоцентр «Жүрөк»
                        </p>
                        <p className="text-[11px] text-secondary truncate mt-0.5">Бишкек</p>
                        <div className="flex items-center gap-1 mt-1 text-[11px]">
                          <StarIcon className="size-3 text-[#FFA18D]" />
                          <span className="font-medium text-[#FFA18D]">4.60</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="font-medium flex items-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 relative after:absolute after:inset-x-0 after:-inset-y-2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent w-full justify-center mt-2 h-7 text-[11px] px-2"
                      >
                        <span>Записаться</span>
                      </button>
                    </Link>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-medium text-secondary uppercase mb-2">Услуги</p>
                  <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
                    {/* ServiceCompactCard 1 */}
                    <Link
                      href="/record?service=12&clinic=1"
                      className="w-40 shrink-0 bg-white rounded-2xl border border-border-soft p-3 flex flex-col cursor-pointer hover:border-primary/40 transition-colors"
                    >
                      <p className="text-[10px] text-muted uppercase tracking-wider truncate">
                        Кардиология
                      </p>
                      <p className="font-semibold text-xs text-foreground leading-snug mt-1 line-clamp-2 min-h-8">
                        Суточное мониторирование давления (СМАД)
                      </p>
                      <p className="text-[11px] text-secondary truncate mt-1">
                        Медицинский центр «Медиком»
                      </p>
                      <p className="font-bold text-sm text-foreground mt-2">2500 с</p>
                      <button
                        type="button"
                        className="font-medium flex items-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 relative after:absolute after:inset-x-0 after:-inset-y-2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent w-full justify-center mt-2 h-7 text-[11px] px-2"
                      >
                        <span>Записаться</span>
                      </button>
                    </Link>

                    {/* ServiceCompactCard 2 */}
                    <Link
                      href="/record?service=7&clinic=2"
                      className="w-40 shrink-0 bg-white rounded-2xl border border-border-soft p-3 flex flex-col cursor-pointer hover:border-primary/40 transition-colors"
                    >
                      <p className="text-[10px] text-muted uppercase tracking-wider truncate">
                        Функциональная диагностика
                      </p>
                      <p className="font-semibold text-xs text-foreground leading-snug mt-1 line-clamp-2 min-h-8">
                        ЭКГ с расшифровкой
                      </p>
                      <p className="text-[11px] text-secondary truncate mt-1">Нео Клиник</p>
                      <p className="font-bold text-sm text-foreground mt-2">800 с</p>
                      <button
                        type="button"
                        className="font-medium flex items-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 relative after:absolute after:inset-x-0 after:-inset-y-2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent w-full justify-center mt-2 h-7 text-[11px] px-2"
                      >
                        <span>Записаться</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div />
            </div>

            {/* MessageComposer */}
            <div className="relative px-4 py-3 border-t border-border-soft bg-white">
              <div className="flex items-center gap-2">
                <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-border-soft bg-white py-1.5 pl-4 pr-3 transition-all focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20">
                  <input
                    type="text"
                    placeholder="Спросите ИИ-помощника"
                    className="min-w-0 flex-1 bg-transparent py-1 text-sm text-foreground outline-none placeholder:text-muted"
                  />
                </div>
                <button
                  type="button"
                  disabled
                  aria-label="Отправить сообщение"
                  className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-colors disabled:bg-border-soft disabled:text-muted"
                >
                  <svg className="size-4.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </div>
              <p className="mt-2 text-center text-[11px] text-muted leading-tight">
                Это ИИ, он может ошибаться. ИИ не врач — он может только
                проконсультировать или помочь направить к врачу.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
