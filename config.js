/* ==========================================================
   SITE OFICIAL DO SISTEMA · configuração
   - o preço e o link do WhatsApp vêm do servidor (definidos no painel, em Aparelhos)
   - estes valores só são usados se o servidor não responder
   - o APK tem mais de 100 MB: o GitHub não aceita ficheiros desse tamanho no repositório,
     por isso fica num «Release» do GitHub e aqui vai o link direto (vê download/LEIA-ME.txt)
   ========================================================== */
window.SITE_CONFIG = {
  api: 'https://sistema-loja.delciobentocunha007.workers.dev',
  price_kz: 5000,          // preço da ativação (Kz), se o servidor não responder
  price_old_kz: 7500,      // preço normal riscado (0 = sem promoção)
  whatsapp: '244947976103', // número com indicativo (só é usado se o servidor não responder)
  apk: 'https://github.com/DelcioCunha/SystemWebsite2/releases/download/v1.0/Sistema.apk',
  apk_version: '1.0',
  apk_size: '114 MB',
  min_android: 'Android 6 ou superior'
};
