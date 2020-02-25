import { createElement, safe } from 'complate-stream'

function ArrowRightDef () {
  return <symbol id="icon-arrow-right" viewBox="0 0 24 24"><defs><style>{`.cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;fill-rule:evenodd;}`}</style></defs><title>arrow-right-1</title><path class="cls-1" d="M5.5.75,16.22,11.47a.749.749,0,0,1,0,1.06L5.5,23.25"/></symbol>;
}

export function IconDefinitions () {
  return <svg class="icon-definitions" hidden>
    <defs>
      <ArrowRightDef />
    </defs>
  </svg>;
}

export default ({ symbol }) => <svg class="icon" role="presentation">
  {safe(`<use href="#${symbol}" xlink:href="#${symbol}"></use>`)}
</svg>;