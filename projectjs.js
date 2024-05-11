(()=>{
    "use strict";
    const e = {};
    let t = (e,t=500,s=0)=>{
        e.classList.contains("_slide") || (e.classList.add("_slide"),
        e.style.transitionProperty = "height, margin, padding",
        e.style.transitionDuration = t + "ms",
        e.style.height = `${e.offsetHeight}px`,
        e.offsetHeight,
        e.style.overflow = "hidden",
        e.style.height = s ? `${s}px` : "0px",
        e.style.paddingTop = 0,
        e.style.paddingBottom = 0,
        e.style.marginTop = 0,
        e.style.marginBottom = 0,
        window.setTimeout((()=>{
            e.hidden = !s,
            !s && e.style.removeProperty("height"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            !s && e.style.removeProperty("overflow"),
            e.style.removeProperty("transition-duration"),
            e.style.removeProperty("transition-property"),
            e.classList.remove("_slide"),
            document.dispatchEvent(new CustomEvent("slideUpDone",{
                detail: {
                    target: e
                }
            }))
        }
        ), t))
    }
      , s = (e,t=500,s=0)=>{
        if (!e.classList.contains("_slide")) {
            e.classList.add("_slide"),
            e.hidden = !e.hidden && null,
            s && e.style.removeProperty("height");
            let a = e.offsetHeight;
            e.style.overflow = "hidden",
            e.style.height = s ? `${s}px` : "0px",
            e.style.paddingTop = 0,
            e.style.paddingBottom = 0,
            e.style.marginTop = 0,
            e.style.marginBottom = 0,
            e.offsetHeight,
            e.style.transitionProperty = "height, margin, padding",
            e.style.transitionDuration = t + "ms",
            e.style.height = a + "px",
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout((()=>{
                e.style.removeProperty("height"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide"),
                document.dispatchEvent(new CustomEvent("slideDownDone",{
                    detail: {
                        target: e
                    }
                }))
            }
            ), t)
        }
    }
      , a = (e,a=500)=>e.hidden ? s(e, a) : t(e, a)
      , i = !0
      , l = (e=500)=>{
        let t = document.querySelector("body");
        if (i) {
            let s = document.querySelectorAll("[data-lp]");
            setTimeout((()=>{
                for (let e = 0; e < s.length; e++) {
                    s[e].style.paddingRight = "0px"
                }
                t.style.paddingRight = "0px",
                document.documentElement.classList.remove("lock")
            }
            ), e),
            i = !1,
            setTimeout((function() {
                i = !0
            }
            ), e)
        }
    }
      , n = (e=500)=>{
        let t = document.querySelector("body");
        if (i) {
            let s = document.querySelectorAll("[data-lp]");
            for (let e = 0; e < s.length; e++) {
                s[e].style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px"
            }
            t.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px",
            document.documentElement.classList.add("lock"),
            i = !1,
            setTimeout((function() {
                i = !0
            }
            ), e)
        }
    }
    ;
    function r(e) {
        setTimeout((()=>{
            window.FLS && console.log(e)
        }
        ), 0)
    }
    function o(e, t) {
        const s = Array.from(e).filter((function(e, s, a) {
            if (e.dataset[t])
                return e.dataset[t].split(",")[0]
        }
        ));
        if (s.length) {
            const e = [];
            s.forEach((s=>{
                const a = {}
                  , i = s.dataset[t].split(",");
                a.value = i[0],
                a.type = i[1] ? i[1].trim() : "max",
                a.item = s,
                e.push(a)
            }
            ));
            let a = e.map((function(e) {
                return "(" + e.type + "-width: " + e.value + "px)," + e.value + "," + e.type
            }
            ));
            a = function(e) {
                return e.filter((function(e, t, s) {
                    return s.indexOf(e) === t
                }
                ))
            }(a);
            const i = [];
            if (a.length)
                return a.forEach((t=>{
                    const s = t.split(",")
                      , a = s[1]
                      , l = s[2]
                      , n = window.matchMedia(s[0])
                      , r = e.filter((function(e) {
                        if (e.value === a && e.type === l)
                            return !0
                    }
                    ));
                    i.push({
                        itemsArray: r,
                        matchMedia: n
                    })
                }
                )),
                i
        }
    }
    let c = (e,t=!1,s=500,a=0)=>{
        const i = document.querySelector(e);
        if (i) {
            let n = ""
              , o = 0;
            if (t) {
                n = "header.header";
                const e = document.querySelector(n);
                e.classList.contains("_header-scroll") ? o = e.offsetHeight : (e.style.cssText = "transition-duration: 0s;",
                e.classList.add("_header-scroll"),
                o = e.offsetHeight,
                e.classList.remove("_header-scroll"),
                setTimeout((()=>{
                    e.style.cssText = ""
                }
                ), 0))
            }
            let c = {
                speedAsDuration: !0,
                speed: s,
                header: n,
                offset: a,
                easing: "easeOutQuad"
            };
            if (document.documentElement.classList.contains("menu-open") && (l(),
            document.documentElement.classList.remove("menu-open")),
            "undefined" != typeof SmoothScroll)
                (new SmoothScroll).animateScroll(i, "", c);
            else {
                let e = i.getBoundingClientRect().top + scrollY;
                e = o ? e - o : e,
                e = a ? e - a : e,
                window.scrollTo({
                    top: e,
                    behavior: "smooth"
                })
            }
            r(`[gotoBlock]: Юхуу...їдемо до ${e}`)
        } else
            r(`[gotoBlock]: Йой... Такого блоку немає на сторінці: ${e}`)
    }
    ;
    let d = {
        getErrors(e) {
            let t = 0
              , s = e.querySelectorAll("*[data-required]");
            return s.length && s.forEach((e=>{
                null === e.offsetParent && "SELECT" !== e.tagName || e.disabled || (t += this.validateInput(e))
            }
            )),
            t
        },
        validateInput(e) {
            let t = 0;
            return "email" === e.dataset.required ? (e.value = e.value.replace(" ", ""),
            this.emailTest(e) ? (this.addError(e),
            t++) : this.removeError(e)) : ("checkbox" !== e.type || e.checked) && e.value.trim() ? this.removeError(e) : (this.addError(e),
            t++),
            t
        },
        addError(e) {
            e.classList.add("_form-error"),
            e.parentElement.classList.add("_form-error");
            let t = e.parentElement.querySelector(".form__error");
            t && e.parentElement.removeChild(t),
            e.dataset.error && e.parentElement.insertAdjacentHTML("beforeend", `<div class="form__error">${e.dataset.error}</div>`)
        },
        removeError(e) {
            e.classList.remove("_form-error"),
            e.parentElement.classList.remove("_form-error"),
            e.parentElement.querySelector(".form__error") && e.parentElement.removeChild(e.parentElement.querySelector(".form__error"))
        },
        formClean(t) {
            t.reset(),
            setTimeout((()=>{
                let s = t.querySelectorAll("input,textarea");
                for (let e = 0; e < s.length; e++) {
                    const t = s[e];
                    t.parentElement.classList.remove("_form-focus"),
                    t.classList.remove("_form-focus"),
                    d.removeError(t)
                }
                let a = t.querySelectorAll(".checkbox__input");
                if (a.length > 0)
                    for (let e = 0; e < a.length; e++) {
                        a[e].checked = !1
                    }
                if (e.select) {
                    let s = t.querySelectorAll(".select");
                    if (s.length)
                        for (let t = 0; t < s.length; t++) {
                            const a = s[t].querySelector("select");
                            e.select.selectBuild(a)
                        }
                }
            }
            ), 0)
        },
        emailTest: e=>!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value)
    };
    function p(e) {
        return null !== e && "object" == typeof e && "constructor"in e && e.constructor === Object
    }
    function u(e={}, t={}) {
        Object.keys(t).forEach((s=>{
            void 0 === e[s] ? e[s] = t[s] : p(t[s]) && p(e[s]) && Object.keys(t[s]).length > 0 && u(e[s], t[s])
        }
        ))
    }
    e.select = new class {
        constructor(e, t=null) {
            if (this.config = Object.assign({
                init: !0,
                logging: !0,
                speed: 150
            }, e),
            this.selectClasses = {
                classSelect: "select",
                classSelectBody: "select__body",
                classSelectTitle: "select__title",
                classSelectValue: "select__value",
                classSelectLabel: "select__label",
                classSelectInput: "select__input",
                classSelectText: "select__text",
                classSelectLink: "select__link",
                classSelectOptions: "select__options",
                classSelectOptionsScroll: "select__scroll",
                classSelectOption: "select__option",
                classSelectContent: "select__content",
                classSelectRow: "select__row",
                classSelectData: "select__asset",
                classSelectDisabled: "_select-disabled",
                classSelectTag: "_select-tag",
                classSelectOpen: "_select-open",
                classSelectActive: "_select-active",
                classSelectFocus: "_select-focus",
                classSelectMultiple: "_select-multiple",
                classSelectCheckBox: "_select-checkbox",
                classSelectOptionSelected: "_select-selected",
                classSelectPseudoLabel: "_select-pseudo-label"
            },
            this._this = this,
            this.config.init) {
                const e = t ? document.querySelectorAll(t) : document.querySelectorAll("select");
                e.length ? (this.selectsInit(e),
                this.setLogging(`Прокинувся, построїв селектов: (${e.length})`)) : this.setLogging("Сплю, немає жодного select")
            }
        }
        getSelectClass(e) {
            return `.${e}`
        }
        getSelectElement(e, t) {
            return {
                originalSelect: e.querySelector("select"),
                selectElement: e.querySelector(this.getSelectClass(t))
            }
        }
        selectsInit(e) {
            e.forEach(((e,t)=>{
                this.selectInit(e, t + 1)
            }
            )),
            document.addEventListener("click", function(e) {
                this.selectsActions(e)
            }
            .bind(this)),
            document.addEventListener("keydown", function(e) {
                this.selectsActions(e)
            }
            .bind(this)),
            document.addEventListener("focusin", function(e) {
                this.selectsActions(e)
            }
            .bind(this)),
            document.addEventListener("focusout", function(e) {
                this.selectsActions(e)
            }
            .bind(this))
        }
        selectInit(e, t) {
            const s = this;
            let a = document.createElement("div");
            if (a.classList.add(this.selectClasses.classSelect),
            e.parentNode.insertBefore(a, e),
            a.appendChild(e),
            e.hidden = !0,
            t && (e.dataset.id = t),
            this.getSelectPlaceholder(e) && (e.dataset.placeholder = this.getSelectPlaceholder(e).value,
            this.getSelectPlaceholder(e).label.show)) {
                this.getSelectElement(a, this.selectClasses.classSelectTitle).selectElement.insertAdjacentHTML("afterbegin", `<span class="${this.selectClasses.classSelectLabel}">${this.getSelectPlaceholder(e).label.text ? this.getSelectPlaceholder(e).label.text : this.getSelectPlaceholder(e).value}</span>`)
            }
            a.insertAdjacentHTML("beforeend", `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`),
            this.selectBuild(e),
            e.dataset.speed = e.dataset.speed ? e.dataset.speed : this.config.speed,
            this.config.speed = +e.dataset.speed,
            e.addEventListener("change", (function(e) {
                s.selectChange(e)
            }
            ))
        }
        selectBuild(e) {
            const t = e.parentElement;
            t.dataset.id = e.dataset.id,
            e.dataset.classModif && t.classList.add(`select_${e.dataset.classModif}`),
            e.multiple ? t.classList.add(this.selectClasses.classSelectMultiple) : t.classList.remove(this.selectClasses.classSelectMultiple),
            e.hasAttribute("data-checkbox") && e.multiple ? t.classList.add(this.selectClasses.classSelectCheckBox) : t.classList.remove(this.selectClasses.classSelectCheckBox),
            this.setSelectTitleValue(t, e),
            this.setOptions(t, e),
            e.hasAttribute("data-search") && this.searchActions(t),
            e.hasAttribute("data-open") && this.selectAction(t),
            this.selectDisabled(t, e)
        }
        selectsActions(e) {
            const t = e.target
              , s = e.type;
            if (t.closest(this.getSelectClass(this.selectClasses.classSelect)) || t.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
                const a = t.closest(".select") ? t.closest(".select") : document.querySelector(`.${this.selectClasses.classSelect}[data-id="${t.closest(this.getSelectClass(this.selectClasses.classSelectTag)).dataset.selectId}"]`)
                  , i = this.getSelectElement(a).originalSelect;
                if ("click" === s) {
                    if (!i.disabled)
                        if (t.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
                            const e = t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
                              , s = document.querySelector(`.${this.selectClasses.classSelect}[data-id="${e.dataset.selectId}"] .select__option[data-value="${e.dataset.value}"]`);
                            this.optionAction(a, i, s)
                        } else if (t.closest(this.getSelectClass(this.selectClasses.classSelectTitle)))
                            this.selectAction(a);
                        else if (t.closest(this.getSelectClass(this.selectClasses.classSelectOption))) {
                            const e = t.closest(this.getSelectClass(this.selectClasses.classSelectOption));
                            this.optionAction(a, i, e)
                        }
                } else
                    "focusin" === s || "focusout" === s ? t.closest(this.getSelectClass(this.selectClasses.classSelect)) && ("focusin" === s ? a.classList.add(this.selectClasses.classSelectFocus) : a.classList.remove(this.selectClasses.classSelectFocus)) : "keydown" === s && "Escape" === e.code && this.selectsСlose()
            } else
                this.selectsСlose()
        }
        selectsСlose(e) {
            const t = (e || document).querySelectorAll(`${this.getSelectClass(this.selectClasses.classSelect)}${this.getSelectClass(this.selectClasses.classSelectOpen)}`);
            t.length && t.forEach((e=>{
                this.selectСlose(e)
            }
            ))
        }
        selectСlose(e) {
            const s = this.getSelectElement(e).originalSelect
              , a = this.getSelectElement(e, this.selectClasses.classSelectOptions).selectElement;
            a.classList.contains("_slide") || (e.classList.remove(this.selectClasses.classSelectOpen),
            t(a, s.dataset.speed),
            setTimeout((()=>{
                e.style.zIndex = ""
            }
            ), s.dataset.speed))
        }
        selectAction(e) {
            const t = this.getSelectElement(e).originalSelect
              , s = this.getSelectElement(e, this.selectClasses.classSelectOptions).selectElement
              , i = t.dataset.zIndex ? t.dataset.zIndex : 3;
            if (this.setOptionsPosition(e),
            t.closest("[data-one-select]")) {
                const e = t.closest("[data-one-select]");
                this.selectsСlose(e)
            }
            setTimeout((()=>{
                s.classList.contains("_slide") || (e.classList.toggle(this.selectClasses.classSelectOpen),
                a(s, t.dataset.speed),
                e.classList.contains(this.selectClasses.classSelectOpen) ? e.style.zIndex = i : setTimeout((()=>{
                    e.style.zIndex = ""
                }
                ), t.dataset.speed))
            }
            ), 0)
        }
        setSelectTitleValue(e, t) {
            const s = this.getSelectElement(e, this.selectClasses.classSelectBody).selectElement
              , a = this.getSelectElement(e, this.selectClasses.classSelectTitle).selectElement;
            a && a.remove(),
            s.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(e, t)),
            t.hasAttribute("data-search") && this.searchActions(e)
        }
        getSelectTitleValue(e, t) {
            let s = this.getSelectedOptionsData(t, 2).html;
            t.multiple && t.hasAttribute("data-tags") && (s = this.getSelectedOptionsData(t).elements.map((t=>`<span role="button" data-select-id="${e.dataset.id}" data-value="${t.value}" class="_select-tag">${this.getSelectElementContent(t)}</span>`)).join(""),
            t.dataset.tags && document.querySelector(t.dataset.tags) && (document.querySelector(t.dataset.tags).innerHTML = s,
            t.hasAttribute("data-search") && (s = !1))),
            s = s.length ? s : t.dataset.placeholder ? t.dataset.placeholder : "";
            let a = ""
              , i = "";
            if (t.hasAttribute("data-pseudo-label") && (a = t.dataset.pseudoLabel ? ` data-pseudo-label="${t.dataset.pseudoLabel}"` : ' data-pseudo-label="Заповніть атрибут"',
            i = ` ${this.selectClasses.classSelectPseudoLabel}`),
            this.getSelectedOptionsData(t).values.length ? e.classList.add(this.selectClasses.classSelectActive) : e.classList.remove(this.selectClasses.classSelectActive),
            t.hasAttribute("data-search"))
                return `<div class="${this.selectClasses.classSelectTitle}"><span${a} class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${s}" data-placeholder="${s}" class="${this.selectClasses.classSelectInput}"></span></div>`;
            {
                const e = this.getSelectedOptionsData(t).elements.length && this.getSelectedOptionsData(t).elements[0].dataset.class ? ` ${this.getSelectedOptionsData(t).elements[0].dataset.class}` : "";
                return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span${a} class="${this.selectClasses.classSelectValue}${i}"><span class="${this.selectClasses.classSelectContent}${e}">${s}</span></span></button>`
            }
        }
        getSelectElementContent(e) {
            const t = e.dataset.asset ? `${e.dataset.asset}` : ""
              , s = t.indexOf("img") >= 0 ? `<img src="${t}" alt="">` : t;
            let a = "";
            return a += t ? `<span class="${this.selectClasses.classSelectRow}">` : "",
            a += t ? `<span class="${this.selectClasses.classSelectData}">` : "",
            a += t ? s : "",
            a += t ? "</span>" : "",
            a += t ? `<span class="${this.selectClasses.classSelectText}">` : "",
            a += e.textContent,
            a += t ? "</span>" : "",
            a += t ? "</span>" : "",
            a
        }
        getSelectPlaceholder(e) {
            const t = Array.from(e.options).find((e=>!e.value));
            if (t)
                return {
                    value: t.textContent,
                    show: t.hasAttribute("data-show"),
                    label: {
                        show: t.hasAttribute("data-label"),
                        text: t.dataset.label
                    }
                }
        }
        getSelectedOptionsData(e, t) {
            let s = [];
            return e.multiple ? s = Array.from(e.options).filter((e=>e.value)).filter((e=>e.selected)) : s.push(e.options[e.selectedIndex]),
            {
                elements: s.map((e=>e)),
                values: s.filter((e=>e.value)).map((e=>e.value)),
                html: s.map((e=>this.getSelectElementContent(e)))
            }
        }
        getOptions(e) {
            let t = e.hasAttribute("data-scroll") ? "data-simplebar" : ""
              , s = Array.from(e.options);
            if (s.length > 0) {
                let a = "";
                return (this.getSelectPlaceholder(e) && !this.getSelectPlaceholder(e).show || e.multiple) && (s = s.filter((e=>e.value))),
                a += `<div ${t} class="${this.selectClasses.classSelectOptionsScroll}">`,
                s.forEach((t=>{
                    a += this.getOption(t, e)
                }
                )),
                a += "</div>",
                a
            }
        }
        getOption(e, t) {
            const s = e.selected && t.multiple ? ` ${this.selectClasses.classSelectOptionSelected}` : ""
              , a = !e.selected || t.hasAttribute("data-show-selected") || t.multiple ? "" : "hidden"
              , i = e.dataset.class ? ` ${e.dataset.class}` : ""
              , l = !!e.dataset.href && e.dataset.href
              , n = e.hasAttribute("data-href-blank") ? 'target="_blank"' : "";
            let r = "";
            return r += l ? `<a ${n} ${a} href="${l}" data-value="${e.value}" class="${this.selectClasses.classSelectOption}${i}${s}">` : `<button ${a} class="${this.selectClasses.classSelectOption}${i}${s}" data-value="${e.value}" type="button">`,
            r += this.getSelectElementContent(e),
            r += l ? "</a>" : "</button>",
            r
        }
        setOptions(e, t) {
            this.getSelectElement(e, this.selectClasses.classSelectOptions).selectElement.innerHTML = this.getOptions(t)
        }
        setOptionsPosition(e) {
            const t = this.getSelectElement(e).originalSelect
              , s = this.getSelectElement(e, this.selectClasses.classSelectOptions).selectElement
              , a = this.getSelectElement(e, this.selectClasses.classSelectOptionsScroll).selectElement
              , i = +t.dataset.scroll ? +t.dataset.scroll + "px" : ""
              , l = +t.dataset.optionsMargin ? +t.dataset.optionsMargin : 10;
            if (e.classList.contains(this.selectClasses.classSelectOpen))
                setTimeout((()=>{
                    e.classList.remove("select_show-top"),
                    a.style.maxHeight = i
                }
                ), +t.dataset.speed);
            else {
                s.hidden = !1;
                const t = a.offsetHeight ? a.offsetHeight : parseInt(window.getComputedStyle(a).getPropertyValue("max-height"))
                  , n = s.offsetHeight > t ? s.offsetHeight : t + s.offsetHeight
                  , r = n - t;
                s.hidden = !0;
                const o = e.offsetHeight
                  , c = e.getBoundingClientRect().top
                  , d = c + n + o + r
                  , p = window.innerHeight - (d + l);
                if (p < 0) {
                    const t = n + p;
                    t < 100 ? (e.classList.add("select_show-top"),
                    a.style.maxHeight = c < n ? c - (n - c) + "px" : i) : (e.classList.remove("select_show-top"),
                    a.style.maxHeight = `${t}px`)
                }
            }
        }
        optionAction(e, t, s) {
            if (!e.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOptions)}`).classList.contains("_slide")) {
                if (t.multiple) {
                    s.classList.toggle(this.selectClasses.classSelectOptionSelected);
                    this.getSelectedOptionsData(t).elements.forEach((e=>{
                        e.removeAttribute("selected")
                    }
                    ));
                    e.querySelectorAll(this.getSelectClass(this.selectClasses.classSelectOptionSelected)).forEach((e=>{
                        t.querySelector(`option[value = "${e.dataset.value}"]`).setAttribute("selected", "selected")
                    }
                    ))
                } else
                    t.hasAttribute("data-show-selected") || setTimeout((()=>{
                        e.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`) && (e.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`).hidden = !1),
                        s.hidden = !0
                    }
                    ), this.config.speed),
                    t.value = s.hasAttribute("data-value") ? s.dataset.value : s.textContent,
                    this.selectAction(e);
                this.setSelectTitleValue(e, t),
                this.setSelectChange(t)
            }
        }
        selectChange(e) {
            const t = e.target;
            this.selectBuild(t),
            this.setSelectChange(t)
        }
        setSelectChange(e) {
            if (e.hasAttribute("data-validate") && d.validateInput(e),
            e.hasAttribute("data-submit") && e.value) {
                let t = document.createElement("button");
                t.type = "submit",
                e.closest("form").append(t),
                t.click(),
                t.remove()
            }
            const t = e.parentElement;
            this.selectCallback(t, e)
        }
        selectDisabled(e, t) {
            t.disabled ? (e.classList.add(this.selectClasses.classSelectDisabled),
            this.getSelectElement(e, this.selectClasses.classSelectTitle).selectElement.disabled = !0) : (e.classList.remove(this.selectClasses.classSelectDisabled),
            this.getSelectElement(e, this.selectClasses.classSelectTitle).selectElement.disabled = !1)
        }
        searchActions(e) {
            this.getSelectElement(e).originalSelect;
            const t = this.getSelectElement(e, this.selectClasses.classSelectInput).selectElement
              , s = this.getSelectElement(e, this.selectClasses.classSelectOptions).selectElement
              , a = s.querySelectorAll(`.${this.selectClasses.classSelectOption} `)
              , i = this;
            t.addEventListener("input", (function() {
                a.forEach((e=>{
                    e.textContent.toUpperCase().includes(t.value.toUpperCase()) ? e.hidden = !1 : e.hidden = !0
                }
                )),
                !0 === s.hidden && i.selectAction(e)
            }
            ))
        }
        selectCallback(e, t) {
            document.dispatchEvent(new CustomEvent("selectCallback",{
                detail: {
                    select: t
                }
            }))
        }
        setLogging(e) {
            this.config.logging && r(`[select]: ${e} `)
        }
    }
    ({});
    const h = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
            blur() {},
            nodeName: ""
        },
        querySelector: ()=>null,
        querySelectorAll: ()=>[],
        getElementById: ()=>null,
        createEvent: ()=>({
            initEvent() {}
        }),
        createElement: ()=>({
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName: ()=>[]
        }),
        createElementNS: ()=>({}),
        importNode: ()=>null,
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };
    function m() {
        const e = "undefined" != typeof document ? document : {};
        return u(e, h),
        e
    }
    const f = {
        document: h,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState() {},
            pushState() {},
            go() {},
            back() {}
        },
        CustomEvent: function() {
            return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: ()=>({
            getPropertyValue: ()=>""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: ()=>({}),
        requestAnimationFrame: e=>"undefined" == typeof setTimeout ? (e(),
        null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };
    function g() {
        const e = "undefined" != typeof window ? window : {};
        return u(e, f),
        e
    }
    function v(e, t=0) {
        return setTimeout(e, t)
    }
    function b() {
        return Date.now()
    }
    function S(e, t="x") {
        const s = g();
        let a, i, l;
        const n = function(e) {
            const t = g();
            let s;
            return t.getComputedStyle && (s = t.getComputedStyle(e, null)),
            !s && e.currentStyle && (s = e.currentStyle),
            s || (s = e.style),
            s
        }(e);
        return s.WebKitCSSMatrix ? (i = n.transform || n.webkitTransform,
        i.split(",").length > 6 && (i = i.split(", ").map((e=>e.replace(",", "."))).join(", ")),
        l = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (l = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
        a = l.toString().split(",")),
        "x" === t && (i = s.WebKitCSSMatrix ? l.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])),
        "y" === t && (i = s.WebKitCSSMatrix ? l.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])),
        i || 0
    }
    function y(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }
    function w(...e) {
        const t = Object(e[0])
          , s = ["__proto__", "constructor", "prototype"];
        for (let i = 1; i < e.length; i += 1) {
            const l = e[i];
            if (null != l && (a = l,
            !("undefined" != typeof window && void 0 !== window.HTMLElement ? a instanceof HTMLElement : a && (1 === a.nodeType || 11 === a.nodeType)))) {
                const e = Object.keys(Object(l)).filter((e=>s.indexOf(e) < 0));
                for (let s = 0, a = e.length; s < a; s += 1) {
                    const a = e[s]
                      , i = Object.getOwnPropertyDescriptor(l, a);
                    void 0 !== i && i.enumerable && (y(t[a]) && y(l[a]) ? l[a].__swiper__ ? t[a] = l[a] : w(t[a], l[a]) : !y(t[a]) && y(l[a]) ? (t[a] = {},
                    l[a].__swiper__ ? t[a] = l[a] : w(t[a], l[a])) : t[a] = l[a])
                }
            }
        }
        var a;
        return t
    }
    function E(e, t, s) {
        e.style.setProperty(t, s)
    }
    function T({swiper: e, targetPosition: t, side: s}) {
        const a = g()
          , i = -e.translate;
        let l, n = null;
        const r = e.params.speed;
        e.wrapperEl.style.scrollSnapType = "none",
        a.cancelAnimationFrame(e.cssModeFrameID);
        const o = t > i ? "next" : "prev"
          , c = (e,t)=>"next" === o && e >= t || "prev" === o && e <= t
          , d = ()=>{
            l = (new Date).getTime(),
            null === n && (n = l);
            const o = Math.max(Math.min((l - n) / r, 1), 0)
              , p = .5 - Math.cos(o * Math.PI) / 2;
            let u = i + p * (t - i);
            if (c(u, t) && (u = t),
            e.wrapperEl.scrollTo({
                [s]: u
            }),
            c(u, t))
                return e.wrapperEl.style.overflow = "hidden",
                e.wrapperEl.style.scrollSnapType = "",
                setTimeout((()=>{
                    e.wrapperEl.style.overflow = "",
                    e.wrapperEl.scrollTo({
                        [s]: u
                    })
                }
                )),
                void a.cancelAnimationFrame(e.cssModeFrameID);
            e.cssModeFrameID = a.requestAnimationFrame(d)
        }
        ;
        d()
    }
    function C(e, t="") {
        return [...e.children].filter((e=>e.matches(t)))
    }
    function x(e, t=[]) {
        const s = document.createElement(e);
        return s.classList.add(...Array.isArray(t) ? t : [t]),
        s
    }
    function L(e, t) {
        return g().getComputedStyle(e, null).getPropertyValue(t)
    }
    function A(e) {
        let t, s = e;
        if (s) {
            for (t = 0; null !== (s = s.previousSibling); )
                1 === s.nodeType && (t += 1);
            return t
        }
    }
    function P(e, t) {
        const s = [];
        let a = e.parentElement;
        for (; a; )
            t ? a.matches(t) && s.push(a) : s.push(a),
            a = a.parentElement;
        return s
    }
    function M(e, t, s) {
        const a = g();
        return s ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(a.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(a.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
    }
    let _, k, O;
    function I() {
        return _ || (_ = function() {
            const e = g()
              , t = m();
            return {
                smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior"in t.documentElement.style,
                touch: !!("ontouchstart"in e || e.DocumentTouch && t instanceof e.DocumentTouch)
            }
        }()),
        _
    }
    function $(e={}) {
        return k || (k = function({userAgent: e}={}) {
            const t = I()
              , s = g()
              , a = s.navigator.platform
              , i = e || s.navigator.userAgent
              , l = {
                ios: !1,
                android: !1
            }
              , n = s.screen.width
              , r = s.screen.height
              , o = i.match(/(Android);?[\s\/]+([\d.]+)?/);
            let c = i.match(/(iPad).*OS\s([\d_]+)/);
            const d = i.match(/(iPod)(.*OS\s([\d_]+))?/)
              , p = !c && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
              , u = "Win32" === a;
            let h = "MacIntel" === a;
            return !c && h && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${n}x${r}`) >= 0 && (c = i.match(/(Version)\/([\d.]+)/),
            c || (c = [0, 1, "13_0_0"]),
            h = !1),
            o && !u && (l.os = "android",
            l.android = !0),
            (c || p || d) && (l.os = "ios",
            l.ios = !0),
            l
        }(e)),
        k
    }
    function z() {
        return O || (O = function() {
            const e = g();
            let t = !1;
            function s() {
                const t = e.navigator.userAgent.toLowerCase();
                return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
            }
            if (s()) {
                const s = String(e.navigator.userAgent);
                if (s.includes("Version/")) {
                    const [e,a] = s.split("Version/")[1].split(" ")[0].split(".").map((e=>Number(e)));
                    t = e < 16 || 16 === e && a < 2
                }
            }
            return {
                isSafari: t || s(),
                needPerspectiveFix: t,
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
            }
        }()),
        O
    }
    const B = {
        on(e, t, s) {
            const a = this;
            if (!a.eventsListeners || a.destroyed)
                return a;
            if ("function" != typeof t)
                return a;
            const i = s ? "unshift" : "push";
            return e.split(" ").forEach((e=>{
                a.eventsListeners[e] || (a.eventsListeners[e] = []),
                a.eventsListeners[e][i](t)
            }
            )),
            a
        },
        once(e, t, s) {
            const a = this;
            if (!a.eventsListeners || a.destroyed)
                return a;
            if ("function" != typeof t)
                return a;
            function i(...s) {
                a.off(e, i),
                i.__emitterProxy && delete i.__emitterProxy,
                t.apply(a, s)
            }
            return i.__emitterProxy = t,
            a.on(e, i, s)
        },
        onAny(e, t) {
            const s = this;
            if (!s.eventsListeners || s.destroyed)
                return s;
            if ("function" != typeof e)
                return s;
            const a = t ? "unshift" : "push";
            return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e),
            s
        },
        offAny(e) {
            const t = this;
            if (!t.eventsListeners || t.destroyed)
                return t;
            if (!t.eventsAnyListeners)
                return t;
            const s = t.eventsAnyListeners.indexOf(e);
            return s >= 0 && t.eventsAnyListeners.splice(s, 1),
            t
        },
        off(e, t) {
            const s = this;
            return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e=>{
                void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((a,i)=>{
                    (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1)
                }
                ))
            }
            )),
            s) : s
        },
        emit(...e) {
            const t = this;
            if (!t.eventsListeners || t.destroyed)
                return t;
            if (!t.eventsListeners)
                return t;
            let s, a, i;
            "string" == typeof e[0] || Array.isArray(e[0]) ? (s = e[0],
            a = e.slice(1, e.length),
            i = t) : (s = e[0].events,
            a = e[0].data,
            i = e[0].context || t),
            a.unshift(i);
            return (Array.isArray(s) ? s : s.split(" ")).forEach((e=>{
                t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach((t=>{
                    t.apply(i, [e, ...a])
                }
                )),
                t.eventsListeners && t.eventsListeners[e] && t.eventsListeners[e].forEach((e=>{
                    e.apply(i, a)
                }
                ))
            }
            )),
            t
        }
    };
    const D = (e,t)=>{
        if (!e || e.destroyed || !e.params)
            return;
        const s = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
        if (s) {
            const t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
            t && t.remove()
        }
    }
      , G = (e,t)=>{
        if (!e.slides[t])
            return;
        const s = e.slides[t].querySelector('[loading="lazy"]');
        s && s.removeAttribute("loading")
    }
      , q = e=>{
        if (!e || e.destroyed || !e.params)
            return;
        let t = e.params.lazyPreloadPrevNext;
        const s = e.slides.length;
        if (!s || !t || t < 0)
            return;
        t = Math.min(t, s);
        const a = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView)
          , i = e.activeIndex
          , l = i + a - 1;
        if (e.params.rewind)
            for (let a = i - t; a <= l + t; a += 1) {
                const t = (a % s + s) % s;
                t !== i && t > l && G(e, t)
            }
        else
            for (let a = Math.max(l - t, 0); a <= Math.min(l + t, s - 1); a += 1)
                a !== i && a > l && G(e, a)
    }
    ;
    const H = {
        updateSize: function() {
            const e = this;
            let t, s;
            const a = e.el;
            t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a.clientWidth,
            s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a.clientHeight,
            0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(L(a, "padding-left") || 0, 10) - parseInt(L(a, "padding-right") || 0, 10),
            s = s - parseInt(L(a, "padding-top") || 0, 10) - parseInt(L(a, "padding-bottom") || 0, 10),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(s) && (s = 0),
            Object.assign(e, {
                width: t,
                height: s,
                size: e.isHorizontal() ? t : s
            }))
        },
        updateSlides: function() {
            const e = this;
            function t(t) {
                return e.isHorizontal() ? t : {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[t]
            }
            function s(e, s) {
                return parseFloat(e.getPropertyValue(t(s)) || 0)
            }
            const a = e.params
              , {wrapperEl: i, slidesEl: l, size: n, rtlTranslate: r, wrongRTL: o} = e
              , c = e.virtual && a.virtual.enabled
              , d = c ? e.virtual.slides.length : e.slides.length
              , p = C(l, `.${e.params.slideClass}, swiper-slide`)
              , u = c ? e.virtual.slides.length : p.length;
            let h = [];
            const m = []
              , f = [];
            let g = a.slidesOffsetBefore;
            "function" == typeof g && (g = a.slidesOffsetBefore.call(e));
            let v = a.slidesOffsetAfter;
            "function" == typeof v && (v = a.slidesOffsetAfter.call(e));
            const b = e.snapGrid.length
              , S = e.slidesGrid.length;
            let y = a.spaceBetween
              , w = -g
              , T = 0
              , x = 0;
            if (void 0 === n)
                return;
            "string" == typeof y && y.indexOf("%") >= 0 ? y = parseFloat(y.replace("%", "")) / 100 * n : "string" == typeof y && (y = parseFloat(y)),
            e.virtualSize = -y,
            p.forEach((e=>{
                r ? e.style.marginLeft = "" : e.style.marginRight = "",
                e.style.marginBottom = "",
                e.style.marginTop = ""
            }
            )),
            a.centeredSlides && a.cssMode && (E(i, "--swiper-centered-offset-before", ""),
            E(i, "--swiper-centered-offset-after", ""));
            const A = a.grid && a.grid.rows > 1 && e.grid;
            let P;
            A && e.grid.initSlides(u);
            const _ = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter((e=>void 0 !== a.breakpoints[e].slidesPerView)).length > 0;
            for (let i = 0; i < u; i += 1) {
                let l;
                if (P = 0,
                p[i] && (l = p[i]),
                A && e.grid.updateSlide(i, l, u, t),
                !p[i] || "none" !== L(l, "display")) {
                    if ("auto" === a.slidesPerView) {
                        _ && (p[i].style[t("width")] = "");
                        const n = getComputedStyle(l)
                          , r = l.style.transform
                          , o = l.style.webkitTransform;
                        if (r && (l.style.transform = "none"),
                        o && (l.style.webkitTransform = "none"),
                        a.roundLengths)
                            P = e.isHorizontal() ? M(l, "width", !0) : M(l, "height", !0);
                        else {
                            const e = s(n, "width")
                              , t = s(n, "padding-left")
                              , a = s(n, "padding-right")
                              , i = s(n, "margin-left")
                              , r = s(n, "margin-right")
                              , o = n.getPropertyValue("box-sizing");
                            if (o && "border-box" === o)
                                P = e + i + r;
                            else {
                                const {clientWidth: s, offsetWidth: n} = l;
                                P = e + t + a + i + r + (n - s)
                            }
                        }
                        r && (l.style.transform = r),
                        o && (l.style.webkitTransform = o),
                        a.roundLengths && (P = Math.floor(P))
                    } else
                        P = (n - (a.slidesPerView - 1) * y) / a.slidesPerView,
                        a.roundLengths && (P = Math.floor(P)),
                        p[i] && (p[i].style[t("width")] = `${P}px`);
                    p[i] && (p[i].swiperSlideSize = P),
                    f.push(P),
                    a.centeredSlides ? (w = w + P / 2 + T / 2 + y,
                    0 === T && 0 !== i && (w = w - n / 2 - y),
                    0 === i && (w = w - n / 2 - y),
                    Math.abs(w) < .001 && (w = 0),
                    a.roundLengths && (w = Math.floor(w)),
                    x % a.slidesPerGroup == 0 && h.push(w),
                    m.push(w)) : (a.roundLengths && (w = Math.floor(w)),
                    (x - Math.min(e.params.slidesPerGroupSkip, x)) % e.params.slidesPerGroup == 0 && h.push(w),
                    m.push(w),
                    w = w + P + y),
                    e.virtualSize += P + y,
                    T = P,
                    x += 1
                }
            }
            if (e.virtualSize = Math.max(e.virtualSize, n) + v,
            r && o && ("slide" === a.effect || "coverflow" === a.effect) && (i.style.width = `${e.virtualSize + y}px`),
            a.setWrapperSize && (i.style[t("width")] = `${e.virtualSize + y}px`),
            A && e.grid.updateWrapperSize(P, h, t),
            !a.centeredSlides) {
                const t = [];
                for (let s = 0; s < h.length; s += 1) {
                    let i = h[s];
                    a.roundLengths && (i = Math.floor(i)),
                    h[s] <= e.virtualSize - n && t.push(i)
                }
                h = t,
                Math.floor(e.virtualSize - n) - Math.floor(h[h.length - 1]) > 1 && h.push(e.virtualSize - n)
            }
            if (c && a.loop) {
                const t = f[0] + y;
                if (a.slidesPerGroup > 1) {
                    const s = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / a.slidesPerGroup)
                      , i = t * a.slidesPerGroup;
                    for (let e = 0; e < s; e += 1)
                        h.push(h[h.length - 1] + i)
                }
                for (let s = 0; s < e.virtual.slidesBefore + e.virtual.slidesAfter; s += 1)
                    1 === a.slidesPerGroup && h.push(h[h.length - 1] + t),
                    m.push(m[m.length - 1] + t),
                    e.virtualSize += t
            }
            if (0 === h.length && (h = [0]),
            0 !== y) {
                const s = e.isHorizontal() && r ? "marginLeft" : t("marginRight");
                p.filter(((e,t)=>!(a.cssMode && !a.loop) || t !== p.length - 1)).forEach((e=>{
                    e.style[s] = `${y}px`
                }
                ))
            }
            if (a.centeredSlides && a.centeredSlidesBounds) {
                let e = 0;
                f.forEach((t=>{
                    e += t + (y || 0)
                }
                )),
                e -= y;
                const t = e - n;
                h = h.map((e=>e < 0 ? -g : e > t ? t + v : e))
            }
            if (a.centerInsufficientSlides) {
                let e = 0;
                if (f.forEach((t=>{
                    e += t + (y || 0)
                }
                )),
                e -= y,
                e < n) {
                    const t = (n - e) / 2;
                    h.forEach(((e,s)=>{
                        h[s] = e - t
                    }
                    )),
                    m.forEach(((e,s)=>{
                        m[s] = e + t
                    }
                    ))
                }
            }
            if (Object.assign(e, {
                slides: p,
                snapGrid: h,
                slidesGrid: m,
                slidesSizesGrid: f
            }),
            a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
                E(i, "--swiper-centered-offset-before", -h[0] + "px"),
                E(i, "--swiper-centered-offset-after", e.size / 2 - f[f.length - 1] / 2 + "px");
                const t = -e.snapGrid[0]
                  , s = -e.slidesGrid[0];
                e.snapGrid = e.snapGrid.map((e=>e + t)),
                e.slidesGrid = e.slidesGrid.map((e=>e + s))
            }
            if (u !== d && e.emit("slidesLengthChange"),
            h.length !== b && (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
            m.length !== S && e.emit("slidesGridLengthChange"),
            a.watchSlidesProgress && e.updateSlidesOffset(),
            !(c || a.cssMode || "slide" !== a.effect && "fade" !== a.effect)) {
                const t = `${a.containerModifierClass}backface-hidden`
                  , s = e.el.classList.contains(t);
                u <= a.maxBackfaceHiddenSlides ? s || e.el.classList.add(t) : s && e.el.classList.remove(t)
            }
        },
        updateAutoHeight: function(e) {
            const t = this
              , s = []
              , a = t.virtual && t.params.virtual.enabled;
            let i, l = 0;
            "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
            const n = e=>a ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                if (t.params.centeredSlides)
                    (t.visibleSlides || []).forEach((e=>{
                        s.push(e)
                    }
                    ));
                else
                    for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                        const e = t.activeIndex + i;
                        if (e > t.slides.length && !a)
                            break;
                        s.push(n(e))
                    }
            else
                s.push(n(t.activeIndex));
            for (i = 0; i < s.length; i += 1)
                if (void 0 !== s[i]) {
                    const e = s[i].offsetHeight;
                    l = e > l ? e : l
                }
            (l || 0 === l) && (t.wrapperEl.style.height = `${l}px`)
        },
        updateSlidesOffset: function() {
            const e = this
              , t = e.slides
              , s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
            for (let a = 0; a < t.length; a += 1)
                t[a].swiperSlideOffset = (e.isHorizontal() ? t[a].offsetLeft : t[a].offsetTop) - s - e.cssOverflowAdjustment()
        },
        updateSlidesProgress: function(e=this && this.translate || 0) {
            const t = this
              , s = t.params
              , {slides: a, rtlTranslate: i, snapGrid: l} = t;
            if (0 === a.length)
                return;
            void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
            let n = -e;
            i && (n = e),
            a.forEach((e=>{
                e.classList.remove(s.slideVisibleClass)
            }
            )),
            t.visibleSlidesIndexes = [],
            t.visibleSlides = [];
            let r = s.spaceBetween;
            "string" == typeof r && r.indexOf("%") >= 0 ? r = parseFloat(r.replace("%", "")) / 100 * t.size : "string" == typeof r && (r = parseFloat(r));
            for (let e = 0; e < a.length; e += 1) {
                const o = a[e];
                let c = o.swiperSlideOffset;
                s.cssMode && s.centeredSlides && (c -= a[0].swiperSlideOffset);
                const d = (n + (s.centeredSlides ? t.minTranslate() : 0) - c) / (o.swiperSlideSize + r)
                  , p = (n - l[0] + (s.centeredSlides ? t.minTranslate() : 0) - c) / (o.swiperSlideSize + r)
                  , u = -(n - c)
                  , h = u + t.slidesSizesGrid[e];
                (u >= 0 && u < t.size - 1 || h > 1 && h <= t.size || u <= 0 && h >= t.size) && (t.visibleSlides.push(o),
                t.visibleSlidesIndexes.push(e),
                a[e].classList.add(s.slideVisibleClass)),
                o.progress = i ? -d : d,
                o.originalProgress = i ? -p : p
            }
        },
        updateProgress: function(e) {
            const t = this;
            if (void 0 === e) {
                const s = t.rtlTranslate ? -1 : 1;
                e = t && t.translate && t.translate * s || 0
            }
            const s = t.params
              , a = t.maxTranslate() - t.minTranslate();
            let {progress: i, isBeginning: l, isEnd: n, progressLoop: r} = t;
            const o = l
              , c = n;
            if (0 === a)
                i = 0,
                l = !0,
                n = !0;
            else {
                i = (e - t.minTranslate()) / a;
                const s = Math.abs(e - t.minTranslate()) < 1
                  , r = Math.abs(e - t.maxTranslate()) < 1;
                l = s || i <= 0,
                n = r || i >= 1,
                s && (i = 0),
                r && (i = 1)
            }
            if (s.loop) {
                const s = t.getSlideIndexByData(0)
                  , a = t.getSlideIndexByData(t.slides.length - 1)
                  , i = t.slidesGrid[s]
                  , l = t.slidesGrid[a]
                  , n = t.slidesGrid[t.slidesGrid.length - 1]
                  , o = Math.abs(e);
                r = o >= i ? (o - i) / n : (o + n - l) / n,
                r > 1 && (r -= 1)
            }
            Object.assign(t, {
                progress: i,
                progressLoop: r,
                isBeginning: l,
                isEnd: n
            }),
            (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e),
            l && !o && t.emit("reachBeginning toEdge"),
            n && !c && t.emit("reachEnd toEdge"),
            (o && !l || c && !n) && t.emit("fromEdge"),
            t.emit("progress", i)
        },
        updateSlidesClasses: function() {
            const e = this
              , {slides: t, params: s, slidesEl: a, activeIndex: i} = e
              , l = e.virtual && s.virtual.enabled
              , n = e=>C(a, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
            let r;
            if (t.forEach((e=>{
                e.classList.remove(s.slideActiveClass, s.slideNextClass, s.slidePrevClass)
            }
            )),
            l)
                if (s.loop) {
                    let t = i - e.virtual.slidesBefore;
                    t < 0 && (t = e.virtual.slides.length + t),
                    t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
                    r = n(`[data-swiper-slide-index="${t}"]`)
                } else
                    r = n(`[data-swiper-slide-index="${i}"]`);
            else
                r = t[i];
            if (r) {
                r.classList.add(s.slideActiveClass);
                let e = function(e, t) {
                    const s = [];
                    for (; e.nextElementSibling; ) {
                        const a = e.nextElementSibling;
                        t ? a.matches(t) && s.push(a) : s.push(a),
                        e = a
                    }
                    return s
                }(r, `.${s.slideClass}, swiper-slide`)[0];
                s.loop && !e && (e = t[0]),
                e && e.classList.add(s.slideNextClass);
                let a = function(e, t) {
                    const s = [];
                    for (; e.previousElementSibling; ) {
                        const a = e.previousElementSibling;
                        t ? a.matches(t) && s.push(a) : s.push(a),
                        e = a
                    }
                    return s
                }(r, `.${s.slideClass}, swiper-slide`)[0];
                s.loop && 0 === !a && (a = t[t.length - 1]),
                a && a.classList.add(s.slidePrevClass)
            }
            e.emitSlidesClasses()
        },
        updateActiveIndex: function(e) {
            const t = this
              , s = t.rtlTranslate ? t.translate : -t.translate
              , {snapGrid: a, params: i, activeIndex: l, realIndex: n, snapIndex: r} = t;
            let o, c = e;
            const d = e=>{
                let s = e - t.virtual.slidesBefore;
                return s < 0 && (s = t.virtual.slides.length + s),
                s >= t.virtual.slides.length && (s -= t.virtual.slides.length),
                s
            }
            ;
            if (void 0 === c && (c = function(e) {
                const {slidesGrid: t, params: s} = e
                  , a = e.rtlTranslate ? e.translate : -e.translate;
                let i;
                for (let e = 0; e < t.length; e += 1)
                    void 0 !== t[e + 1] ? a >= t[e] && a < t[e + 1] - (t[e + 1] - t[e]) / 2 ? i = e : a >= t[e] && a < t[e + 1] && (i = e + 1) : a >= t[e] && (i = e);
                return s.normalizeSlideIndex && (i < 0 || void 0 === i) && (i = 0),
                i
            }(t)),
            a.indexOf(s) >= 0)
                o = a.indexOf(s);
            else {
                const e = Math.min(i.slidesPerGroupSkip, c);
                o = e + Math.floor((c - e) / i.slidesPerGroup)
            }
            if (o >= a.length && (o = a.length - 1),
            c === l)
                return o !== r && (t.snapIndex = o,
                t.emit("snapIndexChange")),
                void (t.params.loop && t.virtual && t.params.virtual.enabled && (t.realIndex = d(c)));
            let p;
            p = t.virtual && i.virtual.enabled && i.loop ? d(c) : t.slides[c] ? parseInt(t.slides[c].getAttribute("data-swiper-slide-index") || c, 10) : c,
            Object.assign(t, {
                previousSnapIndex: r,
                snapIndex: o,
                previousRealIndex: n,
                realIndex: p,
                previousIndex: l,
                activeIndex: c
            }),
            t.initialized && q(t),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            n !== p && t.emit("realIndexChange"),
            (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
        },
        updateClickedSlide: function(e) {
            const t = this
              , s = t.params
              , a = e.closest(`.${s.slideClass}, swiper-slide`);
            let i, l = !1;
            if (a)
                for (let e = 0; e < t.slides.length; e += 1)
                    if (t.slides[e] === a) {
                        l = !0,
                        i = e;
                        break
                    }
            if (!a || !l)
                return t.clickedSlide = void 0,
                void (t.clickedIndex = void 0);
            t.clickedSlide = a,
            t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(a.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = i,
            s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
        }
    };
    const V = {
        getTranslate: function(e=(this.isHorizontal() ? "x" : "y")) {
            const {params: t, rtlTranslate: s, translate: a, wrapperEl: i} = this;
            if (t.virtualTranslate)
                return s ? -a : a;
            if (t.cssMode)
                return a;
            let l = S(i, e);
            return l += this.cssOverflowAdjustment(),
            s && (l = -l),
            l || 0
        },
        setTranslate: function(e, t) {
            const s = this
              , {rtlTranslate: a, params: i, wrapperEl: l, progress: n} = s;
            let r, o = 0, c = 0;
            s.isHorizontal() ? o = a ? -e : e : c = e,
            i.roundLengths && (o = Math.floor(o),
            c = Math.floor(c)),
            s.previousTranslate = s.translate,
            s.translate = s.isHorizontal() ? o : c,
            i.cssMode ? l[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -o : -c : i.virtualTranslate || (s.isHorizontal() ? o -= s.cssOverflowAdjustment() : c -= s.cssOverflowAdjustment(),
            l.style.transform = `translate3d(${o}px, ${c}px, 0px)`);
            const d = s.maxTranslate() - s.minTranslate();
            r = 0 === d ? 0 : (e - s.minTranslate()) / d,
            r !== n && s.updateProgress(e),
            s.emit("setTranslate", s.translate, t)
        },
        minTranslate: function() {
            return -this.snapGrid[0]
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1]
        },
        translateTo: function(e=0, t=this.params.speed, s=!0, a=!0, i) {
            const l = this
              , {params: n, wrapperEl: r} = l;
            if (l.animating && n.preventInteractionOnTransition)
                return !1;
            const o = l.minTranslate()
              , c = l.maxTranslate();
            let d;
            if (d = a && e > o ? o : a && e < c ? c : e,
            l.updateProgress(d),
            n.cssMode) {
                const e = l.isHorizontal();
                if (0 === t)
                    r[e ? "scrollLeft" : "scrollTop"] = -d;
                else {
                    if (!l.support.smoothScroll)
                        return T({
                            swiper: l,
                            targetPosition: -d,
                            side: e ? "left" : "top"
                        }),
                        !0;
                    r.scrollTo({
                        [e ? "left" : "top"]: -d,
                        behavior: "smooth"
                    })
                }
                return !0
            }
            return 0 === t ? (l.setTransition(0),
            l.setTranslate(d),
            s && (l.emit("beforeTransitionStart", t, i),
            l.emit("transitionEnd"))) : (l.setTransition(t),
            l.setTranslate(d),
            s && (l.emit("beforeTransitionStart", t, i),
            l.emit("transitionStart")),
            l.animating || (l.animating = !0,
            l.onTranslateToWrapperTransitionEnd || (l.onTranslateToWrapperTransitionEnd = function(e) {
                l && !l.destroyed && e.target === this && (l.wrapperEl.removeEventListener("transitionend", l.onTranslateToWrapperTransitionEnd),
                l.onTranslateToWrapperTransitionEnd = null,
                delete l.onTranslateToWrapperTransitionEnd,
                s && l.emit("transitionEnd"))
            }
            ),
            l.wrapperEl.addEventListener("transitionend", l.onTranslateToWrapperTransitionEnd))),
            !0
        }
    };
    function F({swiper: e, runCallbacks: t, direction: s, step: a}) {
        const {activeIndex: i, previousIndex: l} = e;
        let n = s;
        if (n || (n = i > l ? "next" : i < l ? "prev" : "reset"),
        e.emit(`transition${a}`),
        t && i !== l) {
            if ("reset" === n)
                return void e.emit(`slideResetTransition${a}`);
            e.emit(`slideChangeTransition${a}`),
            "next" === n ? e.emit(`slideNextTransition${a}`) : e.emit(`slidePrevTransition${a}`)
        }
    }
    const N = {
        slideTo: function(e=0, t=this.params.speed, s=!0, a, i) {
            "string" == typeof e && (e = parseInt(e, 10));
            const l = this;
            let n = e;
            n < 0 && (n = 0);
            const {params: r, snapGrid: o, slidesGrid: c, previousIndex: d, activeIndex: p, rtlTranslate: u, wrapperEl: h, enabled: m} = l;
            if (l.animating && r.preventInteractionOnTransition || !m && !a && !i)
                return !1;
            const f = Math.min(l.params.slidesPerGroupSkip, n);
            let g = f + Math.floor((n - f) / l.params.slidesPerGroup);
            g >= o.length && (g = o.length - 1);
            const v = -o[g];
            if (r.normalizeSlideIndex)
                for (let e = 0; e < c.length; e += 1) {
                    const t = -Math.floor(100 * v)
                      , s = Math.floor(100 * c[e])
                      , a = Math.floor(100 * c[e + 1]);
                    void 0 !== c[e + 1] ? t >= s && t < a - (a - s) / 2 ? n = e : t >= s && t < a && (n = e + 1) : t >= s && (n = e)
                }
            if (l.initialized && n !== p) {
                if (!l.allowSlideNext && v < l.translate && v < l.minTranslate())
                    return !1;
                if (!l.allowSlidePrev && v > l.translate && v > l.maxTranslate() && (p || 0) !== n)
                    return !1
            }
            let b;
            if (n !== (d || 0) && s && l.emit("beforeSlideChangeStart"),
            l.updateProgress(v),
            b = n > p ? "next" : n < p ? "prev" : "reset",
            u && -v === l.translate || !u && v === l.translate)
                return l.updateActiveIndex(n),
                r.autoHeight && l.updateAutoHeight(),
                l.updateSlidesClasses(),
                "slide" !== r.effect && l.setTranslate(v),
                "reset" !== b && (l.transitionStart(s, b),
                l.transitionEnd(s, b)),
                !1;
            if (r.cssMode) {
                const e = l.isHorizontal()
                  , s = u ? v : -v;
                if (0 === t) {
                    const t = l.virtual && l.params.virtual.enabled;
                    t && (l.wrapperEl.style.scrollSnapType = "none",
                    l._immediateVirtual = !0),
                    t && !l._cssModeVirtualInitialSet && l.params.initialSlide > 0 ? (l._cssModeVirtualInitialSet = !0,
                    requestAnimationFrame((()=>{
                        h[e ? "scrollLeft" : "scrollTop"] = s
                    }
                    ))) : h[e ? "scrollLeft" : "scrollTop"] = s,
                    t && requestAnimationFrame((()=>{
                        l.wrapperEl.style.scrollSnapType = "",
                        l._immediateVirtual = !1
                    }
                    ))
                } else {
                    if (!l.support.smoothScroll)
                        return T({
                            swiper: l,
                            targetPosition: s,
                            side: e ? "left" : "top"
                        }),
                        !0;
                    h.scrollTo({
                        [e ? "left" : "top"]: s,
                        behavior: "smooth"
                    })
                }
                return !0
            }
            return l.setTransition(t),
            l.setTranslate(v),
            l.updateActiveIndex(n),
            l.updateSlidesClasses(),
            l.emit("beforeTransitionStart", t, a),
            l.transitionStart(s, b),
            0 === t ? l.transitionEnd(s, b) : l.animating || (l.animating = !0,
            l.onSlideToWrapperTransitionEnd || (l.onSlideToWrapperTransitionEnd = function(e) {
                l && !l.destroyed && e.target === this && (l.wrapperEl.removeEventListener("transitionend", l.onSlideToWrapperTransitionEnd),
                l.onSlideToWrapperTransitionEnd = null,
                delete l.onSlideToWrapperTransitionEnd,
                l.transitionEnd(s, b))
            }
            ),
            l.wrapperEl.addEventListener("transitionend", l.onSlideToWrapperTransitionEnd)),
            !0
        },
        slideToLoop: function(e=0, t=this.params.speed, s=!0, a) {
            if ("string" == typeof e) {
                e = parseInt(e, 10)
            }
            const i = this;
            let l = e;
            return i.params.loop && (i.virtual && i.params.virtual.enabled ? l += i.virtual.slidesBefore : l = i.getSlideIndexByData(l)),
            i.slideTo(l, t, s, a)
        },
        slideNext: function(e=this.params.speed, t=!0, s) {
            const a = this
              , {enabled: i, params: l, animating: n} = a;
            if (!i)
                return a;
            let r = l.slidesPerGroup;
            "auto" === l.slidesPerView && 1 === l.slidesPerGroup && l.slidesPerGroupAuto && (r = Math.max(a.slidesPerViewDynamic("current", !0), 1));
            const o = a.activeIndex < l.slidesPerGroupSkip ? 1 : r
              , c = a.virtual && l.virtual.enabled;
            if (l.loop) {
                if (n && !c && l.loopPreventsSliding)
                    return !1;
                a.loopFix({
                    direction: "next"
                }),
                a._clientLeft = a.wrapperEl.clientLeft
            }
            return l.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s)
        },
        slidePrev: function(e=this.params.speed, t=!0, s) {
            const a = this
              , {params: i, snapGrid: l, slidesGrid: n, rtlTranslate: r, enabled: o, animating: c} = a;
            if (!o)
                return a;
            const d = a.virtual && i.virtual.enabled;
            if (i.loop) {
                if (c && !d && i.loopPreventsSliding)
                    return !1;
                a.loopFix({
                    direction: "prev"
                }),
                a._clientLeft = a.wrapperEl.clientLeft
            }
            function p(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            const u = p(r ? a.translate : -a.translate)
              , h = l.map((e=>p(e)));
            let m = l[h.indexOf(u) - 1];
            if (void 0 === m && i.cssMode) {
                let e;
                l.forEach(((t,s)=>{
                    u >= t && (e = s)
                }
                )),
                void 0 !== e && (m = l[e > 0 ? e - 1 : e])
            }
            let f = 0;
            if (void 0 !== m && (f = n.indexOf(m),
            f < 0 && (f = a.activeIndex - 1),
            "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (f = f - a.slidesPerViewDynamic("previous", !0) + 1,
            f = Math.max(f, 0))),
            i.rewind && a.isBeginning) {
                const i = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
                return a.slideTo(i, e, t, s)
            }
            return a.slideTo(f, e, t, s)
        },
        slideReset: function(e=this.params.speed, t=!0, s) {
            return this.slideTo(this.activeIndex, e, t, s)
        },
        slideToClosest: function(e=this.params.speed, t=!0, s, a=.5) {
            const i = this;
            let l = i.activeIndex;
            const n = Math.min(i.params.slidesPerGroupSkip, l)
              , r = n + Math.floor((l - n) / i.params.slidesPerGroup)
              , o = i.rtlTranslate ? i.translate : -i.translate;
            if (o >= i.snapGrid[r]) {
                const e = i.snapGrid[r];
                o - e > (i.snapGrid[r + 1] - e) * a && (l += i.params.slidesPerGroup)
            } else {
                const e = i.snapGrid[r - 1];
                o - e <= (i.snapGrid[r] - e) * a && (l -= i.params.slidesPerGroup)
            }
            return l = Math.max(l, 0),
            l = Math.min(l, i.slidesGrid.length - 1),
            i.slideTo(l, e, t, s)
        },
        slideToClickedSlide: function() {
            const e = this
              , {params: t, slidesEl: s} = e
              , a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let i, l = e.clickedIndex;
            const n = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
            if (t.loop) {
                if (e.animating)
                    return;
                i = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10),
                t.centeredSlides ? l < e.loopedSlides - a / 2 || l > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(),
                l = e.getSlideIndex(C(s, `${n}[data-swiper-slide-index="${i}"]`)[0]),
                v((()=>{
                    e.slideTo(l)
                }
                ))) : e.slideTo(l) : l > e.slides.length - a ? (e.loopFix(),
                l = e.getSlideIndex(C(s, `${n}[data-swiper-slide-index="${i}"]`)[0]),
                v((()=>{
                    e.slideTo(l)
                }
                ))) : e.slideTo(l)
            } else
                e.slideTo(l)
        }
    };
    const j = {
        loopCreate: function(e) {
            const t = this
              , {params: s, slidesEl: a} = t;
            if (!s.loop || t.virtual && t.params.virtual.enabled)
                return;
            C(a, `.${s.slideClass}, swiper-slide`).forEach(((e,t)=>{
                e.setAttribute("data-swiper-slide-index", t)
            }
            )),
            t.loopFix({
                slideRealIndex: e,
                direction: s.centeredSlides ? void 0 : "next"
            })
        },
        loopFix: function({slideRealIndex: e, slideTo: t=!0, direction: s, setTranslate: a, activeSlideIndex: i, byController: l, byMousewheel: n}={}) {
            const r = this;
            if (!r.params.loop)
                return;
            r.emit("beforeLoopFix");
            const {slides: o, allowSlidePrev: c, allowSlideNext: d, slidesEl: p, params: u} = r;
            if (r.allowSlidePrev = !0,
            r.allowSlideNext = !0,
            r.virtual && u.virtual.enabled)
                return t && (u.centeredSlides || 0 !== r.snapIndex ? u.centeredSlides && r.snapIndex < u.slidesPerView ? r.slideTo(r.virtual.slides.length + r.snapIndex, 0, !1, !0) : r.snapIndex === r.snapGrid.length - 1 && r.slideTo(r.virtual.slidesBefore, 0, !1, !0) : r.slideTo(r.virtual.slides.length, 0, !1, !0)),
                r.allowSlidePrev = c,
                r.allowSlideNext = d,
                void r.emit("loopFix");
            const h = "auto" === u.slidesPerView ? r.slidesPerViewDynamic() : Math.ceil(parseFloat(u.slidesPerView, 10));
            let m = u.loopedSlides || h;
            m % u.slidesPerGroup != 0 && (m += u.slidesPerGroup - m % u.slidesPerGroup),
            r.loopedSlides = m;
            const f = []
              , g = [];
            let v = r.activeIndex;
            void 0 === i ? i = r.getSlideIndex(r.slides.filter((e=>e.classList.contains(u.slideActiveClass)))[0]) : v = i;
            const b = "next" === s || !s
              , S = "prev" === s || !s;
            let y = 0
              , w = 0;
            if (i < m) {
                y = Math.max(m - i, u.slidesPerGroup);
                for (let e = 0; e < m - i; e += 1) {
                    const t = e - Math.floor(e / o.length) * o.length;
                    f.push(o.length - t - 1)
                }
            } else if (i > r.slides.length - 2 * m) {
                w = Math.max(i - (r.slides.length - 2 * m), u.slidesPerGroup);
                for (let e = 0; e < w; e += 1) {
                    const t = e - Math.floor(e / o.length) * o.length;
                    g.push(t)
                }
            }
            if (S && f.forEach((e=>{
                r.slides[e].swiperLoopMoveDOM = !0,
                p.prepend(r.slides[e]),
                r.slides[e].swiperLoopMoveDOM = !1
            }
            )),
            b && g.forEach((e=>{
                r.slides[e].swiperLoopMoveDOM = !0,
                p.append(r.slides[e]),
                r.slides[e].swiperLoopMoveDOM = !1
            }
            )),
            r.recalcSlides(),
            "auto" === u.slidesPerView && r.updateSlides(),
            u.watchSlidesProgress && r.updateSlidesOffset(),
            t)
                if (f.length > 0 && S)
                    if (void 0 === e) {
                        const e = r.slidesGrid[v]
                          , t = r.slidesGrid[v + y] - e;
                        n ? r.setTranslate(r.translate - t) : (r.slideTo(v + y, 0, !1, !0),
                        a && (r.touches[r.isHorizontal() ? "startX" : "startY"] += t))
                    } else
                        a && r.slideToLoop(e, 0, !1, !0);
                else if (g.length > 0 && b)
                    if (void 0 === e) {
                        const e = r.slidesGrid[v]
                          , t = r.slidesGrid[v - w] - e;
                        n ? r.setTranslate(r.translate - t) : (r.slideTo(v - w, 0, !1, !0),
                        a && (r.touches[r.isHorizontal() ? "startX" : "startY"] += t))
                    } else
                        r.slideToLoop(e, 0, !1, !0);
            if (r.allowSlidePrev = c,
            r.allowSlideNext = d,
            r.controller && r.controller.control && !l) {
                const t = {
                    slideRealIndex: e,
                    slideTo: !1,
                    direction: s,
                    setTranslate: a,
                    activeSlideIndex: i,
                    byController: !0
                };
                Array.isArray(r.controller.control) ? r.controller.control.forEach((e=>{
                    !e.destroyed && e.params.loop && e.loopFix(t)
                }
                )) : r.controller.control instanceof r.constructor && r.controller.control.params.loop && r.controller.control.loopFix(t)
            }
            r.emit("loopFix")
        },
        loopDestroy: function() {
            const e = this
              , {params: t, slidesEl: s} = e;
            if (!t.loop || e.virtual && e.params.virtual.enabled)
                return;
            e.recalcSlides();
            const a = [];
            e.slides.forEach((e=>{
                const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                a[t] = e
            }
            )),
            e.slides.forEach((e=>{
                e.removeAttribute("data-swiper-slide-index")
            }
            )),
            a.forEach((e=>{
                s.append(e)
            }
            )),
            e.recalcSlides(),
            e.slideTo(e.realIndex, 0)
        }
    };
    function R(e) {
        const t = this
          , s = m()
          , a = g()
          , i = t.touchEventsData;
        i.evCache.push(e);
        const {params: l, touches: n, enabled: r} = t;
        if (!r)
            return;
        if (!l.simulateTouch && "mouse" === e.pointerType)
            return;
        if (t.animating && l.preventInteractionOnTransition)
            return;
        !t.animating && l.cssMode && l.loop && t.loopFix();
        let o = e;
        o.originalEvent && (o = o.originalEvent);
        let c = o.target;
        if ("wrapper" === l.touchEventsTarget && !t.wrapperEl.contains(c))
            return;
        if ("which"in o && 3 === o.which)
            return;
        if ("button"in o && o.button > 0)
            return;
        if (i.isTouched && i.isMoved)
            return;
        const d = !!l.noSwipingClass && "" !== l.noSwipingClass
          , p = e.composedPath ? e.composedPath() : e.path;
        d && o.target && o.target.shadowRoot && p && (c = p[0]);
        const u = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`
          , h = !(!o.target || !o.target.shadowRoot);
        if (l.noSwiping && (h ? function(e, t=this) {
            return function t(s) {
                if (!s || s === m() || s === g())
                    return null;
                s.assignedSlot && (s = s.assignedSlot);
                const a = s.closest(e);
                return a || s.getRootNode ? a || t(s.getRootNode().host) : null
            }(t)
        }(u, c) : c.closest(u)))
            return void (t.allowClick = !0);
        if (l.swipeHandler && !c.closest(l.swipeHandler))
            return;
        n.currentX = o.pageX,
        n.currentY = o.pageY;
        const f = n.currentX
          , v = n.currentY
          , S = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection
          , y = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
        if (S && (f <= y || f >= a.innerWidth - y)) {
            if ("prevent" !== S)
                return;
            e.preventDefault()
        }
        Object.assign(i, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
        }),
        n.startX = f,
        n.startY = v,
        i.touchStartTime = b(),
        t.allowClick = !0,
        t.updateSize(),
        t.swipeDirection = void 0,
        l.threshold > 0 && (i.allowThresholdMove = !1);
        let w = !0;
        c.matches(i.focusableElements) && (w = !1,
        "SELECT" === c.nodeName && (i.isTouched = !1)),
        s.activeElement && s.activeElement.matches(i.focusableElements) && s.activeElement !== c && s.activeElement.blur();
        const E = w && t.allowTouchMove && l.touchStartPreventDefault;
        !l.touchStartForcePreventDefault && !E || c.isContentEditable || o.preventDefault(),
        t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(),
        t.emit("touchStart", o)
    }
    function W(e) {
        const t = m()
          , s = this
          , a = s.touchEventsData
          , {params: i, touches: l, rtlTranslate: n, enabled: r} = s;
        if (!r)
            return;
        if (!i.simulateTouch && "mouse" === e.pointerType)
            return;
        let o = e;
        if (o.originalEvent && (o = o.originalEvent),
        !a.isTouched)
            return void (a.startMoving && a.isScrolling && s.emit("touchMoveOpposite", o));
        const c = a.evCache.findIndex((e=>e.pointerId === o.pointerId));
        c >= 0 && (a.evCache[c] = o);
        const d = a.evCache.length > 1 ? a.evCache[0] : o
          , p = d.pageX
          , u = d.pageY;
        if (o.preventedByNestedSwiper)
            return l.startX = p,
            void (l.startY = u);
        if (!s.allowTouchMove)
            return o.target.matches(a.focusableElements) || (s.allowClick = !1),
            void (a.isTouched && (Object.assign(l, {
                startX: p,
                startY: u,
                prevX: s.touches.currentX,
                prevY: s.touches.currentY,
                currentX: p,
                currentY: u
            }),
            a.touchStartTime = b()));
        if (i.touchReleaseOnEdges && !i.loop)
            if (s.isVertical()) {
                if (u < l.startY && s.translate <= s.maxTranslate() || u > l.startY && s.translate >= s.minTranslate())
                    return a.isTouched = !1,
                    void (a.isMoved = !1)
            } else if (p < l.startX && s.translate <= s.maxTranslate() || p > l.startX && s.translate >= s.minTranslate())
                return;
        if (t.activeElement && o.target === t.activeElement && o.target.matches(a.focusableElements))
            return a.isMoved = !0,
            void (s.allowClick = !1);
        if (a.allowTouchCallbacks && s.emit("touchMove", o),
        o.targetTouches && o.targetTouches.length > 1)
            return;
        l.currentX = p,
        l.currentY = u;
        const h = l.currentX - l.startX
          , f = l.currentY - l.startY;
        if (s.params.threshold && Math.sqrt(h ** 2 + f ** 2) < s.params.threshold)
            return;
        if (void 0 === a.isScrolling) {
            let e;
            s.isHorizontal() && l.currentY === l.startY || s.isVertical() && l.currentX === l.startX ? a.isScrolling = !1 : h * h + f * f >= 25 && (e = 180 * Math.atan2(Math.abs(f), Math.abs(h)) / Math.PI,
            a.isScrolling = s.isHorizontal() ? e > i.touchAngle : 90 - e > i.touchAngle)
        }
        if (a.isScrolling && s.emit("touchMoveOpposite", o),
        void 0 === a.startMoving && (l.currentX === l.startX && l.currentY === l.startY || (a.startMoving = !0)),
        a.isScrolling || s.zoom && s.params.zoom && s.params.zoom.enabled && a.evCache.length > 1)
            return void (a.isTouched = !1);
        if (!a.startMoving)
            return;
        s.allowClick = !1,
        !i.cssMode && o.cancelable && o.preventDefault(),
        i.touchMoveStopPropagation && !i.nested && o.stopPropagation();
        let g = s.isHorizontal() ? h : f
          , v = s.isHorizontal() ? l.currentX - l.previousX : l.currentY - l.previousY;
        i.oneWayMovement && (g = Math.abs(g) * (n ? 1 : -1),
        v = Math.abs(v) * (n ? 1 : -1)),
        l.diff = g,
        g *= i.touchRatio,
        n && (g = -g,
        v = -v);
        const S = s.touchesDirection;
        s.swipeDirection = g > 0 ? "prev" : "next",
        s.touchesDirection = v > 0 ? "prev" : "next";
        const y = s.params.loop && !i.cssMode;
        if (!a.isMoved) {
            if (y && s.loopFix({
                direction: s.swipeDirection
            }),
            a.startTranslate = s.getTranslate(),
            s.setTransition(0),
            s.animating) {
                const e = new window.CustomEvent("transitionend",{
                    bubbles: !0,
                    cancelable: !0
                });
                s.wrapperEl.dispatchEvent(e)
            }
            a.allowMomentumBounce = !1,
            !i.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0),
            s.emit("sliderFirstMove", o)
        }
        let w;
        a.isMoved && S !== s.touchesDirection && y && Math.abs(g) >= 1 && (s.loopFix({
            direction: s.swipeDirection,
            setTranslate: !0
        }),
        w = !0),
        s.emit("sliderMove", o),
        a.isMoved = !0,
        a.currentTranslate = g + a.startTranslate;
        let E = !0
          , T = i.resistanceRatio;
        if (i.touchReleaseOnEdges && (T = 0),
        g > 0 ? (y && !w && a.currentTranslate > (i.centeredSlides ? s.minTranslate() - s.size / 2 : s.minTranslate()) && s.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
        }),
        a.currentTranslate > s.minTranslate() && (E = !1,
        i.resistance && (a.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + a.startTranslate + g) ** T))) : g < 0 && (y && !w && a.currentTranslate < (i.centeredSlides ? s.maxTranslate() + s.size / 2 : s.maxTranslate()) && s.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex: s.slides.length - ("auto" === i.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(i.slidesPerView, 10)))
        }),
        a.currentTranslate < s.maxTranslate() && (E = !1,
        i.resistance && (a.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - a.startTranslate - g) ** T))),
        E && (o.preventedByNestedSwiper = !0),
        !s.allowSlideNext && "next" === s.swipeDirection && a.currentTranslate < a.startTranslate && (a.currentTranslate = a.startTranslate),
        !s.allowSlidePrev && "prev" === s.swipeDirection && a.currentTranslate > a.startTranslate && (a.currentTranslate = a.startTranslate),
        s.allowSlidePrev || s.allowSlideNext || (a.currentTranslate = a.startTranslate),
        i.threshold > 0) {
            if (!(Math.abs(g) > i.threshold || a.allowThresholdMove))
                return void (a.currentTranslate = a.startTranslate);
            if (!a.allowThresholdMove)
                return a.allowThresholdMove = !0,
                l.startX = l.currentX,
                l.startY = l.currentY,
                a.currentTranslate = a.startTranslate,
                void (l.diff = s.isHorizontal() ? l.currentX - l.startX : l.currentY - l.startY)
        }
        i.followFinger && !i.cssMode && ((i.freeMode && i.freeMode.enabled && s.freeMode || i.watchSlidesProgress) && (s.updateActiveIndex(),
        s.updateSlidesClasses()),
        s.params.freeMode && i.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(),
        s.updateProgress(a.currentTranslate),
        s.setTranslate(a.currentTranslate))
    }
    function X(e) {
        const t = this
          , s = t.touchEventsData
          , a = s.evCache.findIndex((t=>t.pointerId === e.pointerId));
        if (a >= 0 && s.evCache.splice(a, 1),
        ["pointercancel", "pointerout", "pointerleave"].includes(e.type)) {
            if (!("pointercancel" === e.type && (t.browser.isSafari || t.browser.isWebView)))
                return
        }
        const {params: i, touches: l, rtlTranslate: n, slidesGrid: r, enabled: o} = t;
        if (!o)
            return;
        if (!i.simulateTouch && "mouse" === e.pointerType)
            return;
        let c = e;
        if (c.originalEvent && (c = c.originalEvent),
        s.allowTouchCallbacks && t.emit("touchEnd", c),
        s.allowTouchCallbacks = !1,
        !s.isTouched)
            return s.isMoved && i.grabCursor && t.setGrabCursor(!1),
            s.isMoved = !1,
            void (s.startMoving = !1);
        i.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const d = b()
          , p = d - s.touchStartTime;
        if (t.allowClick) {
            const e = c.path || c.composedPath && c.composedPath();
            t.updateClickedSlide(e && e[0] || c.target),
            t.emit("tap click", c),
            p < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", c)
        }
        if (s.lastClickTime = b(),
        v((()=>{
            t.destroyed || (t.allowClick = !0)
        }
        )),
        !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === l.diff || s.currentTranslate === s.startTranslate)
            return s.isTouched = !1,
            s.isMoved = !1,
            void (s.startMoving = !1);
        let u;
        if (s.isTouched = !1,
        s.isMoved = !1,
        s.startMoving = !1,
        u = i.followFinger ? n ? t.translate : -t.translate : -s.currentTranslate,
        i.cssMode)
            return;
        if (t.params.freeMode && i.freeMode.enabled)
            return void t.freeMode.onTouchEnd({
                currentPos: u
            });
        let h = 0
          , m = t.slidesSizesGrid[0];
        for (let e = 0; e < r.length; e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
            const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
            void 0 !== r[e + t] ? u >= r[e] && u < r[e + t] && (h = e,
            m = r[e + t] - r[e]) : u >= r[e] && (h = e,
            m = r[r.length - 1] - r[r.length - 2])
        }
        let f = null
          , g = null;
        i.rewind && (t.isBeginning ? g = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (f = 0));
        const S = (u - r[h]) / m
          , y = h < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        if (p > i.longSwipesMs) {
            if (!i.longSwipes)
                return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (S >= i.longSwipesRatio ? t.slideTo(i.rewind && t.isEnd ? f : h + y) : t.slideTo(h)),
            "prev" === t.swipeDirection && (S > 1 - i.longSwipesRatio ? t.slideTo(h + y) : null !== g && S < 0 && Math.abs(S) > i.longSwipesRatio ? t.slideTo(g) : t.slideTo(h))
        } else {
            if (!i.shortSwipes)
                return void t.slideTo(t.activeIndex);
            t.navigation && (c.target === t.navigation.nextEl || c.target === t.navigation.prevEl) ? c.target === t.navigation.nextEl ? t.slideTo(h + y) : t.slideTo(h) : ("next" === t.swipeDirection && t.slideTo(null !== f ? f : h + y),
            "prev" === t.swipeDirection && t.slideTo(null !== g ? g : h))
        }
    }
    function Y() {
        const e = this
          , {params: t, el: s} = e;
        if (s && 0 === s.offsetWidth)
            return;
        t.breakpoints && e.setBreakpoint();
        const {allowSlideNext: a, allowSlidePrev: i, snapGrid: l} = e
          , n = e.virtual && e.params.virtual.enabled;
        e.allowSlideNext = !0,
        e.allowSlidePrev = !0,
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses();
        const r = n && t.loop;
        !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || r ? e.params.loop && !n ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0),
        e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout),
        e.autoplay.resizeTimeout = setTimeout((()=>{
            e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
        }
        ), 500)),
        e.allowSlidePrev = i,
        e.allowSlideNext = a,
        e.params.watchOverflow && l !== e.snapGrid && e.checkOverflow()
    }
    function U(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation && t.animating && (e.stopPropagation(),
        e.stopImmediatePropagation())))
    }
    function K() {
        const e = this
          , {wrapperEl: t, rtlTranslate: s, enabled: a} = e;
        if (!a)
            return;
        let i;
        e.previousTranslate = e.translate,
        e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop,
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
        const l = e.maxTranslate() - e.minTranslate();
        i = 0 === l ? 0 : (e.translate - e.minTranslate()) / l,
        i !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1)
    }
    function Q(e) {
        const t = this;
        D(t, e.target),
        t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
    }
    let J = !1;
    function Z() {}
    const ee = (e,t)=>{
        const s = m()
          , {params: a, el: i, wrapperEl: l, device: n} = e
          , r = !!a.nested
          , o = "on" === t ? "addEventListener" : "removeEventListener"
          , c = t;
        i[o]("pointerdown", e.onTouchStart, {
            passive: !1
        }),
        s[o]("pointermove", e.onTouchMove, {
            passive: !1,
            capture: r
        }),
        s[o]("pointerup", e.onTouchEnd, {
            passive: !0
        }),
        s[o]("pointercancel", e.onTouchEnd, {
            passive: !0
        }),
        s[o]("pointerout", e.onTouchEnd, {
            passive: !0
        }),
        s[o]("pointerleave", e.onTouchEnd, {
            passive: !0
        }),
        (a.preventClicks || a.preventClicksPropagation) && i[o]("click", e.onClick, !0),
        a.cssMode && l[o]("scroll", e.onScroll),
        a.updateOnWindowResize ? e[c](n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Y, !0) : e[c]("observerUpdate", Y, !0),
        i[o]("load", e.onLoad, {
            capture: !0
        })
    }
    ;
    const te = (e,t)=>e.grid && t.grid && t.grid.rows > 1;
    const se = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopedSlides: null,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };
    function ae(e, t) {
        return function(s={}) {
            const a = Object.keys(s)[0]
              , i = s[a];
            "object" == typeof i && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 && !0 === e[a] && (e[a] = {
                auto: !0
            }),
            a in e && "enabled"in i ? (!0 === e[a] && (e[a] = {
                enabled: !0
            }),
            "object" != typeof e[a] || "enabled"in e[a] || (e[a].enabled = !0),
            e[a] || (e[a] = {
                enabled: !1
            }),
            w(t, s)) : w(t, s)) : w(t, s)
        }
    }
    const ie = {
        eventsEmitter: B,
        update: H,
        translate: V,
        transition: {
            setTransition: function(e, t) {
                const s = this;
                s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`),
                s.emit("setTransition", e, t)
            },
            transitionStart: function(e=!0, t) {
                const s = this
                  , {params: a} = s;
                a.cssMode || (a.autoHeight && s.updateAutoHeight(),
                F({
                    swiper: s,
                    runCallbacks: e,
                    direction: t,
                    step: "Start"
                }))
            },
            transitionEnd: function(e=!0, t) {
                const s = this
                  , {params: a} = s;
                s.animating = !1,
                a.cssMode || (s.setTransition(0),
                F({
                    swiper: s,
                    runCallbacks: e,
                    direction: t,
                    step: "End"
                }))
            }
        },
        slide: N,
        loop: j,
        grabCursor: {
            setGrabCursor: function(e) {
                const t = this;
                if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)
                    return;
                const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                t.isElement && (t.__preventObserver__ = !0),
                s.style.cursor = "move",
                s.style.cursor = e ? "grabbing" : "grab",
                t.isElement && requestAnimationFrame((()=>{
                    t.__preventObserver__ = !1
                }
                ))
            },
            unsetGrabCursor: function() {
                const e = this;
                e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0),
                e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "",
                e.isElement && requestAnimationFrame((()=>{
                    e.__preventObserver__ = !1
                }
                )))
            }
        },
        events: {
            attachEvents: function() {
                const e = this
                  , t = m()
                  , {params: s} = e;
                e.onTouchStart = R.bind(e),
                e.onTouchMove = W.bind(e),
                e.onTouchEnd = X.bind(e),
                s.cssMode && (e.onScroll = K.bind(e)),
                e.onClick = U.bind(e),
                e.onLoad = Q.bind(e),
                J || (t.addEventListener("touchstart", Z),
                J = !0),
                ee(e, "on")
            },
            detachEvents: function() {
                ee(this, "off")
            }
        },
        breakpoints: {
            setBreakpoint: function() {
                const e = this
                  , {realIndex: t, initialized: s, params: a, el: i} = e
                  , l = a.breakpoints;
                if (!l || l && 0 === Object.keys(l).length)
                    return;
                const n = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
                if (!n || e.currentBreakpoint === n)
                    return;
                const r = (n in l ? l[n] : void 0) || e.originalParams
                  , o = te(e, a)
                  , c = te(e, r)
                  , d = a.enabled;
                o && !c ? (i.classList.remove(`${a.containerModifierClass}grid`, `${a.containerModifierClass}grid-column`),
                e.emitContainerClasses()) : !o && c && (i.classList.add(`${a.containerModifierClass}grid`),
                (r.grid.fill && "column" === r.grid.fill || !r.grid.fill && "column" === a.grid.fill) && i.classList.add(`${a.containerModifierClass}grid-column`),
                e.emitContainerClasses()),
                ["navigation", "pagination", "scrollbar"].forEach((t=>{
                    const s = a[t] && a[t].enabled
                      , i = r[t] && r[t].enabled;
                    s && !i && e[t].disable(),
                    !s && i && e[t].enable()
                }
                ));
                const p = r.direction && r.direction !== a.direction
                  , u = a.loop && (r.slidesPerView !== a.slidesPerView || p);
                p && s && e.changeDirection(),
                w(e.params, r);
                const h = e.params.enabled;
                Object.assign(e, {
                    allowTouchMove: e.params.allowTouchMove,
                    allowSlideNext: e.params.allowSlideNext,
                    allowSlidePrev: e.params.allowSlidePrev
                }),
                d && !h ? e.disable() : !d && h && e.enable(),
                e.currentBreakpoint = n,
                e.emit("_beforeBreakpoint", r),
                u && s && (e.loopDestroy(),
                e.loopCreate(t),
                e.updateSlides()),
                e.emit("breakpoint", r)
            },
            getBreakpoint: function(e, t="window", s) {
                if (!e || "container" === t && !s)
                    return;
                let a = !1;
                const i = g()
                  , l = "window" === t ? i.innerHeight : s.clientHeight
                  , n = Object.keys(e).map((e=>{
                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                        const t = parseFloat(e.substr(1));
                        return {
                            value: l * t,
                            point: e
                        }
                    }
                    return {
                        value: e,
                        point: e
                    }
                }
                ));
                n.sort(((e,t)=>parseInt(e.value, 10) - parseInt(t.value, 10)));
                for (let e = 0; e < n.length; e += 1) {
                    const {point: l, value: r} = n[e];
                    "window" === t ? i.matchMedia(`(min-width: ${r}px)`).matches && (a = l) : r <= s.clientWidth && (a = l)
                }
                return a || "max"
            }
        },
        checkOverflow: {
            checkOverflow: function() {
                const e = this
                  , {isLocked: t, params: s} = e
                  , {slidesOffsetBefore: a} = s;
                if (a) {
                    const t = e.slides.length - 1
                      , s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
                    e.isLocked = e.size > s
                } else
                    e.isLocked = 1 === e.snapGrid.length;
                !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
            }
        },
        classes: {
            addClasses: function() {
                const e = this
                  , {classNames: t, params: s, rtl: a, el: i, device: l} = e
                  , n = function(e, t) {
                    const s = [];
                    return e.forEach((e=>{
                        "object" == typeof e ? Object.keys(e).forEach((a=>{
                            e[a] && s.push(t + a)
                        }
                        )) : "string" == typeof e && s.push(t + e)
                    }
                    )),
                    s
                }(["initialized", s.direction, {
                    "free-mode": e.params.freeMode && s.freeMode.enabled
                }, {
                    autoheight: s.autoHeight
                }, {
                    rtl: a
                }, {
                    grid: s.grid && s.grid.rows > 1
                }, {
                    "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
                }, {
                    android: l.android
                }, {
                    ios: l.ios
                }, {
                    "css-mode": s.cssMode
                }, {
                    centered: s.cssMode && s.centeredSlides
                }, {
                    "watch-progress": s.watchSlidesProgress
                }], s.containerModifierClass);
                t.push(...n),
                i.classList.add(...t),
                e.emitContainerClasses()
            },
            removeClasses: function() {
                const {el: e, classNames: t} = this;
                e.classList.remove(...t),
                this.emitContainerClasses()
            }
        }
    }
      , le = {};
    class ne {
        constructor(...e) {
            let t, s;
            1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? s = e[0] : [t,s] = e,
            s || (s = {}),
            s = w({}, s),
            t && !s.el && (s.el = t);
            const a = m();
            if (s.el && "string" == typeof s.el && a.querySelectorAll(s.el).length > 1) {
                const e = [];
                return a.querySelectorAll(s.el).forEach((t=>{
                    const a = w({}, s, {
                        el: t
                    });
                    e.push(new ne(a))
                }
                )),
                e
            }
            const i = this;
            i.__swiper__ = !0,
            i.support = I(),
            i.device = $({
                userAgent: s.userAgent
            }),
            i.browser = z(),
            i.eventsListeners = {},
            i.eventsAnyListeners = [],
            i.modules = [...i.__modules__],
            s.modules && Array.isArray(s.modules) && i.modules.push(...s.modules);
            const l = {};
            i.modules.forEach((e=>{
                e({
                    params: s,
                    swiper: i,
                    extendParams: ae(s, l),
                    on: i.on.bind(i),
                    once: i.once.bind(i),
                    off: i.off.bind(i),
                    emit: i.emit.bind(i)
                })
            }
            ));
            const n = w({}, se, l);
            return i.params = w({}, n, le, s),
            i.originalParams = w({}, i.params),
            i.passedParams = w({}, s),
            i.params && i.params.on && Object.keys(i.params.on).forEach((e=>{
                i.on(e, i.params.on[e])
            }
            )),
            i.params && i.params.onAny && i.onAny(i.params.onAny),
            Object.assign(i, {
                enabled: i.params.enabled,
                el: t,
                classNames: [],
                slides: [],
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: ()=>"horizontal" === i.params.direction,
                isVertical: ()=>"vertical" === i.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                cssOverflowAdjustment() {
                    return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
                },
                allowSlideNext: i.params.allowSlideNext,
                allowSlidePrev: i.params.allowSlidePrev,
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: i.params.focusableElements,
                    lastClickTime: 0,
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    startMoving: void 0,
                    evCache: []
                },
                allowClick: !0,
                allowTouchMove: i.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }),
            i.emit("_swiper"),
            i.params.init && i.init(),
            i
        }
        getSlideIndex(e) {
            const {slidesEl: t, params: s} = this
              , a = A(C(t, `.${s.slideClass}, swiper-slide`)[0]);
            return A(e) - a
        }
        getSlideIndexByData(e) {
            return this.getSlideIndex(this.slides.filter((t=>1 * t.getAttribute("data-swiper-slide-index") === e))[0])
        }
        recalcSlides() {
            const {slidesEl: e, params: t} = this;
            this.slides = C(e, `.${t.slideClass}, swiper-slide`)
        }
        enable() {
            const e = this;
            e.enabled || (e.enabled = !0,
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"))
        }
        disable() {
            const e = this;
            e.enabled && (e.enabled = !1,
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"))
        }
        setProgress(e, t) {
            const s = this;
            e = Math.min(Math.max(e, 0), 1);
            const a = s.minTranslate()
              , i = (s.maxTranslate() - a) * e + a;
            s.translateTo(i, void 0 === t ? 0 : t),
            s.updateActiveIndex(),
            s.updateSlidesClasses()
        }
        emitContainerClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el)
                return;
            const t = e.el.className.split(" ").filter((t=>0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
            e.emit("_containerClasses", t.join(" "))
        }
        getSlideClasses(e) {
            const t = this;
            return t.destroyed ? "" : e.className.split(" ").filter((e=>0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
        }
        emitSlidesClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el)
                return;
            const t = [];
            e.slides.forEach((s=>{
                const a = e.getSlideClasses(s);
                t.push({
                    slideEl: s,
                    classNames: a
                }),
                e.emit("_slideClass", s, a)
            }
            )),
            e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e="current", t=!1) {
            const {params: s, slides: a, slidesGrid: i, slidesSizesGrid: l, size: n, activeIndex: r} = this;
            let o = 1;
            if (s.centeredSlides) {
                let e, t = a[r].swiperSlideSize;
                for (let s = r + 1; s < a.length; s += 1)
                    a[s] && !e && (t += a[s].swiperSlideSize,
                    o += 1,
                    t > n && (e = !0));
                for (let s = r - 1; s >= 0; s -= 1)
                    a[s] && !e && (t += a[s].swiperSlideSize,
                    o += 1,
                    t > n && (e = !0))
            } else if ("current" === e)
                for (let e = r + 1; e < a.length; e += 1) {
                    (t ? i[e] + l[e] - i[r] < n : i[e] - i[r] < n) && (o += 1)
                }
            else
                for (let e = r - 1; e >= 0; e -= 1) {
                    i[r] - i[e] < n && (o += 1)
                }
            return o
        }
        update() {
            const e = this;
            if (!e || e.destroyed)
                return;
            const {snapGrid: t, params: s} = e;
            function a() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate
                  , s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(s),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
            }
            let i;
            if (s.breakpoints && e.setBreakpoint(),
            [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t=>{
                t.complete && D(e, t)
            }
            )),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.params.freeMode && e.params.freeMode.enabled)
                a(),
                e.params.autoHeight && e.updateAutoHeight();
            else {
                if (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides) {
                    const t = e.virtual && e.params.virtual.enabled ? e.virtual.slides : e.slides;
                    i = e.slideTo(t.length - 1, 0, !1, !0)
                } else
                    i = e.slideTo(e.activeIndex, 0, !1, !0);
                i || a()
            }
            s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update")
        }
        changeDirection(e, t=!0) {
            const s = this
              , a = s.params.direction;
            return e || (e = "horizontal" === a ? "vertical" : "horizontal"),
            e === a || "horizontal" !== e && "vertical" !== e || (s.el.classList.remove(`${s.params.containerModifierClass}${a}`),
            s.el.classList.add(`${s.params.containerModifierClass}${e}`),
            s.emitContainerClasses(),
            s.params.direction = e,
            s.slides.forEach((t=>{
                "vertical" === e ? t.style.width = "" : t.style.height = ""
            }
            )),
            s.emit("changeDirection"),
            t && s.update()),
            s
        }
        changeLanguageDirection(e) {
            const t = this;
            t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e,
            t.rtlTranslate = "horizontal" === t.params.direction && t.rtl,
            t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
            t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
            t.el.dir = "ltr"),
            t.update())
        }
        mount(e) {
            const t = this;
            if (t.mounted)
                return !0;
            let s = e || t.params.el;
            if ("string" == typeof s && (s = document.querySelector(s)),
            !s)
                return !1;
            s.swiper = t,
            s.shadowEl && (t.isElement = !0);
            const a = ()=>`.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
            let i = (()=>{
                if (s && s.shadowRoot && s.shadowRoot.querySelector) {
                    return s.shadowRoot.querySelector(a())
                }
                return C(s, a())[0]
            }
            )();
            return !i && t.params.createElements && (i = x("div", t.params.wrapperClass),
            s.append(i),
            C(s, `.${t.params.slideClass}`).forEach((e=>{
                i.append(e)
            }
            ))),
            Object.assign(t, {
                el: s,
                wrapperEl: i,
                slidesEl: t.isElement ? s : i,
                mounted: !0,
                rtl: "rtl" === s.dir.toLowerCase() || "rtl" === L(s, "direction"),
                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === L(s, "direction")),
                wrongRTL: "-webkit-box" === L(i, "display")
            }),
            !0
        }
        init(e) {
            const t = this;
            if (t.initialized)
                return t;
            return !1 === t.mount(e) || (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
            t.params.loop && t.loopCreate(),
            t.attachEvents(),
            [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e=>{
                e.complete ? D(t, e) : e.addEventListener("load", (e=>{
                    D(t, e.target)
                }
                ))
            }
            )),
            q(t),
            t.initialized = !0,
            q(t),
            t.emit("init"),
            t.emit("afterInit")),
            t
        }
        destroy(e=!0, t=!0) {
            const s = this
              , {params: a, el: i, wrapperEl: l, slides: n} = s;
            return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"),
            s.initialized = !1,
            s.detachEvents(),
            a.loop && s.loopDestroy(),
            t && (s.removeClasses(),
            i.removeAttribute("style"),
            l.removeAttribute("style"),
            n && n.length && n.forEach((e=>{
                e.classList.remove(a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass),
                e.removeAttribute("style"),
                e.removeAttribute("data-swiper-slide-index")
            }
            ))),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach((e=>{
                s.off(e)
            }
            )),
            !1 !== e && (s.el.swiper = null,
            function(e) {
                const t = e;
                Object.keys(t).forEach((e=>{
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                }
                ))
            }(s)),
            s.destroyed = !0),
            null
        }
        static extendDefaults(e) {
            w(le, e)
        }
        static get extendedDefaults() {
            return le
        }
        static get defaults() {
            return se
        }
        static installModule(e) {
            ne.prototype.__modules__ || (ne.prototype.__modules__ = []);
            const t = ne.prototype.__modules__;
            "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
            return Array.isArray(e) ? (e.forEach((e=>ne.installModule(e))),
            ne) : (ne.installModule(e),
            ne)
        }
    }
    Object.keys(ie).forEach((e=>{
        Object.keys(ie[e]).forEach((t=>{
            ne.prototype[t] = ie[e][t]
        }
        ))
    }
    )),
    ne.use([function({swiper: e, on: t, emit: s}) {
        const a = g();
        let i = null
          , l = null;
        const n = ()=>{
            e && !e.destroyed && e.initialized && (s("beforeResize"),
            s("resize"))
        }
          , r = ()=>{
            e && !e.destroyed && e.initialized && s("orientationchange")
        }
        ;
        t("init", (()=>{
            e.params.resizeObserver && void 0 !== a.ResizeObserver ? e && !e.destroyed && e.initialized && (i = new ResizeObserver((t=>{
                l = a.requestAnimationFrame((()=>{
                    const {width: s, height: a} = e;
                    let i = s
                      , l = a;
                    t.forEach((({contentBoxSize: t, contentRect: s, target: a})=>{
                        a && a !== e.el || (i = s ? s.width : (t[0] || t).inlineSize,
                        l = s ? s.height : (t[0] || t).blockSize)
                    }
                    )),
                    i === s && l === a || n()
                }
                ))
            }
            )),
            i.observe(e.el)) : (a.addEventListener("resize", n),
            a.addEventListener("orientationchange", r))
        }
        )),
        t("destroy", (()=>{
            l && a.cancelAnimationFrame(l),
            i && i.unobserve && e.el && (i.unobserve(e.el),
            i = null),
            a.removeEventListener("resize", n),
            a.removeEventListener("orientationchange", r)
        }
        ))
    }
    , function({swiper: e, extendParams: t, on: s, emit: a}) {
        const i = []
          , l = g()
          , n = (t,s={})=>{
            const n = new (l.MutationObserver || l.WebkitMutationObserver)((t=>{
                if (e.__preventObserver__)
                    return;
                if (1 === t.length)
                    return void a("observerUpdate", t[0]);
                const s = function() {
                    a("observerUpdate", t[0])
                };
                l.requestAnimationFrame ? l.requestAnimationFrame(s) : l.setTimeout(s, 0)
            }
            ));
            n.observe(t, {
                attributes: void 0 === s.attributes || s.attributes,
                childList: void 0 === s.childList || s.childList,
                characterData: void 0 === s.characterData || s.characterData
            }),
            i.push(n)
        }
        ;
        t({
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        }),
        s("init", (()=>{
            if (e.params.observer) {
                if (e.params.observeParents) {
                    const t = P(e.el);
                    for (let e = 0; e < t.length; e += 1)
                        n(t[e])
                }
                n(e.el, {
                    childList: e.params.observeSlideChildren
                }),
                n(e.wrapperEl, {
                    attributes: !1
                })
            }
        }
        )),
        s("destroy", (()=>{
            i.forEach((e=>{
                e.disconnect()
            }
            )),
            i.splice(0, i.length)
        }
        ))
    }
    ]);
    const re = ne;
    function oe(e, t, s, a) {
        return e.params.createElements && Object.keys(a).forEach((i=>{
            if (!s[i] && !0 === s.auto) {
                let l = C(e.el, `.${a[i]}`)[0];
                l || (l = x("div", a[i]),
                l.className = a[i],
                e.el.append(l)),
                s[i] = l,
                t[i] = l
            }
        }
        )),
        s
    }
    function ce({swiper: e, extendParams: t, on: s, emit: a}) {
        t({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock",
                navigationDisabledClass: "swiper-navigation-disabled"
            }
        }),
        e.navigation = {
            nextEl: null,
            prevEl: null
        };
        const i = e=>(Array.isArray(e) || (e = [e].filter((e=>!!e))),
        e);
        function l(t) {
            let s;
            return t && "string" == typeof t && e.isElement && (s = e.el.shadowRoot.querySelector(t),
            s) ? s : (t && ("string" == typeof t && (s = [...document.querySelectorAll(t)]),
            e.params.uniqueNavElements && "string" == typeof t && s.length > 1 && 1 === e.el.querySelectorAll(t).length && (s = e.el.querySelector(t))),
            t && !s ? t : s)
        }
        function n(t, s) {
            const a = e.params.navigation;
            (t = i(t)).forEach((t=>{
                t && (t.classList[s ? "add" : "remove"](...a.disabledClass.split(" ")),
                "BUTTON" === t.tagName && (t.disabled = s),
                e.params.watchOverflow && e.enabled && t.classList[e.isLocked ? "add" : "remove"](a.lockClass))
            }
            ))
        }
        function r() {
            const {nextEl: t, prevEl: s} = e.navigation;
            if (e.params.loop)
                return n(s, !1),
                void n(t, !1);
            n(s, e.isBeginning && !e.params.rewind),
            n(t, e.isEnd && !e.params.rewind)
        }
        function o(t) {
            t.preventDefault(),
            (!e.isBeginning || e.params.loop || e.params.rewind) && (e.slidePrev(),
            a("navigationPrev"))
        }
        function c(t) {
            t.preventDefault(),
            (!e.isEnd || e.params.loop || e.params.rewind) && (e.slideNext(),
            a("navigationNext"))
        }
        function d() {
            const t = e.params.navigation;
            if (e.params.navigation = oe(e, e.originalParams.navigation, e.params.navigation, {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev"
            }),
            !t.nextEl && !t.prevEl)
                return;
            let s = l(t.nextEl)
              , a = l(t.prevEl);
            Object.assign(e.navigation, {
                nextEl: s,
                prevEl: a
            }),
            s = i(s),
            a = i(a);
            const n = (s,a)=>{
                s && s.addEventListener("click", "next" === a ? c : o),
                !e.enabled && s && s.classList.add(...t.lockClass.split(" "))
            }
            ;
            s.forEach((e=>n(e, "next"))),
            a.forEach((e=>n(e, "prev")))
        }
        function p() {
            let {nextEl: t, prevEl: s} = e.navigation;
            t = i(t),
            s = i(s);
            const a = (t,s)=>{
                t.removeEventListener("click", "next" === s ? c : o),
                t.classList.remove(...e.params.navigation.disabledClass.split(" "))
            }
            ;
            t.forEach((e=>a(e, "next"))),
            s.forEach((e=>a(e, "prev")))
        }
        s("init", (()=>{
            !1 === e.params.navigation.enabled ? u() : (d(),
            r())
        }
        )),
        s("toEdge fromEdge lock unlock", (()=>{
            r()
        }
        )),
        s("destroy", (()=>{
            p()
        }
        )),
        s("enable disable", (()=>{
            let {nextEl: t, prevEl: s} = e.navigation;
            t = i(t),
            s = i(s),
            [...t, ...s].filter((e=>!!e)).forEach((t=>t.classList[e.enabled ? "remove" : "add"](e.params.navigation.lockClass)))
        }
        )),
        s("click", ((t,s)=>{
            let {nextEl: l, prevEl: n} = e.navigation;
            l = i(l),
            n = i(n);
            const r = s.target;
            if (e.params.navigation.hideOnClick && !n.includes(r) && !l.includes(r)) {
                if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === r || e.pagination.el.contains(r)))
                    return;
                let t;
                l.length ? t = l[0].classList.contains(e.params.navigation.hiddenClass) : n.length && (t = n[0].classList.contains(e.params.navigation.hiddenClass)),
                a(!0 === t ? "navigationShow" : "navigationHide"),
                [...l, ...n].filter((e=>!!e)).forEach((t=>t.classList.toggle(e.params.navigation.hiddenClass)))
            }
        }
        ));
        const u = ()=>{
            e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),
            p()
        }
        ;
        Object.assign(e.navigation, {
            enable: ()=>{
                e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),
                d(),
                r()
            }
            ,
            disable: u,
            update: r,
            init: d,
            destroy: p
        })
    }
    function de(e="") {
        return `.${e.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`
    }
    function pe({swiper: e, extendParams: t, on: s, emit: a}) {
        const i = "swiper-pagination";
        let l;
        t({
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: e=>e,
                formatFractionTotal: e=>e,
                bulletClass: `${i}-bullet`,
                bulletActiveClass: `${i}-bullet-active`,
                modifierClass: `${i}-`,
                currentClass: `${i}-current`,
                totalClass: `${i}-total`,
                hiddenClass: `${i}-hidden`,
                progressbarFillClass: `${i}-progressbar-fill`,
                progressbarOppositeClass: `${i}-progressbar-opposite`,
                clickableClass: `${i}-clickable`,
                lockClass: `${i}-lock`,
                horizontalClass: `${i}-horizontal`,
                verticalClass: `${i}-vertical`,
                paginationDisabledClass: `${i}-disabled`
            }
        }),
        e.pagination = {
            el: null,
            bullets: []
        };
        let n = 0;
        const r = e=>(Array.isArray(e) || (e = [e].filter((e=>!!e))),
        e);
        function o() {
            return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && 0 === e.pagination.el.length
        }
        function c(t, s) {
            const {bulletActiveClass: a} = e.params.pagination;
            t && (t = t[("prev" === s ? "previous" : "next") + "ElementSibling"]) && (t.classList.add(`${a}-${s}`),
            (t = t[("prev" === s ? "previous" : "next") + "ElementSibling"]) && t.classList.add(`${a}-${s}-${s}`))
        }
        function d(t) {
            const s = t.target.closest(de(e.params.pagination.bulletClass));
            if (!s)
                return;
            t.preventDefault();
            const a = A(s) * e.params.slidesPerGroup;
            if (e.params.loop) {
                if (e.realIndex === a)
                    return;
                const t = e.getSlideIndexByData(a)
                  , s = e.getSlideIndexByData(e.realIndex);
                t > e.slides.length - e.loopedSlides && e.loopFix({
                    direction: t > s ? "next" : "prev",
                    activeSlideIndex: t,
                    slideTo: !1
                }),
                e.slideToLoop(a)
            } else
                e.slideTo(a)
        }
        function p() {
            const t = e.rtl
              , s = e.params.pagination;
            if (o())
                return;
            let i, d, p = e.pagination.el;
            p = r(p);
            const u = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
              , h = e.params.loop ? Math.ceil(u / e.params.slidesPerGroup) : e.snapGrid.length;
            if (e.params.loop ? (d = e.previousRealIndex || 0,
            i = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : void 0 !== e.snapIndex ? (i = e.snapIndex,
            d = e.previousSnapIndex) : (d = e.previousIndex || 0,
            i = e.activeIndex || 0),
            "bullets" === s.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                const a = e.pagination.bullets;
                let r, o, u;
                if (s.dynamicBullets && (l = M(a[0], e.isHorizontal() ? "width" : "height", !0),
                p.forEach((t=>{
                    t.style[e.isHorizontal() ? "width" : "height"] = l * (s.dynamicMainBullets + 4) + "px"
                }
                )),
                s.dynamicMainBullets > 1 && void 0 !== d && (n += i - (d || 0),
                n > s.dynamicMainBullets - 1 ? n = s.dynamicMainBullets - 1 : n < 0 && (n = 0)),
                r = Math.max(i - n, 0),
                o = r + (Math.min(a.length, s.dynamicMainBullets) - 1),
                u = (o + r) / 2),
                a.forEach((e=>{
                    const t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e=>`${s.bulletActiveClass}${e}`))].map((e=>"string" == typeof e && e.includes(" ") ? e.split(" ") : e)).flat();
                    e.classList.remove(...t)
                }
                )),
                p.length > 1)
                    a.forEach((e=>{
                        const t = A(e);
                        t === i && e.classList.add(...s.bulletActiveClass.split(" ")),
                        s.dynamicBullets && (t >= r && t <= o && e.classList.add(...`${s.bulletActiveClass}-main`.split(" ")),
                        t === r && c(e, "prev"),
                        t === o && c(e, "next"))
                    }
                    ));
                else {
                    const e = a[i];
                    if (e && e.classList.add(...s.bulletActiveClass.split(" ")),
                    s.dynamicBullets) {
                        const e = a[r]
                          , t = a[o];
                        for (let e = r; e <= o; e += 1)
                            a[e] && a[e].classList.add(...`${s.bulletActiveClass}-main`.split(" "));
                        c(e, "prev"),
                        c(t, "next")
                    }
                }
                if (s.dynamicBullets) {
                    const i = Math.min(a.length, s.dynamicMainBullets + 4)
                      , n = (l * i - l) / 2 - u * l
                      , r = t ? "right" : "left";
                    a.forEach((t=>{
                        t.style[e.isHorizontal() ? r : "top"] = `${n}px`
                    }
                    ))
                }
            }
            p.forEach(((t,l)=>{
                if ("fraction" === s.type && (t.querySelectorAll(de(s.currentClass)).forEach((e=>{
                    e.textContent = s.formatFractionCurrent(i + 1)
                }
                )),
                t.querySelectorAll(de(s.totalClass)).forEach((e=>{
                    e.textContent = s.formatFractionTotal(h)
                }
                ))),
                "progressbar" === s.type) {
                    let a;
                    a = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                    const l = (i + 1) / h;
                    let n = 1
                      , r = 1;
                    "horizontal" === a ? n = l : r = l,
                    t.querySelectorAll(de(s.progressbarFillClass)).forEach((t=>{
                        t.style.transform = `translate3d(0,0,0) scaleX(${n}) scaleY(${r})`,
                        t.style.transitionDuration = `${e.params.speed}ms`
                    }
                    ))
                }
                "custom" === s.type && s.renderCustom ? (t.innerHTML = s.renderCustom(e, i + 1, h),
                0 === l && a("paginationRender", t)) : (0 === l && a("paginationRender", t),
                a("paginationUpdate", t)),
                e.params.watchOverflow && e.enabled && t.classList[e.isLocked ? "add" : "remove"](s.lockClass)
            }
            ))
        }
        function u() {
            const t = e.params.pagination;
            if (o())
                return;
            const s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length;
            let i = e.pagination.el;
            i = r(i);
            let l = "";
            if ("bullets" === t.type) {
                let a = e.params.loop ? Math.ceil(s / e.params.slidesPerGroup) : e.snapGrid.length;
                e.params.freeMode && e.params.freeMode.enabled && a > s && (a = s);
                for (let s = 0; s < a; s += 1)
                    t.renderBullet ? l += t.renderBullet.call(e, s, t.bulletClass) : l += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`
            }
            "fraction" === t.type && (l = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
            "progressbar" === t.type && (l = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`),
            e.pagination.bullets = [],
            i.forEach((s=>{
                "custom" !== t.type && (s.innerHTML = l || ""),
                "bullets" === t.type && e.pagination.bullets.push(...s.querySelectorAll(de(t.bulletClass)))
            }
            )),
            "custom" !== t.type && a("paginationRender", i[0])
        }
        function h() {
            e.params.pagination = oe(e, e.originalParams.pagination, e.params.pagination, {
                el: "swiper-pagination"
            });
            const t = e.params.pagination;
            if (!t.el)
                return;
            let s;
            "string" == typeof t.el && e.isElement && (s = e.el.shadowRoot.querySelector(t.el)),
            s || "string" != typeof t.el || (s = [...document.querySelectorAll(t.el)]),
            s || (s = t.el),
            s && 0 !== s.length && (e.params.uniqueNavElements && "string" == typeof t.el && Array.isArray(s) && s.length > 1 && (s = [...e.el.querySelectorAll(t.el)],
            s.length > 1 && (s = s.filter((t=>P(t, ".swiper")[0] === e.el))[0])),
            Array.isArray(s) && 1 === s.length && (s = s[0]),
            Object.assign(e.pagination, {
                el: s
            }),
            s = r(s),
            s.forEach((s=>{
                "bullets" === t.type && t.clickable && s.classList.add(t.clickableClass),
                s.classList.add(t.modifierClass + t.type),
                s.classList.add(e.isHorizontal() ? t.horizontalClass : t.verticalClass),
                "bullets" === t.type && t.dynamicBullets && (s.classList.add(`${t.modifierClass}${t.type}-dynamic`),
                n = 0,
                t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                "progressbar" === t.type && t.progressbarOpposite && s.classList.add(t.progressbarOppositeClass),
                t.clickable && s.addEventListener("click", d),
                e.enabled || s.classList.add(t.lockClass)
            }
            )))
        }
        function m() {
            const t = e.params.pagination;
            if (o())
                return;
            let s = e.pagination.el;
            s && (s = r(s),
            s.forEach((s=>{
                s.classList.remove(t.hiddenClass),
                s.classList.remove(t.modifierClass + t.type),
                s.classList.remove(e.isHorizontal() ? t.horizontalClass : t.verticalClass),
                t.clickable && s.removeEventListener("click", d)
            }
            ))),
            e.pagination.bullets && e.pagination.bullets.forEach((e=>e.classList.remove(...t.bulletActiveClass.split(" "))))
        }
        s("changeDirection", (()=>{
            if (!e.pagination || !e.pagination.el)
                return;
            const t = e.params.pagination;
            let {el: s} = e.pagination;
            s = r(s),
            s.forEach((s=>{
                s.classList.remove(t.horizontalClass, t.verticalClass),
                s.classList.add(e.isHorizontal() ? t.horizontalClass : t.verticalClass)
            }
            ))
        }
        )),
        s("init", (()=>{
            !1 === e.params.pagination.enabled ? f() : (h(),
            u(),
            p())
        }
        )),
        s("activeIndexChange", (()=>{
            void 0 === e.snapIndex && p()
        }
        )),
        s("snapIndexChange", (()=>{
            p()
        }
        )),
        s("snapGridLengthChange", (()=>{
            u(),
            p()
        }
        )),
        s("destroy", (()=>{
            m()
        }
        )),
        s("enable disable", (()=>{
            let {el: t} = e.pagination;
            t && (t = r(t),
            t.forEach((t=>t.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass))))
        }
        )),
        s("lock unlock", (()=>{
            p()
        }
        )),
        s("click", ((t,s)=>{
            const i = s.target;
            let {el: l} = e.pagination;
            if (Array.isArray(l) || (l = [l].filter((e=>!!e))),
            e.params.pagination.el && e.params.pagination.hideOnClick && l && l.length > 0 && !i.classList.contains(e.params.pagination.bulletClass)) {
                if (e.navigation && (e.navigation.nextEl && i === e.navigation.nextEl || e.navigation.prevEl && i === e.navigation.prevEl))
                    return;
                const t = l[0].classList.contains(e.params.pagination.hiddenClass);
                a(!0 === t ? "paginationShow" : "paginationHide"),
                l.forEach((t=>t.classList.toggle(e.params.pagination.hiddenClass)))
            }
        }
        ));
        const f = ()=>{
            e.el.classList.add(e.params.pagination.paginationDisabledClass);
            let {el: t} = e.pagination;
            t && (t = r(t),
            t.forEach((t=>t.classList.add(e.params.pagination.paginationDisabledClass)))),
            m()
        }
        ;
        Object.assign(e.pagination, {
            enable: ()=>{
                e.el.classList.remove(e.params.pagination.paginationDisabledClass);
                let {el: t} = e.pagination;
                t && (t = r(t),
                t.forEach((t=>t.classList.remove(e.params.pagination.paginationDisabledClass)))),
                h(),
                u(),
                p()
            }
            ,
            disable: f,
            render: u,
            update: p,
            init: h,
            destroy: m
        })
    }
    function ue({swiper: e, extendParams: t, on: s, emit: a, params: i}) {
        let l, n;
        e.autoplay = {
            running: !1,
            paused: !1,
            timeLeft: 0
        },
        t({
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1
            }
        });
        let r, o, c, d, p, u, h, f = i && i.autoplay ? i.autoplay.delay : 3e3, g = i && i.autoplay ? i.autoplay.delay : 3e3, v = (new Date).getTime;
        function b(t) {
            e && !e.destroyed && e.wrapperEl && t.target === e.wrapperEl && (e.wrapperEl.removeEventListener("transitionend", b),
            C())
        }
        const S = ()=>{
            if (e.destroyed || !e.autoplay.running)
                return;
            e.autoplay.paused ? o = !0 : o && (g = r,
            o = !1);
            const t = e.autoplay.paused ? r : v + g - (new Date).getTime();
            e.autoplay.timeLeft = t,
            a("autoplayTimeLeft", t, t / f),
            n = requestAnimationFrame((()=>{
                S()
            }
            ))
        }
          , y = t=>{
            if (e.destroyed || !e.autoplay.running)
                return;
            cancelAnimationFrame(n),
            S();
            let s = void 0 === t ? e.params.autoplay.delay : t;
            f = e.params.autoplay.delay,
            g = e.params.autoplay.delay;
            const i = (()=>{
                let t;
                if (t = e.virtual && e.params.virtual.enabled ? e.slides.filter((e=>e.classList.contains("swiper-slide-active")))[0] : e.slides[e.activeIndex],
                !t)
                    return;
                return parseInt(t.getAttribute("data-swiper-autoplay"), 10)
            }
            )();
            !Number.isNaN(i) && i > 0 && void 0 === t && (s = i,
            f = i,
            g = i),
            r = s;
            const o = e.params.speed
              , c = ()=>{
                e && !e.destroyed && (e.params.autoplay.reverseDirection ? !e.isBeginning || e.params.loop || e.params.rewind ? (e.slidePrev(o, !0, !0),
                a("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(e.slides.length - 1, o, !0, !0),
                a("autoplay")) : !e.isEnd || e.params.loop || e.params.rewind ? (e.slideNext(o, !0, !0),
                a("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(0, o, !0, !0),
                a("autoplay")),
                e.params.cssMode && (v = (new Date).getTime(),
                requestAnimationFrame((()=>{
                    y()
                }
                ))))
            }
            ;
            return s > 0 ? (clearTimeout(l),
            l = setTimeout((()=>{
                c()
            }
            ), s)) : requestAnimationFrame((()=>{
                c()
            }
            )),
            s
        }
          , w = ()=>{
            e.autoplay.running = !0,
            y(),
            a("autoplayStart")
        }
          , E = ()=>{
            e.autoplay.running = !1,
            clearTimeout(l),
            cancelAnimationFrame(n),
            a("autoplayStop")
        }
          , T = (t,s)=>{
            if (e.destroyed || !e.autoplay.running)
                return;
            clearTimeout(l),
            t || (h = !0);
            const i = ()=>{
                a("autoplayPause"),
                e.params.autoplay.waitForTransition ? e.wrapperEl.addEventListener("transitionend", b) : C()
            }
            ;
            if (e.autoplay.paused = !0,
            s)
                return u && (r = e.params.autoplay.delay),
                u = !1,
                void i();
            const n = r || e.params.autoplay.delay;
            r = n - ((new Date).getTime() - v),
            e.isEnd && r < 0 && !e.params.loop || (r < 0 && (r = 0),
            i())
        }
          , C = ()=>{
            e.isEnd && r < 0 && !e.params.loop || e.destroyed || !e.autoplay.running || (v = (new Date).getTime(),
            h ? (h = !1,
            y(r)) : y(),
            e.autoplay.paused = !1,
            a("autoplayResume"))
        }
          , x = ()=>{
            if (e.destroyed || !e.autoplay.running)
                return;
            const t = m();
            "hidden" === t.visibilityState && (h = !0,
            T(!0)),
            "visible" === t.visibilityState && C()
        }
          , L = e=>{
            "mouse" === e.pointerType && (h = !0,
            T(!0))
        }
          , A = t=>{
            "mouse" === t.pointerType && e.autoplay.paused && C()
        }
        ;
        s("init", (()=>{
            e.params.autoplay.enabled && (e.params.autoplay.pauseOnMouseEnter && (e.el.addEventListener("pointerenter", L),
            e.el.addEventListener("pointerleave", A)),
            m().addEventListener("visibilitychange", x),
            v = (new Date).getTime(),
            w())
        }
        )),
        s("destroy", (()=>{
            e.el.removeEventListener("pointerenter", L),
            e.el.removeEventListener("pointerleave", A),
            m().removeEventListener("visibilitychange", x),
            e.autoplay.running && E()
        }
        )),
        s("beforeTransitionStart", ((t,s,a)=>{
            !e.destroyed && e.autoplay.running && (a || !e.params.autoplay.disableOnInteraction ? T(!0, !0) : E())
        }
        )),
        s("sliderFirstMove", (()=>{
            !e.destroyed && e.autoplay.running && (e.params.autoplay.disableOnInteraction ? E() : (c = !0,
            d = !1,
            h = !1,
            p = setTimeout((()=>{
                h = !0,
                d = !0,
                T(!0)
            }
            ), 200)))
        }
        )),
        s("touchEnd", (()=>{
            if (!e.destroyed && e.autoplay.running && c) {
                if (clearTimeout(p),
                clearTimeout(l),
                e.params.autoplay.disableOnInteraction)
                    return d = !1,
                    void (c = !1);
                d && e.params.cssMode && C(),
                d = !1,
                c = !1
            }
        }
        )),
        s("slideChange", (()=>{
            !e.destroyed && e.autoplay.running && (u = !0)
        }
        )),
        Object.assign(e.autoplay, {
            start: w,
            stop: E,
            pause: T,
            resume: C
        })
    }
    window.addEventListener("load", (function(e) {
        document.querySelector(".main__slider") && new re(".main__slider",{
            modules: [ce, pe, ue],
            observer: !0,
            observeParents: !0,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: !0,
            speed: 800,
            spaceBetween: 20,
            autoplay: {
                delay: 3200,
                disableOnInteraction: !1
            },
            pagination: {
                el: ".main__pagination",
                clickable: !0,
                type: "bullets"
            },
            navigation: {
                prevEl: ".main__button-prev",
                nextEl: ".main__button-next"
            },
            on: {}
        }),
        document.querySelector(".clients__slider") && new re(".clients__slider",{
            modules: [ce],
            observer: !0,
            observeParents: !0,
            slidesPerView: 6,
            spaceBetween: 60,
            autoHeight: !0,
            speed: 800,
            breakpoints: {
                290: {
                    slidesPerView: 2.1,
                    spaceBetween: 30
                },
                400: {
                    slidesPerView: 3.2
                },
                550: {
                    slidesPerView: 4,
                    spaceBetween: 30
                },
                1e3: {
                    slidesPerView: 6,
                    spaceBetween: 40
                }
            }
        }),
        document.querySelector(".new__slider") && new re(".new__slider",{
            modules: [ce],
            observer: !0,
            observeParents: !0,
            slidesPerView: 3,
            spaceBetween: 50,
            autoHeight: !0,
            speed: 800,
            breakpoints: {
                320: {
                    slidesPerView: 1.1,
                    autoHeight: !0,
                    spaceBetween: 20
                },
                400: {
                    slidesPerView: 1.3
                },
                600: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20
                }
            }
        }),
        document.querySelector(".trending__slider") && new re(".trending__slider",{
            modules: [ce, pe, ue],
            observer: !0,
            observeParents: !0,
            slidesPerView: 3,
            spaceBetween: 50,
            autoHeight: !0,
            speed: 800,
            autoplay: {
                delay: 3200,
                disableOnInteraction: !1
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    autoHeight: !1,
                    spaceBetween: 0
                },
                400: {
                    slidesPerView: 1.2,
                    spaceBetween: 20
                },
                600: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20
                }
            },
            pagination: {
                el: ".trending__pagination",
                clickable: !0,
                type: "bullets",
                dynamicBullets: !0,
                dynamicMainBullets: 3
            }
        }),
        document.querySelector(".new__slider") && new re(".new__slider",{
            modules: [ce],
            observer: !0,
            observeParents: !0,
            slidesPerView: 3,
            spaceBetween: 50,
            autoHeight: !0,
            speed: 800,
            breakpoints: {
                320: {
                    slidesPerView: 1.1,
                    autoHeight: !0,
                    spaceBetween: 20
                },
                400: {
                    slidesPerView: 1.3
                },
                600: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20
                }
            }
        }),
        document.querySelector(".testimonials__slider") && new re(".testimonials__slider",{
            modules: [ce, pe],
            slidesPerView: 1,
            spaceBetween: 50,
            autoHeight: !1,
            speed: 800,
            direction: "vertical",
            navigation: {
                prevEl: " .testimonials__button_prev",
                nextEl: ".testimonials__button_next"
            },
            pagination: {
                el: ".testimonials__gotts",
                clickable: !0,
                type: "bullets"
            }
        })
    }
    ));
    let he = !1;
    setTimeout((()=>{
        if (he) {
            let e = new Event("windowScroll");
            window.addEventListener("scroll", (function(t) {
                document.dispatchEvent(e)
            }
            ))
        }
    }
    ), 0);
    new class {
        constructor(e) {
            this.type = e
        }
        init() {
            this.оbjects = [],
            this.daClassname = "_dynamic_adapt_",
            this.nodes = [...document.querySelectorAll("[data-da]")],
            this.nodes.forEach((e=>{
                const t = e.dataset.da.trim().split(",")
                  , s = {};
                s.element = e,
                s.parent = e.parentNode,
                s.destination = document.querySelector(`${t[0].trim()}`),
                s.breakpoint = t[1] ? t[1].trim() : "767",
                s.place = t[2] ? t[2].trim() : "last",
                s.index = this.indexInParent(s.parent, s.element),
                this.оbjects.push(s)
            }
            )),
            this.arraySort(this.оbjects),
            this.mediaQueries = this.оbjects.map((({breakpoint: e})=>`(${this.type}-width: ${e}px),${e}`)).filter(((e,t,s)=>s.indexOf(e) === t)),
            this.mediaQueries.forEach((e=>{
                const t = e.split(",")
                  , s = window.matchMedia(t[0])
                  , a = t[1]
                  , i = this.оbjects.filter((({breakpoint: e})=>e === a));
                s.addEventListener("change", (()=>{
                    this.mediaHandler(s, i)
                }
                )),
                this.mediaHandler(s, i)
            }
            ))
        }
        mediaHandler(e, t) {
            e.matches ? t.forEach((e=>{
                this.moveTo(e.place, e.element, e.destination)
            }
            )) : t.forEach((({parent: e, element: t, index: s})=>{
                t.classList.contains(this.daClassname) && this.moveBack(e, t, s)
            }
            ))
        }
        moveTo(e, t, s) {
            t.classList.add(this.daClassname),
            "last" === e || e >= s.children.length ? s.append(t) : "first" !== e ? s.children[e].before(t) : s.prepend(t)
        }
        moveBack(e, t, s) {
            t.classList.remove(this.daClassname),
            void 0 !== e.children[s] ? e.children[s].before(t) : e.append(t)
        }
        indexInParent(e, t) {
            return [...e.children].indexOf(t)
        }
        arraySort(e) {
            "min" === this.type ? e.sort(((e,t)=>e.breakpoint === t.breakpoint ? e.place === t.place ? 0 : "first" === e.place || "last" === t.place ? -1 : "last" === e.place || "first" === t.place ? 1 : 0 : e.breakpoint - t.breakpoint)) : e.sort(((e,t)=>e.breakpoint === t.breakpoint ? e.place === t.place ? 0 : "first" === e.place || "last" === t.place ? 1 : "last" === e.place || "first" === t.place ? -1 : 0 : t.breakpoint - e.breakpoint))
        }
    }
    ("max").init(),
    window.FLS = !0,
    function(e) {
        let t = new Image;
        t.onload = t.onerror = function() {
            e(2 == t.height)
        }
        ,
        t.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
    }((function(e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t)
    }
    )),
    document.querySelector(".icon-menu") && document.addEventListener("click", (function(e) {
        i && e.target.closest(".icon-menu") && (((e=500)=>{
            document.documentElement.classList.contains("lock") ? l(e) : n(e)
        }
        )(),
        document.documentElement.classList.toggle("menu-open"))
    }
    )),
    function() {
        const e = document.querySelectorAll("[data-spollers]");
        if (e.length > 0) {
            document.addEventListener("click", r);
            const s = Array.from(e).filter((function(e, t, s) {
                return !e.dataset.spollers.split(",")[0]
            }
            ));
            s.length && l(s);
            let i = o(e, "spollers");
            function l(e, t=!1) {
                e.forEach((e=>{
                    e = t ? e.item : e,
                    t.matches || !t ? (e.classList.add("_spoller-init"),
                    n(e)) : (e.classList.remove("_spoller-init"),
                    n(e, !1))
                }
                ))
            }
            function n(e, t=!0) {
                let s = e.querySelectorAll("details");
                s.length && (s = Array.from(s).filter((t=>t.closest("[data-spollers]") === e)),
                s.forEach((e=>{
                    let s = e.querySelector("summary");
                    t ? (s.removeAttribute("tabindex"),
                    e.hasAttribute("data-open") ? (s.classList.add("_spoller-active"),
                    e.open = !0) : (e.open = !1,
                    s.nextElementSibling.hidden = !0)) : (s.setAttribute("tabindex", "-1"),
                    s.classList.remove("_spoller-active"),
                    e.open = !0,
                    s.nextElementSibling.hidden = !1)
                }
                )))
            }
            function r(e) {
                const s = e.target;
                if (s.closest("summary") && s.closest("[data-spollers]")) {
                    if (s.closest("[data-spollers]").classList.contains("_spoller-init")) {
                        const e = s.closest("summary")
                          , t = e.closest("details")
                          , i = e.closest("[data-spollers]")
                          , l = i.hasAttribute("data-one-spoller")
                          , n = i.dataset.spollersSpeed ? parseInt(i.dataset.spollersSpeed) : 500;
                        i.querySelectorAll("._slide").length || (l && !t.open && c(i),
                        e.classList.toggle("_spoller-active"),
                        a(e.nextElementSibling, n),
                        t.open ? setTimeout((()=>{
                            t.open = !1
                        }
                        ), n) : t.open = !0)
                    }
                    e.preventDefault()
                }
                if (!s.closest("[data-spollers]")) {
                    const e = document.querySelectorAll("[data-spoller-close]");
                    e.length && e.forEach((e=>{
                        const s = e.closest("[data-spollers]")
                          , a = e.parentNode;
                        if (s.classList.contains("_spoller-init")) {
                            const i = s.dataset.spollersSpeed ? parseInt(s.dataset.spollersSpeed) : 500;
                            e.classList.remove("_spoller-active"),
                            t(e.nextElementSibling, i),
                            setTimeout((()=>{
                                a.open = !1
                            }
                            ), i)
                        }
                    }
                    ))
                }
            }
            function c(e) {
                const s = e.querySelector("details[open]");
                if (s && !e.querySelectorAll("._slide").length) {
                    const a = s.querySelector("summary")
                      , i = e.dataset.spollersSpeed ? parseInt(e.dataset.spollersSpeed) : 500;
                    a.classList.remove("_spoller-active"),
                    t(a.nextElementSibling, i),
                    setTimeout((()=>{
                        s.open = !1
                    }
                    ), i)
                }
            }
            i && i.length && i.forEach((e=>{
                e.matchMedia.addEventListener("change", (function() {
                    l(e.itemsArray, e.matchMedia)
                }
                )),
                l(e.itemsArray, e.matchMedia)
            }
            ))
        }
    }(),
    function() {
        const e = document.querySelectorAll("[data-tabs]");
        let a = [];
        if (e.length > 0) {
            const t = function() {
                if (location.hash)
                    return location.hash.replace("#", "")
            }();
            t && t.startsWith("tab-") && (a = t.replace("tab-", "").split("-")),
            e.forEach(((e,t)=>{
                e.classList.add("_tab-init"),
                e.setAttribute("data-tabs-index", t),
                e.addEventListener("click", n),
                function(e) {
                    let t = e.querySelectorAll("[data-tabs-titles]>*")
                      , s = e.querySelectorAll("[data-tabs-body]>*");
                    const i = e.dataset.tabsIndex
                      , l = a[0] == i;
                    if (l) {
                        const t = e.querySelector("[data-tabs-titles]>._tab-active");
                        t && t.classList.remove("_tab-active")
                    }
                    s.length && (s = Array.from(s).filter((t=>t.closest("[data-tabs]") === e)),
                    t = Array.from(t).filter((t=>t.closest("[data-tabs]") === e)),
                    s.forEach(((e,s)=>{
                        t[s].setAttribute("data-tabs-title", ""),
                        e.setAttribute("data-tabs-item", ""),
                        l && s == a[1] && t[s].classList.add("_tab-active"),
                        e.hidden = !t[s].classList.contains("_tab-active")
                    }
                    )))
                }(e)
            }
            ));
            let s = o(e, "tabs");
            s && s.length && s.forEach((e=>{
                e.matchMedia.addEventListener("change", (function() {
                    i(e.itemsArray, e.matchMedia)
                }
                )),
                i(e.itemsArray, e.matchMedia)
            }
            ))
        }
        function i(e, t) {
            e.forEach((e=>{
                let s = (e = e.item).querySelector("[data-tabs-titles]")
                  , a = e.querySelectorAll("[data-tabs-title]")
                  , i = e.querySelector("[data-tabs-body]")
                  , l = e.querySelectorAll("[data-tabs-item]");
                a = Array.from(a).filter((t=>t.closest("[data-tabs]") === e)),
                l = Array.from(l).filter((t=>t.closest("[data-tabs]") === e)),
                l.forEach(((l,n)=>{
                    t.matches ? (i.append(a[n]),
                    i.append(l),
                    e.classList.add("_tab-spoller")) : (s.append(a[n]),
                    e.classList.remove("_tab-spoller"))
                }
                ))
            }
            ))
        }
        function l(e) {
            let a = e.querySelectorAll("[data-tabs-title]")
              , i = e.querySelectorAll("[data-tabs-item]");
            const l = e.dataset.tabsIndex;
            const n = function(e) {
                if (e.hasAttribute("data-tabs-animate"))
                    return e.dataset.tabsAnimate > 0 ? Number(e.dataset.tabsAnimate) : 500
            }(e);
            if (i.length > 0) {
                const r = e.hasAttribute("data-tabs-hash");
                i = Array.from(i).filter((t=>t.closest("[data-tabs]") === e)),
                a = Array.from(a).filter((t=>t.closest("[data-tabs]") === e)),
                i.forEach(((e,i)=>{
                    var o;
                    a[i].classList.contains("_tab-active") ? (n ? s(e, n) : e.hidden = !1,
                    r && !e.closest(".popup") && (o = (o = `tab-${l}-${i}`) ? `#${o}` : window.location.href.split("#")[0],
                    history.pushState("", "", o))) : n ? t(e, n) : e.hidden = !0
                }
                ))
            }
        }
        function n(e) {
            const t = e.target;
            if (t.closest("[data-tabs-title]")) {
                const s = t.closest("[data-tabs-title]")
                  , a = s.closest("[data-tabs]");
                if (!s.classList.contains("_tab-active") && !a.querySelector("._slide")) {
                    let e = a.querySelectorAll("[data-tabs-title]._tab-active");
                    e.length && (e = Array.from(e).filter((e=>e.closest("[data-tabs]") === a))),
                    e.length && e[0].classList.remove("_tab-active"),
                    s.classList.add("_tab-active"),
                    l(a)
                }
                e.preventDefault()
            }
        }
    }(),
    function(e={
        viewPass: !1,
        autoHeight: !1
    }) {
        if (document.body.addEventListener("focusin", (function(e) {
            const t = e.target;
            "INPUT" !== t.tagName && "TEXTAREA" !== t.tagName || (t.hasAttribute("data-no-focus-classes") || (t.classList.add("_form-focus"),
            t.parentElement.classList.add("_form-focus")),
            d.removeError(t),
            t.hasAttribute("data-validate") && d.removeError(t))
        }
        )),
        document.body.addEventListener("focusout", (function(e) {
            const t = e.target;
            "INPUT" !== t.tagName && "TEXTAREA" !== t.tagName || (t.hasAttribute("data-no-focus-classes") || (t.classList.remove("_form-focus"),
            t.parentElement.classList.remove("_form-focus")),
            t.hasAttribute("data-validate") && d.validateInput(t))
        }
        )),
        e.viewPass && document.addEventListener("click", (function(e) {
            let t = e.target;
            if (t.closest('[class*="__viewpass"]')) {
                let e = t.classList.contains("_viewpass-active") ? "password" : "text";
                t.parentElement.querySelector("input").setAttribute("type", e),
                t.classList.toggle("_viewpass-active")
            }
        }
        )),
        e.autoHeight) {
            const t = document.querySelectorAll("textarea[data-autoheight]");
            if (t.length) {
                function s(e, t) {
                    e.style.height = `${t}px`
                }
                t.forEach((e=>{
                    const t = e.hasAttribute("data-autoheight-min") ? Number(e.dataset.autoheightMin) : Number(e.offsetHeight)
                      , a = e.hasAttribute("data-autoheight-max") ? Number(e.dataset.autoheightMax) : 1 / 0;
                    s(e, Math.min(t, a)),
                    e.addEventListener("input", (()=>{
                        e.scrollHeight > t && (e.style.height = "auto",
                        s(e, Math.min(Math.max(e.scrollHeight, t), a)))
                    }
                    ))
                }
                ))
            }
        }
    }({
        viewPass: !1,
        autoHeight: !1
    }),
    function() {
        const t = document.forms;
        if (t.length)
            for (const e of t)
                e.addEventListener("submit", (function(e) {
                    s(e.target, e)
                }
                )),
                e.addEventListener("reset", (function(e) {
                    const t = e.target;
                    d.formClean(t)
                }
                ));
        async function s(e, t) {
            if (0 === (e.hasAttribute("data-no-validate") ? 0 : d.getErrors(e))) {
                if (e.hasAttribute("data-ajax")) {
                    t.preventDefault();
                    const s = e.getAttribute("action") ? e.getAttribute("action").trim() : "#"
                      , i = e.getAttribute("method") ? e.getAttribute("method").trim() : "GET"
                      , l = new FormData(e);
                    e.classList.add("_sending");
                    const n = await fetch(s, {
                        method: i,
                        body: l
                    });
                    if (n.ok) {
                        let t = await n.json();
                        e.classList.remove("_sending"),
                        a(e, t)
                    } else
                        alert("Помилка"),
                        e.classList.remove("_sending")
                } else
                    e.hasAttribute("data-dev") && (t.preventDefault(),
                    a(e))
            } else if (t.preventDefault(),
            e.querySelector("._form-error") && e.hasAttribute("data-goto-error")) {
                const t = e.dataset.gotoError ? e.dataset.gotoError : "._form-error";
                c(t, !0, 1e3)
            }
        }
        function a(t, s="") {
            document.dispatchEvent(new CustomEvent("formSent",{
                detail: {
                    form: t
                }
            })),
            setTimeout((()=>{
                if (e.popup) {
                    const s = t.dataset.popupMessage;
                    s && e.popup.open(s)
                }
            }
            ), 0),
            d.formClean(t),
            r(`[Форми]: ${"Форму відправлено!"}`)
        }
    }(),
    function() {
        he = !0;
        const e = document.querySelector("header.header")
          , t = e.hasAttribute("data-scroll-show")
          , s = e.dataset.scrollShow ? e.dataset.scrollShow : 500
          , a = e.dataset.scroll ? e.dataset.scroll : 1;
        let i, l = 0;
        document.addEventListener("windowScroll", (function(n) {
            const r = window.scrollY;
            clearTimeout(i),
            r >= a ? (!e.classList.contains("_header-scroll") && e.classList.add("_header-scroll"),
            t && (r > l ? e.classList.contains("_header-show") && e.classList.remove("_header-show") : !e.classList.contains("_header-show") && e.classList.add("_header-show"),
            i = setTimeout((()=>{
                !e.classList.contains("_header-show") && e.classList.add("_header-show")
            }
            ), s))) : (e.classList.contains("_header-scroll") && e.classList.remove("_header-scroll"),
            t && e.classList.contains("_header-show") && e.classList.remove("_header-show")),
            l = r <= 0 ? 0 : r
        }
        ))
    }()
}
)();
