import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@michmakow/application-platform-components";
import { profileHighlightCards } from "@/mocks/home-page";

export const HomeProfileHighlightsSection = () => (
  <section
    id="profile-highlights"
    className="flex min-h-0 flex-col gap-4"
  >
    {profileHighlightCards.map((item) => (
      <Card
        key={item.title}
        border
        glow
        rounded="3xl"
        className={`${item.className} h-52 shrink-0 overflow-hidden`}
      >
        <CardHeader className="h-full min-h-0 space-y-2 overflow-hidden">
          <CardTitle className="text-xl text-slate-50">{item.title}</CardTitle>
          <CardDescription className="text-sm leading-7 text-slate-100/90">
            {item.description}
          </CardDescription>
        </CardHeader>
      </Card>
    ))}
  </section>
);
