export const FSReaddir = () => {
  return {
    readdir (path: string, reply: any) {
      reply(0, [])
    }
  }
}