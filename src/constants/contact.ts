import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Address",
    value: `Dharma Jyothi Charitable Society
    Queen of Apostles Convent
    Vamanjoor P O
    MANGALURU - 575028`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7019249483",
  },
  {
    icon: Mail,
    label: "Email",
    value:
      "dharmajyothicharitablesociety@gmail.com",
  },
];

export const INPUT_CLASS =
  "w-full px-4 py-3 rounded-xl border border-[#355E3B]/20 focus:border-[#355E3B] outline-none text-sm bg-white";