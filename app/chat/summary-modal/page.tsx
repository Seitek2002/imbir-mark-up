import Link from "next/link";

import DocumentTextIcon from "@/assets/icons/common/document-text.svg";
import DownloadIcon from "@/assets/icons/common/download.svg";
import HeaderBackIcon from "@/assets/icons/header/back-arrow.svg";
import ChatIcon from "@/assets/icons/header/chat.svg";
import GeoBtnArrowIcon from "@/assets/icons/header/geo-btn-arrow.svg";
import GeoIcon from "@/assets/icons/header/geo.svg";
import Logo from "@/assets/icons/header/logo.svg";
import ProfileIcon from "@/assets/icons/header/profile.svg";
import RemoveIcon from "@/assets/icons/header/remove.svg";
import SearchIcon from "@/assets/icons/header/search.svg";

// /chat/summary-modal — ConsultationSummaryModal (итоги видео-консультаций) в
// открытом виде поверх страницы /chat. Роль — пациент (кнопок «Отправить» нет),
// итогов несколько → список с круглой кнопкой скачивания у каждой строки.
// Modal (shared/ui/modal): на мобилке bottom-sheet ("sm:hidden"), на десктопе
// центрированная панель ("hidden sm:flex"), содержимое продублировано.
export default function Page() {
  return (
    <>
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
                    className="flex items-center gap-3 p-3 rounded-2xl cursor-pointer transition-colors text-left w-full bg-transparent hover:bg-gray-50"
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
                    className="flex items-center gap-3 p-3 rounded-2xl cursor-pointer transition-colors text-left w-full bg-[#FEF3F0]"
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
              {/* ===== UserConversation (переписка с врачом) ===== */}
              <div className="relative flex min-h-0 flex-1 flex-col">
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
                      className="shrink-0 rounded-full flex items-center justify-center bg-primary-tint text-primary font-semibold"
                    >
                      А
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground text-sm leading-tight truncate">
                        Асанова Гульнара Бакытовна
                      </p>
                      <div className="text-xs leading-tight mt-0.5">
                        <span className="flex items-center gap-1 text-[#4CAF50]">
                          <span className="inline-block size-1.5 rounded-full bg-[#4CAF50]" />
                          В сети
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <Link
                      href="/chat/summary-modal"
                      aria-label="Итоги видео-консультаций"
                      title="Итоги видео-консультаций"
                      className="flex items-center justify-center size-10 rounded-xl border border-border-soft text-foreground hover:border-primary/40 hover:text-primary transition-colors"
                    >
                      <DocumentTextIcon className="size-5" />
                    </Link>
                  </div>
                </div>

                {/* MessageThread */}
                <div className="relative flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-3 scrollbar-hide bg-white">
                  {/* Входящее */}
                  <div className="relative flex flex-col max-w-[75%] md:max-w-[65%] self-start">
                    <div className="text-sm leading-normal whitespace-pre-wrap break-words px-4 py-2.5 bg-[#EEF1F4] text-foreground rounded-2xl rounded-bl-sm">
                      Здравствуйте, Айгерим! Я посмотрела ваши анализы. Холестерин немного
                      повышен, но ничего критичного.
                    </div>
                    <div className="flex items-center gap-1 mt-1 self-start">
                      <span className="text-[11px] text-muted">17:58</span>
                    </div>
                  </div>

                  {/* Входящее: файл */}
                  <div className="relative flex flex-col max-w-[75%] md:max-w-[65%] self-start">
                    <div className="text-sm leading-normal whitespace-pre-wrap break-words p-1.5 bg-[#EEF1F4] text-foreground rounded-2xl rounded-bl-sm">
                      <a
                        href="/files/analizy.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-xl p-2 no-underline bg-white text-foreground"
                      >
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border text-[9px] font-semibold uppercase border-border-soft text-muted">
                          pdf
                        </div>
                        <span className="min-w-0">
                          <span className="block truncate text-sm font-medium">
                            Расшифровка_анализов.pdf
                          </span>
                          <span className="block text-xs opacity-70">Скачать файл</span>
                        </span>
                      </a>
                    </div>
                    <div className="flex items-center gap-1 mt-1 self-start">
                      <span className="text-[11px] text-muted">17:59</span>
                    </div>
                  </div>

                  {/* Исходящее */}
                  <div className="relative flex flex-col max-w-[75%] md:max-w-[65%] self-end">
                    <div className="text-sm leading-normal whitespace-pre-wrap break-words px-4 py-2.5 bg-primary text-white rounded-2xl rounded-br-sm">
                      Спасибо! Нужно ли что-то менять в питании до приёма?
                    </div>
                    <div className="flex items-center gap-1 mt-1 self-end">
                      <span className="text-[11px] text-muted">18:05</span>
                      <span className="flex items-center justify-center size-3.5 rounded-full shrink-0 bg-[#4CAF50]">
                        <svg width="8" height="8" viewBox="0 0 12 10" fill="none">
                          <path d="M1 5l3.5 3.5L11 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Входящее */}
                  <div className="relative flex flex-col max-w-[75%] md:max-w-[65%] self-start">
                    <div className="text-sm leading-normal whitespace-pre-wrap break-words px-4 py-2.5 bg-[#EEF1F4] text-foreground rounded-2xl rounded-bl-sm">
                      Пока ограничьте жирное и жареное, больше овощей. Подробно обсудим на
                      онлайн-консультации.
                    </div>
                    <div className="flex items-center gap-1 mt-1 self-start">
                      <span className="text-[11px] text-muted">18:21</span>
                    </div>
                  </div>

                  {/* Системное уведомление о видеовстрече */}
                  <div className="self-center max-w-[85%] my-1 flex flex-col items-center gap-2">
                    <div className="bg-[#EEF3FF] text-foreground text-xs leading-normal text-center px-4 py-2 rounded-xl whitespace-pre-wrap break-words">
                      Онлайн-консультация назначена на 1 октября 2026, 10:30
                    </div>
                    <Link
                      href="/consultation/1"
                      className="inline-flex items-center gap-1.5 bg-primary text-white text-xs font-medium px-4 py-2 rounded-full transition-opacity hover:opacity-90"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M23 7l-7 5 7 5V7z" />
                        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                      </svg>
                      Присоединиться
                    </Link>
                    <span className="text-[11px] text-muted">18:30</span>
                  </div>

                  {/* Исходящее (изменено) */}
                  <div className="relative flex flex-col max-w-[75%] md:max-w-[65%] self-end">
                    <div className="text-sm leading-normal whitespace-pre-wrap break-words px-4 py-2.5 bg-primary text-white rounded-2xl rounded-br-sm">
                      Отлично, буду на связи в четверг. Анализы ещё раз сдавать не нужно?
                    </div>
                    <div className="flex items-center gap-1 mt-1 self-end">
                      <span className="text-[11px] text-muted">18:36</span>
                      <span className="text-[11px] text-muted">изменено</span>
                      <span className="flex items-center justify-center size-3.5 rounded-full shrink-0 bg-[#4CAF50]">
                        <svg width="8" height="8" viewBox="0 0 12 10" fill="none">
                          <path d="M1 5l3.5 3.5L11 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Входящее */}
                  <div className="relative flex flex-col max-w-[75%] md:max-w-[65%] self-start">
                    <div className="text-sm leading-normal whitespace-pre-wrap break-words px-4 py-2.5 bg-[#EEF1F4] text-foreground rounded-2xl rounded-bl-sm">
                      Хорошо, жду вас на онлайн-приёме в четверг
                    </div>
                    <div className="flex items-center gap-1 mt-1 self-start">
                      <span className="text-[11px] text-muted">18:42</span>
                    </div>
                  </div>

                  {/* Исходящее (ещё не прочитано) */}
                  <div className="relative flex flex-col max-w-[75%] md:max-w-[65%] self-end">
                    <div className="text-sm leading-normal whitespace-pre-wrap break-words px-4 py-2.5 bg-primary text-white rounded-2xl rounded-br-sm">
                      Спасибо, до встречи!
                    </div>
                    <div className="flex items-center gap-1 mt-1 self-end">
                      <span className="text-[11px] text-muted">18:44</span>
                      <span className="flex items-center justify-center size-3.5 rounded-full shrink-0 bg-[#D1D2D4]">
                        <svg width="8" height="8" viewBox="0 0 12 10" fill="none">
                          <path d="M1 5l3.5 3.5L11 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
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
                        placeholder="Введите сообщение"
                        className="min-w-0 flex-1 bg-transparent py-1 text-sm text-foreground outline-none placeholder:text-muted"
                      />
                      <input type="file" multiple className="hidden" />
                      <button
                        type="button"
                        aria-label="Прикрепить файл"
                        className="flex items-center justify-center size-8 shrink-0 text-muted hover:text-foreground disabled:opacity-50"
                      >
                        <svg
                          className="size-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                        </svg>
                      </button>
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
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* ===== Modal «AI Транскрибация разговора» ===== */}
      <div className="fixed inset-0 z-100 flex items-end sm:items-center justify-center">
        <div
          className="modal-overlay absolute inset-0 bg-black/40 backdrop-blur-sm"
          data-state="open"
        />

        {/* Mobile bottom-sheet */}
        <div
          className="modal-sheet sm:hidden relative bg-white rounded-t-3xl w-full flex flex-col max-h-[90vh] overflow-hidden shadow-xl"
          data-state="open"
        >
          <div className="flex items-center justify-between p-5 border-b border-border-soft">
            <h2 className="text-xl font-semibold text-foreground">
              AI Транскрибация разговора
            </h2>
            <Link
              href="/chat"
              aria-label="Закрыть"
              className="p-1 hover:bg-gray-100 rounded-full transition-colors text-muted"
            >
              <RemoveIcon className="size-5" />
            </Link>
          </div>
          <div className="p-5 overflow-y-auto">
            <div className="flex flex-col">
              <div className="flex items-center justify-between gap-3 py-4 border-b border-border-soft last:border-0">
                <div className="min-w-0">
                  <p className="text-foreground font-semibold leading-snug">
                    AI Транскрибация разговора
                  </p>
                  <p className="text-muted text-sm mt-0.5">18 сентября 2026 г. • 10:30</p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href="/files/consultation-1.docx"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    <span
                      className="flex items-center justify-center size-10 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
                      aria-label="Скачать расшифровку за 18 сентября 2026 г. • 10:30"
                    >
                      <DownloadIcon className="size-5" />
                    </span>
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 py-4 border-b border-border-soft last:border-0">
                <div className="min-w-0">
                  <p className="text-foreground font-semibold leading-snug">
                    AI Транскрибация разговора
                  </p>
                  <p className="text-muted text-sm mt-0.5">2 августа 2026 г. • 16:00</p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href="/files/consultation-2.docx"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    <span
                      className="flex items-center justify-center size-10 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
                      aria-label="Скачать расшифровку за 2 августа 2026 г. • 16:00"
                    >
                      <DownloadIcon className="size-5" />
                    </span>
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 py-4 border-b border-border-soft last:border-0">
                <div className="min-w-0">
                  <p className="text-foreground font-semibold leading-snug">
                    AI Транскрибация разговора
                  </p>
                  <p className="text-muted text-sm mt-0.5">13 мая 2026 г. • 16:47</p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href="/files/consultation-3.docx"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    <span
                      className="flex items-center justify-center size-10 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
                      aria-label="Скачать расшифровку за 13 мая 2026 г. • 16:47"
                    >
                      <DownloadIcon className="size-5" />
                    </span>
                  </a>
                </div>
              </div>

              <Link href="/chat" className="font-medium flex items-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-[52px] text-base px-8 border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent w-full justify-center mt-5">
                <span>Закрыть</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop centered */}
        <div
          className="modal-panel hidden sm:flex relative bg-white rounded-3xl w-full max-w-md flex-col max-h-[90vh] overflow-hidden shadow-xl"
          data-state="open"
        >
          <div className="flex items-center justify-between p-5 border-b border-border-soft">
            <h2 className="text-xl font-semibold text-foreground">
              AI Транскрибация разговора
            </h2>
            <Link
              href="/chat"
              aria-label="Закрыть"
              className="p-1 hover:bg-gray-100 rounded-full transition-colors text-muted"
            >
              <RemoveIcon className="size-5" />
            </Link>
          </div>
          <div className="p-5 overflow-y-auto">
            <div className="flex flex-col">
              <div className="flex items-center justify-between gap-3 py-4 border-b border-border-soft last:border-0">
                <div className="min-w-0">
                  <p className="text-foreground font-semibold leading-snug">
                    AI Транскрибация разговора
                  </p>
                  <p className="text-muted text-sm mt-0.5">18 сентября 2026 г. • 10:30</p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href="/files/consultation-1.docx"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    <span
                      className="flex items-center justify-center size-10 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
                      aria-label="Скачать расшифровку за 18 сентября 2026 г. • 10:30"
                    >
                      <DownloadIcon className="size-5" />
                    </span>
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 py-4 border-b border-border-soft last:border-0">
                <div className="min-w-0">
                  <p className="text-foreground font-semibold leading-snug">
                    AI Транскрибация разговора
                  </p>
                  <p className="text-muted text-sm mt-0.5">2 августа 2026 г. • 16:00</p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href="/files/consultation-2.docx"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    <span
                      className="flex items-center justify-center size-10 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
                      aria-label="Скачать расшифровку за 2 августа 2026 г. • 16:00"
                    >
                      <DownloadIcon className="size-5" />
                    </span>
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 py-4 border-b border-border-soft last:border-0">
                <div className="min-w-0">
                  <p className="text-foreground font-semibold leading-snug">
                    AI Транскрибация разговора
                  </p>
                  <p className="text-muted text-sm mt-0.5">13 мая 2026 г. • 16:47</p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href="/files/consultation-3.docx"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    <span
                      className="flex items-center justify-center size-10 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
                      aria-label="Скачать расшифровку за 13 мая 2026 г. • 16:47"
                    >
                      <DownloadIcon className="size-5" />
                    </span>
                  </a>
                </div>
              </div>

              <Link href="/chat" className="font-medium flex items-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-[52px] text-base px-8 border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent w-full justify-center mt-5">
                <span>Закрыть</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
