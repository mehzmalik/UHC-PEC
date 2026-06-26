/* @ds-bundle: {"format":3,"namespace":"UnitedHealthcareDesignSystem_41f518","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Tabs","sourcePath":"components/feedback/Tabs.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"bf0e497bd4e1","components/core/Badge.jsx":"915ed99f471d","components/core/Button.jsx":"6ec9771dcd80","components/core/Card.jsx":"60b41fa74ae0","components/feedback/Alert.jsx":"c6f6d137ad01","components/feedback/Tabs.jsx":"2ddbd349db51","components/forms/Checkbox.jsx":"524be97a048e","components/forms/Input.jsx":"045ad6c13291","components/forms/RadioGroup.jsx":"e419292cf8ea","components/forms/Select.jsx":"df08e04003ac","components/forms/Switch.jsx":"e9ae287eb5f5","ui_kits/member-portal/App.jsx":"08ee2a0734a9","ui_kits/member-portal/Claims.jsx":"75ad768c92f8","ui_kits/member-portal/Dashboard.jsx":"ba795e1a8b72","ui_kits/member-portal/FindCare.jsx":"c8c9a3d923f9","ui_kits/member-portal/Login.jsx":"326243985d8a","ui_kits/member-portal/TopBar.jsx":"498383f91706"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.UnitedHealthcareDesignSystem_41f518 = window.UnitedHealthcareDesignSystem_41f518 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UHC Avatar — user/member identity chip. Initials or image.
 */
function Avatar({
  name = "",
  src = null,
  size = 40,
  tone = "brand",
  ...rest
}) {
  const tones = {
    brand: {
      bg: "var(--uhc-blue)",
      fg: "#fff"
    },
    sky: {
      bg: "var(--uhc-sky-blue)",
      fg: "var(--uhc-blue)"
    },
    gold: {
      bg: "var(--uhc-gold)",
      fg: "var(--uhc-blue)"
    }
  }[tone];
  const initials = name.split(" ").map(p => p[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: "50%",
      background: tones.bg,
      color: tones.fg,
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-bold)",
      fontSize: size * 0.4,
      overflow: "hidden",
      flex: "none"
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UHC Badge — compact status / category label.
 */
function Badge({
  children,
  tone = "neutral",
  solid = false,
  ...rest
}) {
  const tones = {
    neutral: {
      bg: "var(--uhc-gray-100)",
      fg: "var(--uhc-gray-800)",
      solidBg: "var(--uhc-gray-700)"
    },
    brand: {
      bg: "var(--uhc-blue-100)",
      fg: "var(--uhc-blue)",
      solidBg: "var(--uhc-blue)"
    },
    info: {
      bg: "var(--uhc-info-bg)",
      fg: "#066b78",
      solidBg: "var(--uhc-bright-blue)"
    },
    success: {
      bg: "var(--uhc-success-bg)",
      fg: "var(--uhc-success)",
      solidBg: "var(--uhc-success)"
    },
    warning: {
      bg: "var(--uhc-warning-bg)",
      fg: "#8a6a00",
      solidBg: "var(--uhc-gold)"
    },
    error: {
      bg: "var(--uhc-error-bg)",
      fg: "var(--uhc-error)",
      solidBg: "var(--uhc-error)"
    }
  }[tone];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-1)",
      padding: "3px 10px",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--text-xs)",
      lineHeight: 1.4,
      color: solid ? "var(--uhc-white)" : tones.fg,
      background: solid ? tones.solidBg : tones.bg,
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap"
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UHC Button — primary action component.
 * Pill-shaped, UHC Sans SemiBold. Variants map to brand intent.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = "button",
  onClick,
  ...rest
}) {
  const palette = {
    primary: {
      "--_bg": "var(--action-primary)",
      "--_bg-hover": "var(--action-primary-hover)",
      "--_bg-press": "var(--action-primary-press)",
      "--_fg": "var(--uhc-white)",
      "--_bd": "transparent"
    },
    accent: {
      "--_bg": "var(--action-accent)",
      "--_bg-hover": "var(--action-accent-hover)",
      "--_bg-press": "var(--action-accent-press)",
      "--_fg": "var(--uhc-white)",
      "--_bd": "transparent"
    },
    secondary: {
      "--_bg": "transparent",
      "--_bg-hover": "var(--uhc-blue-50)",
      "--_bg-press": "var(--uhc-blue-100)",
      "--_fg": "var(--uhc-blue)",
      "--_bd": "var(--uhc-blue)"
    },
    ghost: {
      "--_bg": "transparent",
      "--_bg-hover": "var(--uhc-blue-50)",
      "--_bg-press": "var(--uhc-blue-100)",
      "--_fg": "var(--uhc-blue)",
      "--_bd": "transparent"
    }
  }[variant] || {};
  const sizes = {
    sm: {
      padding: "8px 16px",
      fontSize: "var(--text-sm)",
      minHeight: "36px"
    },
    md: {
      padding: "11px 22px",
      fontSize: "var(--text-base)",
      minHeight: "44px"
    },
    lg: {
      padding: "14px 30px",
      fontSize: "var(--text-md)",
      minHeight: "52px"
    }
  }[size];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    className: "uhc-btn",
    style: {
      ...palette,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--space-2)",
      width: fullWidth ? "100%" : "auto",
      padding: sizes.padding,
      minHeight: sizes.minHeight,
      fontSize: sizes.fontSize,
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-semibold)",
      lineHeight: 1,
      color: "var(--_fg)",
      background: "var(--_bg)",
      border: "1.5px solid var(--_bd)",
      borderRadius: "var(--radius-button)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "var(--transition-base)",
      whiteSpace: "nowrap"
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.background = "var(--_bg-hover)";
    },
    onMouseLeave: e => {
      if (!disabled) e.currentTarget.style.background = "var(--_bg)";
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.background = "var(--_bg-press)";
    },
    onMouseUp: e => {
      if (!disabled) e.currentTarget.style.background = "var(--_bg-hover)";
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UHC Card — base surface container. White, soft shadow, rounded.
 * `accent` paints a top brand bar; `interactive` adds hover lift.
 */
function Card({
  children,
  accent = false,
  accentColor = "var(--uhc-blue)",
  interactive = false,
  padding = "var(--space-6)",
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-card)",
      boxShadow: interactive && hover ? "var(--shadow-lg)" : "var(--shadow-sm)",
      transform: interactive && hover ? "translateY(-2px)" : "none",
      transition: "var(--transition-base)",
      overflow: "hidden",
      cursor: interactive ? "pointer" : "default",
      ...style
    }
  }, rest), accent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "4px",
      background: accentColor
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding,
      paddingTop: accent ? `calc(${padding} + 4px)` : padding
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UHC Alert — inline message banner with status tone.
 */
function Alert({
  children,
  title,
  tone = "info",
  onDismiss,
  ...rest
}) {
  const tones = {
    info: {
      bg: "var(--uhc-info-bg)",
      bar: "var(--uhc-bright-blue)",
      fg: "#06616e"
    },
    success: {
      bg: "var(--uhc-success-bg)",
      bar: "var(--uhc-success)",
      fg: "#11603a"
    },
    warning: {
      bg: "var(--uhc-warning-bg)",
      bar: "var(--uhc-gold)",
      fg: "#7a5d00"
    },
    error: {
      bg: "var(--uhc-error-bg)",
      bar: "var(--uhc-error)",
      fg: "#8c281c"
    }
  }[tone];
  const icon = {
    info: "M12 16v-4 M12 8h.01",
    success: "M20 6 9 17l-5-5",
    warning: "M12 9v4 M12 17h.01",
    error: "M18 6 6 18 M6 6l12 12"
  }[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "flex",
      gap: "var(--space-3)",
      padding: "var(--space-4)",
      background: tones.bg,
      borderRadius: "var(--radius-md)",
      borderLeft: `4px solid ${tones.bar}`,
      fontFamily: "var(--font-sans)",
      color: "var(--text-primary)"
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: tones.bar,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flex: "none",
      marginTop: 1
    }
  }, tone !== "error" && tone !== "success" && /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: icon
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--text-base)",
      marginBottom: title && children ? 2 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-secondary)"
    }
  }, children)), onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--text-muted)",
      padding: 0,
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18 M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UHC Tabs — underline tab navigation.
 */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  ...rest
}) {
  const isControlled = value !== undefined;
  const first = defaultValue ?? (tabs[0] && (typeof tabs[0] === "string" ? tabs[0] : tabs[0].value));
  const [internal, setInternal] = React.useState(first);
  const active = isControlled ? value : internal;
  const pick = v => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      gap: "var(--space-6)",
      borderBottom: "1.5px solid var(--border-subtle)",
      fontFamily: "var(--font-sans)"
    }
  }, rest), tabs.map(t => {
    const tab = typeof t === "string" ? {
      value: t,
      label: t
    } : t;
    const isActive = active === tab.value;
    return /*#__PURE__*/React.createElement("button", {
      key: tab.value,
      role: "tab",
      "aria-selected": isActive,
      onClick: () => pick(tab.value),
      style: {
        position: "relative",
        background: "none",
        border: "none",
        padding: "var(--space-3) 0",
        fontFamily: "var(--font-sans)",
        fontWeight: isActive ? "var(--weight-bold)" : "var(--weight-semibold)",
        fontSize: "var(--text-base)",
        color: isActive ? "var(--uhc-blue)" : "var(--text-secondary)",
        cursor: "pointer",
        transition: "var(--transition-color)"
      }
    }, tab.label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: -1.5,
        height: 3,
        borderRadius: "3px 3px 0 0",
        background: isActive ? "var(--uhc-blue)" : "transparent",
        transition: "var(--transition-base)"
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UHC Checkbox — labeled boolean control.
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-medium)",
      fontSize: "var(--text-base)",
      color: disabled ? "var(--text-muted)" : "var(--text-primary)",
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange,
    style: {
      appearance: "none",
      width: 20,
      height: 20,
      margin: 0,
      borderRadius: "var(--radius-sm)",
      border: "1.5px solid var(--border-strong)",
      background: "var(--uhc-white)",
      display: "grid",
      placeContent: "center",
      cursor: "inherit",
      transition: "var(--transition-base)"
    }
  }, rest)), /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("style", null, `
        input[type="checkbox"]:checked {
          background: var(--uhc-blue) !important;
          border-color: var(--uhc-blue) !important;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='3.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: center;
        }
        input[type="checkbox"]:focus-visible { box-shadow: var(--ring-focus); outline: none; }
      `));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UHC Input — text field with label, helper, and error states.
 */
function Input({
  label,
  id,
  type = "text",
  placeholder = "",
  value,
  defaultValue,
  helper = "",
  error = "",
  disabled = false,
  required = false,
  onChange,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || `uhc-input-${Math.random().toString(36).slice(2, 8)}`;
  const invalid = Boolean(error);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      fontFamily: "var(--font-sans)"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-primary)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--uhc-error)"
    }
  }, " *")), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    required: required,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-medium)",
      fontSize: "var(--text-base)",
      color: "var(--text-primary)",
      padding: "11px 14px",
      background: disabled ? "var(--uhc-gray-100)" : "var(--uhc-white)",
      border: `1.5px solid ${invalid ? "var(--uhc-error)" : focus ? "var(--uhc-blue)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-input)",
      boxShadow: focus ? invalid ? "0 0 0 3px rgba(192,57,43,0.18)" : "var(--ring-focus)" : "none",
      outline: "none",
      transition: "var(--transition-base)",
      width: "100%",
      boxSizing: "border-box"
    }
  }, rest)), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: invalid ? "var(--uhc-error)" : "var(--text-muted)"
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioGroup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UHC RadioGroup — single-choice control with labeled options.
 */
function RadioGroup({
  label,
  name,
  options = [],
  value,
  defaultValue,
  onChange,
  ...rest
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const selected = isControlled ? value : internal;
  const groupName = name || `uhc-radio-${Math.random().toString(36).slice(2, 8)}`;
  const pick = (v, e) => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v, e);
  };
  return /*#__PURE__*/React.createElement("fieldset", _extends({
    style: {
      border: "none",
      margin: 0,
      padding: 0,
      fontFamily: "var(--font-sans)"
    }
  }, rest), label && /*#__PURE__*/React.createElement("legend", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-primary)",
      marginBottom: "var(--space-3)",
      padding: 0
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    const checked = selected === opt.value;
    return /*#__PURE__*/React.createElement("label", {
      key: opt.value,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-3)",
        cursor: "pointer",
        fontWeight: "var(--weight-medium)",
        fontSize: "var(--text-base)",
        color: "var(--text-primary)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 20,
        height: 20,
        borderRadius: "50%",
        flex: "none",
        border: `1.5px solid ${checked ? "var(--uhc-blue)" : "var(--border-strong)"}`,
        display: "grid",
        placeContent: "center",
        transition: "var(--transition-base)"
      }
    }, checked && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: "50%",
        background: "var(--uhc-blue)"
      }
    })), /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: groupName,
      value: opt.value,
      checked: checked,
      onChange: e => pick(opt.value, e),
      style: {
        position: "absolute",
        opacity: 0,
        width: 0,
        height: 0
      }
    }), opt.label);
  })));
}
Object.assign(__ds_scope, { RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UHC Select — styled native dropdown with label + helper.
 */
function Select({
  label,
  id,
  options = [],
  value,
  defaultValue,
  placeholder = "Select…",
  helper = "",
  error = "",
  disabled = false,
  onChange,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const selectId = id || `uhc-select-${Math.random().toString(36).slice(2, 8)}`;
  const invalid = Boolean(error);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      fontFamily: "var(--font-sans)"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selectId,
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-primary)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-medium)",
      fontSize: "var(--text-base)",
      color: "var(--text-primary)",
      padding: "11px 40px 11px 14px",
      background: disabled ? "var(--uhc-gray-100)" : "var(--uhc-white)",
      border: `1.5px solid ${invalid ? "var(--uhc-error)" : focus ? "var(--uhc-blue)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-input)",
      boxShadow: focus ? "var(--ring-focus)" : "none",
      outline: "none",
      width: "100%",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "var(--transition-base)"
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--uhc-gray-600)",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: "absolute",
      right: 14,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }))), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: invalid ? "var(--uhc-error)" : "var(--text-muted)"
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UHC Switch — on/off toggle for settings.
 */
function Switch({
  label,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(Boolean(defaultChecked));
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(v => !v);
    onChange && onChange(!on, e);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-medium)",
      fontSize: "var(--text-base)",
      color: disabled ? "var(--text-muted)" : "var(--text-primary)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.6 : 1
    }
  }, /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": on,
    onClick: toggle,
    disabled: disabled,
    style: {
      position: "relative",
      width: 44,
      height: 26,
      flex: "none",
      borderRadius: "var(--radius-pill)",
      border: "none",
      background: on ? "var(--uhc-blue)" : "var(--uhc-gray-400)",
      cursor: "inherit",
      transition: "var(--transition-base)",
      padding: 0
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: on ? 21 : 3,
      width: 20,
      height: 20,
      borderRadius: "50%",
      background: "#fff",
      boxShadow: "var(--shadow-sm)",
      transition: "var(--transition-base)"
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/member-portal/App.jsx
try { (() => {
/* App shell — routes between Login and the authenticated portal. */
function App() {
  const [signedIn, setSignedIn] = React.useState(false);
  const [view, setView] = React.useState("Dashboard");
  const member = {
    name: "Maria Alvarez"
  };
  if (!signedIn) return /*#__PURE__*/React.createElement(Login, {
    onSignIn: () => setSignedIn(true)
  });
  const screen = {
    Dashboard: /*#__PURE__*/React.createElement(Dashboard, {
      member: member,
      onNav: setView
    }),
    Claims: /*#__PURE__*/React.createElement(Claims, null),
    "Find care": /*#__PURE__*/React.createElement(FindCare, null),
    Coverage: /*#__PURE__*/React.createElement(Placeholder, {
      title: "Coverage & benefits",
      note: "Your plan documents, ID card, and benefit details live here."
    }),
    Pharmacy: /*#__PURE__*/React.createElement(Placeholder, {
      title: "Pharmacy",
      note: "Prescriptions, refills, and drug cost estimates live here."
    })
  }[view];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    active: view,
    onNav: setView,
    member: member
  }), screen);
}
function Placeholder({
  title,
  note
}) {
  const {
    Card
  } = UHC;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: "0 auto",
      padding: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-serif-display)",
      fontWeight: 600,
      fontSize: 36,
      color: "var(--uhc-blue)",
      margin: "0 0 var(--space-5)",
      letterSpacing: "-0.02em"
    }
  }, title), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-secondary)",
      padding: "var(--space-8) 0",
      textAlign: "center"
    }
  }, note)));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/member-portal/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/member-portal/Claims.jsx
try { (() => {
/* Claims screen — filterable table of claims with status + cost breakdown. */
function Claims() {
  const {
    Card,
    Badge,
    Tabs,
    Select,
    Button
  } = UHC;
  const [filter, setFilter] = React.useState("All");
  const data = [{
    provider: "Riverside Family Medicine",
    type: "Office visit",
    date: "May 28, 2026",
    billed: "$185.00",
    plan: "$161.00",
    you: "$24.00",
    status: "Processed",
    tone: "success"
  }, {
    provider: "Quest Diagnostics",
    type: "Lab work",
    date: "May 14, 2026",
    billed: "$92.00",
    plan: "$92.00",
    you: "$0.00",
    status: "Covered",
    tone: "success"
  }, {
    provider: "Dr. Anjali Patel",
    type: "Specialist",
    date: "May 2, 2026",
    billed: "$240.00",
    plan: "$180.00",
    you: "$60.00",
    status: "Pending",
    tone: "warning"
  }, {
    provider: "City Imaging Center",
    type: "MRI",
    date: "Apr 18, 2026",
    billed: "$1,250.00",
    plan: "$980.00",
    you: "$270.00",
    status: "Processed",
    tone: "success"
  }, {
    provider: "Urgent Care Express",
    type: "Urgent care",
    date: "Apr 3, 2026",
    billed: "$320.00",
    plan: "$0.00",
    you: "$320.00",
    status: "Denied",
    tone: "error"
  }];
  const shown = filter === "All" ? data : data.filter(d => filter === "Pending" ? d.status === "Pending" : d.status !== "Pending");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: "0 auto",
      padding: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-serif-display)",
      fontWeight: 600,
      fontSize: 36,
      color: "var(--uhc-blue)",
      margin: "0 0 var(--space-2)",
      letterSpacing: "-0.02em"
    }
  }, "Claims"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)",
      margin: "0 0 var(--space-6)",
      maxWidth: "60ch"
    }
  }, "Track what you owe and what your plan covered. Claims usually post 3\u20135 days after a visit."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ["All", "Processed", "Pending"],
    value: filter,
    onChange: setFilter
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 180
    }
  }, /*#__PURE__*/React.createElement(Select, {
    options: ["Plan year 2026", "Plan year 2025"],
    defaultValue: "Plan year 2026",
    placeholder: ""
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2.4fr 1fr 1fr 1fr 1fr",
      padding: "var(--space-3) var(--space-6)",
      background: "var(--uhc-gray-50)",
      borderBottom: "1px solid var(--border-subtle)",
      fontSize: "var(--text-xs)",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Provider"), /*#__PURE__*/React.createElement("span", null, "Date"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "right"
    }
  }, "Billed"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "right"
    }
  }, "You owe"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "right"
    }
  }, "Status")), shown.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "2.4fr 1fr 1fr 1fr 1fr",
      alignItems: "center",
      padding: "var(--space-4) var(--space-6)",
      borderBottom: i < shown.length - 1 ? "1px solid var(--border-subtle)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600
    }
  }, d.provider), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, d.type)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-secondary)"
    }
  }, d.date), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "right",
      color: "var(--text-secondary)"
    }
  }, d.billed), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "right",
      fontWeight: 700
    }
  }, d.you), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: d.tone
  }, d.status))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-4)",
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm"
  }, "Download claims (PDF)")));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/member-portal/Claims.jsx", error: String((e && e.message) || e) }); }

// ui_kits/member-portal/Dashboard.jsx
try { (() => {
/* Member dashboard — welcome, plan summary, quick actions, recent claims, deductible. */
function Dashboard({
  member,
  onNav
}) {
  const {
    Card,
    Button,
    Badge,
    Alert
  } = UHC;
  const Icon = ({
    d,
    size = 22,
    color = "var(--uhc-blue)"
  }) => /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, d);
  const actions = [{
    label: "Find care",
    sub: "Doctors & facilities",
    icon: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m21 21-4.3-4.3"
    })),
    nav: "Find care"
  }, {
    label: "View claims",
    sub: "3 recent",
    icon: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 2v6h6"
    })),
    nav: "Claims"
  }, {
    label: "ID card",
    sub: "View & download",
    icon: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "2",
      y: "5",
      width: "20",
      height: "14",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M2 10h20"
    })),
    nav: "Coverage"
  }, {
    label: "Pharmacy",
    sub: "Prescriptions",
    icon: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m8.5 8.5 7 7"
    })),
    nav: "Pharmacy"
  }];
  const claims = [{
    provider: "Riverside Family Medicine",
    date: "May 28, 2026",
    amount: "$24.00",
    status: "Processed",
    tone: "success"
  }, {
    provider: "Quest Diagnostics — Lab",
    date: "May 14, 2026",
    amount: "$0.00",
    status: "Covered",
    tone: "success"
  }, {
    provider: "Dr. Patel — Specialist",
    date: "May 2, 2026",
    amount: "$60.00",
    status: "Pending",
    tone: "warning"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: "0 auto",
      padding: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "uhc-eyebrow",
    style: {
      color: "var(--uhc-blue)"
    }
  }, "UnitedHealthcare Choice Plus \xB7 Plan ID 8842-001"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-serif-display)",
      fontWeight: 600,
      fontSize: 40,
      color: "var(--uhc-blue)",
      margin: "6px 0 0",
      letterSpacing: "-0.02em"
    }
  }, "Good morning, ", member.name.split(" ")[0], ".")), /*#__PURE__*/React.createElement(Alert, {
    tone: "info",
    title: "Annual wellness visit available"
  }, "Your yearly checkup is covered at 100%. Schedule it before December 31."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "var(--space-4)",
      margin: "var(--space-6) 0"
    }
  }, actions.map(a => /*#__PURE__*/React.createElement(Card, {
    key: a.label,
    interactive: true,
    onClick: () => onNav(a.nav),
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement(Icon, {
    d: a.icon
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: "var(--text-md)",
      marginTop: "var(--space-3)",
      color: "var(--text-primary)"
    }
  }, a.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, a.sub)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "var(--space-5) var(--space-6)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontWeight: 600,
      fontSize: "var(--text-lg)",
      margin: 0
    }
  }, "Recent claims"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => onNav("Claims")
  }, "View all")), claims.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      padding: "var(--space-4) var(--space-6)",
      borderBottom: i < claims.length - 1 ? "1px solid var(--border-subtle)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: "var(--text-base)"
    }
  }, c.provider), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, c.date)), /*#__PURE__*/React.createElement(Badge, {
    tone: c.tone
  }, c.status), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: "var(--text-base)",
      width: 72,
      textAlign: "right"
    }
  }, c.amount)))), /*#__PURE__*/React.createElement(Card, {
    accent: true,
    accentColor: "var(--uhc-bright-blue)"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontWeight: 600,
      fontSize: "var(--text-lg)",
      margin: "0 0 var(--space-4)"
    }
  }, "Your deductible"), /*#__PURE__*/React.createElement(Ring, {
    pct: 47
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-4)",
      fontSize: "var(--text-sm)",
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text-primary)"
    }
  }, "$705"), " of $1,500 met"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-4)",
      paddingTop: "var(--space-4)",
      borderTop: "1px solid var(--border-subtle)",
      display: "flex",
      justifyContent: "space-between",
      fontSize: "var(--text-sm)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, "Out-of-pocket max"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, "$1,420 / $4,000")))));
}
function Ring({
  pct
}) {
  const r = 52,
    c = 2 * Math.PI * r,
    off = c * (1 - pct / 100);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 140,
      height: 140,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "140",
    height: "140",
    style: {
      transform: "rotate(-90deg)"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "70",
    cy: "70",
    r: r,
    fill: "none",
    stroke: "var(--uhc-gray-200)",
    strokeWidth: "14"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "70",
    cy: "70",
    r: r,
    fill: "none",
    stroke: "var(--uhc-bright-blue)",
    strokeWidth: "14",
    strokeLinecap: "round",
    strokeDasharray: c,
    strokeDashoffset: off
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeContent: "center",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 28,
      color: "var(--uhc-blue)"
    }
  }, pct, "%"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, "met")));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/member-portal/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/member-portal/FindCare.jsx
try { (() => {
/* Find care screen — provider search with filters and result cards. */
function FindCare() {
  const {
    Card,
    Button,
    Badge,
    Input,
    Avatar
  } = UHC;
  const [q, setQ] = React.useState("");
  const cats = ["Primary care", "Specialist", "Urgent care", "Labs", "Mental health", "Dental"];
  const [cat, setCat] = React.useState("Primary care");
  const providers = [{
    name: "Dr. Maya Okonkwo",
    spec: "Family Medicine",
    dist: "0.8 mi",
    rating: "4.9",
    inNet: true,
    accepting: true
  }, {
    name: "Dr. Daniel Reyes",
    spec: "Internal Medicine",
    dist: "1.3 mi",
    rating: "4.7",
    inNet: true,
    accepting: true
  }, {
    name: "Dr. Sarah Lindqvist",
    spec: "Family Medicine",
    dist: "2.1 mi",
    rating: "4.8",
    inNet: true,
    accepting: false
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: "0 auto",
      padding: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-serif-display)",
      fontWeight: 600,
      fontSize: 36,
      color: "var(--uhc-blue)",
      margin: "0 0 var(--space-2)",
      letterSpacing: "-0.02em"
    }
  }, "Find care"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)",
      margin: "0 0 var(--space-6)",
      maxWidth: "60ch"
    }
  }, "Search in-network doctors, specialists, and facilities near you. In-network care costs less."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      marginBottom: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search doctors, specialties, or conditions",
    value: q,
    onChange: e => setQ(e.target.value)
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Search")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      flexWrap: "wrap",
      marginBottom: "var(--space-6)"
    }
  }, cats.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setCat(c),
    style: {
      padding: "8px 16px",
      borderRadius: "var(--radius-pill)",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      fontWeight: 600,
      border: `1.5px solid ${cat === c ? "var(--uhc-blue)" : "var(--border-default)"}`,
      background: cat === c ? "var(--uhc-blue)" : "var(--uhc-white)",
      color: cat === c ? "#fff" : "var(--text-secondary)"
    }
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      marginBottom: "var(--space-3)"
    }
  }, providers.length, " in-network results \xB7 ", cat), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, providers.map((p, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    interactive: true,
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: p.name.replace("Dr. ", ""),
    size: 56,
    tone: i % 2 ? "sky" : "brand"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: "var(--text-md)"
    }
  }, p.name), p.inNet && /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "In-network"), p.accepting ? /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "Accepting patients") : /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Waitlist")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-secondary)",
      marginTop: 2
    }
  }, p.spec, " \xB7 ", p.dist, " away"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4,
      marginTop: 6,
      fontSize: "var(--text-sm)",
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "var(--uhc-gold)",
    stroke: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z"
  })), /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text-primary)"
    }
  }, p.rating), " \xB7 Highly rated")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm"
  }, "Book visit"))))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/member-portal/FindCare.jsx", error: String((e && e.message) || e) }); }

// ui_kits/member-portal/Login.jsx
try { (() => {
/* Sign-in screen — split layout: brand panel + login form. */
function Login({
  onSignIn
}) {
  const {
    Button,
    Input,
    Checkbox
  } = UHC;
  const [id, setId] = React.useState("");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--uhc-blue)",
      color: "#fff",
      padding: "var(--space-16) var(--space-12)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      marginBottom: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: "50%",
      background: "#fff",
      display: "grid",
      placeContent: "center",
      color: "var(--uhc-blue)",
      fontWeight: 700,
      fontSize: 22
    }
  }, "U"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 21
    }
  }, "United", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, "Healthcare"))), /*#__PURE__*/React.createElement("div", {
    className: "uhc-eyebrow",
    style: {
      color: "var(--uhc-bright-blue)"
    }
  }, "Member sign in"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-serif-display)",
      fontWeight: 600,
      fontSize: 52,
      lineHeight: 1.05,
      letterSpacing: "-0.02em",
      margin: "var(--space-3) 0 var(--space-4)"
    }
  }, "Helping people live healthier lives."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-md)",
      color: "rgba(255,255,255,0.82)",
      maxWidth: "40ch",
      lineHeight: 1.5
    }
  }, "Manage your plan, track claims, find care, and view your ID card \u2014 all in one place.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 380,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontWeight: 600,
      fontSize: "var(--text-2xl)",
      margin: 0,
      color: "var(--text-primary)"
    }
  }, "Sign in to your account"), /*#__PURE__*/React.createElement(Input, {
    label: "Username or member ID",
    placeholder: "Enter your username",
    value: id,
    onChange: e => setId(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Password",
    type: "password",
    placeholder: "Enter your password"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Remember me"
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: 600
    }
  }, "Forgot password?")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    onClick: onSignIn
  }, "Sign in"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      fontSize: "var(--text-sm)",
      color: "var(--text-secondary)"
    }
  }, "New here? ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontWeight: 600
    }
  }, "Register your account")))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/member-portal/Login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/member-portal/TopBar.jsx
try { (() => {
/* Member-portal top navigation bar. Uses DS Avatar. */
function TopBar({
  active,
  onNav,
  member
}) {
  const {
    Avatar
  } = UHC;
  const nav = ["Dashboard", "Claims", "Find care", "Coverage", "Pharmacy"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-8)",
      padding: "0 var(--space-8)",
      height: 68,
      background: "var(--uhc-white)",
      borderBottom: "1px solid var(--border-subtle)",
      position: "sticky",
      top: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: "50%",
      background: "var(--uhc-blue)",
      display: "grid",
      placeContent: "center",
      color: "#fff",
      fontWeight: 700,
      fontSize: 20
    }
  }, "U"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 19,
      color: "var(--uhc-blue)",
      letterSpacing: "-0.01em"
    }
  }, "United", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, "Healthcare"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      marginLeft: "var(--space-4)"
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => onNav(n),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "8px 14px",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      fontWeight: active === n ? 700 : 600,
      color: active === n ? "var(--uhc-blue)" : "var(--text-secondary)",
      background: active === n ? "var(--uhc-blue-50)" : "transparent"
    }
  }, n))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": "Notifications",
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--text-secondary)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.3 21a1.94 1.94 0 0 0 3.4 0"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -2,
      right: -2,
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--uhc-orange)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: member.name,
    size: 36
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: "var(--text-sm)",
      color: "var(--text-primary)"
    }
  }, member.name.split(" ")[0]))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/member-portal/TopBar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

})();
