// @ts-ignore
export function isDesktop(context: any) {
    return (
    (context as any).$vuetify.breakpoint.lg ||
    (context as any).$vuetify.breakpoint.xl
  )
}