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
                Политика конфиденциальности
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
              Политика конфиденциальности
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
                Настоящая Политика конфиденциальности (далее — «Политика»)
                описывает, какие персональные данные собирает и обрабатывает
                платформа IMBIR, в каких целях они используются и какие права
                имеют пользователи в отношении своих данных.
              </p>
              <p>
                Регистрируясь на Платформе или используя её сервисы, вы
                соглашаетесь с условиями настоящей Политики. Если вы не согласны
                с обработкой ваших данных, указанной в Политике, просим
                воздержаться от использования Платформы.
              </p>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">
              2. Какие данные мы собираем
            </h2>
            <div className="flex flex-col gap-3 text-secondary text-sm leading-relaxed">
              <p>Мы собираем следующие категории персональных данных:</p>
              <div className="flex flex-col gap-2 pl-2">
                <div className="flex items-start gap-2">
                  <span className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                  <span>
                    <span className="font-medium text-foreground">
                      Идентификационные данные
                    </span>{" "}
                    — имя, фамилия, дата рождения
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                  <span>
                    <span className="font-medium text-foreground">
                      Контактные данные
                    </span>{" "}
                    — номер телефона, адрес электронной почты
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                  <span>
                    <span className="font-medium text-foreground">
                      Данные о здоровье
                    </span>{" "}
                    — записи к врачам, история посещений, информация о
                    заболеваниях (по вашему желанию)
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                  <span>
                    <span className="font-medium text-foreground">
                      Технические данные
                    </span>{" "}
                    — IP-адрес, тип устройства, браузер, файлы cookie
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                  <span>
                    <span className="font-medium text-foreground">
                      Платёжные данные
                    </span>{" "}
                    — информация о транзакциях (без хранения реквизитов карт)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">
              3. Как мы используем данные
            </h2>
            <div className="flex flex-col gap-3 text-secondary text-sm leading-relaxed">
              <p>Собранные данные используются в следующих целях:</p>
              <div className="flex flex-col gap-2 pl-2">
                <div className="flex items-start gap-2">
                  <span className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                  <span>
                    <span className="font-medium text-foreground">
                      Запись на приём
                    </span>{" "}
                    — передача данных выбранной клинике или врачу
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                  <span>
                    <span className="font-medium text-foreground">
                      Уведомления
                    </span>{" "}
                    — напоминания о записях, результаты анализов, специальные
                    предложения
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                  <span>
                    <span className="font-medium text-foreground">
                      Улучшение сервиса
                    </span>{" "}
                    — анализ поведения пользователей для оптимизации интерфейса
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                  <span>
                    <span className="font-medium text-foreground">
                      Безопасность
                    </span>{" "}
                    — предотвращение мошенничества и защита учётных записей
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">
              4. Хранение и защита данных
            </h2>
            <div className="flex flex-col gap-3 text-secondary text-sm leading-relaxed">
              <p>
                Персональные данные хранятся на защищённых серверах,
                расположенных в Кыргызской Республике и/или в странах
                Евразийского экономического союза. Передача данных в третьи
                страны осуществляется только при наличии надлежащих гарантий
                защиты в соответствии с применимым законодательством.
              </p>
              <p>
                Мы применяем современные технические и организационные меры
                защиты: шифрование данных при передаче (TLS), контроль доступа
                на основе ролей, регулярный аудит безопасности. Тем не менее
                абсолютная защита данных в интернете не может быть
                гарантирована.
              </p>
              <p>
                Данные хранятся в течение срока действия учётной записи, а также
                в течение 3 лет после её удаления — в целях выполнения
                законодательных требований.
              </p>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">
              5. Права пользователей
            </h2>
            <div className="flex flex-col gap-3 text-secondary text-sm leading-relaxed">
              <p>
                В соответствии с законодательством Кыргызской Республики вы
                имеете право:
              </p>
              <div className="flex flex-col gap-2 pl-2">
                <div className="flex items-start gap-2">
                  <span className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                  <span>
                    <span className="font-medium text-foreground">Доступ</span>{" "}
                    — получить копию своих персональных данных
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                  <span>
                    <span className="font-medium text-foreground">
                      Исправление
                    </span>{" "}
                    — потребовать корректировки неточных данных
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                  <span>
                    <span className="font-medium text-foreground">
                      Удаление
                    </span>{" "}
                    — запросить удаление данных («право на забвение»)
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                  <span>
                    <span className="font-medium text-foreground">
                      Ограничение
                    </span>{" "}
                    — ограничить обработку данных в установленных законом
                    случаях
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                  <span>
                    <span className="font-medium text-foreground">
                      Переносимость
                    </span>{" "}
                    — получить данные в машиночитаемом формате
                  </span>
                </div>
              </div>
              <p>
                Для реализации своих прав направьте запрос на: privacy@imbir.kg
              </p>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">
              6. Файлы cookie
            </h2>
            <div className="flex flex-col gap-3 text-secondary text-sm leading-relaxed">
              <p>
                Платформа использует файлы cookie для обеспечения
                функциональности сервиса, аутентификации пользователей, анализа
                трафика и персонализации контента. Вы можете управлять
                настройками cookie в браузере, однако отключение некоторых типов
                cookie может ограничить функциональность Платформы.
              </p>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">
              7. Изменения в Политике
            </h2>
            <div className="flex flex-col gap-3 text-secondary text-sm leading-relaxed">
              <p>
                Мы вправе в одностороннем порядке обновлять настоящую Политику.
                О существенных изменениях вы будете уведомлены по электронной
                почте или через интерфейс Платформы не менее чем за 7 дней до
                вступления изменений в силу.
              </p>
              <p>
                По всем вопросам, связанным с обработкой персональных данных,
                обращайтесь: privacy@imbir.kg
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
