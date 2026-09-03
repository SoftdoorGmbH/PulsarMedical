import { useLocation } from "react-router-dom";
import { AudienceStepsTimelineSection } from "@/components/audience/AudienceStepsTimelineSection";
import { Button } from "@/components/Button";
import { HomeCta } from "@/components/home/HomeCta";
import {
  ABLAUF_RETURN_STORAGE_KEY,
  getAudienceReturnTarget,
  type AudienceReturnTarget,
} from "@/content/audiencePages";
import { PROCESS_PAGE } from "@/content/audienceSteps";

function readStoredReturnPath(): string | null {
  try {
    return sessionStorage.getItem(ABLAUF_RETURN_STORAGE_KEY);
  } catch {
    return null;
  }
}

function resolveReturnTarget(state: unknown): AudienceReturnTarget | null {
  const fromState =
    typeof state === "object" &&
    state !== null &&
    "from" in state &&
    typeof state.from === "string"
      ? state.from
      : null;
  const storedPath = readStoredReturnPath();

  return (
    (fromState ? getAudienceReturnTarget(fromState) : null) ??
    (storedPath ? getAudienceReturnTarget(storedPath) : null) ??
    (typeof document !== "undefined"
      ? getAudienceReturnTarget(document.referrer)
      : null)
  );
}

export function AblaufPage() {
  const { state } = useLocation();
  const returnTarget = resolveReturnTarget(state);

  return (
    <>
      <AudienceStepsTimelineSection
        {...PROCESS_PAGE}
        headingAs="h1"
        footer={
          returnTarget ? (
            <Button
              to={returnTarget.to}
              variant="secondary"
              fullWidth="sm"
              className="border border-pm-light-container-border shadow-sm"
            >
              {returnTarget.label}
            </Button>
          ) : null
        }
      />
      <HomeCta />
    </>
  );
}
