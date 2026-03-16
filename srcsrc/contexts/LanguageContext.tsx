import { createContext, useContext, useState, ReactNode } from 'react';

export type Lang = 'en' | 'hi' | 'te';

// ─── Translations ────────────────────────────────────────────────────────────
export const TRANSLATIONS = {
    en: {
        // Sidebar
        overview: 'Overview',
        nutrition: 'Nutrition',
        healthReports: 'Health Reports',
        stressTracker: 'Stress Tracker',
        recommendations: 'Recommendations',
        dailyCheckIn: 'Daily Check-In',
        feedback: 'Feedback',
        chat: 'Chat',
        profile: 'Profile',
        logout: 'Logout',
        minimize: 'Minimize',
        // Navbar
        searchPlaceholder: 'Search',
        notifications: 'Notifications',
        // Common
        save: 'Save Changes',
        saved: '✅ Saved!',
        signOut: 'Sign Out',
        darkMode: 'Dark Mode',
        lightMode: 'Light Mode',
        toggleTheme: 'Toggle theme appearance',
        pushNotifications: 'Push Notifications',
        healthReminders: 'Health reminders and updates',
        languagePreference: 'Language Preference',
        personalInfo: 'Personal Information',
        fullName: 'Full Name',
        email: 'Email',
        appPreferences: 'App Preferences',
        profileSettings: 'Profile & Settings',
        manageProfile: 'Manage your personal information and preferences',
        premiumMember: 'Premium Member',
        // Overview
        goodMorning: 'Good Morning',
        wellnessScore: 'Wellness Score',
        keepIt: 'Keep it up!',
        stressLevel: 'Stress Level',
        moderate: 'Moderate',
        hydration: 'Hydration',
        dailyGoal: 'Daily Goal',
        mood: 'Mood',
        todaysMood: "Today's Mood",
        quickActions: 'Quick Actions',
        startCheckIn: 'Start Check-In',
        logMeal: 'Log a Meal',
        breathe: 'Breathe',
        chatWithAI: 'Chat with AI',
        recentActivity: 'Recent Activity',
        wellnessTip: 'Wellness Tip',
        // Health Reports
        healthReportsTitle: 'Health Reports',
        viewAnalyse: 'View, analyse and export your health history',
        // Stress Tracker
        stressTrackerTitle: 'Stress Tracker',
        monitorStress: 'Monitor and manage your stress levels',
        // Feedback
        feedbackTitle: 'Your Feedback',
        shareFeedback: 'Share your experience with WellBot',
        // Recommendations
        recommendationsTitle: 'Recommendations',
        personalised: 'Personalised wellness suggestions for you',
        // Daily Check-In
        dailyCheckInTitle: 'Daily Check-In',
        howAreYou: 'How are you feeling today?',
        // Chat
        chatTitle: 'WellBot Chat',
        chatSub: 'Click the chat bubble at the bottom-right to open your AI assistant',
        // Auth — Sign In
        welcomeBack: 'Welcome Back',
        signInContinue: 'Sign in to continue your wellness journey.',
        emailAddress: 'Email Address',
        password: 'Password',
        forgotPassword: 'Forgot Password?',
        signIn: 'Sign In',
        signingIn: 'Signing In...',
        orContinue: 'Or',
        continueWithGoogle: 'Continue with Google',
        noAccount: "Don't have an account?",
        resetPassword: 'Reset Password',
        enterEmailReset: 'Enter your email to receive a reset link.',
        sendResetLink: 'Send Reset Link',
        checkEmail: 'Check Your Email',
        backToSignIn: '← Back to Sign In',
        // Auth — Sign Up
        createAccount: 'Create Account',
        joinCommunity: 'Join our wellness community today.',
        fullName: 'Full Name',
        preferredLanguage: 'Preferred Language',
        agreeToTerms: "I agree to WellBot's",
        termsOfService: 'Terms of Service',
        privacyPolicy: 'Privacy Policy',
        createAccBtn: 'Create Account',
        creatingAccount: 'Creating Account...',
        alreadyHaveAccount: 'Already have an account?',
        enterPassword: 'Enter your password',
        createPassword: 'Create a strong password',
        yourFullName: 'Your full name',
        wellnessCompanion: 'Your personal wellness companion',
        joinThousands: "Join thousands who've transformed their health with AI-powered insights.",
        welcomeBackPanel: 'Welcome back! We missed you.',
        journeyContinues: 'Your wellness journey continues here. Let\'s check in on your health today.',
    },
    hi: {
        // Sidebar
        overview: 'अवलोकन',
        nutrition: 'पोषण',
        healthReports: 'स्वास्थ्य रिपोर्ट',
        stressTracker: 'तनाव ट्रैकर',
        recommendations: 'सिफारिशें',
        dailyCheckIn: 'दैनिक चेक-इन',
        feedback: 'प्रतिक्रिया',
        chat: 'चैट',
        profile: 'प्रोफ़ाइल',
        logout: 'लॉग आउट',
        minimize: 'छोटा करें',
        // Navbar
        searchPlaceholder: 'खोजें',
        notifications: 'सूचनाएं',
        // Common
        save: 'सहेजें',
        saved: '✅ सहेजा गया!',
        signOut: 'साइन आउट',
        darkMode: 'डार्क मोड',
        lightMode: 'लाइट मोड',
        toggleTheme: 'थीम बदलें',
        pushNotifications: 'पुश सूचनाएं',
        healthReminders: 'स्वास्थ्य अनुस्मारक और अपडेट',
        languagePreference: 'भाषा प्राथमिकता',
        personalInfo: 'व्यक्तिगत जानकारी',
        fullName: 'पूरा नाम',
        email: 'ईमेल',
        appPreferences: 'ऐप प्राथमिकताएं',
        profileSettings: 'प्रोफ़ाइल और सेटिंग्स',
        manageProfile: 'अपनी व्यक्तिगत जानकारी और प्राथमिकताएं प्रबंधित करें',
        premiumMember: 'प्रीमियम सदस्य',
        // Overview
        goodMorning: 'शुभ प्रभात',
        wellnessScore: 'वेलनेस स्कोर',
        keepIt: 'बढ़िया काम!',
        stressLevel: 'तनाव स्तर',
        moderate: 'मध्यम',
        hydration: 'जलयोजन',
        dailyGoal: 'दैनिक लक्ष्य',
        mood: 'मूड',
        todaysMood: 'आज का मूड',
        quickActions: 'त्वरित क्रियाएं',
        startCheckIn: 'चेक-इन शुरू करें',
        logMeal: 'भोजन लॉग करें',
        breathe: 'सांस लें',
        chatWithAI: 'AI से चैट करें',
        recentActivity: 'हाल की गतिविधि',
        wellnessTip: 'वेलनेस टिप',
        // Health Reports
        healthReportsTitle: 'स्वास्थ्य रिपोर्ट',
        viewAnalyse: 'अपना स्वास्थ्य इतिहास देखें और निर्यात करें',
        // Stress Tracker
        stressTrackerTitle: 'तनाव ट्रैकर',
        monitorStress: 'अपने तनाव के स्तर की निगरानी करें',
        // Feedback
        feedbackTitle: 'आपकी प्रतिक्रिया',
        shareFeedback: 'WellBot के साथ अपना अनुभव साझा करें',
        // Recommendations
        recommendationsTitle: 'सिफारिशें',
        personalised: 'आपके लिए व्यक्तिगत वेलनेस सुझाव',
        // Daily Check-In
        dailyCheckInTitle: 'दैनिक चेक-इन',
        howAreYou: 'आज आप कैसा महसूस कर रहे हैं?',
        // Chat
        chatTitle: 'WellBot चैट',
        chatSub: 'अपना AI असिस्टेंट खोलने के लिए नीचे-दाईं ओर चैट बुलबुले पर क्लिक करें',
        // Auth — Sign In
        welcomeBack: 'वापसी पर स्वागत है',
        signInContinue: 'अपनी वेलनेस यात्रा जारी रखने के लिए साइन इन करें।',
        emailAddress: 'ईमेल पता',
        password: 'पासवर्ड',
        forgotPassword: 'पासवर्ड भूल गए?',
        signIn: 'साइन इन करें',
        signingIn: 'साइन इन हो रहा है...',
        orContinue: 'या',
        continueWithGoogle: 'Google से जारी रखें',
        noAccount: 'खाता नहीं है?',
        resetPassword: 'पासवर्ड रीसेट करें',
        enterEmailReset: 'रीसेट लिंक प्राप्त करने के लिए अपना ईमेल दर्ज करें।',
        sendResetLink: 'रीसेट लिंक भेजें',
        checkEmail: 'अपना ईमेल जाँचें',
        backToSignIn: '← साइन इन पर वापस',
        // Auth — Sign Up
        createAccount: 'खाता बनाएं',
        joinCommunity: 'आज हमारी वेलनेस कम्युनिटी से जुड़ें।',
        fullName: 'पूरा नाम',
        preferredLanguage: 'पसंदीदा भाषा',
        agreeToTerms: 'मैं WellBot की सहमति देता/देती हूं',
        termsOfService: 'सेवा की शर्तें',
        privacyPolicy: 'गोपनीयता नीति',
        createAccBtn: 'खाता बनाएं',
        creatingAccount: 'खाता बन रहा है...',
        alreadyHaveAccount: 'पहले से खाता है?',
        enterPassword: 'अपना पासवर्ड दर्ज करें',
        createPassword: 'एक मज़बूत पासवर्ड बनाएं',
        yourFullName: 'आपका पूरा नाम',
        wellnessCompanion: 'आपका व्यक्तिगत वेलनेस साथी',
        joinThousands: 'हजारों लोगों के साथ जुड़ें जिन्होंने AI-संचालित अंतर्दृष्टि से अपना स्वास्थ्य बदला।',
        welcomeBackPanel: 'वापसी पर स्वागत! हमने आपको याद किया।',
        journeyContinues: 'आपकी वेलनेस यात्रा यहाँ जारी है। आज अपने स्वास्थ्य की जाँच करते हैं।',
    },
    te: {
        // Sidebar
        overview: 'అవలోకనం',
        nutrition: 'పోషణ',
        healthReports: 'ఆరోగ్య నివేదికలు',
        stressTracker: 'స్ట్రెస్ ట్రాకర్',
        recommendations: 'సిఫారసులు',
        dailyCheckIn: 'రోజువారీ చెక్-ఇన్',
        feedback: 'అభిప్రాయం',
        chat: 'చాట్',
        profile: 'ప్రొఫైల్',
        logout: 'లాగ్ అవుట్',
        minimize: 'చిన్నదిగా చేయి',
        // Navbar
        searchPlaceholder: 'వెతకండి',
        notifications: 'నోటిఫికేషన్లు',
        // Common
        save: 'సేవ్ చేయండి',
        saved: '✅ సేవ్ అయింది!',
        signOut: 'సైన్ అవుట్',
        darkMode: 'డార్క్ మోడ్',
        lightMode: 'లైట్ మోడ్',
        toggleTheme: 'థీమ్ మార్చండి',
        pushNotifications: 'పుష్ నోటిఫికేషన్లు',
        healthReminders: 'ఆరోగ్య రిమైండర్లు మరియు అప్‌డేట్‌లు',
        languagePreference: 'భాషా ప్రాధాన్యత',
        personalInfo: 'వ్యక్తిగత సమాచారం',
        fullName: 'పూర్తి పేరు',
        email: 'ఇమెయిల్',
        appPreferences: 'యాప్ ప్రాధాన్యతలు',
        profileSettings: 'ప్రొఫైల్ & సెట్టింగ్‌లు',
        manageProfile: 'మీ వ్యక్తిగత సమాచారం మరియు ప్రాధాన్యతలను నిర్వహించండి',
        premiumMember: 'ప్రీమియం సభ్యుడు',
        // Overview
        goodMorning: 'శుభోదయం',
        wellnessScore: 'వెల్‌నెస్ స్కోర్',
        keepIt: 'అద్భుతం!',
        stressLevel: 'స్ట్రెస్ స్థాయి',
        moderate: 'మధ్యస్థం',
        hydration: 'హైడ్రేషన్',
        dailyGoal: 'రోజువారీ లక్ష్యం',
        mood: 'మూడ్',
        todaysMood: 'నేటి మూడ్',
        quickActions: 'త్వరిత చర్యలు',
        startCheckIn: 'చెక్-ఇన్ ప్రారంభించండి',
        logMeal: 'భోజనం లాగ్ చేయండి',
        breathe: 'శ్వాస తీసుకోండి',
        chatWithAI: 'AI తో చాట్ చేయండి',
        recentActivity: 'ఇటీవలి కార్యకలాపాలు',
        wellnessTip: 'వెల్‌నెస్ టిప్',
        // Health Reports
        healthReportsTitle: 'ఆరోగ్య నివేదికలు',
        viewAnalyse: 'మీ ఆరోగ్య చరిత్రను చూడండి మరియు ఎగుమతి చేయండి',
        // Stress Tracker
        stressTrackerTitle: 'స్ట్రెస్ ట్రాకర్',
        monitorStress: 'మీ స్ట్రెస్ స్థాయిలను పర్యవేక్షించండి',
        // Feedback
        feedbackTitle: 'మీ అభిప్రాయం',
        shareFeedback: 'WellBot తో మీ అనుభవాన్ని పంచుకోండి',
        // Recommendations
        recommendationsTitle: 'సిఫారసులు',
        personalised: 'మీ కోసం వ్యక్తిగతీకరించిన వెల్‌నెస్ సూచనలు',
        // Daily Check-In
        dailyCheckInTitle: 'రోజువారీ చెక్-ఇన్',
        howAreYou: 'ఈరోజు మీరు ఎలా అనుభవిస్తున్నారు?',
        // Chat
        chatTitle: 'WellBot చాట్',
        chatSub: 'మీ AI అసిస్టెంట్‌ని తెరవడానికి కింది-కుడి వైపు చాట్ బుల్లెట్‌పై క్లిక్ చేయండి',
        // Auth — Sign In
        welcomeBack: 'తిరిగి స్వాగతం',
        signInContinue: 'మీ వెల్‌నెస్ ప్రయాణాన్ని కొనసాగించడానికి సైన్ ఇన్ చేయండి.',
        emailAddress: 'ఇమెయిల్ చిరునామా',
        password: 'పాస్‌వర్డ్',
        forgotPassword: 'పాస్‌వర్డ్ మర్చిపోయారా?',
        signIn: 'సైన్ ఇన్ చేయండి',
        signingIn: 'సైన్ ఇన్ అవుతోంది...',
        orContinue: 'లేదా',
        continueWithGoogle: 'Google తో కొనసాగండి',
        noAccount: 'ఖాతా లేదా?',
        resetPassword: 'పాస్‌వర్డ్ రీసెట్ చేయండి',
        enterEmailReset: 'రీసెట్ లింక్ పొందడానికి మీ ఇమెయిల్ నమోదు చేయండి.',
        sendResetLink: 'రీసెట్ లింక్ పంపండి',
        checkEmail: 'మీ ఇమెయిల్ తనిఖీ చేయండి',
        backToSignIn: '← సైన్ ఇన్ కి తిరిగి',
        // Auth — Sign Up
        createAccount: 'ఖాతా సృష్టించండి',
        joinCommunity: 'ఈరోజు మా వెల్‌నెస్ కమ్యూనిటీలో చేరండి.',
        fullName: 'పూర్తి పేరు',
        preferredLanguage: 'ఇష్టపడే భాష',
        agreeToTerms: 'నేను WellBot కి అంగీకరిస్తున్నాను',
        termsOfService: 'సేవా నిబంధనలు',
        privacyPolicy: 'గోపనీయతా విధానం',
        createAccBtn: 'ఖాతా సృష్టించండి',
        creatingAccount: 'ఖాతా సృష్టిస్తోంది...',
        alreadyHaveAccount: 'ఇప్పటికే ఖాతా ఉందా?',
        enterPassword: 'మీ పాస్‌వర్డ్ నమోదు చేయండి',
        createPassword: 'బలమైన పాస్‌వర్డ్ సృష్టించండి',
        yourFullName: 'మీ పూర్తి పేరు',
        wellnessCompanion: 'మీ వ్యక్తిగత వెల్‌నెస్ సహచరుడు',
        joinThousands: 'AI-ఆధారిత అంతర్దృష్టులతో తమ ఆరోగ్యాన్ని మార్చుకున్న వేల మందిలో చేరండి.',
        welcomeBackPanel: 'తిరిగి స్వాగతం! మేము మిమ్మల్ని మిస్ చేసాం.',
        journeyContinues: 'మీ వెల్‌నెస్ ప్రయాణం ఇక్కడ కొనసాగుతుంది. ఈరోజు మీ ఆరోగ్యాన్ని తనిఖీ చేద్దాం.',
    },
} as const;

export type TranslationKey = keyof typeof TRANSLATIONS.en;

// ─── Context ─────────────────────────────────────────────────────────────────
interface LanguageContextType {
    lang: Lang;
    setLang: (l: Lang) => void;
    t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType>({
    lang: 'en',
    setLang: () => { },
    t: (key) => TRANSLATIONS.en[key],
});

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>('en');
    const t = (key: TranslationKey): string => TRANSLATIONS[lang][key] as string;
    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
