import { useMemo, useRef, useState, type FormEvent } from "react";
import { CLINIC, TREATMENTS } from "../data/site";

type Values = {
  name: string;
  phone: string;
  date: string;
  time: string;
  treatment: string;
  message: string;
  consent: boolean;
};

const VALID_TREATMENT_IDS = ["general", ...TREATMENTS.map((t) => t.id), "unsure"];

function initialValues(t?: string): Values {
  return {
    name: "",
    phone: "",
    date: "",
    time: "",
    treatment: t && VALID_TREATMENT_IDS.includes(t) ? t : "general",
    message: "",
    consent: false,
  };
}

const TIME_OPTIONS = [
  { value: "morning", label: "Morning session (9:30 AM – 1:00 PM)" },
  { value: "evening", label: "Evening session (5:30 PM – 9:00 PM)" },
];

/** Indian mobile/landline-ish validation: +91 optional, 10 digits, spaces allowed. */
function validPhone(v: string) {
  const digits = v.replace(/[^0-9]/g, "");
  if (/^91[6-9]\d{9}$/.test(digits)) return true; // with country code
  if (/^0?[6-9]\d{9}$/.test(digits)) return true; // 10-digit local, optional leading 0
  return false;
}

function validate(v: Values): Partial<Record<keyof Values, string>> {
  const e: Partial<Record<keyof Values, string>> = {};
  if (!v.name.trim()) e.name = "Please enter your full name.";
  else if (v.name.trim().length < 2) e.name = "Name looks too short.";
  if (!v.phone.trim()) e.phone = "Please enter a phone number we can call back on.";
  else if (!validPhone(v.phone))
    e.phone = "Enter a valid Indian mobile number (10 digits, optionally starting +91).";
  if (!v.date) e.date = "Choose a preferred date.";
  else {
    const d = new Date(v.date + "T00:00:00");
    if (Number.isNaN(d.getTime())) e.date = "That date is not valid.";
    else if (d.getDay() === 0) e.date = "The clinic is closed on Sundays — pick another day.";
    else {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (d < today) e.date = "Please choose today or a future date.";
    }
  }
  if (!v.time) e.time = "Select a preferred session.";
  if (!v.consent) e.consent = "Please confirm consent so the clinic can contact you.";
  return e;
}

function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

type Props = { initialTreatment?: string };

export default function ContactForm({ initialTreatment }: Props) {
  const [values, setValues] = useState<Values>(() => initialValues(initialTreatment));
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Values, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "ready">("idle");
  const [lastWaLink, setLastWaLink] = useState<string>("");
  const submittingRef = useRef(false);
  const summaryRef = useRef<HTMLDivElement>(null);

  const set = (k: keyof Values, val: string | boolean) =>
    setValues((prev) => ({ ...prev, [k]: val }));

  const blur = (k: keyof Values) => {
    setTouched((t) => ({ ...t, [k]: true }));
    setErrors(validate(values));
  };

  const shownError = (k: keyof Values) =>
    touched[k] ? errors[k] : undefined;

  const waHref = useMemo(() => {
    const t =
      TREATMENTS.find((x) => x.id === values.treatment)?.name ??
      values.treatment === "general"
        ? "General enquiry"
        : "Not sure yet";
    const lines = [
      `Hello ${CLINIC.name},`,
      `I would like to enquire about an appointment (${t}).`,
      `Name: ${values.name || "—"}`,
      `Phone: ${values.phone || "—"}`,
      `Preferred date: ${values.date ? formatDate(values.date) : "—"}`,
      `Preferred session: ${TIME_OPTIONS.find((o) => o.value === values.time)?.label ?? "—"}`,
    ];
    if (values.message.trim()) lines.push(`Message: ${values.message.trim()}`);
    lines.push("(This is an enquiry, not a confirmed booking.)");
    return `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
  }, [values]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (submittingRef.current) return; // duplicate-submission guard
    const errs = validate(values);
    setErrors(errs);
    setTouched({
      name: true,
      phone: true,
      date: true,
      time: true,
      treatment: true,
      message: true,
      consent: true,
    });
    if (Object.keys(errs).length > 0) {
      setStatus("idle");
      const first = document.querySelector<HTMLElement>("[aria-invalid='true']");
      first?.focus();
      return;
    }
    submittingRef.current = true;
    setLastWaLink(waHref);
    setStatus("ready");
    window.open(waHref, "_blank", "noopener,noreferrer");
    window.setTimeout(() => {
      submittingRef.current = false;
      summaryRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 400);
  };

  const fieldProps = (k: keyof Values) => ({
    id: `f-${k}`,
    name: k,
    "aria-invalid": shownError(k) ? (true as const) : undefined,
    "aria-describedby": shownError(k) ? `err-${k}` : undefined,
  });

  return (
    <form className="form-card" onSubmit={onSubmit} noValidate aria-label="Appointment enquiry form">
      <h2>Appointment enquiry</h2>
      <p className="form-note">
        This form does not book an appointment. On submit it opens WhatsApp with your
        details pre-filled so you can send the enquiry to the clinic. The clinic will
        confirm any appointment by phone. You can also call{" "}
        <a href={CLINIC.phoneHref} style={{ color: "var(--plum)", fontWeight: 700 }}>
          {CLINIC.phoneDisplay}
        </a>
        .
      </p>

      <div className="field">
        <label htmlFor="f-name">
          Full name <span className="req" aria-hidden="true">*</span>
        </label>
        <input
          type="text"
          {...fieldProps("name")}
          autoComplete="name"
          value={values.name}
          onChange={(e) => set("name", e.target.value)}
          onBlur={() => blur("name")}
          placeholder="e.g. Priya Raman"
        />
        {shownError("name") && (
          <span className="error-msg" id="err-name" role="alert">
            {shownError("name")}
          </span>
        )}
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="f-phone">
            Phone number <span className="req" aria-hidden="true">*</span>
          </label>
          <input
            type="tel"
            {...fieldProps("phone")}
            autoComplete="tel"
            inputMode="tel"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            onBlur={() => blur("phone")}
            placeholder="+91 98XXXXXXNN"
          />
          {shownError("phone") && (
            <span className="error-msg" id="err-phone" role="alert">
              {shownError("phone")}
            </span>
          )}
        </div>

        <div className="field">
          <label htmlFor="f-date">
            Preferred date <span className="req" aria-hidden="true">*</span>
          </label>
          <input
            type="date"
            {...fieldProps("date")}
            value={values.date}
            min={new Date().toISOString().slice(0, 10)}
            onChange={(e) => set("date", e.target.value)}
            onBlur={() => blur("date")}
          />
          {shownError("date") && (
            <span className="error-msg" id="err-date" role="alert">
              {shownError("date")}
            </span>
          )}
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="f-time">
            Preferred session <span className="req" aria-hidden="true">*</span>
          </label>
          <select
            {...fieldProps("time")}
            value={values.time}
            onChange={(e) => set("time", e.target.value)}
            onBlur={() => blur("time")}
          >
            <option value="">Select a session…</option>
            {TIME_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          {shownError("time") && (
            <span className="error-msg" id="err-time" role="alert">
              {shownError("time")}
            </span>
          )}
        </div>

        <div className="field">
          <label htmlFor="f-treatment">Treatment of interest</label>
          <select
            {...fieldProps("treatment")}
            value={values.treatment}
            onChange={(e) => set("treatment", e.target.value)}
          >
            <option value="general">General enquiry</option>
            {TREATMENTS.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
            <option value="unsure">Not sure yet</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="f-message">Message (optional)</label>
        <textarea
          {...fieldProps("message")}
          value={values.message}
          onChange={(e) => set("message", e.target.value)}
          placeholder="Briefly describe your concern — this helps the clinic prepare for your visit."
        />
      </div>

      <div className="consent">
        <input
          type="checkbox"
          id="f-consent"
          checked={values.consent}
          onChange={(e) => set("consent", e.target.checked)}
          onBlur={() => blur("consent")}
          aria-invalid={shownError("consent") ? true : undefined}
          aria-describedby={shownError("consent") ? "err-consent" : undefined}
        />
        <label htmlFor="f-consent">
          I agree that Smileworx Dental Care may contact me on the number provided to
          discuss this enquiry.
          {shownError("consent") && (
            <span className="error-msg" id="err-consent" role="alert" style={{ display: "block" }}>
              {shownError("consent")}
            </span>
          )}
        </label>
      </div>

      <div className="submit-row">
        <button type="submit" className="btn btn--plum" disabled={submittingRef.current}>
          Send enquiry via WhatsApp
        </button>
        <span className="caption">Opens WhatsApp with your details pre-filled.</span>
      </div>

      {status === "ready" && (
        <div className="form-status" ref={summaryRef} role="status" aria-live="polite">
          <strong>Your enquiry is ready in WhatsApp.</strong>{" "}
          No appointment has been confirmed yet — please press <em>send</em> in the
          WhatsApp chat that opened. If the window did not open,{" "}
          <a href={lastWaLink} target="_blank" rel="noopener noreferrer">
            tap here to send it manually
          </a>
          , or call {CLINIC.phoneDisplay}.
        </div>
      )}
    </form>
  );
}
