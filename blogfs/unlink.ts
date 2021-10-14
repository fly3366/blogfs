export const FSUnlink = () => {
  return {
    unlink (path: string, reply: any) {
      reply(0)
    }
  }
}
