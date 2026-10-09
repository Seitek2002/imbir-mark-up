import Link from "next/link";

// /consultation/[id] — видеокомната (components/livekit: ConsultationRoom →
// LiveKitRoom → VideoConference + ControlBar) в подключённом состоянии.
// Стили livekit.module.css перенесены в Tailwind-классы (где нужен calc/env/градиент —
// inline style). Вместо LiveKit GridLayout — статичная раскладка: большая плитка
// собеседника и маленькая своя (картинка-в-картинке). Видео заменены картинками.
// Микрофон и камера включены. «Завершить» ведёт на /consultation/1/finished.
export default function Page() {
  return (
    <main
      className="relative h-dvh min-h-0 overflow-hidden text-white"
      style={{
        background:
          "radial-gradient(circle at 15% 0%, rgba(245, 101, 62, 0.18), transparent 34%), #0d0d12",
      }}
    >
      <div className="block h-dvh min-h-0">
        {/* .conference */}
        <div
          className="grid h-dvh min-h-0 grid-rows-[auto_minmax(0,1fr)_auto] bg-[#0d0d12] px-4.5 max-sm:px-2.5"
          style={{
            paddingTop: "max(18px, env(safe-area-inset-top))",
            paddingBottom: "max(18px, env(safe-area-inset-bottom))",
          }}
        >
          {/* .conferenceHeader */}
          <header className="flex items-center justify-between px-1 pb-4 text-[#a9adb5] text-[13px]">
            <div className="flex items-center gap-2 text-white font-semibold">
              <span className="size-2 rounded-full bg-[#f5653e] shadow-[0_0_0_5px_rgba(245,101,62,0.15)]" />
              Онлайн-консультация
            </div>
            <span className="max-sm:hidden">2 из 2 участников</span>
          </header>

          {/* .videoStage */}
          <div className="relative min-h-0">
            {/* Плитка собеседника (большая) */}
            <div className="relative h-full overflow-hidden border border-white/11 rounded-[20px] bg-[#191a1f]">
              <img
                src="/images/doctors/doctor-2.png"
                alt="Асанова Гульнара Бакытовна"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
              {/* Подпись участника (lk-participant-metadata) */}
              <div className="absolute left-3 bottom-3 flex items-center gap-1.5 rounded-lg bg-black/50 px-2.5 py-1.5 text-[13px] backdrop-blur-sm">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-4">
                  <rect x="9" y="3" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="1.8" />
                  <path
                    d="M6.5 11.5a5.5 5.5 0 0 0 11 0M12 17v4m-3 0h6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
                <span>Асанова Гульнара Бакытовна</span>
              </div>
            </div>

            {/* Своя плитка (маленькая) */}
            <div className="absolute right-3 top-3 z-3 w-28 sm:w-44 md:w-60 aspect-3/4 sm:aspect-video overflow-hidden border border-white/11 rounded-2xl bg-[#191a1f] shadow-[0_12px_32px_rgba(0,0,0,0.45)]">
              <img
                src="/images/hero/avatar.png"
                alt="Вы"
                className="absolute inset-0 h-full w-full object-cover -scale-x-100"
              />
              <div className="absolute left-2 bottom-2 rounded-md bg-black/50 px-2 py-1 text-[11px] backdrop-blur-sm">
                Вы
              </div>
            </div>
          </div>

          {/* .controlsWrap (ControlBar) */}
          <div className="relative z-5 pt-4">
            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                aria-label="Выключить микрофон"
                aria-pressed="true"
                className="flex min-w-23 min-h-14.5 items-center justify-center gap-2 px-4.5 rounded-[18px] text-white text-[13px] bg-[#25262c] cursor-pointer [&_svg]:w-5.75 max-sm:min-w-19 max-sm:flex-col max-sm:gap-0.75 max-sm:px-3 max-sm:py-1.75 max-sm:rounded-[17px] max-sm:text-[11px]"
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="9" y="3" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="1.8" />
                  <path
                    d="M6.5 11.5a5.5 5.5 0 0 0 11 0M12 17v4m-3 0h6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
                <span>Микрофон</span>
              </button>
              <button
                type="button"
                aria-label="Выключить камеру"
                aria-pressed="true"
                className="flex min-w-23 min-h-14.5 items-center justify-center gap-2 px-4.5 rounded-[18px] text-white text-[13px] bg-[#25262c] cursor-pointer [&_svg]:w-5.75 max-sm:min-w-19 max-sm:flex-col max-sm:gap-0.75 max-sm:px-3 max-sm:py-1.75 max-sm:rounded-[17px] max-sm:text-[11px]"
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M14.5 7H5.75A2.75 2.75 0 0 0 3 9.75v4.5A2.75 2.75 0 0 0 5.75 17h8.75a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 14.5 7Zm2.5 3 4-2v8l-4-2"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Камера</span>
              </button>
              <Link
                href="/consultation/1/finished"
                aria-label="Завершить консультацию"
                className="flex min-w-23 min-h-14.5 items-center justify-center gap-2 px-4.5 rounded-[18px] text-white text-[13px] bg-[#e54747] cursor-pointer [&_svg]:w-5.75 max-sm:min-w-19 max-sm:flex-col max-sm:gap-0.75 max-sm:px-3 max-sm:py-1.75 max-sm:rounded-[17px] max-sm:text-[11px]"
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M5.2 4.5c.5-.5 1.3-.6 1.9-.1l2.1 1.7c.5.4.7 1.2.3 1.8L8.3 9.8a14.2 14.2 0 0 0 5.9 5.9l1.9-1.2c.6-.4 1.4-.2 1.8.3l1.7 2.1c.5.6.4 1.4-.1 1.9l-1.2 1.1c-.7.7-1.8 1-2.8.7A18 18 0 0 1 3.4 8.5c-.3-1 .1-2.1.7-2.8l1.1-1.2Z"
                    fill="currentColor"
                  />
                </svg>
                <span>Завершить</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
