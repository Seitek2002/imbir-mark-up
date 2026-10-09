// Блог (pages/blog + widgets/blog-section, variant default). С бэка приходит 12 постов:
// 1 featured (большая карточка) + 11 в сетке. Активная категория — «Все»
// (цвета чипов в оригинале задаются inline-style из colors: primary / borderSoft / secondary).

import Link from "next/link";

import FacebookIcon from "@/assets/icons/auth/facebook.svg";
import InstagramIcon from "@/assets/icons/auth/instagram.svg";
import LinkedinIcon from "@/assets/icons/auth/linkedin.svg";
import TwitterIcon from "@/assets/icons/auth/twitter.svg";
import HeaderBackIcon from "@/assets/icons/header/back-arrow.svg";
import ChatIcon from "@/assets/icons/header/chat.svg";
import GeoBtnArrowIcon from "@/assets/icons/header/geo-btn-arrow.svg";
import GeoIcon from "@/assets/icons/header/geo.svg";
import Logo from "@/assets/icons/header/logo.svg";
import ProfileIcon from "@/assets/icons/header/profile.svg";
import SearchIcon from "@/assets/icons/header/search.svg";

export default function Page() {
  return (
    <>
      <main className="min-h-screen flex flex-col bg-background">
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
                <h2 className="text-center font-medium text-base px-2">Блог</h2>
                <div className="flex justify-end">
                  {/* Место для иконки справа, если понадобится */}
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 w-full max-w-340 mx-auto px-4 py-6">
          <h1 className="hidden md:block font-semibold text-[40px] leading-[130%] text-foreground mb-6">
            Блог
          </h1>

          <div className="flex flex-col gap-6">
            {/* Главная статья — десктоп */}
            <div className="hidden md:flex gap-5">
              <Link
                href="/blog/kak-podgotovitsya-k-priemu-kardiologa"
                className="relative w-167.5 shrink-0 h-105 rounded-3xl overflow-hidden border border-border-soft group block"
              >
                <img
                  src="/images/videos/video-1.jpg"
                  alt="Как подготовиться к первому приёму у кардиолога"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>

              <div className="flex flex-col justify-center gap-4 bg-white rounded-3xl border border-border-soft p-8 flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-primary bg-[#FFF3F0] px-3 py-1.5 rounded-full font-medium">
                    Кардиология
                  </span>
                  <span className="text-sm text-muted border border-border-soft px-3 py-1.5 rounded-full">
                    12 сентября 2026
                  </span>
                </div>

                <div>
                  <h2 className="font-semibold text-[28px] text-foreground leading-[130%] mb-2">
                    Как подготовиться к первому приёму у кардиолога
                  </h2>
                  <p className="text-sm text-secondary leading-relaxed line-clamp-2">
                    Какие анализы сдать заранее, что взять с собой и какие вопросы задать врачу, чтобы консультация прошла с максимальной пользой.
                  </p>
                </div>

                <Link
                  href="/blog/kak-podgotovitsya-k-priemu-kardiologa"
                  className="inline-flex w-fit items-center rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-white transition-all active:bg-primary-dark hover:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)]"
                >
                  Читать статью
                </Link>
              </div>
            </div>

            {/* Главная статья — мобильный */}
            <div className="md:hidden flex flex-col gap-2">
              <div className="bg-white rounded-3xl border border-border-soft p-5 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-primary bg-[#FFF3F0] px-3 py-1.5 rounded-full font-medium">
                    Кардиология
                  </span>
                  <span className="text-sm text-muted border border-border-soft px-3 py-1.5 rounded-full">
                    12 сентября 2026
                  </span>
                </div>
                <h2 className="font-bold text-xl text-foreground leading-snug">
                  Как подготовиться к первому приёму у кардиолога
                </h2>
                <p className="text-sm text-secondary leading-relaxed">
                  Какие анализы сдать заранее, что взять с собой и какие вопросы задать врачу, чтобы консультация прошла с максимальной пользой.
                </p>
                <Link
                  href="/blog/kak-podgotovitsya-k-priemu-kardiologa"
                  className="inline-flex w-fit items-center rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-white transition-all active:bg-primary-dark hover:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)]"
                >
                  Читать статью
                </Link>
              </div>
              <Link
                href="/blog/kak-podgotovitsya-k-priemu-kardiologa"
                className="relative w-full h-52 rounded-3xl overflow-hidden border border-border-soft block"
              >
                <img
                  src="/images/videos/video-1.jpg"
                  alt="Как подготовиться к первому приёму у кардиолога"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              </Link>
            </div>

            {/* Категории (активна «Все») */}
            <div className="flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <button
                type="button"
                className="shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer"
                style={{
                  backgroundColor: "#F5653E",
                  color: "#fff",
                }}
              >
                Все
              </button>
              <button
                type="button"
                className="shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer"
                style={{
                  backgroundColor: "#E3E4E5",
                  color: "#686F72",
                }}
              >
                Кардиология
              </button>
              <button
                type="button"
                className="shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer"
                style={{
                  backgroundColor: "#E3E4E5",
                  color: "#686F72",
                }}
              >
                Педиатрия
              </button>
              <button
                type="button"
                className="shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer"
                style={{
                  backgroundColor: "#E3E4E5",
                  color: "#686F72",
                }}
              >
                Терапия
              </button>
              <button
                type="button"
                className="shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer"
                style={{
                  backgroundColor: "#E3E4E5",
                  color: "#686F72",
                }}
              >
                Неврология
              </button>
              <button
                type="button"
                className="shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer"
                style={{
                  backgroundColor: "#E3E4E5",
                  color: "#686F72",
                }}
              >
                Стоматология
              </button>
              <button
                type="button"
                className="shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer"
                style={{
                  backgroundColor: "#E3E4E5",
                  color: "#686F72",
                }}
              >
                Офтальмология
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Статья 1 */}
              <Link
                href="/blog/sezonnaya-allergiya-ili-prostuda"
                className="bg-white rounded-3xl overflow-hidden flex flex-col p-2 group w-full border border-border-soft"
              >
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                  <img
                    src="/images/clinics/clinic-2.png"
                    alt="Сезонная аллергия или простуда: как отличить и что делать"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-3">
                  <div className="flex items-center gap-2 text-xs mb-2">
                    <span style={{ color: "#F5653E" }} className="font-medium">
                      Аллергология
                    </span>
                    <span className="text-muted">•</span>
                    <span className="text-muted">3 сентября 2026</span>
                  </div>
                  <p
                    className="font-semibold text-sm text-foreground leading-snug overflow-hidden"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    Сезонная аллергия или простуда: как отличить и что делать
                  </p>
                </div>
              </Link>
              {/* Статья 2 */}
              <Link
                href="/blog/zachem-proveryat-zrenie"
                className="bg-white rounded-3xl overflow-hidden flex flex-col p-2 group w-full border border-border-soft"
              >
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                  <img
                    src="/images/videos/video-2.jpg"
                    alt="Зачем проверять зрение раз в год, даже если всё хорошо"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-3">
                  <div className="flex items-center gap-2 text-xs mb-2">
                    <span style={{ color: "#F5653E" }} className="font-medium">
                      Офтальмология
                    </span>
                    <span className="text-muted">•</span>
                    <span className="text-muted">28 августа 2026</span>
                  </div>
                  <p
                    className="font-semibold text-sm text-foreground leading-snug overflow-hidden"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    Зачем проверять зрение раз в год, даже если всё хорошо
                  </p>
                </div>
              </Link>
              {/* Статья 3 */}
              <Link
                href="/blog/kalendar-privivok"
                className="bg-white rounded-3xl overflow-hidden flex flex-col p-2 group w-full border border-border-soft"
              >
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                  <img
                    src="/images/videos/video-3.jpg"
                    alt="Детские прививки: национальный календарь вакцинации в Кыргызстане"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-3">
                  <div className="flex items-center gap-2 text-xs mb-2">
                    <span style={{ color: "#F5653E" }} className="font-medium">
                      Педиатрия
                    </span>
                    <span className="text-muted">•</span>
                    <span className="text-muted">15 августа 2026</span>
                  </div>
                  <p
                    className="font-semibold text-sm text-foreground leading-snug overflow-hidden"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    Детские прививки: национальный календарь вакцинации в Кыргызстане
                  </p>
                </div>
              </Link>
              {/* Статья 4 */}
              <Link
                href="/blog/chek-ap-posle-30"
                className="bg-white rounded-3xl overflow-hidden flex flex-col p-2 group w-full border border-border-soft"
              >
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                  <img
                    src="/images/clinics/clinic-1.png"
                    alt="Чек-ап после 30: какие обследования проходить каждый год"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-3">
                  <div className="flex items-center gap-2 text-xs mb-2">
                    <span style={{ color: "#F5653E" }} className="font-medium">
                      Терапия
                    </span>
                    <span className="text-muted">•</span>
                    <span className="text-muted">9 августа 2026</span>
                  </div>
                  <p
                    className="font-semibold text-sm text-foreground leading-snug overflow-hidden"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    Чек-ап после 30: какие обследования проходить каждый год
                  </p>
                </div>
              </Link>
              {/* Статья 5 */}
              <Link
                href="/blog/bol-v-spine-u-ofisnyh-rabotnikov"
                className="bg-white rounded-3xl overflow-hidden flex flex-col p-2 group w-full border border-border-soft"
              >
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                  <img
                    src="/images/clinics/clinic-3.png"
                    alt="Боль в спине у офисных работников: причины и профилактика"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-3">
                  <div className="flex items-center gap-2 text-xs mb-2">
                    <span style={{ color: "#F5653E" }} className="font-medium">
                      Неврология
                    </span>
                    <span className="text-muted">•</span>
                    <span className="text-muted">1 августа 2026</span>
                  </div>
                  <p
                    className="font-semibold text-sm text-foreground leading-snug overflow-hidden"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    Боль в спине у офисных работников: причины и профилактика
                  </p>
                </div>
              </Link>
              {/* Статья 6 */}
              <Link
                href="/blog/kak-vybrat-zubnuyu-shchetku"
                className="bg-white rounded-3xl overflow-hidden flex flex-col p-2 group w-full border border-border-soft"
              >
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                  <img
                    src="/images/clinics/clinic-4.png"
                    alt="Как выбрать зубную щётку и пасту: советы стоматолога"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-3">
                  <div className="flex items-center gap-2 text-xs mb-2">
                    <span style={{ color: "#F5653E" }} className="font-medium">
                      Стоматология
                    </span>
                    <span className="text-muted">•</span>
                    <span className="text-muted">24 июля 2026</span>
                  </div>
                  <p
                    className="font-semibold text-sm text-foreground leading-snug overflow-hidden"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    Как выбрать зубную щётку и пасту: советы стоматолога
                  </p>
                </div>
              </Link>
              {/* Статья 7 */}
              <Link
                href="/blog/davlenie-v-zharu"
                className="bg-white rounded-3xl overflow-hidden flex flex-col p-2 group w-full border border-border-soft"
              >
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                  <img
                    src="/images/videos/video-1.jpg"
                    alt="Давление в жару: как помочь себе и близким"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-3">
                  <div className="flex items-center gap-2 text-xs mb-2">
                    <span style={{ color: "#F5653E" }} className="font-medium">
                      Кардиология
                    </span>
                    <span className="text-muted">•</span>
                    <span className="text-muted">17 июля 2026</span>
                  </div>
                  <p
                    className="font-semibold text-sm text-foreground leading-snug overflow-hidden"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    Давление в жару: как помочь себе и близким
                  </p>
                </div>
              </Link>
              {/* Статья 8 */}
              <Link
                href="/blog/vitamin-d-komu-nuzhen"
                className="bg-white rounded-3xl overflow-hidden flex flex-col p-2 group w-full border border-border-soft"
              >
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                  <img
                    src="/images/videos/video-2.jpg"
                    alt="Витамин D: кому действительно нужен и как принимать"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-3">
                  <div className="flex items-center gap-2 text-xs mb-2">
                    <span style={{ color: "#F5653E" }} className="font-medium">
                      Эндокринология
                    </span>
                    <span className="text-muted">•</span>
                    <span className="text-muted">10 июля 2026</span>
                  </div>
                  <p
                    className="font-semibold text-sm text-foreground leading-snug overflow-hidden"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    Витамин D: кому действительно нужен и как принимать
                  </p>
                </div>
              </Link>
              {/* Статья 9 */}
              <Link
                href="/blog/gastrit-i-pitanie"
                className="bg-white rounded-3xl overflow-hidden flex flex-col p-2 group w-full border border-border-soft"
              >
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                  <img
                    src="/images/videos/video-3.jpg"
                    alt="Гастрит и питание: мифы, которые мешают выздороветь"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-3">
                  <div className="flex items-center gap-2 text-xs mb-2">
                    <span style={{ color: "#F5653E" }} className="font-medium">
                      Гастроэнтерология
                    </span>
                    <span className="text-muted">•</span>
                    <span className="text-muted">2 июля 2026</span>
                  </div>
                  <p
                    className="font-semibold text-sm text-foreground leading-snug overflow-hidden"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    Гастрит и питание: мифы, которые мешают выздороветь
                  </p>
                </div>
              </Link>
              {/* Статья 10 */}
              <Link
                href="/blog/son-i-zdorovye"
                className="bg-white rounded-3xl overflow-hidden flex flex-col p-2 group w-full border border-border-soft"
              >
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                  <img
                    src="/images/clinics/clinic-2.png"
                    alt="Сколько нужно спать взрослому и почему это важно"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-3">
                  <div className="flex items-center gap-2 text-xs mb-2">
                    <span style={{ color: "#F5653E" }} className="font-medium">
                      Терапия
                    </span>
                    <span className="text-muted">•</span>
                    <span className="text-muted">25 июня 2026</span>
                  </div>
                  <p
                    className="font-semibold text-sm text-foreground leading-snug overflow-hidden"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    Сколько нужно спать взрослому и почему это важно
                  </p>
                </div>
              </Link>
              {/* Статья 11 */}
              <Link
                href="/blog/solntsezashchitnyy-krem"
                className="bg-white rounded-3xl overflow-hidden flex flex-col p-2 group w-full border border-border-soft"
              >
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                  <img
                    src="/images/clinics/clinic-1.png"
                    alt="Солнцезащитный крем: как выбрать SPF и не навредить коже"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-3">
                  <div className="flex items-center gap-2 text-xs mb-2">
                    <span style={{ color: "#F5653E" }} className="font-medium">
                      Дерматология
                    </span>
                    <span className="text-muted">•</span>
                    <span className="text-muted">18 июня 2026</span>
                  </div>
                  <p
                    className="font-semibold text-sm text-foreground leading-snug overflow-hidden"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    Солнцезащитный крем: как выбрать SPF и не навредить коже
                  </p>
                </div>
              </Link>
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
    </>
  );
}
