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
    return Hs.find_list_min_index_and_min = function(list_nums = []) {
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
        if (list_num <= min) {
          min_index = list_num_index;
          min = list_num;
        }
      }
      return [min_index, min];
    };
  });

}).call(this);
