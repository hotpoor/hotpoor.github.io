root = exports ? this
# !!!! Hotpoor root object
root.Hs or= {}
Hs = root.Hs
console.log "hello, xialiwei"

Hs.xialiwei_waterfall_layout_items_data_authors =
    "user0":
        "name":"Claire Jung"
        "thumbnail":"http://tasterest-cdn.xialiwei.com/dd81fb297e2344e49f7dfd2328269e51_547c3bfa29616101f5f6e635193315a1?imageView2"
    "user1":
        "name":"大狼狗夫妇"
        "thumbnail":"http://tasterest-cdn.xialiwei.com/dd81fb297e2344e49f7dfd2328269e51_015c2bf06d9b0d72a382711771ad1baa?imageView2"

Hs.xialiwei_waterfall_layout_items_data = [
        "thumbnail":"http://tasterest-cdn.xialiwei.com/dd81fb297e2344e49f7dfd2328269e51_7255ae8e9530c1b9ca4995a896da64d5?imageView2"
        "width":500
        "height":500
        "ui_type":"xhs_note"
        "type":"note"
        "creator_type":"author"
        "author":"user0"
        "title":"친구의 참여를 기다리거나 전화를 걸어 직접 참여 의사를 물어보세요."
        "likes_num":5885
    ,
        "thumbnail":"http://tasterest-cdn.xialiwei.com/dd81fb297e2344e49f7dfd2328269e51_7255ae8e9530c1b9ca4995a896da64d5?imageView2"
        "width":1080
        "height":1920
        "ui_type":"xhs_note"
        "type":"note"
        "creator_type":"authors"
        "authors":[
            "user0","user1"
        ]
        "title":"친구의 참여를 기다리거나 전"
        "likes_num":0
    ,
        "thumbnail":"http://tasterest-cdn.xialiwei.com/dd81fb297e2344e49f7dfd2328269e51_7255ae8e9530c1b9ca4995a896da64d5?imageView2"
        "width":1920
        "height":1080
        "ui_type":"xhs_note"
        "type":"note"
        "creator_type":"author"
        "author":"user1"
        "title":"친구의 참여를"
        "likes_num":555
    ,
        "thumbnail":"http://tasterest-cdn.xialiwei.com/dd81fb297e2344e49f7dfd2328269e51_7255ae8e9530c1b9ca4995a896da64d5?imageView2"
        "width":800
        "height":600
        "ui_type":"xhs_note"
        "type":"note"
        "creator_type":"authors"
        "authors":[
            "user1","user0"
        ]
        "title":""
        "likes_num":112
    ,
]

Hs.xialiwei_waterfall_layout_items_load=(cards_dom,cards_width=500,cards_height=500,column=2)->
    console.log "xialiwei_waterfall_layout_items_load"
    $(cards_dom).css
        width:cards_width
        height:cards_height
    _html_gap = 10
    _html_width_base = (cards_width-(_html_gap)*(column-1))/column
    console.log "data:",cards_width,_html_gap,column,_html_width_base
    $(".xialiwei_waterfall_layout_item_cards_page").empty()
    for item_data in Hs.xialiwei_waterfall_layout_items_data
        if item_data["ui_type"] in ["xhs_note"]
            _html_title = ""
            _html_creator = ""
            if item_data["title"]?
                if item_data["title"].length>0
                    _html_title = """
                    <div class="xhs_note_title">#{item_data["title"]}</div>
                    """
            if item_data["creator_type"] in ["author"]
                _html_creator_author = item_data["author"]
                _html_creator_author_name = Hs.xialiwei_waterfall_layout_items_data_authors[_html_creator_author]["name"]
                _html_creator_author_thumbnail = Hs.xialiwei_waterfall_layout_items_data_authors[_html_creator_author]["thumbnail"]
                _html_creator = """
                <div class="xhs_note_creator">
                    <div class="xhs_note_creator_author_thumbnail">
                        <img src="#{_html_creator_author_thumbnail}">
                    </div>
                    <div class="xhs_note_creator_author_name">#{_html_creator_author_name}</div>
                </div>
                """
            _html_gap = 10
            _html_width = (cards_width-(_html_gap)*(column-1))/column
            _html_height = _html_width/item_data["width"]*item_data["height"]
            _html = """
            <div class="xialiwei_waterfall_layout_item_card"
                data-ui-type="xhs_note"
                style="
                    width:#{_html_width}px;
                ">
                <div class="xhs_note_thumbnail"
                    style="
                        width:#{_html_width}px;
                        height:#{_html_height}px;
                    ">
                    <img src="#{item_data["thumbnail"]}">
                </div>
                #{_html_title}
                <div class="xhs_note_footer">
                    #{_html_creator}
                    <div class="xhs_note_likes">
                    #{item_data["likes_num"]}
                    </div>
                </div>
            </div>
            """
        else
            _html = ""
        $(".xialiwei_waterfall_layout_item_cards_page").append _html
$ ->
    $(window).on "load",(evt)->
        cards_dom = $(".xialiwei_waterfall_layout_item_cards")[0]
        window_width = $(window).width()-20
        if window_width<320
            window_width = 320
        window_height = $(window).height()-20
        column_num = parseInt(window_width/236)
        if column_num<3
            column_num=2
        Hs.xialiwei_waterfall_layout_items_load(cards_dom,window_width,window_height,column_num)
    $(window).on "resize",(evt)->
        cards_dom = $(".xialiwei_waterfall_layout_item_cards")[0]
        window_width = $(window).width()-20
        if window_width<320
            window_width = 320
        window_height = $(window).height()-20
        column_num = parseInt(window_width/236)
        if column_num<3
            column_num=2
        Hs.xialiwei_waterfall_layout_items_load(cards_dom,window_width,window_height,column_num)