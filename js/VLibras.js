// (function() {
//     var vw = document.createElement('div');
//     vw.classList.add('enabled');
  
//     var vwAccessButton = document.createElement('div');
//     vwAccessButton.classList.add('vw-access-button', 'active');
  
//     var vwPluginWrapper = document.createElement('div');
//     vwPluginWrapper.classList.add('vw-plugin-wrapper');
  
//     var vwPluginTopWrapper = document.createElement('div'); 
//     vwPluginTopWrapper.classList.add('vw-plugin-top-wrapper');
  
//     vwPluginWrapper.appendChild(vwPluginTopWrapper);
//     vw.appendChild(vwAccessButton);
//     vw.appendChild(vwPluginWrapper);
  
//     var script = document.createElement('script');
//     script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
//     script.onload = function() {
//       new window.VLibras.Widget('https://vlibras.gov.br/app');
//     };
  
//     document.body.appendChild(vw);
//     document.body.appendChild(script);
//   })();