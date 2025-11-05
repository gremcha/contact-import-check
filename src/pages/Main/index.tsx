import { ContactFields } from "@/features/ContactFields";
import { ContactsSupport } from "@/features/ContactsSupport";
import { GettingContactsForm } from "@/shared/types/form";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import "./index.css";
import { ContactList } from "@/features/ContactList";

export const Main = () => {
  const form = useForm<GettingContactsForm>({
    defaultValues: {
      multiply: false,
      properties: {},
    },
  });

  const [contacts, setContacts] = useState<Contact[]>([]);

  return (
    <div className="main">
      <FormProvider {...form}>
        <form className="form">
          <ContactsSupport />
          <ContactFields onSubmit={setContacts} />
        </form>
      </FormProvider>
      <ContactList contacts={contacts} />
    </div>
  );
};
