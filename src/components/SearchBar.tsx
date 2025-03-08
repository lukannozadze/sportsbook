import { Input } from "./ui/input";
import { Icons } from "./shared/Icons";

export default function SearchBar() {
  return (
    <div className="relative w-full">
      <Input
        placeholder="Search Event...."
        className="w-[250px] p-6 bg-[#2E3740] text-white border-none focus-visible:none focus-visible:ring-0 rounded-none"
      />
      <Icons.search className="absolute top-0 translate-y-4 right-4 size-5" />
    </div>
  );
}
