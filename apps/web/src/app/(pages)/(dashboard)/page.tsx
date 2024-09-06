import SearchFilter from "~/app/_components/search/search-filter";

export default function Home() {
  return (
    <div className="flex h-[85vh] flex-col">
      <div className="flex h-full flex-col items-center justify-center">
        <h1>TEST</h1>
        <SearchFilter />
      </div>
    </div>
  );
}
