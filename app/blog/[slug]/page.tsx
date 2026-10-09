// Статья блога (pages/blog-article) на примере «Как подготовиться к первому приёму у кардиолога».
// Текст статьи в оригинале приходит markdown-строкой и рендерится через shared/ui/markdown
// (react-markdown + remark-gfm) — здесь он раскрыт в итоговый HTML с классами из markdownComponents
// (h2 text-xl, h3 text-lg, p, ul/ol, blockquote, table, hr, a→Link, strong). Обёртка Markdown —
// голый <div> без className, как в оригинале.
// Справа «Читать далее» — 3 связанные статьи (fetchRelatedBlogPosts, limit 3).

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

          {/* Мобильный */}
          <div className="md:hidden">
            <div>
              <div className="grid grid-cols-3 items-center min-h-10">
                <div>
                  <Link
                    href="/blog"
                    aria-label="Вернуться назад"
                    className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent"
                  >
                    <HeaderBackIcon className="size-4" />
                  </Link>
                </div>
                <h2 className="text-center font-medium text-base px-2">Статья</h2>
                <div className="flex justify-end">
                  {/* Место для иконки справа, если понадобится */}
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="w-full max-w-340 mx-auto px-3 md:px-4 pt-4 md:pt-6 pb-8">
          <nav className="hidden md:flex items-center gap-3 text-sm leading-none mb-6 text-muted">
            <Link href="/" className="hover:text-primary transition-colors">
              Главная
            </Link>
            <span>•</span>
            <Link href="/blog" className="hover:text-primary transition-colors">
              Блог
            </Link>
            <span className="text-primary">•</span>
            <span className="text-primary">Как подготовиться к первому приёму у кардиолога</span>
          </nav>

          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <span className="rounded-full bg-[#FFF3F0] text-primary text-[12px] md:text-sm font-medium px-4 py-2">
              Кардиология
            </span>
            <span className="rounded-full border border-[#D6D9DC] text-secondary text-[12px] md:text-sm font-medium px-4 py-2">
              12 сентября 2026
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_332px] gap-6 md:gap-3 md:items-start">
            <article>
              <h1 className="text-[32px] font-semibold leading-[115%] text-foreground mb-5 md:mb-6">
                Как подготовиться к первому приёму у кардиолога
              </h1>

              <div className="relative w-full h-64 md:h-105 overflow-hidden rounded-3xl">
                <img
                  src="/images/videos/video-1.jpg"
                  alt="Как подготовиться к первому приёму у кардиолога"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <div className="mt-5 md:mt-6 space-y-4 md:space-y-5">
                <p className="text-base text-secondary leading-[145%] font-medium">
                  Какие анализы сдать заранее, что взять с собой и какие вопросы задать врачу, чтобы консультация прошла с максимальной пользой.
                </p>

                {/* Markdown (shared/ui/markdown) → раскрытый статичный HTML */}
                <div>
                  <p className="text-base text-secondary leading-[145%]">
                    Первый визит к кардиологу часто вызывает волнение: непонятно, какие обследования пройти заранее и о чём рассказать врачу. Хорошая подготовка экономит время — и ваше, и специалиста — и помогает быстрее поставить точный диагноз.
                  </p>
                  <h2 className="text-xl font-semibold text-foreground mt-2">Когда стоит записаться к кардиологу</h2>
                  <p className="text-base text-secondary leading-[145%]">
                    Не откладывайте визит, если замечаете у себя хотя бы один из этих симптомов:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-base text-secondary leading-[145%]">
                    <li>давящая или жгучая боль за грудиной, особенно при нагрузке;</li>
                    <li>одышка при привычной активности — подъёме по лестнице, быстрой ходьбе;</li>
                    <li>учащённое или «сбивающееся» сердцебиение;</li>
                    <li>отёки ног к вечеру;</li>
                    <li>давление выше 140/90 мм рт. ст. при нескольких измерениях.</li>
                  </ul>
                  <blockquote className="border-l-4 border-primary/30 bg-primary-tint rounded-r-xl px-4 py-3 text-secondary italic">
                    <p className="text-base text-secondary leading-[145%]">
                      Если боль в груди длится дольше 15 минут и не проходит в покое — это повод немедленно вызвать скорую помощь по номеру <strong className="font-semibold text-foreground">103</strong>, а не ждать плановой записи.
                    </p>
                  </blockquote>
                  <h2 className="text-xl font-semibold text-foreground mt-2">Какие анализы сдать заранее</h2>
                  <p className="text-base text-secondary leading-[145%]">
                    Большинство кардиологов попросят результаты базовых исследований. Если сдать их до приёма, врач сможет сразу оценить картину и назначить лечение уже на первой консультации.
                  </p>
                  <ol className="list-decimal pl-5 space-y-1 text-base text-secondary leading-[145%]">
                    <li><strong className="font-semibold text-foreground">Общий анализ крови</strong> — покажет анемию и признаки воспаления.</li>
                    <li><strong className="font-semibold text-foreground">Липидограмма</strong> — общий холестерин, ЛПНП, ЛПВП и триглицериды.</li>
                    <li><strong className="font-semibold text-foreground">Глюкоза крови</strong> или гликированный гемоглобин.</li>
                    <li><strong className="font-semibold text-foreground">ЭКГ</strong> — снимок лучше взять с собой, даже если он сделан полгода назад.</li>
                  </ol>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-secondary border-collapse">
                      <thead>
                        <tr>
                          <th className="border border-border px-3 py-2 text-left font-semibold text-foreground">
                            Исследование
                          </th>
                          <th className="border border-border px-3 py-2 text-left font-semibold text-foreground">
                            Как подготовиться
                          </th>
                          <th className="border border-border px-3 py-2 text-left font-semibold text-foreground">
                            Цена в Бишкеке
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border px-3 py-2 text-left">Липидограмма</td>
                          <td className="border border-border px-3 py-2 text-left">Натощак, 10–12 часов без еды</td>
                          <td className="border border-border px-3 py-2 text-left">от 900 с</td>
                        </tr>
                        <tr>
                          <td className="border border-border px-3 py-2 text-left">Глюкоза</td>
                          <td className="border border-border px-3 py-2 text-left">Натощак, утром</td>
                          <td className="border border-border px-3 py-2 text-left">от 250 с</td>
                        </tr>
                        <tr>
                          <td className="border border-border px-3 py-2 text-left">ЭКГ</td>
                          <td className="border border-border px-3 py-2 text-left">Без кофе и курения за 2 часа</td>
                          <td className="border border-border px-3 py-2 text-left">от 500 с</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h2 className="text-xl font-semibold text-foreground mt-2">Что взять с собой на приём</h2>
                  <ul className="list-disc pl-5 space-y-1 text-base text-secondary leading-[145%]">
                    <li>документ, удостоверяющий личность, и полис, если он есть;</li>
                    <li>выписки из больниц и заключения других врачей;</li>
                    <li>список лекарств, которые вы принимаете, с дозировками;</li>
                    <li>дневник давления за последние 1–2 недели.</li>
                  </ul>
                  <h3 className="text-lg font-semibold text-foreground mt-2">Как вести дневник давления</h3>
                  <p className="text-base text-secondary leading-[145%]">
                    Измеряйте давление утром и вечером, сидя, после 5 минут отдыха. Записывайте оба показателя и пульс — на приёме такой дневник расскажет врачу больше, чем одно измерение в кабинете.
                  </p>
                  <hr className="border-border" />
                  <p className="text-base text-secondary leading-[145%]">
                    Записаться к кардиологу онлайн можно в разделе{" "}
                    <Link
                      href="/specialists"
                      className="text-primary underline hover:text-primary-dark transition-colors"
                    >
                      «Специалисты»
                    </Link>{" "}
                    — выберите врача, удобную клинику и время приёма.
                  </p>
                </div>
              </div>
            </article>

            <aside className="w-full">
              <h2 className="text-[32px] font-semibold leading-[120%] text-foreground mb-3">
                Читать далее
              </h2>
              <div className="flex flex-col gap-3">
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
              </div>
            </aside>
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
    </>
  );
}
