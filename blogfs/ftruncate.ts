export const FSFtruncate = () => {
  return {
    ftruncate (path: string, fd: any, size: any, reply: any) {
      reply(0)
    }
  }
}
