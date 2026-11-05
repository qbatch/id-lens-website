import { appNameShort } from './brand';

export const privacySections = [
  {
    title: 'Overview',
    body: `${appNameShort} makes ID and visa photos on your phone. This policy explains what the app does with your data.`,
  },
  {
    title: 'Photos',
    body: 'Every photo you take or import is processed on your phone. No photo, mask or face data is uploaded, and every photo feature works in airplane mode.',
  },
  {
    title: 'What is stored',
    body: "Photos you save, with their edit settings, your recent sizes and your settings are kept in the app's encrypted storage on your device. Settings → Delete all data removes all of it. Copies you saved outside the app remain on your device until you delete them there.",
  },
  {
    title: 'Usage stats',
    body: 'Only if you tap "Agree and continue", the app may send anonymous crash reports and usage data to help improve the app. These never include images. In basic mode, or after you turn off "Share anonymous usage stats" in Settings, nothing is sent.',
  },
  {
    title: 'Permissions',
    body: 'The app asks only for the camera, and only when you open the camera.',
  },
  {
    title: 'No account, no ads, no payments',
    body: `${appNameShort} is free to use with no advertising and no in-app purchases.`,
  },
] as const;

export const termsSections = [
  {
    title: 'Agreement',
    body: `${appNameShort} is free to use. By using the app or this website, you agree to these terms.`,
  },
  {
    title: 'Use',
    body: `Use ${appNameShort} to make photos of yourself, or of others with their permission, for official documents.`,
  },
  {
    title: 'Specs',
    body: 'Photo rules come from the authorities named on each spec and were checked on the date shown. Authorities can change their rules; check the official requirements before you submit a photo.',
  },
  {
    title: 'Results',
    body: 'The app checks each photo against the spec, but the final decision rests with the authority or print shop that receives it.',
  },
  {
    title: 'Your data',
    body: 'Your data stays on your device, as described in the privacy policy.',
  },
] as const;

export const supportFaqs = [
  {
    question: 'Do my photos leave my phone?',
    answer:
      `No. ${appNameShort} processes every photo on your device. Nothing is uploaded to our servers, and the app works fully in airplane mode.`,
  },
  {
    question: 'Which document sizes are supported?',
    answer:
      `${appNameShort} includes a catalog of passport, visa, exam, and general ID specs. Search by name or dimensions, or browse by category in the app.`,
  },
  {
    question: 'How do I delete my data?',
    answer:
      'Open Settings → Delete all data in the app to remove saved photos, recent sizes, and settings from encrypted on-device storage. Photos you exported outside the app remain on your device until you delete them there.',
  },
  {
    question: 'What are anonymous usage stats?',
    answer:
      'If you opt in, the app may send anonymous crash reports and basic usage metrics. These reports never include images. You can use basic mode or turn off stats anytime in Settings.',
  },
  {
    question: 'Will my photo be accepted by the authority?',
    answer:
      `${appNameShort} checks your photo against the spec rules, but the final decision rests with the authority or print shop that receives it. Requirements can change—always confirm official requirements before submitting.`,
  },
] as const;

export const supportEmail = 'support@passportphotofit.app';
