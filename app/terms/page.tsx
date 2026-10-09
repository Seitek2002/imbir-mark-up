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
                Условия и положения
              </h2>
              <div className="flex justify-end"></div>
            </div>
          </div>
        </div>
      </header>
      <div className="flex-1 w-full max-w-360 mx-auto px-4 md:px-10 py-10">
        <div className="bg-white rounded-3xl p-6 md:p-12 max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Условия использования
            </h1>
            <p className="text-muted text-sm">
              Последнее обновление: 1 января 2025 г.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">
              1. Общие положения
            </h2>
            <div className="flex flex-col gap-3 text-secondary text-sm leading-relaxed">
              <p>
                Настоящее Пользовательское соглашение (далее — «Соглашение»)
                регулирует отношения между платформой IMBIR (далее —
                «Платформа») и пользователями (физическими и юридическими
                лицами), использующими сервисы и функциональность Платформы.
              </p>
              <p>
                Использование Платформы означает безоговорочное согласие с
                условиями настоящего Соглашения. Если вы не согласны с
                какими-либо положениями, вы обязаны прекратить использование
                Платформы.
              </p>
              <p>
                IMBIR оставляет за собой право в одностороннем порядке изменять
                условия настоящего Соглашения. Изменения вступают в силу с
                момента их публикации на Платформе.
              </p>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">
              2. Регистрация и учётная запись
            </h2>
            <div className="flex flex-col gap-3 text-secondary text-sm leading-relaxed">
              <p>
                Для получения полного доступа к функциям Платформы пользователь
                обязан пройти регистрацию, указав достоверные персональные
                данные: имя, фамилию, номер телефона и адрес электронной почты.
              </p>
              <p>
                Пользователь несёт полную ответственность за сохранность своих
                учётных данных и за все действия, совершённые под его учётной
                записью. В случае несанкционированного доступа необходимо
                немедленно уведомить службу поддержки.
              </p>
              <p>
                Платформа вправе заблокировать или удалить учётную запись
                пользователя при нарушении условий настоящего Соглашения, а
                также по иным законным основаниям.
              </p>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">
              3. Условия оказания услуг
            </h2>
            <div className="flex flex-col gap-3 text-secondary text-sm leading-relaxed">
              <p>
                Платформа IMBIR является агрегатором медицинских услуг и не
                несёт ответственности за качество медицинской помощи,
                оказываемой партнёрскими клиниками и врачами. Ответственность за
                оказание медицинских услуг лежит исключительно на исполнителях.
              </p>
              <p>
                Запись на приём осуществляется в режиме реального времени.
                Подтверждение записи направляется на указанный номер телефона
                или адрес электронной почты не позднее 15 минут с момента
                оформления.
              </p>
              <p>
                В случае невозможности явиться на приём пользователь обязан
                отменить запись не менее чем за 2 часа до назначенного времени.
                При систематической неявке без уведомления Платформа вправе
                ограничить функциональность учётной записи.
              </p>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">
              4. Оплата и возврат средств
            </h2>
            <div className="flex flex-col gap-3 text-secondary text-sm leading-relaxed">
              <p>
                Стоимость услуг определяется партнёрскими клиниками и врачами
                самостоятельно. Платформа отображает актуальные цены в
                соответствии с данными, предоставленными партнёрами. Возможны
                отклонения от отображаемой цены — о расхождении сообщайте в
                службу поддержки.
              </p>
              <p>
                Оплата производится непосредственно в клинике или через
                платёжные инструменты Платформы, если иное не предусмотрено
                отдельным договором с партнёром. Возврат средств осуществляется
                в соответствии с правилами конкретного партнёра.
              </p>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">
              5. Ответственность сторон
            </h2>
            <div className="flex flex-col gap-3 text-secondary text-sm leading-relaxed">
              <p>
                Платформа не несёт ответственности за прямые или косвенные
                убытки, возникшие вследствие использования или невозможности
                использования сервисов, технических сбоев, а также действий
                третьих лиц.
              </p>
              <p>
                Пользователь несёт ответственность за достоверность
                предоставленной информации, своевременную явку на приём и
                соблюдение правил поведения в медицинских учреждениях.
              </p>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">
              6. Интеллектуальная собственность
            </h2>
            <div className="flex flex-col gap-3 text-secondary text-sm leading-relaxed">
              <p>
                Все материалы, размещённые на Платформе (тексты, изображения,
                логотипы, дизайн интерфейса), являются объектами
                интеллектуальной собственности IMBIR или соответствующих
                правообладателей. Использование материалов без письменного
                разрешения запрещено.
              </p>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">
              7. Заключительные положения
            </h2>
            <div className="flex flex-col gap-3 text-secondary text-sm leading-relaxed">
              <p>
                Настоящее Соглашение регулируется законодательством Кыргызской
                Республики. По всем спорам и разногласиям стороны обязуются
                применять досудебный порядок урегулирования. При недостижении
                соглашения споры передаются в компетентный суд по месту
                нахождения IMBIR.
              </p>
              <p>
                По вопросам, связанным с условиями использования, обращайтесь:
                legal@imbir.kg
              </p>
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
