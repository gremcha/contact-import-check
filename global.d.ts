export {};

declare global {
  type ContactProperty = "tel" | "name" | "email" | "address" | "icon";
  type Contact = Record<ContactProperty, string[]>;

  interface Navigator extends Navigator {
    contacts: {
      select: (
        properties: ContactProperty[],
        options?: { multiple: boolean }
      ) => Promise<Contact[]>;
    };
  }
}
