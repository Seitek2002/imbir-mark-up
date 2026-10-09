import Link from "next/link";

import ArrowLeftIcon from "@/assets/icons/button/arrow-left.svg";
import ArrowRightIcon from "@/assets/icons/button/arrow-right.svg";
import DropdownArrowIcon from "@/assets/icons/dropdown/arrow.svg";
import HeaderBackIcon from "@/assets/icons/header/back-arrow.svg";
import ChatIcon from "@/assets/icons/header/chat.svg";
import GeoBtnArrowIcon from "@/assets/icons/header/geo-btn-arrow.svg";
import GeoIcon from "@/assets/icons/header/geo.svg";
import Logo from "@/assets/icons/header/logo.svg";
import ProfileIcon from "@/assets/icons/header/profile.svg";
import SearchIcon from "@/assets/icons/header/search.svg";

// Оформление записи (pages/record).
// Состояние: гость; выбраны клиника «Медиком», врач Асанова А. Б. и услуга; в календаре
// (widgets/appointment-datetime-picker) выбран вторник 29 сентября 2026 и слот 10:30
// (сегодня — 25 сентября, прошедшие дни задизейблены).
// На мобильном активен шаг 2 из 3 (шаги 1 и 3 скрыты классом "hidden lg:block",
// на десктопе все три шага видны одной формой + карточка-сводка справа).
// Модалка выбора (SelectionModal) закрыта; окно успешной записи — /record/success-modal.
export default function Page() {
  return (
    <main className="min-h-screen bg-background lg:bg-white flex flex-col">
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
              <h2 className="text-center font-medium text-base px-2">
                Оформление записи
              </h2>
              <div className="flex justify-end"></div>
            </div>
            {/* MobileStepsProgress: шаг 2 из 3 — пройденные и текущий "border-primary text-primary", будущие "border-[#C8CDD1] text-[#A2A9AE]" */}
            <div className="mt-4">
              <div className="mt-1 px-1">
                <div className="relative">
                  <div className="absolute left-3 right-3 top-1/2 -translate-y-1/2 h-px bg-[#D3D7DA]" />
                  <div
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-px bg-primary transition-all duration-500 ease-out"
                    style={{ width: "calc((100% - 24px) * 0.5)" }}
                  />

                  <div className="relative flex items-center justify-between">
                    <span className="size-6 rounded-full border text-xs flex items-center justify-center transition-colors duration-300 bg-white border-primary text-primary">
                      1
                    </span>
                    <span className="size-6 rounded-full border text-xs flex items-center justify-center transition-colors duration-300 bg-white border-primary text-primary">
                      2
                    </span>
                    <span className="size-6 rounded-full border text-xs flex items-center justify-center transition-colors duration-300 bg-white border-[#C8CDD1] text-[#A2A9AE]">
                      3
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="hidden lg:block w-full max-w-340 mx-auto px-10 pt-6">
        <div className="flex items-center gap-3">
          <Link
            href="/specialists/1"
            aria-label="Назад"
            className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent"
          >
            <HeaderBackIcon className="size-4" />
          </Link>
          <h1 className="text-[28px] font-semibold text-foreground leading-[130%]">
            Оформление записи
          </h1>
        </div>
      </div>

      <div className="w-full max-w-340 mx-auto px-4 lg:px-10 py-4 lg:py-6 pb-10 flex-1">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-6">
          <div className="rounded-3xl border border-border-soft bg-white overflow-hidden">
            {/* ===== ШАГ 1: выбор клиники / врача / услуги ===== */}
            <section id="record-step-1" className="p-4 lg:p-6 hidden lg:block">
              <div className="hidden lg:block">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="size-7 rounded-full border border-primary text-primary text-sm flex items-center justify-center">
                    1
                  </span>
                  <h2 className="text-[28px] text-foreground leading-[130%] font-semibold">
                    Выберите
                  </h2>
                </div>

                <div className="space-y-3 max-w-full lg:max-w-75">
                  <div className="space-y-1.5">
                    <span className="text-sm font-medium text-overlay">Клиника</span>
                    <button
                      type="button"
                      className="w-full h-11 rounded-lg border px-3 text-left flex items-center justify-between transition-all focus-visible:outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] border-border-soft hover:border-primary/40"
                    >
                      <span className="text-sm text-foreground">
                        Медицинский центр «Медиком»
                      </span>
                      <DropdownArrowIcon className="size-5 text-muted" />
                    </button>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-sm font-medium text-overlay">Специалист</span>
                    <button
                      type="button"
                      className="w-full h-11 rounded-lg border px-3 text-left flex items-center justify-between transition-all focus-visible:outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] border-border-soft hover:border-primary/40"
                    >
                      <span className="text-sm text-foreground">
                        Асанова Айгуль Бакытовна
                      </span>
                      <DropdownArrowIcon className="size-5 text-muted" />
                    </button>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-sm font-medium text-overlay">Услуга</span>
                    <button
                      type="button"
                      className="w-full h-11 rounded-lg border px-3 text-left flex items-center justify-between transition-all focus-visible:outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] border-border-soft hover:border-primary/40"
                    >
                      <span className="text-sm text-foreground">
                        Консультация кардиолога с ЭКГ
                      </span>
                      <DropdownArrowIcon className="size-5 text-muted" />
                    </button>
                  </div>
                </div>
              </div>
              {/* Мобильный список выбора шага 1 (lg:hidden) в этом состоянии не виден — активен шаг 2 */}
            </section>

            {/* ===== ШАГ 2: дата и время ===== */}
            <section
              id="record-step-2"
              className="p-4 lg:p-6 lg:border-t lg:border-border-soft lg:block"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="size-7 rounded-full border border-primary text-primary text-sm flex items-center justify-center">
                  2
                </span>
                <h2 className="text-[28px] text-foreground leading-[130%] font-semibold">
                  Выберите дату и время
                </h2>
              </div>

              <p className="text-xs text-muted mb-3">
                Видеозвонок с врачом доступен после{" "}
                <Link
                  href="/login"
                  className="text-primary underline hover:no-underline"
                >
                  авторизации
                </Link>
                . Без входа запись оформится без ссылки на консультацию.
              </p>

              {/* AppointmentDateTimePicker */}
              <div className="space-y-3">
                {/* MOBILE layout */}
                <div className="lg:hidden space-y-3">
                  <div className="border border-border-soft rounded-2xl p-3">
                    <div className="flex items-center justify-between bg-background rounded-xl px-2 py-1.5">
                      <button
                        type="button"
                        aria-label="Предыдущий месяц"
                        className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-1.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] active:bg-border-soft hover:bg-background hover:bg-white"
                      >
                        <ArrowLeftIcon className="size-4" />
                      </button>
                      <span className="text-sm font-medium text-foreground">Сентябрь 2026</span>
                      <button
                        type="button"
                        aria-label="Следующий месяц"
                        className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-1.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] active:bg-border-soft hover:bg-background hover:bg-white"
                      >
                        <ArrowRightIcon className="size-4" />
                      </button>
                    </div>
                    {/* Лента дней: выбранный — "border-primary text-primary bg-[#FFF3EE]", прошедший — disabled */}
                    <div className="mt-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                      <div className="flex gap-2" style={{ width: "max-content" }}>
                        <button type="button" disabled className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          <span className="text-[10px] text-muted">ВТ</span>
                          <span className="font-medium">25</span>
                        </button>
                        <button type="button" disabled className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          <span className="text-[10px] text-muted">СР</span>
                          <span className="font-medium">26</span>
                        </button>
                        <button type="button" disabled className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          <span className="text-[10px] text-muted">ЧТ</span>
                          <span className="font-medium">27</span>
                        </button>
                        <button type="button" disabled className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          <span className="text-[10px] text-muted">ПТ</span>
                          <span className="font-medium">28</span>
                        </button>
                        <button type="button" disabled className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          <span className="text-[10px] text-muted">СБ</span>
                          <span className="font-medium">29</span>
                        </button>
                        <button type="button" disabled className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          <span className="text-[10px] text-muted">ВС</span>
                          <span className="font-medium">30</span>
                        </button>
                        <button type="button" disabled className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          <span className="text-[10px] text-muted">ПН</span>
                          <span className="font-medium">31</span>
                        </button>
                        <button type="button" disabled className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          <span className="text-[10px] text-muted">ВТ</span>
                          <span className="font-medium">01</span>
                        </button>
                        <button type="button" disabled className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          <span className="text-[10px] text-muted">СР</span>
                          <span className="font-medium">02</span>
                        </button>
                        <button type="button" disabled className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          <span className="text-[10px] text-muted">ЧТ</span>
                          <span className="font-medium">03</span>
                        </button>
                        <button type="button" disabled className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          <span className="text-[10px] text-muted">ПТ</span>
                          <span className="font-medium">04</span>
                        </button>
                        <button type="button" disabled className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          <span className="text-[10px] text-muted">СБ</span>
                          <span className="font-medium">05</span>
                        </button>
                        <button type="button" disabled className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          <span className="text-[10px] text-muted">ВС</span>
                          <span className="font-medium">06</span>
                        </button>
                        <button type="button" disabled className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          <span className="text-[10px] text-muted">ПН</span>
                          <span className="font-medium">07</span>
                        </button>
                        <button type="button" disabled className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          <span className="text-[10px] text-muted">ВТ</span>
                          <span className="font-medium">08</span>
                        </button>
                        <button type="button" disabled className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          <span className="text-[10px] text-muted">СР</span>
                          <span className="font-medium">09</span>
                        </button>
                        <button type="button" disabled className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          <span className="text-[10px] text-muted">ЧТ</span>
                          <span className="font-medium">10</span>
                        </button>
                        <button type="button" disabled className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          <span className="text-[10px] text-muted">ПТ</span>
                          <span className="font-medium">11</span>
                        </button>
                        <button type="button" disabled className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          <span className="text-[10px] text-muted">СБ</span>
                          <span className="font-medium">12</span>
                        </button>
                        <button type="button" disabled className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          <span className="text-[10px] text-muted">ВС</span>
                          <span className="font-medium">13</span>
                        </button>
                        <button type="button" disabled className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          <span className="text-[10px] text-muted">ПН</span>
                          <span className="font-medium">14</span>
                        </button>
                        <button type="button" disabled className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          <span className="text-[10px] text-muted">ВТ</span>
                          <span className="font-medium">15</span>
                        </button>
                        <button type="button" disabled className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          <span className="text-[10px] text-muted">СР</span>
                          <span className="font-medium">16</span>
                        </button>
                        <button type="button" disabled className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          <span className="text-[10px] text-muted">ЧТ</span>
                          <span className="font-medium">17</span>
                        </button>
                        <button type="button" disabled className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          <span className="text-[10px] text-muted">ПТ</span>
                          <span className="font-medium">18</span>
                        </button>
                        <button type="button" disabled className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          <span className="text-[10px] text-muted">СБ</span>
                          <span className="font-medium">19</span>
                        </button>
                        <button type="button" disabled className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          <span className="text-[10px] text-muted">ВС</span>
                          <span className="font-medium">20</span>
                        </button>
                        <button type="button" disabled className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          <span className="text-[10px] text-muted">ПН</span>
                          <span className="font-medium">21</span>
                        </button>
                        <button type="button" disabled className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          <span className="text-[10px] text-muted">ВТ</span>
                          <span className="font-medium">22</span>
                        </button>
                        <button type="button" disabled className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          <span className="text-[10px] text-muted">СР</span>
                          <span className="font-medium">23</span>
                        </button>
                        <button type="button" disabled className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          <span className="text-[10px] text-muted">ЧТ</span>
                          <span className="font-medium">24</span>
                        </button>
                        <button type="button" className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white">
                          <span className="text-[10px] text-muted">ПТ</span>
                          <span className="font-medium">25</span>
                        </button>
                        <button type="button" className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white">
                          <span className="text-[10px] text-muted">СБ</span>
                          <span className="font-medium">26</span>
                        </button>
                        <button type="button" className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white">
                          <span className="text-[10px] text-muted">ВС</span>
                          <span className="font-medium">27</span>
                        </button>
                        <button type="button" className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white">
                          <span className="text-[10px] text-muted">ПН</span>
                          <span className="font-medium">28</span>
                        </button>
                        <button type="button" className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-primary text-primary bg-[#FFF3EE]">
                          <span className="text-[10px] text-primary">ВТ</span>
                          <span className="font-medium">29</span>
                        </button>
                        <button type="button" className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white">
                          <span className="text-[10px] text-muted">СР</span>
                          <span className="font-medium">30</span>
                        </button>
                        <button type="button" className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white">
                          <span className="text-[10px] text-muted">ЧТ</span>
                          <span className="font-medium">01</span>
                        </button>
                        <button type="button" className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white">
                          <span className="text-[10px] text-muted">ПТ</span>
                          <span className="font-medium">02</span>
                        </button>
                        <button type="button" className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white">
                          <span className="text-[10px] text-muted">СБ</span>
                          <span className="font-medium">03</span>
                        </button>
                        <button type="button" className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white">
                          <span className="text-[10px] text-muted">ВС</span>
                          <span className="font-medium">04</span>
                        </button>
                        <button type="button" className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white">
                          <span className="text-[10px] text-muted">ПН</span>
                          <span className="font-medium">05</span>
                        </button>
                        <button type="button" className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white">
                          <span className="text-[10px] text-muted">ВТ</span>
                          <span className="font-medium">06</span>
                        </button>
                        <button type="button" className="flex flex-col items-center justify-center gap-1 w-12 h-14 rounded-xl border text-sm transition-all shrink-0 border-border-soft text-foreground bg-white">
                          <span className="text-[10px] text-muted">СР</span>
                          <span className="font-medium">07</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Time slots mobile */}
                  <div className="border border-border-soft rounded-2xl p-3 space-y-3">
                    <div>
                      <p className="text-sm text-secondary mb-2">Утро</p>
                      <div className="flex flex-wrap gap-1.5">
                        <button type="button" className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground">
                          09:00
                        </button>
                        <button type="button" disabled className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          09:30
                        </button>
                        <button type="button" className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground">
                          10:00
                        </button>
                        <button type="button" className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-primary text-primary bg-[#FFF3EE]">
                          10:30
                        </button>
                        <button type="button" disabled className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          11:00
                        </button>
                        <button type="button" className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground">
                          11:30
                        </button>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-secondary mb-2">Обед</p>
                      <div className="flex flex-wrap gap-1.5">
                        <button type="button" className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground">
                          12:00
                        </button>
                        <button type="button" disabled className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          12:30
                        </button>
                        <button type="button" disabled className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          13:00
                        </button>
                        <button type="button" className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground">
                          13:30
                        </button>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-secondary mb-2">Вечер</p>
                      <div className="flex flex-wrap gap-1.5">
                        <button type="button" className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground">
                          14:00
                        </button>
                        <button type="button" className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground">
                          14:30
                        </button>
                        <button type="button" disabled className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          15:00
                        </button>
                        <button type="button" className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground">
                          15:30
                        </button>
                        <button type="button" className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground">
                          16:00
                        </button>
                        <button type="button" disabled className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          16:30
                        </button>
                        <button type="button" className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground">
                          17:00
                        </button>
                        <button type="button" className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground">
                          17:30
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* DESKTOP layout */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-3">
                  <div className="border border-border-soft rounded-2xl p-3">
                    <div className="flex items-center justify-between bg-background rounded-xl px-2 py-1.5">
                      <button
                        type="button"
                        aria-label="Предыдущий месяц"
                        className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-1.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] active:bg-border-soft hover:bg-background hover:bg-white"
                      >
                        <ArrowLeftIcon className="size-4" />
                      </button>
                      <span className="text-sm font-medium text-foreground">Сентябрь 2026</span>
                      <button
                        type="button"
                        aria-label="Следующий месяц"
                        className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-1.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] active:bg-border-soft hover:bg-background hover:bg-white"
                      >
                        <ArrowRightIcon className="size-4" />
                      </button>
                    </div>
                    <div className="mt-3">
                      <div className="grid grid-cols-7 gap-1 mb-2">
                        <span className="text-center text-xs text-muted py-1">ПН</span>
                        <span className="text-center text-xs text-muted py-1">ВТ</span>
                        <span className="text-center text-xs text-muted py-1">СР</span>
                        <span className="text-center text-xs text-muted py-1">ЧТ</span>
                        <span className="text-center text-xs text-muted py-1">ПТ</span>
                        <span className="text-center text-xs text-muted py-1">СБ</span>
                        <span className="text-center text-xs text-muted py-1">ВС</span>
                      </div>
                      <div className="grid grid-cols-7 gap-1.5">
                        <div className="h-9" />
                        <button type="button" disabled className="h-9 rounded-lg border text-sm transition-all hover:border-primary/40 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          01
                        </button>
                        <button type="button" disabled className="h-9 rounded-lg border text-sm transition-all hover:border-primary/40 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          02
                        </button>
                        <button type="button" disabled className="h-9 rounded-lg border text-sm transition-all hover:border-primary/40 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          03
                        </button>
                        <button type="button" disabled className="h-9 rounded-lg border text-sm transition-all hover:border-primary/40 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          04
                        </button>
                        <button type="button" disabled className="h-9 rounded-lg border text-sm transition-all hover:border-primary/40 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          05
                        </button>
                        <button type="button" disabled className="h-9 rounded-lg border text-sm transition-all hover:border-primary/40 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          06
                        </button>
                        <button type="button" disabled className="h-9 rounded-lg border text-sm transition-all hover:border-primary/40 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          07
                        </button>
                        <button type="button" disabled className="h-9 rounded-lg border text-sm transition-all hover:border-primary/40 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          08
                        </button>
                        <button type="button" disabled className="h-9 rounded-lg border text-sm transition-all hover:border-primary/40 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          09
                        </button>
                        <button type="button" disabled className="h-9 rounded-lg border text-sm transition-all hover:border-primary/40 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          10
                        </button>
                        <button type="button" disabled className="h-9 rounded-lg border text-sm transition-all hover:border-primary/40 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          11
                        </button>
                        <button type="button" disabled className="h-9 rounded-lg border text-sm transition-all hover:border-primary/40 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          12
                        </button>
                        <button type="button" disabled className="h-9 rounded-lg border text-sm transition-all hover:border-primary/40 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          13
                        </button>
                        <button type="button" disabled className="h-9 rounded-lg border text-sm transition-all hover:border-primary/40 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          14
                        </button>
                        <button type="button" disabled className="h-9 rounded-lg border text-sm transition-all hover:border-primary/40 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          15
                        </button>
                        <button type="button" disabled className="h-9 rounded-lg border text-sm transition-all hover:border-primary/40 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          16
                        </button>
                        <button type="button" disabled className="h-9 rounded-lg border text-sm transition-all hover:border-primary/40 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          17
                        </button>
                        <button type="button" disabled className="h-9 rounded-lg border text-sm transition-all hover:border-primary/40 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          18
                        </button>
                        <button type="button" disabled className="h-9 rounded-lg border text-sm transition-all hover:border-primary/40 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          19
                        </button>
                        <button type="button" disabled className="h-9 rounded-lg border text-sm transition-all hover:border-primary/40 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          20
                        </button>
                        <button type="button" disabled className="h-9 rounded-lg border text-sm transition-all hover:border-primary/40 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          21
                        </button>
                        <button type="button" disabled className="h-9 rounded-lg border text-sm transition-all hover:border-primary/40 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          22
                        </button>
                        <button type="button" disabled className="h-9 rounded-lg border text-sm transition-all hover:border-primary/40 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          23
                        </button>
                        <button type="button" disabled className="h-9 rounded-lg border text-sm transition-all hover:border-primary/40 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          24
                        </button>
                        <button type="button" className="h-9 rounded-lg border text-sm transition-all border-border-soft text-foreground hover:border-primary/40">
                          25
                        </button>
                        <button type="button" className="h-9 rounded-lg border text-sm transition-all border-border-soft text-foreground hover:border-primary/40">
                          26
                        </button>
                        <button type="button" className="h-9 rounded-lg border text-sm transition-all border-border-soft text-foreground hover:border-primary/40">
                          27
                        </button>
                        <button type="button" className="h-9 rounded-lg border text-sm transition-all border-border-soft text-foreground hover:border-primary/40">
                          28
                        </button>
                        <button type="button" className="h-9 rounded-lg border text-sm transition-all border-primary text-primary bg-[#FFF3EE]">
                          29
                        </button>
                        <button type="button" className="h-9 rounded-lg border text-sm transition-all border-border-soft text-foreground hover:border-primary/40">
                          30
                        </button>
                        <div className="h-9" />
                        <div className="h-9" />
                        <div className="h-9" />
                        <div className="h-9" />
                      </div>
                    </div>
                  </div>

                  <div className="border border-border-soft rounded-2xl p-3 space-y-3">
                    <div>
                      <p className="text-sm text-secondary mb-2">Утро</p>
                      <div className="flex flex-wrap gap-1.5">
                        <button type="button" className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground hover:border-primary/40">
                          09:00
                        </button>
                        <button type="button" disabled className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors hover:border-primary/40 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          09:30
                        </button>
                        <button type="button" className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground hover:border-primary/40">
                          10:00
                        </button>
                        <button type="button" className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-primary text-primary bg-[#FFF3EE]">
                          10:30
                        </button>
                        <button type="button" disabled className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors hover:border-primary/40 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          11:00
                        </button>
                        <button type="button" className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground hover:border-primary/40">
                          11:30
                        </button>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-secondary mb-2">Обед</p>
                      <div className="flex flex-wrap gap-1.5">
                        <button type="button" className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground hover:border-primary/40">
                          12:00
                        </button>
                        <button type="button" disabled className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors hover:border-primary/40 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          12:30
                        </button>
                        <button type="button" disabled className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors hover:border-primary/40 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          13:00
                        </button>
                        <button type="button" className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground hover:border-primary/40">
                          13:30
                        </button>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-secondary mb-2">Вечер</p>
                      <div className="flex flex-wrap gap-1.5">
                        <button type="button" className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground hover:border-primary/40">
                          14:00
                        </button>
                        <button type="button" className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground hover:border-primary/40">
                          14:30
                        </button>
                        <button type="button" disabled className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors hover:border-primary/40 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          15:00
                        </button>
                        <button type="button" className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground hover:border-primary/40">
                          15:30
                        </button>
                        <button type="button" className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground hover:border-primary/40">
                          16:00
                        </button>
                        <button type="button" disabled className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors hover:border-primary/40 bg-background text-[#A9AFB2] border-[#ECEDEE] cursor-not-allowed">
                          16:30
                        </button>
                        <button type="button" className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground hover:border-primary/40">
                          17:00
                        </button>
                        <button type="button" className="min-w-14 px-2 h-9 rounded-lg border text-sm transition-colors border-border-soft text-foreground hover:border-primary/40">
                          17:30
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:hidden mt-6">
                <button
                  type="button"
                  className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-[52px] text-base px-8 bg-primary text-white active:bg-primary-dark hover:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] w-full"
                >
                  <span>Продолжить</span>
                </button>
              </div>
            </section>

            {/* ===== ШАГ 3: данные пациента ===== */}
            <section
              id="record-step-3"
              className="p-4 lg:p-6 lg:border-t lg:border-border-soft hidden lg:block"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="size-7 rounded-full border border-primary text-primary text-sm flex items-center justify-center">
                  3
                </span>
                <h2 className="text-[28px] text-foreground leading-[130%] font-semibold">
                  Заполните данные
                </h2>
              </div>

              <div className="grid gap-3 lg:grid-cols-2">
                <label className="flex flex-col gap-1.5">
                  <span className="text-overlay text-sm font-medium">Имя</span>
                  <div className="relative w-full">
                    <input
                      type="text"
                      placeholder="Введите ваше имя"
                      className="text-base leading-0 border border-border-soft text-foreground rounded-lg px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background w-full py-2.25"
                    />
                  </div>
                </label>

                <label className="flex flex-col gap-1.5">
                  <span className="text-overlay text-sm font-medium">Фамилия</span>
                  <div className="relative w-full">
                    <input
                      type="text"
                      placeholder="Введите вашу фамилию"
                      className="text-base leading-0 border border-border-soft text-foreground rounded-lg px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background w-full py-2.25"
                    />
                  </div>
                </label>

                <div className="space-y-1.5">
                  <span className="text-sm font-medium text-overlay">
                    Номер телефона
                  </span>
                  <div className="flex items-center h-11 rounded-lg border transition-all overflow-hidden border-border-soft focus-within:border-primary/60">
                    <span className="px-3 h-full flex items-center bg-[#F7F8F9] border-r border-border-soft text-sm text-foreground select-none shrink-0">
                      +996
                    </span>
                    <input
                      type="tel"
                      placeholder="000 000 000"
                      className="flex-1 h-full px-3 text-sm text-foreground outline-none bg-transparent placeholder:text-muted"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between gap-3 mb-1.5">
                    <span className="text-overlay text-sm font-medium">Электронная почта</span>
                    <span className="text-xs text-muted">Необязательное поле</span>
                  </div>
                  <label className="flex flex-col gap-1.5">
                    <div className="relative w-full">
                      <input
                        type="text"
                        placeholder="Введите вашу почту"
                        className="text-base leading-0 border border-border-soft text-foreground rounded-lg px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background w-full py-2.25"
                      />
                    </div>
                  </label>
                </div>

                <div className="lg:col-span-2 max-w-full lg:max-w-75">
                  <div className="flex items-center justify-between gap-3 mb-1.5">
                    <span className="text-overlay text-sm font-medium">Комментарий</span>
                    <span className="text-xs text-muted">Необязательное поле</span>
                  </div>
                  <label className="flex flex-col gap-1.5">
                    <textarea
                      rows={4}
                      placeholder="Введите ваш комментарий"
                      className="text-base border border-border-soft text-foreground rounded-lg py-2.5 px-3 outline-none focus:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] disabled:bg-background w-full resize-none"
                    />
                  </label>
                </div>
              </div>

              <div className="mt-6">
                <Link href="/record/success-modal" className="inline-flex w-full lg:w-auto">
                  <button
                    type="button"
                    className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-[52px] text-base px-8 bg-primary text-white active:bg-primary-dark hover:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] w-full lg:w-auto lg:min-w-50"
                  >
                    <span>Продолжить</span>
                  </button>
                </Link>
              </div>
            </section>
          </div>

          {/* ===== SummaryCard (только lg) ===== */}
          <div className="hidden lg:block">
            <aside className="relative border border-border-soft rounded-3xl bg-white p-5 lg:sticky lg:top-6 flex flex-col gap-4 shadow-sm w-full lg:w-100">
              <div className="flex items-center gap-4 pb-4 border-b border-border-soft">
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-primary-tint border border-border-soft shrink-0 flex items-center justify-center">
                  <img
                    src="/images/doctors/doctor-1.png"
                    alt="Асанова Айгуль Бакытовна"
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-foreground text-base leading-snug truncate">
                    Асанова Айгуль Бакытовна
                  </h4>
                  <p className="text-xs text-secondary mt-0.5">Кардиолог</p>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex flex-col gap-1">
                  <span className="text-secondary text-xs">Услуга</span>
                  <span className="font-semibold text-foreground leading-snug">
                    Консультация кардиолога с ЭКГ
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-secondary text-xs">Формат приёма</span>
                  <span className="font-medium text-foreground">
                    Офлайн-консультация
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-secondary text-xs">Дата и время</span>
                  <span className="font-semibold text-primary">
                    29 сентября, 2026 в 10:30
                  </span>
                </div>
              </div>

              <div className="mt-2 pt-4 border-t border-border-soft space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-secondary text-sm">К оплате</span>
                  <span className="text-foreground font-bold text-[20px]">
                    2500 c
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-secondary text-sm">Статус</span>
                  <span className="px-3 py-1 rounded-full bg-[#FFF3EE] text-primary text-xs font-semibold">
                    Не оформлена
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
