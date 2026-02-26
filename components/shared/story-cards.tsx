import { patientStories } from "@/data/patientStories";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function StoryCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {patientStories.map((story) => (
        <Card key={story.id} className="border-slate-200">
          <CardHeader className="space-y-2">
            <CardTitle className="text-base">{story.name}</CardTitle>
            <p className="text-xs uppercase tracking-[0.15em] text-cyan-700">{story.service}</p>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-600">
            <p>
              <span className="font-semibold text-slate-900">Challenge:</span> {story.challenge}
            </p>
            <p>
              <span className="font-semibold text-slate-900">Journey:</span> {story.journey}
            </p>
            <p>
              <span className="font-semibold text-slate-900">Outcome:</span> {story.outcome}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
