export const getContacts = async (
  properties: ContactProperty[],
  multiple: boolean
) => {
  try {
    const contacts = await navigator.contacts.select(properties, {
      multiple,
    });
    return contacts;
  } catch (e) {
    console.log(e);
    alert(e);
    return [];
  }
};
