if (navigator.userAgent.indexOf('MSIE') > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
    document.body.style.padding = '15px';
    document.body.innerHTML = '<h1 style="color:red; font-weight:bold; font-size:75px;">Stop</h1><p>Please! Stop using bad/old browsers. We will not and do not support Microsoft Internet Explorer.</p><p>We support and encourage the use of Google Chrome, Mozilla Firefox, Opera. Safari and Microsoft Edge might work too.</p>';
    throw new Error('Please! Stop using bad/old browsers. We will not and do not support Microsoft Internet Explorer.');
}
document.body.innerHTML += '<div class="popup-modal"><div><h1 class="bold">Submit A Bug</h1><br><form class="material-form" style="margin-bottom: 40px;" id="submit-a-bug-form" method="POST" action="https://docs.google.com/forms/d/e/1FAIpQLScj05gVFu20Rs9yeMq2YEWkgrdBR9FHl1n1BT41m0uwOLd0wA/formResponse" target="_blank"><div class="material-input-group"><input type="email" placeholder="Email" autocomplete="off" tabindex="0" name="entry.79331854" required class="material-form-control"></div><div class="material-input-group" style="margin-bottom: 20px;"><textarea type="text" placeholder="Describe the problem" class="material-form-control" style="height: 36px;" required name="entry.374207772"></textarea></div><input type="hidden" name="entry.280797450" value=""><input type="hidden" name="fvv" value="1"> <input type="hidden" name="draftResponse" value="[null,null,&quot;9220846105446603049&quot;]"> <input type="hidden" name="pageHistory" value="0"> <input type="hidden" name="fbzx" value="9220846105446603049"><button class="material-form-button" onclick="theDOM.modal.close()">Submit</button></form></div><div style="background: #c8c8c8;"><a onclick="theDOM.modal.close()">Close</a></div></div><div id="gapi-fake" style="display: none;"></div><div id="top-navigation-bar" class="material-horizontal-nav-bar remove-on-embed viewable" style="background: linear-gradient(top, #ffff00 30%, #ffff00 30%, #fe0000 30%);"><div style="display: table; width: 95%; height: 100%; margin: 0 auto;"><div style="display: table-cell; vertical-align: middle;"><h3 id="nav-title">MVHS Bell Countdown</h3></div><div style="display: table-cell; vertical-align: middle;"><button id="g-signin-main" data-onsuccess="onSignIn">Server Down Today</button><div id="google-user-status"><div style="display: table;"><div style="display: table-cell;"><img src=""></div><div style="display: table-cell; vertical-align: middle;"><i class="material-icons" style="cursor: pointer;" id="google-signin-dropdown-button" onclick="document.getElementById(\'google-signin-dropdown\').style.display=\'block\';">more_vert</i></div></div><div id="google-signin-dropdown"><div><div><p style="word-break: break-all;" onclick="gSignOut();"></p></div></div></div></div></div></div></div><div id="notification-div" class="viewable"><p></p></div><div id="home-section" class="main-section viewable"><div class="inner-main-div"><h1 id="today-date"></h1><div style="display: inline; position: relative;"><h1 id="type-of-day" onclick="document.getElementById(\'schedule-dropdown\').style.display=\'block\';" onmouseover="document.getElementById(\'schedule-dropdown\').style.display=\'block\';"></h1><div id="schedule-dropdown" class="remove-on-embed"><h1>Today\'s Schedule</h1><table><tr><th>Period</th><th class="right-table-row">Time</th></tr></table><div style="text-align: center;"><button class="material-form-button" onclick="document.getElementById(\'schedule-dropdown\').style.display=\'none\';">Close</button></div></div></div><div id="entire-progress-bar"><div id="inner-text"><h1 id="progress-bar-text">Loading...</h1><h1 id="current-period"></h1></div><div id="progress-bar"></div></div></div></div><div id="preferences-section" class="main-section remove-on-embed viewable"><div class="inner-main-div"><div><h1 id="period-names-title">Period Names</h1></div><div id="form-outer-div"><form class="material-form" id="change-names-form"><div class="container" id="form-container"><div class="col-md-6"><div class="material-input-group"><input type="text" name="period0" maxlength="20" autocomplete="off" class="material-form-control"/><label>Period 0</label></div><div class="material-input-group"><input type="text" name="period1" maxlength="20" autocomplete="off" class="material-form-control"/><label>Period 1</label></div><div class="material-input-group"><input type="text" name="period2" maxlength="20" autocomplete="off" class="material-form-control"/><label>Period 2</label></div><div class="material-input-group"><input type="text" name="period3" maxlength="20" autocomplete="off" class="material-form-control"/><label>Period 3</label></div></div><div class="col-md-6"><div class="material-input-group"><input type="text" name="period4" maxlength="20" autocomplete="off" class="material-form-control"/><label>Period 4</label></div><div class="material-input-group"><input type="text" name="period5" maxlength="20" autocomplete="off" class="material-form-control"/><label>Period 5</label></div><div class="material-input-group"><input type="text" name="period6" maxlength="20" autocomplete="off" class="material-form-control"/><label>Period 6</label></div><div class="material-input-group"><input type="text" name="period7" maxlength="20" autocomplete="off" class="material-form-control"/><label>Period 7</label></div></div><div style="clear: both;"><div style="display: inline-block;"><p style="font-size: 14px;" class="material-hoverable"><i style="vertical-align: middle;" class="material-icons">help</i></p><div><p>By signing in with Google, all of your preferences will be stored online. Then, when you sign into Google on another device, all of your preferences will automatically transfer.</p></div></div><button class="material-form-button" style="display: none;" id="period-names-save-button"><span style="margin-right: 10px; vertical-align: middle;">Save To The Cloud</span><i style="vertical-align: middle;" class="material-icons">cloud</i></button><p style="display: inline; margin: 0 20px 0 0; font-size: 14px;" class="remove-on-google">To update your preferences, first sign in by clicking the top right corner.</p></div></div></form></div></div></div><div id="footer" class="remove-on-embed viewable"><div style="padding: 20px; height: 200px; background: #eeeeee;"><div style="display: table; height: 100%; width: 100%;"><div style="height: 100px; display: table-cell; vertical-align: middle;"><img src="/images/touch/1024.png" style="height: 100%;"><h3 style="margin-top: 20px;">MVHS Bell Countdown</h3><a href="mailto:bell@mvhs.club">bell@mvhs.club</a></div><div style="display: table-cell; vertical-align: middle; text-align: right;"><p>Found a bug or problem? <a onclick="theDOM.modal.show();theDOM.insertBugMetaData();">Report a bug</a></p></div></div></div><div style="background: #455a64; height: 30px; padding: 20px; background: #c8c8c8;"><p style="float: left;"><a target="_blank" href="https://mvhsbell.wordpress.com/">Blog</a> | <a target="_blank" href="https://mvhsbell.wordpress.com/privacy/">Privacy</a></p></div></div>';
for (var materialFormControl = document.getElementsByClassName("material-form-control"), i = 0; i < materialFormControl.length; i++) materialFormControl[i].addEventListener("focusout", function(t) {
    changeState(this)
});

function changeState(t) {
    t.value.length > 0 ? t.classList.add("has-value") : t.classList.remove("has-value")
}
"use strict";
var theDOM = new function() {
    var e = {};
    this.typeOfDay = document.getElementById("type-of-day"), this.progressBarText = document.getElementById("progress-bar-text"), this.currentPeriod = document.getElementById("current-period"), this.periodNamesSaveButton = document.getElementById("period-names-save-button"), this.notificationDiv = document.getElementById("notification-div"), this.todayDate = document.getElementById("today-date"), this.progressBar = document.getElementById("progress-bar"), this.changeNamesForm = document.getElementById("change-names-form"), this.preloader = document.getElementById("preloader"), this.notificationText = document.querySelector("#notification-div > p > a"), this.gSignInButton = document.getElementById("g-signin-main"), this.navBarButton = document.getElementById("nav-bar-button"), this.topNavigationBar = document.getElementById("top-navigation-bar"), this.navTitle = document.getElementById("nav-title"), this.submitABugForm = document.getElementById("submit-a-bug-form"), this.hidePreloader = function() {
        theDOM.preloader.querySelector(".material-loader").style.opacity = "0", theDOM.preloader.style.opacity = "0", theDOM.preloader.style.pointerEvents = "none", setTimeout(function() {
            theDOM.preloader.style.display = "none"
        }, 2e3)
    }, this.updateProgressBar = function(t) {
        t != e.progressBar && (theDOM.progressBar.style.width = t + "%", theDOM.topNavigationBar.style.background = "-webkit-linear-gradient(left, #4b4b4b " + t + "%, #333333 0%)", e.progressBar = t)
    }, this.updateCurrentPeriodText = function(t) {
        t != e.periodText && (theDOM.currentPeriod.innerHTML = t, e.periodText = t)
    }, this.updateProgressBarText = function(t) {
        t != e.progressBarText && (theDOM.progressBarText.innerHTML = t, theDOM.navTitle.innerHTML = t, e.progressBarText = t)
    }, this.removeByClassName = function(e) {
        for (var t = document.getElementsByClassName(e); t.length > 0;) t[0].parentNode.removeChild(t[0])
    }, this.hide = function(e) {
        var t = document.querySelectorAll(e);
        try {
            for (var a in t) t[a].style.display = "none"
        } catch (e) {}
    }, this.hideNotification = function() {
        this.notificationDiv.style.bottom = "-100px"
    }, this.notify = function(e) {
        var t = this.notificationDiv;
        t.style.display = "table", t.querySelector("p").innerHTML = e + '<span onclick="theDOM.hideNotification();" style="display: inline; float: right; color: #2693e6; cursor: pointer;">CLOSE</span>', t.style.bottom = ""
    }, this.notifyAndHide = function(e, t) {
        if (!t) t = 5;
        var a = this;
        a.notify(e), setTimeout(function() {
            a.hideNotification()
        }, 1e3 * t)
    }, this.insertBugMetaData = function() {
        var e = {
            user: user,
            data: data
        };
        document.querySelector('input[name="entry.280797450"]').value = JSON.stringify(e)
    }, this.modal = {
        viewableElements: document.getElementsByClassName("viewable"),
        show: function(e) {
            var t = document.getElementsByClassName("popup-modal")[0];
            e && (t.querySelector("div").innerHTML = e), t.style.display = "block";
            for (var a in this.viewableElements) this.viewableElements.hasOwnProperty(a) && (this.viewableElements[a].style.filter = "blur(8px)")
        },
        close: function() {
            document.getElementsByClassName("popup-modal")[0].style.display = "none";
            for (var e in this.viewableElements) this.viewableElements.hasOwnProperty(e) && (this.viewableElements[e].style.filter = "none")
        }
    }, this.scroll = {
        hideAll: function() {
            !0 === e.scrollShown && (theDOM.topNavigationBar.style.display = "none", e.scrollShown = !1)
        },
        showAll: function() {
            e.scrollShown || (theDOM.topNavigationBar.style.display = "block", e.scrollShown = !0)
        }
    }
};

function css(e, t) {
    for (i in t) e.style[i] = t[i]
}

function escapeHTML(e) {
    var t = document.createElement("div");
    return t.innerText = e, t.innerHTML
}

function userValSet(where, value) {
    var place = "user",
        code = "";
    for (i in where) place += "." + where[i], code = parseInt(i) + 1 === where.length ? place + " = value;" : place + " = " + place + " || {};", eval(code)
}

function ajax(e) {
    return new Promise(function(t, a) {
        var o = new XMLHttpRequest;
        e.type || (e.type = "GET"), "GET" != e.type ? (o.open(e.type, e.url, !0), void 0 != e.processData && !1 === e.processData && void 0 != e.contentType && !1 === e.contentType || (void 0 != e.contentType || !0 === e.contentType ? o.setRequestHeader("Content-Type", e.contentType) : o.setRequestHeader("Content-type", "application/x-www-form-urlencoded"))) : o.open(e.type, e.url, !0), o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), o.onerror = function() {
            a(o.responseText)
        }, o.onload = function() {
            200 === o.status ? (e.success && (true ? e.success(JSON.parse(o.responseText)) : e.success(o.responseText)), true ? t(JSON.parse(o.responseText)) : t(o.responseText)) : a(o.responseText)
        }, null != e.data || void 0 != e.data ? o.send(e.data) : o.send()
    })
}

function getOrdinalNum(e) {
    return e + (e > 0 ? ["th", "st", "nd", "rd"][e > 3 && 21 > e || e % 10 > 3 ? 0 : e % 10] : "")
}

function toStandardTime(e) {
    var t;
    return e = e.split(":"), (t = parseInt(e[0])) > 12 && (t -= 12), t + ":" + e[1]
}

function sendMessageToSW(e) {
    return navigator.serviceWorker && navigator.serviceWorker.controller ? new Promise(function(t, a) {
        var o = new MessageChannel;
        o.port1.onmessage = function(e) {
            e.data.error ? a(e.data.error) : t(e.data)
        }, navigator.serviceWorker.controller.postMessage(e, [o.port2])
    }) : new Promise(function(e, t) {
        e({
            success: !0,
            error: "noServiceWorker",
            online: !0
        })
    })
}

function parseNames() {
    for (i in data.days[dateNiceFormat].schedule) {
        if ("updated" != data.days[dateNiceFormat].schedule[i].name[2]) {
            var e = data.days[dateNiceFormat].schedule[i].name;
            data.days[dateNiceFormat].schedule[i].name = [e, e, "updated"]
        }
        if ("number" == typeof data.days[dateNiceFormat].schedule[i].name[0]) {
            var t = data.days[dateNiceFormat].schedule[i].name[0];
            "" != user.preferences.period_names["period" + t] && user.preferences.period_names["period" + t] ? data.days[dateNiceFormat].schedule[i].name[1] = user.preferences.period_names["period" + t] : data.days[dateNiceFormat].schedule[i].name[1] = getOrdinalNum(data.days[dateNiceFormat].schedule[i].name[0]) + " Period"
        }
    }
}

function updateUser(e) {
    if (console.log("Updating User"), localStorage.setItem("user", JSON.stringify(user)), e && usingGoogle) {
        var t = "email=" + encodeURIComponent(user.info.email) + "&newJSON=" + encodeURIComponent(JSON.stringify(user));
        ajax({
            url: api.update_user,
            type: "POST",
            data: t
        }).then(function() {
            console.log("Synced Online")
        })
    }
    if (parseNames(), !embed) {
        var a = document.getElementById("schedule-dropdown").querySelector("table");
        a.innerHTML = "";
        for (var o in data.days[dateNiceFormat].schedule) {
            var n = data.days[dateNiceFormat].schedule[o];
            "Passing" != n.name[0] && a.insertAdjacentHTML("beforeend", '<tr class="schedule-table-row"><td id="table-period-' + n.name[0] + '">' + n.name[1] + '</td><td class="right-table-row">' + toStandardTime(n.from) + " - " + toStandardTime(n.to) + "</td></tr>")
        }
        for (var r in user.preferences.period_names) {
            var s = document.querySelector('input[name="' + r + '"]');
            try {
                null != user.preferences.period_names[r] && (s.value = user.preferences.period_names[r]), "" === user.preferences.period_names[r] ? s.classList.remove("has-value") : s.classList.add("has-value")
            } catch (e) {}
        }
    }
}

function parseSchedule() {
    var e = JSON.parse(JSON.stringify(data)),
        t = 0;
    for (var a in e.days[dateNiceFormat].schedule) {
        a = parseInt(a);
        var o = e.days[dateNiceFormat].schedule[a];
        if (e.days[dateNiceFormat].schedule[a + 1]) {
            var n = e.days[dateNiceFormat].schedule[a + 1],
                r = dateNiceFormat + " " + n.from + ":00",
                s = dateNiceFormat + " " + o.to + ":00";
            if (r == s) var i = 0;
            else {
                i = Date.parse(r);
                Date.parse(s)
            }
            0 !== i && "Lunch" !== n.name && "Brunch" !== n.name && (data.days[dateNiceFormat].schedule.splice(t + 1, 0, {
                name: "Passing",
                from: o.to,
                to: n.from
            }), t++)
        }
        t++
    }
}

function main() {
    return ajax({
        type: "GET",
        url: api.schedule,
        success: function(e) {
            data = e;
            var t, a, o, n, r = new Date;
            if (data.presets = presets, dateNiceFormat = r.getMonth() + 1 + "/" + r.getDate() + "/" + r.getFullYear(), theDOM.todayDate.innerText = r.toLocaleString(locale, {
                    weekday: "long"
                }) + ", " + r.toLocaleString(locale, {
                    month: "long"
                }) + " " + getOrdinalNum(r.getDate()), t = r.getMinutes() < 10 ? "0" + r.getMinutes() : r.getMinutes(), a = r.getHours() + ":" + t, data.days[dateNiceFormat] || (data.days[dateNiceFormat] = data.presets[["weekend", "A", "tutorial", "B", "C", "A", "weekend"][r.getDay()]]), data.days[dateNiceFormat]) {
                data.days[dateNiceFormat].type && (data.days[dateNiceFormat].schedule = data.presets[data.days[dateNiceFormat].type].schedule, data.days[dateNiceFormat].name || (data.days[dateNiceFormat].name = data.presets[data.days[dateNiceFormat].type].name)), theDOM.typeOfDay.innerText = data.days[dateNiceFormat].name;
                var s = JSON.parse(JSON.stringify(data)),
                    i = 0;
                for (var d in s.days[dateNiceFormat].schedule) {
                    d = parseInt(d);
                    var l = s.days[dateNiceFormat].schedule[d];
                    if (s.days[dateNiceFormat].schedule[d + 1]) {
                        var c = s.days[dateNiceFormat].schedule[d + 1],
                            u = dateNiceFormat + " " + c.from + ":00",
                            m = dateNiceFormat + " " + l.to + ":00";
                        if (u == m) var p = 0;
                        else {
                            p = Date.parse(u);
                            Date.parse(m)
                        }
                        0 !== p && "Lunch" !== c.name && "Brunch" !== c.name && (data.days[dateNiceFormat].schedule.splice(i + 1, 0, {
                            name: "Passing",
                            from: l.to,
                            to: c.from
                        }), i++)
                    }
                    i++
                }
                parseNames();
                for (d in data.days[dateNiceFormat].schedule) {
                    var h = dateNiceFormat + " " + data.days[dateNiceFormat].schedule[d].from + ":00",
                        g = dateNiceFormat + " " + data.days[dateNiceFormat].schedule[d].to + ":00",
                        f = Date.parse(dateNiceFormat + " " + a + ":00");
                    if (Date.parse(h) <= f && Date.parse(g) >= f) {
                        o = d;
                        var y = Date.parse(h),
                            v = Date.parse(g),
                            N = v - y;
                        theDOM.updateCurrentPeriodText(data.days[dateNiceFormat].schedule[o].name[1]);
                        var S = function() {
                            var e = (new Date).getTime();
                            e += 1e3 * data.secondsOffset;
                            var t = v - e,
                                a = Math.floor(100 * (1 - t / N)),
                                r = Math.floor(t / 864e5),
                                s = Math.floor(t % 864e5 / 36e5) + 24 * r,
                                i = Math.floor(t % 36e5 / 6e4),
                                d = Math.floor(t % 6e4 / 1e3);
                            if (d < 0) {
                                o++;
                                var l = 0;
                                a = 0, document.hasFocus() && theDOM.updateProgressBar(0);
                                try {
                                    h = dateNiceFormat + " " + data.days[dateNiceFormat].schedule[o].from + ":00", g = dateNiceFormat + " " + data.days[dateNiceFormat].schedule[o].to + ":00", y = Date.parse(h), v = Date.parse(g), N = v - y, theDOM.updateCurrentPeriodText(data.days[dateNiceFormat].schedule[o].name[1])
                                } catch (e) {
                                    theDOM.updateProgressBarText("Nothing"), theDOM.updateCurrentPeriodText("You’re free!"), document.title = documentOriginalTitle, ++l > 72e3 && (location.reload(), l = 0)
                                }
                            } else d < 10 && (d = "0" + d), i < 10 && 0 != s && (i = "0" + i), n = 0 != s ? s + ":" + i + ":" + d : i + ":" + d, (document.hasFocus() || embed) && (theDOM.updateProgressBarText(n), theDOM.updateProgressBar(a), theDOM.updateCurrentPeriodText(data.days[dateNiceFormat].schedule[o].name[1])), embed || (document.title = n + " left of " + data.days[dateNiceFormat].schedule[o].name[1])
                        };
                        theDOM.updateProgressBarText("Click Here"), S();
                        var w = setInterval(S, 50)
                    } else if (0 === d && Date.parse(h) > f) {
                        var O = Math.round(15 * Math.random()) + 1,
                            M = Date.parse(h),
                            D = (new Date).getTime() + 1e3 * data.secondsOffset;
                        setInterval(function() {
                            location.reload()
                        }, M - D + 1e3 * O)
                    }
                }
            }
            if (!w) {
                theDOM.updateProgressBarText("Nothing"), theDOM.updateCurrentPeriodText("You're free!"), data.days[dateNiceFormat] || (theDOM.typeOfDay.innerText = "Looks like we forgot to update the schedule for today. Send us an email!");
                setInterval(function() {
                    location.reload()
                }, 36e5)
            }
            theDOM.hidePreloader()
        }
    })
}
var documentOriginalTitle = "MVHS Bell Countdown",
    api = {
        schedule: "/api/schedule",
        presets: "/api/presets",
        get_info: "/api/v1/get_info",
        update_user: "/api/v1/update_user"
    },
    swCommands = {
        api_online: "apiOnline"
    },
    data, user, dateNiceFormat, usingGoogle = !1,
    url = new URL(window.location.href),
    presets, locale = "en-us",
    embed = url.searchParams.has("_embed"),
    timeAfterLoad;
localStorage.getItem("user") ? user = JSON.parse(localStorage.getItem("user")) : (user = {
    preferences: {
        period_names: {}
    },
    info: {}
}, localStorage.getItem("periodNames") && (userValSet(["preferences", "period_names"], JSON.parse(localStorage.getItem("periodNames"))), localStorage.removeItem("periodNames"), console.log("converted to new schema")), localStorage.setItem("user", JSON.stringify(user))), navigator.serviceWorker && navigator.serviceWorker.register("/sw.js", {
    scope: "/"
}).then(function(e) {
    console.log("Service Worker Registered")
}).catch(function(e) {
    console.log("Service Worker Failed" + e)
}), ajax({
    url: api.presets,
    success: function(e) {
        presets = e
    }
}).then(function() {
    main().then(function() {
        if (embed)
            if (localStorage.setItem("chromeExtension", "installed"), theDOM.typeOfDay.onclick = function() {
                    window.open("https://bell.mvhs.club", "_blank")
                }, theDOM.typeOfDay.onmouseover = function() {}, document.body.style.overflow = "hidden", localStorage.getItem("extensionTimes")) {
                var e = parseInt(localStorage.getItem("extensionTimes"));
                e % 5 == 0 && theDOM.notify('Visit the  <a style="display: inline;" target="_blank" href="https://bell.mvhs.club">full site</a>'), localStorage.setItem("extensionTimes", e + 1)
            } else localStorage.setItem("extensionTimes", 0);
        else localStorage.getItem("chromeExtension") ? theDOM.hideNotification() : theDOM.notify('Install the <a style="display: inline;" target="_blank" href="https://www.mvhs.club/u/bell-extn">Chrome Extension</a>'), setTimeout(function() {
            history.replaceState("", document.title, "/")
        }, 2e3), updateUser(!1), window.onscroll = function() {
            (void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop) > 0 ? theDOM.scroll.showAll() : theDOM.scroll.hideAll()
        }, document.onclick = function(e) {
            document.getElementById("google-signin-dropdown-button").contains(e.target) || (document.getElementById("google-signin-dropdown").style.display = "none")
        }, theDOM.changeNamesForm.onsubmit = function(e) {
            e.preventDefault();
            var t = this;
            return sendMessageToSW({
                command: swCommands.api_online
            }).then(function(e) {
                if (!0 === e.online) {
                    theDOM.periodNamesSaveButton.disabled = "true";
                    var a = theDOM.periodNamesSaveButton.innerHTML;
                    theDOM.periodNamesSaveButton.innerHTML = "Saving";
                    var o = {},
                        n = t.querySelectorAll("input");
                    for (i in n) {
                        var r = n[i];
                        o[r.name] = r.value
                    }
                    userValSet(["preferences", "period_names"], o), userValSet(["stats", "user", "lastPeriodNameUpdate"], dateNiceFormat), updateUser(!0), setTimeout(function() {
                        theDOM.periodNamesSaveButton.innerHTML = a, theDOM.periodNamesSaveButton.disabled = "", theDOM.notifyAndHide("Your changes were saved.")
                    }, 1500)
                }!1 === e.online && !0 === usingGoogle && (theDOM.periodNamesSaveButton.innerHTML = '<span style="color: red;">Sorry, we are having problems right now</span>')
            }), !1
        }, timeAfterLoad = Date.now()
    })
});
(function(d, e, j, h, f, c, b) {
    d.GoogleAnalyticsObject = f;
    d[f] = d[f] || function() {
        (d[f].q = d[f].q || []).push(arguments)
    }, d[f].l = 1 * new Date();
    c = e.createElement(j), b = e.getElementsByTagName(j)[0];
    c.async = 1;
    c.src = h;
    b.parentNode.insertBefore(c, b)
})(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga");
ga("create", "UA-108094966-1", "auto");
ga("send", "pageview");