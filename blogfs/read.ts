import { EREMOTEIO } from 'fuse-native'

export const FSRead = () => {
  return {
    read(path: string, fd: any, buf: any, len: any, pos: any, reply: any) {
      reply(EREMOTEIO)
    }
  }
}