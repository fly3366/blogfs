export const FSStatfs = () => {
  return {
    statfs (path: string, reply: any) {
      const data = {
        bsize: 8,
        frsize: 0,
        blocks: 4096,
      bfree: 2048,
      bavail: 1024,
      files: 512,
      ffree: Number.MAX_SAFE_INTEGER,
      favail: Number.MAX_SAFE_INTEGER,
      fsid: 0,
      flag: 0,
      namemax: Number.MAX_SAFE_INTEGER
      }

      reply(0, data)
    }
  }
}