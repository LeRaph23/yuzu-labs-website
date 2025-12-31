import { setRequestLocale } from 'next-intl/server';
import { locales } from '@/lib/i18n';

export const runtime = 'edge';

type Props = {
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const PRIVACY_POLICY_FR = `POLITIQUE DE CONFIDENTIALITÉ

Dernière mise à jour : 21 novembre 2025

INTRODUCTION

Bienvenue sur Motus !

Votre vie privée est extrêmement importante pour nous. Cette Politique de Confidentialité explique de manière claire et transparente quelles données nous collectons, pourquoi nous les collectons, comment nous les utilisons et quels sont vos droits.

En utilisant l'Application, vous acceptez les pratiques décrites dans cette Politique de Confidentialité.

1. RESPONSABLE DU TRAITEMENT

Le responsable du traitement de vos données personnelles est :

Yuzu Labs SAS
11 rue de Lorraine, 68490 PETIT-LANDAU, France
SIREN : 994879013
Email : motus.contactme@gmail.com

2. PRINCIPES FONDAMENTAUX

Nous nous engageons à respecter les principes suivants :

✓ Transparence : Vous informer clairement sur nos pratiques
✓ Minimisation : Ne collecter que les données strictement nécessaires
✓ Sécurité : Protéger vos données avec les meilleures pratiques
✓ Contrôle : Vous donner le contrôle sur vos données
✓ Conformité : Respecter le RGPD et les lois applicables

3. DONNÉES COLLECTÉES

3.1 Données que Vous Nous Fournissez

DONNÉES DE PROFIL
• Prénom (obligatoire)
• Âge (optionnel)
• Sexe (optionnel)

DONNÉES DE PRÉFÉRENCES ET OBJECTIFS
• Objectif principal (souplesse, soulagement douleur, posture, mobilité, stress)
• Zones du corps ciblées (corps entier, nuque, dos, épaules, jambes, pieds)
• Objectifs spécifiques de souplesse
• Contexte professionnel (bureau, debout, physique, mixte, flexible)
• Niveau de condition physique (débutant, intermédiaire, avancé)
• Moment préféré pour les exercices
• Heure de rappel (optionnel)

DONNÉES D'ACTIVITÉ
• Historique des séances (date, durée, type, difficulté)
• Exercices réalisés avec dates
• Exercices favoris
• Séances personnalisées créées
• Métriques de progression (streaks, total exercices, temps total)

DONNÉES SPÉCIFIQUES MOTUS (Mode Kiné)
• Code QR de connexion kiné
• Programmes prescrits par le kiné
• Signalements de douleur
• Notes et commentaires du kiné

3.2 Données Collectées Automatiquement

DONNÉES TECHNIQUES
• Identifiant de l'appareil
• Modèle de l'appareil et version du système
• Version de l'Application
• Langue de l'appareil
• Token de notification push (si activé)
• Fuseau horaire

DONNÉES D'UTILISATION
• Dates et heures d'utilisation
• Fonctionnalités utilisées
• Erreurs et crashs (données anonymisées)

3.3 Données que Nous Ne Collectons PAS

✗ Nom de famille
✗ Adresse postale complète
✗ Numéro de téléphone
✗ Coordonnées bancaires
✗ Localisation GPS précise
✗ Contacts
✗ Photos ou vidéos personnelles
✗ Données de santé sensibles (diagnostics médicaux, traitements)
✗ Données biométriques

4. UTILISATION DES DONNÉES

Nous utilisons vos données pour :

• Fournir les services de l'Application (Base légale : Contrat)
• Personnaliser votre expérience (Base légale : Contrat)
• Générer des programmes adaptés (Base légale : Contrat)
• Sauvegarder votre progression (Base légale : Contrat)
• Synchroniser sur plusieurs appareils (Base légale : Contrat)
• Permettre le suivi par votre kinésithérapeute (Base légale : Consentement)
• Envoyer des notifications de rappel (Base légale : Consentement)
• Améliorer l'Application (Base légale : Intérêt légitime)
• Assurer la sécurité (Base légale : Intérêt légitime)
• Support client (Base légale : Intérêt légitime)

Vous pouvez retirer votre consentement à tout moment pour les traitements qui en dépendent.

5. DURÉE DE CONSERVATION

• Données de profil et préférences : Tant que votre compte est actif
• Historique des séances : Tant que votre compte est actif
• Exercices favoris : Tant que votre compte est actif
• Séances personnalisées : Tant que votre compte est actif
• Données de suivi kiné : Tant que la relation patient-kiné est active
• Données techniques et logs : 12 mois maximum
• Données de support client : 3 ans après fermeture du ticket

APRÈS SUPPRESSION DE VOTRE COMPTE :
Toutes vos données personnelles sont supprimées sous 30 jours maximum.

6. PARTAGE ET TRANSFERT DE DONNÉES

Nous ne vendons JAMAIS vos données personnelles.

PARTAGE AVEC VOTRE KINÉSITHÉRAPEUTE
Si vous utilisez le mode kiné, vos données de progression et signalements sont partagées avec votre kinésithérapeute connecté, uniquement avec votre consentement explicite.

PRESTATAIRES DE SERVICES TECHNIQUES

Supabase (Hébergement et Base de Données)
• Service : Supabase Inc.
• Localisation : Serveurs situés dans l'Union Européenne
• Rôle : Hébergement sécurisé, authentification, synchronisation
• Protection : Chiffrement TLS et AES-256, conformité SOC 2 Type II

Services de Notifications (Apple/Google)
• Apple Push Notification Service (APNs) pour iOS
• Firebase Cloud Messaging (FCM) pour Android
• Données partagées : Uniquement token de notification et contenu du message
• Contrôle : Désactivable à tout moment dans les paramètres

HÉBERGEMENT DANS L'UE
Vos données sont hébergées exclusivement dans l'Union Européenne, garantissant le plus haut niveau de protection RGPD.

7. SÉCURITÉ DES DONNÉES

7.1 Mesures Techniques

✓ Chiffrement en transit : TLS 1.3 pour toutes les communications
✓ Chiffrement au repos : AES-256 pour les données stockées
✓ Authentification sécurisée : Gestion des sessions avec tokens JWT
✓ Isolation des données : Row Level Security (RLS) - chaque utilisateur ne voit que ses propres données
✓ Sauvegardes régulières : Backups automatiques quotidiens
✓ Surveillance : Monitoring 24/7 des systèmes

7.2 Mesures Organisationnelles

✓ Accès restreint aux personnes autorisées uniquement
✓ Principe du moindre privilège
✓ Audits réguliers de sécurité
✓ Formation de l'équipe à la protection des données

7.3 En Cas de Violation de Données

Nous nous engageons à :
• Notifier l'autorité de contrôle (CNIL) sous 72 heures
• Vous informer sans délai si le risque est élevé
• Prendre toutes les mesures nécessaires pour limiter l'impact

8. VOS DROITS SUR VOS DONNÉES (RGPD)

8.1 Droit d'Accès
Vous pouvez demander une copie de toutes vos données.
Comment ? Paramètres > Mes données ou contactez-nous

8.2 Droit de Rectification
Vous pouvez corriger des données inexactes.
Comment ? Modifiez directement dans les paramètres

8.3 Droit à l'Effacement
Vous pouvez demander la suppression de vos données.
Comment ? Paramètres > Supprimer mes données

8.4 Droit à la Portabilité
Vous pouvez recevoir vos données en format structuré (JSON, CSV).
Comment ? Paramètres > Exporter mes données

8.5 Droit d'Opposition
Vous pouvez vous opposer au traitement de vos données.
Comment ? Désactivez les options concernées dans les paramètres

8.6 Droit de Retirer Votre Consentement
Pour les notifications et le partage avec votre kiné, vous pouvez retirer votre consentement à tout moment.
Comment ? Désactivez dans Paramètres

8.7 Droit de Déposer une Plainte

Si vous estimez que vos droits ne sont pas respectés :

CNIL (Commission Nationale de l'Informatique et des Libertés)
3 Place de Fontenoy
TSA 80715
75334 PARIS CEDEX 07
Téléphone : 01 53 73 22 22
Site web : https://www.cnil.fr/

DÉLAI DE RÉPONSE
Nous nous engageons à répondre à vos demandes dans un délai d'un mois maximum.

9. DONNÉES DES MINEURS

L'Application est accessible aux personnes âgées de 13 ans et plus.

Pour les utilisateurs de moins de 18 ans, nous recommandons fortement d'obtenir le consentement parental.

Si nous découvrons qu'un enfant de moins de 13 ans a fourni des données personnelles, nous supprimerons immédiatement ces données.

10. COOKIES ET TECHNOLOGIES SIMILAIRES

L'Application n'utilise pas de cookies au sens traditionnel.

STOCKAGE LOCAL
L'Application stocke certaines données localement sur votre appareil pour :
• Améliorer les performances
• Permettre un usage hors ligne
• Sauvegarder vos préférences

Ces données restent sur votre appareil et sont supprimées si vous désinstallez l'Application.

11. MODIFICATIONS DE CETTE POLITIQUE

Nous pouvons mettre à jour cette Politique de Confidentialité pour refléter des changements dans nos pratiques ou la législation.

En cas de modification importante :
• Nous vous notifierons via l'Application
• Nous mettrons à jour la date en haut de cette politique
• Votre utilisation continue vaut acceptation des nouvelles conditions

12. CONTACT

Pour toute question concernant cette Politique de Confidentialité ou pour exercer vos droits :

Email : motus.contactme@gmail.com
Adresse : 11 rue de Lorraine, 68490 PETIT-LANDAU, France

Délégué à la Protection des Données :
MEYER Raphaël
motus.contactme@gmail.com

Nous nous engageons à répondre à vos demandes dans les meilleurs délais.

ENGAGEMENTS DE MOTUS

💙 Respecter votre vie privée
💙 Être transparents sur nos pratiques
💙 Vous donner le contrôle sur vos données
💙 Protéger vos données avec les meilleures mesures de sécurité
💙 Ne jamais vendre vos données à des tiers
💙 Répondre rapidement à vos demandes

Votre confiance est essentielle pour nous. Merci de faire partie de la communauté Motus ! 💙

En utilisant l'Application Motus, vous reconnaissez avoir lu, compris et accepté cette Politique de Confidentialité.

Version 1.0 - Novembre 2025
Conforme au RGPD (EU 2016/679) et aux exigences de l'Apple App Store`;

const PRIVACY_POLICY_EN = `PRIVACY POLICY

Last updated: November 21, 2025

INTRODUCTION

Welcome to Motus!

Your privacy is extremely important to us. This Privacy Policy clearly and transparently explains what data we collect, why we collect it, how we use it, and what your rights are.

By using the App, you agree to the practices described in this Privacy Policy.

1. DATA CONTROLLER

The data controller for your personal data is:

Yuzu Labs SAS
11 rue de Lorraine, 68490 PETIT-LANDAU, France
SIREN: 994879013
Email: motus.contactme@gmail.com

2. FUNDAMENTAL PRINCIPLES

We commit to respecting the following principles:

✓ Transparency: Clearly informing you about our practices
✓ Minimization: Collecting only strictly necessary data
✓ Security: Protecting your data with best practices
✓ Control: Giving you control over your data
✓ Compliance: Respecting GDPR and applicable laws

3. DATA COLLECTED

3.1 Data You Provide to Us

PROFILE DATA
• First name (required)
• Age (optional)
• Gender (optional)

PREFERENCES AND GOALS DATA
• Main goal (flexibility, pain relief, posture, mobility, stress)
• Targeted body areas (full body, neck, back, shoulders, legs, feet)
• Specific flexibility goals
• Professional context (office, standing, physical, mixed, flexible)
• Fitness level (beginner, intermediate, advanced)
• Preferred time for exercises
• Reminder time (optional)

ACTIVITY DATA
• Session history (date, duration, type, difficulty)
• Completed exercises with dates
• Favorite exercises
• Custom sessions created
• Progress metrics (streaks, total exercises, total time)

MOTUS-SPECIFIC DATA (Physio Mode)
• Physio connection QR code
• Programs prescribed by physio
• Pain reports
• Physio notes and comments

3.2 Automatically Collected Data

TECHNICAL DATA
• Device identifier
• Device model and system version
• App version
• Device language
• Push notification token (if enabled)
• Time zone

USAGE DATA
• Usage dates and times
• Features used
• Errors and crashes (anonymized data)

3.3 Data We DO NOT Collect

✗ Last name
✗ Full postal address
✗ Phone number
✗ Banking information
✗ Precise GPS location
✗ Contacts
✗ Personal photos or videos
✗ Sensitive health data (medical diagnoses, treatments)
✗ Biometric data

4. USE OF DATA

We use your data to:

• Provide App services (Legal basis: Contract)
• Personalize your experience (Legal basis: Contract)
• Generate tailored programs (Legal basis: Contract)
• Save your progress (Legal basis: Contract)
• Sync across multiple devices (Legal basis: Contract)
• Enable follow-up by your physiotherapist (Legal basis: Consent)
• Send reminder notifications (Legal basis: Consent)
• Improve the App (Legal basis: Legitimate interest)
• Ensure security (Legal basis: Legitimate interest)
• Customer support (Legal basis: Legitimate interest)

You can withdraw your consent at any time for processing that depends on it.

5. DATA RETENTION

• Profile data and preferences: As long as your account is active
• Session history: As long as your account is active
• Favorite exercises: As long as your account is active
• Custom sessions: As long as your account is active
• Physio follow-up data: As long as the patient-physio relationship is active
• Technical data and logs: 12 months maximum
• Customer support data: 3 years after ticket closure

AFTER ACCOUNT DELETION:
All your personal data is deleted within 30 days maximum.

6. DATA SHARING AND TRANSFER

We NEVER sell your personal data.

SHARING WITH YOUR PHYSIOTHERAPIST
If you use the physio mode, your progress data and reports are shared with your connected physiotherapist, only with your explicit consent.

TECHNICAL SERVICE PROVIDERS

Supabase (Hosting and Database)
• Service: Supabase Inc.
• Location: Servers located in the European Union
• Role: Secure hosting, authentication, synchronization
• Protection: TLS and AES-256 encryption, SOC 2 Type II compliance

Notification Services (Apple/Google)
• Apple Push Notification Service (APNs) for iOS
• Firebase Cloud Messaging (FCM) for Android
• Shared data: Only notification token and message content
• Control: Can be disabled at any time in settings

EU HOSTING
Your data is hosted exclusively in the European Union, ensuring the highest level of GDPR protection.

7. DATA SECURITY

7.1 Technical Measures

✓ Encryption in transit: TLS 1.3 for all communications
✓ Encryption at rest: AES-256 for stored data
✓ Secure authentication: Session management with JWT tokens
✓ Data isolation: Row Level Security (RLS) - each user only sees their own data
✓ Regular backups: Automatic daily backups
✓ Monitoring: 24/7 system monitoring

7.2 Organizational Measures

✓ Access restricted to authorized personnel only
✓ Principle of least privilege
✓ Regular security audits
✓ Team training on data protection

7.3 In Case of Data Breach

We commit to:
• Notify the supervisory authority (CNIL) within 72 hours
• Inform you without delay if the risk is high
• Take all necessary measures to limit the impact

8. YOUR DATA RIGHTS (GDPR)

8.1 Right of Access
You can request a copy of all your data.
How? Settings > My data or contact us

8.2 Right of Rectification
You can correct inaccurate data.
How? Modify directly in settings

8.3 Right to Erasure
You can request deletion of your data.
How? Settings > Delete my data

8.4 Right to Portability
You can receive your data in structured format (JSON, CSV).
How? Settings > Export my data

8.5 Right to Object
You can object to the processing of your data.
How? Disable the relevant options in settings

8.6 Right to Withdraw Consent
For notifications and sharing with your physio, you can withdraw your consent at any time.
How? Disable in Settings

8.7 Right to Lodge a Complaint

If you believe your rights are not being respected:

CNIL (Commission Nationale de l'Informatique et des Libertés)
3 Place de Fontenoy
TSA 80715
75334 PARIS CEDEX 07
Phone: 01 53 73 22 22
Website: https://www.cnil.fr/

RESPONSE TIME
We commit to responding to your requests within one month maximum.

9. CHILDREN'S DATA

The App is accessible to individuals aged 13 and over.

For users under 18, we strongly recommend obtaining parental consent.

If we discover that a child under 13 has provided personal data, we will immediately delete that data.

10. COOKIES AND SIMILAR TECHNOLOGIES

The App does not use cookies in the traditional sense.

LOCAL STORAGE
The App stores certain data locally on your device to:
• Improve performance
• Allow offline use
• Save your preferences

This data remains on your device and is deleted if you uninstall the App.

11. CHANGES TO THIS POLICY

We may update this Privacy Policy to reflect changes in our practices or legislation.

In case of significant changes:
• We will notify you via the App
• We will update the date at the top of this policy
• Your continued use constitutes acceptance of the new terms

12. CONTACT

For any questions regarding this Privacy Policy or to exercise your rights:

Email: motus.contactme@gmail.com
Address: 11 rue de Lorraine, 68490 PETIT-LANDAU, France

Data Protection Officer:
MEYER Raphaël
motus.contactme@gmail.com

We commit to responding to your requests as quickly as possible.

MOTUS'S COMMITMENTS

💙 Respect your privacy
💙 Be transparent about our practices
💙 Give you control over your data
💙 Protect your data with the best security measures
💙 Never sell your data to third parties
💙 Respond quickly to your requests

Your trust is essential to us. Thank you for being part of the Motus community! 💙

By using the Motus App, you acknowledge that you have read, understood, and accepted this Privacy Policy.

Version 1.0 - November 2025
Compliant with GDPR (EU 2016/679) and Apple App Store requirements`;

export default async function MotusPrivacyPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  
  const content = locale === 'fr' ? PRIVACY_POLICY_FR : PRIVACY_POLICY_EN;
  const title = locale === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy';
  const subtitle = locale === 'fr' ? 'Application Motus' : 'Motus App';

  return (
    <div className="min-h-screen bg-background py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
            {subtitle}
          </span>
          <h1 className="text-4xl font-bold text-foreground mb-4">{title}</h1>
          <p className="text-foreground/70">
            {locale === 'fr' ? 'Dernière mise à jour : Novembre 2025' : 'Last updated: November 2025'}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl p-8 card-shadow whitespace-pre-line text-foreground/80 leading-relaxed">
            {content}
          </div>
        </div>

        <p className="mt-8 text-sm text-foreground/60 text-center">
          {locale === 'fr' ? 'Conforme au RGPD (EU 2016/679)' : 'GDPR Compliant (EU 2016/679)'}
        </p>
      </div>
    </div>
  );
}

