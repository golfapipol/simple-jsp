(function (t, r) {
    "use strict";

    function n(e, t, r, o) {
        ga("send", "event", e, t, r, o)
    }
    t.onerror = function (e, t, r) {
        if (e) {
            n("Error", e, t && r ? "[" + t + ":" + r + "]" : "", true)
        }
        return false
    };
    t.AudioContext = t.AudioContext || t.webkitAudioContext;

    function o(t) {
        var e = new XMLHttpRequest;
        e.open("GET", "/assets/audio/" + t + ".mp3", true);
        e.responseType = "arraybuffer";
        e.onload = function () {
            l.decodeAudioData(e.response, function (e) {
                a[t] = e
            }, function () {})
        };
        e.send()
    }

    function y(e) {
        if (f || !a[e]) {
            return
        }
        if (l && l.resume) {
            l.resume()
        }
        var t = l.createBufferSource();
        t.buffer = a[e];
        t.connect(l.destination);
        if (t.start) {
            t.start(0)
        } else {
            t.noteOn(0)
        }
    }
    var s = {},
        i = {
            player1: 0,
            player2: 0,
            ties: 0
        },
        c = {
            player1: 0,
            player2: 0,
            ties: 0
        },
        u = "x",
        m = "o",
        a = {},
        l, v = 9,
        f, d, g = true,
        p = true,
        h = false,
        w = 300,
        q = .75,
        S, L = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

    function b() {
        for (var e = s.mute.length; e--;) {
            s.mute[e].style.display = f ? "none" : ""
        }
    }

    function T() {
        f = !f;
        if (t.localStorage) {
            try {
                localStorage.setItem("muted", f.toString())
            } catch (e) {}
        }
        b();
        n("Mute", f ? "muted" : "unmuted")
    }

    function M() {
        h = !h;
        var e = s.scores.scores.classList;
        if (h) {
            e.remove("p1");
            e.add("p2");
            p = true
        } else {
            e.remove("p2");
            e.add("p1");
            p = false
        }
        n("Mode", h ? "players" : "computer");
        s.scores.player1.innerHTML = h ? c.player1 : i.player1;
        s.scores.player2.innerHTML = h ? c.player2 : i.player2;
        s.scores.ties.innerHTML = h ? c.ties : i.ties;
        d = false;
        C()
    }

    function k(e, t) {
        s.squares[t].querySelector("div").classList.add(e)
    }

    function A() {
        var e = s.scores.turn1.classList,
            t = s.scores.turn2.classList,
            r = s.scores.turnTies.classList;
        if (h && s.restart.style.display === "none") {
            if (g) {
                t.remove("turn");
                e.add("turn")
            } else {
                e.remove("turn");
                t.add("turn")
            }
            r.add("turn")
        } else {
            e.remove("turn");
            t.remove("turn");
            r.remove("turn")
        }
    }

    function D(e) {
        if (S[e] !== 0 || H() || !h && g) {
            return
        }
        if (h) {
            g = !g;
            S[e] = g ? -1 : 1;
            k(g ? u : m, e);
            y("note-" + (g ? "low" : "high"));
            H()
        } else {
            S[e] = -1;
            k(u, e);
            g = true;
            y("note-low");
            setTimeout(x, w)
        }
        A()
    }

    function I(o, a) {
        s.restart.style.display = "block";
        setTimeout(function () {
            var e = "Game",
                t = h ? "players " : "computer ";
            setTimeout(function () {
                d = false
            }, w);
            if (a) {
                for (var r = 3; r--;) {
                    s.squares[a[r]].querySelector("div").classList.add("blink")
                }
            }
            switch (o) {
                case u:
                    s.scores.player1.innerHTML = h ? ++c.player1 : ++i.player1;
                    s.scores.player1.classList.add("appear");
                    y("game-over");
                    n(e, t + (h ? u : "lose"));
                    break;
                case m:
                    s.scores.player2.innerHTML = h ? ++c.player2 : ++i.player2;
                    s.scores.player2.classList.add("appear");
                    y("game-over");
                    n(e, t + (h ? m : "win"));
                    break;
                default:
                    s.scores.ties.innerHTML = h ? ++c.ties : ++i.ties;
                    s.scores.ties.classList.add("appear");
                    s.board.classList.add("blink");
                    y("game-over-tie");
                    n(e, t + "tie");
                    break
            }
        }, g && !h ? 100 : w + 100)
    }

    function H() {
        for (var e = L.length; e--;) {
            var t = L[e],
                r = S[t[0]] + S[t[1]] + S[t[2]];
            if (r === 3 || r === -3) {
                I(r === 3 ? m : u, t);
                return true
            }
        }
        var o = 0;
        for (e = v; e--;) {
            if (S[e] !== 0) {
                o++
            }
        }
        if (o === 9) {
            I();
            return true
        }
        return false
    }

    function x() {
        if (H()) {
            return
        }
        var e, t, r, o, a, n, s = 0;
        g = false;
        A();
        y("note-high");
        for (e = v; e--;) {
            if (S[e] !== 0) {
                s++;
                if (s === 1) {
                    n = e
                }
            }
        }
        if (s < 2 && Math.random() > .2) {
            do {
                a = Math.floor(Math.random() * v)
            } while (a === n)
        } else {
            for (e = v; e--;) {
                for (t = v; t--;) {
                    if (S[t] !== 0) {
                        continue
                    }
                    S[t] = 1;
                    if (H()) {
                        k(m, t);
                        return
                    }
                    S[t] = 0
                }
                if (S[e] !== 0) {
                    continue
                }
                S[e] = 1;
                var i = null,
                    c = S.concat();
                for (t = v; t--;) {
                    if (c[t] !== 0) {
                        continue
                    }
                    c[t] = -1;
                    for (r = L.length; r--;) {
                        if (c[L[r][0]] + c[L[r][1]] + c[L[r][2]] === -3 && Math.random() > q) {
                            S[e] = 0;
                            S[t] = 1;
                            k(m, t);
                            H();
                            return
                        }
                    }
                    var u = 0,
                        l = 0,
                        f = c.concat(),
                        d = c.concat();
                    for (r = v; r--;) {
                        if (f[r] === 0) {
                            f[r] = 1
                        }
                        if (d[r] === 0) {
                            d[r] = -1
                        }
                    }
                    for (r = L.length; r--;) {
                        if (f[L[r][0]] + f[L[r][1]] + f[L[r][2]] === 3) {
                            u++
                        }
                        if (d[L[r][0]] + d[L[r][1]] + d[L[r][2]] === -3) {
                            l++
                        }
                    }
                    var p = u - l;
                    i = i == null ? p : i > p ? p : i;
                    c[t] = 0
                }
                if (o == null || o < i) {
                    o = i;
                    a = e
                }
                S[e] = 0
            }
        }
        S[a] = 1;
        k(m, a);
        H()
    }

    function B(t) {
        s.squares[t].ontouchstart = s.squares[t].onmousedown = function (e) {
            e.preventDefault();
            D(t)
        }
    }

    function C() {
        if (d) {
            return
        }
        d = true;
        s.restart.style.display = "none";
        S = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (var e = v; e--;) {
            s.squares[e].querySelector("div").className = ""
        }
        s.scores.ties.classList.remove("appear");
        s.scores.player1.classList.remove("appear");
        s.scores.player2.classList.remove("appear");
        s.board.classList.remove("blink");
        g = p = !p;
        A();
        if (p && !h) {
            setTimeout(x, w)
        }
    }
    r.addEventListener("DOMContentLoaded", function () {
        s = {
            board: r.querySelector(".board"),
            squares: r.querySelectorAll(".square"),
            restart: r.querySelector(".restart"),
            muteButton: r.querySelector(".mute"),
            mute: r.querySelectorAll(".mute path"),
            scores: {
                scores: r.querySelector(".scores"),
                swap: r.querySelector(".swap"),
                player1: r.querySelector(".player1 .score"),
                player2: r.querySelector(".player2 .score"),
                ties: r.querySelector(".ties .score"),
                turn1: r.querySelector(".player1"),
                turn2: r.querySelector(".player2"),
                turnTies: r.querySelector(".ties")
            }
        };
        for (var e = v; e--;) {
            B(e)
        }
        s.restart.ontouchstart = s.scores.scores.ontouchstart = function (e) {
            e.preventDefault()
        };
        s.scores.scores.ontouchend = s.scores.scores.onclick = function (e) {
            e.preventDefault();
            M()
        };
        s.restart.ontouchend = s.restart.onclick = function (e) {
            e.preventDefault();
            C()
        };
        if (t.AudioContext) {
            l = new AudioContext;
            o("note-high");
            o("note-low");
            o("game-over");
            o("game-over-tie");
            if (t.localStorage) {
                try {
                    f = localStorage.getItem("muted") === "true"
                } catch (e) {
                    f = false
                }
            }
            b();
            s.muteButton.ontouchstart = s.muteButton.onclick = function (e) {
                e.preventDefault();
                T()
            }
        }
        C()
    })
})(window, document);