import { useGetPuppiesQuery } from "./puppySlice";

/**
 * @component
 * Shows a list of puppies in the roster.
 * Users can select a puppy to see more information about it.
 */
export default function PuppyList({ setSelectedPuppyId }) {
  // TODO: Get data from getPuppies query
  const {data: puppies, isLoading, error } = useGetPuppiesQuery();
  console.log(puppies?.data.players);

  return(
    <article>
      <h2>Roster</h2>
      <ul className="puppies">
        {isLoading && <li>Loading puppies...</li>}
        {error && <li>Error loading puppies: {error.message}</li>}
        {puppies?.data?.players.length > 0 ? (
          puppies?.data?.players.map((p) => (
            <li key={p.id}>
              <h3>{p.name} #{p.id}</h3>
              <figure>
                <img src={p.imageUrl} alt={p.name} />
              </figure>
              <button onClick={() => setSelectedPuppyId(p.id)}>
                See details
              </button>
            </li>
          ))
        ) : (
          <li>No puppies found.</li>
        )}
      </ul>
    </article>
  );
}