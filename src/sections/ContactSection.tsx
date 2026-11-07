"use client";

import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";
import { useLanguage } from "@/i18n/LanguageContext";
import { REVEAL } from "@/lib/dom";
import { SectionLayout } from "@/layouts/SectionLayout";
import type { ResolvedAssets } from "@/types";
import { displayUrl } from "@/utils/url";

import styles from "./ContactSection.module.scss";

interface Channel {
  label: string;
  value: string;
  href: string;
  external: boolean;
}

interface ContactSectionProps {
  assets: ResolvedAssets;
}

function getChannels(): Channel[] {
  const { email, github, linkedin, phone, whatsapp } = profile.contact;
  const channels: Channel[] = [];

  const effectiveEmail = email || "kevinmaravilhapro@gmail.com";
  const emailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(effectiveEmail)}`;
  channels.push({
    label: "Email",
    value: effectiveEmail,
    href: emailHref,
    external: true,
  });

  const effectivePhone = phone || "+55 83 999911363";
  const effectiveWhatsapp =
    whatsapp || `https://wa.me/${effectivePhone.replace(/\D/g, "")}`;
  channels.push({
    label: "WhatsApp",
    value: effectivePhone,
    href: effectiveWhatsapp,
    external: true,
  });

  if (github) channels.push({ label: "GitHub", value: displayUrl(github), href: github, external: true });
  if (linkedin)
    channels.push({ label: "LinkedIn", value: displayUrl(linkedin), href: linkedin, external: true });

  return channels;
}

export function ContactSection({ assets }: ContactSectionProps) {
  const { dict } = useLanguage();
  const channels = getChannels();
  const email = profile.contact.email || "kevinmaravilhapro@gmail.com";

  return (
    <SectionLayout id="contact" title={dict.ui.contactTitle} large>
      <p className={styles.lead} {...REVEAL}>
        {dict.profile.availability}
      </p>

      {channels.length > 0 && (
        <ul className={styles.channels} {...REVEAL}>
          {channels.map((channel) => (
            <li key={channel.label}>
              <a
                className={styles.channel}
                href={channel.href}
                {...(channel.external && { target: "_blank", rel: "noopener noreferrer" })}
              >
                <span className={styles.channelLabel}>{channel.label}</span>
                <span className={styles.channelValue}>{channel.value}</span>
                <span className={styles.arrow} aria-hidden="true">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}

      {(email || assets.cv) && (
        <div className={styles.actions} {...REVEAL}>
          {email && (
            <Button
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {dict.ui.getInTouch}
            </Button>
          )}
          {assets.cv && (
            <Button
              href={assets.cv}
              variant="line"
              download={assets.cvFileName || "Curriculo-Kevin-Maravilha.pdf"}
            >
              {dict.ui.downloadCV}
            </Button>
          )}
        </div>
      )}
    </SectionLayout>
  );
}
