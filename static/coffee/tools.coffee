root = exports ? this
# !!!! Hotpoor root object
root.Hs or= {}
Hs = root.Hs
console.log "hello, xialiwei tools"

Hs.uuid2s = []
$ ->
    Hs.uuid2 =(len, radix)->
        chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
        uuid = []
        i = null
        radix = radix or chars.length

        if len
            # Compact form
            for i in [0..len]
                uuid[i] = chars[0 | Math.random() * radix]
        else
            # rfc4122, version 4 form
            r = null
            # // rfc4122 requires these characters
            uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
            uuid[14] = '4'

            # // Fill in random data.  At i==19 set the high bits of clock sequence as
            # // per rfc4122, sec. 4.1.5
            for i in [0..36]
                if !uuid[i]
                    r = 0 | Math.random() * 16
                    uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r]
        return uuid.join('')
    Hs.find_list_min_index_and_min = (list_nums=[])->
        is_first = true
        min_index = null
        min = null
        for list_num,list_num_index in list_nums
            if is_first
                min = list_num
                min_index = list_num_index
                is_first = false
            if list_num <= min
                min_index = list_num_index
                min = list_num
        return [min_index,min]