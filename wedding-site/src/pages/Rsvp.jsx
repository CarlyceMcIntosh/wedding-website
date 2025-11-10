import { useMemo, useState } from "react";
import RsvpNavBar from "../components/RsvpNavBar";

const API_BASE =
  import.meta.env.VITE_API_BASE?.replace(/\/$/, "") || "http://localhost:5050";

export default function RSVP() {
  const [eventCode, setEventCode] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [result, setResult] = useState(null);

  const canSubmit = useMemo(() => {
    return (
      eventCode.trim().length > 0 &&
      firstName.trim().length > 0 &&
      lastName.trim().length > 0
    );
  }, [eventCode, firstName, lastName]);

  async function onSubmit(e) {
    e.preventDefault();
    if (!canSubmit || loading) return;

    setLoading(true);
    setErr("");
    setResult(null);

    try {
      const body = {
        eventCode: eventCode.trim(),
        firstName: firstName.trim(),
        lastName: lastName.trim(),
      };

      const res = await fetch(`${API_BASE}/api/lookup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        setErr(
          data?.error ||
            "We couldn’t find your invitation. Please check your info."
        );
      } else {
        setResult(data);
      }
    } catch (e) {
      setErr("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <RsvpNavBar />
      <main id="rsvp" className="pt-16">
        <section className="page-container py-16">
          <div className="mx-auto max-w-xl text-center">
            {/* Top Heading */}
            <h2 className="font-cinzel text-2xl text-sage-900">
              RSVP to Andrew &amp; Crystal’s Wedding
            </h2>
            <p className="mt-3 text-sage-800/80">
              We can’t wait to celebrate with you! Please enter the event code
              and your name as it appears on your invitation.
            </p>

            {/* Card with lookup form */}
            <div className="mt-8 rounded-2xl border border-sage-200 bg-white/80 shadow-sm backdrop-blur-sm px-6 py-7 sm:px-8 sm:py-8">
              <form onSubmit={onSubmit} className="space-y-4">
                {/* Event Code */}
                <div>
                  <label className="block text-xs font-semibold tracking-[0.22em] text-sage-700 uppercase">
                    Event Code
                  </label>
                  <input
                    value={eventCode}
                    onChange={(e) => setEventCode(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-sage-300 bg-white px-3 py-2 text-sage-900 outline-none focus:border-sage-500"
                    placeholder="e.g. MCINTOSH25"
                  />
                </div>

                {/* First Name */}
                <div>
                  <label className="block text-xs font-semibold tracking-[0.22em] text-sage-700 uppercase">
                    First Name
                  </label>
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-sage-300 bg-white px-3 py-2 text-sage-900 outline-none focus:border-sage-500"
                    placeholder="e.g. John"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-xs font-semibold tracking-[0.22em] text-sage-700 uppercase">
                    Last Name
                  </label>
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-sage-300 bg-white px-3 py-2 text-sage-900 outline-none focus:border-sage-500"
                    placeholder="e.g. Smith"
                  />
                </div>

                {err && (
                  <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                    {err}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={!canSubmit || loading}
                  className="w-full rounded-md bg-sage-600 px-4 py-2.5 text-center text-sm font-semibold text-ivory-50 shadow-sm hover:bg-sage-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Checking…" : "Find My Invitation"}
                </button>

                <p className="text-center text-xs text-sage-700/80">
                  Can’t find your invitation?{" "}
                  <a
                    className="font-semibold text-sage-800 underline underline-offset-4 hover:text-sage-900"
                    href="/contact"
                  >
                    Contact us
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
