import { setRequestLocale } from 'next-intl/server';
import { locales } from '@/lib/i18n';

export const runtime = 'edge';

type Props = {
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const TERMS_FR = `CONDITIONS GÉNÉRALES D'UTILISATION

Dernière mise à jour : 21 novembre 2025

INTRODUCTION ET ACCEPTATION

Bienvenue sur Motus, une application mobile de mobilité et de stretching personnalisés.

Les présentes Conditions Générales d'Utilisation (« CGU ») régissent l'accès et l'utilisation de l'application mobile Motus (« l'Application ») et des services associés (« les Services »).

En téléchargeant, installant ou utilisant l'Application, vous acceptez sans réserve les présentes CGU. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser l'Application.

1. DÉFINITIONS

• « Utilisateur » ou « Vous » : toute personne physique utilisant l'Application.
• « Nous », « Notre », « Motus » : l'éditeur de l'Application (Yuzu Labs SAS).
• « Contenu » : l'ensemble des informations, textes, images, vidéos, exercices, programmes et autres éléments disponibles dans l'Application.
• « Données Personnelles » : toute information permettant d'identifier directement ou indirectement un Utilisateur.
• « Kinésithérapeute » ou « Kiné » : professionnel de santé utilisant l'interface dédiée de l'Application.

2. ÉDITEUR DE L'APPLICATION

Yuzu Labs SAS
Société par Actions Simplifiée
SIREN : 994879013
11 rue de Lorraine, 68490 PETIT-LANDAU, France
Directeur de publication : MEYER Raphaël
Email : motus.contactme@gmail.com

3. OBJET DE L'APPLICATION

Motus est une application dédiée au bien-être physique et à la mobilité qui propose :

• Des programmes d'exercices de mobilité et de stretching personnalisés
• Un suivi de progression et d'historique des séances
• Des recommandations basées sur vos objectifs et préférences
• Des notifications de rappel pour vos séances
• Un système de favoris et de création de séances personnalisées
• Une connexion avec votre kinésithérapeute pour un suivi personnalisé (mode kiné)
• Des programmes prescrits par votre kinésithérapeute

L'Application est conçue à des fins de bien-être général et ne remplace en aucun cas un avis médical professionnel.

4. CONDITIONS D'ACCÈS ET D'UTILISATION

4.1 Âge Minimum

L'utilisation de l'Application est réservée aux personnes âgées de 13 ans minimum. Si vous avez moins de 18 ans, vous devez obtenir l'autorisation de vos parents ou tuteurs légaux avant d'utiliser l'Application.

4.2 Inscription et Compte

Lors de votre première utilisation, l'Application vous demandera de fournir certaines informations (prénom, objectifs, préférences) pour personnaliser votre expérience. Ces informations sont traitées conformément à notre Politique de Confidentialité.

Un compte anonyme est automatiquement créé pour synchroniser vos données. Vous pouvez créer un compte permanent avec email pour sécuriser vos données.

4.3 Mode Kinésithérapeute

L'Application propose un mode spécial permettant aux patients de se connecter avec leur kinésithérapeute via un code QR. Cette fonctionnalité permet :
• Le partage de votre progression avec votre kiné
• La réception de programmes personnalisés
• Le signalement de douleurs ou difficultés

Cette connexion est entièrement optionnelle et basée sur votre consentement explicite.

4.4 Responsabilité de l'Utilisateur

En utilisant l'Application, vous vous engagez à :

• Fournir des informations exactes et à jour
• Ne pas utiliser l'Application à des fins illégales ou non autorisées
• Ne pas tenter d'accéder aux systèmes ou données d'autres utilisateurs
• Ne pas copier, modifier, distribuer ou vendre tout ou partie de l'Application
• Ne pas utiliser l'Application de manière abusive ou excessive
• Consulter un professionnel de santé avant de débuter tout programme d'exercices si vous avez des conditions médicales particulières

5. AVERTISSEMENTS SANTÉ ET SÉCURITÉ

5.1 Avertissement Médical Important

⚠️ L'APPLICATION MOTUS N'EST PAS UN DISPOSITIF MÉDICAL ET NE FOURNIT PAS DE CONSEILS MÉDICAUX.

Les exercices proposés sont à visée de bien-être général. Ils ne constituent pas :
• Un diagnostic médical
• Un traitement thérapeutique
• Une rééducation médicale
• Un substitut à une consultation médicale

Même si vous utilisez l'Application en lien avec votre kinésithérapeute, les exercices ne remplacent pas une consultation en cabinet.

5.2 Consultation Médicale Préalable

Vous devez consulter un médecin ou un professionnel de santé qualifié avant de débuter tout programme d'exercices si vous :

• Avez des problèmes cardiaques, respiratoires ou circulatoires
• Souffrez de douleurs chroniques ou aiguës
• Avez des blessures récentes ou anciennes
• Êtes enceinte ou allaitez
• Avez des problèmes articulaires ou musculaires
• Prenez des médicaments pouvant affecter votre capacité physique
• Avez plus de 40 ans et n'avez pas pratiqué d'activité physique régulière récemment
• Avez le moindre doute sur votre capacité à effectuer des exercices physiques

5.3 Pratique des Exercices en Toute Sécurité

En utilisant l'Application, vous reconnaissez et acceptez que :

• Vous pratiquez les exercices À VOS PROPRES RISQUES
• Vous êtes seul responsable de votre santé et sécurité pendant la pratique
• Vous devez ARRÊTER IMMÉDIATEMENT tout exercice en cas de douleur, vertige, essoufflement ou malaise
• Vous devez adapter les exercices à votre niveau et ne jamais forcer
• Vous devez pratiquer dans un environnement sûr et adapté
• Vous devez vous hydrater correctement avant, pendant et après les exercices

5.4 Limitation de Responsabilité Santé

Dans la limite autorisée par la loi, Motus ne peut être tenu responsable de :

• Toute blessure, douleur ou problème de santé résultant de l'utilisation de l'Application
• Toute aggravation d'une condition médicale préexistante
• Tout dommage physique ou psychologique lié à la pratique des exercices
• Toute erreur dans l'exécution des exercices par l'Utilisateur
• Tout retard ou absence de consultation médicale professionnelle

Vous reconnaissez que la pratique d'exercices physiques comporte des risques inhérents et acceptez ces risques en utilisant l'Application.

6. PROPRIÉTÉ INTELLECTUELLE

6.1 Droits de Motus

Tous les éléments de l'Application (design, textes, images, vidéos, illustrations, exercices, algorithmes, base de données, code source, etc.) sont protégés par les droits de propriété intellectuelle et appartiennent à Yuzu Labs ou à ses partenaires.

Toute reproduction, représentation, modification, distribution ou exploitation non autorisée de tout ou partie de l'Application est strictement interdite et constitue une contrefaçon.

6.2 Licence d'Utilisation Limitée

Nous vous accordons une licence personnelle, non exclusive, non transférable et révocable pour utiliser l'Application à des fins personnelles uniquement.

Cette licence ne vous confère aucun droit de propriété sur l'Application.

7. PROTECTION DES DONNÉES PERSONNELLES

Le traitement de vos Données Personnelles est décrit en détail dans notre Politique de Confidentialité, disponible dans l'Application.

Données collectées principalement :
• Prénom
• Âge et sexe (optionnel)
• Objectifs de bien-être (souplesse, posture, etc.)
• Historique des séances et exercices réalisés
• Préférences et paramètres de l'Application
• Données techniques (version de l'appareil, système d'exploitation)
• Données de suivi kiné (si mode activé)

Vos données sont hébergées de manière sécurisée dans l'Union Européenne et traitées conformément au RGPD.

8. LIMITATION DE RESPONSABILITÉ

8.1 Contenu de l'Application

L'Application est fournie « en l'état » sans garantie d'aucune sorte, expresse ou implicite.

8.2 Dommages Exclus

Dans la limite autorisée par la loi applicable, nous ne saurions être tenus responsables de tout dommage :
• Direct, indirect, accessoire, spécial ou consécutif
• Perte de données, de profits ou de réputation
• Interruption d'activité
• Résultant de l'utilisation ou de l'impossibilité d'utiliser l'Application
• Résultant d'une blessure physique liée à la pratique des exercices

8.3 Montant Maximum

Si notre responsabilité devait être engagée, le montant total des dommages et intérêts ne pourrait excéder 100 euros, sauf en cas de dol ou de faute lourde de notre part.

9. RÉSOLUTION DES LITIGES

9.1 Droit Applicable

Les présentes CGU sont régies et interprétées conformément au droit français.

9.2 Médiation (Gratuit)

Conformément aux dispositions du Code de la consommation concernant le règlement amiable des litiges, en cas de litige, vous pouvez recourir gratuitement à un médiateur de la consommation :

AME Conso
11 Place Dauphine
75001 Paris
Email : contact@mediationconso-ame.com
Site : https://www.mediationconso-ame.com/

Ce dispositif de médiation est accessible après une démarche préalable écrite auprès de Yuzu Labs restée infructueuse.

9.3 Compétence Juridictionnelle

En cas d'échec de la médiation, tout litige sera soumis aux tribunaux français compétents.

Pour les consommateurs résidant dans l'Union européenne, vous bénéficiez également du droit de recourir à la plateforme européenne de résolution des litiges en ligne : https://ec.europa.eu/consumers/odr/

10. CONTACT

Pour toute question concernant les présentes CGU, vous pouvez nous contacter :

Email : motus.contactme@gmail.com
Adresse : 11 rue de Lorraine, 68490 PETIT-LANDAU, France

En utilisant l'Application Motus, vous reconnaissez avoir lu, compris et accepté les présentes Conditions Générales d'Utilisation.

Prenez soin de vous et bonne pratique ! 💙

Version 1.0 - Novembre 2025`;

const TERMS_EN = `TERMS OF SERVICE

Last updated: November 21, 2025

INTRODUCTION AND ACCEPTANCE

Welcome to Motus, a mobile application for personalized mobility and stretching exercises.

These Terms of Service ("Terms") govern access to and use of the Motus mobile application ("the App") and related services ("the Services").

By downloading, installing, or using the App, you unconditionally accept these Terms. If you do not agree to these terms, please do not use the App.

1. DEFINITIONS

• "User" or "You": any individual using the App.
• "We", "Our", "Motus": the publisher of the App (Yuzu Labs SAS).
• "Content": all information, text, images, videos, exercises, programs, and other elements available in the App.
• "Personal Data": any information that directly or indirectly identifies a User.
• "Physiotherapist" or "Physio": healthcare professional using the dedicated interface of the App.

2. APP PUBLISHER

Yuzu Labs SAS
Simplified Joint Stock Company
SIREN: 994879013
11 rue de Lorraine, 68490 PETIT-LANDAU, France
Publication Director: MEYER Raphaël
Email: motus.contactme@gmail.com

3. PURPOSE OF THE APP

Motus is an application dedicated to physical well-being and mobility that offers:

• Personalized mobility and stretching exercise programs
• Progress tracking and session history
• Recommendations based on your goals and preferences
• Reminder notifications for your sessions
• A favorites system and custom session creation
• Connection with your physiotherapist for personalized follow-up (physio mode)
• Programs prescribed by your physiotherapist

The App is designed for general wellness purposes and does not replace professional medical advice.

4. ACCESS AND USE CONDITIONS

4.1 Minimum Age

Use of the App is restricted to individuals aged 13 years or older. If you are under 18, you must obtain permission from your parents or legal guardians before using the App.

4.2 Registration and Account

During your first use, the App will ask you to provide certain information (first name, goals, preferences) to personalize your experience. This information is processed in accordance with our Privacy Policy.

An anonymous account is automatically created to sync your data. You can create a permanent account with email to secure your data.

4.3 Physiotherapist Mode

The App offers a special mode allowing patients to connect with their physiotherapist via a QR code. This feature enables:
• Sharing your progress with your physio
• Receiving personalized programs
• Reporting pain or difficulties

This connection is entirely optional and based on your explicit consent.

4.4 User Responsibility

By using the App, you agree to:

• Provide accurate and up-to-date information
• Not use the App for illegal or unauthorized purposes
• Not attempt to access other users' systems or data
• Not copy, modify, distribute, or sell any part of the App
• Not use the App in an abusive or excessive manner
• Consult a healthcare professional before starting any exercise program if you have any medical conditions

5. HEALTH AND SAFETY WARNINGS

5.1 Important Medical Disclaimer

⚠️ THE MOTUS APP IS NOT A MEDICAL DEVICE AND DOES NOT PROVIDE MEDICAL ADVICE.

The exercises offered are for general wellness purposes. They do not constitute:
• Medical diagnosis
• Therapeutic treatment
• Medical rehabilitation
• A substitute for medical consultation

Even if you use the App in connection with your physiotherapist, the exercises do not replace an in-office consultation.

5.2 Prior Medical Consultation

You should consult a physician or qualified healthcare professional before starting any exercise program if you:

• Have heart, respiratory, or circulatory problems
• Suffer from chronic or acute pain
• Have recent or old injuries
• Are pregnant or breastfeeding
• Have joint or muscle problems
• Take medications that may affect your physical capacity
• Are over 40 and have not exercised regularly recently
• Have any doubt about your ability to perform physical exercises

5.3 Safe Exercise Practice

By using the App, you acknowledge and accept that:

• You exercise AT YOUR OWN RISK
• You are solely responsible for your health and safety during practice
• You must STOP IMMEDIATELY any exercise in case of pain, dizziness, shortness of breath, or discomfort
• You must adapt exercises to your level and never push too hard
• You must practice in a safe and suitable environment
• You must stay properly hydrated before, during, and after exercises

5.4 Health Liability Limitation

To the extent permitted by law, Motus cannot be held liable for:

• Any injury, pain, or health problem resulting from using the App
• Any worsening of a pre-existing medical condition
• Any physical or psychological damage related to exercise practice
• Any errors in exercise execution by the User
• Any delay or absence of professional medical consultation

You acknowledge that physical exercise carries inherent risks and accept these risks by using the App.

6. INTELLECTUAL PROPERTY

6.1 Motus's Rights

All elements of the App (design, text, images, videos, illustrations, exercises, algorithms, database, source code, etc.) are protected by intellectual property rights and belong to Yuzu Labs or its partners.

Any unauthorized reproduction, representation, modification, distribution, or exploitation of all or part of the App is strictly prohibited and constitutes infringement.

6.2 Limited Use License

We grant you a personal, non-exclusive, non-transferable, and revocable license to use the App for personal purposes only.

This license does not confer any ownership rights over the App.

7. PERSONAL DATA PROTECTION

The processing of your Personal Data is described in detail in our Privacy Policy, available in the App.

Main data collected:
• First name
• Age and gender (optional)
• Wellness goals (flexibility, posture, etc.)
• Session history and completed exercises
• App preferences and settings
• Technical data (device version, operating system)
• Physio follow-up data (if mode enabled)

Your data is securely hosted in the European Union and processed in compliance with GDPR.

8. LIMITATION OF LIABILITY

8.1 App Content

The App is provided "as is" without warranty of any kind, express or implied.

8.2 Excluded Damages

To the extent permitted by applicable law, we shall not be liable for any damages:
• Direct, indirect, incidental, special, or consequential
• Loss of data, profits, or reputation
• Business interruption
• Resulting from the use or inability to use the App
• Resulting from physical injury related to exercise practice

8.3 Maximum Amount

If our liability were to be engaged, the total amount of damages could not exceed 100 euros, except in case of willful misconduct or gross negligence on our part.

9. DISPUTE RESOLUTION

9.1 Applicable Law

These Terms are governed by and construed in accordance with French law.

9.2 Mediation (Free)

In accordance with the provisions of the Consumer Code concerning amicable settlement of disputes, in case of dispute, you may use a consumer mediator free of charge:

AME Conso
11 Place Dauphine
75001 Paris
Email: contact@mediationconso-ame.com
Website: https://www.mediationconso-ame.com/

This mediation service is accessible after a prior written approach to Yuzu Labs has been unsuccessful.

9.3 Jurisdiction

If mediation fails, any dispute will be submitted to the competent French courts.

For consumers residing in the European Union, you also have the right to use the European online dispute resolution platform: https://ec.europa.eu/consumers/odr/

10. CONTACT

For any questions regarding these Terms, you can contact us:

Email: motus.contactme@gmail.com
Address: 11 rue de Lorraine, 68490 PETIT-LANDAU, France

By using the Motus App, you acknowledge that you have read, understood, and accepted these Terms of Service.

Take care of yourself and enjoy your practice! 💙

Version 1.0 - November 2025`;

export default async function MotusTermsPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  
  const content = locale === 'fr' ? TERMS_FR : TERMS_EN;
  const title = locale === 'fr' ? "Conditions Générales d'Utilisation" : 'Terms of Service';
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
          Yuzu Labs SAS - SIREN 994879013
        </p>
      </div>
    </div>
  );
}

