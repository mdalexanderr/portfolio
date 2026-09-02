/**
 * Central contact details for alexweb.
 * WhatsApp is the preferred channel; email actions open a Gmail compose
 * window so they work without any local mail app configured.
 */
export const EMAIL = 'cbssalex@gmail.com'
export const PHONE = '+8801603231214'
export const PHONE_DISPLAY = '+880 1603 231214'
export const LOCATION = 'Sylhet, Bangladesh'
export const TIMEZONE = 'GMT+6'

export const WHATSAPP_URL =
  'https://wa.me/' +
  PHONE.replace('+', '') +
  '?text=' +
  encodeURIComponent("Hello! I found your portfolio (alexweb) and I'd like to talk about a project.")

export const GMAIL_URL =
  'https://mail.google.com/mail/?view=cm&fs=1&to=' +
  encodeURIComponent(EMAIL) +
  '&su=' +
  encodeURIComponent('Project enquiry — via alexweb portfolio') +
  '&body=' +
  encodeURIComponent("Hi,\n\nI'd like to talk about a project with you.\n\nThanks!")
