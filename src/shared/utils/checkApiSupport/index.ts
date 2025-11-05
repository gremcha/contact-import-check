export const checkApiSupport = () =>
  "contacts" in navigator && "ContactsManager" in window;
