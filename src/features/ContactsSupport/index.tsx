import { GettingContactsForm } from "@/shared/types/form";
import { FormBlock } from "@/shared/ui/FormBlock";
import { checkApiSupport } from "@/shared/utils/checkApiSupport";
import { useController, useFormContext } from "react-hook-form";

export const ContactsSupport = () => {
  const { control } = useFormContext<GettingContactsForm>();

  const { field } = useController({ control, name: "support" });

  const checkSupport = () => field.onChange(checkApiSupport);

  return (
    <FormBlock
      label="Проверить поддержку api в браузере"
      button={{ onClick: checkSupport, label: "Проверить", type: "button" }}
    >
      <p>{`Результат: ${field.value}`}</p>
    </FormBlock>
  );
};
