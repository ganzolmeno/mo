window.onload = function() {
    $("#first_load").remove(), wDataRedo.Init(), wPage.Init(), wSettingBox.Init(), wL.Init(), wStateBox.Init(), wHs.Init();
    $(function() {
        $(document).tooltip({
            track: !0,
            show: !1,
            hide: !1,
            tooltipClass: "wTooltip",
            content: function() {
                return $(this).attr("title")
            }
        })
    })
}, window.onpopstate = function() {
    wPage.Go()
};
var wHs = {
        hs_url: "https://rpg-de2.mo.ee/",
        hs_data: {},
        hs_name: "",
        search_cd: 0,
        search_timer: null,
        Init: function() {
            $("#input_player").val(localStorage.loadplayer), this.LoadPlayer(!0), $("#input_player").on("keydown", function(t) {
                13 == (t.charCode || t.keyCode || 0) && wHs.LoadPlayer()
            })
        },
        TimerCountDown: function() {
            if (this.search_cd <= 1) {
                $("#btn_loadplayer")[0].lastChild.nodeValue = "";
                $("#btn_loadplayer").removeClass("cding");
                $("#btn_loadplayer").removeAttr("disabled");
                clearInterval(this.search_timer);
                this.search_cd = 0;
                return;
            }
            $("#btn_loadplayer")[0].lastChild.nodeValue = " (" + --this.search_cd + ")";
        },
        StartTimer: function(t) {
            $("#btn_loadplayer").addClass("cding"), this.search_cd = t, $("#btn_loadplayer").append(" (" + this.search_cd + ")"), this.search_timer = setInterval("wHs.TimerCountDown()", 1e3)
        },
        LoadPlayer: function(t = !1) {
            if (this.search_cd != 0) return;
            $("#btn_loadplayer").attr("disabled", "disabled");
            if (this.search_timer != null) {
                clearInterval(this.search_timer);
            }
            name = $("#input_player").val();
            if (undefined == name || "" == name) {
                this.StartTimer(t ? 1 : 3);
                return;
            }
            if (name == this.hs_name) {
                this.StartTimer(15), this.Set2Box(this.hs_data);
                return;
            }
            $("#btn_loadplayer").addClass("searching");
            var e = this.hs_url + "playerskills?n=" + encodeURIComponent(name) + "&t=" + tenMinuteCache();
            $.ajax({
                type: "get",
                dataType: "json",
                url: e,
                success: function(e) {
                    if ($("#btn_loadplayer").removeClass("searching").addClass("cding"), e.length <= 0) return wHs.StartTimer(15), void alert(wL.GetString("Player not found : ", "w") + name);
                    wHs.StartTimer(t ? 15 : 60), wHs.hs_name = name, localStorage.loadplayer = name, wHs.hs_data = e, wHs.Set2Box(e), wHs.ReDraw()
                },
                error: function(t) {
                    $("#btn_loadplayer").removeClass("searching"), wHs.search_cd = 0, $("#input_player").val("").attr("disabled", "disabled").removeAttr("data-k").attr("placeholder", "Failed loading highscore.").unbind(), $("#btn_loadplayer").unbind()
                }
            })
        },
        ReDraw: function() {
            wSkillQuest.is_build ? wSkillQuest.ReDraw() : wDrops.is_build && wDrops.ReDraw()
        },
        Set2Box: function(t) {
            for (var e in wStateBox.ResetValue(), t) $("#val_" + t[e].board).val(t[e].score)
        }
    },
    wL = {
        is_loaded: !1,
        flag_url: "./flags/",
        set_lang: "en",
        loading_lang: "",
        loaded_lang: ["en"],
        lang_supports: {
            en: {name: "English",lang_names_en: !0,lang_en: !0},
            zh: {name: "简体中文",lang_names_zh: !0,lang_zh: !0},
            'zh-tw': {name: "繁體中文","lang_names_zh-tw": !0,"lang_zh-tw": !0},
        },
        site_lang: {
            en: {
                "Player Stats": "",
                Others: "",
                "Skill Quest Points": "",
                "Type your in-game name here...": "",
                Access: "",
                Qty: "",
                "Reward Point": "",
                "u/l of Level": "",
                "u/l of Point": "",
                Filter: "",
                "Player not found : ": "",
                Needed: "",
                Quests: "",
                "Skill Quest": "",
                Loot: "",
                Presents: "",
                "Easter Eggs": "",
                "Sunken Treasure": "",
                More: "",
                "Reward (pick 1 by random)": "",
                "Actual Rate": "",
                Rate: "",
                "Page Not Found.": "",
                "Expected Value": "",
                "Rose Chest": "",
                "Valentine's Present": "",
                "Death's Deal": "",
                "_TOTAL_ items in total": "",
                "Rate is _RATE_% each": "",
                "Retaliation Chest": "",
                "Hunting Reward Chest": "",
                "info-hs": "Help you search in-game highscores and fill in the form.",
                "info-ver": "Game data must be updated manually by manager, if the version is old, here will display a warning.<br><span class='fas fa-check-circle icon-ver-ok'></span>:Same version.<br><span class='fas fa-exclamation-triangle icon-ver-danger'></span>:Data expired.<br><span class='fas fa-question-circle icon-ver-warnnig'></span>:Version info not found.",
                About: "",
                "Party Quest": "",
                "Chage Logs": "",
                wTable: {
                    emptyTable: "No data available in table",
                    info: "Showing _START_ to _END_ of _TOTAL_ entries",
                    infoEmpty: "Showing 0 to 0 of 0 entries",
                    infoFiltered: "(filtered from _MAX_ total entries)",
                    lengthMenu: "Show _MENU_ entries",
                    loadingRecords: "Loading...",
                    processing: "Processing...",
                    search: "Search:",
                    zeroRecords: "No matching records found",
                    paginate: {
                        first: "First",
                        last: "Last",
                        next: "Next",
                        previous: "Previous"
                    },
                    aria: {
                        sortAscending: ": activate to sort column ascending",
                        sortDescending: ": activate to sort column descending"
                    }
                }
            }
        },
        ref: {
            w: "w",
            i: "interface",
            n: "names",
            m: "mods"
        },
        lang_loading_count: 0,
        BuildFailMsg: function(){},
        Init: function() {
            wL.is_loaded = !0, $("#setting-box").append("<select id='list-lang'></select>"), 
            wL.BuildLangList();
            var e = localStorage.lang ? localStorage.lang : "en";
            "en" != e ? wL.Change(e, !1) : wPage.Go(!0);
        },
        BuildLangList: function () {
            var t = "";
            $.each(wL.lang_supports, function (e, a) {
                (a["lang_" + e] || "en" == e) && (t += "<option value='" + e, t += "'>" + a.name + "</option>")
            }), $.widget("custom.langmenu", $.ui.selectmenu, {
                options: {
                    itemIcons: !1
                },
                _create: function () {
                    if (this._super(), this.options.itemIcons) {
                        this.menu.addClass("ui-menu-icons");
                        var t = this.element,
                            e = this.button,
                            a = t.find("option:selected").attr("data-style");
                        $("<span/>").addClass("sflag").attr("style", a).appendTo(e), e.find(".ui-selectmenu-text").addClass("flag"), e.find(".ui-selectmenu-icon").attr("style", "margin-top: 4px;")
                    }
                },
                _renderItem: function (t, e) {
                    var a = $("<li>"),
                        i = $("<div>", {
                            text: e.label
                        });
                    return e.disabled && a.addClass("ui-state-disabled"), $("<span>").appendTo(i), a.append(i).appendTo(t)
                },
                _renderButtonItem: function (t) {
                    var e = $("<span>", {
                        class: "ui-selectmenu-text"
                    });
                    return e.addClass("flag").html(t.label), e
                },
                _select: function (t, e) {
                    if (this._super(t, e), this.options.itemIcons) {
                        var a = t.element.data("style"),
                            i = this.button.find(".sflag");
                        this.button.find(".ui-selectmenu-text").addClass("flag"), this.button.find(".ui-selectmenu-icon").attr("style", "margin-top: 4px;"), i.attr("style", a)
                    }
                }
            }), $("#list-lang").append(t), $("#list-lang").val(wL.set_lang), $("#list-lang").langmenu({
                itemIcons: !0,
                change: function (t, e) {
                    wL.Change(e.item.value)
                }
            }).langmenu("menuWidget").addClass("ui-menu-icons flag")
        },
        GetString: function(string, w = "n") {
            if (wL.is_loaded == !0) {
                var a = wL.set_lang,
                    result = "";
                if (w == "w") {
                    wL.site_lang[a] ? wL.site_lang[a][string] && (result = wL.site_lang[a][string]) : (result = wL.site_lang.en[string])
                } else {
                    w = this.ref[w];
                    if (lang[a][w]) {
                        result = lang[a][w][string] || string;
                    }
                }
                if (result == "") result = string;
                return result;
            }
            return string;
        },
        AllGetString: function() {
            for (var t = document.querySelectorAll("[data-k]"), e = 0; e < t.length; e++) {
                var a = t[e].getAttribute("data-k").split("@"),
                    i = t[e].getAttribute("data-after"),
                    s = this.GetString(a[0], 1 == a.length ? "n" : a[1]);
                i && (s += i), a.length < 3 && t[e].firstChild.nodeValue ? t[e].firstChild.nodeValue = s : $(t[e]).attr(a[2], s)
            }
        },
        LoadLangFile: function(t) {
            this.lang_loading_count = 3, $.ajax({
                type: "get",
                dataType: "json",
                url: cdn_url + "lang/lang_" + t + ".json",
                success: function(e) {
                    lang[t] = e, wL.lang_loading_count--, wL.LangFileLoadChecker()
                },
                error: function() {
                    wL.BuildFailMsg(), wPage.Go(!0)
                }
            }), this.lang_supports[t]["lang_names_" + t] ? $.ajax({
                type: "get",
                dataType: "json",
                url: cdn_url + "lang/lang_names_" + t + ".json",
                success: function(e) {
                    if (!lang[t]) lang[t] = {};
                    lang[t].names = e.names
                },
                complete: function() {
                    wL.lang_loading_count--, wL.LangFileLoadChecker()
                }
            }) : (wL.lang_loading_count--, wL.LangFileLoadChecker()), $.ajax({
                type: "get",
                dataType: "json",
                url: "lang/" + t + ".json",
                success: function(e) {
                    e.wTable.decimal = ".", e.wTable.thousands = ",", wL.site_lang[t] = e
                },
                complete: function() {
                    wL.lang_loading_count--, wL.LangFileLoadChecker()
                }
            })
        },
        LangFileLoadChecker: function(t = !0) {
            0 == this.lang_loading_count && (this.loaded_lang.push(this.loading_lang), $("#list-lang").val(this.loading_lang).langmenu("refresh"), this.SetLang(this.loading_lang), this.AllGetString(), t && wPage.Go(!0))
        },
        Change: function(t, e = !0) {
            if (t != wL.set_lang || !e) {
                this.lang_loading_count = 0, this.loading_lang = t, wSettingBox.Display(!1), wPage.Loading();
                var a = !1;
                for (var i in wL.loaded_lang) a = a || this.loaded_lang[i] == t;
                a ? this.SetLang(t) : this.LoadLangFile(t), this.LangFileLoadChecker(e)
            }
        },
        SetLang: function(t) {
            wL.set_lang = localStorage.lang = t
        }
    },
    wDrops = {
        is_build: !1,
        building: "",
        building_ids: 0,
        data: {},
        type: {
            0: "Item",
            1: "Bywiki",
            2: "ByHp",
            3: "Key"
        },
        contents: {
            "Sunken Treasure": {
                type: 0,
                id: [1396]
            },
            "Easter Eggs": {
                type: 0,
                id: [2032, 2031, 2030]
            },
            "Rose Chest": {
                type: 0,
                id: [3849, 3854, 3853]
            },
            "Valentine's Present": {
                type: 0,
                id: [4131, 4130, 4129]
            },
            Presents: {
                type: 1,
                id: [1160, 1149, 766, 765, 764],
                floor: {
                    764: 2500,
                    765: 8e4,
                    766: 17e4,
                    1149: 45e4,
                    1160: 0
                },
                ceiling: {
                    764: 8e4,
                    765: 17e4,
                    766: 45e4,
                    1149: 15e5,
                    1160: 1
                }
            },
            "Death's Deal": {
                type: 0,
                id: [3333]
            },
            "Retaliation Chest": {
                type: 2,
                id: [710, 709, 708]
            },
            "Hunting Reward Chest": {
                type: 3,
                id: [726]
            },
            "Party Quest": {
                type: 2,
                id: [657, 445, 444, 443]
            }
        },
        Init: function(t) {
            var e = this.type[this.contents[t].type];
            this.building_ids = this.contents[t].id, this.building = t, this.data = {};
            for (var a = 0; a < this.building_ids.length; a++) wDrops[e].PreData(a), wDrops.BuildTable(a), wDrops[e].InitTable(a), wDrops[e].RedoHeader(a), wDrops.ReSizeTable(a);
            $(".dataTables_scrollHeadInner").css("width", "100%"), $(".dataTables_scrollHeadInner>table").css("width", "100%"), wPage.Loaded()
        },
        Item: {
            PreData: function(t) {
                var e = 0,
                    a = wDrops.building_ids[t];
                wDrops.data[a] = [];
                for (var i = 0; i < item_base[a].params.results[0].returns.length; i++) {
                    wDrops.data[a][i] = [];
                    var s = item_base[a].params.results[0].returns[i].id;
                    wDrops.data[a][i].id = s, wDrops.data[a][i].wiki = item_base[s].params.price, s = item_base[a].params.results[0].returns[i].base_chance, wDrops.data[a][i].base_chance = s, e += s *= 1 - e, wDrops.data[a][i].actual_chance = s
                }
            },
            InitTable: function(e) {
                a = wDrops.building_ids[e], $("#table-" + e).DataTable({
                    data: wDrops.data[a],
                    columns: [{
                        data: "base_chance",
                        title: wL.GetString("Rate", "w")
                    }, {
                        data: "actual_chance",
                        title: wL.GetString("Actual Rate", "w")
                    }, {
                        data: "id",
                        title: wL.GetString("Item", "i")
                    }, {
                        data: "wiki",
                        title: "wiki"
                    }],
                    columnDefs: [{
                        targets: [0, 1, 3],
                        className: "dt-body-right"
                    }, {
                        targets: [2],
                        className: "dt-body-left"
                    }, {
                        targets: [0],
                        render: function(t, e, a, i) {
                            return (100 * t).toFixed(2).toString() + "%"
                        }
                    }, {
                        targets: [1],
                        render: function(t, e, a, i) {
                            return (100 * t).toFixed(3).toString() + "%"
                        }
                    }, {
                        targets: [3],
                        render: function(t, e, a, i) {
                            return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        }
                    }],
                    info: !1,
                    searching: !1,
                    responsive: !1,
                    autoWidth: !0,
                    ordering: !1,
                    paging: !1,
                    language: wL.site_lang[wL.set_lang] ? wL.site_lang[wL.set_lang].wTable : wL.site_lang.en.wTable,
                    createdRow: function(e, a, i) {
                        t = $("td", e).eq(2)[0].firstChild.nodeValue, gg = "No loot", a.id == gg ? ($("td", e).addClass("black"), $("td", e).eq(2)[0].title = gg, a.id = wL.GetString(gg, "m"), $("td", e).eq(2)[0].firstChild.nodeValue = a.id) : (t = item_base[t].name, $("td", e).eq(2).attr("data-id", $("td", e).eq(2).text()).attr("title", t), a.id = t = wL.GetString(t), $("td", e).eq(2)[0].firstChild.nodeValue = t), t = a.base_chance, t = (100 * t).toString() + "%", $("td", e).eq(0)[0].title = t, t = a.actual_chance, t = (100 * t).toString() + "%", $("td", e).eq(1)[0].title = t
                    }
                })
            },
            RedoHeader: function(t) {
                var e = wL.GetString(item_base[wDrops.building_ids[t]].name),
                    a = 0,
                    i = 0;
                $("#table-" + t).DataTable().rows().every(function(t, e, s) {
                    data = this.data(), a += data.wiki * data.actual_chance, i += data.actual_chance
                }), 1 != i && $("#table-" + t).DataTable().row.add({
                    id: "No loot",
                    base_chance: 1,
                    actual_chance: 1 - i,
                    wiki: 0
                }), a = a.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                var s = $("#table-" + t + "_wrapper").children().first();
                h1 = $("<div class='blue-header'><div class='main'>" + e + "</div></div>"), s.before(h1), h1.append("<div class='sub'></div>"), y = "<div>" + wL.GetString("Expected Value", "w"), y += "=$" + a + "</div>", h1.find(".sub").append(y)
            }
        },
        Bywiki: {
            PreData: function(t) {
                var e = wDrops.building_ids[t];
                wDrops.data[e] = [];
                for (t = 0; t < item_base.length; t++) {
                    var a = wDrops.contents[wDrops.building].floor[e],
                        i = wDrops.contents[wDrops.building].ceiling[e],
                        s = item_base[t].params.price;
                    if (!item_base[t].params.no_present && s <= i && s >= a) {
                        var n = {};
                        n.id = t, n.wiki = s, wDrops.data[e].push(n)
                    }
                }
            },
            InitTable: function(e) {
                var a = wDrops.building_ids[e];
                $("#table-" + e).DataTable({
                    data: wDrops.data[a],
                    columns: [{
                        data: "id",
                        title: wL.GetString("Item", "i")
                    }, {
                        data: "wiki",
                        title: "wiki"
                    }],
                    columnDefs: [{
                        targets: [1],
                        className: "dt-body-right",
                        render: function(t, e, a, i) {
                            return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        }
                    }, {
                        targets: [0],
                        className: "dt-body-left"
                    }],
                    info: !1,
                    searching: !1,
                    responsive: !1,
                    autoWidth: !0,
                    scrollX: !1,
                    ordering: !1,
                    paging: !1,
                    language: wL.site_lang[wL.set_lang] ? wL.site_lang[wL.set_lang].wTable : wL.site_lang.en.wTable,
                    createdRow: function(e, a, i) {
                        t = $("td", e).eq(0)[0].firstChild.nodeValue, gg = "No loot", a.id == gg ? ($("td", e).addClass("black"), $("td", e).eq(0)[0].title = gg, a.id = wL.GetString(gg, "m"), $("td", e).eq(0)[0].firstChild.nodeValue = a.id) : (t = item_base[t].name, $("td", e).eq(0).attr("data-id", $("td", e).eq(0).text()).attr("title", t), a.id = t = wL.GetString(t), $("td", e).eq(0)[0].firstChild.nodeValue = t)
                    }
                })
            },
            RedoHeader: function(t) {
                var e = wL.GetString(item_base[wDrops.building_ids[t]].name),
                    a = 0,
                    i = 0;
                $("#table-" + t).DataTable().rows().every(function(t, e, s) {
                    data = this.data(), a += data.wiki, i++
                }), a = (a = 0 != i ? a / i : 0).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                var s = $("#table-" + t + "_wrapper").children().first();
                s.css("display", "inline-block"), h1 = $("<div class='blue-header'><div class='main'>" + e + "</div></div>"), s.before(h1), h1.append("<div class='sub'></div>"), y = "<div>" + wL.GetString("_TOTAL_ items in total", "w"), y = y.replace("_TOTAL_", i.toString()), y += "</div>", h1.find(".sub").append(y), y = "<div>" + wL.GetString("Rate is _RATE_% each", "w"), i = (1 / i * 100).toFixed(3).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), y = y.replace("_RATE_", i.toString()), y += "</div>", h1.find(".sub").append(y), y = "<div>" + wL.GetString("Expected Value", "w"), y += "=$" + a + "</div>", h1.find(".sub").append(y)
            }
        },
        ByHp: {
            PreData: function(e) {
                wStateBox.StressLabels(["health"]);
                var a = wDrops.building_ids[e];
                wDrops.data[a] = [];
                for (var i = 0; i < object_base[a].params.results[0].returns.length; i++) {
                    wDrops.data[a][i] = [], t = $.extend(!0, {}, object_base[a].params.results[0].returns[i]);
                    var s = t.id;
                    wDrops.data[a][i].access = !1, wDrops.data[a][i].id = s, wDrops.data[a][i].wiki = item_base[s].params.price, wDrops.data[a][i].health = t.level, wDrops.data[a][i].base_chance = t.base_chance, wDrops.data[a][i].actual_chance = 0
                }
            },
            InitTable: function(e) {
                var a = wDrops.building_ids[e];
                $("#table-" + e).DataTable({
                    data: wDrops.data[a],
                    columns: [{
                        data: "base_chance",
                        title: wL.GetString("Rate", "w")
                    }, {
                        data: "actual_chance",
                        title: wL.GetString("Actual Rate", "w")
                    }, {
                        data: "health",
                        title: wL.GetString("Health", "i")
                    }, {
                        data: "id",
                        title: wL.GetString("Item", "i")
                    }, {
                        data: "wiki",
                        title: "wiki"
                    }],
                    columnDefs: [{
                        targets: [0, 1, 4],
                        className: "dt-body-right"
                    }, {
                        targets: [3],
                        className: "dt-body-left"
                    }, {
                        targets: [2],
                        className: "access"
                    }, {
                        targets: [0],
                        render: function(t, e, a, i) {
                            return (100 * t).toFixed(2).toString() + "%"
                        }
                    }, {
                        targets: [1],
                        render: function(t, e, a, i) {
                            return t ? (100 * t).toFixed(3).toString() + "%" : "-"
                        }
                    }, {
                        targets: [4],
                        render: function(t, e, a, i) {
                            return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        }
                    }],
                    info: !1,
                    searching: !1,
                    responsive: !1,
                    autoWidth: !0,
                    ordering: !1,
                    paging: !1,
                    language: wL.site_lang[wL.set_lang] ? wL.site_lang[wL.set_lang].wTable : wL.site_lang.en.wTable,
                    createdRow: function(e, a, i) {
                        t = $("td", e).eq(3)[0].firstChild.nodeValue, t = item_base[t].name, $("td", e).eq(3).attr("data-id", $("td", e).eq(3).text()).attr("title", t), a.id = t = wL.GetString(t), $("td", e).eq(3)[0].firstChild.nodeValue = t, t = a.base_chance, t = (100 * t).toString() + "%", $("td", e).eq(0)[0].title = t
                    }
                })
            },
            RedoHeader: function(t) {
                switch (m = wL.GetString(object_base[wDrops.building_ids[t]].name), wDrops.building_ids[t]) {
                    case 443:
                        m += " [" + wL.GetString("Easy", "i") + "]";
                        break;
                    case 444:
                        m += " [" + wL.GetString("Normal", "i") + "]";
                        break;
                    case 445:
                        m += " [" + wL.GetString("Hard", "i") + "]";
                        break;
                    case 657:
                        m += " [" + wL.GetString("Hell", "i") + "]"
                }
                n = 0, p = 0, $("#table-" + t).DataTable().rows().every(function(t, e, a) {
                    data = this.data();
                    var i = $("#val_health").val();
                    data.access = data.health <= i, $(this.node()).removeClass("cross").removeClass("tick"), $(this.node()).addClass(data.access ? "tick" : "cross"), data.access ? (data.actual_chance = (1 - n) * data.base_chance, n += data.actual_chance, p += data.wiki * data.actual_chance) : data.actual_chance = 0;
                    var s = data.actual_chance ? (100 * data.actual_chance).toString() + "%" : "-";
                    $("td", this.node()).eq(1)[0].title = s
                }), p = p.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                var e = $("#table-" + t + "_wrapper").children().first();
                e.css("display", "inline-block"), h1 = $("<div class='blue-header'><div class='main'>" + m + "</div></div>"), e.before(h1), h1.append("<div class='sub'></div>"), y = "<div>" + wL.GetString("Expected Value", "w"), y += "=$" + p + "</div>", h1.find(".sub").append(y), wDrops.is_build = !0
            }
        },
        Key: {
            data: [],
            key: 3424,
            keys: !1,
            PreData: function(e) {
                wStateBox.StressLabels(["health"]);
                var a = wDrops.building_ids[e];
                wDrops.data[a] = [];
                for (var i = 0; i < object_base[a].params.results[0].returns.length; i++) {
                    this.data[i] = [], t = $.extend(!0, {}, object_base[a].params.results[0].returns[i]);
                    var s = t.id;
                    this.data[i].access = !1, this.data[i].id = s, this.data[i].wiki = item_base[s].params.price, this.data[i].health = t.level, this.data[i].base_chance = t.base_chance, this.data[i].actual_chance = 0, this.data[i].key = t.consumes[0].id
                }
                for (i = 0; i < this.data.length; i++) this.data[i].key == this.key && wDrops.data[a].push(this.data[i])
            },
            InitTable: function(e) {
                var a = wDrops.building_ids[e];
                $("#table-" + e).DataTable({
                    data: wDrops.data[a],
                    columns: [{
                        data: "base_chance",
                        title: wL.GetString("Rate", "w")
                    }, {
                        data: "actual_chance",
                        title: wL.GetString("Actual Rate", "w")
                    }, {
                        data: "health",
                        title: wL.GetString("Health", "i")
                    }, {
                        data: "id",
                        title: wL.GetString("Item", "i")
                    }, {
                        data: "wiki",
                        title: "wiki"
                    }],
                    columnDefs: [{
                        targets: [0, 1, 4],
                        className: "dt-body-right"
                    }, {
                        targets: [3],
                        className: "dt-body-left"
                    }, {
                        targets: [2],
                        className: "access"
                    }, {
                        targets: [0],
                        render: function(t, e, a, i) {
                            return (100 * t).toFixed(2).toString() + "%"
                        }
                    }, {
                        targets: [1],
                        render: function(t, e, a, i) {
                            return t ? (100 * t).toFixed(3).toString() + "%" : "-"
                        }
                    }, {
                        targets: [4],
                        render: function(t, e, a, i) {
                            return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        }
                    }],
                    info: !1,
                    searching: !1,
                    responsive: !1,
                    autoWidth: !0,
                    ordering: !1,
                    paging: !1,
                    language: wL.site_lang[wL.set_lang] ? wL.site_lang[wL.set_lang].wTable : wL.site_lang.en.wTable,
                    createdRow: function(e, a, i) {
                        t = $("td", e).eq(3)[0].firstChild.nodeValue, t = item_base[t].name, $("td", e).eq(3).attr("data-id", $("td", e).eq(3).text()).attr("title", t), a.id = t = wL.GetString(t), $("td", e).eq(3)[0].firstChild.nodeValue = t, t = a.base_chance, t = (100 * t).toString() + "%", $("td", e).eq(0)[0].title = t
                    }
                })
            },
            getKeys: function() {
                if (!this.keys) {
                    var t = wDrops.contents[wDrops.building].id[0];
                    t = object_base[t].params.results[0].requires_one_from, this.keys = [];
                    for (var e = 0; e < t.length; e++) {
                        this.keys[e] = [], this.keys[e].id = t[e];
                        var a = item_base[t[e]].name.replace("Rare Key [", "").replace("]", "");
                        this.keys[e].name = a
                    }
                    this.keys = this.keys.sort(function(t, e) {
                        return t.name > e.name ? 1 : -1
                    })
                }
                return this.keys
            },
            RedoHeader: function(t) {
                var e = wL.GetString(object_base[wDrops.building_ids[t]].name),
                    a = wL.GetString(item_base[this.key].name),
                    i = 0,
                    s = 0;
                $("#table-" + t).DataTable().rows().every(function(t, e, a) {
                    data = this.data();
                    var n = $("#val_health").val();
                    data.access = data.health <= n, $(this.node()).removeClass("cross").removeClass("tick"), $(this.node()).addClass(data.access ? "tick" : "cross"), data.access ? (data.actual_chance = (1 - i) * data.base_chance, i += data.actual_chance, s += data.wiki * data.actual_chance) : data.actual_chance = 0;
                    var l = data.actual_chance ? (100 * data.actual_chance).toString() + "%" : "-";
                    $("td", this.node()).eq(1)[0].title = l
                }), s = s.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                var n = $("#table-" + t),
                    l = "<div class='blue-header'><div class='main'>";
                l += e + "<br>" + a + "</div></div>", l = $(l), n.before(l), l.append("<div class='sub'></div>"), a = "<div>" + wL.GetString("Expected Value", "w"), a += "=$" + s + "</div>", l.find(".sub").append(a);
                var r = $(".buttons");
                r.empty(), i = this.getKeys(), Object.keys(i).map(function(t, e) {
                    s = '<button class="btn" value="' + i[t].id + '">', s += i[t].name + "</button>", s = $(s), r.append(s), wDrops.Key.key == i[t].id ? s.addClass("btn-red") : (s.addClass("btn-info"), s.on("click", function() {
                        var t = Number($(this).val());
                        t != wDrops.Key.key && (wDrops.Key.key = t, wPage.Go(!0))
                    }))
                }), wDrops.is_build = !0
            }
        },
        BuildTable: function(t, e) {
            $("#output").append($("<table></table>").attr("id", "table-" + t).attr("class", "display cell-border hover stripe compact nowrap w-info"))
        },
        ReSizeTable: function(t) {
            $("#table-" + t).DataTable().rows().invalidate("data").draw(!1), $("#table-" + t + "_wrapper").css("max-width", parseInt($("#table-" + t).css("width")) + 21 + "px").css("margin-right", "15px").css("vertical-align", "top").css("display", "inline"), $("#table-" + t).css("width", "100%"), $(".dataTables_scroll").css("display", "inline-block")
        },
        ReDraw: function() {
            $(".blue-header").remove();
            for (var t = this.type[this.contents[this.building].type], e = 0; e < this.building_ids.length; e++) wDrops[t].RedoHeader(e), wDrops.ReSizeTable(e)
        }
    },
    wPage = {
        full_title: "MO@tw",
        title: "MO@tw",
        hash_head: "#/",
        tags: [],
        Now_hash: "",
        page: {
            Quests: {
                name: "Quests",
                f: function() {
                    wPage.StartPage(this.name)
                },
                childs: {
                    SkillQuest: {
                        name: "Skill Quest",
                        f: function() {
                            wSkillQuest.Init()
                        }
                    },
                    PartyQuest: {
                        name: "Party Quest",
                        f: function() {
                            wDrops.Init(this.name)
                        }
                    }
                }
            },
            Loot: {
                name: "Loot",
                f: function() {
                    wPage.StartPage(this.name)
                },
                childs: {
                    RetaliationChest: {
                        name: "Retaliation Chest",
                        f: function() {
                            wDrops.Init(this.name)
                        }
                    },
                    HuntingRewardChest: {
                        name: "Hunting Reward Chest",
                        f: function() {
                            wDrops.Init(this.name)
                        }
                    },
                    Presents: {
                        name: "Presents",
                        f: function() {
                            wDrops.Init(this.name)
                        }
                    },
                    RoseChest: {
                        name: "Rose Chest",
                        f: function() {
                            wDrops.Init(this.name)
                        }
                    },
                    ValentinesPresent: {
                        name: "Valentine's Present",
                        f: function() {
                            wDrops.Init(this.name)
                        }
                    },
                    EasterEggs: {
                        name: "Easter Eggs",
                        f: function() {
                            wDrops.Init(this.name)
                        }
                    },
                    DeathsDeal: {
                        name: "Death's Deal",
                        f: function() {
                            wDrops.Init(this.name)
                        }
                    },
                    SunkenTreasure: {
                        name: "Sunken Treasure",
                        f: function() {
                            wDrops.Init(this.name)
                        }
                    }
                }
            }
        },
        Init: function() {
            this.Loading(), $.each(wPage.page, function(t, e) {
                if (0 != e.isShow) {
                    var a = '<li><a data-k="' + e.name + "@w";
                    a += '">' + wL.GetString(e.name, "w") + "</a><ul>";
                    var i = !1;
                    $.each(e.childs, function(t, e) {
                        0 != e.isShow && (i = !0, a += '<li class="col-100"><a data-k="', a += e.name + '@w"', e.f && (a += ' href="#/' + t), a += '">' + wL.GetString(e.name, "w") + "</a></li>")
                    }), a = i ? a + "</li>" : a.slice(0, a.length - 4), a = i ? a.splice(a.search("</a>"), "<span class='fas fa-chevron-down icon16'></span>") : a, $("#top-menu").append(a)
                }
            })
        },
        Go: async function(t = !1) {
            if (hash = location.hash, this.Now_hash != hash || t)
                if (this.Loading(), await sleep(), "" == hash || hash == this.hash_head) window.history.replaceState(null, "", ""), wPage.tags = [], wPage.BuildTag(), wPage.SetTitle(), wPage.StartPage();
                else {
                    var e = hash.split("/"),
                        a = !0;
                    e = e[1].split("?"), $.each(wPage.page, function(t, i) {
                        wPage.tags = [i.name], t.toLowerCase() == e[0].toLowerCase() && a && (a = !1, window.history.replaceState(null, "", wPage.hash_head + t), wPage.BuildTag(), wPage.SetTitle(), i.f()), $.each(i.childs, function(t, i) {
                            t.toLowerCase() == e[0].toLowerCase() && a && (a = !1, wPage.tags.push(i.name), window.history.replaceState(null, "", wPage.hash_head + t), wPage.BuildTag(), wPage.SetTitle(), i.f())
                        })
                    }), a && wPage.Error()
                }
        },
// AjaxPage: function(t) {
// $.ajax({
// type: "get",
// dataType: "text",
// url: "page/" + t + ".html?t=" + tenMinuteCache(),
// success: function(t) {
// $("main").append(t), wPage.Loaded()
// },
// error: function(t) {
// wPage.Error()
// }
// })
// },
        StartPage: function(t = !1) {
            t && (this.tags = []), $.each(wPage.page, function(e, a) {
                if (0 != a.startPageShow && (!t || t == a.name)) {
                    var i = '<div class="card"><h1><a href="#/' + a.name + '">' + wL.GetString(a.name, "w") + "</a></h1>";
                    $.each(a.childs, function(t, e) {
                        0 != e.isShow && (i += "<li><a", e.f && (i += ' href="#/' + t + '"'), i += ">" + wL.GetString(e.name, "w") + "</a></li>")
                    }), $("main").append(i)
                }
            }), 
            wPage.Loaded()
        },
        Error: function() {
            this.Empty(), t = "<div class='page-err'> " + wL.GetString("Page Not Found.", "w"), t += "</div>", $("#output").append(t)
        },
        SetTitle: function() {
            0 == this.tags.length ? document.title = this.full_title : document.title = wL.GetString(this.tags[this.tags.length - 1], "w") + " :: " + this.title
        },
        BuildTag: function() {
            this.Now_hash = location.hash, $("#tag-container").empty(), t = "<ul class='page-tag'>";
            for (var e = 0; e < this.tags.length; e++) t += "<li><div>" + wL.GetString(this.tags[e], "w") + "</div></li>";
            t += "</ul>", $("#tag-container").append(t)
        },
        Empty: function() {
            $("#output").empty(), $(".buttons").empty(), $("#tag-container").empty(), wStateBox.ClearStressLabels(), wSkillQuest.is_build = !1, wDrops.is_build = !1
        },
        Loaded: function() {
            $(".lds-ellipsis").remove()
        },
        Loading: function() {
            this.Empty();
            $("#output").append("<div class='lds-ellipsis'><div></div><div></div><div></div><div></div></div>")
        }
    },
    wSettingBox = {
        is_display: !1,
        Init: function() {
            $("#btn-setting").click(function() {
                wSettingBox.Display(!wSettingBox.is_display)
            })
        },
        Display: function(t = !0) {
            1 != t && (t = !1), wSettingBox.is_display = t;
            var e = $("#btn-setting").parent();
            wSettingBox.is_display ? e.addClass("active") : e.removeClass("active")
        }
    },
    wSkillQuest = {
        is_init: !1,
        is_build: !1,
        sq_data: [],
        Init: function() {
            this.PreData(), $("#output").append($("<table id='table-0'></table>").attr("class", "cell-border hover stripe compact nowrap w-info")), this.InitTable(), wStateBox.StressLabels(["accuracy", "strength", "defense", "magic", "health", "archery"], !0), this.BuildToolDiv(), this.RedoHeader(), this.RedoData(), this.ReDraw(), this.ReSizeTable(), wSkillQuest.is_build = !0, wSkillQuest.is_init = !0, wPage.Loaded()
        },
        PreData: function() {
            $.each(SkillQuest.quests, function(t, e) {
                wSkillQuest.is_init || wSkillQuest.sq_data.push([]), wSkillQuest.sq_data[t].skill_needed = e.skill, wSkillQuest.sq_data[t].item_id = e.item_id, wSkillQuest.sq_data[t].reward_item_id = e.reward[3], wSkillQuest.is_init || (wSkillQuest.sq_data[t].id = e.id, wSkillQuest.sq_data[t].access = !1, wSkillQuest.sq_data[t].lvl_needed = e.lvl_needed, wSkillQuest.sq_data[t].min_qp = e.min_qp, wSkillQuest.sq_data[t].quantity = e.amount, wSkillQuest.sq_data[t].reward_exp = e.reward[0], wSkillQuest.sq_data[t].reward_coins = e.reward[1], wSkillQuest.sq_data[t].reward_mos = e.reward[2], wSkillQuest.sq_data[t].reward_qp = e.qp, wSkillQuest.sq_data[t].ul_level = e.ul_level, wSkillQuest.sq_data[t].ul_point = wSkillQuest.sq_data[t].min_qp + 750, wSkillQuest.sq_data[t].skill_en = wSkillQuest.sq_data[t].skill_needed)
            })
        },
        InitTable: function() {
            $("#table-0").DataTable({
                data: wSkillQuest.sq_data,
                columns: [{
                    data: "id",
                    title: "ID"
                }, {
                    data: "access",
                    title: wL.GetString("Access", "w")
                }, {
                    data: "skill_needed",
                    title: wL.GetString("Skill", "i")
                }, {
                    data: "lvl_needed",
                    title: wL.GetString("Level", "i")
                }, {
                    data: "min_qp",
                    title: wL.GetString("Points", "i")
                }, {
                    data: "item_id",
                    title: wL.GetString("Item", "i")
                }, {
                    data: "quantity",
                    title: wL.GetString("Qty", "w")
                }, {
                    data: "reward_exp",
                    title: "Exp"
                }, {
                    data: "reward_coins",
                    title: "Coins"
                }, {
                    data: "reward_mos",
                    title: "Mos"
                }, {
                    data: "reward_item_id",
                    title: wL.GetString("Item", "i")
                }, {
                    data: "reward_qp",
                    title: wL.GetString("Reward Point", "w")
                }, {
                    data: "ul_level",
                    title: wL.GetString("u/l of Level", "w")
                }, {
                    data: "ul_point",
                    title: wL.GetString("u/l of Point", "w")
                }, {
                    data: "skill_en",
                    title: "hidden"
                }],
                columnDefs: [{
                    targets: [6],
                    render: function(t, e, a, i) {
                        return Math.round(SkillQuest.ITEM_MULTIPLIER[localStorage.sq_grade] * t).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }
                }, {
                    targets: [7],
                    render: function(t, e, a, i) {
                        return Math.floor(SkillQuest.EXP_MULTIPLIER[localStorage.sq_grade] * t).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }
                }, {
                    targets: [8],
                    render: function(t, e, a, i) {
                        return Math.floor(SkillQuest.COINS_MULTIPLIER[localStorage.sq_grade] * t).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }
                }, {
                    targets: [9],
                    render: function(t, e, a, i) {
                        return Math.floor(SkillQuest.MOS_MULTIPLIER[localStorage.sq_grade] * t).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }
                }, {
                    targets: [0, 3, 4, 6, 7, 8, 9, 11, 12, 13],
                    className: "dt-body-right"
                }, {
                    targets: [1],
                    className: "access",
                    render: function(t, e, a, i) {
                        return t ? "✔" : "✘"
                    }
                }, {
                    targets: [2, 5, 10],
                    className: "dt-body-left"
                }, {
                    targets: [0, 4, 11, 12, 13],
                    render: function(t, e, a, i) {
                        return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }
                }, {
                    targets: [14],
                    visible: !1
                }],
                info: !1,
                searching: !0,
                responsive: !1,
                autoWidth: !0,
                paging: !1,
                orderMulti: !0,
                scrollY: "calc(100vh - 180px)",
                scrollX: !0,
                language: wL.site_lang[wL.set_lang] ? wL.site_lang[wL.set_lang].wTable : wL.site_lang.en.wTable,
                createdRow: function(t, e, a) {
                    $("td", t).eq(5).attr("data-id", $("td", t).eq(5).text()).attr("title", item_base[$("td", t).eq(5).text()].name), $("td", t).eq(10).attr("data-id", $("td", t).eq(10).text()).attr("title", item_base[$("td", t).eq(10).text()].name), $("td", t).eq(2)
                }
            })
        },
        BuildToolDiv: function() {
            var t = "<label>" + wL.GetString("Grade", "i");
            for (var e in t += ":<select id='val_grade'></select></label>", $("#table-0_filter").append(t), s = $("#val_grade"), SkillQuest.GRADE_TO_NAME) t = '<option value="' + e + '">', t += wL.GetString(SkillQuest.GRADE_TO_NAME[e], "i"), t += "</option>", s.append(t);
            localStorage.sq_grade = null == localStorage.sq_grade ? 2 : localStorage.sq_grade, s.val(localStorage.sq_grade), s.on("change", function() {
                localStorage.sq_grade = s.val(), wSkillQuest.ReDrawGrade()
            })
        },
        RedoHeader: function() {
            $("#table-0_wrapper").css("margin", "0 auto"), $(".dataTables_scrollHeadInner").css("margin", "0 auto");
            var t = $($("#table-0").DataTable().table().header()).find("tr");
            t.attr("id", "header1");
            for (var e = 10; e >= 7; e--) t.find("th").eq(e).addClass("highlight");
            h2 = $("<tr role='row' id='header2'></tr>").appendTo(t.parent());
            for (e = 10; e >= 2; e--) t.find("th").eq(2).appendTo(h2);
            for (e = 4; e >= 0; e--) t.find("th").eq(e).attr("rowspan", "2");
            var a = "<th class='dt-body-right' rowspan='1' colspan='5'>";
            a += wL.GetString("Needed", "w") + "</th>", t.find("th").eq(1).after(a), a = "<th class='dt-body-right highlight' rowspan='1' colspan='4'>", a += wL.GetString("Reward (pick 1 by random)", "w") + "</th>", t.find("th").eq(2).after(a)
        },
        RedoData: function() {
            $("#table-0").DataTable().rows().every(function(e, a, i) {
                data = this.data(), t = $("td", this.node()).eq(2)[0].firstChild.nodeValue, t = wL.GetString(t, "i"), data.skill_needed = t, $("td", this.node()).eq(2)[0].firstChild.nodeValue = t, t = $("td", this.node()).eq(5)[0].firstChild.nodeValue, t = wL.GetString(item_base[t].name), data.item_id = t, $("td", this.node()).eq(5)[0].firstChild.nodeValue = t, t = $("td", this.node()).eq(10)[0].firstChild.nodeValue, t = wL.GetString(item_base[t].name), data.reward_item_id = t, $("td", this.node()).eq(10)[0].firstChild.nodeValue = t
            })
        },
        ReDraw: function() {
            this.ReDrawGrade(!1), this.ReDrawLvl(!1), this.ReSizeTable()
        },
        ReDrawLvl: function(t = !0) {
            $("#table-0").DataTable().rows().every(function(t, e, a) {
                var i = this.data();
                i.access = !($("#val_" + i.skill_en.toLowerCase()).val() > i.ul_level && $("#val_skill_quest").val() > i.ul_point || $("#val_" + i.skill_en.toLowerCase()).val() < i.lvl_needed || $("#val_skill_quest").val() < i.min_qp), $(this.node()).removeClass("cross").removeClass("tick"), $(this.node()).addClass(i.access ? "tick" : "cross"), $("#val_" + i.skill_en.toLowerCase()).val() < i.lvl_needed ? $("td", this.node()).eq(3).addClass("black") : $("td", this.node()).eq(3).removeClass("black"), $("#val_skill_quest").val() < i.min_qp ? $("td", this.node()).eq(4).addClass("black") : $("td", this.node()).eq(4).removeClass("black"), $("#val_" + i.skill_en.toLowerCase()).val() > i.ul_level ? $("td", this.node()).eq(12).addClass("black") : $("td", this.node()).eq(12).removeClass("black"), $("#val_skill_quest").val() > i.ul_point ? $("td", this.node()).eq(13).addClass("black") : $("td", this.node()).eq(13).removeClass("black")
            }), t && this.ReSizeTable()
        },
        ReDrawGrade: function(t = !0) {
            $("#table-0").DataTable().rows().every(function(t, e, a) {
                0 == localStorage.sq_grade ? $("td", this.node()).eq(9).addClass("black") : $("td", this.node()).eq(9).removeClass("black"), 2 == localStorage.sq_grade ? $("td", this.node()).eq(10).removeClass("black") : $("td", this.node()).eq(10).addClass("black")
            }), t && this.ReSizeTable()
        },
        ReSizeTable: function() {
            $("#table-0").DataTable().rows().invalidate("data").draw(!1), $("#table-0_wrapper").css("max-width", parseInt($("#table-0").css("width")) + 21 + "px"), $("#table-0").css("width", "100%")
        }
    },
    wStateBox = {
        labels_attr: {
            hs_combat: {
                a: ["accuracy", "strength", "defense", "magic", "health", "archery"],
                min: 1,
                lang: "i"
            },
            hs_pro: {
                a: ["woodcutting", "forging", "mining", "wizardry", "fishing", "fletching", "cooking", "jewelry", "farming", "breeding", "alchemy", "carpentry", "fungiculture"],
                min: 1,
                lang: "i"
            },
            hs_other: {
                a: ["skill_quest"],
                is_span: !0,
                min: 0,
                lang: "w"
            }
        },
        labels: [],
        is_init: !1,
        is_display: !0,
        Init: function() {
            if (!this.is_init) {
                this.is_init = !0;
                var t = this.labels_attr;
                for (var e in t)
                    for (var a in t[e].a) this.labels.push(t[e].a[a]);
                this.is_display = null == localStorage.kkstatebox_display || "true" == localStorage.kkstatebox_display, this.Display(this.is_display), $("#btn-state").click(function() {
                    wStateBox.is_display = !wStateBox.is_display, localStorage.kkstatebox_display = wStateBox.is_display, wStateBox.Display(wStateBox.is_display)
                }), this.TableBuild(), this.AddVersion()
            }
        },
        AddVersion: function() {
            var t = '<div id="ver" class="version">GAME VERSION: ' + release_version;
            t += ' <span class="fas icon-info" title="' + wL.GetString("info-ver", "w"), t += '" data-k="info-ver@w@title"></span><div>', $(".list-state").append(t), $.ajax({
                type: "get",
                dataType: "json",
                url: "https://rpg-de.mo.ee/version.json?t=" + tenMinuteCache(),
                success: function(t) {
                    var e = '<span class="fas ';
                    e += 1 * t.v == release_version ? "fa-check-circle icon-ver-ok" : "fa-exclamation-triangle icon-ver-danger", e += '"></span> ', $("#ver").prepend(e)
                },
                error: function(t) {
                    $("#ver").prepend('<span class="fas fa-question-circle icon-ver-warnnig"></span> ')
                }
            })
        },
        BuildSkillDiv: function(t, e) {
            var a = this.labels_attr[t].a,
                i = this.labels_attr[t].is_span,
                s = this.labels_attr[t].lang,
                n = this.labels_attr[t].min;
            for (var l in c = "", a) {
                var r = this.NamifyHs(a[l]);
                c += l % 2 && !i ? "" : "<tr>", c += "<td" + (i ? " colspan='2'>" : ">"), c += "<label data-after='：' data-k='" + r, c += "@" + s + "'>" + wL.GetString(r, s) + "：<input id='val_", c += a[l] + "' class='input-skill-val", c += (i ? "-last" : "") + "' type='number' min='" + n + "'></input></label></td>", c += l % 2 || i ? "</tr>" : ""
            }
            for (var l in $(e).after(c), a) $("#val_" + a[l]).on("change", function() {
                this.value < this.min && (this.value = this.min), this.value = this.value.replace(/[^0-9]/g, "")
            })
        },
        NamifyHs: function(t) {
            if ("skill_quest" == t) {
                var e = (t += "_points").split("_");
                for (var a in t = "", e) "" != t && (t += " "), t += capitaliseFirstLetter(e[a]);
                return t
            }
            return capitaliseFirstLetter(t)
        },
        ResetValue: function() {
            for (var t in this.labels_attr)
                for (var e in this.labels_attr[t].a) $("#val_" + this.labels_attr[t].a[e]).val(this.labels_attr[t].min)
        },
        TableBuild: function() {
            this.BuildSkillDiv("hs_combat", ".state-content-combat"), this.BuildSkillDiv("hs_pro", ".state-content-pro"), this.BuildSkillDiv("hs_other", ".state-content-other"), this.ResetValue()
        },
        StressLabels: function(t = [], e = !1) {
            var a = t;
            if (e)
                for (var i in a = $.extend(!0, [], this.labels), t) a.splice(a.indexOf(t[i]), 1);
            for (var i in this.ClearStressLabels(), a) $("#val_" + a[i]).parent().parent().addClass("stress")
        },
        ClearStressLabels: function() {
            for (var t in this.labels) $("#val_" + this.labels[t]).parent().parent().removeClass("stress")
        },
        Display: function(t = !0) {
            1 != t && (t = !1), wStateBox.is_display = t;
            var e = $("#btn-state").parent();
            wStateBox.is_display ? e.addClass("active") : e.removeClass("active")
        }
    },
    wDataRedo = {
        Init: function() {
            this.ItemBaseAddCraft();
            this.SkillQuestLevelCalc();
        },
        ItemBaseAddCraft: function() {
            for (var ci in object_base) {
                if (object_base[ci].params != undefined && object_base[ci].params.results != undefined) {
                    for (var fi in object_base[ci].params.results) {
                        var skill_name = object_base[ci].params.results[fi].skill;
                        var requires_one_from = object_base[ci].params.results[fi].requires_one_from;
                        for (var ei in object_base[ci].params.results[fi].returns) {
                            var id = object_base[ci].params.results[fi].returns[ei].id;
                            var t = $.extend(!0, {}, object_base[ci].params.results[fi].returns[ei]);
                            t.skill_name = skill_name;
                            t.requires_one_from = requires_one_from;
                            t.object_id = ci;
                            if (t.skill_name == "farming") {
                                if (object_base[ci].params.duration != undefined) {
                                    t.duration = object_base[ci].params.duration;
                                    for (var gi in item_base) {
                                        if (item_base[gi].params.farming_id == t.object_id) {
                                            t.level = item_base[gi].params.min_farming;
                                            t.seed_id = gi;
                                        }
                                    }
                                } else {
                                    delete t.duration;
                                }
                            }
                            delete t.id;
                            item_base[id].kcraft = item_base[id].kcraft == undefined ? [] : item_base[id].kcraft;
                            item_base[id].kcraft.push(t);
                        }
                    }
                }
            }
            for (var ci in FORGE_FORMULAS) {
                var t = $.extend(!0, {}, FORGE_FORMULAS[ci]);
                var id = FORGE_FORMULAS[ci].item_id;
                t.object_id = 36;
                t.requires_one_from = [36, 2807];
                if (FORGE_FORMULAS[ci].level != undefined) {
                    t.skill_name = "forging";
                } else if (FORGE_FORMULAS[ci].fletching_level != undefined) {
                    t.skill_name = "fletching";
                    t.level = FORGE_FORMULAS[ci].fletching_level;
                    delete t.fletching_level;
                } else if (FORGE_FORMULAS[ci].wizardry_level != undefined) {
                    t.skill_name = "wizardry";
                    t.level = FORGE_FORMULAS[ci].wizardry_level;
                    delete t.wizardry_level;
                }
                delete t.id;
                item_base[id].kcraft = item_base[id].kcraft == undefined ? [] : item_base[id].kcraft;
                item_base[id].kcraft.push(t);
            }
            for (var ci in CARPENTRY_FORMULAS) {
                for (var fi in CARPENTRY_FORMULAS[ci]) {
                    var t = $.extend(!0, {}, CARPENTRY_FORMULAS[ci][fi]);
                    var id = t.item_id;
                    delete t.id;
                    delete t.item_id;
                    t.skill_name = "carpentry";
                    item_base[id].kcraft = item_base[id].kcraft == undefined ? [] : item_base[id].kcraft;
                    item_base[id].kcraft.push(t);
                }
            }
            for (var ci in FLETCHING_FORMULAS) {
                var t = $.extend(!0, {}, FLETCHING_FORMULAS[ci]);
                var id = t.item_id;
                delete t.item_id;
                t.skill_name = "fletching";
                item_base[id].kcraft = item_base[id].kcraft == undefined ? [] : item_base[id].kcraft;
                item_base[id].kcraft.push(t);
            }
            for (var ci in pets) {
                var g = $.extend(!0, {}, pets[ci].params);
                if (g.breeding_level && g.likes && 0 != g.likes.length) {
                    for (var fi in g.likes) {
                        var k = g.likes[fi];
                        for (var gi in k.returns) {
                            var m = k.returns[gi];
                            var id = pets[m.pet_id].params.item_id;
                            var t = {};
                            t.skill_name = "breeding";
                            t.parents = [parseInt(ci), parseInt(k.pet_id)];
                            sortArrayOfObjectsByFieldValueDesc(t.parents, "min");
                            t.xp = k.xp;
                            t.base_chance = m.base_chance;
                            t.max_chance = m.max_chance;
                            item_base[id].kcraft = item_base[id].kcraft == undefined ? [] : item_base[id].kcraft;
                            var yi = !0;
                            for (var xi in item_base[id].kcraft) {
                                if (item_base[id].kcraft[xi].parents == t.parents) {
                                    yi = !1;
                                    break;
                                }
                            }
                            if (yi) {
                                item_base[id].kcraft.push(t);
                            }
                        }
                    }
                }
            }
        },
        SkillQuestLevelCalc: function() {
            $.each(SkillQuest.quests, function(k, v) {
                v.lvl_needed = "not found";
                var arr_lvl = [];
                if (item_base[v.item_id].kcraft != undefined) {
                    for (var i in item_base[v.item_id].kcraft) {
                        if (item_base[v.item_id].kcraft[i].skill_name != "health" && item_base[v.item_id].kcraft[i].skill_name == v.skill) {
                            if (v.skill == "breeding") {
                                var n = item_base[v.item_id].kcraft[i].parents;
                                arr_lvl.push(Math.max(pets[n[0]].params.breeding_level, pets[n[1]].params.breeding_level));
                            } else {
                                arr_lvl.push(item_base[v.item_id].kcraft[i].level == undefined || item_base[v.item_id].kcraft[i].level <= 1 ? 1 : item_base[v.item_id].kcraft[i].level);
                            }
                        }
                    }
                    if (arr_lvl.length != 0) {
                        v.lvl_needed = arr_lvl.length == 1 ? arr_lvl[0] : Math.min.apply(null, arr_lvl);
                    }
                }
                v.skill = capitaliseFirstLetter(v.skill);
                v.ul_level = Math.max(v.lvl_needed * 2, v.lvl_needed + 30);
            });
        }
    };

function capitaliseFirstLetter(t) {return t.charAt(0).toUpperCase() + t.slice(1)}
function secondstamp() {return parseInt(String(Math.round((new Date).getTime() / 1e3)))}
function tenMinuteCache() { return Math.floor(secondstamp() / 600); }
function sleep() {return new Promise(t => setTimeout(t, 50))}
function timestamp() {return (new Date).getTime()}
String.prototype.splice = function(t, e) {return this.slice(0, t) + e + this.slice(t)};