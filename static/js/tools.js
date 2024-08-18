// Generated by CoffeeScript 2.7.0
(function() {
  var Hs, root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  // !!!! Hotpoor root object
  root.Hs || (root.Hs = {});

  Hs = root.Hs;

  console.log("hello, xialiwei tools");

  Hs.uuid2s = [];

  $(function() {
    Hs.preload_svg = function() {
      var _svg_html;
      _svg_html = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0; height: 0" aria-hidden="true" id="__SVG_SPRITE_NODE__">
    <symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" id="xhs-play-s">
        <path d="M4.401 2.13l5.14 3.06a.947.947 0 010 1.621L4.401 9.87a.924.924 0 01-1.273-.334A.95.95 0 013 9.059V2.941C3 2.42 3.416 2 3.93 2c.166 0 .328.045.471.13z" fill="#fff"></path>
    </symbol>
    <symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 20" id="xhs-gallery">
        <g id="svg_demo" transform="translate(0.000000, 0.374638)" fill="currentColor" fill-rule="nonzero">
            <g transform="translate(0.000000, 4.625362)">
                <path d="M0.363,1.82 C0,2.533 0,3.466 0,5.333 L0,9.667 C0,11.534 0,12.467 0.363,13.18 C0.683,13.807 1.193,14.317 1.82,14.637 C2.533,15 3.466,15 5.333,15 L9.667,15 C11.534,15 12.467,15 13.18,14.637 C13.8073264,14.3173592 14.3173592,13.8073264 14.637,13.18 C15,12.467 15,11.534 15,9.667 L15,5.333 C15,3.466 15,2.533 14.637,1.82 C14.3174154,1.19263272 13.8073673,0.682584573 13.18,0.363 C12.467,8.8817842e-16 11.534,8.8817842e-16 9.667,8.8817842e-16 L5.333,8.8817842e-16 C3.466,8.8817842e-16 2.533,8.8817842e-16 1.82,0.363 C1.193,0.683 0.683,1.193 0.363,1.82 Z M2.501,13.3 C2.19962939,13.1464283 1.94662842,12.912463 1.77,12.624 L4.167,10.227 L5.72,11.78 C6.01281755,12.0724534 6.48718245,12.0724534 6.78,11.78 L10.833,7.727 L13.5,10.393 C13.497,10.963 13.489,11.387 13.46,11.733 C13.423,12.197 13.357,12.389 13.301,12.499 C13.1252125,12.8438339 12.8448339,13.1242125 12.5,13.3 C12.39,13.356 12.198,13.422 11.735,13.46 C11.255,13.499 10.625,13.5 9.668,13.5 L5.333,13.5 C4.375,13.5 3.747,13.499 3.266,13.46 C2.803,13.422 2.611,13.356 2.501,13.3 L2.501,13.3 Z M5.333,1.5 L9.667,1.5 C10.625,1.5 11.253,1.501 11.734,1.54 C12.197,1.578 12.389,1.644 12.499,1.7 C12.844,1.876 13.124,2.156 13.3,2.501 C13.356,2.611 13.422,2.803 13.46,3.266 C13.499,3.746 13.5,4.376 13.5,5.333 L13.5,8.273 L11.364,6.136 C11.2233339,5.99524374 11.0324956,5.91616012 10.8335,5.91616012 C10.6345044,5.91616012 10.4436661,5.99524374 10.303,6.136 L6.25,10.19 L4.697,8.637 C4.40418245,8.34454662 3.92981755,8.34454662 3.637,8.637 L1.503,10.77 C1.49990033,10.402342 1.49890031,10.0346694 1.5,9.667 L1.5,5.333 C1.5,4.375 1.501,3.747 1.54,3.266 C1.578,2.803 1.644,2.611 1.7,2.501 C1.876,2.156 2.156,1.876 2.501,1.7 C2.611,1.644 2.803,1.578 3.266,1.54 C3.746,1.501 4.376,1.5 5.333,1.5 L5.333,1.5 Z" id="形状"></path>
                <path d="M5.417,4.375 C5.417,4.00272925 5.21839594,3.65873688 4.89600001,3.4726015 C4.57360408,3.28646612 4.17639592,3.28646612 3.85399999,3.4726015 C3.53160406,3.65873688 3.333,4.00272925 3.333,4.375 C3.333,4.95048071 3.79951929,5.417 4.375,5.417 C4.95048071,5.417 5.417,4.95048071 5.417,4.375 L5.417,4.375 Z" id="路径" fill-opacity="0.8"></path>
            </g>
            <path d="M9.08842028,0.261268347 L14.5161294,1.21831992 C15.9758063,1.47974532 16.7649163,1.65529163 17.3330351,2.08311062 C17.895376,2.50678117 18.3091064,3.09764947 18.5148946,3.77098091 C18.7485686,4.53618312 18.5865549,5.45500876 18.2623537,7.29364483 L17.5097625,11.5618016 C17.1855614,13.4004377 17.0235476,14.3192633 16.5422513,14.958397 C16.1449483,15.485633 15.600703,15.8822436 14.9793257,16.0993472 C14.9969112,15.6798416 14.9995615,15.187848 14.9999378,14.5950028 L15.0003676,14.4039902 C15.1294628,14.3044278 15.2454752,14.1875066 15.3448025,14.0557489 C15.4190531,13.9571444 15.5173908,13.7795221 15.6344015,13.3289963 C15.7230432,12.9932886 15.8045485,12.5771193 15.9064823,12.0162998 L14.9996497,10.722 L14.9999378,9.65572096 C14.9995363,9.02306144 14.9965449,8.50525445 14.9742579,8.06944054 L16.2746165,9.92850736 L16.7851421,7.03317257 C16.9513234,6.09071155 17.059737,5.47010901 17.1046806,4.99062901 C17.147657,4.52806439 17.1160001,4.32752053 17.0799522,4.20946737 C16.9665347,3.83914662 16.73941,3.51477896 16.4302134,3.28154417 C16.3316088,3.20729364 16.1539865,3.10895588 15.7046192,2.99113408 C15.331083,2.89358826 14.8606729,2.80365614 14.2044061,2.68641139 L8.87951118,1.74748875 C8.22275353,1.63321186 7.74885111,1.55663621 7.36526711,1.52068131 C6.90270249,1.4777049 6.70215862,1.50936176 6.58410547,1.54540969 C6.21378472,1.65882724 5.88941706,1.88595192 5.65618227,2.19514851 C5.58193174,2.29375307 5.48359398,2.47137538 5.36577218,2.92074274 C5.25842396,3.33181566 5.16029653,3.86021043 5.02484077,4.62452175 L4.74427984,4.62585984 C4.26335269,4.62715177 3.85345333,4.63179563 3.49747587,4.64848811 L3.59295801,4.10923245 C3.85438342,2.64955561 4.02992972,1.86044561 4.45774872,1.29232682 C4.8817646,0.730419776 5.47257713,0.316728393 6.14561901,0.110467319 C6.82579875,-0.0972429595 7.62735997,0.00768898463 9.08842028,0.261268347 Z M8.63491103,3.70696878 C8.90437267,3.93307395 9.04051466,4.27878472 9.0001646,4.62548582 L6.92987921,4.62601098 C6.9184683,4.52790059 6.92092625,4.42650117 6.93895665,4.32424572 C7.00360079,3.95763059 7.25892126,3.65335148 7.60874133,3.52602738 C7.95856141,3.39870328 8.34973509,3.46767775 8.63491103,3.70696878 Z" id="形状结合"></path>
        </g>
    </symbol>
    <symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="xhs-like">
        <path d="M20.17 13.537l-7.122 7.034a1.494 1.494 0 01-2.096 0l-7.128-7.04a6.125 6.125 0 01.006-8.728A6.248 6.248 0 018.233 3c1.36 0 2.68.436 3.767 1.253A6.256 6.256 0 0115.767 3a6.25 6.25 0 014.404 1.803 6.127 6.127 0 010 8.734zM5.092 12.252L12 19.076l6.904-6.818a4.328 4.328 0 00.002-6.175A4.45 4.45 0 0015.767 4.8c-.975 0-1.914.312-2.685.892l-1.081.813-1.082-.813A4.46 4.46 0 008.233 4.8a4.448 4.448 0 00-3.138 1.283 4.325 4.325 0 00-.005 6.168h.001z" fill="currentColor"></path>
    </symbol>
    <symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="xhs-liked">
        <path d="M20.17 13.537l-7.122 7.034a1.494 1.494 0 01-2.096 0l-7.128-7.04a6.125 6.125 0 01.006-8.728A6.248 6.248 0 018.233 3c1.36 0 2.68.436 3.767 1.253A6.256 6.256 0 0115.767 3a6.25 6.25 0 014.404 1.803 6.127 6.127 0 010 8.734z" fill="#FF2442"></path>
    </symbol>
    <symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" id="xhs-audio-s">
        <g id="music-svgrepo-com" transform="translate(0.822323, 0.648229)" fill="currentColor" fill-rule="nonzero">
            <g id="编组" transform="translate(0.000000, 8.244397)" fill="currentColor">
                <path d="M1.60751773,1.96808511 C1.60751773,2.20304965 1.41702128,2.39361702 1.18198582,2.39361702 L0.425531915,2.39361702 C0.190496454,2.39361702 0,2.20304965 0,1.96808511 L0,1.5070922 C0,1.27212766 0.190496454,1.08156028 0.425531915,1.08156028 L1.18198582,1.08156028 C1.41702128,1.08156028 1.60751773,1.27212766 1.60751773,1.5070922 L1.60751773,1.96808511 Z" id="路径"></path>
                <path d="M3.80609929,3.08510638 C3.80609929,3.32007092 3.61560284,3.5106383 3.38056738,3.5106383 L2.62411348,3.5106383 C2.38907801,3.5106383 2.19858156,3.32007092 2.19858156,3.08510638 L2.19858156,0.425531915 C2.19858156,0.190567376 2.38907801,0 2.62411348,0 L3.38056738,0 C3.61560284,0 3.80609929,0.190567376 3.80609929,0.425531915 L3.80609929,3.08510638 L3.80609929,3.08510638 Z" id="路径"></path>
            </g>
            <g id="编组" transform="translate(4.397163, 6.595745)" fill="currentColor">
                <path d="M1.60751773,5.28368794 C1.60751773,5.51865248 1.41702128,5.70921986 1.18198582,5.70921986 L0.425531915,5.70921986 C0.190496454,5.70921986 0,5.51865248 0,5.28368794 L0,1.5248227 C0,1.28985816 0.190496454,1.09929078 0.425531915,1.09929078 L1.18198582,1.09929078 C1.41702128,1.09929078 1.60751773,1.28985816 1.60751773,1.5248227 L1.60751773,5.28368794 Z" id="路径"></path>
                <path d="M3.80609929,6.38297872 C3.80609929,6.61794326 3.61560284,6.80851064 3.38056738,6.80851064 L2.62411348,6.80851064 C2.38907801,6.80851064 2.19858156,6.61794326 2.19858156,6.38297872 L2.19858156,0.425531915 C2.19858156,0.190567376 2.38907801,0 2.62411348,0 L3.38056738,0 C3.61560284,0 3.80609929,0.190567376 3.80609929,0.425531915 L3.80609929,6.38297872 Z" id="路径"></path>
            </g>
            <g id="编组" transform="translate(8.794326, 3.297872)" fill="currentColor">
                <path d="M1.60751773,11.8794326 C1.60751773,12.1143972 1.41702128,12.3049645 1.18198582,12.3049645 L0.425531915,12.3049645 C0.190496454,12.3049645 0,12.1143972 0,11.8794326 L0,1.5248227 C0,1.28985816 0.190496454,1.09929078 0.425531915,1.09929078 L1.18198582,1.09929078 C1.41702128,1.09929078 1.60751773,1.28985816 1.60751773,1.5248227 L1.60751773,11.8794326 Z" id="路径"></path>
                <path d="M3.80609929,12.9787234 C3.80609929,13.2136879 3.61560284,13.4042553 3.38056738,13.4042553 L2.62411348,13.4042553 C2.38907801,13.4042553 2.19858156,13.2136879 2.19858156,12.9787234 L2.19858156,0.425531915 C2.19858156,0.190567376 2.38907801,0 2.62411348,0 L3.38056738,0 C3.61560284,0 3.80609929,0.190567376 3.80609929,0.425531915 L3.80609929,12.9787234 Z" id="路径"></path>
            </g>
            <path d="M14.7990071,19.5744681 C14.7990071,19.8094326 14.6085106,20 14.3734752,20 L13.6170213,20 C13.3819858,20 13.1914894,19.8094326 13.1914894,19.5744681 L13.1914894,0.425531915 C13.1914894,0.190567376 13.3819858,1.25014703e-15 13.6170213,1.25014703e-15 L14.3734752,1.25014703e-15 C14.6085106,1.25014703e-15 14.7990071,0.190567376 14.7990071,0.425531915 L14.7990071,19.5744681 Z" id="路径" fill="currentColor"></path>
            <g id="编组" transform="translate(15.390071, 4.397163)" fill="currentColor">
                <path d="M1.60751773,10.7801418 C1.60751773,11.0151064 1.41702128,11.2056738 1.18198582,11.2056738 L0.425531915,11.2056738 C0.190496454,11.2056738 0,11.0151064 0,10.7801418 L0,0.425531915 C0,0.190567376 0.190496454,0 0.425531915,0 L1.18198582,0 C1.41702128,0 1.60751773,0.190567376 1.60751773,0.425531915 L1.60751773,10.7801418 Z" id="路径"></path>
                <path d="M3.80609929,8.58156028 C3.80609929,8.81652482 3.61560284,9.0070922 3.38056738,9.0070922 L2.62411348,9.0070922 C2.38907801,9.0070922 2.19858156,8.81652482 2.19858156,8.58156028 L2.19858156,2.62411348 C2.19858156,2.38914894 2.38907801,2.19858156 2.62411348,2.19858156 L3.38056738,2.19858156 C3.61560284,2.19858156 3.80609929,2.38914894 3.80609929,2.62411348 L3.80609929,8.58156028 Z" id="路径"></path>
            </g>
            <g id="编组" transform="translate(19.787234, 5.496454)" fill="currentColor">
                <path d="M1.60751773,8.58156028 C1.60751773,8.81652482 1.41702128,9.0070922 1.18198582,9.0070922 L0.425531915,9.0070922 C0.190496454,9.0070922 0,8.81652482 0,8.58156028 L0,0.425531915 C0,0.190567376 0.190496454,0 0.425531915,0 L1.18198582,0 C1.41702128,0 1.60751773,0.190567376 1.60751773,0.425531915 L1.60751773,8.58156028 Z" id="路径"></path>
                <path d="M3.80609929,6.38269504 C3.80609929,6.61765957 3.61560284,6.80822695 3.38056738,6.80822695 L2.62411348,6.80822695 C2.38907801,6.80822695 2.19858156,6.61765957 2.19858156,6.38269504 L2.19858156,2.62382979 C2.19858156,2.38886525 2.38907801,2.19829787 2.62411348,2.19829787 L3.38056738,2.19829787 C3.61560284,2.19829787 3.80609929,2.38886525 3.80609929,2.62382979 L3.80609929,6.38269504 Z" id="路径"></path>
            </g>
            <g id="编组" transform="translate(24.184397, 8.794326)" fill="currentColor">
                <path d="M3.80609929,1.43134752 C3.80609929,1.66638298 3.61560284,1.85687943 3.38056738,1.85687943 L2.62411348,1.85687943 C2.38907801,1.85687943 2.19858156,1.66638298 2.19858156,1.43134752 L2.19858156,0.97035461 C2.19858156,0.735390071 2.38907801,0.544822695 2.62411348,0.544822695 L3.38056738,0.544822695 C3.61560284,0.544822695 3.80609929,0.735390071 3.80609929,0.97035461 L3.80609929,1.43134752 Z" id="路径"></path>
                <path d="M1.60751773,1.9858156 C1.60751773,2.22078014 1.41702128,2.41134752 1.18198582,2.41134752 L0.425531915,2.41134752 C0.190496454,2.41134752 0,2.22078014 0,1.9858156 L0,0.425531915 C0,0.190567376 0.190496454,0 0.425531915,0 L1.18198582,0 C1.41702128,0 1.60751773,0.190567376 1.60751773,0.425531915 L1.60751773,1.9858156 Z" id="路径"></path>
            </g>
        </g>
    </symbol>
</svg>`;
      return $("body").prepend(_svg_html);
    };
    Hs.uuid2 = function(len, radix) {
      var chars, i, j, k, r, ref, ref1, uuid;
      chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
      uuid = [];
      i = null;
      radix = radix || chars.length;
      if (len) {
// Compact form
        for (i = j = 0, ref = len; (0 <= ref ? j <= ref : j >= ref); i = 0 <= ref ? ++j : --j) {
          uuid[i] = chars[0 | Math.random() * radix];
        }
      } else {
        // rfc4122, version 4 form
        r = null;
        // // rfc4122 requires these characters
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';
// // Fill in random data.  At i==19 set the high bits of clock sequence as
// // per rfc4122, sec. 4.1.5
        for (i = k = 0; k <= 36; i = ++k) {
          if (!uuid[i]) {
            r = 0 | Math.random() * 16;
            uuid[i] = chars[(ref1 = i === 19) != null ? ref1 : (r & 0x3) | {
              0x8: r
            }];
          }
        }
      }
      return uuid.join('');
    };
    Hs.find_list_min_index_and_min = function(list_nums = []) {
      var is_first, j, len1, list_num, list_num_index, min, min_index;
      is_first = true;
      min_index = null;
      min = null;
      for (list_num_index = j = 0, len1 = list_nums.length; j < len1; list_num_index = ++j) {
        list_num = list_nums[list_num_index];
        if (is_first) {
          min = list_num;
          min_index = list_num_index;
          is_first = false;
        }
        if (list_num < min) {
          min_index = list_num_index;
          min = list_num;
        }
      }
      return [min_index, min];
    };
    Hs.find_list_max_index_and_max = function(list_nums = []) {
      var is_first, j, len1, list_num, list_num_index, max, max_index;
      is_first = true;
      max_index = null;
      max = null;
      for (list_num_index = j = 0, len1 = list_nums.length; j < len1; list_num_index = ++j) {
        list_num = list_nums[list_num_index];
        if (is_first) {
          max = list_num;
          max_index = list_num_index;
          is_first = false;
        }
        if (list_num > max) {
          max_index = list_num_index;
          max = list_num;
        }
      }
      return [max_index, max];
    };
    return Hs.xhs_note_thumbnail_span_audio_tools_audio_on_timeupdate = function(current_dom) {
      var audio, percentage;
      audio = current_dom;
      percentage = (audio.currentTime / audio.duration) * 100;
      $(audio).parents(".xhs_note_thumbnail_span_audio_tools").find(".xhs_note_thumbnail_span_audio_tools_audio_base_btn").css({
        "left": percentage
      });
      return $(audio).parents(".xhs_note_thumbnail_span_audio_tools").find(".xhs_note_thumbnail_span_audio_tools_audio_base_line").css({
        "width": percentage
      });
    };
  });

}).call(this);
