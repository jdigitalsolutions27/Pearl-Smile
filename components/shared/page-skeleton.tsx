import { Skeleton } from "@/components/ui/skeleton";

export function PageSkeleton() {
  return (
    <div className="container space-y-6 py-10">
      <Skeleton className="h-10 w-64" />
      <Skeleton className="h-5 w-full max-w-2xl" />
      <div className="grid gap-4 md:grid-cols-3">
        <Skeleton className="h-56" />
        <Skeleton className="h-56" />
        <Skeleton className="h-56" />
      </div>
    </div>
  );
}
