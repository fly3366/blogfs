import { EREMOTEIO } from "fuse-native"

export const FSWrite = () => {
  return {
    write (path: string, fd: any, buf: any, len: any, pos: any, reply: any) {
      reply(EREMOTEIO)
    }
  }
}