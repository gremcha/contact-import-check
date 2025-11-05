import { GettingContactsForm } from "@/shared/types/form";
import { FormBlock } from "@/shared/ui/FormBlock";
import { Toggle } from "@/shared/ui/Toggle";
import { getContacts } from "@/shared/utils/getContacts";
import { ChangeEvent } from "react";
import { useFormContext, useWatch } from "react-hook-form";

const fields: { label: string; value: ContactProperty }[] = [
  {
    label: "Имя",
    value: "name",
  },
  { label: "Номер телефона", value: "tel" },
  { label: "Адрес", value: "address" },
  { label: "Email", value: "email" },
  { label: "Аватар", value: "icon" },
];

interface ContactFieldsProps {
  onSubmit: (value: Contact[]) => void;
}

export const ContactFields = ({ onSubmit }: ContactFieldsProps) => {
  const { setValue, control, handleSubmit } =
    useFormContext<GettingContactsForm>();

  const [properties, multiply] = useWatch({
    control,
    name: ["properties", "multiply"],
  });

  const changeMultiplyHandler = (event: ChangeEvent<HTMLInputElement>) =>
    setValue("multiply", event.currentTarget.checked);

  const setProperty = (
    event: ChangeEvent<HTMLInputElement>,
    property: ContactProperty
  ) => {
    setValue(`properties.${property}`, event.currentTarget.checked);
  };

  const formSubmitHandler = handleSubmit(async (data) => {
    const properties = Object.entries(data.properties)
      .map(([label, value]) => value && label)
      .filter(Boolean) as string[];
    const contacts = await getContacts(properties, data.multiply);

    onSubmit(contacts);
  });

  console.log(properties);

  return (
    <FormBlock
      label="Получение контактов"
      button={{
        label: "Получить контакты",
        type: "submit",
        onClick: formSubmitHandler,
      }}
    >
      <Toggle
        label="Несколько"
        checked={multiply}
        onChange={changeMultiplyHandler}
      />
      {fields.map((property) => (
        <Toggle
          key={property.value}
          label={property.label}
          id={property.value}
          checked={properties[property.value]}
          onChange={(e) => setProperty(e, property.value)}
        />
      ))}
    </FormBlock>
  );
};
