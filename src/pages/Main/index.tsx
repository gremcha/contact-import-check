import { ContactFields } from "@/features/ContactFields";
import { ContactsSupport } from "@/features/ContactsSupport";
import { GettingContactsForm } from "@/shared/types/form";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import "./index.css";
import { FormBlock } from "@/shared/ui/FormBlock";
import { ContactCard } from "@/shared/ui/ContactCard";

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
      {!!contacts.length && (
        <FormBlock label="Полученные данные">
          {contacts.map((contact) => (
            <ContactCard {...contact} />
          ))}
        </FormBlock>
      )}
    </div>
  );
};
