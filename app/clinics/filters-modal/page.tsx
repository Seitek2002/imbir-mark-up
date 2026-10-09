// Модалка мобильных фильтров (features/mobile-filters) каталога клиник — открытое состояние
// (?modal=filters). Полноэкранная панель z-50 поверх страницы, поэтому фон не рисуем.
// Поля те же, что у специалистов: специализация, стаж, оценка, стоимость. Фильтры не выбраны.

import Link from "next/link";

import StarIcon from "@/assets/icons/common/star.svg";
import DropdownArrowIcon from "@/assets/icons/dropdown/arrow.svg";
import HeaderBackIcon from "@/assets/icons/header/back-arrow.svg";

export default function Page() {
  return (
    <>
      <div className="fixed inset-0 z-50 bg-background flex flex-col transition-transform duration-300 ease-in-out translate-y-0">
        {/* PageHeader */}
        <div className="px-4 pt-1 pb-4 bg-white border-b border-border-soft">
          <div className="grid grid-cols-3 items-center min-h-10">
            <div>
              <Link
                href="/clinics"
                aria-label="Вернуться назад"
                className="relative inline-flex items-center justify-center cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none p-2.5 after:absolute after:inset-1/2 after:size-11 after:-translate-x-1/2 after:-translate-y-1/2 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent"
              >
                <HeaderBackIcon className="size-4" />
              </Link>
            </div>
            <h2 className="text-center font-medium text-base px-2">Фильтр</h2>
            <div />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto mt-2 px-2 pb-10 space-y-3">
          {/* БЛОК 1: СПЕЦИАЛИЗАЦИЯ */}
          <div className="bg-white p-4 rounded-2xl">
            <span className="block text-sm font-medium text-foreground mb-2">
              Специализация
            </span>
            <div className="flex flex-col gap-1.5 w-full">
              <div className="relative">
                <div
                  role="combobox"
                  tabIndex={0}
                  aria-expanded={false}
                  aria-haspopup="listbox"
                  className="flex items-center justify-between min-h-10.5 p-3 border rounded-lg cursor-pointer transition-all duration-200 bg-white select-none border-border-soft outline-none focus-visible:border-primary focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] hover:border-primary/50"
                >
                  <div className="flex flex-wrap items-center gap-1.5 flex-1 min-w-0 overflow-hidden">
                    <span className="truncate text-foreground">Выберите специализацию</span>
                  </div>
                  <DropdownArrowIcon className="text-muted transition-transform duration-300 size-5" />
                </div>
              </div>
            </div>
          </div>

          {/* БЛОК 2: СТАЖ */}
          <div className="bg-white p-4 rounded-2xl">
            <div className="block w-full">
              <span className="block text-overlay text-sm font-medium mb-1.5">
                Стаж, лет
              </span>

              <div className="border border-border-soft rounded-lg p-3 pt-2">
                <div className="flex justify-between text-sm text-foreground leading-none">
                  <span>0</span>
                  <span>50</span>
                </div>

                <div className="relative w-full flex items-center h-4">
                  <div className="absolute w-full h-0.5 bg-border-soft rounded-full" />
                  <div
                    className="absolute h-0.5 bg-primary rounded-full"
                    style={{ left: "0%", width: "100%" }}
                  />
                  <input
                    id="exp-mobile-clinic-min"
                    type="range"
                    min={0}
                    max={50}
                    step={1}
                    defaultValue={0}
                    className="absolute w-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer z-20"
                  />
                  <input
                    id="exp-mobile-clinic-max"
                    type="range"
                    min={0}
                    max={50}
                    step={1}
                    defaultValue={50}
                    className="absolute w-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer z-20"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* БЛОК 3: ОЦЕНКА */}
          <div className="bg-white p-4 rounded-2xl">
            <span className="block text-sm font-medium text-foreground mb-3">
              Оценка
            </span>
            <div className="flex flex-col gap-4">
              <label className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-2">
                  <StarIcon className="size-5 text-primary" />
                  <span className="text-base text-foreground">5.0</span>
                </div>
                <label className="group flex cursor-pointer items-center gap-2.5">
                  <div className="relative flex items-center justify-center">
                    <input type="radio" className="peer sr-only" name="rating-mobile-clinic" value="5.0" />

                    <div className="relative flex items-center justify-center rounded-full border-4 transition-all duration-200 border-border-soft bg-white peer-checked:border-primary peer-focus-visible:shadow-[0_0_0.5px_2px_rgba(245,101,62,0.2)] peer-focus-visible:border-primary size-5">
                      <div className="rounded-full bg-primary opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100 size-2.5" />
                    </div>
                  </div>
                </label>
              </label>
              <label className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-2">
                  <StarIcon className="size-5 text-primary" />
                  <span className="text-base text-foreground">4.0</span>
                </div>
                <label className="group flex cursor-pointer items-center gap-2.5">
                  <div className="relative flex items-center justify-center">
                    <input type="radio" className="peer sr-only" name="rating-mobile-clinic" value="4.0" />

                    <div className="relative flex items-center justify-center rounded-full border-4 transition-all duration-200 border-border-soft bg-white peer-checked:border-primary peer-focus-visible:shadow-[0_0_0.5px_2px_rgba(245,101,62,0.2)] peer-focus-visible:border-primary size-5">
                      <div className="rounded-full bg-primary opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100 size-2.5" />
                    </div>
                  </div>
                </label>
              </label>
              <label className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-2">
                  <StarIcon className="size-5 text-primary" />
                  <span className="text-base text-foreground">3.0</span>
                </div>
                <label className="group flex cursor-pointer items-center gap-2.5">
                  <div className="relative flex items-center justify-center">
                    <input type="radio" className="peer sr-only" name="rating-mobile-clinic" value="3.0" />

                    <div className="relative flex items-center justify-center rounded-full border-4 transition-all duration-200 border-border-soft bg-white peer-checked:border-primary peer-focus-visible:shadow-[0_0_0.5px_2px_rgba(245,101,62,0.2)] peer-focus-visible:border-primary size-5">
                      <div className="rounded-full bg-primary opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100 size-2.5" />
                    </div>
                  </div>
                </label>
              </label>
              <label className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-2">
                  <StarIcon className="size-5 text-primary" />
                  <span className="text-base text-foreground">2.0</span>
                </div>
                <label className="group flex cursor-pointer items-center gap-2.5">
                  <div className="relative flex items-center justify-center">
                    <input type="radio" className="peer sr-only" name="rating-mobile-clinic" value="2.0" />

                    <div className="relative flex items-center justify-center rounded-full border-4 transition-all duration-200 border-border-soft bg-white peer-checked:border-primary peer-focus-visible:shadow-[0_0_0.5px_2px_rgba(245,101,62,0.2)] peer-focus-visible:border-primary size-5">
                      <div className="rounded-full bg-primary opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100 size-2.5" />
                    </div>
                  </div>
                </label>
              </label>
              <label className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-2">
                  <StarIcon className="size-5 text-primary" />
                  <span className="text-base text-foreground">1.0</span>
                </div>
                <label className="group flex cursor-pointer items-center gap-2.5">
                  <div className="relative flex items-center justify-center">
                    <input type="radio" className="peer sr-only" name="rating-mobile-clinic" value="1.0" />

                    <div className="relative flex items-center justify-center rounded-full border-4 transition-all duration-200 border-border-soft bg-white peer-checked:border-primary peer-focus-visible:shadow-[0_0_0.5px_2px_rgba(245,101,62,0.2)] peer-focus-visible:border-primary size-5">
                      <div className="rounded-full bg-primary opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100 size-2.5" />
                    </div>
                  </div>
                </label>
              </label>
            </div>
          </div>

          {/* БЛОК 4: СТОИМОСТЬ */}
          <div className="bg-white p-4 rounded-2xl">
            <div className="block w-full">
              <span className="block text-overlay text-sm font-medium mb-1.5">
                Стоимость, с
              </span>

              <div className="border border-border-soft rounded-lg p-3 pt-2">
                <div className="flex justify-between text-sm text-foreground leading-none">
                  <span>0</span>
                  <span>5000</span>
                </div>

                <div className="relative w-full flex items-center h-4">
                  <div className="absolute w-full h-0.5 bg-border-soft rounded-full" />
                  <div
                    className="absolute h-0.5 bg-primary rounded-full"
                    style={{ left: "0%", width: "100%" }}
                  />
                  <input
                    id="price-mobile-clinic-min"
                    type="range"
                    min={0}
                    max={5000}
                    step={50}
                    defaultValue={0}
                    className="absolute w-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer z-20"
                  />
                  <input
                    id="price-mobile-clinic-max"
                    type="range"
                    min={0}
                    max={5000}
                    step={50}
                    defaultValue={5000}
                    className="absolute w-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer z-20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ФУТЕР С КНОПКАМИ */}
        <div className="bg-white p-4 grid grid-cols-2 gap-3 pb-8 rounded-t-2xl shadow-[0_-4px_10px_rgba(0,0,0,0.03)]">
          <button
            type="button"
            className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent"
          >
            <span>Сбросить</span>
          </button>
          <button
            type="button"
            className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-10 text-sm px-5 relative after:absolute after:inset-x-0 after:-inset-y-1 after:content-[''] bg-primary text-white active:bg-primary-dark hover:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)]"
          >
            <span>Применить</span>
          </button>
        </div>
      </div>
    </>
  );
}
