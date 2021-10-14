export const FSMknod = () => {
  return {
    mknod (path: string, mode: any, dev: any, reply: any) {
      reply(0)
    }
  }
}