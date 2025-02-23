export function marginBlock(isTailwind4: boolean, value: string) {
  return isTailwind4 ? `my-[${value}]` : `[margin-block:${value}]`;
}

export function marginInline(isTailwind4: boolean, value: string) {
  return isTailwind4 ? `mx-[${value}]` : `ms-[${value}] me-[${value}]`;
}

export function paddingBlock(isTailwind4: boolean, value: string) {
  return isTailwind4 ? `py-[${value}]` : `[padding-block:${value}]`;
}

export function paddingInline(isTailwind4: boolean, value: string) {
  return isTailwind4 ? `px-[${value}]` : `ps-[${value}] pe-[${value}]`;
}
