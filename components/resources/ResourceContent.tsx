import { ResourceSectionPage } from "./ResourceSectionPage";

export function ResourceContent() {
  return (
    <article className="prose max-w-none prose-slate">
      <ResourceSectionPage title="Key insights from the CircleMED project">
        <p>
          As part of the European project CircleMED, a large-scale survey was
          conducted to better understand citizens’ behaviours...
        </p>
      </ResourceSectionPage>

      <ResourceSectionPage title="Why this study matters">
        <p>
          The transition to a Circular Economy is not only a technological
          challenge...
        </p>
      </ResourceSectionPage>

      <ResourceSectionPage title="Key findings">
        <ul>
          <li>Uneven awareness of the Circular Economy</li>
          <li>Higher education levels correlate with engagement</li>
        </ul>
      </ResourceSectionPage>
    </article>
  );
}
