import ReviewClient from "@/components/ReviewClient";

export default function ReviewPage({
  searchParams,
}: {
  searchParams: { technique?: string };
}) {
  return <ReviewClient initialTechnique={searchParams.technique ?? null} />;
}