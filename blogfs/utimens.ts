export const FSUtimens = () => {
  return {
    utimens(path: string, atime: any, mtime: any, reply: any) {
      reply(0)
    }
  }
}