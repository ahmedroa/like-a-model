export default function FloatingActions() {
  return (
    <>
      {/* Floating actions */}
      <button className="fab fab-chat" id="chatbotOpen" type="button" aria-label="كيف نساعدكِ؟" aria-haspopup="dialog" aria-controls="chatbot" aria-expanded="false" hidden>
        <span className="fab-chat-tip" aria-hidden="true">كيف نساعدكِ؟</span>
        <svg className="ico" aria-hidden="true"><use href="#i-chat"></use></svg>
      </button>
      <a className="fab fab-wa" id="fabWhatsapp" href="#" rel="noopener" aria-label="تواصلي عبر واتساب" hidden>
        <svg className="ico" aria-hidden="true"><use href="#i-whatsapp"></use></svg>
      </a>
      <button className="fab fab-top" id="toTop" type="button" aria-label="العودة للأعلى" hidden>
        <svg className="ico" aria-hidden="true"><use href="#i-arrowup"></use></svg>
      </button>

      {/* Chatbot FAQ (أسئلة ثابتة — بدون API) */}
      <div className="chatbot" id="chatbot" hidden aria-hidden="true">
        <div className="chatbot-backdrop" data-chat-close tabIndex="-1"></div>
        <div className="chatbot-panel" role="dialog" aria-modal="true" aria-labelledby="chatbotTitle" tabIndex="-1">
          <header className="chatbot-head">
            <div className="chatbot-head-text">
              <h2 className="chatbot-title" id="chatbotTitle">مساعدة Like A Model</h2>
              <p className="chatbot-sub">اختاري سؤالكِ وسنجيبكِ فورًا</p>
            </div>
            <button className="chatbot-close" type="button" data-chat-close aria-label="إغلاق">
              <svg className="ico" aria-hidden="true"><use href="#i-close"></use></svg>
            </button>
          </header>
          <div className="chatbot-thread" id="chatbotThread" role="log" aria-live="polite" aria-relevant="additions"></div>
        </div>
      </div>
    </>
  );
}
