import { fireEvent, render, screen } from "@testing-library/react";
import { HardSkillsIconCarousel } from "./hard-skills-icon-carousel";
import {
  hardSkillCarouselIcons,
  hardSkillModalContentById,
  toolingSkillIds,
} from "@/mocks/home-page";

const escapeRegExp = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const getFirstSkillButton = (label: string) =>
  screen.getAllByRole("button", {
    name: new RegExp(`open ${escapeRegExp(label)} details`, "i"),
  })[0] as HTMLElement;

describe("HardSkillsIconCarousel", () => {
  it("covers modal flows and fallback content branches", () => {
    const modalContentMap = hardSkillModalContentById as Record<
      string,
      { role?: string; how?: string; impact?: string }
    >;

    const fallbackSkill = hardSkillCarouselIcons.find(
      (skill) => modalContentMap[skill.id],
    );
    const emptyContentSkill = hardSkillCarouselIcons.find(
      (skill) => skill.id !== fallbackSkill?.id && modalContentMap[skill.id],
    );
    const toolSkill = hardSkillCarouselIcons.find(
      (skill) =>
        skill.id !== fallbackSkill?.id &&
        skill.id !== emptyContentSkill?.id &&
        toolingSkillIds.has(skill.id),
    );

    expect(fallbackSkill).toBeDefined();
    expect(emptyContentSkill).toBeDefined();
    expect(toolSkill).toBeDefined();

    const fallbackOriginal = modalContentMap[fallbackSkill!.id];
    const emptyContentOriginal = modalContentMap[emptyContentSkill!.id];

    delete modalContentMap[fallbackSkill!.id];
    modalContentMap[emptyContentSkill!.id] = {
      role: undefined,
      how: undefined,
      impact: undefined,
    };

    try {
      render(<HardSkillsIconCarousel />);

      fireEvent.click(getFirstSkillButton(fallbackSkill!.label));
      expect(screen.getByRole("dialog")).toBeInTheDocument();
      expect(
        screen.getByText(
          new RegExp(`${escapeRegExp(fallbackSkill!.label)} is a core part`, "i"),
        ),
      ).toBeInTheDocument();
      fireEvent.click(screen.getByLabelText(/close technology modal/i));
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

      fireEvent.click(getFirstSkillButton(toolSkill!.label));
      expect(screen.getByText(/^tool$/i)).toBeInTheDocument();
      fireEvent.keyDown(window, { key: "Enter" });
      expect(screen.getByRole("dialog")).toBeInTheDocument();
      fireEvent.click(screen.getByRole("dialog").parentElement as HTMLElement);
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

      fireEvent.click(getFirstSkillButton(emptyContentSkill!.label));
      expect(screen.getByRole("dialog")).toBeInTheDocument();
      expect(screen.getByText(/how i use it/i)).toBeInTheDocument();
      fireEvent.keyDown(window, { key: "Escape" });
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    } finally {
      modalContentMap[fallbackSkill!.id] = fallbackOriginal;
      modalContentMap[emptyContentSkill!.id] = emptyContentOriginal;
    }
  });
});
