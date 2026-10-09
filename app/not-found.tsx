import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl border border-border p-8 flex flex-col items-center text-center gap-4">
        <span className="text-2xl font-bold text-primary">IMBIR</span>
        <div className="relative w-full overflow-hidden rounded-3xl bg-primary py-10">
          <span className="relative z-10 block text-6xl font-bold tracking-tight text-white tabular-nums">
            404
          </span>
          <div className="absolute -right-8 -bottom-10 size-32 rounded-full bg-white/10" />
          <div className="absolute -left-10 -top-12 size-28 rounded-full bg-white/10" />
        </div>
        <div>
          <h1 className="text-xl font-semibold text-foreground mb-2">
            Страница не найдена
          </h1>
          <p className="text-secondary text-sm">
            Возможно, адрес введён с опечаткой, а специалиста или клинику уже
            удалили. Начните с одного из разделов ниже.
          </p>
        </div>
        <div className="grid w-full grid-cols-2 gap-2">
          <Link
            href="/specialists"
            className="rounded-full border border-border px-4 py-2 text-center text-sm font-medium text-secondary transition-colors hover:border-primary hover:text-primary"
          >
            Специалисты
          </Link>
          <Link
            href="/clinics"
            className="rounded-full border border-border px-4 py-2 text-center text-sm font-medium text-secondary transition-colors hover:border-primary hover:text-primary"
          >
            Клиники
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-border px-4 py-2 text-center text-sm font-medium text-secondary transition-colors hover:border-primary hover:text-primary"
          >
            Услуги
          </Link>
          <Link
            href="/blog"
            className="rounded-full border border-border px-4 py-2 text-center text-sm font-medium text-secondary transition-colors hover:border-primary hover:text-primary"
          >
            Блог
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full mt-2">
          <button
            type="button"
            className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-12 text-sm md:text-base px-6 border border-border active:bg-border-soft hover:shadow-[0_0_1px_3px_rgba(242,243,245,0.8),0_0_0_1px_#E5E6E8] hover:bg-transparent flex-1"
          >
            <span>Назад</span>
          </button>
          <Link href="/" className="flex-1">
            <button
              type="button"
              className="font-medium flex items-center justify-center gap-2 cursor-pointer transition-all rounded-full outline-none focus-visible:shadow-[0_0_1px_3px_rgba(245,101,62,0.45)] disabled:opacity-50 disabled:pointer-events-none shrink-0 h-12 text-sm md:text-base px-6 bg-primary text-white active:bg-primary-dark hover:shadow-[0_0_1px_3px_rgba(245,101,62,0.3)] w-full"
            >
              <span>На главную</span>
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
