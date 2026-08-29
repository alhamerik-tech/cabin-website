/* ===================================================================
   WASEL — bilingual EN/AR engine, request form, WSL tracking, theme
   =================================================================== */
(function () {
  'use strict';

  /* ---------- Mashrabiya motif (inline SVG data URL) ---------- */
  const MOTIF =
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Cg fill='none' stroke='%237a2230' stroke-width='1.4'%3E%3Cpath d='M32 4l20 20-20 20L12 24z'/%3E%3Cpath d='M32 20l8 8-8 8-8-8z'/%3E%3Ccircle cx='32' cy='28' r='3'/%3E%3C/g%3E%3C/svg%3E\")";
  document.documentElement.style.setProperty('--motif-url', MOTIF);

  /* ---------- Translations ---------- */
  const I18N = {
    brand_name: { en: 'Wasel', ar: 'وصل' },
    brand_sub: { en: 'Typing & Transaction Center', ar: 'مركز الطباعة والمعاملات' },

    lang_label: { en: 'ع', ar: 'EN' },

    nav_services: { en: 'Services', ar: 'الخدمات' },
    nav_packages: { en: 'Packages', ar: 'الباقات' },
    nav_request: { en: 'Request', ar: 'طلب' },
    nav_track: { en: 'Track', ar: 'تتبع' },
    nav_contact: { en: 'Contact', ar: 'تواصل' },
    nav_cta: { en: 'Start a request', ar: 'ابدأ طلبًا' },

    hero_eyebrow: { en: 'UAE Transaction Support Center', ar: 'مركز دعم المعاملات في الإمارات' },
    hero_title: { en: 'Your transactions, <em>handled with care.</em>', ar: 'معاملاتك، <em> بعناية تامة.</em>' },
    hero_lead: {
      en: "From residence visa renewals and Emirates ID to labour and visa transactions — Wasel prepares, types, and follows up your paperwork so you don't have to. Clear steps, honest updates, real follow-up.",
      ar: 'من تجديد إقامات وبطاقات الهوية إلى معاملات العمل والتأشيرات — يُعدّ وصل، ويطبع، ويتابع أوراقك نيابةً عنك. خطوات واضحة، تحديثات صادقة، ومتابعة حقيقية.',
    },
    hero_cta_primary: { en: 'Start a request', ar: 'ابدأ طلبًا' },
    hero_cta_secondary: { en: 'Explore services', ar: 'استكشف الخدمات' },
    hero_badge_title: { en: 'Trusted locally', ar: 'ثقة محلية' },
    hero_badge_sub: { en: 'Prepared in the UAE · Followed up with care', ar: 'إعداد محلي · متابعة بعناية' },

    trust_1_num: { en: 'UAE-based', ar: 'محلي' },
    trust_1: { en: 'Local support team you can reach', ar: 'فريق دعم محلي في متناولك' },
    trust_2_num: { en: '6+', ar: '+6' },
    trust_2: { en: 'Government-related transaction types', ar: 'أنواع معاملات حكومية' },
    trust_3_num: { en: 'EN / AR', ar: 'ع / EN' },
    trust_3: { en: 'Bilingual service in Arabic & English', ar: 'خدمة ثنائية اللغة عربي وإنجليزي' },
    trust_4_num: { en: 'WSL', ar: 'WSL' },
    trust_4: { en: 'Reference number for every request', ar: 'رقم مرجعي لكل طلب' },

    process_eyebrow: { en: 'How Wasel works', ar: 'كيف يعمل وصل' },
    process_title: { en: 'A clear path from paperwork to follow-up', ar: 'مسار واضح من الأوراق إلى المتابعة' },
    process_lead: {
      en: 'Wasel assists with preparing, typing, and following up your transactions. Final approvals and issuance remain with the relevant UAE government authorities.',
      ar: 'يساعد وصل في إعداد وتطبيع ومتابعة معاملاتك. تبقى الموافقات النهائية والإصدار لدى الجهات الحكومية الإماراتية المختصة.',
    },
    step_1_title: { en: 'Tell us what you need', ar: 'أخبرنا بما تحتاجه' },
    step_1_desc: { en: 'Choose a service, share your details, and upload your documents through the request form.', ar: 'اختر الخدمة، شارك بياناتك، وارفع مستنداتك عبر نموذج الطلب.' },
    step_2_title: { en: 'We prepare & type', ar: 'نُعدّ ونطبع' },
    step_2_desc: { en: 'Our team reviews your paperwork, types the required forms, and prepares your transaction for submission.', ar: 'يراجع فريقنا أوراقك، يطبع النماذج المطلوبة، ويُجهّز معاملتك للتقديم.' },
    step_3_title: { en: 'We follow up', ar: 'نتابع' },
    step_3_desc: { en: 'We track progress and keep you updated at every stage using your WSL reference number.', ar: 'نتابع التقدم ونُبقيك على اطلاع في كل مرحلة عبر رقمك المرجعي WSL.' },
    step_4_title: { en: 'You stay informed', ar: 'تبقى على اطلاع' },
    step_4_desc: { en: 'Approvals and issuance are handled by the relevant UAE authorities — we make sure you always know where things stand.', ar: 'تتولى الجهات الإماراتية المختصة الموافقات والإصدار — نتأكد أنك تعلم دائمًا أين وصلت الأمور.' },

    services_eyebrow: { en: 'What we assist with', ar: 'ما نساعدك به' },
    services_title: { en: 'Services for individuals & businesses', ar: 'خدمات للأفراد والشركات' },
    services_lead: {
      en: "Whether you're renewing a single visa or managing transactions for a growing team, Wasel handles the typing, preparation, and follow-up.",
      ar: 'سواء كنت تجدد تأشيرة واحدة أو تدير معاملات لفريق متنامٍ، يتولى وصل الطباعة والإعداد والمتابعة.',
    },
    svc_visa_tag: { en: 'Individuals', ar: 'أفراد' },
    svc_visa_title: { en: 'Residence Visa Renewals', ar: 'تجديد إقامات' },
    svc_visa_desc: { en: 'Preparation and typing support for residence visa renewal applications and related paperwork.', ar: 'دعم إعداد وطباعة طلبات تجديد الإقامة والأوراق ذات الصلة.' },
    svc_eid_tag: { en: 'Individuals', ar: 'أفراد' },
    svc_eid_title: { en: 'Emirates ID Applications & Renewals', ar: 'بطاقات الهوية — إصدار وتجديد' },
    svc_eid_desc: { en: 'Document typing and form preparation for Emirates ID applications and renewals.', ar: 'طباعة المستندات وإعداد النماذج لطلبات بطاقة الهوية وتجديدها.' },
    svc_visa2_tag: { en: 'Individuals', ar: 'أفراد' },
    svc_visa2_title: { en: 'Visa Transactions', ar: 'معاملات التأشيرات' },
    svc_visa2_desc: { en: 'Typing and follow-up support for entry, change of status, and other visa-related transactions.', ar: 'دعم طباعة ومتابعة الدخول وتغيير الحالة وغيرها من معاملات التأشيرات.' },
    svc_labour_tag: { en: 'Businesses', ar: 'شركات' },
    svc_labour_title: { en: 'Labour-Related Transactions', ar: 'معاملات العمل' },
    svc_labour_desc: { en: 'Support with labour contract typing, work-permit-related forms, and employment transaction follow-up.', ar: 'دعم طباعة عقود العمل ونماذج تصاريح العمل ومتابعة معاملات الموظفين.' },
    svc_typing_tag: { en: 'On-site', ar: 'في المركز' },
    svc_typing_title: { en: 'Document Typing & Photocopying', ar: 'طباعة وتصوير المستندات' },
    svc_typing_desc: { en: 'Accurate typing, photocopying, and document preparation for official and personal paperwork.', ar: 'طباعة دقيقة وتصوير وإعداد مستندات للأوراق الرسمية والشخصية.' },
    svc_followup_tag: { en: 'Follow-up', ar: 'متابعة' },
    svc_followup_title: { en: 'Transaction Follow-up', ar: 'متابعة المعاملات' },
    svc_followup_desc: { en: 'We follow up on submitted transactions and keep you updated using your WSL reference number.', ar: 'نتابع المعاملات المقدمة ونُبقيك على اطلاع عبر رقمك المرجعي WSL.' },

    pkg_eyebrow: { en: 'For businesses', ar: 'للشركات' },
    pkg_title: { en: 'Corporate packages with prepaid credits', ar: 'باقات مؤسسية برصيد مسبق' },
    pkg_lead: {
      en: 'Built for small and growing businesses managing recurring employee transactions. Prepaid credits, dedicated support, and predictable pricing.',
      ar: 'مصممة للشركات الصغيرة والمتنامية التي تدير معاملات موظفين متكررة. رصيد مسبق، دعم مخصص، وأسعار واضحة.',
    },
    pkg_per_year: { en: '/ year', ar: '/ سنويًا' },
    pkg_basic_name: { en: 'Basic', ar: 'الأساسية' },
    pkg_basic_credits: { en: '15 transaction credits', ar: '15 رصيد معاملة' },
    pkg_basic_f1: { en: 'Document typing & photocopying', ar: 'طباعة وتصوير المستندات' },
    pkg_basic_f2: { en: 'Email & WhatsApp support', ar: 'دعم عبر البريد وواتساب' },
    pkg_basic_f3: { en: 'WSL reference tracking', ar: 'تتبع برقم WSL' },
    pkg_silver_name: { en: 'Silver', ar: 'الفضية' },
    pkg_silver_credits: { en: '40 transaction credits', ar: '40 رصيد معاملة' },
    pkg_silver_f1: { en: 'Everything in Basic', ar: 'كل ما في الأساسية' },
    pkg_silver_f2: { en: 'Visa & labour transaction support', ar: 'دعم معاملات التأشيرات والعمل' },
    pkg_silver_f3: { en: 'Priority follow-up', ar: 'متابعة ذات أولوية' },
    pkg_silver_f4: { en: 'Dedicated relationship contact', ar: 'مسؤول علاقات مخصص' },
    pkg_gold_name: { en: 'Gold', ar: 'الذهبية' },
    pkg_gold_credits: { en: '100 transaction credits', ar: '100 رصيد معاملة' },
    pkg_gold_f1: { en: 'Everything in Silver', ar: 'كل ما في الفضية' },
    pkg_gold_f2: { en: 'Emirates ID & multi-employee support', ar: 'دعم بطاقة الهوية ومتعدد الموظفين' },
    pkg_gold_f3: { en: 'Express follow-up & reminders', ar: 'متابعة فائقة وتذكيرات' },
    pkg_gold_f4: { en: 'Quarterly transaction review', ar: 'مراجعة ربع سنوية للمعاملات' },
    pkg_choose: { en: 'Choose Basic', ar: 'اختر الأساسية' },
    pkg_choose_silver: { en: 'Choose Silver', ar: 'اختر الفضية' },
    pkg_choose_gold: { en: 'Choose Gold', ar: 'اختر الذهبية' },
    pkg_note: {
      en: 'Credits are used across eligible typing and transaction services. Final government fees, where applicable, are paid separately to the relevant authorities.',
      ar: 'تُستخدم الأرصدة عبر خدمات الطباعة والمعاملات المؤهلة. تُدفع الرسوم الحكومية النهائية، عند وجودها، بشكل منفصل للجهات المختصة.',
    },

    portal_eyebrow: { en: 'Online request', ar: 'طلب إلكتروني' },
    portal_title: { en: 'Submit a service request', ar: 'قدّم طلب خدمة' },
    portal_lead: {
      en: "Share your details and upload your documents. We'll review, prepare, and follow up — and you'll get a WSL reference number to track progress.",
      ar: 'شارك بياناتك وارفع مستنداتك. سنراجع، ونُعدّ، ونتابع — وستحصل على رقم مرجعي WSL لتتبع التقدم.',
    },
    form_title: { en: 'Service request', ar: 'طلب خدمة' },
    form_sub: { en: 'All fields marked are required', ar: 'جميع الحقول المُؤشرة مطلوبة' },
    form_first: { en: 'First name', ar: 'الاسم الأول' },
    form_last: { en: 'Last name', ar: 'اسم العائلة' },
    form_phone: { en: 'Mobile (WhatsApp)', ar: 'الجوال (واتساب)' },
    form_email: { en: 'Email', ar: 'البريد الإلكتروني' },
    form_service: { en: 'Service needed', ar: 'الخدمة المطلوبة' },
    form_details: { en: 'Additional details', ar: 'تفاصيل إضافية' },
    form_docs: { en: 'Upload documents', ar: 'رفع المستندات' },
    form_submit: { en: 'Submit request', ar: 'إرسال الطلب' },

    ph_first: { en: 'e.g. Ahmed', ar: 'مثال: أحمد' },
    ph_last: { en: 'e.g. Al Mansoori', ar: 'مثال: المنصوري' },
    ph_phone: { en: '+971 50 123 4567', ar: '+971 50 123 4567' },
    ph_email: { en: 'you@example.com', ar: 'you@example.com' },
    ph_service: { en: 'Select a service', ar: 'اختر خدمة' },
    ph_details: { en: 'Tell us about your request, number of employees, urgency, etc.', ar: 'أخبرنا عن طلبك، عدد الموظفين، مدى الإلحاح، إلخ.' },
    ph_track: { en: 'e.g. WSL-2026-1048', ar: 'مثال: WSL-2026-1048' },

    opt_default: { en: 'Select a service', ar: 'اختر خدمة' },
    opt_visa: { en: 'Residence visa renewal', ar: 'تجديد الإقامة' },
    opt_eid: { en: 'Emirates ID application / renewal', ar: 'إصدار / تجديد بطاقة الهوية' },
    opt_visa2: { en: 'Visa transaction', ar: 'معاملة تأشيرة' },
    opt_labour: { en: 'Labour-related transaction', ar: 'معاملة عمل' },
    opt_typing: { en: 'Document typing & photocopying', ar: 'طباعة وتصوير المستندات' },
    opt_followup: { en: 'Transaction follow-up', ar: 'متابعة معاملة' },
    opt_corp: { en: 'Corporate package (Basic/Silver/Gold)', ar: 'باقة مؤسسية (أساسية/فضية/ذهبية)' },

    dz_title: { en: 'Drop files here or click to browse', ar: 'أفلت الملفات هنا أو تصفح' },
    dz_sub: { en: 'Passport copy, photo, Emirates ID — PDF, JPG, PNG (demo)', ar: 'نسخة جواز، صورة، بطاقة هوية — PDF، JPG، PNG (تجريبي)' },

    err_required: { en: 'This field is required', ar: 'هذا الحقل مطلوب' },
    err_email: { en: 'Please enter a valid email', ar: 'يرجى إدخال بريد إلكتروني صحيح' },
    err_docs: { en: 'Please upload at least one document', ar: 'يرجى رفع مستند واحد على الأقل' },

    demo_title: { en: 'Demo notice', ar: 'تنبيه تجريبي' },
    demo_body: { en: 'This is a front-end demo. Real submissions require a secure backend. Use WhatsApp for a live request — your documents are not stored on this site.', ar: 'هذه نسخة تجريبية للواجهة. تتطلب الطلبات الحقيقية خادمًا آمنًا. استخدم واتساب لطلب فعلي — لا تُخزَّن مستنداتك على هذا الموقع.' },

    track_title: { en: 'Track your request', ar: 'تتبع طلبك' },
    track_sub: { en: 'Enter your WSL reference number', ar: 'أدخل رقمك المرجعي WSL' },
    track_label: { en: 'WSL reference', ar: 'الرقم المرجعي WSL' },
    track_btn: { en: 'Track status', ar: 'تتبع الحالة' },
    track_demo_title: { en: 'Try a demo reference', ar: 'جرّب رقمًا تجريبيًا' },
    track_demo_body: { en: 'Enter WSL-2026-1048, WSL-2026-2031, or WSL-2026-3150 to see sample statuses.', ar: 'أدخل WSL-2026-1048 أو WSL-2026-2031 أو WSL-2026-3150 لرؤية حالات نموذجية.' },

    submit_success_title: { en: 'Request received', ar: 'تم استلام الطلب' },
    submit_success_body: { en: "Thank you. Your request has been logged as a demo. Save your reference and reach us on WhatsApp to proceed.", ar: 'شكرًا لك. تم تسجيل طلبك كنسخة تجريبية. احفظ رقمك المرجعي وتواصل معنا عبر واتساب للمتابعة.' },
    submit_whatsapp: { en: 'Continue on WhatsApp', ar: 'متابعة عبر واتساب' },
    not_found_title: { en: 'Reference not found', ar: 'الرقم غير موجود' },
    not_found_body: { en: "We couldn't find that reference. Try WSL-2026-1048, WSL-2026-2031, or WSL-2026-3150.", ar: 'لم نعثر على هذا الرقم. جرّب WSL-2026-1048 أو WSL-2026-2031 أو WSL-2026-3150.' },
    empty_ref: { en: 'Please enter your WSL reference', ar: 'يرجى إدخال رقمك المرجعي WSL' },

    cta_title: { en: 'Prefer to talk to a person?', ar: 'تفضّل التحدث إلى شخص؟' },
    cta_body: { en: 'Message us on WhatsApp and our team will guide you through your transaction.', ar: 'راسلنا على واتساب وسيرشدك فريقنا خلال معاملتك.' },
    cta_whatsapp: { en: 'Chat on WhatsApp', ar: 'محادثة واتساب' },
    cta_services: { en: 'View services', ar: 'عرض الخدمات' },

    footer_about: { en: 'UAE-based transaction support & typing center. We prepare, type, and follow up — so your paperwork moves.', ar: 'مركز دعم معاملات وطباعة في الإمارات. نُعدّ، ونطبع، ونتابع — لتتحرك أوراقك.' },
    footer_services: { en: 'Services', ar: 'الخدمات' },
    footer_company: { en: 'Center', ar: 'المركز' },
    footer_contact: { en: 'Contact', ar: 'تواصل' },
    footer_location: { en: 'Abu Dhabi, UAE', ar: 'أبوظبي، الإمارات' },
    footer_hours: { en: 'Sat–Thu · 8am–9pm', ar: 'السبت–الخميس · ٨ص–٩م' },
    disclaimer: {
      en: 'Wasel Typing & Transaction Center assists customers with preparing, typing, and following up transactions. Final approvals and issuance are handled by the relevant UAE government authorities. Wasel is an independent typing and support center and is not a government entity. Prices shown are illustrative; contact us for a confirmed quote.',
      ar: 'يساعد مركز وصل للطباعة والمعاملات العملاء في إعداد وطباعة ومتابعة المعاملات. تتولى الجهات الحكومية الإماراتية المختصة الموافقات النهائية والإصدار. وصل مركز طباعة ودعم مستقل وليس جهة حكومية. الأسعار المعروضة توضيحية؛ تواصل معنا لعرض سعر مؤكد.',
    },
    footer_rights: { en: '© 2026 Wasel Typing & Transaction Center. All rights reserved.', ar: '© 2026 مركز وصل للطباعة والمعاملات. جميع الحقوق محفوظة.' },
    footer_made: { en: 'Abu Dhabi · United Arab Emirates', ar: 'أبوظبي · الإمارات العربية المتحدة' },
  };

  /* ---------- Sample tracking data ---------- */
  const TRACKING = {
    'WSL-2026-1048': {
      service: { en: 'Residence visa renewal', ar: 'تجديد الإقامة' },
      status: 'progress',
      steps: [
        { key: 'received', done: true, active: false },
        { key: 'typing', done: true, active: false },
        { key: 'review', done: false, active: true },
        { key: 'authority', done: false, active: false },
      ],
    },
    'WSL-2026-2031': {
      service: { en: 'Emirates ID renewal', ar: 'تجديد بطاقة الهوية' },
      status: 'review',
      steps: [
        { key: 'received', done: true, active: false },
        { key: 'typing', done: true, active: false },
        { key: 'review', done: true, active: false },
        { key: 'authority', done: false, active: true },
      ],
    },
    'WSL-2026-3150': {
      service: { en: 'Labour transaction', ar: 'معاملة عمل' },
      status: 'ready',
      steps: [
        { key: 'received', done: true, active: false },
        { key: 'typing', done: true, active: false },
        { key: 'review', done: true, active: false },
        { key: 'authority', done: true, active: false },
      ],
    },
  };

  const STEP_LABELS = {
    received: { en: 'Request received', ar: 'تم استلام الطلب' },
    typing: { en: 'Documents typed & prepared', ar: 'تم طباعة وإعداد المستندات' },
    review: { en: 'Under review / follow-up', ar: 'قيد المراجعة / المتابعة' },
    authority: { en: 'With relevant authority', ar: 'لدى الجهة المختصة' },
  };

  const STATUS_LABEL = {
    progress: { en: 'In progress', ar: 'قيد التقدم' },
    review: { en: 'Under review', ar: 'قيد المراجعة' },
    ready: { ar: 'جاهز', en: 'Ready' },
  };

  /* ---------- Language state ---------- */
  let lang = 'en';
  const root = document.documentElement;

  function applyLang(l) {
    lang = l;
    root.setAttribute('lang', l);
    root.setAttribute('dir', l === 'ar' ? 'rtl' : 'ltr');
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const entry = I18N[key];
      if (entry) el.innerHTML = entry[l];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach((el) => {
      const key = el.getAttribute('data-i18n-ph');
      const entry = I18N[key];
      if (entry) el.setAttribute('placeholder', entry[l]);
    });
    // re-render tracking result if visible
    const tr = document.getElementById('trackResult');
    if (tr && tr.dataset.ref) renderTracking(tr.dataset.ref);
  }

  const langToggle = document.querySelector('[data-lang-toggle]');
  langToggle.addEventListener('click', () => {
    applyLang(lang === 'en' ? 'ar' : 'en');
  });

  /* ---------- Theme toggle ---------- */
  const themeBtn = document.querySelector('[data-theme-toggle]');
  let theme = matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';
  root.setAttribute('data-theme', theme);
  themeBtn.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', theme);
    themeBtn.setAttribute(
      'aria-label',
      'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode'
    );
    themeBtn.innerHTML =
      theme === 'dark'
        ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
        : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
  });

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  /* ---------- WhatsApp helpers ---------- */
  const WA_NUMBER = '971500000000';
  function buildWaLink(message) {
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  /* ---------- File upload ---------- */
  const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('fileInput');
  const fileList = document.getElementById('fileList');
  let files = [];

  function renderFiles() {
    fileList.innerHTML = '';
    files.forEach((f, i) => {
      const item = document.createElement('div');
      item.className = 'file-item';
      item.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>
        <span>${f.name} <small style="color:var(--color-text-faint)">(${Math.round(f.size / 1024)} KB)</small></span>
        <button type="button" aria-label="Remove file" data-i18n aria-label="Remove">✕</button>`;
      item.querySelector('button').addEventListener('click', (e) => {
        e.preventDefault();
        files.splice(i, 1);
        renderFiles();
      });
      fileList.appendChild(item);
    });
    clearFieldError('docs');
  }

  dropzone.addEventListener('click', (e) => {
    if (e.target.tagName === 'INPUT') return;
    fileInput.click();
  });
  dropzone.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      fileInput.click();
    }
  });
  fileInput.addEventListener('change', () => {
    files = Array.from(fileInput.files);
    renderFiles();
  });
  ['dragenter', 'dragover'].forEach((ev) =>
    dropzone.addEventListener(ev, (e) => {
      e.preventDefault();
      dropzone.classList.add('dropzone--active');
    })
  );
  ['dragleave', 'drop'].forEach((ev) =>
    dropzone.addEventListener(ev, (e) => {
      e.preventDefault();
      dropzone.classList.remove('dropzone--active');
    })
  );
  dropzone.addEventListener('drop', (e) => {
    files = Array.from(e.dataTransfer.files).filter((f) =>
      /\.(pdf|jpe?g|png)$/i.test(f.name)
    );
    renderFiles();
  });

  /* ---------- Field validation helpers ---------- */
  function setFieldError(input, hasError) {
    const field = input.closest('.field');
    if (!field) return;
    field.classList.toggle('field--invalid', hasError);
  }
  function clearFieldError(key) {
    if (key === 'docs') {
      document.querySelector('#requestForm .field .field__error');
      const dz = document.getElementById('dropzone').closest('.field');
      dz && dz.classList.remove('field--invalid');
    }
  }

  /* ---------- Request form submission ---------- */
  const form = document.getElementById('requestForm');
  const demoNotice = document.getElementById('demoNotice');

  // live validation
  form.querySelectorAll('input[required], select[required]').forEach((input) => {
    input.addEventListener('blur', () => validateInput(input));
    input.addEventListener('input', () => setFieldError(input, false));
  });

  function validateInput(input) {
    if (input.type === 'email') {
      const ok = !input.value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
      setFieldError(input, !ok);
      return ok;
    }
    if (input.tagName === 'SELECT') {
      const ok = !!input.value;
      setFieldError(input, !ok);
      return ok;
    }
    const ok = !!input.value.trim();
    setFieldError(input, !ok);
    return ok;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    demoNotice.style.display = 'none';

    let valid = true;
    form.querySelectorAll('input[required], select[required]').forEach((input) => {
      if (!validateInput(input)) valid = false;
    });

    // documents
    const docsField = document.getElementById('dropzone').closest('.field');
    if (files.length === 0) {
      docsField.classList.add('field--invalid');
      valid = false;
    } else {
      docsField.classList.remove('field--invalid');
    }

    if (!valid) {
      form.querySelector('.field--invalid')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    // generate WSL reference (demo)
    const ref = `WSL-2026-${1000 + Math.floor(Math.random() * 8999)}`;
    const serviceSel = document.getElementById('service');
    const serviceLabel = serviceSel.options[serviceSel.selectedIndex].textContent;

    const successAlert = document.createElement('div');
    successAlert.className = 'alert alert--success';
    successAlert.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
      <div>
        <b>${I18N.submit_success_title[lang]}</b>
        <span>${I18N.submit_success_body[lang]}</span>
        <span class="ref-badge">${ref}</span>
        <div style="margin-top: var(--space-4); display:flex; gap: var(--space-3); flex-wrap:wrap;">
          <a class="btn btn--whatsapp" id="waSubmit" href="#">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2z"/></svg>
            ${I18N.submit_whatsapp[lang]}
          </a>
        </div>
      </div>`;

    const waMsg = `Hello Wasel, I've submitted a request (ref: ${ref}).\nService: ${serviceLabel}\nName: ${document.getElementById('firstName').value} ${document.getElementById('lastName').value}\nMobile: ${document.getElementById('phone').value}`;
    successAlert.querySelector('#waSubmit').href = buildWaLink(waMsg);

    // place success alert after the form
    form.after(successAlert);
    successAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // reset form for next request
    form.reset();
    files = [];
    renderFiles();
    form.querySelectorAll('.field').forEach((f) => f.classList.remove('field--invalid'));
  });

  /* ---------- Tracking lookup ---------- */
  const trackForm = document.getElementById('trackForm');
  const trackResult = document.getElementById('trackResult');

  trackForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const refInput = document.getElementById('trackRef');
    const ref = refInput.value.trim().toUpperCase();
    const field = refInput.closest('.field');

    if (!ref) {
      field.classList.add('field--invalid');
      refInput.focus();
      return;
    }
    field.classList.remove('field--invalid');

    const data = TRACKING[ref];
    if (!data) {
      renderNotFound(ref);
      return;
    }
    trackResult.dataset.ref = ref;
    renderTracking(ref);
  });

  function renderTracking(ref) {
    const data = TRACKING[ref];
    if (!data) return;
    const statusLabel = STATUS_LABEL[data.status][lang];
    const statusClass = data.status; // progress / review / ready
    const tlClass = { progress: 'status--progress', review: 'status--review', ready: 'status--ready' }[data.status];

    const stepsHtml = data.steps
      .map((s) => {
        const cls = s.done ? 'tl-item--done' : s.active ? 'tl-item--active' : '';
        return `
          <div class="tl-item ${cls}">
            <div class="tl-dot"></div>
            <div class="tl-body">
              <b>${STEP_LABELS[s.key][lang]}</b>
              <span>${s.done ? (lang === 'ar' ? 'تم' : 'Done') : s.active ? (lang === 'ar' ? 'الآن' : 'Now') : (lang === 'ar' ? 'بانتظار' : 'Pending')}</span>
            </div>
          </div>`;
      })
      .join('');

    trackResult.style.display = 'block';
    trackResult.innerHTML = `
      <div class="track-result__head">
        <div>
          <b>${ref}</b>
          <div style="font-size:var(--text-sm); color:var(--color-text-muted); margin-top:var(--space-1)">${data.service[lang]}</div>
        </div>
        <span class="status ${tlClass}">${statusLabel}</span>
      </div>
      <div class="timeline">${stepsHtml}</div>`;
    trackResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function renderNotFound(ref) {
    trackResult.style.display = 'block';
    trackResult.innerHTML = `
      <div class="alert alert--error">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
        <div>
          <b>${I18N.not_found_title[lang]}</b>
          <span>${I18N.not_found_body[lang]}</span>
        </div>
      </div>`;
  }

  /* ---------- Init ---------- */
  applyLang('en');
})();
