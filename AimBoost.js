AimBoostX.js
// AimBoostX.js - Tăng hỗ trợ kéo tâm, giảm rung
let body = $response.body;

body = body
  .replace(/aimAssist":false/g, 'aimAssist":true')
  .replace(/recoil":\d+/g, 'recoil":0')
  .replace(/shake":\d+/g, 'shake":0')
  .replace(/sensitivity":\d+/g, 'sensitivity":999')
  .replace(/dragAssist":false/g, 'dragAssist":true');

$done({ body });
