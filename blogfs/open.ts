export const FSOpen = () => {
  return {
    open (path: string, flags: any, reply: any) {
      reply(0, 42)
    }
  }
}
