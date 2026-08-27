/* صفحة القصص — فلترة + قائمة + Modal */
(function () {
  'use strict';

  const ALIASES = {
    'body-sculpt': 'body-toning',
    bride: 'bridal',
    lifestyle: 'healthy-lifestyle',
    wellness: 'health-fitness',
  };

  const GOALS = {
    all: {
      id: 'all',
      label: 'كل القصص',
      title: 'قصص تحوّل ملهمة',
      image: 'assets/img/goal-health-fitness.png',
    },
    'fat-loss': {
      id: 'fat-loss',
      label: 'خسارة الدهون',
      title: 'قصص تحوّل في خسارة الدهون',
      image: 'assets/img/goal-fat-loss.png',
    },
    'body-toning': {
      id: 'body-toning',
      label: 'نحت القوام',
      title: 'قصص تحوّل في نحت القوام',
      image: 'assets/img/goal-body-toning.png',
    },
    'muscle-building': {
      id: 'muscle-building',
      label: 'بناء العضلات',
      title: 'قصص تحوّل في بناء العضلات',
      image: 'assets/img/goal-muscle-building.png',
    },
    bridal: {
      id: 'bridal',
      label: 'تألق العروس',
      title: 'قصص تحوّل لتألق العروس',
      image: 'assets/img/goal-bridal-glow.png',
    },
    postpartum: {
      id: 'postpartum',
      label: 'ما بعد الولادة',
      title: 'قصص تحوّل لما بعد الولادة',
      image: 'assets/img/goal-postpartum.png',
    },
    pregnancy: {
      id: 'pregnancy',
      label: 'الحمل الصحي',
      title: 'قصص تحوّل في الحمل الصحي',
      image: 'assets/img/goal-pregnancy-wellness.png',
    },
    bariatric: {
      id: 'bariatric',
      label: 'بعد التكميم',
      title: 'قصص تحوّل بعد التكميم',
      image: 'assets/img/goal-post-bariatric.png',
    },
    'health-fitness': {
      id: 'health-fitness',
      label: 'الصحة واللياقة',
      title: 'قصص تحوّل في الصحة واللياقة',
      image: 'assets/img/goal-health-fitness.png',
    },
    'healthy-lifestyle': {
      id: 'healthy-lifestyle',
      label: 'نمط الحياة الصحي',
      title: 'قصص تحوّل لنمط حياة صحي',
      image: 'assets/img/goal-healthy-lifestyle.png',
    },
  };

  const STORIES = [
    {
      id: 'fl-1', goal: 'fat-loss', name: 'نورة', age: 29, duration: '12 أسبوعًا',
      excerpt: 'بدأت بخوف من الميزان، وانتهيت بثقة جديدة في جسدي وروتيني اليومي.',
      story: 'كنتُ أتجنّب الميزان لأشهر. بعد جلسة التقييم وضعنا خطة بسيطة تناسب يومي كأم عاملة. التزمتُ بثلاث جلسات أسبوعيًا ومتابعة تغذية مرنة، فلاحظتُ فرقًا في طاقتي أولًا ثم في ملابسي. لم يكن الطريق سريعًا، لكنه كان واضحًا وممكنًا.',
      image: 'assets/img/goal-fat-loss.png',
      metrics: { duration: '12 أسبوعًا', sessions: '36 جلسة', result: 'انتظام ووضوح في الروتين' },
    },
    {
      id: 'fl-2', goal: 'fat-loss', name: 'هند', age: 34, duration: '16 أسبوعًا',
      excerpt: 'تعلّمت أن خسارة الدهون ليست حرمانًا، بل نظامًا أقدر أعيش معه.',
      story: 'جرّبت حميات قاسية وفشلت. مع الفريق تعلّمت التوازن: وجبات تشبعني وتمارين أستطيع الالتزام بها. الصبر والمتابعة الأسبوعية غيّرا علاقتي بالطعام والجسد.',
      image: 'assets/img/goal-fat-loss.png',
      metrics: { duration: '16 أسبوعًا', sessions: '48 جلسة', result: 'ثبات في العادات اليومية' },
    },
    {
      id: 'fl-3', goal: 'fat-loss', name: 'ريم', age: 27, duration: '10 أسابيع',
      excerpt: 'كل أسبوع كان خطوة صغيرة… ومجموع الخطوات صنع فرقًا كبيرًا.',
      story: 'اخترت برنامجًا منزليًا يناسب دوامي. المتابعة عبر التطبيق جعلتني أشعر أني لست وحدي. اليوم أتحرك بطاقة أعلى وثيابًا أحبها أكثر.',
      image: 'assets/img/goal-fat-loss.png',
      metrics: { duration: '10 أسابيع', sessions: '30 جلسة', result: 'تحسن ملحوظ في النشاط' },
    },
    {
      id: 'fl-4', goal: 'fat-loss', name: 'سارة', age: 41, duration: '20 أسبوعًا',
      excerpt: 'عدتُ لنفسي بهدوء، بلا ضغط ولا مقارنات.',
      story: 'بعد الأربعين ظننت أن التغيير صعب. الخطة راعت مفاصلي ونومي، والنتيجة جاءت تدريجيًا وثابتة.',
      image: 'assets/img/goal-fat-loss.png',
      metrics: { duration: '20 أسبوعًا', sessions: '60 جلسة', result: 'استمرارية بدون إرهاق' },
    },
    {
      id: 'bt-1', goal: 'body-toning', name: 'لينا', age: 26, duration: '12 أسبوعًا',
      excerpt: 'نحت القوام بدأ بتقوية الجذع… فظهر الفرق في الوقفة أولًا.',
      story: 'أردت قوامًا مشدودًا دون إرهاق مفرط. ركّزنا على تمارين مقاومة ذكية وتقنية صحيحة، فصرت أشعر بجسمي أكثر توازنًا.',
      image: 'assets/img/goal-body-toning.png',
      metrics: { duration: '12 أسبوعًا', sessions: '36 جلسة', result: 'وضوح في شكل القوام' },
    },
    {
      id: 'bt-2', goal: 'body-toning', name: 'دانة', age: 31, duration: '14 أسبوعًا',
      excerpt: 'التكرار الصحيح أهم من الأوزان الثقيلة.',
      story: 'كنت أرفع أوزانًا بلا تركيز. تصحيح الحركة والمتابعة غيّرا النتائج بالكامل.',
      image: 'assets/img/goal-body-toning.png',
      metrics: { duration: '14 أسبوعًا', sessions: '42 جلسة', result: 'قوة وتحكم أفضل' },
    },
    {
      id: 'bt-3', goal: 'body-toning', name: 'غادة', age: 28, duration: '10 أسابيع',
      excerpt: 'صرت أرى فرقًا في المرآة وفي طريقة جلوسي ووقوفي.',
      story: 'البرنامج جمع بين المقاومة والمرونة. الاستمرارية صنعت القوام الذي بحثت عنه.',
      image: 'assets/img/goal-body-toning.png',
      metrics: { duration: '10 أسابيع', sessions: '30 جلسة', result: 'شدّ أوضح في المناطق المستهدفة' },
    },
    {
      id: 'bt-4', goal: 'body-toning', name: 'مها', age: 36, duration: '16 أسبوعًا',
      excerpt: 'نحت القوام صار عادة… لا مشروعًا مؤقتًا.',
      story: 'رتّبنا التمرين حول جدول العائلة. الثبات أسبوعًا بعد أسبوع صنع النتيجة.',
      image: 'assets/img/goal-body-toning.png',
      metrics: { duration: '16 أسبوعًا', sessions: '48 جلسة', result: 'روتين ثابت ونتائج ظاهرة' },
    },
    {
      id: 'mb-1', goal: 'muscle-building', name: 'جواهر', age: 30, duration: '12 أسبوعًا',
      excerpt: 'القوة غيّرت ثقتي بنفسي قبل شكل عضلاتي.',
      story: 'كنت أخشى الأوزان. بدأت بخفيفة ثم تقدّمت بثقة، وصرت أقوى في التمرين وفي يومي.',
      image: 'assets/img/goal-muscle-building.png',
      metrics: { duration: '12 أسبوعًا', sessions: '36 جلسة', result: 'زيادة ملحوظة في القوة' },
    },
    {
      id: 'mb-2', goal: 'muscle-building', name: 'هيفاء', age: 25, duration: '14 أسبوعًا',
      excerpt: 'بناء العضلات علّمني الصبر والقياس الصحيح.',
      story: 'تابعنا الأوزان والتغذية معًا. النتائج ظهرت تدريجيًا وبشكل صحي.',
      image: 'assets/img/goal-muscle-building.png',
      metrics: { duration: '14 أسبوعًا', sessions: '42 جلسة', result: 'كتلة عضلية أوضح' },
    },
    {
      id: 'mb-3', goal: 'muscle-building', name: 'نوف', age: 33, duration: '16 أسبوعًا',
      excerpt: 'صرت أحمل طفلي بسهولة أكبر… هذه قوتي الحقيقية.',
      story: 'البرنامج راعى ظهري وكتفي. القوة انعكست على حياتي اليومية قبل المرآة.',
      image: 'assets/img/goal-muscle-building.png',
      metrics: { duration: '16 أسبوعًا', sessions: '48 جلسة', result: 'قدرة وظيفية أعلى' },
    },
    {
      id: 'mb-4', goal: 'muscle-building', name: 'أمل', age: 38, duration: '18 أسبوعًا',
      excerpt: 'لم أتخيّل أن أحب تمارين القوة بهذا الشكل.',
      story: 'التدرّج الآمن والدعم المستمر جعلاني أستمر. اليوم القوة جزء من هويتي.',
      image: 'assets/img/goal-muscle-building.png',
      metrics: { duration: '18 أسبوعًا', sessions: '54 جلسة', result: 'ثبات وتحسن مستمر' },
    },
    {
      id: 'br-1', goal: 'bridal', name: 'روان', age: 27, duration: '10 أسابيع',
      excerpt: 'أردت أتألق يوم زفافي… ووجدت طاقة وهدوءًا أكثر مما توقعت.',
      story: 'الخطة كانت واقعية مع ضغط التحضيرات. التمرين صار وقتي الخاص، ووصلت ليوم الزفاف بثقة وراحة.',
      image: 'assets/img/goal-bridal-glow.png',
      metrics: { duration: '10 أسابيع', sessions: '30 جلسة', result: 'جاهزية وخفة في الحركة' },
    },
    {
      id: 'br-2', goal: 'bridal', name: 'شهد', age: 24, duration: '8 أسابيع',
      excerpt: 'برنامج العروس علّمني الالتزام دون إنهاك.',
      story: 'ركزنا على اللياقة والمظهر العام والنوم. الفرق ظهر في بشرتي وطاقتي قبل الفستان.',
      image: 'assets/img/goal-bridal-glow.png',
      metrics: { duration: '8 أسابيع', sessions: '24 جلسة', result: 'تألق وحيوية يوم الزفاف' },
    },
    {
      id: 'br-3', goal: 'bridal', name: 'لمى', age: 29, duration: '12 أسبوعًا',
      excerpt: 'كل جلسة كانت اقترب من أفضل نسخة مني في هذا اليوم.',
      story: 'المتابعة الشخصية جعلت الهدف واضحًا. احتفلت بنفسي قبل أن أحتفل بالزفاف.',
      image: 'assets/img/goal-bridal-glow.png',
      metrics: { duration: '12 أسبوعًا', sessions: '36 جلسة', result: 'ثقة وقوام متناسق' },
    },
    {
      id: 'br-4', goal: 'bridal', name: 'بيان', age: 32, duration: '14 أسبوعًا',
      excerpt: 'لم يكن الهدف رقمًا على الميزان… بل شعورًا في الفستان.',
      story: 'اشتغلنا على الشدّ والمرونة والثبات. النتيجة شعرت بها في كل خطوة داخل القاعة.',
      image: 'assets/img/goal-bridal-glow.png',
      metrics: { duration: '14 أسبوعًا', sessions: '42 جلسة', result: 'راحة وثقة في اليوم الكبير' },
    },
    {
      id: 'pp-1', goal: 'postpartum', name: 'أسماء', age: 31, duration: '12 أسبوعًا',
      excerpt: 'عدتُ لجسدي بلطف بعد الولادة، خطوة بخطوة.',
      story: 'بعد موافقة الطبيبة بدأنا بتمارين آمنة للجذع والتنفس. الدعم النفسي كان بنفس أهمية التمرين.',
      image: 'assets/img/goal-postpartum.png',
      metrics: { duration: '12 أسبوعًا', sessions: '36 جلسة', result: 'استعادة تدريجية للقوة' },
    },
    {
      id: 'pp-2', goal: 'postpartum', name: 'جمانة', age: 28, duration: '16 أسبوعًا',
      excerpt: 'لم أستعجل النتائج… فوصلت إليها بأمان.',
      story: 'البرنامج احترم نومي ورضاعتي. التحسن جاء بهدوء واستمر.',
      image: 'assets/img/goal-postpartum.png',
      metrics: { duration: '16 أسبوعًا', sessions: '48 جلسة', result: 'طاقة أفضل واستقرار' },
    },
    {
      id: 'pp-3', goal: 'postpartum', name: 'وفاء', age: 35, duration: '14 أسبوعًا',
      excerpt: 'صرت أحمل طفلي بقوة أكبر وثقة أعلى.',
      story: 'ركزنا على الظهر والحوض والمرونة. الحياة اليومية صارت أسهل.',
      image: 'assets/img/goal-postpartum.png',
      metrics: { duration: '14 أسبوعًا', sessions: '42 جلسة', result: 'قوة وظيفية أوضح' },
    },
    {
      id: 'pp-4', goal: 'postpartum', name: 'ندى', age: 30, duration: '10 أسابيع',
      excerpt: 'العودة بعد الولادة ممكنة… عندما تكون الخطة مناسبة.',
      story: 'جلسات قصيرة ومنتظمة صنعت فرقًا كبيرًا دون إرهاق.',
      image: 'assets/img/goal-postpartum.png',
      metrics: { duration: '10 أسابيع', sessions: '30 جلسة', result: 'تعافٍ مريح ومستمر' },
    },
    {
      id: 'pr-1', goal: 'pregnancy', name: 'حصة', age: 29, duration: 'طوال الحمل',
      excerpt: 'الحركة الآمنة جعلت حملي أخف وأكثر راحة.',
      story: 'مع متابعة مستمرة عدّلنا التمرين حسب كل فصل. شعرت بدعم لجسمي ونفسي.',
      image: 'assets/img/goal-pregnancy-wellness.png',
      metrics: { duration: 'عدة أشهر', sessions: 'جلسات منتظمة', result: 'راحة وحركة أفضل' },
    },
    {
      id: 'pr-2', goal: 'pregnancy', name: 'عُلا', age: 33, duration: 'الثلث الثاني والثالث',
      excerpt: 'تعلّمت التنفس والقوة بلطف… فواجهت يوم الولادة بثقة أكبر.',
      story: 'التمارين راعت ظهري وتوازني. أحسست أني أعتني بجسمي وطفلي معًا.',
      image: 'assets/img/goal-pregnancy-wellness.png',
      metrics: { duration: '20 أسبوعًا', sessions: 'جلسات أسبوعية', result: 'ثبات ووعي بالحركة' },
    },
    {
      id: 'pr-3', goal: 'pregnancy', name: 'ميساء', age: 27, duration: 'الثلث الأول والثاني',
      excerpt: 'حتى مع الغثيان، وجدت إيقاعًا بسيطًا يناسبني.',
      story: 'البدء الخفيف والمتابعة غيّرا مزاجي وطاقتي خلال الحمل.',
      image: 'assets/img/goal-pregnancy-wellness.png',
      metrics: { duration: '16 أسبوعًا', sessions: 'جلسات مرنة', result: 'طاقة ومزاج أفضل' },
    },
    {
      id: 'pr-4', goal: 'pregnancy', name: 'لطيفة', age: 36, duration: 'حمل آمن نشط',
      excerpt: 'الحمل الصحي بالنسبة لي كان حركة واعية لا توقفًا تامًا.',
      story: 'بتنسيق مع الطبيبة استمررت بحذر. النتيجة راحة في الظهر ونوم أفضل.',
      image: 'assets/img/goal-pregnancy-wellness.png',
      metrics: { duration: 'عدة أشهر', sessions: 'مرتين أسبوعيًا', result: 'راحة جسدية ملحوظة' },
    },
    {
      id: 'ba-1', goal: 'bariatric', name: 'إيناس', age: 37, duration: '16 أسبوعًا',
      excerpt: 'بعد التكميم احتجت خطة تحترم جسدي الجديد… فوجدتها هنا.',
      story: 'التركيز كان على القوة والعادات والاستمرارية. الدعم جعل الرحلة أوضح.',
      image: 'assets/img/goal-post-bariatric.png',
      metrics: { duration: '16 أسبوعًا', sessions: '48 جلسة', result: 'بناء عادات ثابتة' },
    },
    {
      id: 'ba-2', goal: 'bariatric', name: 'خلود', age: 42, duration: '20 أسبوعًا',
      excerpt: 'تعلّمت أتحرك بقوة دون أن أرهق نفسي.',
      story: 'البرنامج تدرّج معي بهدوء. صرت أقوى وأكثر انضباطًا في يومي.',
      image: 'assets/img/goal-post-bariatric.png',
      metrics: { duration: '20 أسبوعًا', sessions: '60 جلسة', result: 'قوة واستقرار' },
    },
    {
      id: 'ba-3', goal: 'bariatric', name: 'فوزية', age: 39, duration: '12 أسبوعًا',
      excerpt: 'المتابعة بعد العملية صنعت الفرق الحقيقي.',
      story: 'لم أكن أعرف من أين أبدأ. الجلسات رتّبت لي الطريق خطوة بخطوة.',
      image: 'assets/img/goal-post-bariatric.png',
      metrics: { duration: '12 أسبوعًا', sessions: '36 جلسة', result: 'وضوح في الروتين' },
    },
    {
      id: 'ba-4', goal: 'bariatric', name: 'نوال', age: 45, duration: '18 أسبوعًا',
      excerpt: 'كل أسبوع أثبت لنفسي أن الاستمرار ممكن.',
      story: 'مع الفريق شعرت بالأمان. النتائج جاءت مع العادات لا مع الاستعجال.',
      image: 'assets/img/goal-post-bariatric.png',
      metrics: { duration: '18 أسبوعًا', sessions: '54 جلسة', result: 'التزام طويل الأمد' },
    },
    {
      id: 'hf-1', goal: 'health-fitness', name: 'تالا', age: 28, duration: '12 أسبوعًا',
      excerpt: 'أردت صحة ولياقة… فوجدت أسلوب حياة أستمتع به.',
      story: 'الخليط بين التمرين والمتابعة جعلني أنتظر الجلسة لا أتهرّب منها.',
      image: 'assets/img/goal-health-fitness.png',
      metrics: { duration: '12 أسبوعًا', sessions: '36 جلسة', result: 'لياقة عامة أفضل' },
    },
    {
      id: 'hf-2', goal: 'health-fitness', name: 'رُبى', age: 34, duration: '14 أسبوعًا',
      excerpt: 'صحتي صارت أولوية… والنتائج جاءت تباعًا.',
      story: 'نمطي كان فوضويًا. التنظيم اللطيف أعاد لي طاقتي ونومي.',
      image: 'assets/img/goal-health-fitness.png',
      metrics: { duration: '14 أسبوعًا', sessions: '42 جلسة', result: 'طاقة ونوم أفضل' },
    },
    {
      id: 'hf-3', goal: 'health-fitness', name: 'شيماء', age: 30, duration: '10 أسابيع',
      excerpt: 'اللياقة بالنسبة لي صارت عادة صباحية أحبها.',
      story: 'جلسات قصيرة ومنتظمة غيّرت مزاجي قبل جسمي.',
      image: 'assets/img/goal-health-fitness.png',
      metrics: { duration: '10 أسابيع', sessions: '30 جلسة', result: 'انتظام أسبوعي ثابت' },
    },
    {
      id: 'hf-4', goal: 'health-fitness', name: 'عبير', age: 40, duration: '16 أسبوعًا',
      excerpt: 'عدت للاهتمام بنفسي بعد سنوات من التأجيل.',
      story: 'الخطة ناسبت عمري وجدول عملي. الاستمرارية صنعت الفرق.',
      image: 'assets/img/goal-health-fitness.png',
      metrics: { duration: '16 أسبوعًا', sessions: '48 جلسة', result: 'حيوية وثقة أعلى' },
    },
    {
      id: 'hl-1', goal: 'healthy-lifestyle', name: 'منيرة', age: 32, duration: '12 أسبوعًا',
      excerpt: 'غيّرت عاداتي الصغيرة… فتغيّر يومي بالكامل.',
      story: 'النوم والمشي والوجبات صارت أوضح. لم أحتج مثالية، احتجت انتظامًا.',
      image: 'assets/img/goal-healthy-lifestyle.png',
      metrics: { duration: '12 أسبوعًا', sessions: 'متابعة أسبوعية', result: 'عادات يومية أوضح' },
    },
    {
      id: 'hl-2', goal: 'healthy-lifestyle', name: 'سلمى', age: 27, duration: '10 أسابيع',
      excerpt: 'نمط الحياة الصحي بدأ بمطبخ أبسط ويوم أكثر هدوءًا.',
      story: 'رتّبنا روتيني حول واقعي لا حول مثالي. النتيجة استمرارية حقيقية.',
      image: 'assets/img/goal-healthy-lifestyle.png',
      metrics: { duration: '10 أسابيع', sessions: 'متابعة مرنة', result: 'توازن يومي أفضل' },
    },
    {
      id: 'hl-3', goal: 'healthy-lifestyle', name: 'أثير', age: 35, duration: '14 أسبوعًا',
      excerpt: 'صرت أختار لنفسي بهدوء… وهذا أكبر تحوّل.',
      story: 'الوعي قبل الحرمان. تعلّمت أسمع جسدي وأحترم حدودي.',
      image: 'assets/img/goal-healthy-lifestyle.png',
      metrics: { duration: '14 أسبوعًا', sessions: 'جلسات إرشاد', result: 'وعي واختيارات أوضح' },
    },
    {
      id: 'hl-4', goal: 'healthy-lifestyle', name: 'يارا', age: 29, duration: '8 أسابيع',
      excerpt: 'ثماني أسابيع كافية لتثبيت عادة جديدة.',
      story: 'ركزنا على عادة واحدة كل أسبوعين. التراكم صنع أسلوب حياة.',
      image: 'assets/img/goal-healthy-lifestyle.png',
      metrics: { duration: '8 أسابيع', sessions: 'متابعة قصيرة', result: 'عادات قابلة للاستمرار' },
    },
  ];

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  function normalizeGoal(raw) {
    const key = String(raw || 'all').trim().toLowerCase();
    const mapped = ALIASES[key] || key;
    return GOALS[mapped] ? mapped : 'all';
  }

  function goalLabel(id) {
    return (GOALS[id] && GOALS[id].label) || id;
  }

  function storiesFor(goalId) {
    if (goalId === 'all') return STORIES.slice();
    return STORIES.filter((s) => s.goal === goalId);
  }

  function initStoriesPage() {
    const page = $('#storiesPage');
    if (!page) return;

    const titleEl = $('#spTitle');
    const countEl = $('#spCount');
    const filtersEl = $('#spFilters');
    const visualImg = $('#spVisualImg');
    const visualName = $('#spVisualName');
    const listEl = $('#spList');
    const emptyEl = $('#spEmpty');
    const modal = $('#spModal');
    const modalDialog = $('.sp-modal-dialog', modal);
    const modalBody = $('#spModalBody');

    let current = normalizeGoal(new URLSearchParams(location.search).get('goal'));
    let animToken = 0;
    let lastFocus = null;

    function syncUrl(goalId) {
      const url = new URL(location.href);
      if (goalId === 'all') url.searchParams.delete('goal');
      else url.searchParams.set('goal', goalId);
      history.replaceState({}, '', url);
    }

    function renderFilters() {
      filtersEl.innerHTML = '';
      Object.keys(GOALS).forEach((id) => {
        const g = GOALS[id];
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'sp-pill' + (id === current ? ' is-active' : '');
        btn.setAttribute('data-goal', id);
        btn.setAttribute('aria-pressed', id === current ? 'true' : 'false');
        btn.textContent = g.label;
        btn.addEventListener('click', () => setGoal(id));
        filtersEl.appendChild(btn);
      });
    }

    function updateHero(goalId) {
      const g = GOALS[goalId] || GOALS.all;
      const n = storiesFor(goalId).length;
      titleEl.textContent = g.title;
      if (countEl) countEl.textContent = n + ' قصص ملهمة';
      visualImg.src = g.image;
      visualImg.alt = g.label;
      visualName.textContent = g.label === 'كل القصص' ? 'كل القصص' : g.label;
    }

    function cardHtml(story) {
      const tag = goalLabel(story.goal);
      return (
        '<article class="sp-card" data-story-id="' + story.id + '" tabindex="0" role="button" aria-label="اقرئي قصة ' + story.name + '">' +
          '<div class="sp-card-top">' +
            '<p class="sp-card-name">' + story.name + '، ' + story.age + ' سنة</p>' +
            '<span class="sp-card-tag">' + tag + '</span>' +
          '</div>' +
          '<p class="sp-card-excerpt">' + story.excerpt + '</p>' +
          '<div class="sp-card-foot">' +
            '<span class="sp-card-duration">' + story.duration + '</span>' +
            '<span class="sp-card-more">اقرئي قصتها <svg class="ico" aria-hidden="true"><use href="#i-arrow"></use></svg></span>' +
          '</div>' +
        '</article>'
      );
    }

    function bindCards() {
      $$('.sp-card', listEl).forEach((card) => {
        const open = () => openModal(card.getAttribute('data-story-id'));
        card.addEventListener('click', open);
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            open();
          }
        });
      });
    }

    function renderList(goalId, animate) {
      const items = storiesFor(goalId).slice(0, 6);
      const token = ++animToken;

      const finish = () => {
        if (token !== animToken) return;
        if (!items.length) {
          listEl.innerHTML = '';
          listEl.hidden = true;
          emptyEl.hidden = false;
          return;
        }
        emptyEl.hidden = true;
        listEl.hidden = false;
        listEl.innerHTML = items.map(cardHtml).join('');
        bindCards();
        if (animate) {
          $$('.sp-card', listEl).forEach((card, i) => {
            card.classList.add('is-enter');
            card.style.transitionDelay = (i * 55) + 'ms';
            requestAnimationFrame(() => {
              requestAnimationFrame(() => card.classList.remove('is-enter'));
            });
          });
        }
      };

      if (animate && listEl.children.length) {
        $$('.sp-card', listEl).forEach((card) => card.classList.add('is-leave'));
        window.setTimeout(finish, 220);
      } else {
        finish();
      }
    }

    function setGoal(goalId, animate) {
      current = normalizeGoal(goalId);
      syncUrl(current);
      renderFilters();
      updateHero(current);
      renderList(current, animate !== false);
    }

    let modalIndex = 0;
    let modalQueue = [];
    let modalBusy = false;
    const prevBtn = $('#spModalPrev', modal);
    const nextBtn = $('#spModalNext', modal);

    function queueStories() {
      return storiesFor(current).slice(0, 6);
    }

    function syncNavButtons() {
      const atStart = modalIndex <= 0;
      const atEnd = modalIndex >= modalQueue.length - 1;
      if (prevBtn) {
        prevBtn.disabled = atStart;
        prevBtn.setAttribute('aria-disabled', atStart ? 'true' : 'false');
      }
      if (nextBtn) {
        nextBtn.disabled = atEnd;
        nextBtn.setAttribute('aria-disabled', atEnd ? 'true' : 'false');
      }
      $$('.sp-modal-nav-m', modalBody).forEach((btn) => {
        const dir = btn.getAttribute('data-sp-nav');
        const off = dir === 'prev' ? atStart : atEnd;
        btn.disabled = off;
        btn.setAttribute('aria-disabled', off ? 'true' : 'false');
      });
    }

    function bindMobileNav() {
      $$('.sp-modal-nav-m', modalBody).forEach((btn) => {
        btn.addEventListener('click', () => {
          const dir = btn.getAttribute('data-sp-nav');
          goModal(dir === 'next' ? 1 : -1);
        });
      });
    }

    function fillModalContent(story, index, total) {
      const tag = goalLabel(story.goal);
      const m = story.metrics || {};
      modalBody.innerHTML =
        '<div class="sp-modal-panel" id="spModalPanel">' +
          '<p class="sp-modal-index" id="spModalTitle">' + (index + 1) + ' من ' + total + ' قصص</p>' +
          '<div class="sp-modal-media">' +
            '<img src="' + story.image + '" alt="" width="760" height="420" loading="lazy">' +
          '</div>' +
          '<div class="sp-modal-nav-mobile" aria-label="التنقل بين القصص">' +
            '<button class="sp-modal-nav sp-modal-nav-m" type="button" data-sp-nav="prev" aria-label="القصة السابقة">' +
              '<svg class="ico" aria-hidden="true"><use href="#i-arrow"></use></svg>' +
            '</button>' +
            '<button class="sp-modal-nav sp-modal-nav-m" type="button" data-sp-nav="next" aria-label="القصة التالية">' +
              '<svg class="ico sp-modal-nav-flip" aria-hidden="true"><use href="#i-arrow"></use></svg>' +
            '</button>' +
          '</div>' +
          '<header class="sp-modal-head">' +
            '<p class="sp-modal-name">' + story.name + '، ' + story.age + ' سنة</p>' +
            '<span class="sp-card-tag">' + tag + '</span>' +
          '</header>' +
          '<div class="sp-modal-story">' +
            '<p>' + story.story + '</p>' +
          '</div>' +
          '<section class="sp-modal-metrics" aria-label="رحلتها في أرقام">' +
            '<h3>رحلتها في أرقام</h3>' +
            '<ul>' +
              '<li><span>المدة</span><strong>' + (m.duration || story.duration) + '</strong></li>' +
              '<li><span>الجلسات</span><strong>' + (m.sessions || '—') + '</strong></li>' +
              '<li><span>المحصلة</span><strong>' + (m.result || '—') + '</strong></li>' +
            '</ul>' +
          '</section>' +
          '<button class="btn btn-primary sp-modal-cta" type="button" data-open-booking-modal aria-haspopup="dialog" aria-controls="bookingModal">' +
            'ابدئي رحلتكِ المشابهة' +
            '<svg class="ico btn-ico" aria-hidden="true"><use href="#i-arrow"></use></svg>' +
          '</button>' +
        '</div>';
      bindMobileNav();
      syncNavButtons();
    }

    function openModal(id) {
      if (!modal) return;
      modalQueue = queueStories();
      modalIndex = modalQueue.findIndex((s) => s.id === id);
      if (modalIndex < 0) return;
      lastFocus = document.activeElement;
      fillModalContent(modalQueue[modalIndex], modalIndex, modalQueue.length);
      modal.hidden = false;
      modal.setAttribute('aria-hidden', 'false');
      document.documentElement.classList.add('is-sp-modal-open');
      (modalDialog || modal).focus();
    }

    function goModal(delta) {
      if (modalBusy || !modal || modal.hidden) return;
      const next = modalIndex + delta;
      if (next < 0 || next >= modalQueue.length) return;
      const panel = $('#spModalPanel', modalBody);
      const leaveClass = delta > 0 ? 'is-leave-next' : 'is-leave-prev';
      const enterClass = delta > 0 ? 'is-enter-next' : 'is-enter-prev';
      modalBusy = true;
      if (panel) panel.classList.add(leaveClass);
      window.setTimeout(() => {
        modalIndex = next;
        fillModalContent(modalQueue[modalIndex], modalIndex, modalQueue.length);
        const fresh = $('#spModalPanel', modalBody);
        if (fresh) {
          fresh.classList.add(enterClass);
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              fresh.classList.remove(enterClass);
              modalBusy = false;
            });
          });
        } else {
          modalBusy = false;
        }
        const scroll = modalBody;
        if (scroll) scroll.scrollTop = 0;
      }, 180);
    }

    function closeModal() {
      if (!modal || modal.hidden) return;
      modal.hidden = true;
      modal.setAttribute('aria-hidden', 'true');
      document.documentElement.classList.remove('is-sp-modal-open');
      modalBusy = false;
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    if (prevBtn) prevBtn.addEventListener('click', () => goModal(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => goModal(1));

    $$('[data-sp-close]', modal).forEach((el) => el.addEventListener('click', closeModal));
    document.addEventListener('keydown', (e) => {
      if (modal.hidden) return;
      if (document.body.classList.contains('is-bk-open')) return;
      if (e.key === 'Escape') {
        closeModal();
        return;
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        goModal(1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goModal(-1);
      }
    });

    const showAllBtn = $('[data-sp-show-all]', emptyEl);
    if (showAllBtn) showAllBtn.addEventListener('click', () => setGoal('all'));

    setGoal(current, false);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStoriesPage);
  } else {
    initStoriesPage();
  }
})();
