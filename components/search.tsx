import { Input } from "./ui/input";

interface SearchProps {
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Search({ onSearch }: SearchProps) {
  return (
    <div className="w-max mx-auto mb-3">
      <Input
        placeholder="Search users"
        className="min-w-[30vw]"
        onChange={onSearch}
      />
    </div>
  );
}
