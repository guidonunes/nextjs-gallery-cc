import styles from "./Search.module.css";
// Imports
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function SearchBar({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname;
  const router = useRouter();

  const handleSubmit = (event: React.SyntheticEvent) => {
    const params = new URLSearchParams(searchParams);
    const target = event.target as typeof event.target & {
      searchTerm: {
        value: string;
      };
    };

    const term = target.searchTerm.value;

    // Set `query` if `term`
    // Remove `query` if not `term`
    // Replace path
  };

  return (
    <form className={styles.search_bar} onSubmit={handleSubmit}>
      <input
        className={styles.search_term}
        name="searchTerm"
        defaultValue=""
        placeholder={placeholder}
      />
      <button className={styles.search_button} type="submit">
        Search
      </button>
    </form>
  );
}
