$(function () {
    //Reset
    var w = $(window).width();
    var scroll;
    random_app();

    //Event
    $(window).on("resize", function () {
        setTimeout(function () {
            $("ul.grid").css("height", "auto");
            $("ul.grid").css("height", $("ul.grid").height());
        }, 500);
    });

    $(window).scroll(function () {
        scroll = $(window).scrollTop();
        //Scrolling icon hide
        if (scroll >= 50) $('.scroll_icn').fadeOut();
    });

    //Menu
    if (w > 767) {
        $('.menu_btn').on("click", function () {
            $('.open_menu').addClass('active');
            $(this).fadeOut();
        });
        $('.close_btn').on("click", function () {
            $('.open_menu').removeClass('active');
            $('.menu_btn').fadeIn();
        });
    } else {
        var elmH = $('.open_menu').offset().top;
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll > elmH) $('.open_menu').addClass('fixed');
            else $('.open_menu').removeClass('fixed');
        });
    }

    //Smooth scroll
    $('a[href^="#"]').click(function () {
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        var speed = 500;
        $("html, body").animate({
            scrollTop: position
        }, speed, "swing");
        return false;
    });


    //sort
    var outFlg = 0;
    $('.inspiration .inspiration_head li a').on("click", function () {
        var sortCate = $(this).data('cate');

        $("ul.grid").css("height", $("ul.grid").height());
        $("ul.grid").fadeOut(function () {
            $(this).empty();
            if (Number(sortCate) != 0) {
                var index_targetPriority = [];
                var index_target = [];
                var index_other = [];
                $.getJSON("/inspiration_common/json/data.json", function (data_list) {
                    for (var i in data_list) {
                        var cateArray = [];
                        var targetCate = data_list[i].cate_id;
                        var hitFlag = 0;
                        if (targetCate) {
                            cateArray = targetCate.split(':');
                            //Check Category
                            $.each(cateArray, function (index, value) {
                                if (Number(sortCate) != Number(value)) {} else {
                                    hitFlag = 1;
                                }
                            });
                        }
                        //Split based on check
                        if (hitFlag != 1) {
                            index_other.push(i);
                        } else {
                            if (data_list[i].vr == true) index_targetPriority.push(i);
                            else index_target.push(i);
                        }
                    }
                    //Outputs content that has "VR" belonging to the category
                    if (index_targetPriority.length) {
                        var htm_targetPriority;
                        for (var i in index_targetPriority) {
                            // htm_targetPriority = "<li class='vr'><a href='javascript:clickit(" + data_list[index_targetPriority[i]].id + ")'><figure><span><img src='/inspiration_common/images/img" + data_list[index_targetPriority[i]].id + ".jpg' alt=''></span><figcaption>" + data_list[index_targetPriority[i]].name + "</figcaption></figure></a></li>";
                            $("ul.grid").append(htm_targetPriority);
                            htm_targetPriority = "<li class='vr'><a href='/inspiration/detail/" + data_list[index_targetPriority[i]].id + ".htm' target='_blank'><figure><span><img src='/inspiration_common/images/img" + data_list[index_targetPriority[i]].id + ".jpg' alt=''></span><figcaption>" + data_list[index_targetPriority[i]].name + "</figcaption></figure></a></li>";
                            // $("ul.grid").append(htm_targetPriority);
                        }
                    }
                    //Outputs content that does not have a "VR" that belongs to the category
                    if (index_target.length) {
                        random_app(index_target, index_targetPriority.length, undefined, 2);
                    }
                    //Outputs content that does not belong to a category
                    var outF = setInterval(function () {
                        if (outFlg == 1) {
                            clearInterval(outF);
                            if (index_other.length) {
                                random_app(index_other, index_targetPriority.length, index_target.length, 3);
                            }
                        }
                    }, 100);

                    //                    if (index_other.length) {
                    //                        random_app(index_other, index_targetPriority.length, index_target.length, 3);
                    //                    }
                });
            } else random_app();
            //Show
            $("ul.grid").fadeIn(700, function () {
                if (scroll != 0) $("html, body").animate({
                    scrollTop: 0
                }, 500, "swing");
            });
        });
        //Menu active
        $('.inspiration .inspiration_head li').removeClass('active');
        $(this).parent('li').addClass('active');
    });

    //random output
    function random_app(array, vr_targetlength, targetlength, section) {
        $.getJSON("/inspiration_common/json/data.json", function (data_list) {
            var data = [];
            var data_noSecondary = [];
            var ind = [];
            var pri = [];
            var other = [];
            var vr = [];
            var secondary = [];
            var secondary_id;
            var secondary_index;


            //ソートか否かを判定
            if (array) { //ソート
                data = $.extend(true, [], array);
            } else { //読み込みorall
                for (var i in data_list) {
                    data[i] = i;
                }
            }
            //console.log(data);
            //ペア空間の有無判定
            var array_cnt = 0;
            for (var i in data) {
                if (data_list[data[i]].primary) array_cnt++;
            }
            if (array_cnt != 0) { //ペア空間あり

                secondary_id = new Array(array_cnt);
                secondary_index = new Array(array_cnt);
                for (var y = 0; y < array_cnt; y++) {
                    secondary_id[y] = new Array(2);
                    secondary_index[y] = new Array(2);
                }

                //プライマリ、セカンダリのidからインデックス値を取得
                var k = 0;
                for (var i in data) {
                    if (data_list[data[i]].primary) { //primaryがある場合
                        secondary_id[k][0] = data_list[data[i]].id; //プライマリのid
                        secondary_id[k][1] = data_list[data[i]].primary; //セカンダリのid
                        k++;
                    }
                }
                if (secondary_id.length) {
                    var l = 0;
                    for (var i = 0; i < secondary_id.length; i++) {
                        for (var j = 0; j < data.length; j++) {
                            if (data_list[data[j]].id == secondary_id[i][0]) { //プライマリのidを見つけたら
                                secondary_index[l][0] = data[j]; //プライマリのインデックス
                                break;
                            }
                        }
                        for (var j = 0; j < data.length; j++) {
                            if (data_list[data[j]].id == secondary_id[i][1]) { //セカンダリのidを見つけたら
                                //data[j]の値がjsonのインデックス
                                secondary.push(Number(data[j])); //セカンダリ除外用配列
                                secondary_index[l][1] = data[j]; //セカンダリのインデックス
                                l++;
                                break;
                            }
                        }
                    }
                }
                for (var i = 0; i < secondary.length; i++) {
                    if (secondary.length) {
                        for (var j = 0; j < data.length; j++) {
                            if (data[j] == secondary[i]) {
                                delete data[j];
                                break;
                            }
                        }
                    }
                }
            }
            //セカンダリのデータインデックスを除外
            for (var i = 0; i < data.length; i++) {
                if (data[i] != undefined) data_noSecondary.push(String(data[i]));
            }

            //vrとそれ以外分けてデータインデックスを配列代入
            for (var i in data_noSecondary) {
                if (data_list[data_noSecondary[i]].vr != true) ind.push(data_noSecondary[i]);
                else vr.push(data_noSecondary[i]);
            }
            
            //vrの順番を逆転（idが若い順）
            vr = vr.reverse();
            
            //indをpriとそれ以外分けてデータインデックスを配列代入
            for (var i in ind) {
                if (data_list[ind[i]].primary) pri.push(ind[i]);
                else other.push(ind[i]);
            }

            //要素の並びをシャッフル
            if (pri.length) pri = shuffle(pri);
            other = shuffle(other);

            //ランダム対象をまとめる配列
            var total_length = ind.length + secondary.length;
            var total = new Array(total_length);
            for (i = 0; i < total_length; i++) {
                total[i] = 'undef';
            }

            if (pri.length) {
                //前の要素数から、並びの最初が偶数番目か奇数番目か判定
                var start_flg;
                var vr_length = vr.length;
                if (vr_targetlength != undefined) vr_length += vr_targetlength;
                if (targetlength != undefined) vr_length += targetlength;
                switch (vr_length % 4) {
                    case 0:
                        start_flg = 1; //最初は奇数番目
                        break;
                    case 1:
                        start_flg = 0; //最初は偶数番目
                        break;
                    case 2:
                        start_flg = 1; //最初は奇数番目
                        break;
                    case 3:
                        start_flg = 0; //最初は偶数番目
                        break;
                    default:
                        start_flg = 1; //最初は奇数番目
                }

                //偶数/奇数いずれかのインデックス数を値とする配列を作成
                var pri_index = [];
                for (var i = 0; i < total_length; i++) {
                    if (start_flg != 0) {
                        if ((i % 2) == 0) pri_index.push(String(i));
                    } else {
                        if ((i % 2) != 0) pri_index.push(String(i));
                    }
                }
                pri_index = shuffle(pri_index);

                //該当するインデックスのトータル配列要素に代入
                for (var i in pri) {
                    total[pri_index[i]] = pri[i];
                }

                //配列の最後の要素にpriの値がある場合、任意の場所に移動
                if (total[total_length - 1] != 'undef') { //配列の最後の要素にpriの値がある場合
                    var tmp = total[total_length - 1];
                    var f = 2;
                    while (total[(total_length - 1) - f] != 'undef')
                        f += 2;
                    total[(total_length - 1)] = total[(total_length - 1) - f];
                    total[(total_length - 1) - f] = tmp;
                }
            }
            //pri以外の要素をトータル配列に代入
            var ct = 0;
            var sec;
            var sec_flg = 0;
            for (var i = 0; i < total.length; i++) {
                if (total[Number(i)] != 'undef') { //値があるのはプライマリのインデックスのみ
                    if (array_cnt != 0) {
                        //該当idをもつインデックスに変更。total[i]はプライマリのインデックス値
                        for (var j = 0; j < secondary_index.length; j++) {
                            if (total[Number(i)] == secondary_index[j][0]) {
                                sec = secondary_index[j][1];
                                sec_flg = 1;
                                break;
                            }
                        }
                    }
                } else {
                    if (sec_flg != 0) { //前の要素に値があった場合次はセカンダリなので
                        total[i] = String(sec);
                        sec_flg = 0;
                    } else {
                        total[i] = other[ct];
                        ct++;
                    }
                }
            }
            //配列を結合
            var result = [];
            if (vr.length) result = $.merge(vr, total);
            else result = total;

            //出力
            if (!array) section = 9;
            if (section == 2) { //ソート対象vr以外
                var htm_target;
                for (i = 0; i < result.length; i++) {
                    htm_target = "<li><a href='/inspiration/detail/" + data_list[result[i]].id + ".htm'><figure><span><img src='/inspiration_common/images/img" + data_list[result[i]].id + ".jpg' alt='' target='_blank'></span><figcaption>" + data_list[result[i]].name + "</figcaption></figure>";
                    //htm_target = "<li><a href='javascript:clickit(" + data_list[result[i]].id + ")'><figure><span><img src='/inspiration_common/images/img" + data_list[result[i]].id + ".jpg' alt='' target='_blank'></span><figcaption>" + data_list[result[i]].name + "</figcaption></figure>";
                    if (data_list[result[i]].space_name) htm_target += "<span>" + data_list[result[i]].space_name + "</span>";
                    htm_target += "</a></li>";
                    $("ul.grid").append(htm_target);
                }
                outFlg = 1;
            } else if (section == 3) { //ソート対象外
                var htm_other;
                for (i = 0; i < result.length; i++) {
                    if (data_list[result[i]].vr == true) htm_other = "<li class='vr otherElm'>";
                    else htm_other = "<li class='otherElm'>";
                    htm_other += "<a href='/inspiration/detail/" + data_list[result[i]].id + ".htm'><figure><span><img src='/inspiration_common/images/img" + data_list[result[i]].id + ".jpg' alt='' target='_blank'></span><figcaption>" + data_list[result[i]].name + "</figcaption></figure>";
                    //htm_other += "<a href='javascript:clickit(" + data_list[result[i]].id + ")'><figure><span><img src='/inspiration_common/images/img" + data_list[result[i]].id + ".jpg' alt='' target='_blank'></span><figcaption>" + data_list[result[i]].name + "</figcaption></figure>";
                    if (data_list[result[i]].space_name) htm_other += "<span>" + data_list[result[i]].space_name + "</span>";
                    htm_other += "</a></li>";
                    $("ul.grid").append(htm_other);
                }
                outFlg = 0;
            } else { //初回読み込み時
                var htm;
                for (i = 0; i < result.length; i++) {
                    if (data_list[result[i]].vr == true) htm = "<li class='vr'>";
                    else htm = "<li>";
                    htm += "<a href='/inspiration/detail/" + data_list[result[i]].id + ".htm'><figure><span><img src='/inspiration_common/images/img" + data_list[result[i]].id + ".jpg' alt='' target='_blank'></span><figcaption>" + data_list[result[i]].name + "</figcaption></figure>";
                    //htm += "<a href='javascript:clickit(" + data_list[result[i]].id + ")'><figure><span><img src='/inspiration_common/images/img" + data_list[result[i]].id + ".jpg' alt='' target='_blank'></span><figcaption>" + data_list[result[i]].name + "</figcaption></figure>";
                    if (data_list[result[i]].space_name) htm += "<span>" + data_list[result[i]].space_name + "</span>";
                    htm += "</a></li>";
                    $("ul.grid").append(htm);
                }
            }
        });
    }

    function shuffle(array) {
        for (var i = (array.length - 1); 0 < i; i--) {
            var r = Math.floor(Math.random() * (i + 1));
            var tmp = array[i];
            array[i] = array[r];
            array[r] = tmp;
        }
        return array;
    }
});
