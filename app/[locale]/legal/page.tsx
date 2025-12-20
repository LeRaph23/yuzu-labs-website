import { useTranslations } from 'next-intl';

export default function LegalPage() {
  const t = useTranslations('legal');

  return (
    <div className="min-h-screen bg-background py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8">{t('title')}</h1>

        <div className="space-y-8">
          {/* Éditeur du site */}
          <section className="bg-white rounded-2xl p-8 card-shadow">
            <h2 className="text-2xl font-semibold text-green-primary mb-4">
              {t('editor.title')}
            </h2>
            <div className="space-y-2 text-foreground/80">
              <p><strong>{t('editor.company')}</strong></p>
              <p>{t('editor.form')}</p>
              <p>{t('editor.address')}</p>
              <p>{t('editor.siren')}</p>
              <p>{t('editor.director')}</p>
              <p>{t('editor.email')}</p>
            </div>
          </section>

          {/* Hébergement */}
          <section className="bg-white rounded-2xl p-8 card-shadow">
            <h2 className="text-2xl font-semibold text-green-primary mb-4">
              {t('hosting.title')}
            </h2>
            <div className="space-y-2 text-foreground/80">
              <p>{t('hosting.provider')}</p>
              <p>{t('hosting.address')}</p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section className="bg-white rounded-2xl p-8 card-shadow">
            <h2 className="text-2xl font-semibold text-green-primary mb-4">
              {t('intellectual.title')}
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              {t('intellectual.content')}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

