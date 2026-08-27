import { assetUrl } from '../lib/asset.js';

export const ALIASES = {
    'body-sculpt': 'body-toning',
    bride: 'bridal',
    lifestyle: 'healthy-lifestyle',
    wellness: 'health-fitness',
  };

export const GOALS = {
    all: {
      id: 'all',
      label: 'كل القصص',
      title: 'قصص تحوّل ملهمة',
      image: assetUrl('/assets/img/goal-health-fitness.png'),
    },
    'fat-loss': {
      id: 'fat-loss',
      label: 'خسارة الدهون',
      title: 'قصص تحوّل في خسارة الدهون',
      image: assetUrl('/assets/img/goal-fat-loss.png'),
    },
    'body-toning': {
      id: 'body-toning',
      label: 'نحت القوام',
      title: 'قصص تحوّل في نحت القوام',
      image: assetUrl('/assets/img/goal-body-toning.png'),
    },
    'muscle-building': {
      id: 'muscle-building',
      label: 'بناء العضلات',
      title: 'قصص تحوّل في بناء العضلات',
      image: assetUrl('/assets/img/goal-muscle-building.png'),
    },
    bridal: {
      id: 'bridal',
      label: 'تألق العروس',
      title: 'قصص تحوّل لتألق العروس',
      image: assetUrl('/assets/img/goal-bridal-glow.png'),
    },
    postpartum: {
      id: 'postpartum',
      label: 'ما بعد الولادة',
      title: 'قصص تحوّل لما بعد الولادة',
      image: assetUrl('/assets/img/goal-postpartum.png'),
    },
    pregnancy: {
      id: 'pregnancy',
      label: 'الحمل الصحي',
      title: 'قصص تحوّل في الحمل الصحي',
      image: assetUrl('/assets/img/goal-pregnancy-wellness.png'),
    },
    bariatric: {
      id: 'bariatric',
      label: 'بعد التكميم',
      title: 'قصص تحوّل بعد التكميم',
      image: assetUrl('/assets/img/goal-post-bariatric.png'),
    },
    'health-fitness': {
      id: 'health-fitness',
      label: 'الصحة واللياقة',
      title: 'قصص تحوّل في الصحة واللياقة',
      image: assetUrl('/assets/img/goal-health-fitness.png'),
    },
    'healthy-lifestyle': {
      id: 'healthy-lifestyle',
      label: 'نمط الحياة الصحي',
      title: 'قصص تحوّل لنمط حياة صحي',
      image: assetUrl('/assets/img/goal-healthy-lifestyle.png'),
    },
  };

export const STORIES = [
    {
      id: 'fl-1', goal: 'fat-loss', name: 'نورة', age: 29, duration: '12 أسبوعًا',
      excerpt: 'بدأت بخوف من الميزان، وانتهيت بثقة جديدة في جسدي وروتيني اليومي.',
      story: 'كنتُ أتجنّب الميزان لأشهر. بعد جلسة التقييم وضعنا خطة بسيطة تناسب يومي كأم عاملة. التزمتُ بثلاث جلسات أسبوعيًا ومتابعة تغذية مرنة، فلاحظتُ فرقًا في طاقتي أولًا ثم في ملابسي. لم يكن الطريق سريعًا، لكنه كان واضحًا وممكنًا.',
      image: assetUrl('/assets/img/goal-fat-loss.png'),
      metrics: { duration: '12 أسبوعًا', sessions: '36 جلسة', result: 'انتظام ووضوح في الروتين' },
    },
    {
      id: 'fl-2', goal: 'fat-loss', name: 'هند', age: 34, duration: '16 أسبوعًا',
      excerpt: 'تعلّمت أن خسارة الدهون ليست حرمانًا، بل نظامًا أقدر أعيش معه.',
      story: 'جرّبت حميات قاسية وفشلت. مع الفريق تعلّمت التوازن: وجبات تشبعني وتمارين أستطيع الالتزام بها. الصبر والمتابعة الأسبوعية غيّرا علاقتي بالطعام والجسد.',
      image: assetUrl('/assets/img/goal-fat-loss.png'),
      metrics: { duration: '16 أسبوعًا', sessions: '48 جلسة', result: 'ثبات في العادات اليومية' },
    },
    {
      id: 'fl-3', goal: 'fat-loss', name: 'ريم', age: 27, duration: '10 أسابيع',
      excerpt: 'كل أسبوع كان خطوة صغيرة… ومجموع الخطوات صنع فرقًا كبيرًا.',
      story: 'اخترت برنامجًا منزليًا يناسب دوامي. المتابعة عبر التطبيق جعلتني أشعر أني لست وحدي. اليوم أتحرك بطاقة أعلى وثيابًا أحبها أكثر.',
      image: assetUrl('/assets/img/goal-fat-loss.png'),
      metrics: { duration: '10 أسابيع', sessions: '30 جلسة', result: 'تحسن ملحوظ في النشاط' },
    },
    {
      id: 'fl-4', goal: 'fat-loss', name: 'سارة', age: 41, duration: '20 أسبوعًا',
      excerpt: 'عدتُ لنفسي بهدوء، بلا ضغط ولا مقارنات.',
      story: 'بعد الأربعين ظننت أن التغيير صعب. الخطة راعت مفاصلي ونومي، والنتيجة جاءت تدريجيًا وثابتة.',
      image: assetUrl('/assets/img/goal-fat-loss.png'),
      metrics: { duration: '20 أسبوعًا', sessions: '60 جلسة', result: 'استمرارية بدون إرهاق' },
    },
    {
      id: 'bt-1', goal: 'body-toning', name: 'لينا', age: 26, duration: '12 أسبوعًا',
      excerpt: 'نحت القوام بدأ بتقوية الجذع… فظهر الفرق في الوقفة أولًا.',
      story: 'أردت قوامًا مشدودًا دون إرهاق مفرط. ركّزنا على تمارين مقاومة ذكية وتقنية صحيحة، فصرت أشعر بجسمي أكثر توازنًا.',
      image: assetUrl('/assets/img/goal-body-toning.png'),
      metrics: { duration: '12 أسبوعًا', sessions: '36 جلسة', result: 'وضوح في شكل القوام' },
    },
    {
      id: 'bt-2', goal: 'body-toning', name: 'دانة', age: 31, duration: '14 أسبوعًا',
      excerpt: 'التكرار الصحيح أهم من الأوزان الثقيلة.',
      story: 'كنت أرفع أوزانًا بلا تركيز. تصحيح الحركة والمتابعة غيّرا النتائج بالكامل.',
      image: assetUrl('/assets/img/goal-body-toning.png'),
      metrics: { duration: '14 أسبوعًا', sessions: '42 جلسة', result: 'قوة وتحكم أفضل' },
    },
    {
      id: 'bt-3', goal: 'body-toning', name: 'غادة', age: 28, duration: '10 أسابيع',
      excerpt: 'صرت أرى فرقًا في المرآة وفي طريقة جلوسي ووقوفي.',
      story: 'البرنامج جمع بين المقاومة والمرونة. الاستمرارية صنعت القوام الذي بحثت عنه.',
      image: assetUrl('/assets/img/goal-body-toning.png'),
      metrics: { duration: '10 أسابيع', sessions: '30 جلسة', result: 'شدّ أوضح في المناطق المستهدفة' },
    },
    {
      id: 'bt-4', goal: 'body-toning', name: 'مها', age: 36, duration: '16 أسبوعًا',
      excerpt: 'نحت القوام صار عادة… لا مشروعًا مؤقتًا.',
      story: 'رتّبنا التمرين حول جدول العائلة. الثبات أسبوعًا بعد أسبوع صنع النتيجة.',
      image: assetUrl('/assets/img/goal-body-toning.png'),
      metrics: { duration: '16 أسبوعًا', sessions: '48 جلسة', result: 'روتين ثابت ونتائج ظاهرة' },
    },
    {
      id: 'mb-1', goal: 'muscle-building', name: 'جواهر', age: 30, duration: '12 أسبوعًا',
      excerpt: 'القوة غيّرت ثقتي بنفسي قبل شكل عضلاتي.',
      story: 'كنت أخشى الأوزان. بدأت بخفيفة ثم تقدّمت بثقة، وصرت أقوى في التمرين وفي يومي.',
      image: assetUrl('/assets/img/goal-muscle-building.png'),
      metrics: { duration: '12 أسبوعًا', sessions: '36 جلسة', result: 'زيادة ملحوظة في القوة' },
    },
    {
      id: 'mb-2', goal: 'muscle-building', name: 'هيفاء', age: 25, duration: '14 أسبوعًا',
      excerpt: 'بناء العضلات علّمني الصبر والقياس الصحيح.',
      story: 'تابعنا الأوزان والتغذية معًا. النتائج ظهرت تدريجيًا وبشكل صحي.',
      image: assetUrl('/assets/img/goal-muscle-building.png'),
      metrics: { duration: '14 أسبوعًا', sessions: '42 جلسة', result: 'كتلة عضلية أوضح' },
    },
    {
      id: 'mb-3', goal: 'muscle-building', name: 'نوف', age: 33, duration: '16 أسبوعًا',
      excerpt: 'صرت أحمل طفلي بسهولة أكبر… هذه قوتي الحقيقية.',
      story: 'البرنامج راعى ظهري وكتفي. القوة انعكست على حياتي اليومية قبل المرآة.',
      image: assetUrl('/assets/img/goal-muscle-building.png'),
      metrics: { duration: '16 أسبوعًا', sessions: '48 جلسة', result: 'قدرة وظيفية أعلى' },
    },
    {
      id: 'mb-4', goal: 'muscle-building', name: 'أمل', age: 38, duration: '18 أسبوعًا',
      excerpt: 'لم أتخيّل أن أحب تمارين القوة بهذا الشكل.',
      story: 'التدرّج الآمن والدعم المستمر جعلاني أستمر. اليوم القوة جزء من هويتي.',
      image: assetUrl('/assets/img/goal-muscle-building.png'),
      metrics: { duration: '18 أسبوعًا', sessions: '54 جلسة', result: 'ثبات وتحسن مستمر' },
    },
    {
      id: 'br-1', goal: 'bridal', name: 'روان', age: 27, duration: '10 أسابيع',
      excerpt: 'أردت أتألق يوم زفافي… ووجدت طاقة وهدوءًا أكثر مما توقعت.',
      story: 'الخطة كانت واقعية مع ضغط التحضيرات. التمرين صار وقتي الخاص، ووصلت ليوم الزفاف بثقة وراحة.',
      image: assetUrl('/assets/img/goal-bridal-glow.png'),
      metrics: { duration: '10 أسابيع', sessions: '30 جلسة', result: 'جاهزية وخفة في الحركة' },
    },
    {
      id: 'br-2', goal: 'bridal', name: 'شهد', age: 24, duration: '8 أسابيع',
      excerpt: 'برنامج العروس علّمني الالتزام دون إنهاك.',
      story: 'ركزنا على اللياقة والمظهر العام والنوم. الفرق ظهر في بشرتي وطاقتي قبل الفستان.',
      image: assetUrl('/assets/img/goal-bridal-glow.png'),
      metrics: { duration: '8 أسابيع', sessions: '24 جلسة', result: 'تألق وحيوية يوم الزفاف' },
    },
    {
      id: 'br-3', goal: 'bridal', name: 'لمى', age: 29, duration: '12 أسبوعًا',
      excerpt: 'كل جلسة كانت اقترب من أفضل نسخة مني في هذا اليوم.',
      story: 'المتابعة الشخصية جعلت الهدف واضحًا. احتفلت بنفسي قبل أن أحتفل بالزفاف.',
      image: assetUrl('/assets/img/goal-bridal-glow.png'),
      metrics: { duration: '12 أسبوعًا', sessions: '36 جلسة', result: 'ثقة وقوام متناسق' },
    },
    {
      id: 'br-4', goal: 'bridal', name: 'بيان', age: 32, duration: '14 أسبوعًا',
      excerpt: 'لم يكن الهدف رقمًا على الميزان… بل شعورًا في الفستان.',
      story: 'اشتغلنا على الشدّ والمرونة والثبات. النتيجة شعرت بها في كل خطوة داخل القاعة.',
      image: assetUrl('/assets/img/goal-bridal-glow.png'),
      metrics: { duration: '14 أسبوعًا', sessions: '42 جلسة', result: 'راحة وثقة في اليوم الكبير' },
    },
    {
      id: 'pp-1', goal: 'postpartum', name: 'أسماء', age: 31, duration: '12 أسبوعًا',
      excerpt: 'عدتُ لجسدي بلطف بعد الولادة، خطوة بخطوة.',
      story: 'بعد موافقة الطبيبة بدأنا بتمارين آمنة للجذع والتنفس. الدعم النفسي كان بنفس أهمية التمرين.',
      image: assetUrl('/assets/img/goal-postpartum.png'),
      metrics: { duration: '12 أسبوعًا', sessions: '36 جلسة', result: 'استعادة تدريجية للقوة' },
    },
    {
      id: 'pp-2', goal: 'postpartum', name: 'جمانة', age: 28, duration: '16 أسبوعًا',
      excerpt: 'لم أستعجل النتائج… فوصلت إليها بأمان.',
      story: 'البرنامج احترم نومي ورضاعتي. التحسن جاء بهدوء واستمر.',
      image: assetUrl('/assets/img/goal-postpartum.png'),
      metrics: { duration: '16 أسبوعًا', sessions: '48 جلسة', result: 'طاقة أفضل واستقرار' },
    },
    {
      id: 'pp-3', goal: 'postpartum', name: 'وفاء', age: 35, duration: '14 أسبوعًا',
      excerpt: 'صرت أحمل طفلي بقوة أكبر وثقة أعلى.',
      story: 'ركزنا على الظهر والحوض والمرونة. الحياة اليومية صارت أسهل.',
      image: assetUrl('/assets/img/goal-postpartum.png'),
      metrics: { duration: '14 أسبوعًا', sessions: '42 جلسة', result: 'قوة وظيفية أوضح' },
    },
    {
      id: 'pp-4', goal: 'postpartum', name: 'ندى', age: 30, duration: '10 أسابيع',
      excerpt: 'العودة بعد الولادة ممكنة… عندما تكون الخطة مناسبة.',
      story: 'جلسات قصيرة ومنتظمة صنعت فرقًا كبيرًا دون إرهاق.',
      image: assetUrl('/assets/img/goal-postpartum.png'),
      metrics: { duration: '10 أسابيع', sessions: '30 جلسة', result: 'تعافٍ مريح ومستمر' },
    },
    {
      id: 'pr-1', goal: 'pregnancy', name: 'حصة', age: 29, duration: 'طوال الحمل',
      excerpt: 'الحركة الآمنة جعلت حملي أخف وأكثر راحة.',
      story: 'مع متابعة مستمرة عدّلنا التمرين حسب كل فصل. شعرت بدعم لجسمي ونفسي.',
      image: assetUrl('/assets/img/goal-pregnancy-wellness.png'),
      metrics: { duration: 'عدة أشهر', sessions: 'جلسات منتظمة', result: 'راحة وحركة أفضل' },
    },
    {
      id: 'pr-2', goal: 'pregnancy', name: 'عُلا', age: 33, duration: 'الثلث الثاني والثالث',
      excerpt: 'تعلّمت التنفس والقوة بلطف… فواجهت يوم الولادة بثقة أكبر.',
      story: 'التمارين راعت ظهري وتوازني. أحسست أني أعتني بجسمي وطفلي معًا.',
      image: assetUrl('/assets/img/goal-pregnancy-wellness.png'),
      metrics: { duration: '20 أسبوعًا', sessions: 'جلسات أسبوعية', result: 'ثبات ووعي بالحركة' },
    },
    {
      id: 'pr-3', goal: 'pregnancy', name: 'ميساء', age: 27, duration: 'الثلث الأول والثاني',
      excerpt: 'حتى مع الغثيان، وجدت إيقاعًا بسيطًا يناسبني.',
      story: 'البدء الخفيف والمتابعة غيّرا مزاجي وطاقتي خلال الحمل.',
      image: assetUrl('/assets/img/goal-pregnancy-wellness.png'),
      metrics: { duration: '16 أسبوعًا', sessions: 'جلسات مرنة', result: 'طاقة ومزاج أفضل' },
    },
    {
      id: 'pr-4', goal: 'pregnancy', name: 'لطيفة', age: 36, duration: 'حمل آمن نشط',
      excerpt: 'الحمل الصحي بالنسبة لي كان حركة واعية لا توقفًا تامًا.',
      story: 'بتنسيق مع الطبيبة استمررت بحذر. النتيجة راحة في الظهر ونوم أفضل.',
      image: assetUrl('/assets/img/goal-pregnancy-wellness.png'),
      metrics: { duration: 'عدة أشهر', sessions: 'مرتين أسبوعيًا', result: 'راحة جسدية ملحوظة' },
    },
    {
      id: 'ba-1', goal: 'bariatric', name: 'إيناس', age: 37, duration: '16 أسبوعًا',
      excerpt: 'بعد التكميم احتجت خطة تحترم جسدي الجديد… فوجدتها هنا.',
      story: 'التركيز كان على القوة والعادات والاستمرارية. الدعم جعل الرحلة أوضح.',
      image: assetUrl('/assets/img/goal-post-bariatric.png'),
      metrics: { duration: '16 أسبوعًا', sessions: '48 جلسة', result: 'بناء عادات ثابتة' },
    },
    {
      id: 'ba-2', goal: 'bariatric', name: 'خلود', age: 42, duration: '20 أسبوعًا',
      excerpt: 'تعلّمت أتحرك بقوة دون أن أرهق نفسي.',
      story: 'البرنامج تدرّج معي بهدوء. صرت أقوى وأكثر انضباطًا في يومي.',
      image: assetUrl('/assets/img/goal-post-bariatric.png'),
      metrics: { duration: '20 أسبوعًا', sessions: '60 جلسة', result: 'قوة واستقرار' },
    },
    {
      id: 'ba-3', goal: 'bariatric', name: 'فوزية', age: 39, duration: '12 أسبوعًا',
      excerpt: 'المتابعة بعد العملية صنعت الفرق الحقيقي.',
      story: 'لم أكن أعرف من أين أبدأ. الجلسات رتّبت لي الطريق خطوة بخطوة.',
      image: assetUrl('/assets/img/goal-post-bariatric.png'),
      metrics: { duration: '12 أسبوعًا', sessions: '36 جلسة', result: 'وضوح في الروتين' },
    },
    {
      id: 'ba-4', goal: 'bariatric', name: 'نوال', age: 45, duration: '18 أسبوعًا',
      excerpt: 'كل أسبوع أثبت لنفسي أن الاستمرار ممكن.',
      story: 'مع الفريق شعرت بالأمان. النتائج جاءت مع العادات لا مع الاستعجال.',
      image: assetUrl('/assets/img/goal-post-bariatric.png'),
      metrics: { duration: '18 أسبوعًا', sessions: '54 جلسة', result: 'التزام طويل الأمد' },
    },
    {
      id: 'hf-1', goal: 'health-fitness', name: 'تالا', age: 28, duration: '12 أسبوعًا',
      excerpt: 'أردت صحة ولياقة… فوجدت أسلوب حياة أستمتع به.',
      story: 'الخليط بين التمرين والمتابعة جعلني أنتظر الجلسة لا أتهرّب منها.',
      image: assetUrl('/assets/img/goal-health-fitness.png'),
      metrics: { duration: '12 أسبوعًا', sessions: '36 جلسة', result: 'لياقة عامة أفضل' },
    },
    {
      id: 'hf-2', goal: 'health-fitness', name: 'رُبى', age: 34, duration: '14 أسبوعًا',
      excerpt: 'صحتي صارت أولوية… والنتائج جاءت تباعًا.',
      story: 'نمطي كان فوضويًا. التنظيم اللطيف أعاد لي طاقتي ونومي.',
      image: assetUrl('/assets/img/goal-health-fitness.png'),
      metrics: { duration: '14 أسبوعًا', sessions: '42 جلسة', result: 'طاقة ونوم أفضل' },
    },
    {
      id: 'hf-3', goal: 'health-fitness', name: 'شيماء', age: 30, duration: '10 أسابيع',
      excerpt: 'اللياقة بالنسبة لي صارت عادة صباحية أحبها.',
      story: 'جلسات قصيرة ومنتظمة غيّرت مزاجي قبل جسمي.',
      image: assetUrl('/assets/img/goal-health-fitness.png'),
      metrics: { duration: '10 أسابيع', sessions: '30 جلسة', result: 'انتظام أسبوعي ثابت' },
    },
    {
      id: 'hf-4', goal: 'health-fitness', name: 'عبير', age: 40, duration: '16 أسبوعًا',
      excerpt: 'عدت للاهتمام بنفسي بعد سنوات من التأجيل.',
      story: 'الخطة ناسبت عمري وجدول عملي. الاستمرارية صنعت الفرق.',
      image: assetUrl('/assets/img/goal-health-fitness.png'),
      metrics: { duration: '16 أسبوعًا', sessions: '48 جلسة', result: 'حيوية وثقة أعلى' },
    },
    {
      id: 'hl-1', goal: 'healthy-lifestyle', name: 'منيرة', age: 32, duration: '12 أسبوعًا',
      excerpt: 'غيّرت عاداتي الصغيرة… فتغيّر يومي بالكامل.',
      story: 'النوم والمشي والوجبات صارت أوضح. لم أحتج مثالية، احتجت انتظامًا.',
      image: assetUrl('/assets/img/goal-healthy-lifestyle.png'),
      metrics: { duration: '12 أسبوعًا', sessions: 'متابعة أسبوعية', result: 'عادات يومية أوضح' },
    },
    {
      id: 'hl-2', goal: 'healthy-lifestyle', name: 'سلمى', age: 27, duration: '10 أسابيع',
      excerpt: 'نمط الحياة الصحي بدأ بمطبخ أبسط ويوم أكثر هدوءًا.',
      story: 'رتّبنا روتيني حول واقعي لا حول مثالي. النتيجة استمرارية حقيقية.',
      image: assetUrl('/assets/img/goal-healthy-lifestyle.png'),
      metrics: { duration: '10 أسابيع', sessions: 'متابعة مرنة', result: 'توازن يومي أفضل' },
    },
    {
      id: 'hl-3', goal: 'healthy-lifestyle', name: 'أثير', age: 35, duration: '14 أسبوعًا',
      excerpt: 'صرت أختار لنفسي بهدوء… وهذا أكبر تحوّل.',
      story: 'الوعي قبل الحرمان. تعلّمت أسمع جسدي وأحترم حدودي.',
      image: assetUrl('/assets/img/goal-healthy-lifestyle.png'),
      metrics: { duration: '14 أسبوعًا', sessions: 'جلسات إرشاد', result: 'وعي واختيارات أوضح' },
    },
    {
      id: 'hl-4', goal: 'healthy-lifestyle', name: 'يارا', age: 29, duration: '8 أسابيع',
      excerpt: 'ثماني أسابيع كافية لتثبيت عادة جديدة.',
      story: 'ركزنا على عادة واحدة كل أسبوعين. التراكم صنع أسلوب حياة.',
      image: assetUrl('/assets/img/goal-healthy-lifestyle.png'),
      metrics: { duration: '8 أسابيع', sessions: 'متابعة قصيرة', result: 'عادات قابلة للاستمرار' },
    },
  ];


export function normalizeGoal(raw) {
  const key = String(raw || 'all').trim().toLowerCase();
  const mapped = ALIASES[key] || key;
  return GOALS[mapped] ? mapped : 'all';
}

export function goalLabel(id) {
  return (GOALS[id] && GOALS[id].label) || id;
}

export function storiesFor(goalId) {
  if (goalId === 'all') return STORIES.slice();
  return STORIES.filter((s) => s.goal === goalId);
}
