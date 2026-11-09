"use client";

import { useState } from "react";
import { DmButton } from "@/components/dm-button";
import { EMAIL, INSTAGRAM_DM, mailTo, PHONE_DISPLAY, PHONE_TEL, SHOWROOM, whatsApp } from "@/lib/channels";
import { site } from "@/site.config";

export function BookPanel() {
  const [text, setText] = useState(site.order.dmMessage);
  return (
    <div className="border border-line bg-surface p-6 sm:p-8">
      <label htmlFor="appointment-note" className="eyebrow">
        Your note
      </label>
      <textarea
        id="appointment-note"
        value={text}
        onChange={(event) => setText(event.target.value)}
        rows={7}
        className="mt-4 w-full resize-y border border-line bg-bg px-4 py-3 text-sm leading-6 text-ink"
      />
      <div className="mt-5 flex flex-wrap gap-3">
        <a href={whatsApp(text)} className="btn btn-primary" data-magnetic="0.14">
          Send on WhatsApp
        </a>
        <DmButton href={INSTAGRAM_DM} message={text} label="Copy and open Instagram" className="btn btn-ghost" />
        <a href={mailTo("Appointment with Whitestone Jewelry", text)} className="btn btn-ghost">
          Email {EMAIL}
        </a>
        <a href={`tel:${PHONE_TEL}`} className="btn btn-ghost">
          Call {PHONE_DISPLAY}
        </a>
        <a href={SHOWROOM} className="btn btn-ghost">
          Design your dream ring
        </a>
      </div>
      {site.order.note ? <p className="mt-5 text-sm leading-6 text-muted">{site.order.note}</p> : null}
    </div>
  );
}
