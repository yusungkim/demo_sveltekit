import { invalid, redirect } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";

interface ContactInfo {
  name: string;
  email: string;
  company: string | null;
  job: string | null;
}

export interface Contact extends ContactInfo {
  id: string;
}

export type Contacts = Contact[];

export interface ContactReturnType extends ContactInfo {
  id?: string;
  ok: boolean;
  message?: string;
}

let contacts: Contacts = [
  {
    id: "de393e6a-1c08-4e6e-9aad-0994fcf0d981",
    name: "Saul Goodman",
    email: "saul@example.com",
    company: "Saul Goodman & Associates",
    job: "Attorney",
  },
];

export const load: PageServerLoad = () => {
  // frontend can receive return values as data
  return {
    contacts,
  };
};

export const actions: Actions = {
  delete: async ({ request }) => {
    const formData = await request.formData()
    const id = formData.get("id")
    contacts = contacts.filter(contact => contact.id != id)
    return { ok: true }
  },
  create: async ({ request }) => {
    const formData = await request.formData();

    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const company = formData.get("company")?.toString();
    const job = formData.get("job")?.toString();
    const id = crypto.randomUUID();

    if (name && email) {
      const givenInfo = {
        name,
        email,
        company,
        job,
      };

      if (name.length < 2) {
        // frontend can receive return values as variable named form.
        return invalid(400, {
          ok: false,
          message: "Name must be at least two characters",
          ...givenInfo,
        });
      }

      const contact: Contact = {
        id,
        ...givenInfo,
      };
      contacts.push(contact);
      
      return { ok: true };
    }

    return { ok: false };
  },
};
