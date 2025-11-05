import { ContactCard } from "@/shared/ui/ContactCard";
import { FormBlock } from "@/shared/ui/FormBlock";
import { Toggle } from "@/shared/ui/Toggle";
import { useState } from "react";
import JSONPretty from "react-json-pretty";
import "./index.css";

interface ContactListProps {
  contacts: Contact[];
}

export const ContactList = ({ contacts }: ContactListProps) => {
  const [jsonView, setJsonView] = useState(false);

  return contacts.length ? (
    <FormBlock label="Полученные данные">
      <Toggle
        label="JSON формат"
        checked={jsonView}
        onChange={(e) => setJsonView(e.currentTarget.checked)}
      />
      {jsonView ? (
        <JSONPretty data={contacts} className="json" />
      ) : (
        contacts.map((contact) => <ContactCard {...contact} />)
      )}
    </FormBlock>
  ) : null;
};
