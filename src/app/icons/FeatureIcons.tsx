import type { SVGProps } from "react";

function IconBase(props: SVGProps<SVGSVGElement>) {
  return <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" {...props} />;
}

export function HeartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M12 20.25s-6.75-4.35-9-8.25a5.25 5.25 0 0 1 8.25-6 5.25 5.25 0 0 1 8.25 6c-2.25 3.9-9 8.25-9 8.25Z"
      />
    </IconBase>
  );
}

export function TeamIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M7.5 11.25a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm9 1.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM3.75 19.5v-.75a4.5 4.5 0 0 1 4.5-4.5h2.25a4.5 4.5 0 0 1 4.5 4.5v.75m1.5 0v-.75a3.75 3.75 0 0 1 3.75-3.75h.75"
      />
    </IconBase>
  );
}

export function ChartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M4.5 19.5h15M7.5 16.5V12m4.5 4.5V8.25m4.5 8.25v-6"
      />
    </IconBase>
  );
}
