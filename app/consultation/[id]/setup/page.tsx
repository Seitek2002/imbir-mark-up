import Link from "next/link";

// /consultation/[id]/setup — экран проверки устройств перед входом в комнату
// (components/livekit/DeviceSetup). В оригинале это не отдельный роут, а первый
// экран ConsultationRoom до выбора устройств. Стили livekit.module.css
// перенесены в Tailwind (max-sm: = @media (max-width: 640px)).
// Камера и микрофон включены; превью камеры — картинка вместо <video>;
// индикатор уровня микрофона — 5 из 12 делений. «Войти» ведёт в комнату.
export default function Page() {
  return (
    <main
      className="grid min-h-dvh place-items-center p-6 text-white max-sm:p-0 max-sm:place-items-stretch"
      style={{
        background:
          "radial-gradient(circle at 15% 0%, rgba(245, 101, 62, 0.18), transparent 34%), #0d0d12",
      }}
    >
      <section className="w-[min(100%,720px)] p-7.5 border border-white/10 rounded-[28px] bg-[rgba(27,28,33,0.94)] shadow-[0_24px_80px_rgba(0,0,0,0.38)] max-sm:w-full max-sm:min-h-dvh max-sm:px-4 max-sm:py-6 max-sm:border-0 max-sm:rounded-none max-sm:bg-transparent max-sm:shadow-none">
        <div className="mb-6 text-center">
          <span className="text-[#ff8a68] text-[13px] font-[650] tracking-[0.08em] uppercase">
            Онлайн-приём
          </span>
          <h1 className="mt-2 mb-1.5 text-[clamp(24px,4vw,34px)] font-[650]">
            Подготовка к консультации
          </h1>
          <p className="text-[#a9adb5]">
            Проверьте изображение и звук перед входом в комнату
          </p>
        </div>

        {/* .preview */}
        <div className="relative overflow-hidden w-full aspect-video rounded-[20px] bg-[#050506]">
          <img
            src="/images/hero/avatar.png"
            alt="Превью камеры"
            className="w-full h-full object-cover -scale-x-100"
          />
        </div>

        {/* .deviceControls */}
        <div className="grid gap-3.5 mt-5">
          <div className="grid grid-cols-[minmax(190px,0.8fr)_minmax(220px,1.2fr)] gap-3 max-sm:grid-cols-1">
            <button
              type="button"
              aria-pressed="true"
              className="flex items-center gap-2.5 px-3.5 min-h-12 border border-[rgba(245,101,62,0.6)] rounded-[14px] text-white bg-[rgba(245,101,62,0.12)] cursor-pointer [&_svg]:w-5.5 [&_svg]:flex-none"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M14.5 7H5.75A2.75 2.75 0 0 0 3 9.75v4.5A2.75 2.75 0 0 0 5.75 17h8.75a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 14.5 7Zm2.5 3 4-2v8l-4-2"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Камера включена</span>
            </button>
            <select
              aria-label="Выбор камеры"
              className="w-full min-h-12 px-3.5 border border-white/13 rounded-[14px] text-white bg-[#24252b] outline-none"
            >
              <option value="">Камера по умолчанию</option>
              <option value="cam-1">HD Webcam C920</option>
              <option value="cam-2">Встроенная камера</option>
            </select>
          </div>

          <div className="grid grid-cols-[minmax(190px,0.8fr)_minmax(220px,1.2fr)] gap-3 max-sm:grid-cols-1">
            <button
              type="button"
              aria-pressed="true"
              className="flex items-center gap-2.5 px-3.5 min-h-12 border border-[rgba(245,101,62,0.6)] rounded-[14px] text-white bg-[rgba(245,101,62,0.12)] cursor-pointer [&_svg]:w-5.5 [&_svg]:flex-none"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="9" y="3" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="1.7" />
                <path
                  d="M6.5 11.5a5.5 5.5 0 0 0 11 0M12 17v4m-3 0h6"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
              <span>Микрофон включён</span>
            </button>
            <select
              aria-label="Выбор микрофона"
              className="w-full min-h-12 px-3.5 border border-white/13 rounded-[14px] text-white bg-[#24252b] outline-none"
            >
              <option value="">Микрофон по умолчанию</option>
              <option value="mic-1">Микрофон (Realtek Audio)</option>
              <option value="mic-2">AirPods Pro</option>
            </select>
          </div>

          {/* .meterBlock */}
          <div className="flex items-center justify-between gap-4 py-1 px-0.5 text-[#c8cad0] text-[13px]">
            <span>Уровень микрофона</span>
            <div className="flex flex-1 justify-end gap-1" aria-hidden="true">
              <i className="w-1.5 h-4.5 rounded bg-[#f5653e] transition-colors duration-[80ms]" />
              <i className="w-1.5 h-4.5 rounded bg-[#f5653e] transition-colors duration-[80ms]" />
              <i className="w-1.5 h-4.5 rounded bg-[#f5653e] transition-colors duration-[80ms]" />
              <i className="w-1.5 h-4.5 rounded bg-[#f5653e] transition-colors duration-[80ms]" />
              <i className="w-1.5 h-4.5 rounded bg-[#f5653e] transition-colors duration-[80ms]" />
              <i className="w-1.5 h-4.5 rounded bg-[#3b3d45] transition-colors duration-[80ms]" />
              <i className="w-1.5 h-4.5 rounded bg-[#3b3d45] transition-colors duration-[80ms]" />
              <i className="w-1.5 h-4.5 rounded bg-[#3b3d45] transition-colors duration-[80ms]" />
              <i className="w-1.5 h-4.5 rounded bg-[#3b3d45] transition-colors duration-[80ms]" />
              <i className="w-1.5 h-4.5 rounded bg-[#3b3d45] transition-colors duration-[80ms]" />
              <i className="w-1.5 h-4.5 rounded bg-[#3b3d45] transition-colors duration-[80ms]" />
              <i className="w-1.5 h-4.5 rounded bg-[#3b3d45] transition-colors duration-[80ms]" />
            </div>
          </div>
        </div>

        <Link
          href="/consultation/1"
          className="block w-full min-h-13 leading-13 text-center mt-5.5 rounded-full text-white text-base font-semibold bg-[#f5653e] cursor-pointer transition hover:bg-[#e5542d] active:scale-[0.99]"
        >
          Войти в консультацию
        </Link>
        <p className="mt-3 text-xs text-center text-[#a9adb5]">
          Камера и микрофон используются только во время консультации
        </p>
      </section>
    </main>
  );
}
