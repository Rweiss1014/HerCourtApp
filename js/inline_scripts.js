(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"http://schema.org","@type":"SoftwareApplication","name":"TalkingParents","url":"/","downloadUrl":["https://itunes.apple.com/us/app/talkingparents/id1092220726","https://play.google.com/store/apps/details?id=com.talkingparents.tpandroid"]}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  const swiper = new Swiper('.swiper', {
      pagination: {
        el: ".swiper-pagination",
      },
      autoplay: {    
        delay: 10000,  
      },
    });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"Co-Regulation Strategies for Co-Parents","image":"/src/assets/images/blog/2025_Dec/Hero-coreg.jpg","author":{"@type":"","name":"Bryan Post"},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"12/11/2025 2:19:31 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"WebSite","name":"TalkingParents Media Kit | TalkingParents","url":"https://talkingparents.com/media-kit"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  const swiper = new Swiper('.swiper', {
      pagination: {
        el: ".swiper-pagination",
      },
      autoplay: {    
        delay: 10000,  
      },
    });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"WebSite","name":"Parenting Resources | TalkingParents","url":"https://talkingparents.com/parenting-resources"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"WebSite","name":"Pricing | TalkingParents","url":"https://talkingparents.com/pricing"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===

(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();

// === Inline Script Block ===

(()=>{var A=Object.defineProperty;var g=(i,o,a)=>o in i?A(i,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[o]=a;var d=(i,o,a)=>g(i,typeof o!="symbol"?o+"":o,a);{let i={0:t=>m(t),1:t=>a(t),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(a(t)),5:t=>new Set(a(t)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(t),9:t=>new Uint16Array(t),10:t=>new Uint32Array(t),11:t=>1/0*t},o=t=>{let[l,e]=t;return l in i?i[l](e):void 0},a=t=>t.map(o),m=t=>typeof t!="object"||t===null?t:Object.fromEntries(Object.entries(t).map(([l,e])=>[l,o(e)]));class y extends HTMLElement{constructor(){super(...arguments);d(this,"Component");d(this,"hydrator");d(this,"hydrate",async()=>{var b;if(!this.hydrator||!this.isConnected)return;let e=(b=this.parentElement)==null?void 0:b.closest("astro-island[ssr]");if(e){e.addEventListener("astro:hydrate",this.hydrate,{once:!0});return}let c=this.querySelectorAll("astro-slot"),n={},h=this.querySelectorAll("template[data-astro-template]");for(let r of h){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n[r.getAttribute("data-astro-template")||"default"]=r.innerHTML,r.remove())}for(let r of c){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n[r.getAttribute("name")||"default"]=r.innerHTML)}let p;try{p=this.hasAttribute("props")?m(JSON.parse(this.getAttribute("props"))):{}}catch(r){let s=this.getAttribute("component-url")||"<unknown>",v=this.getAttribute("component-export");throw v&&(s+=` (export ${v})`),console.error(`[hydrate] Error parsing props for component ${s}`,this.getAttribute("props"),r),r}let u;await this.hydrator(this)(this.Component,p,n,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))});d(this,"unmount",()=>{this.isConnected||this.dispatchEvent(new CustomEvent("astro:unmount"))})}disconnectedCallback(){document.removeEventListener("astro:after-swap",this.unmount),document.addEventListener("astro:after-swap",this.unmount,{once:!0})}connectedCallback(){if(!this.hasAttribute("await-children")||document.readyState==="interactive"||document.readyState==="complete")this.childrenConnectedCallback();else{let e=()=>{document.removeEventListener("DOMContentLoaded",e),c.disconnect(),this.childrenConnectedCallback()},c=new MutationObserver(()=>{var n;((n=this.lastChild)==null?void 0:n.nodeType)===Node.COMMENT_NODE&&this.lastChild.nodeValue==="astro:end"&&(this.lastChild.remove(),e())});c.observe(this,{childList:!0}),document.addEventListener("DOMContentLoaded",e)}}async childrenConnectedCallback(){let e=this.getAttribute("before-hydration-url");e&&await import(e),this.start()}async start(){let e=JSON.parse(this.getAttribute("opts")),c=this.getAttribute("client");if(Astro[c]===void 0){window.addEventListener(`astro:${c}`,()=>this.start(),{once:!0});return}try{await Astro[c](async()=>{let n=this.getAttribute("renderer-url"),[h,{default:p}]=await Promise.all([import(this.getAttribute("component-url")),n?import(n):()=>()=>{}]),u=this.getAttribute("component-export")||"default";if(!u.includes("."))this.Component=h[u];else{this.Component=h;for(let f of u.split("."))this.Component=this.Component[f]}return this.hydrator=p,this.hydrate},e,this)}catch(n){console.error(`[astro-island] Error hydrating ${this.getAttribute("component-url")}`,n)}}attributeChangedCallback(){this.hydrate()}}d(y,"observedAttributes",["props"]),customElements.get("astro-island")||customElements.define("astro-island",y)}})();

// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"WebSite","name":"Vault File Storage | TalkingParents","url":"https://talkingparents.com/features/vault-storage"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  var quoteElem = document.querySelector(".quote-flick");
  var flkty = new Flickity(quoteElem, {
        fade: true,
        prevNextButtons: false,
        adaptiveHeight: false,
        pageDots: true,
        draggable: true,
        contain: false,
        autoPlay: false,
        percentPosition: false
      });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"WebSite","name":"Secure Messaging | TalkingParents","url":"https://talkingparents.com/features/secure-messaging"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  var quoteElem = document.querySelector(".quote-flick");
  var flkty = new Flickity(quoteElem, {
        fade: true,
        prevNextButtons: false,
        adaptiveHeight: false,
        pageDots: true,
        draggable: true,
        contain: false,
        autoPlay: false,
        percentPosition: false
      });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"WebSite","name":"About Us | TalkingParents","url":"https://talkingparents.com/about-us"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"WebSite","name":"Privacy Policy | TalkingParents","url":"https://talkingparents.com/privacy-policy"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"WebSite","name":"Get started | TalkingParents","url":"https://talkingparents.com/get-started"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"WebSite","name":"Personal Journal | TalkingParents","url":"https://talkingparents.com/features/personal-journal"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  var quoteElem = document.querySelector(".quote-flick");
  var flkty = new Flickity(quoteElem, {
        fade: true,
        prevNextButtons: false,
        adaptiveHeight: false,
        pageDots: true,
        draggable: true,
        contain: false,
        autoPlay: false,
        percentPosition: false
      });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"WebSite","name":"Terms of Service | TalkingParents","url":"https://talkingparents.com/terms-of-service"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"VideoObject","name":"From Conflict to Connection: Navigating Stepfamily Dynamics","description":"In this live webinar, an expert panel covers the unique challenges faced by blended families and how parents, stepparents, and children can navigate these situations with success.","thumbnailUrl":"/src/assets/images/landing-pages/stepfamily-dynamics-webinar/Article-Teaser-526x276.png","uploadDate":"12/10/2025 9:00:00 AM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===


          /**
          *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
          *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
            
          const webinarData = document.getElementById('webinar_data')
          const url = window.location.toString()
          const id = webinarData.dataset.id
            var disqus_config = function () {
              this.page.url = url;  // Replace PAGE_URL with your page's canonical URL variable
              this.page.identifier = id; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
            };
            
            (function() { // DON'T EDIT BELOW THIS LINE
              var d = document, s = d.createElement('script');
              s.src = 'https://talkingparents.disqus.com/embed.js';
              s.setAttribute('data-timestamp', +new Date());
              (d.head || d.body).appendChild(s);
            })();
      

// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"WebSite","name":"Features | TalkingParents","url":"https://talkingparents.com/features"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"WebSite","name":"Unalterable Records | TalkingParents","url":"https://talkingparents.com/features/unalterable-records"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  var quoteElem = document.querySelector(".quote-flick");
  var flkty = new Flickity(quoteElem, {
        fade: true,
        prevNextButtons: false,
        adaptiveHeight: false,
        pageDots: true,
        draggable: true,
        contain: false,
        autoPlay: false,
        percentPosition: false
      });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"WebSite","name":"Info Library | TalkingParents","url":"https://talkingparents.com/features/info-library"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  var quoteElem = document.querySelector(".quote-flick");
  var flkty = new Flickity(quoteElem, {
        fade: true,
        prevNextButtons: false,
        adaptiveHeight: false,
        pageDots: true,
        draggable: true,
        contain: false,
        autoPlay: false,
        percentPosition: false
      });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===


  window.addEventListener("DOMContentLoaded", (event) => {
    const searchInput =  document.getElementById("txtWord");
    const searchBtn =  document.getElementById("btnSearch");
      if (searchInput) {
        // You now have access to the input element
        searchInput.addEventListener("keydown", (event) => {
          if (event.key === "Enter") {
            event.preventDefault(); // Prevent default form submission behavior
            const searchText = searchInput.value.trim(); // Get the input text
            if (searchText) {
              // Construct the URL width the search query as a parameter
              submitSearch(searchText)
            }
          }
        });
      }
  
      if (searchBtn) {
        searchBtn.addEventListener("click", (event) => {
          event.preventDefault(); // Prevent default form submission behavior
          const searchText = searchInput.value.trim(); // Get the input text
          if (searchText) {
            // Construct the URL width the search query as a parameter
            submitSearch(searchText)
          }
        });
      }
  
      function submitSearch(searchText) {
        const searchUrl = `/media/search-results?q=${encodeURIComponent(searchText)}`;
        // Redirect the user to the new page
        window.location.href = searchUrl;
      }
  });


// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"WebSite","name":"all - Page 1 | TalkingParents","url":"https://talkingparents.com/media/all/1"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"WebSite","name":"Real-co-parents Resources | TalkingParents","url":"https://talkingparents.com/parenting-resources"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"WebSite","name":"Competitor Comparison | TalkingParents","url":"https://talkingparents.com/why-use-talkingparents-over-competitors"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"WebSite","name":"Careers | TalkingParents","url":"https://talkingparents.com/careers"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"WebSite","name":"Shared Calendar | TalkingParents","url":"https://talkingparents.com/features/shared-calendar"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  var quoteElem = document.querySelector(".quote-flick");
  var flkty = new Flickity(quoteElem, {
        fade: true,
        prevNextButtons: false,
        adaptiveHeight: false,
        pageDots: true,
        draggable: true,
        contain: false,
        autoPlay: false,
        percentPosition: false
      });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"WebSite","name":"Guest-author Resources | TalkingParents","url":"https://talkingparents.com/parenting-resources"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===


  window.addEventListener("DOMContentLoaded", (event) => {
    const searchInput =  document.getElementById("txtWord");
    const searchBtn =  document.getElementById("btnSearch");
      if (searchInput) {
        // You now have access to the input element
        searchInput.addEventListener("keydown", (event) => {
          if (event.key === "Enter") {
            event.preventDefault(); // Prevent default form submission behavior
            const searchText = searchInput.value.trim(); // Get the input text
            if (searchText) {
              // Construct the URL width the search query as a parameter
              submitSearch(searchText)
            }
          }
        });
      }
  
      if (searchBtn) {
        searchBtn.addEventListener("click", (event) => {
          event.preventDefault(); // Prevent default form submission behavior
          const searchText = searchInput.value.trim(); // Get the input text
          if (searchText) {
            // Construct the URL width the search query as a parameter
            submitSearch(searchText)
          }
        });
      }
  
      function submitSearch(searchText) {
        const searchUrl = `/media/search-results?q=${encodeURIComponent(searchText)}`;
        // Redirect the user to the new page
        window.location.href = searchUrl;
      }
  });


// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"WebSite","name":"television - Page 1 | TalkingParents","url":"https://talkingparents.com/media/all/1"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"Preparing for Court with TalkingParents","image":"https://media.talkingparents.com/kentico-media/talkingparents/media/blog-images/2024-06/court-prep/hero-court-min.jpg?ext=.jpg","author":{"@type":"","name":""},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"6/21/2024 4:10:10 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"What Can I Do if A Stepparent Oversteps?","image":"/src/assets/images/blog/2025_Jan/Hero-stepparent.jpg","author":{"@type":"","name":""},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"1/21/2025 8:30:35 AM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"How BIFF Communication Can Reduce Conflict","image":"/src/assets/images/blog/2025_Dec/Hero-biff.jpg","author":{"@type":"","name":""},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"12/2/2025 2:19:31 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"Real Co-Parents: Diane Schroeder","image":"","author":{"@type":"","name":""},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"7/31/2024 4:06:57 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"Real Co-Parents: Meghan Kelly","image":"","author":{"@type":"","name":""},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"3/3/2023 7:10:23 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"What Does It Mean to Be in a Multi-Parent Family?","image":"https://media.talkingparents.com/kentico-media/talkingparents/media/blog-images/2023-04/multi-parent_family/hero-multiparent-min.png?ext=.png","author":{"@type":"","name":"Sarah Jacobs"},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"4/26/2023 3:11:12 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"How a Prenup Affects the Divorce Process","image":"/src/assets/images/blog/2025_Nov/Hero-prenup.jpg","author":{"@type":"","name":"Duane Coker"},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"11/12/2025 2:19:31 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"5 Ways to Support and Prioritize Your Child During Divorce","image":"/src/assets/images/blog/2025_Feb/Hero-support.jpg","author":{"@type":"","name":"Bella Duncan"},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"2/21/2025 8:30:35 AM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"WebSite","name":"Family-law Resources | TalkingParents","url":"https://talkingparents.com/parenting-resources"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"How Financial Wellness Supports Your Mental Health","image":"https://media.talkingparents.com/kentico-media/talkingparents/media/blog-images/2024-02/financial-wellness/hero-financial-wellness-min.jpg?ext=.jpg","author":{"@type":"","name":""},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"2/27/2024 3:55:50 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"http://schema.org","@type":"SoftwareApplication","name":"TalkingParents","url":"/","downloadUrl":["https://itunes.apple.com/us/app/talkingparents/id1092220726","https://play.google.com/store/apps/details?id=com.talkingparents.tpandroid"]}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"http://schema.org","@type":"SoftwareApplication","name":"TalkingParents","url":"/","downloadUrl":["https://itunes.apple.com/us/app/talkingparents/id1092220726","https://play.google.com/store/apps/details?id=com.talkingparents.tpandroid"]}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"VideoObject","name":"Protecting Kids in High Conflict Co-Parenting Situations","description":"In this webinar, a Divorce and Co-Parenting Specialist describes how to protect your relationship with your kids when dealing with a high conflict co-parent.","thumbnailUrl":"/src/assets/images/landing-pages/protecting-kids-webinar/Article-Teaser-526x276.png","uploadDate":"3/26/2025 9:00:00 AM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===


          /**
          *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
          *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
            
          const webinarData = document.getElementById('webinar_data')
          const url = window.location.toString()
          const id = webinarData.dataset.id
            var disqus_config = function () {
              this.page.url = url;  // Replace PAGE_URL with your page's canonical URL variable
              this.page.identifier = id; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
            };
            
            (function() { // DON'T EDIT BELOW THIS LINE
              var d = document, s = d.createElement('script');
              s.src = 'https://talkingparents.disqus.com/embed.js';
              s.setAttribute('data-timestamp', +new Date());
              (d.head || d.body).appendChild(s);
            })();
      

// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"How to Make a Parallel Parenting Plan","image":"/src/assets/images/blog/2025_April/Hero-parallel.jpg","author":{"@type":"","name":""},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"4/09/2025 8:30:35 AM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"What Are Developmental Milestones?","image":"/src/assets/images/blog/2025_Feb/Hero-milestones.jpg","author":{"@type":"","name":""},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"2/19/2025 8:30:35 AM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===


  window.addEventListener("DOMContentLoaded", (event) => {
    const searchInput =  document.getElementById("txtWord");
    const searchBtn =  document.getElementById("btnSearch");
      if (searchInput) {
        // You now have access to the input element
        searchInput.addEventListener("keydown", (event) => {
          if (event.key === "Enter") {
            event.preventDefault(); // Prevent default form submission behavior
            const searchText = searchInput.value.trim(); // Get the input text
            if (searchText) {
              // Construct the URL width the search query as a parameter
              submitSearch(searchText)
            }
          }
        });
      }
  
      if (searchBtn) {
        searchBtn.addEventListener("click", (event) => {
          event.preventDefault(); // Prevent default form submission behavior
          const searchText = searchInput.value.trim(); // Get the input text
          if (searchText) {
            // Construct the URL width the search query as a parameter
            submitSearch(searchText)
          }
        });
      }
  
      function submitSearch(searchText) {
        const searchUrl = `/media/search-results?q=${encodeURIComponent(searchText)}`;
        // Redirect the user to the new page
        window.location.href = searchUrl;
      }
  });


// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"WebSite","name":"press-releases - Page 1 | TalkingParents","url":"https://talkingparents.com/media/all/1"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"Stress Management for Kids","image":"https://tparentsv2.blob.core.windows.net/kentico-media/talkingparents/media/blog-images/2021-06/kidsstress/hero-kidsstressed.jpg?ext=.jpg","author":{"@type":"","name":""},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"6/14/2021 8:24:36 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"What is Counter Parenting?","image":"https://media.talkingparents.com/kentico-media/talkingparents/media/blog-images/2024-06/counter-parenting/hero-counter-min.jpg?ext=.jpg","author":{"@type":"","name":""},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"6/7/2024 2:16:51 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"What are the Penalties for Missed Child Support?","image":"/src/assets/images/blog/2025_May/Hero-support.jpg","author":{"@type":"","name":""},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"5/28/2025 2:19:31 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"What is Alternative Dispute Resolution?","image":"/src/assets/images/blog/2025_Oct/Hero-adr.jpg","author":{"@type":"","name":""},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"10/20/2025 2:19:31 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"http://schema.org","@type":"SoftwareApplication","name":"TalkingParents","url":"/","downloadUrl":["https://itunes.apple.com/us/app/talkingparents/id1092220726","https://play.google.com/store/apps/details?id=com.talkingparents.tpandroid"]}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===


  window.addEventListener("DOMContentLoaded", (event) => {
    const searchInput =  document.getElementById("txtWord");
    const searchBtn =  document.getElementById("btnSearch");
      if (searchInput) {
        // You now have access to the input element
        searchInput.addEventListener("keydown", (event) => {
          if (event.key === "Enter") {
            event.preventDefault(); // Prevent default form submission behavior
            const searchText = searchInput.value.trim(); // Get the input text
            if (searchText) {
              // Construct the URL width the search query as a parameter
              submitSearch(searchText)
            }
          }
        });
      }
  
      if (searchBtn) {
        searchBtn.addEventListener("click", (event) => {
          event.preventDefault(); // Prevent default form submission behavior
          const searchText = searchInput.value.trim(); // Get the input text
          if (searchText) {
            // Construct the URL width the search query as a parameter
            submitSearch(searchText)
          }
        });
      }
  
      function submitSearch(searchText) {
        const searchUrl = `/media/search-results?q=${encodeURIComponent(searchText)}`;
        // Redirect the user to the new page
        window.location.href = searchUrl;
      }
  });


// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"WebSite","name":"all - Page 2 | TalkingParents","url":"https://talkingparents.com/media/all/1"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"Co-Parenting a Student-Athlete","image":"https://media.talkingparents.com/kentico-media/talkingparents/media/blog-images/2022_08/studentathletes/hero-min.png?ext=.png","author":{"@type":"","name":""},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"8/8/2022 7:30:32 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"Becoming a Stepparent","image":"https://tparentsv2.blob.core.windows.net/kentico-media/talkingparents/media/blog-images/2020-11/stepparent/hero-stepparent.jpg?ext=.jpg","author":{"@type":"","name":""},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"11/19/2020 2:28:39 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"The Role of Mediation in Resolving High Conflict Divorce Cases","image":"https://media.talkingparents.com/kentico-media/talkingparents/media/blog-images/2024-02/mediator-guest-author/hero-mediator-guest-min.jpg?ext=.jpg","author":{"@type":"","name":"Duane Coker"},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"2/22/2024 8:52:26 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"http://schema.org","@type":"SoftwareApplication","name":"TalkingParents","url":"/","downloadUrl":["https://itunes.apple.com/us/app/talkingparents/id1092220726","https://play.google.com/store/apps/details?id=com.talkingparents.tpandroid"]}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"3 Ways TalkingParents Streamlines Co-Parenting","image":"https://media.talkingparents.com/kentico-media/talkingparents/media/blog-images/2024-03/streamlining/hero-streamline-min.png?ext=.png","author":{"@type":"","name":""},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"4/1/2024 6:59:31 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"http://schema.org","@type":"SoftwareApplication","name":"TalkingParents","url":"/","downloadUrl":["https://itunes.apple.com/us/app/talkingparents/id1092220726","https://play.google.com/store/apps/details?id=com.talkingparents.tpandroid"]}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===


  window.addEventListener("DOMContentLoaded", (event) => {
    const searchInput =  document.getElementById("txtWord");
    const searchBtn =  document.getElementById("btnSearch");
      if (searchInput) {
        // You now have access to the input element
        searchInput.addEventListener("keydown", (event) => {
          if (event.key === "Enter") {
            event.preventDefault(); // Prevent default form submission behavior
            const searchText = searchInput.value.trim(); // Get the input text
            if (searchText) {
              // Construct the URL width the search query as a parameter
              submitSearch(searchText)
            }
          }
        });
      }
  
      if (searchBtn) {
        searchBtn.addEventListener("click", (event) => {
          event.preventDefault(); // Prevent default form submission behavior
          const searchText = searchInput.value.trim(); // Get the input text
          if (searchText) {
            // Construct the URL width the search query as a parameter
            submitSearch(searchText)
          }
        });
      }
  
      function submitSearch(searchText) {
        const searchUrl = `/media/search-results?q=${encodeURIComponent(searchText)}`;
        // Redirect the user to the new page
        window.location.href = searchUrl;
      }
  });


// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"WebSite","name":"podcasts - Page 1 | TalkingParents","url":"https://talkingparents.com/media/all/1"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"Healing from Co-Parenting Conflict: Building Trust and Collaboration","image":"https://media.talkingparents.com/kentico-media/talkingparents/media/blog-images/2024-03/building-trust/hero-trust-min.jpg?ext=.jpg","author":{"@type":"","name":"Michael Vallejo"},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"3/4/2024 1:44:00 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===


  window.addEventListener("DOMContentLoaded", (event) => {
    const searchInput =  document.getElementById("txtWord");
    const searchBtn =  document.getElementById("btnSearch");
      if (searchInput) {
        // You now have access to the input element
        searchInput.addEventListener("keydown", (event) => {
          if (event.key === "Enter") {
            event.preventDefault(); // Prevent default form submission behavior
            const searchText = searchInput.value.trim(); // Get the input text
            if (searchText) {
              // Construct the URL width the search query as a parameter
              submitSearch(searchText)
            }
          }
        });
      }
  
      if (searchBtn) {
        searchBtn.addEventListener("click", (event) => {
          event.preventDefault(); // Prevent default form submission behavior
          const searchText = searchInput.value.trim(); // Get the input text
          if (searchText) {
            // Construct the URL width the search query as a parameter
            submitSearch(searchText)
          }
        });
      }
  
      function submitSearch(searchText) {
        const searchUrl = `/media/search-results?q=${encodeURIComponent(searchText)}`;
        // Redirect the user to the new page
        window.location.href = searchUrl;
      }
  });


// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"WebSite","name":"articles - Page 1 | TalkingParents","url":"https://talkingparents.com/media/all/1"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"Real Co-Parents: Shannon Spake","image":"","author":{"@type":"","name":""},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"8/29/2025 4:06:57 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"Helping Your Child Cope with Bad-Mouthing","image":"https://media.talkingparents.com/kentico-media/talkingparents/media/blog-images/2024_08/bad-mouthing/hero-badmouth-min.jpg?ext=.jpg","author":{"@type":"","name":"Aurisha Smolarski, LMFT"},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"8/22/2024 2:19:31 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"What is Contempt of Court?","image":"/src/assets/images/blog/2025_July/Hero-contempt.jpg","author":{"@type":"","name":""},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"7/15/2025 2:19:31 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"http://schema.org","@type":"SoftwareApplication","name":"TalkingParents","url":"/","downloadUrl":["https://itunes.apple.com/us/app/talkingparents/id1092220726","https://play.google.com/store/apps/details?id=com.talkingparents.tpandroid"]}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"How TalkingParents Benefits Your Work with a Divorce Coach","image":"https://media.talkingparents.com/kentico-media/talkingparents/media/blog-images/2023-08/divorce-coach/hero-divorce-coach-min.jpg?ext=.jpg","author":{"@type":"","name":""},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"8/3/2023 3:39:58 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"http://schema.org","@type":"SoftwareApplication","name":"TalkingParents","url":"/","downloadUrl":["https://itunes.apple.com/us/app/talkingparents/id1092220726","https://play.google.com/store/apps/details?id=com.talkingparents.tpandroid"]}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"Co-Parenting & High School Prom","image":"https://media.talkingparents.com/kentico-media/talkingparents/media/blog-images/2022_05/coparentinghighschoolprom/hero-min.png?ext=.png","author":{"@type":"","name":""},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"5/5/2022 5:52:09 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"What is a Financial Affidavit?","image":"/src/assets/images/blog/2025_Mar/Hero-affidavit.jpg","author":{"@type":"","name":""},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"3/13/2025 8:30:35 AM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"WebSite","name":"Finances Resources | TalkingParents","url":"https://talkingparents.com/parenting-resources"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"Why Use TalkingParents Over Other Co-Parenting Platforms","image":"https://media.talkingparents.com/kentico-media/talkingparents/media/blog-images/2022_08/whyusetalkingparentsoverourcompetitors/hero.png?ext=.png","author":{"@type":"","name":""},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"8/10/2022 4:58:43 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"Real Co-Parents: Corey Gulley","image":"","author":{"@type":"","name":""},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"2/23/2024 8:44:23 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"http://schema.org","@type":"SoftwareApplication","name":"TalkingParents","url":"/","downloadUrl":["https://itunes.apple.com/us/app/talkingparents/id1092220726","https://play.google.com/store/apps/details?id=com.talkingparents.tpandroid"]}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"10 Fun Ways for Co-Parents to Use AI","image":"https://media.talkingparents.com/kentico-media/talkingparents/media/blog-images/2024-07/fun-ai/hero-fun-ai.jpg?ext=.jpg","author":{"@type":"","name":""},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"7/31/2024 3:04:38 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"What is a Certified Divorce Financial Analyst?","image":"/src/assets/images/blog/2025_Sept/Hero-cdfa.jpg","author":{"@type":"","name":""},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"9/29/2025 2:19:31 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"How Can I Protect My Kids from Gaslighting?","image":"/src/assets/images/blog/2025_Aug/Hero-gaslighting.jpg","author":{"@type":"","name":"Tyra Juliette Schwartz"},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"8/18/2025 2:19:31 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"http://schema.org","@type":"SoftwareApplication","name":"TalkingParents","url":"/","downloadUrl":["https://itunes.apple.com/us/app/talkingparents/id1092220726","https://play.google.com/store/apps/details?id=com.talkingparents.tpandroid"]}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"WebSite","name":"Health-wellness Resources | TalkingParents","url":"https://talkingparents.com/parenting-resources"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"Real Co-Parents: Jay Krout","image":"","author":{"@type":"","name":""},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"11/14/2025 4:06:57 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"What is Financial Abuse?","image":"https://media.talkingparents.com/kentico-media/talkingparents/media/blog-images/2024-05/financial-abuse/hero-finance-abu-min.jpg?ext=.jpg","author":{"@type":"","name":""},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"5/13/2024 6:38:48 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"Raising Kids with a Secure Attachment Style","image":"/src/assets/images/blog/2024_Dec/Hero-secure-min.jpg","author":{"@type":"","name":"Sarah R. Moore"},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"12/17/2024 8:30:35 AM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"WebSite","name":"Child-development Resources | TalkingParents","url":"https://talkingparents.com/parenting-resources"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"Helping your Sensitive Child Navigate Two Homes","image":"https://media.talkingparents.com/kentico-media/talkingparents/media/blog-images/2024-05/sensitive-child/hero-sensitive-min.jpg?ext=.jpg","author":{"@type":"","name":"Melissa Schwartz"},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"5/20/2024 2:09:48 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"WebSite","name":"Divorce Resources | TalkingParents","url":"https://talkingparents.com/parenting-resources"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"How Can I Deal with a Coercive Co-Parent?","image":"/src/assets/images/blog/2025_Sept/Hero-coercive.jpg","author":{"@type":"","name":""},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"9/5/2025 2:19:31 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"Real Co-Parents: Caroline Kelley","image":"","author":{"@type":"","name":""},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"8/19/2022 3:58:04 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"Co-Parenting Graduation Tips","image":"https://media.talkingparents.com/kentico-media/talkingparents/media/blog-images/2022_05/coparentinggraduationtips/hero-min.png?ext=.png","author":{"@type":"","name":""},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"5/10/2022 8:10:11 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"Legal Tips for Back to School","image":"/src/assets/images/blog/2025_Aug/Hero-battle.jpg","author":{"@type":"","name":"Padideh Jafari"},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"8/19/2025 2:19:31 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"http://schema.org","@type":"SoftwareApplication","name":"TalkingParents","url":"/","downloadUrl":["https://itunes.apple.com/us/app/talkingparents/id1092220726","https://play.google.com/store/apps/details?id=com.talkingparents.tpandroid"]}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"Real Co-Parents: Philip Lockwood","image":"","author":{"@type":"","name":""},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"12/2/2022 7:59:47 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"What is a Parenting Coordinator?","image":"/src/assets/images/blog/2025_June/Hero-coordinator.jpg","author":{"@type":"","name":""},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"6/16/2025 2:19:31 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"Managing Co-Parenting Anxiety","image":"https://media.talkingparents.com/kentico-media/talkingparents/media/blog-images/2024-02/managing-coparent-anxiety/hero-parenting-a-min.jpg?ext=.jpg","author":{"@type":"","name":"Mary Beth Somich, LCMHC"},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"2/13/2024 5:40:15 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"WebSite","name":"Custody Resources | TalkingParents","url":"https://talkingparents.com/parenting-resources"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"VideoObject","name":"Secure Attachment & Co-Parenting: Creating a Safe Space for Children","description":"Watch how co-parents can help children develop secure attachment and overcome differences in parenting styles in observance of mental health awareness month.","thumbnailUrl":"https://media.talkingparents.com/kentico-media/talkingparents/media/blog-images/2024-04/safe-space/articleteaser-526x276.png?ext=.png","uploadDate":"5/16/2024 9:00:00 AM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===


          /**
          *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
          *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
            
          const webinarData = document.getElementById('webinar_data')
          const url = window.location.toString()
          const id = webinarData.dataset.id
            var disqus_config = function () {
              this.page.url = url;  // Replace PAGE_URL with your page's canonical URL variable
              this.page.identifier = id; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
            };
            
            (function() { // DON'T EDIT BELOW THIS LINE
              var d = document, s = d.createElement('script');
              s.src = 'https://talkingparents.disqus.com/embed.js';
              s.setAttribute('data-timestamp', +new Date());
              (d.head || d.body).appendChild(s);
            })();
      

// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"Grounding Techniques for Co-Parents","image":"https://media.talkingparents.com/kentico-media/talkingparents/media/blog-images/2024-05/grounding/hero-grounding-min.jpg?ext=.jpg","author":{"@type":"","name":"Amber Andrews"},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"5/29/2024 2:19:31 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"WebSite","name":"Webinar Resources | TalkingParents","url":"https://talkingparents.com/parenting-resources"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"VideoObject","name":"Raising Resilient Kids Through Co-Parenting","description":"In this live webinar, a Clinical Psychologist and author explores strategies that help children build long-term resilience in co-parenting environments.","thumbnailUrl":"/src/assets/images/blog/2025_Sept/Article-Teaser-526x276.png","uploadDate":"9/10/2025 9:00:00 AM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===


          /**
          *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
          *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
            
          const webinarData = document.getElementById('webinar_data')
          const url = window.location.toString()
          const id = webinarData.dataset.id
            var disqus_config = function () {
              this.page.url = url;  // Replace PAGE_URL with your page's canonical URL variable
              this.page.identifier = id; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
            };
            
            (function() { // DON'T EDIT BELOW THIS LINE
              var d = document, s = d.createElement('script');
              s.src = 'https://talkingparents.disqus.com/embed.js';
              s.setAttribute('data-timestamp', +new Date());
              (d.head || d.body).appendChild(s);
            })();
      

// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"Co-Parenting & High School Homecoming","image":"https://media.talkingparents.com/kentico-media/talkingparents/media/blog-images/2021-09/homecoming/hero_homecoming-min.jpg?ext=.jpg","author":{"@type":"","name":""},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"9/15/2021 3:01:20 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"WebSite","name":"Education Resources | TalkingParents","url":"https://talkingparents.com/parenting-resources"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"8 Affirmations for Co-Parents","image":"https://media.talkingparents.com/kentico-media/talkingparents/media/blog-images/2024-04/hero-affirmation-min.jpg?ext=.jpg","author":{"@type":"","name":""},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"5/1/2024 7:00:54 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"Tips for Blended Families","image":"https://tparentsv2.blob.core.windows.net/kentico-media/talkingparents/media/blog-images/2020-04/blended-families/young-family-having-breakfast-picture-id1171653873-min.jpg?ext=.jpg","author":{"@type":"","name":""},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"4/15/2020 5:13:57 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"VideoObject","name":"Prepping for Court with TalkingParents","description":"Join Divorce and Child Custody Attorney Carina Reyna, Esq., as she shares expert insights on using TalkingParents to effectively prepare for court.","thumbnailUrl":"https://media.talkingparents.com/kentico-media/talkingparents/media/blog-images/2024-06/court-prep/article-teaser-526x276.png?ext=.png","uploadDate":"9/17/2024 9:00:00 AM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===


          /**
          *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
          *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
            
          const webinarData = document.getElementById('webinar_data')
          const url = window.location.toString()
          const id = webinarData.dataset.id
            var disqus_config = function () {
              this.page.url = url;  // Replace PAGE_URL with your page's canonical URL variable
              this.page.identifier = id; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
            };
            
            (function() { // DON'T EDIT BELOW THIS LINE
              var d = document, s = d.createElement('script');
              s.src = 'https://talkingparents.disqus.com/embed.js';
              s.setAttribute('data-timestamp', +new Date());
              (d.head || d.body).appendChild(s);
            })();
      

// === Inline Script Block ===

document.write(new Date().getFullYear())

// === Inline Script Block ===

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':  
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PXL2W6W');

// === Inline Script Block ===


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-G4XTB019X7');
      

// === Inline Script Block ===

{"@context":"https://schema.org","@type":"Article","headline":"The Single Parent Budget Guide","image":"https://media.talkingparents.com/kentico-media/talkingparents/media/blog-images/2023-02/hero-budgeting-min.jpg?ext=.jpg","author":{"@type":"","name":""},"publisher":{"@type":"Organization","name":"Monitored Communications LLC","logo":{"@type":"ImageObject","url":""}},"datePublished":"2/2/2023 5:47:08 PM"}

// === Inline Script Block ===


    (function(w,r){
      w._rwq=r;
      w[r]=w[r]||function(){
        (w[r].q=w[r].q||[]).push(arguments)
      }
    })(window,'rewardful');
  

// === Inline Script Block ===


    const rwDataElement = document.getElementById('rw-script');
    const rwKey = rwDataElement.dataset.rw; 
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://r.wdfl.co/rw.js';
    script.setAttribute('data-rewardful', rwKey);
    document.head.appendChild(script);

    // Listen for Rewardful readiness
    script.onload = () => {
      rewardful('ready', function() {
        console.log('Rewardful Ready!');
        if (window.Rewardful && window.Rewardful.referral) {
          console.log('Rewardful referral: ' + window.Rewardful.referral);
        }
      });
    };
  

// === Inline Script Block ===

  
    const brDataElement = document.getElementById('br-script');
    const brToken = brDataElement.dataset.br; 
    !function(e,n,t,i,o,r){function c(e){if("number"!=typeof e)return e;var n=new Date;return new Date(n.getTime()+1e3*e)}var a=4e3,s="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){var i=t.createElement(n);i.src=e;var o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function u(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n]["snippetVersion"]="v2.3.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(e.new_experiments){!0===e.new_experiments&&(e.new_experiments={});var f,l=e.new_experiments.hide_class||s,_=e.new_experiments.timeout||a,d=encodeURIComponent(r.location.href.split("#")[0]);e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||u(e.cookies.expires)?f=c(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||u(e.cookies.expires.tracking))&&(f=c(e.cookies.expires.tracking))),f&&f<new Date&&(f=void 0);var x=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+d+"&timeout="+_+"ms"+(f?"&cookie-expires="+Math.floor(f.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(x,n,r,p,t):function(e,n,t,i,o,r,c,a){r.documentElement.classList.add(e);var s=m(t,i,r);function p(){o[a].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function u(){r.documentElement.classList.remove(e)}s.onload=p,s.onerror=p,o.setTimeout(u,n),o[c]._revealPage=u}(l,_,x,n,r,p,o,t)}}(r,t,i,0,n,o,e),function(e,n,t){e[n].start=function(i){i&&Object.keys(i).forEach((function(e){return t[e]=i[e]})),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
        target: "https://cdp.talkingparents.com",
        token: brToken,
        service_worker_path: "/service-worker.js",
        experimental: {
            non_personalized_weblayers: true
        },
        push: {
        safari: {
                websitePushID: "web.com.talkingparents.app",
            },
        },
        track: {
            visits: true,
            google_analytics: false,
        },
    });
    exponea.start({ webLayers: true });
    exponea.identify();

  

// === Inline Script Block ===



  function setSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault()

          const searchButton = document.getElementById('search-button-header');

          if (searchButton) {
            searchButton.click()
          }
        }
      })
    }
  }

  function submitSearchInHeader() {
    const searchInput = document.getElementById('search-input-header');

    if (searchInput) {
      const searchText = searchInput.value.trim();

      //add a leading slash to navigate from the root; leave it out to navigate from the current page
      window.location.href = `/search-results?q=${encodeURIComponent(searchText)}`
    }
  }

  (async function () {
    try {
      setSearchInHeader()
    } catch (e) {
      console.error('Error initializing Pagefind: ', e)
    }
  })();


// === Inline Script Block ===


(function () {
    /* Toggle Primary Navigation */
    const navOpen = document.querySelector('.jsNavOpen');
    const navClose = document.querySelector('.jsNavClose');
    const body = document.body;

    // Function to toggle navigation
    function toggleNavigation(isOpen) {
        body.classList.toggle('nav-is-open', isOpen);
        navOpen.setAttribute('aria-pressed', isOpen);
        navClose.setAttribute('aria-pressed', !isOpen);
    }

    // Open navigation
    navOpen.addEventListener('click', () => toggleNavigation(true));

    // Close navigation
    navClose.addEventListener('click', () => toggleNavigation(false));
})();


// === Inline Script Block ===


  document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");
    const modal = document.getElementById("socialShareDialog");
    const closeModal = document.getElementById("close-modal");
    const copyLinkField = document.getElementById("copyLinkField");
    const copyLinkButton = document.getElementById("copyLinkButton");

      if (shareButton && modal && closeModal && copyLinkButton) {
        // Open the modal when the share button is clicked
        shareButton.addEventListener("click", () => {
          modal.showModal();

          const currentUrl = encodeURIComponent(window.location.href);
          copyLinkField.value = window.location.href;

          // Find all button elements with the data-url attribute
          const buttonsWithDataUrl = document.querySelectorAll('button[data-url]');
          buttonsWithDataUrl.forEach(button => {
              button.setAttribute('data-url', currentUrl);
          });
        });

        // Close the modal when the user clicks the close button
        closeModal.addEventListener("click", () => {
            modal.close();
        });

        // Copy link to clipboard when copy button is clicked
        copyLinkButton.addEventListener("click", () => {
          const linkToCopy = copyLinkField.value;
          navigator.clipboard.writeText(linkToCopy)
            .then(() => {
              // Show tooltip with 'Copied to clipboard!' message
              copyLinkButton.setAttribute("data-tooltip", "Copied to clipboard!");
              
              // Remove the tooltip after 2 seconds
              setTimeout(() => {
                copyLinkButton.removeAttribute("data-tooltip");
              }, 2000);
            })
            .catch(err => {
              console.error("Failed to copy: ", err);
            });
        });

      }
  });


// === Inline Script Block ===

document.write(new Date().getFullYear())