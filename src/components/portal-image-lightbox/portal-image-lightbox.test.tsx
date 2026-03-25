import { fireEvent, render, screen } from "@testing-library/react";
import { PortalImageLightbox } from "./portal-image-lightbox";
import { communicationProfilerLightboxImages } from "@/mocks/home-page";

describe("PortalImageLightbox", () => {
  it("opens and closes the portal modal", () => {
    const image = communicationProfilerLightboxImages[0];

    render(
      <PortalImageLightbox
        src={image?.src}
        alt={image?.alt ?? "preview"}
        hint={image?.hint ?? "preview"}
      />,
    );

    const openButton = screen.getByRole("button", {
      name: new RegExp(image?.hint ?? "preview", "i"),
    });

    fireEvent.click(openButton);
    expect(screen.getByLabelText(/close image preview/i)).toBeInTheDocument();

    fireEvent.keyDown(window, { key: "Enter" });
    expect(screen.getByLabelText(/close image preview/i)).toBeInTheDocument();

    const closeButton = screen.getByLabelText(/close image preview/i);
    const innerContainer = closeButton.nextElementSibling as HTMLElement;
    fireEvent.click(innerContainer);
    expect(screen.getByLabelText(/close image preview/i)).toBeInTheDocument();

    fireEvent.keyDown(window, { key: "Escape" });
    expect(screen.queryByLabelText(/close image preview/i)).not.toBeInTheDocument();

    fireEvent.click(openButton);
    const closeButtonByOverlay = screen.getByLabelText(/close image preview/i);
    fireEvent.click(closeButtonByOverlay.parentElement as HTMLElement);
    expect(screen.queryByLabelText(/close image preview/i)).not.toBeInTheDocument();

    fireEvent.click(openButton);
    fireEvent.click(screen.getByLabelText(/close image preview/i));
    expect(screen.queryByLabelText(/close image preview/i)).not.toBeInTheDocument();
  });
});
