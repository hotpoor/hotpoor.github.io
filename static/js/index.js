// Generated by CoffeeScript 2.7.0
(function() {
  var Hs, root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  // !!!! Hotpoor root object
  root.Hs || (root.Hs = {});

  Hs = root.Hs;

  console.log("hello, xialiwei");

  Hs.xialiwei_waterfall_layout_items_data_authors = {
    "user0": {
      "name": "站点0",
      "thumbnail": "http://tasterest-cdn.xialiwei.com/dd81fb297e2344e49f7dfd2328269e51_547c3bfa29616101f5f6e635193315a1?imageView2"
    },
    "user1": {
      "name": "站点1",
      "thumbnail": "http://tasterest-cdn.xialiwei.com/dd81fb297e2344e49f7dfd2328269e51_015c2bf06d9b0d72a382711771ad1baa?imageView2"
    }
  };

  Hs.xialiwei_waterfall_layout_items_data_flag = {
    "current_all_y": []
  };

  Hs.xialiwei_waterfall_layout_items_data = [
    {
      "thumbnail": "http://tasterest-cdn.xialiwei.com/dd81fb297e2344e49f7dfd2328269e51_7255ae8e9530c1b9ca4995a896da64d5?imageView2",
      "width": 500,
      "height": 500,
      "ui_type": "xhs_note",
      "type": "note",
      "creator_type": "author",
      "author": "user0",
      "title": "XXX公司XXX基地XXX区XXX点",
      "likes_num": 5885
    },
    {
      "thumbnail": "http://tasterest-cdn.xialiwei.com/dd81fb297e2344e49f7dfd2328269e51_7255ae8e9530c1b9ca4995a896da64d5?imageView2",
      "width": 1080,
      "height": 1920,
      "ui_type": "xhs_note",
      "type": "note",
      "creator_type": "authors",
      "authors": ["user0",
    "user1"],
      "title": "XXX公司XXX基地XXX区XXX点",
      "likes_num": 0
    },
    {
      "thumbnail": "http://tasterest-cdn.xialiwei.com/dd81fb297e2344e49f7dfd2328269e51_7255ae8e9530c1b9ca4995a896da64d5?imageView2",
      "width": 1920,
      "height": 1080,
      "ui_type": "xhs_note",
      "type": "note",
      "creator_type": "author",
      "author": "user1",
      "title": "XXX公司XXX基地XXX区XXX点",
      "likes_num": 555
    },
    {
      "thumbnail": "http://tasterest-cdn.xialiwei.com/dd81fb297e2344e49f7dfd2328269e51_7255ae8e9530c1b9ca4995a896da64d5?imageView2",
      "width": 800,
      "height": 600,
      "ui_type": "xhs_note",
      "type": "note",
      "creator_type": "authors",
      "authors": ["user1",
    "user0"],
      "title": "",
      "likes_num": 112
    },
    {
      "thumbnail": "http://tasterest-cdn.xialiwei.com/dd81fb297e2344e49f7dfd2328269e51_7255ae8e9530c1b9ca4995a896da64d5?imageView2",
      "width": 500,
      "height": 500,
      "ui_type": "xhs_note",
      "type": "note",
      "creator_type": "author",
      "author": "user0",
      "title": "XXX公司XXX基地XXX区XXX点",
      "likes_num": 5885
    },
    {
      "thumbnail": "http://tasterest-cdn.xialiwei.com/dd81fb297e2344e49f7dfd2328269e51_7255ae8e9530c1b9ca4995a896da64d5?imageView2",
      "width": 1080,
      "height": 1920,
      "ui_type": "xhs_note",
      "type": "note",
      "creator_type": "authors",
      "authors": ["user0",
    "user1"],
      "title": "XXX公司XXX基地XXX区XXX点",
      "likes_num": 0
    },
    {
      "thumbnail": "http://tasterest-cdn.xialiwei.com/dd81fb297e2344e49f7dfd2328269e51_7255ae8e9530c1b9ca4995a896da64d5?imageView2",
      "width": 1920,
      "height": 1080,
      "ui_type": "xhs_note",
      "type": "note",
      "creator_type": "author",
      "author": "user1",
      "title": "XXX公司XXX基地XXX区XXX点",
      "likes_num": 555
    },
    {
      "thumbnail": "http://tasterest-cdn.xialiwei.com/dd81fb297e2344e49f7dfd2328269e51_7255ae8e9530c1b9ca4995a896da64d5?imageView2",
      "width": 800,
      "height": 600,
      "ui_type": "xhs_note",
      "type": "note",
      "creator_type": "authors",
      "authors": ["user1",
    "user0"],
      "title": "",
      "likes_num": 112
    }
  ];

  Hs.xialiwei_waterfall_layout_items_load = function(cards_dom, cards_width = 500, cards_height = 500, column = 2) {
    var _html, _html_creator, _html_creator_author, _html_creator_author_name, _html_creator_author_thumbnail, _html_gap, _html_height, _html_title, _html_uuid, _html_width, _html_width_base, current_all_y, h, i, item_data, item_data_index, j, k, len, ref, ref1, ref2, ref3, use_min, use_min_index, w, x, y;
    console.log("xialiwei_waterfall_layout_items_load");
    $(cards_dom).css({
      width: cards_width,
      height: cards_height
    });
    _html_gap = 10;
    _html_width_base = (cards_width - _html_gap * (column - 1)) / column;
    current_all_y = [];
    for (i = j = 0, ref = column - 1; (0 <= ref ? j <= ref : j >= ref); i = 0 <= ref ? ++j : --j) {
      current_all_y.push(0);
    }
    Hs.xialiwei_waterfall_layout_items_data_flag["current_all_y"] = current_all_y;
    console.log("data:", cards_width, _html_gap, column, _html_width_base);
    $(".xialiwei_waterfall_layout_item_cards_page").empty();
    item_data_index = 0;
    ref1 = Hs.xialiwei_waterfall_layout_items_data;
    for (k = 0, len = ref1.length; k < len; k++) {
      item_data = ref1[k];
      if ((ref2 = item_data["ui_type"]) === "xhs_note") {
        _html_title = "";
        _html_creator = "";
        if (item_data["title"] != null) {
          if (item_data["title"].length > 0) {
            _html_title = `<div class="xhs_note_title">${item_data["title"]}</div>`;
          }
        }
        if ((ref3 = item_data["creator_type"]) === "author") {
          _html_creator_author = item_data["author"];
          _html_creator_author_name = Hs.xialiwei_waterfall_layout_items_data_authors[_html_creator_author]["name"];
          _html_creator_author_thumbnail = Hs.xialiwei_waterfall_layout_items_data_authors[_html_creator_author]["thumbnail"];
          _html_creator = `<div class="xhs_note_creator">
    <div class="xhs_note_creator_author_thumbnail">
        <div>
            <img src="${_html_creator_author_thumbnail}">
        </div>
    </div>
    <div class="xhs_note_creator_author_name">${_html_creator_author_name}</div>
</div>`;
        }
        _html_gap = 10;
        _html_width = (cards_width - _html_gap * (column - 1)) / column;
        _html_height = _html_width / item_data["width"] * item_data["height"];
        _html_uuid = Hs.uuid2(6, null);
        _html = `<div class="xialiwei_waterfall_layout_item_card"
    data-ui-type="xhs_note"
    data-uuid="${_html_uuid}"
    style="
        width:${_html_width}px;
    "
    >
    <div class="xhs_note_thumbnail"
        style="
            width:${_html_width}px;
            height:${_html_height}px;
        ">
        <img src="${item_data["thumbnail"]}">
    </div>
    ${_html_title}
    <div class="xhs_note_footer">
        ${_html_creator}
        <div class="xhs_note_likes">
        ${item_data["likes_num"]}
        </div>
    </div>
</div>`;
      } else {
        _html = "";
      }
      $(".xialiwei_waterfall_layout_item_cards_page").append(_html);
      console.log("w,h", $(`[data-uuid=${_html_uuid}]`).width(), $(`[data-uuid=${_html_uuid}]`).height());
      w = $(`[data-uuid=${_html_uuid}]`).width();
      h = $(`[data-uuid=${_html_uuid}]`).height();
      item_data["w"] = w;
      item_data["h"] = h;
      item_data["index"] = item_data_index;
      [use_min_index, use_min] = Hs.find_list_min_index_and_min(Hs.xialiwei_waterfall_layout_items_data_flag["current_all_y"]);
      console.log("use_min_index,use_min:", use_min_index, use_min);
      x = (use_min_index % column) * (_html_width + _html_gap);
      y = use_min;
      Hs.xialiwei_waterfall_layout_items_data_flag["current_all_y"][use_min_index] = y + h;
      $(`[data-uuid=${_html_uuid}]`).css({
        "transform": `translate(${x}px, ${y}px)`
      });
      item_data["x"] = x;
      item_data["y"] = y;
      item_data_index += 1;
      console.log(Hs.xialiwei_waterfall_layout_items_data_flag["current_all_y"]);
    }
    return console.log(Hs.xialiwei_waterfall_layout_items_data);
  };

  $(function() {
    $(window).on("load", function(evt) {
      var cards_dom, column_num, window_height, window_width;
      cards_dom = $(".xialiwei_waterfall_layout_item_cards")[0];
      window_width = $(window).width() - 20;
      if (window_width < 320) {
        window_width = 320;
      }
      window_height = $(window).height() - 20;
      column_num = parseInt(window_width / 236);
      if (column_num < 3) {
        column_num = 2;
      }
      return Hs.xialiwei_waterfall_layout_items_load(cards_dom, window_width, window_height, column_num);
    });
    return $(window).on("resize", function(evt) {
      var cards_dom, column_num, window_height, window_width;
      cards_dom = $(".xialiwei_waterfall_layout_item_cards")[0];
      window_width = $(window).width() - 20;
      if (window_width < 320) {
        window_width = 320;
      }
      window_height = $(window).height() - 20;
      column_num = parseInt(window_width / 236);
      if (column_num < 3) {
        column_num = 2;
      }
      return Hs.xialiwei_waterfall_layout_items_load(cards_dom, window_width, window_height, column_num);
    });
  });

}).call(this);
