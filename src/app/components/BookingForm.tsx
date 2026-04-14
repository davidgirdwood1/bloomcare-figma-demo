import { PrimaryButton } from "./PrimaryButton";

const inputClassName =
  "w-full rounded-2xl border border-border bg-input-background px-5 py-4 text-base text-foreground placeholder:text-muted-foreground/80 shadow-sm transition focus:border-[var(--bloom-sage)] focus:outline-none focus:ring-2 focus:ring-[var(--bloom-sage)]/30";

export function BookingForm() {
  return (
    <form className="space-y-6 rounded-[2rem] border border-border/80 bg-white p-8 shadow-lg sm:p-10">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-semibold text-foreground">
          Full Name
        </label>
        <input id="name" name="name" type="text" placeholder="Enter your name" className={inputClassName} />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-semibold text-foreground">
          Email Address
        </label>
        <input id="email" name="email" type="email" placeholder="you@example.com" className={inputClassName} />
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="block text-sm font-semibold text-foreground">
          Phone Number
        </label>
        <input id="phone" name="phone" type="tel" placeholder="(555) 000-0000" className={inputClassName} />
      </div>

      <PrimaryButton type="submit" className="w-full text-lg">
        Schedule Now
      </PrimaryButton>
    </form>
  );
}
